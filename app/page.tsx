"use client"
import "@google/model-viewer";
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
import { FAQSection } from "@/components/faq-section";
import MiniatureViewer from "@/components/miniature-viewer";

const showOffer = true

// 🔥 OFFER CONFIG
const offerTitle = "Raksha Bandhan Miniature"
const offerText = "Flat 20% OFF – Make Your Bond Memorable ❤️ "
const offerTag = "⏳ Limited Time Offer"

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
          At NATUWA3D, we create highly detailed 3D printed wedding miniatures that
          capture your most special moments forever.
        </p>
      </section>

      {/* 🔥 OFFER SECTION */}
      {showOffer && (
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
      
              <p className="mt-2 text-sm text-[#a94442]">
                {offerTag}
              </p>
      
              <a
                href="/book-now"
                className="inline-block mt-6 px-8 py-3 bg-[#4a2c2a] text-white rounded-full hover:bg-[#3a1f1d] transition"
              >
                Order Now
              </a>
            </div>
      
            {/* RIGHT IMAGE */}
            <div
              onClick={() => setOpen(true)}
              className="flex justify-center overflow-hidden rounded-2xl cursor-pointer group"
            >
              <Image
                src="/images/raksha-bhandhan-6.webp"
                alt="Miniature Offer"
                width={260}
                height={260}
                className="transition-all duration-300 group-hover:scale-110 object-cover"
              />
            </div>
      
          </div>
        </section>
      )}

      {/* 🔥 FULLSCREEN MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="text-center px-4"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            <Image
              src="/images/raksha-bhandhan-6.webp"
              alt="Full Offer"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl"
            />

            <h2 className="text-white text-2xl mt-6 font-semibold">
              {offerTitle}
            </h2>

            <p className="text-white/80 mt-2">
              {offerText}
            </p>

            <a
              href="/book-now"
              className="inline-block mt-5 px-6 py-3 bg-white text-black rounded-full"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
      <section className="w-full py-24 bg-[#f5f1ec]">

        <div className="max-w-7xl mx-auto px-6">
      
          <h2 className="text-5xl font-serif text-center text-[#2d1810] mb-4">
            Explore Your Miniature
          </h2>
      
          <p className="text-center text-[#6b5b52] mb-16">
            Upload photo • Generate miniature • Book your order
          </p>
      
          {/* 3 COLUMN LAYOUT */}
          <div className="grid md:grid-cols-3 gap-10 items-center">
      
            {/* LEFT SIDE */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e7ddd4] text-center">
      
              <h3 className="text-2xl font-serif mb-4 text-[#2d1810]">
                Upload Your Photo
              </h3>
      
              <p className="text-[#6b5b52] mb-6">
                Upload your couple image to create personalized miniature.
              </p>
      
              <input
                type="file"
                className="w-full border border-[#d8c9bc] rounded-xl p-3"
              />
      
            </div>
      
            {/* CENTER VIEWER */}
            <div className="flex flex-col items-center">
      
              <h3 className="text-2xl font-serif mb-6 text-[#2d1810]">
                3D Miniature Preview
              </h3>
      
              <model-viewer
                src="/miniature.glb"
                alt="3D Miniature"
                auto-rotate
                camera-controls
                shadow-intensity="1"
                style={{
                  width: "100%",
                  height: "500px",
                }}
              />
      
            </div>
      
            {/* RIGHT SIDE */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e7ddd4] text-center">
      
              <h3 className="text-2xl font-serif mb-4 text-[#2d1810]">
                Ready To Order?
              </h3>
      
              <p className="text-[#6b5b52] mb-6">
                Turn your memories into a realistic 3D printed miniature.
              </p>
      
              <a
                href="/book-now"
                className="inline-block bg-[#4a2c2a] text-white px-8 py-4 rounded-full hover:bg-[#3b211f] transition"
              >
                Book Now
              </a>
      
            </div>
      
          </div>
      
        </div>
      
      </section>
      <MiniatureViewer />
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
