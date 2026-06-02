import type { StateProvider, StateFacility } from "./states"

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface CountyBasic {
  id: string
  name: string
  slug: string
  stateSlug: string
  stateName: string
  stateAbbr: string
  facilityCount: number
  hasDetailPage: boolean
}

export interface CountyDetail extends CountyBasic {
  description: string
  intro: string[]
  facilitiesByType: {
    federal: number
    state: number
    county: number
    private: number
  }
  providers: StateProvider[]
  featuredFacilities: StateFacility[]
}

// ─────────────────────────────────────────────
// ALL SEEDED COUNTIES — Directory listing
// ─────────────────────────────────────────────

export const ALL_COUNTIES: CountyBasic[] = [
  {
    id: "c-la",
    name: "Los Angeles County",
    slug: "los-angeles-county",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    facilityCount: 42,
    hasDetailPage: true,
  },
  {
    id: "c-harris",
    name: "Harris County",
    slug: "harris-county",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    facilityCount: 18,
    hasDetailPage: true,
  },
  {
    id: "c-miami-dade",
    name: "Miami-Dade County",
    slug: "miami-dade-county",
    stateSlug: "florida",
    stateName: "Florida",
    stateAbbr: "FL",
    facilityCount: 14,
    hasDetailPage: true,
  },
  {
    id: "c-kings",
    name: "Kings County",
    slug: "kings-county",
    stateSlug: "new-york",
    stateName: "New York",
    stateAbbr: "NY",
    facilityCount: 8,
    hasDetailPage: true,
  },
  {
    id: "c-san-diego",
    name: "San Diego County",
    slug: "san-diego-county",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    facilityCount: 16,
    hasDetailPage: true,
  },
  {
    id: "c-dallas",
    name: "Dallas County",
    slug: "dallas-county",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    facilityCount: 12,
    hasDetailPage: true,
  },
  {
    id: "c-broward",
    name: "Broward County",
    slug: "broward-county",
    stateSlug: "florida",
    stateName: "Florida",
    stateAbbr: "FL",
    facilityCount: 10,
    hasDetailPage: true,
  },
  {
    id: "c-orange-ca",
    name: "Orange County",
    slug: "orange-county-ca",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    facilityCount: 11,
    hasDetailPage: true,
  },
]

// ─────────────────────────────────────────────
// DETAILED COUNTY DATA — 8 seeded counties
// ─────────────────────────────────────────────

