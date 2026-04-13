import Image from "next/image"
export default function Home() {
  return (
    <section className="py-16 bg-[#f8f5f2] text-center">
      
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Choose Your Perfect Size
      </h2>

      <p className="text-gray-500 text-lg mb-10">
        Available in 4, 6, 8, 10 & 12 inches — crafted to match your space and style
      </p>

      {/* IMAGE */}
       <div className="flex justify-center">
        <div className="relative w-full max-w-5xl">
          
          <Image
            src="/images/size-guideline.jpg"
            alt="Miniature Size"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
      
          <p className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-gray-800 bg-white/90 backdrop-blur px-4 py-1 rounded-full shadow">
            (Shown in hand for better size understanding)
          </p>
      
        </div>
      </div>

      <p className="mt-6 text-base text-gray-500">
        All sizes maintain same quality & detailing — only the scale changes.
      </p>

      {/* SIZES */}
      <div className="grid grid-cols-5 gap-4 mt-10 max-w-5xl mx-auto text-sm">
        
        <div>
          <h3 className="text-base font-medium text-gray-900">4 Inch</h3>
          <p className="text-sm text-gray-500 mt-1">Fits easily in your palm</p>
        </div>

        <div>
          <h3 className="text-base font-medium text-gray-900">6 Inch ⭐</h3>
          <p className="text-sm text-gray-500 mt-1">Slightly bigger, most preferred</p>
        </div>

        <div>
          <h3 className="text-base font-medium text-gray-900">8 Inch</h3>
          <p className="text-sm text-gray-500 mt-1">Balanced size with clear detailing</p>
        </div>

        <div>
          <h3 className="text-base font-medium text-gray-900">10 Inch</h3>
          <p className="text-sm text-gray-500 mt-1">Bigger presence, eye-catching</p>
        </div>

        <div className="border-2 border-black rounded-lg p-2 bg-white shadow-md">
          <h3 className="text-base font-medium text-gray-900">12 Inch 👑</h3>
          <p className="text-sm text-gray-500 mt-1">Premium large display piece</p>
        </div>

      </div>

    </section>
  )
}
