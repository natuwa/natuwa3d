"use client"

import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "/images/hero-couple.jpg",
    title: "Wedding Miniatures",
    slug: "wedding-miniature",
  },
  {
    src: "/images/miniature-a.jpg",
    title: "Couple Miniatures",
    slug: "couple-miniature",
  },
  {
    src: "/images/family-couple.webp",
    title: "Family Miniatures",
    slug: "family-miniature",
  },
  {
    src: "/images/old-memory.webp",
    title: "Old Memories",
    slug: "old-memory",
  },
  {
    src: "/images/mother-son.webp",
    title: "Kids Miniatures",
    slug: "kids-miniature",
  },
  {
    src: "/images/compare.webp",
    title: "Compare Miniatures",
    slug: "compare-miniature",
  },
  {
    src: "/images/single-professional1.webp",
    title: "Single Miniatures",
    slug: "single-miniature",
  },
  {
    src: "/images/miniature-7.jpg",
    title: "Superhero Miniatures",
    slug: "superhero-miniature",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-[#f8f5f2]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Our Work
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            Gallery of Memories
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Browse through our handcrafted 3D printed miniatures
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Link
              key={index}
              href={`/category/${image.slug}`}
              className="group relative overflow-hidden rounded-xl block"
            >
              <div className="relative aspect-square">

                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-center text-white p-3 text-sm bg-black/50 backdrop-blur-sm">
                  {image.title}
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
