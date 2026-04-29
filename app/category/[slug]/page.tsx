import Image from "next/image"

type Category = {
  title: string
  price: string
  description: string
  image: string
}

const categoryData: Record<string, Category> = {
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

export default function Page({ params }: { params: { slug: string } }) {
  const data = categoryData[params.slug]

  if (!data) {
    return <div style={{ padding: "40px" }}>Category not found</div>
  }

  return (
    <div style={{ minHeight: "100vh", padding: "40px", background: "#f8f5f2" }}>
      <div style={{ maxWidth: "900px", margin: "auto" }}>

        <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
          {data.title}
        </h1>

        <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "20px" }}>
          <Image
            src={data.image}
            alt={data.title}
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
        </div>

        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          {data.description}
        </p>

        <p style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px" }}>
          {data.price}
        </p>

        <a href="https://wa.me/919560672813" target="_blank">
          <button style={{
            background: "#6b4f3b",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none"
          }}>
            Order on WhatsApp
          </button>
        </a>

      </div>
    </div>
  )
}
