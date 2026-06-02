import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
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
  ...generateHubMetadata("phone-calls", "Inmate Phone Calls"),
  title: "Phone Calls: How Inmate Calling Works",
  description:
    "Learn how inmate phone calls work. Find the right calling provider for your facility, understand rates, and set up a prepaid account to receive calls.",
  robots: { index: true, follow: true },
}

const STEPS = [
  {
    number: "1",
    title: "Find the right phone provider",
    body: "Each facility contracts with one phone provider. Confirm which company handles calls at your loved one's institution before creating an account. Using the wrong provider means you will not receive calls.",
  },
  {
    number: "2",
    title: "Create a prepaid account",
    body: "Register with the provider and fund a prepaid account linked to your phone number. Inmates initiate all calls from facility phones. You cannot call the facility to reach an inmate directly.",
  },
  {
    number: "3",
    title: "Get on the approved contact list",
    body: "The facility must approve your phone number before it can receive inmate calls. Submit your information through the provider's platform. The approval process can take several days at some institutions.",
  },
  {
    number: "4",
    title: "Wait for the call",
    body: "Inmates call during approved calling hours. Your prepaid account balance is charged per minute when a call connects. Monitor your balance and top up before it runs out to avoid missed calls.",
  },
]

const PROVIDERS = [
  {
    name: "Securus Technologies",
    slug: "securus",
    initial: "S",
    color: "bg-indigo-700",
    tagline: "Phone and video for county jails and state prisons",
    coverage: "45 states, 1,200+ facilities",
  },
  {
    name: "GTL (ViaPath Technologies)",
    slug: "gtl",
    initial: "G",
    color: "bg-amber-600",
    tagline: "State prison phone calls across 30+ states",
    coverage: "30 states, 800+ facilities",
  },
  {
    name: "ConnectNetwork",
    slug: "connectnetwork",
    initial: "C",
    color: "bg-teal-600",
    tagline: "Phone and video at federal and county facilities",
    coverage: "All 50 states, 1,800+ facilities",
  },
  {
    name: "JPay",
    slug: "jpay",
    initial: "J",
    color: "bg-blue-600",
    tagline: "Phone services at select state prison facilities",
    coverage: "35 states, 1,000+ facilities",
  },
  {
    name: "ICSolutions",
    slug: "icsolutions",
    initial: "I",
    color: "bg-sky-700",
    tagline: "Phone calls for county jails and detention centers",
    coverage: "15 states, 300+ facilities",
  },
  {
    name: "Pigeonly",
    slug: "pigeonly",
    initial: "P",
    color: "bg-rose-600",
    tagline: "Low-cost calling plans for families nationwide",
    coverage: "All 50 states, 3,000+ facilities",
  },
  {
    name: "City Tele Coin",
    slug: "city-tele-coin",
    initial: "C",
    color: "bg-red-700",
    tagline: "Inmate phone services for county facilities",
    coverage: "12 states, 180+ facilities",
  },
]

