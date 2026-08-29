import type { Metadata } from "next"
import { ALL_FACILITIES } from "@/lib/data/facilities"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import FacilitiesSearch from "@/components/facility/FacilitiesSearch"

export const metadata: Metadata = {
  title: "Correctional Facilities Directory: 100+ U.S. Prisons, Jails and Detention Centers",
  description:
    "Search our directory of federal prisons, state prisons, county jails and detention centers across the United States. Find which communication providers serve each facility for messaging, phone calls, video visits and money transfers.",
  alternates: { canonical: "/facilities" },
  openGraph: {
    url: "/facilities",
    title: "Correctional Facilities Directory: Find Communication Options",
    description:
      "Browse prisons, jails, and correctional facilities across the United States. Find messaging, video, and phone options for any facility.",
  },
}

const facilitiesForSchema = ALL_FACILITIES
  .filter((f) => f.hasDetailPage)
  .map((f) => ({ name: f.name, url: `/facility/${f.slug}` }))

export default function FacilitiesPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Correctional Facilities Directory: Federal Prisons, State Prisons and County Jails",
          "Browse prisons, jails, and correctional facilities across the United States. Find messaging, video, and phone options for any facility.",
          "/facilities"
        )}
      />
      <JsonLd schema={buildItemListSchema(facilitiesForSchema)} />
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Correctional Facilities Directory"
              subtitle="Search prisons, jails, and detention centers by name, state, or facility type. Find available communication providers and messaging options."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Browse our directory of correctional facilities across the United States. Select a state below to find facilities and discover which communication providers serve each location.
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
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Facilities Listed</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">50</div>
                <div className="text-sm text-muted-foreground mt-1">States Covered</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Communication Providers</div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                Our facility directory covers federal prisons operated by the Bureau of Prisons,
                state prisons operated by each state Department of Corrections, county jails
                operated by local sheriff offices, and private correctional facilities. Each
                facility page lists which communication providers serve that location for
                messaging, phone calls, video visitation, and money transfers.
              </p>
              <p>
                Communication providers vary by facility. Federal prisons use CorrLinks for
                messaging and ConnectNetwork for phone calls. State prisons most commonly use
                JPay or Securus. County jails often use GettingOut or ConnectNetwork. The only
                way to know which provider your loved one facility uses is to look up the
                specific facility in this directory or call the facility directly.
              </p>
            </div>

          </div>
        </PageWrapper>
      </section>

      {/* Searchable facility grid */}
      <section className="py-10" aria-label="Facility directory">
        <PageWrapper>
          <FacilitiesSearch facilities={ALL_FACILITIES} />
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
                  <h3 className="font-medium text-sm">How do I find out which communication provider my loved one facility uses?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Search for the facility by name in the directory above. Each facility page
                    lists the messaging, phone, video, and money transfer providers available
                    at that location. You can also call the facility directly and ask which
                    provider they use for each type of communication.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">What is the difference between a federal prison, state prison, and county jail?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Federal prisons hold people convicted of federal crimes and are operated
                    by the Bureau of Prisons. State prisons hold people convicted of state
                    crimes and are operated by each state Department of Corrections. County
                    jails hold people awaiting trial or serving short sentences and are
                    operated by local government. Each type uses different communication
                    providers and has different rules for families.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Can I use the same messaging account at any facility?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    No. Each facility contracts with specific providers and you must use
                    whichever provider that facility has chosen. If your loved one transfers
                    to a new facility that uses a different provider, you will need to create
                    a new account on the new provider platform.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">What should I do if my loved one facility is not in this directory?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Call the facility directly and ask which communication providers they use
                    for messaging, phone calls, video visits, and money transfers. You can
                    also search by state to find facilities near the one you are looking for.
                    We are continually expanding our directory to cover more facilities.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">How do prison phone call rates work in 2026?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Under current FCC rules, interstate prison phone call rates are capped at
                    $0.11 per minute for prisons and large jails. Some states and counties
                    offer free calls. The specific rate depends on the facility, the provider,
                    and whether the call is in-state or interstate. Check the facility page
                    for provider-specific rate information.
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
