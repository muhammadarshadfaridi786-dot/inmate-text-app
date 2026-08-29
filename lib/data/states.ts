// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export type Region = "Northeast" | "Southeast" | "Midwest" | "Southwest" | "West"

export interface StateBasic {
  id: string
  name: string
  slug: string
  abbreviation: string
  facilityCount: number
  region: Region
  hasDetailPage: boolean
}

export interface StateProvider {
  name: string
  slug: string
  initial: string
  color: string
  description: string
}

export interface StateFacility {
  name: string
  slug: string
  type: string
  county: string
  features: string[]
}

export interface StateDetail extends StateBasic {
  intro: string[]      // Array of paragraphs for the intro section
  description: string  // Single-line for metadata
  facilitiesByType: {
    federal: number
    state: number
    county: number
    private: number
  }
  counties: string[]
  providers: StateProvider[]
  featuredFacilities: StateFacility[]
  faq?: { question: string; answer: string }[]
}

// ─────────────────────────────────────────────
// ALL 50 US STATES — Basic data for directory
// ─────────────────────────────────────────────

export const ALL_STATES: StateBasic[] = [
  { id: "s-al", name: "Alabama",        slug: "alabama",        abbreviation: "AL", facilityCount: 198, region: "Southeast", hasDetailPage: true  },
  { id: "s-ak", name: "Alaska",         slug: "alaska",         abbreviation: "AK", facilityCount: 32,  region: "West",      hasDetailPage: true  },
  { id: "s-az", name: "Arizona",        slug: "arizona",        abbreviation: "AZ", facilityCount: 195, region: "Southwest", hasDetailPage: true  },
  { id: "s-ar", name: "Arkansas",       slug: "arkansas",       abbreviation: "AR", facilityCount: 128, region: "Southeast", hasDetailPage: true  },
  { id: "s-ca", name: "California",     slug: "california",     abbreviation: "CA", facilityCount: 350, region: "West",      hasDetailPage: true  },
  { id: "s-co", name: "Colorado",       slug: "colorado",       abbreviation: "CO", facilityCount: 118, region: "Southwest", hasDetailPage: true  },
  { id: "s-ct", name: "Connecticut",    slug: "connecticut",    abbreviation: "CT", facilityCount: 78,  region: "Northeast", hasDetailPage: true  },
  { id: "s-de", name: "Delaware",       slug: "delaware",       abbreviation: "DE", facilityCount: 28,  region: "Northeast", hasDetailPage: true  },
  { id: "s-fl", name: "Florida",        slug: "florida",        abbreviation: "FL", facilityCount: 302, region: "Southeast", hasDetailPage: true  },
  { id: "s-ga", name: "Georgia",        slug: "georgia",        abbreviation: "GA", facilityCount: 228, region: "Southeast", hasDetailPage: true  },
  { id: "s-hi", name: "Hawaii",         slug: "hawaii",         abbreviation: "HI", facilityCount: 22,  region: "West",      hasDetailPage: true  },
  { id: "s-id", name: "Idaho",          slug: "idaho",          abbreviation: "ID", facilityCount: 68,  region: "West",      hasDetailPage: true  },
  { id: "s-il", name: "Illinois",       slug: "illinois",       abbreviation: "IL", facilityCount: 205, region: "Midwest",   hasDetailPage: true  },
  { id: "s-in", name: "Indiana",        slug: "indiana",        abbreviation: "IN", facilityCount: 168, region: "Midwest",   hasDetailPage: true  },
  { id: "s-ia", name: "Iowa",           slug: "iowa",           abbreviation: "IA", facilityCount: 98,  region: "Midwest",   hasDetailPage: true  },
  { id: "s-ks", name: "Kansas",         slug: "kansas",         abbreviation: "KS", facilityCount: 108, region: "Midwest",   hasDetailPage: true  },
  { id: "s-ky", name: "Kentucky",       slug: "kentucky",       abbreviation: "KY", facilityCount: 152, region: "Southeast", hasDetailPage: true  },
  { id: "s-la", name: "Louisiana",      slug: "louisiana",      abbreviation: "LA", facilityCount: 218, region: "Southeast", hasDetailPage: true  },
  { id: "s-me", name: "Maine",          slug: "maine",          abbreviation: "ME", facilityCount: 38,  region: "Northeast", hasDetailPage: true  },
  { id: "s-md", name: "Maryland",       slug: "maryland",       abbreviation: "MD", facilityCount: 88,  region: "Northeast", hasDetailPage: true  },
  { id: "s-ma", name: "Massachusetts",  slug: "massachusetts",  abbreviation: "MA", facilityCount: 82,  region: "Northeast", hasDetailPage: true  },
  { id: "s-mi", name: "Michigan",       slug: "michigan",       abbreviation: "MI", facilityCount: 198, region: "Midwest",   hasDetailPage: true  },
  { id: "s-mn", name: "Minnesota",      slug: "minnesota",      abbreviation: "MN", facilityCount: 102, region: "Midwest",   hasDetailPage: true  },
  { id: "s-ms", name: "Mississippi",    slug: "mississippi",    abbreviation: "MS", facilityCount: 128, region: "Southeast", hasDetailPage: true  },
  { id: "s-mo", name: "Missouri",       slug: "missouri",       abbreviation: "MO", facilityCount: 178, region: "Midwest",   hasDetailPage: true  },
  { id: "s-mt", name: "Montana",        slug: "montana",        abbreviation: "MT", facilityCount: 42,  region: "West",      hasDetailPage: true  },
  { id: "s-ne", name: "Nebraska",       slug: "nebraska",       abbreviation: "NE", facilityCount: 78,  region: "Midwest",   hasDetailPage: true  },
  { id: "s-nv", name: "Nevada",         slug: "nevada",         abbreviation: "NV", facilityCount: 68,  region: "West",      hasDetailPage: true  },
  { id: "s-nh", name: "New Hampshire",  slug: "new-hampshire",  abbreviation: "NH", facilityCount: 28,  region: "Northeast", hasDetailPage: true  },
  { id: "s-nj", name: "New Jersey",     slug: "new-jersey",     abbreviation: "NJ", facilityCount: 118, region: "Northeast", hasDetailPage: true  },
  { id: "s-nm", name: "New Mexico",     slug: "new-mexico",     abbreviation: "NM", facilityCount: 78,  region: "Southwest", hasDetailPage: true  },
  { id: "s-ny", name: "New York",       slug: "new-york",       abbreviation: "NY", facilityCount: 205, region: "Northeast", hasDetailPage: true  },
  { id: "s-nc", name: "North Carolina", slug: "north-carolina", abbreviation: "NC", facilityCount: 198, region: "Southeast", hasDetailPage: true  },
  { id: "s-nd", name: "North Dakota",   slug: "north-dakota",   abbreviation: "ND", facilityCount: 32,  region: "Midwest",   hasDetailPage: true  },
  { id: "s-oh", name: "Ohio",           slug: "ohio",           abbreviation: "OH", facilityCount: 218, region: "Midwest",   hasDetailPage: true  },
  { id: "s-ok", name: "Oklahoma",       slug: "oklahoma",       abbreviation: "OK", facilityCount: 178, region: "Southeast", hasDetailPage: true  },
  { id: "s-or", name: "Oregon",         slug: "oregon",         abbreviation: "OR", facilityCount: 78,  region: "West",      hasDetailPage: true  },
  { id: "s-pa", name: "Pennsylvania",   slug: "pennsylvania",   abbreviation: "PA", facilityCount: 182, region: "Northeast", hasDetailPage: true  },
  { id: "s-ri", name: "Rhode Island",   slug: "rhode-island",   abbreviation: "RI", facilityCount: 28,  region: "Northeast", hasDetailPage: true  },
  { id: "s-sc", name: "South Carolina", slug: "south-carolina", abbreviation: "SC", facilityCount: 148, region: "Southeast", hasDetailPage: true  },
  { id: "s-sd", name: "South Dakota",   slug: "south-dakota",   abbreviation: "SD", facilityCount: 42,  region: "Midwest",   hasDetailPage: true  },
  { id: "s-tn", name: "Tennessee",      slug: "tennessee",      abbreviation: "TN", facilityCount: 168, region: "Southeast", hasDetailPage: true  },
  { id: "s-tx", name: "Texas",          slug: "texas",          abbreviation: "TX", facilityCount: 502, region: "Southwest", hasDetailPage: true  },
  { id: "s-ut", name: "Utah",           slug: "utah",           abbreviation: "UT", facilityCount: 68,  region: "Southwest", hasDetailPage: true  },
  { id: "s-vt", name: "Vermont",        slug: "vermont",        abbreviation: "VT", facilityCount: 22,  region: "Northeast", hasDetailPage: true  },
  { id: "s-va", name: "Virginia",       slug: "virginia",       abbreviation: "VA", facilityCount: 158, region: "Southeast", hasDetailPage: true  },
  { id: "s-wa", name: "Washington",     slug: "washington",     abbreviation: "WA", facilityCount: 102, region: "West",      hasDetailPage: true  },
  { id: "s-wv", name: "West Virginia",  slug: "west-virginia",  abbreviation: "WV", facilityCount: 68,  region: "Southeast", hasDetailPage: true  },
  { id: "s-wi", name: "Wisconsin",      slug: "wisconsin",      abbreviation: "WI", facilityCount: 128, region: "Midwest",   hasDetailPage: true  },
  { id: "s-wy", name: "Wyoming",        slug: "wyoming",        abbreviation: "WY", facilityCount: 28,  region: "West",      hasDetailPage: true  },
]

// ─────────────────────────────────────────────
// DETAILED STATE DATA — 4 seeded states
// ─────────────────────────────────────────────

