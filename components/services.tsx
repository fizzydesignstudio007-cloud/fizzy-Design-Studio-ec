import { Palette, Megaphone, Layout, Shirt } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ServiceGroup = {
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}

const groups: ServiceGroup[] = [
  {
    title: "Brand & Identity",
    description: "Distinctive marks that make your business unforgettable.",
    icon: Palette,
    items: ["Logo Design", "Business Cards", "Watermark Removal"],
  },
  {
    title: "Digital & Marketing",
    description: "Scroll-stopping assets for every channel you show up on.",
    icon: Megaphone,
    items: [
      "PowerPoint (PPT)",
      "Email Template",
      "YouTube Thumbnail",
      "Banner Design",
      "Website Creation",
    ],
  },
  {
    title: "Print & Layout",
    description: "Beautifully composed pieces made to hold in your hands.",
    icon: Layout,
    items: [
      "Invitation Design",
      "Brochure Design",
      "Magazine Cover",
      "Menu Design",
      "Certificate Design",
      "Flyer Design",
      "Calendar Design",
    ],
  },
  {
    title: "Merch & Publishing",
    description: "Wearable, shareable, and shelf-ready creative work.",
    icon: Shirt,
    items: ["T-Shirt Design", "Sticker Design", "E-Book Cover", "Book Cover"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            What we do
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Services crafted for every stage of your brand
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From a first logo to a full merch line, our studio covers the whole
            creative journey with a clean, considered approach.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-lg hover:shadow-primary/5 md:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/60 text-accent-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-sm font-medium text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
