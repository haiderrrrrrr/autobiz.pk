import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter Plan",
    price: "3,000",
    description: "For businesses getting started with automation",
    features: [
      "Basic automation workflows",
      "Limited message handling",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Business Plan",
    price: "7,000",
    description: "For growing businesses that need more power",
    features: [
      "Advanced automation",
      "Order and booking workflows",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "12,000",
    description: "For businesses that need the full suite",
    features: [
      "Full automation suite",
      "Advanced analytics",
      "Dedicated support",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative border-t border-border/30 bg-card/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.2_250/3%),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Flexible Pricing for Growing Businesses
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-300 ${
                plan.popular
                  ? "border-primary/30 bg-card/80 glow-card-hover scale-[1.02]"
                  : "border-border/30 bg-card/50 hover:border-primary/15"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="glow-primary-sm px-3 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-0">
                <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">PKR</span>
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>
                <Separator className="my-6 bg-border/30" />
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="size-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          No hidden charges. Scalable plans based on your business needs.
        </p>
      </div>
    </section>
  )
}
