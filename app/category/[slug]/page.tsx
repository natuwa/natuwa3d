import Image from "next/image"
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const title = params.slug
  .replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    title: `${title} | NATUWA3D`,
    description: `Order ${title} 3D printed miniatures in India.`,
  }
}
const categoryData: any = {
  "wedding-miniatures": {
    title: "Wedding Miniatures",
    price: "Starting from ₹2999",
    description: "Capture your wedding memories in stunning 3D miniatures.",
    image: "/images/hero-couple.jpg"
  },
  "couple-miniatures": {
    title: "Couple Miniatures",
    price: "Starting from ₹2499",
    description: "Perfect gift for couples and anniversaries.",
    image: "/images/miniature-a.jpg"
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const data = categoryData[params.slug]

  if (!data) return <div className="p-10">Category not found</div>

  return (
    <div className="min-h-screen bg-[#f8f5f2] py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image
            src={data.image || "/images/default.jpg"}
            alt={data.title}
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            Home / {data.title}
          </p>
          <h1 className="text-4xl font-serif font-bold mb-4">
            {data.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-4">
            {data.description}
          </p>

          <p className="text-xl font-semibold text-primary mb-6">
            {data.price}
          </p>

          <ul className="mb-6 text-muted-foreground space-y-3">
            <li>✨ High-quality 3D printing</li>
            <li>🎨 Premium finishing</li>
            <li>🚚 Delivery in 7–10 days</li>
          </ul>

          <a
            href={`https://wa.me/919560672813?text=I want to order ${data.title}`}
            target="_blank"
          >
            <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Order on WhatsApp
            </button>
          </a>

        </div>

      </div>

    </div>
  )
}