export const STATE_DETAILS: Record<string, StateDetail> = {

  california: {
    id: "s-ca",
    name: "California",
    slug: "california",
    abbreviation: "CA",
    facilityCount: 350,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in California. Compare messaging, video, and phone providers for correctional facilities across California.",

    intro: [
      "California operates one of the most complex correctional systems in the country, encompassing state prisons managed by the California Department of Corrections and Rehabilitation, federal Bureau of Prisons institutions, and hundreds of county jails and detention centers scattered across its 58 counties. The scale of the system, combined with California's geographic diversity from the Pacific coast to the Central Valley, means that communication options vary significantly from one facility to the next. Some institutions offer robust digital communication services while others operate under tighter restrictions, and the available options depend heavily on which provider has been contracted for that specific location.",

      "For families trying to stay connected, navigating these differences is one of the most frustrating parts of the experience. JPay is the most widely used platform for messaging and money transfer across California state prisons, while GTL and Securus Technologies handle phone and video services at many institutions. At the county level, providers like ConnectNetwork and others serve different jails with separate account requirements and pricing structures. A family member with a loved one at a Los Angeles County facility may use a completely different platform than someone trying to reach a person held in Fresno or Kern County.",

      "This directory is designed to make that process straightforward. Instead of searching through provider websites, calling facilities directly, or piecing together information from outdated correctional portals, you can find communication options for specific California facilities in one organized place. Whether you need to set up messaging at a state prison, arrange a video visit at a county jail, or understand the rules for sending photos, this guide brings the essential information together so families can focus on staying connected rather than navigating an unnecessarily complicated system.",
    ],

    facilitiesByType: { federal: 35, state: 35, county: 248, private: 32 },

    counties: [
      "Los Angeles County", "San Diego County", "Orange County", "Riverside County",
      "San Bernardino County", "Sacramento County", "Alameda County", "Santa Clara County",
      "Contra Costa County", "Fresno County", "Kern County", "San Joaquin County",
      "Ventura County", "San Francisco County", "Stanislaus County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Primary messaging, photo sharing, and money transfer provider for California state facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone calls and video visitation at many California state and county correctional facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video services at select California county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Federal Bureau of Prisons email system for California federal correctional institutions.",
      },
    ],

    featuredFacilities: [
      {
        name: "San Quentin State Prison",
        slug: "san-quentin-state-prison",
        type: "State Prison",
        county: "Marin County",
        features: ["Messaging", "Video Calls", "Photo Sharing"],
      },
      {
        name: "Pelican Bay State Prison",
        slug: "pelican-bay-state-prison",
        type: "State Prison",
        county: "Del Norte County",
        features: ["Messaging", "Phone Calls"],
      },
      {
        name: "Folsom State Prison",
        slug: "folsom-state-prison",
        type: "State Prison",
        county: "Sacramento County",
        features: ["Messaging", "Video Calls", "Money Transfer"],
      },
    ],
  },

  texas: {
    id: "s-tx",
    name: "Texas",
    slug: "texas",
    abbreviation: "TX",
    facilityCount: 502,
    region: "Southwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Texas. Compare messaging, video, and phone providers for correctional facilities across Texas.",

    intro: [
      "Texas runs one of the largest correctional systems in the United States, with the Texas Department of Criminal Justice overseeing more than a hundred prison units spread across the state. In addition to TDCJ state facilities, Texas has a substantial federal Bureau of Prisons presence and hundreds of county jails operating across its 254 counties. The sheer size of the state means that the communication setup for a facility in Houston can be entirely different from one in San Antonio, El Paso, or the Rio Grande Valley. Provider availability, messaging rules, and video visitation options are not consistent statewide.",

      "Several providers serve Texas correctional institutions, and knowing which one is right for your situation depends on the specific facility. JPay and GTL are among the most common platforms for Texas Department of Criminal Justice state prisons, supporting messaging, phone calls, and in some cases video visits. County jails across the state often use ICSolutions or Securus, with separate account systems and rate structures from state facilities. For families with a loved one in a federal institution such as those in the Beaumont or Houston areas, CorrLinks is the required platform under Bureau of Prisons guidelines. Setting up an account with the wrong provider is a frustratingly common mistake that this guide helps you avoid.",

      "Finding accurate, current provider information for Texas facilities has historically required significant effort. Correctional websites are often outdated, provider coverage maps are incomplete, and calling a facility directly does not always yield a clear answer. This directory aggregates facility and provider data for Texas correctional institutions so families can quickly identify the right platform, understand what communication options are available, and begin the process of staying connected without unnecessary delays.",
    ],

    facilitiesByType: { federal: 40, state: 108, county: 322, private: 32 },

    counties: [
      "Harris County", "Dallas County", "Tarrant County", "Bexar County",
      "Travis County", "Collin County", "Hidalgo County", "El Paso County",
      "Denton County", "Fort Bend County", "Montgomery County", "Williamson County",
      "Cameron County", "Nueces County", "Lubbock County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for many Texas Department of Criminal Justice facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone calls and video visitation services across Texas state and county correctional facilities.",
      },
      {
        name: "ICSolutions",
        slug: "icsolutions",
        initial: "I",
        color: "bg-teal-600",
        description: "Inmate calling and communication services at county jails throughout Texas.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities located in Texas.",
      },
    ],

    featuredFacilities: [
      {
        name: "Harris County Jail",
        slug: "harris-county-jail",
        type: "County Jail",
        county: "Harris County",
        features: ["Messaging", "Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  florida: {
    id: "s-fl",
    name: "Florida",
    slug: "florida",
    abbreviation: "FL",
    facilityCount: 302,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Florida. Compare messaging, video, and phone providers for correctional facilities across Florida.",

    intro: [
      "Florida's correctional landscape encompasses state prisons operated by the Florida Department of Corrections, a significant federal Bureau of Prisons presence, and county detention centers run by individual sheriff's offices across its 67 counties. The state's geography and large population mean that communication arrangements at different facilities vary considerably. Urban county jails in Miami-Dade and Broward operate under different systems from rural state prisons in Bradford or Union counties, and families often discover that the provider they know from one context does not serve the facility they need.",

      "JPay is the most widely used communication platform for Florida Department of Corrections state facilities, providing a single account for messaging, photo sharing, and money transfer. Phone services are handled by Securus Technologies and ICSolutions at various institutions throughout the state. Florida also has a notable federal correctional presence — the Federal Correctional Complex Coleman in Sumter County is one of the largest federal correctional campuses in the country, where inmates communicate through CorrLinks under Bureau of Prisons guidelines. County facilities each have their own arrangements, and it is not uncommon for multiple facilities in the same metropolitan area to use entirely different provider platforms.",

      "For families navigating this, finding reliable and current information can feel like a full-time job. Provider websites are often incomplete, facility information is scattered, and the rules around communication vary by institution type. This guide organizes Florida facility and provider data in one place so you can identify the right platform for your specific situation, understand exactly what services are available, and move forward without having to sort through multiple government websites or make repeated calls to find basic answers.",
    ],

    facilitiesByType: { federal: 25, state: 62, county: 200, private: 15 },

    counties: [
      "Miami-Dade County", "Broward County", "Palm Beach County", "Hillsborough County",
      "Orange County", "Pinellas County", "Duval County", "Lee County",
      "Polk County", "Brevard County", "Volusia County", "Sarasota County",
      "Pasco County", "Seminole County", "Collier County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photos, and money transfer for Florida Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling services at select Florida state and county correctional facilities.",
      },
      {
        name: "ICSolutions",
        slug: "icsolutions",
        initial: "I",
        color: "bg-teal-600",
        description: "Inmate calling and communication services at county jails and detention centers in Florida.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for Bureau of Prisons federal facilities in Florida, including FCC Coleman.",
      },
    ],

    featuredFacilities: [
      {
        name: "Federal Correctional Complex Coleman",
        slug: "federal-correctional-complex-coleman",
        type: "Federal Prison",
        county: "Sumter County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
      {
        name: "Miami-Dade Corrections Facility",
        slug: "miami-dade-corrections-facility",
        type: "County Jail",
        county: "Miami-Dade County",
        features: ["Messaging", "Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "new-york": {
    id: "s-ny",
    name: "New York",
    slug: "new-york",
    abbreviation: "NY",
    facilityCount: 205,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in New York. Compare messaging, video, and phone providers for correctional facilities across New York.",

    intro: [
      "New York's correctional system reflects the complexity of the state itself. The New York State Department of Corrections and Community Supervision oversees dozens of prisons ranging from maximum-security facilities in upstate counties like Attica and Green Haven to medium and minimum-security institutions distributed across the state. Separately, the New York City Department of Correction runs one of the largest local jail systems in the country, centered at Rikers Island and supplemented by borough detention centers serving the city's five counties. These are distinct systems with different rules, different providers, and different processes for family communication.",

      "Understanding which system applies to a specific loved one is the critical first step. New York State DOCCS facilities use JPay for messaging and money transfer, while phone services vary by institution. New York City jails operate under separate contracts and may use different platforms than state facilities entirely. Federal institutions in New York, including facilities in Manhattan and Brooklyn, require CorrLinks accounts for electronic messaging under Bureau of Prisons rules. Creating an account with JPay will not help you reach someone in a federal facility, and a CorrLinks account is of no use for a city jail. Getting this right before spending time on account setup is what this directory is designed to help with.",

      "This guide brings together facility and provider information across all three systems so families in New York can find accurate, actionable answers in one place. Whether you need to set up messaging at a state prison upstate, arrange a video visit from the city, send photos to a local detention center, or understand money transfer rules for a Bureau of Prisons institution, this directory helps you navigate the right system without the confusion that comes from piecing together information from multiple uncoordinated sources.",
    ],

    facilitiesByType: { federal: 20, state: 58, county: 112, private: 15 },

    counties: [
      "Kings County", "Queens County", "New York County", "Bronx County",
      "Richmond County", "Erie County", "Monroe County", "Westchester County",
      "Nassau County", "Suffolk County", "Albany County", "Onondaga County",
      "Orange County", "Dutchess County", "Rockland County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging and money transfer for New York State DOCCS correctional facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling services at New York state and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services for select New York facilities including some New York City institutions.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities located in New York State.",
      },
    ],

    featuredFacilities: [
      {
        name: "Attica Correctional Facility",
        slug: "attica-correctional-facility",
        type: "State Prison",
        county: "Wyoming County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Rikers Island",
        slug: "rikers-island",
        type: "County Jail",
        county: "New York City",
        features: ["Video Calls", "Phone Calls"],
      },
      {
        name: "Sing Sing Correctional Facility",
        slug: "sing-sing-correctional-facility",
        type: "State Prison",
        county: "Westchester County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  georgia: {
    id: "s-ga",
    name: "Georgia",
    slug: "georgia",
    abbreviation: "GA",
    facilityCount: 228,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Georgia. Compare messaging, video, and phone providers for correctional facilities across Georgia.",

    intro: [
      "Georgia's correctional system is managed primarily by the Georgia Department of Corrections, which oversees state prisons scattered across the state from the Piedmont region to the coast. Beyond the state system, Georgia has a federal Bureau of Prisons presence including facilities in Jesup and the Atlanta area, and county detention centers run by sheriffs across its 159 counties. The sheer number of counties means that communication options are not uniform statewide. A family trying to reach someone at a state prison in Reidsville is using a different system than a family dealing with a county jail in Fulton County or a federal facility in South Georgia.",

      "JPay is the primary platform for messaging and money transfer across Georgia Department of Corrections facilities. Phone and video services at state and county facilities are handled through providers including Securus and GTL, with contracts varying by institution and county. Federal facilities in Georgia operate under Bureau of Prisons guidelines, which means CorrLinks is the required platform for electronic communication. Families frequently run into problems by assuming one provider covers all facilities. Setting up a JPay account does not help if your family member is in a county jail that uses a different system, and vice versa.",

      "This directory helps families in Georgia identify the right communication provider for the right facility without having to call the jail, navigate outdated government websites, or piece together information from multiple sources. Whether you need to set up messaging at a state prison, arrange a video call at a county detention center, or understand the money transfer process at a federal institution, the information here is organized by facility so you can get to the right answer quickly.",
    ],

    facilitiesByType: { federal: 15, state: 38, county: 158, private: 17 },

    counties: [
      "Fulton County", "Gwinnett County", "Cobb County", "DeKalb County",
      "Chatham County", "Cherokee County", "Forsyth County", "Clayton County",
      "Richmond County", "Hall County", "Muscogee County", "Columbia County",
      "Henry County", "Bibb County", "Clarke County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Georgia Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling services at state and county correctional facilities throughout Georgia.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation services at select Georgia county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities located in Georgia.",
      },
    ],

    featuredFacilities: [
      {
        name: "Georgia State Prison",
        slug: "georgia-state-prison",
        type: "State Prison",
        county: "Tattnall County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Fulton County Jail",
        slug: "fulton-county-jail",
        type: "County Jail",
        county: "Fulton County",
        features: ["Messaging", "Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Valdosta State Prison",
        slug: "valdosta-state-prison",
        type: "State Prison",
        county: "Lowndes County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  ohio: {
    id: "s-oh",
    name: "Ohio",
    slug: "ohio",
    abbreviation: "OH",
    facilityCount: 218,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Ohio. Compare messaging, video, and phone providers for correctional facilities across Ohio.",

    intro: [
      "Ohio operates a large correctional system through the Ohio Department of Rehabilitation and Correction, which runs state prisons at locations including Youngstown, Chillicothe, Lucasville, and Marion. The state also has a significant federal Bureau of Prisons presence, with institutions such as FCI Elkton in Columbiana County. County jails, operated by individual sheriffs, add another layer across all 88 Ohio counties. The result is a three-tier system where the provider, communication rules, and account requirements depend entirely on which specific facility a person is held in.",

      "JPay is the main platform used across Ohio Department of Rehabilitation and Correction state facilities for messaging and money transfer. Securus and GTL handle phone and video services at various state and county institutions. At the county level, different jails have negotiated separate provider contracts, so a family member at the Cuyahoga County Corrections Center will use a different platform than someone at Franklin County's facilities. Federal institutions in Ohio require CorrLinks for electronic messaging. Knowing exactly which facility applies to your situation is the most important step before creating any account.",

      "Ohio families navigating the correctional communication system often spend hours trying to find accurate information before they can send a single message. Provider coverage maps are inconsistent, facility websites rarely explain which communication service is available, and the three-tier structure of state, county, and federal systems means the right answer is not always obvious. This directory brings provider and facility information together for Ohio so you can identify the right platform, understand what services are available, and move forward without the confusion that normally comes with this process.",
    ],

    facilitiesByType: { federal: 14, state: 34, county: 153, private: 17 },

    counties: [
      "Franklin County", "Cuyahoga County", "Hamilton County", "Summit County",
      "Montgomery County", "Lucas County", "Stark County", "Butler County",
      "Lorain County", "Warren County", "Lake County", "Trumbull County",
      "Mahoning County", "Medina County", "Clark County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging and money transfer for Ohio Department of Rehabilitation and Correction state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling services at Ohio state and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Ohio county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities located in Ohio.",
      },
    ],

    featuredFacilities: [
      {
        name: "Ohio State Penitentiary",
        slug: "ohio-state-penitentiary",
        type: "State Prison",
        county: "Mahoning County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Chillicothe Correctional Institution",
        slug: "chillicothe-correctional-institution",
        type: "State Prison",
        county: "Ross County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Franklin County Correctional Center",
        slug: "franklin-county-correctional-center",
        type: "County Jail",
        county: "Franklin County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  illinois: {
    id: "s-il",
    name: "Illinois",
    slug: "illinois",
    abbreviation: "IL",
    facilityCount: 205,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Illinois. Compare messaging, video, and phone providers for correctional facilities across Illinois.",

    intro: [
      "Illinois has a layered correctional system that includes state prisons under the Illinois Department of Corrections, federal Bureau of Prisons institutions, and county jails operated by sheriffs across its 102 counties. Cook County alone runs one of the largest single-site jails in the United States, which operates under its own rules and contracts separate from the state prison system. Downstate facilities serve populations across the rural areas of central and southern Illinois, and the provider landscape changes significantly depending on whether a facility is a state prison, a county detention center, or a federal institution.",

      "For Illinois Department of Corrections state prisons, JPay handles messaging, money transfer, and photo sharing. Phone and video services at state facilities are managed through GTL or Securus depending on the specific institution. Cook County Jail operates under a separate provider arrangement from state facilities, and families dealing with the Chicago-area detention system will need to verify which platform applies to their specific facility. Federal correctional institutions in Illinois use CorrLinks for electronic communication. Families who have set up accounts with one provider often discover it does not apply at the specific facility they need.",

      "Getting accurate communication information for Illinois correctional facilities can be surprisingly difficult. The state prison system, the Chicago-area jail system, and federal facilities all operate independently and publish information in different places. This directory organizes provider and facility data across all three systems so Illinois families can find the right platform quickly, understand what communication options are available, and avoid the common frustration of setting up an account that does not work for their specific situation.",
    ],

    facilitiesByType: { federal: 15, state: 28, county: 148, private: 14 },

    counties: [
      "Cook County", "DuPage County", "Lake County", "Will County",
      "Kane County", "Winnebago County", "Madison County", "St. Clair County",
      "Champaign County", "Sangamon County", "Peoria County", "McLean County",
      "Kankakee County", "Rock Island County", "McHenry County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Illinois Department of Corrections state facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation services at Illinois state correctional institutions.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at select Illinois state prisons and county detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities located in Illinois.",
      },
    ],

    featuredFacilities: [
      {
        name: "Stateville Correctional Center",
        slug: "stateville-correctional-center",
        type: "State Prison",
        county: "Will County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Menard Correctional Center",
        slug: "menard-correctional-center",
        type: "State Prison",
        county: "Randolph County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Cook County Jail",
        slug: "cook-county-jail",
        type: "County Jail",
        county: "Cook County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  michigan: {
    id: "s-mi",
    name: "Michigan",
    slug: "michigan",
    abbreviation: "MI",
    facilityCount: 198,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Michigan. Compare messaging, video, and phone providers for correctional facilities across Michigan.",

    intro: [
      "Michigan's correctional system is divided between the Michigan Department of Corrections, which operates prisons throughout both peninsulas of the state, county jails run by local sheriffs, and several federal Bureau of Prisons institutions including facilities in the Milan area and near Detroit. The geographic spread of Michigan, from the Upper Peninsula to the southern border, means that some correctional facilities serve remote populations with limited local services, while others are in major urban counties like Wayne, Oakland, and Kent. Communication options are not standardized across the state and vary considerably based on the specific institution.",

      "JPay is the primary provider for Michigan Department of Corrections state facilities, supporting messaging, photo sharing, and money transfer. Phone services at state facilities and many county jails are handled by Securus and GTL. Wayne County, which includes Detroit, operates a large jail complex with its own provider setup separate from state prisons. Michigan's federal facilities fall under Bureau of Prisons guidelines, requiring CorrLinks for electronic messaging. Families dealing with more than one correctional system, such as a person held at a county jail while awaiting a state prison transfer, may need separate accounts for each.",

      "Finding accurate and current information about Michigan correctional communication can take significant time. Facility websites are often thin on details, provider coverage is not clearly published, and the three-tier structure of state, county, and federal systems means the right answer is not always obvious. This directory brings facility and provider data together for Michigan so families can identify the correct platform for their specific situation, understand available services, and start the communication process without unnecessary delays.",
    ],

    facilitiesByType: { federal: 10, state: 31, county: 142, private: 15 },

    counties: [
      "Wayne County", "Oakland County", "Macomb County", "Kent County",
      "Genesee County", "Washtenaw County", "Ingham County", "Ottawa County",
      "Kalamazoo County", "Saginaw County", "Monroe County", "Jackson County",
      "Bay County", "Muskegon County", "Livingston County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Michigan Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling services at Michigan state prisons and county detention centers.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Michigan county jails and correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons institutions in Michigan.",
      },
    ],

    featuredFacilities: [
      {
        name: "Marquette Branch Prison",
        slug: "marquette-branch-prison",
        type: "State Prison",
        county: "Marquette County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Ionia Correctional Facility",
        slug: "ionia-correctional-facility",
        type: "State Prison",
        county: "Ionia County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Wayne County Jail",
        slug: "wayne-county-jail",
        type: "County Jail",
        county: "Wayne County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "north-carolina": {
    id: "s-nc",
    name: "North Carolina",
    slug: "north-carolina",
    abbreviation: "NC",
    facilityCount: 198,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in North Carolina. Compare messaging, video, and phone providers for correctional facilities across North Carolina.",

    intro: [
      "North Carolina's correctional landscape includes state prisons managed by the Department of Adult Correction, a notable federal Bureau of Prisons presence centered around the Butner Federal Correctional Complex in Granville County, and county detention centers operated by sheriffs across the state's 100 counties. The Butner complex is one of the larger federal correctional campuses in the country and serves a specialized inmate population. State facilities range from maximum-security prisons in the Piedmont region to smaller medium-security units distributed across more rural parts of the state.",

      "JPay serves North Carolina Department of Adult Correction state prisons as the primary platform for messaging, photo sharing, and money transfer. Phone and video services at state facilities are provided by GTL and Securus depending on the institution. County jails across North Carolina each operate under separate contracts, and the provider for a facility in Mecklenburg County may be entirely different from the one serving a jail in Cumberland or Guilford. Federal inmates at Butner and other Bureau of Prisons institutions require CorrLinks for electronic messaging, which is a separate system from anything used by state or county facilities.",

      "Families in North Carolina often encounter confusion when trying to set up communication for the first time, particularly when a loved one is transferred between facilities or held temporarily in a county jail before moving to a state prison. The provider and account requirements change with each transfer, and the information is not always easy to find. This directory organizes facility and provider information for North Carolina in one place so families can identify the right platform, understand what services are available at each facility type, and get connected without sorting through multiple unrelated sources.",
    ],

    facilitiesByType: { federal: 12, state: 57, county: 116, private: 13 },

    counties: [
      "Mecklenburg County", "Wake County", "Guilford County", "Forsyth County",
      "Cumberland County", "Durham County", "Buncombe County", "Union County",
      "Cabarrus County", "Onslow County", "New Hanover County", "Gaston County",
      "Robeson County", "Moore County", "Catawba County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for North Carolina Department of Adult Correction state facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services across North Carolina state correctional facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at select North Carolina state prisons and county jails.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in North Carolina, including Butner.",
      },
    ],

    featuredFacilities: [
      {
        name: "Central Prison",
        slug: "central-prison",
        type: "State Prison",
        county: "Wake County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Butner Federal Correctional Complex",
        slug: "butner-federal-correctional-complex",
        type: "Federal Prison",
        county: "Granville County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
      {
        name: "Mecklenburg County Detention Center",
        slug: "mecklenburg-county-detention-center",
        type: "County Jail",
        county: "Mecklenburg County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  arizona: {
    id: "s-az",
    name: "Arizona",
    slug: "arizona",
    abbreviation: "AZ",
    facilityCount: 195,
    region: "Southwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Arizona. Compare messaging, video, and phone providers for correctional facilities across Arizona.",

    intro: [
      "Arizona's correctional system is managed by the Arizona Department of Corrections, Rehabilitation and Reentry, which operates state prison complexes in several counties including Maricopa, Pinal, Pima, and Yuma. The state makes notable use of private prison contractors, and a meaningful share of Arizona inmates are housed in privately operated facilities that have communication arrangements separate from state-run institutions. Arizona also has a federal Bureau of Prisons presence in the Phoenix and Tucson areas, and Maricopa County alone operates one of the largest county jail systems in the country. Each layer of this system uses different providers and different rules.",

      "JPay and Securus are among the primary providers across Arizona Department of Corrections state facilities, handling messaging, money transfer, phone calls, and video visitation. Maricopa County's jail system operates under its own provider contracts, and ICSolutions has historically served county jails in Arizona. Federal facilities in the state use CorrLinks under Bureau of Prisons guidelines. Families dealing with Arizona's correctional system frequently encounter account setup problems when they start with the wrong provider, particularly given the variety of facility types operating in close proximity in the Phoenix metro area.",

      "For families in Arizona, understanding which facility type applies to their situation is the essential first step. The same area of Phoenix can include state prisons, county jails, private prisons, and federal facilities, each using a different communication platform. This directory helps Arizona families identify the correct provider and service for the specific facility they are dealing with, so you can start the communication process without having to call multiple agencies or work through outdated government resources.",
    ],

    facilitiesByType: { federal: 12, state: 22, county: 140, private: 21 },

    counties: [
      "Maricopa County", "Pima County", "Pinal County", "Yavapai County",
      "Yuma County", "Mohave County", "Coconino County", "Navajo County",
      "Apache County", "Cochise County", "Graham County", "Santa Cruz County",
      "La Paz County", "Gila County", "Greenlee County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Arizona Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Arizona state prisons and select county detention centers.",
      },
      {
        name: "ICSolutions",
        slug: "icsolutions",
        initial: "I",
        color: "bg-teal-600",
        description: "Inmate calling and communication services at county jails throughout Arizona.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Arizona.",
      },
    ],

    featuredFacilities: [
      {
        name: "Arizona State Prison Complex Florence",
        slug: "arizona-state-prison-complex-florence",
        type: "State Prison",
        county: "Pinal County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Maricopa County Jail",
        slug: "maricopa-county-jail",
        type: "County Jail",
        county: "Maricopa County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Arizona State Prison Complex Perryville",
        slug: "arizona-state-prison-complex-perryville",
        type: "State Prison",
        county: "Maricopa County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
    ],
  },

  pennsylvania: {
    id: "s-pa",
    name: "Pennsylvania",
    slug: "pennsylvania",
    abbreviation: "PA",
    facilityCount: 182,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Pennsylvania. Compare messaging, video, and phone providers for correctional facilities across Pennsylvania.",

    intro: [
      "Pennsylvania's correctional system includes state prisons operated by the Pennsylvania Department of Corrections, a substantial federal Bureau of Prisons presence particularly in the central part of the state, and county jails in each of its 67 counties. The PA DOC system includes facilities ranging from maximum-security state correctional institutions to smaller specialized treatment facilities. Federal prisons in Pennsylvania include USP Lewisburg, FCI Allenwood, USP Canaan, and several other institutions in the Susquehanna and Pocono regions, making central Pennsylvania home to a dense concentration of federal correctional facilities.",

      "JPay is the primary platform for Pennsylvania Department of Corrections state prison messaging and money transfer. Phone and video services at state facilities are handled through Securus and GTL. County facilities, including the large Philadelphia prison system and the Allegheny County Jail in Pittsburgh, operate under separate contracts from state facilities. Federal prisons in Pennsylvania require CorrLinks for electronic messaging under Bureau of Prisons rules. One common point of confusion for Pennsylvania families is that county jails and state prisons are entirely separate systems with no shared provider infrastructure, so account setup must be done correctly from the start.",

      "Pennsylvania families often struggle to find clear, organized information about correctional communication because the relevant details are spread across state corrections websites, county government pages, and individual provider portals. This directory brings that information together so you can find out which provider serves the specific Pennsylvania facility you are dealing with, what communication options are available, and how to get started without working through multiple disconnected government resources. Whether the situation involves a state prison in Centre County, a county jail in Philadelphia, or a federal facility near Lewisburg, the goal is to give you accurate information in one place.",
    ],

    facilitiesByType: { federal: 15, state: 27, county: 128, private: 12 },

    counties: [
      "Philadelphia County", "Allegheny County", "Montgomery County", "Bucks County",
      "Delaware County", "Lancaster County", "Chester County", "York County",
      "Berks County", "Westmoreland County", "Luzerne County", "Lehigh County",
      "Lackawanna County", "Erie County", "Dauphin County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging and money transfer for Pennsylvania Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Pennsylvania state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Pennsylvania correctional institutions.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Pennsylvania.",
      },
    ],

    featuredFacilities: [
      {
        name: "State Correctional Institution Phoenix",
        slug: "state-correctional-institution-phoenix",
        type: "State Prison",
        county: "Montgomery County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "State Correctional Institution Dallas",
        slug: "state-correctional-institution-dallas",
        type: "State Prison",
        county: "Luzerne County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Philadelphia Department of Prisons",
        slug: "philadelphia-department-of-prisons",
        type: "County Jail",
        county: "Philadelphia County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  tennessee: {
    id: "s-tn",
    name: "Tennessee",
    slug: "tennessee",
    abbreviation: "TN",
    facilityCount: 168,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Tennessee. Compare messaging, video, and phone providers for correctional facilities across Tennessee.",

    intro: [
      "Tennessee's correctional system includes state prisons run by the Tennessee Department of Correction, county jails operated by local sheriffs across its 95 counties, and private facilities contracted to manage overflow population. The state's geography spans from Memphis in the west through Nashville in the center to Knoxville and Chattanooga in the east, and the communication options at correctional facilities follow no single statewide standard. A facility in the rural northeast may have different provider arrangements from a large urban jail in Shelby County, and families often find that accurate information is not published in any organized location.",

      "JPay is the primary platform for Tennessee Department of Correction state prisons, covering messaging, photo sharing, and money transfer. Phone and video services at state facilities are handled by Securus and GTL depending on the institution. Shelby County, which includes Memphis, operates one of the larger county jail systems in the state with its own provider contracts. Davidson County, which includes Nashville, similarly has its own arrangements separate from the state system. Federal facilities in Tennessee use CorrLinks for electronic communication under Bureau of Prisons guidelines.",

      "Tennessee families navigating inmate communication typically face the same challenge as families in every other state: the right provider for one facility is not the right provider for another, and finding out which applies requires more effort than it should. This directory aggregates facility and provider information for Tennessee to make that process straightforward. Whether you are looking for messaging options at a state correctional institution, setting up phone or video calls at a county jail, or finding the right platform for a federal facility in Memphis, this guide helps you reach the correct answer without the guesswork.",
    ],

    facilitiesByType: { federal: 10, state: 14, county: 130, private: 14 },

    counties: [
      "Shelby County", "Davidson County", "Knox County", "Hamilton County",
      "Rutherford County", "Williamson County", "Montgomery County", "Sullivan County",
      "Blount County", "Madison County", "Wilson County", "Sumner County",
      "Bradley County", "Sevier County", "Washington County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Tennessee Department of Correction state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Tennessee state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Tennessee county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Tennessee.",
      },
    ],

    featuredFacilities: [
      {
        name: "Riverbend Maximum Security Institution",
        slug: "riverbend-maximum-security-institution",
        type: "State Prison",
        county: "Davidson County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Shelby County Correctional Center",
        slug: "shelby-county-correctional-center",
        type: "County Jail",
        county: "Shelby County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Northeast Correctional Complex",
        slug: "northeast-correctional-complex",
        type: "State Prison",
        county: "Sullivan County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  indiana: {
    id: "s-in",
    name: "Indiana",
    slug: "indiana",
    abbreviation: "IN",
    facilityCount: 168,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Indiana. Compare messaging, video, and phone providers for correctional facilities across Indiana.",

    intro: [
      "Indiana's correctional system is organized around the Indiana Department of Correction, which operates state prisons at locations including Michigan City, Pendleton, Carlisle, and Westville. County jails across Indiana's 92 counties add a second tier of facilities, each operating under local sheriff's oversight with separate communication arrangements. The federal Bureau of Prisons also maintains a presence in Indiana, most notably at the Terre Haute federal complex, which includes a United States Penitentiary and a federal medical center. Each tier of this system has its own provider relationships, and the rules governing communication differ across them.",

      "JPay is used across Indiana Department of Correction state prisons for messaging, photos, and money transfer. Phone and video services at state facilities and many county jails are provided by Securus and GTL. Marion County, which encompasses Indianapolis and operates one of the larger county jail systems in the state, has its own provider setup. Federal facilities at Terre Haute and other locations in Indiana require CorrLinks for electronic communication. As with most states, the challenge for families is not a lack of options. It is knowing which option applies to the specific facility in their situation.",

      "Indiana families dealing with the correctional communication system for the first time often spend considerable time figuring out the basics. Which provider? Which account type? What rules apply at this particular facility? This directory organizes that information for Indiana so you can go directly to the correct answer. Whether the facility is a state prison in the northern part of the state, a county jail in Indianapolis, or a federal complex in Terre Haute, this guide gives you a reliable starting point without the confusion that normally comes with this process.",
    ],

    facilitiesByType: { federal: 8, state: 22, county: 125, private: 13 },

    counties: [
      "Marion County", "Lake County", "Allen County", "Hamilton County",
      "St. Joseph County", "Vanderburgh County", "Tippecanoe County", "Elkhart County",
      "Vigo County", "Madison County", "Monroe County", "Bartholomew County",
      "Johnson County", "Delaware County", "Howard County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Indiana Department of Correction state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling services at Indiana state prisons and county jails.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Indiana county detention centers and correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Indiana, including Terre Haute.",
      },
    ],

    featuredFacilities: [
      {
        name: "Indiana State Prison",
        slug: "indiana-state-prison",
        type: "State Prison",
        county: "LaPorte County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Pendleton Correctional Facility",
        slug: "pendleton-correctional-facility",
        type: "State Prison",
        county: "Madison County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Marion County Jail",
        slug: "marion-county-jail",
        type: "County Jail",
        county: "Marion County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  virginia: {
    id: "s-va",
    name: "Virginia",
    slug: "virginia",
    abbreviation: "VA",
    facilityCount: 158,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Virginia. Compare messaging, video, and phone providers for correctional facilities across Virginia.",

    intro: [
      "Virginia's correctional system includes state prisons operated by the Virginia Department of Corrections, local and regional jails run by cities and counties, and federal Bureau of Prisons facilities including institutions in the Hopewell and Lee County areas. One distinctive feature of Virginia's system is the role of regional jails, which are multi-jurisdiction facilities serving more than one locality and operating under different arrangements than single-county jails. The state has over 130 independent cities and counties, many of which share jail resources through these regional agreements, adding a layer of complexity that families do not encounter in most other states.",

      "Virginia Department of Corrections state prisons use JPay as the primary platform for messaging, money transfer, and photo sharing. Phone and video services at state facilities are provided by Securus and GTL. Regional and local jails across Northern Virginia, Richmond, Tidewater, and other areas each have separate provider contracts. Federal facilities in Virginia require CorrLinks for electronic communication under Bureau of Prisons rules. The combination of state prisons, regional jails, independent city jails, and federal institutions means that Virginia has one of the more varied communication landscapes in the Mid-Atlantic region.",

      "For families in Virginia, identifying the right communication provider often requires navigating several different government and provider websites before reaching a clear answer. This directory brings provider and facility information together for Virginia so you can identify the correct platform for your specific situation without working through the complexity of the state's fragmented system. Whether you need to reach someone at a state prison in Southwest Virginia, a regional jail in the Shenandoah Valley, or a federal facility near Richmond, this guide is designed to give you organized information to start the process.",
    ],

    facilitiesByType: { federal: 12, state: 30, county: 105, private: 11 },

    counties: [
      "Fairfax County", "Prince William County", "Chesterfield County", "Loudoun County",
      "Henrico County", "Virginia Beach", "Arlington County", "Roanoke County",
      "Albemarle County", "Spotsylvania County", "Stafford County", "Montgomery County",
      "Richmond City", "Norfolk", "Newport News",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Virginia Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Virginia state prisons and regional jail facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Virginia correctional facilities and county jails.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Virginia.",
      },
    ],

    featuredFacilities: [
      {
        name: "Red Onion State Prison",
        slug: "red-onion-state-prison",
        type: "State Prison",
        county: "Wise County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Sussex I State Prison",
        slug: "sussex-i-state-prison",
        type: "State Prison",
        county: "Sussex County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Fairfax County Adult Detention Center",
        slug: "fairfax-county-adult-detention-center",
        type: "County Jail",
        county: "Fairfax County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  louisiana: {
    id: "s-la",
    name: "Louisiana",
    slug: "louisiana",
    abbreviation: "LA",
    facilityCount: 218,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Louisiana. Compare messaging, video, and phone providers for correctional facilities across Louisiana.",

    intro: [
      "Louisiana's correctional system is one of the most distinctive in the country, operated primarily through the Louisiana Department of Public Safety and Corrections, which oversees state prisons including the Louisiana State Penitentiary at Angola, one of the largest maximum-security prisons in the United States. Unlike most states, Louisiana divides its land into parishes rather than counties, and each parish typically operates its own detention center under the oversight of the local sheriff. This parish jail system is one of the most extensive of its type in the country, and the facilities in it range from large urban lockups in the New Orleans area to smaller rural detention centers spread across the state.",

      "JPay is the primary platform for messaging and money transfer at Louisiana Department of Public Safety and Corrections state facilities. Phone and video services at state and parish facilities are handled through Securus and GTL depending on the specific institution. The New Orleans area, which includes Orleans Parish and Jefferson Parish, has its own provider arrangements for detention centers that are separate from the state prison system. Federal correctional facilities in Louisiana require CorrLinks for electronic communication under Bureau of Prisons guidelines. Because parish jails operate independently, the provider for one facility can differ completely from the next parish over.",

      "For families in Louisiana, finding communication information for a specific facility requires navigating parish-level systems that are not organized in any single location. The state prison system, the parish jail network, and federal institutions all publish information separately and use different platforms. This directory brings facility and provider information together for Louisiana so families can identify the correct communication service quickly, understand what options are available at their specific facility, and start the process of staying in contact without the confusion that comes from sorting through multiple independent sources.",
    ],

    facilitiesByType: { federal: 12, state: 18, county: 175, private: 13 },

    counties: [
      "Orleans Parish", "Jefferson Parish", "East Baton Rouge Parish", "St. Tammany Parish",
      "Caddo Parish", "Calcasieu Parish", "Bossier Parish", "Lafourche Parish",
      "St. Landry Parish", "Rapides Parish", "Ouachita Parish", "Terrebonne Parish",
      "Livingston Parish", "Tangipahoa Parish", "St. Mary Parish",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Louisiana Department of Public Safety and Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Louisiana state prisons and parish detention centers.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation services at select Louisiana parish jails and correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities located in Louisiana.",
      },
    ],

    featuredFacilities: [
      {
        name: "Louisiana State Penitentiary",
        slug: "louisiana-state-penitentiary",
        type: "State Prison",
        county: "West Feliciana Parish",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Orleans Justice Center",
        slug: "orleans-justice-center",
        type: "Parish Jail",
        county: "Orleans Parish",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Elayn Hunt Correctional Center",
        slug: "elayn-hunt-correctional-center",
        type: "State Prison",
        county: "Iberville Parish",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  alabama: {
    id: "s-al",
    name: "Alabama",
    slug: "alabama",
    abbreviation: "AL",
    facilityCount: 198,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Alabama. Compare messaging, video, and phone providers for correctional facilities across Alabama.",

    intro: [
      "Alabama's correctional system is operated by the Alabama Department of Corrections (ADOC), headquartered in Montgomery. The ADOC system includes state prisons, work release centers, and community corrections facilities across all 67 counties. Securus Technologies holds the ADOC state contract for phone calls and video visits. JPay is the primary platform for money transfers to inmate trust accounts at ADOC state facilities.",
      "As of November 10, 2025, ADOC no longer accepts personal mail sent directly to any facility. All personal mail must be sent to the ADOC Mail Processing Center in San Antonio, Texas. The mailing address is: Inmate Name, Inmate AIS Number, P.O. Box 17339, San Antonio, TX 78217. Mail sent directly to a facility after November 10, 2025 is returned to the sender. Include the inmate AIS number on every envelope or the mail will not be processed.",
      "Alabama is not among the states that have eliminated phone call fees. Securus Technologies holds the ADOC contract for most state facilities. Under FCC rules effective April 6, 2026, per-minute rates for inmate calls are now federally capped. County jails in Alabama use their own providers and have their own rate structures that vary by county. Always confirm the specific facility and its current provider before setting up any account.",
    ],

    faq: [
      {
        question: "Which provider do Alabama state prisons use?",
        answer: "Securus Technologies holds the Alabama Department of Corrections state contract for phone calls and video visits. JPay is the primary platform for money transfers to ADOC inmate trust accounts. For federal Bureau of Prisons facilities in Alabama such as FCI Talladega and FCI Aliceville, the provider is different. Federal inmates use CorrLinks for messaging and ConnectNetwork for phone calls regardless of which state they are in.",
      },
      {
        question: "What is the AIS number and where do I find it?",
        answer: "The AIS number (Alabama Identification System number) is assigned to every person in ADOC custody. You need this number for mail, money transfers, and communication accounts. It is different from any court case number. Find it using the ADOC inmate search tool at doc.alabama.gov or by contacting the specific facility directly. All mail to ADOC facilities must include the AIS number or it will not be processed.",
      },
      {
        question: "Can I still mail letters to Alabama state prisons?",
        answer: "Yes, but not directly to the facility. As of November 10, 2025, ADOC no longer accepts personal mail sent directly to any facility. All personal mail must go to the ADOC Mail Processing Center: Inmate Name, Inmate AIS Number, P.O. Box 17339, San Antonio, TX 78217. Mail sent directly to a facility is returned to sender. Always include the inmate AIS number on every envelope.",
      },
      {
        question: "Are phone calls free at Alabama state prisons?",
        answer: "No. Alabama is not among the states that have eliminated phone call fees. Securus Technologies holds the ADOC contract and charges per-minute rates subject to FCC caps effective April 6, 2026. Under current FCC rules, interstate calls are capped at $0.11 per minute for prisons. Contact Securus at securustech.net to set up a prepaid account to receive calls at the regulated rate.",
      },
      {
        question: "How do I send money to someone at an Alabama state prison?",
        answer: "JPay is the primary money transfer platform for ADOC state facilities. Visit jpay.com or use the JPay app to create an account and send funds to the inmate trust account. You will need the inmate AIS number and facility name. Transaction fees apply. For county jails in Alabama, the money transfer provider varies by county. Contact the specific facility to confirm the correct provider before sending funds.",
      },
      {
        question: "How do I find someone currently in an Alabama state prison?",
        answer: "Use the ADOC inmate search tool at doc.alabama.gov. You can search by the inmate AIS number, first name, or last name. The search shows the current facility, security level, and other basic information. For county jail inmates, use the relevant county sheriff's website inmate roster. For federal inmates in Alabama, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "Can I send photos to someone at an Alabama state prison?",
        answer: "Standard 4x6 photos are accepted at most ADOC facilities. No Polaroids, stickers, glitter, or attachments are permitted. Some facilities use JPay for electronic photo delivery as an alternative to physical mail. Physical photos must go through the ADOC Mail Processing Center at P.O. Box 17339, San Antonio, TX 78217 with the inmate name and AIS number. Photos sent directly to a facility will be returned.",
      },
      {
        question: "What is the difference between county jails and state prisons in Alabama?",
        answer: "Alabama state prisons are operated by ADOC and hold people convicted of state crimes serving sentences longer than one year. County jails are operated by individual county sheriffs and hold people awaiting trial or serving short sentences. State prisons use Securus for calls and JPay for money transfers. County jails use their own contracted providers which vary by county. Always confirm which specific facility your loved one is in before setting up any accounts.",
      },
    ],

    facilitiesByType: { federal: 10, state: 28, county: 148, private: 12 },

    counties: [
      "Jefferson County", "Madison County", "Mobile County", "Montgomery County",
      "Shelby County", "Baldwin County", "Tuscaloosa County", "Lee County",
      "Morgan County", "Calhoun County", "Etowah County", "Limestone County",
      "St. Clair County", "Talladega County", "Elmore County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Alabama Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Alabama state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation services at select Alabama county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Alabama.",
      },
    ],

    featuredFacilities: [
      {
        name: "Kilby Correctional Facility",
        slug: "kilby-correctional-facility",
        type: "State Prison",
        county: "Elmore County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Jefferson County Jail",
        slug: "jefferson-county-jail",
        type: "County Jail",
        county: "Jefferson County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Talladega",
        slug: "fci-talladega",
        type: "Federal Prison",
        county: "Talladega County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  missouri: {
    id: "s-mo",
    name: "Missouri",
    slug: "missouri",
    abbreviation: "MO",
    facilityCount: 178,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Missouri. Compare messaging, video, and phone providers for correctional facilities across Missouri.",

    intro: [
      "Missouri's correctional system is built around the Missouri Department of Corrections, which operates state prisons distributed across the state from the St. Louis metro area to the Ozarks and the Kansas City corridor. The state has 114 counties plus the independent City of St. Louis, each running its own jail system under sheriff or city oversight. The geographic split between eastern and western Missouri means that the two largest urban areas, St. Louis and Kansas City, each have distinct detention systems operating independently from one another and from the state prison network. Federal correctional institutions in Missouri add a third tier with their own provider requirements.",

      "JPay handles messaging, photo sharing, and money transfer across Missouri Department of Corrections state facilities. Securus and GTL provide phone and video services at state and county institutions. The St. Louis City Justice Center operates as a standalone city jail separate from the county sheriff system, and the Jackson County Detention Center in Kansas City operates under its own provider contract. Federal facilities in Missouri use CorrLinks for electronic communication. Families who are unfamiliar with Missouri's split between the independent City of St. Louis and St. Louis County sometimes encounter confusion about which system applies, as the two operate entirely separately under different administrations.",

      "Getting straightforward communication information for Missouri correctional facilities typically requires knowing not just the facility name but whether it falls under the city, county, state, or federal system. Each layer has separate provider relationships and account requirements. This directory organizes that information for Missouri facilities so families can identify the correct communication platform without having to navigate multiple government websites or make phone calls to figure out which system they are dealing with.",
    ],

    facilitiesByType: { federal: 12, state: 22, county: 130, private: 14 },

    counties: [
      "St. Louis County", "Jackson County", "Jefferson County", "St. Charles County",
      "Greene County", "Clay County", "Boone County", "Cass County",
      "Franklin County", "St. Louis City", "Christian County", "Jasper County",
      "Platte County", "Cole County", "Newton County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Missouri Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Missouri state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Missouri county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities located in Missouri.",
      },
    ],

    featuredFacilities: [
      {
        name: "Crossroads Correctional Center",
        slug: "crossroads-correctional-center",
        type: "State Prison",
        county: "DeKalb County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Potosi Correctional Center",
        slug: "potosi-correctional-center",
        type: "State Prison",
        county: "Washington County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "St. Louis City Justice Center",
        slug: "st-louis-city-justice-center",
        type: "City Jail",
        county: "St. Louis City",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  oklahoma: {
    id: "s-ok",
    name: "Oklahoma",
    slug: "oklahoma",
    abbreviation: "OK",
    facilityCount: 178,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Oklahoma. Compare messaging, video, and phone providers for correctional facilities across Oklahoma.",

    intro: [
      "Oklahoma's correctional system involves the Oklahoma Department of Corrections, which runs state prisons across its 77 counties, county detention centers operated by local sheriffs, and a significant federal Bureau of Prisons presence that includes the Federal Transfer Center in Oklahoma City, one of the busiest federal inmate transit hubs in the country. Oklahoma also has a distinctive layer of complexity due to its large Native American population and tribal land jurisdictions, which can affect which court and which correctional system oversees a given case. Families in Oklahoma sometimes find their situation involves a facility type they were not expecting based on the legal jurisdiction that applied.",

      "JPay is the primary platform for Oklahoma Department of Corrections state facilities, supporting messaging, money transfer, and photo sharing. Securus and GTL handle phone and video services across state and county institutions. The Oklahoma County Detention Center in Oklahoma City, which serves as the county jail for the state's most populous county, operates under its own provider contract separate from the state prison system. Federal facilities in Oklahoma, including the Federal Transfer Center, use CorrLinks for electronic messaging. Families dealing with the federal transfer center should be aware that inmates passing through it may be moved to permanent facilities in other states, which changes the provider setup entirely.",

      "Oklahoma families researching inmate communication options frequently encounter the challenge of multiple overlapping systems with no centralized information source. The state prison system, county jails, tribal facilities, and federal institutions each publish information independently and use different platforms. This directory brings facility and provider information together for Oklahoma so families can identify the correct communication platform quickly, understand what services are available at the relevant facility type, and avoid the time and frustration of working through the wrong provider.",
    ],

    facilitiesByType: { federal: 8, state: 18, county: 138, private: 14 },

    counties: [
      "Oklahoma County", "Tulsa County", "Cleveland County", "Comanche County",
      "Canadian County", "Rogers County", "Wagoner County", "Muskogee County",
      "Pontotoc County", "Pittsburg County", "Pottawatomie County", "Payne County",
      "Garfield County", "Le Flore County", "Bryan County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Oklahoma Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Oklahoma state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Oklahoma county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Oklahoma, including the Federal Transfer Center.",
      },
    ],

    featuredFacilities: [
      {
        name: "Oklahoma State Penitentiary",
        slug: "oklahoma-state-penitentiary",
        type: "State Prison",
        county: "Pittsburg County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Oklahoma County Detention Center",
        slug: "oklahoma-county-detention-center",
        type: "County Jail",
        county: "Oklahoma County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Federal Transfer Center Oklahoma City",
        slug: "federal-transfer-center-oklahoma-city",
        type: "Federal Prison",
        county: "Oklahoma County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  kentucky: {
    id: "s-ky",
    name: "Kentucky",
    slug: "kentucky",
    abbreviation: "KY",
    facilityCount: 152,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Kentucky. Compare messaging, video, and phone providers for correctional facilities across Kentucky.",

    intro: [
      "Kentucky's correctional system is managed by the Kentucky Department of Corrections, which operates state prisons at locations including the Kentucky State Penitentiary in Lyon County, Luther Luckett Correctional Complex in Oldham County, and facilities in the eastern part of the state where coal country geography shapes both the local economy and the prison landscape. The state has 120 counties, each with its own detention center, and the Louisville metro area includes Jefferson County's large urban jail system operating separately from state prisons. Federal Bureau of Prisons facilities in Kentucky, including FCI Manchester in Clay County and FCI Ashland in Boyd County, serve inmates across the region.",

      "JPay is the standard provider for Kentucky Department of Corrections state facilities, handling messaging, photo sharing, and money transfer. Securus and GTL manage phone and video services at state institutions and many county jails. Louisville Metro Corrections, which serves Jefferson County and the Louisville metro area, operates under its own provider setup separate from state facilities. The federal institutions in Kentucky require CorrLinks for electronic communication. Eastern Kentucky has a concentration of both state correctional facilities and federal prisons in a relatively compact area, which means families in that region may need to deal with multiple provider systems depending on where their family member is being held.",

      "Kentucky families navigating inmate communication often find that the information they need is spread across state corrections resources, individual county sheriff pages, and provider websites. The layered structure of state, county, and federal facilities means there is no single source that covers everything. This directory organizes Kentucky facility and provider information so families can find the right communication platform without having to search through multiple disconnected systems to determine which one applies to their specific situation.",
    ],

    facilitiesByType: { federal: 8, state: 14, county: 120, private: 10 },

    counties: [
      "Jefferson County", "Fayette County", "Kenton County", "Boone County",
      "Warren County", "Madison County", "Hardin County", "Daviess County",
      "McCracken County", "Laurel County", "Oldham County", "Boyd County",
      "Christian County", "Knox County", "Pike County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Kentucky Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Kentucky state prisons and county detention centers.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Kentucky county jails and correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Kentucky.",
      },
    ],

    featuredFacilities: [
      {
        name: "Kentucky State Penitentiary",
        slug: "kentucky-state-penitentiary",
        type: "State Prison",
        county: "Lyon County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Louisville Metro Corrections",
        slug: "louisville-metro-corrections",
        type: "County Jail",
        county: "Jefferson County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Manchester",
        slug: "fci-manchester",
        type: "Federal Prison",
        county: "Clay County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  "south-carolina": {
    id: "s-sc",
    name: "South Carolina",
    slug: "south-carolina",
    abbreviation: "SC",
    facilityCount: 148,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in South Carolina. Compare messaging, video, and phone providers for correctional facilities across South Carolina.",

    intro: [
      "South Carolina's correctional system centers on the South Carolina Department of Corrections, which operates state prisons across the state including facilities near Columbia, the state capital in Richland County. County jails in South Carolina are administered by county sheriffs across all 46 counties, and the coastal geography of the Lowcountry creates a spread of detention facilities in areas that range from major urban centers like Charleston and Myrtle Beach to smaller rural counties in the Pee Dee and Midlands regions. A federal Bureau of Prisons presence in Edgefield County adds the third tier of the correctional system.",

      "JPay is the primary platform for South Carolina Department of Corrections state facilities, supporting messaging, money transfer, and photo sharing. Phone and video services at state prisons and county jails are provided by Securus and GTL. County jails in South Carolina each have their own provider contracts, and the platform serving a facility in Greenville County may differ from the one used in Charleston or Horry County. Federal inmates at FCI Edgefield and other Bureau of Prisons facilities in the state require CorrLinks for electronic communication. Families who are new to the process often do not realize that the state prison system and county jails are entirely separate, with separate accounts and separate providers.",

      "For families in South Carolina, finding current and accurate information about correctional communication typically means checking multiple sources before getting a clear answer. The SCDC website covers state facilities but not county jails, county websites vary in the detail they provide, and provider sites are often incomplete. This directory brings facility and provider information together for South Carolina so families can quickly identify the right platform for the specific facility they are dealing with and get started without unnecessary delays.",
    ],

    facilitiesByType: { federal: 8, state: 22, county: 108, private: 10 },

    counties: [
      "Richland County", "Greenville County", "Charleston County", "Horry County",
      "Lexington County", "Spartanburg County", "York County", "Anderson County",
      "Berkeley County", "Dorchester County", "Aiken County", "Beaufort County",
      "Pickens County", "Sumter County", "Florence County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for South Carolina Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at South Carolina state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select South Carolina county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in South Carolina.",
      },
    ],

    featuredFacilities: [
      {
        name: "Broad River Correctional Institution",
        slug: "broad-river-correctional-institution",
        type: "State Prison",
        county: "Richland County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Alvin S. Glenn Detention Center",
        slug: "alvin-s-glenn-detention-center",
        type: "County Jail",
        county: "Richland County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Edgefield",
        slug: "fci-edgefield",
        type: "Federal Prison",
        county: "Edgefield County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  wisconsin: {
    id: "s-wi",
    name: "Wisconsin",
    slug: "wisconsin",
    abbreviation: "WI",
    facilityCount: 128,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Wisconsin. Compare messaging, video, and phone providers for correctional facilities across Wisconsin.",

    intro: [
      "Wisconsin's correctional system is run by the Wisconsin Department of Corrections, which operates state prisons at facilities including Waupun Correctional Institution in Dodge County, Green Bay Correctional Institution, and several other prisons distributed across the state's 72 counties. County jails in Wisconsin operate under local sheriff's authority, with Milwaukee County running the largest jail system in the state. The geographic spread from the Milwaukee and Madison metro areas in the southeast to the northern woodlands and Lake Superior shoreline means that rural county jails and urban detention centers serve very different populations but both require families to navigate the same provider landscape.",

      "JPay is the primary platform for Wisconsin Department of Corrections state facilities, supporting messaging, photo sharing, and money transfer. Securus and GTL provide phone and video services at state prisons and many county jails. Milwaukee County Jail, which processes a large volume of bookings for the state's largest city, has its own provider arrangement. The federal correctional campus near Oxford in Marquette County, which includes FCI Oxford, operates under Bureau of Prisons guidelines and requires CorrLinks for electronic communication. Wisconsin's smaller county jails, particularly in northern and western parts of the state, may operate with more limited communication options than urban facilities.",

      "Wisconsin families dealing with the correctional communication system for the first time often find that the right provider is not obvious without knowing the specific facility type. State prisons, county jails, and federal institutions each have separate platforms and separate processes, and the information is not published in any single location. This directory organizes facility and provider data for Wisconsin so families can identify the correct communication service, understand what options are available at the relevant facility, and get started without having to work through multiple disconnected sources.",
    ],

    facilitiesByType: { federal: 8, state: 18, county: 94, private: 8 },

    counties: [
      "Milwaukee County", "Dane County", "Waukesha County", "Brown County",
      "Racine County", "Outagamie County", "Winnebago County", "Kenosha County",
      "Rock County", "Marathon County", "Washington County", "Sheboygan County",
      "La Crosse County", "Fond du Lac County", "Eau Claire County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Wisconsin Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Wisconsin state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Wisconsin county jails and correctional institutions.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Wisconsin.",
      },
    ],

    featuredFacilities: [
      {
        name: "Waupun Correctional Institution",
        slug: "waupun-correctional-institution",
        type: "State Prison",
        county: "Dodge County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Green Bay Correctional Institution",
        slug: "green-bay-correctional-institution",
        type: "State Prison",
        county: "Brown County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Milwaukee County Jail",
        slug: "milwaukee-county-jail",
        type: "County Jail",
        county: "Milwaukee County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "new-jersey": {
    id: "s-nj",
    name: "New Jersey",
    slug: "new-jersey",
    abbreviation: "NJ",
    facilityCount: 118,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in New Jersey. Compare messaging, video, and phone providers for correctional facilities across New Jersey.",

    intro: [
      "New Jersey operates a correctional system through the New Jersey Department of Corrections, which manages state prisons including New Jersey State Prison in Trenton, East Jersey State Prison in Middlesex County, and several other institutions distributed across the state. New Jersey's 21 counties each operate their own county jail, and the density of the state means that multiple large county facilities serve populations in close geographic proximity. Essex County Correctional Facility in Newark, Hudson County Correctional Center, and the Mercer County Correction Center in Trenton each serve major urban populations under separate provider arrangements. The federal correctional complex at Fort Dix in Burlington County adds a significant federal population to the state.",

      "JPay is the standard platform for New Jersey Department of Corrections state facilities, handling messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state prisons and county jails across the state. County jails in New Jersey each have their own provider contracts, and some operate independent communication systems set up at the county level. FCI Fort Dix, one of the larger federal prisons on the East Coast, and other Bureau of Prisons institutions in New Jersey require CorrLinks for electronic communication. New Jersey's proximity to New York means some families are dealing with a mix of systems if a loved one has been in the New York City jail network before transferring to a New Jersey facility.",

      "Finding reliable communication information for New Jersey correctional facilities can be complicated by the density of the system. Multiple large county jails, a substantial state prison network, and federal facilities all operate in a relatively compact geographic area, each with their own provider. This directory organizes facility and provider information for New Jersey so families can identify the right platform for their specific situation without sorting through multiple county and state websites to find a basic answer.",
    ],

    facilitiesByType: { federal: 10, state: 14, county: 86, private: 8 },

    counties: [
      "Bergen County", "Middlesex County", "Essex County", "Hudson County",
      "Monmouth County", "Ocean County", "Union County", "Camden County",
      "Passaic County", "Burlington County", "Somerset County", "Mercer County",
      "Morris County", "Atlantic County", "Cumberland County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging and money transfer for New Jersey Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at New Jersey state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select New Jersey county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in New Jersey, including Fort Dix.",
      },
    ],

    featuredFacilities: [
      {
        name: "New Jersey State Prison",
        slug: "new-jersey-state-prison",
        type: "State Prison",
        county: "Mercer County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Essex County Correctional Facility",
        slug: "essex-county-correctional-facility",
        type: "County Jail",
        county: "Essex County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Fort Dix",
        slug: "fci-fort-dix",
        type: "Federal Prison",
        county: "Burlington County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  colorado: {
    id: "s-co",
    name: "Colorado",
    slug: "colorado",
    abbreviation: "CO",
    facilityCount: 118,
    region: "Southwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Colorado. Compare messaging, video, and phone providers for correctional facilities across Colorado.",

    intro: [
      "Colorado's correctional system is operated by the Colorado Department of Corrections, which runs state prisons at several locations including a concentration of facilities in the Canon City area of Fremont County, where both state and federal institutions sit in close proximity. Colorado's 64 counties each operate their own detention system, and the population and geography of the state range from the Denver Front Range metro to rural mountain counties and the Western Slope. The Fremont County area is particularly notable because it houses multiple Colorado state prisons, the federal ADX Florence supermaximum security prison, and FCI Florence, making it one of the highest-density correctional areas in the country.",

      "JPay is the primary platform for Colorado Department of Corrections state facilities, covering messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state prisons and many county jails across the state. Denver County, which operates the Denver County Jail and houses the largest urban detention population in the state, has its own provider setup. Federal facilities in Colorado, including ADX Florence, FCI Florence, and FMC Englewood, require CorrLinks for electronic communication under Bureau of Prisons guidelines. Families with a loved one in a federal institution in the Canon City area should be aware that communication options at ADX Florence may be more restricted than at a standard federal prison due to its supermaximum security designation.",

      "Colorado families trying to find communication information for correctional facilities often encounter a system that is more layered than it appears from the outside. The high concentration of state and federal prisons near Canon City can create confusion about which system and which provider applies when facilities with similar names sit in close proximity. This directory organizes facility and provider data for Colorado so families can identify the correct platform for their specific situation, understand what communication services are available, and avoid the common mistake of setting up an account with the wrong system.",
    ],

    facilitiesByType: { federal: 10, state: 18, county: 82, private: 8 },

    counties: [
      "Denver County", "El Paso County", "Arapahoe County", "Jefferson County",
      "Adams County", "Douglas County", "Larimer County", "Weld County",
      "Boulder County", "Pueblo County", "Broomfield County", "Garfield County",
      "Mesa County", "Fremont County", "La Plata County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Colorado Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Colorado state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Colorado county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Colorado, including ADX Florence.",
      },
    ],

    featuredFacilities: [
      {
        name: "Colorado State Penitentiary",
        slug: "colorado-state-penitentiary",
        type: "State Prison",
        county: "Fremont County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Denver County Jail",
        slug: "denver-county-jail",
        type: "County Jail",
        county: "Denver County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "ADX Florence",
        slug: "adx-florence",
        type: "Federal Prison",
        county: "Fremont County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  washington: {
    id: "s-wa",
    name: "Washington",
    slug: "washington",
    abbreviation: "WA",
    facilityCount: 102,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in Washington. Compare messaging, video, and phone providers for correctional facilities across Washington.",

    intro: [
      "Washington State's correctional system is managed by the Washington State Department of Corrections, which operates prisons at locations including the Washington State Penitentiary in Walla Walla and the Monroe Correctional Complex in Snohomish County east of Seattle. The state's 39 counties each operate their own jail system, and the significant geographic divide between the densely populated Puget Sound region and the drier, more rural eastern side of the Cascades means that King County's large urban detention system in Seattle operates in a very different environment from county jails in Yakima or Walla Walla. A federal detention presence in the SeaTac area serves the broader Pacific Northwest region.",

      "JPay is the primary platform for Washington State Department of Corrections facilities, handling messaging, photo sharing, and money transfer. Securus and GTL provide phone and video services at state prisons and county jails. King County, which operates the King County Correctional Facility in Seattle and the Maleng Regional Justice Center in Kent, runs one of the most active county detention systems on the West Coast under its own provider arrangements. Federal facilities in Washington, including the Federal Detention Center SeaTac, require CorrLinks for electronic communication under Bureau of Prisons guidelines. Families dealing with Washington's correctional system for the first time may not realize that the Seattle-area jail system, the state prison system, and federal facilities are entirely separate with different providers and different account requirements.",

      "Washington families researching inmate communication options typically find that the most difficult part is identifying which facility and which system applies to their situation. The state prison system in eastern Washington, the Puget Sound county jail network, and federal facilities near Sea-Tac airport each have separate providers and separate processes. This directory brings that information together for Washington so families can find the correct platform quickly and start the communication process without having to navigate multiple government and provider websites to find a basic answer.",
    ],

    facilitiesByType: { federal: 8, state: 14, county: 72, private: 8 },

    counties: [
      "King County", "Pierce County", "Snohomish County", "Spokane County",
      "Clark County", "Thurston County", "Kitsap County", "Yakima County",
      "Whatcom County", "Benton County", "Skagit County", "Grant County",
      "Franklin County", "Walla Walla County", "Cowlitz County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Washington State Department of Corrections facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Washington state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Washington county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Washington.",
      },
    ],

    featuredFacilities: [
      {
        name: "Washington State Penitentiary",
        slug: "washington-state-penitentiary",
        type: "State Prison",
        county: "Walla Walla County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Monroe Correctional Complex",
        slug: "monroe-correctional-complex",
        type: "State Prison",
        county: "Snohomish County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "King County Correctional Facility",
        slug: "king-county-correctional-facility",
        type: "County Jail",
        county: "King County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  arkansas: {
    id: "s-ar",
    name: "Arkansas",
    slug: "arkansas",
    abbreviation: "AR",
    facilityCount: 128,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Arkansas. Compare messaging, video, and phone providers for correctional facilities across Arkansas.",

    intro: [
      "Arkansas operates its state prison system through the Arkansas Division of Correction, which manages facilities spread across the state's diverse geography, from the Ozark highlands in the northwest to the Arkansas Delta in the east. The Delta region is home to several large state prison farms, including the Cummins Unit in Lincoln County, one of the most historically significant correctional institutions in the South. Arkansas's 75 counties each operate their own detention facilities under county sheriff oversight, and the size and resources of these jails vary considerably between urban counties like Pulaski and Washington and the smaller rural counties of the eastern and southern parts of the state.",

      "JPay is the primary platform for Arkansas Division of Correction state facilities, covering messaging, money transfer, and photo sharing. Securus and GTL handle phone and video services at state prisons and county jails. The Pulaski County Detention Facility in Little Rock, which serves as the jail for the state's most populous county, operates under its own provider contract. Arkansas also has a notable federal Bureau of Prisons presence in St. Francis County, where the Federal Correctional Institution Forrest City includes both a low-security and a medium-security facility on the same campus. Federal inmates at Forrest City and elsewhere in Arkansas require CorrLinks for electronic messaging.",

      "Arkansas families researching inmate communication often find that the relevant information is scattered across the state DOC website, individual county sheriff pages, and provider portals that do not consistently reflect which facilities they serve. Whether you are trying to reach someone at an ADC state prison, a county jail in Fayetteville or Fort Smith, or the federal complex in Forrest City, this directory organizes the provider and facility information for Arkansas so you can identify the right platform and get started without sorting through multiple disconnected resources.",
    ],

    facilitiesByType: { federal: 8, state: 18, county: 92, private: 10 },

    counties: [
      "Pulaski County", "Benton County", "Washington County", "Sebastian County",
      "Saline County", "Faulkner County", "Garland County", "Craighead County",
      "Pope County", "White County", "Lonoke County", "Jefferson County",
      "Miller County", "Mississippi County", "Greene County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Arkansas Division of Correction state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Arkansas state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Arkansas county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Arkansas, including FCI Forrest City.",
      },
    ],

    featuredFacilities: [
      {
        name: "Cummins Unit",
        slug: "cummins-unit",
        type: "State Prison",
        county: "Lincoln County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Pulaski County Detention Facility",
        slug: "pulaski-county-detention-facility",
        type: "County Jail",
        county: "Pulaski County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Forrest City",
        slug: "fci-forrest-city",
        type: "Federal Prison",
        county: "St. Francis County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  mississippi: {
    id: "s-ms",
    name: "Mississippi",
    slug: "mississippi",
    abbreviation: "MS",
    facilityCount: 128,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Mississippi. Compare messaging, video, and phone providers for correctional facilities across Mississippi.",

    intro: [
      "Mississippi's correctional system is operated by the Mississippi Department of Corrections, which manages state prisons including the Mississippi State Penitentiary at Parchman in the Delta, one of the oldest and most well-known correctional institutions in the United States. The Parchman farm, as it is historically known, has operated in Sunflower County for over a century and remains central to the state prison system today. Beyond Parchman and other MDOC state facilities, Mississippi's 82 counties each operate their own jails under local sheriff oversight. The rural nature of much of the state means that many county detention centers serve small populations with limited communication infrastructure.",

      "JPay is the primary messaging and money transfer platform for Mississippi Department of Corrections state facilities. Securus and GTL provide phone and video services at state and county institutions. County jails in Mississippi each have separate provider contracts, and the service at a jail in the Gulf Coast counties of Harrison and Jackson may differ from what is available at a rural detention center in the Delta or the Pine Hills region. Federal correctional facilities near Yazoo City, which include a Bureau of Prisons campus housing multiple security levels, require CorrLinks for electronic communication.",

      "Mississippi families dealing with the state's correctional communication system often encounter the same challenge that families everywhere face: identifying which provider is correct for the specific facility without access to a single organized source. The MDOC state system, county jails across 82 counties, and the federal facilities near Yazoo City all use different platforms and publish information in different places. This directory brings facility and provider data together for Mississippi so families can find the right communication service for their specific situation and move forward without unnecessary confusion.",
    ],

    facilitiesByType: { federal: 10, state: 18, county: 90, private: 10 },

    counties: [
      "Hinds County", "Rankin County", "Madison County", "Harrison County",
      "Jackson County", "DeSoto County", "Lowndes County", "Forrest County",
      "Lee County", "Lamar County", "Jones County", "Warren County",
      "Lauderdale County", "Pearl River County", "Yazoo County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Mississippi Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Mississippi state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Mississippi county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Mississippi, including the Yazoo City complex.",
      },
    ],

    featuredFacilities: [
      {
        name: "Mississippi State Penitentiary",
        slug: "mississippi-state-penitentiary",
        type: "State Prison",
        county: "Sunflower County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Hinds County Detention Center",
        slug: "hinds-county-detention-center",
        type: "County Jail",
        county: "Hinds County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCC Yazoo City",
        slug: "fcc-yazoo-city",
        type: "Federal Prison",
        county: "Yazoo County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  kansas: {
    id: "s-ks",
    name: "Kansas",
    slug: "kansas",
    abbreviation: "KS",
    facilityCount: 108,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Kansas. Compare messaging, video, and phone providers for correctional facilities across Kansas.",

    intro: [
      "Kansas operates its state correctional system through the Kansas Department of Corrections, which manages prisons including Lansing Correctional Facility and El Dorado Correctional Facility distributed across the state. Leavenworth County holds a unique place in American corrections history: it is home to both the Kansas state prison at Lansing and the federal United States Penitentiary at Leavenworth, one of the oldest and most well-known federal prisons in the country, as well as the adjacent Fort Leavenworth military installation. Families dealing with Leavenworth-area facilities need to identify whether the situation involves a state, federal, or military institution, since each operates under entirely separate rules and providers.",

      "JPay is the primary platform for Kansas Department of Corrections state facilities, supporting messaging, money transfer, and photo sharing. Securus and GTL manage phone and video services at state institutions and county jails. The Kansas City, Kansas metropolitan area, anchored by Wyandotte and Johnson counties, is part of the broader Kansas City metro that straddles the Kansas-Missouri state line. A family dealing with a Wyandotte County facility is using a different provider system than one dealing with Jackson County just across the border in Missouri. Federal facilities in Kansas, including USP Leavenworth, require CorrLinks for electronic messaging.",

      "Kansas families navigating inmate communication for the first time often find that the state's corrections geography is more layered than expected. The coexistence of state prisons, one of the country's oldest federal penitentiaries, and county jails in the Leavenworth area specifically creates a situation where multiple types of facilities with similar names serve populations under entirely separate systems. This directory organizes Kansas facility and provider information so families can identify the correct platform quickly and avoid setting up an account that does not apply to their specific situation.",
    ],

    facilitiesByType: { federal: 10, state: 12, county: 78, private: 8 },

    counties: [
      "Johnson County", "Sedgwick County", "Shawnee County", "Wyandotte County",
      "Douglas County", "Riley County", "Leavenworth County", "Saline County",
      "Butler County", "Reno County", "Harvey County", "Crawford County",
      "Lyon County", "Ellis County", "Finney County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Kansas Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Kansas state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Kansas county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Kansas, including USP Leavenworth.",
      },
    ],

    featuredFacilities: [
      {
        name: "Lansing Correctional Facility",
        slug: "lansing-correctional-facility",
        type: "State Prison",
        county: "Leavenworth County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "USP Leavenworth",
        slug: "usp-leavenworth",
        type: "Federal Prison",
        county: "Leavenworth County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
      {
        name: "Johnson County Detention Center",
        slug: "johnson-county-detention-center",
        type: "County Jail",
        county: "Johnson County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  minnesota: {
    id: "s-mn",
    name: "Minnesota",
    slug: "minnesota",
    abbreviation: "MN",
    facilityCount: 102,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Minnesota. Compare messaging, video, and phone providers for correctional facilities across Minnesota.",

    intro: [
      "Minnesota's correctional system is managed by the Minnesota Department of Corrections, which operates state prisons at locations including MCF-Stillwater in Washington County, MCF-St. Cloud, and facilities in Faribault, Moose Lake, and other locations across the state. The Minneapolis-St. Paul metro area presents a layered detention landscape: Hennepin County, which includes Minneapolis, and Ramsey County, which includes St. Paul, each operate large county jail systems that function independently from one another and from state prisons. Federal Bureau of Prisons facilities in Minnesota include FMC Rochester, a federal medical center in Olmsted County that serves inmates with significant health needs from across the region.",

      "JPay is the primary platform for Minnesota Department of Corrections state facilities, handling messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state institutions and county jails. Hennepin County's Adult Detention Center and Ramsey County's Correctional Facility each have their own provider contracts separate from the state prison system. Federal facilities in Minnesota, particularly FMC Rochester, require CorrLinks for electronic communication under Bureau of Prisons guidelines. Families dealing with a loved one in the Twin Cities jail system should verify which county system applies before setting up any provider account.",

      "Minnesota families researching inmate communication often find that the split between two large, independently administered county systems in the metro area creates confusion that would not exist in a state with a single dominant urban jail. A family member held at Hennepin County before a state prison transfer is using a different platform than one in Ramsey County, and both differ from what applies at a state prison. This directory organizes facility and provider information for Minnesota so families can quickly identify the correct platform, understand what services are available, and get started without the back-and-forth that this multi-system landscape normally requires.",
    ],

    facilitiesByType: { federal: 8, state: 12, county: 74, private: 8 },

    counties: [
      "Hennepin County", "Ramsey County", "Dakota County", "Anoka County",
      "Washington County", "Scott County", "Olmsted County", "Stearns County",
      "St. Louis County", "Sherburne County", "Wright County", "Carver County",
      "Rice County", "Crow Wing County", "Blue Earth County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Minnesota Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Minnesota state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Minnesota county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Minnesota.",
      },
    ],

    featuredFacilities: [
      {
        name: "MCF-Stillwater",
        slug: "mcf-stillwater",
        type: "State Prison",
        county: "Washington County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Hennepin County Adult Detention Center",
        slug: "hennepin-county-adult-detention-center",
        type: "County Jail",
        county: "Hennepin County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FMC Rochester",
        slug: "fmc-rochester",
        type: "Federal Prison",
        county: "Olmsted County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  iowa: {
    id: "s-ia",
    name: "Iowa",
    slug: "iowa",
    abbreviation: "IA",
    facilityCount: 98,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Iowa. Compare messaging, video, and phone providers for correctional facilities across Iowa.",

    intro: [
      "Iowa's correctional system is managed by the Iowa Department of Corrections, which operates state prisons at facilities including the Iowa State Penitentiary in Fort Madison, the oldest operating prison west of the Mississippi River, and Anamosa State Penitentiary, a historic stone institution in Jones County. Iowa's 99 counties each operate their own detention facilities under local sheriff oversight, and the distribution of correctional facilities across a largely agricultural state means that many families are dealing with jails in small county seats rather than large urban lockups. Des Moines, served by Polk County, and Cedar Rapids, served by Linn County, operate the two largest county jail systems in the state.",

      "JPay is the standard platform for Iowa Department of Corrections state facilities, covering messaging, photo sharing, and money transfer. Securus and GTL handle phone and video services at state prisons and county jails. Iowa's county jails each operate under their own provider contracts, and the service at a Polk County or Linn County facility may differ from what is available at a smaller rural county jail elsewhere in the state. Federal Bureau of Prisons facilities serving inmates from Iowa use CorrLinks for electronic communication. Iowa has a comparatively limited federal correctional footprint within its own borders, so families dealing with a federal case should confirm the specific facility where their family member is housed, as it may be in a neighboring state.",

      "Iowa families navigating inmate communication frequently encounter the same frustration as families everywhere: the correct provider is not obvious without knowing the specific facility, and the relevant information is not available from a single source. This directory organizes facility and provider data for Iowa so families can identify the right communication platform for their specific situation, understand what services are available at the relevant facility, and start the process of staying connected without sorting through multiple county and state government websites.",
    ],

    facilitiesByType: { federal: 6, state: 12, county: 72, private: 8 },

    counties: [
      "Polk County", "Linn County", "Scott County", "Johnson County",
      "Black Hawk County", "Dubuque County", "Story County", "Pottawattamie County",
      "Woodbury County", "Dallas County", "Warren County", "Clinton County",
      "Muscatine County", "Lee County", "Cerro Gordo County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Iowa Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Iowa state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Iowa county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Iowa.",
      },
    ],

    featuredFacilities: [
      {
        name: "Iowa State Penitentiary",
        slug: "iowa-state-penitentiary",
        type: "State Prison",
        county: "Lee County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Anamosa State Penitentiary",
        slug: "anamosa-state-penitentiary",
        type: "State Prison",
        county: "Jones County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Polk County Jail",
        slug: "polk-county-jail",
        type: "County Jail",
        county: "Polk County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  maryland: {
    id: "s-md",
    name: "Maryland",
    slug: "maryland",
    abbreviation: "MD",
    facilityCount: 88,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Maryland. Compare messaging, video, and phone providers for correctional facilities across Maryland.",

    intro: [
      "Maryland's correctional system is managed by the Department of Public Safety and Correctional Services, which operates state prisons and pre-trial facilities across the state. One distinctive feature of Maryland's geography is the status of Baltimore City, which is an independent city separate from Baltimore County, each running its own detention infrastructure under separate administrations. The Baltimore City Detention Center serves the independent city population while Baltimore County operates its own detention center for the surrounding county. Suburban counties like Montgomery and Prince George's in the Washington metro area also run their own large detention systems, and a federal correctional complex in the mountains of western Maryland adds the federal tier.",

      "JPay is the primary platform for Maryland Department of Public Safety and Correctional Services state facilities, supporting messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state institutions and county facilities. Baltimore City and Baltimore County operate under separate provider contracts despite sharing a name and geographic proximity. Federal facilities in Maryland, including FCI Cumberland in Allegany County, require CorrLinks for electronic communication. Families in the Washington suburban counties should note that Maryland-side facilities are entirely separate from Virginia-side or DC facilities even when they serve the same broader metropolitan area.",

      "Maryland families seeking communication information for correctional facilities often find that the state's distinctive administrative structure creates confusion. The split between Baltimore City and Baltimore County, the concentration of state prisons in rural western and southern Maryland far from the major population centers, and the federal complex in the Allegany County mountains all contribute to a landscape where the right answer for one family is completely different from the one next door. This directory organizes Maryland facility and provider data so families can find the correct platform without having to navigate the state's fragmented administrative geography.",
    ],

    facilitiesByType: { federal: 8, state: 12, county: 60, private: 8 },

    counties: [
      "Montgomery County", "Prince George's County", "Baltimore County", "Baltimore City",
      "Anne Arundel County", "Howard County", "Frederick County", "Charles County",
      "Harford County", "Carroll County", "St. Mary's County", "Washington County",
      "Cecil County", "Calvert County", "Wicomico County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Maryland Department of Public Safety and Correctional Services state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Maryland state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Maryland county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Maryland.",
      },
    ],

    featuredFacilities: [
      {
        name: "Maryland Correctional Institution-Jessup",
        slug: "maryland-correctional-institution-jessup",
        type: "State Prison",
        county: "Howard County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Baltimore City Detention Center",
        slug: "baltimore-city-detention-center",
        type: "City Jail",
        county: "Baltimore City",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Cumberland",
        slug: "fci-cumberland",
        type: "Federal Prison",
        county: "Allegany County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  massachusetts: {
    id: "s-ma",
    name: "Massachusetts",
    slug: "massachusetts",
    abbreviation: "MA",
    facilityCount: 82,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Massachusetts. Compare messaging, video, and phone providers for correctional facilities across Massachusetts.",

    intro: [
      "Massachusetts operates a two-tier corrections structure that includes state prisons run by the Massachusetts Department of Correction and county-level facilities called Houses of Correction, which serve as the jail and short-sentence institution for each of the state's 14 counties. The House of Correction model is distinctive to Massachusetts and a small number of other New England states. It means that a family dealing with a pre-trial detainee or someone serving a sentence of less than two and a half years is dealing with a county House of Correction rather than a state DOC prison. Each House of Correction operates under the county sheriff and has separate provider arrangements from state prisons. A federal medical center in Devens adds to the state's correctional landscape.",

      "JPay is used across Massachusetts Department of Correction state prisons for messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state institutions and many county Houses of Correction. Suffolk County, which serves the Boston metro and runs the Suffolk County House of Correction on Deer Island, operates under its own provider contract. The Federal Medical Center Devens in Worcester County houses federal inmates with specialized medical needs from across the region and requires CorrLinks for electronic messaging. Families encountering the Massachusetts system for the first time are sometimes surprised to find that a pre-trial detainee in a facility called the Middlesex County House of Correction is in a county-operated institution with different provider access than a state DOC prison.",

      "Massachusetts families navigating inmate communication often find that the House of Correction terminology and the division between county and state systems create confusion about which provider applies to their situation. The 14 county systems and the state DOC system operate independently and use different platforms. This directory organizes facility and provider information for Massachusetts so families can identify the correct communication service for their specific situation, whether it involves a state prison, a county House of Correction, or a federal facility, and get started without having to research each system separately.",
    ],

    facilitiesByType: { federal: 8, state: 10, county: 56, private: 8 },

    counties: [
      "Suffolk County", "Middlesex County", "Worcester County", "Essex County",
      "Norfolk County", "Bristol County", "Hampden County", "Plymouth County",
      "Barnstable County", "Hampshire County", "Berkshire County", "Franklin County",
      "Dukes County", "Nantucket County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Massachusetts Department of Correction state prisons.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Massachusetts state prisons and county Houses of Correction.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Massachusetts county correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Massachusetts.",
      },
    ],

    featuredFacilities: [
      {
        name: "MCI-Cedar Junction",
        slug: "mci-cedar-junction",
        type: "State Prison",
        county: "Norfolk County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Suffolk County House of Correction",
        slug: "suffolk-county-house-of-correction",
        type: "County Jail",
        county: "Suffolk County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FMC Devens",
        slug: "fmc-devens",
        type: "Federal Prison",
        county: "Worcester County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  connecticut: {
    id: "s-ct",
    name: "Connecticut",
    slug: "connecticut",
    abbreviation: "CT",
    facilityCount: 78,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Connecticut. Compare messaging, video, and phone providers for correctional facilities across Connecticut.",

    intro: [
      "Connecticut operates one of the most centralized correctional systems in the country. Unlike most states, Connecticut abolished its county sheriff jail system decades ago and consolidated all detention operations under the Connecticut Department of Correction, which runs both prisons and what other states would call county jails. This means that whether someone is awaiting trial, serving a short sentence, or serving a long-term state prison sentence, they are held in a facility operated and contracted by the state DOC rather than a county government. Connecticut's 8 counties still exist as geographic divisions but have no separate jail administration. The result is a simpler provider landscape than most states, but one that families unfamiliar with Connecticut's structure sometimes misunderstand.",

      "JPay handles messaging, money transfer, and photo sharing for Connecticut Department of Correction facilities across the state. Securus and GTL provide phone and video services. Because there is no separate county jail system, the same DOC provider structure applies from facility to facility without the state-versus-county confusion that families in other states encounter. Federal facilities in Connecticut, including the Federal Correctional Institution in Danbury, operate under Bureau of Prisons guidelines and require CorrLinks for electronic communication. FCI Danbury has operated since the 1940s and is one of the more notable federal facilities in the Northeast.",

      "Connecticut families dealing with the correctional system for the first time often find it simpler to navigate than neighboring states because there is only one state system to understand rather than a state-plus-county patchwork. The main question to answer is whether a family member is in a Connecticut DOC facility or a federal facility, and those two systems are clearly distinct. This directory organizes facility and provider information for Connecticut so families can confirm which system applies, identify the correct platform, and get started with communication without unnecessary complications.",
    ],

    facilitiesByType: { federal: 6, state: 58, county: 6, private: 8 },

    counties: [
      "Fairfield County", "Hartford County", "New Haven County", "New London County",
      "Middlesex County", "Tolland County", "Windham County", "Litchfield County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Connecticut Department of Correction facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Connecticut state correctional institutions.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Connecticut correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Connecticut, including FCI Danbury.",
      },
    ],

    featuredFacilities: [
      {
        name: "Northern Correctional Institution",
        slug: "northern-correctional-institution",
        type: "State Prison",
        county: "Tolland County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Cheshire Correctional Institution",
        slug: "cheshire-correctional-institution",
        type: "State Prison",
        county: "New Haven County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "FCI Danbury",
        slug: "fci-danbury",
        type: "Federal Prison",
        county: "Fairfield County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  nebraska: {
    id: "s-ne",
    name: "Nebraska",
    slug: "nebraska",
    abbreviation: "NE",
    facilityCount: 78,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Nebraska. Compare messaging, video, and phone providers for correctional facilities across Nebraska.",

    intro: [
      "Nebraska's correctional system is operated by the Nebraska Department of Correctional Services, which manages state prisons including the Nebraska State Penitentiary in Lincoln and Tecumseh State Correctional Institution in southeastern Nebraska, as well as community corrections centers distributed across the state. Nebraska's 93 counties operate their own jail systems under local sheriff authority, though the rural nature of much of the state means that many county jails are small facilities with more limited communication options than the larger urban lockups in Omaha and Lincoln. Douglas County, which encompasses Omaha, and Lancaster County, which encompasses Lincoln, operate the two most active county detention systems in the state.",

      "JPay is the primary platform for Nebraska Department of Correctional Services state facilities, covering messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state prisons and county jails. The Douglas County Department of Corrections in Omaha and the Lancaster County Jail in Lincoln each operate under their own provider contracts separate from the state prison system. Federal Bureau of Prisons institutions serving Nebraska inmates use CorrLinks for electronic communication. Nebraska's smaller counties, particularly in the Sandhills and Panhandle regions, may have limited communication options at their detention facilities compared to the Omaha and Lincoln metro jails.",

      "Nebraska families dealing with the correctional communication system often face the same challenge as families in every mid-size state: identifying the right provider requires knowing the specific facility and facility type, and that information is not published in any single organized place. Whether the situation involves a state prison in Lincoln, a county jail in Omaha, or a federal case, this directory organizes facility and provider data for Nebraska so families can find the correct communication platform and start the process without the guesswork.",
    ],

    facilitiesByType: { federal: 6, state: 10, county: 54, private: 8 },

    counties: [
      "Douglas County", "Lancaster County", "Sarpy County", "Hall County",
      "Buffalo County", "Dodge County", "Madison County", "Lincoln County",
      "Platte County", "Cass County", "Dawson County", "Scotts Bluff County",
      "Gage County", "Adams County", "Seward County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Nebraska Department of Correctional Services state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Nebraska state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Nebraska county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Nebraska.",
      },
    ],

    featuredFacilities: [
      {
        name: "Nebraska State Penitentiary",
        slug: "nebraska-state-penitentiary",
        type: "State Prison",
        county: "Lancaster County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Tecumseh State Correctional Institution",
        slug: "tecumseh-state-correctional-institution",
        type: "State Prison",
        county: "Johnson County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Douglas County Department of Corrections",
        slug: "douglas-county-department-of-corrections",
        type: "County Jail",
        county: "Douglas County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "new-mexico": {
    id: "s-nm",
    name: "New Mexico",
    slug: "new-mexico",
    abbreviation: "NM",
    facilityCount: 78,
    region: "Southwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in New Mexico. Compare messaging, video, and phone providers for correctional facilities across New Mexico.",

    intro: [
      "New Mexico's correctional system involves the New Mexico Corrections Department, which operates state prisons across the state, a notable presence of privately operated correctional facilities contracted to house state inmates, and county detention centers run by sheriffs in each of the state's 33 counties. New Mexico has one of the higher rates of private prison use in the country, meaning some state inmates are held in facilities operated by private companies rather than the NMCD directly, which affects which communication provider is available at a specific institution. New Mexico also has jurisdictional complexity due to its large Native American population, with tribal lands and tribal law enforcement adding a layer that can affect which system oversees a given case.",

      "JPay is the primary platform for New Mexico Corrections Department state facilities, supporting messaging, money transfer, and photo sharing. Securus and GTL handle phone and video services at state and county institutions. The Bernalillo County Metropolitan Detention Center in Albuquerque, which is the largest county detention facility in the state, operates under its own provider arrangements. Federal facilities in New Mexico require CorrLinks for electronic communication under Bureau of Prisons guidelines. Families dealing with privately operated facilities should verify provider arrangements at the specific institution, as private facilities may operate under contracts that differ from standard NMCD state prisons.",

      "New Mexico families navigating inmate communication often encounter the added complexity of a system where state, county, private, tribal, and federal facilities each operate under separate rules and separate providers. This is more layers than most states, and the lack of a single organized information source makes finding accurate answers time-consuming. This directory brings facility and provider data together for New Mexico so families can identify the right communication platform for their specific situation without sorting through multiple systems that each have their own separate resources.",
    ],

    facilitiesByType: { federal: 6, state: 10, county: 48, private: 14 },

    counties: [
      "Bernalillo County", "Doña Ana County", "Santa Fe County", "Sandoval County",
      "San Juan County", "Chaves County", "McKinley County", "Otero County",
      "Eddy County", "Valencia County", "Rio Arriba County", "Taos County",
      "Lea County", "Cibola County", "Curry County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for New Mexico Corrections Department state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at New Mexico state prisons and county detention centers.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select New Mexico county jails and correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in New Mexico.",
      },
    ],

    featuredFacilities: [
      {
        name: "Penitentiary of New Mexico",
        slug: "penitentiary-of-new-mexico",
        type: "State Prison",
        county: "Santa Fe County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Bernalillo County Metropolitan Detention Center",
        slug: "bernalillo-county-metropolitan-detention-center",
        type: "County Jail",
        county: "Bernalillo County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Lea County Correctional Facility",
        slug: "lea-county-correctional-facility",
        type: "State Prison",
        county: "Lea County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  oregon: {
    id: "s-or",
    name: "Oregon",
    slug: "oregon",
    abbreviation: "OR",
    facilityCount: 78,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in Oregon. Compare messaging, video, and phone providers for correctional facilities across Oregon.",

    intro: [
      "Oregon's correctional system is managed by the Oregon Department of Corrections, which operates state prisons at locations including the Oregon State Penitentiary in Salem, Coffee Creek Correctional Facility in Wilsonville, and facilities in the eastern part of the state. Oregon's geography divides sharply between the densely populated Willamette Valley, which runs from Portland south through Salem and Eugene, and the vast rural expanse east of the Cascades. Multnomah County, which includes Portland, operates the state's largest county jail system. Federal Bureau of Prisons presence in Oregon includes FCI Sheridan in rural Yamhill County, one of the major federal correctional facilities on the West Coast.",

      "JPay is the primary platform for Oregon Department of Corrections state facilities, handling messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state prisons and county jails. Multnomah County's jail facilities operate under their own provider contracts separate from the state prison system. FCI Sheridan, which sits between Portland and the Oregon Coast in Yamhill County, requires CorrLinks for electronic communication under Bureau of Prisons guidelines. The geographic divide in Oregon means that rural county jails in eastern Oregon sometimes operate with fewer resources and more limited communication options than facilities in the Willamette Valley.",

      "Oregon families trying to find communication information for a specific facility often find that the split between the western urban corridor and rural eastern Oregon creates real differences in what services are available and how to access them. This directory organizes facility and provider data for Oregon so families can identify the correct communication platform for their specific situation, understand what services are available at the relevant facility, and get started without working through the fragmented resources that normally make this process more difficult than it needs to be.",
    ],

    facilitiesByType: { federal: 8, state: 14, county: 48, private: 8 },

    counties: [
      "Multnomah County", "Washington County", "Clackamas County", "Lane County",
      "Marion County", "Jackson County", "Linn County", "Deschutes County",
      "Douglas County", "Yamhill County", "Polk County", "Benton County",
      "Klamath County", "Coos County", "Josephine County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Oregon Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Oregon state prisons and county correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Oregon county jails and detention centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in Oregon, including FCI Sheridan.",
      },
    ],

    featuredFacilities: [
      {
        name: "Oregon State Penitentiary",
        slug: "oregon-state-penitentiary",
        type: "State Prison",
        county: "Marion County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Sheridan",
        slug: "fci-sheridan",
        type: "Federal Prison",
        county: "Yamhill County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
      {
        name: "Multnomah County Detention Center",
        slug: "multnomah-county-detention-center",
        type: "County Jail",
        county: "Multnomah County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  nevada: {
    id: "s-nv",
    name: "Nevada",
    slug: "nevada",
    abbreviation: "NV",
    facilityCount: 68,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in Nevada. Compare messaging, video, and phone providers for correctional facilities across Nevada.",

    intro: [
      "Nevada's correctional landscape is dominated by Clark County, which encompasses Las Vegas and contains both Nevada Department of Corrections facilities in the southern part of the state and the Clark County Detention Center, one of the busiest urban jail facilities in the western United States. The concentration of Nevada's population in the Las Vegas metro means that Clark County accounts for a disproportionately large share of the state's total corrections activity compared to the rest of the state. Washoe County, which includes Reno in northern Nevada, operates the second-largest county detention system. The Nevada Department of Corrections manages state prisons at several locations including facilities in Ely, Carson City, and the Las Vegas area.",

      "JPay is the primary platform for Nevada Department of Corrections state facilities, covering messaging, photo sharing, and money transfer. Securus and GTL handle phone and video services at state prisons and county jails. The Clark County Detention Center, which processes a very high volume of bookings due to Las Vegas's population and tourism activity, operates under its own provider contract. Federal Bureau of Prisons facilities serving inmates from Nevada require CorrLinks for electronic communication. The high volume of activity through the Clark County system means that families in the Las Vegas area may encounter faster-changing facility assignments and provider setups than is typical in smaller jurisdictions.",

      "Nevada families dealing with the correctional system often find that the scale of the Clark County jail operation makes the communication process more complex than expected. The sheer volume of people processed through the Las Vegas detention system means that provider setups and visiting rules may not always be consistently documented in public-facing resources. This directory organizes facility and provider information for Nevada so families can find the correct communication platform, understand what services are available at the specific facility, and start the process of staying connected without having to work through the volume and complexity of the Clark County system alone.",
    ],

    facilitiesByType: { federal: 6, state: 14, county: 40, private: 8 },

    counties: [
      "Clark County", "Washoe County", "Carson City", "Lyon County",
      "Douglas County", "Elko County", "Nye County", "Churchill County",
      "Lander County", "Humboldt County", "White Pine County", "Pershing County",
      "Mineral County", "Esmeralda County", "Storey County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Nevada Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Nevada state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Nevada county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Nevada.",
      },
    ],

    featuredFacilities: [
      {
        name: "High Desert State Prison",
        slug: "high-desert-state-prison",
        type: "State Prison",
        county: "Clark County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Clark County Detention Center",
        slug: "clark-county-detention-center",
        type: "County Jail",
        county: "Clark County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Ely State Prison",
        slug: "ely-state-prison",
        type: "State Prison",
        county: "White Pine County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "west-virginia": {
    id: "s-wv",
    name: "West Virginia",
    slug: "west-virginia",
    abbreviation: "WV",
    facilityCount: 68,
    region: "Southeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in West Virginia. Compare messaging, video, and phone providers for correctional facilities across West Virginia.",

    intro: [
      "West Virginia's correctional system has a structure that sets it apart from most states. Rather than individual county jails operated by local sheriffs, West Virginia uses a system of regional jails operated by the West Virginia Regional Jail and Correctional Facility Authority, a state agency. This means county sheriffs bring inmates to regionally operated facilities rather than maintaining separate county lockups. The West Virginia Division of Corrections and Rehabilitation operates state prisons separately under the same department. Federal Bureau of Prisons facilities in the state, including the Hazelton complex in Preston County and FCI Gilmer in Gilmer County, represent a significant federal correctional presence for a state of West Virginia's size.",

      "JPay is the primary platform for West Virginia Division of Corrections and Rehabilitation state prisons, supporting messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state prisons and regional jail facilities. The regional jail system, which operates facilities serving multiple counties each, contracts with providers under the state authority rather than on a county-by-county basis. Federal prisons in West Virginia, particularly the Hazelton complex in Preston County, require CorrLinks for electronic communication under Bureau of Prisons guidelines. The Hazelton complex includes a federal penitentiary, a federal correctional institution, and a prison camp on the same grounds in the northern panhandle region.",

      "West Virginia families dealing with the state's correctional system often find that the regional jail structure creates a different kind of confusion from typical county jail systems. When a loved one is held at a regional jail, the facility serves multiple counties and may not be located in the same county as the arrest, which leads families to search for communication options at the wrong location. This directory organizes facility and provider information for West Virginia so families can identify the correct platform for state prisons, regional jails, or federal facilities and start the communication process without working through the state's distinctive administrative structure on their own.",
    ],

    facilitiesByType: { federal: 10, state: 10, county: 40, private: 8 },

    counties: [
      "Kanawha County", "Cabell County", "Berkeley County", "Monongalia County",
      "Wood County", "Raleigh County", "Wayne County", "Jefferson County",
      "Mercer County", "Putnam County", "Marion County", "Logan County",
      "Mingo County", "McDowell County", "Preston County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for West Virginia Division of Corrections and Rehabilitation state prisons.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at West Virginia state prisons and regional jail facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select West Virginia regional jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in West Virginia, including the Hazelton complex.",
      },
    ],

    featuredFacilities: [
      {
        name: "Mount Olive Correctional Complex",
        slug: "mount-olive-correctional-complex",
        type: "State Prison",
        county: "Fayette County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Hazelton",
        slug: "fci-hazelton",
        type: "Federal Prison",
        county: "Preston County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
      {
        name: "Western Regional Jail",
        slug: "western-regional-jail",
        type: "Regional Jail",
        county: "Cabell County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  idaho: {
    id: "s-id",
    name: "Idaho",
    slug: "idaho",
    abbreviation: "ID",
    facilityCount: 68,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in Idaho. Compare messaging, video, and phone providers for correctional facilities across Idaho.",

    intro: [
      "Idaho's correctional system is run by the Idaho Department of Correction, which operates state prisons anchored in the Boise metro area including the Idaho Maximum Security Institution and Idaho State Correctional Center in Ada County. The state is experiencing one of the fastest population growth rates in the country, and the Boise and Nampa corridor now accounts for a significant share of Idaho's corrections activity. At the same time, rural counties across central, eastern, and northern Idaho maintain their own county jail systems in small communities that can be hours from the nearest major city. The contrast between the urban Treasure Valley and the remote agricultural and forested regions of the state creates a wide range of communication options across facilities.",

      "JPay is the primary platform for Idaho Department of Correction state facilities, supporting messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at state prisons and county jails. Ada County Jail in Boise, which processes the largest volume of the state's urban bookings, operates under its own provider contract separate from the state system. Federal Bureau of Prisons facilities serving Idaho inmates use CorrLinks for electronic communication. Idaho's rural county jails, particularly in the more remote areas of the state, may operate with more limited provider options than facilities in the Treasure Valley metro.",

      "Idaho families researching inmate communication often encounter the same challenge as families in most western states: the relevant facility may be in a rural county far from where the family lives, the information is not published in one organized place, and the right provider for one facility differs from the right provider for the next. This directory organizes Idaho facility and provider data so families can identify the correct communication platform for their specific situation and get started without working through disconnected sources.",
    ],

    facilitiesByType: { federal: 4, state: 10, county: 48, private: 6 },

    counties: [
      "Ada County", "Canyon County", "Kootenai County", "Bonneville County",
      "Bannock County", "Twin Falls County", "Cassia County", "Nez Perce County",
      "Bingham County", "Jefferson County", "Madison County", "Blaine County",
      "Latah County", "Power County", "Elmore County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Idaho Department of Correction state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Idaho state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Idaho county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Idaho.",
      },
    ],

    featuredFacilities: [
      {
        name: "Idaho Maximum Security Institution",
        slug: "idaho-maximum-security-institution",
        type: "State Prison",
        county: "Ada County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Idaho State Correctional Center",
        slug: "idaho-state-correctional-center",
        type: "State Prison",
        county: "Ada County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Ada County Jail",
        slug: "ada-county-jail",
        type: "County Jail",
        county: "Ada County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  utah: {
    id: "s-ut",
    name: "Utah",
    slug: "utah",
    abbreviation: "UT",
    facilityCount: 68,
    region: "Southwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Utah. Compare messaging, video, and phone providers for correctional facilities across Utah.",

    intro: [
      "Utah's correctional system is operated by the Utah Department of Corrections, which manages state prisons including the Utah State Correctional Facility in Salt Lake City, which opened in 2022 and replaced the older campus in Draper. Utah also makes notable use of private correctional contractors to house state inmates at facilities in various locations. The Wasatch Front, which runs from Ogden through Salt Lake City to Provo and contains roughly 80 percent of Utah's population, concentrates most of the state's corrections activity. Salt Lake County and Utah County together account for the bulk of county jail bookings, while smaller rural counties from the Colorado Plateau to the Great Basin operate much smaller detention systems.",

      "JPay is the primary platform for Utah Department of Corrections state facilities, covering messaging, photo sharing, and money transfer. Securus and GTL provide phone and video services at state prisons and county jails. Salt Lake County operates a large metro jail with its own provider contract separate from the state prison system. Privately operated facilities holding state inmates may have different provider setups than directly state-operated prisons. Federal Bureau of Prisons facilities serving Utah inmates require CorrLinks for electronic communication. Families dealing with a private facility should verify which provider is contracted for that specific institution.",

      "Utah families researching inmate communication often find that the presence of private correctional facilities adds an extra layer of uncertainty when identifying the right provider. Some state inmates are housed in private facilities, sometimes in locations outside the major metro areas, which means a family cannot always assume the provider they know from one situation applies to the next. This directory organizes facility and provider information for Utah so families can find the correct platform and understand what communication options are available for their specific situation.",
    ],

    facilitiesByType: { federal: 4, state: 10, county: 46, private: 8 },

    counties: [
      "Salt Lake County", "Utah County", "Davis County", "Weber County",
      "Washington County", "Cache County", "Iron County", "Tooele County",
      "Uintah County", "Box Elder County", "Sanpete County", "Carbon County",
      "Grand County", "San Juan County", "Millard County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Utah Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Utah state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Utah county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Utah.",
      },
    ],

    featuredFacilities: [
      {
        name: "Utah State Correctional Facility",
        slug: "utah-state-correctional-facility",
        type: "State Prison",
        county: "Salt Lake County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Central Utah Correctional Facility",
        slug: "central-utah-correctional-facility",
        type: "State Prison",
        county: "Juab County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Salt Lake County Metro Jail",
        slug: "salt-lake-county-metro-jail",
        type: "County Jail",
        county: "Salt Lake County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  montana: {
    id: "s-mt",
    name: "Montana",
    slug: "montana",
    abbreviation: "MT",
    facilityCount: 42,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in Montana. Compare messaging, video, and phone providers for correctional facilities across Montana.",

    intro: [
      "Montana is the fourth-largest state by land area but has one of the smallest populations in the country, and its correctional system reflects that combination. The Montana Department of Corrections operates Montana State Prison in Deer Lodge, a historic institution in Powell County that has served as the state's primary prison for over a century, along with additional facilities and a prerelease center network distributed across the state. Montana's 56 counties each maintain their own county jail, and the vast distances between communities mean that county jails in rural areas like eastern Montana or the Hi-Line along the Canadian border are isolated facilities serving enormous geographic regions with very small staff and inmate populations.",

      "JPay is the primary platform for Montana Department of Corrections state facilities, supporting messaging, photo sharing, and money transfer. Securus and GTL provide phone and video services at state institutions and county jails. Montana's county jails vary significantly in the communication services they offer: larger facilities in Yellowstone County and Cascade County support a range of options, while some smaller rural county jails may have more limited digital communication infrastructure. Federal Bureau of Prisons facilities serving Montana inmates use CorrLinks for electronic communication.",

      "Montana families navigating inmate communication often face the challenge that rural jail staff have limited time to answer questions about provider setup, and the relevant information is not reliably published online. The combination of Montana's geographic isolation and the small-scale nature of many county jails means that getting accurate communication information for a specific facility can require more effort than in a larger state. This directory organizes facility and provider data for Montana so families can find what they need without having to track down information through understaffed remote facilities.",
    ],

    facilitiesByType: { federal: 4, state: 6, county: 28, private: 4 },

    counties: [
      "Cascade County", "Yellowstone County", "Missoula County", "Lewis and Clark County",
      "Gallatin County", "Flathead County", "Silver Bow County", "Lake County",
      "Ravalli County", "Hill County", "Glacier County", "Richland County",
      "Roosevelt County", "Sanders County", "Fergus County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Montana Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Montana state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Montana county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Montana.",
      },
    ],

    featuredFacilities: [
      {
        name: "Montana State Prison",
        slug: "montana-state-prison",
        type: "State Prison",
        county: "Powell County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Yellowstone County Detention Facility",
        slug: "yellowstone-county-detention-facility",
        type: "County Jail",
        county: "Yellowstone County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Cascade County Regional Correctional Facility",
        slug: "cascade-county-regional-correctional-facility",
        type: "County Jail",
        county: "Cascade County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "south-dakota": {
    id: "s-sd",
    name: "South Dakota",
    slug: "south-dakota",
    abbreviation: "SD",
    facilityCount: 42,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in South Dakota. Compare messaging, video, and phone providers for correctional facilities across South Dakota.",

    intro: [
      "South Dakota's correctional system involves the South Dakota Department of Corrections, which runs state prisons in Sioux Falls and Springfield, and county jails operated by sheriffs across the state's 66 counties. South Dakota has one of the highest per-capita Native American incarcerated populations of any state, with tribal reservations including Pine Ridge, Rosebud, Standing Rock, and Cheyenne River each contributing to a corrections landscape that involves both state and tribal jurisdictions. Tribal courts and tribal law enforcement on reservation lands operate under separate authority from the state system, which affects which correctional facility handles a given case. South Dakota also has a federal Bureau of Prisons facility, FCI Yankton, which serves inmates from across the northern Great Plains region.",

      "JPay is the primary platform for South Dakota Department of Corrections state facilities, covering messaging, money transfer, and photo sharing. Securus and GTL handle phone and video services at state prisons and county jails. Minnehaha County in Sioux Falls and Pennington County in Rapid City operate the two largest county jail systems. FCI Yankton in Yankton County requires CorrLinks for electronic messaging under Bureau of Prisons guidelines. Families dealing with a case that involves tribal jurisdiction should verify whether their family member is in a tribal correctional facility, a state facility, or a federal facility, as each system uses different platforms.",

      "South Dakota families researching inmate communication face a layer of complexity that families in most other states do not encounter: the question of which jurisdiction applied to the case can directly determine which system and which provider are relevant. State and tribal cases are handled differently, and the federal system adds a third tier. This directory organizes facility and provider information for South Dakota so families can identify the right communication platform and start the process without having to sort through the jurisdictional complexity on their own.",
    ],

    facilitiesByType: { federal: 4, state: 6, county: 28, private: 4 },

    counties: [
      "Minnehaha County", "Pennington County", "Brown County", "Codington County",
      "Lawrence County", "Meade County", "Beadle County", "Lincoln County",
      "Hughes County", "Brookings County", "Roberts County", "Davison County",
      "Yankton County", "Butte County", "Oglala Lakota County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for South Dakota Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at South Dakota state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select South Dakota county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in South Dakota, including FCI Yankton.",
      },
    ],

    featuredFacilities: [
      {
        name: "South Dakota State Penitentiary",
        slug: "south-dakota-state-penitentiary",
        type: "State Prison",
        county: "Minnehaha County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "FCI Yankton",
        slug: "fci-yankton",
        type: "Federal Prison",
        county: "Yankton County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
      {
        name: "Pennington County Jail",
        slug: "pennington-county-jail",
        type: "County Jail",
        county: "Pennington County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  maine: {
    id: "s-me",
    name: "Maine",
    slug: "maine",
    abbreviation: "ME",
    facilityCount: 38,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Maine. Compare messaging, video, and phone providers for correctional facilities across Maine.",

    intro: [
      "Maine operates one of the smaller correctional systems in the country through the Maine Department of Corrections, which manages state prisons including the Maine State Prison in Warren on the mid-coast and several correctional centers distributed across the state. Maine's 16 counties each operate their own county jail under local sheriff oversight, and the state's geography, which ranges from the developed southern tier around Portland to the vast and sparsely populated northern Aroostook County, means that some county jails serve enormous geographic areas with small populations. The state's rural character and limited federal correctional presence make it one of the more straightforward systems to navigate once the right facility has been identified.",

      "JPay is the standard platform for Maine Department of Corrections state facilities, covering messaging, photo sharing, and money transfer. Securus and GTL provide phone and video services at state prisons and county jails. Cumberland County, which includes Portland and operates one of the state's larger county jails, has its own provider arrangements. Federal Bureau of Prisons cases involving Maine residents are typically housed at facilities in neighboring states, and those federal inmates communicate through CorrLinks. Maine's county jails in northern Aroostook and Washington counties may have more limited communication options than facilities in the southern part of the state.",

      "Maine families dealing with the state's correctional system generally find it less complex than most, given the relatively small scale and limited number of facility types. The main challenge is identifying whether a situation involves the state prison system, a county jail, or a federal institution, and then finding the right provider for that specific facility. This directory brings facility and provider information together for Maine so families can find the correct communication platform quickly and move forward without sorting through multiple separate sources.",
    ],

    facilitiesByType: { federal: 4, state: 4, county: 26, private: 4 },

    counties: [
      "Cumberland County", "York County", "Penobscot County", "Kennebec County",
      "Aroostook County", "Androscoggin County", "Hancock County", "Oxford County",
      "Somerset County", "Washington County", "Waldo County", "Sagadahoc County",
      "Franklin County", "Knox County", "Piscataquis County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Maine Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Maine state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Maine county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Maine.",
      },
    ],

    featuredFacilities: [
      {
        name: "Maine State Prison",
        slug: "maine-state-prison",
        type: "State Prison",
        county: "Knox County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Cumberland County Jail",
        slug: "cumberland-county-jail",
        type: "County Jail",
        county: "Cumberland County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Penobscot County Jail",
        slug: "penobscot-county-jail",
        type: "County Jail",
        county: "Penobscot County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  alaska: {
    id: "s-ak",
    name: "Alaska",
    slug: "alaska",
    abbreviation: "AK",
    facilityCount: 32,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in Alaska. Compare messaging, video, and phone providers for correctional facilities across Alaska.",

    intro: [
      "Alaska's correctional system presents challenges unlike any other state. The Alaska Department of Corrections operates prisons and correctional centers primarily in the Anchorage area and in Fairbanks, but the state's geography means that Alaska Native communities in remote villages are often hundreds of miles from the nearest road, let alone a correctional facility. Alaska uses boroughs and census-designated areas instead of counties, and many of these regions have no permanent road connection to the rest of the state. The Anchorage area handles the majority of the state's corrections activity, with Goose Creek Correctional Center in the Matanuska-Susitna Borough and the Anchorage Correctional Complex serving the largest populations.",

      "JPay is the primary platform for Alaska Department of Corrections state facilities, supporting messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at correctional facilities across the state. One aspect of Alaska's correctional system that families sometimes do not expect is that due to capacity constraints, the Alaska DOC has historically housed some state inmates at private correctional facilities on the US mainland. A family in Anchorage trying to reach a loved one may find that the person is being held in Arizona or another mainland state rather than in Alaska, which changes which provider and which account setup applies entirely.",

      "Alaska families navigating inmate communication face a combination of challenges that does not exist anywhere else: extreme geographic distances within the state, the real possibility that their family member is being held in an out-of-state mainland facility, and a correctional system that serves both urban Anchorage residents and remote Alaska Native communities simultaneously. This directory provides facility and provider information for Alaska so families can identify the correct communication setup regardless of whether their family member is in an Alaska state facility or a mainland private institution.",
    ],

    facilitiesByType: { federal: 4, state: 8, county: 16, private: 4 },

    counties: [
      "Anchorage Municipality", "Fairbanks North Star Borough", "Matanuska-Susitna Borough", "Kenai Peninsula Borough",
      "Juneau City and Borough", "Ketchikan Gateway Borough", "Bethel Census Area", "Nome Census Area",
      "Kodiak Island Borough", "Sitka City and Borough", "Denali Borough", "Northwest Arctic Borough",
      "Yukon-Koyukuk Census Area", "Wade Hampton Census Area", "Bristol Bay Borough",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Alaska Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Alaska state correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Alaska correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Alaska.",
      },
    ],

    featuredFacilities: [
      {
        name: "Goose Creek Correctional Center",
        slug: "goose-creek-correctional-center",
        type: "State Prison",
        county: "Matanuska-Susitna Borough",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Spring Creek Correctional Center",
        slug: "spring-creek-correctional-center",
        type: "State Prison",
        county: "Kenai Peninsula Borough",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Anchorage Correctional Complex",
        slug: "anchorage-correctional-complex",
        type: "State Jail",
        county: "Anchorage Municipality",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "north-dakota": {
    id: "s-nd",
    name: "North Dakota",
    slug: "north-dakota",
    abbreviation: "ND",
    facilityCount: 32,
    region: "Midwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in North Dakota. Compare messaging, video, and phone providers for correctional facilities across North Dakota.",

    intro: [
      "North Dakota operates a small correctional system through the North Dakota Department of Corrections and Rehabilitation, which manages the North Dakota State Penitentiary in Bismarck and the James River Correctional Center in Jamestown. County jails in each of North Dakota's 53 counties serve their local populations, ranging from the growing Fargo metro area in the east to the Bakken oil patch communities in the western part of the state. The oil boom that transformed western North Dakota over the past two decades brought significant population growth to areas like Williams and Mountrail counties, which had correctional infrastructure originally designed for much smaller communities. North Dakota also has a substantial Native American population, with Standing Rock, Turtle Mountain, Fort Berthold, and other reservations each involving their own jurisdictional considerations.",

      "JPay is the primary platform for North Dakota Department of Corrections and Rehabilitation state facilities, covering messaging, photo sharing, and money transfer. Securus and GTL provide phone and video services at state prisons and county jails. Cass County, which includes Fargo and is the most populous county in the state, operates the largest county jail system. Burleigh County, which includes the capital Bismarck, operates the second largest. Federal Bureau of Prisons cases from North Dakota are typically housed at facilities in neighboring states, with those inmates communicating through CorrLinks.",

      "North Dakota families navigating inmate communication face two common challenges: the rural nature of the state means correctional facilities are sometimes far from where families are located, and the jurisdictional complexity involving tribal courts and tribal detention on reservation lands adds a layer that families unfamiliar with the system may not anticipate. This directory organizes facility and provider information for North Dakota so families can identify the right communication platform quickly and get started without having to work through the jurisdictional and geographic complexity that the state's corrections landscape presents.",
    ],

    facilitiesByType: { federal: 2, state: 4, county: 22, private: 4 },

    counties: [
      "Cass County", "Burleigh County", "Ward County", "Grand Forks County",
      "Morton County", "Stark County", "Richland County", "Williams County",
      "Mountrail County", "McKenzie County", "McLean County", "Rolette County",
      "Sioux County", "Dunn County", "Divide County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for North Dakota Department of Corrections and Rehabilitation state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at North Dakota state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select North Dakota county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving North Dakota.",
      },
    ],

    featuredFacilities: [
      {
        name: "North Dakota State Penitentiary",
        slug: "north-dakota-state-penitentiary",
        type: "State Prison",
        county: "Burleigh County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "James River Correctional Center",
        slug: "james-river-correctional-center",
        type: "State Prison",
        county: "Stutsman County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Cass County Jail",
        slug: "cass-county-jail",
        type: "County Jail",
        county: "Cass County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  delaware: {
    id: "s-de",
    name: "Delaware",
    slug: "delaware",
    abbreviation: "DE",
    facilityCount: 28,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Delaware. Compare messaging, video, and phone providers for correctional facilities across Delaware.",

    intro: [
      "Delaware is one of the few states in the country with a fully unified correctional system. The Delaware Department of Correction operates both prisons and what other states call county jails, meaning there is no separate county jail layer to navigate. Delaware has only three counties, New Castle, Kent, and Sussex, and none of them maintain their own detention facilities. Every person in Delaware state custody, whether awaiting trial or serving a sentence, is held in a facility run directly by the Delaware DOC. This structure makes Delaware's corrections system considerably more straightforward than most states, with all state custody matters flowing through one administrative system.",

      "JPay is the primary platform for Delaware Department of Correction facilities, covering messaging, money transfer, and photo sharing across the state system. Securus and GTL provide phone and video services at Delaware DOC facilities. Because there is no separate county jail system, families do not need to determine which level of government operates the relevant facility. Federal Bureau of Prisons cases involving Delaware residents are typically housed at federal facilities in neighboring Pennsylvania or New Jersey, and those inmates communicate through CorrLinks. The main question for Delaware families is simply whether a family member is in a state DOC facility or a federal facility.",

      "Delaware's unified correctional structure means that families have fewer systems to understand than in almost any other state. The practical challenge is identifying which specific Delaware DOC facility holds their family member, since the state operates several institutions serving different populations and security levels. This directory provides facility and provider information for Delaware so families can identify the correct institution and confirm the right communication setup without having to navigate the multi-tier complexity that exists in larger states.",
    ],

    facilitiesByType: { federal: 2, state: 16, county: 6, private: 4 },

    counties: [
      "New Castle County", "Kent County", "Sussex County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Delaware Department of Correction facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Delaware state correctional institutions.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Delaware correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Delaware.",
      },
    ],

    featuredFacilities: [
      {
        name: "James T. Vaughn Correctional Center",
        slug: "james-t-vaughn-correctional-center",
        type: "State Prison",
        county: "Kent County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Howard R. Young Correctional Institution",
        slug: "howard-r-young-correctional-institution",
        type: "State Prison",
        county: "New Castle County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Sussex Correctional Institution",
        slug: "sussex-correctional-institution",
        type: "State Prison",
        county: "Sussex County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "new-hampshire": {
    id: "s-nh",
    name: "New Hampshire",
    slug: "new-hampshire",
    abbreviation: "NH",
    facilityCount: 28,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in New Hampshire. Compare messaging, video, and phone providers for correctional facilities across New Hampshire.",

    intro: [
      "New Hampshire operates a correctional system that includes both state prisons under the New Hampshire Department of Corrections and county jails run by sheriffs in each of the state's 10 counties. This differs from some of its New England neighbors that have consolidated detention under state control. The NHDOC manages the New Hampshire State Prison for Men and the New Hampshire State Prison for Women, both located in Concord, the state capital. County jails in New Hampshire range from the comparatively larger Hillsborough County Department of Corrections, which serves the Manchester and Nashua metro areas, to smaller facilities in the more rural northern and western counties. New Hampshire's compact geography means that families are rarely far from the relevant facility.",

      "JPay is the standard platform for New Hampshire Department of Corrections state facilities, supporting messaging, photo sharing, and money transfer. Securus and GTL handle phone and video services at state prisons and county jails. County jails in New Hampshire each operate under their own provider contracts, and the platform serving Hillsborough County may differ from what is used in Coos County to the north. Federal Bureau of Prisons cases involving New Hampshire residents are typically housed at facilities in other New England states, with those inmates communicating through CorrLinks.",

      "New Hampshire families navigating inmate communication generally find the system less complicated than larger states, given the small geographic area and limited number of facilities. The primary task is confirming whether a family member is in a state prison, a county jail, or a federal facility, and then identifying which provider applies to that specific institution. This directory organizes facility and provider information for New Hampshire so families can find the right communication platform quickly without sorting through multiple independent sources.",
    ],

    facilitiesByType: { federal: 2, state: 4, county: 18, private: 4 },

    counties: [
      "Hillsborough County", "Rockingham County", "Merrimack County", "Strafford County",
      "Sullivan County", "Cheshire County", "Carroll County", "Grafton County",
      "Belknap County", "Coos County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for New Hampshire Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at New Hampshire state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select New Hampshire county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving New Hampshire.",
      },
    ],

    featuredFacilities: [
      {
        name: "New Hampshire State Prison for Men",
        slug: "new-hampshire-state-prison-for-men",
        type: "State Prison",
        county: "Merrimack County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Hillsborough County Department of Corrections",
        slug: "hillsborough-county-department-of-corrections",
        type: "County Jail",
        county: "Hillsborough County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Strafford County House of Corrections",
        slug: "strafford-county-house-of-corrections",
        type: "County Jail",
        county: "Strafford County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  "rhode-island": {
    id: "s-ri",
    name: "Rhode Island",
    slug: "rhode-island",
    abbreviation: "RI",
    facilityCount: 28,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Rhode Island. Compare messaging, video, and phone providers for correctional facilities across Rhode Island.",

    intro: [
      "Rhode Island has one of the most centralized correctional systems in the United States. The Rhode Island Department of Corrections operates the Adult Correctional Institutions, a campus in Cranston that serves as the state's near-complete corrections infrastructure. The ACI campus houses maximum security, medium security, minimum security, a women's facility, and an intake and detention unit, all within a single complex. Rhode Island abolished its county jail system decades ago, and the state's five counties, Providence, Kent, Bristol, Newport, and Washington, have no independent detention role. Virtually every person in Rhode Island state custody passes through or is held at the Cranston campus.",

      "JPay is the primary platform for Rhode Island Department of Corrections facilities at the ACI, supporting messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at the complex. Because the ACI campus is a consolidated facility, families dealing with any Rhode Island state case are dealing with a single administrative system rather than a fragmented state-and-county patchwork. Federal Bureau of Prisons cases involving Rhode Island residents are housed at federal facilities in Connecticut, Massachusetts, or other neighboring states, and those inmates use CorrLinks for electronic communication.",

      "Rhode Island families have the advantage of dealing with one of the simplest state correctional administrative structures in the country. When a family member is in Rhode Island state custody, the ACI campus in Cranston is the relevant facility regardless of which county the case originated in. The main questions are which unit within the ACI complex applies and what provider access is available at that security level. This directory provides facility and provider information for Rhode Island so families can confirm the correct communication setup and get started with the process.",
    ],

    facilitiesByType: { federal: 2, state: 18, county: 4, private: 4 },

    counties: [
      "Providence County", "Kent County", "Bristol County", "Newport County",
      "Washington County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Rhode Island Department of Corrections facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Rhode Island Adult Correctional Institutions facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Rhode Island correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Rhode Island.",
      },
    ],

    featuredFacilities: [
      {
        name: "ACI Maximum Security",
        slug: "aci-maximum-security",
        type: "State Prison",
        county: "Providence County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "ACI Medium Security",
        slug: "aci-medium-security",
        type: "State Prison",
        county: "Providence County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "ACI Intake Service Center",
        slug: "aci-intake-service-center",
        type: "State Jail",
        county: "Providence County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  wyoming: {
    id: "s-wy",
    name: "Wyoming",
    slug: "wyoming",
    abbreviation: "WY",
    facilityCount: 28,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in Wyoming. Compare messaging, video, and phone providers for correctional facilities across Wyoming.",

    intro: [
      "Wyoming is the least populous state in the United States, and its correctional system is scaled accordingly. The Wyoming Department of Corrections operates the Wyoming State Penitentiary in Rawlins and the Wyoming Medium Correctional Institution in Torrington, along with a women's correctional facility in Lusk and a minimum security camp. Wyoming's 23 counties each maintain their own county jail under local sheriff oversight, and the wide geographic spread of the state means that facilities in the Powder River Basin and the Big Horn Basin serve communities separated by hours of driving across high-altitude terrain. Laramie County, which includes Cheyenne, operates the largest county detention system in the state.",

      "JPay is the primary platform for Wyoming Department of Corrections state facilities, supporting messaging, money transfer, and photo sharing. Securus and GTL handle phone and video services at state prisons and county jails. County jails in Wyoming each operate under separate provider contracts, and the platform serving the Laramie County Detention Center in Cheyenne may differ from what is available at a smaller county jail in Sheridan or Campbell County. Federal Bureau of Prisons cases from Wyoming are typically housed at facilities in neighboring states, with those inmates communicating through CorrLinks. Wyoming's Wind River Indian Reservation, home to both the Eastern Shoshone and Northern Arapaho tribes, adds a tribal jurisdiction layer in Fremont County.",

      "Wyoming families dealing with inmate communication face the challenge common to sparsely populated western states: facilities are spread across a large geographic area with significant distances between them, and the relevant information for each facility is not organized in one place. Whether the situation involves a state prison in Rawlins, a county jail in Cheyenne or Casper, or a federal case, this directory organizes facility and provider data for Wyoming so families can identify the right communication platform and start the process without additional complications.",
    ],

    facilitiesByType: { federal: 2, state: 4, county: 18, private: 4 },

    counties: [
      "Laramie County", "Natrona County", "Albany County", "Fremont County",
      "Sweetwater County", "Campbell County", "Teton County", "Sheridan County",
      "Carbon County", "Sublette County", "Park County", "Platte County",
      "Lincoln County", "Big Horn County", "Hot Springs County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Wyoming Department of Corrections state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Wyoming state prisons and county detention facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Wyoming county jails and correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Wyoming.",
      },
    ],

    featuredFacilities: [
      {
        name: "Wyoming State Penitentiary",
        slug: "wyoming-state-penitentiary",
        type: "State Prison",
        county: "Carbon County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Wyoming Medium Correctional Institution",
        slug: "wyoming-medium-correctional-institution",
        type: "State Prison",
        county: "Goshen County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Laramie County Detention Center",
        slug: "laramie-county-detention-center",
        type: "County Jail",
        county: "Laramie County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  hawaii: {
    id: "s-hi",
    name: "Hawaii",
    slug: "hawaii",
    abbreviation: "HI",
    facilityCount: 22,
    region: "West",
    hasDetailPage: true,

    description: "Find prisons and communication options in Hawaii. Compare messaging, video, and phone providers for correctional facilities across Hawaii.",

    intro: [
      "Hawaii's correctional system presents a challenge that no other state's families face: because the islands lack sufficient capacity to house all state inmates locally, the Hawaii Department of Public Safety has historically contracted with private correctional facilities on the US mainland to hold some state inmates. A family in Honolulu may be trying to communicate with a loved one who is physically housed at a CoreCivic facility in Arizona or another mainland state, thousands of miles away. For those families, the provider setup, visiting rules, and communication options are tied to the mainland facility rather than to any Hawaii state institution. Locally, the main state correctional facilities are concentrated on Oahu, with community correctional centers on Maui, Hawaii Island, and Kauai serving the outer islands.",

      "JPay is the primary platform for Hawaii Department of Public Safety state facilities, supporting messaging, money transfer, and photo sharing. Securus and GTL provide phone and video services at Hawaii state facilities. Families whose loved ones are housed at mainland contract facilities may encounter different provider arrangements at those specific institutions, and should confirm which platform applies to the out-of-state location rather than assuming it matches what is used at Hawaii state facilities. Federal Bureau of Prisons cases involving Hawaii residents may also be housed on the mainland, with those inmates communicating through CorrLinks.",

      "Hawaii families dealing with the correctional communication system face a uniquely difficult situation when a family member is housed on the mainland. The geographic distance, combined with potentially different providers at mainland private facilities versus Hawaii state facilities, means that families need to confirm the specific facility location before setting up any account. This directory provides facility and provider information for Hawaii so families can identify the correct communication setup regardless of whether their family member is in a Hawaii state facility or a mainland private institution.",
    ],

    facilitiesByType: { federal: 2, state: 8, county: 8, private: 4 },

    counties: [
      "Honolulu County", "Hawaii County", "Maui County", "Kauai County",
      "Kalawao County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Hawaii Department of Public Safety state facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Hawaii state correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video visitation at select Hawaii correctional centers.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Hawaii.",
      },
    ],

    featuredFacilities: [
      {
        name: "Oahu Community Correctional Center",
        slug: "oahu-community-correctional-center",
        type: "State Jail",
        county: "Honolulu County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Halawa Correctional Facility",
        slug: "halawa-correctional-facility",
        type: "State Prison",
        county: "Honolulu County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Maui Community Correctional Center",
        slug: "maui-community-correctional-center",
        type: "State Jail",
        county: "Maui County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
    ],
  },

  vermont: {
    id: "s-vt",
    name: "Vermont",
    slug: "vermont",
    abbreviation: "VT",
    facilityCount: 22,
    region: "Northeast",
    hasDetailPage: true,

    description: "Find prisons and communication options in Vermont. Compare messaging, video, and phone providers for correctional facilities across Vermont.",

    intro: [
      "Vermont operates one of the smallest and most distinctive correctional systems in the country. The Vermont Department of Corrections runs a unified state system with no separate county jails, meaning every person in Vermont state custody is held in a facility operated directly by the VTDOC. Vermont has 14 counties, but none maintain independent detention operations. The DOC operates correctional facilities in Rutland, Burlington, Newport, Springfield, and St. Albans, along with community facilities distributed across the state. Vermont has also historically contracted with private facilities in other states when its own capacity is strained, so some Vermont inmates may at times be housed outside the state.",

      "JPay is the standard platform for Vermont Department of Corrections facilities, covering messaging, photo sharing, and money transfer. Securus and GTL provide phone and video services at Vermont DOC facilities. Because there is no county jail layer, families do not need to navigate multiple government systems for state custody situations. Vermont state inmates housed in out-of-state contract facilities may be subject to different provider arrangements at those specific locations. Federal Bureau of Prisons cases involving Vermont residents are typically housed at federal facilities in neighboring New Hampshire or New York, with those inmates communicating through CorrLinks.",

      "Vermont families dealing with the state's correctional system benefit from one of the simpler administrative structures in the Northeast, since the unified DOC means there is only one system to understand for all state custody situations. The main questions are identifying which VTDOC facility holds a family member and whether they have been transferred to an out-of-state facility. This directory provides facility and provider information for Vermont so families can confirm the correct setup and start the communication process without navigating the fragmented state-and-county landscape that exists in most other states.",
    ],

    facilitiesByType: { federal: 2, state: 14, county: 2, private: 4 },

    counties: [
      "Chittenden County", "Rutland County", "Washington County", "Windsor County",
      "Windham County", "Franklin County", "Orange County", "Orleans County",
      "Addison County", "Lamoille County", "Bennington County", "Caledonia County",
      "Essex County", "Grand Isle County",
    ],

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Messaging, photo sharing, and money transfer for Vermont Department of Corrections facilities.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video calling at Vermont state correctional facilities.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone and video services at select Vermont correctional facilities.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities serving Vermont.",
      },
    ],

    featuredFacilities: [
      {
        name: "Marble Valley Correctional Facility",
        slug: "marble-valley-correctional-facility",
        type: "State Prison",
        county: "Rutland County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Chittenden Regional Correctional Facility",
        slug: "chittenden-regional-correctional-facility",
        type: "State Prison",
        county: "Chittenden County",
        features: ["Messaging", "Phone Calls", "Video Calls", "Money Transfer"],
      },
      {
        name: "Northern State Correctional Facility",
        slug: "northern-state-correctional-facility",
        type: "State Prison",
        county: "Orleans County",
        features: ["Messaging", "Phone Calls", "Money Transfer"],
      },
    ],
  },
}
