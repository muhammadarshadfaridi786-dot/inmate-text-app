import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { COUNTY_DETAILS } from "@/lib/data/counties"
import { buildFaqSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(COUNTY_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const county = COUNTY_DETAILS[slug]
  if (!county) return {}
  return {
    title: `${county.name} Jail Communication Guide: Messaging, Phone and Video Options`,
    description: `Find communication options for ${county.name} correctional facilities in ${county.stateName}. Discover which providers serve ${county.name} jails and prisons for messaging, phone calls, video visits, and money transfers.`,
    alternates: { canonical: `/county/${slug}` },
  }
}

export default async function CountyPage({ params }: PageProps) {
  const { slug } = await params
  const county = COUNTY_DETAILS[slug]
  if (!county) notFound()

  const countyFaqs = [
    {
      question: `How do I find the right communication provider for a ${county.name} facility?`,
      answer: `Each facility in ${county.name} contracts with specific providers. Select the facility from the list above to see which providers serve that location. You can also call the facility directly and ask which provider they use for messaging, phone calls, and video visits.`,
    },
    {
      question: `Which messaging platform do ${county.name} county jails use?`,
      answer: `County jails in ${county.name} most commonly use GettingOut by Telmate or ConnectNetwork by GTL for electronic messaging and video visits. The specific provider depends on the facility contract. Check the individual facility page for confirmed provider information.`,
    },
    {
      question: `Are phone calls free at ${county.name} facilities?`,
      answer: `Phone call costs depend on the specific facility and provider contract. Under current FCC rules, interstate calls are capped at $0.11 per minute for prisons and large jails. Some counties have implemented free call programs. Contact the specific facility to find out whether free calls apply at that location.`,
    },
    {
      question: `What do I do if my loved one transfers from a ${county.name} jail to a state prison?`,
      answer: `When someone transfers from a county jail to a state prison, the communication provider usually changes. You will need to create new accounts on the state prison provider, most commonly JPay or ConnectNetwork. Confirm the new facility and provider before setting up new accounts or sending funds.`,
    },
    {
      question: `How do I send money to someone in a ${county.name} facility?`,
      answer: `Money transfers go to the inmate trust account through the facility approved provider. Common providers include JPay, Access Corrections, TouchPay, and ConnectNetwork. Select the facility above to find which money transfer provider serves that location. Always confirm the inmate ID number before sending funds.`,
    },
  ]

  const stateHref = `/state/${county.stateSlug}`

  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          `${county.name} Jail and Prison Communication Guide`,
          `Find messaging, phone, video, and money transfer options for ${county.name} correctional facilities in ${county.stateName}.`,
          `/county/${county.slug}`
        )}
      />
      <JsonLd schema={buildFaqSchema(countyFaqs)} />

      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <nav className="text-xs text-muted-foreground mb-3">
              <a href="/facilities">Facilities</a> {" › "}
              <a href={stateHref}>{county.stateName}</a> {" › "}
              {county.name}
            </nav>
            <h1 className="text-3xl font-bold tracking-tight mb-3">
              {county.name} Jail and Prison Communication Guide
            </h1>
            <p className="text-muted-foreground">
              Find messaging, phone calls, video visits, and money transfer options
              for correctional facilities in {county.name}, {county.stateName}.
              Free directory with no account required.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* Stats */}
      <section className="py-8 border-b">
        <PageWrapper>
          <div className="max-w-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {county.facilityCount}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Facilities</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {county.providers.length}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Providers</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">{county.stateName}</div>
                <div className="text-sm text-muted-foreground mt-1">State</div>
              </div>
            </div>

            {/* Overview */}
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              {county.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p>
                Use this directory to find the correct communication provider for any
                {" "}
                {county.name} facility. Creating accounts on providers like JPay,
                ConnectNetwork, GettingOut, or Securus is free. You pay only when you
                send messages, make calls, or schedule video visits.
              </p>
            </div>

            {/* Providers */}
            {county.providers.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">
                  Communication Providers in {county.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {county.providers.map((provider) => (
                    <a
                      key={provider.slug}
                      href={`/provider/${provider.slug}`}
                      className="rounded-lg border p-4 hover:border-primary transition-colors"
                    >
                      <div className="font-medium text-sm">{provider.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {provider.description}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Facilities */}
            {county.featuredFacilities.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">
                  Correctional Facilities in {county.name}
                </h2>
                <div className="space-y-2">
                  {county.featuredFacilities.map((facility) => (
                    <a
                      key={facility.slug}
                      href={`/facility/${facility.slug}`}
                      className="flex items-center justify-between rounded-lg border p-3 hover:border-primary transition-colors"
                    >
                      <span className="text-sm font-medium">
                        {facility.name}
                        <span className="text-xs font-normal text-muted-foreground">
                          {" "}
                          · {facility.type}
                        </span>
                      </span>
                      <span className="text-xs text-muted-foreground">View guide →</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                Frequently Asked Questions for {county.name}
              </h2>
              <div className="space-y-3">
                {countyFaqs.map((faq) => (
                  <div key={faq.question} className="rounded-lg border p-4">
                    <h3 className="font-medium text-sm">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related links */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Related Resources</h2>
              <div className="flex flex-wrap gap-2">
                <a href="/guides" className="text-sm text-primary hover:underline">
                  Communication Guides
                </a>
                <span className="text-muted-foreground">·</span>
                <a href="/providers" className="text-sm text-primary hover:underline">
                  All Providers
                </a>
                <span className="text-muted-foreground">·</span>
                <a href="/facilities" className="text-sm text-primary hover:underline">
                  All Facilities
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href="/guides/county-jail-vs-state-prison"
                  className="text-sm text-primary hover:underline"
                >
                  County Jail vs State Prison
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href="/guides/how-to-find-an-inmate"
                  className="text-sm text-primary hover:underline"
                >
                  How to Find an Inmate
                </a>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>
    </>
  )
}
