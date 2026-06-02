import { List } from "lucide-react"
import { slugify } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import type { GuideSection } from "@/types"

interface GuideTocProps {
  sections: GuideSection[]
}

export default function GuideToc({ sections }: GuideTocProps) {
  if (sections.length < 2) return null

  return (
    <section
      className="border-b bg-muted/30 py-8"
      aria-labelledby="toc-heading"
    >
      <PageWrapper>
        <nav
          aria-labelledby="toc-heading"
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h2
              id="toc-heading"
              className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <List className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              In This Guide
            </h2>
            <ol
              className="grid grid-cols-1 gap-2 sm:grid-cols-2"
              role="list"
            >
              {sections.map((section, i) => (
                <li key={i}>
                  <a
                    href={`#${slugify(section.heading)}`}
                    className="flex items-start gap-2 rounded-md p-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className="leading-snug">{section.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </PageWrapper>
    </section>
  )
}
