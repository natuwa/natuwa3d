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

const showOffer = true

// 🔥 OFFER CONFIG (ONLY CHANGE THIS)
const offerTitle = "Raksha Bandhan Miniature"
const offerText = "Flat 20% OFF – Make Your Bond Memorable ❤️"
const offerTag = "⏳ Limited Time Offer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      <Navbar />
      <HeroSection />
      
      {/* About natuwa3d Description */}
      <section className="max-w-5xl mx-auto px-6 py-14 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Personalized 3D Wedding Miniatures
        </h2>
      
        <p className="text-muted-foreground leading-relaxed">
          At NATUWA3D, we create highly detailed 3D printed wedding miniatures that
          capture your most special moments forever. Our custom couple figurines are
          perfect for weddings, anniversaries, and unique gifts in India.
        </p>
      </section>

      {/* 🔥 OFFER SECTION */}
      {showOffer && (
        <section className="w-full bg-[#f8f5f2] py-14 border-t border-[#e5dcd6]">
          
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      
            {/* LEFT TEXT */}
            <div className="text-center md:text-left">
              
              <h2 className="text-3xl font-semibold leading-snug">

                {/* Brand Badge */}
                <span className="bg-[#4a2c2a]/10 text-[#4a2c2a] border border-[#4a2c2a]/20 px-3 py-1 rounded-full text-sm mr-2">
                  🎁 Special Offer
                </span>
              
                {/* Dynamic Festival Text */}
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
            <div className="flex justify-center overflow-hidden rounded-2xl">
              <Image
                src="/images/raksha-bhandhan-6.webp"
                alt="Miniature Offer"
                width={260}
                height={260}
                className="transition-transform duration-300 hover:scale-110 object-cover"
              />
            </div>
      
          </div>
      
        </section>
      )}

      <GallerySection />
      <SizeSection />
      <ProductsSection />      
      <ProcessSection />      
      <TestimonialsSection />
      <ContactSection />
      <Footer />

    </main>
  )
}
