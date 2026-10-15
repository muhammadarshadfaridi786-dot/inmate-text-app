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
// ALL SEEDED COUNTIES, Directory listing
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
  {
    id: "c-cook",
    name: "Cook County",
    slug: "cook-county",
    stateSlug: "illinois",
    stateName: "Illinois",
    stateAbbr: "IL",
    facilityCount: 24,
    hasDetailPage: true,
  },
  {
    id: "c-maricopa",
    name: "Maricopa County",
    slug: "maricopa-county",
    stateSlug: "arizona",
    stateName: "Arizona",
    stateAbbr: "AZ",
    facilityCount: 20,
    hasDetailPage: true,
  },
  {
    id: "c-wayne-mi",
    name: "Wayne County",
    slug: "wayne-county-mi",
    stateSlug: "michigan",
    stateName: "Michigan",
    stateAbbr: "MI",
    facilityCount: 14,
    hasDetailPage: true,
  },
  {
    id: "c-hennepin",
    name: "Hennepin County",
    slug: "hennepin-county",
    stateSlug: "minnesota",
    stateName: "Minnesota",
    stateAbbr: "MN",
    facilityCount: 10,
    hasDetailPage: true,
  },
]

// ─────────────────────────────────────────────
// DETAILED COUNTY DATA, 12 seeded counties
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
        slug: "los-angeles-county-mens-central-jail",
        type: "County Jail",
        county: "Los Angeles County",
        features: ["Video Calls", "Phone Calls", "Money Transfer"],
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
      "Harris County is home to Houston and is the third most populous county in the United States. The Harris County Sheriff's Office operates the Harris County Jail at 1200 Baker Street, Houston, TX 77002. The jail information line is 713-755-5300. Securus Technologies handles phone calls at Harris County Jail. Contact Securus at 1-800-844-6591 or visit securustech.net to set up an AdvancePay account. Inmates at Harris County Jail cannot receive incoming calls. All calls are outgoing only and are limited to 15 minutes per call.",

      "As of June 16 2025, Harris County Sheriff's Office no longer accepts personal mail at the facility. Personal mail now goes to the Securus Digital Mail Center where it is scanned and made available to the inmate through eMessaging tablets and kiosks. Physical letters should still be addressed to: Inmate Full Name, SPN Number, Harris County Jail, 701 N San Jacinto St, Houston TX 77002. Legal mail continues to be delivered directly to the facility. All incoming mail is reviewed before delivery.",

      "Video visitation at Harris County Jail requires advance scheduling through the Securus system. Walk-in visits are not permitted. Off-site remote video visits cost $5.99 per 20 minutes and are only available for inmates housed at 700 N San Jacinto Street, the Joint Processing Center. For scheduling help contact Securus at 1-800-844-6591 or call 346-286-1480 after hours. Each inmate is allowed two on-site visits per week. A valid government-issued photo ID is required at check-in.",
    ],

    overview: [
      "Which provider handles phone calls at Harris County Jail? Securus Technologies handles phone calls at Harris County Jail in Houston. Contact Securus at 1-800-844-6591 or visit securustech.net to set up an AdvancePay prepaid account. Inmates cannot receive incoming calls. They place outgoing calls limited to 15 minutes. Three-way calling and call forwarding are prohibited and result in immediate disconnection. All non-legal calls are recorded and monitored.",
      "What changed about Harris County Jail mail in 2025? As of June 16 2025, Harris County Jail no longer accepts personal mail directly at the facility. Personal mail goes to the Securus Digital Mail Center where it is scanned and delivered to inmates electronically through tablets and kiosks. Address mail to: Inmate Full Name, SPN Number, Harris County Jail, 701 N San Jacinto St, Houston TX 77002. Legal mail is still delivered directly. Always include the inmate SPN number on all correspondence.",
      "What is the most common mistake Harris County jail families make? Attempting walk-in visits is very common. Harris County Jail does not allow walk-in visits. All visits must be scheduled online in advance through the Securus system. Off-site video visits cost $5.99 per 20 minutes and are only available for inmates at the Joint Processing Center at 700 N San Jacinto. Also note that since June 2025 personal mail no longer goes directly to the facility. Always use the Securus Digital Mail Center address.",
    ],

    faq: [
      {
        question: "Which provider handles phone calls at Harris County Jail?",
        answer: "Securus Technologies handles phone calls at Harris County Jail in Houston. Contact Securus at 1-800-844-6591 or visit securustech.net to set up an AdvancePay prepaid account. Inmates cannot receive incoming calls. All calls are outgoing only and limited to 15 minutes. Three-way calling is prohibited.",
      },
      {
        question: "How do I set up a Securus AdvancePay account for Harris County Jail?",
        answer: "Contact Securus at 1-800-844-6591 or visit securustech.net. Create a free account and set up an AdvancePay prepaid balance linked to your phone number. Fund the account so the inmate can call you. If your phone number blocks collect calls AdvancePay allows you to still receive calls. The inmate must have your number on their approved call list.",
      },
      {
        question: "How do I find someone at Harris County Jail?",
        answer: "Use the Harris County Sheriff's Office inmate search at harriscountyso.org or call the jail information line at 713-755-5300. You can also visit the public viewing room on the second floor of the Joint Processing Center at 700 N San Jacinto Street, Houston TX 77002. Have the person's full name and date of birth ready.",
      },
      {
        question: "Can I still send mail to Harris County Jail?",
        answer: "Yes but the process changed as of June 16 2025. Personal mail no longer goes directly to the facility. Mail is sent to the Securus Digital Mail Center where it is scanned and delivered to inmates electronically through tablets and kiosks. Address mail to: Inmate Full Name, SPN Number, Harris County Jail, 701 N San Jacinto St, Houston TX 77002. Legal mail is still delivered directly to the facility.",
      },
      {
        question: "How do I schedule a video visit at Harris County Jail?",
        answer: "All visits at Harris County Jail must be scheduled online in advance. Walk-in visits are not permitted. Off-site remote video visits cost $5.99 per 20 minutes and are only available for inmates at the Joint Processing Center at 700 N San Jacinto Street. For scheduling help contact Securus at 1-800-844-6591 or call 346-286-1480 after hours. Each inmate is allowed two on-site visits per week.",
      },
      {
        question: "What is the Harris County Jail address?",
        answer: "The Harris County Jail main address is 1200 Baker Street, Houston TX 77002. The jail information line is 713-755-5300. For mail send to: Inmate Full Name, SPN Number, Harris County Jail, 701 N San Jacinto St, Houston TX 77002. For video visits and Joint Processing Center: 700 N San Jacinto Street, Houston TX 77002.",
      },
      {
        question: "What is the SPN number for Harris County Jail?",
        answer: "The SPN stands for System Person Number and is the unique identification number assigned to every person booked into Harris County Jail. It must appear on all mail sent to the facility. Find the SPN number using the Harris County Sheriff's Office inmate search at harriscountyso.org or by calling 713-755-5300. The inmate can also provide their SPN number directly.",
      },
      {
        question: "What happens when my loved one transfers from Harris County Jail to TDCJ?",
        answer: "When someone is sentenced and transferred to the Texas Department of Criminal Justice (TDCJ) state prison system, the provider changes from Securus county jail accounts to the TDCJ phone system. TDCJ also uses Securus but as a separate account. Use the TDCJ offender search at tdcj.texas.gov to find the new facility and TDCJ number after the transfer is confirmed.",
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
          "Securus Technologies handles phone calls, video visits, and digital mail at Harris County Jail. AdvancePay at securustech.net or 1-800-844-6591. As of June 2025 personal mail goes to the Securus Digital Mail Center. Video visits cost $5.99 per 20 minutes. Walk-in visits not allowed.",
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
        name: "FDC Houston",
        slug: "federal-detention-center-houston",
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
      "Miami-Dade County operates one of the largest jail systems in the United States through the Miami-Dade Corrections and Rehabilitation Department (MDCR). Major facilities include Turner Guilford Knight Correctional Center (TGK) at 7000 NW 41st Street Miami FL 33166, Metro West Detention Center at 13850 NW 41st Street Miami FL 33178, and the Pre-Trial Detention Center (PDC) at 1321 NW 13th Street Miami FL 33125. GTL ViaPath ConnectNetwork handles phone calls and video visitation at all Miami-Dade county jail facilities.",
      "To receive phone calls from any Miami-Dade county jail, create a free GTL ConnectNetwork account at connectnetwork.com or call 877-650-4249. The inmate must add your number to their approved call list. For video visits at Turner Guilford Knight, register with GTL at connectnetwork.com. Allow up to 24 hours for processing. For video visit questions contact MDCR Inmate Visitation at 786-263-4119. Remote video visits are available for friends and family. In-person visits are available Monday through Saturday with sign-in at least 15 minutes before scheduled time.",
      "Money transfers to Miami-Dade inmate accounts go through TouchPay using facility number 233101. Deposits must include the inmate name and inmate ID number. For inmate search and booking information use the Miami-Dade Corrections inmate search at miamidade.gov/corrections or call the Detention Office at 305-375-5100. TGK direct line is 786-263-5600. Metro West direct line is 786-263-7000.",
    ],

    overview: [
      "Which provider handles phone calls at Miami-Dade county jails? GTL ViaPath ConnectNetwork handles phone calls at all Miami-Dade Corrections and Rehabilitation Department facilities including Turner Guilford Knight (TGK), Metro West Detention Center, and the Pre-Trial Detention Center. Create a free ConnectNetwork account at connectnetwork.com or call 877-650-4249. You need the inmate ID number to set up the account.",
      "What is Turner Guilford Knight (TGK) and how do I contact someone there? Turner Guilford Knight Correctional Center (TGK) is Miami-Dade's largest pretrial holding facility located at 7000 NW 41st Street Miami FL 33166. TGK has a capacity of approximately 1,300 inmates. Phone: 786-263-5600. Phone calls use GTL ConnectNetwork. Video visits require GTL registration at connectnetwork.com. Money deposits go through TouchPay using facility number 233101. For video visit questions call MDCR Inmate Visitation at 786-263-4119.",
      "What is the most common mistake Miami-Dade jail families make? Sending money through the wrong provider is very common. Miami-Dade uses TouchPay with facility number 233101 for inmate deposits, not JPay. Using JPay for Miami-Dade deposits will cause delays. Also, for GTL video visitation at TGK, professional visitors including attorneys must complete a separate application. Friends and family use the standard GTL ConnectNetwork registration. Allow up to 24 hours for video visit account approval.",
    ],

    faq: [
      {
        question: "What is Turner Guilford Knight (TGK) correctional center?",
        answer: "Turner Guilford Knight Correctional Center (TGK) is Miami-Dade County's largest pretrial holding facility located at 7000 Northwest 41st Street, Miami, FL 33166. TGK is operated by the Miami-Dade Corrections and Rehabilitation Department (MDCR) and houses approximately 1,300 inmates. Phone: 786-263-5600. GTL ViaPath ConnectNetwork handles phone calls and video visits.",
      },
      {
        question: "Which provider handles phone calls at Miami-Dade jails?",
        answer: "GTL ViaPath ConnectNetwork handles phone calls at all Miami-Dade county jail facilities including Turner Guilford Knight (TGK), Metro West Detention Center, and the Pre-Trial Detention Center. Create a free account at connectnetwork.com or call 877-650-4249. You need the inmate ID number to set up the account.",
      },
      {
        question: "How do I set up GTL video visitation at Turner Guilford Knight?",
        answer: "Register and create a GTL account at connectnetwork.com. Allow up to 24 hours for processing after registration. Once approved you can schedule remote video visits. For questions contact MDCR Inmate Visitation at 786-263-4119. Public visits at TGK are available Monday through Saturday. Visitors must sign in at least 15 minutes before their scheduled visit.",
      },
      {
        question: "How do I send money to someone at a Miami-Dade jail?",
        answer: "Money transfers to Miami-Dade inmate accounts go through TouchPay using facility number 233101. Deposits must include the inmate name and inmate ID number. Do not use JPay for Miami-Dade deposits. Deposits made at inmate intake are posted to the inmate trust account for commissary purchases and self-bonding.",
      },
      {
        question: "What is TGK phone calls and how do I receive them?",
        answer: "TGK phone calls are outgoing calls from inmates at Turner Guilford Knight using the GTL ConnectNetwork phone system. Create a free ConnectNetwork AdvancePay account at connectnetwork.com, add your phone number, and fund the account. The inmate must add your number to their approved call list. Call GTL at 877-650-4249 for setup help.",
      },
      {
        question: "How do I find someone in a Miami-Dade county jail?",
        answer: "Use the Miami-Dade Corrections inmate search at miamidade.gov/corrections. You can also call the Detention Office at 305-375-5100 or TGK directly at 786-263-5600. For Metro West call 786-263-7000. For general inquiries about custody status, recent transfers, or release information call 786-263-5341.",
      },
      {
        question: "What are the Miami-Dade county jail facilities?",
        answer: "Miami-Dade operates three main jail facilities. Turner Guilford Knight (TGK) at 7000 NW 41st Street Miami FL 33166, phone 786-263-5600. Metro West Detention Center at 13850 NW 41st Street Miami FL 33178, phone 786-263-7000. Pre-Trial Detention Center (PDC) at 1321 NW 13th Street Miami FL 33125. All use GTL ConnectNetwork for phone calls and video visits.",
      },
      {
        question: "Is Miami-Dade GTL video visitation available at home?",
        answer: "Yes. Miami-Dade Corrections offers remote video visitation for friends and family using GTL ConnectNetwork. Register at connectnetwork.com and allow up to 24 hours for processing. Once approved you can schedule remote video visits from home. Attorneys and professional visitors must complete a separate application. For questions call MDCR Inmate Visitation at 786-263-4119.",
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
          "GTL ViaPath ConnectNetwork is the primary phone call and video visitation provider at all Miami-Dade Corrections and Rehabilitation Department (MDCR) facilities including Turner Guilford Knight (TGK) at 786-263-5600, Metro West Detention Center, and the Pre-Trial Detention Center. Create account at connectnetwork.com or call 877-650-4249.",
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
          "Securus handles phone calls at select private correctional facilities in Miami-Dade County. For main county jail facilities including Turner Guilford Knight (TGK), Metro West, and the Pre-Trial Detention Center, GTL ConnectNetwork is the primary phone provider.",
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
        name: "Miami-Dade County Jail",
        slug: "miami-dade-county-jail",
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
      "Kings County, the borough of Brooklyn, is part of the New York City jail and correctional system rather than operating its own separate county jail. People detained in Brooklyn are typically held at Rikers Island, which is the main New York City jail complex, or at the Brooklyn Detention Complex on Atlantic Avenue. The Metropolitan Detention Center Brooklyn is a federal facility that holds pretrial and sentenced inmates under Bureau of Prisons jurisdiction. Each of these facilities operates under a different system with different providers and different communication rules, which makes it essential to know exactly which facility is involved before setting up an account.",

      "New York City jails, including those housing people from Brooklyn, have historically used GTL for phone services and video visitation. The NYC Department of Correction manages the overall system, and communication access operates under city-level contracts rather than individual facility contracts. People held at Rikers Island or the Brooklyn Detention Complex are part of the NYC DOC system. The Metropolitan Detention Center Brooklyn, by contrast, is entirely separate, it is a federal facility where inmates communicate through CorrLinks under Bureau of Prisons guidelines, and phone calls are handled through different federal contracted providers.",

      "This directory provides communication information for Kings County and Brooklyn-area correctional facilities so families can navigate the right system without unnecessary confusion. Whether you are trying to reach someone at Rikers Island through the NYC DOC system, set up messaging at the Brooklyn Detention Complex, or contact a loved one at the federal facility on 29th Street, this guide helps you identify the correct provider and process without having to search through multiple agency websites.",
    ],

    overview: [
      "Which providers do Kings County jail families use? NYC jails including those in Kings County offer free phone calls since 2019. GTL ConnectNetwork and GettingOut by Telmate are the most common providers at Kings County facilities. Rikers Island uses GTL ConnectNetwork. MDC Brooklyn is a federal facility that uses CorrLinks for messaging and ConnectNetwork for phone calls. Always confirm the specific facility before setting up any account.",
      "Are phone calls free at Kings County NYC jails? Yes. New York City eliminated jail call charges in 2019. Phone calls from all NYC Department of Corrections facilities including those in Kings County are free. You do not need a funded prepaid account to receive calls from NYC jail facilities. NYC was the first jurisdiction in the country to make jail calls free. Note that federal facilities in Brooklyn such as MDC Brooklyn are not NYC DOC facilities and are not covered by the free call program.",
      "What is the most common mistake Kings County jail families make? Confusing NYC DOC facilities with federal facilities is very common in Kings County. MDC Brooklyn is a federal Bureau of Prisons facility that is not part of the NYC jail system. Families trying to reach someone at MDC Brooklyn need CorrLinks for messaging and ConnectNetwork for phone calls which are not free. Always confirm whether the facility is NYC DOC or federal BOP before setting up any accounts.",
    ],

    faq: [
      {
        question: "Are phone calls free at Kings County NYC jails?",
        answer: "Yes. New York City eliminated jail call charges in 2019. All NYC Department of Corrections facilities including those in Kings County offer free phone calls. You do not need a prepaid account. NYC was the first jurisdiction in the country to make jail calls free. Federal facilities in Brooklyn such as MDC Brooklyn are separate from the NYC system and are not free.",
      },
      {
        question: "Which provider do I use for Kings County NYC jail phone calls?",
        answer: "GTL ConnectNetwork handles phone calls at most Kings County NYC DOC facilities including Rikers Island. Since calls are free you do not need to fund a prepaid account. Visit connectnetwork.com for account information. GettingOut by Telmate is also used at some Kings County facilities. Always confirm the specific facility and provider before setting up any account.",
      },
      {
        question: "What is the difference between NYC DOC facilities and MDC Brooklyn?",
        answer: "NYC DOC facilities such as Rikers Island AMKC are operated by the New York City Department of Corrections and offer free phone calls since 2019. MDC Brooklyn is a federal Bureau of Prisons facility that is completely separate from the NYC jail system. Federal inmates at MDC Brooklyn use CorrLinks for messaging and ConnectNetwork for phone calls which are not free and are not covered by NYC free call policy.",
      },
      {
        question: "How do I contact someone at Rikers Island?",
        answer: "Rikers Island is operated by the NYC Department of Corrections. Phone calls from Rikers are free since 2019. GTL ConnectNetwork handles communication at Rikers. The inmate must add your number to their approved contact list. You can also schedule video visits through the NYC DOC system. For general Rikers information contact NYC DOC at 718-546-0700.",
      },
      {
        question: "How do I contact someone at MDC Brooklyn?",
        answer: "MDC Brooklyn is a federal Bureau of Prisons facility. Use CorrLinks for electronic messaging. The inmate must send you a contact request from a TRULINCS terminal first. For phone calls use ConnectNetwork by GTL at connectnetwork.com. MDC Brooklyn phone calls are not free and are not covered by the NYC free call policy. Call MDC Brooklyn at 718-840-4200 for general information.",
      },
      {
        question: "How do I find someone in a Kings County jail?",
        answer: "Use the NYC DOC inmate lookup at a.ciims.nyc.gov to find someone in an NYC DOC facility including Kings County jails. Search by name to find the current facility and book and case number. For federal inmates at MDC Brooklyn use the Bureau of Prisons locator at bop.gov. For New York state prison inmates use the DOCCS lookup at doccs.ny.gov.",
      },
      {
        question: "How do I send money to someone in a Kings County NYC jail?",
        answer: "Money can be sent to NYC DOC inmate accounts through the NYC DOC website at nyc.gov/doc or through JPay. You can also send money by money order mailed to the facility. Always include the inmate book and case number on all transactions. For federal inmates at MDC Brooklyn, money transfers go through the Bureau of Prisons approved methods including MoneyGram and Western Union.",
      },
      {
        question: "Are video visits available at Kings County jails?",
        answer: "Yes. Video visits are available at NYC DOC facilities in Kings County. NYC DOC offers both in-person and video visits. Video visits can be scheduled through the NYC DOC visitation system. All visits require advance approval and must be booked in advance. Contact NYC DOC at 718-546-0700 for current video visit scheduling instructions.",
      },
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
        name: "Metropolitan Detention Center Brooklyn",
        slug: "mdc-brooklyn",
        type: "Federal Prison",
        county: "Kings County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
      {
        name: "Rikers Island",
        slug: "rikers-island",
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
      "San Diego County operates its jail system through the San Diego County Sheriff's Department. Major facilities include San Diego Central Jail, George Bailey Detention Facility, Vista Detention Facility, and East Mesa Reentry Facility. All phone, video, and email communication at San Diego County jails is handled through Smart Communications using the SmartInmate system. Contact Smart Communications customer service at 1-727-349-1561 or at smartjailmail.com.",
      "Phone calls from San Diego County jails are free for all local, long distance, and international calls. No funding is required to receive calls. You still need to create a free Smart Communications account at smartjailmail.com to be added to the approved call list. Each call is limited to 15 minutes. Calls display from the number 727-349-1561. Save this number in your contacts or some mobile carriers may flag it as spam and filter it out.",
      "Important mail notice: San Diego County no longer accepts mail sent directly to six detention facilities. All mail must be sent to the county's central Mail Processing Center rather than to the facility address. Mail sent directly to a facility is rejected and returned to the sender. Electronic messages through SmartInmate must be plain text only, limited to one page, with no pictures or attachments. Staff reviews all messages before delivery.",
    ],

    overview: [
      "Which provider do San Diego County jail families use? Smart Communications handles all phone calls, video visits, and electronic messaging at San Diego County jails through the SmartInmate system. This is different from most jails which use Securus, GTL, or JPay. If you previously had an account with another provider from a different county, you will need a new Smart Communications account for San Diego County facilities.",
      "Are phone calls free at San Diego County jails? Yes. Phone calls from San Diego County jail facilities have been free since July 1, 2021. Each call is limited to 15 minutes and calls are unlimited in number per day. No funds need to be deposited to receive calls. You still need a registered Smart Communications account at smartjailmail.com to receive calls.",
      "What is the most common mistake San Diego County families make? Missing calls because 727-349-1561 is flagged as spam is the most common problem. When San Diego County jails switched to Smart Communications, calls began displaying from this vendor number rather than a local number. Save 727-349-1561 in your contacts immediately. Check your spam or blocked calls list if you are not receiving calls from your loved one.",
    ],

    faq: [
      {
        question: "Which provider do I use for San Diego County jails?",
        answer: "San Diego County jails use Smart Communications through the SmartInmate system for phone calls, video visits, and electronic messaging. Create a free account at smartjailmail.com. For customer service call 1-727-349-1561. This is a different provider from most other jails. Do not set up a Securus, JPay, or ConnectNetwork account for San Diego County facilities.",
      },
      {
        question: "Are phone calls free at San Diego County jails?",
        answer: "Yes. Phone calls from San Diego County jail facilities have been free since July 1, 2021. Each call is limited to 15 minutes. No funds need to be deposited. You still need a free Smart Communications account at smartjailmail.com to be on the approved call list. Account creation is free and required before calls can connect.",
      },
      {
        question: "Why am I not receiving calls from San Diego County jail?",
        answer: "The most common reason is that calls from San Diego County jails display from the number 727-349-1561, which some mobile carriers flag as spam. Save 727-349-1561 in your contacts immediately. Check your blocked calls list and spam filter. Also confirm your phone number is registered and approved in your Smart Communications account at smartjailmail.com.",
      },
      {
        question: "How do I schedule a video visit at San Diego County jail?",
        answer: "Video visits must be scheduled at least one day in advance through your Smart Communications account at smartjailmail.com. Same-day visits are not available. Each incarcerated individual is permitted two video visits per week, each lasting 30 minutes. Visits are first-come, first-served. Create your account and add the inmate before attempting to schedule.",
      },
      {
        question: "Can I send mail directly to a San Diego County jail?",
        answer: "No. San Diego County no longer accepts mail sent directly to most detention facilities. All mail must be sent to the county's central Mail Processing Center, not to the facility address. Mail sent directly to the facility is rejected and returned to the sender. Check the San Diego County Sheriff's website for the current Mail Processing Center address before sending anything.",
      },
      {
        question: "How do I send electronic messages to someone at San Diego County jail?",
        answer: "Electronic messages go through Smart Communications at smartjailmail.com. Messages must be plain text only, limited to one page, with no pictures or attachments. You can send up to two messages per day and the incarcerated person can receive up to 10 messages in a 24-hour period. All messages are reviewed by staff before delivery.",
      },
      {
        question: "What happens when my loved one transfers from San Diego County jail to a California state prison?",
        answer: "When someone transfers from a San Diego County jail to a California state prison, the provider changes completely. California state prisons transitioned to Securus Technologies starting in February 2025. You will need a Securus account for state prison communication. California state prison calls are not free under the San Diego County free call program, which applies only to county facilities.",
      },
      {
        question: "How do I find someone currently in a San Diego County jail?",
        answer: "Use the San Diego County Sheriff's Office online inmate locator. You can search by name to find which facility your loved one is held in. Knowing the exact facility matters because some services and schedules vary between San Diego Central Jail, George Bailey, Vista Detention, and East Mesa facilities.",
      },
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
      "Dallas County operates its jail system through the Dallas County Sheriff's Department. The primary facility is the Lew Sterrett Justice Center at 111 West Commerce Street in downtown Dallas, with a capacity of over 7,100 inmates. The complex includes the North Tower, West Tower, and Suzanne Lee Kays Detention Facility. All phone and video communication at Dallas County facilities is handled through Securus Technologies.",
      "Phone calls from Dallas County jails are inmate-initiated only. You cannot call the jail to reach an inmate. Inmates have phone access from 5 AM to midnight unless restricted by lockdowns or disciplinary actions. Each call is limited to 30 minutes with a one-minute warning before disconnection. Inmates are allowed unlimited calls per month within the designated calling hours. To receive calls, set up a Securus AdvancePay account at securustech.net or call 1-800-844-6591.",
      "Important: The book-in number and the case number are different identifiers. The book-in number identifies the Dallas County jail booking and is the number needed for mail, deposits, and jail services. The case number identifies a court matter. Always use the book-in number for communication accounts and money deposits. Find the book-in number using the Dallas County Jail Lookup System or by calling 214-761-9025.",
    ],

    overview: [
      "Which provider do Dallas County jail families use? Securus Technologies handles all phone calls and video visits at Dallas County facilities including Lew Sterrett Justice Center. Create a Securus account at securustech.net or call 1-800-844-6591. For general jail information call 214-761-9025. For inmate lookup use the Dallas County Jail Lookup System online.",
      "What is the book-in number and why does it matter? The book-in number is assigned when someone is booked into Dallas County Jail and is different from the court case number. You need the book-in number for setting up communication accounts, money deposits, and sending mail. Using the wrong number can cause deposits and messages to fail. Find it through the official Dallas County Jail Lookup System.",
      "What is the most common mistake Dallas County families make? Confusing the book-in number with the case number is the most common mistake. These are two different numbers and the wrong one will cause your account setup or money deposit to fail. Always verify the book-in number through the official Dallas County inmate search before setting up any accounts or sending funds.",
    ],

    faq: [
      {
        question: "Which provider do I use for Dallas County Jail phone calls?",
        answer: "Securus Technologies handles all phone calls and video visits at Dallas County facilities. Create a Securus AdvancePay account at securustech.net or call 1-800-844-6591. The Securus Mobile app is available for iOS and Android. Calls are available from 5 AM to midnight. Each call is limited to 30 minutes.",
      },
      {
        question: "What is the book-in number and where do I find it?",
        answer: "The book-in number is assigned when someone is booked into Dallas County Jail. It identifies the jail booking and is different from the court case number. You need the book-in number for communication accounts, money deposits, and mail. Find it using the official Dallas County Jail Lookup System at the Dallas County website or call 214-761-9025.",
      },
      {
        question: "How do I find someone currently in Dallas County Jail?",
        answer: "Use the official Dallas County Jail Lookup System online. You can search by prisoner information, book-in number, or case number. If someone is not showing up online, there may be a processing lag after booking. Call Lew Sterrett directly at 214-761-9025 with the person's full legal name and date of birth to confirm their status.",
      },
      {
        question: "How do I send money to someone at Dallas County Jail?",
        answer: "Cash deposits can be made at kiosks located inside the jail. Online deposits can be processed through approved services. Phone deposits can be arranged by calling 1-866-345-1884. Always use the correct book-in number when making deposits. Money deposited for Dallas County Jail cannot be transferred to a Texas state prison account if the inmate is later transferred.",
      },
      {
        question: "Can I do a video visit with someone at Dallas County Jail?",
        answer: "Yes. Video visitation is available at Lew Sterrett Justice Center through Securus Technologies. Create a Securus account and schedule your video visit through the platform. You need a device with a camera and a stable internet connection. All video visits are recorded and monitored by facility staff.",
      },
      {
        question: "What happens when my loved one transfers from Dallas County Jail to a Texas state prison?",
        answer: "When someone transfers from Dallas County Jail to a Texas Department of Criminal Justice state prison, the communication changes significantly. TDCJ uses Securus Technologies for phone calls but requires separate registration through the TDCJ Friends and Family Enrollment system. Money in your Dallas County Securus account cannot be transferred to TDCJ accounts. Set up a new TDCJ registration after confirming the transfer.",
      },
      {
        question: "Why is my loved one not appearing in the Dallas County inmate search?",
        answer: "There is sometimes a processing lag of up to 24 to 72 hours after booking before someone appears in the online system. If you cannot find someone online, call Lew Sterrett directly at 214-761-9025 with the person's full legal name and date of birth. People arrested by suburban city police in Dallas County are typically transferred to Lew Sterrett within 24 to 72 hours from municipal holding.",
      },
      {
        question: "What are the visiting hours at Lew Sterrett Justice Center?",
        answer: "Contact the Dallas County Sheriff's Department directly at 214-761-9025 to confirm current visiting hours and rules as these can change. A Dallas County jail visitation card can be obtained between 8 AM and 3:30 PM. Video visitation through Securus is available as an alternative to in-person visits and can be scheduled through your Securus account.",
      },
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
        name: "Dallas County Jail",
        slug: "dallas-county-jail",
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
      "Broward County operates its jail system through the Broward Sheriff's Office in Fort Lauderdale, Florida. The Broward County Jail is one of the largest single-site jails in Florida. All phone and video communication at Broward County Jail is handled through Securus Technologies. Create a Securus account at securustech.net or call customer service at 1-800-844-6591.",
      "Inmates at Broward County Jail can only make outgoing calls. You cannot call the jail to speak with an inmate. To receive calls, set up a Securus AdvancePay prepaid account or arrange for collect calls. Collect calls are typically accepted by landlines but most cell phone providers do not accept collect calls without a prior arrangement with Securus. AdvancePay is the recommended account type for cell phone users.",
      "To send money to someone at Broward County Jail, deposits can be made online at securustech.net, by phone at 1-800-574-5747, by mailing a money order payable to Inmate Trust Account with the inmate name and booking number, or in person at the jail lobby. Always include the inmate booking number on all deposits. There is a daily limit on the amount of money that can be deposited into an inmate account.",
    ],

    overview: [
      "Which provider do Broward County jail families use? Securus Technologies handles all phone calls and video visits at Broward County Jail. Create a Securus AdvancePay account at securustech.net. Customer service is available at 1-800-844-6591. The Securus Mobile app is available for iOS and Android for managing your account and receiving calls.",
      "What is the booking number and why is it important? The booking number identifies the specific jail booking for your loved one. You need this number for setting up communication accounts, sending money, and sending mail. It is different from any court case number. Find it on the Broward Sheriff's Office inmate lookup website or by contacting the jail directly.",
      "What is the most common mistake Broward County families make? Cell phone users trying to accept collect calls is a frequent problem. Most cell phone carriers do not accept collect calls from jails without a prior arrangement with Securus. If you have a cell phone, set up an AdvancePay prepaid account instead of expecting collect calls to connect. This is the most reliable way to receive calls on a cell phone.",
    ],

    faq: [
      {
        question: "Which provider do I use for Broward County Jail phone calls?",
        answer: "Securus Technologies handles all phone calls at Broward County Jail. Create a Securus account at securustech.net or call 1-800-844-6591. Set up an AdvancePay prepaid account to receive calls on your cell phone. The Securus Mobile app is available for iOS and Android to manage your account.",
      },
      {
        question: "Can I receive collect calls from Broward County Jail on my cell phone?",
        answer: "Most cell phone carriers do not accept collect calls from jails without a prior arrangement with Securus. If you have a cell phone, set up a Securus AdvancePay prepaid account instead. AdvancePay is more reliable for cell phones and gives better per-minute rates than collect calls. Contact Securus at 1-800-844-6591 if you are unsure which account type works for your phone.",
      },
      {
        question: "How do I send money to someone at Broward County Jail?",
        answer: "Deposits can be made online at securustech.net, by phone at 1-800-574-5747, by mailing a money order payable to Inmate Trust Account with the inmate name and booking number, or in person at the jail lobby where cash, money orders, and debit cards are accepted. Always include the correct booking number. There is a daily deposit limit.",
      },
      {
        question: "What is the booking number and where do I find it?",
        answer: "The booking number identifies the specific Broward County jail booking. You need it for communication accounts, money deposits, and mail. Find it on the Broward Sheriff's Office inmate lookup website or by calling the jail directly. The booking number is different from any court case number.",
      },
      {
        question: "How do I find someone currently at Broward County Jail?",
        answer: "Use the Broward Sheriff's Office official inmate lookup website to search by name. This will show which facility the person is held in along with their booking number and other information. Have the person's full legal name ready when searching.",
      },
      {
        question: "Can I do a video visit with someone at Broward County Jail?",
        answer: "Yes. Video visitation is available at Broward County Jail through Securus Technologies. Create a Securus account and schedule your visit through the platform or the Securus Mobile app. You need a device with a camera and a stable internet connection. All video visits are recorded and monitored. Contact Securus at 1-800-844-6591 for scheduling assistance.",
      },
      {
        question: "Are attorney calls at Broward County Jail private?",
        answer: "Yes. Outgoing calls to attorneys are not monitored or recorded to protect attorney-client privilege. Before privileged calls can be made, the attorney phone number must be registered and verified with the facility or Securus Technologies. Contact the jail directly to arrange attorney number registration.",
      },
      {
        question: "What happens when my loved one transfers from Broward County Jail to a Florida state prison?",
        answer: "When someone transfers from Broward County Jail to a Florida Department of Corrections state prison, the communication providers change. Florida state prisons use JPay for messaging and a separate provider for phone calls under the FDOC contract. Contact JPay at jpay.com and confirm the new facility provider before setting up new accounts. Money in your Broward Securus account cannot be transferred to state prison accounts.",
      },
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
      "Orange County California operates its jail system through the Orange County Sheriff's Department. Major facilities include Theo Lacy Facility at 501 City Drive South in Orange, Men's Central Jail, Women's Central Jail, Intake and Release Center, and James A. Musick Facility. Phone services at Orange County jails are provided through GTL ConnectNetwork. Contact the facility at 714-935-6940 for current provider and service information.",
      "Inmates at Orange County jail facilities cannot receive incoming calls. Your loved one must initiate all calls outbound from facility phones. Calls can be collect or prepaid through GTL ConnectNetwork. Using a prepaid ConnectNetwork AdvancePay account is recommended for cell phone users as most cell carriers do not accept collect calls from jails. Create a ConnectNetwork account at connectnetwork.com to receive calls.",
      "California phone call rates have changed significantly in 2025 and 2026. Under FCC rules effective April 6, 2026, phone calls from large jails are capped at $0.11 per minute. California state prisons transitioned from ViaPath to Securus Technologies starting in February 2025. Orange County jails use GTL ConnectNetwork for county-level facilities, which is different from the Securus provider used at California state prisons.",
    ],

    overview: [
      "Which provider do Orange County California jail families use? GTL ConnectNetwork handles phone calls at Orange County jail facilities. Create a free ConnectNetwork account at connectnetwork.com. For facility-specific information call 714-935-6940. Note that Orange County county jails use GTL ConnectNetwork while California state prisons use Securus Technologies. These are separate providers requiring separate accounts.",
      "How have phone call costs changed at Orange County jails? Under FCC rules effective April 6, 2026, interstate calls from large county jails are capped at $0.11 per minute. California has also implemented broader reforms. A 15-minute call that once cost $12 or more now tops out at around $1.95 before taxes under the current rate caps. Check your ConnectNetwork account for the specific rate at your loved one's facility.",
      "What is the most common mistake Orange County families make? Setting up a Securus account instead of ConnectNetwork is the most common mistake. California state prisons switched to Securus in 2025, which leads some families to set up Securus accounts for Orange County county jails. Orange County jails use GTL ConnectNetwork, not Securus. Always confirm the specific facility and its current provider before creating any account.",
    ],

    faq: [
      {
        question: "Which provider do I use for Orange County California jail phone calls?",
        answer: "GTL ConnectNetwork handles phone calls at Orange County jail facilities including Theo Lacy, Men's Central Jail, and Women's Central Jail. Create a ConnectNetwork account at connectnetwork.com. For facility-specific information call 714-935-6940. Do not set up a Securus account for Orange County county jails as Securus serves California state prisons, not county facilities.",
      },
      {
        question: "Are phone calls free at Orange County jails?",
        answer: "Orange County has not implemented a blanket free call program for county jails as of 2026. However, FCC rules effective April 6, 2026 cap interstate calls at $0.11 per minute for large jails. A 15-minute call is capped at around $1.95 before any applicable fees. Check your ConnectNetwork account for the current rate at your specific facility.",
      },
      {
        question: "How do I find someone currently at an Orange County jail?",
        answer: "Use the Orange County Sheriff's Department inmate search tool on their official website. The search covers all major facilities including Theo Lacy, Men's Central Jail, Women's Central Jail, Intake and Release Center, and James A. Musick. You can also call 714-935-6940 directly. Have the person's full legal name and date of birth ready.",
      },
      {
        question: "My loved one is at a California state prison near Orange County. Do I use the same provider?",
        answer: "No. California state prisons transitioned from ViaPath to Securus Technologies starting in February 2025. If your loved one is in a California state prison you need a Securus account at securustech.net. Orange County county jails use GTL ConnectNetwork. These are completely different providers requiring separate accounts.",
      },
      {
        question: "How do I send money to someone at an Orange County jail?",
        answer: "Funds can be deposited online through jail-approved services, at kiosks at the facility, or by mailing a money order. Always include the inmate full name and booking number on all deposits. Contact the facility at 714-935-6940 or check the Orange County Sheriff's website for current approved deposit methods and any limits that apply.",
      },
      {
        question: "Can I do a video visit with someone at Theo Lacy or another Orange County jail?",
        answer: "Video visitation availability varies by Orange County facility. Contact the specific facility at 714-935-6940 or check your ConnectNetwork account dashboard to see whether video visits are available at your loved one's specific location. Some facilities offer in-person visits while others provide video terminals in the lobby.",
      },
      {
        question: "What is the booking number and where do I find it?",
        answer: "The booking number is assigned when someone is booked into an Orange County facility. You need it for communication accounts, money deposits, and mail. Find it through the Orange County Sheriff's Department inmate search tool online or by calling 714-935-6940. The booking number is different from any court case number.",
      },
      {
        question: "What happens when my loved one transfers from an Orange County jail to a California state prison?",
        answer: "When someone transfers from an Orange County county jail to a California state prison, the provider changes completely. California state prisons now use Securus Technologies after the transition from ViaPath in 2025. You will need a new Securus account at securustech.net. Your existing ConnectNetwork account for the county jail does not carry over to state prison facilities.",
      },
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

  "cook-county": {
    id: "c-cook",
    name: "Cook County",
    slug: "cook-county",
    stateSlug: "illinois",
    stateName: "Illinois",
    stateAbbr: "IL",
    facilityCount: 24,
    hasDetailPage: true,

    description:
      "Cook County is home to Chicago and is one of the most populous counties in the United States. Cook County Jail on California Avenue is one of the largest single-site jails in the country. GTL ViaPath ConnectNetwork handles phone calls and ViaPath handles text messaging at Cook County correctional facilities.",

    intro: [
      "Cook County is home to Chicago and is one of the most populous counties in the United States. Cook County Jail on South California Avenue is one of the largest single-site jails in the country, capable of housing thousands of individuals in custody. GTL ViaPath ConnectNetwork became the phone service provider for Cook County Jail in September 2021, replacing the previous provider Legacy Inmate Communications.",
      "Text messaging at Cook County Jail is available through ViaPath at a fee of $0.06 per message. This is separate from phone call services. To set up phone accounts, call GTL ConnectNetwork at 877-650-4249 or visit connectnetwork.com. You will need the inmate booking number to set up any communication account. Use the Cook County Sheriff's Individual in Custody Locator at cookcountysheriff.org to find the booking number and confirm the current facility.",
      "Cook County operates multiple correctional facilities in addition to the main jail on California Avenue. Always confirm which specific facility your loved one is held at before setting up accounts or sending mail. The Cook County Sheriff's Office can be reached at 773-869-7100 for general information about individuals in custody.",
    ],

    overview: [
      "Which provider do Cook County jail families use? GTL ViaPath ConnectNetwork handles phone calls at Cook County correctional facilities. Call 877-650-4249 or visit connectnetwork.com to set up a prepaid account. ViaPath handles text messaging at $0.06 per message. You need the inmate booking number for all account setup. Find it using the Individual in Custody Locator at cookcountysheriff.org.",
      "What is the booking number and where do I find it? The booking number is the identification number assigned when someone is booked into Cook County custody. It is required for phone account setup, messaging, money deposits, and mail. Find it using the Cook County Sheriff's Individual in Custody Locator at cookcountysheriff.org or by calling the Sheriff's Office at 773-869-7100.",
      "What is the most common mistake Cook County jail families make? Using an outdated provider is very common. Cook County Jail switched from Legacy Inmate Communications to GTL ViaPath ConnectNetwork in September 2021. Families who set up Legacy accounts after the switch were unable to receive calls. Always confirm the current provider at cookcountysheriff.org before setting up any account.",
    ],

    faq: [
      {
        question: "Which provider handles phone calls at Cook County Jail?",
        answer: "GTL ViaPath ConnectNetwork handles phone calls at Cook County Jail since September 2021. Call 877-650-4249 or visit connectnetwork.com to set up a prepaid account. You need the inmate booking number to set up the account. Cook County previously used Legacy Inmate Communications which is no longer active.",
      },
      {
        question: "How do I send text messages to someone at Cook County Jail?",
        answer: "Text messaging at Cook County Jail is available through ViaPath at $0.06 per message. Visit the Cook County Sheriff's phone account page at cookcountysheriff.org for the current messaging setup link. This is separate from the phone call account. You need the inmate booking number to set up messaging.",
      },
      {
        question: "How do I find someone at Cook County Jail?",
        answer: "Use the Cook County Sheriff's Individual in Custody Locator at cookcountysheriff.org. Search by name to find the booking number, current facility, and basic information. You can also call the Sheriff's Office at 773-869-7100 for assistance. Always confirm the specific facility before setting up accounts or sending mail.",
      },
      {
        question: "How do I send money to someone at Cook County Jail?",
        answer: "Money can be deposited through GTL ConnectNetwork at connectnetwork.com for phone account credits. For inmate trust account commissary deposits, check the Cook County Sheriff's website at cookcountysheriff.org for the current approved deposit methods. Always include the inmate booking number on all transactions.",
      },
      {
        question: "Are phone calls free at Cook County Jail?",
        answer: "No. Cook County Jail phone calls are not free. GTL ConnectNetwork holds the contract and charges per-minute rates subject to FCC caps effective April 2026. Rates are capped at $0.11 per minute for large jails. Illinois state prisons have a partial free call program but county jails are not included.",
      },
      {
        question: "How do I schedule a video visit at Cook County Jail?",
        answer: "Video visits at Cook County Jail can be scheduled through the GTL Friends and Family platform. You must be on the inmate's approved visitor list. Contact the Cook County Sheriff's Office at 773-869-7100 or visit cookcountysheriff.org for current video visit scheduling procedures and available time slots.",
      },
      {
        question: "What address do I use for mail to Cook County Jail?",
        answer: "The main Cook County Jail address for mail is 2700 South California Avenue, Chicago, Illinois 60608. Always include the inmate's full name and booking number on the envelope. Mail is inspected before delivery. Check cookcountysheriff.org for any current mail restrictions or changes before sending correspondence.",
      },
      {
        question: "What happens when my loved one transfers from Cook County Jail to Illinois state prison?",
        answer: "When someone transfers from Cook County Jail to an Illinois IDOC state prison, the provider changes to ICSolutions. Illinois state prisons offer a partial free calling program through Voices of Connection providing 775 free monthly minutes. Create a new ICSolutions account at icscorrections.com after confirming the transfer and obtaining the IDOC number.",
      },
    ],

    facilitiesByType: { federal: 2, state: 6, county: 14, private: 2 },

    providers: [
      {
        name: "ConnectNetwork",
        slug: "connectnetwork",
        initial: "C",
        color: "bg-teal-600",
        description:
          "GTL ViaPath ConnectNetwork handles phone calls and text messaging at Cook County Jail. Call 877-650-4249 or visit connectnetwork.com to set up an account.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for federal inmates held at facilities in the Chicago area.",
      },
      {
        name: "ICSolutions",
        slug: "icsolutions",
        initial: "I",
        color: "bg-sky-700",
        description:
          "Handles phone calls for Illinois Department of Corrections state prisons after a transfer out of Cook County Jail.",
      },
    ],

    featuredFacilities: [
      {
        name: "Cook County Jail",
        slug: "cook-county-jail",
        type: "County Jail",
        county: "Cook County",
        features: ["Phone Calls", "Text Messaging"],
      },
    ],
  },

  "maricopa-county": {
    id: "c-maricopa",
    name: "Maricopa County",
    slug: "maricopa-county",
    stateSlug: "arizona",
    stateName: "Arizona",
    stateAbbr: "AZ",
    facilityCount: 20,
    hasDetailPage: true,

    description:
      "Maricopa County includes Phoenix and is the most populous county in Arizona. The Maricopa County Sheriff's Office operates several detention centers in the Phoenix area. GTL ConnectNetwork handles phone calls and Securus handles video visits at Maricopa County detention facilities.",

    intro: [
      "Maricopa County includes Phoenix and is the most populous county in Arizona. The Maricopa County Sheriff's Office operates several detention centers including Fourth Avenue Jail at 201 S. 4th Avenue, Lower Buckeye Jail at 3250 W. Lower Buckeye Road, Estrella Jail for women, Towers Jail, and the Intake Transfer and Release center. GTL ConnectNetwork manages the inmate telephone system at Maricopa County detention facilities. Call 877-650-4249 or visit connectnetwork.com to set up an account.",
      "Phones at Maricopa County facilities are available from approximately 7:30 AM to 10:00 PM daily unless security or disciplinary restrictions are in place. Each call is limited to 20 minutes. Three-way calling is prohibited and will result in immediate disconnection. All personal calls are recorded and monitored. GTL outgoing numbers at Maricopa County are 480-448-2204 and 480-409-2926. Save these numbers in your contacts to avoid missing calls flagged as spam.",
      "Securus Video Connect handles video visits at Maricopa County facilities with onsite terminals at Fourth Avenue and Lower Buckeye jails. Remote at-home video visits are also available through Securus. You must have an active Securus account and a confirmed appointment to participate in video visits. For general Maricopa County Sheriff questions call 602-876-1000.",
    ],

    overview: [
      "Which provider do Maricopa County jail families use? GTL ConnectNetwork handles phone calls at Maricopa County Sheriff detention facilities. Call 877-650-4249 or visit connectnetwork.com. Securus handles video visits through Securus Video Connect. These are two separate accounts. Phones are available from 7:30 AM to 10:00 PM with a 20-minute call limit. Save GTL outgoing numbers 480-448-2204 and 480-409-2926 in your contacts.",
      "Why are Maricopa County calls showing as spam on my phone? GTL calls from Maricopa County facilities display from specific outgoing numbers 480-448-2204 and 480-409-2926. These numbers may be flagged as spam or robo calls by mobile carriers. To fix this, contact your cell phone carrier to unblock these numbers or manually change your spam settings to allow calls from these numbers. Saving them in your contacts also helps prevent spam filtering.",
      "What is the most common mistake Maricopa County jail families make? Not saving the GTL outgoing phone numbers is very common. Calls from Maricopa County jail come from 480-448-2204 or 480-409-2926 and are frequently flagged as spam by mobile phones. Save both numbers in your contacts immediately after setting up your ConnectNetwork account to avoid missing calls.",
    ],

    faq: [
      {
        question: "Which provider handles phone calls at Maricopa County Jail?",
        answer: "GTL ConnectNetwork handles phone calls at all Maricopa County Sheriff detention facilities. Call 877-650-4249 or visit connectnetwork.com to set up a Collect or AdvancePay account. Save GTL outgoing numbers 480-448-2204 and 480-409-2926 in your contacts to avoid missing calls flagged as spam.",
      },
      {
        question: "Why are calls from Maricopa County Jail showing as spam?",
        answer: "GTL outgoing numbers at Maricopa County are 480-448-2204 and 480-409-2926. These are frequently flagged as spam by mobile carriers. Contact your carrier to unblock these specific numbers or manually change your spam filter settings. Saving both numbers in your contacts helps prevent spam filtering.",
      },
      {
        question: "How do I schedule a video visit at Maricopa County Jail?",
        answer: "Video visits at Maricopa County use Securus Video Connect. Onsite video terminals are at Fourth Avenue and Lower Buckeye jails. Remote at-home visits are also available. Create a Securus account at securustech.net and schedule a visit online. Contact Maricopa County Sheriff at 602-876-1000 for current scheduling information.",
      },
      {
        question: "What is the call length limit at Maricopa County Jail?",
        answer: "Each call at Maricopa County detention facilities is limited to 20 minutes. Three-way calling is prohibited and results in immediate disconnection. Phones are available from approximately 7:30 AM to 10:00 PM daily unless security or disciplinary restrictions are in place. All non-legal calls are recorded and monitored.",
      },
      {
        question: "How do I find someone at Maricopa County Jail?",
        answer: "Use the Maricopa County Sheriff inmate search at the MCSO website at mcso.org. You can also call the Sheriff's main information line at 602-876-1000 or 602-876-0322 for inmate information. Always confirm which specific detention facility your loved one is in before setting up accounts or sending mail.",
      },
      {
        question: "How do I send money to someone at Maricopa County Jail?",
        answer: "Money can be deposited through GTL ConnectNetwork for phone account credits at connectnetwork.com. For inmate commissary account deposits, check the Maricopa County Sheriff website at mcso.org for current approved deposit methods and the specific facility mailing address. Always include the inmate's full name and booking number.",
      },
      {
        question: "Are phone calls free at Maricopa County Jail?",
        answer: "No. Phone calls at Maricopa County detention facilities are not free. GTL ConnectNetwork holds the contract and charges per-minute rates subject to FCC caps effective April 2026. Arizona state prisons also use a separate system through ICSolutions and are not free. Only a small number of Arizona county jails offer free calls.",
      },
      {
        question: "What happens when my loved one transfers from Maricopa County Jail to Arizona state prison?",
        answer: "When someone transfers from Maricopa County Jail to an Arizona state prison, the provider changes to ICSolutions for phone calls and Securus for messaging. Arizona also requires being on the Personal Allowed Number (PAN) list to receive calls. Create a new ICSolutions account at icscorrections.com after confirming the transfer.",
      },
    ],

    facilitiesByType: { federal: 1, state: 5, county: 12, private: 2 },

    providers: [
      {
        name: "GTL (ViaPath Technologies)",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Handles phone calls at Maricopa County Sheriff detention facilities. Call 877-650-4249 or visit connectnetwork.com to set up an account.",
      },
      {
        name: "Securus Technologies",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-700",
        description:
          "Securus Video Connect handles video visits at Fourth Avenue and Lower Buckeye jails, plus remote at-home visits.",
      },
      {
        name: "ICSolutions",
        slug: "icsolutions",
        initial: "I",
        color: "bg-sky-700",
        description:
          "Handles phone calls for Arizona state prisons after a transfer out of Maricopa County jail custody.",
      },
    ],

    featuredFacilities: [
      {
        name: "Maricopa County Jail",
        slug: "maricopa-county-jail",
        type: "County Jail",
        county: "Maricopa County",
        features: ["Phone Calls", "Video Calls"],
      },
      {
        name: "Arizona State Prison Complex Florence",
        slug: "arizona-state-prison-complex-florence",
        type: "State Prison",
        county: "Pinal County",
        features: ["Phone Calls", "Messaging"],
      },
    ],
  },

  "wayne-county-mi": {
    id: "c-wayne-mi",
    name: "Wayne County",
    slug: "wayne-county-mi",
    stateSlug: "michigan",
    stateName: "Michigan",
    stateAbbr: "MI",
    facilityCount: 14,
    hasDetailPage: true,

    description:
      "Wayne County includes Detroit and is the most populous county in Michigan. The Wayne County Criminal Justice Center at 5301 Russell Street in Detroit houses the Adult Detention Facility. GTL ConnectNetwork handles phone calls and the GTL Friends and Family Visit Now app handles video visits.",

    intro: [
      "Wayne County includes Detroit and is the most populous county in Michigan. The Wayne County Criminal Justice Center is located at 5301 Russell Street in Detroit, Michigan 48211 and houses the Adult Detention Facility. This facility spans more than one million square feet across seven buildings. GTL ConnectNetwork handles phone calls at Wayne County Criminal Justice Center. Call 877-650-4249 or the AdvancePay line at 800-483-8314 to set up an account.",
      "Video visits at Wayne County use the GTL Friends and Family Visit Now App. All social visitation is conducted via video. Persons at least 17 years old with acceptable photo identification are allowed one non-contact video visit per week for up to 30 minutes. Visitors can attend video visits through terminals at the facility or using their own smartphone, computer, or tablet. In-person visits for friends and family are currently conducted through video only.",
      "Michigan DOC state prisons use GTL ConnectNetwork for phone calls. Michigan has also implemented mail scanning at most state facilities. Wayne County Jail uses its own communication system separate from MDOC. Always confirm the specific facility type before setting up accounts. The Wayne County Sheriff inmate search is available at sheriffconnect.com.",
    ],

    overview: [
      "Which provider do Wayne County jail families use? GTL ConnectNetwork handles phone calls at Wayne County Criminal Justice Center in Detroit. Call 877-650-4249 or the AdvancePay line at 800-483-8314 or visit connectnetwork.com. GTL Friends and Family Visit Now App handles video visits. One video visit per week up to 30 minutes. Use the inmate search at sheriffconnect.com.",
      "How do video visits work at Wayne County Jail? All social visits at Wayne County are video visits only. No in-person visits are available for friends and family. Visitors must be at least 17 years old with acceptable photo ID. One video visit per week for up to 30 minutes is allowed. Connect through the GTL Friends and Family Visit Now App on your smartphone, tablet, or computer, or through terminals at the facility visitation center.",
      "What is the most common mistake Wayne County jail families make? Confusing Wayne County Jail with MDOC Michigan state prisons is common. Michigan state prisons use GTL ConnectNetwork but MDOC and Wayne County Jail are separate systems with separate accounts. Also note that all visits at Wayne County are video only. Families expecting in-person visits will be turned away.",
    ],

    faq: [
      {
        question: "Which provider handles phone calls at Wayne County Jail in Detroit?",
        answer: "GTL ConnectNetwork handles phone calls at Wayne County Criminal Justice Center in Detroit. Call 877-650-4249 or the AdvancePay support line at 800-483-8314 or visit connectnetwork.com. The facility is located at 5301 Russell Street, Detroit, MI 48211. Contact the jail at 313-224-0797 for general inmate information.",
      },
      {
        question: "How do I schedule a video visit at Wayne County Jail?",
        answer: "All social visits at Wayne County are video visits. Set up through the GTL Friends and Family Visit Now App. Visitors must be at least 17 years old with photo ID. One video visit per week for up to 30 minutes is allowed. Connect through your own smartphone, tablet, or computer, or through terminals at the facility. Contact the jail at 313-224-0797 for scheduling information.",
      },
      {
        question: "Are in-person visits available at Wayne County Jail?",
        answer: "No. All social visitation at Wayne County Criminal Justice Center is conducted via video. There are no in-person visits available for friends and family at this time. Attorneys and law enforcement may visit in person with proper credentials. Video visits are through the GTL Friends and Family Visit Now App.",
      },
      {
        question: "How do I find someone at Wayne County Jail in Detroit?",
        answer: "Use the Wayne County Sheriff inmate search at sheriffconnect.com. You can search by name to find the current facility status. The jail information line is 313-224-0797. The facility is located at 5301 Russell Street, Detroit, MI 48211. For MDOC Michigan state prison inmates use the OTIS search at michigan.gov/corrections.",
      },
      {
        question: "How do I send money to someone at Wayne County Jail?",
        answer: "Money can be deposited through GTL ConnectNetwork for phone account credits at connectnetwork.com. For commissary account deposits, contact the Wayne County jail directly at 313-224-0797 for current approved deposit methods. Always include the inmate's full name and booking number on all transactions.",
      },
      {
        question: "Are phone calls free at Wayne County Jail?",
        answer: "No. Phone calls at Wayne County Criminal Justice Center are not free. GTL ConnectNetwork holds the contract and charges per-minute rates subject to FCC caps effective April 2026. Michigan state prisons also use GTL ConnectNetwork but are a separate system. Michigan state prisons do not offer free calls.",
      },
      {
        question: "What is the mailing address for Wayne County Jail?",
        answer: "The mailing address for Wayne County Criminal Justice Center is 5301 Russell Street, Detroit, MI 48211. Include the inmate's full name and booking number on all mail. Mail is inspected before delivery. Contact the jail at 313-224-0797 before sending any packages or unusual items.",
      },
      {
        question: "What happens when my loved one transfers from Wayne County Jail to a Michigan state prison?",
        answer: "When someone transfers from Wayne County Jail to an MDOC Michigan state prison, they receive a state DOC number and the provider remains GTL ConnectNetwork but as a separate MDOC account. Michigan state prisons also have mail scanning at most facilities. Use the MDOC OTIS search at michigan.gov/corrections to find the new facility.",
      },
    ],

    facilitiesByType: { federal: 1, state: 4, county: 8, private: 1 },

    providers: [
      {
        name: "GTL (ViaPath Technologies)",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        description:
          "Handles phone calls at Wayne County Criminal Justice Center and video visits through the Friends and Family Visit Now app. Call 877-650-4249 or the AdvancePay line at 800-483-8314.",
      },
      {
        name: "CorrLinks",
        slug: "corrlinks",
        initial: "C",
        color: "bg-emerald-700",
        description:
          "Federal Bureau of Prisons email system for federal inmates held at facilities near Detroit.",
      },
    ],

    featuredFacilities: [
      {
        name: "Wayne County Jail",
        slug: "wayne-county-jail",
        type: "County Jail",
        county: "Wayne County",
        features: ["Phone Calls", "Video Calls"],
      },
      {
        name: "FCI Milan",
        slug: "fci-milan",
        type: "Federal Prison",
        county: "Washtenaw County",
        features: ["Messaging (CorrLinks)", "Phone Calls"],
      },
    ],
  },

  "hennepin-county": {
    id: "c-hennepin",
    name: "Hennepin County",
    slug: "hennepin-county",
    stateSlug: "minnesota",
    stateName: "Minnesota",
    stateAbbr: "MN",
    facilityCount: 10,
    hasDetailPage: true,

    description:
      "Hennepin County includes Minneapolis and is the most populous county in Minnesota. The Hennepin County Adult Detention Center operates at two locations in downtown Minneapolis. Securus Technologies handles phone calls and video visits at Hennepin County jail. Minnesota state prisons offer free calls since July 2023 but Hennepin County jail calls are not free.",

    intro: [
      "Hennepin County includes Minneapolis and is the most populous county in Minnesota. The Hennepin County Adult Detention Center (ADC) operates at two adjacent downtown locations: the Public Safety Facility at 401 South 4th Avenue and a secure unit inside Minneapolis City Hall at 350 South 5th Street. Both locations are near the Government Plaza light rail station. Securus Technologies handles phone calls at the Hennepin County Adult Detention Center. Call 800-844-6591 or visit securustech.net to set up an account.",
      "An important distinction for Minnesota families is that Minnesota Department of Corrections state prison calls have been free since July 2023. However, Hennepin County Jail is a county facility and is not covered by the MN DOC free call program. County jail calls through Securus are charged per minute. If your loved one is in a Minnesota state prison, calls are free. If they are at Hennepin County Jail, calls are charged through Securus.",
      "All social visiting at Hennepin County Adult Detention Center is done via video. In-person visits for the public are not available. Securus handles video visits at the facility. The main jail information line is 612-348-5112. The contact email is sheriff.jailinfo@hennepin.us. All calls except legal calls are recorded and monitored.",
    ],

    overview: [
      "Which provider do Hennepin County jail families use? Securus Technologies handles phone calls and video visits at Hennepin County Adult Detention Center in Minneapolis. Call 800-844-6591 or visit securustech.net. The jail information line is 612-348-5112. Note that Minnesota state prison calls are free since July 2023 but Hennepin County jail calls through Securus are not free.",
      "Are phone calls free at Hennepin County Jail? No. Minnesota state DOC prison calls are free since July 2023 but this does not apply to county jails. Hennepin County Jail uses Securus Technologies and calls are charged per minute subject to FCC rate caps. If your loved one has been transferred to a Minnesota state prison, calls become free. Confirm with the facility whether your loved one is in state or county custody.",
      "What is the most common mistake Hennepin County jail families make? Assuming Hennepin County jail calls are free because Minnesota state prison calls are free is very common. The MN DOC free call program applies only to state correctional facilities. Hennepin County jail is a separate county system and calls are charged through Securus. Always confirm which system your loved one is in before assuming call costs.",
    ],

    faq: [
      {
        question: "Which provider handles phone calls at Hennepin County Jail?",
        answer: "Securus Technologies handles phone calls at Hennepin County Adult Detention Center in Minneapolis. Call 800-844-6591 or visit securustech.net to set up an account. The jail information line is 612-348-5112. Calls are outgoing only from the inmate. You cannot call the jail and reach an inmate directly.",
      },
      {
        question: "Are phone calls free at Hennepin County Jail like at Minnesota state prisons?",
        answer: "No. Minnesota state DOC prison calls became free in July 2023 but Hennepin County Jail is a county facility not covered by the state free call program. Calls at Hennepin County Jail use Securus Technologies and are charged per minute subject to FCC caps effective April 2026. If your loved one transfers to a state prison, calls become free.",
      },
      {
        question: "How do I find someone at Hennepin County Jail?",
        answer: "Use the Hennepin County online inmate roster which updates hourly at the Sheriff's website. The roster shows housing status, charges, bail, and court dates. Call the jail information line at 612-348-5112 or email sheriff.jailinfo@hennepin.us. For Minnesota state prison inmates, use the MN DOC offender search at coms.doc.state.mn.us.",
      },
      {
        question: "Are in-person visits available at Hennepin County Jail?",
        answer: "No. In-person visits for the public are not currently available at Hennepin County Adult Detention Center. All social visiting is done via video. Securus handles video visits at the facility. Attorneys and law enforcement may visit in person with proper credentials. Contact the jail at 612-348-5112 for current visitation information.",
      },
      {
        question: "How do I send mail to Hennepin County Jail?",
        answer: "Send mail to: Inmate Full Name, Hennepin County Public Safety Complex, 401 South 4th Avenue, Minneapolis, MN 55415. Include the inmate's full name and return address. Content is screened for safety. Standard letters, plain photos, and simple cards are accepted. Packages must come from a publisher, mail-order bookseller, or attorney.",
      },
      {
        question: "How do I send money to someone at Hennepin County Jail?",
        answer: "Money can be deposited through Securus for phone account credits at securustech.net. For commissary deposits, contact the Hennepin County jail at 612-348-5112 for current approved deposit methods. Always include the inmate's full name and booking number on all transactions.",
      },
      {
        question: "What is the address for Hennepin County Jail?",
        answer: "Hennepin County Adult Detention Center has two locations. Public Safety Facility: 401 South 4th Avenue, Suite 100, Minneapolis, MN 55415. City Hall location: 350 South 5th Street, Minneapolis, MN 55415. Both are near the Government Plaza light rail station. Bail is accepted 24 hours a day at the Public Safety Facility.",
      },
      {
        question: "What happens when my loved one transfers from Hennepin County Jail to a Minnesota state prison?",
        answer: "When someone transfers from Hennepin County Jail to an MN DOC state prison, phone calls become free. The state prison uses a different system from Securus county jail. Search the MN DOC offender search at coms.doc.state.mn.us to confirm the new facility. Contact the new facility to be added to the approved contact list.",
      },
    ],

    facilitiesByType: { federal: 1, state: 3, county: 5, private: 1 },

    providers: [
      {
        name: "Securus Technologies",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-700",
        description:
          "Handles phone calls and video visits at Hennepin County Adult Detention Center. Call 800-844-6591 or visit securustech.net.",
      },
    ],

    featuredFacilities: [
      {
        name: "Hennepin County Jail",
        slug: "hennepin-county-jail",
        type: "County Jail",
        county: "Hennepin County",
        features: ["Phone Calls", "Video Calls"],
      },
      {
        name: "Minnesota Correctional Facility Stillwater",
        slug: "minnesota-correctional-facility-stillwater",
        type: "State Prison",
        county: "Washington County",
        features: ["Phone Calls", "Video Calls"],
      },
    ],
  },
}
