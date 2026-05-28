import { Card, CardContent } from "@/components/ui/card"
import { Bot, Workflow, ShoppingCart, Clock, ChartBar as BarChart3, Plug } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Smart AI Responses",
    description:
      "Automatically respond to customer queries using intelligent, context-aware replies.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Create structured flows for orders, FAQs, and customer interactions.",
  },
  {
    icon: ShoppingCart,
    title: "Order & Booking Management",
    description:
      "Handle orders, appointments, and inquiries without manual intervention.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Ensure continuous customer support, even outside business hours.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Monitor performance, customer interactions, and response efficiency.",
  },
  {
    icon: Plug,
    title: "Easy Integration",
    description:
      "Seamlessly connect with WhatsApp Business API.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative border-t border-border/30 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful Features Designed for Business Efficiency
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/30 bg-card/50 transition-all duration-300 hover:border-primary/20 hover:glow-card-hover"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
