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
  intro?: string[]
  overview?: string[]
  faq?: { question: string; answer: string }[]
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
      "Los Angeles County operates one of the largest jail systems in the world through the Los Angeles County Sheriff's Department. Major facilities include Men's Central Jail, Twin Towers Correctional Facility, Century Regional Detention Facility, and the Inmate Reception Center at 450 Bauchet Street in downtown Los Angeles. The system holds approximately 12,000 detainees at any given time.",
      "Phone calls from Los Angeles County jails have been free since December 1, 2023. The Los Angeles County Board of Supervisors voted 5-0 to shift the cost of calls from families to the jail system's Inmate Welfare Fund. Families do not need to fund a prepaid calling account to receive calls from LA County jail facilities. You will still need a ConnectNetwork account to manage your contact information.",
      "Communication at Los Angeles County jails is handled through ViaPath Technologies using the ConnectNetwork platform. Create a free account at connectnetwork.com to manage your contact information and receive calls. For California state prisons serving Los Angeles County residents, communication has transitioned from ViaPath to Securus Technologies starting in February 2025. County jails and state prisons use different providers.",
    ],

    overview: [
      "Are phone calls free at Los Angeles County jails? Yes. Phone calls from LA County jail facilities have been free since December 1, 2023 after the Board of Supervisors voted to use the Inmate Welfare Fund to cover the cost. You do not need to deposit money to receive calls. However, you still need a ConnectNetwork account at connectnetwork.com to be registered as an approved contact.",
      "Which provider do Los Angeles County jail families use? ViaPath Technologies through ConnectNetwork handles communication at LA County jail facilities including Men's Central Jail and Twin Towers. For California state prisons, the provider changed from ViaPath to Securus starting in February 2025. If your loved one transfers from a county jail to a state prison, you will need a separate Securus account.",
      "What is the most common mistake Los Angeles County families make? The most common mistake is assuming that because LA County jail calls are free, no account setup is needed at all. You still need a ConnectNetwork account to be listed as an approved contact for your loved one. Without a registered account, calls cannot connect even though they are free of charge.",
    ],

    faq: [
      {
        question: "Are phone calls free at Los Angeles County jails?",
        answer: "Yes. Phone calls from Los Angeles County jail facilities have been free since December 1, 2023. The Board of Supervisors voted to use the Inmate Welfare Fund to cover the cost. You do not need to fund a prepaid account to receive calls. You still need a free ConnectNetwork account at connectnetwork.com to be registered as an approved contact.",
      },
      {
        question: "Which provider do I use for Los Angeles County jails?",
        answer: "Los Angeles County jails use ViaPath Technologies through the ConnectNetwork platform. Create a free account at connectnetwork.com. This is different from California state prisons which transitioned to Securus Technologies starting in February 2025. Always confirm which specific facility your loved one is in before setting up accounts.",
      },
      {
        question: "Do I need a ConnectNetwork account even if calls are free?",
        answer: "Yes. Even though phone calls from LA County jails are free, you still need a ConnectNetwork account at connectnetwork.com to be registered as an approved contact. Without registration, calls cannot connect. Account creation is free and takes only a few minutes.",
      },
      {
        question: "How do I find someone currently in an LA County jail?",
        answer: "The Los Angeles County Sheriff's Department maintains an online inmate locator. You can also call the jail information line at 213-473-6100. Search by name to find which facility your loved one is held in. This is important because LA County operates multiple jail facilities and the correct facility determines which location to visit and how communication works.",
      },
      {
        question: "My loved one is at a California state prison near Los Angeles. Is that the same provider?",
        answer: "No. California state prisons including those near Los Angeles transitioned from ViaPath to Securus Technologies starting in February 2025 under a new CDCR contract. If your loved one is in a California state prison, you need a Securus account, not ConnectNetwork. LA County jails and California state prisons use completely different providers.",
      },
      {
        question: "Can I do a video visit at an LA County jail facility?",
        answer: "Video visitation availability at LA County jails depends on the specific facility. Contact the facility directly or check your ConnectNetwork account dashboard to see whether video visits are available at your loved one's specific location. Some facilities offer in-person visits while others use video terminals in the lobby.",
      },
      {
        question: "How do I send money to someone at an LA County jail?",
        answer: "Money transfers to inmate trust accounts at LA County facilities go through ConnectNetwork or other approved providers. Log in to your ConnectNetwork account and look for the money transfer option. Note that the calling account and the inmate trust account are separate. Phone calls being free does not mean commissary or other expenses are free.",
      },
      {
        question: "What happens when my loved one transfers from LA County jail to a California state prison?",
        answer: "When someone transfers from an LA County jail to a California state prison, the communication provider changes completely. You will need a Securus account for state prison communication. California state prison calls are not free under the county program. The CDCR contract with Securus has different rates and rules than the LA County jail contract with ViaPath.",
      },
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
      "Harris County is home to one of the largest jail systems in the United States, operated by the Harris County Sheriff's Office. The main facilities include the Harris County Jail on Baker Street and the LaSalle Corrections Center. Communication at Harris County facilities is handled by Securus Technologies for phone calls at the main jail and the Correct Solutions Group for LaSalle. These are two separate systems and funds cannot be transferred between them.",

      "As of June 16, 2025, Harris County Sheriff's Office no longer accepts personal physical mail at the facility. All personal mail now goes to the Securus Digital Mail Center where it is scanned and made available to inmates through eMessaging tablets and kiosks. Families must include the inmate full name as booked, SPN number, and housing facility and cell block location on all mail. Missing details can cause your envelope to be returned.",

      "Phone calls from Harris County Jail are inmate-initiated only. You cannot call the jail to reach an inmate. Your loved one must place the call out. To receive calls, set up a Securus AdvancePay account by calling Securus at 1-800-844-6591. For LaSalle Corrections Center, contact Correct Solutions Group separately at 1-877-618-3516.",
    ],

    overview: [
      "Which provider do Harris County jail families use? Securus Technologies handles phone calls and video visits at the Harris County Jail on Baker Street. LaSalle Corrections Center uses Correct Solutions Group. These are separate companies and separate accounts. Funds in a Securus account cannot be transferred to a Correct Solutions Group account when an inmate transfers between facilities.",
      "What happened to mail at Harris County Jail? As of June 16, 2025, physical mail is no longer accepted directly at the facility. All mail goes through the Securus Digital Mail Center for scanning before delivery. Include the inmate full name as booked, SPN number, and complete housing location on every envelope to avoid returns.",
      "What is the most common mistake Harris County families make? Signing up for the wrong provider is the most common mistake. Families with loved ones at LaSalle sign up for Securus when they should be using Correct Solutions Group. Always confirm which specific facility your loved one is currently at before creating any account or sending funds.",
    ],

    faq: [
      {
        question: "Which provider do I use for Harris County Jail?",
        answer: "Securus Technologies handles phone calls and video visits at the Harris County Jail on Baker Street. Call Securus at 1-800-844-6591 to set up a prepaid AdvancePay account. If your loved one is at the LaSalle Corrections Center, use Correct Solutions Group instead at 1-877-618-3516. These are separate systems and funds cannot be transferred between them.",
      },
      {
        question: "Why is my phone blocked from receiving calls from Harris County Jail?",
        answer: "If you are not receiving calls from Harris County Jail, your phone number may be blocked or not registered with Securus. Contact Securus at 1-800-844-6591 to check your number status and remove any block. Also check that your phone settings are not sending unknown numbers to voicemail. Collect calls may also be restricted depending on your phone carrier.",
      },
      {
        question: "Can I send physical mail to someone at Harris County Jail?",
        answer: "As of June 16, 2025, Harris County Sheriff's Office no longer accepts personal mail directly at the facility. All personal mail now goes to the Securus Digital Mail Center where it is scanned and delivered digitally. Include the inmate full name as booked, SPN number, and housing facility and cell block location. Missing information will cause your mail to be returned.",
      },
      {
        question: "What is the SPN number and where do I find it?",
        answer: "The SPN (System Person Number) is the identification number assigned to everyone booked into Harris County Jail. You need this number for mail, messaging accounts, and money transfers. You can find it by searching the Harris County Sheriff's Office online inmate locator or by calling the jail directly.",
      },
      {
        question: "My loved one transferred from Harris County Jail to LaSalle. Do I need a new account?",
        answer: "Yes. Harris County Jail uses Securus Technologies and LaSalle Corrections Center uses Correct Solutions Group. These are separate systems and funds cannot be transferred between them. Contact each company separately when an inmate moves between facilities. Call Securus at 1-800-844-6591 for the main jail and Correct Solutions Group at 1-877-618-3516 for LaSalle.",
      },
      {
        question: "How do I send money to someone at Harris County Jail?",
        answer: "For the main Harris County Jail, deposit money through Securus at securustech.net or by calling 1-800-844-6591. For LaSalle Corrections Center, use Correct Solutions Group at 1-877-618-3516. Money deposited in one system cannot be transferred to the other. Always confirm which facility your loved one is currently at before making a deposit.",
      },
      {
        question: "What happens if my loved one transfers from Harris County Jail to a Texas state prison?",
        answer: "When someone moves from Harris County Jail to a Texas Department of Criminal Justice state prison, the communication provider changes. TDCJ uses Securus Technologies for phone calls but you must register your phone number separately through the TDCJ Friends and Family Enrollment system on the TDCJ website. Your existing Harris County Securus account may not automatically carry over to TDCJ.",
      },
      {
        question: "Can I do a video visit with someone at Harris County Jail?",
        answer: "Yes. Video visits at Harris County Jail are available through Securus. Create a Securus account at securustech.net or through the Securus Mobile app. Schedule your visit in advance and select an available time slot. You need a device with a camera and a stable internet connection. All video visits are recorded and monitored by facility staff.",
      },
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
      "Miami-Dade County operates its correctional system through the Miami-Dade Corrections and Rehabilitation Department (MDCR). Major facilities include Turner Guilford Knight Correctional Center (TGK) at 7000 NW 41st Street, Metro West Detention Center at 13850 NW 41st Street, and the Pre-Trial Detention Center at 1321 NW 13th Street. Phone services at all MDCR facilities are handled by Securus Technologies.",
      "Inmates at Miami-Dade facilities cannot receive incoming calls. Your loved one must initiate all calls from facility phones. To receive calls, set up a Securus AdvancePay account at securustech.net or through the Securus Mobile app. Securus automated support is available at 972-734-1111 and customer service at 1-800-844-6591. MDCR posts step-by-step account setup guides in English, Spanish, and Creole on the county website.",
      "Miami-Dade is among the Florida counties that offer free phone calls at its facilities. For commissary and trust account deposits, MDCR supports TouchPay online and by phone at 1-866-232-1899. Lobby kiosks are available at TGK and Metro West with extended daily hours. Video visitation at MDCR uses Global Tel Link (GTL) through ConnectNetwork, which is a separate account from the Securus phone account.",
    ],

    overview: [
      "Which provider do Miami-Dade jail families use? Securus Technologies handles all phone calls at Miami-Dade Corrections facilities. GTL ConnectNetwork handles video visitation. TouchPay handles commissary and trust account deposits. These are three separate providers and three separate accounts. You may need accounts with more than one provider depending on which services you use.",
      "Are phone calls free at Miami-Dade facilities? Miami-Dade is among the Florida counties that have implemented free or reduced-cost calling. Contact the specific facility or check your Securus account for current rate information as policies can change. Even if calls are free or discounted, you still need a registered Securus account to receive calls.",
      "What is the most common mistake Miami-Dade families make? Confusing the phone provider and the video provider is the most common mistake. Securus handles phone calls and GTL ConnectNetwork handles video visits. Funding your Securus account does not enable video visits and funding your ConnectNetwork account does not enable phone calls. Set up both accounts separately if you plan to use both services.",
    ],

    faq: [
      {
        question: "Which provider do I use for Miami-Dade jail phone calls?",
        answer: "Securus Technologies handles all phone calls at Miami-Dade Corrections facilities. Create a Securus AdvancePay account at securustech.net or through the Securus Mobile app. For automated support call 972-734-1111 or customer service at 1-800-844-6591. MDCR posts setup guides in English, Spanish, and Creole on the county website.",
      },
      {
        question: "How do I set up video visits at Miami-Dade jail?",
        answer: "Video visitation at Miami-Dade Corrections uses Global Tel Link (GTL) through ConnectNetwork. Create a separate ConnectNetwork account at connectnetwork.com. This is a different account from your Securus phone account. Attorneys and professional visitors must complete a remote video visitation application and register on the GTL website. All visitors must acknowledge and comply with all visitation rules.",
      },
      {
        question: "How do I send money to someone at Miami-Dade jail?",
        answer: "For commissary and trust account deposits, Miami-Dade Corrections supports TouchPay online and by phone at 1-866-232-1899. Lobby kiosks are available at TGK and Metro West with extended daily hours. The Pre-Trial Detention Center has evening windows. Always verify current hours on the MDCR trust deposits page before visiting a kiosk.",
      },
      {
        question: "Can I call Miami-Dade jail to speak with an inmate?",
        answer: "No. Inmates at Miami-Dade facilities cannot receive incoming calls. Your loved one must initiate all calls from facility phones to your registered Securus number. Set up a Securus AdvancePay account and fund it so calls can connect when they call you. Calls are limited in length and frequency by system settings and housing unit schedules.",
      },
      {
        question: "Which Miami-Dade facility is my loved one at?",
        answer: "Miami-Dade Corrections operates multiple facilities. Turner Guilford Knight (TGK) is at 7000 NW 41st Street, Metro West is at 13850 NW 41st Street, and the Pre-Trial Detention Center is at 1321 NW 13th Street. Contact the MDCR main line to confirm the current location. Knowing the exact facility is important because kiosk hours and some services vary by location.",
      },
      {
        question: "What happens when my loved one transfers from Miami-Dade jail to a Florida state prison?",
        answer: "When someone transfers from Miami-Dade county jail to a Florida Department of Corrections state prison, the communication providers change. Florida state prisons use JPay for messaging and money transfers. Phone services at Florida state prisons are handled by a separate FDOC contracted provider. Contact JPay and the new facility to set up accounts after confirming the transfer is complete.",
      },
      {
        question: "Is there a Securus app I can use for Miami-Dade calls?",
        answer: "Yes. Securus has a free mobile app available for iOS and Android called Securus Mobile. Download it from your app store and log in with your Securus account details to manage your AdvancePay account, check your balance, and receive notifications. The app makes it easier to manage your account and ensure your balance stays funded.",
      },
      {
        question: "My call from Miami-Dade jail is not connecting. What should I do?",
        answer: "Check that your Securus AdvancePay balance is funded. Confirm your phone number is registered and approved in your Securus account. Check that your phone settings are not blocking unknown numbers or sending them to voicemail. If the problem persists, contact Securus customer service at 1-800-844-6591. Calls may also be restricted during facility counts, lockdowns, or disciplinary actions.",
      },
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
