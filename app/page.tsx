import type { Metadata } from "next"
import JsonLd from "@/components/seo/JsonLd"
import { buildWebSiteSchema, buildFaqSchema } from "@/lib/schema"
import HeroSection from "@/components/home/HeroSection"
import PopularSearches from "@/components/home/PopularSearches"
import StatsSection from "@/components/home/StatsSection"
import CommunicationSection from "@/components/home/CommunicationSection"
import FeaturedProviders from "@/components/home/FeaturedProviders"
import FeaturedComparisons from "@/components/home/FeaturedComparisons"
import FeaturedFacilities from "@/components/home/FeaturedFacilities"
import FeaturedStates from "@/components/home/FeaturedStates"
import TopCounties from "@/components/home/TopCounties"
import HowItWorks from "@/components/home/HowItWorks"
import FeaturedGuides from "@/components/home/FeaturedGuides"
import WhyTrustUs from "@/components/home/WhyTrustUs"
import FaqPreview from "@/components/home/FaqPreview"
import FinalCTA from "@/components/home/FinalCTA"

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
    question: "What is JPay?",
    answer:
      "JPay is a leading inmate communication platform that allows family members to send messages, photos, and money to incarcerated loved ones. JPay is contracted with dozens of state correctional systems across the US.",
  },
  {
    question: "How do inmate messaging services work?",
    answer:
      "Inmate messaging services let you send and receive electronic messages through a secure platform approved by the facility. Both parties need accounts with the same provider, and messages are reviewed by facility staff before delivery.",
  },
  {
    question: "Can I send photos to an inmate?",
    answer:
      "Many facilities allow digital photo sharing through approved providers such as JPay. Photos are reviewed before delivery and must meet the facility's content guidelines.",
  },
  {
    question: "How do video visits work?",
    answer:
      "Video visits are scheduled through the facility's approved provider. You book a time slot online and connect through a secure video platform during the scheduled window.",
  },
  {
    question: "Which provider does my facility use?",
    answer:
      "Each facility contracts with one or more communication providers. Use our facility search to find the specific prison or jail, then view the available providers and services for that location.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd schema={buildWebSiteSchema()} />
      <JsonLd schema={buildFaqSchema(homeFaqs)} />

      {/* Section order: hero → quick links → stats → communication →
          providers → comparisons → facilities → states → counties →
          how it works → guides → trust → faq → cta */}
      <HeroSection />
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
    </>
  )
}
