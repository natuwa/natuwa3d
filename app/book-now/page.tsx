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
          onSubmit={(e) => {
            e.preventDefault()

            const form = e.currentTarget

            // Submit data to Google Form
            form.submit()

            // Existing payment flow kept unchanged
            alert(
              "Order Submitted Successfully 🎉\n\nNow Make Advance Payment to confirm Your Miniature Order 💳"
            )

            // Redirect to existing ₹500 payment link
            setTimeout(() => {
              window.location.href = "https://rzp.io/rzp/Su5J66q"
            }, 1000)
          }}
          className="space-y-4"
        >

          {/* NAME */}
          <input
            name="entry.1221928907"
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-md"
            required
          />

          {/* PHONE */}
          <input
            name="entry.167600853"
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-md"
            required
          />

          {/* EMAIL */}
          <input
            name="entry.1409320824"
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-md"
            required
          />

          {/* QUALITY */}
          <select
            name="entry.1834772149"
            className="w-full border p-3 rounded-md"
            required
          >
            <option value="">Select Quality</option>
            <option value="RAw(without Color)">
              Raw (without Color)
            </option>
            <option value="Flat Color">
              Flat Color Finish
            </option>
            <option value="Premium Detailed">
              Premium Detailed
            </option>
          </select>

          {/* SIZE */}
          <select
            name="entry.627069154"
            className="w-full border p-3 rounded-md"
            required
          >
            <option value="">Select Size</option>
            <option value="4 inch">4 Inch</option>
            <option value="6 inch">6 Inch</option>
            <option value="8 inch">8 Inch</option>
            <option value="10 inch">10 Inch</option>
            <option value="12 inch">12 Inch</option>
          </select>

          {/* EXPECTED DELIVERY DATE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Delivery Date
            </label>

            <p className="text-xs text-gray-500 mb-2">
              Please select the date by which you need to receive your
              miniature.
            </p>

            <input
              name="entry.1361243778"
              type="date"
              className="w-full border p-3 rounded-md"
              required
            />
          </div>

          {/* DELIVERY ADDRESS */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Address
            </label>

            <textarea
              name="entry.1361398854"
              placeholder="Enter your complete delivery address"
              className="w-full border p-3 rounded-md min-h-[110px]"
              required
            ></textarea>
          </div>

          {/* PINCODE */}
          <input
            name="entry.1360570871"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            placeholder="Pincode"
            className="w-full border p-3 rounded-md"
            required
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md"
          >
            Confirm Order & Pay ₹500 →
          </button>

        </form>

        <iframe
          name="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>

      </div>
    </div>
  )
}
