import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

export async function GET() {
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
        {
          status: 401,
        }
      );
    }

    // ==========================================
    // CHECK APPS SCRIPT URL
    // ==========================================

    if (!APPS_SCRIPT_URL) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Apps Script URL is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // ==========================================
    // FETCH GOOGLE SHEET DATA
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

    // Read response as TEXT first
    const rawText = await response.text();

    // ==========================================
    // DEBUG RAW RESPONSE
    // ==========================================

    console.log(
      "APPS SCRIPT RAW RESPONSE:",
      rawText.slice(0, 3000)
    );

    // ==========================================
    // CONVERT RESPONSE TO JSON
    // ==========================================

    let rawData: unknown;

    try {
      rawData = JSON.parse(rawText);
    } catch {
      throw new Error(
        "Google Apps Script did not return valid JSON. Response: " +
          rawText.slice(0, 500)
      );
    }

    // ==========================================
    // DEBUG PARSED DATA
    // ==========================================

    console.log(
      "APPS SCRIPT RAW DATA:",
      JSON.stringify(rawData).slice(0, 3000)
    );

    // ==========================================
    // NORMALIZE RESPONSE
    // ==========================================

    let allOrders: Record<string, unknown>[] = [];

    if (Array.isArray(rawData)) {
      // Normal Apps Script response
      allOrders = rawData as Record<string, unknown>[];
    } else if (
      rawData &&
      typeof rawData === "object"
    ) {
      const responseObject =
        rawData as Record<string, unknown>;

      // { orders: [...] }
      if (Array.isArray(responseObject.orders)) {
        allOrders =
          responseObject.orders as Record<string, unknown>[];
      }

      // { data: [...] }
      else if (Array.isArray(responseObject.data)) {
        allOrders =
          responseObject.data as Record<string, unknown>[];
      }

      // { result: [...] }
      else if (Array.isArray(responseObject.result)) {
        allOrders =
          responseObject.result as Record<string, unknown>[];
      }
    }

    // ==========================================
    // CUSTOMER EMAIL
    // ==========================================

    const customerEmail = String(user.email || "")
      .trim()
      .toLowerCase();

    // ==========================================
    // DEBUG
    // ==========================================

    console.log(
      "CUSTOMER AUTH EMAIL:",
      JSON.stringify(customerEmail)
    );

    console.log(
      "APPS SCRIPT RESPONSE TYPE:",
      Array.isArray(rawData)
        ? "ARRAY"
        : typeof rawData
    );

    console.log(
      "TOTAL SHEET ORDERS:",
      allOrders.length
    );

    // ==========================================
    // DEBUG SHEET EMAILS
    // ==========================================

    if (allOrders.length > 0) {
      console.log(
        "SHEET EMAILS:",
        allOrders.map((order) =>
          String(order["Email"] || "")
            .trim()
            .toLowerCase()
        )
      );
    }

    // ==========================================
    // FILTER ONLY LOGGED-IN CUSTOMER ORDERS
    // ==========================================

    const customerOrders = allOrders
      .filter((order) => {
        const orderEmail = String(
          order["Email"] || ""
        )
          .trim()
          .toLowerCase();

        return orderEmail === customerEmail;
      })
      .map((order) => {
        // ==========================================
        // PAYMENT CALCULATION
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
        // ORDER OBJECT
        // ==========================================

        return {
          orderId:
            order["Order ID"] || "",

          status:
            order["Status"] || "",

          lastUpdate:
            order["Last Update"] || "",

          totalAmount,

          advancePaid,

          remainingAmount,

          trackingNo:
            order["Tracking No"] || "",

          courier:
            order["Courier"] || "",

          estimatedPrintingTime:
            order["Estimated Printing Time"] || "",

          estimatedPaintingTime:
            order["Estimated Painting Time"] || "",

          eventDate:
            order["Event Date"] || "",

          size:
            order["Size"] || "",

          quality:
            order["Quality"] || "",
        };
      });

    // ==========================================
    // DEBUG RESULT
    // ==========================================

    console.log(
      "CUSTOMER ORDERS FOUND:",
      customerOrders.length
    );

    // ==========================================
    // RETURN CUSTOMER ORDERS
    // ==========================================

    return NextResponse.json({
      success: true,
      orders: customerOrders,
    });
  } catch (error) {
    // ==========================================
    // ERROR HANDLING
    // ==========================================

    console.error(
      "Customer orders error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : String(error),
      },
      {
        status: 500,
      }
    );
  }
}