import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { GUIDE_DETAILS } from "@/lib/data/guides"
import { generateGuideMetadata } from "@/lib/seo"
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, buildHowToSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import RelatedLinks from "@/components/seo/RelatedLinks"
import GuideHero from "@/components/guides/GuideHero"
import GuideIntro from "@/components/guides/GuideIntro"
import GuideToc from "@/components/guides/GuideToc"
import GuideContent from "@/components/guides/GuideContent"
import GuideTakeaways from "@/components/guides/GuideTakeaways"
import GuideRelatedTerms from "@/components/guides/GuideRelatedTerms"
import GuideRelatedProviders from "@/components/guides/GuideRelatedProviders"
import GuideRelatedComparisons from "@/components/guides/GuideRelatedComparisons"
import GuideFaq from "@/components/guides/GuideFaq"
import GuidePeopleAlsoAsk from "@/components/guides/GuidePeopleAlsoAsk"
import GuideRelated from "@/components/guides/GuideRelated"
import GuideCTA from "@/components/guides/GuideCTA"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(GUIDE_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = GUIDE_DETAILS[slug]
  if (!guide) return {}
  return generateGuideMetadata({
    title: guide.title,
    slug: guide.slug,
    excerpt: guide.excerpt,
    seoTitle: guide.seoTitle,
    seoDescription: guide.seoDescription,
  })
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params
  const guide = GUIDE_DETAILS[slug]
  if (!guide) notFound()

  const breadcrumbItems = [
    { label: "Home",   href: "/"       },
    { label: "Guides", href: "/guides" },
    { label: guide.title },
  ]

  const relatedLinks = [
    { label: "All Guides",        href: "/guides"        },
    { label: "All Providers",     href: "/providers"     },
    { label: "Compare Providers", href: "/compare"       },
    { label: "Glossary",          href: "/glossary"      },
    { label: "Inmate Messaging",  href: "/messaging"     },
    { label: "Video Visitation",  href: "/video-calls"   },
    { label: "Photo Sharing",     href: "/photo-sharing" },
    { label: "Phone Calls",       href: "/phone-calls"   },
    { label: "Money Transfer",    href: "/money-transfer"},
    { label: "All Facilities",    href: "/facilities"    },
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          guide.seoTitle ?? guide.title,
          guide.seoDescription ?? guide.excerpt,
          `/guides/${guide.slug}`
        )}
      />
      <JsonLd
        schema={buildArticleSchema({
          title: guide.seoTitle ?? guide.title,
          description: guide.seoDescription ?? guide.excerpt,
          slug: guide.slug,
          publishedAt: guide.publishedAt,
          updatedAt: guide.updatedAt,
        })}
      />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      {guide.faq.length > 0 && <JsonLd schema={buildFaqSchema(guide.faq)} />}

      {guide.slug.startsWith("how-to-") && (
        <JsonLd
          schema={buildHowToSchema({
            title: guide.title,
            description: guide.seoDescription ?? guide.excerpt,
            slug: guide.slug,
            steps: guide.sections.map((s: { heading: string; body?: string[] }) => ({
              name: s.heading,
              text: s.body?.[0] ?? s.heading,
            })),
          })}
        />
      )}

      {/* Breadcrumb */}
      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Hero */}
      <GuideHero guide={guide} />

      {/* Introduction */}
      <GuideIntro guide={guide} />

      {/* Table of Contents */}
      <GuideToc sections={guide.sections} />

      {/* Main content */}
      <GuideContent guide={guide} />

      {/* Key Takeaways */}
      <GuideTakeaways takeaways={guide.takeaways} />

      {/* Related glossary terms */}
      <GuideRelatedTerms
        guideTitle={guide.title}
        relatedTermSlugs={guide.relatedTermSlugs}
      />

      {/* Related providers */}
      <GuideRelatedProviders
        guideTitle={guide.title}
        relatedProviderSlugs={guide.relatedProviderSlugs}
      />

      {/* Related comparisons */}
      <GuideRelatedComparisons
        relatedComparisonSlugs={guide.relatedComparisonSlugs}
      />

      {/* FAQ */}
      <GuideFaq guideTitle={guide.title} faq={guide.faq} />

      {/* People Also Ask */}
      <GuidePeopleAlsoAsk
        currentSlug={guide.slug}
        relatedTermSlugs={guide.relatedTermSlugs}
      />

      {/* Related guides */}
      <GuideRelated
        currentSlug={guide.slug}
        relatedGuideSlugs={guide.relatedGuideSlugs}
      />

      {/* Internal links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>

      {/* CTA */}
      <GuideCTA guide={guide} />
    </>
  )
}
