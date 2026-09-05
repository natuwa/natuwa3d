"use client"

import { useState } from "react"

export default function BookNowPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    // Submit to Google Form
    HTMLFormElement.prototype.submit.call(form)

    // Show advance payment button after submission
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

              {/* EMAIL - NEW */}
              <input
                name="entry.1409320824"
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-md"
                required
              />

              {/* QUALITY - EXISTING */}
              <select
                name="entry.1834772149"
                className="w-full border p-3 rounded-md"
                required
              >
                <option value="">Select Quality</option>
                <option value="raw">
                  Raw Miniature
                </option>
                <option value="flat">
                  Flat Color Finish
                </option>
                <option value="premium">
                  Premium Detailed
                </option>
              </select>

              {/* SIZE - EXISTING */}
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

              {/* DATE - EXISTING */}
              <input
                name="entry.1361243778"
                type="date"
                className="w-full border p-3 rounded-md"
                required
              />

              {/* DELIVERY ADDRESS - EXISTING */}
              <textarea
                name="entry.1361398854"
                placeholder="Delivery Address"
                className="w-full border p-3 rounded-md"
                required
              ></textarea>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md"
              >
                Confirm Order →
              </button>

            </form>

            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
            ></iframe>
          </>
        ) : (
          /* AFTER FORM SUBMISSION */
          <div className="text-center py-8">

            <div className="text-4xl mb-4">
              🎉
            </div>

            <h2 className="text-2xl font-serif font-semibold mb-3">
              Order Details Submitted Successfully
            </h2>

            <p className="text-gray-600 text-sm mb-8">
              Your details have been submitted successfully.
              Please make the ₹500 advance payment to confirm your order.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.href = "https://rzp.io/rzp/Su5J66q"
              }}
              className="w-full bg-black text-white py-3 rounded-md"
            >
              Make Advance Payment ₹500 →
            </button>

            <p className="text-xs text-gray-500 mt-4">
              Your order will be confirmed after the advance payment is received.
            </p>

          </div>
        )}

      </div>
    </div>
  )
}
