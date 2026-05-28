import { Separator } from "@/components/ui/separator"
import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="size-4 text-primary" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Auto<span className="text-primary">Biz</span>.pk
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-Powered Business Automation Platform
          </p>
          <Separator className="bg-border/20" />
          <div className="flex flex-col gap-2">
            <a
              href="mailto:info@autobiz.pk"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              info@autobiz.pk
            </a>
          </div>
          <p className="text-xs text-muted-foreground/60">
            &copy; 2026 AutoBiz.pk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
