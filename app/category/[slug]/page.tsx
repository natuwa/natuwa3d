import CategoryClient from "./CategoryClient"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const title = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c: string) => c.toUpperCase())

  return {
    title: `${title} | NATUWA3D`,
    description: `Order ${title} 3D printed miniatures in India.`,
  }
}

const categoryData: any = {
  "wedding-miniatures": {
    title: "Wedding Miniatures",
    basePrice: 2999,
    description: "Capture your wedding memories in stunning 3D miniatures.",
    image: "/images/hero-couple.jpg"
  },
  "couple-miniatures": {
    title: "Couple Miniatures",
    basePrice: 2499,
    description: "Perfect gift for couples and anniversaries.",
    image: "/images/miniature-a.jpg"
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = categoryData[params.slug]

  if (!data) {
    return <div className="p-10 text-center">Category not found</div>
  }

  return <CategoryClient data={data} />
}
