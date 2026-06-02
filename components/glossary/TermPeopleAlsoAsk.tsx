import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { ALL_TERMS } from "@/lib/data/glossary"

interface TermPeopleAlsoAskProps {
  currentSlug: string
  relatedTermSlugs: string[]
}

export default function TermPeopleAlsoAsk({
  currentSlug,
  relatedTermSlugs,
}: TermPeopleAlsoAskProps) {
  const paas = relatedTermSlugs
    .filter((s) => s !== currentSlug)
    .slice(0, 5)
    .map((slug) => ALL_TERMS.find((t) => t.slug === slug))
    .filter(Boolean) as typeof ALL_TERMS

  if (!paas.length) return null

  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="paa-heading">
      <PageWrapper>
        <SectionHeading
          id="paa-heading"
          title="People Also Ask"
          subtitle="Related questions families often search for alongside this topic."
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-xl border bg-card shadow-sm">
          {paas.map((term) => (
            <details key={term.slug} className="group">
              <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-foreground">
                  What is {term.term}?
                </span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-5 pb-5">
                <p className="mb-3 text-sm leading-7 text-muted-foreground">
                  {term.definition}
                </p>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  Read full definition
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </details>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
