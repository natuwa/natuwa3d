import { Camera, Palette, Printer, Package } from "lucide-react"

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Share Your Photos",
    description: "Send us your favorite wedding photos with clear face shots",
  },
  {
    icon: Palette,
    step: "02",
    title: "Custom Design",
    description: "Our artists create a 3D model matching your exact look",
  },
  {
    icon: Printer,
    step: "03",
    title: "3D Printing",
    description: "High-quality printing with premium materials and colors",
  },
  {
    icon: Package,
    step: "04",
    title: "Delivered to You",
    description: "Carefully packaged and shipped to your doorstep",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Simple Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            How We Create Your Miniature
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative mx-auto w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
