import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { ALL_COMPARISONS } from "@/lib/data/comparisons"

interface CompareRelatedProps {
  currentSlug: string
  relatedSlugs: string[]
}

export default function CompareRelated({
  currentSlug,
  relatedSlugs,
}: CompareRelatedProps) {
  const related = relatedSlugs
    .filter((s) => s !== currentSlug)
    .map((slug) => ALL_COMPARISONS.find((c) => c.slug === slug))
    .filter(Boolean) as typeof ALL_COMPARISONS

  if (!related.length) return null

  return (
    <section className="border-b py-16" aria-labelledby="related-comparisons-heading">
      <PageWrapper>
        <SectionHeading
          id="related-comparisons-heading"
          title="Related Comparisons"
          subtitle="Explore more side-by-side provider comparisons."
          className="mb-8"
        />
        <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl">
          {related.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/compare/${comparison.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <Badge variant="secondary" className="mb-3 self-start text-xs">
                {comparison.category}
              </Badge>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                {comparison.providerAName} vs {comparison.providerBName}
              </h3>
              <p className="mb-4 flex-1 text-xs leading-5 text-muted-foreground">
                {comparison.winnerReason}
              </p>
              <span
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-auto w-full justify-center gap-1 text-xs"
                )}
              >
                Compare
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
