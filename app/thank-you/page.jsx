"use client";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] flex items-center justify-center px-4">
      
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg text-center">
        
        {/* Success Icon */}
        <div className="text-green-500 text-5xl mb-4">✔</div>

        {/* Heading */}
        <h1 className="text-3xl font-serif font-semibold mb-3">
          Payment Successful 🎉
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your order has been successfully placed.  
          Our team will contact you within 24 hours to start your miniature.
        </p>

        {/* Important Instruction */}
        <div className="bg-[#f1ebe5] p-4 rounded-lg mb-6 text-sm text-gray-700">
          📸 Please send your photos on WhatsApp to proceed with your order.
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919554069828"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 text-white py-3 rounded-lg mb-4"
        >
          Send Photos on WhatsApp
        </a>

        {/* Back to Home */}
        <a
          href="/"
          className="text-sm text-gray-500 underline"
        >
          Back to Home
        </a>

      </div>

    </div>
  );
}
