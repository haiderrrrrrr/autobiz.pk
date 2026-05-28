import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function AutoBizHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 glow-primary-sm">
            <Zap className="size-4 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Auto<span className="text-primary">Biz</span>.pk
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
          <a href="#trust" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Sign In
          </Button>
          <Button size="sm" className="glow-primary-sm">
            Get Free Demo
          </Button>
        </div>
      </div>
    </header>
  )
}
