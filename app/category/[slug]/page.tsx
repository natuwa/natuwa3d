"use client"

import Image from "next/image"
import { useState } from "react"

export async function generateMetadata({ params }: any) {
  const title = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c: string) => c.toUpperCase())

  return {
    title: `${title} | NATUWA3D`,
    description: `Order ${title} 3D printed miniatures in India.`,
  }
}

const categoryData: any = {
  "wedding-miniatures": {
    title: "Wedding Miniatures",
    basePrice: 2999,
    description: "Capture your wedding memories in stunning 3D miniatures.",
    image: "/images/hero-couple.jpg"
  },
  "couple-miniatures": {
    title: "Couple Miniatures",
    basePrice: 2499,
    description: "Perfect gift for couples and anniversaries.",
    image: "/images/miniature-a.jpg"
  }
}

export default function CategoryPage({ params }: any) {
  const data = categoryData[params.slug]

  const [size, setSize] = useState("4 inch")
  const [file, setFile] = useState<File | null>(null)

  if (!data) {
    return <div className="p-10 text-center">Category not found</div>
  }

  // Price logic
  const priceMap: any = {
    "4 inch": data.basePrice,
    "6 inch": data.basePrice + 1000,
    "8 inch": data.basePrice + 2000,
  }

  const finalPrice = priceMap[size]

  return (
    <div className="min-h-screen bg-[#f8f5f2] py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>

          {/* Breadcrumb */}
          <p className="text-sm text-muted-foreground mb-4">
            Home / {data.title}
          </p>

          {/* Title */}
          <h1 className="text-4xl font-serif font-bold mb-4">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            {data.description}
          </p>

          {/* PRICE */}
          <p className="text-2xl font-semibold text-primary mb-6">
            ₹{finalPrice}
          </p>

          {/* SIZE SELECT */}
          <div className="mb-6">
            <p className="mb-2 font-medium">Select Size:</p>
            <div className="flex gap-3">
              {["4 inch", "6 inch", "8 inch"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-lg border ${
                    size === s
                      ? "bg-primary text-white"
                      : "bg-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* IMAGE UPLOAD */}
          <div className="mb-6">
            <p className="mb-2 font-medium">Upload Your Photo:</p>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="border p-2 rounded-lg w-full"
            />
          </div>

          {/* FEATURES */}
          <ul className="mb-6 text-muted-foreground space-y-3">
            <li>✨ High-quality 3D printing</li>
            <li>🎨 Premium finishing</li>
            <li>🚚 Delivery in 7–10 days</li>
          </ul>

          {/* WHATSAPP CTA */}
          <a
            href={`https://wa.me/919560672813?text=${encodeURIComponent(
              `Hi, I want to order ${data.title} (${size}) - ₹${finalPrice}`
            )}`}
            target="_blank"
          >
            <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
              Order on WhatsApp
            </button>
          </a>

        </div>

      </div>
    </div>
  )
}
