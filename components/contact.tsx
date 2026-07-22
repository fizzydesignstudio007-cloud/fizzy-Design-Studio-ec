import { Mail } from "lucide-react"
import { InstagramIcon } from "@/components/instagram-icon"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="rounded-[2.5rem] border border-border bg-card p-8 text-center md:p-14">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Get in touch
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Let's create something refreshing together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us about your project and we'll help you make a splash. Reach out
            on Instagram or drop us an email — we'd love to hear from you.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href="mailto:fizzydesignstudio@gmail.co" />}
              nativeButton={false}
              size="lg"
              className="w-full rounded-full sm:w-auto"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email the studio
            </Button>
            <Button
              render={
                <a
                  href="https://instagram.com/fizzy.designstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              size="lg"
              variant="outline"
              className="w-full rounded-full border-primary/30 text-primary sm:w-auto"
            >
              <InstagramIcon className="h-4 w-4" />
              @fizzy.designstudio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
