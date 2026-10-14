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
  title: "Compare Inmate Communication Providers",
  description:
    "Compare inmate communication providers side by side. See which provider is best for messaging, phone calls, video visits, and money transfers at federal prisons, state prisons, and county jails.",
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
          "Compare Inmate Communication Providers: JPay vs CorrLinks vs ConnectNetwork",
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

      {/* SEO content */}
      <section className="py-8 border-b">
        <PageWrapper>
          <div className="max-w-3xl space-y-6">

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                Every correctional facility contracts with specific providers for
                communication services. You cannot choose your preferred provider:
                you must use whichever company the facility has selected. However,
                understanding how providers compare helps you know what to expect
                when you find out which one your loved one facility uses.
              </p>
              <p>
                These comparison guides cover the most commonly asked questions
                families have when deciding how to communicate with an incarcerated
                loved one. Each guide explains the key differences between two
                providers across messaging, phone calls, video visits, cost, and
                ease of use.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Most Searched Comparisons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">JPay vs CorrLinks</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    JPay serves state prisons. CorrLinks serves federal prisons only.
                    If your loved one is in a federal facility, you need CorrLinks.
                    If they are in a state prison, JPay is most likely.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">JPay vs ConnectNetwork</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Both serve state prisons and county jails but under different
                    state contracts. JPay uses stamps for messaging. ConnectNetwork
                    uses credits. Check which one your facility uses first.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">GettingOut vs ConnectNetwork</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Both are GTL ViaPath platforms serving county jails. GettingOut
                    focuses on video visits and messaging. ConnectNetwork has broader
                    coverage including state prisons and federal facilities.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">JPay vs Securus</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Both are owned by Aventiv Technologies. JPay is more common at
                    state prisons. Securus is more common at county jails. The
                    facility contract determines which one you must use.
                  </p>
                </div>
              </div>
            </div>

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

      {/* FAQ */}
      <section className="py-10 border-t">
        <PageWrapper>
          <div className="max-w-3xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Which inmate communication provider is the best?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    There is no single best provider because you cannot choose: the
                    facility decides which provider to use. Among the providers,
                    GettingOut has the best-reviewed mobile app. CorrLinks is the
                    most reliable because it is the only federal option. JPay has
                    the widest state prison coverage. The best provider is whichever
                    one serves your loved one facility.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Can I use JPay if my loved one is in a federal prison?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    No. JPay does not serve federal Bureau of Prisons facilities.
                    Federal inmates use CorrLinks exclusively for messaging. If your
                    loved one is in a federal prison, create a CorrLinks account and
                    wait for their invitation. Do not sign up for JPay for a federal
                    inmate as it will not work.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Is ConnectNetwork the same as GTL?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    ConnectNetwork is the consumer platform operated by GTL, now
                    part of ViaPath Technologies. GTL holds the facility contracts
                    and ConnectNetwork is the website and app families use to access
                    those services. GettingOut is also a GTL platform, operated
                    through their Telmate subsidiary, primarily for county jails.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">What is the cheapest way to communicate with an inmate?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    The cheapest option depends on your facility. Physical mail is
                    free to send but slow. Electronic messaging costs between $0.25
                    and $0.50 per message depending on the provider. Phone calls
                    cost $0.11 per minute under current FCC caps for interstate
                    calls. Some states and counties offer free calls entirely.
                    Check our facility directory to see what is available at your
                    specific location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>
    </>
  )
}
