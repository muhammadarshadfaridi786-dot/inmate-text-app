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
  overview?: string[]  // Optional inline question/answer strings, split at the first "?"
  description: string  // Single-line for metadata
  seoTitle?: string
  seoDescription?: string
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
// ALL 50 US STATES, Basic data for directory
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
  { id: "s-nh", name: "New Hampshire",  slug: "new-hampshire",  abbreviation: "NH", facilityCount: 14,  region: "Northeast", hasDetailPage: true  },
  { id: "s-nj", name: "New Jersey",     slug: "new-jersey",     abbreviation: "NJ", facilityCount: 33, region: "Northeast", hasDetailPage: true  },
  { id: "s-nm", name: "New Mexico",     slug: "new-mexico",     abbreviation: "NM", facilityCount: 42,  region: "Southwest", hasDetailPage: true  },
  { id: "s-ny", name: "New York",       slug: "new-york",       abbreviation: "NY", facilityCount: 205, region: "Northeast", hasDetailPage: true  },
  { id: "s-nc", name: "North Carolina", slug: "north-carolina", abbreviation: "NC", facilityCount: 156, region: "Southeast", hasDetailPage: true  },
  { id: "s-nd", name: "North Dakota",   slug: "north-dakota",   abbreviation: "ND", facilityCount: 27,  region: "Midwest",   hasDetailPage: true  },
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
// DETAILED STATE DATA, 4 seeded states
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
    seoTitle: "California Free Inmate Calls, Messaging and Money Transfer",
    seoDescription: "CDCR phone calls are free for families under SB 1008. Securus replaced ViaPath. How to send messages and money to someone in a California prison or county jail.",

    intro: [
      "California's correctional system is operated by the California Department of Corrections and Rehabilitation (CDCR), one of the largest state prison systems in the United States with over 90,000 incarcerated people. Phone calls from all CDCR state prisons have been free since January 1, 2023 under Senate Bill 1008, the Keep Families Connected Act. Each call is limited to 15 minutes with no cap on the number of daily calls. You do not need to fund a prepaid account to receive calls from California state prisons.",
      "California awarded a new $315 million telecommunications contract to Securus Technologies in February 2025, replacing ViaPath as the CDCR provider. The transition from ViaPath to Securus tablets began at fire camps and continued facility by facility through spring 2026. When a facility transitions, all ViaPath content including messages, photos, and media is permanently lost and does not transfer to Securus tablets. Families were advised to have their loved one print important messages or photos from the ViaPath tablet before the institution's transition date.",
      "Although phone calls are free at California state prisons, messaging and streaming services on Securus tablets have associated costs. Securus was found to be charging more than the contracted rate per message shortly after the California transition began. After advocates complained, Securus issued a $10 credit to incarcerated people at the California Institution for Women. Families should check billing carefully and report discrepancies to CDCR or Securus customer service.",
    ],

    overview: [
      "Are phone calls free at California state prisons? Yes. Phone calls from CDCR state prison facilities have been free since January 1, 2023 under Senate Bill 1008. Each call is limited to 15 minutes. There is no limit on the number of daily calls. You do not need a prepaid calling account. However, messaging and streaming on Securus tablets are not free and have separate costs.",
      "Which provider do California state prison families use in 2026? Securus Technologies replaced ViaPath as the CDCR provider starting in February 2025. Most facilities have completed their transition to Securus by 2026. For facilities that have already transitioned, create a Securus account at securustech.net. Check the CDCR transition schedule at cdcr.ca.gov/family-resources/tablets to confirm which provider is active at your specific institution.",
      "What happened to ViaPath content during the California transition? ViaPath messages, photos, and media do not transfer to Securus tablets. Once a facility transitions, incarcerated individuals permanently lose access to their ViaPath content during incarceration. CDCR states that incarcerated individuals can request their digital content from ViaPath upon release. Families were advised to have their loved one print important messages or photos from the ViaPath kiosk before the transition date.",
    ],

    faq: [
      {
        question: "Are phone calls free at California state prisons?",
        answer: "Yes. Phone calls from all CDCR California state prison facilities have been free since January 1, 2023 under Senate Bill 1008, the Keep Families Connected Act. Each call is limited to 15 minutes with no daily limit on the number of calls. You do not need to fund a prepaid account to receive calls. Messaging and streaming on tablets are not covered by the free call program and have separate costs.",
      },
      {
        question: "Which provider do I use for California state prisons in 2026?",
        answer: "Securus Technologies replaced ViaPath as the CDCR provider starting in February 2025. Most facilities completed their transition to Securus by 2026. Create a Securus account at securustech.net. Check the CDCR transition schedule at cdcr.ca.gov/family-resources/tablets to confirm which provider is currently active at your specific institution. Some facilities may still be on ViaPath during the transition period.",
      },
      {
        question: "What happened to my loved one's ViaPath messages and photos?",
        answer: "ViaPath messages, photos, and media do not transfer to Securus tablets. Once a facility transitions, incarcerated individuals permanently lose access to their ViaPath content during incarceration. CDCR states that incarcerated individuals can request their digital content from ViaPath upon release. Families were advised to have their loved one print important messages or photos from the ViaPath tablet or kiosk before the institution's transition date.",
      },
      {
        question: "How do I find someone currently in a California state prison?",
        answer: "Use the CDCR Inmate Locator at cdcr.ca.gov. You can search by the inmate CDCR number or by name. The locator shows the current facility, admission date, and projected release date. For federal inmates in California, use the Bureau of Prisons locator at bop.gov. For county jail inmates, use the county sheriff's website for the county where they are held.",
      },
      {
        question: "Do California county jails also offer free phone calls?",
        answer: "Some California counties have implemented free calls at county jails independently of the CDCR program. Los Angeles County eliminated jail call charges in December 2023. San Francisco and other counties have also implemented free call programs. County jail communication uses different providers than CDCR state prisons. Contact the specific county jail to find out whether free calls apply at that location.",
      },
      {
        question: "How do I send money to someone at a California state prison?",
        answer: "Money transfers to CDCR inmate trust accounts can be made through JPay at jpay.com, by phone through JPay, by money order mailed to the facility, or at JPay kiosks. Always include the inmate CDCR number and full legal name. Transaction fees apply for online and phone transfers. Money orders mailed directly may take longer to process.",
      },
      {
        question: "Can I send photos to someone at a California state prison?",
        answer: "Yes. Physical photos can be mailed to CDCR facilities following size and content rules. Standard 4x6 inch photos are generally accepted. Digital photos can also be sent through the Securus tablet system at facilities that have completed the transition. ViaPath photo delivery is no longer available at transitioned facilities. Check the specific facility's mail rules before sending.",
      },
      {
        question: "What is the difference between California state prisons and county jails?",
        answer: "California state prisons are operated by CDCR and hold people convicted of state crimes serving sentences longer than one year. County jails are operated by county sheriffs and hold people awaiting trial or serving short sentences. State prisons use Securus for tablets and have free phone calls under SB 1008. County jails use their own contracted providers which vary by county and may or may not offer free calls.",
      },
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
    seoTitle: "Texas Inmate Phone Calls, Messaging and Money Transfer Guide",
    seoDescription: "How to contact someone in a Texas jail or prison. TDCJ uses Securus for phone calls. JPay handles money transfers.",

    intro: [
      "Texas operates one of the largest state prison systems in the United States through the Texas Department of Criminal Justice (TDCJ). All phone calls at TDCJ facilities are handled through Securus Technologies using the AdvanceConnect prepaid account system. Before you can receive calls, your phone number must be registered through the Texas Friends and Family Registration system at texasprisonphone.com. Registration and Securus account setup are two separate steps. Both must be completed before calls can connect.",
      "Effective December 1, 2025, a funded AdvanceConnect account is required to pay for all TDCJ phone calls. Families who previously received calls without a funded account must now create and fund an AdvanceConnect account at securustech.net or through the Securus Mobile app. As a transition measure, each registered phone number receives one free 60-second call per month if no funded account is associated. Call Securus 24-hour Customer Care at 972-734-1111 for account setup assistance.",
      "All personal mail to TDCJ inmates must be sent to the Digital Mail Processing Center rather than directly to the facility. Include the inmate full name and TDCJ number on every piece of mail. E-messages can be sent to all TDCJ inmates through the Securus e-messaging system. Video visits through Securus are available at select TDCJ facilities, last 60 minutes, cost $10, and are limited to one remote visit per month per inmate.",
    ],

    overview: [
      "How do I register to receive calls from a Texas TDCJ prison? You must complete two separate steps. First, register your phone number at texasprisonphone.com through the Texas Friends and Family Registration system. Second, create and fund a Securus AdvanceConnect account at securustech.net. Both steps must be completed before calls can connect. Do not contact Securus before your Texas Friends and Family registration is confirmed.",
      "What changed about TDCJ phone calls after December 2025? Effective December 1, 2025, a funded AdvanceConnect prepaid account is now required to pay for all TDCJ phone calls. Families who previously received calls on collect or without a prepaid account must now set up and fund an AdvanceConnect account. Each unregistered number receives one free 60-second call per month as a transition measure. Contact Securus at 972-734-1111 for help.",
      "What is the most common mistake Texas prison families make? Calling Securus before completing the Texas Friends and Family Registration is the most common mistake. Securus cannot help you until your phone number is successfully registered through the TDCJ system at texasprisonphone.com. Complete the registration first, receive your confirmation, and then contact Securus to set up your AdvanceConnect account.",
    ],

    faq: [
      {
        question: "How do I set up phone calls from a Texas TDCJ prison?",
        answer: "You must complete two steps. First, register your phone number at texasprisonphone.com through the Texas Friends and Family Registration system. Second, create and fund a Securus AdvanceConnect account at securustech.net or through the Securus Mobile app. Do not contact Securus before your Texas registration is confirmed. Securus cannot assist until your number is successfully registered with TDCJ.",
      },
      {
        question: "Do I need a funded AdvanceConnect account to receive TDCJ calls?",
        answer: "Yes. Effective December 1, 2025, a funded Securus AdvanceConnect account is required to pay for all TDCJ phone calls. Create your account at securustech.net and add funds before the inmate calls you. Each unregistered phone number receives one free 60-second call per month as a transition measure. Call Securus 24-hour Customer Care at 972-734-1111 for setup help.",
      },
      {
        question: "How do I send money to someone in a Texas state prison?",
        answer: "Money can be deposited to an inmate trust account through JPay at jpay.com or the JPay app. You can also use the TDCJ Monthly Checking Account Debit (ACH) service which is free and automatically debits a set amount from your checking account each month. Contact the Inmate Trust Fund at TDCJ for ACH setup. Always include the inmate full name and TDCJ number on all transactions.",
      },
      {
        question: "Can I send mail directly to a Texas TDCJ facility?",
        answer: "No. All personal mail to TDCJ inmates must be sent to the Digital Mail Processing Center. Do not send mail directly to the facility. Include the inmate full name and TDCJ number on every envelope. Mail sent directly to a facility may be returned or delayed. Check the TDCJ website for the current Digital Mail Processing Center address.",
      },
      {
        question: "How do I find someone currently in a Texas state prison?",
        answer: "Use the TDCJ Offender Search tool at tdcj.texas.gov. You can search by TDCJ number or by name. The search shows the current facility, admission date, and projected release date. For county jail inmates, use the county sheriff's website for the specific county. For federal inmates in Texas, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "Are video visits available at Texas state prisons?",
        answer: "Yes, at select TDCJ facilities. Video visits through Securus are 60 minutes long and cost $10. Inmates are limited to one remote video visit per month. Visits run on a set schedule and begin and end at scheduled times. Create a Securus account and check the list of facilities that offer video visitation on the TDCJ website. For problems contact Securus Customer Care at 877-578-3658.",
      },
      {
        question: "What are the phone call rules at Texas state prisons?",
        answer: "TDCJ inmates can make calls from 5 AM to midnight. Each call is limited to 30 minutes with a one-minute warning before disconnection. Calls may only go to home landlines or cell phones within the US. No calls to 800 numbers, pay phones, international numbers, or virtual numbers like MagicJack. All calls are monitored and recorded except calls to the attorney of record.",
      },
      {
        question: "What happens when my loved one transfers from a Texas county jail to TDCJ?",
        answer: "When someone transfers from a Texas county jail to a TDCJ state prison, the communication provider changes. County jails use their own contracted providers which are separate from TDCJ. You will need to register your number through the Texas Friends and Family Registration system and set up a Securus AdvanceConnect account for TDCJ calls. Your county jail account does not transfer to the TDCJ system.",
      },
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
    seoTitle: "Florida Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Florida jail or prison. FDC uses JPay for messaging and money transfers.",

    intro: [
      "Florida operates the third largest state prison system in the country through the Florida Department of Corrections (FDC), housing approximately 80,000 inmates. Phone calls at all FDC state facilities are handled through Securus Technologies. JPay handles electronic messaging, money transfers, and tablet services for Florida state prison inmates. Both Securus and JPay accounts are required if you want to receive phone calls and also send electronic messages.",
      "Florida does not offer free phone calls at state prisons. Governor Ron DeSantis vetoed free call funding in both 2024 and 2025. Families continue to pay per-minute rates subject to FCC caps. All routine inmate mail must be sent to the FDC central processing facility for scanning and electronic distribution. Do not send routine mail directly to the facility. Legal mail and privileged mail are handled separately and should not go to the central processing center.",
      "JPay tablets are available in all FDC general population housing units. Through JPay, families can send secure messages, photos, and money to inmate accounts. JPay kiosks are also available inside facilities. For JPay customer service call 800-574-5729. For Securus phone account assistance, contact Securus through securustech.net. Complaints about vendor services can be sent to the FDC at FDCCitizenServices@fdc.myflorida.com.",
    ],

    overview: [
      "Which providers do Florida state prison families use? Securus Technologies handles all phone calls at FDC state facilities. JPay handles electronic messaging, money transfers, and tablet services. These are separate accounts. You need a Securus account to receive calls and a JPay account to send messages and money. Setting up both accounts is recommended for full communication access.",
      "Are phone calls free at Florida state prisons? No. Florida does not currently offer free phone calls at state prisons. Governor Ron DeSantis vetoed free call funding proposals. Families pay per-minute rates regulated by FCC caps. In-state calls are charged at $0.135 per minute under the current FDC contract with Securus. Contact Securus at securustech.net for current rate information at your specific facility.",
      "What is the most common mistake Florida prison families make? Sending mail directly to the facility is the most common mistake. All routine inmate mail must go to the FDC central processing facility for scanning and electronic distribution. Mail sent directly to a facility may be returned or delayed. Legal mail and privileged mail are the exception and should be sent directly to the institution, not the central processing center.",
    ],

    faq: [
      {
        question: "Which provider do I use for Florida state prison phone calls?",
        answer: "Securus Technologies handles all phone calls at Florida Department of Corrections state facilities. Create a Securus account at securustech.net to receive calls. FDC inmates cannot receive incoming calls. All calls are inmate-initiated. For Securus account assistance visit securustech.net or contact Securus customer service directly.",
      },
      {
        question: "How do I send messages and money to someone at a Florida state prison?",
        answer: "JPay handles electronic messaging and money transfers for Florida state prison inmates. Visit jpay.com or use the JPay app to create an account, find the inmate, send messages, and deposit money to the inmate trust account. JPay tablets are available in all FDC general population housing units. For JPay customer service call 800-574-5729.",
      },
      {
        question: "Are phone calls free at Florida state prisons?",
        answer: "No. Florida does not currently offer free phone calls at state prisons. Governor Ron DeSantis vetoed free call funding proposals in both 2024 and 2025. Families pay per-minute rates regulated by FCC caps. In-state calls are charged at $0.135 per minute under the current FDC contract. Contact Securus for current rate information.",
      },
      {
        question: "Can I send mail directly to a Florida state prison?",
        answer: "No. All routine inmate mail must be sent to the FDC central processing facility for scanning and electronic distribution. Do not send routine mail directly to the facility. Legal mail and privileged mail are handled separately and should be sent directly to the institution. Check the FDC website for the current central processing facility address before mailing anything.",
      },
      {
        question: "How do I find someone currently in a Florida state prison?",
        answer: "Use the Florida Department of Corrections inmate search tool at fdc.myflorida.com. You can search by name or DC number. The search shows the current facility, admission date, and release information. For county jail inmates, use the county sheriff's website. For federal inmates in Florida, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "Do I need both a Securus account and a JPay account for Florida?",
        answer: "Yes, if you want both phone calls and messaging. Securus handles phone calls and JPay handles electronic messaging and money transfers. These are separate companies with separate accounts. Your Securus account balance cannot be used for JPay services and vice versa. Set up both accounts if you want full communication access with your loved one.",
      },
      {
        question: "What is the DC number and where do I find it?",
        answer: "The DC number is the identification number assigned to every person in Florida DOC custody. You need this number for JPay messaging, money transfers, and inmate search. Find it using the FDC inmate search tool at fdc.myflorida.com or by contacting the facility directly. The DC number is different from any court case number.",
      },
      {
        question: "What happens when my loved one transfers from a Florida county jail to a state prison?",
        answer: "When someone transfers from a Florida county jail to a state prison, the communication providers change. County jails use their own contracted providers which are separate from FDC. You will need Securus for phone calls and JPay for messaging at the state prison. Your county jail accounts do not transfer to FDC facilities. Confirm the new facility and set up new accounts after the transfer is complete.",
      },
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
    seoTitle: "New York Free Inmate Calls, Messaging and Money Transfer",
    seoDescription: "New York state prison calls are free for families. NYC jail calls are free for families. How to contact someone in NY prison or county jail. Find your provider.",

    intro: [
      "New York operates its state prison system through the New York State Department of Corrections and Community Supervision (DOCCS). Phone calls from all New York state prison facilities became free on August 1, 2025. New York is the first state to implement free prison calls administratively without legislation, joining California, Colorado, Connecticut, Massachusetts, and Minnesota. The new policy saves roughly 30,000 New York families an estimated $13.3 million per year. Each incarcerated person receives three free calls per week of up to 15 minutes, added to their accounts each Saturday.",
      "New York City jail calls have been free since 2019, making New York the state with the broadest free call coverage including both state prisons and NYC jails. Previously, incarcerated New Yorkers were charged $0.024 per minute under a Securus Technologies contract. Since calls are now free, a Securus account is no longer needed to receive calls from state facilities. Unused Securus balances can be refunded by contacting Securus. Calls from New York state facilities can reach numbers in the United States, Canada, and US territories including Puerto Rico, Guam, and the US Virgin Islands.",
      "The DIN number (Department Identification Number) is the unique identifier assigned to every person in New York DOCCS custody. It must appear on all mail sent to DOCCS facilities. Use the DOCCS inmate lookup at doccs.ny.gov to find the DIN and current facility. For federal inmates in New York such as those at MDC Brooklyn, use CorrLinks for messaging and ConnectNetwork for phone calls which are separate federal systems and not covered by the New York free call program.",
    ],

    overview: [
      "Are phone calls free from New York state prisons? Yes. Phone calls from all New York DOCCS state prison facilities became free on August 1, 2025. Each incarcerated person receives three free calls per week of up to 15 minutes added each Saturday. You do not need a Securus account. Unused Securus balances can be refunded. Calls reach the US, Canada, and US territories. NYC jail calls have also been free since 2019.",
      "What is the DIN number and why do I need it? The DIN is the Department Identification Number assigned to every person in New York DOCCS custody. It must appear on all mail sent to DOCCS facilities. Find it using the DOCCS inmate lookup at doccs.ny.gov. The DIN is different from any court case number or county booking number. You need it for mail and to locate your loved one in the system.",
      "What is the most common mistake New York prison families make? Thinking that federal facilities in New York are covered by the free call program is a common mistake. MDC Brooklyn, MCC New York, and other federal BOP facilities use CorrLinks for messaging and ConnectNetwork for calls, which are not free under the New York state program. Only DOCCS state facilities and NYC jails offer free calls.",
    ],

    faq: [
      { question: "Are phone calls really free from New York state prisons?", answer: "Yes. Phone calls from all New York DOCCS state prison facilities became free on August 1, 2025. New York is the first state to implement this administratively without legislation. Each incarcerated person receives three free calls per week of up to 15 minutes. You do not need a Securus account. Unused Securus balances can be refunded." },
      { question: "Do I still need a Securus account to receive free New York calls?", answer: "No. Since calls are free effective August 1, 2025, a Securus account is no longer needed. If you had an existing Securus account with unused funds, contact Securus to request a refund of your balance. You still need to be on the approved contact list to receive calls." },
      { question: "Are NYC jail calls also free?", answer: "Yes. New York City jail calls have been free since 2019, saving city families an estimated $10 million per year. New York City was the first US city to make jail calls free. Combined with the state prison free call policy effective August 2025, New York now has the broadest free call coverage of any state." },
      { question: "Are federal facilities in New York covered by the free call program?", answer: "No. Federal facilities in New York such as MDC Brooklyn, MCC New York, and FCI Ray Brook are Bureau of Prisons facilities. They use CorrLinks for messaging and ConnectNetwork for phone calls, which are not covered by the New York state free call program and are not free." },
      { question: "What is the DIN number and where do I find it?", answer: "The DIN is the Department Identification Number assigned to every person in New York DOCCS custody. It must appear on all mail. Find it using the DOCCS inmate lookup at doccs.ny.gov. The DIN is different from any court case number. Always include the DIN and full name on all correspondence." },
      { question: "How far can New York free calls reach?", answer: "Calls from New York state prison facilities can reach numbers in the United States, Canada, and US territories including Puerto Rico, Guam, the US Virgin Islands, American Samoa, the Federated States of Micronesia, and the Midway Islands. International calls outside these territories are not included in the free call policy." },
      { question: "How do I send money to someone at a New York state prison?", answer: "Since calls are free the primary reason to send money is for commissary. Money can be sent through the DOCCS approved deposit methods including online and by mail. Always include the DIN number on all transactions. Contact the specific facility or visit doccs.ny.gov for current approved deposit methods." },
      { question: "What happens if I need to reach someone in New York County or city jails outside NYC?", answer: "New York county jails outside New York City use their own phone providers and rates vary by county. The free call policy applies to DOCCS state prisons and NYC DOC facilities. Contact the specific county jail to confirm the current provider and whether free calls apply at that location." },
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
    seoTitle: "Georgia Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Georgia jail or prison. GDC facilities use JPay for messaging and money.",

    intro: [
      "Georgia operates its state prison system through the Georgia Department of Corrections (GDC). Securus Technologies holds the GDC contract for phone calls at most state prisons. JPay handles electronic messaging, video visits, and money transfers. Georgia has 159 counties with individual county jails that negotiate their own provider contracts separately from GDC state prisons. Every person in GDC custody is assigned a GDC number at intake that stays with them for their entire sentence regardless of facility transfers.",
      "Georgia is not among the states that offer free inmate phone calls. Families pay per-minute rates subject to FCC caps effective April 6, 2026. Phone calls at GDC state prisons cost $0.06 per minute under the current Securus contract. A 25-minute call costs approximately $1.50. The GDC number must appear on all mail sent to a GDC facility. Mail without the GDC number is routinely delayed or returned. Find the GDC number through the GDC Public Offender Query at gdc.georgia.gov.",
      "Video visits at GDC facilities are handled through JPay at $3.95 for a 30-minute session. Visits must be scheduled in advance through GDConnect, the GDC online scheduling system. Deposits to Securus prepaid accounts are limited to $200 per deposit. JPay money transfer fees are tiered based on the amount sent. You must be on the offender's approved visitor list to send money to them.",
    ],

    overview: [
      "Which providers do Georgia state prison families use? Securus Technologies handles phone calls at most GDC state facilities. JPay handles electronic messaging, video visits, and money transfers. These are two separate accounts. You need a Securus account to receive phone calls and a JPay account to send messages, schedule video visits, and deposit money. Check the specific facility page to confirm which providers are active at your loved one's location.",
      "What is the GDC number and why is it important? The GDC number is assigned at intake and stays with the inmate for their entire sentence regardless of facility transfers. You need the GDC number for mail, JPay deposits, visitor applications, and any contact with GDC or the facility directly. Mail sent without the GDC number is routinely delayed or returned. Find it through the GDC Public Offender Query at gdc.georgia.gov or ask your loved one to provide it during a call.",
      "What is the most common mistake Georgia prison families make? Sending mail without the GDC number is the most common mistake. Mail without the GDC number on the envelope is routinely delayed or returned without delivery. Always include the inmate full name and GDC number on every piece of mail. County jail inmates use a different booking number assigned by the specific county, not a GDC number.",
    ],

    faq: [
      {
        question: "Which provider do I use for Georgia state prison phone calls?",
        answer: "Securus Technologies handles phone calls at most Georgia Department of Corrections state facilities. Create a Securus prepaid account at securustech.net to receive calls. Phone calls cost $0.06 per minute under the current GDC contract. Deposits to Securus prepaid accounts are limited to $200 per deposit. For Securus customer service visit securustech.net.",
      },
      {
        question: "How do I send messages and money to someone at a Georgia state prison?",
        answer: "JPay handles electronic messaging, video visits, and money transfers at GDC state facilities. Visit jpay.com or use the JPay app. JPay money transfer fees are tiered based on the amount sent. You must be on the offender's approved visitor list to send money. Always include the inmate GDC number when making deposits or sending messages.",
      },
      {
        question: "What is the GDC number and where do I find it?",
        answer: "The GDC number is the identification number assigned to every person in Georgia DOC custody at intake. It stays with the inmate for their entire sentence regardless of facility transfers. Find it through the GDC Public Offender Query at gdc.georgia.gov, on court commitment documents, or ask your loved one to provide it. The GDC number must appear on all mail sent to GDC facilities or mail will be delayed or returned.",
      },
      {
        question: "Are phone calls free at Georgia state prisons?",
        answer: "No. Georgia is not among the states offering free inmate phone calls. Families pay per-minute rates subject to FCC caps. Phone calls at GDC state prisons cost $0.06 per minute under the current Securus contract. A 25-minute call costs approximately $1.50. Contact Securus for current rate information at your specific facility.",
      },
      {
        question: "How do I schedule a video visit at a Georgia state prison?",
        answer: "Video visits at GDC facilities are scheduled through GDConnect, the GDC online scheduling system. Video visits are handled through JPay and cost $3.95 for a 30-minute session. Weekend visit requests close at 5:00 PM Wednesday. State holiday visit requests close at 5:00 PM three days before the holiday. You must be on the approved visitor list to schedule visits.",
      },
      {
        question: "How do I find someone currently in a Georgia state prison?",
        answer: "Use the GDC Public Offender Query at gdc.georgia.gov. You can search by name or GDC number. The search shows the current facility and basic incarceration information. For county jail inmates, use the specific county sheriff's website. Georgia has 159 counties each with their own jail system. For federal inmates in Georgia, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "Do Georgia county jails use the same providers as state prisons?",
        answer: "No. Georgia has 159 counties and each county jail negotiates its own provider contracts independently from GDC. County jails commonly use Securus but the specific provider and rates vary by county. The GDC contract with Securus applies only to state DOC facilities. Always confirm which provider serves the specific county jail before setting up any account.",
      },
      {
        question: "What happens when my loved one transfers from a Georgia county jail to a state prison?",
        answer: "When someone transfers from a Georgia county jail to a GDC state prison, they are assigned a GDC number and the communication providers may change. You will need a Securus account for phone calls and a JPay account for messaging and money transfers at the state prison. Your county jail accounts do not transfer. Confirm the new facility and GDC number before setting up new accounts.",
      },
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
    seoTitle: "Ohio Inmate Phone Calls, Messaging and Money Transfer Guide",
    seoDescription: "How to contact someone in an Ohio jail or prison. Find the right provider for ODRC state prisons and county jails.",

    intro: [
      "Ohio operates its state prison system through the Ohio Department of Rehabilitation and Correction (ODRC). ViaPath Technologies through ConnectNetwork handles all phone calls at ODRC state facilities. Ohio switched from Securus Technologies to ViaPath in mid-2023. If any guide tells you to use Securus or JPay for Ohio state prison phone calls, that information is out of date. Electronic messaging at ODRC facilities is handled through GettingOut by Telmate, which is also a ViaPath platform.",
      "Ohio is not among the states that offer free inmate phone calls. Families pay per-minute rates subject to FCC caps. To receive calls, answer the automated approval call and say yes, or set up a prepaid account at ConnectNetwork.com and choose Ohio DRC as the agency. Money can be deposited through ConnectNetwork online, by phone at 1-888-988-4768 using site ID 86, at retail kiosks at stores like Walmart and Kroger, or by money order using the ConnectNetwork mail-in form. Money orders have no processing fee. The overall deposit limit is $400 per person per calendar month.",
      "Do not put a letter inside a money order envelope when sending funds for an Ohio ODRC inmate. Letters included with money orders are discarded. Each deposit transaction is capped at $200 without warden approval. Retail kiosk deposits are capped at $50 to $100. For ODRC facility or visitor information call 614-752-1159. To block calls from a specific inmate or from all Ohio prisons, call 877-650-4249.",
    ],

    overview: [
      "Which provider do Ohio state prison families use? ViaPath Technologies through ConnectNetwork handles all phone calls at ODRC state facilities. Ohio switched from Securus and JPay to ViaPath in mid-2023. Create a ConnectNetwork account at connectnetwork.com and select Ohio DRC as the agency. If you previously had a Securus or JPay account for Ohio calls, that account no longer works for ODRC state prison calls.",
      "How do I send money to someone at an Ohio state prison? Send funds through ConnectNetwork online, by phone at 1-888-988-4768 using site ID 86, at Walmart or Kroger retail kiosks, or by money order. Money orders have no processing fee and are the cheapest deposit method. Do not include a letter in the money order envelope. The deposit limit is $400 per person per calendar month with a $200 per transaction maximum.",
      "What is the most common mistake Ohio prison families make? Using Securus or JPay for Ohio state prison phone calls is the most common mistake. Ohio switched providers in mid-2023 and Securus no longer handles ODRC calls. Many outdated guides still direct families to Securus. Always use ConnectNetwork for Ohio ODRC state prison phone calls. County jails in Ohio may still use Securus or ICSolutions, so confirm the provider for each specific facility.",
    ],

    faq: [
      {
        question: "Which provider do I use for Ohio state prison phone calls?",
        answer: "ViaPath Technologies through ConnectNetwork handles all phone calls at ODRC Ohio state facilities. Create a ConnectNetwork account at connectnetwork.com and select Ohio DRC as the agency. Ohio switched from Securus to ViaPath in mid-2023. Do not use Securus or JPay for Ohio ODRC state prison phone calls as those are no longer the correct providers for state facilities.",
      },
      {
        question: "How do I send money to someone at an Ohio state prison?",
        answer: "Send funds through ConnectNetwork online, by phone at 1-888-988-4768 using site ID 86, at retail kiosks at Walmart or Kroger stores, or by money order using the ConnectNetwork mail-in form. Money orders have no processing fee. Do not put a letter inside a money order envelope. The deposit limit is $400 per person per calendar month with a maximum of $200 per transaction without warden approval.",
      },
      {
        question: "Are phone calls free at Ohio state prisons?",
        answer: "No. Ohio is not among the states offering free inmate phone calls. Families pay per-minute rates subject to FCC caps effective April 2026. To receive calls, answer the automated approval prompt when the inmate first calls, or set up a prepaid ConnectNetwork account in advance. For calls you do not want to receive, call 877-650-4249 to block calls from a specific inmate or from all Ohio prisons.",
      },
      {
        question: "How do I set up electronic messaging for an Ohio state prison inmate?",
        answer: "Electronic messaging at ODRC facilities is handled through GettingOut by Telmate, which is a ViaPath platform. Create a GettingOut account at gettingout.com to send electronic messages. This is a separate account from your ConnectNetwork phone account. Check the specific facility page to confirm whether electronic messaging is available at your loved one's location.",
      },
      {
        question: "How do I find someone currently in an Ohio state prison?",
        answer: "Use the ODRC offender search tool at drc.ohio.gov. You can search by name or ODRC number. The search shows the current facility and basic incarceration information. For county jail inmates, use the specific county sheriff's website. Ohio county jails are not included in the ODRC search. For federal inmates in Ohio, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "Do Ohio county jails use the same provider as state prisons?",
        answer: "No. Ohio county jails negotiate their own provider contracts independently from ODRC. Common providers at Ohio county jails include Securus Technologies and ICSolutions. ViaPath ConnectNetwork serves ODRC state prisons but individual county jails may use different providers. Always confirm which provider serves the specific county jail before setting up any account.",
      },
      {
        question: "What is the ODRC number and where do I find it?",
        answer: "The ODRC number is the identification number assigned to every person in Ohio DOC custody. You need this number for deposits, messaging accounts, and inmate search. Find it through the ODRC offender search at drc.ohio.gov or ask your loved one to provide it. The ODRC number is different from any court case number.",
      },
      {
        question: "What happens when my loved one transfers from an Ohio county jail to a state prison?",
        answer: "When someone transfers from an Ohio county jail to an ODRC state prison, the communication provider changes. County jails use their own providers such as Securus or ICSolutions. ODRC state prisons use ViaPath ConnectNetwork for phone calls and GettingOut for messaging. Your county jail accounts do not transfer. Set up new ConnectNetwork and GettingOut accounts after confirming the transfer is complete.",
      },
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
    seoTitle: "Illinois Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in an Illinois jail or prison. Find the right provider for IDOC state prisons and county jails.",

    intro: [
      "Illinois operates its state prison system through the Illinois Department of Corrections (IDOC). ICSolutions is the current provider for phone calls, electronic messaging, and video visits at all IDOC facilities except Adult Transition Centers. Illinois recently switched from GTL to ICSolutions for both phone and video services. If any guide directs you to use GTL or ConnectNetwork for Illinois state prison calls, that information is out of date. Create your account at icscorrections.com.",
      "Illinois launched the Voices of Connection program providing incarcerated people with 775 free domestic phone call minutes per month. The program launched in November 2025 and was extended after seeing significant increase in usage. Calls are limited to 20 minutes each with a 10-minute lockout period between calls. People under phone privilege restrictions cannot access free minutes. Families still need a registered ICSolutions account to receive calls.",
      "Starting September 30, 2025, IDOC scans or photocopies all non-privileged mail including letters, cards, and photos before delivery. Publications must now be mailed directly by the publisher. Money can be sent by money order with the individual IDOC number and sender name and address included. The IDOC number must appear on all mail. You can also get deposit slips from each facility or through JPay for commissary deposits.",
    ],

    overview: [
      "Which provider do Illinois state prison families use? ICSolutions is the current provider for phone calls, electronic messaging, and video visits at all IDOC facilities except Adult Transition Centers. Illinois switched from GTL to ICSolutions. Create an account at icscorrections.com. When registering, entering your GTL Visitor ID can expedite the approval process if you previously had a GTL account.",
      "Does Illinois offer free phone calls at state prisons? Yes. The Voices of Connection program provides 775 free domestic phone call minutes per month to incarcerated people. The program launched in November 2025 and was extended after strong usage results. Calls are 20 minutes each with a 10-minute lockout between calls. People under phone privilege restrictions cannot access the free minutes. Families still need a registered ICSolutions account to receive calls.",
      "What changed about Illinois prison mail? Starting September 30, 2025, IDOC scans all non-privileged mail before delivery. Publications must be mailed directly by the publisher. Families and visitors can no longer drop off books or magazines at facilities. Include the individual IDOC number on all mail or it may be delayed. Money orders must include the IDOC number, the sender's name, and the sender's address.",
    ],

    faq: [
      {
        question: "Which provider do I use for Illinois state prison phone calls?",
        answer: "ICSolutions is the current provider for phone calls at all IDOC Illinois state facilities except Adult Transition Centers. Create an account at icscorrections.com. Illinois switched from GTL to ICSolutions. If a guide tells you to use GTL or ConnectNetwork for Illinois state prison calls, that information is outdated. For ICSolutions customer service call 217-426-0499.",
      },
      {
        question: "Are phone calls free at Illinois state prisons?",
        answer: "Partially. The Voices of Connection program provides 775 free domestic phone call minutes per month to incarcerated people. The program launched in November 2025 and was extended. Calls are limited to 20 minutes each with a 10-minute lockout period between calls. People under phone privilege restrictions cannot access the free minutes. Families still need a registered ICSolutions account to receive any calls.",
      },
      {
        question: "How do I set up video visits at an Illinois state prison?",
        answer: "Video visits at IDOC facilities now use ICSolutions after transitioning from GTL. Create an ICSolutions account at icscorrections.com. When registering, enter your GTL Visitor ID if you had one to expedite approval. Video visits must be scheduled through your ICSolutions account. Contact ICSolutions for current scheduling instructions and visit availability at your loved one's facility.",
      },
      {
        question: "How do I send messages to someone at an Illinois state prison?",
        answer: "Electronic messaging at IDOC facilities uses ICSolutions. Friends and family can send messages through the ICSolutions system at icscorrections.com. Messages are screened and monitored. Electronic messaging is available to inmates in A grade at all IDOC facilities except Adult Transition Centers. Include the inmate IDOC number when setting up your messaging account.",
      },
      {
        question: "How do I find someone currently in an Illinois state prison?",
        answer: "Use the IDOC Inmate Search tool at idoc.illinois.gov. You can search by last name, birthday, or IDOC number. The search shows the current facility and basic information. You can also register with VINELink to receive notifications when an inmate moves or is approaching parole. For county jail inmates, use the specific county sheriff's website.",
      },
      {
        question: "How do I send money to someone at an Illinois state prison?",
        answer: "Send money by money order with the individual IDOC number, sender name, and sender address included. Money orders are limited to $999.99. You can also get deposit slips from each facility or through JPay for commissary deposits. Always include the IDOC number on all money orders or the deposit may be delayed or rejected.",
      },
      {
        question: "What changed about mail at Illinois state prisons?",
        answer: "Starting September 30, 2025, IDOC scans or photocopies all non-privileged mail including letters, cards, and photos before delivery. Publications such as books and magazines must now be mailed directly by the publisher. Friends and visitors can no longer drop off publications at facilities. Include the individual IDOC number on all mail envelopes or processing may be delayed.",
      },
      {
        question: "What happens when my loved one transfers from an Illinois county jail to a state prison?",
        answer: "When someone transfers from an Illinois county jail to an IDOC state prison, the communication provider changes. County jails use their own contracted providers. IDOC state prisons use ICSolutions for phone calls, messaging, and video visits. Your county jail accounts do not transfer. Create new ICSolutions accounts after confirming the transfer is complete and you have the inmate IDOC number.",
      },
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
    seoTitle: "Michigan Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Michigan jail or prison. Find the right provider for MDOC state prisons and county jails.",

    intro: [
      "Michigan operates its state prison system through the Michigan Department of Corrections (MDOC), which manages 30 facilities spread across both the Upper and Lower peninsulas. GTL through ConnectNetwork is the primary phone service vendor for MDOC state facilities. Contact GTL at 855-466-2832 for account setup. You can fund up to three prepaid accounts with a single transaction and single fee when processed through a GTL customer service agent. There is no minimum deposit for transactions done online, by phone, or IVR.",
      "Michigan is not among the states that offer free inmate phone calls. Families pay per-minute rates subject to FCC caps. Michigan has implemented a near-universal centralized mail scanning system. Physical mail sent to virtually any MDOC facility is intercepted at a central scanning facility rather than delivered directly to the prison. Letters are converted to digital copies and delivered electronically. This makes phone calls and electronic messaging especially important for Michigan families who relied on physical mail.",
      "JPay tablet-based messaging is available at most MDOC facilities as a lower-cost alternative to phone calls. GTL kiosks are installed in the lobby at several MDOC facilities for funding prepaid phone accounts. You can also fund accounts by cashier's check or money order with no fee by mailing to GTL AdvancePay Service Department P.O. Box 911722, Denver CO 80291-1722. There is a $25 minimum for mail payments. Allow up to five business days for mailed payments to be credited.",
    ],

    overview: [
      "Which provider do Michigan state prison families use? GTL through ConnectNetwork is the primary phone service vendor for MDOC state facilities. Call GTL at 855-466-2832 for account setup or fund online at connectnetwork.com. You can fund multiple prepaid accounts with a single transaction. GTL kiosks are available at several MDOC lobby locations for in-person deposits.",
      "Does Michigan scan prison mail? Yes. Michigan has implemented a near-universal centralized mail scanning system. Physical mail sent to virtually any MDOC facility goes to a central scanning facility rather than directly to the prison. Letters are converted to digital copies before delivery. This makes phone calls and JPay tablet messaging especially important for Michigan families who relied on physical mail to stay connected.",
      "What is the most common mistake Michigan prison families make? Calling the wrong provider is common because Michigan county jails use multiple different vendors. GTL ConnectNetwork serves MDOC state prisons but individual county jails may use Securus, ICSolutions, or Smart Communications. Always confirm the specific provider for each county facility. For Wayne County Jail in Detroit, the provider is ConnectNetwork GTL.",
    ],

    faq: [
      {
        question: "Which provider do I use for Michigan state prison phone calls?",
        answer: "GTL through ConnectNetwork is the primary phone service vendor for MDOC Michigan state facilities. Call GTL at 855-466-2832 to set up or fund a prepaid account. You can also fund online at connectnetwork.com. You can fund up to three prepaid accounts with a single transaction and fee when processed through a GTL agent.",
      },
      {
        question: "Are phone calls free at Michigan state prisons?",
        answer: "No. Michigan is not among the states offering free inmate phone calls. Families pay per-minute rates subject to FCC caps effective April 2026. Because Michigan has also implemented mail scanning that converts letters to digital copies, phone calls take on extra importance as a form of genuine human connection for Michigan families.",
      },
      {
        question: "How does the Michigan prison mail scanning system work?",
        answer: "Michigan has implemented a near-universal centralized mail scanning system. Physical mail sent to virtually any MDOC facility is intercepted at a central scanning facility rather than delivered directly to the prison. Letters, cards, and photos are converted to digital copies before delivery. Send mail to the MDOC facility address but be aware it will be scanned and delivered digitally, not as a physical letter.",
      },
      {
        question: "How do I find someone currently in a Michigan state prison?",
        answer: "Use the MDOC Offender Tracking Information System (OTIS) at michigan.gov/corrections. You can search by name or MDOC number. MDOC records date back to 1980. For county jail inmates, use the specific county sheriff's website. For federal inmates in Michigan, use the Bureau of Prisons locator at bop.gov. For MDOC central office assistance call 517-335-1426.",
      },
      {
        question: "How do I send money to someone at a Michigan state prison?",
        answer: "Fund a GTL prepaid phone account at connectnetwork.com, by calling GTL at 855-466-2832, at GTL kiosks in MDOC facility lobbies, or by cashier's check or money order mailed to GTL AdvancePay Service Department P.O. Box 911722, Denver CO 80291-1722. Money orders have no processing fee. There is a $25 minimum for mailed payments. Allow up to five business days for mailed payments.",
      },
      {
        question: "Can I send electronic messages to someone at a Michigan state prison?",
        answer: "Yes. JPay tablet-based messaging is available at most MDOC facilities. Visit jpay.com or use the JPay app to create an account and send messages. JPay messaging is a lower-cost alternative to phone calls for Michigan families. Because MDOC has implemented mail scanning, electronic messaging through JPay is one of the more reliable communication methods available.",
      },
      {
        question: "Do Michigan county jails use the same provider as state prisons?",
        answer: "No. Michigan county jails negotiate their own provider contracts independently. Common providers at Michigan county jails include GTL ConnectNetwork, Securus, ICSolutions, and Smart Communications. GTL ConnectNetwork serves Wayne County Jail in Detroit. Always confirm which provider serves the specific county jail before setting up any account. Contact GTL at 855-466-2832, Securus at 800-844-6591, or ICSolutions at 888-506-8407.",
      },
      {
        question: "What happens when my loved one transfers from a Michigan county jail to a state prison?",
        answer: "When someone transfers from a Michigan county jail to an MDOC state prison, the communication provider usually changes. County jails use various providers while MDOC state prisons use GTL ConnectNetwork for phone calls. Your county jail account may not carry over. Create a new ConnectNetwork account after confirming the transfer is complete. Also set up JPay for electronic messaging at the state facility.",
      },
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


  arizona: {
    id: "s-az",
    name: "Arizona",
    slug: "arizona",
    abbreviation: "AZ",
    facilityCount: 195,
    region: "Southwest",
    hasDetailPage: true,

    description: "Find prisons and communication options in Arizona. Compare messaging, video, and phone providers for correctional facilities across Arizona.",
    seoTitle: "Arizona Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in an Arizona jail or prison. Find the right provider for ADC state prisons and county jails.",

    intro: [
      "Arizona operates its state prison system through the Arizona Department of Corrections, Rehabilitation and Reentry (ADCRR). ICSolutions handles phone calls at Arizona state facilities through a Prepaid Collect account system. Called parties must submit an application and be approved before they can receive phone calls from ADC inmates. If you have previously been approved to receive calls, you do not need to re-apply. Contact ICSolutions at 888-506-8407 or visit icsolutions.com to set up an account.",
      "Effective February 15, 2026, ADCRR reimplemented security measures for inmate phone calls including the Personal Allowed Number (PAN) list. Inmates can only call approved numbers from their visitation list, up to 20 people. Families who are not on the inmate visitation list cannot be added to the PAN list. If you want to receive calls, you must first be approved on the inmate visitation list and then be added to their PAN list. Securus Technologies handles electronic messaging at ADCRR state facilities for e-stamps and text messages.",
      "Arizona has not eliminated phone call fees at state facilities. Families pay per-minute rates subject to FCC caps. Mail processing varies by unit at Arizona facilities. Some units still deliver physical mail while others have transitioned to digital scanning. Before sending mail to an Arizona facility, call the complex directly or check the ADCRR website to confirm the current mail processing method for the specific unit. For family assistance contact the ADCRR Family and Friends Liaison at 602-364-3945 or toll-free at 866-333-2039.",
    ],

    overview: [
      "Which provider do Arizona state prison families use? ICSolutions handles phone calls at ADCRR state facilities. Contact ICSolutions at 888-506-8407 or visit icsolutions.com. Securus Technologies handles electronic messaging including e-stamps and text messages. You need separate accounts for phone calls and electronic messaging since these are different providers.",
      "What is the PAN list and how does it affect calls? Effective February 15, 2026, ADCRR reimplemented the Personal Allowed Number (PAN) list. Inmates can only call approved numbers from their visitation list, up to 20 people. To receive calls you must first be approved on the inmate visitation list and then be added to the PAN list by the inmate. Families not on the visitation list cannot receive calls regardless of having an ICSolutions account.",
      "What is the most common mistake Arizona prison families make? Setting up an ICSolutions account before being approved on the visitation list is the most common mistake. Arizona requires you to be on the inmate visitation list before being added to the PAN call list. Create your ICSolutions account but also ensure you are approved on the visitation list. Apply for visitation through the ADCRR visitation application at corrections.az.gov.",
    ],

    faq: [
      {
        question: "Which provider do I use for Arizona state prison phone calls?",
        answer: "ICSolutions handles phone calls at ADCRR Arizona state facilities. Contact ICSolutions at 888-506-8407 or visit icsolutions.com to set up a Prepaid Collect account. You must also be approved on the inmate visitation list and added to the Personal Allowed Number (PAN) list before calls can connect. If you accept a call before setting up an account, you receive one complimentary 60-second call then are routed to set up an account.",
      },
      {
        question: "What is the PAN list and how do I get on it?",
        answer: "The Personal Allowed Number (PAN) list was reimplemented by ADCRR effective February 15, 2026. Inmates can only call numbers from their approved visitation list, up to 20 people. To be added to the PAN list, you must first be approved on the inmate visitation list. The inmate then requests to add your number to their PAN list. Families not on the visitation list cannot receive calls regardless of having an ICSolutions account.",
      },
      {
        question: "How do I send electronic messages to someone at an Arizona state prison?",
        answer: "Securus Technologies handles electronic messaging at ADCRR state facilities. Visit securustech.net or download the Securus app to create an account and purchase e-stamps. Text message packages range from 100 messages for $10 to 300 messages for $30. Messages have a 160-character limit. Both sender and recipient must be approved contacts. This is a separate account from your ICSolutions phone account.",
      },
      {
        question: "Are phone calls free at Arizona state prisons?",
        answer: "No. Arizona has not eliminated phone call fees at ADCRR state facilities. Families pay per-minute rates subject to FCC caps effective April 2026. Arizona families have historically paid among the higher rates in the country. The FCC caps have reduced rates significantly. Contact ICSolutions at 888-506-8407 for current rate information at your specific facility.",
      },
      {
        question: "How do I find someone currently in an Arizona state prison?",
        answer: "Use the ADCRR inmate search tool at corrections.az.gov. Include the ADC number on all mail sent to ADCRR facilities. The ADC number must be on the envelope along with the assigned prison complex, unit, and the inmate full legal name. For family assistance contact the ADCRR Family and Friends Liaison at 602-364-3945 or toll-free at 866-333-2039.",
      },
      {
        question: "How do I apply for visitation at an Arizona state prison?",
        answer: "Apply for visitation through the ADCRR visitation application at corrections.az.gov. You must be approved on the visitation list before you can be added to the PAN phone list. Schedule in-person or video visitation through the ADCRR portal after approval. For visitation contact emails and assistance, use the ADCRR Family and Friends Liaison at familyandfriendsliaison@azdoa.gov.",
      },
      {
        question: "Does Arizona scan prison mail?",
        answer: "Mail processing varies by unit at Arizona facilities. Some units still deliver physical mail while others have transitioned to digital scanning where letters are read on a screen rather than held physically by the inmate. Before sending anything to an Arizona facility, call the complex directly or check the ADCRR website to confirm the current mail processing method for the specific unit your loved one is in.",
      },
      {
        question: "What happens when my loved one transfers from an Arizona county jail to a state prison?",
        answer: "When someone transfers from an Arizona county jail to an ADCRR state prison, the communication providers change. You will need an ICSolutions account for phone calls and a Securus account for electronic messaging. You must also apply for the visitation list and be added to the PAN call list. Your county jail accounts do not transfer. Confirm the new facility and ADC number before setting up accounts.",
      },
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
    seoTitle: "Pennsylvania Inmate Phone Calls, Visits, Mail and Money (PA DOC)",
    seoDescription: "Contact someone in a Pennsylvania state prison: PA DOC phone calls through Securus, email via ViaPath/ConnectNetwork, money through JPay, mail via Smart Communications. County jails use separate vendors.",

    intro: [
      "Pennsylvania's correctional system includes state prisons operated by the Pennsylvania Department of Corrections, a substantial federal Bureau of Prisons presence particularly in the central part of the state, and county jails across its 67 counties. The PA DOC system includes facilities ranging from maximum-security state correctional institutions to smaller specialized treatment facilities. Federal prisons in Pennsylvania include USP Lewisburg, FCI Allenwood, USP Canaan, and several other institutions in the Susquehanna and Pocono regions, making central Pennsylvania home to a dense concentration of federal correctional facilities.",

      "Phone calls in PA DOC state prisons run through Securus, email runs through ViaPath Technologies (ConnectNetwork), money runs through JPay, and general mail runs through Smart Communications. These are four separate systems, and setting up the wrong one is the most common mistake families make. County facilities, including the large Philadelphia prison system and the Allegheny County Jail in Pittsburgh, operate under separate contracts from state facilities; Allegheny County Jail uses GTL for phone calls. Federal prisons in Pennsylvania require CorrLinks for electronic messaging under Bureau of Prisons rules. One common point of confusion for Pennsylvania families is that county jails and state prisons are entirely separate systems with no shared provider infrastructure, so account setup must be done correctly from the start.",

      "Pennsylvania families often struggle to find clear, organized information about correctional communication because the relevant details are spread across state corrections websites, county government pages, and individual provider portals. This directory brings that information together so you can find out which provider serves the specific Pennsylvania facility you are dealing with, what communication options are available, and how to get started without working through multiple disconnected government resources. Whether the situation involves a state prison in Centre County, a county jail in Philadelphia, or a federal facility near Lewisburg, the goal is to give you accurate information in one place.",
    ],


    overview: [
      "Who provides phone, email, money, and mail services in Pennsylvania state prisons? Phone calls run through Securus. Create a phone account at securustech.net, or call Securus at 800-844-6591. Securus calls may appear as spam, so save the number in your contacts or tell your cell carrier it is an authorized number. Email runs through ViaPath Technologies: create an account at web.connectnetwork.com, or call ViaPath Friends and Family Customer Service at 1-877-650-4249. All emails are reviewed for appropriate content. Money runs through JPay: deposit on the JPay website, by phone at 800-574-5729, by money order sent to JPay, or at lobby kiosks at each state prison. Mail runs through Smart Communications, not to the prison. The PA DOC contact page does not publish a per-minute phone rate, so check your Securus account for current rates.",
      "How do visits work in Pennsylvania state prisons? Visits are in person or by video, and all visits must be scheduled at least two days in advance through the Inmate Visitation System (IVS). You must create an IVS account and be on the inmate's authorized visitor list to schedule. In-person visits: up to four per month including one weekend visit, guaranteed at least one hour, maximum four visitors per visit (two at Quehanna Boot Camp). Video visits are free: up to six per month including one weekend visit, with up to six visitors able to join. Visit limits may vary by custody status. Video visits are monitored and recorded, except visits with legal counsel. If the facility cancels a visit, you get an email at the address on your IVS account. For scheduling questions, contact the facility or email RA-CRDOCINMATEVSS@pa.gov.",
      "How do mail and money differ between state prisons and county jails in Pennsylvania? In state prisons, general mail goes to Smart Communications/PA DOC, Inmate Name/Inmate Number, State Correctional Institution, PO Box 33028, St. Petersburg, FL 33733. Publications and photo books go to the Security Processing Center, 268 Bricker Road, Bellefonte, PA 16823-1667. Official documents and original transactional paperwork go to the institution's business office. Legal mail needs a DOC-issued attorney or court control number. Money goes through JPay, and money orders are not accepted at state prisons. County jails set their own contracts and may use completely different vendors and mail routes. For example, Allegheny County Jail uses GTL for phone calls, with 30 minutes of free calls per day, per the county's own page. Check the specific jail's page before setting up any account.",
    ],

    faq: [
      {
        question: "Who provides phone service in Pennsylvania state prisons?",
        answer: "Securus. To receive calls from an inmate in a PA DOC facility, you must create a phone account through Securus at securustech.net, or call Securus at 800-844-6591. Calls through Securus may appear as spam, so store the number in your contacts or tell your cell carrier it is an authorized number. The PA DOC contact page does not publish a per-minute phone rate, so check your Securus account for current rates.",
      },
      {
        question: "How do I send email to someone in a Pennsylvania state prison?",
        answer: "The DOC uses ViaPath Technologies for email. Create an account at web.connectnetwork.com to obtain message credit information. Direct questions to ViaPath Technologies Friends and Family Customer Service at 1-877-650-4249. The DOC is not responsible for creating accounts or troubleshooting technical issues. All emails inmates receive are subject to review for appropriate content.",
      },
      {
        question: "How do I visit someone in a Pennsylvania state prison?",
        answer: "Schedule at least two days in advance through the Inmate Visitation System (IVS). You must create an IVS account and be on the inmate's authorized visitor list. In-person visits: up to four per month including one weekend visit, guaranteed at least one hour, maximum four visitors per visit (two at Quehanna Boot Camp). Video visits are free: up to six per month including one weekend visit, with up to six visitors able to join. Visit limits may vary by custody status. Video visits are monitored and recorded, except visits with legal counsel. For scheduling questions, contact the facility or email RA-CRDOCINMATEVSS@pa.gov.",
      },
      {
        question: "How do I send mail to someone in a Pennsylvania state prison?",
        answer: "Send general correspondence (letters, greeting cards, pictures, children's drawings, photos) to Smart Communications/PA DOC, Inmate Name/Inmate Number, State Correctional Institution, PO Box 33028, St. Petersburg, FL 33733. Include a full return address with your first and last name, the inmate's full correct name and number, print on 8.5 by 11 paper, and do not bind it or leave it open like a book. Photos are limited to 25 per mailing, cannot contain obscenity, explicit sexual material, or nudity, and originals are destroyed after 45 days. Send publications and photo books to the Security Processing Center, 268 Bricker Road, Bellefonte, PA 16823-1667, only from original source vendors. Send official documents and original transactional paperwork to the institution's business office. Legal mail needs a DOC-issued attorney or court control number.",
      },
      {
        question: "How do I send money to someone in a Pennsylvania state prison?",
        answer: "Use JPay, which processes all credit card and money order payments for the PA DOC. Deposit on the JPay website, by phone at 800-574-5729, by money order sent to JPay, or at lobby kiosks at each state prison. Money orders must be sent to JPay and are not accepted at state correctional institutions. Include a deposit slip with the inmate ID number, inmate name, and sender's name and address. Do not include personal items with money orders; they will be discarded. Credit card deposits are limited to $300 per card every 72 hours, and money orders are limited to $999.99 each. If the inmate owes fines, costs, or restitution, a percentage of the deposit may go to paying that debt. Do not send money for inmates to any other individual, website, or email account.",
      },
      {
        question: "How do I find someone in a Pennsylvania state prison?",
        answer: "Use the PA DOC Inmate and Parolee Locator, which covers state-sentenced inmates and parolees. You need a last name or inmate number; a first name helps for common names. Information is updated daily. People incarcerated in another state or in a county facility cannot be found using the locator. Other personal information can be self-reported and is not independently verified. Disable your pop-up blocker, and try a different device or browser if the locator fails. Still need help: email ra-contactdoc@pa.gov.",
      },
      {
        question: "Do county jails in Pennsylvania use the same providers as state prisons?",
        answer: "No. Each county sets its own contracts, and county jails and state prisons are entirely separate systems with no shared provider infrastructure. For example, Allegheny County Jail uses GTL for phone calls, with 30 minutes of free calls per day, per the county's own page. Set up a GTL account at 1-800-483-8314 or on the ConnectNetwork website. Check the specific jail's page before setting up any account, because the provider for one county may be completely different from the provider for another.",
      },
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
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone calls at Pennsylvania state prisons. Video visits are free through the DOC Inmate Visitation System.",
      },
      {
        name: "ConnectNetwork",
        slug: "connectnetwork",
        initial: "C",
        color: "bg-sky-600",
        description: "Email for PA DOC state prisons via ViaPath Technologies.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "Money transfer for Pennsylvania Department of Corrections state facilities.",
      },
      {
        name: "Smart Communications",
        slug: "smart-communications",
        initial: "S",
        color: "bg-cyan-600",
        description: "Mail scanning for PA DOC state prisons; general mail goes to Smart Communications, not the prison.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone calls at county jails such as Allegheny County Jail. Not the phone provider for PA DOC state prisons.",
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
        slug: "sci-phoenix",
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
    seoTitle: "Tennessee Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Tennessee jail or prison. Find the right provider for TDOC state prisons and county jails.",

    intro: [
      "Tennessee operates its state prison system through the Tennessee Department of Correction (TDOC). ConnectNetwork powered by GTL and ViaPath Technologies is the primary platform for phone calls at all TDOC state facilities. The per-minute rate for ConnectNetwork decreased to $0.075 effective July 1, 2024. Tennessee does not permit inbound telephone calls for inmates. All calls are outbound from the facility. In the event of a family emergency, contact the facility chaplain who may facilitate a call where necessary.",
      "Every Tennessee state inmate is assigned a unique TDOC number at intake that must appear on all mail sent to TDOC facilities. Find the TDOC number through the Tennessee DOC offender search at foil.app.tn.gov. The TDOC number is permanent for the duration of the sentence regardless of facility transfers within the Tennessee system. County jail detainees have their own booking numbers that are separate from TDOC numbers.",
      "Tennessee is not among the states that offer free inmate phone calls. Tennessee has 95 county jails and each contracts its own phone vendor independently from TDOC. County rates and providers vary significantly. Davidson County Nashville uses ICSolutions. Shelby County Memphis uses NCIC Inmate Communications. Hamilton County Chattanooga uses GettingOut. Always confirm the specific provider for each county jail before setting up any account.",
    ],

    overview: [
      "Which provider do Tennessee state prison families use? ConnectNetwork powered by GTL and ViaPath Technologies handles all phone calls at TDOC Tennessee state facilities. Create a ConnectNetwork account at connectnetwork.com. The per-minute rate is $0.075 as of July 1, 2024. Tennessee does not permit inbound calls to inmates. Your loved one must initiate all calls from facility phones during approved calling hours.",
      "What is the TDOC number and why does it matter? The TDOC number is assigned at intake and stays with the inmate for their entire sentence. It must appear on all mail sent to TDOC facilities. Find it through the Tennessee DOC offender search at foil.app.tn.gov. The TDOC number is different from any court case number or county booking number. Mail without the TDOC number is routinely delayed or returned.",
      "What is the most common mistake Tennessee prison families make? Using the wrong provider for county jails is the most common mistake. TDOC state prisons use ConnectNetwork but Tennessee has 95 county jails each with its own vendor. Families with loved ones at Davidson County Nashville should use ICSolutions. Shelby County Memphis families should use NCIC. Hamilton County Chattanooga families should use GettingOut. Always confirm the specific jail provider before setting up any account.",
    ],

    faq: [
      {
        question: "Which provider do I use for Tennessee state prison phone calls?",
        answer: "ConnectNetwork powered by GTL and ViaPath Technologies handles all phone calls at TDOC Tennessee state facilities. Create a ConnectNetwork account at connectnetwork.com. The per-minute rate decreased to $0.075 effective July 1, 2024. Tennessee does not permit inbound calls. Your loved one must initiate all calls from facility phones.",
      },
      {
        question: "Are phone calls free at Tennessee state prisons?",
        answer: "No. Tennessee is not among the states offering free inmate phone calls. ConnectNetwork GTL holds the TDOC contract and charges $0.075 per minute as of July 1, 2024. This rate applies to TDOC state prison calls. County jail rates vary by county and provider. Contact ConnectNetwork at connectnetwork.com for current rate information.",
      },
      {
        question: "What is the TDOC number and where do I find it?",
        answer: "The TDOC number is the identification number assigned at intake that is permanent for the entire sentence. It must appear on all mail sent to TDOC facilities. Find it through the Tennessee DOC offender search at foil.app.tn.gov or ask your loved one to provide it. The TDOC number is different from any court case number or county booking number.",
      },
      {
        question: "How do I find someone currently in a Tennessee state prison?",
        answer: "Use the Tennessee DOC offender search at foil.app.tn.gov. You can search by name, TDOC ID, or social security number. Results include the inmate photo, status, location, conviction details, sentence length, and parole eligibility date. For county jail inmates use the specific county sheriff's website. For federal inmates in Tennessee use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "Which provider does Davidson County Nashville jail use?",
        answer: "Davidson County Sheriff's Office in Nashville uses ICSolutions for prepaid phone accounts. The DDC video registration uses Securus. For 24-hour inmate information call 615-862-8123. ICSolutions is a different provider from ConnectNetwork which serves TDOC state prisons. Always confirm the current provider directly with the county facility before setting up accounts.",
      },
      {
        question: "Which provider does Shelby County Memphis jail use?",
        answer: "Shelby County Jail in Memphis at 201 Poplar Avenue uses NCIC Inmate Communications for prepaid phone accounts. Contact the jail at 901-222-5500 for current provider information. NCIC is a different provider from ConnectNetwork which serves TDOC state prisons. Do not set up a ConnectNetwork account for Shelby County jail calls.",
      },
      {
        question: "How do I send money to someone at a Tennessee state prison?",
        answer: "Money can be deposited through ConnectNetwork at connectnetwork.com for TDOC state prison trust accounts. ConnectNetwork payments are instantly processed with all transactions credited within two business days. For county jail money transfers, contact the specific county jail for their approved deposit methods as these vary by county.",
      },
      {
        question: "What happens when my loved one transfers from a Tennessee county jail to a state prison?",
        answer: "When someone transfers from a Tennessee county jail to a TDOC state prison, the provider changes to ConnectNetwork GTL. They receive a TDOC number that must be used for all future communication and mail. Your county jail account does not transfer. Create a new ConnectNetwork account after confirming the transfer is complete and you have the TDOC number.",
      },
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
    seoTitle: "Indiana Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in an Indiana jail or prison. Find the right provider for IDOC state prisons and county jails.",

    intro: [
      "Indiana operates its state prison system through the Indiana Department of Correction (IDOC). ViaPath Technologies through ConnectNetwork handles phone calls at all IDOC state facilities. For questions about calling options contact ViaPath at 877-650-4249. Each incarcerated individual must complete and sign a telephone list identifying no more than 20 names and phone numbers of approved contacts. You must be on this approved list before calls can connect to your number.",
      "Indiana IDOC has transitioned to GettingOut.com for digital correspondence including electronic messages and photos. Friends and family must create a new account at gettingout.com to send messages and photos. After the transition, PIN debit funds added through ConnectNetwork work for both phone calls and tablet services under a unified account. IDOC has a designated intake facility for each population group. Adult males go to the Reception Diagnostic Center. Adult females go to Rockville Correctional Facility.",
      "Indiana is not among the states that offer free inmate phone calls. Families pay per-minute rates subject to FCC caps. Collect calls cannot be made to cell phones, office phones, or hospital numbers. For cell phone users, setting up a ConnectNetwork prepaid account is required. Find the DOC number and facility location using the IDOC incarcerated locator at in.gov/idoc.",
    ],

    overview: [
      "Which providers do Indiana state prison families use? ViaPath through ConnectNetwork handles phone calls at all IDOC state facilities. GettingOut.com handles digital messaging and photos after the IDOC platform transition. These are two separate accounts. Contact ViaPath at 877-650-4249 for phone account questions. Create a GettingOut account at gettingout.com for digital correspondence.",
      "What changed about Indiana prison digital messaging? IDOC transitioned to GettingOut.com for digital correspondence including electronic messages and photos. Friends and family must create a new GettingOut account to send messages and photos. PIN debit funds through ConnectNetwork now work for both phone calls and tablets. If you had an account on a previous platform, create a new GettingOut account and set it up in advance of your loved one receiving their new tablet.",
      "What is the most common mistake Indiana prison families make? Not being on the approved telephone list is the most common mistake. Each incarcerated person can have no more than 20 names on their call list. If your number is not on the list, calls cannot connect regardless of whether you have a ConnectNetwork account. Also, collect calls cannot be made to cell phones. Cell phone users must set up a ConnectNetwork prepaid account to receive calls.",
    ],

    faq: [
      {
        question: "Which provider do I use for Indiana state prison phone calls?",
        answer: "ViaPath Technologies through ConnectNetwork handles phone calls at all IDOC Indiana state facilities. Contact ViaPath at 877-650-4249 for account setup questions. You must also be on the incarcerated person's approved telephone list of no more than 20 names. Collect calls cannot be made to cell phones. Cell phone users must set up a prepaid ConnectNetwork account.",
      },
      {
        question: "How do I send messages and photos to someone at an Indiana state prison?",
        answer: "Indiana IDOC transitioned digital correspondence to GettingOut.com. Create a new account at gettingout.com to send electronic messages and photos. You can search for your incarcerated loved one and add them as a contact. The Friends and Family feature allows you to add funds for messages and photos. PIN debit funds through ConnectNetwork also work for both phones and tablets.",
      },
      {
        question: "Are phone calls free at Indiana state prisons?",
        answer: "No. Indiana is not among the states offering free inmate phone calls. Families pay per-minute rates subject to FCC caps. Collect calls cannot be made to cell phones, requiring cell phone users to set up a prepaid ConnectNetwork account. Contact ViaPath at 877-650-4249 for current rate information at your specific facility.",
      },
      {
        question: "How do I get on the approved call list at an Indiana state prison?",
        answer: "The incarcerated person must complete and sign a telephone list identifying no more than 20 names and phone numbers of approved contacts. You must ask your loved one to add your name and number to their list from inside the facility. Without being on this list, calls cannot connect to your number even with a funded ConnectNetwork account.",
      },
      {
        question: "How do I find someone currently in an Indiana state prison?",
        answer: "Use the IDOC incarcerated locator at in.gov/idoc to find the facility location and DOC number. IDOC has designated intake facilities for each population group. Adult males go to the Reception Diagnostic Center. Adult females go to Rockville Correctional Facility. For federal inmates in Indiana use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "What is the DOC number and where do I find it?",
        answer: "The DOC number is the identification number assigned to every person in Indiana DOC custody. You need it for communication accounts and the incarcerated locator. Find it through the IDOC incarcerated locator at in.gov/idoc or ask your loved one to provide it. The DOC number is different from any court case number.",
      },
      {
        question: "Can I receive collect calls from Indiana state prisons on my cell phone?",
        answer: "No. Collect calls cannot be made to cell phones from Indiana state prisons. Cell phone users must set up a ViaPath ConnectNetwork prepaid account before receiving calls. Contact ViaPath at 877-650-4249 to set up a prepaid account linked to your cell phone number. Once the prepaid account is funded, your loved one can call your cell phone directly.",
      },
      {
        question: "What happens when my loved one transfers from an Indiana county jail to a state prison?",
        answer: "When someone transfers from an Indiana county jail to an IDOC state prison, the providers change. County jails use their own contracted vendors. IDOC state prisons use ViaPath ConnectNetwork for calls and GettingOut for digital messaging. Your county jail accounts do not transfer. Create new accounts and ensure you are added to the approved telephone list after the transfer is confirmed.",
      },
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
    seoTitle: "Virginia Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Virginia jail or prison. Find the right provider for VADOC state prisons and county jails.",

    intro: [
      "Virginia operates its state prison system through the Virginia Department of Corrections (VADOC), which manages 26 state prisons and oversees 71 local jails across 133 counties. GTL ConnectNetwork is the phone provider for all VADOC state facilities. All calls are limited to 20 minutes. Upon reception, inmates are automatically enrolled in the phone system and given a PIN. They then create an approved call list. Only numbers on the approved call list can receive calls. You will need the inmate's 7-digit state ID number to set up your ConnectNetwork account.",
      "To set up a prepaid phone account, visit connectnetwork.com and select Virginia as the state and Department of Corrections as the agency. For ConnectNetwork customer service call 1-800-483-8314. Inmates can also use a PIN Debit Account where the inmate manages the account and the cost of calls is deducted from their account. To deposit money into a PIN Debit Account, create a ConnectNetwork account and select Virginia DOC. All calls are recorded and monitored except properly verified attorney calls.",
      "Virginia is not among the states that offer free phone calls at state prisons. All calls are collect or prepaid. Collect calls are limited to a small amount before the system prompts families to create or use a prepaid account. Family and friends can send JPay secure messages and photos through the VADOC central mail distribution center. The central mail distribution center receives all incoming mail and screens it before delivery. Photos are limited to three per envelope.",
    ],

    overview: [
      "Which provider do Virginia state prison families use? GTL ConnectNetwork handles all phone calls at VADOC state facilities. Visit connectnetwork.com and select Virginia DOC. Call ConnectNetwork at 1-800-483-8314 for help. You will need the inmate's 7-digit state ID number. Find the state ID number using the VADOC Inmate and Supervisee Locator at vadoc.virginia.gov.",
      "What is the 7-digit state ID number and how do I find it? The 7-digit state ID number is the VADOC identification number assigned to every person in Virginia DOC custody. You need this number to set up a ConnectNetwork account and to locate the inmate online. Find it using the VADOC Inmate and Supervisee Locator at vadoc.virginia.gov by searching by name. The number appears in the second column of the search results next to the inmate's name.",
      "What is the most common mistake Virginia prison families make? Setting up a collect call account instead of a prepaid account is the most common mistake. Collect calls are limited to a small amount before the system prompts you to create a prepaid account. Setting up a ConnectNetwork prepaid account from the start avoids this limitation and typically costs less per minute than collect calls. Visit connectnetwork.com to create your prepaid account before the first call.",
    ],

    faq: [
      {
        question: "Which provider do I use for Virginia state prison phone calls?",
        answer: "GTL ConnectNetwork handles all phone calls at VADOC Virginia state facilities. Visit connectnetwork.com and select Virginia as the state and Department of Corrections as the agency. For customer service call 1-800-483-8314. You will need the inmate's 7-digit state ID number to set up your account.",
      },
      {
        question: "How do I find the 7-digit state ID number for a Virginia inmate?",
        answer: "Use the VADOC Inmate and Supervisee Locator at vadoc.virginia.gov. Search by the inmate's name. The 7-digit state ID number appears in the second column of the search results next to the inmate's name. You need this number to set up a ConnectNetwork phone account and to deposit money into a PIN Debit Account.",
      },
      {
        question: "Are phone calls free at Virginia state prisons?",
        answer: "No. Virginia is not among the states offering free phone calls at state prisons. All calls are collect or prepaid. Collect calls are limited to a small amount before the system prompts families to create a prepaid ConnectNetwork account. Setting up a prepaid account from the start is recommended. Phone rates are subject to FCC caps effective April 6, 2026.",
      },
      {
        question: "What is a PIN Debit Account and how does it work in Virginia?",
        answer: "A PIN Debit Account is managed by the inmate. The cost of calls is deducted from the inmate's account rather than from a family-funded prepaid account. Family members can deposit money into the inmate's PIN Debit Account by visiting connectnetwork.com, creating an account, and selecting Virginia DOC. The inmate can then use the PIN Debit Account to call any approved number on their call list.",
      },
      {
        question: "How do I send messages and photos to someone at a Virginia state prison?",
        answer: "Family and friends can send JPay secure messages and photos through the VADOC system. Visit jpay.com to create an account and send electronic messages. Physical photos sent by mail are limited to three per envelope and go through the VADOC central mail distribution center for screening. All incoming mail is inspected before delivery.",
      },
      {
        question: "How do I find someone currently in a Virginia state prison?",
        answer: "Use the VADOC Inmate and Supervisee Locator at vadoc.virginia.gov. You can search by name or DOC ID number. The locator is updated daily and includes people housed in state correctional facilities as well as those supervised in the community. For additional questions contact the VADOC Correspondence Unit at P.O. Box 26963, Richmond, VA 23261-6963.",
      },
      {
        question: "What are the phone call rules at Virginia state prisons?",
        answer: "All calls at VADOC facilities are limited to 20 minutes. Inmates must have an approved call list and can only call numbers on that list. All calls are recorded and monitored except properly verified attorney calls. Inmates are automatically enrolled in the phone system upon reception and given a PIN to access the system. Phone privileges can be revoked for abuse.",
      },
      {
        question: "What happens when my loved one transfers from a Virginia county jail to a state prison?",
        answer: "When someone transfers from a Virginia county jail to a VADOC state prison, they receive a 7-digit state ID number and the communication providers may change. County jails use their own contracted providers. VADOC state prisons use GTL ConnectNetwork for phone calls. Create a new ConnectNetwork account after confirming the transfer and obtaining the new state ID number.",
      },
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
    seoTitle: "Louisiana Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Louisiana jail or prison. Find the right provider for LDOC state prisons and parish jails.",

    intro: [
      "Louisiana operates its state prison system through the Department of Public Safety and Corrections (DPS&C). Securus Technologies holds the LDOC contract for phone calls at most state facilities. The inmate must add your phone number to their approved call list, which can hold up to 20 numbers and is updated quarterly. Calls to prepaid cell phones are not allowed. You must set up a Securus account and provide your primary residence information to receive calls. Contact Securus at 1-800-844-6591 or visit securustech.net.",
      "JPay provides electronic messaging and money transfer services for Louisiana state prison inmates. All state correctional facilities use JPay for money deposits to inmate accounts. Deposits can be made via U.S. mail, internet, telephone, JPay kiosks at the facility, and MoneyGram locations using MoneyGram code 8714. JPay email service is faster than regular mail and allows appropriate photos to be attached. Visit jpay.com to create an account and find your loved one by name or LDOC number.",
      "Louisiana is not among the states that offer free inmate phone calls. Louisiana also houses a significant portion of its incarcerated population in parish jails under state contract. Parish jails use their own phone carriers with their own rate structures. The provider and rates at parish jails vary significantly from state facilities. Always confirm the specific provider for the exact facility before setting up any account. Use VINELink at vinelink.vineapps.com to search for Louisiana state inmates.",
    ],

    overview: [
      "Which providers do Louisiana state prison families use? Securus Technologies handles phone calls at most LDOC state facilities. Call Securus at 1-800-844-6591 or visit securustech.net. JPay handles electronic messaging and money transfers. Visit jpay.com to create an account. Calls to prepaid cell phones are not allowed under the LDOC contract. Your number must be on the inmate approved call list before calls can connect.",
      "What is the LDOC number and how do I find it? The LDOC number is the identification number assigned to every person in Louisiana DOC custody. You need this number to find the inmate through VINELink, to set up JPay messaging, and for money transfers. Search VINELink at vinelink.vineapps.com for Louisiana state inmates. You can also call the DPS&C main line at 225-342-9711 to confirm the current facility and LDOC number.",
      "What is the most common mistake Louisiana prison families make? Setting up a Securus account and expecting calls to connect without being on the approved call list is the most common mistake. The inmate must add your number to their approved call list from inside the facility. The list is updated quarterly and holds up to 20 numbers. Also, calls to prepaid cell phones are not allowed. If you have a prepaid cell phone you cannot receive LDOC calls regardless of having a Securus account.",
    ],

    faq: [
      {
        question: "Which provider do I use for Louisiana state prison phone calls?",
        answer: "Securus Technologies holds the LDOC contract for most Louisiana state facilities. Visit securustech.net or call 1-800-844-6591 to set up an account. The inmate must add your number to their approved call list before calls can connect. Calls to prepaid cell phones are not allowed. You must provide your primary residence information when setting up your Securus account.",
      },
      {
        question: "Are phone calls free at Louisiana state prisons?",
        answer: "No. Louisiana is not among the states offering free inmate phone calls. Securus Technologies holds the LDOC contract and charges per-minute rates subject to FCC caps effective April 2026. Parish jails in Louisiana use their own carriers with their own rates. Phone costs have been documented as a financial burden for Louisiana families. JPay electronic messaging is a lower-cost alternative to phone calls.",
      },
      {
        question: "How do I send money to someone at a Louisiana state prison?",
        answer: "All Louisiana state correctional facilities use JPay for money deposits. Deposits can be made online at jpay.com, by phone through JPay, by U.S. mail, at JPay kiosks at the facility, or through MoneyGram locations using MoneyGram code 8714. Always include the inmate LDOC number and full name. For questions contact JPay at 800-574-5729.",
      },
      {
        question: "How do I find someone currently in a Louisiana state prison?",
        answer: "Search VINELink at vinelink.vineapps.com for Louisiana state inmates. You can search by name to find the current facility, LDOC number, and basic information. For parish jail inmates, contact the specific parish facility directly. You can also call the DPS&C main line at 225-342-9711 to confirm current location. Always verify the current facility before setting up accounts.",
      },
      {
        question: "Can I receive calls from a Louisiana prison on my cell phone?",
        answer: "Yes, but only if your cell phone is not a prepaid phone. The Louisiana DOC allows calls to approved cell phone numbers but calls to prepaid cell phones are not allowed. You must set up a Securus account and provide your primary residence information. If you have a prepaid cell phone you cannot receive LDOC calls. Contact Securus at 1-800-844-6591 to confirm whether your number qualifies.",
      },
      {
        question: "How do I send messages to someone at a Louisiana state prison?",
        answer: "JPay provides electronic messaging for Louisiana state prison inmates. Visit jpay.com to create an account and find your loved one by name or LDOC number. JPay email is faster than regular mail and allows appropriate photos to be attached. All messages go through a secure connection. The inmate never has direct internet access. For JPay customer service call 800-574-5729.",
      },
      {
        question: "Do Louisiana parish jails use the same providers as state prisons?",
        answer: "No. Louisiana parish jails use their own phone carriers with their own rate structures that vary from state facilities. Common providers at Louisiana parish jails include Securus and GTL. Some parish jails are housed under state contract with their own provider agreements. Always confirm the specific provider for the exact parish jail before setting up any account.",
      },
      {
        question: "What happens when my loved one transfers from a Louisiana parish jail to a state prison?",
        answer: "When someone transfers from a Louisiana parish jail to an LDOC state prison, the providers may change. Parish jails use various carriers while LDOC state prisons primarily use Securus for calls and JPay for messaging. Your parish jail accounts may not transfer. Create new accounts after confirming the transfer is complete and you have the LDOC number. Search VINELink at vinelink.vineapps.com to find the new facility.",
      },
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
    seoTitle: "Alabama Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in an Alabama jail or prison. Securus handles ADOC phone calls. JPay sends money to inmates.",

    intro: [
      "Alabama's correctional system is operated by the Alabama Department of Corrections (ADOC), headquartered in Montgomery. The ADOC system includes state prisons, work release centers, and community corrections facilities across all 67 counties. Securus Technologies holds the ADOC state contract for phone calls and video visits. JPay is the primary platform for money transfers to inmate trust accounts at ADOC state facilities.",
      "As of November 10, 2025, ADOC no longer accepts personal mail sent directly to any facility. All personal mail must be sent to the ADOC Mail Processing Center in San Antonio, Texas. The mailing address is: Inmate Name, Inmate AIS Number, P.O. Box 17339, San Antonio, TX 78217. Mail sent directly to a facility after November 10, 2025 is returned to the sender. Include the inmate AIS number on every envelope or the mail will not be processed.",
      "Alabama is not among the states that have eliminated phone call fees. Securus Technologies holds the ADOC contract for most state facilities. Under FCC rules effective April 6, 2026, per-minute rates for inmate calls are now federally capped. County jails in Alabama use their own providers and have their own rate structures that vary by county. Always confirm the specific facility and its current provider before setting up any account.",
    ],

    overview: [
      "Which provider do Alabama county jails use? County jails across Alabama's 67 counties each contract with their own providers independently from ADOC. Common providers at Alabama county jails include Securus, GTL ConnectNetwork, and ICSolutions. Jefferson County Jail, which serves the Birmingham metro area, uses its own contracted provider. Always confirm the specific provider for each county facility before setting up any account.",
      "What is the most common mistake Alabama families make? Setting up a JPay account for phone calls is the most common mistake. JPay handles money transfers at ADOC state facilities but Securus handles phone calls. These are separate accounts. Funding your JPay account does not enable phone calls and your Securus AdvancePay account is separate from the JPay trust fund account.",
      "How has mail changed at Alabama prisons in 2025? ADOC completely eliminated direct mail to facilities as of November 10, 2025. All personal mail now goes to a processing center in San Antonio, Texas. This affects letters, cards, and photos. Mail sent directly to a facility is returned to the sender without being delivered. Always use the P.O. Box 17339, San Antonio TX 78217 address with the inmate name and AIS number.",
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
    seoTitle: "Missouri Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Missouri jail or prison. Find the right provider for MDOC state prisons and county jails.",

    intro: [
      "Missouri operates its state prison system through the Missouri Department of Corrections (MDOC). Securus Technologies is the phone service provider for all MDOC adult institutions. All calls are outbound from the facility. Inmates cannot receive incoming calls. Inmates use a personal identification number (PIN) to place calls through the automated security system. All calls are monitored and recorded. A recorded message plays throughout the conversation alerting both parties that the call originates from a correctional facility.",
      "Missouri DOC issues JPay computer tablets to all inmates in adult institutions. These tablets can be used to send and receive email through Securus Technologies. To communicate electronically with a Missouri DOC inmate, create a Securus account at securustech.net. Electronic messages are paid for by purchasing a book of electronic stamps. Families can send text messages, attach up to five photos, share a 30-second VideoGram, or send an image using Snap n Send. All messages, photos, and VideoGrams are subject to review.",
      "Missouri personal mail is no longer accepted directly at most facilities. All personal correspondence now goes to the Securus JPay digital mail center for scanning. To request personal correspondence be returned, call Securus at 800-844-6591. Missouri DOC facilities still accept certified mail pre-approved by the case manager, publications sent directly from publishers, visitor applications, and cards purchased through securustech.net. The DOC number must appear on the outside of every envelope or mail is delayed or returned.",
    ],

    overview: [
      "Which provider do Missouri state prison families use? Securus Technologies handles both phone calls and electronic messaging at all MDOC adult institutions. For phone accounts visit securustech.net or call 800-844-6591. For electronic messaging create a Securus account and purchase electronic stamps. Missouri DOC inmates also make calls through a phone application on JPay tablets powered by Securus. Phone privileges can be revoked for misuse including attempted three-way calls.",
      "What is the DOC number and why is it important? The DOC number is the unique identification number assigned by MDOC to every person sentenced to Missouri state prison. It must appear on the outside of every envelope mailed to a Missouri DOC facility. Mail without the DOC number is delayed or returned. Find the DOC number through the MDOC offender search at doc.mo.gov or ask your loved one to provide it.",
      "What is the most common mistake Missouri prison families make? Mailing personal letters directly to the facility is a common mistake. Missouri DOC personal mail now goes to the Securus JPay digital mail center for scanning rather than directly to the facility. Families used to direct mail who are not aware of this change may find their letters returned or delayed. Always check the current mailing procedures at doc.mo.gov before sending mail to confirm the correct address.",
    ],

    faq: [
      {
        question: "Which provider do I use for Missouri state prison phone calls?",
        answer: "Securus Technologies is the phone provider for all MDOC Missouri state institutions. Visit securustech.net or call 800-844-6591 to set up an account. You can set up an AdvanceConnect prepaid account to fund calls to your specific number. Inmates can also use debit minutes purchased from the canteen or kiosk. All calls are monitored and recorded for security purposes.",
      },
      {
        question: "How do I send messages to someone at a Missouri state prison?",
        answer: "Missouri DOC inmates are issued JPay tablets powered by Securus Technologies. Create a Securus account at securustech.net to send electronic messages. Messages are paid for by purchasing electronic stamps. You can send text messages, attach up to five photos, share a 30-second VideoGram, or send images using Snap n Send. All messages and photos are subject to review before delivery.",
      },
      {
        question: "Are phone calls free at Missouri state prisons?",
        answer: "No. Missouri is not among the states offering free inmate phone calls. Securus Technologies holds the MDOC contract and calls are charged per minute subject to FCC caps effective April 2026. Missouri has 114 counties and wide geographic distances make phone contact especially important for families. If phone costs are a barrier, JPay electronic messaging is a lower-cost alternative.",
      },
      {
        question: "Can I still mail letters directly to a Missouri state prison?",
        answer: "No. Missouri personal mail now goes to the Securus JPay digital mail center for scanning rather than directly to the facility. To request personal correspondence be returned, call Securus at 800-844-6591. MDOC facilities still accept certified mail pre-approved by the case manager, publications sent directly from publishers, visitor applications, and cards purchased through securustech.net.",
      },
      {
        question: "What is the DOC number and where do I find it?",
        answer: "The DOC number is the identification number assigned to every person sentenced to Missouri state prison. It must appear on the outside of every envelope mailed to an MDOC facility or the mail will be delayed or returned. Find it through the MDOC offender search at doc.mo.gov, on court documents, or ask your loved one to provide it during a call.",
      },
      {
        question: "How do I find someone currently in a Missouri state prison?",
        answer: "Use the Missouri DOC offender search at doc.mo.gov. You can search by name or DOC number. The search shows the current facility and basic information. For county jail inmates in Missouri, contact the specific county sheriff's office. Missouri has 114 counties each with their own jail system. For federal inmates in Missouri, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "What types of phone calls are available from Missouri state prisons?",
        answer: "Missouri DOC inmates can place collect calls, Securus Direct-Bill collect calls, debit calls using minutes purchased at the canteen or kiosk, and prepaid calls through AdvanceConnect. Collect calls appear on your regular phone bill. AdvanceConnect lets families fund calls in advance to a specific number. Inmates can also call through a phone app on their JPay tablet. Three-way calls are prohibited and detection results in disconnection and possible conduct violations.",
      },
      {
        question: "What happens when my loved one transfers from a Missouri county jail to a state prison?",
        answer: "When someone transfers from a Missouri county jail to an MDOC state prison, the provider changes to Securus. They receive a DOC number that must be used for all future communication and mail. County jail accounts do not transfer. Create a new Securus account and ensure you know the DOC number after the transfer is confirmed. Personal mail now goes to the Securus JPay digital mail center rather than directly to the facility.",
      },
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
    seoTitle: "Oklahoma Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in an Oklahoma jail or prison. Find the right provider for ODOC state prisons and county jails.",

    intro: [
      "Oklahoma operates its state prison system through the Oklahoma Department of Corrections (ODOC). Securus Technologies is the phone provider for all ODOC state facilities. Each facility has a unique outbound phone number to help prevent calls from being labeled as spam by mobile carriers. Save the specific calling number for your loved one's facility in your contacts to avoid missing calls. All non-privileged calls are recorded and monitored. Three-way calling, call forwarding, and spoofed numbers are blocked and misuse results in call restrictions.",
      "Oklahoma banned physical mail from entering state prisons in September 2024. All non-legal mail is sent to a processing center in Dallas, Texas for digital scanning before delivery. Legal mail is still delivered directly to the facility. Families who previously mailed letters directly must now send to the Dallas processing center. Contact the facility or the ODOC website for the current Dallas processing center address. Publications must be sent directly from the publisher.",
      "Oklahoma county jails use their own phone providers which differ from ODOC state prisons. Oklahoma County Detention Center in Oklahoma City uses NCIC Inmate Communications at 800-943-2189. Cleveland County Detention Center in Norman also uses NCIC. Securus handles ODOC state prisons. Always confirm which provider serves the specific facility before setting up any account. For video visits at select ODOC facilities including Mabel Bassett Correctional Center, schedule through the Securus platform.",
    ],

    overview: [
      "Which provider do Oklahoma state prison families use? Securus Technologies handles phone calls at all ODOC state prison facilities. Visit securustech.net or call 800-844-6591 to set up an account. Each facility has a unique outbound phone number. Save the specific number for your loved one's facility in your contacts. Oklahoma County Detention Center uses NCIC at 800-943-2189, not Securus.",
      "What happened to mail at Oklahoma state prisons? Oklahoma banned physical non-legal mail from state prisons in September 2024. All personal mail now goes to a Dallas Texas processing center for digital scanning. Legal mail is still delivered directly to the facility. Contact the ODOC website or the facility directly for the current Dallas processing center mailing address before sending anything.",
      "What is the most common mistake Oklahoma prison families make? Saving the wrong phone number and missing calls is very common. Oklahoma ODOC changed each facility to have its own unique outbound phone number specifically to prevent calls from being marked as spam. If you do not have the correct number saved, your phone may block the call or send it to voicemail. Contact the facility or the ODOC Securus resources page at oklahoma.gov to get the correct outbound number for the specific facility.",
    ],

    faq: [
      {
        question: "Which provider do I use for Oklahoma state prison phone calls?",
        answer: "Securus Technologies handles phone calls at all ODOC Oklahoma state prison facilities. Visit securustech.net or call 800-844-6591 to set up an account. Each ODOC facility now has a unique outbound phone number to prevent spam labeling. Contact the facility or visit oklahoma.gov to get the correct outbound number for your loved one's specific facility and save it in your contacts.",
      },
      {
        question: "Why are Oklahoma prison calls showing as spam on my phone?",
        answer: "Oklahoma ODOC changed to unique outbound phone numbers per facility specifically to address this problem. If calls are still being flagged as spam, save the specific facility outbound number in your contacts, contact your mobile carrier to whitelist the number, or call Securus at 800-844-6591 for assistance. Getting the correct unique number for the specific facility and saving it in contacts is the most effective solution.",
      },
      {
        question: "Can I still mail letters to Oklahoma state prisons?",
        answer: "No. Oklahoma banned physical non-legal mail from entering state prisons in September 2024. All personal mail now goes to a processing center in Dallas, Texas for digital scanning before delivery. Legal mail is still delivered directly to the facility. Contact the ODOC website or the specific facility for the current Dallas processing center mailing address before sending any personal correspondence.",
      },
      {
        question: "Which provider does Oklahoma County Detention Center use?",
        answer: "Oklahoma County Detention Center in Oklahoma City uses NCIC Inmate Communications, not Securus. Contact NCIC at 800-943-2189 for account setup. The facility is located at 201 N Shartel Ave, Oklahoma City, OK 73102 and can be reached at 405-713-1910. Cleveland County Detention Center in Norman also uses NCIC. Always confirm the provider for each specific county facility before setting up any account.",
      },
      {
        question: "Are video visits available at Oklahoma state prisons?",
        answer: "Yes, at select ODOC facilities. Video visits are available at Mabel Bassett Correctional Center, Joseph Harp Correctional Center, and Great Plains Correctional Center through Securus. Video visits are 20 minutes long and can be scheduled through the Securus platform using your smartphone or computer with webcam. Visit securustech.net to apply and schedule a video visit.",
      },
      {
        question: "How do I find someone currently in an Oklahoma state prison?",
        answer: "Use the ODOC Offender Search at oklahoma.gov/doc. You can search by name or DOC number. The search shows the current facility and basic information. For county jail inmates, contact the specific county sheriff's office. Oklahoma County Detention Center can be reached at 405-713-1910. For federal inmates in Oklahoma, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "Are phone calls free at Oklahoma state prisons?",
        answer: "No. Oklahoma is not among the states offering free inmate phone calls. Securus Technologies holds the ODOC contract. Oklahoma families paid 14 cents per minute after an FCC waiver raised rates from 6 cents in September 2025. FCC rate caps effective April 2026 apply to Oklahoma state facilities. For current rate information contact Securus at 800-844-6591.",
      },
      {
        question: "What happens when my loved one transfers from an Oklahoma county jail to a state prison?",
        answer: "When someone transfers from an Oklahoma county jail to an ODOC state prison, the provider changes to Securus. County jails use various providers including NCIC. Create a new Securus account after confirming the transfer is complete. Also note that personal mail now goes to the Dallas processing center rather than directly to the state prison. Verify the current mailing procedure at oklahoma.gov before sending mail.",
      },
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
    seoTitle: "Kentucky Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Kentucky jail or prison. Find the right provider for KDOC state prisons and county jails.",

    intro: [
      "Kentucky operates its state prison system through the Kentucky Department of Corrections (KDOC). Securus Technologies is the phone provider for all KDOC state facilities. To receive calls, set up a Securus AdvanceConnect or Inmate Debit account at securustech.net or call Securus at 972-734-1111 or 800-844-6591. AdvanceConnect lets you control which phone numbers the inmate can call and requires funds in your account. Inmate Debit allows the inmate to call anyone on their approved list using their own funds. Both options connect to cell phones.",
      "Money for inmate accounts in Kentucky state prisons is deposited through JPay at jpay.com or by phone, by MoneyGram, or by mailed money order. Many state-sentenced people in Kentucky are held in county jails rather than state prisons due to the state's contract system. If your loved one is in a county jail under state contract, confirm whether they use KDOC phone procedures or the county jail's own provider. Use the KOOL Kentucky Offender Online Lookup tool to find the current location and offender ID number.",
      "Kentucky is not among the states that offer free phone calls at state prisons. Securus phone call costs are subject to FCC caps effective April 2026. Kentucky's significant poverty rate makes phone costs a particular burden for families. JPay electronic messaging and written mail are lower-cost alternatives for regular contact. Incoming personal mail goes directly to the facility for inspection before delivery. Books and magazines must come directly from a publisher or approved retailer.",
    ],

    overview: [
      "Which providers do Kentucky state prison families use? Securus Technologies handles phone calls at all KDOC state facilities. Call 972-734-1111 or 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. These are two separate services. Use the KOOL offender lookup at corrections.ky.gov to find the current location and offender ID number before setting up any accounts.",
      "What is the KOOL system and why do I need the offender ID? KOOL stands for Kentucky Offender Online Lookup. It is the official KDOC search tool at corrections.ky.gov. You need the offender ID number for setting up Securus and JPay accounts, for mail, and for any contact with the facility. Without the correct ID number, account setup can fail or funds can be sent to the wrong person. Search by name to find the ID and current location.",
      "What is the most common mistake Kentucky prison families make? Not knowing whether their loved one is in a state prison or a county jail under state contract is the most common confusion. Kentucky uses county jails extensively to house state-sentenced inmates. If your loved one is in a county jail, that jail may use its own phone provider such as Securus, ViaPath, or ICSolutions rather than the standard KDOC Securus setup. Always confirm the specific facility and its provider before setting up accounts.",
    ],

    faq: [
      {
        question: "Which provider do I use for Kentucky state prison phone calls?",
        answer: "Securus Technologies handles phone calls at all KDOC Kentucky state facilities. Visit securustech.net or call 972-734-1111 or 800-844-6591. You can set up an AdvanceConnect account to control which numbers the inmate can call, or fund an Inmate Debit account so the inmate can call from their own funds. Both options work with cell phones.",
      },
      {
        question: "How do I send money to someone at a Kentucky state prison?",
        answer: "JPay handles money deposits for KDOC state prison inmate accounts. Visit jpay.com or call JPay to make a deposit by credit card, debit card, or MoneyGram. You can also mail a money order to the facility. Always include the offender ID number on all transactions. Find the offender ID using the KOOL tool at corrections.ky.gov.",
      },
      {
        question: "Are phone calls free at Kentucky state prisons?",
        answer: "No. Kentucky is not among the states offering free inmate phone calls. Securus Technologies holds the KDOC contract and calls are charged per minute subject to FCC caps effective April 2026. Multiple advocacy organizations have pushed for state legislation eliminating fees but as of 2026 it has not passed. JPay electronic messaging is a lower-cost alternative for regular contact.",
      },
      {
        question: "What is the KOOL tool and how do I use it?",
        answer: "KOOL stands for Kentucky Offender Online Lookup. It is the official KDOC search tool at corrections.ky.gov. Search by name to find the offender ID number and current facility location. You need the offender ID for Securus and JPay account setup, for mail, and for any contact with the DOC. Many Kentucky state-sentenced inmates are housed in county jails rather than state prisons.",
      },
      {
        question: "My loved one is in a county jail but sentenced to state prison. Which provider do I use?",
        answer: "Kentucky uses county jails extensively to house state-sentenced inmates. If your loved one is in a county jail under state contract, that jail may use its own phone provider rather than the standard KDOC Securus setup. Common providers at Kentucky county jails include Securus, ViaPath ConnectNetwork, and ICSolutions. Contact the specific county jail directly to confirm which provider and setup process they use.",
      },
      {
        question: "How do I find someone currently in a Kentucky state prison?",
        answer: "Use the KOOL Kentucky Offender Online Lookup at corrections.ky.gov. Search by the first three letters of the first and last name. The search shows the current facility and offender ID number. For federal inmates in Kentucky, use the Bureau of Prisons locator at bop.gov. Federal Medical Center Lexington is a federal facility that requires CorrLinks for messaging, not Securus.",
      },
      {
        question: "Can I send electronic messages to someone at a Kentucky state prison?",
        answer: "Electronic messaging availability varies by facility in Kentucky. Some KDOC facilities offer messaging through Securus or JPay. Contact the specific facility to confirm whether electronic messaging is available and which platform to use. Written physical mail goes directly to the facility for inspection. Books and magazines must be sent directly from a publisher or approved retailer.",
      },
      {
        question: "What happens when my loved one transfers from a Kentucky county jail to a state prison?",
        answer: "When someone transfers from a county jail to a KDOC state prison, confirm the new facility using the KOOL tool at corrections.ky.gov. The phone provider at a state prison is Securus. If they were in a county jail using a different provider, you may need to create a new Securus account. JPay handles money deposits at state facilities. Get the new offender ID number and facility name before setting up any new accounts.",
      },
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
    seoTitle: "South Carolina Inmate Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone in a South Carolina jail or prison. Find the right provider for SCDC state prisons and county jails.",

    intro: [
      "South Carolina operates its state prison system through the South Carolina Department of Corrections (SCDC). SCDC operates telephone systems for sentenced inmates at state prison complexes. All calls are outbound from the facility. Incoming calls to inmates are not accepted. Each inmate is issued a Personal Identification Number (PIN) at admission and must use it to place calls according to the calling schedule of their institution. All calls are recorded and monitored for security purposes. Calls to toll-free numbers are not allowed.",
      "As of February 12, 2026, visitor applications are completed through the GTL VisitMe online system at scdoc.gtlvisitme.com. The same application covers the visitation scheduling system. Adults must submit a driver's license and minors require a long-form birth certificate. South Carolina is not among the states that offer free phone calls at state prisons. The SCDC number is required for all mail and communication accounts. Use the SCDC inmate search at doc.sc.gov to find the SCDC number and current facility.",
      "Effective October 1, 2025, SCDC inmates can only receive publications sent directly from approved vendors. Books from Barnes and Noble and Books-A-Million must be purchased online rather than in-store. Books from other sources are rejected and sent to Contraband without the opportunity for the sender to get a refund. South Carolina county jails use their own phone vendors independently from SCDC state facilities. Always confirm the specific provider for each county facility before setting up any account.",
    ],

    overview: [
      "Which provider do South Carolina state prison families use? SCDC contracts with a phone provider for all state facilities. Visit doc.sc.gov for current provider information. Visitation applications use the GTL VisitMe system at scdoc.gtlvisitme.com as of February 12, 2026. The SCDC number is required for accounts and mail. Use the SCDC inmate search at doc.sc.gov. For questions call SCDC at 803-896-8500.",
      "What changed about publications at South Carolina state prisons? Effective October 1, 2025, SCDC inmates can only receive publications sent directly from approved vendors. Books from Barnes and Noble and Books-A-Million must be purchased online only. Books purchased in-store and sent directly to the inmate are rejected. Books from unapproved sources are sent to Contraband without refund. Always check the current approved vendor list at doc.sc.gov before sending any publication.",
      "What is the most common mistake South Carolina prison families make? Sending books or publications through unapproved channels is very common since the October 2025 rule change. Books purchased in-store at Barnes and Noble or Books-A-Million are now rejected even when sent directly to the facility. Only online purchases from approved vendors are accepted. Always check the current approved vendor list before sending any publication to avoid losing your purchase to Contraband disposal.",
    ],

    faq: [
      { question: "Which provider do I use for South Carolina state prison phone calls?", answer: "SCDC contracts with a phone provider for all South Carolina state facilities. Visit doc.sc.gov for current provider information or call SCDC at 803-896-8500. All calls are outbound. Incoming calls to inmates are not accepted. Each inmate uses a PIN to place calls. The SCDC number is required for account setup. Find it at doc.sc.gov." },
      { question: "Are phone calls free at South Carolina state prisons?", answer: "No. South Carolina is not among the states offering free inmate phone calls. All calls are charged per minute subject to FCC caps effective April 2026. Calling parties may accept or refuse calls and may block specific inmates or all future calls from SCDC. To block calls contact the phone provider through doc.sc.gov." },
      { question: "How do I apply for visitation at a South Carolina state prison?", answer: "As of February 12, 2026, visitor applications are completed through the GTL VisitMe online system at scdoc.gtlvisitme.com. Adults must submit a driver's license and minors require a long-form birth certificate. Those with pending applications may receive emails asking for additional information. Follow all instructions in any email received during the transition." },
      { question: "What books can I send to someone at a South Carolina state prison?", answer: "Effective October 1, 2025, inmates can only receive publications sent directly from approved vendors. Barnes and Noble and Books-A-Million purchases must be made online only. In-store purchases are rejected even when sent directly. Books from unapproved sources go to Contraband without refund. Check the current approved vendor list at doc.sc.gov before sending any publication." },
      { question: "How do I find someone in a South Carolina state prison?", answer: "Use the SCDC inmate search at doc.sc.gov. For questions call SCDC at 803-896-8500. South Carolina state facilities house sentenced inmates while county jails handle pretrial detainees. For federal inmates in South Carolina use the Bureau of Prisons locator at bop.gov." },
      { question: "Do South Carolina county jails use the same provider as state prisons?", answer: "No. South Carolina county jails use their own providers independently from SCDC. Always confirm the specific provider for each county facility before setting up accounts. Contact the specific county jail directly to confirm the current phone provider." },
      { question: "What is the SCDC number and where do I find it?", answer: "The SCDC number is the identification number assigned to every person in South Carolina DOC custody. It is required for all communication accounts and mail. Find it through the SCDC inmate search at doc.sc.gov or ask your loved one. It is different from any court case number." },
      { question: "What happens when my loved one transfers from a South Carolina county jail to a state prison?", answer: "When someone transfers to an SCDC state prison they receive an SCDC number and are issued a PIN for phone calls. County jail accounts do not transfer. Confirm the new facility and SCDC number using doc.sc.gov. Check the current phone provider at doc.sc.gov or call 803-896-8500 to set up a new account." },
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
    seoTitle: "Wisconsin Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Wisconsin jail or prison. Find the right provider for WDOC state prisons and county jails.",

    intro: [
      "Wisconsin operates its state prison system through the Wisconsin Department of Corrections (WIDOC). ICSolutions is the phone provider for all WIDOC state adult correctional facilities. To set up a Prepaid Collect account, visit icscorrections.com or call ICSolutions at 888-506-8407. If you accept a call from a WIDOC inmate before setting up an account, you receive one complimentary 60-second call and are then automatically connected with a customer service agent to set up an account. Debit calling can also be set up so the inmate calls from their own trust account funds.",
      "Every Wisconsin DOC inmate is assigned a unique DOC number when they enter state custody. This number must appear on all mail sent to WIDOC facilities and is required for the Wisconsin DOC LOIS offender search at appsdoc.wi.gov. The DOC number is permanent for the entire sentence regardless of facility transfers. If your loved one was recently sentenced and transferred from county to state custody, allow 24 to 48 hours for LOIS to update before searching. County jail detainees have their own booking numbers that are separate from state DOC numbers.",
      "JPay handles money deposits for Wisconsin DOC inmate trust accounts. JPay is available at jpay.com and through the JPay mobile app. Wisconsin county jails use their own contracted providers which differ from state facilities. Dane County Jail in Madison uses GTL ConnectNetwork. Outagamie County Jail in Appleton also uses GTL ConnectNetwork. Lincoln County Jail in Merrill uses Securus Technologies. Always confirm which provider serves the specific county facility before setting up any account.",
    ],

    overview: [
      "Which provider do Wisconsin state prison families use? ICSolutions is the phone provider for all WIDOC adult state correctional facilities. Visit icscorrections.com or call 888-506-8407 to set up an account. JPay handles money deposits. Use the LOIS offender search at appsdoc.wi.gov to find the DOC number and current facility. Wisconsin county jails use different providers including GTL ConnectNetwork and Securus.",
      "What is the DOC number and the LOIS system? The DOC number is the unique identification number assigned to every person in WIDOC custody. LOIS stands for the Wisconsin DOC offender search tool at appsdoc.wi.gov. You need the DOC number to set up ICSolutions and JPay accounts, for mail, and for any contact with the DOC. The DOC number appears in LOIS search results and is permanent for the entire sentence. Allow 24 to 48 hours after a county to state transfer before searching.",
      "What is the most common mistake Wisconsin prison families make? Using the wrong provider for county jails is very common in Wisconsin. ICSolutions serves WIDOC state prisons but Wisconsin county jails use GTL ConnectNetwork, Securus, or ICSolutions depending on the county. Families setting up an ICSolutions account for a county jail that uses GTL ConnectNetwork will not be able to receive calls. Always check the specific county jail website or call the facility to confirm the current provider.",
    ],

    faq: [
      {
        question: "Which provider do I use for Wisconsin state prison phone calls?",
        answer: "ICSolutions is the phone provider for all WIDOC Wisconsin adult state correctional facilities. Visit icscorrections.com or call 888-506-8437. You can set up a Prepaid Collect account linked to your number or fund a Debit account for the inmate. If you accept a call before setting up an account, you receive one complimentary 60-second call and are connected to an agent to set up an account.",
      },
      {
        question: "How do I send money to someone at a Wisconsin state prison?",
        answer: "JPay handles money deposits for Wisconsin DOC inmate trust accounts. Visit jpay.com or use the JPay app to create an account and make a deposit. You can also send a money order or cashier's check by mail. Always include the inmate's full name and DOC number on all transactions. County jail money deposits use different providers depending on the specific county facility.",
      },
      {
        question: "Are phone calls free at Wisconsin state prisons?",
        answer: "No. Wisconsin is not among the states offering free inmate phone calls. ICSolutions holds the WIDOC contract and calls are charged per minute subject to FCC caps effective April 2026. Wisconsin has one of the most severe racial disparities in incarceration in the country and advocacy organizations have pushed for free calls but legislation has not passed as of 2026.",
      },
      {
        question: "What is the LOIS system and how do I find the DOC number?",
        answer: "LOIS is the Wisconsin DOC offender search tool at appsdoc.wi.gov. Search by name to find the DOC number and current facility location. The DOC number is permanent for the entire sentence regardless of facility transfers. Allow 24 to 48 hours after a county to state transfer before searching. County jail detainees have booking numbers separate from the state DOC number.",
      },
      {
        question: "Which provider does Dane County Jail in Madison use?",
        answer: "Dane County Jail in Madison uses GTL ConnectNetwork, not ICSolutions. Contact the jail at 608-284-6100 and visit connectnetwork.com to set up an account. Outagamie County Jail in Appleton also uses GTL ConnectNetwork. Lincoln County Jail in Merrill uses Securus Technologies. Always confirm the provider directly with the county facility before setting up any account.",
      },
      {
        question: "How do I find someone currently in a Wisconsin state prison?",
        answer: "Use the LOIS Wisconsin DOC offender search at appsdoc.wi.gov. Search by name to find the DOC number and current facility. For county jail inmates, contact the specific county sheriff's office. For federal inmates in Wisconsin, use the Bureau of Prisons locator at bop.gov. For general DOC questions call 608-240-5000 or email DOCGeneral@wisconsin.gov.",
      },
      {
        question: "What is Debit calling and how does it work in Wisconsin?",
        answer: "Debit calling allows the inmate to call any approved number using funds from their own trust account rather than requiring the family to fund a calling account. Family members can deposit money into the inmate trust account through JPay, and the inmate uses those funds for calls. Debit services belong to the inmate and can only be refunded to the inmate. There is no fee for Debit refunds. Contact ICSolutions at 888-506-8407 for details.",
      },
      {
        question: "What happens when my loved one transfers from a Wisconsin county jail to a state prison?",
        answer: "When someone transfers from a county jail to a WIDOC state prison, the provider changes to ICSolutions. They receive a permanent DOC number that must be used for all future communication. County jail accounts do not transfer. Allow 24 to 48 hours after the transfer before searching LOIS at appsdoc.wi.gov. Create a new ICSolutions account at icscorrections.com and set up JPay for money deposits after confirming the transfer and DOC number.",
      },
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
    facilityCount: 33,
    region: "Northeast",
    hasDetailPage: true,

    description: "How to contact someone in a New Jersey state prison or county jail. NJDOC phone calls, video visits, mail, and money through ViaPath, GettingOut, and ConnectNetwork.",
    seoTitle: "New Jersey Inmate Phone Calls, Visits, Mail and Money (NJDOC)",
    seoDescription: "Contact someone in a New Jersey state prison: NJDOC phone calls at 3.4 cents a minute through ViaPath, video visits, messaging, and money deposits. County jails use separate vendors.",

    intro: [
      "New Jersey runs two separate systems, and mixing them up is the most common mistake families make. State prisons are operated by the New Jersey Department of Corrections (NJDOC), which runs nine state correctional facilities. County jails are run by the state's 21 counties, and each county sets its own phone, video, and messaging contracts. Federal prisons in New Jersey, FCI Fort Dix and FCI Fairton, use the federal BOP system and are separate again. This page covers the state prison system first, then explains how county jails differ.",

      "In 2025, NJDOC switched its inmate communications provider from JPay to ViaPath Technologies. JPay is no longer used as of July 31, 2025, so do not set up a JPay account for a New Jersey state prison. ViaPath secure devices are loaned to eligible incarcerated individuals at no cost. Families use GettingOut for messaging and Friends and Family communication services, and ConnectNetwork to deposit funds. Video visitation uses a separate account. The rollout deployed 10,823 devices across the nine facilities and was completed in September, per the NJDOC newsletter.",

      "Finding reliable communication information for New Jersey correctional facilities can be complicated by the density of the system. Multiple large county jails, a substantial state prison network, and federal facilities all operate in a relatively compact geographic area, each with their own provider. This directory organizes facility and provider information for New Jersey so families can identify the right platform for their specific situation without sorting through multiple county and state websites to find a basic answer.",
    ],


    overview: [
      "Who provides phone, messaging, money, and video visits in New Jersey state prisons? ViaPath Technologies provides all communication services in NJDOC state prisons after the March 2025 transition from JPay; JPay is no longer used as of July 31, 2025. Families use GettingOut for messaging and Friends and Family communication services, and ConnectNetwork to deposit funds. One account covers both, with the same login credentials. Video visitation uses a separate account at njdoc.gtlvisitme.com. Phone calls cost $0.034 per minute as of May 1, 2025. Watch out for the funds trap: PIN debit funds work for both phones and messaging, but funds added to a Friends and Family messaging account can only be used to send messages and photos.",
      "How do video visits work in New Jersey state prisons? Video visitation is rolling out facility by facility, starting at Edna Mahan Correctional Facility and Bayside State Prison. Visitors must create a separate video visitation account at njdoc.gtlvisitme.com, providing full name, address, date of birth, email address, and front and back images of a valid government-issued ID. NJDOC custody staff review each registration, and the visitor must appear on the incarcerated person's approved Visit List; review may take several business days. Once approved, schedule at least 72 hours before the requested time. At Edna Mahan, incarcerated persons may participate in up to two video visits per week. Video visits are not scheduled on weekends and holidays, and they are monitored. If a scheduled visit is canceled and does not occur, a credit is issued per policy; no refunds or credits apply when a visit is terminated for rule violations. In-person visits are arranged through the facility and require being on the approved visitor list; check the facility's current visiting schedule before going.",
      "How do mail and money differ between state prisons and county jails in New Jersey? Money goes through ViaPath: deposit online at ConnectNetwork.com, in the ViaPath app, or by phone, or send a money order using the ViaPath Technologies Trust Account Money Order Payments deposit slip. The fee schedule is $0.90 for deposits of $0.01 to $9.99, $1.75 for $10.00 to $19.99, $5.95 for $20.00 to $99.99, $6.95 for $100 to $199.99, and $7.95 for $200.00 to $300.00. Trust account funds can be used for commissary, phone calls, business remits such as publications, gifts, and donations, incentive programs, and transfers to a JPay Media Account. For mail, directory pages report addressing with the incarcerated person's full name and SBI number plus your full name and address; confirm current mail rules with the facility, since NJDOC has changed its mail process to reduce contraband. No mail vendor or central mail address is claimed here because none was verified from an official NJDOC page. County jails work differently: each county contracts its own providers. For example, Essex County uses the GettingOut Visits app for professional video visits, Hudson County uses GettingOut tablets, and Burlington County uses Access Corrections for money deposits. Check the specific jail's page before setting up any account.",
    ],

    faq: [
      {
        question: "Who provides phone service in New Jersey state prisons?",
        answer: "ViaPath Technologies. NJDOC switched from JPay to ViaPath beginning in March 2025, and JPay is no longer used as of July 31, 2025. Phone calls cost $0.034 per minute as of May 1, 2025. Phone calls from the ViaPath secure device follow the same rules and rates as wall phones. If phone privileges are suspended, the individual cannot place calls from the device.",
      },
      {
        question: "How do I send messages to someone in a New Jersey state prison?",
        answer: "Use GettingOut, ViaPath's messaging service. Create an account, then send a contact request; the incarcerated individual chooses whether to accept. Incarcerated individuals cannot start contact. All messages, photos, and videos are reviewed and must comply with NJDOC rules. Fund messaging through ConnectNetwork. Note the funds trap: PIN debit funds work for both phones and messaging, but funds added to a Friends and Family messaging account can only be used to send messages and photos.",
      },
      {
        question: "How do I send money to someone in a New Jersey state prison?",
        answer: "Deposit through ViaPath at ConnectNetwork.com, in the ViaPath app, or by phone, or send a money order using the ViaPath Technologies Trust Account Money Order Payments deposit slip. The fee schedule is $0.90 for $0.01 to $9.99, $1.75 for $10.00 to $19.99, $5.95 for $20.00 to $99.99, $6.95 for $100 to $199.99, and $7.95 for $200.00 to $300.00. Do not use JPay; JPay ended July 31, 2025.",
      },
      {
        question: "How do video visits work in New Jersey state prisons?",
        answer: "Create a separate video visitation account at njdoc.gtlvisitme.com; your GettingOut and ConnectNetwork credentials will not work for video visits. Provide full name, address, date of birth, email address, and front and back images of a valid government-issued ID. NJDOC custody staff review the registration, and you must appear on the incarcerated person's approved Visit List; review may take several business days. Once approved, schedule at least 72 hours before the requested time. At Edna Mahan, incarcerated persons may participate in up to two video visits per week. Video visits are not scheduled on weekends and holidays, and they are monitored. If a scheduled visit is canceled and does not occur, a credit is issued per policy; no refunds or credits apply when a visit is terminated for rule violations.",
      },
      {
        question: "How do I visit someone in person at a New Jersey state prison?",
        answer: "In-person visits are arranged through the facility and require being on the approved visitor list. Check the facility's current visiting schedule before going. Directory pages report that visits are by appointment scheduled 48 hours in advance, with a background check, photo ID, and a dress code; confirm these details with the facility, since they were not verified from an official NJDOC page.",
      },
      {
        question: "How do I send mail to someone in a New Jersey state prison?",
        answer: "Directory pages report addressing mail with the incarcerated person's full name and SBI number, plus your full name and address. NJDOC has changed its mail process to reduce contraband, so confirm the current mail rules with the facility before sending. No mail vendor or central mail address is stated here because none was verified from an official NJDOC page. Do not send money through the mail; use ConnectNetwork or a ViaPath money order deposit slip.",
      },
      {
        question: "How do I find someone in a New Jersey state prison?",
        answer: "Use the NJDOC Offender Search Engine, which directory summaries describe as covering people in state prisons and residential community release programs. For someone in a county jail, contact the sheriff's office or county jail directly. For someone in a federal prison in New Jersey, use the BOP inmate locator.",
      },
    ],

    facilitiesByType: { federal: 2, state: 9, county: 22, private: 0 },

    counties: [
      "Bergen County", "Middlesex County", "Essex County", "Hudson County",
      "Monmouth County", "Ocean County", "Union County", "Camden County",
      "Passaic County", "Burlington County", "Somerset County", "Mercer County",
      "Morris County", "Atlantic County", "Cumberland County",
    ],

    providers: [
      {
        name: "ViaPath",
        slug: "gtl",
        initial: "V",
        color: "bg-amber-600",
        description: "Phone, messaging, video visits, and money services in NJDOC state prisons after the 2025 transition from JPay.",
      },
      {
        name: "GettingOut",
        slug: "gettingout",
        initial: "G",
        color: "bg-orange-600",
        description: "Messaging and Friends and Family communication services in NJDOC state prisons; also used by Essex and Hudson county jails.",
      },
      {
        name: "ConnectNetwork",
        slug: "connectnetwork",
        initial: "C",
        color: "bg-sky-600",
        description: "Deposit portal for NJDOC trust accounts, PIN debit, and messaging funds.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities in New Jersey, including Fort Dix.",
      },
      {
        name: "Access Corrections",
        slug: "access-corrections",
        initial: "A",
        color: "bg-teal-600",
        description: "Money deposits and commissary orders at Burlington County jail, per the county's own page.",
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
    seoTitle: "Colorado Free Inmate Calls, Messaging and Money Transfer",
    seoDescription: "Colorado DOC phone calls are free for families. How to contact someone in a Colorado prison or county jail.",

    intro: [
      "Colorado operates its state prison system through the Colorado Department of Corrections (CDOC). Phone calls from all CDOC state prison facilities are free and unlimited under House Bill 23-1133, which took full effect on July 1, 2025. Neither the inmate nor the person receiving the call is charged per minute or per call. Video calls are also available at no cost through the CDOC tablet program. You do not need to fund a prepaid calling account to receive calls from Colorado state prisons.",
      "Even though calls are free, families still need to be on the approved contact list to receive calls. Video visits at CDOC facilities are scheduled online through Securus after being approved on the visiting list. Visitor approval is processed through CDOC's visitor registration system and takes two to four weeks. Background checks are required for adult visitors. Children under 18 must be on the visitor list and accompanied by an approved adult.",
      "Colorado DOC mail requires the inmate DOC number on all envelopes. Photos must be 4x6 inch prints. Many CDOC facilities are located in Canon City and it is important to confirm which specific facility your loved one is at before mailing anything. For federal inmates in Colorado, ADX Florence is the federal Supermax in Fremont County. Federal inmates use CorrLinks for messaging and ConnectNetwork for phone calls, which are separate from CDOC systems and not free.",
    ],

    overview: [
      "Are phone calls free at Colorado state prisons? Yes. Phone calls from CDOC state prison facilities became fully free on July 1, 2025 under House Bill 23-1133. Video calls are also free through the CDOC tablet program. Colorado is one of six states including California, Connecticut, Massachusetts, Minnesota, and New York to have fully eliminated phone call charges at state prisons. You do not need a prepaid account. Contact must still go through approved calling procedures.",
      "Which provider handles video visits at Colorado state prisons? Video visits at CDOC facilities use the Securus platform for scheduling after visitor approval. Apply for visitor approval through the CDOC visitor registration system online. Approval takes two to four weeks and a background check is required. Once approved, schedule visits through the Securus platform. For Colorado State Penitentiary visiting appointments call 719-269-5252.",
      "What is the most common mistake Colorado prison families make? Thinking that free calls mean no setup is required at all is the most common mistake. Families must still be on the approved contact list to receive calls even though there is no charge. Visitors also need approval before scheduling video visits. Also, do not confuse CDOC state prisons with federal facilities in Colorado. ADX Florence is a federal Supermax and uses completely separate systems with charges.",
    ],

    faq: [
      {
        question: "Are phone calls really free at Colorado state prisons?",
        answer: "Yes. Phone calls from all CDOC Colorado state prison facilities became fully free on July 1, 2025 under House Bill 23-1133. Neither the inmate nor the person receiving the call is charged. Video calls are also free through the CDOC tablet program. Colorado is one of six states that have fully eliminated phone call charges at state prisons. You do not need to fund a prepaid calling account.",
      },
      {
        question: "Do I still need to do anything to receive free calls from Colorado state prisons?",
        answer: "Yes. Even though calls are free, you still need to be on the approved contact list to receive calls. The inmate adds approved contacts from inside the facility. Contact the facility directly if you are not receiving calls to confirm you are on the approved list. Video visits also require advance visitor approval through the CDOC visitor registration system which takes two to four weeks.",
      },
      {
        question: "How do I schedule a video visit at a Colorado state prison?",
        answer: "Apply for visitor approval through the CDOC visitor registration system online at cdoc.colorado.gov. Approval requires a background check and takes two to four weeks. Once approved, schedule video visits through the Securus platform online. For Colorado State Penitentiary visiting appointments call 719-269-5252. Children under 18 must be on the visitor list and accompanied by an approved adult.",
      },
      {
        question: "How do I find someone currently in a Colorado state prison?",
        answer: "Use the CDOC offender search at doc.colorado.gov/offender-search. You can search by DOC number or name. Many CDOC facilities are located in Canon City so confirm the specific facility before mailing anything. For federal inmates in Colorado including those at ADX Florence, use the Bureau of Prisons locator at bop.gov. Federal inmates are separate from CDOC and use different communication systems.",
      },
      {
        question: "Is ADX Florence in Colorado free for phone calls?",
        answer: "No. ADX Florence is a federal Bureau of Prisons Supermax facility in Fremont County Colorado. Federal prisons are completely separate from CDOC state prisons. Federal inmates use CorrLinks for messaging and ConnectNetwork for phone calls. These services are not free and are not covered by Colorado's state free call program. The Colorado free call law applies only to CDOC state facilities.",
      },
      {
        question: "How do I send money to someone at a Colorado state prison?",
        answer: "Since phone calls are free, the primary reason to send money is for commissary purchases. Money can be sent through CDOC approved deposit methods. Always include the inmate's DOC number when making any deposit. Contact the specific facility or check cdoc.colorado.gov for current approved money transfer methods and any applicable limits.",
      },
      {
        question: "Can I send photos to someone at a Colorado state prison?",
        answer: "Yes. Photos must be 4x6 inch prints. Many CDOC facilities are in Canon City so confirm the exact facility and mailing address before sending anything. The inmate's DOC number must appear on all envelopes. Check the specific facility's mail rules before sending as requirements can vary between facilities.",
      },
      {
        question: "What happens when my loved one transfers from a Colorado county jail to a state prison?",
        answer: "When someone transfers from a Colorado county jail to a CDOC state prison, phone calls become free. County jails in Colorado use their own providers and typically charge for calls. CDOC state prisons offer free unlimited calls under HB23-1133. Contact the new facility to confirm approved contact procedures and get the CDOC DOC number which is required for mail and other communication.",
      },
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
    seoTitle: "Washington Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Washington jail or prison. Find the right provider for WDOC state prisons and county jails.",

    intro: [
      "Washington State operates its prison system through the Washington State Department of Corrections (WDOC). Securus Technologies holds the current contract for all phone, e-messaging, video, and electronic media services at Washington state facilities. Each incarcerated individual is assigned a Personal Identification Number (PIN) and uses it to initiate all calls. There is no application or verification process required to receive calls. When a call comes in, you hear a pre-recorded message identifying the facility and the name of the person calling, then choose to accept or deny.",
      "Under Washington's contract with Securus, each incarcerated individual receives two free 20-minute phone calls per week, monthly free Video Connect sessions, and free stamps for e-messaging. Additional calls beyond the free allotment are charged at the Securus contracted rate. Funds can be added to a Securus Debit account owned by the inmate, or to an AdvanceConnect account owned by the family. The Securus Debit account can be used for phone calls, e-messaging, stamps, tablet media including games, music, and movies, and Video Connect sessions.",
      "Money can also be sent to Washington DOC inmates through JPay or through Western Union, cashier's check, or money order. Washington state prison mail policies require the incarcerated individual's DOC number on all correspondence. Washington county and city jails use their own phone providers. Pierce County Jail and many other county facilities in Washington also use Securus Technologies at 800-844-6591. King County Correctional Facility in Seattle uses its own contracted vendor.",
    ],

    overview: [
      "Which provider do Washington state prison families use? Securus Technologies handles all phone calls, e-messaging, video visits, and electronic media at Washington state facilities. Visit securustech.net or the WDOC Securus Services page at doc.wa.gov. No application or verification is required to receive calls. Each incarcerated individual receives two free 20-minute calls per week plus monthly free video sessions and free e-messaging stamps.",
      "What is the difference between Securus Debit and AdvanceConnect in Washington? Securus Debit is an account owned by the incarcerated individual that family members fund directly. It can be used for phone calls, e-messaging, stamps, tablet media, and video sessions. AdvanceConnect is an account owned by the family member that allows them to receive collect calls with charges deducted from a prepaid balance. Both options work at Washington state facilities and cover different use cases.",
      "What is the most common mistake Washington prison families make? Not knowing that Securus Debit and the commissary account are separate is a common confusion. Securus Debit funds pay for Securus services like calls, messages, and media. Commissary account funds pay for items purchased from the facility store. Sending money to the wrong account type means the inmate cannot use it for the intended purpose. Always confirm which account type serves your specific need before making a deposit.",
    ],

    faq: [
      {
        question: "Which provider do I use for Washington state prison phone calls?",
        answer: "Securus Technologies handles all phone calls at Washington state DOC facilities. Visit securustech.net or contact Securus for account setup. No application or verification process is required to receive calls. Each incarcerated individual receives two free 20-minute calls per week under the Washington DOC Securus contract. Additional calls beyond the free allotment are charged at the contracted rate.",
      },
      {
        question: "Does Washington state offer free phone calls from prison?",
        answer: "Partially. Each incarcerated individual in Washington state DOC facilities receives two free 20-minute phone calls per week, monthly free Video Connect sessions, and free e-messaging stamps under the Securus contract. Additional calls beyond the free allotment are charged. Washington is not among the states that offer fully unlimited free calling but the free allotment significantly reduces costs for families.",
      },
      {
        question: "What is the difference between Securus Debit and AdvanceConnect?",
        answer: "Securus Debit is owned by the incarcerated individual and funded by family contributions. It pays for calls, e-messaging, stamps, tablet media, and Video Connect. AdvanceConnect is owned by the family member and allows collect calls with charges deducted from a prepaid balance. Both work at Washington state facilities. Contact Securus at securustech.net to choose which account type works best for your situation.",
      },
      {
        question: "How do I send money to someone at a Washington state prison?",
        answer: "Money can be sent through JPay at jpay.com, through Securus Technologies, by Western Union, or by cashier's check or money order. You can fund the Securus Debit account for Securus services or the trust account for commissary. Always include the incarcerated individual's DOC number on all transactions. Confirm which account type you are funding before making a deposit.",
      },
      {
        question: "How do I find someone currently in a Washington state prison?",
        answer: "Use the Washington DOC offender search at doc.wa.gov. You can search by name or DOC number. The DOC number must appear on all mail sent to Washington state facilities. For county jail inmates, contact the specific county facility. Pierce County Jail uses Securus at 800-844-6591. King County Correctional Facility in Seattle uses its own provider. For federal inmates in Washington, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "How do I block calls from a Washington state prison?",
        answer: "You can block calls from a specific incarcerated individual or from all Washington state prison facilities. Contact Securus at securustech.net or call 800-844-6591 to set up a block. For Pierce County Jail, contact the jail directly at 253-798-4590 or through Securus. Washington DOC does not maintain block lists directly. According to a 2025 investigation, block lists are maintained by Securus rather than by the DOC.",
      },
      {
        question: "Are video visits available at Washington state prisons?",
        answer: "Yes. Video Connect sessions are available at Washington state DOC facilities through Securus. Each incarcerated individual receives a limited number of free monthly Video Connect sessions under the Washington DOC contract. Additional sessions can be purchased. Schedule visits through the Securus platform at securustech.net after setting up an account. Custom call features such as three-way calling and call forwarding are not permitted.",
      },
      {
        question: "What happens when my loved one transfers from a Washington county jail to a state prison?",
        answer: "When someone transfers from a county jail to a Washington state DOC prison, they begin receiving the Securus contract benefits including two free calls per week and free monthly video sessions. County jails may use different providers. Pierce County Jail uses Securus so the account may carry over, but confirm with Securus directly. Create or update your Securus account after confirming the transfer and obtaining the new DOC number.",
      },
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
    seoTitle: "Arkansas Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in an Arkansas jail or prison. Find the right provider for ADC state prisons and county jails.",

    intro: [
      "Arkansas operates its state prison system through the Arkansas Department of Corrections (ADC). Securus Technologies holds the ADC contract for phone calls and e-messaging at most state facilities. To receive calls, set up a Securus AdvanceConnect prepaid account at securustech.net or call 1-800-844-6591. You can also fund an Inmate Debit account directly so the inmate pays for calls from their own funds without you needing your own account. Arkansas DOC also has an automated phone deposit IVR at 501-474-6460 for state prison prepaid accounts. As of May 31, 2025, Arkansas DOC no longer accepts paper money orders.",
      "Video visitation at Arkansas DOC facilities is available through Securus at $5.00 per 30-minute session as of January 2025. Contact Securus customer service for video visit technical assistance and billing at 877-578-3658. E-messaging through Securus uses a digital stamp system. Attorneys may not use the ADC video visitation system. All non-legal calls are recorded and may be monitored.",
      "Arkansas county and city jails use their own phone vendors with their own rate structures. Pulaski County Regional Detention Facility in Little Rock uses TouchPay for money transfers at touchpay.com rather than JPay. Some smaller Arkansas jails use Correct Solutions Group at 877-618-3516 or City Tele Coin. Always confirm which provider serves the specific county facility before setting up any account. For state prison DOC number lookup, use the ADC inmate search at doc.arkansas.gov.",
    ],

    overview: [
      "Which provider do Arkansas state prison families use? Securus Technologies holds the ADC contract for most Arkansas state facilities. Visit securustech.net or call 1-800-844-6591 for account setup. You can set up an AdvanceConnect prepaid account or fund an Inmate Debit account. The ADC also has an IVR deposit line at 501-474-6460. As of May 31, 2025, paper money orders are no longer accepted at Arkansas DOC facilities.",
      "What changed about money transfers at Arkansas state prisons? Arkansas DOC stopped accepting paper money orders after May 31, 2025. Money must now be deposited through electronic methods including the Securus website, the ADC IVR at 501-474-6460, JPay, or other approved electronic deposit services. Pulaski County Regional Detention Facility uses TouchPay rather than JPay for money transfers. Always confirm the current accepted methods for each specific facility.",
      "What is the most common mistake Arkansas prison families make? Using the wrong provider for county jails is very common in Arkansas. Securus handles ADC state prisons but Arkansas county jails use different vendors including Correct Solutions Group, City Tele Coin, and Securus depending on the county. Pulaski County in Little Rock uses TouchPay for money deposits rather than JPay. Always call the specific facility or check its website to confirm the current phone and money transfer providers.",
    ],

    faq: [
      {
        question: "Which provider do I use for Arkansas state prison phone calls?",
        answer: "Securus Technologies holds the ADC Arkansas state prison contract. Visit securustech.net or call 1-800-844-6591. Set up an AdvanceConnect prepaid account to receive calls or fund an Inmate Debit account so the inmate pays from their own funds. The ADC also has an IVR deposit line at 501-474-6460. As of May 31, 2025, paper money orders are no longer accepted at Arkansas DOC facilities.",
      },
      {
        question: "Are phone calls free at Arkansas state prisons?",
        answer: "No. Arkansas is not among the states offering free inmate phone calls. Securus Technologies holds the ADC contract and charges per-minute rates subject to FCC caps effective April 2026. FCC rate caps have significantly reduced costs from historical Arkansas highs. JPay electronic messaging and written mail are lower-cost alternatives for regular contact with someone at an Arkansas state prison.",
      },
      {
        question: "How do I send money to someone at an Arkansas state prison?",
        answer: "Electronic deposit methods are required at Arkansas DOC as paper money orders are no longer accepted after May 31, 2025. Deposit through the Securus website at securustech.net, through the ADC IVR at 501-474-6460, through JPay at jpay.com, or other approved electronic services. Always include the inmate DOC number on all transactions. For Pulaski County Regional Detention Facility use TouchPay rather than JPay.",
      },
      {
        question: "How do I schedule a video visit at an Arkansas state prison?",
        answer: "Video visits at ADC facilities are available through Securus at $5.00 per 30-minute session as of January 2025. Contact Securus customer service for technical assistance and billing at 877-578-3658. Attorneys may not use the ADC video visitation system. Schedule visits through your Securus account at securustech.net. All video visits are recorded and monitored.",
      },
      {
        question: "How do I find someone currently in an Arkansas state prison?",
        answer: "Use the ADC inmate search at doc.arkansas.gov to find the DOC number and current facility. You need the DOC number to set up Securus and JPay accounts and for all mail. For county jail inmates, contact the specific county facility. Pulaski County Regional Detention Facility in Little Rock can be reached directly. For federal inmates in Arkansas, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "Which provider does Pulaski County jail in Little Rock use?",
        answer: "Pulaski County Regional Detention Facility in Little Rock uses a different money transfer system than Arkansas state prisons. TouchPay is the primary platform for deposits at Pulaski County. Deposit online at touchpay.com or by calling their automated line. Contact the facility directly to confirm the current phone provider for calls. Do not use JPay for Pulaski County money deposits.",
      },
      {
        question: "Can I send e-messages to someone at an Arkansas state prison?",
        answer: "Yes. Securus e-messaging is available at Arkansas ADC state facilities through a digital stamp system. Create a Securus account at securustech.net and purchase stamps to send electronic messages. All messages are reviewed before delivery. E-messaging is a lower-cost alternative to phone calls for maintaining regular contact with someone at an Arkansas state prison.",
      },
      {
        question: "What happens when my loved one transfers from an Arkansas county jail to a state prison?",
        answer: "When someone transfers from an Arkansas county jail to an ADC state prison, the provider changes to Securus. Set up a Securus AdvanceConnect account at securustech.net after confirming the transfer and obtaining the DOC number from the ADC inmate search at doc.arkansas.gov. Paper money orders are no longer accepted at ADC facilities. Use electronic deposit methods through Securus or JPay for money transfers.",
      },
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
    seoTitle: "Mississippi Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Mississippi jail or prison. Find the right provider for MDOC state prisons and county jails.",

    intro: [
      "Mississippi operates its state prison system through the Mississippi Department of Corrections (MDOC). GTL ViaPath Technologies holds the MDOC contract for phone calls and messaging services at most state facilities. New accounts can be established by calling 877-650-4249. Service is also available through the ConnectNetwork website and app. Mississippi has not eliminated phone call fees for state inmates. FCC rate caps effective April 2026 significantly reduced per-minute costs from historically very high Mississippi rates, but calls are still charged per minute.",
      "Phone contact is especially important for Mississippi families because many state facilities are located in rural parts of the Delta, Piney Woods, and other areas far from where families live. Traveling to visit in person is expensive and time-consuming for many families. The MDOC number is the unique identification number assigned to every person sentenced to Mississippi state prison. It must appear on all mail sent to MDOC facilities. Use the MDOC offender search at mdoc.ms.gov to find the MDOC number and current facility location.",
      "Mississippi county jails use their own phone providers which differ from MDOC state prisons. Hinds County Detention Center in Raymond uses its own contracted provider. Money can be deposited to inmate accounts through JPay at jpay.com. Written mail and JPay electronic messaging are the most cost-effective alternatives when phone costs are a barrier. Mississippi state prison visit approval typically takes two to six weeks and requires a background check for adult visitors.",
    ],

    overview: [
      "Which provider do Mississippi state prison families use? GTL ViaPath Technologies holds the MDOC contract. New accounts can be established by calling 877-650-4249 or through ConnectNetwork at connectnetwork.com. Use the MDOC offender search at mdoc.ms.gov to find the MDOC number and current facility. Mississippi has not eliminated phone call fees. FCC rate caps effective April 2026 significantly reduced per-minute rates from historically very high levels.",
      "Why is phone contact especially important for Mississippi prison families? Many Mississippi DOC facilities are in rural areas of the Delta, Piney Woods, and other remote regions far from population centers. Traveling to visit in person is expensive and time-consuming for many families. This makes phone contact and electronic messaging through GTL ViaPath the primary way many Mississippi families stay connected with incarcerated loved ones.",
      "What is the most common mistake Mississippi prison families make? Not having the MDOC number before setting up accounts is very common. You need the MDOC number to set up ConnectNetwork and JPay accounts, for all mail, and for the MDOC offender search. The MDOC number is different from any county booking number or court case number. Find it through the MDOC offender search at mdoc.ms.gov or ask your loved one to provide it in their first communication.",
    ],

    faq: [
      {
        question: "Which provider do I use for Mississippi state prison phone calls?",
        answer: "GTL ViaPath Technologies holds the MDOC Mississippi state prison contract. Establish a new account by calling 877-650-4249 or through ConnectNetwork at connectnetwork.com. You need the inmate MDOC number to set up the account. Mississippi has not eliminated phone fees. FCC rate caps effective April 2026 reduced per-minute rates significantly from historically very high Mississippi levels.",
      },
      {
        question: "Are phone calls free at Mississippi state prisons?",
        answer: "No. Mississippi is not among the states offering free inmate phone calls. GTL ViaPath holds the MDOC contract and charges per-minute rates subject to FCC caps effective April 2026. Mississippi historically had among the highest prison phone rates in the country. The FCC rate caps represent a significant improvement but calls are still charged per minute. JPay electronic messaging and written mail are lower-cost alternatives.",
      },
      {
        question: "What is the MDOC number and where do I find it?",
        answer: "The MDOC number is the unique identification number assigned to every person sentenced to Mississippi state prison. It must appear on all mail sent to MDOC facilities and is required for ConnectNetwork and JPay account setup. Find it using the MDOC offender search at mdoc.ms.gov or ask your loved one to provide it. The MDOC number is different from any county booking number or court case number.",
      },
      {
        question: "How do I send money to someone at a Mississippi state prison?",
        answer: "JPay handles money deposits for MDOC state prison inmates. Visit jpay.com or use the JPay app to create an account and deposit funds. Always include the inmate MDOC number when making deposits. For county jail money transfers, contact the specific county facility as providers vary. Hinds County Detention Center uses its own money transfer system separate from JPay.",
      },
      {
        question: "How do I find someone currently in a Mississippi state prison?",
        answer: "Use the MDOC offender search at mdoc.ms.gov. Search by name to find the MDOC number and current facility location. For records and eligibility information contact the MDOC Records Department at 601-933-2889 or MDOCRecordsDepartment@mdoc.state.ms.us. For county jail inmates, contact the specific county sheriff's office. For federal inmates in Mississippi including those at FCC Yazoo City, use the Bureau of Prisons locator at bop.gov.",
      },
      {
        question: "How long does visitor approval take at Mississippi state prisons?",
        answer: "Visitor approval at Mississippi state prisons typically takes two to six weeks. A background check is required for adult visitors. Contact the specific facility to start the visitor application process. Mississippi facilities are often in remote rural locations so plan travel arrangements well in advance after approval is confirmed.",
      },
      {
        question: "Do Mississippi county jails use the same provider as state prisons?",
        answer: "No. Mississippi county jails use their own phone providers which differ from MDOC state prisons. GTL ViaPath serves MDOC state facilities but individual county jails contract their own vendors. Hinds County Detention Center in Raymond uses its own contracted provider. Always confirm the specific provider for each county jail before setting up any account.",
      },
      {
        question: "What happens when my loved one transfers from a Mississippi county jail to a state prison?",
        answer: "When someone transfers from a Mississippi county jail to an MDOC state prison, they receive an MDOC number and the communication provider changes to GTL ViaPath ConnectNetwork. County jail accounts do not transfer. Create a new ConnectNetwork account at connectnetwork.com or call 877-650-4249 after confirming the transfer. Search the MDOC offender search at mdoc.ms.gov to confirm the new facility and MDOC number.",
      },
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
    seoTitle: "Kansas Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Kansas jail or prison. Find the right provider for KDOC state prisons and county jails.",

    intro: [
      "Kansas operates its state prison system through the Kansas Department of Corrections (KDOC). ICSolutions is the phone provider for most KDOC state facilities. Contact ICSolutions at 888-506-8407 or visit icscorrections.com to set up an account. Kansas is not among the states that offer free phone calls at state prisons. All calls are monitored and recorded except attorney calls. The KDOC number is required for all communication accounts and mail sent to Kansas state facilities.",
      "Kansas county and city jails use their own phone vendors independently from KDOC state prisons. Johnson County Detention Center near Kansas City uses Securus Technologies. Sedgwick County Jail in Wichita uses a separately contracted provider. Always confirm the specific provider for each county facility before setting up any account. Money can be deposited to KDOC inmate trust accounts through JPay at jpay.com.",
      "Use the KDOC offender search at doc.ks.gov to find the KDOC number and current facility location. Visitor applications at KDOC state prisons require a background check and take two to four weeks to process. All visitors must be on the approved visitor list before any in-person or video visit is permitted.",
    ],

    overview: [
      "Which provider do Kansas state prison families use? ICSolutions handles phone calls at most KDOC Kansas state facilities. Contact ICSolutions at 888-506-8407 or visit icscorrections.com. JPay handles money deposits at jpay.com. Use the KDOC offender search at doc.ks.gov to find the KDOC number and current facility. Johnson County Detention Center near Kansas City uses Securus, not ICSolutions.",
      "What is the KDOC number and how do I find it? The KDOC number is the identification number assigned to every person in Kansas DOC custody. You need it for ICSolutions and JPay account setup and for all mail. Find it through the KDOC offender search at doc.ks.gov or ask your loved one to provide it. The KDOC number is different from any court case number.",
      "What is the most common mistake Kansas prison families make? Using the wrong provider for county jails is very common. ICSolutions serves most KDOC state prisons but Kansas county jails use different vendors. Johnson County Detention Center near Kansas City uses Securus. Families who set up ICSolutions accounts for Johnson County will not be able to receive calls. Always confirm the specific provider for each county facility.",
    ],

    faq: [
      { question: "Which provider do I use for Kansas state prison phone calls?", answer: "ICSolutions handles phone calls at most KDOC Kansas state facilities. Contact ICSolutions at 888-506-8407 or visit icscorrections.com. You need the inmate KDOC number to set up the account. Find it at doc.ks.gov. Kansas has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Kansas state prisons?", answer: "No. Kansas is not among the states offering free inmate phone calls. ICSolutions holds the KDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives for regular contact." },
      { question: "Which provider does Johnson County Detention Center use?", answer: "Johnson County Detention Center near Kansas City uses Securus Technologies, not ICSolutions. Contact Securus at 800-844-6591 or visit securustech.net. Sedgwick County Jail in Wichita uses its own contracted provider. Always confirm the specific provider for each county facility before setting up any account." },
      { question: "How do I send money to someone at a Kansas state prison?", answer: "JPay handles money deposits for KDOC state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate KDOC number. For county jail money transfers, contact the specific county facility as providers vary by county." },
      { question: "How do I find someone in a Kansas state prison?", answer: "Use the KDOC offender search at doc.ks.gov to find the KDOC number and current facility. For county jail inmates contact the specific county sheriff. For federal inmates in Kansas including those at FCI Leavenworth, use the Bureau of Prisons locator at bop.gov." },
      { question: "How long does visitor approval take at Kansas state prisons?", answer: "Visitor applications at KDOC state prisons require a background check and take two to four weeks. All visitors must be on the approved list before in-person or video visits. Contact the specific facility to start the application process." },
      { question: "Do Kansas county jails use the same provider as state prisons?", answer: "No. Kansas county jails use their own providers. ICSolutions serves most KDOC state prisons but Johnson County uses Securus and other counties use their own vendors. Always confirm which provider serves each specific county facility before setting up accounts." },
      { question: "What happens when my loved one transfers from a Kansas county jail to a state prison?", answer: "When someone transfers to a KDOC state prison they receive a KDOC number and the provider changes to ICSolutions. County jail accounts do not transfer. Create a new ICSolutions account at icscorrections.com after confirming the transfer and KDOC number via doc.ks.gov." },
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
        description: "Email communication for federal Bureau of Prisons facilities in Kansas, including FCI Leavenworth.",
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
        name: "FCI Leavenworth",
        slug: "fci-leavenworth",
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
    seoTitle: "Minnesota Free Inmate Calls, Messaging and Money Transfer",
    seoDescription: "Minnesota DOC phone calls are free for families. No prepaid account needed. How to contact someone in a MN prison or county jail. Find the right provider now.",

    intro: [
      "Minnesota operates its state prison system through the Minnesota Department of Corrections (MN DOC). Phone calls from all MN DOC state facilities are free under legislation that took effect in July 2023. Video calls are also free under legislation that expanded the program. You do not need a prepaid calling account or stamps to receive calls or messages from someone in a Minnesota state prison. Minnesota was among the first states in the country to fully eliminate phone and video charges at state facilities.",
      "Minnesota is now working to extend free communication to include electronic messaging under SF 666 included in omnibus legislation considered in 2025. Even though calls are free, families still need to be on the approved contact list to receive calls. Find the inmate OID number and current facility using the MN DOC offender search at coms.doc.state.mn.us. MCF Stillwater, MCF Faribault, MCF St. Cloud, and MCF Oak Park Heights are among the larger Minnesota state facilities.",
      "Minnesota county jails use their own phone providers which may charge for calls. Ramsey County in St. Paul offers free calls at its county facilities. Hennepin County in Minneapolis uses ConnectNetwork GTL. Not all Minnesota county jails offer free calls. Always confirm the specific provider and rate for each county facility. For federal inmates in Minnesota including those at FMC Rochester, use CorrLinks for messaging and ConnectNetwork for calls, which are not free.",
    ],

    overview: [
      "Are phone calls free at Minnesota state prisons? Yes. Phone calls from all MN DOC state facilities have been free since July 2023. Video calls are also free under the expanded program. You do not need to fund a prepaid account. Minnesota was among the first states in the country to eliminate phone and video charges at state facilities. Not all county jails in Minnesota offer free calls so confirm with the specific county facility.",
      "Which provider do Minnesota state prison families use? The MN DOC contract for phone and video communication runs through a state-contracted vendor. Since calls are free, the focus is on being on the approved contact list rather than funding an account. Find the inmate OID number and current facility using the MN DOC offender search at coms.doc.state.mn.us. For Hennepin County Jail in Minneapolis, use ConnectNetwork GTL at connectnetwork.com.",
      "What is the most common mistake Minnesota prison families make? Thinking that because state prison calls are free, all Minnesota jails are also free is a common mistake. Ramsey County offers free calls but many other Minnesota county jails still charge per minute. Also, federal facilities in Minnesota such as FMC Rochester use CorrLinks and ConnectNetwork which are not covered by the state free call program and still charge for services.",
    ],

    faq: [
      { question: "Are phone calls really free at Minnesota state prisons?", answer: "Yes. Phone calls from all MN DOC Minnesota state facilities have been free since July 2023. Video calls are also free under legislation expanding the program. You do not need to fund any prepaid account. Minnesota was among the first states to eliminate these charges. You still need to be on the approved contact list to receive calls." },
      { question: "Do I need to set up any account to receive free Minnesota DOC calls?", answer: "You need to be on the approved contact list but you do not need to fund a prepaid account. The inmate adds approved contacts from inside the facility. Contact the facility if you are not receiving calls to confirm you are on the approved list. Video visits may require advance scheduling through the MN DOC system." },
      { question: "How do I find someone currently in a Minnesota state prison?", answer: "Use the MN DOC offender search at coms.doc.state.mn.us. Search by name to find the OID number and current facility. For county jail inmates contact the specific county sheriff. Hennepin County Jail uses ConnectNetwork GTL. For federal inmates at FMC Rochester use the Bureau of Prisons locator at bop.gov." },
      { question: "Are Minnesota county jails also free for phone calls?", answer: "Some Minnesota county jails offer free calls. Ramsey County in St. Paul offers free calls at its facilities. However most other Minnesota county jails still charge per minute. Always confirm the specific rate and provider for each county jail. Hennepin County in Minneapolis uses ConnectNetwork GTL at connectnetwork.com." },
      { question: "Is FMC Rochester in Minnesota covered by the free call program?", answer: "No. FMC Rochester is a federal Bureau of Prisons facility. Federal prisons are completely separate from MN DOC state facilities. The Minnesota free call law applies only to state DOC facilities. Federal inmates use CorrLinks for messaging and ConnectNetwork for phone calls, which are not free under the state program." },
      { question: "How do I send money to someone at a Minnesota state prison?", answer: "Since calls are free the primary reason to send money is for commissary purchases. Contact the specific MN DOC facility or check doc.state.mn.us for current approved deposit methods and any applicable limits. Always include the inmate OID number on all transactions." },
      { question: "What about electronic messaging at Minnesota state prisons?", answer: "Minnesota is working to extend free communication to electronic messaging under SF 666 included in 2025 omnibus legislation. Confirm the current status of messaging at the specific facility. The MN DOC has been expanding free communication services beyond phone calls to include video and potentially messaging." },
      { question: "What happens when my loved one transfers from a Minnesota county jail to a state prison?", answer: "When someone transfers to a MN DOC state prison phone calls become free. County jails may have charged for calls. Confirm the new facility and OID number using the MN DOC offender search at coms.doc.state.mn.us after the transfer. Contact the new facility to be added to the approved contact list." },
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
        name: "Hennepin County Jail",
        slug: "hennepin-county-jail",
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
    seoTitle: "Iowa Inmate Phone Calls, Messaging and Money Transfer Guide",
    seoDescription: "How to contact someone in an Iowa jail or prison. Find the right provider for Iowa DOC state prisons and county jails.",

    intro: [
      "Iowa operates its state prison system through the Iowa Department of Corrections (IDOC). GTL ViaPath Technologies through ConnectNetwork handles phone calls at Iowa state correctional institutions. Contact ConnectNetwork at 800-483-8314 or visit connectnetwork.com. Iowa is not among the states that offer free phone calls at state prisons. The IDOC number is required for all communication accounts and mail. Use the Iowa Offender Search at doc.iowa.gov to find the IDOC number and current facility.",
      "Iowa state facilities include the Iowa State Penitentiary in Fort Madison, the Anamosa State Penitentiary in Anamosa, and several correctional release centers across the state. All non-privileged calls at Iowa state facilities are monitored and recorded. Money can be deposited to Iowa inmate trust accounts through JPay at jpay.com or other approved methods. Three-way calling and call forwarding are prohibited and result in immediate call termination.",
      "Iowa county jails use their own phone vendors independently from Iowa DOC state facilities. Polk County Jail in Des Moines uses Securus Technologies. Black Hawk County Jail in Waterloo uses its own contracted provider. Always confirm the specific provider for each county facility before setting up any account. Visitor applications at Iowa DOC facilities require background checks and take several weeks to process.",
    ],

    overview: [
      "Which provider do Iowa state prison families use? GTL ViaPath Technologies through ConnectNetwork handles phone calls at Iowa state facilities. Contact ConnectNetwork at 800-483-8314 or visit connectnetwork.com. JPay handles money deposits at jpay.com. Use the Iowa Offender Search at doc.iowa.gov to find the IDOC number and current facility. Polk County Jail in Des Moines uses Securus, not ConnectNetwork.",
      "What is the IDOC number and how do I find it? The IDOC number is the identification number assigned to every person in Iowa DOC custody. You need it for ConnectNetwork and JPay account setup and for all mail. Find it through the Iowa Offender Search at doc.iowa.gov or ask your loved one to provide it. The IDOC number is different from any court case number or county booking number.",
      "What is the most common mistake Iowa prison families make? Using the wrong provider for county jails is very common. ConnectNetwork serves Iowa DOC state prisons but Iowa county jails use different vendors. Polk County Jail in Des Moines uses Securus. Families who set up ConnectNetwork accounts for Polk County will not receive calls. Always confirm the specific provider for each county facility before setting up accounts.",
    ],

    faq: [
      { question: "Which provider do I use for Iowa state prison phone calls?", answer: "GTL ViaPath Technologies through ConnectNetwork handles phone calls at Iowa DOC state facilities. Contact ConnectNetwork at 800-483-8314 or visit connectnetwork.com. You need the inmate IDOC number. Find it at doc.iowa.gov. Iowa has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Iowa state prisons?", answer: "No. Iowa is not among the states offering free inmate phone calls. ConnectNetwork GTL holds the Iowa DOC contract. Rates are subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives for regular contact." },
      { question: "How do I send money to someone at an Iowa state prison?", answer: "JPay handles money deposits for Iowa DOC inmate accounts. Visit jpay.com to create an account and deposit funds. Always include the inmate IDOC number. For county jail money transfers contact the specific county facility as providers vary." },
      { question: "Which provider does Polk County Jail in Des Moines use?", answer: "Polk County Jail in Des Moines uses Securus Technologies, not ConnectNetwork. Contact Securus at 800-844-6591 or visit securustech.net. Always confirm the specific provider for each Iowa county jail before setting up accounts." },
      { question: "How do I find someone in an Iowa state prison?", answer: "Use the Iowa Offender Search at doc.iowa.gov to find the IDOC number and current facility. For county jail inmates contact the specific county sheriff. For federal inmates in Iowa use the Bureau of Prisons locator at bop.gov." },
      { question: "What are the phone call rules at Iowa state prisons?", answer: "All non-privileged calls at Iowa state facilities are monitored and recorded. Three-way calling and call forwarding are prohibited and result in immediate call termination. Inmates must use their assigned PIN to place calls. Contact the specific facility for current calling hours and per-call time limits." },
      { question: "Do Iowa county jails use the same provider as state prisons?", answer: "No. Iowa county jails use their own providers. ConnectNetwork GTL serves Iowa DOC state prisons but Polk County uses Securus and other counties use various vendors. Always confirm which provider serves each specific county facility before setting up accounts." },
      { question: "What happens when my loved one transfers from an Iowa county jail to a state prison?", answer: "When someone transfers to an Iowa DOC state prison the provider changes to ConnectNetwork GTL. County jail accounts do not transfer. Create a new ConnectNetwork account at connectnetwork.com after confirming the transfer and IDOC number via doc.iowa.gov." },
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
    seoTitle: "Maryland Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Maryland jail or prison. Find the right provider for DPSCS state prisons and county jails.",

    intro: [
      "Maryland operates its state prison system through the Maryland Department of Public Safety and Correctional Services (DPSCS). Securus Technologies handles phone calls at Maryland state correctional facilities. Contact Securus at 800-844-6591 or visit securustech.net. Maryland considered legislation to make prison calls free in 2025 but the proposal did not pass. Maryland inmates are required to use their assigned PIN to initiate all outbound calls. All non-legal calls are monitored and recorded.",
      "Maryland state facilities include the Maryland Correctional Training Center in Hagerstown, North Branch Correctional Institution in Cumberland, and the Maryland Correctional Institution Jessup. The SID number is the State Identification number assigned to every person in DPSCS custody and must appear on all correspondence. Use the DPSCS inmate locator at dpscs.state.md.us to find the SID number and current facility. JPay handles money deposits to Maryland inmate trust accounts.",
      "Maryland county and city detention centers use their own phone providers independently from the DPSCS state system. Baltimore City Detention Center uses its own contracted vendor. Baltimore County uses Securus. Montgomery County and Prince George's County use their own vendors. Always confirm the specific provider for each county facility before setting up any account. Visitor applications at DPSCS facilities require background checks.",
    ],

    overview: [
      "Which provider do Maryland state prison families use? Securus Technologies handles phone calls at Maryland DPSCS state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the DPSCS inmate locator at dpscs.state.md.us to find the SID number and current facility. Baltimore County uses Securus but Baltimore City Detention Center uses its own vendor.",
      "What is the SID number and how do I find it? The SID is the State Identification number assigned to every person in DPSCS Maryland custody. It must appear on all correspondence sent to Maryland state facilities. Find it through the DPSCS inmate locator at dpscs.state.md.us or ask your loved one to provide it. The SID number is different from any court case number or county booking number.",
      "What is the most common mistake Maryland prison families make? Confusing Baltimore City Detention Center with Maryland state prisons is common. Baltimore City Detention Center is a city-operated facility with its own phone vendor separate from DPSCS. Families who set up Securus accounts expecting to reach someone at Baltimore City Detention Center may not receive calls. Always confirm the specific facility type and its contracted provider.",
    ],

    faq: [
      { question: "Which provider do I use for Maryland state prison phone calls?", answer: "Securus Technologies handles phone calls at Maryland DPSCS state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate SID number. Find it at dpscs.state.md.us. Maryland considered free call legislation in 2025 but it did not pass. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Maryland state prisons?", answer: "No. Maryland considered legislation to make prison calls free in 2025 but the proposal did not pass. Securus holds the DPSCS contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging is a lower-cost alternative for regular contact." },
      { question: "What is the SID number and where do I find it?", answer: "The SID is the State Identification number assigned to every person in Maryland DPSCS custody. It must appear on all correspondence. Find it through the DPSCS inmate locator at dpscs.state.md.us or ask your loved one. It is different from any court case number or county booking number." },
      { question: "How do I send money to someone at a Maryland state prison?", answer: "JPay handles money deposits for Maryland DPSCS state facility inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate SID number. For county detention center deposits contact the specific facility as providers vary." },
      { question: "How do I find someone in a Maryland state facility?", answer: "Use the DPSCS inmate locator at dpscs.state.md.us. For county detention inmates contact the specific county facility. For federal inmates in Maryland use the Bureau of Prisons locator at bop.gov." },
      { question: "Does Baltimore City Detention Center use Securus?", answer: "No. Baltimore City Detention Center is a city-operated facility with its own contracted phone vendor separate from DPSCS state prisons. Baltimore County uses Securus but Baltimore City uses a different system. Always confirm the specific facility type and provider before setting up accounts." },
      { question: "Do Maryland county jails use the same provider as state prisons?", answer: "No. Maryland county and city facilities use their own providers. Securus serves DPSCS state prisons. Baltimore City Detention Center uses its own vendor. Montgomery County and Prince George's County use their own vendors. Always confirm which provider serves each specific facility." },
      { question: "What happens when my loved one transfers from a Maryland county jail to a state prison?", answer: "When someone transfers to a DPSCS Maryland state prison they receive a SID number and the provider changes to Securus. County accounts do not transfer. Create a new Securus account at securustech.net after confirming the transfer and SID number via dpscs.state.md.us." },
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
    seoTitle: "Massachusetts Free Inmate Calls, Messaging and Money",
    seoDescription: "Massachusetts offers free inmate phone calls at state facilities. How to contact someone in a MA prison or county jail.",

    intro: [
      "Massachusetts operates its state prison system through the Massachusetts Department of Correction (MADOC). Phone calls and electronic messaging from all Massachusetts state prison and county jail facilities are free under legislation signed by Governor Maura Healey. Massachusetts was the fifth state to make prison calls free and the first state to include county jails in the free call program. The law took effect December 1, 2023. Free calls save Massachusetts families an average of $1,801 per year according to a Worth Rises study published in 2026.",
      "Massachusetts was the fifth state to mandate free telecommunications from its lockups, after Connecticut in 2021, California and Minnesota in 2023. The Connecticut and Massachusetts legislation both extended free calls to county jails, making Massachusetts unique among free-call states in covering both state and county facilities. You do not need a prepaid calling account to receive calls from Massachusetts state prisons or county jails. You still need to be on the approved contact list to receive calls.",
      "Find the Massachusetts DOC number and current facility using the MADOC inmate search at mass.gov/doc. The DOC number must appear on all mail sent to Massachusetts state facilities. For federal inmates in Massachusetts including those at FMC Devens, use CorrLinks for messaging and ConnectNetwork for phone calls, which are separate federal systems and not covered by the state free call program.",
    ],

    overview: [
      "Are phone calls free at Massachusetts state prisons and county jails? Yes. Phone calls and electronic messaging are free at all Massachusetts DOC state prisons and county jails under legislation that took effect December 1, 2023. Massachusetts was the first state to include county jails in a free call program. You do not need a prepaid account. Free calls save families an average of $1,801 per year according to a 2026 Worth Rises report.",
      "Which provider handles communication at Massachusetts state facilities? Since calls are free, the focus is on being on the approved contact list rather than funding a calling account. Use the MADOC inmate search at mass.gov/doc to find the DOC number and current facility. For federal inmates at FMC Devens, use CorrLinks for messaging and ConnectNetwork for calls, which are not free under the state program.",
      "What is the most common mistake Massachusetts prison families make? Thinking that federal facilities in Massachusetts are covered by the free call program is a common mistake. FMC Devens is a federal Bureau of Prisons facility and uses CorrLinks for messaging and ConnectNetwork for phone calls. These are not free under the Massachusetts state law. Only MADOC state prisons and county jails are covered by the free communication program.",
    ],

    faq: [
      { question: "Are phone calls free at Massachusetts state prisons?", answer: "Yes. Phone calls and electronic messaging are free at all Massachusetts DOC state prisons and county jails under legislation effective December 1, 2023. Massachusetts was the fifth state to make calls free and the first to include county jails. Free calls save families an average of $1,801 per year. You do not need a prepaid account but must be on the approved contact list." },
      { question: "Are Massachusetts county jails also covered by the free call program?", answer: "Yes. Massachusetts was the first state to include county jails in a free call program. Both state prisons and county jails in Massachusetts offer free phone calls and electronic messaging under the legislation signed by Governor Healey. This is unique among free-call states as most only cover state DOC facilities." },
      { question: "How do I find someone in a Massachusetts state prison?", answer: "Use the MADOC inmate search at mass.gov/doc to find the DOC number and current facility. The DOC number must appear on all mail. For federal inmates at FMC Devens use the Bureau of Prisons locator at bop.gov. Federal inmates are not covered by the Massachusetts free call program." },
      { question: "Is FMC Devens covered by the free call program?", answer: "No. FMC Devens is a federal Bureau of Prisons facility. Federal prisons are completely separate from MADOC state facilities. The Massachusetts free call law applies only to state DOC prisons and county jails. Federal inmates use CorrLinks for messaging and ConnectNetwork for phone calls, which are not free." },
      { question: "Do I still need to do anything to receive free calls?", answer: "Yes. Even though calls are free you must be on the approved contact list to receive calls. The inmate adds approved contacts from inside the facility. Contact the facility if you are not receiving calls to confirm you are on the approved list. Video visits may require advance scheduling." },
      { question: "How do I send money to someone at a Massachusetts state prison?", answer: "Since calls are free the primary reason to send money is for commissary purchases. Contact the specific MADOC facility or check mass.gov/doc for current approved deposit methods. Always include the inmate DOC number on all transactions." },
      { question: "How much money do free calls save Massachusetts families?", answer: "According to a Worth Rises study published in 2026, free calls save Massachusetts families an average of $1,801 per year. Massachusetts had the highest savings per family among free-call states because it previously had among the highest per-minute rates. Connecticut families save an average of $1,801 per year as well." },
      { question: "What happens when my loved one transfers from a Massachusetts county jail to a state prison?", answer: "Both Massachusetts county jails and state prisons offer free calls under the same law. The transition should be seamless in terms of call costs. Confirm the new facility and DOC number using the MADOC search at mass.gov/doc after the transfer and contact the new facility to be added to the approved list." },
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
    seoTitle: "Connecticut Free Inmate Calls, Messaging and Money Transfer",
    seoDescription: "Connecticut offers free inmate phone calls at state facilities. How to contact someone in a CT prison or county jail. Find the right provider for your facility.",

    intro: [
      "Connecticut operates its state prison system through the Connecticut Department of Correction (CTDOC). Connecticut was the first state in the country to make phone calls and electronic messaging free across all state prisons in 2021. The Connecticut legislation also extended free calls to county jails. You do not need a prepaid calling account to receive calls from Connecticut state prisons or county jails. Connecticut families who previously paid for calls saved an average of $1,801 per year after free calls were implemented.",
      "Connecticut DOC operates a unified correctional system combining what other states call state prisons and county jails into one Department of Correction. This means the free call program covers all CTDOC facilities including correctional institutions and community correctional centers. Find the Connecticut DOC number and current facility using the CTDOC inmate search at portal.ct.gov/doc. The DOC number must appear on all mail sent to Connecticut facilities.",
      "For federal inmates in Connecticut including those at FCI Danbury, use CorrLinks for messaging and ConnectNetwork for phone calls. These federal systems are completely separate from CTDOC and are not covered by the Connecticut free call program. FCI Danbury is a federal facility for female inmates. Always confirm whether your loved one is in a CTDOC state facility or a federal BOP facility before setting up any accounts.",
    ],

    overview: [
      "Are phone calls free at Connecticut state prisons? Yes. Connecticut was the first state to make phone calls and electronic messaging free across all state facilities in 2021. Connecticut also extended free calls to county jails making it one of two states along with Massachusetts to cover both state and county facilities. You do not need a prepaid account. Must be on approved contact list to receive calls.",
      "Which provider handles communication at Connecticut state facilities? Since calls are free the focus is on being on the approved contact list. Connecticut DOC operates a unified system combining state prisons and county jails. Use the CTDOC inmate search at portal.ct.gov/doc to find the DOC number and current facility. For federal inmates at FCI Danbury use CorrLinks and ConnectNetwork which are not free.",
      "What is the most common mistake Connecticut prison families make? Confusing CTDOC state facilities with federal facilities is common. FCI Danbury is a federal BOP facility and uses CorrLinks for messaging and ConnectNetwork for phone calls. These are not free under the Connecticut state program. Only CTDOC state and county facilities are covered by the free communication program.",
    ],

    faq: [
      { question: "Are phone calls free at Connecticut state prisons?", answer: "Yes. Connecticut was the first state to make phone calls and electronic messaging free across all state prisons and county jails in 2021. You do not need a prepaid account. Connecticut families saved an average of $1,801 per year after free calls were implemented. You must still be on the approved contact list to receive calls." },
      { question: "Are Connecticut county jails also covered by the free call program?", answer: "Yes. Connecticut was one of the first states to include county jails in a free call program. Connecticut DOC operates a unified system and the free call law covers all CTDOC facilities including correctional institutions and community correctional centers." },
      { question: "Is FCI Danbury covered by the Connecticut free call program?", answer: "No. FCI Danbury is a federal Bureau of Prisons facility for female inmates. Federal prisons are completely separate from CTDOC. The Connecticut free call law applies only to CTDOC state and county facilities. Federal inmates at FCI Danbury use CorrLinks for messaging and ConnectNetwork for phone calls, which are not free." },
      { question: "How do I find someone in a Connecticut state facility?", answer: "Use the CTDOC inmate search at portal.ct.gov/doc. Connecticut DOC operates a unified system combining state prisons and county jails. The DOC number must appear on all mail. For federal inmates at FCI Danbury use the Bureau of Prisons locator at bop.gov." },
      { question: "Do I still need to do anything to receive free calls from Connecticut?", answer: "Yes. You must be on the approved contact list even though calls are free. The inmate adds approved contacts from inside. Contact the facility if you are not receiving calls to confirm you are on the approved list." },
      { question: "How do I send money to someone at a Connecticut state facility?", answer: "Since calls are free the primary reason to send money is for commissary. Contact the specific CTDOC facility or check portal.ct.gov/doc for current approved deposit methods. Always include the inmate DOC number on all transactions." },
      { question: "How much do families save from free calls in Connecticut?", answer: "Connecticut families save an average of $1,801 per year according to a Worth Rises 2026 study. Connecticut had the highest per-minute rates before calls became free, making the savings especially significant. Connecticut was the first free-call state in 2021 setting a precedent others followed." },
      { question: "What happens when my loved one transfers between Connecticut facilities?", answer: "Connecticut DOC operates a unified system so both state prisons and county facilities offer free calls. Transfers within the CTDOC system should be seamless for call costs. Confirm the new facility using the CTDOC inmate search at portal.ct.gov/doc and contact the new facility to update your approved contact status." },
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
    seoTitle: "Nebraska Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Nebraska jail or prison. Find the right provider for NDCS state prisons and county jails.",

    intro: [
      "Nebraska operates its state prison system through the Nebraska Department of Correctional Services (NDCS). Securus Technologies handles phone calls at Nebraska state correctional facilities. Contact Securus at 800-844-6591 or visit securustech.net to set up an account. Nebraska is not among the states that offer free phone calls at state prisons. The NDCS number is required for all communication accounts and mail. Use the NDCS inmate search at corrections.nebraska.gov to find the NDCS number and current facility.",
      "Nebraska state facilities include the Nebraska State Penitentiary in Lincoln, the Tecumseh State Correctional Institution in Tecumseh, and the Diagnostic and Evaluation Center in Lincoln. All non-privileged calls at NDCS facilities are monitored and recorded. JPay handles money deposits to Nebraska inmate trust accounts. Three-way calling and call forwarding are prohibited.",
      "Nebraska county jails use their own phone vendors independently from NDCS state facilities. Douglas County Department of Corrections in Omaha uses Securus Technologies. Lancaster County Jail in Lincoln uses its own contracted provider. Always confirm the specific provider for each county facility. Visitor applications at NDCS facilities require background checks and take several weeks to process.",
    ],

    overview: [
      "Which provider do Nebraska state prison families use? Securus Technologies handles phone calls at NDCS Nebraska state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the NDCS inmate search at corrections.nebraska.gov to find the NDCS number and current facility. Douglas County in Omaha also uses Securus but with a separate account.",
      "What is the NDCS number and how do I find it? The NDCS number is the identification number assigned to every person in Nebraska DOC custody. You need it for Securus and JPay account setup and for all mail. Find it through the NDCS inmate search at corrections.nebraska.gov or ask your loved one. The NDCS number is different from any court case number.",
      "What is the most common mistake Nebraska prison families make? Not distinguishing between Douglas County Corrections in Omaha and NDCS state prisons is common. Douglas County also uses Securus but requires a separate account from the NDCS state prison account. Families who fund a Securus account for state prison and then try to use it for Douglas County calls may have issues. Always set up separate accounts for each facility.",
    ],

    faq: [
      { question: "Which provider do I use for Nebraska state prison phone calls?", answer: "Securus Technologies handles phone calls at NDCS Nebraska state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate NDCS number. Find it at corrections.nebraska.gov. Nebraska has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Nebraska state prisons?", answer: "No. Nebraska is not among the states offering free inmate phone calls. Securus holds the NDCS contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "How do I send money to someone at a Nebraska state prison?", answer: "JPay handles money deposits for NDCS state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate NDCS number. For county jail deposits contact the specific county facility as providers vary." },
      { question: "How do I find someone in a Nebraska state prison?", answer: "Use the NDCS inmate search at corrections.nebraska.gov to find the NDCS number and current facility. For county jail inmates contact the specific county sheriff. Douglas County Corrections in Omaha can be reached directly. For federal inmates in Nebraska use the Bureau of Prisons locator at bop.gov." },
      { question: "Does Douglas County Corrections use the same Securus account as NDCS?", answer: "Douglas County Corrections in Omaha also uses Securus Technologies but requires a separate account from NDCS state prison accounts. Set up a separate Securus account specifically for Douglas County. Contact Securus at 800-844-6591 to confirm the correct account type for each facility." },
      { question: "Do Nebraska county jails use the same provider as state prisons?", answer: "Not always. Douglas County in Omaha uses Securus like NDCS state prisons but requires a separate account. Lancaster County and other counties use their own vendors. Always confirm which provider serves each specific county facility before setting up accounts." },
      { question: "What are the phone call rules at Nebraska state prisons?", answer: "All non-privileged calls at NDCS facilities are monitored and recorded. Three-way calling and call forwarding are prohibited. Inmates use their assigned PIN to initiate calls. Contact the specific facility for current calling hours and per-call time limits." },
      { question: "What happens when my loved one transfers from a Nebraska county jail to a state prison?", answer: "When someone transfers to an NDCS Nebraska state prison the provider is Securus. County jail accounts may or may not transfer depending on the county provider. Create a new Securus account for NDCS after confirming the transfer and NDCS number via corrections.nebraska.gov." },
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
    facilityCount: 42,
    region: "Southwest",
    hasDetailPage: true,

    description: "How to contact someone in a New Mexico state prison or county jail. NMCD phone calls, video visits, mail, and money through Smart Communications.",
    seoTitle: "New Mexico Inmate Phone Calls, Visits, Mail and Money (NMCD)",
    seoDescription: "Contact someone in a New Mexico state prison: NMCD phone calls and video visits through Smart Communications, Smart Communications digital mail, and money deposits. County jails use separate vendors.",

    intro: [
      "New Mexico runs several separate systems, and mixing them up is the most common mistake families make. State prisons are operated by the New Mexico Corrections Department (NMCD), which runs eight state-operated facilities, plus one privately operated facility, Otero County Prison Facility, that houses state inmates. County detention centers are run by the state's 33 counties, and each county sets its own phone, video, and messaging contracts. There are no federal Bureau of Prisons institutions in New Mexico; federal detainees in the state are held at contract detention facilities, a separate system again. This page covers the NMCD state prison system first, then explains how county jails differ.",

      "In NMCD state prisons, phone calls and video visits run through Smart Communications. The NMCD 2025 Annual Report states Smart Communications is deployed statewide, and Worth Rises data (January 2026) lists Smart Communications as the NMCD phone vendor at $0.60 per 15-minute call. Earlier reporting named Securus for the phone contract in 2022; NMCD has since moved to Smart Communications. Video visits run through Smart Communications on inmate tablets, per the NMCD visitation page. General mail for the eight state-run prisons goes to Smart Communications in Seminole, Florida, where it is scanned and uploaded to the inmate's tablet; each facility has its own PO Box, listed on NMCD's Inmate Mail Addresses page. Money deposits are the murkiest part: NMCD trust-account policy requires funds by US mail money order, while directory pages report JPay online and phone deposits. Confirm the current deposit method with the facility before sending money.",

      "To find someone in a state prison, use the NMCD offender search on the NMCD website; directory summaries describe it as searchable by name and other fields. For county jail custody, contact the county detention center directly. NMCD Inmate Records can be reached at (505) 827-8645.",
    ],


    overview: [
      "Who provides phone, video, mail, and money services in New Mexico state prisons? Phone calls run through Smart Communications, per the NMCD 2025 Annual Report (Smart Communications deployed statewide) and Worth Rises data (January 2026) listing Smart Communications as the NMCD phone vendor at $0.60 per 15-minute call; earlier reporting named Securus in 2022. Video visits run through Smart Communications on inmate tablets, per the NMCD visitation page, and require NMCD approval. General mail for the eight state-run prisons goes to Smart Communications in Seminole, Florida, where it is scanned and uploaded to the inmate's tablet; get the facility-specific PO Box from NMCD's Inmate Mail Addresses page. Money is the least clear part: NMCD trust-account policy requires funds by US mail money order from senders on the approved visitor list, while directory pages report JPay online and phone deposits. Confirm the current deposit method with the facility before sending money. Inmates cannot receive incoming phone calls; they place outgoing calls to people on their approved phone list. To get on the list, write to the inmate with your phone number and the inmate may request to add you.",
      "How do visits work in New Mexico state prisons? All visitors must be on the inmate's current approved visitation list, and each inmate may have up to 15 approved visitors. Visitor applications must be renewed every two years. Only one visit a week is scheduled per inmate, per the NMCD visitation page. In-person visits are scheduled in advance and, at the facility described on the NMCD visitation page, run Monday to Friday in two-hour blocks (8:00 to 10:00 a.m., 10:00 a.m. to 12:00 p.m., 1:00 to 3:00 p.m.), with no visitation on weekends and visitation on most holidays. In-person barrier visits are non-contact unless the visitor is immediate family with proof of kinship. Visitors may bring up to $30 in loose change for vending machines; hats, sunglasses (unless prescription), cellphones, and other electronics are not allowed in visiting areas. Video visits are done through Smart Communications on inmate tablets, not scheduled through the facility; you must be approved through NMCD first. Schedules vary by facility, so confirm the current visiting schedule with the facility before traveling.",
      "How do mail and money differ between state prisons and county jails in New Mexico? In NMCD state prisons, personal mail for the eight state-run prisons goes to Smart Communications in Seminole, Florida, where it is scanned and uploaded to the inmate's tablet; get the facility-specific PO Box from NMCD's Inmate Mail Addresses page. Mail must include the inmate's name and NMCD number or it is returned. Cash and personal checks are not accepted; packages with money or checks are returned unopened. All non-legal mail may be opened and inspected. Legal and privileged mail goes directly to the facility, is opened in the inmate's presence, photocopied with the inmate present, and the original is shredded. The privately operated Otero County Prison Facility also routes mail to Smart Communications in Seminole, Florida (PO Box 9211), per NMCD's Inmate Mail Addresses page. County jails set their own contracts and may use completely different vendors and mail routes. For example, Lea County's official page lists ViaPath phone services (GettingOut for messaging and visits, AdvancePay, PIN Debit). Check the specific jail's page before setting up any account.",
    ],

    faq: [
      {
        question: "Who provides phone service in New Mexico state prisons?",
        answer: "Smart Communications. The NMCD 2025 Annual Report states Smart Communications is deployed statewide, and Worth Rises data (January 2026) lists Smart Communications as the NMCD phone vendor at $0.60 per 15-minute call, about $0.04 per minute derived. Earlier reporting named Securus for the phone contract in 2022; NMCD has since moved to Smart Communications. Inmates cannot receive incoming calls; they place outgoing calls to people on their approved phone list. To get on the list, write to the inmate with your phone number and the inmate may request to add you.",
      },
      {
        question: "How do video visits work in New Mexico state prisons?",
        answer: "Video visits run through Smart Communications on inmate tablets, per the NMCD visitation page. They are not scheduled through the facility. You must be approved through NMCD before you can schedule a video visit. A secondary facility guide reports scheduling by completing a Video Schedule Request form (CD-044101.1) and emailing it to NMCD-video@state.nm.us about two weeks in advance, with scheduling help at 827-8683 or 827-8641; confirm these details with NMCD, since they come from a secondary guide, not an official NMCD page.",
      },
      {
        question: "How do I visit someone in person at a New Mexico state prison?",
        answer: "All visitors must be on the inmate's current approved visitation list, and each inmate may have up to 15 approved visitors. Visitor applications must be renewed every two years. Only one visit a week is scheduled per inmate. In-person visits are scheduled in advance. At the facility described on the NMCD visitation page, in-person visits run Monday to Friday in two-hour blocks (8:00 to 10:00 a.m., 10:00 a.m. to 12:00 p.m., 1:00 to 3:00 p.m.), with no visitation on weekends and visitation on most holidays. Barrier visits are non-contact unless the visitor is immediate family with proof of kinship. Visitors may bring up to $30 in loose change for vending machines; hats, sunglasses (unless prescription), cellphones, and other electronics are not allowed in visiting areas. Schedules vary by facility, so confirm the current visiting schedule with the facility before traveling.",
      },
      {
        question: "How do I send mail to someone in a New Mexico state prison?",
        answer: "For the eight state-run prisons, send personal mail to Smart Communications in Seminole, Florida, where it is scanned and uploaded to the inmate's tablet. NMCD began using Smart Communications tablets for mail on July 1, 2024, replacing the physical mail system. Get the facility-specific PO Box from NMCD's Inmate Mail Addresses page; for example, Penitentiary of New Mexico mail goes to PO Box 9190, Seminole, FL 33775-9189. Mail must include the inmate's name and NMCD number or it is returned. Cash and personal checks are not accepted; packages with money or checks are returned unopened. All non-legal mail may be opened and inspected. Legal and privileged mail goes directly to the facility, is opened in the inmate's presence, photocopied with the inmate present, and the original is shredded. The privately operated Otero County Prison Facility also routes mail to Smart Communications in Seminole, Florida (PO Box 9211, Seminole, FL 33775-9211).",
      },
      {
        question: "How do I send money to someone in a New Mexico state prison?",
        answer: "Confirm the current deposit method with the facility before sending money, because the sources conflict. NMCD trust-account policy requires funds by US mail money order from senders on the approved visitor list; cash, currency, personal checks, and anonymous gifts are not accepted and are returned, and visitors may not leave money at the facility. Directory pages separately report JPay online deposits, phone deposits at 1-800-574-5729, and MoneyGram. Do not treat the JPay method as verified; it comes from directories, not an official NMCD page.",
      },
      {
        question: "How do I find someone in a New Mexico state prison?",
        answer: "Use the NMCD offender search on the NMCD website; directory summaries describe it as searchable by name and other fields. You can also call NMCD Inmate Records at (505) 827-8645. For someone in a county jail, contact the county detention center directly. For someone in federal custody in New Mexico, note that there are no BOP-operated institutions in the state; federal detainees are held at contract facilities, so contact the arresting federal agency or the contract facility.",
      },
      {
        question: "Do county jails in New Mexico use the same providers as state prisons?",
        answer: "No. Each county sets its own contracts, and county jails and state prisons are entirely separate systems with no shared provider infrastructure. For example, Lea County's official page lists ViaPath phone services (GettingOut for messaging and visits, AdvancePay, PIN Debit). Check the specific jail's page before setting up any account, because the provider for one county may be completely different from the provider for another.",
      },
    ],

    facilitiesByType: { federal: 0, state: 8, county: 33, private: 1 },

    counties: [
      "Bernalillo County", "Doña Ana County", "Santa Fe County", "Sandoval County",
      "San Juan County", "Chaves County", "McKinley County", "Otero County",
      "Eddy County", "Valencia County", "Rio Arriba County", "Taos County",
      "Lea County", "Cibola County", "Curry County",
    ],

    providers: [
      {
        name: "Smart Communications",
        slug: "smart-communications",
        initial: "S",
        color: "bg-cyan-600",
        description: "Phone calls, video visits, and digital mail for NMCD state prisons. NMCD 2025 Annual Report states Smart Communications is deployed statewide; Worth Rises data (January 2026) lists Smart Communications as the NMCD phone vendor at $0.60 per 15-minute call.",
      },
      {
        name: "GettingOut",
        slug: "gettingout",
        initial: "G",
        color: "bg-orange-600",
        description: "Messaging and visit services at Lea County, per the county's official page.",
      },
    ],

    featuredFacilities: [
      {
        name: "New Mexico State Penitentiary",
        slug: "new-mexico-state-penitentiary",
        type: "State Prison",
        county: "Santa Fe County",
        features: ["Phone Calls", "Video Visits"],
      },
      {
        name: "Bernalillo County Metropolitan Detention Center",
        slug: "bernalillo-county-metropolitan-detention-center",
        type: "County Jail",
        county: "Bernalillo County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
      },
      {
        name: "Dona Ana County Detention Center",
        slug: "dona-ana-county-detention-center",
        type: "County Jail",
        county: "Dona Ana County",
        features: ["Phone Calls", "Video Visits"],
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
    seoTitle: "Oregon Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in an Oregon jail or prison. Find the right provider for ODOC state prisons and county jails.",

    intro: [
      "Oregon operates its state prison system through the Oregon Department of Corrections (ODOC). Securus Technologies handles phone calls at Oregon state correctional facilities. Contact Securus at 800-844-6591 or visit securustech.net to set up an account. Oregon is not among the states that offer free phone calls at state prisons. The SID number is the identification number assigned to every person in ODOC custody and must appear on all mail sent to Oregon state facilities. Use the ODOC inmate search at oregon.gov/doc to find the SID number and current facility.",
      "Oregon state facilities include the Oregon State Penitentiary in Salem, Snake River Correctional Institution in Ontario, Two Rivers Correctional Institution in Umatilla, and several other facilities. All non-privileged calls are monitored and recorded. JPay handles money deposits to Oregon inmate trust accounts. Oregon county jails use their own phone vendors independently from ODOC state facilities.",
      "Multnomah County Detention Center in Portland uses Securus Technologies. Lane County Jail in Eugene and Deschutes County Jail in Bend use their own contracted providers. Always confirm the specific provider for each county facility. For federal inmates in Oregon including those at FCI Sheridan, use CorrLinks for messaging and ConnectNetwork for calls, which are separate federal systems and not covered by any Oregon state program.",
    ],

    overview: [
      "Which provider do Oregon state prison families use? Securus Technologies handles phone calls at ODOC Oregon state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the ODOC inmate search at oregon.gov/doc to find the SID number and current facility. Multnomah County Jail in Portland also uses Securus but requires a separate account.",
      "What is the SID number and how do I find it? The SID is the State Identification number assigned to every person in Oregon ODOC custody. It must appear on all mail sent to Oregon state facilities. Find it through the ODOC inmate search at oregon.gov/doc or ask your loved one. The SID number is different from any court case number or county booking number.",
      "What is the most common mistake Oregon prison families make? Not knowing whether a facility is state or federal is common in Oregon. FCI Sheridan in Polk County is a federal BOP facility and uses CorrLinks and ConnectNetwork, not Securus or JPay. Families who set up Securus accounts for FCI Sheridan will not receive calls. Always confirm whether the facility is ODOC state or federal BOP before setting up accounts.",
    ],

    faq: [
      { question: "Which provider do I use for Oregon state prison phone calls?", answer: "Securus Technologies handles phone calls at ODOC Oregon state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate SID number. Find it at oregon.gov/doc. Oregon has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Oregon state prisons?", answer: "No. Oregon is not among the states offering free inmate phone calls. Securus holds the ODOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives for regular contact." },
      { question: "Is FCI Sheridan covered by Oregon state programs?", answer: "No. FCI Sheridan in Polk County is a federal Bureau of Prisons facility. It uses CorrLinks for messaging and ConnectNetwork for phone calls. These are not covered by any Oregon state program and are not free. Do not set up a Securus account expecting to reach someone at FCI Sheridan." },
      { question: "How do I send money to someone at an Oregon state prison?", answer: "JPay handles money deposits for ODOC state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate SID number. For county jail deposits contact the specific county facility as providers vary." },
      { question: "How do I find someone in an Oregon state prison?", answer: "Use the ODOC inmate search at oregon.gov/doc. For county jail inmates contact the specific county sheriff. Multnomah County Jail in Portland uses Securus. For federal inmates at FCI Sheridan use the Bureau of Prisons locator at bop.gov." },
      { question: "Does Multnomah County Jail use the same account as ODOC state prisons?", answer: "Multnomah County Detention Center in Portland uses Securus Technologies but requires a separate account from ODOC state prison accounts. Set up a separate Securus account specifically for Multnomah County. Contact Securus at 800-844-6591 to confirm the correct account setup." },
      { question: "Do Oregon county jails use the same provider as state prisons?", answer: "Multnomah County uses Securus like ODOC but requires a separate account. Lane County and Deschutes County use their own vendors. Always confirm which provider serves each specific county facility before setting up accounts." },
      { question: "What happens when my loved one transfers from an Oregon county jail to a state prison?", answer: "When someone transfers to an ODOC Oregon state prison the provider is Securus. Get the SID number from the ODOC search at oregon.gov/doc and create a new Securus account after confirming the transfer." },
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
    seoTitle: "Nevada Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Nevada jail or prison. Find the right provider for NDOC state prisons and county jails.",

    intro: [
      "Nevada operates its state prison system through the Nevada Department of Corrections (NDOC). Securus Technologies handles phone calls at Nevada state correctional facilities. Contact Securus at 800-844-6591 or visit securustech.net. Nevada is not among the states that offer free phone calls at state prisons. The NDOC number is required for all communication accounts and mail sent to Nevada state facilities. Use the NDOC inmate search at doc.nv.gov to find the NDOC number and current facility.",
      "Nevada state facilities include Ely State Prison in White Pine County, High Desert State Prison in Indian Springs, and Lovelock Correctional Center in Lovelock. All non-privileged calls are monitored and recorded. JPay handles money deposits to Nevada inmate trust accounts. Three-way calling and call forwarding are prohibited and result in immediate call termination and potential disciplinary action.",
      "Nevada county jails use their own phone vendors independently from NDOC state facilities. Clark County Detention Center in Las Vegas uses its own contracted provider separate from Securus NDOC accounts. Washoe County Jail in Reno uses its own vendor. Always confirm the specific provider for each county facility before setting up any account. Visitor applications at NDOC facilities require background checks and take several weeks.",
    ],

    overview: [
      "Which provider do Nevada state prison families use? Securus Technologies handles phone calls at NDOC Nevada state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the NDOC inmate search at doc.nv.gov to find the NDOC number and current facility. Clark County Detention Center in Las Vegas uses its own separate vendor.",
      "What is the NDOC number and how do I find it? The NDOC number is the identification number assigned to every person in Nevada DOC custody. You need it for Securus and JPay account setup and for all mail. Find it through the NDOC inmate search at doc.nv.gov or ask your loved one. The NDOC number is different from any court case number or county booking number.",
      "What is the most common mistake Nevada prison families make? Confusing Clark County Detention Center in Las Vegas with NDOC state prisons is very common. Clark County uses its own phone vendor separate from Securus NDOC accounts. Families who set up Securus NDOC accounts to reach someone at Clark County Detention Center will not receive calls. Always confirm the specific facility type and provider.",
    ],

    faq: [
      { question: "Which provider do I use for Nevada state prison phone calls?", answer: "Securus Technologies handles phone calls at NDOC Nevada state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate NDOC number. Find it at doc.nv.gov. Nevada has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Nevada state prisons?", answer: "No. Nevada is not among the states offering free inmate phone calls. Securus holds the NDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives for regular contact." },
      { question: "Does Clark County Detention Center use Securus?", answer: "Clark County Detention Center in Las Vegas uses its own contracted phone vendor separate from the NDOC Securus contract. Do not use your NDOC Securus account to receive calls from Clark County. Contact Clark County Detention Center directly to confirm the current phone provider and setup process." },
      { question: "How do I send money to someone at a Nevada state prison?", answer: "JPay handles money deposits for NDOC state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate NDOC number. For county jail deposits contact the specific county facility as providers vary." },
      { question: "How do I find someone in a Nevada state prison?", answer: "Use the NDOC inmate search at doc.nv.gov. For county jail inmates contact the specific county sheriff or detention center. For federal inmates in Nevada use the Bureau of Prisons locator at bop.gov." },
      { question: "What are the phone call rules at Nevada state prisons?", answer: "All non-privileged calls are monitored and recorded. Three-way calling and call forwarding are prohibited and result in immediate call termination and possible disciplinary action. Inmates use their assigned PIN to initiate calls. Contact the specific facility for current calling hours and per-call time limits." },
      { question: "Do Nevada county jails use the same provider as state prisons?", answer: "No. Nevada county jails use their own providers. Clark County in Las Vegas and Washoe County in Reno each use their own contracted vendors separate from Securus NDOC state prison accounts. Always confirm the specific provider for each county facility." },
      { question: "What happens when my loved one transfers from a Nevada county jail to a state prison?", answer: "When someone transfers to an NDOC Nevada state prison the provider changes to Securus. Get the NDOC number from doc.nv.gov and create a new Securus account after confirming the transfer. County jail accounts do not transfer to state prison accounts." },
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
    seoTitle: "West Virginia Inmate Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone in a West Virginia jail or prison. Find the right provider for WVDCR state prisons and county jails.",

    intro: [
      "West Virginia operates its state prison system through the West Virginia Division of Corrections and Rehabilitation (WVDCR). Securus Technologies handles phone calls at West Virginia state correctional facilities. Contact Securus at 800-844-6591 or visit securustech.net to set up an account. West Virginia is not among the states that offer free phone calls at state prisons. The WV DOC number is required for all communication accounts and mail sent to West Virginia state facilities.",
      "Use the WVDCR inmate search at dcr.wv.gov to find the DOC number and current facility. JPay handles money deposits to West Virginia inmate trust accounts. West Virginia regional jails are operated by the West Virginia Regional Jail and Correctional Facility Authority, a separate state agency from WVDCR. Regional jails house both pretrial detainees and sentenced inmates. The South Central Regional Jail in Charleston and Western Regional Jail in Barboursville each use their own contracted phone providers which may differ from WVDCR state prisons.",
      "West Virginia has one of the highest incarceration rates per capita in the United States, driven significantly by the ongoing opioid crisis. Phone contact is especially important for West Virginia families navigating the criminal justice system. All non-privileged calls are monitored and recorded. Three-way calling is prohibited. Visitor applications at WVDCR facilities require background checks.",
    ],

    overview: [
      "Which provider do West Virginia state prison families use? Securus Technologies handles phone calls at WVDCR West Virginia state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the WVDCR inmate search at dcr.wv.gov to find the DOC number. West Virginia regional jails are operated by a separate agency and may use different providers.",
      "What is the difference between WVDCR and the Regional Jail Authority? West Virginia has two separate state correctional agencies. The Division of Corrections and Rehabilitation operates state prisons for sentenced inmates. The Regional Jail and Correctional Facility Authority operates regional jails that house both pretrial detainees and some sentenced inmates. These agencies may use different phone providers. Always confirm which specific facility your loved one is in before setting up accounts.",
      "What is the most common mistake West Virginia prison families make? Confusing WVDCR state prisons with regional jails is very common. The South Central Regional Jail in Charleston and Western Regional Jail in Barboursville are operated by the Regional Jail Authority, not WVDCR. These facilities may use different phone providers than Securus WVDCR accounts. Always confirm the specific facility and its agency before setting up accounts.",
    ],

    faq: [
      { question: "Which provider do I use for West Virginia state prison phone calls?", answer: "Securus Technologies handles phone calls at WVDCR West Virginia state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate WV DOC number. Find it at dcr.wv.gov. West Virginia has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at West Virginia state prisons?", answer: "No. West Virginia is not among the states offering free inmate phone calls. Securus holds the WVDCR contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "What is the difference between West Virginia state prisons and regional jails?", answer: "WVDCR operates state prisons for sentenced inmates. The Regional Jail and Correctional Facility Authority operates regional jails housing both pretrial and sentenced inmates. These are separate state agencies. South Central Regional Jail in Charleston and Western Regional Jail in Barboursville are regional jails that may use different phone providers than WVDCR state prisons. Always confirm which agency operates the specific facility." },
      { question: "How do I find someone in a West Virginia state facility?", answer: "Use the WVDCR inmate search at dcr.wv.gov. For regional jail inmates contact the specific regional jail directly. South Central Regional Jail in Charleston can be reached at 304-558-1336. For federal inmates in West Virginia including those at FCI Hazelton, use the Bureau of Prisons locator at bop.gov." },
      { question: "How do I send money to someone at a West Virginia state prison?", answer: "JPay handles money deposits for WVDCR state prison inmates. Visit jpay.com to deposit funds. Always include the inmate WV DOC number. For regional jail deposits contact the specific jail directly as they may use different money transfer providers." },
      { question: "Does South Central Regional Jail in Charleston use Securus?", answer: "South Central Regional Jail is operated by the West Virginia Regional Jail Authority, not WVDCR. It may use a different phone provider than Securus WVDCR state prisons. Contact South Central Regional Jail directly at 304-558-1336 to confirm the current phone provider and account setup process." },
      { question: "Why is phone contact especially important for West Virginia families?", answer: "West Virginia has one of the highest incarceration rates per capita in the country, driven significantly by the opioid crisis. Many families are navigating the criminal justice system for the first time. Phone contact is a critical lifeline for maintaining family bonds and supporting successful reentry. FCC rate caps have significantly reduced per-minute costs from historically high West Virginia rates." },
      { question: "What happens when my loved one transfers from a West Virginia regional jail to a state prison?", answer: "When someone transfers from a regional jail to a WVDCR state prison the provider changes to Securus. Get the new WV DOC number from dcr.wv.gov and create new Securus and JPay accounts after confirming the transfer. Regional jail accounts do not transfer to WVDCR state prison accounts." },
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
    seoTitle: "Idaho Free Inmate Tablets, Phone Calls and Money Transfer",
    seoDescription: "Idaho provides free ViaPath tablets to inmates. How to contact someone in an Idaho prison or county jail. Find the right provider for ID DOC facilities.",

    intro: [
      "Idaho operates its state prison system through the Idaho Department of Correction (IDOC). ICSolutions handles phone calls at all Idaho state correctional facilities through a contract with IDOC. Visit icscorrections.com or call 888-506-8407 to set up an account. Idaho DOC transitioned from JPay tablets to free ViaPath Bridge tablets in May 2025. Inmates receive free ViaPath tablets for messaging and electronic communication. Voice-only phone calls increased to $0.08 per minute starting April 1, 2026 to offset rising facility costs.",
      "Idaho county jails use their own phone vendors independently from IDOC state facilities. Ada County Jail in Boise uses GettingOut by Telmate at 866-516-0115. Kootenai County Jail in Coeur d'Alene lists CTEL as its provider. Bannock County Detention Center in Pocatello uses Securus. ICSolutions serves some other Idaho county jails. Always confirm the specific provider for each county facility. Use the IDOC offender search at idoc.idaho.gov to find the IDOC number and current facility.",
      "The IDOC number is required for all mail and communication accounts. IDOC provides free ViaPath Bridge tablets to inmates for electronic messaging. Families create a ViaPath account to send messages through the tablet system. Physical mail goes directly to Idaho state facilities with the IDOC number on every envelope. Idaho is not among the states that offer free phone calls but the tablet messaging system provides a lower-cost communication alternative.",
    ],

    overview: [
      "Which provider do Idaho state prison families use? ICSolutions handles phone calls at all IDOC Idaho state facilities. Visit icscorrections.com or call 888-506-8407. Idaho DOC provides free ViaPath Bridge tablets to inmates for electronic messaging. Voice-only calls cost $0.08 per minute as of April 2026. Use the IDOC offender search at idoc.idaho.gov to find the IDOC number and current facility.",
      "What is the ViaPath tablet program at Idaho DOC? Idaho DOC transitioned from JPay to free ViaPath Bridge tablets in May 2025. Inmates receive these tablets for electronic messaging and digital communication. Families create a ViaPath account to send messages. The tablet transition means content purchased on JPay is no longer accessible. Voice-only phone calls through ICSolutions cost $0.08 per minute.",
      "What is the most common mistake Idaho prison families make? Using Ada County Jail accounts for IDOC state prisons is very common. Ada County in Boise uses GettingOut by Telmate while IDOC state prisons use ICSolutions. These are completely different systems. Also families who had JPay accounts for messaging before May 2025 need to transition to ViaPath accounts for the new tablet system.",
    ],

    faq: [
      { question: "Which provider do I use for Idaho state prison phone calls?", answer: "ICSolutions handles phone calls at all IDOC Idaho state facilities. Visit icscorrections.com or call 888-506-8407. Voice-only calls cost $0.08 per minute as of April 1, 2026. Idaho is not among the states offering free phone calls. Use the IDOC offender search at idoc.idaho.gov to find the IDOC number." },
      { question: "What happened to JPay tablets at Idaho DOC?", answer: "Idaho DOC transitioned from JPay tablets to free ViaPath Bridge tablets in May 2025. Inmates now receive free ViaPath tablets for electronic messaging. Content purchased on JPay tablets is no longer accessible after the transition. Families need to create a ViaPath account to send messages through the new tablet system." },
      { question: "How do I send electronic messages to someone at an Idaho state prison?", answer: "Idaho DOC provides free ViaPath Bridge tablets to inmates. Create a ViaPath account to send electronic messages. The tablet system replaced JPay messaging after the May 2025 transition. Voice-only phone calls use ICSolutions at icscorrections.com. These are two separate systems." },
      { question: "Does Ada County Jail in Boise use ICSolutions?", answer: "No. Ada County Jail in Boise uses GettingOut by Telmate at 866-516-0115. Kootenai County Jail uses CTEL. Bannock County uses Securus. ICSolutions serves IDOC state prisons and some other county jails. Always confirm the specific provider for each Idaho county facility." },
      { question: "How do I find someone in an Idaho state prison?", answer: "Use the IDOC offender search at idoc.idaho.gov to find the IDOC number and current facility. For county jail inmates contact the specific county facility. For federal inmates in Idaho use the Bureau of Prisons locator at bop.gov." },
      { question: "Are phone calls free at Idaho state prisons?", answer: "No. Idaho is not among the states offering free inmate phone calls. ICSolutions holds the IDOC contract and voice-only calls cost $0.08 per minute as of April 1, 2026. Idaho DOC provides free ViaPath tablets for electronic messaging as an alternative." },
      { question: "How do I send money to someone at an Idaho state prison?", answer: "Money can be deposited through ICSolutions for phone credits or through ViaPath for tablet services. Always include the inmate IDOC number on all transactions. For county jail deposits contact the specific county facility as providers vary." },
      { question: "What happens when my loved one transfers from an Idaho county jail to a state prison?", answer: "When someone transfers to an IDOC state prison the provider changes to ICSolutions for calls and ViaPath for tablet messaging. County jail accounts do not transfer. Get the IDOC number from idoc.idaho.gov and create new ICSolutions and ViaPath accounts after confirming the transfer." },
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
    seoTitle: "Utah Inmate Phone Calls, Messaging and Money Transfer Guide",
    seoDescription: "How to contact someone in a Utah jail or prison. Find the right provider for UDOC state prisons and county jails.",

    intro: [
      "Utah operates its state prison system through the Utah Department of Corrections (UDOC). Securus Technologies handles phone calls at Utah state correctional facilities. Contact Securus at 800-844-6591 or visit securustech.net to set up an account. Utah is not among the states that offer free phone calls at state prisons. The Utah state correctional system is centralized with the Utah State Correctional Facility in Salt Lake City being the primary intake and classification center opened in 2022.",
      "The UDOC number is required for all mail and communication accounts at Utah state facilities. Use the UDOC offender search at corrections.utah.gov to find the UDOC number and current facility. JPay handles money deposits to Utah inmate trust accounts. Utah county jails use their own phone vendors independently from UDOC state facilities. Salt Lake County Metro Jail uses its own contracted provider separate from Securus UDOC accounts.",
      "Visitor applications at Utah state facilities require background checks and take several weeks. All non-privileged calls at UDOC facilities are monitored and recorded. Three-way calling and call forwarding are prohibited. For federal inmates in Utah, use CorrLinks for messaging and ConnectNetwork for phone calls which are separate federal systems not covered by any state program.",
    ],

    overview: [
      "Which provider do Utah state prison families use? Securus Technologies handles phone calls at UDOC Utah state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the UDOC offender search at corrections.utah.gov to find the UDOC number. Salt Lake County Metro Jail uses its own vendor separate from UDOC Securus accounts.",
      "What is the UDOC number and how do I find it? The UDOC number is the identification number assigned to every person in Utah DOC custody. You need it for Securus and JPay account setup and for all mail. Find it through the UDOC offender search at corrections.utah.gov or ask your loved one. The UDOC number is different from any court case number.",
      "What is the most common mistake Utah prison families make? Confusing Salt Lake County Metro Jail with UDOC state prisons is very common. The jail uses its own phone vendor while UDOC state prisons use Securus. Setting up a Securus UDOC account to reach someone at Salt Lake County Metro Jail will not work. Always confirm the specific facility type and provider.",
    ],

    faq: [
      { question: "Which provider do I use for Utah state prison phone calls?", answer: "Securus Technologies handles phone calls at UDOC Utah state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate UDOC number. Find it at corrections.utah.gov. Utah has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Utah state prisons?", answer: "No. Utah is not among the states offering free inmate phone calls. Securus holds the UDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "Does Salt Lake County Metro Jail use Securus?", answer: "Salt Lake County Metro Jail uses its own contracted phone vendor separate from the UDOC Securus contract. Do not use your UDOC Securus account for Salt Lake County Metro Jail. Contact the jail directly to confirm the current phone provider and setup process." },
      { question: "How do I send money to someone at a Utah state prison?", answer: "JPay handles money deposits for UDOC state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate UDOC number. For county jail deposits contact the specific county facility." },
      { question: "How do I find someone in a Utah state prison?", answer: "Use the UDOC offender search at corrections.utah.gov. For county jail inmates contact the specific county facility. For federal inmates in Utah use the Bureau of Prisons locator at bop.gov." },
      { question: "What is the Utah State Correctional Facility?", answer: "The Utah State Correctional Facility in Salt Lake City is the primary intake and classification center opened in 2022. It replaced the old Utah State Prison in Draper. Use the UDOC offender search at corrections.utah.gov to confirm the current facility for your loved one." },
      { question: "Do Utah county jails use the same provider as state prisons?", answer: "No. Utah county jails use their own providers independently from UDOC. Salt Lake County Metro Jail uses its own vendor. Always confirm which provider serves each specific county facility before setting up accounts." },
      { question: "What happens when my loved one transfers from a Utah county jail to a state prison?", answer: "When someone transfers to a UDOC state prison the provider changes to Securus. Get the UDOC number from corrections.utah.gov and create new accounts after confirming the transfer. County jail accounts do not transfer." },
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
    seoTitle: "Montana Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Montana jail or prison. Find the right provider for MDOC state prisons and county jails.",

    intro: [
      "Montana operates its state prison system through the Montana Department of Corrections (MDOC). Securus Technologies handles phone calls at Montana state correctional facilities including Montana State Prison in Deer Lodge and Montana Women's Prison in Billings. Contact Securus at 800-844-6591 or visit securustech.net. Montana is not among the states that offer free phone calls at state prisons. The MDOC number is required for all mail and communication accounts.",
      "Use the MDOC offender search at cor.mt.gov to find the MDOC number and current facility. JPay handles money deposits to Montana inmate trust accounts. Montana county jails use their own phone vendors independently from MDOC state facilities. Yellowstone County Detention Facility in Billings and Cascade County Detention Center in Great Falls each use their own contracted providers. Always confirm the specific provider for each county facility.",
      "Montana has a relatively small prison population compared to most states but its geographic size means many families live far from facilities. Phone contact is especially important for Montana families separated by long distances. All non-privileged calls are monitored and recorded. Three-way calling is prohibited. Visitor applications require background checks and take several weeks to process.",
    ],

    overview: [
      "Which provider do Montana state prison families use? Securus Technologies handles phone calls at MDOC Montana state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the MDOC offender search at cor.mt.gov to find the MDOC number. Montana county jails use their own separate vendors.",
      "Why is phone contact especially important for Montana families? Montana is one of the largest states geographically with a small but dispersed population. Many families live far from Montana State Prison in Deer Lodge or Montana Women's Prison in Billings. Long distances make in-person visits expensive and infrequent, making phone calls and electronic messaging the primary way many Montana families stay connected.",
      "What is the most common mistake Montana prison families make? Not having the MDOC number before setting up accounts is very common. The MDOC number is different from any county booking number or court case number. Find it through the MDOC offender search at cor.mt.gov before attempting account setup. Montana county jails use their own providers so always confirm the specific facility type before setting up accounts.",
    ],

    faq: [
      { question: "Which provider do I use for Montana state prison phone calls?", answer: "Securus Technologies handles phone calls at MDOC Montana state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate MDOC number. Find it at cor.mt.gov. Montana has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Montana state prisons?", answer: "No. Montana is not among the states offering free inmate phone calls. Securus holds the MDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging is a lower-cost alternative." },
      { question: "How do I send money to someone at a Montana state prison?", answer: "JPay handles money deposits for MDOC state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate MDOC number. For county jail deposits contact the specific county facility." },
      { question: "How do I find someone in a Montana state prison?", answer: "Use the MDOC offender search at cor.mt.gov. For county jail inmates contact the specific county sheriff. Yellowstone County in Billings and Cascade County in Great Falls each have their own detention facilities. For federal inmates in Montana use the Bureau of Prisons locator at bop.gov." },
      { question: "Do Montana county jails use the same provider as state prisons?", answer: "No. Montana county jails use their own providers independently from MDOC. Yellowstone County and Cascade County each use their own contracted vendors. Always confirm the specific provider for each county facility before setting up accounts." },
      { question: "Why are phone calls so important for Montana families?", answer: "Montana is one of the largest states geographically. Many families live far from Montana State Prison in Deer Lodge or Montana Women's Prison in Billings. Long distances make in-person visits expensive and rare, making phone and electronic messaging the primary connection for many Montana families with incarcerated loved ones." },
      { question: "What are the phone call rules at Montana state prisons?", answer: "All non-privileged calls are monitored and recorded. Three-way calling is prohibited. Inmates use their assigned PIN to initiate calls. Contact the specific facility for current calling hours and per-call time limits. Attorney calls are confidential and not monitored." },
      { question: "What happens when my loved one transfers from a Montana county jail to a state prison?", answer: "When someone transfers to an MDOC state prison the provider changes to Securus. Get the MDOC number from cor.mt.gov and create new Securus and JPay accounts after confirming the transfer. County jail accounts do not transfer." },
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
    seoTitle: "South Dakota Inmate Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone in a South Dakota jail or prison. Find the right provider for SDDOC state prisons and county jails.",

    intro: [
      "South Dakota operates its state prison system through the South Dakota Department of Corrections (SDDOC). Securus Technologies handles phone calls at South Dakota state correctional facilities including the South Dakota State Penitentiary in Sioux Falls and the Mike Durfee State Prison in Springfield. Contact Securus at 800-844-6591 or visit securustech.net to set up an account. South Dakota is not among the states that offer free phone calls at state prisons. The SDDOC number is required for all communication accounts and mail.",
      "Use the SDDOC offender search at doc.sd.gov to find the SDDOC number and current facility. JPay handles money deposits to South Dakota inmate trust accounts. South Dakota county jails use their own phone vendors independently from SDDOC state facilities. Pennington County Jail in Rapid City and Minnehaha County Jail in Sioux Falls each use their own contracted providers. Always confirm the specific provider for each county facility before setting up any account.",
      "South Dakota has a relatively small prison population. All non-privileged calls are monitored and recorded. Three-way calling is prohibited. Visitor applications at SDDOC facilities require background checks and take several weeks. For federal inmates in South Dakota including those at FCI Yankton, use CorrLinks for messaging and ConnectNetwork for calls which are separate federal systems.",
    ],

    overview: [
      "Which provider do South Dakota state prison families use? Securus Technologies handles phone calls at SDDOC state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the SDDOC offender search at doc.sd.gov to find the SDDOC number and current facility. Pennington County and Minnehaha County jails use their own separate vendors.",
      "What is the SDDOC number and how do I find it? The SDDOC number is the identification number assigned to every person in South Dakota DOC custody. You need it for Securus and JPay account setup and for all mail. Find it through the SDDOC offender search at doc.sd.gov or ask your loved one. It is different from any court case number.",
      "What is the most common mistake South Dakota prison families make? Not knowing the SDDOC number before setting up accounts is very common. Also South Dakota county jails use their own providers. Pennington County in Rapid City and Minnehaha County in Sioux Falls each use their own vendors separate from Securus SDDOC accounts. Always confirm the specific facility type and provider.",
    ],

    faq: [
      { question: "Which provider do I use for South Dakota state prison phone calls?", answer: "Securus Technologies handles phone calls at SDDOC South Dakota state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate SDDOC number. Find it at doc.sd.gov. South Dakota has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at South Dakota state prisons?", answer: "No. South Dakota is not among the states offering free inmate phone calls. Securus holds the SDDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "How do I send money to someone at a South Dakota state prison?", answer: "JPay handles money deposits for SDDOC state prison inmates. Visit jpay.com to deposit funds. Always include the inmate SDDOC number. For county jail deposits contact the specific county facility as providers vary." },
      { question: "How do I find someone in a South Dakota state prison?", answer: "Use the SDDOC offender search at doc.sd.gov. South Dakota facilities include South Dakota State Penitentiary in Sioux Falls and Mike Durfee State Prison in Springfield. For county jail inmates contact the specific county sheriff. For federal inmates at FCI Yankton use the Bureau of Prisons locator at bop.gov." },
      { question: "Is FCI Yankton covered by South Dakota state programs?", answer: "No. FCI Yankton is a federal Bureau of Prisons facility. Federal prisons are separate from SDDOC state facilities. Federal inmates use CorrLinks for messaging and ConnectNetwork for phone calls. These are not covered by any South Dakota state program and are not free." },
      { question: "Do South Dakota county jails use the same provider as state prisons?", answer: "No. South Dakota county jails use their own providers. Pennington County in Rapid City and Minnehaha County in Sioux Falls each use their own vendors separate from Securus SDDOC accounts. Always confirm the specific provider for each county facility." },
      { question: "What are the main South Dakota state correctional facilities?", answer: "Major SDDOC facilities include South Dakota State Penitentiary in Sioux Falls, Mike Durfee State Prison in Springfield, South Dakota Women's Prison in Pierre, and Jameson Annex in Sioux Falls. Use the SDDOC offender search at doc.sd.gov to confirm the current facility." },
      { question: "What happens when my loved one transfers from a South Dakota county jail to a state prison?", answer: "When someone transfers to an SDDOC state prison the provider changes to Securus. Get the SDDOC number from doc.sd.gov and create new accounts after confirming the transfer. County jail accounts do not transfer to state prison accounts." },
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
    seoTitle: "Maine Inmate Phone Calls, Messaging and Money Transfer Guide",
    seoDescription: "How to contact someone in a Maine jail or prison. Find the right provider for Maine DOC state prisons and county jails.",

    intro: [
      "Maine operates its state prison system through the Maine Department of Corrections (MDOC). Securus Technologies handles phone calls at Maine state correctional facilities including Maine State Prison in Warren. Contact Securus at 800-844-6591 or visit securustech.net. Maine is not among the states that offer free phone calls at state prisons. The Maine DOC number is required for all mail and communication accounts at Maine state facilities.",
      "Use the Maine DOC offender search at maine.gov/corrections to find the DOC number and current facility. JPay handles money deposits to Maine state inmate trust accounts. Maine county jails use their own phone vendors. Cumberland County Jail in Portland uses its own contracted provider. Penobscot County Jail in Bangor uses its own vendor. Always confirm the specific provider for each county facility before setting up any account.",
      "Maine state facilities include Maine State Prison in Warren, Maine Correctional Center in Windham, and several other facilities. All non-privileged calls are monitored and recorded. Three-way calling is prohibited. Visitor applications require background checks. For federal inmates in Maine use CorrLinks for messaging and ConnectNetwork for calls which are separate federal systems.",
    ],

    overview: [
      "Which provider do Maine state prison families use? Securus Technologies handles phone calls at Maine DOC state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the Maine DOC offender search at maine.gov/corrections to find the DOC number. Maine county jails use their own separate vendors.",
      "What is the Maine DOC number and how do I find it? The DOC number is the identification number assigned to every person in Maine DOC custody. You need it for Securus and JPay account setup and for all mail. Find it through the Maine DOC offender search at maine.gov/corrections or ask your loved one. It is different from any court case number or county booking number.",
      "What is the most common mistake Maine prison families make? Not knowing that county jails use different providers than state prisons is very common. Cumberland County in Portland and Penobscot County in Bangor each use their own vendors separate from Securus MDOC state accounts. Always confirm the specific facility type and provider before setting up accounts.",
    ],

    faq: [
      { question: "Which provider do I use for Maine state prison phone calls?", answer: "Securus Technologies handles phone calls at Maine DOC state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the Maine DOC number. Find it at maine.gov/corrections. Maine has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Maine state prisons?", answer: "No. Maine is not among the states offering free inmate phone calls. Securus holds the Maine DOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "How do I send money to someone at a Maine state prison?", answer: "JPay handles money deposits for Maine DOC state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the Maine DOC number. For county jail deposits contact the specific county facility as providers vary." },
      { question: "How do I find someone in a Maine state prison?", answer: "Use the Maine DOC offender search at maine.gov/corrections. For county jail inmates contact the specific county sheriff. Cumberland County Jail in Portland and Penobscot County Jail in Bangor each have their own systems. For federal inmates in Maine use the Bureau of Prisons locator at bop.gov." },
      { question: "Do Maine county jails use the same provider as state prisons?", answer: "No. Maine county jails use their own providers. Cumberland County in Portland and Penobscot County in Bangor each use their own contracted vendors separate from Securus Maine DOC accounts. Always confirm which provider serves each specific county facility." },
      { question: "What are the phone call rules at Maine state prisons?", answer: "All non-privileged calls are monitored and recorded. Three-way calling is prohibited. Inmates use their assigned PIN to initiate calls. Contact the specific facility for current calling hours and time limits. Attorney calls are confidential." },
      { question: "Can I send electronic messages to someone at a Maine state prison?", answer: "Electronic messaging availability varies by facility. JPay provides messaging at some Maine DOC facilities. Contact the specific facility to confirm whether electronic messaging is available and which platform to use. Written mail goes directly to Maine state facilities with the DOC number on every envelope." },
      { question: "What happens when my loved one transfers from a Maine county jail to a state prison?", answer: "When someone transfers to a Maine DOC state prison the provider changes to Securus. Get the Maine DOC number from maine.gov/corrections and create new accounts after confirming the transfer. County jail accounts do not transfer to state prison accounts." },
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
    seoTitle: "Alaska Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in an Alaska jail or prison. Find the right provider for ADOC state prisons and borough jails.",

    intro: [
      "Alaska operates its state prison system through the Alaska Department of Corrections (ADOC). Securus Technologies handles phone calls at Alaska state correctional facilities. Contact Securus at 800-844-6591 or visit securustech.net. Alaska is not among the states that offer free phone calls at state prisons. The ADOC number is required for all mail and communication accounts at Alaska state facilities. Use the ADOC inmate search at doc.alaska.gov to find the ADOC number and current facility.",
      "Alaska state facilities include Goose Creek Correctional Center in Wasilla, Spring Creek Correctional Center in Seward, Anchorage Correctional Complex, and Fairbanks Correctional Center. All non-privileged calls are monitored and recorded. JPay handles money deposits to Alaska inmate trust accounts. Alaska's vast geography means many inmates are held far from their home communities, making phone contact especially critical for families.",
      "Alaska borough and municipal jails use their own phone vendors independently from ADOC state facilities. Anchorage Jail uses its own contracted provider. Fairbanks Correctional Center is operated by the state. Always confirm whether your loved one is in a state ADOC facility or a locally operated facility before setting up accounts. Visitor applications require background checks and take several weeks.",
    ],

    overview: [
      "Which provider do Alaska state prison families use? Securus Technologies handles phone calls at ADOC Alaska state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the ADOC inmate search at doc.alaska.gov to find the ADOC number. Alaska's vast geography makes phone contact especially critical for families separated from incarcerated loved ones.",
      "Why is phone contact especially important for Alaska families? Alaska is the largest state by area with a small dispersed population and many remote communities. Many Alaska DOC facilities are in Wasilla, Seward, or Fairbanks, far from families in remote communities accessible only by air or ferry. Phone calls and electronic messaging are often the only practical daily connection for Alaska families.",
      "What is the most common mistake Alaska prison families make? Not confirming whether a facility is ADOC state-operated or locally operated is common. Anchorage has both state and local facilities. Always confirm the specific facility and its ADOC or local status before setting up accounts. The ADOC inmate search at doc.alaska.gov confirms state facility assignments.",
    ],

    faq: [
      { question: "Which provider do I use for Alaska state prison phone calls?", answer: "Securus Technologies handles phone calls at ADOC Alaska state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate ADOC number. Find it at doc.alaska.gov. Alaska has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Alaska state prisons?", answer: "No. Alaska is not among the states offering free inmate phone calls. Securus holds the ADOC contract and charges per-minute rates subject to FCC caps effective April 2026. Alaska's remote geography and the importance of family contact make phone costs especially significant for Alaska families." },
      { question: "How do I send money to someone at an Alaska state prison?", answer: "JPay handles money deposits for ADOC Alaska state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate ADOC number. For locally operated jail deposits contact the specific facility directly." },
      { question: "How do I find someone in an Alaska state prison?", answer: "Use the ADOC inmate search at doc.alaska.gov. Alaska state facilities include Goose Creek in Wasilla, Spring Creek in Seward, Anchorage Correctional Complex, and Fairbanks Correctional Center. For federal inmates in Alaska use the Bureau of Prisons locator at bop.gov." },
      { question: "Why are phone calls so important for Alaska families?", answer: "Alaska is the largest state by area with many remote communities accessible only by air or ferry. Many Alaska DOC facilities are in Wasilla, Seward, or Fairbanks, far from families in remote villages. Phone and electronic messaging are often the only practical daily connection available to Alaska families with incarcerated loved ones." },
      { question: "Do Alaska borough jails use the same provider as ADOC state facilities?", answer: "No. Alaska borough and municipal jails use their own providers. Always confirm whether a facility is ADOC state-operated or locally operated before setting up accounts. The ADOC inmate search at doc.alaska.gov confirms state facility assignments." },
      { question: "What are the main Alaska state correctional facilities?", answer: "Major Alaska ADOC facilities include Goose Creek Correctional Center in Wasilla, Spring Creek Correctional Center in Seward, Anchorage Correctional Complex, and Fairbanks Correctional Center. Use the ADOC inmate search at doc.alaska.gov to confirm the current facility for your loved one." },
      { question: "What happens when my loved one transfers from an Alaska local jail to a state prison?", answer: "When someone transfers to an ADOC state prison the provider changes to Securus. Get the ADOC number from doc.alaska.gov and create new Securus and JPay accounts after confirming the transfer. Local jail accounts do not transfer to ADOC state prison accounts." },
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
    facilityCount: 27,
    region: "Midwest",
    hasDetailPage: true,

    description: "How to contact someone in a North Dakota state prison or county jail. ND DOCR phone calls, video visits, mail, and money through Securus and JPay.",
    seoTitle: "North Dakota Inmate Phone Calls, Visits, Mail and Money (ND DOCR)",
    seoDescription: "Contact someone in a North Dakota state prison: ND DOCR phone calls through Securus at about 8 cents a minute, video visits, Securus digital mail, and JPay money deposits. County jails use separate vendors.",

    intro: [
      "North Dakota runs several separate systems, and mixing them up is the most common mistake families make. State prisons are operated by the North Dakota Department of Corrections and Rehabilitation (ND DOCR). Its adult facilities are the North Dakota State Penitentiary in Bismarck, James River Correctional Center in Jamestown, Missouri River Correctional Center in Bismarck, Dakota Women's Correctional and Rehabilitation Center in New England, and Heart River Correctional Center in Mandan. County jails are run by the state's 53 counties, and each county sets its own phone, video, and messaging contracts. There are no federal Bureau of Prisons institutions in North Dakota, and the state does not contract with private prisons. This page covers the ND DOCR state prison system first, then explains how county jails differ.",

      "In ND DOCR state prisons, phone calls run through Securus. New residents at the State Penitentiary get two initial 5-minute calls on arrival; after that, calls are paid for by the resident or an approved caller. Money goes only through JPay, by website, mobile app, phone, MoneyGram, or mailed money order. All incoming mail goes to the Securus Digital Mail Center in Tampa, Florida; mail sent to a DOCR facility is returned to sender. Video visits are scheduled at least 24 hours in advance through the service provider's website, up to two sessions per day of up to 20 minutes each. The DOCR facility handbook behind these rules is dated August 2021 and states that information is subject to change, so confirm current rules with the facility before acting.",

      "To find someone in a state prison, use the ND DOCR Resident Lookup on the DOCR website, or VINELink for North Dakota. For county jail custody, contact the county jail or sheriff's office directly.",
    ],


    overview: [
      "Who provides phone, video, mail, and money services in North Dakota state prisons? Phone calls run through Securus, per the ND DOCR telephone page. A completed and signed Telephone Application is required before family or friends can be added to a resident's calling list; applications can be submitted electronically or printed and mailed to Securus (for Heart River, James River, Missouri River, and the State Penitentiary) or to DWCRC for residents there. Residents buy telephone time through their commissary account; approved callers who choose to pay set up a collect call account through Securus at securustech.net or 1-800-844-6591. Rates are billed at .079 cents per minute as the DOCR page phrases it, which reads as $0.079 per minute. Money goes only through JPay: website, mobile app, phone at 1-800-574-5729, MoneyGram with receive code 1304, or mailed money order to JPay Inc., PO Box 822700, Pembroke Pines, FL 33082. All incoming mail goes to the Securus Digital Mail Center, PO Box 21408, Tampa, FL 33622; mail sent to a DOCR facility is returned. Video visits are scheduled through the service provider's website; the DOCR handbook does not name the video vendor, so do not set up an account with any vendor until the facility confirms which one it uses. Inmates cannot receive incoming calls; DOCR takes emergency incoming calls, verifies them, and the resident may be permitted to call about the emergency. There is no resident messaging line for voice messages, and staff will not pass along messages.",
      "How do visits work in North Dakota state prisons? All visitors must be on the resident's approved visitation list: family members plus up to 20 friends. Visitor application forms are completed by the visitor, returned, and approved before visiting; list changes take up to 15 working days. A removed name cannot return to the list for 90 days. Minors under 18 need a parent or legal guardian present. Visiting hours are posted at each facility; arrivals with under 30 minutes left in a session are not checked in. Residents may receive up to 20 hours of visiting per month, and there is no limit on video visitation; a visit under one hour counts as one full hour. Every visitation applicant gets a background investigation. People with felony charges or pending warrants are not approved until the charge is disposed. Denial can be appealed to the Chief of Security within 7 days. Video visits must be scheduled at least 24 hours in advance through the service provider's website, with a maximum of two sessions per day of up to 20 minutes each; the visitor establishes the account and pays the cost set by the provider. All video visits are monitored and recorded except attorney visits. Schedules vary by facility, so confirm the current visiting schedule with the facility before traveling.",
      "How do mail and money differ between state prisons and county jails in North Dakota? In ND DOCR state prisons, all incoming mail must go to the Securus Digital Mail Center at PO Box 21408, Tampa, FL 33622, addressed with the resident's name and number. Mail sent to a DOCR facility is returned to sender. A legible return address with the sender's last name, street or PO Box, city, state, and ZIP is required. At most 30 photographs per envelope; internet or photocopy pages limited to 10. Legal and official mail is opened and inspected for contraband in the resident's presence only. Money goes only through JPay; DOCR accepts no money orders, checks, or cash for spending accounts, and no one may drop off money at any DOCR facility. County jails set their own contracts and may use completely different vendors, mail routes, and money methods. For example, McKenzie County's official page says visitation is video only by appointment, with phone cards and texting accounts through Reliance Telephone, while Cass County Jail's phone and video contract is with ICS Solutions through 2031 per county commission coverage. Check the specific jail's page before setting up any account.",
    ],

    faq: [
      {
        question: "Who provides phone service in North Dakota state prisons?",
        answer: "Securus, per the ND DOCR telephone page. Telephone Applications go to Securus for Heart River, James River, Missouri River, and the State Penitentiary, and to DWCRC for residents there. Residents buy telephone time through their commissary account; approved callers who choose to pay set up a collect call account through Securus at securustech.net or 1-800-844-6591. Rates are billed at .079 cents per minute as the DOCR page phrases it, which reads as $0.079 per minute. Do not set up a GTL or ConnectNetwork account for a DOCR facility; directories that name GTL conflict with the official DOCR page.",
      },
      {
        question: "How do I get on a resident's calling list?",
        answer: "Submit a completed and signed Telephone Application (SFN 50076), either electronically online or printed and mailed to Securus (or DWCRC for residents there). All personal information on the application must be verified by DOCR staff before activation. Residents may have up to 20 active social numbers on a calling list; attorney and clergy numbers of record are not counted. Calling list changes are allowed every 90 days. New residents get two initial 5-minute calls on arrival.",
      },
      {
        question: "How do video visits work in North Dakota state prisons?",
        answer: "Video visits must be scheduled at least 24 hours in advance through the service provider's website. Residents may sign up for at most two video sessions per day, each up to 20 minutes. The visitor establishes the account and pays the cost set by the provider. All video visits are monitored and recorded except attorney visits. There is no limit on video visitation hours, unlike the 20-hour monthly cap on in-person visiting. The DOCR handbook does not name the video vendor, so confirm which provider the facility uses before creating an account.",
      },
      {
        question: "How do I visit someone in person at a North Dakota state prison?",
        answer: "All visitors must be on the resident's approved visitation list: family members plus up to 20 friends. Visitor applications are completed by the visitor, returned, and approved before visiting; list changes take up to 15 working days. A removed name cannot return for 90 days. Minors under 18 need a parent or legal guardian present. Visiting hours are posted at each facility; arrivals with under 30 minutes left in a session are not checked in. Residents may receive up to 20 hours of visiting per month; a visit under one hour counts as one full hour. Every applicant gets a background investigation. Denial can be appealed to the Chief of Security within 7 days. Schedules vary by facility, so confirm the current visiting schedule with the facility before traveling.",
      },
      {
        question: "How do I send mail to someone in a North Dakota state prison?",
        answer: "Send all incoming mail to the Securus Digital Mail Center: Resident Name and Number, C/O Securus Digital Mail Center - North Dakota Department of Corrections, PO Box 21408, Tampa, FL 33622. Mail sent to a DOCR facility is returned to sender. Include a legible return address with your last name, street or PO Box, city, state, and ZIP. At most 30 photographs per envelope; internet or photocopy pages limited to 10. Legal and official mail is opened and inspected for contraband in the resident's presence only. If mail is denied, the resident and sender get a Notification of Denied Mail; the resident appeals to the Warden within 7 days and the sender within 30 days. Publications must come directly from an approved publisher or vendor, not a private individual. These rules come from the August 2021 DOCR facility handbook, which states information is subject to change, so confirm current mail rules with the facility.",
      },
      {
        question: "How do I send money to someone in a North Dakota state prison?",
        answer: "Only through JPay. DOCR accepts no money orders, checks, or cash for spending accounts, and no one may drop off money at any DOCR facility. Use JPay.com, the JPay mobile app, phone at 1-800-574-5729, MoneyGram with receive code 1304, or mail a money order with the Money Order Deposit Form to JPay Inc., PO Box 822700, Pembroke Pines, FL 33082. Processing fees apply to online, app, phone, and MoneyGram deposits; JPay charges no processing fee for mailed money orders. Note that 25% of facility earnings go to a Release Aid Account (gate money, usually unavailable until discharge), and the Warden may deduct funds for fines, restitution, court costs, support, and medical or dental costs.",
      },
      {
        question: "Do county jails in North Dakota use the same providers as state prisons?",
        answer: "No. Each county sets its own contracts, and county jails and state prisons are entirely separate systems. For example, McKenzie County's official page says visitation is video only by appointment, with phone cards and texting accounts through Reliance Telephone at 1-800-896-3201. Cass County Jail's phone and video contract is with ICS Solutions through 2031, per county commission coverage. Check the specific jail's page before setting up any account, because the provider for one county may be completely different from the provider for another.",
      },
      {
        question: "How do I find someone in a North Dakota state prison?",
        answer: "Use the ND DOCR Resident Lookup on the DOCR website, or VINELink for North Dakota. For someone in a county jail, contact the county jail or sheriff's office directly. For someone in federal custody, note that there are no BOP-operated institutions in North Dakota; federal detainees are held at contract facilities, so contact the arresting federal agency or the contract facility.",
      },
    ],

    facilitiesByType: { federal: 0, state: 5, county: 22, private: 0 },

    counties: [
      "Cass County", "Burleigh County", "Ward County", "Grand Forks County",
      "Morton County", "Stark County", "Richland County", "Williams County",
      "Mountrail County", "McKenzie County", "McLean County", "Rolette County",
      "Sioux County", "Dunn County", "Divide County",
    ],

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone service for ND DOCR state prisons, plus the Securus Digital Mail Center for all incoming mail, per the official DOCR telephone page and facility handbook.",
      },
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        description: "The only money deposit method for ND DOCR residents: website, app, phone, MoneyGram, or mailed money order, per the official DOCR facility handbook.",
      },
      {
        name: "Reliance Telephone",
        slug: "reliance-telephone",
        initial: "R",
        color: "bg-teal-600",
        description: "Phone cards and texting accounts at McKenzie County Correctional Facility, per the county's official page.",
      },
    ],

    featuredFacilities: [
      {
        name: "North Dakota State Penitentiary",
        slug: "north-dakota-state-penitentiary",
        type: "State Prison",
        county: "Burleigh County",
        features: ["Phone Calls", "Video Visits", "Money Transfer"],
      },
      {
        name: "Missouri River Correctional Center",
        slug: "missouri-river-correctional-center",
        type: "State Prison",
        county: "Burleigh County",
        features: ["Phone Calls", "Video Visits", "Money Transfer"],
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
    seoTitle: "Delaware Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Delaware jail or prison. Find the right provider for DDOC state prisons and county jails.",

    intro: [
      "Delaware operates its state prison system through the Delaware Department of Correction (DDOC). Securus Technologies handles phone calls at Delaware state correctional facilities including Howard R. Young Correctional Institution in Wilmington, James T. Vaughn Correctional Center in Smyrna, and Sussex Correctional Institution in Georgetown. Contact Securus at 800-844-6591 or visit securustech.net. Delaware is not among the states that offer free phone calls at state prisons. Delaware does not have traditional county jails as the state operates a unified correctional system.",
      "Delaware operates a unified correctional system, meaning the state DOC handles both pretrial detention and sentenced incarceration rather than having separate county jails. This is unusual among states and means there is essentially one provider system for the entire state. The DDOC number is required for all mail and communication accounts. Use the DDOC inmate search at doc.delaware.gov to find the DDOC number and current facility.",
      "JPay handles money deposits to Delaware inmate trust accounts. All non-privileged calls are monitored and recorded. Three-way calling is prohibited. Visitor applications require background checks and take several weeks. For federal inmates in Delaware use CorrLinks for messaging and ConnectNetwork for calls which are separate federal systems not covered by any Delaware state program.",
    ],

    overview: [
      "Which provider do Delaware state prison families use? Securus Technologies handles phone calls at all DDOC Delaware state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the DDOC inmate search at doc.delaware.gov to find the DDOC number. Delaware operates a unified system with no separate county jails so there is one provider system statewide.",
      "What makes Delaware's correctional system unique? Delaware operates a unified correctional system where the state DOC handles both pretrial detention and sentenced incarceration. There are no traditional county jails in Delaware. This means families deal with one provider system regardless of whether their loved one is awaiting trial or serving a sentence.",
      "What is the most common mistake Delaware prison families make? Not knowing the DDOC number before attempting account setup is very common. The DDOC number is different from any court case number. Find it through the DDOC inmate search at doc.delaware.gov before setting up any accounts. Since Delaware has no county jails the DDOC system covers all incarcerated people in the state.",
    ],

    faq: [
      { question: "Which provider do I use for Delaware state prison phone calls?", answer: "Securus Technologies handles phone calls at all DDOC Delaware state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate DDOC number. Find it at doc.delaware.gov. Delaware has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Does Delaware have county jails?", answer: "No. Delaware operates a unified correctional system where the state DOC handles both pretrial detention and sentenced incarceration. There are no traditional county jails in Delaware. This means one provider system covers all incarcerated people in the state regardless of case status." },
      { question: "Are phone calls free at Delaware state prisons?", answer: "No. Delaware is not among the states offering free inmate phone calls. Securus holds the DDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "How do I send money to someone at a Delaware state prison?", answer: "JPay handles money deposits for DDOC state prison inmates. Visit jpay.com to create an account and deposit funds. Always include the inmate DDOC number. Since Delaware has no county jails JPay handles money transfers for all DDOC facilities statewide." },
      { question: "How do I find someone in a Delaware state facility?", answer: "Use the DDOC inmate search at doc.delaware.gov. Delaware facilities include Howard R. Young Correctional Institution in Wilmington, James T. Vaughn Correctional Center in Smyrna, and Sussex Correctional Institution in Georgetown. For federal inmates use the Bureau of Prisons locator at bop.gov." },
      { question: "What are the main Delaware state correctional facilities?", answer: "Major DDOC facilities include Howard R. Young Correctional Institution in Wilmington, James T. Vaughn Correctional Center in Smyrna, Baylor Women's Correctional Institution in New Castle, and Sussex Correctional Institution in Georgetown. Delaware Women's Correctional Institution is also in Smyrna." },
      { question: "Can I send electronic messages to someone at a Delaware state prison?", answer: "JPay provides electronic messaging at DDOC state facilities. Visit jpay.com to create an account and send messages. All messages are reviewed before delivery. JPay messaging is a lower-cost alternative to phone calls for regular contact." },
      { question: "What happens if my loved one is transferred between Delaware facilities?", answer: "Since Delaware operates a unified DOC system all transfers are within the DDOC. Your Securus and JPay accounts should continue to work after a transfer within Delaware. Confirm the new facility using the DDOC inmate search at doc.delaware.gov and update your account if needed." },
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
    facilityCount: 14,
    region: "Northeast",
    hasDetailPage: true,

    description: "How to contact someone in a New Hampshire state prison or county jail. NH DOC phone calls, video visits, mail, and money through ConnectNetwork by GTL (ViaPath).",
    seoTitle: "New Hampshire Inmate Phone Calls, Visits, Mail and Money (NH DOC)",
    seoDescription: "Contact someone in a New Hampshire state prison: NH DOC phone, messaging, video visits, and money through ConnectNetwork by GTL (ViaPath), Site ID 222. County jails use separate vendors.",

    intro: [
      "New Hampshire runs several separate systems, and mixing them up is the most common mistake families make. State prisons are operated by the New Hampshire Department of Corrections (NH DOC), which runs three secure facilities: the NH State Prison for Men in Concord, the NH Correctional Facility for Women in Concord, and the Northern NH Correctional Facility in Berlin. NH DOC also operates a Secure Psychiatric Unit, a Residential Treatment Unit, one Transitional Work Center, and three Transitional Housing Units, which are not counted here as secure prisons. County jails, called Houses of Correction, are run by the state's 10 counties, and each county sets its own phone, video, and messaging contracts. The federal system is separate again: FCI Berlin, in Coos County, is the only Bureau of Prisons institution in New Hampshire. There are no private prisons in New Hampshire. This page covers the NH DOC state prison system first, then explains how county jails differ.",

      "In NH DOC state prisons, most communication runs through ConnectNetwork by GTL (now ViaPath), per the NH DOC Inmate Communications page. One vendor covers AdvancePay Phone, Pin Debit, Messaging, Tablets, Visitation Scheduling, and Video Visitation. Use Site ID 222 for Trust Fund or PIN Debit deposits through the automated phone system. Video visits run through GTL VisitMe at nhdoc.gtlvisitme.com/app. Mail goes directly to the facility with the inmate's name and DOC ID number, a return name and address is required, and letters can be up to ten pages in blue or black ink. No current phone rate is published here because none was verified from an official source. Do not set up a Securus, JPay, or ICSolutions account for a state prison; directory pages that name those vendors for NH DOC conflict with the official NH DOC page.",

      "To find someone in a state prison, use the NH DOC Inmate Locator, which searches by full or partial first and last name and shows active sentencing information. For county jail custody, contact the county jail directly. For someone in federal custody, use the BOP inmate locator; FCI Berlin is the only federal prison in the state.",
    ],


    overview: [
      "Who provides phone, messaging, video, and money services in New Hampshire state prisons? ConnectNetwork by GTL (now ViaPath), per the NH DOC Inmate Communications page. Services: AdvancePay Phone (family pays), Pin Debit (inmate pays from account), Messaging, Tablets, Visitation Scheduling, and Video Visitation. Inmates can receive email through the contracted vendor; the inmate's email address must be obtained directly from the inmate, and inmates do not have access to the internet. Phone contact is inmate-initiated: inmates may contact you by phone. Money goes to the inmate's Trust Fund through ConnectNetwork, online or by automated phone, referencing Site ID 222. Video visits run through GTL VisitMe at nhdoc.gtlvisitme.com/app. Do not set up Securus, JPay, or ICSolutions for a state prison; directory pages naming those vendors for NH DOC conflict with the official NH DOC page.",
      "How do visits work in New Hampshire state prisons? Visiting is a privilege. Inmates are authorized two visits weekly; visits from attorneys, clergy, or other official visitors are not counted against the quota. All visitors must be approved by NH DOC staff. Inmates may have an unlimited number of family members on their visiting lists. All visitors undergo a criminal background check. The inmate must request that a prospective visitor be placed on the list. The application requires the visitor's full name, address, phone number, date of birth, and identifying number (driver's license, military ID, or non-driver ID), plus certification that no court or parole board ordered no contact. The process can take approximately 4 weeks. The adult application is Attachment 3, children use Attachment 5, and DCYF child escorts use Attachment 8 of PPD 1010; complete and notarize the form and return it to the inmate, do not send it directly to NH DOC. A visitor dress code is enforced. Visitors under 18 must be accompanied by an approved adult family member or legal guardian on the visiting list. Inmates in the Reception and Diagnostic Unit get one visit per week after medical clearance until they receive a permanent housing assignment. Video visits run through GTL VisitMe. At Northern NH Correctional Facility, weekend visits were cancelled effective December 12, 2025, per an NH DOC memo, with weekday visits continuing by unit block. Schedules vary by facility and can change on short notice; the NH DOC posts short-notice schedule changes on its social media outlets, so confirm the current schedule with the facility before traveling.",
      "How do mail and money differ between state prisons and county jails in New Hampshire? In NH DOC state prisons, mail goes directly to the facility: Inmate Name, DOC ID number, facility name, and the facility address. Examples: NH State Prison for Men, PO Box 14, Concord, NH 03302; NH Correctional Facility for Women, 42 Perimeter Road, Concord, NH 03301; Northern NH Correctional Facility, 138 East Milan Rd., Berlin, NH 03570. All mail must have a return name and address. Letters can be up to ten pages, written in blue or black ink, under Administrative Rule Cor 314. Money goes to the inmate's Trust Fund through ConnectNetwork, referencing Site ID 222. County jails set their own contracts and may use completely different vendors, mail routes, and money methods. For example, directory pages report that Carroll County uses Securus for phone and video visits, and Belknap County uses Securus video visits, while Sullivan County publishes its own visitation schedule (video visits at the New Community Corrections Reception Center in Unity, by appointment scheduled by the inmate one day ahead; up to two 1-hour visits per week for House of Corrections inmates) without naming a vendor. Check the specific jail's page before setting up any account.",
    ],

    faq: [
      {
        question: "Who provides phone service in New Hampshire state prisons?",
        answer: "ConnectNetwork by GTL (now ViaPath), per the NH DOC Inmate Communications page. AdvancePay Phone covers calls paid by family; Pin Debit covers calls paid by the inmate from account funds. Use Site ID 222 for Trust Fund or PIN Debit deposits through the automated phone system. Do not set up Securus or ICSolutions for a state prison; directory pages naming those vendors for NH DOC conflict with the official NH DOC page.",
      },
      {
        question: "How do I send messages or email to someone in a New Hampshire state prison?",
        answer: "Messaging runs through the contracted vendor, ConnectNetwork by GTL (now ViaPath). Inmates can receive email through the contracted vendor; the inmate's email address must be obtained directly from the inmate. Inmates do not have access to the internet. Written mail sent directly to the facility is the fallback if messaging is unavailable.",
      },
      {
        question: "How do I send money to someone in a New Hampshire state prison?",
        answer: "Deposit to the inmate's Trust Fund through ConnectNetwork, online or by automated phone, referencing Site ID 222. No deposit fee table is published here because none was verified for New Hampshire; fee tables published for other states do not apply. Do not use JPay for NH DOC; the official NH DOC page names ConnectNetwork, not JPay.",
      },
      {
        question: "How do video visits work in New Hampshire state prisons?",
        answer: "Video visitations are managed through GTL VisitMe. Register at nhdoc.gtlvisitme.com/app. Video visits are part of the same ConnectNetwork by GTL (now ViaPath) system as phone and messaging, so one vendor covers them.",
      },
      {
        question: "How do I visit someone in person at a New Hampshire state prison?",
        answer: "Inmates are authorized two visits weekly; attorney, clergy, and official visits are not counted. All visitors must be approved by NH DOC staff, and all visitors undergo a criminal background check. The inmate must request that you be placed on the list. Complete the visitor application (Attachment 3 for adults, Attachment 5 for children), have it notarized, and return it to the inmate; do not send it directly to NH DOC. The process can take approximately 4 weeks. A visitor dress code is enforced. Visitors under 18 must be accompanied by an approved adult family member or legal guardian. Inmates in the Reception and Diagnostic Unit get one visit per week after medical clearance. At Northern NH Correctional Facility, weekend visits were cancelled effective December 12, 2025, per an NH DOC memo. Confirm the current schedule with the facility before traveling.",
      },
      {
        question: "How do I send mail to someone in a New Hampshire state prison?",
        answer: "Send mail directly to the facility with the format: Inmate Name, DOC ID number, facility name, facility address. NH State Prison for Men: PO Box 14, Concord, NH 03302. NH Correctional Facility for Women: 42 Perimeter Road, Concord, NH 03301. Northern NH Correctional Facility: 138 East Milan Rd., Berlin, NH 03570. Secure Psychiatric Unit: Patient Name, Patient number, Secure Psychiatric Unit, PO Box 2828, Concord, NH 03302. All mail must have a return name and address. Letters can be up to ten pages, written in blue or black ink, under Administrative Rule Cor 314.",
      },
      {
        question: "How do I find someone in a New Hampshire state prison?",
        answer: "Use the NH DOC Inmate Locator, which searches by full or partial first and last name and shows active sentencing information from the DOC Offender Records Office in Concord. For someone in a county jail, contact the county jail directly. For someone in federal custody, use the BOP inmate locator; FCI Berlin is the only federal prison in New Hampshire.",
      },
      {
        question: "Do county jails in New Hampshire use the same providers as state prisons?",
        answer: "No. Each county sets its own contracts, and county jails and state prisons are entirely separate systems. For example, directory pages report that Carroll County uses Securus for phone and video visits, and Belknap County uses Securus video visits. Sullivan County publishes its own visitation schedule without naming a vendor. Check the specific jail's page before setting up any account, because the provider for one county may be completely different from the provider for another.",
      },
    ],

    facilitiesByType: { federal: 1, state: 3, county: 10, private: 0 },

    counties: [
      "Hillsborough County", "Rockingham County", "Merrimack County", "Strafford County",
      "Sullivan County", "Cheshire County", "Carroll County", "Grafton County",
      "Belknap County", "Coos County",
    ],

    providers: [
      {
        name: "ViaPath",
        slug: "gtl",
        initial: "V",
        color: "bg-amber-600",
        description: "Phone, messaging, tablets, video visits, and Trust Fund deposits for NH DOC state prisons through ConnectNetwork by GTL (now ViaPath), Site ID 222, per the official NH DOC page.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        description: "Phone and video visits at Carroll County and Belknap County jails, per directory pages. Not the NH DOC state-prison vendor.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email communication for federal Bureau of Prisons facilities, including FCI Berlin, the only BOP institution in New Hampshire.",
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
    seoTitle: "Rhode Island Inmate Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone in a Rhode Island jail or prison. Find the right provider for RIDOC state prisons and county jails.",

    intro: [
      "Rhode Island operates its state prison system through the Rhode Island Department of Corrections (RIDOC). GTL ViaPath Technologies through ConnectNetwork handles phone calls at Rhode Island state correctional facilities. Visit connectnetwork.com or call 877-650-4249 to set up an account. Rhode Island operates a unified correctional system similar to Delaware, Vermont, and Connecticut, meaning the state DOC handles both pretrial detention and sentenced incarceration. There are no traditional county jails in Rhode Island.",
      "Rhode Island is not among the states that offer free phone calls at state prisons. The RIDOC number is required for all communication accounts and mail. Use the RIDOC inmate search at doc.ri.gov to find the number and current facility. Rhode Island facilities are concentrated at the Adult Correctional Institutions (ACI) complex in Cranston, which includes Maximum Security, Medium Security, Minimum Security, the Intake Service Center, and the Women's Division.",
      "Since Rhode Island operates a unified system, the same GTL ViaPath ConnectNetwork provider handles all RIDOC facilities regardless of whether someone is in pretrial detention or serving a sentence. JPay handles money deposits to Rhode Island inmate trust accounts. All non-privileged calls are monitored and recorded. Three-way calling is prohibited. For federal inmates in Rhode Island use CorrLinks for messaging and ConnectNetwork for calls which are separate federal systems.",
    ],

    overview: [
      "Which provider do Rhode Island state prison families use? GTL ViaPath Technologies through ConnectNetwork handles phone calls at all RIDOC facilities. Visit connectnetwork.com or call 877-650-4249. JPay handles money deposits at jpay.com. Rhode Island operates a unified system with no county jails. All incarcerated people regardless of case status are under RIDOC. Use the RIDOC inmate search at doc.ri.gov to find the number and facility.",
      "What makes Rhode Island's correctional system unique? Rhode Island operates a unified correctional system where the state DOC handles both pretrial detention and sentenced incarceration. All RIDOC facilities are concentrated at the Adult Correctional Institutions complex in Cranston. There are no county jails in Rhode Island. This means one provider system covers all incarcerated people in the state regardless of case status.",
      "What is the most common mistake Rhode Island prison families make? Not having the RIDOC number before setting up accounts is very common. Find it through the RIDOC inmate search at doc.ri.gov before attempting account setup. Since Rhode Island has no county jails all incarcerated people are under RIDOC. Confirm current facility at the ACI Cranston complex using doc.ri.gov before sending mail or setting up accounts.",
    ],

    faq: [
      { question: "Which provider do I use for Rhode Island state prison phone calls?", answer: "GTL ViaPath Technologies through ConnectNetwork handles phone calls at all RIDOC Rhode Island state facilities. Visit connectnetwork.com or call 877-650-4249. You need the inmate RIDOC number. Find it at doc.ri.gov. Rhode Island has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Does Rhode Island have county jails?", answer: "No. Rhode Island operates a unified correctional system where the state DOC handles both pretrial detention and sentenced incarceration. All facilities are concentrated at the Adult Correctional Institutions complex in Cranston. There are no county jails in Rhode Island so one GTL ViaPath ConnectNetwork system covers all incarcerated people statewide." },
      { question: "Are phone calls free at Rhode Island state facilities?", answer: "No. Rhode Island is not among the states offering free inmate phone calls. GTL ViaPath holds the RIDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "How do I find someone at a Rhode Island state facility?", answer: "Use the RIDOC inmate search at doc.ri.gov. All Rhode Island facilities are part of the Adult Correctional Institutions complex in Cranston including Maximum Security, Medium Security, Minimum Security, Intake Service Center, and Women's Division. For federal inmates in Rhode Island use the Bureau of Prisons locator at bop.gov." },
      { question: "How do I send money to someone at a Rhode Island state facility?", answer: "JPay handles money deposits for RIDOC state facilities. Visit jpay.com to deposit funds. Always include the inmate RIDOC number. Since Rhode Island has no county jails JPay covers all RIDOC incarcerated people statewide." },
      { question: "What are the Rhode Island ACI facilities in Cranston?", answer: "The Adult Correctional Institutions complex in Cranston includes Maximum Security, Medium Security, Minimum Security, the Intake Service Center, and the Women's Division. All are operated by RIDOC. Use the inmate search at doc.ri.gov to confirm which specific unit your loved one is in." },
      { question: "Can I send electronic messages to someone at a Rhode Island facility?", answer: "Electronic messaging availability at RIDOC may vary by unit. JPay provides messaging at some Rhode Island facilities. Contact the specific unit or check doc.ri.gov to confirm whether electronic messaging is available. Written mail is accepted at RIDOC facilities with the RIDOC number on every envelope." },
      { question: "What happens when my loved one moves between Rhode Island facilities?", answer: "Since Rhode Island operates a unified DOC system all facilities use GTL ViaPath ConnectNetwork. Transfers within RIDOC should be seamless for your ConnectNetwork account. Confirm the new unit at the ACI Cranston complex using the RIDOC inmate search at doc.ri.gov and update your mailing address if needed." },
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
    seoTitle: "Wyoming Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Wyoming jail or prison. Find the right provider for WDOC state prisons and county jails.",

    intro: [
      "Wyoming operates its state prison system through the Wyoming Department of Corrections (WDOC). Securus Technologies handles phone calls at Wyoming state correctional facilities including Wyoming State Penitentiary in Rawlins and Wyoming Medium Correctional Institution in Torrington. Contact Securus at 800-844-6591 or visit securustech.net. Wyoming is not among the states that offer free phone calls at state prisons. The WDOC number is required for all mail and communication accounts.",
      "Use the WDOC inmate search at corrections.wyo.gov to find the WDOC number and current facility. JPay handles money deposits to Wyoming inmate trust accounts. Wyoming county and city jails use their own phone vendors independently from WDOC state facilities. Laramie County Detention Center in Cheyenne and Natrona County Detention Center in Casper each use their own contracted providers.",
      "Wyoming has a small prison population relative to its land area and geographic size makes phone contact especially important for families separated from their incarcerated loved ones. All non-privileged calls are monitored and recorded. Three-way calling is prohibited. Visitor applications require background checks. For federal inmates in Wyoming use CorrLinks for messaging and ConnectNetwork for calls.",
    ],

    overview: [
      "Which provider do Wyoming state prison families use? Securus Technologies handles phone calls at WDOC Wyoming state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the WDOC inmate search at corrections.wyo.gov to find the WDOC number. Wyoming county jails use their own separate vendors.",
      "What is the WDOC number and how do I find it? The WDOC number is the identification number assigned to every person in Wyoming DOC custody. You need it for Securus and JPay account setup and for all mail. Find it through the WDOC inmate search at corrections.wyo.gov or ask your loved one. It is different from any court case number.",
      "What is the most common mistake Wyoming prison families make? Not knowing the WDOC number before attempting account setup is very common. Also, Wyoming county jails use their own providers separate from Securus WDOC accounts. Laramie County and Natrona County each use their own vendors. Always confirm the specific facility type before setting up accounts.",
    ],

    faq: [
      { question: "Which provider do I use for Wyoming state prison phone calls?", answer: "Securus Technologies handles phone calls at WDOC Wyoming state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate WDOC number. Find it at corrections.wyo.gov. Wyoming has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Are phone calls free at Wyoming state prisons?", answer: "No. Wyoming is not among the states offering free inmate phone calls. Securus holds the WDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "How do I send money to someone at a Wyoming state prison?", answer: "JPay handles money deposits for WDOC state prison inmates. Visit jpay.com to deposit funds. Always include the inmate WDOC number. For county jail deposits contact the specific county facility as providers vary." },
      { question: "How do I find someone in a Wyoming state prison?", answer: "Use the WDOC inmate search at corrections.wyo.gov. Wyoming state facilities include Wyoming State Penitentiary in Rawlins and Wyoming Medium Correctional Institution in Torrington. For county jail inmates contact the specific county sheriff. For federal inmates use the Bureau of Prisons locator at bop.gov." },
      { question: "Do Wyoming county jails use the same provider as state prisons?", answer: "No. Wyoming county jails use their own providers. Laramie County Detention Center in Cheyenne and Natrona County in Casper each use their own contracted vendors separate from Securus WDOC accounts. Always confirm the specific provider for each county facility." },
      { question: "What are the main Wyoming state correctional facilities?", answer: "Major WDOC facilities include Wyoming State Penitentiary in Rawlins, Wyoming Medium Correctional Institution in Torrington, Wyoming Honor Farm in Riverton, and Lyman Correctional Facility in Lyman. Use the WDOC inmate search at corrections.wyo.gov to confirm the current facility." },
      { question: "Why is phone contact especially important for Wyoming families?", answer: "Wyoming is one of the least densely populated states with large geographic distances between communities. Many families live far from Wyoming State Penitentiary in Rawlins or other facilities. Phone and electronic messaging are often the most practical way to maintain regular contact." },
      { question: "What happens when my loved one transfers from a Wyoming county jail to a state prison?", answer: "When someone transfers to a WDOC state prison the provider changes to Securus. Get the WDOC number from corrections.wyo.gov and create new accounts after confirming the transfer. County jail accounts do not transfer to state prison accounts." },
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
    seoTitle: "Hawaii Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Hawaii jail or prison. Find the right provider for Hawaii PSD state prisons and community correctional centers.",

    intro: [
      "Hawaii operates its state prison system through the Hawaii Department of Public Safety (DPS). Securus Technologies handles phone calls at Hawaii state correctional facilities including Halawa Correctional Facility in Aiea on Oahu, Maui Community Correctional Center in Wailuku, Hawaii Community Correctional Center in Hilo, and Oahu Community Correctional Center. Contact Securus at 800-844-6591 or visit securustech.net. Hawaii is not among the states that offer free phone calls at state facilities.",
      "Hawaii presents unique challenges for families because many Hawaii inmates are housed on the mainland at private facilities in Arizona, Oklahoma, and other states due to overcrowding in Hawaii facilities. Families with loved ones housed out of state face additional cost and distance challenges. The DPS number is required for all mail and communication accounts. Use the Hawaii DPS inmate search at dps.hawaii.gov to find the DPS number and current facility location.",
      "JPay handles money deposits to Hawaii inmate trust accounts. Phone contact is especially important for Hawaii families because the geographic isolation of island communities and the housing of some inmates on the mainland makes in-person visits extremely expensive or impossible. All non-privileged calls are monitored and recorded. Three-way calling is prohibited.",
    ],

    overview: [
      "Which provider do Hawaii state prison families use? Securus Technologies handles phone calls at Hawaii DPS state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the Hawaii DPS inmate search at dps.hawaii.gov to confirm the current location. Some Hawaii inmates are housed at mainland private facilities which may use different providers.",
      "What is the most important thing to know about Hawaii inmate housing? Hawaii houses some inmates at mainland private facilities in Arizona, Oklahoma, and other states due to overcrowding. If your loved one is at a mainland facility, the phone and communication provider may be different from Hawaii DPS facilities. Always confirm the specific facility location using the DPS inmate search at dps.hawaii.gov before setting up accounts.",
      "What is the most common mistake Hawaii prison families make? Assuming all Hawaii inmates are in Hawaii facilities is very common. A significant number are housed at mainland private facilities. The phone provider and call costs at a mainland private facility in Arizona may be completely different from Securus Hawaii DPS accounts. Always confirm the actual facility location first.",
    ],

    faq: [
      { question: "Which provider do I use for Hawaii state prison phone calls?", answer: "Securus Technologies handles phone calls at Hawaii DPS state facilities. Contact Securus at 800-844-6591 or visit securustech.net. Some Hawaii inmates are housed at mainland private facilities which may use different providers. Always confirm the specific facility location at dps.hawaii.gov before setting up accounts." },
      { question: "Are some Hawaii inmates housed on the mainland?", answer: "Yes. Hawaii houses some inmates at mainland private facilities in Arizona, Oklahoma, and other states due to overcrowding in Hawaii facilities. If your loved one is at a mainland facility, the phone provider may be different from Hawaii DPS Securus accounts. Use the DPS inmate search at dps.hawaii.gov to confirm the current location." },
      { question: "Are phone calls free at Hawaii state prisons?", answer: "No. Hawaii is not among the states offering free inmate phone calls. Securus holds the DPS contract and charges per-minute rates subject to FCC caps effective April 2026. For inmates housed at mainland private facilities, rates may differ. JPay electronic messaging is a lower-cost alternative." },
      { question: "How do I send money to someone at a Hawaii state facility?", answer: "JPay handles money deposits for Hawaii DPS inmates. Visit jpay.com to deposit funds. Always include the inmate DPS number. For mainland private facility deposits, contact the specific facility to confirm the correct money transfer provider." },
      { question: "How do I find someone in a Hawaii state facility?", answer: "Use the Hawaii DPS inmate search at dps.hawaii.gov. This confirms whether your loved one is in a Hawaii facility or at a mainland private facility. Hawaii facilities include Halawa Correctional Facility in Aiea, Maui Community Correctional Center, and Oahu Community Correctional Center." },
      { question: "Why is phone contact so important for Hawaii families?", answer: "Hawaii's island geography makes in-person prison visits expensive. For families with loved ones housed at mainland facilities in Arizona or Oklahoma, in-person visits may be nearly impossible due to cost. Phone calls and electronic messaging are often the only practical way to maintain regular contact." },
      { question: "What are the main Hawaii state correctional facilities?", answer: "Major Hawaii DPS facilities include Halawa Correctional Facility in Aiea on Oahu, Oahu Community Correctional Center, Maui Community Correctional Center in Wailuku, Hawaii Community Correctional Center in Hilo, and Kauai Community Correctional Center in Lihue." },
      { question: "What happens if my loved one transfers from a mainland facility back to Hawaii?", answer: "When someone transfers from a mainland private facility back to a Hawaii DPS facility, the provider changes to Securus. Confirm the new facility using the DPS inmate search at dps.hawaii.gov and create new accounts if needed. Mainland facility accounts may not transfer to Hawaii DPS accounts." },
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
    seoTitle: "Vermont Inmate Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone in a Vermont jail or prison. Find the right provider for VT DOC state prisons and regional facilities. Set up messaging and phone calls.",

    intro: [
      "Vermont operates its state prison system through the Vermont Department of Corrections (VTDOC). Securus Technologies handles phone calls at Vermont state correctional facilities including Southern State Correctional Facility in Springfield, Northwest State Correctional Facility in St. Albans, Marble Valley Regional Correctional Facility in Rutland, and Chittenden Regional Correctional Facility in South Burlington. Contact Securus at 800-844-6591 or visit securustech.net.",
      "Vermont operates a unified correctional system similar to Delaware, meaning the state DOC handles both pretrial detention and sentenced incarceration. There are no traditional county jails in Vermont. This means one provider system covers all incarcerated people regardless of case status. The VTDOC number is required for all mail and communication accounts. Use the VTDOC inmate search at doc.vermont.gov to find the DOC number and current facility.",
      "Vermont is not among the states that offer free phone calls at state facilities. JPay handles money deposits to Vermont inmate trust accounts. Vermont has a small prison population but some Vermont inmates may be housed at out-of-state facilities due to capacity issues. All non-privileged calls are monitored and recorded. Three-way calling is prohibited.",
    ],

    overview: [
      "Which provider do Vermont state prison families use? Securus Technologies handles phone calls at all VTDOC Vermont state facilities. Contact Securus at 800-844-6591 or visit securustech.net. JPay handles money deposits at jpay.com. Use the VTDOC inmate search at doc.vermont.gov to find the DOC number. Vermont operates a unified system with no county jails so one provider covers all Vermont incarcerated people.",
      "What makes Vermont's correctional system unique? Vermont operates a unified correctional system where the state DOC handles both pretrial detention and sentenced incarceration. There are no county jails in Vermont. All incarcerated people regardless of case status are under VTDOC jurisdiction and use the same Securus phone system.",
      "What is the most common mistake Vermont prison families make? Not having the VTDOC number before attempting account setup is common. Find it through the VTDOC inmate search at doc.vermont.gov. Also note that some Vermont inmates may be housed at out-of-state facilities. Always confirm the actual current facility location before setting up accounts.",
    ],

    faq: [
      { question: "Which provider do I use for Vermont state prison phone calls?", answer: "Securus Technologies handles phone calls at all VTDOC Vermont state facilities. Contact Securus at 800-844-6591 or visit securustech.net. You need the inmate VTDOC DOC number. Find it at doc.vermont.gov. Vermont has not eliminated phone fees. FCC rate caps effective April 2026 apply." },
      { question: "Does Vermont have county jails?", answer: "No. Vermont operates a unified correctional system where the state DOC handles both pretrial detention and sentenced incarceration. There are no county jails in Vermont. All incarcerated people are under VTDOC jurisdiction and use the same Securus phone system regardless of case status." },
      { question: "Are phone calls free at Vermont state facilities?", answer: "No. Vermont is not among the states offering free inmate phone calls. Securus holds the VTDOC contract and charges per-minute rates subject to FCC caps effective April 2026. JPay electronic messaging and written mail are lower-cost alternatives." },
      { question: "How do I send money to someone at a Vermont state facility?", answer: "JPay handles money deposits for VTDOC state inmates. Visit jpay.com to deposit funds. Always include the inmate VTDOC number. Since Vermont has no county jails JPay covers all Vermont incarcerated people statewide." },
      { question: "How do I find someone in a Vermont state facility?", answer: "Use the VTDOC inmate search at doc.vermont.gov. Vermont facilities include Southern State Correctional Facility in Springfield, Northwest State Correctional Facility in St. Albans, Marble Valley Regional in Rutland, and Chittenden Regional in South Burlington." },
      { question: "Are some Vermont inmates housed out of state?", answer: "Vermont may house some inmates at out-of-state facilities due to capacity. Use the VTDOC inmate search at doc.vermont.gov to confirm the current location. If housed out of state, the phone provider may be different. Always confirm the actual facility before setting up accounts." },
      { question: "What are the main Vermont state correctional facilities?", answer: "Vermont VTDOC facilities include Southern State Correctional Facility in Springfield, Northwest State Correctional Facility in St. Albans, Marble Valley Regional Correctional Facility in Rutland, Northern State Correctional Facility in Newport, and Chittenden Regional Correctional Facility in South Burlington." },
      { question: "What happens when my loved one moves between Vermont facilities?", answer: "Since Vermont operates a unified DOC system your Securus and JPay accounts should continue to work after transfers within Vermont. Confirm the new facility using the VTDOC inmate search at doc.vermont.gov and update your mailing address if needed." },
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
        name: "Marble Valley Regional Correctional Facility",
        slug: "marble-valley-regional-correctional-facility",
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

  "north-carolina": {
    id: "s-nc",
    name: "North Carolina",
    slug: "north-carolina",
    abbreviation: "NC",
    facilityCount: 156,
    region: "Southeast",
    hasDetailPage: true,

    description: "How to contact someone in a North Carolina state prison or county jail. NCDAC phone calls, video visits, mail, and money through ViaPath/GTL and ConnectNetwork.",
    seoTitle: "North Carolina Inmate Phone Calls, Visits, Mail and Money (NCDAC)",
    seoDescription: "Contact someone in a North Carolina state prison: NCDAC phone calls at 10 cents a minute through ViaPath/GTL, video visits, TextBehind mail, and money deposits. County jails use separate vendors.",

    intro: [
      "North Carolina runs two separate systems, and mixing them up is the most common mistake families make. State prisons are operated by the North Carolina Department of Adult Correction (NCDAC). County jails are run by county sheriffs, and each jail sets its own phone, video, and messaging contracts. Federal prisons in North Carolina use the federal BOP system and are separate again. This page covers the state prison system first, then explains how county jails differ.",
      "In NCDAC state prisons, all communication runs through tablets supplied under a contract with ViaPath/GTL. Tablets handle phone calls, text messages, and digitized mail, plus education, self-help, and entertainment content. Kiosks and wall phones are also available. Families set up and fund accounts through ConnectNetwork, ViaPath's account portal, at ConnectNetwork.com.",
      "To find someone in a state prison, use the NCDAC Offender Public Information Search, which covers state prison offenders, probationers, and parolees back to 1972. It does not cover county jail inmates. For county jail custody, contact the sheriff's office or jail directly. NCDAC also runs a friends and family hotline at 1-800-368-1985.",
    ],

    overview: [
      "How much do phone calls cost in North Carolina state prisons? Local and long distance calls cost 10 cents per minute, plus applicable state and federal taxes, per the NCDAC Telephone and Tablet Services page. All calls are timed for 15 minutes. Families can fund calls two ways. AdvancePay prepaid calling puts money on your phone number, and funds are deducted when the offender calls you. A PIN Debit account puts funds in the offender's account, and the offender can use it to call any allowed number. Set up either account at ConnectNetwork.com, in the ConnectNetwork mobile app, or by calling 1-800-483-8314 for AdvancePay. ViaPath also advertises one free call per week for every incarcerated individual.",
      "How do visits work in North Carolina state prisons? Visits are in person or by video. In-person visits are by appointment only: call or email the prison where the person is housed, and call the day before to confirm. Video visits use the Getting Out Visits app, or a home computer with a webcam and microphone, and are limited to people on the offender's approved visitors list. Before any visit, the offender must mail you a blank visitor application, you must complete and return it to the prison, and facility staff must approve it. Each offender may have up to 18 approved visitors. Under normal circumstances, an offender gets no more than one visiting session per week, up to two hours, with no more than three visitors per session. Cell phones are contraband and prohibited in all prison facilities.",
      "How do mail and money work in North Carolina state prisons? Mail to state prison offenders goes to TextBehind, not to the prison. Address it: Offender Name and OPUS Number, Name of Prison (do not abbreviate), P.O. Box 247, Phoenix, MD 21131. TextBehind scans letters, cards, photos, and artwork and delivers them electronically to the offender's tablet. The return address must include the sender's full first and last name; initials are not accepted. Legal mail is not sent through TextBehind; attorneys must contact the prison for instructions. Money goes through ViaPath: online at ConnectNetwork.com, in the ConnectNetwork app, by phone (AdvancePay 800-483-8314; Trust and PIN Debit 888-428-1845), by Western Union (payment code NCDAC TRUST), or by money order payable to TouchPay with a deposit slip to TouchPay Holdings NCDAC, PO Box 649556, Dallas, TX 75264-9556. Money orders carry no fee; other methods charge fees per the official NCDAC fee table. Only approved visitors may deposit funds. County jails work differently: each jail contracts its own providers. For example, Iredell County Detention Center uses NCIC for phone, video, and messaging, per the county's own page. Check the specific jail's page before setting up any account.",
    ],

    faq: [
      {
        question: "Who provides phone service in North Carolina state prisons?",
        answer: "ViaPath/GTL provides phone, tablet, and messaging services under contract with NCDAC. Tablets handle phone calls, text messages, and digitized mail, and kiosks and wall phones are also available. Families set up and fund accounts through ConnectNetwork at ConnectNetwork.com.",
      },
      {
        question: "How much do phone calls cost in North Carolina state prisons?",
        answer: "Local and long distance calls cost 10 cents per minute, plus applicable state and federal taxes, per the NCDAC Telephone and Tablet Services page. All calls are timed for 15 minutes. Payment fees also apply: $3.00 per use for automated payments, $5.94 per use for live operator payments, and $2.00 per use for paper bills or statements.",
      },
      {
        question: "How do I set up phone calls with someone in a North Carolina prison?",
        answer: "Calls are placed by the offender; families set up and fund the account. Use AdvancePay prepaid calling, which puts money on your phone number so funds are deducted when the offender calls you, or a PIN Debit account, which puts funds in the offender's account so the offender can call any allowed number. Set up either account at ConnectNetwork.com, in the ConnectNetwork mobile app, or by calling 1-800-483-8314 for AdvancePay.",
      },
      {
        question: "How do I visit someone in a North Carolina prison?",
        answer: "Visits are in person or by video. In-person visits are by appointment only: call or email the prison where the person is housed, and call the day before to confirm. Video visits use the Getting Out Visits app or a home computer with a webcam and microphone, and are limited to people on the offender's approved visitors list. Before any visit, the offender must mail you a blank visitor application, you must complete and return it to the prison, and facility staff must approve it. Each offender may have up to 18 approved visitors. Under normal circumstances, an offender gets no more than one visiting session per week, up to two hours, with no more than three visitors per session. Cell phones are contraband and prohibited in all prison facilities.",
      },
      {
        question: "How do I send mail to someone in a North Carolina prison?",
        answer: "Send it to TextBehind, not to the prison. Address it: Offender Name and OPUS Number, Name of Prison (do not abbreviate), P.O. Box 247, Phoenix, MD 21131. TextBehind scans letters, cards, photos, and artwork and delivers them electronically to the offender's tablet. The return address must include the sender's full first and last name; initials are not accepted, and mail not addressed this way will be returned. Legal mail is not sent through TextBehind; attorneys must contact the prison for instructions. Do not send packages through TextBehind; contact the individual prison facility about packages.",
      },
      {
        question: "How do I send money to someone in a North Carolina prison?",
        answer: "NCDAC partners with ViaPath for deposits. Use ConnectNetwork.com, the ConnectNetwork mobile app, phone (AdvancePay 800-483-8314; Trust and PIN Debit 888-428-1845), Western Union (payment code NCDAC TRUST), or a money order payable to TouchPay with a deposit slip to TouchPay Holdings NCDAC, PO Box 649556, Dallas, TX 75264-9556. Money orders carry no fee; other methods charge fees per the official NCDAC fee table (for example, online deposits of $20.00 to $99.00 cost $5.00). Only approved visitors may deposit funds. Prison facilities do not accept or process money orders.",
      },
      {
        question: "How do I find someone in a North Carolina prison?",
        answer: "Use the NCDAC Offender Public Information Search, searchable by name or offender ID, which covers state prison offenders, probationers, and parolees with records back to 1972. It does not include county jail information. For custody-status notifications, victims and their circles of support can use NC SAVAN. For someone in a county jail, contact the sheriff's office or jail directly, since NCDAC holds no county jail records.",
      },
    ],

    facilitiesByType: { federal: 4, state: 54, county: 98, private: 0 },

    counties: [
      "Wake County", "Mecklenburg County", "Durham County", "Guilford County",
      "Forsyth County", "Granville County", "Buncombe County", "Cumberland County",
      "Gaston County", "New Hanover County", "Pitt County", "Robeson County",
      "Union County", "Cabarrus County", "Iredell County",
    ],

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description: "Phone, tablet, and messaging services in NCDAC state prisons under the ViaPath/GTL contract.",
      },
      {
        name: "ConnectNetwork",
        slug: "connectnetwork",
        initial: "C",
        color: "bg-blue-600",
        description: "ViaPath's account portal for AdvancePay, PIN Debit, and trust deposits in NC state prisons.",
      },
      {
        name: "TextBehind",
        slug: "textbehind",
        initial: "T",
        color: "bg-violet-600",
        description: "Mail scanning for NCDAC state prisons; letters are scanned and delivered electronically to tablets.",
      },
      {
        name: "TouchPay",
        slug: "touchpay",
        initial: "T",
        color: "bg-teal-600",
        description: "Money-order deposits for NCDAC state prisons; money orders payable to TouchPay with a deposit slip.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description: "Email system for federal BOP facilities in North Carolina, including FCC Butner.",
      },
    ],

    featuredFacilities: [
      {
        name: "Central Prison",
        slug: "central-prison",
        type: "State Prison",
        county: "Wake County",
        features: ["Phone Calls", "Video Visits", "Messaging"],
      },
      {
        name: "Federal Correctional Complex Butner",
        slug: "federal-correctional-complex-butner",
        type: "Federal Prison",
        county: "Granville County",
        features: ["Phone Calls", "Messaging"],
      },
      {
        name: "Wake County Detention Center",
        slug: "wake-county-detention-center",
        type: "County Jail",
        county: "Wake County",
        features: ["Phone Calls", "Video Visits", "Money Transfer"],
      },
    ],
  },

}
