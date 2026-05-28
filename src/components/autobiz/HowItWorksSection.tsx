import { Badge } from "@/components/ui/badge"
import { Smartphone, Settings, Zap, ChartBar as BarChart3 } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Smartphone,
    title: "Connect Your WhatsApp",
    description: "Integrate your business WhatsApp with AutoBiz.pk.",
  },
  {
    number: "2",
    icon: Settings,
    title: "Configure Workflows",
    description: "Define responses, automation flows, and business rules.",
  },
  {
    number: "3",
    icon: Zap,
    title: "Activate Automation",
    description: "Allow AI to handle customer interactions instantly.",
  },
  {
    number: "4",
    icon: BarChart3,
    title: "Monitor & Optimize",
    description: "Track performance and continuously improve workflows.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative border-t border-border/30 bg-card/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.65_0.2_250/3%),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Started in Simple Steps
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-primary/30 to-transparent lg:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="flex size-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 glow-primary-sm">
                    <step.icon className="size-8 text-primary" />
                  </div>
                  <Badge className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full p-0 text-xs">
                    {step.number}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
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
