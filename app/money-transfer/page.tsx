import type { Metadata } from "next"
import Link from "next/link"
import {
  DollarSign,
  ArrowRight,
  Users,
  Building2,
  MapPin,
  CheckCircle,
} from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import SectionHeading from "@/components/shared/SectionHeading"
import RelatedLinks from "@/components/seo/RelatedLinks"
import JsonLd from "@/components/seo/JsonLd"
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  buildFaqSchema,
  buildHubSchema,
} from "@/lib/schema"
import { generateHubMetadata } from "@/lib/seo"

export const metadata: Metadata = {
  ...generateHubMetadata("money-transfer", "Inmate Money Transfer"),
  title: "Money Transfer: How to Send Money to an Inmate",
  description:
    "Learn how to send money to an inmate's trust account. Find approved transfer providers, understand fees, and discover how commissary accounts work.",
  robots: { index: true, follow: true },
}

const STEPS = [
  {
    number: "1",
    title: "Confirm the facility's accepted methods",
    body: "Each facility has specific rules about how money can be deposited to inmate accounts. Accepted methods vary and may include online transfers, retail kiosk deposits, money orders, or cashier's checks.",
  },
  {
    number: "2",
    title: "Identify the correct provider",
    body: "Facilities partner with specific money services such as JPay, Access Corrections, or ConnectNetwork. Sending money through the wrong service may result in delays or rejected transfers.",
  },
  {
    number: "3",
    title: "Gather the required information",
    body: "You will need the inmate's full legal name, their ID number, and the exact facility name. Some services also require the inmate's date of birth. Having this information ready before you start prevents errors.",
  },
  {
    number: "4",
    title: "Submit the transfer",
    body: "Complete the transfer through the provider's website, app, or at a retail kiosk. A processing fee applies on most services. Funds typically reach the inmate's account within one to two business days.",
  },
]

const PROVIDERS = [
  {
    name: "JPay",
    slug: "jpay",
    initial: "J",
    color: "bg-blue-600",
    tagline: "Commissary deposits for state prison inmates",
    coverage: "35 states, 1,000+ facilities",
  },
  {
    name: "ConnectNetwork",
    slug: "connectnetwork",
    initial: "C",
    color: "bg-teal-600",
    tagline: "Money transfers for federal and county facilities",
    coverage: "All 50 states, 1,800+ facilities",
  },
  {
    name: "Access Corrections",
    slug: "access-corrections",
    initial: "A",
    color: "bg-green-700",
    tagline: "Commissary deposits and money transfers nationwide",
    coverage: "All 50 states, 1,500+ facilities",
  },
  {
    name: "TouchPay",
    slug: "touchpay",
    initial: "T",
    color: "bg-lime-700",
    tagline: "Kiosk and online commissary deposits",
    coverage: "All 50 states, 1,200+ facilities",
  },
  {
    name: "Securus Technologies",
    slug: "securus",
    initial: "S",
    color: "bg-indigo-700",
    tagline: "Commissary and phone account deposits",
    coverage: "45 states, 1,200+ facilities",
  },
  {
    name: "GTL (ViaPath Technologies)",
    slug: "gtl",
    initial: "G",
    color: "bg-amber-600",
    tagline: "Inmate account funding at state prison facilities",
    coverage: "30 states, 800+ facilities",
  },
  {
    name: "SmartInmate",
    slug: "smartinmate",
    initial: "S",
    color: "bg-cyan-600",
    tagline: "Money transfers through a modern family platform",
    coverage: "20 states, 400+ facilities",
  },
]

