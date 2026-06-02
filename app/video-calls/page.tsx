import type { Metadata } from "next"
import Link from "next/link"
import {
  Video,
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
  ...generateHubMetadata("video-calls", "Video Visitation"),
  title: "Video Calls: How Video Visitation Works at Prisons and Jails",
  description:
    "Learn how video visitation works at correctional facilities. Find which prisons and jails allow video calls, compare providers, and schedule a visit from home.",
  robots: { index: true, follow: true },
}

const STEPS = [
  {
    number: "1",
    title: "Check facility availability",
    body: "Not every facility offers video visitation. Confirm that your loved one's specific institution allows video calls and identify which provider manages the service before signing up.",
  },
  {
    number: "2",
    title: "Create an account and get approved",
    body: "Register with the provider and complete their identity verification process. You must also be on the inmate's approved visitor list. Approval can take a few days at some facilities.",
  },
  {
    number: "3",
    title: "Schedule a visit",
    body: "Choose an available time slot through the provider's app or website. Most facilities require 24 to 48 hours of advance notice. Slots fill quickly on weekends.",
  },
  {
    number: "4",
    title: "Connect from home",
    body: "At the scheduled time, join the video call from any device with a camera and a stable internet connection. Most providers support smartphones, tablets, and computers.",
  },
]

const PROVIDERS = [
  {
    name: "GettingOut",
    slug: "gettingout",
    initial: "G",
    color: "bg-violet-600",
    tagline: "Best-in-class video visitation for county jails",
    coverage: "45 states, 2,200+ county jails",
  },
  {
    name: "Securus Technologies",
    slug: "securus",
    initial: "S",
    color: "bg-indigo-700",
    tagline: "Video visits for county jails and state prisons",
    coverage: "45 states, 1,200+ facilities",
  },
  {
    name: "ConnectNetwork",
    slug: "connectnetwork",
    initial: "C",
    color: "bg-teal-600",
    tagline: "Video visits at federal and county facilities",
    coverage: "All 50 states, 1,800+ facilities",
  },
  {
    name: "JPay",
    slug: "jpay",
    initial: "J",
    color: "bg-blue-600",
    tagline: "Video visitation at select state prisons",
    coverage: "35 states, 1,000+ facilities",
  },
  {
    name: "GTL (ViaPath Technologies)",
    slug: "gtl",
    initial: "G",
    color: "bg-amber-600",
    tagline: "Video visits at state prisons across 30+ states",
    coverage: "30 states, 800+ facilities",
  },
  {
    name: "SmartInmate",
    slug: "smartinmate",
    initial: "S",
    color: "bg-cyan-600",
    tagline: "Remote video visits with an easy-to-use platform",
    coverage: "20 states, 400+ facilities",
  },
  {
    name: "HomeWAV",
    slug: "homewav",
    initial: "H",
    color: "bg-purple-600",
    tagline: "Software-only video visitation for county jails",
    coverage: "30 states, 350+ facilities",
  },
  {
    name: "ICSolutions",
    slug: "icsolutions",
    initial: "I",
    color: "bg-sky-700",
    tagline: "Video calls for county jails and detention centers",
    coverage: "15 states, 300+ facilities",
  },
]

