"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const showOffer = true

const offerTitle = "Raksha Bandhan Special Miniature"
const offerText = "Flat 20% OFF – Make Your Bond Memorable ❤️"
const offerTag = "⏳ Limited Time Offer"

export default function OfferSection() {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const target = new Date()
    target.setHours(target.getHours() + 24) // 24 hrs timer

    const interval = setInterval(() => {
      const now = new Date()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft("Expired")
        clearInterval(interval)
        return
      }

      const h = Math.floor(diff / (1000 * 60 * 60))
      const m = Math.floor((diff / (1000 * 60)) % 60)
      const s = Math.floor((diff / 1000) % 60)

      setTimeLeft(`${h}h ${m}m ${s}s`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!showOffer) return null

  return (
    <section className="w-full bg-[#f8f5f2] py-14 border-t border-[#e5dcd6]">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          
          <h2 className="text-3xl font-semibold leading-snug">

            <span className="bg-[#4a2c2a]/10 text-[#4a2c2a] border border-[#4a2c2a]/20 px-3 py-1 rounded-full text-sm mr-2">
              🎁 Special Offer
            </span>

            <span className="text-[#4a2c2a]">
              {offerTitle}
            </span>

          </h2>

          <p className="mt-3 text-lg text-[#6b4c4c]">
            {offerText}
          </p>

          {/* ⏳ TIMER */}
          <p className="mt-3 text-red-500 font-medium">
            ⏳ Ends in: {timeLeft}
          </p>

          {/* 🔥 FOMO */}
          <p className="text-sm text-[#a94442] mt-1">
            🔥 Only 5 slots left this week
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="/book-now"
              className="px-8 py-3 bg-[#4a2c2a] text-white rounded-full hover:bg-[#3a1f1d] transition text-center"
            >
              Order Now
            </a>

            <a
              href="https://wa.me/918796289333?text=Hi%20Natuwa3D"
              target="_blank"
              className="px-8 py-3 bg-green-500 text-white rounded-full hover:opacity-90 text-center"
            >
              WhatsApp Now
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/images/raksha-bhandhan-6.webp"
            alt="Miniature Offer"
            width={260}
            height={260}
            className="rounded-2xl shadow-xl border border-[#e5dcd6]"
          />
        </div>

      </div>

    </section>
  )
}
