import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS - Batch 12 (25 facilities, Batch 3 expansion)
// State prisons (NY, TX, FL, OH, GA) + federal (FCI/USP/FDC/MCC/MDC)
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH12: Record<string, FacilityDetail> = {

"clinton-correctional-facility": {
  id: "f-373",
  name: "Clinton Correctional Facility",
  slug: "clinton-correctional-facility",
  type: "state",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "Clinton County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Clinton Correctional Facility: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Clinton Correctional Facility in Dannemora NY. Securus phone service and tablets, visitation, and mail rules for this maximum security NY DOCCS prison.",

  description:
    "Clinton Correctional Facility communication guide. Securus phone service and tablets, visitation, and contact rules for families of inmates at this maximum security prison in Dannemora NY.",

  overview: [
    "Clinton Correctional Facility is a maximum security state prison in Dannemora, New York, operated by the New York State Department of Corrections and Community Supervision (DOCCS). It is one of the largest maximum security prisons in the state and houses adult men in general confinement, including a Special Housing Unit and a long-term protective custody unit.",
    "Phone service at Clinton runs through Securus Technologies under the statewide DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus, and calls can only go to numbers on the inmate's approved list. Inmates also have access to Securus tablets, which support approved communication and programming options.",
    "In-person visiting at Clinton follows DOCCS rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls and visits are monitored and recorded, and visiting hours vary by housing unit, so confirm the current schedule before traveling.",
  ],

  website: "https://doccs.ny.gov/location/clinton-correctional-facility",
  operatedBy: "New York State Department of Corrections and Community Supervision (DOCCS)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "Securus provides phone service and tablets at NY DOCCS facilities, including Clinton Correctional Facility.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging availability varies by tablet program. Confirm current options through Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability varies. Confirm current video visit options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund an AdvancePay or Direct Bill account and keep your number on the approved list." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Fund phone and tablet accounts through Securus. Trust account deposits follow DOCCS rules." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "Follow the DOCCS dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours for the inmate's housing unit before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Clinton Correctional Facility?", answer: "Securus Technologies provides phone service at Clinton under the statewide NY DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus." },
    { question: "Can I send electronic messages to an inmate at Clinton?", answer: "Messaging availability depends on the tablet program at the facility. Confirm current messaging options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Clinton Correctional Facility?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow the DOCCS dress code. Confirm visiting hours for the inmate's housing unit before traveling." },
    { question: "What security level is Clinton Correctional Facility?", answer: "Clinton is a maximum security facility for adult men. It includes general confinement, a Special Housing Unit, and a long-term protective custody unit." },
    { question: "How do I add money for phone calls at Clinton?", answer: "Fund your Securus AdvancePay or Direct Bill account online, by phone, or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "sing-sing-correctional-facility", "fci-ray-brook"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"great-meadow-correctional-facility": {
  id: "f-374",
  name: "Great Meadow Correctional Facility",
  slug: "great-meadow-correctional-facility",
  type: "state",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "Washington County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Great Meadow Correctional Facility: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Great Meadow Correctional Facility in Comstock NY. Securus phone service and tablets, visitation, and contact rules for this maximum security NY DOCCS prison.",

  description:
    "Great Meadow Correctional Facility communication guide. Securus phone service and tablets, visitation, and contact rules for families of inmates at this maximum security prison in Comstock NY.",

  overview: [
    "Great Meadow Correctional Facility is a maximum security state prison in Comstock, New York, operated by the New York State Department of Corrections and Community Supervision (DOCCS). It houses adult men in general confinement in Washington County, near the Vermont border.",
    "Phone service at Great Meadow runs through Securus Technologies under the statewide DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus, and calls can only go to numbers on the inmate's approved list. Inmates also have access to Securus tablets for approved communication and programming.",
    "In-person visiting at Great Meadow follows DOCCS rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  website: "https://doccs.ny.gov/location/great-meadow-correctional-facility",
  operatedBy: "New York State Department of Corrections and Community Supervision (DOCCS)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "Securus provides phone service and tablets at NY DOCCS facilities, including Great Meadow Correctional Facility.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging availability varies by tablet program. Confirm current options through Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability varies. Confirm current video visit options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund an AdvancePay or Direct Bill account and keep your number on the approved list." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Fund phone and tablet accounts through Securus. Trust account deposits follow DOCCS rules." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "Follow the DOCCS dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours for the inmate's housing unit before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Great Meadow Correctional Facility?", answer: "Securus Technologies provides phone service at Great Meadow under the statewide NY DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus." },
    { question: "Can I send electronic messages to an inmate at Great Meadow?", answer: "Messaging availability depends on the tablet program at the facility. Confirm current messaging options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Great Meadow Correctional Facility?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow the DOCCS dress code. Confirm visiting hours for the inmate's housing unit before traveling." },
    { question: "What security level is Great Meadow Correctional Facility?", answer: "Great Meadow is a maximum security facility for adult men in general confinement." },
    { question: "How do I add money for phone calls at Great Meadow?", answer: "Fund your Securus AdvancePay or Direct Bill account online, by phone, or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "sing-sing-correctional-facility", "fci-ray-brook"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"auburn-correctional-facility": {
  id: "f-375",
  name: "Auburn Correctional Facility",
  slug: "auburn-correctional-facility",
  type: "state",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "Cayuga County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Auburn Correctional Facility: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Auburn Correctional Facility in Auburn NY. Securus phone service and tablets, visitation, and contact rules for this maximum security NY DOCCS prison.",

  description:
    "Auburn Correctional Facility communication guide. Securus phone service and tablets, visitation, and contact rules for families of inmates at this maximum security prison in Auburn NY.",

  overview: [
    "Auburn Correctional Facility is a maximum security state prison in Auburn, New York, operated by the New York State Department of Corrections and Community Supervision (DOCCS). It serves as an intake facility and houses adult men, generally ages 21 and over, in general confinement. It also includes a Special Housing Unit and a Residential Rehabilitation Unit.",
    "Phone service at Auburn runs through Securus Technologies under the statewide DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus, and calls can only go to numbers on the inmate's approved list. Inmates also have access to Securus tablets for approved communication and programming.",
    "In-person visiting at Auburn follows DOCCS rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  website: "https://doccs.ny.gov/location/auburn-correctional-facility",
  operatedBy: "New York State Department of Corrections and Community Supervision (DOCCS)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "Securus provides phone service and tablets at NY DOCCS facilities, including Auburn Correctional Facility.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging availability varies by tablet program. Confirm current options through Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability varies. Confirm current video visit options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund an AdvancePay or Direct Bill account and keep your number on the approved list." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Fund phone and tablet accounts through Securus. Trust account deposits follow DOCCS rules." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "Follow the DOCCS dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours for the inmate's housing unit before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Auburn Correctional Facility?", answer: "Securus Technologies provides phone service at Auburn under the statewide NY DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus." },
    { question: "Can I send electronic messages to an inmate at Auburn?", answer: "Messaging availability depends on the tablet program at the facility. Confirm current messaging options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Auburn Correctional Facility?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow the DOCCS dress code. Confirm visiting hours for the inmate's housing unit before traveling." },
    { question: "What security level is Auburn Correctional Facility?", answer: "Auburn is a maximum security facility for adult men. It serves as an intake facility and includes a Special Housing Unit and a Residential Rehabilitation Unit." },
    { question: "How do I add money for phone calls at Auburn?", answer: "Fund your Securus AdvancePay or Direct Bill account online, by phone, or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "sing-sing-correctional-facility", "fci-ray-brook"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"elmira-correctional-facility": {
  id: "f-376",
  name: "Elmira Correctional Facility",
  slug: "elmira-correctional-facility",
  type: "state",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "Chemung County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Elmira Correctional Facility: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Elmira Correctional Facility in Elmira NY. Securus phone service and tablets, visitation, and contact rules for this maximum security NY DOCCS prison, known as The Hill.",

  description:
    "Elmira Correctional Facility communication guide. Securus phone service and tablets, visitation, and contact rules for families of inmates at this maximum security prison in Elmira NY.",

  overview: [
    "Elmira Correctional Facility is a maximum security state prison in Elmira, New York, operated by the New York State Department of Corrections and Community Supervision (DOCCS). Known as The Hill, it opened in 1876 as the Elmira Reformatory, the first reformatory for adult males in the United States, and today houses adult men in general confinement.",
    "Phone service at Elmira runs through Securus Technologies under the statewide DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus, and calls can only go to numbers on the inmate's approved list. Inmates also have access to Securus tablets for approved communication and programming.",
    "In-person visiting at Elmira follows DOCCS rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  website: "https://doccs.ny.gov/location/elmira-correctional-facility",
  established: 1876,
  operatedBy: "New York State Department of Corrections and Community Supervision (DOCCS)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "Securus provides phone service and tablets at NY DOCCS facilities, including Elmira Correctional Facility.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging availability varies by tablet program. Confirm current options through Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability varies. Confirm current video visit options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund an AdvancePay or Direct Bill account and keep your number on the approved list." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Fund phone and tablet accounts through Securus. Trust account deposits follow DOCCS rules." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "Follow the DOCCS dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours for the inmate's housing unit before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Elmira Correctional Facility?", answer: "Securus Technologies provides phone service at Elmira under the statewide NY DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus." },
    { question: "Can I send electronic messages to an inmate at Elmira?", answer: "Messaging availability depends on the tablet program at the facility. Confirm current messaging options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Elmira Correctional Facility?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow the DOCCS dress code. Confirm visiting hours for the inmate's housing unit before traveling." },
    { question: "Why is Elmira called The Hill?", answer: "Elmira sits on a hill above the city and opened in 1876 as the Elmira Reformatory, the first reformatory for adult males in the United States. The nickname comes from its hilltop location." },
    { question: "How do I add money for phone calls at Elmira?", answer: "Fund your Securus AdvancePay or Direct Bill account online, by phone, or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "sing-sing-correctional-facility", "fci-ray-brook"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"bedford-hills-correctional-facility": {
  id: "f-377",
  name: "Bedford Hills Correctional Facility",
  slug: "bedford-hills-correctional-facility",
  type: "state",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "Westchester County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Bedford Hills Correctional Facility: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Bedford Hills Correctional Facility in Bedford Hills NY. Securus phone service and tablets, visitation, and contact rules for the only maximum security women's prison in New York.",

  description:
    "Bedford Hills Correctional Facility communication guide. Securus phone service and tablets, visitation, and contact rules for families of inmates at New York's only maximum security women's prison.",

  overview: [
    "Bedford Hills Correctional Facility is a maximum security state prison for women in Bedford Hills, New York, operated by the New York State Department of Corrections and Community Supervision (DOCCS). It is the only maximum security women's prison in New York and serves as the reception and classification center for women entering the state system. It opened in 1901 and houses women ages 18 and over in general confinement.",
    "Phone service at Bedford Hills runs through Securus Technologies under the statewide DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus, and calls can only go to numbers on the inmate's approved list. Inmates also have access to Securus tablets for approved communication and programming.",
    "In-person visiting at Bedford Hills follows DOCCS rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  established: 1901,
  operatedBy: "New York State Department of Corrections and Community Supervision (DOCCS)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "Securus provides phone service and tablets at NY DOCCS facilities, including Bedford Hills Correctional Facility.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging availability varies by tablet program. Confirm current options through Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability varies. Confirm current video visit options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund an AdvancePay or Direct Bill account and keep your number on the approved list." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Fund phone and tablet accounts through Securus. Trust account deposits follow DOCCS rules." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "Follow the DOCCS dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours for the inmate's housing unit before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Bedford Hills Correctional Facility?", answer: "Securus Technologies provides phone service at Bedford Hills under the statewide NY DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus." },
    { question: "Can I send electronic messages to an inmate at Bedford Hills?", answer: "Messaging availability depends on the tablet program at the facility. Confirm current messaging options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Bedford Hills Correctional Facility?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow the DOCCS dress code. Confirm visiting hours for the inmate's housing unit before traveling." },
    { question: "Is Bedford Hills the only maximum security women's prison in New York?", answer: "Yes. Bedford Hills is the only maximum security women's prison in New York and also serves as the reception and classification center for women entering the state system." },
    { question: "How do I add money for phone calls at Bedford Hills?", answer: "Fund your Securus AdvancePay or Direct Bill account online, by phone, or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "sing-sing-correctional-facility", "fci-ray-brook"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"fishkill-correctional-facility": {
  id: "f-378",
  name: "Fishkill Correctional Facility",
  slug: "fishkill-correctional-facility",
  type: "state",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "Dutchess County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Fishkill Correctional Facility: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Fishkill Correctional Facility in Beacon NY. Securus phone service and tablets, visitation, and contact rules for this medium security NY DOCCS prison.",

  description:
    "Fishkill Correctional Facility communication guide. Securus phone service and tablets, visitation, and contact rules for families of inmates at this medium security prison in Beacon NY.",

  overview: [
    "Fishkill Correctional Facility is a medium security state prison in Beacon, New York, operated by the New York State Department of Corrections and Community Supervision (DOCCS). It houses adult men ages 18 and over in general confinement and also operates a Regional Medical Unit serving prisons across southern New York, plus work release and residential treatment programs.",
    "Phone service at Fishkill runs through Securus Technologies under the statewide DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus, and calls can only go to numbers on the inmate's approved list. Inmates also have access to Securus tablets for approved communication and programming.",
    "In-person visiting at Fishkill follows DOCCS rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  website: "https://doccs.ny.gov/location/fishkill-correctional-facility",
  operatedBy: "New York State Department of Corrections and Community Supervision (DOCCS)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "Securus provides phone service and tablets at NY DOCCS facilities, including Fishkill Correctional Facility.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging availability varies by tablet program. Confirm current options through Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability varies. Confirm current video visit options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund an AdvancePay or Direct Bill account and keep your number on the approved list." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Fund phone and tablet accounts through Securus. Trust account deposits follow DOCCS rules." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "Follow the DOCCS dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours for the inmate's housing unit before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Fishkill Correctional Facility?", answer: "Securus Technologies provides phone service at Fishkill under the statewide NY DOCCS agreement. Families fund an AdvancePay or Direct Bill account through Securus." },
    { question: "Can I send electronic messages to an inmate at Fishkill?", answer: "Messaging availability depends on the tablet program at the facility. Confirm current messaging options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Fishkill Correctional Facility?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow the DOCCS dress code. Confirm visiting hours for the inmate's housing unit before traveling." },
    { question: "What security level is Fishkill Correctional Facility?", answer: "Fishkill is a medium security facility for adult men. It also houses a Regional Medical Unit for southern New York prisons." },
    { question: "How do I add money for phone calls at Fishkill?", answer: "Fund your Securus AdvancePay or Direct Bill account online, by phone, or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "sing-sing-correctional-facility", "fci-ray-brook"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"allan-b-polunsky-unit": {
  id: "f-379",
  name: "Allan B. Polunsky Unit",
  slug: "allan-b-polunsky-unit",
  type: "state",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Walker County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Allan B. Polunsky Unit: Securus Phones, Messaging and Contact Guide",
  seoDescription: "How to contact someone at the Polunsky Unit in Livingston TX. Securus phone, eMessaging, video visitation and tablets. Texas male death row is housed here.",

  description:
    "Allan B. Polunsky Unit communication guide. Securus phone, eMessaging, video visitation and tablets for families of inmates at this TDCJ prison in Livingston TX, which houses Texas male death row.",

  overview: [
    "The Allan B. Polunsky Unit is a Texas Department of Criminal Justice (TDCJ) prison in West Livingston, Texas, in Walker County. It opened in November 1993 and was formerly known as the Terrell Unit. The unit houses Texas male death row inmates, while executions are carried out at the Huntsville Unit.",
    "Communication at the Polunsky Unit runs through Securus Technologies, which provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities. Families create a Securus account, add the inmate, and fund services for calls, messages, and video visits. Death row housing has additional restrictions, so confirm the inmate's current privileges before funding an account.",
    "In-person visiting follows TDCJ rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  inmateCapacity: 2984,
  established: 1993,
  operatedBy: "Texas Department of Criminal Justice (TDCJ)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Polunsky Unit.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging through a Securus account. Death row housing has additional restrictions, so confirm the inmate's privileges first." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Schedule in advance and confirm eligibility for the inmate's housing area." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this unit. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options for the inmate trust fund follow TDCJ rules. Confirm the current deposit method on the TDCJ website before sending money." },
  },

  rules: [
    "Create a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Confirm the inmate's current privileges before funding messaging or video services, since death row housing has extra restrictions.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "All calls, messages, and visits are monitored and recorded.",
    "Confirm visiting hours and any housing-specific rules before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at the Polunsky Unit?", answer: "Securus Technologies provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Polunsky Unit." },
    { question: "Can I send electronic messages to an inmate at the Polunsky Unit?", answer: "Yes, through Securus eMessaging. Death row housing has additional restrictions, so confirm the inmate's current privileges before funding an account." },
    { question: "Does the Polunsky Unit house Texas death row?", answer: "Yes. The Polunsky Unit houses Texas male death row inmates. Executions are carried out at the Huntsville Unit, not at Polunsky." },
    { question: "How do video visits work at the Polunsky Unit?", answer: "Video visits run through Securus. Create an account, add the inmate, and schedule in advance. Confirm the inmate's eligibility for video visits in his housing area." },
    { question: "How do I visit someone at the Polunsky Unit?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow TDCJ visiting rules. Confirm hours before traveling." },
  ],

  relatedFacilitySlugs: ["huntsville-unit", "eastham-unit", "fci-seagoville"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"estelle-unit": {
  id: "f-380",
  name: "Estelle Unit",
  slug: "estelle-unit",
  type: "state",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Walker County",
  securityLevel: "Mixed",
  hasDetailPage: true,
  seoTitle: "Estelle Unit: Securus Phones, Messaging and Contact Guide",
  seoDescription: "How to contact someone at the Estelle Unit in Huntsville TX. Securus phone, eMessaging, video visitation and tablets for this TDCJ prison with geriatric and medical facilities.",

  description:
    "Estelle Unit communication guide. Securus phone, eMessaging, video visitation and tablets for families of inmates at this TDCJ prison in Huntsville TX.",

  overview: [
    "The Estelle Unit is a Texas Department of Criminal Justice (TDCJ) prison in Huntsville, Texas, in Walker County. It opened in June 1984 and houses inmates across custody levels G1 through G5, plus administrative segregation, safekeeping, substance abuse, and geriatric populations. The unit also includes a regional medical facility and a High Security Unit.",
    "Communication at the Estelle Unit runs through Securus Technologies, which provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities. Families create a Securus account, add the inmate, and fund services for calls, messages, and video visits.",
    "In-person visiting follows TDCJ rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  inmateCapacity: 3148,
  established: 1984,
  operatedBy: "Texas Department of Criminal Justice (TDCJ)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Estelle Unit.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging through a Securus account. Confirm the inmate's current privileges before funding an account." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Schedule in advance and confirm eligibility for the inmate's housing area." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this unit. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options for the inmate trust fund follow TDCJ rules. Confirm the current deposit method on the TDCJ website before sending money." },
  },

  rules: [
    "Create a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Confirm the inmate's current privileges before funding messaging or video services.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "All calls, messages, and visits are monitored and recorded.",
    "Confirm visiting hours and any housing-specific rules before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at the Estelle Unit?", answer: "Securus Technologies provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Estelle Unit." },
    { question: "Can I send electronic messages to an inmate at the Estelle Unit?", answer: "Yes, through Securus eMessaging. Create a Securus account, add the inmate, and fund the service. Confirm the inmate's privileges first." },
    { question: "How do video visits work at the Estelle Unit?", answer: "Video visits run through Securus. Create an account, add the inmate, and schedule in advance. Confirm the inmate's eligibility for video visits in his housing area." },
    { question: "What populations does the Estelle Unit house?", answer: "The Estelle Unit houses inmates across custody levels G1 through G5, plus administrative segregation, safekeeping, substance abuse, and geriatric populations. It also includes a regional medical facility." },
    { question: "How do I visit someone at the Estelle Unit?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow TDCJ visiting rules. Confirm hours before traveling." },
  ],

  relatedFacilitySlugs: ["huntsville-unit", "eastham-unit", "fci-seagoville"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"coffield-unit": {
  id: "f-381",
  name: "Coffield Unit",
  slug: "coffield-unit",
  type: "state",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Anderson County",
  securityLevel: "Mixed",
  hasDetailPage: true,
  seoTitle: "Coffield Unit: Securus Phones, Messaging and Contact Guide",
  seoDescription: "How to contact someone at the Coffield Unit in Tennessee Colony TX. Securus phone, eMessaging, video visitation and tablets for the largest prison in Texas.",

  description:
    "Coffield Unit communication guide. Securus phone, eMessaging, video visitation and tablets for families of inmates at the largest prison in Texas, in Tennessee Colony TX.",

  overview: [
    "The Coffield Unit is a Texas Department of Criminal Justice (TDCJ) prison in Tennessee Colony, Texas, in Anderson County. It opened in June 1965 and, with a capacity of about 4,139, is the largest prison in Texas. It is co-located with the Beto, Gurney, Michael, and Powledge units on a large plot of land and supports extensive agricultural operations.",
    "Communication at the Coffield Unit runs through Securus Technologies, which provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities. Families create a Securus account, add the inmate, and fund services for calls, messages, and video visits.",
    "In-person visiting follows TDCJ rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  inmateCapacity: 4139,
  established: 1965,
  operatedBy: "Texas Department of Criminal Justice (TDCJ)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Coffield Unit.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging through a Securus account. Confirm the inmate's current privileges before funding an account." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Schedule in advance and confirm eligibility for the inmate's housing area." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this unit. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options for the inmate trust fund follow TDCJ rules. Confirm the current deposit method on the TDCJ website before sending money." },
  },

  rules: [
    "Create a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Confirm the inmate's current privileges before funding messaging or video services.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "All calls, messages, and visits are monitored and recorded.",
    "Confirm visiting hours and any housing-specific rules before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at the Coffield Unit?", answer: "Securus Technologies provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Coffield Unit." },
    { question: "Can I send electronic messages to an inmate at the Coffield Unit?", answer: "Yes, through Securus eMessaging. Create a Securus account, add the inmate, and fund the service. Confirm the inmate's privileges first." },
    { question: "Is the Coffield Unit the largest prison in Texas?", answer: "Yes. With a capacity of about 4,139, the Coffield Unit is the largest prison in Texas. It is co-located with the Beto, Gurney, Michael, and Powledge units." },
    { question: "How do video visits work at the Coffield Unit?", answer: "Video visits run through Securus. Create an account, add the inmate, and schedule in advance. Confirm the inmate's eligibility for video visits in his housing area." },
    { question: "How do I visit someone at the Coffield Unit?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow TDCJ visiting rules. Confirm hours before traveling." },
  ],

  relatedFacilitySlugs: ["huntsville-unit", "eastham-unit", "fci-seagoville"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"ellis-unit": {
  id: "f-382",
  name: "Ellis Unit",
  slug: "ellis-unit",
  type: "state",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Walker County",
  securityLevel: "Mixed",
  hasDetailPage: true,
  seoTitle: "Ellis Unit: Securus Phones, Messaging and Contact Guide",
  seoDescription: "How to contact someone at the Ellis Unit in Huntsville TX. Securus phone, eMessaging, video visitation and tablets for this TDCJ prison, former home of Texas male death row.",

  description:
    "Ellis Unit communication guide. Securus phone, eMessaging, video visitation and tablets for families of inmates at this TDCJ prison in Huntsville TX.",

  overview: [
    "The Ellis Unit is a Texas Department of Criminal Justice (TDCJ) prison in Huntsville, Texas, in Walker County. It opened in July 1965 and housed Texas male death row from 1965 until 1999. Today it houses inmates across custody levels G1 through G5, plus administrative segregation and trusty camp populations, and supports extensive agricultural operations including a cotton gin and a garment factory.",
    "Communication at the Ellis Unit runs through Securus Technologies, which provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities. Families create a Securus account, add the inmate, and fund services for calls, messages, and video visits.",
    "In-person visiting follows TDCJ rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  inmateCapacity: 2073,
  established: 1965,
  operatedBy: "Texas Department of Criminal Justice (TDCJ)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Ellis Unit.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging through a Securus account. Confirm the inmate's current privileges before funding an account." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Schedule in advance and confirm eligibility for the inmate's housing area." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this unit. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options for the inmate trust fund follow TDCJ rules. Confirm the current deposit method on the TDCJ website before sending money." },
  },

  rules: [
    "Create a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Confirm the inmate's current privileges before funding messaging or video services.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "All calls, messages, and visits are monitored and recorded.",
    "Confirm visiting hours and any housing-specific rules before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at the Ellis Unit?", answer: "Securus Technologies provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Ellis Unit." },
    { question: "Can I send electronic messages to an inmate at the Ellis Unit?", answer: "Yes, through Securus eMessaging. Create a Securus account, add the inmate, and fund the service. Confirm the inmate's privileges first." },
    { question: "Did the Ellis Unit house Texas death row?", answer: "Yes. The Ellis Unit housed Texas male death row from 1965 until 1999, when death row moved to the Polunsky Unit." },
    { question: "How do video visits work at the Ellis Unit?", answer: "Video visits run through Securus. Create an account, add the inmate, and schedule in advance. Confirm the inmate's eligibility for video visits in his housing area." },
    { question: "How do I visit someone at the Ellis Unit?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow TDCJ visiting rules. Confirm hours before traveling." },
  ],

  relatedFacilitySlugs: ["huntsville-unit", "eastham-unit", "fci-seagoville"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"wynne-unit": {
  id: "f-383",
  name: "Wynne Unit",
  slug: "wynne-unit",
  type: "state",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Walker County",
  securityLevel: "Mixed",
  hasDetailPage: true,
  seoTitle: "Wynne Unit: Securus Phones, Messaging and Contact Guide",
  seoDescription: "How to contact someone at the Wynne Unit in Huntsville TX. Securus phone, eMessaging, video visitation and tablets for the second-oldest prison in Texas.",

  description:
    "Wynne Unit communication guide. Securus phone, eMessaging, video visitation and tablets for families of inmates at this TDCJ prison in Huntsville TX.",

  overview: [
    "The Wynne Unit is a Texas Department of Criminal Justice (TDCJ) prison in Huntsville, Texas, in Walker County. It opened in 1883, making it the second-oldest prison in Texas. It houses inmates across custody levels G1 through G5 plus outside trusty populations, and the Windham School District headquarters is located at the unit. It is co-located with the Holliday Unit.",
    "Communication at the Wynne Unit runs through Securus Technologies, which provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities. Families create a Securus account, add the inmate, and fund services for calls, messages, and video visits.",
    "In-person visiting follows TDCJ rules. Visitors must be on the inmate's approved visiting list and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  inmateCapacity: 2300,
  established: 1883,
  operatedBy: "Texas Department of Criminal Justice (TDCJ)",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Wynne Unit.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging through a Securus account. Confirm the inmate's current privileges before funding an account." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Schedule in advance and confirm eligibility for the inmate's housing area." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this unit. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options for the inmate trust fund follow TDCJ rules. Confirm the current deposit method on the TDCJ website before sending money." },
  },

  rules: [
    "Create a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Confirm the inmate's current privileges before funding messaging or video services.",
    "Visitors must be on the approved visiting list and bring a valid government-issued photo ID.",
    "All calls, messages, and visits are monitored and recorded.",
    "Confirm visiting hours and any housing-specific rules before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at the Wynne Unit?", answer: "Securus Technologies provides phone service, eMessaging, video visitation, and tablets for TDCJ facilities including the Wynne Unit." },
    { question: "Can I send electronic messages to an inmate at the Wynne Unit?", answer: "Yes, through Securus eMessaging. Create a Securus account, add the inmate, and fund the service. Confirm the inmate's privileges first." },
    { question: "How old is the Wynne Unit?", answer: "The Wynne Unit opened in 1883, making it the second-oldest prison in Texas. The Windham School District headquarters is located at the unit." },
    { question: "How do video visits work at the Wynne Unit?", answer: "Video visits run through Securus. Create an account, add the inmate, and schedule in advance. Confirm the inmate's eligibility for video visits in his housing area." },
    { question: "How do I visit someone at the Wynne Unit?", answer: "You must be on the inmate's approved visiting list. Bring valid photo ID and follow TDCJ visiting rules. Confirm hours before traveling." },
  ],

  relatedFacilitySlugs: ["huntsville-unit", "eastham-unit", "fci-seagoville"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"union-correctional-institution": {
  id: "f-384",
  name: "Union Correctional Institution",
  slug: "union-correctional-institution",
  type: "state",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Union County",
  securityLevel: "Mixed",
  hasDetailPage: true,
  seoTitle: "Union Correctional Institution: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Union Correctional Institution in Raiford FL. Phone, visitation and deposit options for this Florida prison, home to male death row.",

  description:
    "Union Correctional Institution communication guide. Phone, visitation and deposit options for families of inmates at this Florida prison in Raiford FL, home to male death row.",

  overview: [
    "Union Correctional Institution is a Florida Department of Corrections prison in Raiford, Florida, in Union County. It opened in 1913 as the Florida State Prison and houses adult men across mixed security levels, including maximum, close, medium, minimum, and community custody. It houses Florida male death row and includes the Union Work Camp satellite unit.",
    "JPay is confirmed for inmate funds deposits under Florida Administrative Code rules. The phone and messaging vendor for this facility is not confirmed from official sources, so families should confirm the current phone and messaging provider with the facility before creating any paid account.",
    "Visitation follows Florida Department of Corrections rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  website: "https://fdc.myflorida.com/ci/213.html",
  inmateCapacity: 1957,
  established: 1913,
  operatedBy: "Florida Department of Corrections",
  // TODO(Jan): verify phone and messaging provider (JPay confirmed for funds only)

  providers: [
    {
      name: "JPay",
      slug: "jpay",
      initial: "J",
      color: "bg-blue-600",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "JPay is confirmed for inmate funds deposits under Florida Administrative Code rules. Phone and messaging vendor not confirmed.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging vendor is not confirmed. Confirm the current provider with the facility before creating a paid account." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Inmate funds deposits through JPay under Florida Administrative Code rules." },
  },

  rules: [
    "Confirm the current phone and messaging vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Florida Department of Corrections dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "Which company handles phone calls at Union Correctional Institution?", answer: "The current phone vendor is not confirmed from official sources. Confirm the provider with the facility before creating a prepaid account. JPay is confirmed only for inmate funds deposits." },
    { question: "Does Union Correctional Institution house Florida death row?", answer: "Yes. Union Correctional Institution houses Florida male death row. It opened in 1913 as the Florida State Prison." },
    { question: "How do I add money to an inmate's account at Union Correctional Institution?", answer: "Inmate funds deposits go through JPay under Florida Administrative Code rules. Confirm the current deposit method before sending money." },
    { question: "How do I visit someone at Union Correctional Institution?", answer: "Visitors must be approved by the Florida Department of Corrections. Bring valid photo ID and follow the dress code. Confirm visiting hours before traveling." },
  ],

  relatedFacilitySlugs: ["federal-detention-center-miami", "fci-miami", "fci-seagoville"],
},

"santa-rosa-correctional-institution": {
  id: "f-385",
  name: "Santa Rosa Correctional Institution",
  slug: "santa-rosa-correctional-institution",
  type: "state",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Santa Rosa County",
  securityLevel: "Mixed",
  hasDetailPage: true,
  seoTitle: "Santa Rosa Correctional Institution: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Santa Rosa Correctional Institution in Milton FL. Phone, visitation and deposit options for this Florida prison and its Annex.",

  description:
    "Santa Rosa Correctional Institution communication guide. Phone, visitation and deposit options for families of inmates at this Florida prison in Milton FL.",

  overview: [
    "Santa Rosa Correctional Institution is a Florida Department of Corrections prison in Milton, Florida, in Santa Rosa County. It opened in 1996, and its Annex opened in 2006. It houses adult men across mixed security levels and is described as one of Florida's toughest prisons.",
    "JPay is confirmed for inmate funds deposits under Florida Administrative Code rules. The phone and messaging vendor for this facility is not confirmed from official sources, so families should confirm the current phone and messaging provider with the facility before creating any paid account.",
    "Visitation follows Florida Department of Corrections rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  website: "https://fdc.myflorida.com/ci/119.html",
  inmateCapacity: 1614,
  established: 1996,
  operatedBy: "Florida Department of Corrections",
  // TODO(Jan): verify phone and messaging provider (JPay confirmed for funds only)

  providers: [
    {
      name: "JPay",
      slug: "jpay",
      initial: "J",
      color: "bg-blue-600",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "JPay is confirmed for inmate funds deposits under Florida Administrative Code rules. Phone and messaging vendor not confirmed.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging vendor is not confirmed. Confirm the current provider with the facility before creating a paid account." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Inmate funds deposits through JPay under Florida Administrative Code rules." },
  },

  rules: [
    "Confirm the current phone and messaging vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Florida Department of Corrections dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "Which company handles phone calls at Santa Rosa Correctional Institution?", answer: "The current phone vendor is not confirmed from official sources. Confirm the provider with the facility before creating a prepaid account. JPay is confirmed only for inmate funds deposits." },
    { question: "What is the Santa Rosa Annex?", answer: "The Santa Rosa Annex opened in 2006 as an additional housing area of Santa Rosa Correctional Institution. The main institution opened in 1996." },
    { question: "How do I add money to an inmate's account at Santa Rosa Correctional Institution?", answer: "Inmate funds deposits go through JPay under Florida Administrative Code rules. Confirm the current deposit method before sending money." },
    { question: "How do I visit someone at Santa Rosa Correctional Institution?", answer: "Visitors must be approved by the Florida Department of Corrections. Bring valid photo ID and follow the dress code. Confirm visiting hours before traveling." },
  ],

  relatedFacilitySlugs: ["federal-detention-center-miami", "fci-miami", "fci-seagoville"],
},

"lebanon-correctional-institution": {
  id: "f-386",
  name: "Lebanon Correctional Institution",
  slug: "lebanon-correctional-institution",
  type: "state",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Warren County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Lebanon Correctional Institution: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Lebanon Correctional Institution in Lebanon OH. Phone, visitation and deposit options for this Ohio prison for men.",

  description:
    "Lebanon Correctional Institution communication guide. Phone, visitation and deposit options for families of inmates at this Ohio prison in Lebanon OH.",

  overview: [
    "Lebanon Correctional Institution is an Ohio Department of Rehabilitation and Correction prison in Lebanon, Ohio, in Warren County. It opened in 1960 and houses adult men, mostly at medium security, with some close and maximum security populations.",
    "Published sources do not confirm the current inmate communications vendor, so families should confirm the phone and video provider directly with the facility before creating any paid account.",
    "Visitation follows Ohio Department of Rehabilitation and Correction rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  website: "https://www.drc.ohio.gov/leci",
  established: 1960,
  operatedBy: "Ohio Department of Rehabilitation and Correction",
  // TODO(Jan): verify provider

  providers: [],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Ohio Department of Rehabilitation and Correction dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "Which company handles phone calls at Lebanon Correctional Institution?", answer: "The current vendor is not confirmed from official sources. Confirm the provider with the facility before creating a prepaid account." },
    { question: "How do I visit someone at Lebanon Correctional Institution?", answer: "Visitors must be approved by the Ohio Department of Rehabilitation and Correction. Bring valid photo ID and follow the dress code. Confirm visiting hours before traveling." },
    { question: "What security level is Lebanon Correctional Institution?", answer: "Lebanon houses adult men, mostly at medium security, with some close and maximum security populations. It opened in 1960." },
  ],

  relatedFacilitySlugs: ["fci-elkton", "fci-ray-brook", "fci-seagoville"],
},

"macon-state-prison": {
  id: "f-387",
  name: "Macon State Prison",
  slug: "macon-state-prison",
  type: "state",
  stateSlug: "georgia",
  stateName: "Georgia",
  stateAbbr: "GA",
  countySlug: null,
  countyName: "Macon County",
  securityLevel: "Close",
  hasDetailPage: true,
  seoTitle: "Macon State Prison: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Macon State Prison in Oglethorpe GA. Phone, visitation and deposit options for this close security Georgia prison.",

  description:
    "Macon State Prison communication guide. Phone, visitation and deposit options for families of inmates at this close security Georgia prison in Oglethorpe GA.",

  overview: [
    "Macon State Prison is a Georgia Department of Corrections prison in Oglethorpe, Georgia, in Macon County. It was constructed in 1993 and opened in 1994. It operates at close security, a very high security level, and houses inmates deemed to have the highest potential security risks. It is a Tier I and Tier II facility.",
    "Published sources do not confirm the current inmate communications vendor, so families should confirm the phone and video provider directly with the facility before creating any paid account.",
    "Visitation follows Georgia Department of Corrections rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  website: "https://gdc.georgia.gov/locations/macon-state-prison",
  inmateCapacity: 1762,
  established: 1994,
  operatedBy: "Georgia Department of Corrections",
  // TODO(Jan): verify provider

  providers: [],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Georgia Department of Corrections dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "Which company handles phone calls at Macon State Prison?", answer: "The current vendor is not confirmed from official sources. Confirm the provider with the facility before creating a prepaid account." },
    { question: "How do I visit someone at Macon State Prison?", answer: "Visitors must be approved by the Georgia Department of Corrections. Bring valid photo ID and follow the dress code. Confirm visiting hours before traveling." },
    { question: "What security level is Macon State Prison?", answer: "Macon State Prison operates at close security, a very high security level. It houses inmates deemed to have the highest potential security risks and is a Tier I and Tier II facility." },
  ],

  relatedFacilitySlugs: ["fci-atlanta", "fci-seagoville", "federal-detention-center-houston"],
},

"fci-elkton": {
  id: "f-388",
  name: "FCI Elkton",
  slug: "fci-elkton",
  type: "federal",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Columbiana County",
  securityLevel: "Low",
  hasDetailPage: true,
  seoTitle: "FCI Elkton: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at FCI Elkton in Ohio. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this low security federal prison.",

  description:
    "FCI Elkton communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of inmates at this low security federal prison in Elkton OH.",

  overview: [
    "FCI Elkton is a low security federal prison for men in Elkton, Ohio, operated by the Federal Bureau of Prisons. It opened in 1997 and is part of the Elkton Federal Correctional Complex, with an adjacent minimum security satellite camp.",
    "Electronic messaging at FCI Elkton runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "https://www.bop.gov/locations/institutions/elk/",
  established: 1997,
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at FCI Elkton?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at FCI Elkton?", answer: "The BOP does not offer general remote video visitation at most facilities, including FCI Elkton. Plan in-person visits instead." },
    { question: "How do phone calls work at FCI Elkton?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "What security level is FCI Elkton?", answer: "FCI Elkton is a low security federal prison for men, with an adjacent minimum security satellite camp." },
    { question: "How do I add money to an inmate's trust fund at FCI Elkton?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["fci-seagoville", "fci-ray-brook", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"fci-miami": {
  id: "f-389",
  name: "FCI Miami",
  slug: "fci-miami",
  type: "federal",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Miami-Dade County",
  securityLevel: "Low",
  hasDetailPage: true,
  seoTitle: "FCI Miami: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at FCI Miami in Florida. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this low security federal prison.",

  description:
    "FCI Miami communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of inmates at this low security federal prison in Miami FL.",

  overview: [
    "FCI Miami is a low security federal prison for men in Miami, Florida, operated by the Federal Bureau of Prisons. It was dedicated on March 26, 1976, and sits in southwest unincorporated Miami-Dade County, with an adjacent minimum security satellite camp.",
    "Electronic messaging at FCI Miami runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "https://www.bop.gov/locations/institutions/mim/",
  established: 1976,
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at FCI Miami?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at FCI Miami?", answer: "The BOP does not offer general remote video visitation at most facilities, including FCI Miami. Plan in-person visits instead." },
    { question: "How do phone calls work at FCI Miami?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "What security level is FCI Miami?", answer: "FCI Miami is a low security federal prison for men, with an adjacent minimum security satellite camp." },
    { question: "How do I add money to an inmate's trust fund at FCI Miami?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["federal-detention-center-miami", "fci-seagoville", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"fci-phoenix": {
  id: "f-390",
  name: "FCI Phoenix",
  slug: "fci-phoenix",
  type: "federal",
  stateSlug: "arizona",
  stateName: "Arizona",
  stateAbbr: "AZ",
  countySlug: null,
  countyName: "Maricopa County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "FCI Phoenix: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at FCI Phoenix in Arizona. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this medium security federal prison.",

  description:
    "FCI Phoenix communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of inmates at this medium security federal prison in Phoenix AZ.",

  overview: [
    "FCI Phoenix is a medium security federal prison for men in Phoenix, Arizona, operated by the Federal Bureau of Prisons. It opened in 1985, has a designated capacity of about 1,022, and includes an adjacent minimum security satellite camp plus a detention center component.",
    "Electronic messaging at FCI Phoenix runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "https://www.bop.gov/locations/institutions/phx/",
  inmateCapacity: 1022,
  established: 1985,
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at FCI Phoenix?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at FCI Phoenix?", answer: "The BOP does not offer general remote video visitation at most facilities, including FCI Phoenix. Plan in-person visits instead." },
    { question: "How do phone calls work at FCI Phoenix?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "What security level is FCI Phoenix?", answer: "FCI Phoenix is a medium security federal prison for men, with an adjacent minimum security satellite camp and a detention center component." },
    { question: "How do I add money to an inmate's trust fund at FCI Phoenix?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["usp-tucson", "fci-seagoville", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"fci-texarkana": {
  id: "f-391",
  name: "FCI Texarkana",
  slug: "fci-texarkana",
  type: "federal",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Bowie County",
  securityLevel: "Low",
  hasDetailPage: true,
  seoTitle: "FCI Texarkana: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at FCI Texarkana in Texas. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this low security federal prison.",

  description:
    "FCI Texarkana communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of inmates at this low security federal prison in Texarkana TX.",

  overview: [
    "FCI Texarkana is a low security federal prison for men in Texarkana, Texas, operated by the Federal Bureau of Prisons, with an adjacent minimum security satellite camp.",
    "Electronic messaging at FCI Texarkana runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "https://www.bop.gov/locations/institutions/tex/",
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at FCI Texarkana?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at FCI Texarkana?", answer: "The BOP does not offer general remote video visitation at most facilities, including FCI Texarkana. Plan in-person visits instead." },
    { question: "How do phone calls work at FCI Texarkana?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "What security level is FCI Texarkana?", answer: "FCI Texarkana is a low security federal prison for men, with an adjacent minimum security satellite camp." },
    { question: "How do I add money to an inmate's trust fund at FCI Texarkana?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["fci-seagoville", "federal-detention-center-houston", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"fci-atlanta": {
  id: "f-392",
  name: "FCI Atlanta",
  slug: "fci-atlanta",
  type: "federal",
  stateSlug: "georgia",
  stateName: "Georgia",
  stateAbbr: "GA",
  countySlug: null,
  countyName: "Fulton County",
  securityLevel: "Low",
  hasDetailPage: true,
  seoTitle: "FCI Atlanta: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at FCI Atlanta in Georgia. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this low security federal prison.",

  description:
    "FCI Atlanta communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of inmates at this low security federal prison in Atlanta GA.",

  overview: [
    "FCI Atlanta is a low security federal prison for men in Atlanta, Georgia, operated by the Federal Bureau of Prisons. It opened in January 1902 and was formerly a high security United States Penitentiary before being downgraded to low security and renamed FCI Atlanta in 2024. It includes a detention center for pretrial and holdover inmates plus a minimum security satellite camp.",
    "Electronic messaging at FCI Atlanta runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "https://www.bop.gov/locations/institutions/atl/",
  established: 1902,
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at FCI Atlanta?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Was FCI Atlanta formerly called USP Atlanta?", answer: "Yes. The facility was formerly a high security United States Penitentiary known as USP Atlanta. It was downgraded to low security and renamed FCI Atlanta in 2024. Many people still know it by the old name." },
    { question: "Can I video visit an inmate at FCI Atlanta?", answer: "The BOP does not offer general remote video visitation at most facilities, including FCI Atlanta. Plan in-person visits instead." },
    { question: "How do phone calls work at FCI Atlanta?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "How do I add money to an inmate's trust fund at FCI Atlanta?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["fci-seagoville", "fci-lewisburg", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"fci-lewisburg": {
  id: "f-393",
  name: "FCI Lewisburg",
  slug: "fci-lewisburg",
  type: "federal",
  stateSlug: "pennsylvania",
  stateName: "Pennsylvania",
  stateAbbr: "PA",
  countySlug: null,
  countyName: "Union County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "FCI Lewisburg: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at FCI Lewisburg in Pennsylvania. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this medium security federal prison.",

  description:
    "FCI Lewisburg communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of inmates at this medium security federal prison in Lewisburg PA.",

  overview: [
    "FCI Lewisburg is a medium security federal prison for men in Lewisburg, Pennsylvania, operated by the Federal Bureau of Prisons. It opened in 1932 as the Northeastern Penitentiary and was formerly a high security United States Penitentiary before being renamed FCI Lewisburg in 2024. It includes a minimum security satellite camp.",
    "Electronic messaging at FCI Lewisburg runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "https://www.bop.gov/locations/institutions/lew/",
  established: 1932,
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at FCI Lewisburg?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Was FCI Lewisburg formerly called USP Lewisburg?", answer: "Yes. The facility was formerly a high security United States Penitentiary known as USP Lewisburg. It was renamed FCI Lewisburg in 2024. Many people still know it by the old name." },
    { question: "Can I video visit an inmate at FCI Lewisburg?", answer: "The BOP does not offer general remote video visitation at most facilities, including FCI Lewisburg. Plan in-person visits instead." },
    { question: "How do phone calls work at FCI Lewisburg?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "How do I add money to an inmate's trust fund at FCI Lewisburg?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["fci-seagoville", "fci-atlanta", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"usp-tucson": {
  id: "f-394",
  name: "USP Tucson",
  slug: "usp-tucson",
  type: "federal",
  stateSlug: "arizona",
  stateName: "Arizona",
  stateAbbr: "AZ",
  countySlug: null,
  countyName: "Pima County",
  securityLevel: "High",
  hasDetailPage: true,
  seoTitle: "USP Tucson: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at USP Tucson in Arizona. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this high security federal prison.",

  description:
    "USP Tucson communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of inmates at this high security federal prison in Tucson AZ.",

  overview: [
    "USP Tucson is a high security federal prison for men in Tucson, Arizona, operated by the Federal Bureau of Prisons. It opened on February 5, 2007, and includes a minimum security satellite camp. It is a Sex Offender Management Program (SOMP) institution, which shapes its population and programming.",
    "Electronic messaging at USP Tucson runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "http://www.bop.gov/locations/institutions/tcp/",
  established: 2007,
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at USP Tucson?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at USP Tucson?", answer: "The BOP does not offer general remote video visitation at most facilities, including USP Tucson. Plan in-person visits instead." },
    { question: "How do phone calls work at USP Tucson?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "What is the Sex Offender Management Program at USP Tucson?", answer: "USP Tucson is a Sex Offender Management Program (SOMP) institution, which means it runs BOP sex offender treatment programming and houses a population shaped by that mission." },
    { question: "How do I add money to an inmate's trust fund at USP Tucson?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["fci-phoenix", "fci-seagoville", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"fdc-philadelphia": {
  id: "f-395",
  name: "FDC Philadelphia",
  slug: "fdc-philadelphia",
  type: "federal",
  stateSlug: "pennsylvania",
  stateName: "Pennsylvania",
  stateAbbr: "PA",
  countySlug: null,
  countyName: "Philadelphia County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "FDC Philadelphia: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at FDC Philadelphia in Pennsylvania. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this federal detention center.",

  description:
    "FDC Philadelphia communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of pretrial and holdover inmates at this federal detention center in Philadelphia PA.",

  overview: [
    "FDC Philadelphia is an administrative security federal detention center in Philadelphia, Pennsylvania, operated by the Federal Bureau of Prisons. It is a pretrial detention center housing male and female pretrial and holdover inmates, with 628 cells, in the Center City Historic District.",
    "Electronic messaging at FDC Philadelphia runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "http://www.bop.gov/locations/institutions/phl/index.jsp",
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at FDC Philadelphia?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at FDC Philadelphia?", answer: "The BOP does not offer general remote video visitation at most facilities, including FDC Philadelphia. Plan in-person visits instead." },
    { question: "How do phone calls work at FDC Philadelphia?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "What kind of inmates does FDC Philadelphia hold?", answer: "FDC Philadelphia is a pretrial detention center. It houses male and female pretrial and holdover inmates awaiting trial or transfer." },
    { question: "How do I add money to an inmate's trust fund at FDC Philadelphia?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["fci-lewisburg", "fci-seagoville", "mcc-chicago"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"mcc-chicago": {
  id: "f-396",
  name: "MCC Chicago",
  slug: "mcc-chicago",
  type: "federal",
  stateSlug: "illinois",
  stateName: "Illinois",
  stateAbbr: "IL",
  countySlug: null,
  countyName: "Cook County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "MCC Chicago: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at MCC Chicago in Illinois. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this federal detention center.",

  description:
    "MCC Chicago communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of pretrial and holdover inmates at this federal detention center in Chicago IL.",

  overview: [
    "MCC Chicago is an administrative security federal detention center in downtown Chicago, Illinois, operated by the Federal Bureau of Prisons. It is a pretrial detention center for male and female inmates awaiting trial or sentencing in the Northern District of Illinois.",
    "Electronic messaging at MCC Chicago runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "https://www.bop.gov/locations/institutions/ccc/",
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at MCC Chicago?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at MCC Chicago?", answer: "The BOP does not offer general remote video visitation at most facilities, including MCC Chicago. Plan in-person visits instead." },
    { question: "How do phone calls work at MCC Chicago?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "What kind of inmates does MCC Chicago hold?", answer: "MCC Chicago is a pretrial detention center. It holds male and female inmates awaiting trial or sentencing in the Northern District of Illinois." },
    { question: "How do I add money to an inmate's trust fund at MCC Chicago?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["fdc-philadelphia", "fci-seagoville", "mdc-los-angeles"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"mdc-los-angeles": {
  id: "f-397",
  name: "MDC Los Angeles",
  slug: "mdc-los-angeles",
  type: "federal",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Los Angeles County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "MDC Los Angeles: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at MDC Los Angeles in California. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this federal detention center.",

  description:
    "MDC Los Angeles communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of pretrial and holdover inmates at this federal detention center in Los Angeles CA.",

  overview: [
    "MDC Los Angeles is an administrative security federal detention center in downtown Los Angeles, California, operated by the Federal Bureau of Prisons. It opened in December 1988 and houses male and female pretrial and holdover inmates, with a population of about 1,000. It sits adjacent to the Roybal Federal Building and Courthouse.",
    "Electronic messaging at MDC Los Angeles runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through the BOP phone system funded through the inmate's trust account, and money for the trust fund can be sent through approved BOP deposit methods.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  website: "https://www.bop.gov/locations/institutions/los/",
  established: 1988,
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system, funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at MDC Los Angeles?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at MDC Los Angeles?", answer: "The BOP does not offer general remote video visitation at most facilities, including MDC Los Angeles. Plan in-person visits instead." },
    { question: "How do phone calls work at MDC Los Angeles?", answer: "Inmates make outgoing calls through the BOP phone system, funded through their trust account. You cannot call an inmate directly." },
    { question: "What kind of inmates does MDC Los Angeles hold?", answer: "MDC Los Angeles is a pretrial and holdover detention center. It houses male and female inmates awaiting trial, sentencing, or transfer." },
    { question: "How do I add money to an inmate's trust fund at MDC Los Angeles?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["mdc-brooklyn", "fci-seagoville", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},
}
