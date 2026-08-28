import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { COUNTY_DETAILS } from "@/lib/data/counties"
import { buildWebPageSchema } from "@/lib/schema"
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
    title: `${county.name} Jail Communication Guide: Find the Right Provider`,
    description: `Find the correct messaging, phone, and video provider for ${county.name} correctional facilities in ${county.stateName}. Avoid signing up for the wrong platform. Free directory updated for 2026.`,
    alternates: { canonical: `/county/${slug}` },
    openGraph: {
      url: `/county/${slug}`,
      title: `${county.name} Jail Communication Guide`,
      description: `Find messaging, phone, video, and money transfer options for ${county.name} correctional facilities in ${county.stateName}.`,
    },
  }
}

export default async function CountyPage({ params }: PageProps) {
  const { slug } = await params
  const county = COUNTY_DETAILS[slug]
  if (!county) notFound()

  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          `${county.name} Jail and Prison Communication Guide`,
          `Find messaging, phone, video, and money transfer options for ${county.name} correctional facilities in ${county.stateName}.`,
          `/county/${county.slug}`
        )}
      />

      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight mb-3">
              {county.name} Jail and Prison Communication Guide
            </h1>
            <p className="text-muted-foreground">
              Find the correct messaging, phone call, video visitation, and money
              transfer provider for correctional facilities in {county.name}, {county.stateName}.
              Using the wrong provider is the most common mistake families make.
              This directory shows you exactly which platform to use before you sign up.
            </p>
          </div>
        </PageWrapper>
      </section>

      <section className="py-8 border-b">
        <PageWrapper>
          <div className="max-w-3xl space-y-8">

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

            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">
                  Which provider do {county.name} county jails use?
                </p>
                <p>
                  {county.name} correctional facilities contract with specific providers
                  for each communication type. County jails most commonly use GettingOut
                  by Telmate or ConnectNetwork by GTL. State prisons serving {county.name}
                  residents typically use JPay or Securus. Federal facilities use CorrLinks
                  for messaging. The provider you need depends entirely on which specific
                  facility your loved one is housed in.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  What is the most common mistake families make in {county.name}?
                </p>
                <p>
                  Signing up for the wrong provider is the most common mistake.
                  Families search for "inmate phone account" and sign up with a company
                  that does not serve their loved one facility. Always confirm the exact
                  facility name first, then use this directory to find the correct provider
                  before creating any account or sending any funds.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Are phone calls free at {county.name} facilities?
                </p>
                <p>
                  Phone call costs depend on the specific facility and provider contract.
                  Under current FCC rules in effect as of 2026, interstate calls are capped
                  at $0.11 per minute for large jails. Some counties have eliminated call
                  charges entirely. Minnesota DOC calls are free. Some California, New York,
                  and Colorado facilities also offer free calls. Contact the specific facility
                  to confirm whether free calls apply at that location.
                </p>
              </div>
            </div>

            {county.providers.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">
                  Communication Providers in {county.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  These providers serve facilities in {county.name}.
                  The correct provider depends on the specific facility.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {county.providers.map((provider) => (
                    <a
                      key={provider.slug}
                      href={`/provider/${provider.slug}`}
                      className="rounded-lg border p-4 hover:border-primary transition-colors"
                    >
                      <div className="font-medium text-sm">{provider.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        View setup guide and account instructions →
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {county.featuredFacilities.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">
                  Correctional Facilities in {county.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Select a facility to find the correct provider and
                  communication options for that specific location.
                </p>
                <div className="space-y-2">
                  {county.featuredFacilities.map((facility) => (
                    <a
                      key={facility.slug}
                      href={`/facility/${facility.slug}`}
                      className="flex items-center justify-between rounded-lg border p-3 hover:border-primary transition-colors"
                    >
                      <span className="text-sm font-medium">{facility.name}</span>
                      <span className="text-xs text-primary">View communication guide →</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                Frequently Asked Questions for {county.name}
              </h2>
              <div className="space-y-2">
                {[
                  {
                    q: `Which provider do I use for ${county.name} county jail?`,
                    a: `The most common providers at county jails in ${county.name} are GettingOut by Telmate and ConnectNetwork by GTL. However, the correct provider depends on the specific facility. Select the facility above to confirm which provider is active before creating an account. Using the wrong provider means your messages and deposits will not reach your loved one.`,
                  },
                  {
                    q: `How do I avoid signing up for the wrong provider in ${county.name}?`,
                    a: `Always confirm the exact facility name and location first. Then select that facility from this directory to see which provider is confirmed. Do not search for "inmate phone account" without first knowing the exact provider. General searches often lead to the wrong platform. Start with a small initial deposit to confirm the platform works before adding a large balance.`,
                  },
                  {
                    q: `Are messaging funds and phone funds the same account in ${county.name}?`,
                    a: `Not always. At many ${county.name} facilities, the messaging account and the phone call account are separate and funds cannot be transferred between them. Always confirm which account type you are funding before making a deposit.`,
                  },
                  {
                    q: `How much do phone calls cost from ${county.name} jails?`,
                    a: `Under current FCC rules, interstate calls from county jails are capped at $0.11 per minute for large facilities. In-state rates vary. Some counties offer free calls. Contact the specific facility or check the provider account dashboard to find the exact rate.`,
                  },
                  {
                    q: `What happens when my loved one transfers from a ${county.name} jail to a state prison?`,
                    a: `The communication provider changes when someone moves from a county jail to a state prison. Your existing county jail accounts and balances do not transfer to the state prison platform. You will need to create new accounts on the state prison provider, most commonly JPay or ConnectNetwork.`,
                  },
                  {
                    q: `How do I send money to someone in a ${county.name} facility?`,
                    a: `Money transfers go to the inmate trust account through the facility approved provider. Common providers include JPay, Access Corrections, TouchPay, and ConnectNetwork. Select the specific facility above to find which money transfer provider serves that location.`,
                  },
                  {
                    q: `Can I do a video visit with someone in ${county.name} jail?`,
                    a: `Video visitation is available at many county jails in ${county.name} through providers like GettingOut or ConnectNetwork. Sessions must be scheduled in advance through the provider platform. You need a device with a camera and a stable internet connection. Check the specific facility page to confirm whether video visits are available and which provider to use.`,
                  },
                  {
                    q: `What is the difference between a ${county.name} county jail and a state prison?`,
                    a: `County jails in ${county.name} are operated by local government and typically hold people awaiting trial or serving short sentences of less than one year. State prisons are operated by the state Department of Corrections and hold people serving longer sentences. Each uses different communication providers with different rules and costs.`,
                  },
                ].map((item, i) => (
                  <details key={i} className="rounded-lg border group">
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-sm list-none">
                      {item.q}
                      <span className="ml-2 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-muted-foreground">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-muted/50 p-4 space-y-2">
              <h2 className="font-semibold text-sm">Related Resources</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a href="/guides/county-jail-vs-state-prison" className="text-sm text-primary hover:underline">
                  County Jail vs State Prison Guide
                </a>
                <a href="/guides/how-to-find-an-inmate" className="text-sm text-primary hover:underline">
                  How to Find an Inmate
                </a>
                <a href="/guides/how-to-set-up-inmate-email" className="text-sm text-primary hover:underline">
                  How to Set Up Inmate Email
                </a>
                <a href="/guides/how-inmate-messaging-works" className="text-sm text-primary hover:underline">
                  How Inmate Messaging Works
                </a>
                <a href="/providers" className="text-sm text-primary hover:underline">
                  All Providers
                </a>
                <a href="/facilities" className="text-sm text-primary hover:underline">
                  All Facilities
                </a>
              </div>
            </div>

          </div>
        </PageWrapper>
      </section>
    </>
  )
}
