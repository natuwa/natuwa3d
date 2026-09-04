import Link from "next/link";

type PaymentSuccessPageProps = {
  searchParams: Promise<{
    order_id?: string;
  }>;
};

export default async function PaymentSuccessPage({
  searchParams,
}: PaymentSuccessPageProps) {
  const params = await searchParams;
  const orderId = params?.order_id || "";

  return (
    <main className="min-h-screen bg-[#f8f5f2] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
        
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <span className="text-4xl">✓</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
          Payment Submitted Successfully
        </h1>

        <p className="mt-4 text-gray-600 leading-7">
          Thank you for your payment. Your payment is being verified and
          your order details will be updated shortly.
        </p>

        {orderId && (
          <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm text-gray-500">
              Order ID
            </p>

            <p className="mt-1 text-xl font-semibold text-gray-900">
              {orderId}
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">
          Please check your account page after a short while to see the
          updated payment balance.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/account"
            className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
          >
            Go to My Account
          </Link>

          <a
            href="https://wa.me/918796289333"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 transition"
          >
            Contact on WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}