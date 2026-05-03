import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import SizeSection from "@/components/size-section"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// 🔥 OFFER CONFIG (BAS YE CHANGE KARNA HAI FUTURE ME)
const offerTitle = "🎁 Raksha Bandhan Special Miniature"
const offerText = "Flat 20% OFF – Make Your Bond Memorable ❤️"
const offerTag = "⏳ Limited Time Offer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      <Navbar />
      <HeroSection />

      {/* 🔥 DYNAMIC OFFER SECTION */}
      <section className="w-full bg-[#f8f5f2] py-14 text-center border-t border-[#e5dcd6]">
        
        <h2 className="text-3xl font-semibold text-[#4a2c2a]">
          {offerTitle}
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
      </section>

      {/* EXISTING CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Personalized 3D Wedding Miniatures
        </h2>
      
        <p className="text-muted-foreground leading-relaxed">
          At NATUWA3D, we create highly detailed 3D printed wedding miniatures that
          capture your most special moments forever. Our custom couple figurines are
          perfect for weddings, anniversaries, and unique gifts in India.
        </p>
      </section>

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
