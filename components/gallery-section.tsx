
"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  { src: "/images/hero-couple.jpg", alt: "Wedding couple miniature", title: "Wedding Miniatures" },
  { src: "/images/miniature-a.jpg", alt: "Miniature 1", title: "Couple Miniatures" },
  { src: "/images/family-couple.webp", alt: "Miniature 2", title: "Family Couple Miniatures" },
  { src: "/images/old-memory.webp", alt: "Miniature 3", title: "Old Memories" },
  { src: "/images/mother-son.webp", alt: "Miniature 4", title: "Kids Miniatures" },
  { src: "/images/compare.webp", alt: "Miniature 5", title: "Compare Miniatures" },
  { src: "/images/single-professional1.webp", alt: "Miniature 6", title: "Single Miniatures" },
  { src: "/images/miniature-7.jpg", alt: "Miniature 7", title: "SuperHero Miniatures" },
]

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<number>(0)

  const nextSlide = () => {
    if (selectedIndex === null) return
    setDirection(1)
    setSelectedIndex(
      selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
    )
  }

  const prevSlide = () => {
    if (selectedIndex === null) return
    setDirection(-1)
    setSelectedIndex(
      selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
    )
  }

  return (
    <section id="gallery" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Gallery of Memories
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our collection of handcrafted miniatures
          </p>
        </div>

        {/* Grid */}
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
              </div>
            </div>
          ))}
        </div>

        {/* Premium Fullscreen Slider */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden">

            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 text-white text-4xl z-50"
            >
              ×
            </button>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 text-white text-5xl z-50"
            >
              ‹
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 text-white text-5xl z-50"
            >
              ›
            </button>

            {/* Slider */}
            <div className="flex items-center justify-center gap-4 md:gap-8 w-full px-6">

              {/* Left Small */}
              <div className="relative w-[18%] h-[250px] hidden md:block opacity-40 scale-90">
                <Image
                  src={
                    galleryImages[
                      selectedIndex === 0
                        ? galleryImages.length - 1
                        : selectedIndex - 1
                    ].src
                  }
                  alt="Prev"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>

              {/* Center Big Image */}
              <div className="relative w-[90%] md:w-[55%] h-[70vh] overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{
                      x: direction > 0 ? 300 : -300,
                      opacity: 0
                    }}
                    animate={{
                      x: 0,
                      opacity: 1
                    }}
                    exit={{
                      x: direction > 0 ? -300 : 300,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.45
                    }}
                    className="absolute inset-0"
                  >
                  <motion.div
                    key={selectedIndex}
                    initial={{
                      x: direction > 0 ? 250 : -250,
                      opacity: 0,
                      scale: 1.12,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      x: direction > 0 ? -250 : 250,
                      opacity: 0,
                      scale: 0.92,
                    }}
                    transition={{
                      duration: 0.55,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={galleryImages[selectedIndex!].src}
                      alt="Selected"
                      fill
                      className="object-contain rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Small */}
              <div className="relative w-[18%] h-[250px] hidden md:block opacity-40 scale-90">
                <Image
                  src={
                    galleryImages[
                      selectedIndex === galleryImages.length - 1
                        ? 0
                        : selectedIndex + 1
                    ].src
                  }
                  alt="Next"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-8 text-white text-xl font-semibold">
              {galleryImages[selectedIndex!].title}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
