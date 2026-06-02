import Link from "next/link"
import { ArrowLeftRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { PROVIDER_DETAILS } from "@/lib/data/providers"
import { getComparisonSlug } from "@/lib/data/comparisons"

interface ProviderCompareWithProps {
  providerSlug: string
  providerName: string
  relatedSlugs: string[]
}

export default function ProviderCompareWith({
  providerSlug,
  providerName,
  relatedSlugs,
}: ProviderCompareWithProps) {
  const validComparisons = relatedSlugs
    .map((slug) => {
      const other = PROVIDER_DETAILS[slug]
      if (!other) return null
      const compareSlug = getComparisonSlug(providerSlug, slug)
      if (!compareSlug) return null
      return { other, compareSlug }
    })
    .filter((entry): entry is { other: NonNullable<typeof PROVIDER_DETAILS[string]>; compareSlug: string } =>
      entry !== null
    )

  if (!validComparisons.length) return null

  return (
    <section className="border-b py-12" aria-labelledby="compare-with-heading">
      <PageWrapper>
        <SectionHeading
          id="compare-with-heading"
          title={`Compare ${providerName} With Other Providers`}
          subtitle="See how this provider stacks up against the alternatives."
          className="mb-6"
        />
        <div className="flex flex-wrap gap-3">
          {validComparisons.map(({ other, compareSlug }) => (
            <Link
              key={other.slug}
              href={`/compare/${compareSlug}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex items-center gap-2 text-sm"
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded text-xs font-bold text-white",
                  other.color
                )}
                aria-hidden="true"
              >
                {other.initial}
              </span>
              <ArrowLeftRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              {providerName} vs {other.name}
            </Link>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
