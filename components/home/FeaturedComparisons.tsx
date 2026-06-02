import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"
import { ALL_COMPARISONS } from "@/lib/data/comparisons"

const featured = ALL_COMPARISONS.filter((c) => c.featured).slice(0, 3)

export default function FeaturedComparisons() {
  return (
    <section
      className="border-b py-16"
      aria-labelledby="comparisons-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-10">
          <SectionHeading
            id="comparisons-heading"
            title="Provider Comparisons"
            subtitle="Not sure which platform to use? See how top providers compare before you sign up."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((comparison) => (
            <div
              key={comparison.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <Badge variant="secondary" className="mb-3 self-start text-xs">
                {comparison.category}
              </Badge>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {comparison.providerAName} vs {comparison.providerBName}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {comparison.winnerReason}
              </p>
              <Link
                href={`/compare/${comparison.slug}`}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-auto w-full justify-center gap-1 text-xs"
                )}
              >
                View Comparison
                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/compare"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
          >
            View All Comparisons
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
