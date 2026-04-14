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

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-md"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-md"
          />

          <select className="w-full border p-3 rounded-md">
            <option>Select Quality</option>
            <option>Raw Miniature</option>
            <option>Flat Color Finish</option>
            <option>Premium Detailed</option>
          </select>

          <select className="w-full border p-3 rounded-md">
            <option>Select Size</option>
            <option>4 Inch</option>
            <option>6 Inch</option>
            <option>8 Inch</option>
            <option>10 Inch</option>
            <option>12 Inch</option>
          </select>

          <input
            type="date"
            className="w-full border p-3 rounded-md"
          />

          <textarea
            placeholder="Delivery Address"
            className="w-full border p-3 rounded-md"
          ></textarea>

          <button className="w-full bg-black text-white py-3 rounded-md">
            Submit Order
          </button>

        </form>

      </div>
    </div>
  )
}
