"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  { src: "/images/hero-couple.jpg", alt: "Wedding couple miniature" },
  { src: "/images/miniature-1.jpg", alt: "Western style wedding couple" },
  { src: "/images/miniature-2.jpg", alt: "Traditional Indian wedding couple" },
  { src: "/images/miniature-3.jpg", alt: "Family group miniature" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-xl group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[3/4]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full aspect-square">
              <Image
                src={selectedImage}
                alt="Selected miniature"
                fill
                className="object-contain"
              />
            </div>
            <button
              className="absolute top-4 right-4 text-background text-4xl hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
