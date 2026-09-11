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
  title: "Inmate Text App: Find Prison Messaging and Phone Options",
  description:
    "Find inmate texting, phone calls, and video visits at US prisons and jails. Compare JPay, CorrLinks, GettingOut and more. Free directory, all 50 states.",
  openGraph: {
    url: "/",
    title: "Inmate Text App: Find Prison Messaging and Phone Options",
    description:
      "Compare JPay, CorrLinks, GettingOut and more. Find messaging, phone calls, and video visit options at prisons and jails across all 50 states.",
  },
  twitter: {
    title: "Inmate Text App: Find Prison Messaging and Phone Options",
    description:
      "Compare JPay, CorrLinks, GettingOut and more. Find messaging, phone calls, and video visit options at prisons and jails across all 50 states.",
  },
  alternates: { canonical: "/" },
}

const homeFaqs = [
  {
    question: "Can I text an inmate in jail or prison?",
    answer: "Yes, but not through regular SMS text messages. Inmates use approved platforms like JPay, CorrLinks, GettingOut, and ConnectNetwork for electronic messaging. The platform depends on which facility your loved one is in. Each facility contracts with a specific provider. Create a free account on the correct platform, and the inmate can then exchange messages with you after staff review.",
  },
  {
    question: "What is the best inmate text app?",
    answer: "The best inmate text app depends on which facility your loved one is in. JPay is the most widely used for state prisons, serving over 35 states. CorrLinks is the only approved platform for all federal Bureau of Prisons facilities. GettingOut by Telmate serves 2,200 plus county jails. ConnectNetwork by GTL covers both state prisons and county jails. You cannot choose your preferred app because the facility determines which platform to use.",
  },
  {
    question: "How do I find out which inmate text service my loved one uses?",
    answer: "Search our facility directory by the facility name or browse by state. Each facility page lists which providers are available for messaging, phone calls, video visits, and money transfers. You can also call the facility directly and ask which provider they use for each type of communication.",
  },
  {
    question: "Is InmateTextApp.com free to use?",
    answer: "Yes. InmateTextApp.com is completely free. We do not charge for any information on this site. No account or registration is required. Creating accounts on communication providers like JPay, CorrLinks, or ConnectNetwork is also free, though the services themselves charge per message or per call.",
  },
  {
    question: "How can I text an inmate for free?",
    answer: "Free inmate texting depends on the facility. Several states including California, Colorado, Connecticut, Massachusetts, Minnesota, and New York have eliminated messaging costs at state facilities. Some county jails in Los Angeles, San Diego, and New York City also offer free communication. For facilities that still charge, electronic messages typically cost $0.25 to $0.50 each. Physical mail through services like TextBehind or Pigeonly converts your digital message to a printed letter and is often the most affordable option.",
  },
  {
    question: "What is the difference between JPay, CorrLinks, and GettingOut?",
    answer: "JPay serves most state prisons and handles messaging, photos, video visits, and money transfers. CorrLinks is the only approved platform for all federal Bureau of Prisons facilities. GettingOut by Telmate serves 2,200 plus county jails and focuses on video visits. ConnectNetwork by GTL handles phone calls and messaging at both state prisons and county jails. The platform you need depends entirely on which specific facility your loved one is in.",
  },
  {
    question: "How much do prison phone calls cost in 2026?",
    answer: "Under FCC rules effective April 6, 2026, prison phone call rates are capped at $0.11 per minute for large prisons and large jails. Smaller facilities have higher caps up to $0.18 per minute for the smallest jails. Several states including California, Colorado, Connecticut, Massachusetts, Minnesota, and New York now offer free calls at state facilities. Check the specific facility page to find the current rate.",
  },
  {
    question: "Can I use the same account for multiple facilities?",
    answer: "Most platforms allow you to add multiple inmates to one account as long as they are at facilities served by the same provider. If your contacts are at facilities using different providers, you will need separate accounts on each platform. For example, a JPay account works for state prison contacts but you need a separate CorrLinks account for any federal prison contacts.",
  },
  {
    question: "How long does it take for an inmate message to arrive?",
    answer: "Most electronic messages are delivered within a few hours to one business day after submission. Messages go through a staff review process before delivery. Physical letters sent through services like TextBehind or Pigeonly typically arrive within three to seven business days after printing and mailing.",
  },
  {
    question: "How do I send money to an inmate?",
    answer: "Find out which money transfer provider the facility uses through our facility directory. Common providers include JPay, Access Corrections, TouchPay, and ConnectNetwork. Create a free account on the correct platform, find the inmate by their ID number, and add funds by credit or debit card. Always confirm the inmate ID number and facility name before sending funds to avoid sending to the wrong account.",
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
