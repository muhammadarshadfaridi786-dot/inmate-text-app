import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ALL_COMPARISONS } from "@/lib/data/comparisons"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"

export const metadata: Metadata = {
  title: "Compare Inmate Communication Providers: Side-by-Side",
  description:
    "Compare inmate communication providers side by side. See pricing, features, app ratings, and facility coverage to find the best option for your situation.",
  alternates: { canonical: "/compare" },
  openGraph: {
    url: "/compare",
    title: "Compare Inmate Communication Providers",
    description:
      "Side-by-side provider comparisons. Find out whether JPay, CorrLinks, ConnectNetwork, GettingOut, or others best fits your facility and needs.",
  },
}

const featured = ALL_COMPARISONS.filter((c) => c.featured)
const others = ALL_COMPARISONS.filter((c) => !c.featured)

const comparisonsForSchema = ALL_COMPARISONS.map((c) => ({
  name: `${c.providerAName} vs ${c.providerBName}`,
  url: `/compare/${c.slug}`,
}))

export default function ComparePage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Compare Inmate Communication Providers",
          "Side-by-side provider comparisons. Find out whether JPay, CorrLinks, ConnectNetwork, GettingOut, or others best fits your facility and needs.",
          "/compare"
        )}
      />
      <JsonLd schema={buildItemListSchema(comparisonsForSchema)} />
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Compare Inmate Communication Providers"
              subtitle="Not sure which platform is right for your situation? Browse side-by-side comparisons across features, facility coverage, pricing, and ease of use."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              The right provider depends on whether your loved one is in a state prison, county jail,
              or federal facility. Use these comparisons to find the best match before creating an account.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* Featured comparisons */}
      <section className="border-b py-10" aria-labelledby="featured-comparisons-heading">
        <PageWrapper>
          <SectionHeading
            id="featured-comparisons-heading"
            title="Most Popular Comparisons"
            subtitle="The comparisons families search for most often."
            className="mb-6"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <Badge variant="secondary" className="mb-3 self-start text-xs">
                  {comparison.category}
                </Badge>
                <h2 className="mb-2 text-base font-semibold text-foreground">
                  {comparison.providerAName} vs {comparison.providerBName}
                </h2>
                <p className="mb-4 flex-1 text-sm leading-6 text-muted-foreground">
                  {comparison.winnerReason}
                </p>
                <span
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
                </span>
              </Link>
            ))}
          </div>
        </PageWrapper>
      </section>

      {/* All other comparisons */}
      {others.length > 0 && (
        <section className="py-10" aria-labelledby="more-comparisons-heading">
          <PageWrapper>
            <SectionHeading
              id="more-comparisons-heading"
              title="More Comparisons"
              className="mb-6"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((comparison) => (
                <Link
                  key={comparison.slug}
                  href={`/compare/${comparison.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
                >
                  <Badge variant="secondary" className="mb-3 self-start text-xs">
                    {comparison.category}
                  </Badge>
                  <h2 className="mb-2 text-base font-semibold text-foreground">
                    {comparison.providerAName} vs {comparison.providerBName}
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-6 text-muted-foreground">
                    {comparison.winnerReason}
                  </p>
                  <span
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
                  </span>
                </Link>
              ))}
            </div>
          </PageWrapper>
        </section>
      )}
    </>
  )
}
