import { NextResponse } from "next/server";
import crypto from "crypto";

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;
const REMAINING_PAYMENT_SECRET =
  process.env.REMAINING_PAYMENT_SECRET;

export async function POST(request) {
  try {
    // 1. Check environment variables
    if (!WEBHOOK_SECRET) {
      console.error("RAZORPAY_WEBHOOK_SECRET is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Webhook secret is not configured.",
        },
        { status: 500 }
      );
    }

    if (!APPS_SCRIPT_URL) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Google Apps Script URL is not configured.",
        },
        { status: 500 }
      );
    }

    if (!REMAINING_PAYMENT_SECRET) {
      console.error(
        "REMAINING_PAYMENT_SECRET is not configured."
      );

      return NextResponse.json(
        {
          success: false,
          message: "Remaining payment secret is not configured.",
        },
        { status: 500 }
      );
    }

    // 2. Read RAW body
    // Razorpay signature must be checked against the raw body.
    const rawBody = await request.text();

    // 3. Get Razorpay signature
    const razorpaySignature =
      request.headers.get("x-razorpay-signature");

    if (!razorpaySignature) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing webhook signature.",
        },
        { status: 400 }
      );
    }

    // 4. Verify Razorpay webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex");

    const receivedBuffer = Buffer.from(
      razorpaySignature,
      "utf8"
    );

    const expectedBuffer = Buffer.from(
      expectedSignature,
      "utf8"
    );

    if (
      receivedBuffer.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(
        receivedBuffer,
        expectedBuffer
      )
    ) {
      console.error("========== RAZORPAY SIGNATURE DEBUG ==========");
      console.error("Received signature length:", razorpaySignature.length);
      console.error("Expected signature length:", expectedSignature.length);
      console.error("Raw body length:", rawBody.length);
      console.error("Webhook secret configured:", Boolean(WEBHOOK_SECRET));
      console.error("Webhook secret length:", WEBHOOK_SECRET.length);
      console.error("==============================================");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid webhook signature.",
        },
        { status: 401 }
      );
    }

    // 5. Parse JSON only after signature verification
    let payload;

    try {
      payload = JSON.parse(rawBody);
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid webhook payload.",
        },
        { status: 400 }
      );
    }

    // 6. Identify event
    const event = String(payload?.event || "");

    console.log("Razorpay webhook received:", event);

    // 7. Only process payment_link.paid
    if (event !== "payment_link.paid") {
      return NextResponse.json(
        {
          success: true,
          message: "Event ignored.",
          event,
        },
        { status: 200 }
      );
    }

    // 8. Extract entities
    const paymentLink =
      payload?.payload?.payment_link?.entity;

    const payment =
      payload?.payload?.payment?.entity;

    if (!paymentLink) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment Link information missing.",
        },
        { status: 400 }
      );
    }

    // 9. Verify captured payment
    const paymentStatus =
      String(payment?.status || "").toLowerCase();

    if (
      paymentStatus &&
      paymentStatus !== "captured"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment is not captured.",
        },
        { status: 400 }
      );
    }

    // 10. Get Order ID from Payment Link notes
    let orderId = String(
      paymentLink?.notes?.order_id || ""
    ).trim();

    // Fallback to reference_id
    if (!orderId) {
      const referenceId = String(
        paymentLink?.reference_id || ""
      ).trim();

      const match = referenceId.match(/^(NT\d+)/i);

      if (match) {
        orderId = match[1];
      }
    }

    if (!orderId) {
      return NextResponse.json(
        {
          success: false,
          message: "Order ID not found in payment information.",
        },
        { status: 400 }
      );
    }

    // 11. Get payment amount
    const paymentAmountPaise = Number(
      payment?.amount_captured ||
        payment?.amount ||
        paymentLink?.amount_paid ||
        0
    );

    const paymentLinkAmountPaise = Number(
      paymentLink?.amount || 0
    );

    if (
      !Number.isFinite(paymentAmountPaise) ||
      paymentAmountPaise <= 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment amount.",
        },
        { status: 400 }
      );
    }

    // 12. Verify amount matches Payment Link
    if (
      paymentLinkAmountPaise > 0 &&
      paymentAmountPaise !== paymentLinkAmountPaise
    ) {
      console.error("Payment amount mismatch.", {
        paymentAmountPaise,
        paymentLinkAmountPaise,
      });

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment amount does not match Payment Link amount.",
        },
        { status: 400 }
      );
    }

    const paymentAmount =
      paymentAmountPaise / 100;

    // 13. Get Razorpay Payment ID
    const paymentId = String(
      payment?.id ||
        paymentLink?.payments?.[0]?.payment_id ||
        ""
    ).trim();

    if (!paymentId) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment ID missing from webhook.",
        },
        { status: 400 }
      );
    }

    // 14. Send verified payment to Google Apps Script
    const appsScriptPayload = {
      action: "recordRemainingPayment",
      secret: REMAINING_PAYMENT_SECRET,
      paymentId: paymentId,
      orderId: orderId,
      amount: paymentAmount,
    };

    const appsScriptResponse = await fetch(
      APPS_SCRIPT_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appsScriptPayload),
        cache: "no-store",
      }
    );

    const appsScriptText =
      await appsScriptResponse.text();

    let appsScriptResult;

    try {
      appsScriptResult =
        JSON.parse(appsScriptText);
    } catch (error) {
      console.error(
        "Google Apps Script returned non-JSON:",
        appsScriptText
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Google Apps Script returned an invalid response.",
        },
        { status: 502 }
      );
    }

    // 15. Handle Apps Script result
    if (!appsScriptResult?.success) {
      console.error(
        "Google Apps Script payment update failed:",
        appsScriptResult
      );

      return NextResponse.json(
        {
          success: false,
          message:
            appsScriptResult?.message ||
            "Unable to update payment in Google Sheet.",
        },
        { status: 500 }
      );
    }

    // 16. Success
    console.log(
      "Remaining payment successfully recorded:",
      {
        orderId,
        paymentId,
        paymentAmount,
        advancePaid:
          appsScriptResult.advancePaid,
        remainingAmount:
          appsScriptResult.remainingAmount,
      }
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Remaining payment recorded successfully.",
        orderId,
        paymentId,
        paymentAmount,
        advancePaid:
          appsScriptResult.advancePaid,
        remainingAmount:
          appsScriptResult.remainingAmount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Razorpay webhook error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Webhook processing failed.",
      },
      { status: 500 }
    );
  }
}