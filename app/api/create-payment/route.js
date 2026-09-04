import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

export async function POST(request) {
  try {
    // ==========================================
    // CHECK LOGGED-IN CUSTOMER
    // ==========================================

    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    // ==========================================
    // CHECK ENVIRONMENT VARIABLES
    // ==========================================

    if (!APPS_SCRIPT_URL) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Apps Script URL is not configured.",
        },
        { status: 500 }
      );
    }

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: "Razorpay credentials are not configured.",
        },
        { status: 500 }
      );
    }

    // ==========================================
    // GET ORDER ID
    // ==========================================

    const body = await request.json();
    const orderId = String(body.orderId || "").trim();

    if (!orderId) {
      return NextResponse.json(
        {
          success: false,
          message: "Order ID is required.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // FETCH ORDERS FROM GOOGLE SHEET
    // ==========================================

    const dashboardUrl = APPS_SCRIPT_URL.includes("?")
      ? `${APPS_SCRIPT_URL}&action=dashboard`
      : `${APPS_SCRIPT_URL}?action=dashboard`;

    const response = await fetch(dashboardUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Google Apps Script returned HTTP ${response.status}`
      );
    }

    const rawData = await response.json();

    // ==========================================
    // NORMALIZE RESPONSE
    // ==========================================

    let allOrders = [];

    if (Array.isArray(rawData)) {
      allOrders = rawData;
    } else if (
      rawData &&
      typeof rawData === "object"
    ) {
      if (Array.isArray(rawData.orders)) {
        allOrders = rawData.orders;
      } else if (Array.isArray(rawData.data)) {
        allOrders = rawData.data;
      } else if (Array.isArray(rawData.result)) {
        allOrders = rawData.result;
      }
    }

    // ==========================================
    // CUSTOMER EMAIL
    // ==========================================

    const customerEmail = String(user.email || "")
      .trim()
      .toLowerCase();

    // ==========================================
    // FIND CUSTOMER'S ORDER
    // ==========================================

    const order = allOrders.find((item) => {
      const sheetOrderId = String(
        item["Order ID"] || ""
      ).trim();

      const sheetEmail = String(
        item["Email"] || ""
      )
        .trim()
        .toLowerCase();

      return (
        sheetOrderId === orderId &&
        sheetEmail === customerEmail
      );
    });

    if (!order) {
      return NextResponse.json(
        {
          success: false,
          message: "Order not found.",
        },
        { status: 404 }
      );
    }

    // ==========================================
    // CALCULATE ACTUAL REMAINING AMOUNT
    // ==========================================

    const totalAmount =
      Number(order["totalAmount"]) || 0;

    const advancePaid =
      Number(order["Advance Paid"]) || 0;

    const remainingAmount = Math.max(
      0,
      totalAmount - advancePaid
    );

    // ==========================================
    // CHECK PAYMENT STATUS
    // ==========================================

    if (remainingAmount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "This order is already fully paid.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // CREATE UNIQUE REFERENCE ID
    // ==========================================

    const referenceId =
      `${orderId}-BAL-${Date.now()}`.slice(0, 40);

    // ==========================================
    // CREATE RAZORPAY PAYMENT LINK
    // ==========================================

    const razorpayAuth = Buffer.from(
      `${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`
    ).toString("base64");

    const paymentResponse = await fetch(
      "https://api.razorpay.com/v1/payment_links",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${razorpayAuth}`,
        },

        body: JSON.stringify({
          amount: Math.round(remainingAmount * 100),

          currency: "INR",

          accept_partial: false,

          description:
            `NATUWA3D Remaining Payment - ${orderId}`,

          reference_id: referenceId,

          customer: {
            name:
              String(order["name"] || "").trim() ||
              "NATUWA3D Customer",

            contact:
              String(order["phone"] || "").trim(),

            email: customerEmail,
          },

          notes: {
            order_id: orderId,
            customer_email: customerEmail,
            payment_type: "remaining_payment",
          },

          reminder_enable: false,

          callback_url:
            `${
              process.env.NEXT_PUBLIC_SITE_URL ||
              "https://www.natuwa3d.com"
            }/payment-success?order_id=${encodeURIComponent(
              orderId
            )}`,

          callback_method: "get",
        }),
      }
    );

    const paymentData =
      await paymentResponse.json();

    // ==========================================
    // RAZORPAY ERROR
    // ==========================================

    if (!paymentResponse.ok) {
      console.error(
        "Razorpay Payment Link Error:",
        paymentData
      );

      return NextResponse.json(
        {
          success: false,
          message:
            paymentData?.error?.description ||
            "Unable to create Razorpay payment link.",
        },
        { status: 500 }
      );
    }

    // ==========================================
    // RETURN PAYMENT LINK
    // ==========================================

    return NextResponse.json({
      success: true,
      orderId: orderId,
      amount: remainingAmount,
      paymentLink: paymentData.short_url || "",
      paymentLinkId: paymentData.id || "",
      referenceId: referenceId,
    });

  } catch (error) {
    console.error(
      "Create remaining payment error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create payment.",
      },
      { status: 500 }
    );
  }
}