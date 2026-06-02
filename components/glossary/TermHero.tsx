import { Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import { estimateReadingTime } from "@/lib/data/glossary"
import type { GlossaryTermDetail } from "@/lib/data/glossary"

interface TermHeroProps {
  term: GlossaryTermDetail
}

export default function TermHero({ term }: TermHeroProps) {
  const readingTime = estimateReadingTime(term)

  return (
    <section
      className="border-b bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background py-16 md:py-20"
      aria-labelledby="term-hero-heading"
    >
      <PageWrapper>
        <div className="mx-auto max-w-3xl text-center">

          {/* Category badge */}
          <div className="mb-4 flex justify-center">
            <Badge variant="secondary">{term.category}</Badge>
          </div>

          {/* Term name */}
          <h1
            id="term-hero-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {term.term}
          </h1>

          {/* Brief definition */}
          <p className="mx-auto mb-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {term.definition}
          </p>

          {/* Reading time */}
          <div className="mb-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{readingTime} min read</span>
          </div>

          {/* Also Known As */}
          {term.alsoKnownAs && term.alsoKnownAs.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <span className="text-xs text-muted-foreground">Also known as:</span>
              {term.alsoKnownAs.map((alias) => (
                <span
                  key={alias}
                  className="inline-flex items-center rounded-full border bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground"
                >
                  {alias}
                </span>
              ))}
            </div>
          )}

        </div>
      </PageWrapper>
    </section>
  )
}
