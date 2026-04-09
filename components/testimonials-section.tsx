import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Mumbai",
    text: "The miniature captured every detail of our wedding attire. It&apos;s now the centerpiece of our living room!",
    rating: 5,
  },
  {
    name: "Ananya & Vikram",
    location: "Delhi",
    text: "Absolutely stunning work! The team paid attention to even the smallest details. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sneha & Arjun",
    location: "Bangalore",
    text: "A perfect gift for our anniversary. The quality exceeded our expectations. Thank you NATUWA!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Our Couples Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
