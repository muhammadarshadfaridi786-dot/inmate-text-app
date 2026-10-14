import type { Metadata } from "next"
import { ALL_PROVIDERS } from "@/lib/data/providers"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ProvidersSearch from "@/components/provider/ProvidersSearch"

export const metadata: Metadata = {
  title: "Inmate Communication Providers: JPay, CorrLinks and More",
  description:
    "Compare all major inmate communication providers including JPay, CorrLinks, ConnectNetwork, GettingOut, Securus, and TextBehind. Find pricing, services, facility coverage, and setup guides for each provider.",
  alternates: { canonical: "/providers" },
  openGraph: {
    url: "/providers",
    title: "Inmate Communication Providers Directory",
    description:
      "Compare JPay, ConnectNetwork, GettingOut, CorrLinks, and more. Find the right provider for messaging, video, and phone at any correctional facility.",
  },
}

const providersForSchema = ALL_PROVIDERS
  .filter((p) => p.hasDetailPage)
  .map((p) => ({ name: p.name, url: `/provider/${p.slug}` }))

export default function ProvidersPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Inmate Communication Providers: JPay, CorrLinks, ConnectNetwork, Securus and More",
          "Compare inmate communication providers including JPay, ConnectNetwork, GettingOut, CorrLinks, TextBehind, SmartInmate, and Pigeonly.",
          "/providers"
        )}
      />
      <JsonLd schema={buildItemListSchema(providersForSchema)} />
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Communication Providers Directory"
              subtitle="Browse and compare inmate communication providers. Filter by service type to find which providers offer messaging, video visits, phone calls, and more."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Provider availability varies by facility. Always confirm the correct provider
              for the specific correctional institution before setting up an account.
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
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Providers Listed</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground mt-1">Facilities Covered</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">50</div>
                <div className="text-sm text-muted-foreground mt-1">States Served</div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                Inmate communication providers are companies that contract with correctional
                facilities to provide messaging, phone calls, video visitation, photo sharing,
                and money transfer services. Every facility works with specific providers under
                exclusive contracts. You cannot choose your preferred provider: you must use
                whichever company the facility has contracted with for each service type.
              </p>
              <p>
                The provider you need depends entirely on where your loved one is incarcerated.
                Federal Bureau of Prisons facilities use CorrLinks for messaging and
                ConnectNetwork for phone calls. Most state prisons use JPay or Securus.
                County jails commonly use GettingOut or ConnectNetwork. Use the facility
                directory to find the correct provider for your specific location before
                creating any account.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Provider Quick Reference</h2>

              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">JPay: Best for State Prisons</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    JPay serves over 35 states and 1,000+ state prison facilities.
                    Uses a stamp-based messaging system. Also offers video visits,
                    photo sharing, and money transfers. Does not serve federal prisons.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">CorrLinks: Only Option for Federal Prisons</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    CorrLinks is the exclusive messaging platform for all federal Bureau
                    of Prisons facilities. The inmate must initiate contact first.
                    Text messaging only, no photo attachments as of 2025. Free for
                    outside contacts to create an account.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">ConnectNetwork: Widest Coverage</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    ConnectNetwork by GTL serves 1,800+ facilities across all 50 states
                    including county jails, state prisons, and federal facilities.
                    Handles phone calls, video visits, messaging, and money transfers
                    under one account.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">GettingOut: Best for County Jails</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    GettingOut by Telmate serves 2,200+ county jails across 45 states.
                    Known for its well-reviewed mobile app and video visitation focus.
                    If your loved one is in a county jail, GettingOut is one of the
                    first providers to check.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Securus Technologies: Large County Jail Network</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Securus serves 1,200+ facilities across 45 states, primarily county
                    jails and some state prisons. Provides phone calls, video visits,
                    and messaging. Free Securus Mobile app available for iOS and Android.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">TextBehind and Pigeonly: When Electronic Messaging Is Not Available</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    TextBehind and Pigeonly convert your digital messages and photos
                    into physical printed mail delivered to the inmate. These services
                    work at nearly any facility that accepts mail, making them useful
                    when electronic messaging is not available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>

      {/* Searchable provider grid */}
      <section className="py-10" aria-label="Provider directory">
        <PageWrapper>
          <ProvidersSearch providers={ALL_PROVIDERS} />
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
                  <h3 className="font-medium text-sm">How do I know which provider to use?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Search our facility directory for the specific facility where your
                    loved one is housed. Each facility page lists which providers are
                    available for messaging, phone calls, video visits, and money
                    transfers. You can also call the facility directly and ask.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Can I use one account for all providers?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    No. Each provider is a separate company with its own account system.
                    If your loved one is at a JPay facility, you need a JPay account.
                    If they transfer to a CorrLinks facility, you need a separate
                    CorrLinks account. You cannot use one account across different providers.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Are provider accounts free to create?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Yes. Creating an account on JPay, CorrLinks, ConnectNetwork,
                    GettingOut, and Securus is free. You pay only when you send
                    messages, make calls, schedule video visits, or transfer money.
                    Always start with a small initial deposit to confirm the platform
                    works correctly before adding a large balance.
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
