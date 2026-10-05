import { Suspense } from "react"
import dynamic from "next/dynamic"
import type { Metadata } from "next"
import JsonLd from "@/components/seo/JsonLd"
import { buildWebSiteSchema, buildFaqSchema, buildSiteLinksSearchBoxSchema } from "@/lib/schema"
import { HOME_FAQS } from "@/lib/data/home-faqs"
import { DEFAULT_OG_IMAGE } from "@/lib/seo"

// Above-fold: static import so the hero is never delayed
import HeroSection from "@/components/home/HeroSection"

// Below-fold: dynamic imports split client JS into separate chunks.
// SSR is still on (default) so all content remains server-rendered for SEO.
const PopularSearches     = dynamic(() => import("@/components/home/PopularSearches"))
const StatsSection        = dynamic(() => import("@/components/home/StatsSection"))
const CommunicationSection = dynamic(() => import("@/components/home/CommunicationSection"))
const FeaturedProviders   = dynamic(() => import("@/components/home/FeaturedProviders"))
const FeaturedComparisons = dynamic(() => import("@/components/home/FeaturedComparisons"))
const FeaturedFacilities  = dynamic(() => import("@/components/home/FeaturedFacilities"))
const FeaturedStates      = dynamic(() => import("@/components/home/FeaturedStates"))
const TopCounties         = dynamic(() => import("@/components/home/TopCounties"))
const HowItWorks          = dynamic(() => import("@/components/home/HowItWorks"))
const FeaturedGuides      = dynamic(() => import("@/components/home/FeaturedGuides"))
const WhyTrustUs          = dynamic(() => import("@/components/home/WhyTrustUs"))
const FaqPreview          = dynamic(() => import("@/components/home/FaqPreview"))
const FinalCTA            = dynamic(() => import("@/components/home/FinalCTA"))

export const metadata: Metadata = {
  title: "Inmate Text App: Find Prison Messaging and Phone Options",
  description:
    "Find inmate texting, phone calls, and video visits at US prisons and jails. Compare JPay, CorrLinks, GettingOut and more. Free directory, all 50 states.",
  openGraph: {
    url: "/",
    title: "Inmate Text App: Find Prison Messaging and Phone Options",
    description:
      "Compare JPay, CorrLinks, GettingOut and more. Find messaging, phone calls, and video visit options at prisons and jails across all 50 states.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inmate Text App: Find Prison Messaging and Phone Options",
    description:
      "Compare JPay, CorrLinks, GettingOut and more. Find messaging, phone calls, and video visit options at prisons and jails across all 50 states.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={buildWebSiteSchema()} />
      <JsonLd
        schema={buildFaqSchema(
          HOME_FAQS.map((faq) => ({ question: faq.question, answer: faq.plainAnswer }))
        )}
      />
      <JsonLd schema={buildSiteLinksSearchBoxSchema()} />

      {/* Section order: hero → quick links → stats → communication →
          providers → comparisons → facilities → states → counties →
          how it works → guides → trust → faq → cta */}
      <HeroSection />
      <Suspense fallback={null}>
        <PopularSearches />
        <StatsSection />
        <CommunicationSection />
        <FeaturedProviders />
        <FeaturedComparisons />
        <FeaturedFacilities />
        <FeaturedStates />
        <TopCounties />
        <HowItWorks />
        <FeaturedGuides />
        <WhyTrustUs />
        <FaqPreview />
        <FinalCTA />
      </Suspense>
    </>
  )
}
