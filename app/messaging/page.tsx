import type { Metadata } from "next"
import Link from "next/link"
import {
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Users,
  Building2,
  MapPin,
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
  ...generateHubMetadata("messaging", "Inmate Messaging"),
  robots: { index: true, follow: true },
}

const STEPS = [
  {
    number: "1",
    title: "Find the right provider",
    body: "Different facilities use different messaging platforms. Confirm which provider is approved at your loved one's facility before creating an account. Using the wrong platform means your messages will not be delivered.",
  },
  {
    number: "2",
    title: "Create a free account",
    body: "Registration is free on all major platforms. You will need the inmate's facility name and their ID number to add them as a contact. The inmate may also need to approve your request from their end.",
  },
  {
    number: "3",
    title: "Send your first message",
    body: "Compose and send your message through the provider's app or website. Messages go through a review process before reaching the inmate. Most platforms also allow you to attach photos.",
  },
  {
    number: "4",
    title: "Wait for a response",
    body: "Inmates respond using tablets or kiosks inside the facility. Typical delivery takes 24 to 48 hours on business days. Response times depend on facility schedules and staff review.",
  },
]

const PROVIDERS = [
  {
    name: "JPay",
    slug: "jpay",
    initial: "J",
    color: "bg-blue-600",
    tagline: "Messaging, photos, and money transfer for state inmates",
    coverage: "35 states, 1,000+ facilities",
  },
  {
    name: "CorrLinks",
    slug: "corrlinks",
    initial: "C",
    color: "bg-emerald-700",
    tagline: "Official federal Bureau of Prisons email system",
    coverage: "All 120 federal BOP facilities",
  },
  {
    name: "GettingOut",
    slug: "gettingout",
    initial: "G",
    color: "bg-violet-600",
    tagline: "Video visitation and messaging for county jails",
    coverage: "45 states, 2,200+ county jails",
  },
  {
    name: "ConnectNetwork",
    slug: "connectnetwork",
    initial: "C",
    color: "bg-teal-600",
    tagline: "Phone, video, and messaging for federal and county facilities",
    coverage: "All 50 states, 1,800+ facilities",
  },
  {
    name: "TextBehind",
    slug: "textbehind",
    initial: "T",
    color: "bg-orange-600",
    tagline: "Simple messaging and photo delivery",
    coverage: "25 states, 600+ facilities",
  },
  {
    name: "SmartInmate",
    slug: "smartinmate",
    initial: "S",
    color: "bg-cyan-600",
    tagline: "All-in-one messaging, photos, and video",
    coverage: "20 states, 400+ facilities",
  },
  {
    name: "Pigeonly",
    slug: "pigeonly",
    initial: "P",
    color: "bg-rose-600",
    tagline: "Letter writing and physical mail delivery",
    coverage: "All 50 states, 3,000+ facilities",
  },
  {
    name: "Securus Technologies",
    slug: "securus",
    initial: "S",
    color: "bg-indigo-700",
    tagline: "Messaging for county jails and state prisons",
    coverage: "45 states, 1,200+ facilities",
  },
]

