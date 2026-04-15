import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Wedding Keepsakes
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              Freeze Your <br />
              <span className="text-primary">Precious Moments</span> <br />
              Forever
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Transform your wedding memories into stunning 3D printed miniatures. 
              Handcrafted with love, each piece captures the essence of your special day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/book-now">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
                >
                  Book Your Order
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 py-6 text-base">
                View Gallery
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 justify-center lg:justify-start">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Happy Couples</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Custom Made</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">5★</p>
                <p className="text-sm text-muted-foreground">Reviews</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-secondary rounded-full scale-90" />
              <video
                src="/hero-couple%20turntable3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover rounded-3xl shadow-2xl z-10 relative w-full h-full"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