const FACILITIES = [
  { name: "San Quentin State Prison", slug: "san-quentin-state-prison", state: "CA", type: "State Prison" },
  { name: "Attica Correctional Facility", slug: "attica-correctional-facility", state: "NY", type: "State Prison" },
  { name: "Federal Correctional Complex Coleman", slug: "federal-correctional-complex-coleman", state: "FL", type: "Federal Prison" },
  { name: "Cook County Jail", slug: "cook-county-jail", state: "IL", type: "County Jail" },
  { name: "Harris County Jail", slug: "harris-county-jail", state: "TX", type: "County Jail" },
  { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", state: "FL", type: "County Jail" },
  { name: "Rikers Island", slug: "rikers-island", state: "NY", type: "County Jail" },
  { name: "Folsom State Prison", slug: "folsom-state-prison", state: "CA", type: "State Prison" },
  { name: "Arizona State Prison Complex Florence", slug: "arizona-state-prison-complex-florence", state: "AZ", type: "State Prison" },
  { name: "Sing Sing Correctional Facility", slug: "sing-sing-correctional-facility", state: "NY", type: "State Prison" },
]

const FAQS = [
  {
    question: "How do I send money to an inmate?",
    answer:
      "Find the provider contracted by the facility where your loved one is housed, create a free account, and submit a transfer online, through a mobile app, or at a retail kiosk. You will need the inmate's full legal name, ID number, and facility name. A processing fee applies on most transfers. Funds typically arrive within one to two business days.",
  },
  {
    question: "What is an inmate trust account?",
    answer:
      "An inmate trust account is a facility-managed account that holds funds for an incarcerated individual. Money deposited by family members goes into this account. The inmate can then use those funds to purchase items from the facility commissary, pay for communication services like phone calls or messaging stamps, and cover other approved expenses.",
  },
  {
    question: "What is commissary?",
    answer:
      "Commissary is the facility store where inmates can buy additional food, hygiene products, stationery, clothing, and other approved items using funds from their trust account. Commissary is separate from the meals provided by the facility. Having commissary funds can meaningfully improve an inmate's daily quality of life, especially in facilities with limited state-provided provisions.",
  },
  {
    question: "How long does it take for money to reach an inmate?",
    answer:
      "Online and app-based transfers typically process within one to two business days. In-person kiosk deposits may be credited faster, sometimes within hours at participating facilities. Money orders and checks take longer, often three to five business days after the facility receives them. During holidays or facility lockdowns, processing can take additional time.",
  },
  {
    question: "How much does it cost to send money to an inmate?",
    answer:
      "Processing fees vary by provider and transfer amount. JPay typically charges 2.75% of the transfer amount or a minimum of $2.95, whichever is greater. ConnectNetwork fees depend on the transfer method and amount. Some providers offer lower fees for larger transfers. Always check the current fee schedule on the provider's website before sending.",
  },
  {
    question: "Is there a limit on how much money I can send?",
    answer:
      "Yes. Transfer limits are set by the provider and sometimes by the facility. Most services allow between $200 and $500 per transaction, with monthly limits ranging from $300 to $1,000 depending on the provider and facility rules. Federal facilities through the BOP have specific deposit limits that may differ from state and county institutions.",
  },
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Money Transfer" },
]

const relatedLinks = [
  { label: "Messaging", href: "/messaging" },
  { label: "Video Calls", href: "/video-calls" },
  { label: "Photo Sharing", href: "/photo-sharing" },
  { label: "Phone Calls", href: "/phone-calls" },
  { label: "All Providers", href: "/providers" },
  { label: "All Facilities", href: "/facilities" },
  { label: "Compare Providers", href: "/compare" },
  { label: "All States", href: "/states" },
  { label: "Communication Guides", href: "/guides" },
  { label: "JPay Guide", href: "/provider/jpay" },
  { label: "ConnectNetwork Guide", href: "/provider/connectnetwork" },
  { label: "Securus Guide", href: "/provider/securus" },
]

export default function MoneyTransferPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Money Transfer: How to Send Money to an Inmate",
          "Learn how to send money to an inmate's trust account. Find approved transfer providers, understand fees, and discover how commissary accounts work.",
          "/money-transfer"
        )}
      />
      <JsonLd schema={buildHubSchema("money-transfer", "Inmate Money Transfer")} />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd schema={buildFaqSchema(FAQS)} />

      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Hero */}
      <section
        className="border-b bg-card py-14"
        aria-labelledby="money-transfer-hero-heading"
      >
        <PageWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <DollarSign className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
            </div>
            <h1
              id="money-transfer-hero-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Sending Money to Inmates
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Money deposited into an inmate's trust account helps cover commissary
              purchases, phone calls, and other daily needs. Find the right provider,
              understand the fees, and learn how to send funds quickly and correctly.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">7+</p>
                <p className="text-sm text-muted-foreground">Transfer providers</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Facilities covered</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">50</p>
                <p className="text-sm text-muted-foreground">States covered</p>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>

      {/* How It Works */}
      <section className="border-b py-14" aria-labelledby="how-transfer-works">
        <PageWrapper>
          <SectionHeading
            id="how-transfer-works"
            title="How Inmate Money Transfer Works"
            subtitle="Four steps to send funds to an inmate's trust account."
            className="mb-10 text-center"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.number} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {step.number}
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </PageWrapper>
      </section>

      {/* Providers */}
      <section className="border-b py-14" aria-labelledby="transfer-providers">
        <PageWrapper>
          <SectionHeading
            id="transfer-providers"
            title="Money Transfer Providers"
            subtitle="These services process funds to inmate trust accounts at correctional facilities across the United States."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROVIDERS.map((provider) => (
              <Link
                key={provider.slug}
                href={`/provider/${provider.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${provider.color} text-sm font-bold text-white`}
                  >
                    {provider.initial}
                  </div>
                  <span className="font-semibold text-foreground text-sm">
                    {provider.name}
                  </span>
                </div>
                <p className="mb-3 flex-1 text-xs text-muted-foreground leading-relaxed">
                  {provider.tagline}
                </p>
                <p className="text-xs text-muted-foreground">{provider.coverage}</p>
                <span className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                  View guide
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all providers
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </PageWrapper>
      </section>

      {/* Featured Facilities */}
      <section className="border-b py-14" aria-labelledby="transfer-facilities">
        <PageWrapper>
          <SectionHeading
            id="transfer-facilities"
            title="Facilities With Money Transfer Services"
            subtitle="A selection of facilities where you can send funds to inmate trust accounts."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((facility) => (
              <Link
                key={facility.slug}
                href={`/facility/${facility.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Building2 className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary leading-snug">
                    {facility.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {facility.type} &middot; {facility.state}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Browse all facilities
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </PageWrapper>
      </section>

      {/* Key Facts */}
      <section className="border-b py-14" aria-labelledby="transfer-key-facts">
        <PageWrapper>
          <SectionHeading
            id="transfer-key-facts"
            title="What to Know Before Sending Money"
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trust accounts and phone accounts are separate",
                body: "At many facilities, the commissary trust account and the phone calling account are separate. Verify which account you are funding based on how your loved one needs the money.",
              },
              {
                title: "Fees apply on most transfers",
                body: "All major providers charge a processing fee. Fees are typically a percentage of the transfer or a flat minimum, whichever is greater. Compare fees before choosing a service.",
              },
              {
                title: "Using the wrong provider causes delays",
                body: "Each facility partners with one or a limited number of transfer services. Sending money through an unapproved provider may result in delays or the transfer being rejected.",
              },
              {
                title: "Federal deposits work differently",
                body: "Federal Bureau of Prisons commissary deposits are processed through ConnectNetwork or by money order. The BOP website has current deposit instructions for all federal facilities.",
              },
              {
                title: "Transfer limits apply",
                body: "Most services cap individual transfers and monthly totals. Limits vary by provider and facility. Check the specific limits before initiating a large transfer.",
              },
              {
                title: "Refunds can be difficult",
                body: "If the inmate is transferred or released, getting a refund of unused account funds can take weeks. Some facilities require written requests. Always confirm the inmate's current location before sending large amounts.",
              },
            ].map((fact) => (
              <div key={fact.title} className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-sm text-foreground">{fact.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{fact.body}</p>
                </div>
              </div>
            ))}
          </div>
        </PageWrapper>
      </section>

      {/* FAQ */}
      <section className="border-b py-14" aria-labelledby="transfer-faq">
        <PageWrapper>
          <SectionHeading
            id="transfer-faq"
            title="Common Questions About Inmate Money Transfers"
            className="mb-10"
          />
          <div className="space-y-6 max-w-3xl">
            {FAQS.map((faq) => (
              <div key={faq.question} className="border-b pb-6 last:border-0 last:pb-0">
                <h3 className="mb-2 font-semibold text-foreground">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </PageWrapper>
      </section>

      {/* Related Links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>
    </>
  )
}
