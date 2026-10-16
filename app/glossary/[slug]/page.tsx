import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { TERM_DETAILS } from "@/lib/data/glossary"
import { generateGlossaryMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildGlossarySchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import RelatedLinks from "@/components/seo/RelatedLinks"
import TermHero from "@/components/glossary/TermHero"
import TermDefinition from "@/components/glossary/TermDefinition"
import TermRelatedProviders from "@/components/glossary/TermRelatedProviders"
import TermRelatedTerms from "@/components/glossary/TermRelatedTerms"
import TermFaq from "@/components/glossary/TermFaq"
import TermPeopleAlsoAsk from "@/components/glossary/TermPeopleAlsoAsk"
import TermCTA from "@/components/glossary/TermCTA"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(TERM_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const term = TERM_DETAILS[slug]
  if (!term) return {}
  return generateGlossaryMetadata({
    term: term.term,
    slug: term.slug,
    definition: term.definition,
    seoTitle: term.seoTitle,
    seoDescription: term.seoDescription,
  })
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params
  const term = TERM_DETAILS[slug]
  if (!term) notFound()

  const breadcrumbItems = [
    { label: "Home",     href: "/"         },
    { label: "Glossary", href: "/glossary" },
    { label: term.term },
  ]

  const relatedLinks = [
    { label: "Glossary Directory",    href: "/glossary"      },
    { label: "All Providers",         href: "/providers"     },
    { label: "Compare Providers",     href: "/compare"       },
    { label: "Inmate Messaging",      href: "/messaging"     },
    { label: "Video Visitation",      href: "/video-calls"   },
    { label: "Photo Sharing",         href: "/photo-sharing" },
    { label: "Phone Calls",           href: "/phone-calls"   },
    { label: "Money Transfer",        href: "/money-transfer"},
    { label: "Communication Costs by State", href: "/costs-by-state" },
    { label: "All Facilities",        href: "/facilities"    },
    { label: "All States",            href: "/states"        },
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          term.seoTitle ?? `What Is ${term.term}? Prison Communication Glossary`,
          term.seoDescription ?? term.definition,
          `/glossary/${term.slug}`
        )}
      />
      <JsonLd schema={buildGlossarySchema(term)} />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />

      {/* Breadcrumb */}
      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Hero — centered, with reading time */}
      <TermHero term={term} />

      {/* Full explanation — left-aligned prose */}
      <TermDefinition term={term} />

      {/* Related providers — centered cards */}
      <TermRelatedProviders
        termName={term.term}
        relatedProviderSlugs={term.relatedProviderSlugs}
      />

      {/* Related glossary terms — centered cards */}
      <TermRelatedTerms
        currentSlug={term.slug}
        relatedTermSlugs={term.relatedTermSlugs}
      />

      {/* FAQ accordion — with FAQPage JSON-LD */}
      <TermFaq termName={term.term} faq={term.faq} />

      {/* People Also Ask — auto-generated from related terms */}
      <TermPeopleAlsoAsk
        currentSlug={term.slug}
        relatedTermSlugs={term.relatedTermSlugs}
      />

      {/* Internal links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>

      {/* CTA */}
      <TermCTA termName={term.term} relatedHubs={term.relatedHubs} />
    </>
  )
}
