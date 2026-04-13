import Image from "next/image"
export default function Home() {
  return (
    <section className="py-16 bg-[#f8f5f2] text-center">
      
      <h2 className="text-3xl font-semibold mb-4">
        Choose Your Perfect Size
      </h2>

      <p className="text-gray-600 mb-8">
        Available in 4, 6, 8, 10 & 12 inches — crafted to match your space and style
      </p>

      {/* IMAGE */}
      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <img
            src="/images/size guideline.jpg"
            alt="Miniature Size"
            className="w-full h-auto"
          />
        </div>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        (Shown in hand for better size understanding)
      </p>

      <p className="mt-6 text-sm text-gray-500">
        All sizes maintain same quality & detailing — only the scale changes.
      </p>

      {/* SIZES */}
      <div className="grid grid-cols-5 gap-4 mt-10 max-w-5xl mx-auto text-sm">
        
        <div>
          <h3 className="font-semibold">4 Inch</h3>
          <p className="text-gray-500">Fits easily in your palm</p>
        </div>

        <div>
          <h3 className="font-semibold">6 Inch ⭐</h3>
          <p className="text-gray-500">Slightly bigger, most preferred</p>
        </div>

        <div>
          <h3 className="font-semibold">8 Inch</h3>
          <p className="text-gray-500">Balanced size with clear detailing</p>
        </div>

        <div>
          <h3 className="font-semibold">10 Inch</h3>
          <p className="text-gray-500">Bigger presence, eye-catching</p>
        </div>

        <div className="border-2 border-black rounded-lg p-2 bg-white shadow-md">
          <h3 className="font-semibold">12 Inch 👑</h3>
          <p className="text-gray-500">Premium large display piece</p>
        </div>

      </div>

    </section>
  )
}
