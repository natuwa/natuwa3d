import { NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby7HnYojREucqhi60SYEpvXnrYR7XGnzrkY0SEloPKgXquVDqquqqtIXpsSawRj8YD0/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const secret =
      process.env.REMAINING_PAYMENT_SECRET;

    if (!secret) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Payment secret is not configured on server.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "recordRemainingPayment",
        orderId: data.orderId,
        paymentId: data.paymentId,
        amount: data.amount,
        secret,
      }),
      cache: "no-store",
    });

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Payment API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Payment update failed.",
      },
      { status: 500 }
    );
  }
}
