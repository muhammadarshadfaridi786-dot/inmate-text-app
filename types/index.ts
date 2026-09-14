export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface JsonLdSchema {
  "@context": string
  "@type": string
  [key: string]: unknown
}

export interface FaqItem {
  question: string
  answer: string
}

export interface State {
  id: string
  name: string
  slug: string
  abbreviation: string
  facilityCount: number
}

export interface County {
  id: string
  name: string
  slug: string
  stateId: string
  state?: State
}

export interface Facility {
  id: string
  name: string
  slug: string
  stateId: string
  state?: State
  countyId?: string
  county?: County
  type: "federal" | "state" | "county" | "private"
  status: "active" | "closed" | "transferred"
  securityLevel?: string
  address?: string
  phone?: string
  website?: string
  description?: string
  inmateCount?: number
  latitude?: number
  longitude?: number
  providers?: FacilityProvider[]
}

export interface Provider {
  id: string
  name: string
  slug: string
  website?: string
  logoUrl?: string
  affiliateUrl?: string
  description?: string
  foundedYear?: number
  headquarters?: string
  mobileApp: boolean
  iosUrl?: string
  androidUrl?: string
}

export interface FacilityProvider {
  id: string
  facilityId: string
  providerId: string
  facility?: Facility
  provider?: Provider
  messaging: boolean
  video: boolean
  photos: boolean
  voiceCalls: boolean
  moneyTransfer: boolean
  notes?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: string
  seoTitle?: string
  seoDescription?: string
  category?: string
  author?: string
  faqSchema?: FaqItem[]
  publishedAt?: string
  updatedAt: string
}

export interface GlossaryTerm {
  id: string
  term: string
  slug: string
  definition: string
  seoTitle?: string
  seoDescription?: string
  relatedSlugs: string[]
}

export type GuideCategory =
  | "Getting Started"
  | "How It Works"
  | "Provider Guides"
  | "Facility Types"
  | "Communication Tips"
  | "Money and Accounts"
  | "Visitation"
  | "International"

export type GuideDifficulty = "Beginner" | "Intermediate" | "Advanced"

export interface GuideSection {
  heading: string
  body: string[]
}

export interface GuideBasic {
  id: string
  slug: string
  title: string
  excerpt: string
  category: GuideCategory
  difficulty: GuideDifficulty
  featured: boolean
  popular: boolean
  readingTimeMinutes: number
  country?: string
}

export interface GuideDetail extends GuideBasic {
  intro: string[]
  sections: GuideSection[]
  takeaways: string[]
  faq: Array<{ question: string; answer: string }>
  seoTitle: string
  seoDescription: string
  relatedGuideSlugs: string[]
  relatedTermSlugs: string[]
  relatedProviderSlugs: string[]
  relatedComparisonSlugs: string[]
  ctaType: "provider" | "hub" | "directory"
  ctaTarget: string
  ctaLabel: string
  featuredImage?: string
  publishedAt: string
  updatedAt: string
}
