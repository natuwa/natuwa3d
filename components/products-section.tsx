import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Couple Miniature",
    description: "Classic couple figurine capturing your wedding look",
    price: "₹4,999",
    image: "/images/miniature-1.jpg",
  },
  {
    title: "Traditional Wedding",
    description: "Traditional Indian attire with intricate details",
    price: "₹6,999",
    image: "/images/miniature-2.jpg",
  },
  {
    title: "Family Portrait",
    description: "Include your family in a beautiful group miniature",
    price: "₹9,999",
    image: "/images/miniature-3.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Choose Your Perfect Keepsake
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Each miniature is custom-crafted to match your unique style and wedding attire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="group bg-card border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