const FACILITIES = [
  { name: "San Quentin State Prison", slug: "san-quentin-state-prison", state: "CA", type: "State Prison" },
  { name: "Attica Correctional Facility", slug: "attica-correctional-facility", state: "NY", type: "State Prison" },
  { name: "Rikers Island", slug: "rikers-island", state: "NY", type: "County Jail" },
  { name: "Cook County Jail", slug: "cook-county-jail", state: "IL", type: "County Jail" },
  { name: "Federal Correctional Complex Coleman", slug: "federal-correctional-complex-coleman", state: "FL", type: "Federal Prison" },
  { name: "Folsom State Prison", slug: "folsom-state-prison", state: "CA", type: "State Prison" },
  { name: "Sing Sing Correctional Facility", slug: "sing-sing-correctional-facility", state: "NY", type: "State Prison" },
  { name: "Harris County Jail", slug: "harris-county-jail", state: "TX", type: "County Jail" },
  { name: "Pelican Bay State Prison", slug: "pelican-bay-state-prison", state: "CA", type: "State Prison" },
  { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", state: "FL", type: "County Jail" },
]

const FAQS = [
  {
    question: "How does inmate messaging work?",
    answer:
      "Inmate messaging works through a facility-approved platform, such as JPay or CorrLinks. You create an account, add the inmate using their ID number, and send messages through the platform's website or app. Messages are reviewed by facility staff before delivery to the inmate. The inmate reads and responds using a tablet or kiosk inside the facility.",
  },
  {
    question: "What is the cheapest way to send messages to an inmate?",
    answer:
      "The cost depends on the provider and facility. JPay charges per stamp, typically $0.33 to $0.47 per message. CorrLinks charges per character for federal inmates. Pigeonly's subscription plan can lower costs if you message regularly. Comparing pricing between available providers at your specific facility is the best way to reduce costs.",
  },
  {
    question: "How long does it take for a message to arrive?",
    answer:
      "Most messages are delivered within 24 to 48 hours on business days. Delivery time includes the review process by facility staff. Some facilities process messages faster, especially those with higher tablet access. The inmate's response time depends on when they access their device and facility schedules.",
  },
  {
    question: "Does inmate messaging work at federal prisons?",
    answer:
      "Yes, but only through CorrLinks, which is the Bureau of Prisons' official email system. JPay, GettingOut, and other state and county providers do not work at federal facilities. To message a federal inmate, the inmate must first send you an invitation through their TRULINCS system before you can create a CorrLinks account and reply.",
  },
  {
    question: "Can I use a regular email to contact an inmate?",
    answer:
      "No. Regular email does not work. Inmates do not have access to standard email services. All electronic messaging at correctional facilities goes through approved platforms with a secure review process. You must use the specific provider contracted by the facility where your loved one is housed.",
  },
  {
    question: "Can an inmate receive messages from multiple people?",
    answer:
      "Yes. Most platforms allow an inmate to receive messages from multiple approved contacts. Each contact sets up their own account. However, some facilities limit the number of approved contacts or require the inmate to manually approve each one. Check the specific facility rules or platform guidelines for contact limits.",
  },
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Messaging" },
]

const relatedLinks = [
  { label: "Video Calls", href: "/video-calls" },
  { label: "Photo Sharing", href: "/photo-sharing" },
  { label: "Phone Calls", href: "/phone-calls" },
  { label: "Money Transfer", href: "/money-transfer" },
  { label: "All Providers", href: "/providers" },
  { label: "All Facilities", href: "/facilities" },
  { label: "Compare Providers", href: "/compare" },
  { label: "All States", href: "/states" },
  { label: "Communication Guides", href: "/guides" },
  { label: "JPay Guide", href: "/provider/jpay" },
  { label: "CorrLinks Guide", href: "/provider/corrlinks" },
  { label: "GettingOut Guide", href: "/provider/gettingout" },
]

export default function MessagingPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Inmate Messaging: How It Works and Best Apps",
          "Learn how inmate messaging works. Find which prisons and jails allow messaging, compare providers, and discover how to get started.",
          "/messaging"
        )}
      />
      <JsonLd schema={buildHubSchema("messaging", "Inmate Messaging")} />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd schema={buildFaqSchema(FAQS)} />

      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Hero */}
      <section
        className="border-b bg-card py-14"
        aria-labelledby="messaging-hero-heading"
      >
        <PageWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <MessageSquare className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
            </div>
            <h1
              id="messaging-hero-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Inmate Messaging
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Electronic messaging lets families stay connected with incarcerated loved
              ones through approved platforms. Find the right provider for your facility,
              compare options, and learn how the process works.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">8+</p>
                <p className="text-sm text-muted-foreground">Approved providers</p>
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
      <section className="border-b py-14" aria-labelledby="how-messaging-works">
        <PageWrapper>
          <SectionHeading
            id="how-messaging-works"
            title="How Inmate Messaging Works"
            subtitle="Four steps from account setup to your first message."
            className="mb-10 text-center"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
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
      <section className="border-b py-14" aria-labelledby="messaging-providers">
        <PageWrapper>
          <SectionHeading
            id="messaging-providers"
            title="Messaging Providers"
            subtitle="These platforms offer electronic messaging at correctional facilities across the United States."
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
      <section className="border-b py-14" aria-labelledby="messaging-facilities">
        <PageWrapper>
          <SectionHeading
            id="messaging-facilities"
            title="Featured Facilities"
            subtitle="A selection of facilities where electronic messaging is available through approved providers."
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

      {/* What to Know */}
      <section className="border-b py-14" aria-labelledby="messaging-key-facts">
        <PageWrapper>
          <SectionHeading
            id="messaging-key-facts"
            title="Key Facts About Inmate Messaging"
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Not all facilities offer messaging",
                body: "Some smaller county jails and older state facilities have not adopted electronic messaging. Physical mail may be the only option in those cases.",
              },
              {
                title: "Each facility uses one provider",
                body: "Facilities sign contracts with a single messaging provider. You must use that specific platform. Messages sent through the wrong provider will not reach the inmate.",
              },
              {
                title: "Federal inmates use CorrLinks only",
                body: "All federal Bureau of Prisons facilities use CorrLinks exclusively. JPay, GettingOut, and other commercial platforms do not work at federal institutions.",
              },
              {
                title: "Messages are reviewed before delivery",
                body: "All messages go through a staff review process before reaching the inmate. This is standard across every platform and every facility type.",
              },
              {
                title: "The inmate must initiate contact in some cases",
                body: "At federal facilities and some state systems, the inmate must first add your email to their approved contact list before you can send messages.",
              },
              {
                title: "Costs vary by platform and state",
                body: "Pricing is set by facility contracts and varies by state and provider. Always compare available options at your specific facility to find the best rate.",
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
      <section className="border-b py-14" aria-labelledby="messaging-faq">
        <PageWrapper>
          <SectionHeading
            id="messaging-faq"
            title="Common Questions About Inmate Messaging"
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
