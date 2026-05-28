import { CircleCheck as CheckCircle2 } from "lucide-react"

const benefits = [
  "Reduce manual workload and operational costs",
  "Improve response time and customer satisfaction",
  "Increase lead conversion and sales opportunities",
  "Maintain consistent and professional communication",
  "Scale customer support without increasing staff",
]

export function BenefitsSection() {
  return (
    <section className="relative border-t border-border/30 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Benefits
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built to Help You Scale Efficiently
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AutoBiz.pk empowers your business to grow without the growing pains of manual customer communication.
            </p>
          </div>

          <div className="rounded-2xl border border-border/30 bg-card/50 p-8 glow-card">
            <div className="flex flex-col gap-5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
