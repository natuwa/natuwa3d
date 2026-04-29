import CategoryClient from "./CategoryClient"

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  const title = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    title: `${title} | NATUWA3D`,
    description: `Order ${title} 3D printed miniatures in India.`,
  }
}

const categoryData = {
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
} as const

export default function Page({ params }: Params) {
  const data = categoryData[params.slug as keyof typeof categoryData]

  if (!data) {
    return <div className="p-10 text-center">Category not found</div>
  }

  return <CategoryClient data={data} />
}
