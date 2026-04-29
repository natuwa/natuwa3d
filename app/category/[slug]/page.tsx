"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const categoryData: any = {
  "romantic-couple": {
    title: "Romantic Couple Miniature",
    image: "/images/romantic.jpg",
    basePrice: 2999,
  },
}

export default function CategoryPage({ params }: any) {
  const data = categoryData[params.slug]

  const [selectedSize, setSelectedSize] = useState("4 inch")
  const [uploadedImage, setUploadedImage] = useState<any>(null)

  const priceMap: any = {
    "4 inch": data.basePrice,
    "6 inch": data.basePrice + 1000,
    "8 inch": data.basePrice + 2000,
  }

  const price = priceMap[selectedSize]

  if (!data) return <div>Not Found</div>

  return (
    <div className="min-h-screen bg-[#f8f5f2] px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div>
          <Image
            src={data.image}
            alt={data.title}
            width={600}
            height={600}
            className="rounded-2xl"
          />
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-3xl font-serif font-bold mb-4">
            {data.title}
          </h1>

          {/* SIZE */}
          <div className="mb-6">
            <p className="mb-2 font-medium">Select Size:</p>

            <div className="flex gap-3">
              {["4 inch", "6 inch", "8 inch"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <p className="text-2xl font-semibold text-primary mb-6">
            ₹{price}
          </p>

          {/* IMAGE UPLOAD */}
          <div className="mb-6">
            <p className="mb-2 font-medium">Upload Your Photo:</p>

            <input
              type="file"
              accept="image/*"
              onChange={(e: any) =>
                setUploadedImage(e.target.files[0])
              }
            />

            {uploadedImage && (
              <p className="text-green-600 text-sm mt-2">
                Image uploaded ✔
              </p>
            )}
          </div>

          {/* CTA */}
          <Link href={`/book-now?size=${selectedSize}&price=${price}`}>
            <button className="bg-primary text-white px-6 py-3 rounded-lg">
              Book Now
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}
