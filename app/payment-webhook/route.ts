import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  try {
    const payment = data.payload.payment.entity;

    const amount = payment.amount / 100;
    const phone = "91XXXXXXXXXX"; // apna WhatsApp number

    const message = `💰 Payment Received!\nAmount: ₹${amount}\nNew order aaya hai 🚀`;

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=YOUR_API_KEY`;

    await fetch(url);

    return NextResponse.json({ status: "ok" });

  } catch (error) {
    return NextResponse.json({ error: "error" });
  }
}
