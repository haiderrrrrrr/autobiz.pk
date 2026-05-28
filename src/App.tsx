import { AutoBizHeader } from "@/components/autobiz/AutoBizHeader"
import { HeroSection } from "@/components/autobiz/HeroSection"
import { ProblemSection } from "@/components/autobiz/ProblemSection"
import { SolutionSection } from "@/components/autobiz/SolutionSection"
import { FeaturesSection } from "@/components/autobiz/FeaturesSection"
import { HowItWorksSection } from "@/components/autobiz/HowItWorksSection"
import { BenefitsSection } from "@/components/autobiz/BenefitsSection"
import { PricingSection } from "@/components/autobiz/PricingSection"
import { TrustSection } from "@/components/autobiz/TrustSection"
import { CTASection } from "@/components/autobiz/CTASection"
import { Footer } from "@/components/autobiz/Footer"

export function App() {
  return (
    <div className="min-h-svh bg-background">
      <AutoBizHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
