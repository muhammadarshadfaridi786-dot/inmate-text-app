import type { Metadata } from "next"
import Link from "next/link"
import {
  ImageIcon,
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
  ...generateHubMetadata("photo-sharing", "Photo Sharing"),
  title: "Photo Sharing: How to Send Photos to Inmates",
  description:
    "Learn how to send photos to incarcerated loved ones. Find which facilities accept digital photos, compare approved providers, and understand delivery rules.",
  robots: { index: true, follow: true },
}

const STEPS = [
  {
    number: "1",
    title: "Confirm the facility accepts photos",
    body: "Not all facilities allow digital photo delivery. Some only accept physical prints mailed through the postal service. Check the facility's specific rules before choosing a provider.",
  },
  {
    number: "2",
    title: "Choose an approved photo service",
    body: "Select a provider that serves your loved one's facility. JPay, TextBehind, and GettingOut are among the most widely available. Each platform has different pricing and delivery methods.",
  },
  {
    number: "3",
    title: "Upload and review your photos",
    body: "Upload your photos through the provider's app or website. All photos go through a content review before delivery. Photos that do not comply with facility guidelines will be rejected.",
  },
  {
    number: "4",
    title: "Photos are delivered",
    body: "Digital services deliver photos directly to the inmate's tablet or kiosk. Print-based services mail physical copies through the facility mail system, which takes a few extra days.",
  },
]

const PROVIDERS = [
  {
    name: "JPay",
    slug: "jpay",
    initial: "J",
    color: "bg-blue-600",
    tagline: "Digital photo delivery to state prison tablets",
    coverage: "35 states, 1,000+ facilities",
  },
  {
    name: "GettingOut",
    slug: "gettingout",
    initial: "G",
    color: "bg-violet-600",
    tagline: "Photo sharing for county jails nationwide",
    coverage: "45 states, 2,200+ county jails",
  },
  {
    name: "TextBehind",
    slug: "textbehind",
    initial: "T",
    color: "bg-orange-600",
    tagline: "Photos printed and mailed to any facility",
    coverage: "25 states, 600+ facilities",
  },
  {
    name: "SmartInmate",
    slug: "smartinmate",
    initial: "S",
    color: "bg-cyan-600",
    tagline: "Digital photo delivery with easy account setup",
    coverage: "20 states, 400+ facilities",
  },
  {
    name: "Pigeonly",
    slug: "pigeonly",
    initial: "P",
    color: "bg-rose-600",
    tagline: "Subscription plan includes printed photo delivery",
    coverage: "All 50 states, 3,000+ facilities",
  },
  {
    name: "HomeWAV",
    slug: "homewav",
    initial: "H",
    color: "bg-purple-600",
    tagline: "Photo sharing for county jails using HomeWAV tablets",
    coverage: "30 states, 350+ facilities",
  },
]

