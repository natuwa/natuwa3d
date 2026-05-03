import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import SizeSection from "@/components/size-section"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* 🔥 NEW FESTIVAL OFFER SECTION */}
      <section className="w-full bg-pink-100 py-12 text-center">
        <h2 className="text-3xl font-bold">
          🎁 Raksha Bandhan Special Miniature
        </h2>

        <p className="mt-3 text-lg">
          Flat 20% OFF – Make Your Bond Memorable ❤️
        </p>

        <p className="mt-2 text-sm text-red-500">
          ⏳ Limited Time Offer
        </p>

        <a
          href="/book-now"
          className="inline-block mt-5 px-6 py-3 bg-black text-white rounded-full"
        >
          Order Now
        </a>
      </section>

      {/* EXISTING SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Personalized 3D Wedding Miniatures
        </h2>
      
        <p className="text-muted-foreground leading-relaxed">
          At NATUWA3D, we create highly detailed 3D printed wedding miniatures that
          capture your most special moments forever. Our custom couple figurines are
          perfect for weddings, anniversaries, and unique gifts in India. Each
          miniature is handcrafted with precision to reflect your real-life memories.
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
