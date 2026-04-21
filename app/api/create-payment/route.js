import Razorpay from "razorpay"

export async function POST(req) {
  try {
    const body = await req.json()

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    const paymentLink = await razorpay.paymentLink.create({
      amount: 50000,
      currency: "INR",
      description: "3D Miniature Advance",
      customer: {
        name: body.name,
        contact: body.phone,
      },
      notify: {
        sms: true,
        email: false,
      },
    })

    return Response.json({ url: paymentLink.short_url })

  } catch (err) {
    console.error(err)
    return Response.json({ error: "Something went wrong" }, { status: 500 })
  }
}
