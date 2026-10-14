import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { FACILITY_DETAILS } from "@/lib/data/facilities"
import { GUIDE_DETAILS } from "@/lib/data/guides"
import { STATE_DETAILS } from "@/lib/data/states"
import { generateFacilityMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildFacilitySchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import RelatedLinks from "@/components/seo/RelatedLinks"
import StateIntro from "@/components/state/StateIntro"
import FacilityHero from "@/components/facility/FacilityHero"
import FacilityQuickFacts from "@/components/facility/FacilityQuickFacts"
import FacilityInfo from "@/components/facility/FacilityInfo"
import FacilityCommunication from "@/components/facility/FacilityCommunication"
import FacilityProviders from "@/components/facility/FacilityProviders"
import FacilityRulesNotice from "@/components/facility/FacilityRulesNotice"
import RelatedFacilities from "@/components/facility/RelatedFacilities"
import FacilityFaq from "@/components/facility/FacilityFaq"
import FacilityTroubleshooting from "@/components/facility/FacilityTroubleshooting"
import FacilityCTA from "@/components/facility/FacilityCTA"
import AdsterraBanner from "@/components/ads/AdsterraBanner"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(FACILITY_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const facility = FACILITY_DETAILS[slug]
  if (!facility) return {}
  return generateFacilityMetadata(facility)
}

export default async function FacilityPage({ params }: PageProps) {
  const { slug } = await params
  const facility = FACILITY_DETAILS[slug]
  if (!facility) notFound()

  const stateHasPage = !!STATE_DETAILS[facility.stateSlug]

  const breadcrumbItems = [
    { label: "Home",       href: "/" },
    { label: "Facilities", href: "/facilities" },
    ...(stateHasPage
      ? [{ label: facility.stateName, href: `/state/${facility.stateSlug}` }]
      : [{ label: facility.stateName }]),
    ...(facility.countySlug
      ? [{ label: facility.countyName, href: `/county/${facility.countySlug}` }]
      : []),
    { label: facility.name },
  ]

  const relatedLinks = [
    ...(stateHasPage
      ? [{ label: `${facility.stateName} State Guide`, href: `/state/${facility.stateSlug}` }]
      : []),
    { label: "All Facilities",       href: "/facilities"    },
    { label: "Inmate Messaging",     href: "/messaging"     },
    { label: "Video Visitation",     href: "/video-calls"   },
    { label: "Photo Sharing",        href: "/photo-sharing" },
    { label: "Phone Calls",          href: "/phone-calls"   },
    { label: "Money Transfer",       href: "/money-transfer"},
    { label: "Compare Providers",    href: "/compare"       },
    { label: "Communication Guides", href: "/guides"        },
    // Provider-matched troubleshooting guides (data-driven, same component, no visual change)
    ...(facility.relatedGuideSlugs ?? [])
      .map((slug) => GUIDE_DETAILS[slug])
      .filter(Boolean)
      .map((g) => ({ label: g.title, href: `/guides/${g.slug}` })),
    { label: "All States", href: "/states"        },
    ...(facility.countySlug
      ? [{ label: `${facility.countyName} Guide`, href: `/county/${facility.countySlug}` }]
      : []),
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          `${facility.name}: Communication Guide`,
          facility.description,
          `/facility/${facility.slug}`
        )}
      />
      <JsonLd
        schema={buildFacilitySchema({
          name: facility.name,
          description: facility.description,
          slug: facility.slug,
          address: facility.address,
          operatedBy: facility.operatedBy,
          established: facility.established,
        })}
      />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />

      {/* Breadcrumb */}
      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Page sections */}
      <FacilityHero facility={facility} />
      <AdsterraBanner />
      <FacilityQuickFacts facility={facility} />
      <StateIntro stateName={facility.name} intro={facility.overview} />
      <FacilityInfo facility={facility} />
      <FacilityCommunication facility={facility} />
      <FacilityProviders facilityName={facility.name} providers={facility.providers} />
      <FacilityRulesNotice facilityName={facility.name} rules={facility.rules} />
      <RelatedFacilities slugs={facility.relatedFacilitySlugs} />
      <FacilityFaq facilityName={facility.name} faq={facility.faq} />
      <FacilityTroubleshooting
        facilityName={facility.name}
        providers={facility.providers}
      />

      {/* Internal links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>

      {/* CTA */}
      <FacilityCTA facility={facility} stateHasPage={stateHasPage} />
    </>
  )
}
