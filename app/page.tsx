"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import SizeSection from "@/components/size-section"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { FAQSection } from "@/components/faq-section"

const showOffer = true

// KARWA CHAUTH OFFER CONFIG
const offerTitle = "Karwa Chauth Couple Miniature"
const offerText = "Flat 20% OFF – Turn Your Love Into a Forever Memory ❤️"
const offerTag = "⏳ Limited Time Karwa Chauth Offer"

const offerImage = "/images/natuwa3d-karwa-chauth-miniature.png"

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">

      <Navbar />

      <HeroSection />

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-14 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Personalized 3D Wedding Miniatures
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          At NATUWA3D, we create highly detailed 3D printed wedding miniatures
          that capture your most special moments forever.
        </p>
      </section>

      {/* ============================= */}
      {/* KARWA CHAUTH SPECIAL OFFER */}
      {/* ============================= */}

      {showOffer && (
        <section className="w-full bg-[#f8f5f2] py-16 border-t border-[#e5dcd6]">

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-center md:text-left">

              {/* BIG SPECIAL OFFER BADGE */}
              <div className="inline-flex items-center gap-3 mb-5">

                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#4a2c2a] text-2xl shadow-md">
                  🌙
                </span>

                <span className="relative inline-block">

                  {/* Glow */}
                  <span className="absolute inset-0 rounded-full bg-[#d6a84f]/30 blur-md"></span>

                  {/* Badge */}
                  <span className="relative inline-flex items-center px-7 py-2.5 rounded-full bg-gradient-to-r from-[#4a2c2a] to-[#6b3834] border-2 border-[#d6a84f] text-white text-xl md:text-2xl font-bold tracking-wide shadow-lg">
                    ✨ Special Offer ✨
                  </span>

                </span>

              </div>

              {/* TITLE */}
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#4a2c2a]">
                {offerTitle}
              </h2>

              {/* GOLD HEART DIVIDER */}
              <div className="flex items-center justify-center md:justify-start gap-3 my-5">
                <span className="h-[2px] w-16 bg-[#d6a84f]"></span>
                <span className="text-xl">❤️</span>
                <span className="h-[2px] w-16 bg-[#d6a84f]"></span>
              </div>

              {/* DISCOUNT HIGHLIGHT BOX */}
              <div className="inline-block bg-white border-2 border-[#e8b4a8] rounded-2xl px-5 py-4 shadow-sm">

                <p className="text-xl md:text-2xl text-[#4a2c2a] leading-snug">
                  <span className="font-extrabold text-[#c62828] text-3xl md:text-4xl">
                    Flat 20% OFF
                  </span>

                  <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                    – Turn Your Love Into a Forever Memory ❤️
                  </span>
                </p>

              </div>

              {/* LIMITED TIME */}
              <p className="mt-5 text-base md:text-lg font-semibold text-[#a94442]">
                ⏳ Limited Time Karwa Chauth Offer
              </p>

              {/* ORDER BUTTON */}
              <a
                href="/book-now"
                className="inline-flex items-center justify-center gap-2 mt-7 px-9 py-4 bg-[#4a2c2a] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#3a1f1d] hover:scale-105 transition-all duration-300"
              >
                Order Now
                <span className="text-xl">→</span>
              </a>

            </div>

            {/* RIGHT IMAGE */}
            <div
              onClick={() => setOpen(true)}
              className="flex justify-center cursor-pointer group"
            >

              <div className="relative">

                {/* Soft glow behind image */}
                <div className="absolute inset-0 bg-[#d6a84f]/20 blur-2xl rounded-full scale-90"></div>

                <Image
                  src={offerImage}
                  alt="Karwa Chauth Couple Miniature by NATUWA3D"
                  width={500}
                  height={500}
                  priority
                  className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                />

              </div>

            </div>

          </div>

        </section>
      )}

      {/* ============================= */}
      {/* FULLSCREEN IMAGE MODAL */}
      {/* ============================= */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative text-center max-w-xl w-full"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close image"
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition"
            >
              ✕
            </button>

            {/* LARGE IMAGE */}
            <Image
              src={offerImage}
              alt="Karwa Chauth Couple Miniature by NATUWA3D"
              width={700}
              height={700}
              className="w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* MODAL TITLE */}
            <h2 className="text-white text-2xl mt-6 font-semibold">
              {offerTitle}
            </h2>

            <p className="text-white/80 mt-2">
              {offerText}
            </p>

            <a
              href="/book-now"
              className="inline-block mt-5 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              Order Now
            </a>

          </div>

        </div>
      )}

      {/* WEBSITE SECTIONS */}

      <GallerySection />

      <SizeSection />

      <ProductsSection />

      <ProcessSection />

      <TestimonialsSection />

      <ContactSection />

      <FAQSection />

      <Footer />

    </main>
  )
}
