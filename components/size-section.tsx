import Image from "next/image"
export default function Home() {
  return (
    <section className="py-16 bg-[#f8f5f2] text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Choose Your Perfect Size
      </h2>
      <p className="mt-2 text-xs text-gray-400">
        (Shown in hand for better size understanding)
      </p>

      <p className="text-gray-600 mb-10">
        Available in 4, 6, 8, 10 & 12 inches — crafted to match your space and style
      </p>

      <div className="flex justify-center">
        <Image
          src="/images/size guideline.jpg"
          alt="Miniature Size"
          width={1400}
          height={600}
        />
      </div>
      <p className="mt-6 text-sm text-gray-500 text-center">
        All sizes maintain same quality & detailing — only the scale changes.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 text-sm">

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
  );
}
