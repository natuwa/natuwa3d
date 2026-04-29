import CategoryClient from "./CategoryClient"

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
}

export default function Page({ params }: any) {
  const data = categoryData[params.slug]

  if (!data) {
    return <div className="p-10 text-center">Category not found</div>
  }

  return <CategoryClient data={data} />
}