const FACILITIES = [
  { name: "San Quentin State Prison", slug: "san-quentin-state-prison", state: "CA", type: "State Prison" },
  { name: "Attica Correctional Facility", slug: "attica-correctional-facility", state: "NY", type: "State Prison" },
  { name: "Rikers Island", slug: "rikers-island", state: "NY", type: "County Jail" },
  { name: "Cook County Jail", slug: "cook-county-jail", state: "IL", type: "County Jail" },
  { name: "Federal Correctional Complex Coleman", slug: "federal-correctional-complex-coleman", state: "FL", type: "Federal Prison" },
  { name: "Harris County Jail", slug: "harris-county-jail", state: "TX", type: "County Jail" },
  { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", state: "FL", type: "County Jail" },
  { name: "Arizona State Prison Complex Florence", slug: "arizona-state-prison-complex-florence", state: "AZ", type: "State Prison" },
  { name: "Pelican Bay State Prison", slug: "pelican-bay-state-prison", state: "CA", type: "State Prison" },
  { name: "Sing Sing Correctional Facility", slug: "sing-sing-correctional-facility", state: "NY", type: "State Prison" },
]

const FAQS = [
  {
    question: "How do inmate phone calls work?",
    answer:
      "Inmates use facility phones to call approved numbers on a prepaid calling account. You cannot initiate a call to an inmate. The facility contracts with a phone provider such as Securus, GTL, or ConnectNetwork. You create an account with that provider, fund it with your phone number, and wait for the inmate to call you. The per-minute cost is deducted from your balance when a call connects.",
  },
  {
    question: "How do I know which phone provider my facility uses?",
    answer:
      "The fastest way is to ask the facility directly. You can also check the provider's website and search for the facility by name. Most major providers, including Securus and ConnectNetwork, have facility search tools on their websites. If you are unsure, contact the facility's front desk or inmate services department.",
  },
  {
    question: "How do I set up a phone account?",
    answer:
      "Go to the website of the facility's contracted phone provider and create a free account. Set up a prepaid calling account linked to your phone number. Add funds using a debit card, credit card, or cash at a retail location. You will also need to be approved as a contact at the facility before receiving calls. This can take a few days.",
  },
  {
    question: "Why are inmate phone rates so expensive?",
    answer:
      "Historically, correctional facilities charged very high per-minute rates on inmate calls, partly because facilities received a share of call revenue from providers. The FCC has worked to reduce interstate calling rates. As of 2023, the FCC capped interstate rates at $0.14 per minute for calls from prisons and $0.21 per minute from jails. In-state rates vary and can still be higher, as they are regulated separately by states.",
  },
  {
    question: "Can I call a federal prison inmate directly?",
    answer:
      "No. You cannot call an inmate directly at any type of correctional facility. All calls are inmate-initiated. For federal Bureau of Prisons inmates, phone calls are managed through ConnectNetwork. The inmate calls you from a BOP facility phone during approved calling hours. You fund a prepaid ConnectNetwork account in advance so the call can connect.",
  },
  {
    question: "What is an AdvancePay account?",
    answer:
      "An AdvancePay account is a prepaid calling account linked to your phone number. When an inmate calls your number, the per-minute cost is charged to your AdvancePay balance rather than to you in real time. This is the standard account type used by Securus, GTL, and ConnectNetwork. You fund the account in advance and monitor the balance to ensure it does not run out.",
  },
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Phone Calls" },
]

const relatedLinks = [
  { label: "Messaging", href: "/messaging" },
  { label: "Video Calls", href: "/video-calls" },
  { label: "Photo Sharing", href: "/photo-sharing" },
  { label: "Money Transfer", href: "/money-transfer" },
  { label: "All Providers", href: "/providers" },
  { label: "All Facilities", href: "/facilities" },
  { label: "Compare Providers", href: "/compare" },
  { label: "All States", href: "/states" },
  { label: "Communication Guides", href: "/guides" },
  { label: "Securus Guide", href: "/provider/securus" },
  { label: "GTL Guide", href: "/provider/gtl" },
  { label: "ConnectNetwork Guide", href: "/provider/connectnetwork" },
]

export default function PhoneCallsPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Phone Calls: How Inmate Calling Works",
          "Learn how inmate phone calls work. Find the right calling provider for your facility, understand rates, and set up a prepaid account to receive calls.",
          "/phone-calls"
        )}
      />
      <JsonLd schema={buildHubSchema("phone-calls", "Inmate Phone Calls")} />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd schema={buildFaqSchema(FAQS)} />

      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Hero */}
      <section
        className="border-b bg-card py-14"
        aria-labelledby="phone-calls-hero-heading"
      >
        <PageWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
            </div>
            <h1
              id="phone-calls-hero-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Inmate Phone Calls
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Phone calls remain one of the most important ways families stay in touch
              with incarcerated loved ones. Find the right provider for your facility,
              understand how rates work, and set up your account before the first call.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">7+</p>
                <p className="text-sm text-muted-foreground">Calling providers</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">7,000+</p>
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
      <section className="border-b py-14" aria-labelledby="how-phone-works">
        <PageWrapper>
          <SectionHeading
            id="how-phone-works"
            title="How Inmate Phone Calls Work"
            subtitle="Four steps to set up your account and start receiving calls."
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
      <section className="border-b py-14" aria-labelledby="phone-providers">
        <PageWrapper>
          <SectionHeading
            id="phone-providers"
            title="Phone Call Providers"
            subtitle="These companies manage inmate calling services at correctional facilities across the United States."
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
      <section className="border-b py-14" aria-labelledby="phone-facilities">
        <PageWrapper>
          <SectionHeading
            id="phone-facilities"
            title="Facilities With Phone Services"
            subtitle="A selection of facilities where inmate phone calling is available through approved providers."
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
      <section className="border-b py-14" aria-labelledby="phone-key-facts">
        <PageWrapper>
          <SectionHeading
            id="phone-key-facts"
            title="Important Facts About Inmate Phone Calls"
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Inmates call you, not the other way around",
                body: "You cannot call a prison or jail and speak to an inmate directly. All calls are initiated by the inmate from a facility phone. Your job is to have a funded account ready.",
              },
              {
                title: "Each facility uses one phone provider",
                body: "Facilities sign exclusive phone contracts. Using the wrong provider's account will not work. Confirm the facility's contracted provider before creating an account.",
              },
              {
                title: "Interstate rates are FCC-regulated",
                body: "The FCC caps interstate prison calling rates. As of 2023, the cap is $0.14 per minute for prisons and $0.21 per minute for jails. In-state rates may be higher.",
              },
              {
                title: "State prison phone is often separate from messaging",
                body: "At many state facilities, phone calls are managed by GTL while messaging is managed by JPay. You may need accounts with both providers for full communication access.",
              },
              {
                title: "Approval takes time",
                body: "Getting your number approved as a contact can take several days. Set up your account early so there is no delay when your loved one tries to call.",
              },
              {
                title: "All calls are monitored and recorded",
                body: "Every inmate phone call is recorded. This is standard policy at every type of correctional facility. Do not discuss sensitive matters during phone calls.",
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
      <section className="border-b py-14" aria-labelledby="phone-faq">
        <PageWrapper>
          <SectionHeading
            id="phone-faq"
            title="Common Questions About Inmate Phone Calls"
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
