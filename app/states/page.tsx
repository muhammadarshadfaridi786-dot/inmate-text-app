import type { Metadata } from "next"
import { ALL_STATES } from "@/lib/data/states"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import StatesSearch from "@/components/state/StatesSearch"

export const metadata: Metadata = {
  title: "Prison Communication by State: Find Facilities and Providers in All 50 States",
  description:
    "Find correctional facilities and communication providers in all 50 US states. Discover which messaging, phone, video, and money transfer services are available in your state's prisons and jails.",
  alternates: { canonical: "/states" },
  openGraph: {
    url: "/states",
    title: "All 50 US States: Prison Communication Directory",
    description:
      "Find prisons and communication options in every US state. Browse our complete state-by-state correctional facility directory.",
  },
}

const statesForSchema = ALL_STATES
  .filter((s) => s.hasDetailPage)
  .map((s) => ({ name: s.name, url: `/state/${s.slug}` }))

export default function StatesPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Prison Communication by State: All 50 US States Directory",
          "Find prisons and communication options in every US state. Browse our complete state-by-state correctional facility directory.",
          "/states"
        )}
      />
      <JsonLd schema={buildItemListSchema(statesForSchema)} />
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="All 50 US States"
              subtitle="Browse prisons, jails, and communication options by state. Select your state to find available providers and messaging services."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Browse all 50 U.S. states to find correctional facilities and available communication providers in each state.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* SEO content */}
      <section className="py-8 border-b">
        <PageWrapper>
          <div className="max-w-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">50</div>
                <div className="text-sm text-muted-foreground mt-1">States Covered</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">7,000+</div>
                <div className="text-sm text-muted-foreground mt-1">Facilities Nationwide</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Communication Providers</div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                Every state operates its own Department of Corrections with its own
                contracted communication providers. The messaging platform, phone provider,
                and video visitation service available to your family depends entirely on
                which state your loved one is incarcerated in and which specific facility
                they are housed at. Select your state below to find facilities and provider
                information specific to that state system.
              </p>
              <p>
                Communication providers vary significantly between states. JPay is the most
                common messaging provider for state prisons, serving over 35 states. Securus
                Technologies handles phone and communication services at facilities in many
                states. Some states such as Minnesota and New Jersey have implemented free
                or reduced-cost calling programs. Select your state to find current provider
                information and available communication options.
              </p>
            </div>

          </div>
        </PageWrapper>
      </section>

      {/* Searchable state grid */}
      <section className="py-10" aria-label="State directory">
        <PageWrapper>
          <StatesSearch states={ALL_STATES} />
        </PageWrapper>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t">
        <PageWrapper>
          <div className="max-w-3xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>

              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Do all states use the same inmate communication provider?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    No. Each state negotiates its own contracts with communication providers
                    independently. JPay is the most common provider for state prison messaging,
                    serving over 35 states, but not all states use JPay. Some states use
                    ConnectNetwork, Securus, or other providers. Select your state to find
                    which providers serve facilities there.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Are phone calls free in any state?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Yes. A growing number of states have eliminated phone call charges at
                    state facilities. Minnesota DOC phone calls are currently free of charge.
                    New Jersey reduced its rates to $0.034 per minute as of May 2025.
                    Several counties across the country also offer free calls at local jails.
                    Select your state to see current rate information.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">What happens to my communication account when my loved one transfers to a different state facility?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    If the new facility uses the same provider, your account typically
                    continues without interruption. If the new facility uses a different
                    provider, you will need to create a new account. Always confirm the
                    current facility and provider before setting up new accounts or sending
                    funds after a transfer.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">How do I find what state my loved one is incarcerated in?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    If your loved one is in a federal prison, use the Bureau of Prisons
                    inmate locator at bop.gov to find their current location. For state
                    inmates, search the Department of Corrections website for the state
                    where they were sentenced. Each state DOC maintains a public inmate
                    search tool accessible through their official website.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Can county jail communication providers differ from state prison providers in the same state?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Yes. County jails negotiate their own provider contracts independently
                    from the state Department of Corrections. A county jail in Texas may
                    use a completely different messaging or phone provider than a Texas
                    state prison. Always look up the specific facility rather than assuming
                    all facilities in a state use the same provider.
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