export const COUNTY_DETAILS: Record<string, CountyDetail> = {

  "los-angeles-county": {
    id: "c-la",
    name: "Los Angeles County",
    slug: "los-angeles-county",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    facilityCount: 42,
    hasDetailPage: true,

    description:
      "Find jail and prison communication options in Los Angeles County. Compare messaging, video, and phone providers for LA County correctional facilities.",

    intro: [
      "Los Angeles County operates one of the largest local jail systems in the United States, with a network of facilities managed by the Los Angeles County Sheriff's Department. The jail system includes Men's Central Jail, Twin Towers Correctional Facility, and the Pitchess Detention Center in Castaic, along with several smaller facilities and court lockups. On any given day, more than 16,000 people are held across these facilities, making communication access for families a significant daily challenge. The size and structure of the system means that different facilities may operate under different rules and use different communication platforms.",

      "The Los Angeles County Sheriff's Department contracts with GTL for video visitation and phone services at most county facilities, while JPay handles messaging and money transfer at state facilities within the county. Families trying to reach someone at Men's Central Jail or Twin Towers will use a different account system than those trying to contact someone at a state prison like California State Prison, Los Angeles County. Understanding which facility type is involved is the essential starting point, because using the wrong provider means delays and unnecessary setup time.",

      "This directory organizes communication options for Los Angeles County correctional facilities so families can quickly identify the right platform and what services are available. Whether you need to set up a GTL account for a county jail, arrange video visitation at Twin Towers, or understand the messaging process for a state facility within the county, this guide provides the information you need in one place, without having to navigate multiple agency websites or call facilities directly.",
    ],

    facilitiesByType: { federal: 3, state: 8, county: 28, private: 3 },

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Primary phone and video visitation provider for Los Angeles County Sheriff's Department jail facilities.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description:
          "Messaging, photo sharing, and money transfer for California state prison facilities located in LA County.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description:
          "Phone and communication services at select detention centers and private facilities in the county.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for federal correctional institutions in Los Angeles County.",
      },
    ],

    featuredFacilities: [
      {
        name: "Men's Central Jail",
        slug: "mens-central-jail-los-angeles",
        type: "County Jail",
        county: "Los Angeles County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Twin Towers Correctional Facility",
        slug: "twin-towers-correctional-facility",
        type: "County Jail",
        county: "Los Angeles County",
        features: ["Video Calls", "Phone Calls"],
      },
      {
        name: "California State Prison, Los Angeles County",
        slug: "california-state-prison-los-angeles-county",
        type: "State Prison",
        county: "Los Angeles County",
        features: ["Messaging", "Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "harris-county": {
    id: "c-harris",
    name: "Harris County",
    slug: "harris-county",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    facilityCount: 18,
    hasDetailPage: true,

    description:
      "Find jail and prison communication options in Harris County, Texas. Compare messaging, video, and phone providers for Harris County correctional facilities.",

    intro: [
      "Harris County is the most populous county in Texas and home to one of the largest county jail systems in the United States. The Harris County Jail, located in downtown Houston, holds tens of thousands of people on any given day across multiple buildings in the 1200 Baker Street complex. The county also contains several state and federal correctional facilities, each operating under different communication rules and using different provider platforms. For families in the Houston area, navigating these distinctions is a common source of confusion.",

      "Securus Technologies is the primary provider for phone and video services at the Harris County Jail, handling the large volume of calls and video visits processed daily at the downtown Houston facility. Families setting up an account through Securus can typically add funds and schedule video visits, though policies around in-person versus remote video visits have changed over time. State facilities within the county, if any loved one is housed there, may use JPay or GTL under separate contracts with the Texas Department of Criminal Justice. Federal facilities in the greater Houston area require CorrLinks accounts under Bureau of Prisons guidelines.",

      "Finding the right information quickly matters when someone is newly detained or transferred. This directory brings together facility and provider information for Harris County correctional facilities so families can identify the correct platform, understand what communication options exist, and move forward without the frustration of piecing together information from multiple sources. The guide covers county jails, state facilities, and federal institutions within Harris County so you can find what you need in one place.",
    ],

    facilitiesByType: { federal: 2, state: 4, county: 10, private: 2 },

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description:
          "Primary phone and video visitation provider for the Harris County Jail in downtown Houston.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description:
          "Messaging and money transfer for Texas Department of Criminal Justice state facilities in the county.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Phone and video communication at select state and private correctional facilities in Harris County.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for federal correctional institutions in the Houston area.",
      },
    ],

    featuredFacilities: [
      {
        name: "Harris County Jail",
        slug: "harris-county-jail",
        type: "County Jail",
        county: "Harris County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Harris County Jail — Baker Street Annex",
        slug: "harris-county-jail-baker-street-annex",
        type: "County Jail",
        county: "Harris County",
        features: ["Phone Calls", "Money Transfer"],
      },
      {
        name: "FDC Houston",
        slug: "fdc-houston",
        type: "Federal Prison",
        county: "Harris County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  "miami-dade-county": {
    id: "c-miami-dade",
    name: "Miami-Dade County",
    slug: "miami-dade-county",
    stateSlug: "florida",
    stateName: "Florida",
    stateAbbr: "FL",
    facilityCount: 14,
    hasDetailPage: true,

    description:
      "Find jail and prison communication options in Miami-Dade County, Florida. Compare messaging, video, and phone providers for Miami-Dade correctional facilities.",

    intro: [
      "Miami-Dade County operates a major detention system through the Miami-Dade Corrections and Rehabilitation Department, which manages several facilities across the county. The Turner Guilford Knight Correctional Center and the Pre-Trial Detention Center are among the primary holding facilities, supplemented by the Pretrial Detention Center and several work release and transitional centers. The system serves one of the most diverse populations in the country, and communication access for families — many of whom are navigating the process in multiple languages — is a consistent challenge.",

      "The Miami-Dade county jail system has contracts with GTL for phone and video services, providing families with access to remote video visitation in addition to traditional phone calls. Accounts are managed separately from any state or federal facilities in the area, so a family with a loved one at the Turner Guilford Knight facility will need a GTL account rather than a JPay or Securus account. Florida Department of Corrections state facilities, while not directly county-operated, may be located within the county and use JPay as their primary messaging and money transfer platform. The Federal Detention Center Miami handles federal pretrial and sentenced inmates and uses CorrLinks for electronic messaging.",

      "This guide brings communication information for Miami-Dade County correctional facilities together in one place. Whether you are trying to contact someone at a county jail, a state facility, or a federal detention center, this directory helps you identify the right provider, understand what services are available, and start the setup process without having to search through multiple agencies or call facilities directly for basic information.",
    ],

    facilitiesByType: { federal: 2, state: 3, county: 8, private: 1 },

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Phone calls and video visitation for Miami-Dade county jail facilities including Turner Guilford Knight.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description:
          "Messaging, photo sharing, and money transfer for Florida Department of Corrections state facilities in Miami-Dade.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description:
          "Phone and communication services at select Miami-Dade detention and private correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for the Federal Detention Center Miami.",
      },
    ],

    featuredFacilities: [
      {
        name: "Turner Guilford Knight Correctional Center",
        slug: "turner-guilford-knight-correctional-center",
        type: "County Jail",
        county: "Miami-Dade County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Pre-Trial Detention Center Miami",
        slug: "pre-trial-detention-center-miami",
        type: "County Jail",
        county: "Miami-Dade County",
        features: ["Phone Calls", "Money Transfer"],
      },
      {
        name: "Federal Detention Center Miami",
        slug: "federal-detention-center-miami",
        type: "Federal Prison",
        county: "Miami-Dade County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  "kings-county": {
    id: "c-kings",
    name: "Kings County",
    slug: "kings-county",
    stateSlug: "new-york",
    stateName: "New York",
    stateAbbr: "NY",
    facilityCount: 8,
    hasDetailPage: true,

    description:
      "Find jail and prison communication options in Kings County (Brooklyn), New York. Compare messaging, video, and phone providers for Brooklyn correctional facilities.",

    intro: [
      "Kings County — the borough of Brooklyn — is part of the New York City jail and correctional system rather than operating its own separate county jail. People detained in Brooklyn are typically held at Rikers Island, which is the main New York City jail complex, or at the Brooklyn Detention Complex on Atlantic Avenue. The Metropolitan Detention Center Brooklyn is a federal facility that holds pretrial and sentenced inmates under Bureau of Prisons jurisdiction. Each of these facilities operates under a different system with different providers and different communication rules, which makes it essential to know exactly which facility is involved before setting up an account.",

      "New York City jails, including those housing people from Brooklyn, have historically used GTL for phone services and video visitation. The NYC Department of Correction manages the overall system, and communication access operates under city-level contracts rather than individual facility contracts. People held at Rikers Island or the Brooklyn Detention Complex are part of the NYC DOC system. The Metropolitan Detention Center Brooklyn, by contrast, is entirely separate — it is a federal facility where inmates communicate through CorrLinks under Bureau of Prisons guidelines, and phone calls are handled through different federal contracted providers.",

      "This directory provides communication information for Kings County and Brooklyn-area correctional facilities so families can navigate the right system without unnecessary confusion. Whether you are trying to reach someone at Rikers Island through the NYC DOC system, set up messaging at the Brooklyn Detention Complex, or contact a loved one at the federal facility on 29th Street, this guide helps you identify the correct provider and process without having to search through multiple agency websites.",
    ],

    facilitiesByType: { federal: 1, state: 1, county: 5, private: 1 },

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Phone and video services for New York City Department of Correction facilities including Brooklyn Detention Complex.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description:
          "Messaging and money transfer for New York State DOCCS facilities in and around Kings County.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description:
          "Phone and communication services at select state and private correctional facilities serving Kings County.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for the Metropolitan Detention Center Brooklyn.",
      },
    ],

    featuredFacilities: [
      {
        name: "Brooklyn Detention Complex",
        slug: "brooklyn-detention-complex",
        type: "County Jail",
        county: "Kings County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Metropolitan Detention Center Brooklyn",
        slug: "metropolitan-detention-center-brooklyn",
        type: "Federal Prison",
        county: "Kings County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
      {
        name: "Rikers Island — AMKC",
        slug: "rikers-island-amkc",
        type: "County Jail",
        county: "New York City",
        features: ["Video Calls", "Phone Calls"],
      },
    ],
  },

  "san-diego-county": {
    id: "c-san-diego",
    name: "San Diego County",
    slug: "san-diego-county",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    facilityCount: 16,
    hasDetailPage: true,

    description:
      "Find jail and prison communication options in San Diego County. Compare messaging, video, and phone providers for San Diego County correctional facilities.",

    intro: [
      "San Diego County operates a network of detention facilities managed by the San Diego County Sheriff's Department, including the Central Jail in downtown San Diego, the Las Colinas Women's Detention and Reentry Facility in Santee, the East Mesa Reentry Facility, and the George Bailey Detention Facility in Otay Mesa. The county also contains several state correctional facilities and is near the US-Mexico border, which means federal immigration detention is also part of the local correctional landscape. Each type of facility operates under distinct communication rules.",

      "Securus Technologies provides phone and video services for the San Diego County Sheriff's Department jail facilities. Families setting up accounts through Securus can make deposits and schedule remote video visits at county facilities. California state facilities within San Diego County — including the R.J. Donovan Correctional Facility — operate under California Department of Corrections and Rehabilitation contracts and primarily use JPay for messaging, photo sharing, and money transfer. Federal facilities in the county or nearby, including those managed by the Bureau of Prisons or ICE, use separate systems that are not compatible with county or state accounts.",

      "This guide brings together facility and provider information for San Diego County correctional facilities so families can quickly identify what they need. Whether you are setting up a Securus account for a county jail, arranging a JPay account for a state prison, or trying to understand communication options at a federal or immigration detention facility, this directory helps you find the right path forward without unnecessary delays.",
    ],

    facilitiesByType: { federal: 2, state: 5, county: 7, private: 2 },

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description:
          "Primary phone and video visitation provider for San Diego County Sheriff's Department detention facilities.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description:
          "Messaging, photo sharing, and money transfer for California state prison facilities in San Diego County.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Phone and video services at select correctional and reentry facilities in the San Diego area.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for federal correctional institutions near San Diego.",
      },
    ],

    featuredFacilities: [
      {
        name: "San Diego Central Jail",
        slug: "san-diego-central-jail",
        type: "County Jail",
        county: "San Diego County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Las Colinas Women's Detention Facility",
        slug: "las-colinas-womens-detention-facility",
        type: "County Jail",
        county: "San Diego County",
        features: ["Video Calls", "Phone Calls"],
      },
      {
        name: "R.J. Donovan Correctional Facility",
        slug: "rj-donovan-correctional-facility",
        type: "State Prison",
        county: "San Diego County",
        features: ["Messaging", "Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "dallas-county": {
    id: "c-dallas",
    name: "Dallas County",
    slug: "dallas-county",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    facilityCount: 12,
    hasDetailPage: true,

    description:
      "Find jail and prison communication options in Dallas County, Texas. Compare messaging, video, and phone providers for Dallas County correctional facilities.",

    intro: [
      "Dallas County operates a large detention system centered around the Dallas County Jail, known as the Lew Sterrett Justice Center. The facility sits adjacent to the Frank Crowley Courts Building in downtown Dallas and holds thousands of people on any given day. The Dallas County Sheriff's Department manages the jail system, which also includes the Suzanne Lee Kays Detention Facility and several work release and alternative detention programs. In addition to county facilities, Dallas County is home to state and federal correctional institutions, each governed by separate rules and provider contracts.",

      "Securus Technologies is the primary communication provider for the Dallas County Jail system, handling phone calls and video visitation for the Lew Sterrett facility and associated detention centers. Families who need to contact someone at the county jail will need a Securus account to add phone funds or schedule video visits. Texas Department of Criminal Justice state facilities in the Dallas area use different provider arrangements — JPay and GTL are common at TDCJ state prisons — and those accounts are not interchangeable with county jail accounts. Federal facilities in the county operate under Bureau of Prisons contracts using CorrLinks for messaging.",

      "This guide organizes Dallas County correctional facility and provider information in one place. Whether you need to set up a Securus account for someone at the Lew Sterrett Justice Center, find the right provider for a state facility in the Dallas area, or locate a federal correctional institution in the county, this directory helps you identify the correct platform and get started without unnecessary delays.",
    ],

    facilitiesByType: { federal: 1, state: 3, county: 7, private: 1 },

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description:
          "Primary phone and video provider for the Dallas County Jail (Lew Sterrett Justice Center).",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description:
          "Messaging and money transfer for Texas Department of Criminal Justice state facilities in Dallas County.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Phone and video calling services at select state and private facilities in the Dallas area.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for federal correctional institutions in Dallas County.",
      },
    ],

    featuredFacilities: [
      {
        name: "Lew Sterrett Justice Center",
        slug: "lew-sterrett-justice-center",
        type: "County Jail",
        county: "Dallas County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Suzanne Lee Kays Detention Facility",
        slug: "suzanne-lee-kays-detention-facility",
        type: "County Jail",
        county: "Dallas County",
        features: ["Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Seagoville",
        slug: "fci-seagoville",
        type: "Federal Prison",
        county: "Dallas County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  "broward-county": {
    id: "c-broward",
    name: "Broward County",
    slug: "broward-county",
    stateSlug: "florida",
    stateName: "Florida",
    stateAbbr: "FL",
    facilityCount: 10,
    hasDetailPage: true,

    description:
      "Find jail and prison communication options in Broward County, Florida. Compare messaging, video, and phone providers for Broward County correctional facilities.",

    intro: [
      "Broward County is Florida's second most populous county and operates a significant detention and corrections system through the Broward Sheriff's Office. The main detention facility is the Broward County Jail located in downtown Fort Lauderdale, supplemented by the Joseph V. Conte Facility in Pompano Beach and the North Broward Bureau. Broward also contains Florida Department of Corrections state facilities and is near federal institutions in the South Florida region. The communication setup for each facility type is handled through separate provider contracts.",

      "The Broward Sheriff's Office contracts with Securus Technologies for phone and video services at county detention facilities. Families trying to reach someone at the Broward County Jail or the Conte Facility will use Securus for both phone accounts and video visitation scheduling. State facilities within Broward operated by the Florida Department of Corrections — such as South Florida Reception Center — use JPay as the primary platform for messaging, money transfer, and photo sharing. Federal facilities in the region follow Bureau of Prisons guidelines and require CorrLinks accounts for electronic messaging, which is a completely separate system from either county or state providers.",

      "For families in Broward County, this directory provides a straightforward guide to the communication options available at each type of facility. Whether you need to add funds to a Securus account for a county jail, set up JPay for a state prison, or understand how to contact someone at a federal institution in the region, this guide organizes the relevant information so you can find answers quickly and move forward without unnecessary frustration.",
    ],

    facilitiesByType: { federal: 1, state: 3, county: 5, private: 1 },

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description:
          "Primary phone and video visitation provider for Broward Sheriff's Office detention facilities.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description:
          "Messaging, photos, and money transfer for Florida Department of Corrections state facilities in Broward County.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Phone and video services at select Broward County correctional and work release facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for federal institutions serving the South Florida region.",
      },
    ],

    featuredFacilities: [
      {
        name: "Broward County Jail",
        slug: "broward-county-jail",
        type: "County Jail",
        county: "Broward County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Joseph V. Conte Facility",
        slug: "joseph-v-conte-facility",
        type: "County Jail",
        county: "Broward County",
        features: ["Phone Calls", "Money Transfer"],
      },
      {
        name: "South Florida Reception Center",
        slug: "south-florida-reception-center",
        type: "State Prison",
        county: "Broward County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "orange-county-ca": {
    id: "c-orange-ca",
    name: "Orange County",
    slug: "orange-county-ca",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    facilityCount: 11,
    hasDetailPage: true,

    description:
      "Find jail and prison communication options in Orange County, California. Compare messaging, video, and phone providers for Orange County correctional facilities.",

    intro: [
      "Orange County operates a detention system managed by the Orange County Sheriff's Department, which runs the Intake Release Center in Santa Ana, the Theo Lacy Facility in Orange, the James A. Musick Facility in Irvine, and the Central Men's Jail. Together these facilities hold thousands of people under pretrial detention and short-term sentences. In addition to county jails, Orange County is home to California state prison facilities and is close to federal correctional institutions in the region. Each facility type has its own communication provider and account requirements.",

      "The Orange County Sheriff's Department uses Securus Technologies for phone and video services at county jail facilities. Families with a loved one at any of the OCSD detention facilities will need to set up a Securus account to add phone credits or arrange video visitation. California state prison facilities in or near Orange County — such as those under the California Department of Corrections and Rehabilitation — typically use GTL or JPay for messaging and money transfer under separate CDCR contracts. These accounts are distinct from county jail accounts, and funds deposited in one system cannot be used in another.",

      "This directory provides a clear overview of communication options for Orange County correctional facilities. Whether you need to set up a Securus account for the Theo Lacy Facility, navigate JPay or GTL for a California state facility in the region, or understand the process for a federal institution nearby, this guide helps you identify the right provider and get started efficiently, without the confusion of working through multiple disconnected agency systems.",
    ],

    facilitiesByType: { federal: 1, state: 3, county: 6, private: 1 },

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description:
          "Primary phone and video provider for Orange County Sheriff's Department jail facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Phone and video services at California state prison facilities in and around Orange County.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description:
          "Messaging, photo sharing, and money transfer for select California state facilities in Orange County.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for federal correctional institutions near Orange County.",
      },
    ],

    featuredFacilities: [
      {
        name: "Theo Lacy Facility",
        slug: "theo-lacy-facility",
        type: "County Jail",
        county: "Orange County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "James A. Musick Facility",
        slug: "james-a-musick-facility",
        type: "County Jail",
        county: "Orange County",
        features: ["Phone Calls", "Money Transfer"],
      },
      {
        name: "California Institution for Men",
        slug: "california-institution-for-men",
        type: "State Prison",
        county: "San Bernardino County",
        features: ["Messaging", "Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },
}
