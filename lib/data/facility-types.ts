// ─────────────────────────────────────────────
// SHARED FACILITY TYPES
// Extracted to avoid circular imports between facilities.ts and batch files
// ─────────────────────────────────────────────

export type FacilityType = "federal" | "state" | "county" | "private"

export type CommStatus = "available" | "limited" | "unavailable"

export interface FacilityCommService {
  status: CommStatus
  provider?: string
  notes?: string
}

export interface FacilityProvider {
  name: string
  slug: string
  initial: string
  color: string
  messaging: boolean
  video: boolean
  photos: boolean
  phone: boolean
  moneyTransfer: boolean
  notes?: string
}

export interface FacilityBasic {
  id: string
  name: string
  slug: string
  type: FacilityType
  stateSlug: string
  stateName: string
  stateAbbr: string
  countySlug: string | null
  countyName: string
  securityLevel?: string
  hasDetailPage: boolean
}

export interface FacilityDetail extends FacilityBasic {
  description: string
  seoTitle?: string
  seoDescription?: string
  overview: string[]
  address?: string
  phone?: string
  website?: string
  inmateCapacity?: number
  established?: number
  operatedBy: string
  providers: FacilityProvider[]
  communication: {
    messaging: FacilityCommService
    video: FacilityCommService
    photos: FacilityCommService
    phone: FacilityCommService
    moneyTransfer: FacilityCommService
  }
  rules: string[]
  faq: Array<{ question: string; answer: string }>
  relatedFacilitySlugs: string[]
  relatedGuideSlugs?: string[]  // troubleshooting guide slugs wired by provider (rendered via existing RelatedLinks)
}
