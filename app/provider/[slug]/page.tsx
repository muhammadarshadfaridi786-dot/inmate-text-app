import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PROVIDER_DETAILS } from "@/lib/data/providers"
import { generateProviderMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildProviderSchema, buildWebPageSchema, buildReviewSchema, buildFAQSchema, buildProviderHowToSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import RelatedLinks from "@/components/seo/RelatedLinks"
import StateIntro from "@/components/state/StateIntro"
import ProviderHero from "@/components/provider/ProviderHero"
import ProviderTrustMetrics from "@/components/provider/ProviderTrustMetrics"
import ProviderServices from "@/components/provider/ProviderServices"
import ProviderCoverage from "@/components/provider/ProviderCoverage"
import ProviderFacilities from "@/components/provider/ProviderFacilities"
import ProviderPricing from "@/components/provider/ProviderPricing"
import ProviderProscons from "@/components/provider/ProviderProscons"
import ProviderFaq from "@/components/provider/ProviderFaq"
import ProviderCompareWith from "@/components/provider/ProviderCompareWith"
import RelatedProviders from "@/components/provider/RelatedProviders"
import ProviderCTA from "@/components/provider/ProviderCTA"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(PROVIDER_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const provider = PROVIDER_DETAILS[slug]
  if (!provider) return {}
  return generateProviderMetadata(provider)
}

export default async function ProviderPage({ params }: PageProps) {
  const { slug } = await params
  const provider = PROVIDER_DETAILS[slug]
  if (!provider) notFound()

  const breadcrumbItems = [
    { label: "Home",      href: "/"          },
    { label: "Providers", href: "/providers" },
    { label: provider.name },
  ]

  const relatedLinks = [
    { label: "All Providers",         href: "/providers"  },
    { label: "Compare Providers",     href: "/compare"    },
    { label: "Inmate Messaging",      href: "/messaging"  },
    { label: "Video Visitation",      href: "/video-calls" },
    { label: "Photo Sharing",         href: "/photo-sharing" },
    { label: "Phone Calls",           href: "/phone-calls" },
    { label: "Money Transfer",        href: "/money-transfer" },
    { label: "All Facilities",        href: "/facilities" },
    { label: "All States",            href: "/states"     },
    { label: "Communication Guides",  href: "/guides"     },
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          provider.seoTitle ?? `${provider.name}: Inmate Communication Guide`,
          provider.seoDescription ?? provider.description,
          `/provider/${provider.slug}`
        )}
      />
      <JsonLd
        schema={buildProviderSchema({
          name: provider.name,
          description: provider.description,
          slug: provider.slug,
          website: provider.website,
        })}
      />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      {provider.rating && (
        <JsonLd
          schema={buildReviewSchema({
            name: provider.name,
            slug: provider.slug,
            description: provider.description,
            ratingValue: provider.rating ?? 7.5,
            reviewCount: provider.reviewCount ?? 100,
          })}
        />
      )}
      {provider.faq && provider.faq.length > 0 && (
        <JsonLd
          schema={buildFAQSchema(
            provider.faq.map((f) => ({
              question: f.question,
              answer: f.answer,
            }))
          )}
        />
      )}
      {provider.slug === "corrlinks" && (
        <JsonLd
          schema={buildProviderHowToSchema(
            "How to Set Up a CorrLinks Account for Federal Prison Email",
            "Step by step guide to creating a free CorrLinks account to receive messages from a federal Bureau of Prisons inmate.",
            [
              { name: "Ask the inmate to send a contact request", text: "The process must begin with the inmate. Your loved one logs in to a TRULINCS terminal at their federal facility, enters your name and email address, and sends you a contact request." },
              { name: "Check your email for the CorrLinks invitation", text: "CorrLinks sends you a free invitation email. Check your spam folder if it does not arrive within 48 hours." },
              { name: "Create your free CorrLinks account", text: "Go to corrlinks.com and follow the link in the invitation email. Create your free account by entering your personal information and creating a password." },
              { name: "Find your PIC number", text: "After creating your account go to your account settings to find your PIC number which stands for Personal Identification Code. Share this number with your loved one so they can add you on their TRULINCS terminal." },
              { name: "Begin exchanging messages", text: "Once the inmate adds you using your PIC number you can exchange messages through corrlinks.com. Consider upgrading to CorrLinks Premier for approximately $8 per year to receive push notifications when new messages arrive." },
            ]
          )}
        />
      )}

      {/* Breadcrumb */}
      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Page sections */}
      <ProviderHero provider={provider} />
      <ProviderTrustMetrics provider={provider} />
      <StateIntro stateName={provider.name} intro={provider.overview} />
      <ProviderServices provider={provider} />
      <ProviderCoverage provider={provider} />
      <ProviderFacilities
        providerName={provider.name}
        facilities={provider.supportedFacilities}
      />
      <ProviderPricing providerName={provider.name} pricing={provider.pricing} />
      <ProviderProscons
        providerName={provider.name}
        pros={provider.pros}
        cons={provider.cons}
      />
      <ProviderFaq providerName={provider.name} faq={provider.faq} />
      <ProviderCompareWith
        providerSlug={provider.slug}
        providerName={provider.name}
        relatedSlugs={provider.relatedProviderSlugs}
      />
      <RelatedProviders slugs={provider.relatedProviderSlugs} />

      {/* Internal links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>

      {/* CTA */}
      <ProviderCTA provider={provider} />
    </>
  )
}
