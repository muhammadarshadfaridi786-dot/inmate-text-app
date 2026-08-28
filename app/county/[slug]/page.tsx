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

            <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
              <p>
                {county.name} correctional facilities are operated at the county,
                state, and in some cases federal level. Each facility contracts with
                a specific communication provider. That provider is different from
                facility to facility. Signing up for the wrong provider is the most
                common mistake families make when first trying to reach an
                incarcerated loved one in {county.name}.
              </p>
              <p>
                County jails in {county.name} most commonly use GettingOut by Telmate
                or ConnectNetwork by GTL. State prisons serving {county.name} residents
                typically use JPay or Securus. Federal facilities use CorrLinks for
                messaging and ConnectNetwork for phone calls. Select the specific
                facility below to confirm which provider is correct before creating
                any account or sending any funds.
              </p>
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
              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">
                    Which provider do I use for {county.name} county jail?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    The most common providers at county jails in {county.name} are
                    GettingOut by Telmate and ConnectNetwork by GTL. However, the
                    correct provider depends on the specific facility. Select the
                    facility above to confirm which provider is active before creating
                    an account. Using the wrong provider means your messages and
                    deposits will not reach your loved one.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">
                    How do I avoid signing up for the wrong provider in {county.name}?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Always confirm the exact facility name and location first.
                    Then select that facility from this directory to see which
                    provider is confirmed for that location. Do not search for
                    "inmate phone account" or "jail messaging" without first
                    knowing the exact provider. General searches often lead to
                    the wrong platform. Start with a small initial deposit to
                    confirm the platform works before adding a large balance.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">
                    Are messaging funds and phone funds the same account in {county.name}?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Not always. At many facilities, the messaging account and the
                    phone call account are separate and funds cannot be transferred
                    between them. Always confirm which account type you are funding
                    before making a deposit. Sending money to the wrong account type
                    means the inmate cannot access it for the intended purpose.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">
                    How much do phone calls cost from {county.name} jails?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Under current FCC rules, interstate calls from county jails
                    are capped at $0.11 per minute for large facilities. In-state
                    rates vary. Some counties offer free calls. Contact the specific
                    facility or check the provider account dashboard to find the
                    exact rate that applies to your loved one location.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">
                    What happens when my loved one transfers from {county.name} jail to state prison?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    The communication provider changes when someone moves from a
                    county jail to a state prison. Your existing county jail accounts
                    and balances do not transfer to the state prison platform. You
                    will need to create new accounts on the state prison provider,
                    most commonly JPay or ConnectNetwork. Confirm the new facility
                    and provider before setting up new accounts or sending any funds.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">
                    How do I send money to someone in a {county.name} facility?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Money transfers go to the inmate trust account through the
                    facility approved provider. Common providers in {county.name}
                    include JPay, Access Corrections, TouchPay, and ConnectNetwork.
                    Select the specific facility above to find which money transfer
                    provider serves that location. Always use the correct inmate ID
                    number and confirm the facility name before sending any funds.
                  </p>
                </div>
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
