import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const industries = ["Retail", "E-Commerce", "Services", "Healthcare", "Food & Beverage"]

export function TrustSection() {
  return (
    <section id="trust" className="relative border-t border-border/30 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Trusted
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Designed specifically for SMEs across retail, e-commerce, and service industries, AutoBiz.pk helps businesses improve efficiency and deliver better customer experiences.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <Badge
              key={industry}
              variant="outline"
              className="border-border/30 px-4 py-1.5 text-muted-foreground"
            >
              {industry}
            </Badge>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Card className="border-border/30 bg-card/50">
            <CardContent className="pt-6">
              <Quote className="mb-4 size-8 text-primary/30" />
              <blockquote className="text-lg leading-relaxed text-foreground">
                "AutoBiz.pk reduced our response time and helped us manage customers effortlessly. We went from 2-hour response times to instant replies, and our sales conversion improved by 40%."
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    AB
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">SME Business Owner</p>
                  <p className="text-xs text-muted-foreground">E-Commerce, Lahore</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/30 bg-card/50">
            <CardContent className="pt-6">
              <Quote className="mb-4 size-8 text-primary/30" />
              <blockquote className="text-lg leading-relaxed text-foreground">
                "The automation workflows are incredibly easy to set up. Our team now focuses on high-value tasks while AutoBiz handles the routine customer queries perfectly."
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    RK
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">Retail Business Manager</p>
                  <p className="text-xs text-muted-foreground">Retail, Karachi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
