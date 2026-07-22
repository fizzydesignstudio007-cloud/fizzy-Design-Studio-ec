import { Gift, CalendarHeart, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Offer = {
  title: string
  description: string
  icon: LucideIcon
}

const offers: Offer[] = [
  {
    title: "First-time buyer discounts",
    description:
      "New to the studio? Enjoy an exclusive welcome discount on your very first project with us.",
    icon: Gift,
  },
  {
    title: "Holiday & event deals",
    description:
      "Seasonal and event-based discounts run throughout the year, so there's always a fresh reason to create.",
    icon: CalendarHeart,
  },
  {
    title: "Tailored service bundles",
    description:
      "Curated bundles for students, businesses, and social media creators — the right mix for your goals.",
    icon: Users,
  },
]

export function SpecialOffers() {
  return (
    <section id="offers" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-primary-foreground md:px-14 md:py-20">
          {/* organic accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-white/10 blur-2xl"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Special offers
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Fresh deals, all year round
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Great design should feel rewarding. Here's how we help you get more
              value every time you work with us.
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            {offers.map((offer) => {
              const Icon = offer.icon
              return (
                <div
                  key={offer.title}
                  className="rounded-3xl bg-background/95 p-7 text-left text-foreground"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/60 text-accent-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-primary">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
