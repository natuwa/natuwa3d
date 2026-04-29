"use client"

import Image from "next/image"
import { useState } from "react"

type Category = {
  title: string
  basePrice: number
  description: string
  image: string
}

export default function CategoryClient({ data }: { data: Category }) {
  const [size, setSize] = useState("4 inch")

  const priceMap = {
    "4 inch": data.basePrice,
    "6 inch": data.basePrice + 1000,
    "8 inch": data.basePrice + 2000,
  }

  const finalPrice = priceMap[size as keyof typeof priceMap]

  return (
    <div className="min-h-screen bg-[#f8f5f2] py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="relative w-full h-[400px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-serif font-bold mb-4">
            {data.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-4">
            {data.description}
          </p>

          <p className="text-2xl font-semibold text-primary mb-6">
            ₹{finalPrice}
          </p>

          <div className="flex gap-3 mb-6">
            {["4 inch", "6 inch", "8 inch"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 rounded-lg border ${
                  size === s ? "bg-primary text-white" : "bg-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}
