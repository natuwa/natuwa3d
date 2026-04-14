"use client"

export default function BookNowPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] py-16 px-4">
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        
        <h1 className="text-3xl font-serif font-semibold text-center mb-6">
          Book Your Miniature
        </h1>

        <p className="text-sm text-gray-500 text-center mb-8">
          Fill the details below to place your order
        </p>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdaM7mAU168xh7dTcrB3SIVA8l_BA2mlFlMo5VNRItL8mBB4A/formResponse"
          method="POST"
          target="hidden_iframe"
          onSubmit={() => alert("Order Submitted Successfully 🎉")}
          className="space-y-4"
        >

          <input
            name="entry.1221928907"
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-md"
            required
          />

          <input
            name="entry.167600853"
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-md"
            required
          />

          <select
            name="entry.1834772149"
            className="w-full border p-3 rounded-md"
            required
          >
            <option value="">Select Quality</option>
            <option value="raw">Raw Miniature</option>
            <option value="flat">Flat Color Finish</option>
            <option value="premium">Premium Detailed</option>
          </select>

          <select
            name="entry.627069154"
            className="w-full border p-3 rounded-md"
            required
          >
            <option value="">Select Size</option>
            <option value="4">4 Inch</option>
            <option value="6">6 Inch</option>
            <option value="8">8 Inch</option>
            <option value="10">10 Inch</option>
            <option value="12">12 Inch</option>
          </select>

          <input
            name="entry.1361243778"
            type="date"
            className="w-full border p-3 rounded-md"
            required
          />

          <textarea
            name="entry.1361398854"
            placeholder="Delivery Address"
            className="w-full border p-3 rounded-md"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md"
          >
            Submit Order
          </button>

        </form>

        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

      </div>
    </div>
  )
}
