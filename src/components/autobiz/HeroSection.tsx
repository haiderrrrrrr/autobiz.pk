import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CircleCheck as CheckCircle2, ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.2_250/8%),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.7_0.18_170/5%),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
            AI-Powered Automation for WhatsApp
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Automate Your Business Communication with{" "}
            <span className="gradient-text">AI</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            AutoBiz.pk enables small and medium-sized businesses to automate customer interactions on WhatsApp using intelligent, scalable, and easy-to-use automation workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="glow-primary-sm gap-2 px-8">
              Get Free Demo
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-border/50 px-8">
              <Play className="size-4" />
              See How It Works
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "Instant AI-powered responses",
              "24/7 customer engagement",
              "Increased efficiency and sales conversion",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative rounded-2xl border border-border/50 bg-card/50 p-2 glow-card overflow-hidden">
            <img
              src="/hero-automation.webp"
              alt="AI Automation Flows"
              className="w-full rounded-xl object-cover opacity-60"
            />
            <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Active Automations", value: "24", change: "+3" },
                  { label: "Messages Today", value: "1,847", change: "+12%" },
                  { label: "Response Rate", value: "99.2%", change: "+0.5%" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border/30 bg-background/80 p-4 backdrop-blur-sm">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-chart-2">{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
