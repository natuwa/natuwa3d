```tsx
"use client"

import { useState } from "react"

export default function BookNowPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    // Submit the form to Google Forms
    HTMLFormElement.prototype.submit.call(form)

    // Show payment button after Google Form submission starts
    setTimeout(() => {
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#f8f5f2] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-3xl font-serif font-semibold text-center mb-6">
          Book Your Miniature
        </h1>

        {!submitted ? (
          <>
            <p className="text-sm text-gray-500 text-center mb-8">
              Fill the details below to place your order
            </p>

            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdaM7mAU168xh7dTcrB3SIVA8l_BA2mlFlMo5VNRItL8mBB4A/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name */}
              <input
                name="entry.1221928907"
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-md"
                required
              />

              {/* Phone */}
              <input
                name="entry.167600853"
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-md"
                required
              />

              {/* Quality */}
              <select
                name="entry.1834772149"
                className="w-full border p-3 rounded-md"
                required
              >
                <option value="">Select Quality</option>
                <option value="RAw(without Color)">
                  Raw (without Color)
                </option>
                <option value="Premium(With Color)">
                  Premium (With Color)
                </option>
              </select>

              {/* Size */}
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

              {/* Expected Delivery Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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

              {/* Delivery Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address
                </label>

                <p className="text-xs text-gray-500 mb-2">
                  Please enter your complete delivery address along with
                  your 6-digit pincode.
                </p>

                <textarea
                  name="entry.1361398854"
                  placeholder="House/Flat No., Street, Area, City, State, Pincode"
                  className="w-full border p-3 rounded-md min-h-[110px]"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md"
              >
                Confirm Order →
              </button>

            </form>

            {/* Hidden Google Forms iframe */}
            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
            ></iframe>
          </>
        ) : (
          /* Payment Section */
          <div className="text-center py-8">

            <div className="text-4xl mb-4">
              🎉
            </div>

            <h2 className="text-2xl font-serif font-semibold mb-3">
              Order Details Submitted Successfully
            </h2>

            <p className="text-gray-600 text-sm mb-8">
              Your details have been submitted successfully.
              Please make the ₹500 advance payment to confirm your
              miniature order.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.href =
                  "https://rzp.io/rzp/Su5J66q"
              }}
              className="w-full bg-black text-white py-3 rounded-md"
            >
              Make Advance Payment ₹500 →
            </button>

            <p className="text-xs text-gray-500 mt-4">
              Your order will be confirmed after the advance payment
              is received.
            </p>

          </div>
        )}

      </div>
    </div>
  )
}
```
