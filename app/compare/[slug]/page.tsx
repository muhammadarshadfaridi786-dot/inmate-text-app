import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { COMPARISON_DETAILS } from "@/lib/data/comparisons"
import { generateCompareMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildCompareSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import RelatedLinks from "@/components/seo/RelatedLinks"
import CompareHero from "@/components/compare/CompareHero"
import CompareQuickVerdict from "@/components/compare/CompareQuickVerdict"
import CompareSnapshot from "@/components/compare/CompareSnapshot"
import CompareIntro from "@/components/compare/CompareIntro"
import CompareScores from "@/components/compare/CompareScores"
import CompareServices from "@/components/compare/CompareServices"
import CompareProscons from "@/components/compare/CompareProscons"
import CompareBestFor from "@/components/compare/CompareBestFor"
import CompareFaq from "@/components/compare/CompareFaq"
import CompareRelated from "@/components/compare/CompareRelated"
import CompareCTA from "@/components/compare/CompareCTA"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(COMPARISON_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const comparison = COMPARISON_DETAILS[slug]
  if (!comparison) return {}
  return generateCompareMetadata(
    comparison.providerASlug,
    comparison.providerBSlug,
    comparison.providerAName,
    comparison.providerBName,
    { seoTitle: comparison.seoTitle, seoDescription: comparison.seoDescription }
  )
}

export default async function CompareDetailPage({ params }: PageProps) {
  const { slug } = await params
  const comparison = COMPARISON_DETAILS[slug]
  if (!comparison) notFound()

  const breadcrumbItems = [
    { label: "Home",    href: "/"        },
    { label: "Compare", href: "/compare" },
    { label: `${comparison.providerAName} vs ${comparison.providerBName}` },
  ]

  const relatedLinks = [
    { label: "All Comparisons",        href: "/compare"       },
    { label: "All Providers",          href: "/providers"     },
    { label: `${comparison.providerAName} Guide`, href: `/provider/${comparison.providerASlug}` },
    { label: `${comparison.providerBName} Guide`, href: `/provider/${comparison.providerBSlug}` },
    { label: "Inmate Messaging",       href: "/messaging"     },
    { label: "Video Visitation",       href: "/video-calls"   },
    { label: "Photo Sharing",          href: "/photo-sharing" },
    { label: "Phone Calls",            href: "/phone-calls"   },
    { label: "Money Transfer",         href: "/money-transfer"},
    { label: "Communication Guides",   href: "/guides"        },
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          `${comparison.providerAName} vs ${comparison.providerBName}: Which Is Better?`,
          comparison.description,
          `/compare/${comparison.slug}`
        )}
      />
      <JsonLd schema={buildCompareSchema(comparison.sideA, comparison.sideB)} />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />

      {/* Breadcrumb */}
      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Hero */}
      <CompareHero comparison={comparison} />

      {/* Quick Verdict */}
      <CompareQuickVerdict
        providerAName={comparison.providerAName}
        providerBName={comparison.providerBName}
        verdict={comparison.verdict}
      />

      {/* Comparison Snapshot */}
      <CompareSnapshot comparison={comparison} />

      {/* Full intro */}
      <CompareIntro
        providerAName={comparison.providerAName}
        providerBName={comparison.providerBName}
        intro={comparison.intro}
      />

      {/* Score comparison */}
      <CompareScores sideA={comparison.sideA} sideB={comparison.sideB} />

      {/* Service-by-service breakdown */}
      <CompareServices comparison={comparison} />

      {/* Pros & cons */}
      <CompareProscons
        sideA={comparison.sideA}
        sideB={comparison.sideB}
        prosConsA={comparison.prosConsA}
        prosConsB={comparison.prosConsB}
      />

      {/* Best for scenarios */}
      <CompareBestFor
        sideA={comparison.sideA}
        sideB={comparison.sideB}
        bestFor={comparison.bestFor}
      />

      {/* FAQ */}
      <CompareFaq
        providerAName={comparison.providerAName}
        providerBName={comparison.providerBName}
        faq={comparison.faq}
      />

      {/* Related comparisons */}
      <CompareRelated
        currentSlug={comparison.slug}
        relatedSlugs={comparison.relatedComparisonSlugs}
      />

      {/* Internal links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>

      {/* CTA */}
      <CompareCTA
        providerAName={comparison.providerAName}
        providerBName={comparison.providerBName}
        providerASlug={comparison.providerASlug}
        providerBSlug={comparison.providerBSlug}
      />
    </>
  )
}
