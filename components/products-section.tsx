import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Raw Miniature",
    description: "Unpainted grey model with basic detailing — best for budget",
    price: "₹1,999",
    image: "/images/miniature-1.jpg",
  },
  {
    title: "Flat Color Finish",
    description: "Clean hand-painted colors without textures — simple & elegant look",
    price: "₹2,999",
    image: "/images/miniature-22.jpg",
  },
  {
    title: "Premium Detailed 👑",
    description: "Highly detailed with realistic textures & finishing — most lifelike result",
    price: "₹3,999",
    image: "/images/miniature-33.jpg",
  },
  
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Quality Section
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Choose Your Perfect Finish
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the level of detailing and finish that matches your style and budget
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
              <p className="text-gray-500 text-sm mt-8 max-w-2xl mx-auto text-center">
                Each miniature is handcrafted from your photos. We aim for a close resemblance,
                but exact 100% likeness is not guaranteed — typically 70–80% similarity can be achieved.
              </p>
              
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
