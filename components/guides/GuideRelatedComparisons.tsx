import Link from "next/link"
import { GitCompare, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { ALL_COMPARISONS } from "@/lib/data/comparisons"

interface GuideRelatedComparisonsProps {
  relatedComparisonSlugs: string[]
}

export default function GuideRelatedComparisons({
  relatedComparisonSlugs,
}: GuideRelatedComparisonsProps) {
  if (!relatedComparisonSlugs.length) return null

  const comparisons = relatedComparisonSlugs
    .map((slug) => ALL_COMPARISONS.find((c) => c.slug === slug))
    .filter(Boolean) as typeof ALL_COMPARISONS

  if (!comparisons.length) return null

  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="guide-comparisons-heading">
      <PageWrapper>
        <SectionHeading
          id="guide-comparisons-heading"
          title="Provider Comparisons"
          subtitle="Side-by-side comparisons of the communication platforms mentioned in this guide."
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/compare/${comparison.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                aria-hidden="true"
              >
                <GitCompare className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {comparison.providerAName} vs {comparison.providerBName}
                </p>
                <p className="text-xs text-muted-foreground">Compare features and pricing</p>
              </div>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