const FACILITIES = [
  { name: "San Quentin State Prison", slug: "san-quentin-state-prison", state: "CA", type: "State Prison" },
  { name: "Attica Correctional Facility", slug: "attica-correctional-facility", state: "NY", type: "State Prison" },
  { name: "Folsom State Prison", slug: "folsom-state-prison", state: "CA", type: "State Prison" },
  { name: "Rikers Island", slug: "rikers-island", state: "NY", type: "County Jail" },
  { name: "Cook County Jail", slug: "cook-county-jail", state: "IL", type: "County Jail" },
  { name: "Harris County Jail", slug: "harris-county-jail", state: "TX", type: "County Jail" },
  { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", state: "FL", type: "County Jail" },
  { name: "Pelican Bay State Prison", slug: "pelican-bay-state-prison", state: "CA", type: "State Prison" },
  { name: "Sing Sing Correctional Facility", slug: "sing-sing-correctional-facility", state: "NY", type: "State Prison" },
  { name: "Federal Correctional Complex Coleman", slug: "federal-correctional-complex-coleman", state: "FL", type: "Federal Prison" },
]

const FAQS = [
  {
    question: "What types of photos can I send to an inmate?",
    answer:
      "Most facilities allow family photos, portraits, and casual personal photos. Prohibited content typically includes nudity, sexually explicit material, anything depicting violence or weapons, photos with other inmates, and images with personal information visible such as addresses or financial details. Each facility has its own specific content guidelines. Review the provider's and facility's rules before uploading.",
  },
  {
    question: "How are digital photos delivered to the inmate?",
    answer:
      "Digital photos sent through platforms like JPay or GettingOut are delivered to a tablet or kiosk inside the facility. The inmate views the photo on their device. At facilities without digital tablets, some providers convert photos to physical prints and deliver them through the facility mail system instead.",
  },
  {
    question: "How long does photo delivery take?",
    answer:
      "Digital delivery through JPay or GettingOut typically takes 24 to 48 hours, which includes the content review process. Print-based delivery through services like TextBehind or Pigeonly can take 3 to 7 days, since photos are mailed through the postal system. Delivery time also depends on how quickly the specific facility processes incoming items.",
  },
  {
    question: "Can I send photos to an inmate at a federal prison?",
    answer:
      "Federal Bureau of Prisons facilities do not use JPay or GettingOut for digital photos. Physical photos can be mailed directly to the facility or sent through a print service like Pigeonly. Each federal institution has specific guidelines about photo size, content, and how many can be sent at once. Contact the facility or check the BOP website for the exact rules.",
  },
  {
    question: "Is there a limit on how many photos I can send?",
    answer:
      "Limits vary by provider and facility. Some platforms allow you to send multiple photos at once; others process them individually. Some facilities cap the total number of photos an inmate can have in their possession. The provider's platform will show you any applicable per-transaction limits when you upload.",
  },
  {
    question: "What happens if a photo is rejected?",
    answer:
      "If a photo fails the content review, the provider will notify you that it was rejected. The inmate will not receive it. Most providers do not refund rejected photos, so it is important to follow the content guidelines carefully. Common rejection reasons include inappropriate content, poor image quality, or photo size not meeting requirements.",
  },
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Photo Sharing" },
]

const relatedLinks = [
  { label: "Messaging", href: "/messaging" },
  { label: "Video Calls", href: "/video-calls" },
  { label: "Phone Calls", href: "/phone-calls" },
  { label: "Money Transfer", href: "/money-transfer" },
  { label: "All Providers", href: "/providers" },
  { label: "All Facilities", href: "/facilities" },
  { label: "Compare Providers", href: "/compare" },
  { label: "All States", href: "/states" },
  { label: "Communication Guides", href: "/guides" },
  { label: "JPay Guide", href: "/provider/jpay" },
  { label: "TextBehind Guide", href: "/provider/textbehind" },
  { label: "GettingOut Guide", href: "/provider/gettingout" },
]

export default function PhotoSharingPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Photo Sharing: How to Send Photos to Inmates",
          "Learn how to send photos to incarcerated loved ones. Find which facilities accept digital photos, compare approved providers, and understand delivery rules.",
          "/photo-sharing"
        )}
      />
      <JsonLd schema={buildHubSchema("photo-sharing", "Photo Sharing")} />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd schema={buildFaqSchema(FAQS)} />

      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Hero */}
      <section
        className="border-b bg-card py-14"
        aria-labelledby="photo-sharing-hero-heading"
      >
        <PageWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <ImageIcon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
            </div>
            <h1
              id="photo-sharing-hero-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Sending Photos to Inmates
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Photos help families stay connected in a meaningful way. Find out which
              facilities accept photos, which providers deliver them, and what rules
              you need to follow before sending your first image.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Approved providers</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 text-center shadow-sm">
                <div className="flex justify-center mb-2">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-2xl font-bold text-foreground">3,000+</p>
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
      <section className="border-b py-14" aria-labelledby="how-photo-works">
        <PageWrapper>
          <SectionHeading
            id="how-photo-works"
            title="How Photo Sharing Works"
            subtitle="Four steps from uploading your photo to the inmate receiving it."
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
      <section className="border-b py-14" aria-labelledby="photo-providers">
        <PageWrapper>
          <SectionHeading
            id="photo-providers"
            title="Photo Sharing Providers"
            subtitle="These services offer digital or print-based photo delivery to correctional facilities."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="border-b py-14" aria-labelledby="photo-facilities">
        <PageWrapper>
          <SectionHeading
            id="photo-facilities"
            title="Facilities That Accept Photos"
            subtitle="A selection of correctional facilities where photo sharing services are available."
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
      <section className="border-b py-14" aria-labelledby="photo-key-facts">
        <PageWrapper>
          <SectionHeading
            id="photo-key-facts"
            title="Things to Know Before Sending Photos"
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Every facility has content rules",
                body: "Content guidelines are set by the facility, not the provider. Always check the specific facility's photo policy before sending. Rejected photos are usually not refunded.",
              },
              {
                title: "Digital vs. print delivery",
                body: "Some providers deliver photos digitally to tablets. Others print and mail physical copies. Print delivery takes longer but works at facilities without digital tablet access.",
              },
              {
                title: "Federal facilities have stricter rules",
                body: "Federal Bureau of Prisons facilities do not use JPay or GettingOut. Physical mail is the primary method. Check each BOP institution's specific photo guidelines.",
              },
              {
                title: "Photos are reviewed before delivery",
                body: "Staff review all photos for content compliance. This review adds 24 to 48 hours to the delivery timeline for digital services.",
              },
              {
                title: "Pigeonly works almost everywhere",
                body: "Because Pigeonly prints and mails physical photos, it works at virtually any facility that accepts standard postal mail, including locations without digital services.",
              },
              {
                title: "File size and format requirements vary",
                body: "Most providers accept standard JPEG files under a certain file size. Check the provider's specific upload requirements before submitting photos.",
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
      <section className="border-b py-14" aria-labelledby="photo-faq">
        <PageWrapper>
          <SectionHeading
            id="photo-faq"
            title="Common Questions About Sending Photos"
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
