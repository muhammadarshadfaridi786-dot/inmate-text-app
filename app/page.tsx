import { Suspense } from "react"
import dynamic from "next/dynamic"
import type { Metadata } from "next"
import JsonLd from "@/components/seo/JsonLd"
import { buildWebSiteSchema, buildFaqSchema, buildSiteLinksSearchBoxSchema } from "@/lib/schema"

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
  title: "Inmate Text App: Find Prison Communication Options",
  description:
    "Find inmate messaging, video visitation, and communication options at prisons across the United States. Compare providers, discover facilities, and learn how prison communication works.",
  openGraph: {
    url: "/",
    title: "Inmate Text App: Find Prison Communication Options",
    description:
      "Search 7,000+ correctional facilities. Compare providers, discover messaging options, and understand prison communication in minutes.",
  },
  twitter: {
    title: "Inmate Text App: Find Prison Communication Options",
    description:
      "Search 7,000+ correctional facilities. Compare providers, discover messaging options, and understand prison communication in minutes.",
  },
  alternates: { canonical: "/" },
}

const homeFaqs = [
  {
    question: "What is InmateTextApp.com?",
    answer: "InmateTextApp.com is a free directory that helps families find communication options at U.S. correctional facilities. We cover messaging, phone calls, video visits, photo sharing, and money transfers across 7,000+ facilities and 15 providers.",
  },
  {
    question: "How do I find out which provider my loved one facility uses?",
    answer: "Search our facility directory by facility name or browse by state. Each facility page lists which providers are available for messaging, phone calls, video visits, and money transfers.",
  },
  {
    question: "Is this website free to use?",
    answer: "Yes. InmateTextApp.com is completely free. We do not charge for any information on this site. Creating accounts on communication providers like JPay, CorrLinks, or ConnectNetwork is also free, though the services themselves charge per message or per call.",
  },
  {
    question: "What is the difference between JPay, CorrLinks, and ConnectNetwork?",
    answer: "JPay serves most state prisons. CorrLinks is the only approved platform for federal Bureau of Prisons facilities. ConnectNetwork by GTL serves county jails and some state prisons. The platform you need depends entirely on which facility your loved one is in.",
  },
  {
    question: "Can I use the same account for multiple facilities?",
    answer: "Most platforms allow you to add multiple inmates to one account as long as they are at facilities served by the same provider. If your contacts are at facilities using different providers, you will need separate accounts on each platform.",
  },
  {
    question: "How long does it take for an inmate message to arrive?",
    answer: "Most electronic messages are delivered within a few hours to one business day after submission. Messages go through a staff review process before delivery. There is no way to expedite delivery.",
  },
  {
    question: "Why are prison phone calls so expensive?",
    answer: "Prison phone providers pay facilities a commission from call revenue in exchange for exclusive contracts. To cover these payments, providers charge families higher rates. The FCC has capped interstate calls at $0.21 per minute for prisons and $0.13 per minute for jails.",
  },
  {
    question: "How do I send money to an inmate?",
    answer: "Find out which money transfer provider the facility uses through our facility directory. Common providers include JPay, Access Corrections, and TouchPay. Create a free account, find the inmate by their ID number, and add funds by credit or debit card.",
  },
  {
    question: "Can I visit someone in prison?",
    answer: "Yes, but you must be approved and placed on the inmate visiting list first. This process takes two to six weeks and begins with the inmate submitting your information. Read our complete prison visitation guide for everything you need to know before your first visit.",
  },
  {
    question: "What should I do if my messages are being blocked?",
    answer: "Check your platform account for any notifications. Contact the messaging platform customer service to find out if your account has been flagged. If the block came from the facility, write a formal letter to the Warden or Communication Coordinator requesting a review.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={buildWebSiteSchema()} />
      <JsonLd schema={buildFaqSchema(homeFaqs)} />
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
