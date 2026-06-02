import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { ALL_TERMS } from "@/lib/data/glossary"

interface TermRelatedTermsProps {
  currentSlug: string
  relatedTermSlugs: string[]
}

export default function TermRelatedTerms({
  currentSlug,
  relatedTermSlugs,
}: TermRelatedTermsProps) {
  const related = relatedTermSlugs
    .filter((s) => s !== currentSlug)
    .map((slug) => ALL_TERMS.find((t) => t.slug === slug))
    .filter(Boolean) as typeof ALL_TERMS

  if (!related.length) return null

  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="related-terms-heading">
      <PageWrapper>
        <SectionHeading
          id="related-terms-heading"
          title="Related Terms"
          subtitle="Explore other glossary terms that are closely connected to this topic."
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((term) => (
            <Link
              key={term.slug}
              href={`/glossary/${term.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <Badge variant="secondary" className="mb-2 self-start text-xs">
                {term.category}
              </Badge>
              <p className="mb-1.5 text-sm font-semibold text-foreground">{term.term}</p>
              <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {term.definition}
              </p>
              <span
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-auto w-full justify-center gap-1 text-xs"
                )}
              >
                Read Definition
                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
