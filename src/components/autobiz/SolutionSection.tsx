import { Badge } from "@/components/ui/badge"
import { CircleCheck as CheckCircle2, Bot, Workflow, MessageSquare } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="relative border-t border-border/30 bg-card/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.2_250/4%),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
              The Solution
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Smarter Way to Manage Customer Conversations
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              AutoBiz.pk is an AI-powered automation platform designed to streamline customer communication for SMEs. By combining artificial intelligence with structured workflows, the platform enables businesses to respond instantly, operate efficiently, and scale without increasing workload.
            </p>
            <p className="mt-4 text-muted-foreground">
              The system integrates directly with WhatsApp, allowing businesses to automate responses, manage orders, and handle customer queries seamlessly.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                "AI-powered instant responses",
                "Structured workflow automation",
                "Direct WhatsApp integration",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-border/30 overflow-hidden glow-card">
              <img
                src="/solution-ai.webp"
                alt="AI Neural Network"
                className="w-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/30" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="grid gap-4">
                  {[
                    {
                      icon: Bot,
                      title: "AI Engine",
                      desc: "Context-aware responses",
                      color: "text-primary",
                      bg: "bg-primary/10",
                    },
                    {
                      icon: Workflow,
                      title: "Workflow Builder",
                      desc: "Drag-and-drop automation",
                      color: "text-chart-2",
                      bg: "bg-chart-2/10",
                    },
                    {
                      icon: MessageSquare,
                      title: "WhatsApp API",
                      desc: "Seamless integration",
                      color: "text-chart-3",
                      bg: "bg-chart-3/10",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 rounded-xl border border-border/20 bg-background/60 p-4 backdrop-blur-sm transition-all hover:border-primary/20">
                      <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${item.bg}`}>
                        <item.icon className={`size-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">AI Processing Active</span>
                  </div>
                  <div className="mt-3 flex gap-1">
                    {[40, 65, 80, 55, 90, 70, 85].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-primary/30" style={{ height: `${h * 0.5}px` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
