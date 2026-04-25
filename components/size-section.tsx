import Image from "next/image"

export default function Home() {
  return (
    <section className="py-16 bg-[#f8f5f2] text-center px-4">

      <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-[#2c1f1a] mb-4">
        Choose Your Perfect Size
      </h2>

      <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
        Available in 4, 6, 8, 10 & 12 inches — crafted to match your space and style
      </p>

      <p className="text-xs text-gray-400 mb-5">
        (Shown in hand for better size understanding)
      </p>

      {/* IMAGE */}
      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <Image
            src="/images/sizeGuideline.jpg"
            alt="Miniature Size Guide"
            width={1200}
            height={600}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* MOBILE + DESKTOP SIZE LABELS */}
      <div className="grid grid-cols-5 gap-2 mt-3 max-w-5xl mx-auto text-center">

        <div>
          <h3 className="text-[11px] md:text-base font-semibold text-gray-900">
            4"
          </h3>
          <p className="text-[10px] md:text-sm text-gray-500">
            Palm Fit
          </p>
        </div>

        <div>
          <h3 className="text-[11px] md:text-base font-semibold text-gray-900">
            6"
          </h3>
          <p className="text-[10px] md:text-sm text-gray-500">
            Popular
          </p>
        </div>

        <div>
          <h3 className="text-[11px] md:text-base font-semibold text-gray-900">
            8"
          </h3>
          <p className="text-[10px] md:text-sm text-gray-500">
            Detailed
          </p>
        </div>

        <div>
          <h3 className="text-[11px] md:text-base font-semibold text-gray-900">
            10"
          </h3>
          <p className="text-[10px] md:text-sm text-gray-500">
            Bold Look
          </p>
        </div>

        <div>
          <h3 className="text-[11px] md:text-base font-semibold text-gray-900">
            12"
          </h3>
          <p className="text-[10px] md:text-sm text-gray-500">
            Premium
          </p>
        </div>

      </div>

      <p className="mt-6 text-base text-gray-500 max-w-2xl mx-auto">
        All sizes maintain the same quality & detailing — only the scale changes.
      </p>

    </section>
  )
}