const FACILITIES = [
  { name: "Rikers Island", slug: "rikers-island", state: "NY", type: "County Jail" },
  { name: "Cook County Jail", slug: "cook-county-jail", state: "IL", type: "County Jail" },
  { name: "San Quentin State Prison", slug: "san-quentin-state-prison", state: "CA", type: "State Prison" },
  { name: "Harris County Jail", slug: "harris-county-jail", state: "TX", type: "County Jail" },
  { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", state: "FL", type: "County Jail" },
  { name: "Federal Correctional Complex Coleman", slug: "federal-correctional-complex-coleman", state: "FL", type: "Federal Prison" },
  { name: "Attica Correctional Facility", slug: "attica-correctional-facility", state: "NY", type: "State Prison" },
  { name: "Arizona State Prison Complex Florence", slug: "arizona-state-prison-complex-florence", state: "AZ", type: "State Prison" },
  { name: "Pelican Bay State Prison", slug: "pelican-bay-state-prison", state: "CA", type: "State Prison" },
  { name: "Sing Sing Correctional Facility", slug: "sing-sing-correctional-facility", state: "NY", type: "State Prison" },
]

const FAQS = [
  {
    question: "What equipment do I need for a video visit?",
    answer:
      "You need a device with a working front-facing camera, such as a smartphone, tablet, or laptop. A stable internet connection is required. Most providers support iOS and Android devices, as well as standard web browsers. Download the provider's app before your scheduled visit and test your camera in advance.",
  },
  {
    question: "How much does a video visit cost?",
    answer:
      "Pricing varies by provider and facility. GettingOut typically charges $0.49 per minute. Securus pricing depends on the facility contract. Some facilities offer flat-rate session pricing. Always check the specific provider's rate for the facility your loved one is in before scheduling.",
  },
  {
    question: "How do I schedule a video visit?",
    answer:
      "Log into your account with the facility's approved provider, find the video visitation section, and select an available time slot. Most facilities require at least 24 to 48 hours of advance notice. You must already be on the inmate's approved contact list. Time slots are limited, so book as early as possible.",
  },
  {
    question: "Can I do a video visit at a federal prison?",
    answer:
      "Yes, but the process differs from state and county facilities. Video visits at federal Bureau of Prisons facilities are typically arranged through ConnectNetwork/GTL or scheduled directly with the institution. Contact the specific facility for their video visitation procedures, as policies vary between BOP institutions.",
  },
  {
    question: "What happens if I miss a scheduled video visit?",
    answer:
      "Most providers charge for no-shows or have strict cancellation windows, typically 24 to 48 hours before the visit. If you miss a visit, you may lose the session fee. Some providers allow rescheduling, but this depends on the platform. Always cancel in advance if you cannot attend.",
  },
  {
    question: "Are video visits recorded?",
    answer:
      "Yes. All video visits at correctional facilities are recorded. This is standard policy across all providers and facility types. You should not discuss anything during a video visit that you would not want facility staff to hear. Legal visits with attorneys may have different rules, depending on the facility.",
  },
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Video Calls" },
]

const relatedLinks = [
  { label: "Messaging", href: "/messaging" },
  { label: "Photo Sharing", href: "/photo-sharing" },
  { label: "Phone Calls", href: "/phone-calls" },
  { label: "Money Transfer", href: "/money-transfer" },
  { label: "All Providers", href: "/providers" },
  { label: "All Facilities", href: "/facilities" },
  { label: "Compare Providers", href: "/compare" },
  { label: "All States", href: "/states" },
  { label: "Communication Guides", href: "/guides" },
  { label: "GettingOut Guide", href: "/provider/gettingout" },
  { label: "Securus Guide", href: "/provider/securus" },
  { label: "ConnectNetwork Guide", href: "/provider/connectnetwork" },
]

export default function VideoCallsPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Video Calls: How Video Visitation Works at Prisons and Jails",
          "Learn how video visitation works at correctional facilities. Find which prisons and jails allow video calls, compare providers, and schedule a visit from home.",
          "/video-calls"
        )}
      />
      <JsonLd schema={buildHubSchema("video-calls", "Video Visitation")} />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd schema={buildFaqSchema(FAQS)} />

      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Hero */}
      <section
        className="border-b bg-card py-14"
        aria-labelledby="video-calls-hero-heading"
      >
        <PageWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Video className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
            </div>
            <h1
              id="video-calls-hero-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Video Calls for Inmates
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Video visitation lets families see and speak with incarcerated loved ones
              from home. No travel required. Find facilities that offer video visits,
              compare providers, and learn what to expect before your first session.
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
                <p className="text-2xl font-bold text-foreground">2,000+</p>
                <p className="text-sm text-muted-foreground">Facilities with video</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">45</p>
                <p className="text-sm text-muted-foreground">States covered</p>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>

      {/* How It Works */}
      <section className="border-b py-14" aria-labelledby="how-video-works">
        <PageWrapper>
          <SectionHeading
            id="how-video-works"
            title="How Video Visitation Works"
            subtitle="From signing up to connecting face-to-face, here is what to expect."
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
      <section className="border-b py-14" aria-labelledby="video-providers">
        <PageWrapper>
          <SectionHeading
            id="video-providers"
            title="Video Call Providers"
            subtitle="These platforms offer remote video visitation at correctional facilities across the United States."
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
      <section className="border-b py-14" aria-labelledby="video-facilities">
        <PageWrapper>
          <SectionHeading
            id="video-facilities"
            title="Facilities That Offer Video Visits"
            subtitle="A selection of correctional facilities where video visitation is available."
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
      <section className="border-b py-14" aria-labelledby="video-key-facts">
        <PageWrapper>
          <SectionHeading
            id="video-key-facts"
            title="What to Know Before Your First Video Visit"
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Video visits are scheduled in advance",
                body: "Walk-in video visits do not exist. Every visit must be booked through the provider's platform at least 24 to 48 hours before the session.",
              },
              {
                title: "You must be on the approved contact list",
                body: "The inmate must add you to their approved visitor list before your first video visit. This approval process can take several days at some facilities.",
              },
              {
                title: "All visits are recorded",
                body: "Video visits at correctional facilities are recorded and monitored by facility staff. This is standard policy at all institutions.",
              },
              {
                title: "Not all facilities have video",
                body: "Smaller jails and some older state facilities have not yet adopted video visitation technology. Always confirm availability at the specific facility first.",
              },
              {
                title: "County jails and state prisons use different providers",
                body: "GettingOut is the leading county jail platform. JPay and GTL are more common at state prisons. Which provider you need depends on the facility type and contract.",
              },
              {
                title: "Session time is limited",
                body: "Most video visits are 20 to 30 minutes per session. Some facilities cap weekly visit frequency. Check the facility's rules for visit length and scheduling limits.",
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
      <section className="border-b py-14" aria-labelledby="video-faq">
        <PageWrapper>
          <SectionHeading
            id="video-faq"
            title="Common Questions About Video Visitation"
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
