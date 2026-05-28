import { TriangleAlert as AlertTriangle, Clock, TrendingDown, MessageSquareOff } from "lucide-react"

const problems = [
  {
    icon: MessageSquareOff,
    title: "High volume of repetitive queries",
    description: "Your team answers the same questions hundreds of times, wasting valuable hours.",
  },
  {
    icon: Clock,
    title: "Delayed responses and missed leads",
    description: "Slow reply times mean lost customers and missed revenue opportunities.",
  },
  {
    icon: TrendingDown,
    title: "Increased operational workload",
    description: "As your business grows, manual communication becomes unsustainable.",
  },
  {
    icon: AlertTriangle,
    title: "Lack of consistency in communication",
    description: "Different team members give different answers, hurting your brand reliability.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative border-t border-border/30 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-destructive/80">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Managing Customer Communication is Slowing Your Growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Small and medium-sized businesses rely heavily on WhatsApp for customer interaction. However, manual communication creates inefficiencies that limit growth and impact customer experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-xl border border-border/30 bg-card/50 p-6 transition-all duration-300 hover:border-destructive/20 hover:bg-card/80"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-destructive/10">
                <problem.icon className="size-5 text-destructive/80" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          As businesses scale, manual processes become unsustainable.
        </p>
      </div>
    </section>
  )
}
