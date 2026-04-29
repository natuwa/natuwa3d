import Image from "next/image"

const categoryData = {
  "wedding-miniatures": {
    title: "Wedding Miniatures",
    price: "₹2999",
    description: "Capture your wedding memories in stunning 3D miniatures.",
    image: "/images/hero-couple.jpg"
  },
  "couple-miniatures": {
    title: "Couple Miniatures",
    price: "₹2499",
    description: "Perfect gift for couples and anniversaries.",
    image: "/images/miniature-a.jpg"
  }
}

export default function Page({ params }: any) {
  const data = categoryData[params.slug]

  if (!data) {
    return <div className="p-10 text-center">Category not found</div>
  }

  return (
    <div className="min-h-screen bg-[#f8f5f2] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="relative w-full h-[400px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-serif font-bold mb-4">
            {data.title}
          </h1>

          <p className="text-lg mb-4">
            {data.description}
          </p>

          <p className="text-xl text-primary mb-6">
            {data.price}
          </p>

          <a
            href="https://wa.me/919560672813"
            target="_blank"
          >
            <button className="bg-primary text-white px-6 py-3 rounded-lg">
              Order on WhatsApp
            </button>
          </a>

        </div>
      </div>
    </div>
  )
}
