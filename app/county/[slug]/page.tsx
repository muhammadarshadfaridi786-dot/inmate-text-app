import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { COUNTY_DETAILS } from "@/lib/data/counties"
import { generateCountyMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import RelatedLinks from "@/components/seo/RelatedLinks"
import CountyHero from "@/components/county/CountyHero"
import CountyCTA from "@/components/county/CountyCTA"
import StateIntro from "@/components/state/StateIntro"
import StateFacilityStats from "@/components/state/StateFacilityStats"
import StateProviders from "@/components/state/StateProviders"
import StateFacilities from "@/components/state/StateFacilities"
import StateCommunication from "@/components/state/StateCommunication"

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
  return generateCountyMetadata(county)
}

export default async function CountyPage({ params }: PageProps) {
  const { slug } = await params
  const county = COUNTY_DETAILS[slug]
  if (!county) notFound()

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Counties", href: "/counties" },
    { label: county.stateName, href: `/state/${county.stateSlug}` },
    { label: county.name },
  ]

  const countyFaqs = [
    {
      question: `How do I contact an inmate in ${county.name}?`,
      answer: `To contact someone held in ${county.name}, find the specific facility on this site and check which communication provider it uses. You will need an account with the approved provider and your loved one's inmate ID number.`,
    },
    {
      question: `What providers serve ${county.name} jails and facilities?`,
      answer: `${county.name} facilities use different providers depending on the institution. Common options for county jails include ConnectNetwork, GettingOut, and others. The specific provider depends on which facility your loved one is housed at.`,
    },
    {
      question: `Does ${county.name} allow video visitation?`,
      answer: `Video visitation availability varies by facility in ${county.name}. Some institutions offer scheduled video visits through their approved provider. Check the specific facility page on this site for confirmed availability.`,
    },
    {
      question: `Can I send money to an inmate in ${county.name}?`,
      answer: `Most ${county.name} facilities allow money transfers through the approved provider. The platform and fees depend on the specific institution. Use the facility pages on this site to find confirmed provider and transfer information.`,
    },
  ]

  const relatedLinks = [
    { label: `${county.stateName} State Guide`, href: `/state/${county.stateSlug}` },
    { label: "All Counties", href: "/counties" },
    { label: "Inmate Messaging", href: "/messaging" },
    { label: "Video Visitation", href: "/video-calls" },
    { label: "Photo Sharing", href: "/photo-sharing" },
    { label: "Phone Calls", href: "/phone-calls" },
    { label: "Money Transfer", href: "/money-transfer" },
    { label: "Compare Providers", href: "/compare" },
    { label: "Communication Guides", href: "/guides" },
    { label: "All States", href: "/states" },
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          `${county.name} Jail & Prison Communication Guide`,
          county.description,
          `/county/${county.slug}`
        )}
      />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd schema={buildFaqSchema(countyFaqs)} />

      {/* Breadcrumb */}
      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Page sections */}
      <CountyHero county={county} />
      <StateIntro stateName={county.name} intro={county.intro} />
      <StateFacilityStats stateName={county.name} data={county.facilitiesByType} />
      <StateProviders stateName={county.name} providers={county.providers} />
      <StateFacilities stateName={county.name} facilities={county.featuredFacilities} />
      <StateCommunication stateName={county.name} />

      {/* Internal links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>

      {/* County CTA */}
      <CountyCTA county={county} />
    </>
  )
}
