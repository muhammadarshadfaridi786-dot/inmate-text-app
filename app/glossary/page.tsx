import type { Metadata } from "next"
import Link from "next/link"
import { ALL_TERMS, TERM_DETAILS } from "@/lib/data/glossary"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import GlossarySearch from "@/components/glossary/GlossarySearch"

export const metadata: Metadata = {
  title: "Prison Communication Glossary: JPay Stamps, CorrLinks, AdvancePay and More Explained",
  description:
    "Plain-language definitions for every prison communication term families need to know. Learn what JPay stamps, GTL AdvancePay, CorrLinks TRULINCS, commissary, inmate trust account, and other correctional terms mean.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    url: "/glossary",
    title: "Prison Communication Glossary",
    description:
      "Plain-language definitions for correctional and communication terms. Find out what commissary, CorrLinks, inmate messaging, and other common terms mean.",
  },
}

const allTermsForSchema = Object.values(TERM_DETAILS).map((t) => ({
  name: t.term,
  url: `/glossary/${t.slug}`,
}))

export default function GlossaryPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          "Prison Communication Glossary: Terms and Definitions for Families",
          "Plain-language definitions for prison communication terms. Learn what JPay stamps, CorrLinks, commissary, and other correctional terms mean.",
          "/glossary"
        )}
      />
      <JsonLd schema={buildItemListSchema(allTermsForSchema)} />

      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Prison Communication Glossary"
              subtitle="Plain-language definitions for the terms families encounter when navigating inmate communication. Search by name, browse by category, or use the A to Z navigation to find what you need."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              All definitions are written for people who are new to the prison communication system.
              No prior knowledge is assumed.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* Searchable glossary with alphabet nav */}
      <section className="py-10" aria-label="Glossary directory">
        <PageWrapper>
          <GlossarySearch terms={ALL_TERMS} />
        </PageWrapper>
      </section>

      {/* SEO content */}
      <section className="py-8 border-b">
        <PageWrapper>
          <div className="max-w-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Terms Defined</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground mt-1">Categories</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Plain Language</div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                The prison communication system comes with its own vocabulary that
                can be confusing for families who are new to it. Terms like TRULINCS,
                AdvancePay, inmate trust account, commissary, and PIN debit mean
                specific things in this context that may not be obvious from their
                names. This glossary explains each term in plain language without
                assuming any prior knowledge.
              </p>
              <p>
                Terms are organized into five categories: Communication covers
                messaging, phone, and video platforms. Facility Types explains
                the difference between federal prisons, state prisons, county jails,
                and private facilities. Finance covers money transfer, trust accounts,
                commissary, and fees. Technology covers the systems and platforms
                providers use. Administration covers legal and procedural terms
                families encounter during the incarceration process.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Most Searched Terms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/glossary/inmate-account"
                   className="rounded-lg border p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium text-sm">Inmate Account</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Also called a trust fund account. The facility-managed
                    account families fund for commissary, calls, and messaging.
                  </p>
                </Link>
                <Link href="/glossary/commissary"
                   className="rounded-lg border p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium text-sm">Commissary</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    The in-facility store where inmates buy food, hygiene
                    items, and stationery using their account balance.
                  </p>
                </Link>
                <Link href="/glossary/electronic-messaging"
                   className="rounded-lg border p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium text-sm">Electronic Messaging</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Digital messaging through platforms like JPay and CorrLinks,
                    reviewed by staff before delivery.
                  </p>
                </Link>
                <Link href="/glossary/inmate-phone-calls"
                   className="rounded-lg border p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium text-sm">Inmate Phone Calls</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Outgoing-only calls placed by the inmate. Fund a prepaid
                    account in advance to receive them.
                  </p>
                </Link>
              </div>
            </div>

          </div>
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
                  <h3 className="font-medium text-sm">What is a JPay stamp and how much does it cost?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    A JPay stamp is a virtual credit used to send electronic
                    messages through the JPay platform. Each standard text message
                    requires one stamp. Stamp prices vary widely by facility and
                    state, from around $0.10 in some states to $0.50 in others.
                    Photo attachments require one additional stamp per image.
                    Stamps are purchased in bundles and do not expire.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">What is the difference between an inmate trust account and a commissary account?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    An inmate trust account is the main financial account managed
                    by the facility where outside funds are deposited. A commissary
                    account is funded from the trust account and used specifically
                    for purchases at the facility store. In most facilities these
                    are the same account accessed in different ways, but some
                    facilities maintain them separately.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">What does TRULINCS stand for?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    TRULINCS stands for Trust Fund Limited Inmate Computer System.
                    It is the secure computer network operated by the Federal Bureau
                    of Prisons that provides incarcerated people with access to
                    electronic messaging through CorrLinks, along with limited other
                    digital services. Inmates access TRULINCS through secure terminals
                    in their housing unit.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">What is AdvancePay and how is it different from a collect call?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    AdvancePay is a prepaid calling account through ConnectNetwork
                    where families deposit money in advance and calls are deducted
                    from the balance. Collect calls charge the receiving phone bill
                    directly after each call. AdvancePay consistently offers lower
                    per-minute rates than collect calls and is the recommended option
                    for families who receive calls regularly.
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
