"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  { src: "/images/hero-couple.jpg", alt: "Wedding couple miniature", title: "Wedding Miniatures" },
  { src: "/images/miniature-a.jpg", alt: "Miniature 1" , title: "Couple Miniatures" },
  { src: "/images/family-couple.webp", alt: "Miniature 2" , title: "Family Couple Miniatures" },
  { src: "/images/old-memory.webp", alt: "Miniature 3" , title: "Old Memories" },
  { src: "/images/mother-son.webp", alt: "Miniature 4" , title: "Kids Miniatures" },
  { src: "/images/compare.webp", alt: "Miniature 5" , title: "Compare Miniatures" },
  { src: "/images/single-professional1.webp", alt: "Miniature 6" , title: "Single Miniatures" },
  { src: "/images/miniature-7.jpg", alt: "Miniature 7" , title: "SuperHero Miniatures" },
]

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Gallery of Memories
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our collection of handcrafted miniatures
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 w-full bg-black/50 text-white text-center p-2">
                  {image.title}
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">

    {/* Left Arrow */}
    <button
      onClick={() =>
        setSelectedIndex(
          selectedIndex === 0
            ? galleryImages.length - 1
            : selectedIndex - 1
        )
      }
      className="absolute left-[8%] md:left-[18%] top-1/2 -translate-y-1/2 text-white text-5xl z-50"
    >
      ‹
    </button>

    {/* Image */}
    <div className="relative max-w-5xl w-full h-[80vh]">
      <Image
        src={galleryImages[selectedIndex].src}
        alt="Selected miniature"
        fill
        className="object-contain rounded-xl"
      />
    </div>

    {/* Right Arrow */}
    <button
      onClick={() =>
        setSelectedIndex(
          selectedIndex === galleryImages.length - 1
            ? 0
            : selectedIndex + 1
        )
      }
      className="absolute right-[8%] md:right-[18%] top-1/2 -translate-y-1/2 text-white text-5xl z-50"
    >
      ›
    </button>

    {/* Close */}
    <button
      onClick={() => setSelectedIndex(null)}
      lassName="absolute left-10 md:left-20 text-white text-5xl z-50"
    >
      ×
    </button>

  </div>
)}
      </div>
    </section>
  )
}
