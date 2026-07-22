import { Mail, Waves } from "lucide-react"
import { InstagramIcon } from "@/components/instagram-icon"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Waves className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold tracking-tight text-primary">
                Fizzy Design
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A creative studio crafting refreshing brand identities and design
              inspired by the ocean and nature.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-primary">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://instagram.com/fizzy.designstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  <InstagramIcon className="h-4 w-4 text-primary" />
                  @fizzy.designstudio
                </a>
              </li>
              <li>
                <a
                  href="mailto:fizzydesignstudio@gmail.co"
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  fizzydesignstudio@gmail.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Fizzy Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
