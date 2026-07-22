import Image from "next/image"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* organic backdrop shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-secondary/70 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Creative studio for fresh brands
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl md:text-6xl">
            Design that feels as fresh as the sea breeze
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Fizzy Design is a creative studio crafting refreshing brand identities,
            marketing assets, print layouts, and merch — all inspired by the calm of
            the ocean and nature.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button render={<a href="#services" />} nativeButton={false} size="lg" className="rounded-full">
              Explore services
            </Button>
            <Button
              render={<a href="#offers" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 text-primary"
            >
              See special offers
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-primary/20 bg-primary shadow-xl shadow-primary/10">
            <Image
              src="/images/fizzy-logo.png"
              alt="Fizzy Design logo — a floral crescent moon of lilies and leaves above the FIZZY wordmark"
              width={720}
              height={720}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
