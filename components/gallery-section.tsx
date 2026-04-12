"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  { src: "/images/hero-couple.jpg", alt: "Wedding couple miniature", title: "Couple Miniature" },
  { src: "/images/miniature-a.jpg", alt: "Miniature 1" , title: "Western Style" },
  { src: "/images/miniature-2.jpg", alt: "Miniature 2" , title: "Indian Wedding" },
  { src: "/images/miniature-3.jpg", alt: "Miniature 3" , title: "Family Set" },
  { src: "/images/miniature-4.jpg", alt: "Miniature 4" , title: "Bride Solo" },
  { src: "/images/miniature-c.jpg", alt: "Miniature 5" , title: "Groom Solo" },
  { src: "/images/miniature-b.jpg", alt: "Miniature 6" , title: "Royal Theme" },
  { src: "/images/miniature-7.jpg", alt: "Miniature 7" , title: "Custom Pose" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => setSelectedImage(image.src)}
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
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Selected miniature"
                fill
                className="object-contain rounded-xl"
              />
            </div>
        
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-accent"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
