import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { SpecialOffers } from "@/components/special-offers"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <SpecialOffers />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
