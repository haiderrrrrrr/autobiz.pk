import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border/30 gradient-cta">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.2_250/10%),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Start Automating Your Business Today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join the growing number of businesses transforming their customer communication with AI-powered automation.
          </p>
          <p className="mt-2 text-muted-foreground">
            Take the first step towards efficiency, scalability, and growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="glow-primary gap-2 px-8" asChild>
              <a
                href="https://wa.me/923035120027"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="size-4" />
                Contact on WhatsApp
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
