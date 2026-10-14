import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS — Batch 1 (Original 50 facilities)
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH1: Record<string, FacilityDetail> = {

  "san-quentin-state-prison": {
    id: "f-san-quentin",
    name: "San Quentin State Prison",
    slug: "san-quentin-state-prison",
    type: "state",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    countySlug: null,
    countyName: "Marin County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "San Quentin: Free Calls, Securus Setup and Inmate Messaging",
    seoDescription: "How to contact someone at San Quentin Rehabilitation Center. Phone calls from CDCR are free under SB 1008. Securus replaced ViaPath. Find messaging and visit options at 415-454-1460.",

    description:
      "San Quentin State Prison communication guide. Find messaging, video visitation, and phone options. Compare JPay and Securus services for families staying connected.",

    overview: [
      "San Quentin State Prison, located on the shores of San Francisco Bay in Marin County, is California's oldest correctional institution and one of the most well-known prisons in the United States. Opened in 1852, the facility has housed some of California's most serious offenders and has also been home to noteworthy educational and rehabilitation programs. In recent years, California has announced plans to transform the facility into a rehabilitation and education campus, which may affect future operations and communication arrangements. For now, the standard communication systems used across California Department of Corrections and Rehabilitation facilities remain in place.",

      "Communication at San Quentin is primarily handled through two platforms. JPay manages electronic messaging, photo sharing, and money transfers for incarcerated individuals at the facility, while Securus handles phone calls and video visitation. Families who want to send messages or photos need to create a JPay account, fund it with stamps, and address messages to the correct inmate ID. For phone calls, families can add funds to a Securus AdvancePay account, which allows inmates to call directly from their housing unit. Video visits are also managed through Securus and must be scheduled in advance — same-day bookings are not typically available, and slots fill up quickly around weekends and holidays.",

      "For families new to the system, the most common challenge is understanding that JPay and Securus are separate platforms requiring separate accounts. Messaging credits purchased on JPay cannot be used for phone calls or video visits, and phone funds in a Securus account cannot pay for messaging. Setting up both accounts before your first contact attempt will save significant time. The facility does not directly process communication requests — all account setup, funding, and scheduling must be done through the provider platforms directly. This guide provides direct pathways to those platforms and the most current information on available services.",
    ],

    address: "100 Main Street, San Quentin, CA 94964",
    phone: "(415) 454-1460",
    website: "https://www.cdcr.ca.gov",
    commissary: "Send money by EFT via GTL/ConnectNetwork, JPay, or Access Corrections (fee applies, posts in 1 to 3 days); or send a no-fee Lock Box money order, personal check, or cashier's check payable to JPay to JPay, 2202 South Figueroa St, Box #3001, Los Angeles, CA 90007 (max $999.99 per form, no letters or notes; personal checks held 10 business days). You can also mail a check or money order payable to CDCR to the institution (30-day hold; sender name and address required; include the inmate name and CDCR number).",
    rosterUrl: "https://www.ca.gov/departments/171/services/1188/",
    mailingAddress: "Inmate Full Legal Name, CDCR Number, Last Known Housing/Bed Number\nSan Quentin Rehabilitation Center\nSan Quentin, CA 94974",
    inmateCapacity: 3500,
    established: 1852,
    operatedBy: "California Department of Corrections and Rehabilitation (CDCR)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Primary platform for electronic messaging, photo sharing, and inmate money deposits.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-700",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Phone calls and video visitation. Manage your AdvancePay or Direct Bill account through Securus.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "JPay",
        notes: "Electronic messaging via JPay stamps. Messages are reviewed by staff before delivery.",
      },
      video: {
        status: "available",
        provider: "Securus",
        notes: "Remote video visits available. Must be scheduled in advance through Securus.",
      },
      photos: {
        status: "available",
        provider: "JPay",
        notes: "Digital photos sent through JPay. Physical mail photo restrictions apply.",
      },
      phone: {
        status: "available",
        provider: "Securus",
        notes: "Inmate-initiated calls via Securus. Fund a Securus AdvancePay account to receive calls.",
      },
      moneyTransfer: {
        status: "available",
        provider: "JPay",
        notes: "Send funds to inmate trust accounts via JPay for commissary and other purchases.",
      },
    },

    rules: [
      "All electronic messages are subject to review by facility staff before delivery.",
      "Video visits must be booked in advance through Securus. Walk-in video is not available.",
      "Photos submitted through JPay must comply with CDCR content guidelines.",
      "Phone accounts must be funded before an inmate can place a call.",
      "Senders must be on the inmate's approved contact list to exchange messages or visits.",
    ],

    faq: [
      {
        question: "What provider handles messaging at San Quentin?",
        answer:
          "JPay is the messaging provider at San Quentin State Prison. You can create a free account at jpay.com, add the inmate using their CDCR ID number, and purchase stamps to send electronic messages. Messages are typically delivered within 24–48 hours after staff review.",
      },
      {
        question: "How do I schedule a video visit at San Quentin?",
        answer:
          "Video visits at San Quentin are managed through Securus. Create an account at www.securustech.net or through the Securus Mobile app, search for San Quentin, and select an available time slot. You will need the inmate's ID number and must be on their approved visitor list. Slots should be booked at least 48 hours in advance.",
      },
      {
        question: "Can I send photos to someone at San Quentin?",
        answer:
          "Yes, digital photos can be sent through JPay. Log into your JPay account, navigate to the photo feature, and follow the upload guidelines. Photos must comply with CDCR content restrictions: no nudity, no images depicting violence, and no photos that could compromise safety or security.",
      },
      {
        question: "How do I add money to a phone account for San Quentin calls?",
        answer:
          "Phone calls at San Quentin are managed by Securus. To receive calls, set up a Securus AdvancePay account at www.securustech.net or through the Securus app using your phone number. Add funds via debit or credit card, and the inmate can call your number directly once funds are available.",
      },
      {
        question: "How do I send money directly to an inmate at San Quentin?",
        answer:
          "Money for the inmate's trust account (used for commissary purchases) is sent through JPay. Log into your JPay account, go to the Send Money section, and select San Quentin. You can transfer funds via debit card, credit card, or money order. Processing typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "pelican-bay-state-prison",
      "folsom-state-prison",
      "corcoran-state-prison",
    ],
  },

  "attica-correctional-facility": {
    id: "f-attica",
    name: "Attica Correctional Facility",
    slug: "attica-correctional-facility",
    type: "state",
    stateSlug: "new-york",
    stateName: "New York",
    stateAbbr: "NY",
    countySlug: null,
    countyName: "Wyoming County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Attica Correctional Facility: Phone Calls, Visits and Messaging",
    seoDescription: "How to contact someone at Attica Correctional Facility in NY. Set up phone calls, schedule visits by last name group, send money and messages. DIN number required for all contact.",

    description:
      "Attica Correctional Facility communication guide. Find messaging, video, and phone options for families. Compare JPay and Securus services at Attica.",

    overview: [
      "Attica Correctional Facility is a maximum-security state prison located in Wyoming County in western New York, operated by the New York State Department of Corrections and Community Supervision. Built in 1931, Attica is among the most recognized correctional facilities in the country, largely due to the September 1971 uprising that resulted in significant loss of life and led to substantial changes in correctional policy nationwide. Today, the facility continues to operate as a maximum-security institution housing individuals with serious and violent offense histories from across New York State.",

      "Communication at Attica is handled through New York State DOCCS contracts. JPay serves as the primary platform for electronic messaging and money transfers, while Securus Technologies manages phone calls for the facility. Families who need to send a message should create a JPay account and link the inmate using their New York State DIN (Department Identification Number). Messaging is available but subject to review, and response times can vary depending on facility operations. For phone calls, families can fund a Securus prepaid account at securustech.net, which allows them to receive inmate-initiated calls.",

      "Video visitation at Attica is available but more limited than at some other New York State facilities. Scheduling is managed through Securus, and families should confirm availability and booking requirements directly with the platform before making plans. In-person visits remain available at Attica under DOCCS guidelines, and many families choose to combine in-person visits with electronic communication to maintain closer contact. Money transfers for commissary purposes can be sent through JPay or through DOCCS-approved money order services. Understanding which platform handles which service is essential before starting the account setup process.",
    ],

    address: "639 Exchange Street, Attica, NY 14011",
    phone: "(585) 591-2000",
    website: "https://doccs.ny.gov",
    rosterUrl: "https://doccs.ny.gov/",
    visitingHours: "Visiting days Wednesdays and weekends, 8:45 AM to 3:00 PM (latest arrival 2:00 PM). SHU: one non-legal visit per 7-day period, 9:30 AM to 2:30 PM (latest arrival 1:30 PM).",
    mailingAddress: "Inmate Name, DIN\n639 Exchange Street\nAttica, NY 14011-0149",
    inmateCapacity: 2000,
    established: 1931,
    operatedBy: "New York State Department of Corrections and Community Supervision (DOCCS)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and inmate trust account deposits.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation scheduling for Attica Correctional Facility.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "JPay",
        notes: "Send messages via JPay using the inmate's NY State DIN number.",
      },
      video: {
        status: "limited",
        provider: "Securus",
        notes: "Video visits available but scheduling slots are limited. Book well in advance.",
      },
      photos: {
        status: "available",
        provider: "JPay",
        notes: "Digital photos via JPay. Must comply with DOCCS content guidelines.",
      },
      phone: {
        status: "available",
        provider: "Securus",
        notes: "Inmate-initiated calls via Securus. Fund a prepaid account to receive calls.",
      },
      moneyTransfer: {
        status: "available",
        provider: "JPay",
        notes: "Trust account deposits via JPay. Money orders also accepted via DOCCS mail.",
      },
    },

    rules: [
      "Inmate DIN (Department Identification Number) is required for all JPay account setup.",
      "All electronic communications are subject to monitoring and review.",
      "Video visit slots are limited. Book through Securus as early as possible.",
      "Money transfers via JPay are credited to the inmate's personal account, not phone account.",
      "Approved contact lists are required. Contact the facility directly to confirm your status.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Attica?",
        answer:
          "Create a JPay account at jpay.com, then add the inmate using their New York State DIN number. Purchase JPay stamps to compose and send electronic messages. Messages are typically reviewed by DOCCS staff before delivery, which may add some processing time.",
      },
      {
        question: "How do I set up phone calls from Attica?",
        answer:
          "Phone calls from Attica are managed by Securus Technologies. Visit securustech.net or download the Securus app to create an account. Fund a prepaid calling account linked to your phone number, and the inmate can call you from approved phones within the facility.",
      },
      {
        question: "Is video visitation available at Attica?",
        answer:
          "Yes, video visitation is available through Securus, but availability is limited and slots book up quickly. Create a Securus account, search for Attica Correctional Facility, and select an available video visit time. Being on the inmate's approved contact list is required.",
      },
      {
        question: "What is a DIN number and where do I find it?",
        answer:
          "A DIN (Department Identification Number) is New York State's unique identifier for incarcerated individuals in DOCCS custody. You can look up an inmate's DIN using the DOCCS Inmate Lookup tool on the New York State DOCCS website at doccs.ny.gov. You will need this number to set up JPay messaging.",
      },
      {
        question: "How do I send money to an Attica inmate?",
        answer:
          "Money can be sent to an Attica inmate's trust account via JPay. Log in to your JPay account, navigate to Send Money, and follow the prompts to transfer funds using a debit or credit card. Alternatively, DOCCS also accepts money orders mailed directly to the facility. Funds deposited via JPay are typically processed within one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "sing-sing-correctional-facility",
      "rikers-island",
      "sci-phoenix",
    ],
  },

  "federal-correctional-complex-coleman": {
    id: "f-fcc-coleman",
    name: "Federal Correctional Complex Coleman",
    slug: "federal-correctional-complex-coleman",
    type: "federal",
    stateSlug: "florida",
    stateName: "Florida",
    stateAbbr: "FL",
    countySlug: null,
    countyName: "Sumter County",
    securityLevel: "Low / Medium / High",
    hasDetailPage: true,
    seoTitle: "FCC Coleman: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at Federal Correctional Complex Coleman in Florida. CorrLinks for messaging. ConnectNetwork for phone calls. Federal BOP facility in Sumter County FL.",

    description:
      "Federal Correctional Complex Coleman communication guide. Find CorrLinks messaging, BOP phone, and video options for families of federal inmates in Sumter County, Florida.",

    overview: [
      "Federal Correctional Complex Coleman, located in Sumter County in central Florida, is one of the largest federal correctional campuses in the United States. The complex encompasses multiple institutions operating at different security levels — Coleman Low, Coleman Medium, Coleman II Medium, Coleman USP (United States Penitentiary), and an adjacent Federal Detention Center. Together these facilities house thousands of federal inmates under Bureau of Prisons jurisdiction. The complex is located near the town of Coleman, roughly midway between Tampa and Orlando, in a largely rural part of the state.",

      "All communication at FCC Coleman operates under Bureau of Prisons rules, which differ significantly from state or county systems. Electronic messaging is handled exclusively through CorrLinks — the federal email system operated under the TRULINCS program. To correspond electronically, families must be invited by the inmate or submit a contact request through CorrLinks after the inmate has initiated contact. CorrLinks is a paid service with per-message fees, and families need to create and fund an account at corrlinks.com. Phone calls are handled through the BOP's ITS (Inmate Telephone System), and families can add funds to a prepaid account at connectnetwork.com or through the Global Tel Link platform contracted by BOP.",

      "Video visitation at FCC Coleman is available but operates under stricter policies than most county or state systems. BOP video visits are managed through TRULINCS and typically require advance scheduling through the facility, not through a consumer app. The approval process for contacts and visitors can take longer at federal facilities than at state or county jails — families should plan several weeks in advance if possible, particularly for first-time communication setup. Mail and money transfers follow standard BOP procedures, with funds sent to the inmate's commissary account through BOP's formal money transfer processes.",
    ],

    address: "846 NE 54th Terrace, Coleman, FL 33521",
    phone: "(352) 689-4000",
    website: "https://www.bop.gov/locations/institutions/col/",
    inmateCapacity: 5000,
    established: 1993,
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
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "BOP phone and video services. Manages inmate calling accounts and trust fund deposits.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "CorrLinks",
        notes: "Available through TRULINCS/CorrLinks only. Inmate must initiate contact first.",
      },
      video: {
        status: "limited",
        provider: "ConnectNetwork",
        notes: "BOP video visits require advance scheduling and formal approval. Not available on demand.",
      },
      photos: {
        status: "limited",
        provider: undefined,
        notes: "Physical photos via mail only, subject to BOP content restrictions. No digital photo service.",
      },
      phone: {
        status: "available",
        provider: "ConnectNetwork",
        notes: "Fund a prepaid account at connectnetwork.com to receive inmate-initiated calls.",
      },
      moneyTransfer: {
        status: "available",
        provider: "ConnectNetwork",
        notes: "Trust fund deposits via BOP's online system at connectnetwork.com or by money order.",
      },
    },

    rules: [
      "Electronic messaging requires a CorrLinks account. The inmate must invite you or approve your request.",
      "All BOP communications are subject to monitoring under the Inmate Monitoring and Surveillance policy.",
      "Video visits require formal scheduling and prior approval. They are not available as drop-in services.",
      "Photos must be mailed as physical prints and comply with BOP content guidelines.",
      "Adding an individual to an inmate's contact list requires BOP staff approval and may take several weeks.",
    ],

    faq: [
      {
        question: "How do I email an inmate at FCC Coleman?",
        answer:
          "Electronic messaging at FCC Coleman is through CorrLinks, the Bureau of Prisons email system. Go to corrlinks.com and create a free account. You cannot initiate contact with an inmate. They must send you an invitation first, or you may submit a contact request if the inmate has provided your email. Once approved, you can send and receive messages for a small per-message fee.",
      },
      {
        question: "How do I add phone minutes for FCC Coleman calls?",
        answer:
          "BOP phone accounts for FCC Coleman are managed through ConnectNetwork (Global Tel Link). Visit connectnetwork.com, create an account, and add funds linked to your phone number. The inmate will call you directly from the facility phone system. You can also set up a collect call option, though prepaid accounts are usually more cost-effective.",
      },
      {
        question: "Is video visitation available at FCC Coleman?",
        answer:
          "Yes, but video visitation at federal facilities is more restricted than at county jails. BOP video visits must be scheduled in advance and require prior approval. Contact the specific institution within the FCC Coleman complex where your loved one is housed to ask about current video visitation scheduling procedures.",
      },
      {
        question: "Can I send photos to someone at FCC Coleman?",
        answer:
          "Physical photos can be sent by mail and must comply with Bureau of Prisons content guidelines — no nudity, no violence, no contraband depictions. There is no digital photo service available at federal BOP facilities like FCC Coleman. Photos are reviewed upon arrival and may be rejected if they violate facility rules.",
      },
      {
        question: "How do I send money to an FCC Coleman inmate?",
        answer:
          "Trust fund deposits for FCC Coleman inmates are processed through the BOP's online system at connectnetwork.com. You can also send a money order made payable to the inmate and mailed to the facility's trust fund office. Western Union Quick Collect and MoneyGram are also accepted by many BOP facilities. Check the BOP website for current instructions.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "miami-dade-corrections-facility",
      "florida-state-prison",
      "federal-correctional-complex-butner",
    ],
  },

  "rikers-island": {
    id: "f-rikers",
    name: "Rikers Island",
    slug: "rikers-island",
    type: "county",
    stateSlug: "new-york",
    stateName: "New York",
    stateAbbr: "NY",
    countySlug: "kings-county",
    countyName: "New York City",
    securityLevel: "Multiple",
    hasDetailPage: true,
    seoTitle: "Rikers Island: Free Calls, GTL Setup and NYC Jail Messaging",
    seoDescription: "How to contact someone at Rikers Island NYC. Phone calls from NYC jails are free since 2019. GTL ConnectNetwork handles communication. Find messaging and visit options at Rikers.",

    description:
      "Rikers Island communication guide. Find messaging, video visitation, and phone options for NYC DOC facilities. Learn how GTL services work for families in New York City.",

    overview: [
      "Rikers Island is New York City's primary jail complex, situated on a 413-acre island in the East River between Queens and the Bronx. Operated by the New York City Department of Correction, the complex houses multiple individual jails serving different populations — men, women, adolescents, and those with specific medical or mental health needs. On any given day, the island holds anywhere from 5,000 to 8,000 people, the vast majority of whom are in pretrial detention awaiting court proceedings. New York City has announced plans to close Rikers Island and replace it with a network of smaller borough-based facilities, though the transition is ongoing and the main complex remains in operation.",

      "Communication at Rikers Island operates through New York City DOC contracts with GTL. Phone calls, video visitation, and electronic messaging all run through GTL's platform, which means families only need a single account to access multiple services. For phone calls, families can set up a GTL prepaid account or a direct-bill account linked to their phone number. Video visits are available and can be scheduled remotely through the GTL app or website, which is a significant convenience for families who cannot easily travel to the island in person. Electronic messaging — referred to as IntelliMail within the GTL system — allows families to send messages that are printed and delivered to the inmate as paper correspondence.",

      "One important distinction for families is that Rikers Island houses people under NYC DOC jurisdiction, not New York State DOCCS. This means JPay — which is used for state facilities — is not the right platform for Rikers inmates. Using JPay to try to reach someone at Rikers will not work. Similarly, if a loved one is transferred from Rikers to a state facility upstate, the provider will change and a new account may be needed. Confirming the current facility and jurisdiction before setting up any accounts is always the right first step when someone is newly detained or has been transferred.",
    ],

    address: "Rikers Island, East River, New York, NY 10035",
    phone: "(212) 848-6000",
    website: "https://www.nyc.gov/site/doc",
    commissary: "Send money orders or cashier's checks by mail to the person in custody's fund account. Cash is no longer accepted by mail.",
    visitingHours: "In-person visits Wednesdays, Thursdays, Saturdays, and Sundays. Registration hours: Wednesday and Thursday 1:00 PM to 6:00 PM; Saturday and Sunday 7:00 AM to 12:00 PM. Televisits on Fridays. Visit schedule depends on the first letter of the person in custody's last name.",
    inmateCapacity: 8000,
    established: 1932,
    operatedBy: "New York City Department of Correction (NYC DOC)",

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "All Rikers Island communication services — messaging, video, phone, and money — run through GTL.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "GTL",
        notes: "IntelliMail via GTL. Messages are printed and delivered to the inmate as paper mail.",
      },
      video: {
        status: "available",
        provider: "GTL",
        notes: "Remote video visits available through GTL app. Schedule in advance for best availability.",
      },
      photos: {
        status: "limited",
        provider: undefined,
        notes: "Physical photo mail accepted subject to NYC DOC content restrictions. Digital photos not available.",
      },
      phone: {
        status: "available",
        provider: "GTL",
        notes: "Prepaid or direct-bill accounts via GTL. Inmate-initiated calls from facility phones.",
      },
      moneyTransfer: {
        status: "available",
        provider: "GTL",
        notes: "Deposits to inmate commissary accounts via GTL or AccessCorrections.",
      },
    },

    rules: [
      "All communication is through GTL. JPay and other state-system providers do not serve Rikers Island.",
      "Inmates are under NYC DOC jurisdiction, not NYS DOCCS; different rules apply than at state prisons.",
      "Electronic messages are delivered as printed paper, not directly to a device or screen.",
      "Photo mail is subject to NYC DOC inspection and content restrictions.",
      "Transferring an inmate to a state or federal facility requires setting up a new provider account.",
    ],

    faq: [
      {
        question: "What provider do I use to contact someone at Rikers Island?",
        answer:
          "All communication services at Rikers Island — phone calls, video visits, electronic messaging, and money transfers — are handled by GTL (Global Tel Link). Create a single GTL account at telmate.com or through the GTL Connect app. You will not need separate accounts for different services as long as your loved one remains at a NYC DOC facility.",
      },
      {
        question: "Can I do a video visit with someone at Rikers Island?",
        answer:
          "Yes, remote video visits are available through GTL. Log into your GTL account, navigate to the video visitation section, and search for the specific jail facility on Rikers Island where your loved one is housed. Select an available time slot and follow the scheduling prompts. You will need a device with a camera and stable internet connection.",
      },
      {
        question: "Does JPay work for Rikers Island inmates?",
        answer:
          "No. JPay is used for New York State DOCCS prisons, not for New York City DOC facilities. Rikers Island is operated by the NYC Department of Correction, which contracts with GTL for communication services. If you create a JPay account to reach someone at Rikers, it will not work. You need a GTL account instead.",
      },
      {
        question: "How do I send money to someone held at Rikers?",
        answer:
          "Funds for commissary accounts at Rikers Island can be deposited through GTL or AccessCorrections. Log in to your GTL account and navigate to the money transfer section, or visit accesscorrections.com. You can add funds via debit card, credit card, or cash at a MoneyGram location. Processing typically takes one business day.",
      },
      {
        question: "What happens to my GTL account if my loved one is transferred from Rikers to a state prison?",
        answer:
          "If your loved one is transferred from Rikers Island to a New York State DOCCS facility, your GTL account will no longer be the correct platform. You will need to create a JPay account for messaging and a Securus account for phone calls and video visits at most state facilities. Funds in your GTL account do not transfer to other providers. Contact GTL customer service about account balance options.",
      },
    ],

    relatedFacilitySlugs: [
      "attica-correctional-facility",
      "mdc-brooklyn",
      "cook-county-jail",
    ],
  },

  "cook-county-jail": {
    id: "f-cook-county",
    name: "Cook County Jail",
    slug: "cook-county-jail",
    type: "county",
    stateSlug: "illinois",
    stateName: "Illinois",
    stateAbbr: "IL",
    countySlug: null,
    countyName: "Cook County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Cook County Jail: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Cook County Jail in Chicago. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this Illinois county facility.",

    description:
      "Cook County Jail communication guide. Find phone, video, and messaging options for families. Learn how Securus services work at the Chicago jail complex.",

    overview: [
      "Cook County Jail is one of the largest single-site county jails in the United States, located in Chicago on the near west side of the city. Operated by the Cook County Sheriff's Office, the facility houses tens of thousands of people annually, the majority of whom are in pretrial detention awaiting court proceedings in the Cook County court system. The complex spans multiple divisions and buildings, with specialized units for different populations and needs. Given its scale and the constant flow of people through the system, communication access is an everyday priority for thousands of families in the Chicago area.",

      "Communication at Cook County Jail is managed through Securus Technologies, which provides phone calls, video visitation, and electronic messaging services for the facility. Families can create a Securus account at securustech.net or through the Securus app to access all available services. For phone calls, setting up a prepaid AdvancePay account or a Direct Bill account linked to your phone number allows you to receive inmate-initiated calls. Video visitation is available remotely and must be scheduled in advance — same-day booking is rarely available at this volume, so planning ahead is strongly recommended, especially around weekends and court dates.",

      "Electronic messaging at Cook County Jail is available through Securus's messaging platform, which delivers messages electronically within the facility rather than printing them as paper mail. Money transfers for commissary accounts can also be processed through Securus. Because the jail primarily holds pretrial inmates, population movement can be significant — someone booked at Cook County may be transferred to another facility after sentencing or a court decision, which could change the communication platform entirely. Verifying the current location before setting up or funding an account helps avoid paying into a system the inmate can no longer access.",
    ],

    address: "2700 S. California Avenue, Chicago, IL 60608",
    phone: "(773) 869-7100",
    website: "https://www.cookcountysheriff.org",
    rosterUrl: "https://inmatelocator.ccsheriff.org/",
    mailingAddress: "Inmate Name and ID Number (booking number)\nCook County Jail\n2700 S. California Ave.\nChicago, IL 60608",
    inmateCapacity: 6500,
    established: 1929,
    operatedBy: "Cook County Sheriff's Office",

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for all Cook County Jail communication services.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "Securus",
        notes: "Electronic messaging via Securus. Messages delivered digitally within the facility.",
      },
      video: {
        status: "available",
        provider: "Securus",
        notes: "Remote video visits available via Securus. Advance scheduling required.",
      },
      photos: {
        status: "limited",
        provider: undefined,
        notes: "Physical photos via approved mail only. Digital photo services not available.",
      },
      phone: {
        status: "available",
        provider: "Securus",
        notes: "Fund a Securus AdvancePay or Direct Bill account to receive calls.",
      },
      moneyTransfer: {
        status: "available",
        provider: "Securus",
        notes: "Commissary deposits via Securus. Processing typically takes one business day.",
      },
    },

    rules: [
      "All phone calls and messages are subject to monitoring by Cook County Sheriff's staff.",
      "Video visits must be scheduled in advance. Walk-in remote video is not available.",
      "Commissary funds and phone account funds are separate. Deposits to one account do not carry over.",
      "Inmates transferred after sentencing may require a different provider and new account setup.",
      "Senders must be on the approved contact list to exchange communications.",
    ],

    faq: [
      {
        question: "How do I set up phone calls with someone at Cook County Jail?",
        answer:
          "Phone calls from Cook County Jail are managed by Securus Technologies. Visit securustech.net or download the Securus app to create an account. Choose a prepaid AdvancePay account linked to your phone number, add funds, and the inmate can call you once the account is active. Calls are inmate-initiated. You cannot call the jail directly to speak with an inmate.",
      },
      {
        question: "Can I do a video visit with a Cook County Jail inmate?",
        answer:
          "Yes, remote video visits are available through Securus. Create a Securus account, navigate to the video visitation section, and schedule a visit at Cook County Jail using the inmate's booking number. You will need a device with a working camera. Scheduling ahead of time is strongly recommended as slots fill up quickly.",
      },
      {
        question: "How do I send money to an inmate at Cook County Jail?",
        answer:
          "Commissary account deposits at Cook County Jail are processed through Securus. Log in to your Securus account and navigate to the money transfer section, or visit the Securus website and select Cook County as the facility. You can add funds via debit card, credit card, or cash at participating retail locations.",
      },
      {
        question: "How long does someone typically stay at Cook County Jail?",
        answer:
          "Most people at Cook County Jail are in pretrial detention, meaning they have not yet been sentenced. Stays can range from days to years depending on bail status and court proceedings. After sentencing, Illinois inmates are typically transferred to an Illinois Department of Corrections state facility, which uses different communication providers than Cook County Jail.",
      },
      {
        question: "What messaging service works at Cook County Jail?",
        answer:
          "Electronic messaging at Cook County Jail is available through Securus. Create a Securus account and use the messaging feature to send messages to the inmate. Unlike some federal facilities, Securus messages at Cook County are delivered electronically rather than printed as paper mail.",
      },
    ],

    relatedFacilitySlugs: [
      "rikers-island",
      "stateville-correctional-center",
      "cuyahoga-county-jail",
    ],
  },

  "pelican-bay-state-prison": {
    id: "f-pelican-bay",
    name: "Pelican Bay State Prison",
    slug: "pelican-bay-state-prison",
    type: "state",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    countySlug: null,
    countyName: "Del Norte County",
    securityLevel: "Maximum / SHU",
    hasDetailPage: true,
    seoTitle: "Pelican Bay: Free Calls, Securus Transition and Messaging Guide",
    seoDescription: "How to contact someone at Pelican Bay State Prison in California. CDCR phone calls are free under SB 1008. Securus replaced ViaPath. Find messaging and communication options.",

    description:
      "Pelican Bay State Prison communication guide. Find JPay messaging and phone options for families. Learn about communication restrictions at this maximum-security California facility.",

    overview: [
      "Pelican Bay State Prison is a maximum-security facility located in Del Norte County in the far northern corner of California, near the Oregon border. Opened in 1989, it was designed specifically to house California's most serious and gang-affiliated offenders. The facility is perhaps best known for its Security Housing Unit, or SHU — a restrictive housing program where inmates are held in near-complete isolation for extended periods. Following legal settlements and California CDCR policy changes in the mid-2010s, the SHU program has been significantly reformed, but Pelican Bay remains one of the state's most restrictive facilities in terms of programs, privileges, and communication access.",

      "Communication options at Pelican Bay are available but more limited than at general-population California state prisons. JPay is the primary platform for electronic messaging and money transfers, as it is across the CDCR system. Families can send messages and photos through JPay using the inmate's CDCR number. Phone calls are managed by Securus and are available for most general-population inmates, though those in more restrictive housing assignments may have reduced or restricted phone access depending on their current status and programming level. Families should confirm the inmate's current housing assignment and program status, as this directly affects what communication is permitted.",

      "Video visitation at Pelican Bay is available for some inmates but can be subject to restrictions based on housing status. Remote video visits through Securus are the standard approach, but families should verify eligibility before booking. Because the facility is so remote — it is more than 350 miles from San Francisco and more than 400 miles from Los Angeles — in-person visits are logistically difficult for many families, making electronic communication options especially important. Setting up JPay and Securus accounts in advance of any visit or attempted contact is strongly recommended.",
    ],

    address: "5905 Lake Earl Drive, Crescent City, CA 95531",
    phone: "(707) 465-1000",
    website: "https://www.cdcr.ca.gov",
    commissary: "Send money by EFT via GTL/ConnectNetwork, JPay, or Access Corrections (fee applies, posts in 1 to 3 days); or send a no-fee Lock Box money order, personal check, or cashier's check payable to JPay to JPay, 2202 South Figueroa St, Box #3001, Los Angeles, CA 90007 (max $999.99 per form, no letters or notes; personal checks held 10 business days). You can also mail a check or money order payable to CDCR to the institution (30-day hold; sender name and address required; include the inmate name and CDCR number).",
    rosterUrl: "https://www.ca.gov/departments/171/services/1188/",
    visitingHours: "In-person: Friday 12:30 p.m. to 6:45 p.m., Saturday and Sunday 8:45 a.m. to 2:45 p.m. RHU visits must be scheduled; RHU hours Friday 12:00 to 3:00 p.m., Saturday and Sunday 8:15 to 11:15 a.m.",
    inmateCapacity: 3000,
    established: 1989,
    operatedBy: "California Department of Corrections and Rehabilitation (CDCR)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photos, and money transfers. Uses CDCR ID number.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-700",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation. Access may be restricted based on housing classification.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "JPay",
        notes: "Available for most inmates. SHU-assigned individuals may have restrictions.",
      },
      video: {
        status: "limited",
        provider: "Securus",
        notes: "Available for general population. Restricted housing inmates may not have video access.",
      },
      photos: {
        status: "available",
        provider: "JPay",
        notes: "Digital photos via JPay. Subject to CDCR content guidelines.",
      },
      phone: {
        status: "limited",
        provider: "Securus",
        notes: "Available for general population. Phone access restricted for some housing assignments.",
      },
      moneyTransfer: {
        status: "available",
        provider: "JPay",
        notes: "Trust account deposits via JPay for commissary and other purchases.",
      },
    },

    rules: [
      "Communication privileges may be reduced or suspended based on the inmate's housing and disciplinary status.",
      "SHU or restricted housing assignments may limit phone, video, and messaging access.",
      "All communications are monitored and subject to CDCR review.",
      "The remote location makes in-person visits logistically difficult — electronic options are especially important here.",
      "Confirm the inmate's current housing assignment before setting up or funding any account.",
    ],

    faq: [
      {
        question: "Can I message someone in the Pelican Bay SHU?",
        answer:
          "Messaging access at Pelican Bay depends on the inmate's current housing assignment and status. General population inmates can use JPay. Those in the Security Housing Unit or other restrictive housing may have limited or suspended messaging privileges. Contact CDCR's inmate locator or the facility directly to confirm current communication access for your loved one.",
      },
      {
        question: "How do I set up messaging at Pelican Bay?",
        answer:
          "Create a JPay account at jpay.com and add the inmate using their CDCR identification number. Purchase JPay stamps to compose messages. Given the remote location of the facility, electronic messaging is the most practical communication option for most families.",
      },
      {
        question: "Are phone calls available at Pelican Bay?",
        answer:
          "Phone calls at Pelican Bay are managed by Securus. General population inmates have access to facility phones, and families can fund a Securus prepaid account to receive calls. However, phone access can be restricted for inmates in disciplinary housing or those with specific program restrictions. The facility's extremely remote location also affects inmate count and program availability.",
      },
      {
        question: "Is video visitation available at Pelican Bay?",
        answer:
          "Remote video visitation is available for eligible inmates through Securus. However, given the higher-security nature of the facility, video visit availability may be more limited than at other California state prisons. Families should create a Securus account and confirm video visit eligibility for their specific loved one before booking.",
      },
      {
        question: "How do I send money to someone at Pelican Bay?",
        answer:
          "Trust account deposits for Pelican Bay inmates are processed through JPay. Log in, navigate to Send Money, and select Pelican Bay State Prison. Funds go to the inmate's trust account for commissary purchases. Securus also accepts phone account funding separately if the inmate has phone access.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "san-quentin-state-prison",
      "folsom-state-prison",
      "high-desert-state-prison",
    ],
  },

  "folsom-state-prison": {
    id: "f-folsom",
    name: "Folsom State Prison",
    slug: "folsom-state-prison",
    type: "state",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    countySlug: null,
    countyName: "Sacramento County",
    securityLevel: "Level II / IV",
    hasDetailPage: true,
    seoTitle: "Folsom Prison: Free Calls, Securus Transition and Messaging Guide",
    seoDescription: "How to contact someone at Folsom State Prison in California. CDCR phone calls are free under SB 1008. Securus replaced ViaPath. Find messaging and communication options at Folsom.",

    description:
      "Folsom State Prison communication guide. Find JPay, Securus messaging, video, and phone options for families. Learn how to stay connected with inmates at California's historic Folsom facility.",

    overview: [
      "Folsom State Prison is one of California's most historically significant correctional facilities, located in the foothills of the Sierra Nevada about 20 miles northeast of Sacramento in Sacramento County. Opened in 1880, it is the second-oldest prison in California and housed the state's death row for many decades. The facility became widely known through Johnny Cash's 1968 live album recorded there. Today, Folsom houses male inmates at Level II and Level IV security classifications under the California Department of Corrections and Rehabilitation, with a reputation for active educational and vocational programming compared to higher-security facilities.",

      "Communication at Folsom operates through the standard CDCR provider contracts. JPay handles electronic messaging, photo sharing, and money transfers for inmates at the facility. Families can send messages and digital photos through their JPay account using the inmate's CDCR identification number. Securus manages phone calls and video visitation. For phone calls, families set up a Securus AdvancePay or Direct Bill account linked to their phone number. Video visits are available remotely through Securus and can be scheduled in advance through the Securus website or app. Compared to higher-security facilities like Pelican Bay, Folsom has broader communication access given its lower-security Level II population.",

      "One practical note for families: Sacramento County and the broader Sacramento area have good transit access to Folsom, making in-person visits more feasible than at remote facilities. However, many families still rely primarily on electronic communication between in-person visits, and having active JPay and Securus accounts allows for more frequent contact. Money transfers through JPay for commissary are a common way families support incarcerated loved ones with personal items beyond what the state provides. Understanding both platforms — JPay for messaging and money, Securus for phone and video — gives families the full range of available options.",
    ],

    address: "300 Prison Road, Represa, CA 95671",
    phone: "(916) 985-2561",
    website: "https://www.cdcr.ca.gov",
    commissary: "Send money by EFT via GTL/ConnectNetwork, JPay, or Access Corrections (fee applies, posts in 1 to 3 days); or send a no-fee Lock Box money order, personal check, or cashier's check payable to JPay to JPay, 2202 South Figueroa St, Box #3001, Los Angeles, CA 90007 (max $999.99 per form, no letters or notes; personal checks held 10 business days). You can also mail a check or money order payable to CDCR to the institution (30-day hold; sender name and address required; include the inmate name and CDCR number).",
    rosterUrl: "https://www.ca.gov/departments/171/services/1188/",
    visitingHours: "In-person visiting on Friday, Saturday, and Sunday. Schedule through the GTL visitation app; arrive no more than 30 minutes before processing time.",
    mailingAddress: "Inmate Name, CDCR Number\nP.O. Box 715071\nRepresa, CA 95671",
    inmateCapacity: 3100,
    established: 1880,
    operatedBy: "California Department of Corrections and Rehabilitation (CDCR)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account money deposits.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-700",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Phone calls and remote video visitation. AdvancePay or Direct Bill accounts accepted.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "JPay",
        notes: "Full JPay messaging available. Requires CDCR ID number.",
      },
      video: {
        status: "available",
        provider: "Securus",
        notes: "Remote video visits via Securus. Schedule in advance through the Securus website or app.",
      },
      photos: {
        status: "available",
        provider: "JPay",
        notes: "Digital photo submission through JPay. Standard CDCR content guidelines apply.",
      },
      phone: {
        status: "available",
        provider: "Securus",
        notes: "Inmate-initiated phone calls via Securus. Fund AdvancePay account to receive calls.",
      },
      moneyTransfer: {
        status: "available",
        provider: "JPay",
        notes: "Trust account and phone account deposits available through JPay and Securus respectively.",
      },
    },

    rules: [
      "All electronic messages and calls are subject to CDCR monitoring and review.",
      "JPay (messaging/money) and Securus (phone/video) are separate accounts. Funds do not transfer between them.",
      "Photos submitted via JPay must comply with CDCR content guidelines.",
      "Video visits must be scheduled in advance through Securus.",
      "Inmate-initiated calls only. Families cannot call the facility to speak with an inmate directly.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Folsom State Prison?",
        answer:
          "Electronic messaging at Folsom is through JPay. Create a free account at jpay.com, add the inmate using their CDCR ID number, and purchase stamps to send messages. Messages are typically reviewed by CDCR staff and delivered within 24 to 48 hours.",
      },
      {
        question: "How do I set up video visitation at Folsom?",
        answer:
          "Video visits at Folsom State Prison are managed by Securus. Create an account at www.securustech.net or through the Securus app, search for Folsom State Prison, and select an available time slot. Video visits must be scheduled in advance. Same-day bookings are not available. You will need a device with a camera and the inmate's CDCR number.",
      },
      {
        question: "Can I send photos to someone at Folsom?",
        answer:
          "Yes, digital photos can be sent through JPay. After logging in to your account, navigate to the photo section and upload your image. Photos must comply with CDCR content guidelines: no inappropriate content, no depictions of violence, and no images that could compromise safety. Approved photos are typically delivered within a few business days.",
      },
      {
        question: "How do I add money for phone calls from Folsom?",
        answer:
          "Phone calls from Folsom are handled by Securus. Set up a Securus AdvancePay account at www.securustech.net or through the app using your phone number. Add funds, and the inmate can call your number directly from facility phones. Calls are inmate-initiated only.",
      },
      {
        question: "What is the difference between JPay and Securus, and do I need both?",
        answer:
          "JPay handles messaging, photo sharing, and money transfers for the inmate's trust account. Securus handles phone calls and video visitation. They are completely separate platforms with separate accounts. If you want to use all available communication options at Folsom, you will need accounts on both platforms. Funds on JPay cannot be used for phone calls, and Securus phone funds cannot be used for messaging.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "san-quentin-state-prison",
      "pelican-bay-state-prison",
      "corcoran-state-prison",
    ],
  },

  "sing-sing-correctional-facility": {
    id: "f-sing-sing",
    name: "Sing Sing Correctional Facility",
    slug: "sing-sing-correctional-facility",
    type: "state",
    stateSlug: "new-york",
    stateName: "New York",
    stateAbbr: "NY",
    countySlug: null,
    countyName: "Westchester County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Sing Sing: Free NY State Calls, Messaging and Visit Guide",
    seoDescription: "How to contact someone at Sing Sing Correctional Facility in Ossining NY. New York state prison calls are free. GTL ConnectNetwork handles communication. DIN number required.",

    description:
      "Sing Sing Correctional Facility communication guide. Find JPay messaging and Securus phone options for families. Learn how to stay connected with inmates at Sing Sing in Ossining, New York.",

    overview: [
      "Sing Sing Correctional Facility is a maximum-security state prison located in the village of Ossining in Westchester County, New York, approximately 30 miles north of New York City along the Hudson River. Operated by the New York State Department of Corrections and Community Supervision, the facility was established in 1826 and takes its name from the Sint Sinck Native American tribe that inhabited the area. Sing Sing has housed some of the most notable names in American criminal history and remains a landmark in discussions of the American correctional system. Today it houses maximum-security adult male inmates and has been recognized for active programming and education initiatives.",

      "Communication at Sing Sing follows New York State DOCCS contracts. JPay is the primary platform for electronic messaging, photo sharing, and trust account money transfers. Families create a JPay account and link an inmate using their DOCCS DIN number to begin correspondence. Messages are subject to staff review before delivery. Phone calls are managed by Securus Technologies — families can set up a Securus prepaid account at securustech.net to fund calls and receive inmate-initiated phone contact. Video visitation is also available through Securus, which manages both phone and video services under the DOCCS contract.",

      "Sing Sing's location in Westchester County makes it one of the more accessible state facilities for families in the New York City metro area compared to upstate facilities like Attica. Many families combine in-person visits with JPay messaging and Securus phone calls to maintain more regular contact. If your loved one is transferred between state facilities — a common occurrence within DOCCS — the provider will remain the same (JPay for messaging, Securus for phone), as these contracts are system-wide rather than facility-specific. This means accounts and contact lists you establish for Sing Sing should carry over to other DOCCS facilities without needing a full re-setup.",
    ],

    address: "354 Hunter Street, Ossining, NY 10562",
    phone: "(914) 941-0108",
    website: "https://doccs.ny.gov",
    rosterUrl: "https://doccs.ny.gov/",
    visitingHours: "Visiting days Wednesdays and weekends, 8:00 AM to 3:00 PM. SHU: one non-legal visit per 7-day period during normal visitation hours (week Thursday to Wednesday).",
    mailingAddress: "Inmate Name, DIN\n354 Hunter Street\nOssining, NY 10562-5442",
    inmateCapacity: 1800,
    established: 1826,
    operatedBy: "New York State Department of Corrections and Community Supervision (DOCCS)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Requires NY State DIN number.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the NY DOCCS statewide contract.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "JPay",
        notes: "Full JPay messaging. Requires DIN number. Messages reviewed before delivery.",
      },
      video: {
        status: "available",
        provider: "Securus",
        notes: "Remote video visits via Securus. Schedule in advance through the Securus platform.",
      },
      photos: {
        status: "available",
        provider: "JPay",
        notes: "Digital photos via JPay. DOCCS content guidelines apply.",
      },
      phone: {
        status: "available",
        provider: "Securus",
        notes: "Inmate-initiated calls via Securus. Fund a prepaid account to receive calls.",
      },
      moneyTransfer: {
        status: "available",
        provider: "JPay",
        notes: "Trust account deposits through JPay. Money orders also accepted via DOCCS mail.",
      },
    },

    rules: [
      "Use the DIN (Department Identification Number) for all communications, not a name or date of birth alone.",
      "Electronic messages are reviewed by DOCCS staff before reaching the inmate.",
      "JPay handles messaging and money; Securus handles phone and video. Separate accounts are required.",
      "DOCCS contacts and visitor lists apply system-wide and carry over if the inmate is transferred.",
      "Inmate-initiated calls only via Securus — you cannot call the facility to speak with an inmate.",
    ],

    faq: [
      {
        question: "How do I start messaging someone at Sing Sing?",
        answer:
          "Create a JPay account at jpay.com and locate the inmate using their New York State DIN number. Purchase JPay stamps to compose and send messages. Messages are reviewed by DOCCS staff and typically delivered within 24 to 48 hours. The inmate can reply using stamps from their JPay account.",
      },
      {
        question: "How do I set up phone calls from Sing Sing?",
        answer:
          "Phone calls from Sing Sing are managed by Securus Technologies. Visit securustech.net or use the Securus app to create a prepaid account linked to your phone number. Add funds and the inmate can call you directly from facility phones. Calls are inmate-initiated. You cannot call in to speak with an inmate.",
      },
      {
        question: "Is Sing Sing closer to New York City than other state prisons?",
        answer:
          "Yes. Sing Sing is one of the most accessible maximum-security state facilities for New York City families, located about 30 miles north in Ossining. It is reachable by Metro-North from Grand Central Terminal. This makes in-person visits more practical than at upstate facilities like Attica or Dannemora, which require hours of travel.",
      },
      {
        question: "If my loved one is transferred from Sing Sing to another DOCCS facility, do I need new accounts?",
        answer:
          "Generally no. JPay and Securus both serve all DOCCS facilities statewide, so your accounts, contact list, and message history should carry over when an inmate is transferred within the New York State system. You may need to update the facility name when scheduling visits, but you typically do not need to start over from scratch.",
      },
      {
        question: "How do I send money to a Sing Sing inmate?",
        answer:
          "Trust account deposits for Sing Sing are processed via JPay. Log in to your JPay account, navigate to Send Money, and select Sing Sing Correctional Facility. Add funds via debit card or credit card. DOCCS also accepts money orders mailed directly to the facility. Processing via JPay typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "attica-correctional-facility",
      "mdc-brooklyn",
      "fci-ray-brook",
    ],
  },

  "miami-dade-corrections-facility": {
    id: "f-miami-dade",
    name: "Miami-Dade Corrections Facility",
    slug: "miami-dade-corrections-facility",
    type: "county",
    stateSlug: "florida",
    stateName: "Florida",
    stateAbbr: "FL",
    countySlug: "miami-dade-county",
    countyName: "Miami-Dade County",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "Miami-Dade Jail: Securus Phone, GTL Video and TouchPay Money",
    seoDescription: "How to contact someone at Miami-Dade Corrections. Securus for phone calls at 972-734-1111. GTL ConnectNetwork for video visits. TouchPay for money transfers at 1-866-232-1899.",

    description:
      "Miami-Dade Corrections Facility communication guide. Find GTL phone, video, and messaging options for families. Learn how to stay connected at Miami-Dade County detention facilities.",

    overview: [
      "Miami-Dade Corrections and Rehabilitation is the county agency responsible for operating the detention and corrections system in Miami-Dade County, Florida. The agency runs multiple facilities across the county, including the Turner Guilford Knight Correctional Center — the primary intake and pre-trial facility — and the Pre-Trial Detention Center in downtown Miami. The system serves one of the most diverse populations in the country, with significant Spanish-speaking and multilingual communities, and the department provides some bilingual support through its services. The Miami-Dade jail system handles both short-term pre-trial detention and post-conviction sentences for misdemeanor and some felony offenders.",

      "Communication at Miami-Dade county facilities is managed through GTL, which provides phone calls, video visitation, and electronic messaging under the county's provider contract. Families can create a single GTL account to access all available services. For phone calls, set up a GTL prepaid account linked to your phone number to receive inmate-initiated calls. Remote video visits are available and can be scheduled through the GTL platform — they are especially useful for families who live outside Miami-Dade or who have transportation challenges. Electronic messaging through GTL allows families to send messages that are delivered digitally at participating facilities within the system.",

      "If your loved one is transferred after sentencing from a Miami-Dade county facility to a Florida Department of Corrections state prison, you will need to switch to JPay for messaging and money transfers. State facilities use JPay under a separate FDOC contract, not GTL. Families who have been using a GTL account at the county level will need to create a new JPay account when this transition happens. Checking the facility type and jurisdiction before setting up any account is the most reliable way to avoid funding a platform that no longer applies to your situation.",
    ],

    address: "7000 NW 41st Street, Miami, FL 33166",
    phone: "(305) 368-2500",
    website: "https://www.miamidade.gov/corrections",
    rosterUrl: "https://www8.miamidade.gov/Apps/mdcr/InmateSearch/",
    inmateCapacity: 4500,
    established: 1960,
    operatedBy: "Miami-Dade Corrections and Rehabilitation Department",

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for all Miami-Dade county facility communication services.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "GTL",
        notes: "Electronic messaging available through GTL's platform at participating county facilities.",
      },
      video: {
        status: "available",
        provider: "GTL",
        notes: "Remote video visits available. Schedule in advance through GTL.",
      },
      photos: {
        status: "limited",
        provider: undefined,
        notes: "Physical photo mail accepted subject to MDCR content restrictions. No digital photo service.",
      },
      phone: {
        status: "available",
        provider: "GTL",
        notes: "Fund a GTL prepaid account to receive inmate-initiated calls.",
      },
      moneyTransfer: {
        status: "available",
        provider: "GTL",
        notes: "Commissary deposits via GTL or AccessCorrections.",
      },
    },

    rules: [
      "All calls and messages are monitored by Miami-Dade Corrections staff.",
      "GTL serves county facilities. If transferred to a state prison, JPay is required instead.",
      "Video visits must be scheduled in advance through GTL.",
      "Phone and commissary funds are separate accounts. Deposits do not carry over between them.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I call or message someone at a Miami-Dade county jail?",
        answer:
          "All communication services at Miami-Dade county facilities are through GTL. Create a GTL account at telmate.com or through the GTL Connect app. You can use a single account for phone calls, video visits, and messaging. Phone accounts require you to fund a prepaid account linked to your number before the inmate can call you.",
      },
      {
        question: "Can I do a video visit with someone in Miami-Dade custody?",
        answer:
          "Yes, remote video visits are available through GTL at Miami-Dade county facilities. Log into your GTL account, navigate to video visitation, and select the facility where your loved one is housed. Schedule a time slot in advance. Same-day availability is not guaranteed and slots fill quickly around weekends.",
      },
      {
        question: "Does JPay work at Miami-Dade county jails?",
        answer:
          "No. JPay is used for Florida Department of Corrections state facilities, not for Miami-Dade county jails. Miami-Dade county facilities use GTL. If your loved one is transferred from a county facility to a state prison after sentencing, you will then need a JPay account. Until that transfer happens, GTL is the correct platform.",
      },
      {
        question: "How do I send money to someone in Miami-Dade county custody?",
        answer:
          "Commissary deposits for Miami-Dade county facility inmates are processed through GTL or AccessCorrections. Log into your GTL account and navigate to the money transfer section, or visit accesscorrections.com. Funds can be added via debit or credit card, or through cash at participating locations.",
      },
      {
        question: "What happens to communication when someone is transferred to a Florida state prison?",
        answer:
          "After sentencing and transfer to a Florida Department of Corrections state facility, GTL is no longer the correct provider. You will need to create a JPay account for messaging, photo sharing, and money transfers. The phone provider at FDOC state prisons may also change. GTL account balances do not transfer to JPay. Contact GTL to request a refund of remaining phone funds if needed.",
      },
    ],

    relatedFacilitySlugs: [
      "federal-correctional-complex-coleman",
      "florida-state-prison",
      "broad-river-correctional-institution",
    ],
  },

  "harris-county-jail": {
    id: "f-harris-county",
    name: "Harris County Jail",
    slug: "harris-county-jail",
    type: "county",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    countySlug: "harris-county",
    countyName: "Harris County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Harris County Jail: Securus Phone, JPay Money and Mail Info",
    seoDescription: "How to contact someone at Harris County Jail in Houston TX. Securus handles phone calls. Mail goes to San Antonio TX processing center. SPN number required. Call 713-755-5000.",

    description:
      "Harris County Jail communication guide. Find Securus phone, video, and messaging options for families in Houston. Learn how to stay connected at the Harris County jail complex.",

    overview: [
      "Harris County Jail is the detention facility operated by the Harris County Sheriff's Office in Houston, Texas. With a capacity of approximately 9,000 and a daily population that often approaches that number, it is among the largest county jail systems in the United States. The main facility complex is located at 1200 Baker Street in downtown Houston and includes multiple buildings that house both pre-trial detainees and individuals serving short sentences. The jail processes an enormous volume of new bookings daily, making it one of the most active detention systems in the country. Harris County also operates satellite detention facilities that expand total county-wide capacity.",

      "Communication at the Harris County Jail is provided through Securus Technologies, which handles phone calls, video visitation, and electronic messaging under the county contract. Families can create a Securus account at securustech.net to access all of these services. For phone calls, a Securus AdvancePay account funded with your phone number allows the inmate to call you directly from facility phones. Remote video visits are available and must be scheduled in advance through the Securus platform — they are a practical option for families who want to maintain visual contact without navigating the logistics of an in-person visit at the downtown facility. Electronic messaging through Securus is also available at Harris County.",

      "One note for families in Houston: Harris County Jail is specifically a county facility, and the providers there are distinct from those used at Texas Department of Criminal Justice state prisons. If someone is convicted and transferred to a TDCJ state prison, the communication providers will change — JPay and GTL are the primary platforms at TDCJ state facilities, not Securus. Families should verify the current facility and jurisdiction before funding any account, especially in the period following a sentencing hearing when transfers can happen within days. Confirming the current location through the Harris County inmate search tool is the most reliable first step.",
    ],

    address: "1200 Baker Street, Houston, TX 77002",
    phone: "(713) 755-7900",
    website: "https://www.harriscountysheriff.org",
    visitingHours: "Tuesday to Sunday: 1:00 PM to 5:00 PM and 7:30 PM to 10:00 PM. No visitation on Monday. Last scheduled visit begins at 9:30 PM. Schedule varies by housing floor.",
    inmateCapacity: 9000,
    established: 1953,
    operatedBy: "Harris County Sheriff's Office",

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for all Harris County Jail communication services.",
      },
    ],

    communication: {
      messaging: {
        status: "available",
        provider: "Securus",
        notes: "Electronic messaging via Securus platform. Messages monitored by jail staff.",
      },
      video: {
        status: "available",
        provider: "Securus",
        notes: "Remote video visits available. Schedule in advance through the Securus platform.",
      },
      photos: {
        status: "limited",
        provider: undefined,
        notes: "Physical photo mail subject to Harris County content restrictions. No digital service.",
      },
      phone: {
        status: "available",
        provider: "Securus",
        notes: "Fund a Securus AdvancePay account to receive inmate-initiated calls.",
      },
      moneyTransfer: {
        status: "available",
        provider: "Securus",
        notes: "Commissary deposits via Securus. Separate from phone account funds.",
      },
    },

    rules: [
      "All calls, messages, and video visits are subject to monitoring by Harris County Sheriff's staff.",
      "Securus serves Harris County Jail. If transferred to a TDCJ state facility, JPay/GTL is required.",
      "Phone account funds and commissary funds are maintained in separate accounts.",
      "Video visits must be scheduled in advance. No walk-in or same-day remote video is available.",
      "Senders must be on the inmate's approved contact list to communicate.",
    ],

    faq: [
      {
        question: "How do I set up phone calls from Harris County Jail?",
        answer:
          "Phone calls from Harris County Jail are managed by Securus Technologies. Visit securustech.net or use the Securus mobile app to create an account. Set up a prepaid AdvancePay account linked to your phone number, add funds, and the inmate can call you directly. Calls are inmate-initiated. You cannot call the jail to speak with a specific person.",
      },
      {
        question: "Can I do a remote video visit at Harris County Jail?",
        answer:
          "Yes, remote video visits are available through Securus. Create or log into your Securus account, navigate to video visitation, and search for Harris County Jail. Select an available time slot and follow the scheduling prompts. You will need a device with a camera and a stable internet connection. Scheduling a visit at least 24 hours in advance is recommended.",
      },
      {
        question: "How do I send money to someone in Harris County Jail?",
        answer:
          "Commissary deposits for Harris County Jail are processed through Securus. Log in to your account and navigate to the money transfer section. Funds can be added via debit or credit card. Note that phone account funds (for receiving calls) and commissary funds are separate. You may need to fund both accounts depending on your communication needs.",
      },
      {
        question: "What changes if my loved one is transferred to a Texas state prison?",
        answer:
          "If your loved one is convicted and transferred from Harris County Jail to a TDCJ state prison, Securus will no longer be the correct provider. Texas Department of Criminal Justice state facilities primarily use JPay for messaging and money transfers, and GTL or ICSolutions for phone services. You will need to create new accounts on those platforms. Remaining Securus account balances do not transfer. Contact Securus for refund options.",
      },
      {
        question: "How do I find out if someone is currently in Harris County Jail?",
        answer:
          "Harris County maintains an online inmate search tool through the Harris County Sheriff's Office website at harriscountysheriff.org. You can search by name to confirm whether someone is currently in county custody, which facility they are housed in, and their booking information. Verifying the current location before setting up any communication account will save time and prevent funding the wrong provider.",
      },
    ],

    relatedFacilitySlugs: [
      "cook-county-jail",
      "miami-dade-corrections-facility",
      "rikers-island",
    ],
  },

  "adx-florence": {
    id: "f-adx-florence",
    name: "ADX Florence",
    slug: "adx-florence",
    type: "federal",
    stateSlug: "colorado",
    stateName: "Colorado",
    stateAbbr: "CO",
    countySlug: null,
    countyName: "Fremont County",
    securityLevel: "Administrative Maximum",
    hasDetailPage: true,
    seoTitle: "ADX Florence: CorrLinks Messaging and Phone Guide for Families",
    seoDescription: "How to contact someone at ADX Florence supermax in Colorado. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Phone limited to 300 minutes per month at federal supermax.",

    description:
      "ADX Florence communication guide. Learn how CorrLinks messaging and BOP phone services work at the nation's only federal supermax prison in Florence, Colorado.",

    overview: [
      "ADX Florence, formally the United States Penitentiary Administrative Maximum Facility, sits in the foothills of south-central Colorado in Fremont County, roughly two hours south of Denver. Opened in 1994, it is the only facility in the federal prison system operating at the administrative maximum security level. The Bureau of Prisons built it specifically to house individuals who posed serious safety or management challenges that standard maximum-security penitentiaries could not contain. The population is small — generally between 350 and 500 people — but includes some of the most extensively monitored federal prisoners in the country. Most inmates at ADX have been transferred from other BOP institutions after serious incidents rather than arriving directly from court.",
      "Communication at ADX Florence follows Bureau of Prisons rules, but the restrictions go further than at any other federal facility. Electronic messaging runs through CorrLinks, the BOP's TRULINCS system, and requires the inmate to have you on their approved contact list before any correspondence is possible. At ADX, that approval process can take significantly longer than at other BOP facilities — sometimes months — because each contact request goes through a more thorough review. Access to CorrLinks is also tied directly to each inmate's current privilege level, which is determined by behavior and program participation. An inmate who has recently lost privileges may have messaging access suspended or reduced.",
      "Phone access at ADX is among the most restricted in the entire federal system. Many housing units permit only a handful of calls per month, and some inmates have no phone access at all depending on their current program status. Remote video visitation is not available at ADX Florence. For most families, CorrLinks messaging is the most consistent and reliable communication option, provided the contact approval has been completed. Confirming the inmate's current access status directly with the facility before setting up or funding any account is strongly recommended. In-person visits are permitted but require advance approval and are conducted under close supervision.",
    ],

    address: "5880 State Highway 67 South, Florence, CO 81226",
    phone: "(719) 784-9464",
    website: "https://www.bop.gov/locations/institutions/flm/",
    commissary: "BOP Trust Fund: send money via MoneyGram, Western Union, or money order to the Federal Bureau of Prisons processing center in Des Moines, Iowa. Do not send money to the facility address.",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    mailingAddress: "INMATE NAME & REGISTER NUMBER\nUSP Florence ADMAX\nU.S. Penitentiary\nPO Box 8500\nFlorence, CO 81226",
    inmateCapacity: 500,
    established: 1994,
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
        notes: "BOP electronic messaging via TRULINCS. Contact approval is required and may take longer than at other BOP facilities.",
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
        notes: "BOP phone system and trust fund deposits. Phone access is highly restricted at ADX Florence.",
      },
    ],

    communication: {
      messaging: { status: "limited", provider: "CorrLinks", notes: "Available but subject to privilege level. Contact approval required before any messaging can begin." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at ADX Florence." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions. No digital photo service." },
      phone: { status: "limited", provider: "ConnectNetwork", notes: "Extremely restricted. Many inmates have very few or no phone privileges depending on housing unit." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order process." },
    },

    rules: [
      "All contact — mail, CorrLinks, and phone — requires prior approval. Contact list additions take longer than at most BOP facilities.",
      "CorrLinks access depends on the inmate's current privilege level and may be suspended for disciplinary reasons.",
      "Phone calls are strictly limited. Some housing units permit no inmate-initiated calls at all.",
      "Video visitation is not offered at ADX Florence under any circumstances.",
      "In-person visits require advance approval and are conducted under strict security conditions.",
    ],

    faq: [
      {
        question: "Can I email someone at ADX Florence?",
        answer: "Yes, CorrLinks is the messaging platform. However, the inmate must first have you added to their approved contact list, and that process takes longer at ADX than at other BOP facilities. Once approved, go to corrlinks.com to create an account and begin correspondence. The inmate must initiate or approve your contact request through the TRULINCS system.",
      },
      {
        question: "Are phone calls available at ADX Florence?",
        answer: "Phone access at ADX Florence is highly restricted. Most inmates are limited to very few calls per month, and some have no phone access depending on their housing unit and privilege level. Confirm the inmate's current status directly with the facility before setting up a ConnectNetwork account to avoid funding an account you may not be able to use.",
      },
      {
        question: "Is video visitation available at ADX Florence?",
        answer: "No. Remote video visitation is not available at ADX Florence. In-person visits are allowed but must be scheduled well in advance and require formal approval. The facility is in a remote part of Colorado, which makes in-person visits logistically difficult for most families.",
      },
      {
        question: "How long does it take to get approved as a contact at ADX Florence?",
        answer: "Contact approval at ADX Florence typically takes longer than at other federal facilities because each request undergoes a more detailed review. Families should expect the process to take weeks to months rather than days. Starting the approval process as early as possible is strongly recommended.",
      },
      {
        question: "How do I send money to someone at ADX Florence?",
        answer: "Trust fund deposits for ADX Florence inmates are processed through ConnectNetwork at connectnetwork.com, or by money order mailed to the BOP's designated lockbox. Western Union Quick Collect and MoneyGram are also accepted at most BOP facilities. Funds go to the inmate's trust account for commissary purchases.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "usp-leavenworth",
      "federal-correctional-complex-terre-haute",
      "ohio-state-penitentiary",
    ],
  },

  "usp-leavenworth": {
    id: "f-usp-leavenworth",
    name: "USP Leavenworth",
    slug: "usp-leavenworth",
    type: "federal",
    stateSlug: "kansas",
    stateName: "Kansas",
    stateAbbr: "KS",
    countySlug: null,
    countyName: "Leavenworth County",
    securityLevel: "High",
    hasDetailPage: true,
    seoTitle: "USP Leavenworth: CorrLinks Messaging and ConnectNetwork Phone",
    seoDescription: "How to contact someone at USP Leavenworth in Kansas. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP high security facility in Leavenworth KS.",

    description:
      "USP Leavenworth communication guide. Find CorrLinks messaging and ConnectNetwork phone options for families of federal inmates at this historic Kansas penitentiary.",

    overview: [
      "United States Penitentiary Leavenworth is a high-security federal prison located in Leavenworth County, Kansas, about 25 miles northwest of Kansas City. It is one of the oldest active federal penitentiaries in the country, having opened in 1906 on a site where military prisoners had been held since the 1870s. The facility's distinctive dome and imposing architecture have made it one of the most recognizable federal prisons in American history. Today, USP Leavenworth operates as a high-security institution housing adult male federal inmates, managed by the Bureau of Prisons. The facility also has a satellite minimum-security camp on the same grounds.",
      "Like all BOP facilities, USP Leavenworth uses CorrLinks for electronic messaging and the BOP's inmate telephone system — accessible through ConnectNetwork — for phone calls. Families new to the federal system often expect the process to mirror what they have experienced with state or county jails, but BOP communication works differently. For CorrLinks, the inmate must initiate contact or approve your request before any messaging is possible. For phone calls, you fund a prepaid account through ConnectNetwork linked to your phone number, and the inmate calls you from facility phones. Separate accounts are needed for each service.",
      "USP Leavenworth does not offer remote video visitation. In-person visits are permitted and must be arranged through standard BOP visitor approval procedures, which require submitting a visitor application and waiting for background review before being added to the inmate's approved visitor list. Because Leavenworth is within reasonable driving distance of Kansas City, in-person visits are more accessible for many Midwest families than visits to more remote federal institutions. Families new to the BOP system should review the Bureau of Prisons website for current visiting rules and any updates to phone or messaging procedures before beginning the setup process.",
    ],

    address: "1300 Metropolitan Avenue, Leavenworth, KS 66048",
    phone: "(913) 682-8700",
    website: "https://www.bop.gov/locations/institutions/lvn/",
    commissary: "BOP Trust Fund: send money via MoneyGram, Western Union, or money order to the Federal Bureau of Prisons processing center in Des Moines, Iowa. Do not send money to the facility address.",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    mailingAddress: "Inmate Full Name, Register Number\nU.S. Penitentiary\nP.O. Box 1000\nLeavenworth, KS 66048",
    inmateCapacity: 1700,
    established: 1906,
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
        notes: "Federal electronic messaging via TRULINCS/CorrLinks. Inmate must initiate or approve contact.",
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
        notes: "BOP phone system. Fund a prepaid account at connectnetwork.com to receive inmate-initiated calls.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available via CorrLinks. Inmate must approve contact before messaging begins." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at USP Leavenworth." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content guidelines. No digital photo platform." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls via BOP phone system. Fund a ConnectNetwork prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or money order to BOP lockbox." },
    },

    rules: [
      "CorrLinks contact requires inmate initiation or approval. You cannot simply create an account and send a message.",
      "All BOP communications are subject to monitoring under standard Bureau of Prisons policies.",
      "Remote video visitation is not offered at USP Leavenworth.",
      "Visitor approval requires submitting a BP-629 form and passing a background check. Allow several weeks.",
      "Phone and commissary accounts are funded separately through ConnectNetwork.",
    ],

    faq: [
      {
        question: "How do I start messaging someone at USP Leavenworth?",
        answer: "Go to corrlinks.com and create a free account. You cannot initiate contact directly. The inmate must either send you an invitation from the TRULINCS terminal inside the facility or approve a contact request you submit. Once approved, both parties can send and receive messages for a per-message fee charged to the sender.",
      },
      {
        question: "How do I set up phone calls from USP Leavenworth?",
        answer: "Phone calls from USP Leavenworth are handled through ConnectNetwork, the BOP's calling platform. Create an account at connectnetwork.com and add funds linked to your phone number. The inmate will call your number from facility phones. You cannot call the facility to speak with an inmate directly.",
      },
      {
        question: "Is video visitation available at USP Leavenworth?",
        answer: "No. USP Leavenworth does not offer remote video visitation. In-person visits are the alternative, and they require advance approval through the BOP visitor application process. Visit bop.gov for current procedures and required forms.",
      },
      {
        question: "Can I send photos to someone at USP Leavenworth?",
        answer: "Physical photographs can be sent by regular mail and must comply with BOP content guidelines — no nudity, no violence, and no images that could compromise security. There is no digital photo upload service at federal BOP facilities. Photos are inspected upon arrival.",
      },
      {
        question: "How do I send money to a USP Leavenworth inmate?",
        answer: "Funds for the inmate's trust account can be deposited through ConnectNetwork at connectnetwork.com. You can also send a money order made payable to the inmate via the BOP's national mail processing lockbox. Western Union Quick Collect and MoneyGram are also accepted. Allow one to three business days for funds to post.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "adx-florence",
      "federal-correctional-complex-terre-haute",
      "federal-correctional-complex-butner",
    ],
  },

  "federal-correctional-complex-butner": {
    id: "f-fcc-butner",
    name: "Federal Correctional Complex Butner",
    slug: "federal-correctional-complex-butner",
    type: "federal",
    stateSlug: "north-carolina",
    stateName: "North Carolina",
    stateAbbr: "NC",
    countySlug: null,
    countyName: "Granville County",
    securityLevel: "Low / Medium / High",
    hasDetailPage: true,
    seoTitle: "FCC Butner: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at Federal Correctional Complex Butner in North Carolina. CorrLinks for messaging. ConnectNetwork for phone calls. Find providers for this federal BOP facility.",

    description:
      "Federal Correctional Complex Butner communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this North Carolina complex.",

    overview: [
      "Federal Correctional Complex Butner is a multi-institution federal prison campus located in Granville County, North Carolina, about 20 miles north of Durham. The complex includes several separate institutions operating at different security levels — FCI Butner Low, FCI Butner Medium I, FCI Butner Medium II, and FCI Butner High — as well as a Federal Medical Center that provides specialized healthcare for federal inmates with serious medical or mental health needs. The medical center component gives FCC Butner a distinct character among federal complexes. Families should confirm which specific institution their loved one is housed in, as each operates somewhat independently within the broader complex.",
      "Communication across all FCC Butner institutions follows standard Bureau of Prisons rules. CorrLinks handles electronic messaging through the TRULINCS system. Families need to create a CorrLinks account and wait for the inmate to initiate or approve contact before correspondence can begin. Phone calls are managed through ConnectNetwork, the BOP's calling platform — families fund a prepaid account linked to their phone number to receive inmate-initiated calls. Neither service requires a separate account setup per institution within the complex, so if an inmate is transferred between Butner institutions, existing accounts should remain usable.",
      "The medical center at FCC Butner can affect communication in ways that differ from standard penitentiaries. Inmates housed in the medical center may have communication schedules or access that differs from those in the general-population institutions depending on their treatment program or housing assignment. Families whose loved one is in the FMC component should confirm current access levels with BOP staff before expecting the standard communication schedule. For inmates in the low, medium, or high security institutions, communication access broadly follows standard BOP rules, and the process for setting up CorrLinks and ConnectNetwork is the same as at any other federal facility.",
    ],

    address: "Old NC 75, Butner, NC 27509",
    phone: "(919) 575-4541",
    website: "https://www.bop.gov/locations/institutions/but/",
    inmateCapacity: 4000,
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
        notes: "Federal electronic messaging for all FCC Butner institutions. Inmate must initiate or approve contact.",
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
        notes: "BOP phone and trust fund services. Same account works across all institutions within the complex.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available across all FCC Butner institutions. Contact approval required." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCC Butner." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only. No digital photo service at BOP facilities." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls via BOP phone system. Fund ConnectNetwork to receive calls." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order." },
    },

    rules: [
      "Confirm the specific institution within FCC Butner before contacting the facility — each operates independently.",
      "CorrLinks contact requires inmate initiation or approval. You cannot message first.",
      "Inmates in the Federal Medical Center may have different communication schedules based on their treatment program.",
      "Remote video visitation is not available at FCC Butner.",
      "Visitor approval requires BOP application and background review. Allow several weeks before planning a visit.",
    ],

    faq: [
      {
        question: "How do I know which institution within FCC Butner my loved one is in?",
        answer: "The BOP inmate locator at bop.gov/inmateloc will show the specific institution — Butner Low, Medium I, Medium II, High, or the Federal Medical Center. Knowing the specific institution matters for scheduling visits and understanding communication schedules, particularly for inmates at the medical center.",
      },
      {
        question: "How do I set up CorrLinks messaging at FCC Butner?",
        answer: "Create a free account at corrlinks.com. The inmate must send you an invitation or approve your contact request through the TRULINCS system inside the facility. Once approved, you can send and receive electronic messages for a per-message fee. The process is the same across all FCC Butner institutions.",
      },
      {
        question: "How do phone calls work at FCC Butner?",
        answer: "Inmates at FCC Butner use ConnectNetwork for phone calls. Create an account at connectnetwork.com and add funds linked to your phone number. The inmate will call you directly from facility phones. You cannot initiate calls to the inmate.",
      },
      {
        question: "Does the Federal Medical Center at Butner have different communication rules?",
        answer: "Potentially yes. Inmates housed in the medical component may have communication schedules or restrictions tied to their treatment program or housing assignment. The standard BOP platforms — CorrLinks and ConnectNetwork — still apply, but access times and frequency may differ. Confirm current access with BOP staff if your loved one is in the FMC.",
      },
      {
        question: "How do I send money to a FCC Butner inmate?",
        answer: "Use ConnectNetwork at connectnetwork.com to deposit funds into the inmate's trust account. You can also mail a money order to the BOP's processing lockbox using instructions on bop.gov. Western Union Quick Collect and MoneyGram are also accepted. Allow one to three business days for processing.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "federal-correctional-complex-coleman",
      "wake-county-detention-center",
      "federal-correctional-complex-petersburg",
    ],
  },

  "fci-danbury": {
    id: "f-fci-danbury",
    name: "FCI Danbury",
    slug: "fci-danbury",
    type: "federal",
    stateSlug: "connecticut",
    stateName: "Connecticut",
    stateAbbr: "CT",
    countySlug: null,
    countyName: "Fairfield County",
    securityLevel: "Low / Camp",
    hasDetailPage: true,
    seoTitle: "FCI Danbury: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at FCI Danbury in Connecticut. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility for female inmates in Danbury CT.",

    description:
      "FCI Danbury communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this Connecticut low-security facility.",

    overview: [
      "Federal Correctional Institution Danbury is a low-security federal prison located in Fairfield County in southwestern Connecticut, serving both a main facility population and a minimum-security satellite camp on the same grounds. The facility has housed both male and female populations at different points in its history and has operated under Bureau of Prisons management since it opened in 1940. FCI Danbury is located within a reasonable distance of both New York City and Hartford, making it somewhat more accessible for families in the northeastern United States than many other federal institutions. At lower security levels, inmates generally have broader access to communication services than at high-security or administrative-maximum facilities.",
      "Communication at FCI Danbury follows standard BOP rules. CorrLinks provides electronic messaging through the TRULINCS system, and families must wait for the inmate to initiate or approve contact before any correspondence can begin. Phone calls operate through ConnectNetwork, the BOP's calling platform. Because FCI Danbury is a lower-security facility, inmates typically have broader access to facility phones and more frequent communication opportunities compared to higher-security BOP institutions. Families can generally expect a more routine communication schedule here than at penitentiaries like ADX Florence or USP Leavenworth.",
      "One important note for families: if your loved one is housed at the satellite camp rather than the main FCI, confirm this distinction when setting up accounts, as the two share the same BOP facility code but may have slightly different day-to-day schedules. Neither the FCI nor the camp offers remote video visitation — in-person visits remain the standard visit format for BOP facilities. The visitor approval process requires submitting a BP-629 application and passing a background review, which can take several weeks, so starting that process early is worthwhile for anyone planning an in-person visit.",
    ],

    address: "33 1/2 Pemberton Road, Danbury, CT 06811",
    phone: "(203) 312-5100",
    website: "https://www.bop.gov/locations/institutions/dan/",
    inmateCapacity: 1100,
    established: 1940,
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
        notes: "Federal messaging via TRULINCS/CorrLinks. Inmate must initiate or approve contact.",
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
        notes: "BOP phone system and trust fund deposits. Lower-security status allows more frequent phone access.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available. Lower security means more routine access compared to higher-security BOP facilities." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Danbury." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls. Lower-security inmates typically have more frequent phone access." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order process." },
    },

    rules: [
      "CorrLinks contact requires inmate initiation. Create your account first, then wait for the inmate's invitation.",
      "Confirm whether your loved one is in the main FCI or the satellite camp, as schedules can differ.",
      "Remote video visitation is not available. In-person visits require advance approval and a BP-629 application.",
      "All BOP communications are monitored under standard Bureau of Prisons policy.",
      "Phone and commissary accounts are funded separately through ConnectNetwork.",
    ],

    faq: [
      {
        question: "How do I start messaging someone at FCI Danbury?",
        answer: "Create a free account at corrlinks.com. You cannot send a message first. The inmate must send you an invitation from the TRULINCS terminal or approve a contact request you submit through the system. Once approved, both parties can exchange messages for a small per-message fee.",
      },
      {
        question: "How do phone calls work at FCI Danbury?",
        answer: "Phone calls from FCI Danbury use ConnectNetwork. Create an account at connectnetwork.com and add funds linked to your phone number. The inmate will call you directly. At lower-security facilities like FCI Danbury, inmates tend to have broader access to facility phones than at higher-security institutions.",
      },
      {
        question: "Is FCI Danbury or the satellite camp the correct location?",
        answer: "Both are on the same grounds and share a BOP facility code. The BOP inmate locator at bop.gov/inmateloc will show the specific unit. The satellite camp is minimum security. Communication platforms are the same for both, but day-to-day schedules may differ between the two.",
      },
      {
        question: "Can I visit someone at FCI Danbury in person?",
        answer: "Yes, in-person visits are available. You must submit a visitor application (BP-629 form) to the facility and pass a background review before being added to the inmate's approved visitor list. Allow several weeks for processing. Visit bop.gov for current forms and procedures.",
      },
      {
        question: "How do I send money to a FCI Danbury inmate?",
        answer: "Trust fund deposits are processed through ConnectNetwork at connectnetwork.com. You can also mail a money order using the BOP lockbox instructions at bop.gov. Western Union Quick Collect and MoneyGram are also accepted. Processing typically takes one to three business days.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "mdc-brooklyn",
      "fci-ray-brook",
      "mci-cedar-junction",
    ],
  },

  "mdc-brooklyn": {
    id: "f-mdc-brooklyn",
    name: "MDC Brooklyn",
    slug: "mdc-brooklyn",
    type: "federal",
    stateSlug: "new-york",
    stateName: "New York",
    stateAbbr: "NY",
    countySlug: "kings-county",
    countyName: "Kings County",
    securityLevel: "Administrative",
    hasDetailPage: true,
    seoTitle: "MDC Brooklyn: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at Metropolitan Detention Center Brooklyn NY. CorrLinks for messaging. ConnectNetwork for phone calls. Federal BOP facility in Brooklyn NY. Call 718-840-4200.",

    description:
      "MDC Brooklyn communication guide. Find CorrLinks messaging and BOP phone options for families of federal detainees at the Metropolitan Detention Center in Brooklyn, New York.",

    overview: [
      "The Metropolitan Detention Center Brooklyn is a federal detention facility operated by the Bureau of Prisons in the Sunset Park neighborhood of Brooklyn, in Kings County, New York. Opened in 1994, MDC Brooklyn primarily houses pretrial detainees — people who have been charged with federal crimes and are awaiting trial — along with some sentenced individuals serving shorter terms. Because of its location in New York City and its role in federal prosecutions handled by the Eastern District of New York, MDC Brooklyn frequently houses high-profile defendants during federal cases. On any given day, the population includes people at various stages of the federal legal process, from initial detention through sentencing.",
      "Communication at MDC Brooklyn follows Bureau of Prisons rules, though the pretrial nature of much of the population introduces some important differences from standard federal prisons. CorrLinks is used for electronic messaging, but access for pretrial inmates may be subject to court orders or attorney-imposed restrictions in some cases. Families should confirm whether their loved one has been cleared for general communication before setting up accounts, particularly if the case is actively ongoing. Phone calls run through ConnectNetwork, and families can fund a prepaid account to receive inmate-initiated calls from the facility.",
      "MDC Brooklyn does not offer remote video visitation. In-person visits must be arranged through the standard BOP visitor approval process, but given the detention center's role in active prosecutions, visit scheduling can sometimes be more complex than at a standard federal prison. The facility is accessible by subway from Manhattan and other parts of the city, which makes in-person visits more practical for New York area families than visits to more distant BOP institutions. If a pretrial detainee is later sentenced and transferred to a federal prison elsewhere, the communication platform will remain CorrLinks and ConnectNetwork, but accounts may need to be updated to reflect the new facility.",
    ],

    address: "80 29th Street, Brooklyn, NY 11232",
    phone: "(718) 840-4200",
    website: "https://www.bop.gov/locations/institutions/bro/",
    commissary: "BOP Trust Fund: send money via MoneyGram, Western Union, or money order to the Federal Bureau of Prisons processing center in Des Moines, Iowa. Do not send money to the facility address.",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    mailingAddress: "INMATE NAME & REGISTER NUMBER\nMDC Brooklyn\nMetropolitan Detention Center\nP.O. Box 329002\nBrooklyn, NY 11232",
    inmateCapacity: 1500,
    established: 1994,
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
        notes: "Federal messaging via TRULINCS/CorrLinks. Pretrial defendants may have court-ordered communication restrictions.",
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
        notes: "BOP phone system and trust fund deposits. Fund a prepaid account at connectnetwork.com.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available but may be restricted by court order for some pretrial detainees. Confirm status first." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at MDC Brooklyn." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls. Some pretrial detainees may have call restrictions." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order." },
    },

    rules: [
      "Pretrial detainees may have communication restrictions imposed by the court. Confirm status before setting up accounts.",
      "CorrLinks contact requires inmate initiation or approval through the TRULINCS system.",
      "Remote video visitation is not available at MDC Brooklyn.",
      "If a detainee is sentenced and transferred, update your ConnectNetwork and CorrLinks accounts to the new facility.",
      "All BOP communications are monitored under standard Bureau of Prisons policy.",
    ],

    faq: [
      {
        question: "How do I message someone at MDC Brooklyn?",
        answer: "CorrLinks is the messaging platform. Create a free account at corrlinks.com and wait for the inmate to invite you or approve your contact request. One important note: pretrial defendants may have communication restrictions tied to their case. If you are not receiving an invitation, it may mean the inmate cannot yet send messages. Confirm their communication status first.",
      },
      {
        question: "How do phone calls work at MDC Brooklyn?",
        answer: "Phone calls from MDC Brooklyn use ConnectNetwork. Create an account at connectnetwork.com, add funds linked to your phone number, and the inmate will call you from facility phones. Some pretrial detainees may have restrictions on calls. If calls are not coming through, ask the inmate or their attorney whether there is a court order limiting communication.",
      },
      {
        question: "Can I visit someone at MDC Brooklyn in person?",
        answer: "Yes, but you must be on the inmate's approved visitor list. Submit a visitor application to MDC Brooklyn and allow time for the background review. The facility is accessible by subway (D/N/R train to 36th Street in Brooklyn). In-person visits are the primary alternative to electronic communication since video visitation is not available.",
      },
      {
        question: "What happens to communication if my loved one is transferred from MDC Brooklyn to a federal prison?",
        answer: "CorrLinks and ConnectNetwork are used system-wide across BOP facilities. Your accounts carry over when an inmate is transferred. You may need to update the facility within the CorrLinks or ConnectNetwork platform, but you do not need to create new accounts from scratch.",
      },
      {
        question: "How do I send money to someone at MDC Brooklyn?",
        answer: "Deposits for the trust account go through ConnectNetwork at connectnetwork.com. You can also use the BOP money order process or services like Western Union Quick Collect and MoneyGram. Funds process in one to three business days.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "fci-ray-brook",
      "rikers-island",
      "attica-correctional-facility",
    ],
  },

  "federal-correctional-complex-terre-haute": {
    id: "f-fcc-terre-haute",
    name: "Federal Correctional Complex Terre Haute",
    slug: "federal-correctional-complex-terre-haute",
    type: "federal",
    stateSlug: "indiana",
    stateName: "Indiana",
    stateAbbr: "IN",
    countySlug: null,
    countyName: "Vigo County",
    securityLevel: "Low / Medium / USP",
    hasDetailPage: true,
    seoTitle: "FCC Terre Haute: CorrLinks Messaging and ConnectNetwork Phone",
    seoDescription: "How to contact someone at Federal Correctional Complex Terre Haute in Indiana. CorrLinks for messaging. ConnectNetwork for phone calls. Federal BOP facility with death row.",

    description:
      "Federal Correctional Complex Terre Haute communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this Indiana complex.",

    overview: [
      "Federal Correctional Complex Terre Haute is a multi-institution federal prison campus located in Vigo County in west-central Indiana, roughly 75 miles west of Indianapolis. The complex includes FCI Terre Haute (medium security), a minimum-security satellite camp, and the United States Penitentiary Terre Haute (USP), which is a high-security federal penitentiary. The USP component has held the federal death row for male inmates and has been the site of federal executions. Because the complex houses multiple security levels, families need to confirm which specific institution their loved one is assigned to, as rules and communication schedules can differ between USP Terre Haute and the medium-security FCI.",
      "Communication follows Bureau of Prisons rules across all institutions within the complex. CorrLinks handles electronic messaging through the TRULINCS system, and ConnectNetwork manages phone calls. For inmates in the USP, communication access may be more restricted than at the FCI or camp, particularly for those on death row or in special housing units. The process for setting up accounts is the same regardless of which institution within the complex is involved — create a CorrLinks account and wait for the inmate to initiate contact, and fund a ConnectNetwork prepaid account to receive phone calls.",
      "The Terre Haute area is roughly accessible from several Midwest population centers, including Indianapolis, Chicago, and St. Louis, though the complex is located on the western edge of Indiana in a more rural setting. In-person visits require advance approval through the BOP visitor process and should be arranged well in advance. Families whose loved one is housed in the USP rather than the FCI should be aware that visiting and communication procedures at high-security penitentiaries involve additional screening steps. Remote video visitation is not available at any institution within FCC Terre Haute.",
    ],

    address: "4200 Bureau Road North, Terre Haute, IN 47808",
    phone: "(812) 238-1531",
    website: "https://www.bop.gov/locations/institutions/tha/",
    commissary: "BOP Trust Fund: send money via MoneyGram, Western Union, or money order to the Federal Bureau of Prisons processing center in Des Moines, Iowa. Do not send money to the facility address.",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    visitingHours: "Saturday, Sunday, Monday, and federal holidays, 8:00 a.m. to 3:00 p.m.",
    mailingAddress: "INMATE NAME & REGISTER NUMBER\nFCI Terre Haute\nFederal Correctional Institution\nP.O. Box 33\nTerre Haute, IN 47808",
    inmateCapacity: 3500,
    established: 1940,
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
        notes: "Federal messaging for all FCC Terre Haute institutions. USP inmates may have more limited access.",
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
        notes: "BOP phone and trust fund services. Phone access in the USP may differ from the FCI or camp.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available across the complex. USP death row inmates may have more restricted access." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCC Terre Haute." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Available across the complex. USP inmates may have fewer calls permitted per month." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order." },
    },

    rules: [
      "Confirm which institution — FCI, camp, or USP — your loved one is assigned to before contacting the facility.",
      "USP Terre Haute inmates, particularly those on death row, face stricter communication limits than FCI inmates.",
      "CorrLinks contact requires inmate initiation. Remote video is not available.",
      "All BOP communications are monitored under standard Bureau of Prisons surveillance policy.",
      "Visitor approval for the USP involves additional screening steps compared to the FCI.",
    ],

    faq: [
      {
        question: "How do I find out if my loved one is in the USP or the FCI at Terre Haute?",
        answer: "Use the BOP inmate locator at bop.gov/inmateloc. It shows the specific institution within the complex. The distinction matters because USP Terre Haute has stricter communication and visit rules than FCI Terre Haute or the satellite camp.",
      },
      {
        question: "How do I set up messaging at FCC Terre Haute?",
        answer: "Create a free account at corrlinks.com. The inmate must invite you or approve your contact request through the TRULINCS system. Once approved, you can exchange messages for a small per-message fee. For USP inmates, confirm that messaging access is currently active, as it may be restricted based on privilege level.",
      },
      {
        question: "Are phone calls available at FCC Terre Haute?",
        answer: "Yes, for most inmates. Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds linked to your phone number. USP inmates may have fewer phone calls permitted per month than FCI inmates. Confirm current phone access with the facility if calls are not coming through.",
      },
      {
        question: "Is video visitation available at FCC Terre Haute?",
        answer: "No. Remote video visitation is not offered at any institution within FCC Terre Haute. In-person visits are the alternative. Visitor approval requires submitting a BP-629 application, which must be processed before any visit. For the USP, allow additional time for the more thorough background review.",
      },
      {
        question: "How do I send money to a FCC Terre Haute inmate?",
        answer: "Trust fund deposits are processed through ConnectNetwork at connectnetwork.com, or by money order using the BOP lockbox system described at bop.gov. Western Union Quick Collect and MoneyGram are also accepted. Processing takes one to three business days.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "adx-florence",
      "indiana-state-prison",
      "federal-correctional-complex-butner",
    ],
  },

  "fci-milan": {
    id: "f-fci-milan",
    name: "FCI Milan",
    slug: "fci-milan",
    type: "federal",
    stateSlug: "michigan",
    stateName: "Michigan",
    stateAbbr: "MI",
    countySlug: null,
    countyName: "Washtenaw County",
    securityLevel: "Low / Camp",
    hasDetailPage: true,
    seoTitle: "FCI Milan: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at FCI Milan in Michigan. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP low security facility for male inmates in Milan MI.",

    description:
      "FCI Milan communication guide. Find CorrLinks messaging and ConnectNetwork phone options for families of federal inmates at this low-security Michigan facility.",

    overview: [
      "Federal Correctional Institution Milan is a low-security federal prison located in Washtenaw County in southeastern Michigan, about 35 miles southwest of Detroit and 10 miles south of Ann Arbor. The facility also includes a minimum-security satellite camp. FCI Milan has operated since 1932, making it one of the longer-running federal prisons in the Midwest. The low-security designation means inmates generally have more access to programs, phone use, and daily movement than at medium or high-security facilities, which translates to a more predictable communication schedule for families.",
      "Communication at FCI Milan follows Bureau of Prisons rules. CorrLinks is the platform for electronic messaging — families create an account at corrlinks.com and wait for the inmate to initiate contact or approve a request before any correspondence can begin. Phone calls use ConnectNetwork, and families fund a prepaid account linked to their phone number to receive calls. At a low-security facility like FCI Milan, phone access is generally more routine than at higher-security BOP institutions, though it is still subject to the facility's schedule and the inmate's program status.",
      "FCI Milan's location in southeastern Michigan makes it more accessible to families in the Detroit metropolitan area and other parts of the Midwest compared to more remote federal facilities. In-person visits require advance approval through the BOP visitor application process and are conducted on scheduled visiting days. Remote video visitation is not available at FCI Milan. For families who are new to the federal prison system, the lower-security environment at FCI Milan generally means the communication process is less complicated than at higher-security BOP institutions, though the BOP-wide rules about contact approval and account setup still apply.",
    ],

    address: "4004 East Arkona Road, Milan, MI 48160",
    phone: "(734) 439-1511",
    website: "https://www.bop.gov/locations/institutions/mil/",
    inmateCapacity: 1400,
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
        notes: "Federal electronic messaging. Low-security status means generally more routine access to messaging.",
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
        notes: "BOP phone and trust fund services. More frequent phone access typical at low-security facilities.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available. Low-security status generally allows routine CorrLinks access." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Milan." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content guidelines." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls. More frequent access compared to higher-security BOP facilities." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order." },
    },

    rules: [
      "CorrLinks contact requires inmate initiation or approval. You cannot send a message without prior approval.",
      "Remote video visitation is not available. In-person visits require advance BOP application approval.",
      "Confirm whether your loved one is in the main FCI or the satellite camp.",
      "All BOP communications are monitored under standard Bureau of Prisons policy.",
      "Phone and commissary accounts are funded separately through ConnectNetwork.",
    ],

    faq: [
      {
        question: "How do I set up messaging at FCI Milan?",
        answer: "Create a free account at corrlinks.com. Wait for the inmate to send you an invitation or approve your contact request through the TRULINCS system inside the facility. Once approved, you can exchange messages. Low-security facilities like FCI Milan generally have more routine CorrLinks access than higher-security prisons.",
      },
      {
        question: "How do I receive phone calls from FCI Milan?",
        answer: "Create a ConnectNetwork account at connectnetwork.com and add funds linked to your phone number. The inmate will call you from facility phones. FCI Milan inmates typically have access to phones more frequently than those at medium or high-security facilities.",
      },
      {
        question: "Can I visit FCI Milan in person?",
        answer: "Yes. Submit a visitor application (BP-629 form) to FCI Milan and allow time for processing before planning a visit. The facility is about 35 miles from Detroit, making it more accessible to Michigan and Midwest families than many federal prisons. Check bop.gov for current visiting schedules.",
      },
      {
        question: "Is there a satellite camp at FCI Milan?",
        answer: "Yes, FCI Milan has a minimum-security satellite camp on the grounds. The BOP inmate locator at bop.gov will show whether your loved one is in the main FCI or the camp. Both use the same communication platforms, but daily schedules may differ.",
      },
      {
        question: "How do I send money to a FCI Milan inmate?",
        answer: "Use ConnectNetwork at connectnetwork.com to deposit funds into the inmate's trust account. Money orders through the BOP lockbox system and Western Union Quick Collect or MoneyGram are also accepted. Processing takes one to three business days.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "ionia-correctional-facility",
      "federal-correctional-complex-terre-haute",
      "fci-memphis",
    ],
  },

  "fci-memphis": {
    id: "f-fci-memphis",
    name: "FCI Memphis",
    slug: "fci-memphis",
    type: "federal",
    stateSlug: "tennessee",
    stateName: "Tennessee",
    stateAbbr: "TN",
    countySlug: null,
    countyName: "Shelby County",
    securityLevel: "Medium",
    hasDetailPage: true,
    seoTitle: "FCI Memphis: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at FCI Memphis in Tennessee. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP low security facility for female inmates in Memphis TN.",

    description:
      "FCI Memphis communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this medium-security Tennessee facility.",

    overview: [
      "Federal Correctional Institution Memphis is a medium-security federal prison located in Shelby County in the western part of Tennessee, within the Memphis metropolitan area. The facility serves as the primary federal BOP institution in the Memphis region and houses adult male federal inmates at the medium-security level. Its location within a major metropolitan area makes it somewhat more accessible for families in the Mid-South than federal facilities in more rural locations. The facility also includes a minimum-security satellite camp on the same grounds.",
      "Communication at FCI Memphis follows standard Bureau of Prisons procedures. CorrLinks is the electronic messaging platform. Families must create an account and wait for the inmate to initiate contact or approve a request before correspondence can begin. Phone calls are handled through ConnectNetwork, and families fund a prepaid account with their phone number to receive calls. Medium-security facilities generally have broader communication access than high-security penitentiaries, though BOP rules around monitoring and scheduling still apply. The facility is in the same county as the Shelby County Criminal Justice Center, but the two are completely separate systems — BOP inmates and county detainees use entirely different provider platforms.",
      "One consideration for Memphis-area families is that a loved one held at FCI Memphis may later be transferred to another BOP facility elsewhere in the country, which is common with federal sentences. CorrLinks and ConnectNetwork accounts transfer with the inmate system-wide, so you generally would not need to create new accounts after a transfer, though you may need to update the facility information within each platform. Remote video visitation is not available at FCI Memphis, and in-person visits require completing the BOP visitor approval process before any visit can occur.",
    ],

    address: "1101 John A. Denie Road, Memphis, TN 38134",
    phone: "(901) 372-2269",
    website: "https://www.bop.gov/locations/institutions/mem/",
    inmateCapacity: 1200,
    established: 1977,
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
        notes: "Federal messaging platform for all BOP inmates. Inmate must initiate or approve contact.",
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
        notes: "BOP phone and trust fund deposits. Medium-security inmates have routine phone access.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available. Contact approval required before messaging begins." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Memphis." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content guidelines." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls via BOP phone system. Fund ConnectNetwork to receive calls." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order process." },
    },

    rules: [
      "CorrLinks contact requires inmate initiation. You cannot message an inmate who has not approved contact.",
      "FCI Memphis and Shelby County Jail are entirely separate systems with different platforms. Do not confuse them.",
      "Remote video visitation is not available. In-person visits require BOP visitor application approval.",
      "CorrLinks and ConnectNetwork accounts transfer system-wide if the inmate is moved to another BOP facility.",
      "All BOP communications are monitored under standard Bureau of Prisons policy.",
    ],

    faq: [
      {
        question: "How do I set up messaging at FCI Memphis?",
        answer: "Create a free account at corrlinks.com. The inmate must send you an invitation or approve your request through the TRULINCS system inside the facility. Once approved, both parties can send and receive electronic messages. This process is the same at every BOP facility — the inmate must go first.",
      },
      {
        question: "How do phone calls work at FCI Memphis?",
        answer: "Phone calls from FCI Memphis use ConnectNetwork. Create an account at connectnetwork.com and add funds linked to your phone number. The inmate will call you from facility phones. Medium-security facilities generally allow routine phone access on scheduled call days.",
      },
      {
        question: "Is FCI Memphis the same as the Shelby County jail?",
        answer: "No. FCI Memphis is a federal Bureau of Prisons facility. The Shelby County Criminal Justice Center is a county jail operated by the Shelby County Sheriff's Office. They are completely separate systems using different providers. BOP inmates use CorrLinks and ConnectNetwork. Shelby County jail inmates use GTL.",
      },
      {
        question: "What happens to my accounts if my loved one is transferred from FCI Memphis?",
        answer: "CorrLinks and ConnectNetwork are BOP system-wide platforms. Your accounts and contact history transfer with the inmate to the new BOP facility. You may need to update the facility name within each platform, but you do not need to create new accounts.",
      },
      {
        question: "How do I send money to a FCI Memphis inmate?",
        answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by money order via the BOP lockbox process. Western Union Quick Collect and MoneyGram are also accepted at most BOP facilities. Funds typically post within one to three business days.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "riverbend-maximum-security-institution",
      "shelby-county-criminal-justice-center",
      "federal-correctional-complex-terre-haute",
    ],
  },

  "federal-correctional-complex-petersburg": {
    id: "f-fcc-petersburg",
    name: "Federal Correctional Complex Petersburg",
    slug: "federal-correctional-complex-petersburg",
    type: "federal",
    stateSlug: "virginia",
    stateName: "Virginia",
    stateAbbr: "VA",
    countySlug: null,
    countyName: "Dinwiddie County",
    securityLevel: "Low / Medium",
    hasDetailPage: true,
    seoTitle: "FCC Petersburg: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at Federal Correctional Complex Petersburg in Virginia. CorrLinks for messaging. ConnectNetwork for phone calls. Find providers for this federal BOP facility.",

    description:
      "Federal Correctional Complex Petersburg communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this Virginia complex.",

    overview: [
      "Federal Correctional Complex Petersburg is a multi-institution federal prison campus located in Dinwiddie County, Virginia, about 25 miles south of Richmond. The complex includes FCI Petersburg Low, FCI Petersburg Medium, and a minimum-security satellite camp. There is no high-security penitentiary within the Petersburg complex — the institutions housed here operate at low and medium security levels, which means broader program access and generally more routine communication schedules for inmates compared to higher-security BOP facilities. The complex sits in a largely rural part of south-central Virginia.",
      "Communication across all FCC Petersburg institutions follows Bureau of Prisons rules. CorrLinks handles electronic messaging, and families must wait for the inmate to initiate or approve contact before correspondence can begin. Phone calls are managed through ConnectNetwork. Because the complex houses only low and medium-security inmates, phone access tends to be more predictable and less restricted than at high-security penitentiaries or the USP Terre Haute. Commissary accounts and phone accounts are funded separately through ConnectNetwork.",
      "FCC Petersburg's location about 25 miles from Richmond makes it accessible to families in the Richmond metro area, Hampton Roads, and other parts of Virginia and North Carolina. In-person visits require BOP visitor application approval. Remote video visitation is not available. Families whose loved one is in the low-security institution versus the medium should be aware that programming and daily schedules can differ, though the communication platforms are identical. If an inmate transfers within the complex from low to medium or vice versa, existing CorrLinks and ConnectNetwork accounts remain valid.",
    ],

    address: "1100 River Road, Petersburg, VA 23804",
    phone: "(804) 504-7200",
    website: "https://www.bop.gov/locations/institutions/pet/",
    inmateCapacity: 2500,
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
        notes: "Federal messaging via TRULINCS/CorrLinks. Same platform for both FCI Low and FCI Medium.",
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
        notes: "BOP phone system and trust fund deposits. Low and medium security inmates have routine phone access.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available for both institutions. Contact approval required before messaging." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCC Petersburg." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content guidelines." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Routine access at low and medium security. Fund ConnectNetwork to receive calls." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order." },
    },

    rules: [
      "Confirm whether your loved one is in FCI Petersburg Low or Medium — different schedules apply.",
      "CorrLinks contact requires inmate initiation or approval.",
      "Remote video visitation is not available at FCC Petersburg.",
      "In-person visits require BOP visitor application approval well in advance.",
      "All BOP communications are monitored under standard Bureau of Prisons policy.",
    ],

    faq: [
      {
        question: "How do I know if my loved one is in FCI Petersburg Low or Medium?",
        answer: "Use the BOP inmate locator at bop.gov/inmateloc to confirm the specific institution. The two institutions share the same complex address but operate independently. The distinction affects daily schedules and programming access, though the communication platforms are the same for both.",
      },
      {
        question: "How do I set up CorrLinks at FCC Petersburg?",
        answer: "Create a free account at corrlinks.com. The inmate must invite you or approve your contact request through the TRULINCS terminal inside the facility. Once approved, you can send and receive electronic messages for a per-message fee.",
      },
      {
        question: "How do phone calls work at FCC Petersburg?",
        answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and fund it with your phone number. The inmate will call you directly. Low and medium-security inmates at FCC Petersburg typically have regular access to facility phones.",
      },
      {
        question: "Is FCC Petersburg close to Richmond?",
        answer: "Yes, it is about 25 miles south of Richmond in Dinwiddie County, making it one of the more accessible federal prisons for families in central Virginia. It is also within reasonable distance of Hampton Roads and parts of North Carolina. Check bop.gov for current visiting days and procedures.",
      },
      {
        question: "How do I send money to a FCC Petersburg inmate?",
        answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by money order via the BOP lockbox. Western Union Quick Collect and MoneyGram are also accepted. Processing takes one to three business days.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "red-onion-state-prison",
      "federal-correctional-complex-butner",
      "federal-correctional-complex-coleman",
    ],
  },

  "fci-ray-brook": {
    id: "f-fci-ray-brook",
    name: "FCI Ray Brook",
    slug: "fci-ray-brook",
    type: "federal",
    stateSlug: "new-york",
    stateName: "New York",
    stateAbbr: "NY",
    countySlug: null,
    countyName: "Essex County",
    securityLevel: "Medium",
    hasDetailPage: true,
    seoTitle: "FCI Ray Brook: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at FCI Ray Brook in New York. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP medium security facility in Essex County NY.",

    description:
      "FCI Ray Brook communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this Adirondack facility in Essex County, New York.",

    overview: [
      "Federal Correctional Institution Ray Brook is a medium-security federal prison located in the hamlet of Ray Brook in Essex County, in the Adirondack Mountains of northern New York. The facility opened in 1980 on a site that was constructed as the Olympic Village for the 1980 Winter Olympics in nearby Lake Placid — the same games famous for the U.S. hockey team's 'Miracle on Ice' victory. After the Olympics concluded, the buildings were repurposed as a federal correctional facility. This origin makes FCI Ray Brook one of the more unusual physical settings in the federal prison system, tucked into a mountainous region more than four hours north of New York City.",
      "Communication at FCI Ray Brook follows standard Bureau of Prisons rules. CorrLinks handles electronic messaging, and families need to wait for the inmate to initiate contact before correspondence can begin. Phone calls use ConnectNetwork. Because the facility is medium security, communication access is generally routine compared to higher-security BOP institutions. The remote location in the Adirondacks, however, makes in-person visits significantly more difficult for most families — particularly those in New York City or other downstate areas, who face a long drive or multi-leg travel to reach the facility.",
      "For families whose loved one is at FCI Ray Brook, electronic communication through CorrLinks and phone calls through ConnectNetwork are especially practical because the distance from most population centers makes frequent in-person visits logistically challenging. Remote video visitation is not available at FCI Ray Brook, as it is not offered at any BOP facility. Families should set up CorrLinks and ConnectNetwork accounts early in the process to avoid gaps in communication during the initial period of incarceration. The BOP visitor approval process should also begin as early as possible for anyone planning to visit in person.",
    ],

    address: "128 Ray Brook Road, Ray Brook, NY 12977",
    phone: "(518) 891-5400",
    website: "https://www.bop.gov/locations/institutions/rbk/",
    inmateCapacity: 900,
    established: 1980,
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
        notes: "Federal messaging platform. Especially useful given the remote location. Inmate must initiate contact.",
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
        notes: "BOP phone system and trust fund deposits. Practical alternative to in-person visits given the remote setting.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available. Electronic messaging is especially practical given the facility's remote location." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Ray Brook." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content guidelines." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls. Medium-security status allows routine phone access." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order." },
    },

    rules: [
      "CorrLinks contact requires inmate initiation or approval. You cannot message first.",
      "The facility is in a remote Adirondack location — set up electronic communication early to avoid gaps.",
      "Remote video visitation is not available. In-person visits require BOP visitor approval and significant travel for most families.",
      "All BOP communications are monitored under standard Bureau of Prisons policy.",
      "Phone and commissary funds are maintained in separate ConnectNetwork accounts.",
    ],

    faq: [
      {
        question: "How do I set up messaging at FCI Ray Brook?",
        answer: "Create a free account at corrlinks.com. The inmate must send you an invitation or approve your contact request through the TRULINCS terminal inside the facility. Once approved, you can send and receive electronic messages. Given the remote location of the facility, setting up messaging early is especially useful for maintaining regular contact.",
      },
      {
        question: "How do phone calls work at FCI Ray Brook?",
        answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds linked to your phone number. The inmate will call you from facility phones. Medium-security inmates generally have access to phones on a routine schedule.",
      },
      {
        question: "How far is FCI Ray Brook from New York City?",
        answer: "FCI Ray Brook is in the Adirondack Mountains in Essex County, approximately 300 miles north of New York City. The drive takes roughly four to five hours depending on traffic. The facility is near Lake Placid. For most downstate New York families, electronic communication through CorrLinks and phone calls are the more practical options for regular contact.",
      },
      {
        question: "What is the history of the FCI Ray Brook facility?",
        answer: "The buildings were constructed as the Olympic Village for the 1980 Lake Placid Winter Olympics. After the games concluded, the federal government converted the site into a correctional facility. FCI Ray Brook has operated since 1980, making it one of the more unusual settings in the federal prison system in terms of its physical origins.",
      },
      {
        question: "How do I send money to a FCI Ray Brook inmate?",
        answer: "Deposits go through ConnectNetwork at connectnetwork.com or via money order using the BOP lockbox system. Western Union Quick Collect and MoneyGram are also accepted. Allow one to three business days for funds to post.",
      },
    ],

    relatedGuideSlugs: ["corrlinks-invite-code-not-working", "corrlinks-add-second-inmate"],
    relatedFacilitySlugs: [
      "mdc-brooklyn",
      "attica-correctional-facility",
      "fci-danbury",
    ],
  },

  "louisiana-state-penitentiary": {
    id: "f-angola",
    name: "Louisiana State Penitentiary",
    slug: "louisiana-state-penitentiary",
    type: "state",
    stateSlug: "louisiana",
    stateName: "Louisiana",
    stateAbbr: "LA",
    countySlug: null,
    countyName: "West Feliciana Parish",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Angola Prison: Phone Calls, Messaging and Money Transfer Guide",
    seoDescription: "How to contact someone at Louisiana State Penitentiary (Angola). Find the correct provider for phone calls, messaging, video visits, and money transfers at this Louisiana DOC facility.",

    description:
      "Louisiana State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at Angola, the largest maximum-security prison in the United States.",

    overview: [
      "Louisiana State Penitentiary, commonly known as Angola, is a maximum-security state prison located in West Feliciana Parish in the rural farmlands of northern Louisiana, roughly 50 miles northwest of Baton Rouge. It is the largest maximum-security prison in the United States, holding more than 6,000 people on a roughly 18,000-acre site that was historically a cotton plantation — a history that shapes much of the public understanding of the facility. Angola is operated by the Louisiana Department of Public Safety and Corrections and houses both general-population maximum-security inmates and Louisiana's death row. The facility is known for its highly remote location, which makes in-person visits challenging for most families.",
      "Communication at Angola is handled through two primary platforms. JPay manages electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Louisiana DOC number to begin correspondence. Messages are reviewed by staff before delivery, and photos are subject to content guidelines. GTL handles phone calls and video visitation. Setting up a GTL AdvancePay account linked to your phone number allows you to receive inmate-initiated calls, and video visits are available and can be scheduled through the GTL platform — a meaningful option for families who cannot easily make the trip to the remote West Feliciana Parish location.",
      "Angola's remote setting in the West Feliciana countryside is a practical challenge for families. The prison is not served by public transit and sits at the end of a highway with no nearby towns of meaningful size. This makes electronic communication through JPay and GTL video visits more important for regular contact than at facilities in or near major cities. When a loved one is first assigned to Angola, confirming which housing unit they are in is useful because the facility is large enough that unit-specific rules can apply to things like visiting schedules and programming access. The main communication setup process — creating JPay and GTL accounts — is the same regardless of unit assignment.",
    ],

    address: "17544 Tunica Trace, Angola, LA 70712",
    phone: "(225) 655-4411",
    website: "https://www.doc.louisiana.gov",
    rosterUrl: "https://doc.louisiana.gov/offender-locator/",
    inmateCapacity: 6300,
    established: 1901,
    operatedBy: "Louisiana Department of Public Safety and Corrections",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Louisiana DOC number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation. GTL video visits are especially practical given Angola's remote location.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available via JPay. Messages reviewed by staff before delivery." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available through GTL. Schedule in advance. Practical alternative to in-person visits." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to Louisiana DOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund a GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay. Used for commissary and personal purchases." },
    },

    rules: [
      "JPay (messaging, photos, money) and GTL (phone, video) are separate platforms requiring separate accounts.",
      "Electronic messages are reviewed by Louisiana DOC staff before delivery.",
      "The facility is extremely remote. GTL video visits are a practical substitute for frequent in-person visits.",
      "Video visits must be scheduled in advance through GTL. Same-day scheduling is not available.",
      "Senders must be on the inmate's approved contact list before communication can begin.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Angola?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Louisiana DOC identification number. Purchase JPay stamps to send electronic messages. Messages are reviewed by staff and typically delivered within 24 to 48 hours. The inmate can reply using stamps from their own JPay account.",
      },
      {
        question: "How do I set up phone calls from Angola?",
        answer: "Phone calls from Angola are managed by GTL. Create a GTL account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate will call you directly from facility phones.",
      },
      {
        question: "Is video visitation available at Angola?",
        answer: "Yes, and it is especially useful given how remote Angola is. GTL offers remote video visits that you can schedule from home. Log into your GTL account, search for Louisiana State Penitentiary, and select an available time slot. You will need a device with a camera and must be on the inmate's approved contact list.",
      },
      {
        question: "How far is Angola from Baton Rouge?",
        answer: "Angola is roughly 50 miles northwest of Baton Rouge by road, but the drive takes longer than the distance suggests because the prison is at the end of a highway in a rural area with no direct routes. There is no public transportation to the facility. For many families, GTL video visits and JPay messaging are the most practical options for regular contact.",
      },
      {
        question: "How do I send money to an inmate at Angola?",
        answer: "Trust account deposits are made through JPay. Log into your JPay account, navigate to Send Money, and select Louisiana State Penitentiary. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "mississippi-state-penitentiary",
      "georgia-diagnostic-and-classification-prison",
      "holman-correctional-facility",
    ],
  },

  "huntsville-unit": {
    id: "f-huntsville",
    name: "Huntsville Unit",
    slug: "huntsville-unit",
    type: "state",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    countySlug: null,
    countyName: "Walker County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Huntsville Unit TDCJ: Securus Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Huntsville Unit in Texas. Securus Technologies handles TDCJ phone calls. Register at texasprisonphone.com before setting up Securus AdvanceConnect account.",

    description:
      "Huntsville Unit communication guide. Find JPay messaging and GTL phone options for families at the Walls Unit, the oldest and most historic Texas Department of Criminal Justice facility.",

    overview: [
      "The Huntsville Unit, known informally as the Walls Unit, is a maximum-security state prison operated by the Texas Department of Criminal Justice and located in the city of Huntsville in Walker County, about 70 miles north of Houston. It is the oldest prison in Texas, with origins dating to 1849, and occupies a prominent place in the city of Huntsville itself, sitting near the downtown area. The facility serves as the administrative hub of the TDCJ system and houses the execution chamber where Texas carries out death sentences. The Walls Unit holds a unique position in Texas corrections history and remains one of the most active and well-known prisons in the state.",
      "Communication at the Huntsville Unit operates through the standard Texas Department of Criminal Justice provider contracts. JPay manages electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their TDCJ number to begin sending messages and photos. GTL handles phone calls and video visitation under the TDCJ statewide contract. Setting up a GTL AdvancePay account allows families to receive inmate-initiated calls. Video visits through GTL provide a remote alternative for families who cannot easily travel to Huntsville.",
      "Because the Huntsville Unit sits inside the city of Huntsville rather than at a remote rural location, in-person visits are more logistically practical than at facilities like Angola or Red Onion. Huntsville is roughly 70 miles north of Houston on I-45, making it accessible for many Houston-area families. The city has some visitor services nearby. For families who have a loved one newly assigned to TDCJ, it is worth understanding that TDCJ uses JPay and GTL system-wide across its many units, so accounts created for Huntsville will work if the inmate is transferred to another TDCJ facility.",
    ],

    address: "815 12th Street, Huntsville, TX 77340",
    phone: "(936) 437-6300",
    website: "https://www.tdcj.texas.gov",
    commissary: "Deposits via eCommDirect (Texas.gov), JPay, TouchPay, ACE, or Access Corrections; money order or cashier's check; or monthly ACH. Mail money orders or cashier's checks payable to Inmate Trust Fund for Offender Name and Number to Inmate Trust Fund, PO Box 60, Huntsville, TX 77342-0060. Only approved senders (approved visitor list or telephone list). No cash or personal checks. No deposits directly to the unit.",
    rosterUrl: "https://inmate.tdcj.texas.gov/InmateSearch/",
    inmateCapacity: 1400,
    established: 1849,
    operatedBy: "Texas Department of Criminal Justice (TDCJ)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses TDCJ number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the TDCJ statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires TDCJ identification number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available via GTL. Schedule in advance." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay, subject to TDCJ content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms requiring separate accounts and separate funding.",
      "Messages submitted via JPay are reviewed by TDCJ staff before delivery.",
      "TDCJ JPay and GTL accounts transfer system-wide if the inmate is moved to another TDCJ unit.",
      "Video visits must be scheduled in advance through GTL. Same-day scheduling is not available.",
      "Senders must be on the approved contact list to communicate.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at the Huntsville Unit?",
        answer: "Create a JPay account at jpay.com and add the inmate using their TDCJ identification number. Purchase stamps and compose your message. Messages are reviewed by staff before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from the Huntsville Unit?",
        answer: "Phone calls from the Huntsville Unit use GTL. Create a GTL account at telmate.com or through the GTL Connect app, set up a prepaid AdvancePay account linked to your phone number, and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "If my loved one is transferred to another TDCJ unit, do I need new accounts?",
        answer: "Generally no. JPay and GTL both serve all TDCJ units statewide under system-wide contracts. Your accounts, contact list, and message history should carry over when an inmate transfers within the TDCJ system. You may need to update the unit name when booking video visits.",
      },
      {
        question: "Is the Huntsville Unit easy to reach from Houston?",
        answer: "Yes. Huntsville is about 70 miles north of Houston on Interstate 45, roughly an hour's drive without traffic. The prison is near downtown Huntsville and there are food and accommodation options in the city. For families in the Houston area, in-person visits are logistically feasible.",
      },
      {
        question: "How do I send money to a Huntsville Unit inmate?",
        answer: "Trust account deposits are made through JPay. Log in, navigate to Send Money, and select the Huntsville Unit. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "eastham-unit",
      "harris-county-jail",
      "bexar-county-adult-detention-center",
    ],
  },

  "florida-state-prison": {
    id: "f-florida-state",
    name: "Florida State Prison",
    slug: "florida-state-prison",
    type: "state",
    stateSlug: "florida",
    stateName: "Florida",
    stateAbbr: "FL",
    countySlug: null,
    countyName: "Bradford County",
    securityLevel: "Close / Maximum",
    hasDetailPage: true,
    seoTitle: "Florida State Prison: Securus Phone, JPay Messaging and Money",
    seoDescription: "How to contact someone at Florida State Prison in Raiford. Securus Technologies handles phone calls. JPay for messaging, video visits, and money transfers. DC number required.",

    description:
      "Florida State Prison communication guide. Find JPay messaging and GTL phone options for families. Learn how to stay connected with inmates at this close and maximum security Florida facility.",

    overview: [
      "Florida State Prison is a close and maximum-security state correctional facility operated by the Florida Department of Corrections, located in Bradford County near the town of Raiford in northeastern Florida. It is one of the oldest continuously operating state prisons in Florida. The facility houses both close-custody inmates in the general population and Florida's death row for male inmates. Because of the death row population, Florida State Prison is one of the most closely monitored state facilities in the FDOC system. Bradford County is roughly 50 miles southwest of Jacksonville and 60 miles southeast of Tallahassee, in a largely rural part of north-central Florida.",
      "Communication at Florida State Prison operates through the FDOC provider contracts. JPay manages electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Florida DC number to begin sending messages and photos. GTL handles phone calls and video visitation under the Florida DOC contract. For phone calls, families set up a GTL AdvancePay account. Video visits through GTL are available for eligible inmates and can be scheduled remotely, which is practical for families spread across the state or out of state.",
      "Death row inmates at Florida State Prison may face different communication restrictions than general-population inmates. Access to messaging, phone calls, and video visits can depend on housing assignment and program status. Families whose loved one is on death row should confirm current communication access levels with the facility directly rather than assuming standard FDOC rules apply. For general-population inmates in close or maximum custody, the standard FDOC communication setup through JPay and GTL applies. Because JPay and GTL serve the entire Florida DOC system, accounts created for Florida State Prison will work at any other FDOC facility if an inmate is transferred.",
    ],

    address: "23916 Northwest 83rd Avenue, Raiford, FL 32026",
    phone: "(386) 431-2000",
    website: "https://www.dc.state.fl.us",
    rosterUrl: "https://pubapps.fdc.myflorida.com/OffenderSearch/Search.aspx?TypeSearch=AI",
    inmateCapacity: 1400,
    established: 1961,
    operatedBy: "Florida Department of Corrections (FDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Requires Florida DC number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the FDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ — confirm status directly." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Death row inmates may have restricted video access." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay, subject to FDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Death row phone access depends on current status." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Death row inmates may have different communication restrictions. Confirm access directly with the facility.",
      "JPay and GTL are separate platforms — messaging and phone funds do not transfer between them.",
      "Messages via JPay are reviewed by FDOC staff before delivery.",
      "FDOC JPay and GTL accounts are system-wide and transfer if the inmate is moved to another FDOC facility.",
      "Senders must be on the inmate's approved contact list before communication is possible.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Florida State Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Florida Department of Corrections DC number. Purchase stamps and send your message. Staff review messages before delivery, which typically takes 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Florida State Prison?",
        answer: "Phone calls use GTL. Create a GTL account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "Does Florida State Prison house death row inmates?",
        answer: "Yes. Florida State Prison holds Florida's male death row population. Death row inmates may have different communication access levels than general-population inmates. If your loved one is on death row, confirm their current communication privileges directly with the facility or their legal representative before setting up accounts.",
      },
      {
        question: "Can I do a video visit with someone at Florida State Prison?",
        answer: "Video visits are available for eligible general-population inmates through GTL. Death row inmates may have more restricted video access. For general population, log into your GTL account, search for Florida State Prison, and schedule an available time slot. Book well in advance as slots fill quickly.",
      },
      {
        question: "How do I send money to a Florida State Prison inmate?",
        answer: "Trust account deposits are processed through JPay. Log in, go to Send Money, and select Florida State Prison. Add funds via debit or credit card. JPay processes most deposits within one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "federal-correctional-complex-coleman",
      "miami-dade-corrections-facility",
      "broad-river-correctional-institution",
    ],
  },

  "stateville-correctional-center": {
    id: "f-stateville",
    name: "Stateville Correctional Center",
    slug: "stateville-correctional-center",
    type: "state",
    stateSlug: "illinois",
    stateName: "Illinois",
    stateAbbr: "IL",
    countySlug: null,
    countyName: "Will County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Stateville Correctional: ICSolutions Phone and GettingOut Messaging",
    seoDescription: "How to contact someone at Stateville Correctional Center in Illinois. ICSolutions handles phone calls. GettingOut for digital messaging. Illinois offers partial free calling program.",

    description:
      "Stateville Correctional Center communication guide. Find JPay messaging and GTL phone options for families. Learn how to stay connected with inmates at this historic maximum-security Illinois facility.",

    overview: [
      "Stateville Correctional Center is a maximum-security state prison operated by the Illinois Department of Corrections, located in Crest Hill in Will County, about 35 miles southwest of Chicago. Opened in 1925, Stateville is one of the most historically significant prisons in Illinois and has housed many notable inmates over the past century. The facility is distinctive for its architecture — it includes a circular panopticon-style cellhouse designed so that a single guard station can observe all surrounding cells, a design concept from 19th-century prison theory. The facility's proximity to Chicago makes it one of the more accessible major prisons in the state for Cook County and suburban Chicago families.",
      "Communication at Stateville follows Illinois Department of Corrections provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account, add the inmate using their IDOC number, and purchase stamps to begin correspondence. GTL manages phone calls and video visitation under the IDOC contract. For families new to the Illinois system, understanding that JPay and GTL are separate platforms — each requiring its own account and funding — is the most important starting point. Messaging credits on JPay cannot be used for phone calls, and phone funds in GTL cannot pay for messages.",
      "Stateville's location within Will County, adjacent to the Chicago metropolitan area, makes it more accessible for in-person visits than many downstate Illinois prisons. The facility is located off I-55 and is reachable from Chicago in about 45 minutes. Because JPay and GTL serve the entire IDOC system statewide, accounts you set up for Stateville will work if an inmate is later transferred to another Illinois facility. Stateville has undergone significant operational changes in recent years as the Illinois Department of Corrections has worked to modernize and reform its facilities, so confirming current visiting rules and communication access with the facility or IDOC directly is always a good step.",
    ],

    address: "2700 E. Audubon Road, Crest Hill, IL 60403",
    phone: "(815) 727-3607",
    website: "https://www.illinois.gov/idoc",
    rosterUrl: "https://idoc.illinois.gov/offender/inmatesearch.html",
    inmateCapacity: 1600,
    established: 1925,
    operatedBy: "Illinois Department of Corrections (IDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Uses IDOC identification number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the IDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available. Requires IDOC number. Messages reviewed before delivery." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to IDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay. Separate from phone account funding." },
    },

    rules: [
      "JPay and GTL are entirely separate platforms. Funds on one cannot be used on the other.",
      "Messages are reviewed by IDOC staff before delivery.",
      "IDOC-wide JPay and GTL accounts transfer if the inmate is moved to another Illinois facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Stateville?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Illinois DOC number. Purchase JPay stamps and send your message. Messages are reviewed by IDOC staff and typically delivered within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Stateville?",
        answer: "Phone calls from Stateville use GTL. Create a GTL account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number, add funds, and the inmate can call you from facility phones.",
      },
      {
        question: "Is Stateville close to Chicago?",
        answer: "Yes, Stateville is in Crest Hill in Will County, roughly 35 miles southwest of Chicago and accessible via I-55. For Chicago-area families, it is one of the closer major state prisons. Drive time from the city is typically 45 to 60 minutes depending on traffic.",
      },
      {
        question: "If my loved one is transferred to another IDOC facility, do my accounts still work?",
        answer: "Yes. JPay and GTL both serve all IDOC facilities under statewide contracts. Your accounts, contact list, and history carry over if an inmate is transferred within the Illinois system. You may need to update the facility when scheduling video visits through GTL.",
      },
      {
        question: "How do I send money to a Stateville inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Stateville Correctional Center. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "cook-county-jail",
      "ohio-state-penitentiary",
      "indiana-state-prison",
    ],
  },

  "arizona-state-prison-complex-florence": {
    id: "f-aspc-florence",
    name: "Arizona State Prison Complex Florence",
    slug: "arizona-state-prison-complex-florence",
    type: "state",
    stateSlug: "arizona",
    stateName: "Arizona",
    stateAbbr: "AZ",
    countySlug: null,
    countyName: "Pinal County",
    securityLevel: "Close / Death Row",
    hasDetailPage: true,
    seoTitle: "ASPC Florence: ICSolutions Phone, Securus Messaging and PAN List",
    seoDescription: "How to contact someone at Arizona State Prison Complex Florence. ICSolutions handles phone calls. Securus for messaging. Must be on PAN list and visitation list to receive calls.",

    description:
      "Arizona State Prison Complex Florence communication guide. Find JPay messaging and Securus phone options for families at this historic Pinal County correctional complex.",

    overview: [
      "Arizona State Prison Complex Florence is a correctional campus located in the town of Florence in Pinal County, roughly 60 miles southeast of Phoenix. Operated by the Arizona Department of Corrections, Rehabilitation and Reentry, the complex includes multiple separate units at various security levels, including close-custody units and Arizona's death row for male inmates. Florence is one of Arizona's oldest and largest prison sites, with roots going back to 1908. The town of Florence is shaped by the presence of the prison complex, and the facility has been central to Arizona's correctional history for more than a century.",
      "Communication at ASPC Florence operates through ADCRR provider contracts. JPay manages electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Arizona DOC number to send messages and photos. Securus Technologies handles phone calls and video visitation. Setting up a Securus prepaid account linked to your phone number allows you to receive inmate-initiated calls. Video visits through Securus provide a remote alternative to in-person visits, which requires an approved visitor application through ADCRR.",
      "The death row component of ASPC Florence affects communication access for a portion of the population. Inmates on death row face more restrictive communication rules than those in general-population close-custody units. Families whose loved one is on Arizona's death row should confirm current communication access with the facility directly, as access to messaging and phone calls can differ from standard rules. For general-population close-custody inmates, the JPay and Securus setup is the same as at other Arizona state facilities. Because JPay and Securus serve multiple Arizona DOC facilities, accounts do not need to be recreated if an inmate is transferred within the state system.",
    ],

    address: "1305 E. Butte Avenue, Florence, AZ 85132",
    phone: "(520) 868-4011",
    website: "https://corrections.az.gov",
    inmateCapacity: 4000,
    established: 1908,
    operatedBy: "Arizona Department of Corrections, Rehabilitation and Reentry (ADCRR)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Arizona DOC number.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the ADCRR contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may be more restricted." },
      video: { status: "limited", provider: "Securus", notes: "Available for eligible inmates. Death row access varies. Schedule in advance." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ADCRR content guidelines." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls. Fund Securus prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary purchases." },
    },

    rules: [
      "Death row inmates face stricter communication limits than general-population close-custody inmates.",
      "JPay and Securus are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages via JPay are reviewed by ADCRR staff before delivery.",
      "Visitor approval requires submitting an ADCRR visitor application and passing a background review.",
      "Senders must be on the approved contact list before communication is possible.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at ASPC Florence?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Arizona DOC number. Purchase stamps and compose your message. ADCRR staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from ASPC Florence?",
        answer: "Phone calls use Securus. Create a Securus account at securustech.net or through the Securus app. Set up a prepaid account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "Is my loved one in the general population or on death row at ASPC Florence?",
        answer: "Use the ADCRR inmate search at corrections.az.gov to confirm housing assignment. The distinction matters because death row inmates face stricter communication rules than close-custody general-population inmates. If communication is not coming through as expected, housing assignment is the first thing to verify.",
      },
      {
        question: "Can I do a video visit at ASPC Florence?",
        answer: "Video visits are available for eligible inmates through Securus. Create a Securus account, search for Arizona State Prison Complex Florence, and schedule an available slot. Death row inmates may have restricted video visit access. Confirm eligibility before booking.",
      },
      {
        question: "How do I send money to an ASPC Florence inmate?",
        answer: "Trust account deposits are processed through JPay. Log in, go to Send Money, and select Arizona State Prison Complex Florence. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "maricopa-county-jail",
      "adx-florence",
      "high-desert-state-prison",
    ],
  },

  "ohio-state-penitentiary": {
    id: "f-ohio-state-pen",
    name: "Ohio State Penitentiary",
    slug: "ohio-state-penitentiary",
    type: "state",
    stateSlug: "ohio",
    stateName: "Ohio",
    stateAbbr: "OH",
    countySlug: null,
    countyName: "Mahoning County",
    securityLevel: "Supermax",
    hasDetailPage: true,
    seoTitle: "Ohio State Penitentiary: ConnectNetwork Phone and Messaging Guide",
    seoDescription: "How to contact someone at Ohio State Penitentiary in Youngstown. ViaPath ConnectNetwork handles phone calls after Ohio switched from Securus. Find messaging and visit options.",

    description:
      "Ohio State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at Ohio's only supermax correctional facility in Youngstown.",

    overview: [
      "Ohio State Penitentiary is a supermax correctional facility operated by the Ohio Department of Rehabilitation and Correction, located in Mahoning County near Youngstown in northeastern Ohio. Opened in 1998, it is the only supermax facility in the Ohio prison system. OSP was built to house Ohio's most serious and difficult-to-manage inmates, including those on death row and those who have committed serious violations at other Ohio facilities. The supermax design means most inmates are in single-occupancy cells with highly restricted movement and programming access, which directly affects communication options.",
      "Communication at Ohio State Penitentiary operates through ODRC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account, add the inmate using their Ohio DOC number, and purchase stamps to send messages. GTL manages phone calls and video visitation. At a supermax facility, communication access is more restricted than at general-population Ohio prisons. Phone calls and video visits may be limited based on an inmate's current classification level and privilege tier. Death row inmates at OSP may have specific communication restrictions separate from general supermax rules.",
      "The restricted nature of OSP means families should not assume standard Ohio DOC communication access applies. Confirming the inmate's current privilege level — and what that means for messaging, phone, and video access — before setting up or funding accounts will prevent frustration. When an inmate's status or privilege tier changes, communication access can shift significantly. The Ohio DOC inmate search tool provides basic housing information, but for specific communication access questions, contacting the facility directly or checking with an attorney or case manager is the most reliable approach. JPay and GTL accounts created for OSP work across the Ohio DOC system if an inmate is transferred to a lower-security facility.",
    ],

    address: "878 Coitsville-Hubbard Road, Youngstown, OH 44505",
    phone: "(330) 743-0700",
    website: "https://drc.ohio.gov",
    inmateCapacity: 500,
    established: 1998,
    operatedBy: "Ohio Department of Rehabilitation and Correction (ODRC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Access may vary by privilege level.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation. More restricted at supermax level than at general ODRC facilities.",
      },
    ],

    communication: {
      messaging: { status: "limited", provider: "JPay", notes: "Available but subject to privilege level. Confirm current access before funding." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Supermax classification may restrict video access." },
      photos: { status: "limited", provider: "JPay", notes: "Digital photos via JPay. Supermax-level content review applies." },
      phone: { status: "limited", provider: "GTL", notes: "Restricted at supermax level. Confirm current phone access for the specific inmate." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay. Standard across all ODRC facilities." },
    },

    rules: [
      "Communication access depends directly on the inmate's current privilege level. Do not assume standard access.",
      "Death row inmates at OSP may have additional restrictions beyond standard supermax rules.",
      "JPay and GTL are separate platforms requiring separate accounts.",
      "Confirm current messaging, phone, and video access with the facility before funding any account.",
      "All communications are monitored by ODRC staff.",
    ],

    faq: [
      {
        question: "Can I message someone at Ohio State Penitentiary?",
        answer: "Messaging is available through JPay, but access at OSP is subject to the inmate's current privilege level. At a supermax facility, communication privileges can be more restricted than at general-population prisons. Create a JPay account at jpay.com, but confirm the inmate's current messaging access before funding stamps.",
      },
      {
        question: "Are phone calls available at Ohio State Penitentiary?",
        answer: "Phone calls use GTL, but access is more restricted at OSP than at other Ohio prisons. The number of calls permitted per month depends on the inmate's privilege tier. Fund a GTL AdvancePay account at telmate.com, but check the inmate's current phone access status first.",
      },
      {
        question: "Are there communication restrictions for death row inmates at OSP?",
        answer: "Yes. Death row inmates at Ohio State Penitentiary may have communication rules that differ from standard supermax inmates. The specific restrictions depend on current ODRC policy and the inmate's status. Confirming with the facility or with legal counsel is the most reliable way to understand what communication is currently permitted.",
      },
      {
        question: "How do I find out an inmate's current privilege level at OSP?",
        answer: "The Ohio DOC inmate search at drc.ohio.gov provides housing information. For privilege level and specific communication access, contacting the facility directly or going through the inmate's case manager is the most reliable approach. Privilege levels at OSP can change based on behavior and program participation.",
      },
      {
        question: "How do I send money to an Ohio State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in to jpay.com, navigate to Send Money, and select Ohio State Penitentiary. Add funds via debit or credit card. JPay deposits are available at all ODRC facilities regardless of security level.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "stateville-correctional-center",
      "cuyahoga-county-jail",
      "sci-phoenix",
    ],
  },

  "sci-phoenix": {
    id: "f-sci-phoenix",
    name: "SCI Phoenix",
    slug: "sci-phoenix",
    type: "state",
    stateSlug: "pennsylvania",
    stateName: "Pennsylvania",
    stateAbbr: "PA",
    countySlug: null,
    countyName: "Montgomery County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "SCI Phoenix: Securus Phone, ViaPath Messaging and Money Guide",
    seoDescription: "How to contact someone at SCI Phoenix in Collegeville PA. Securus Technologies handles phone calls. ViaPath ConnectNetwork for messaging. DC number required for all contact.",

    description:
      "SCI Phoenix communication guide. Find JPay messaging and GTL phone options for families at Pennsylvania's newest maximum-security state correctional institution in Montgomery County.",

    overview: [
      "State Correctional Institution Phoenix is a maximum-security state prison operated by the Pennsylvania Department of Corrections, located in Collegeville, Montgomery County, roughly 30 miles northwest of Philadelphia. SCI Phoenix opened in 2018 as a purpose-built replacement for SCI Graterford, which had operated on the same grounds for more than 90 years. The new facility was designed with modern correctional programming and safety standards in mind. It is the only maximum-security state prison in southeastern Pennsylvania, making it the closest major state correctional facility for Philadelphia-area families.",
      "Communication at SCI Phoenix operates through Pennsylvania DOC provider contracts. JPay manages electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their PA DOC inmate number to begin correspondence. GTL handles phone calls and video visitation under the Pennsylvania DOC contract. Setting up a GTL AdvancePay account allows families to receive inmate-initiated calls. Video visits through GTL are available and can be scheduled remotely. Given the facility's location about 30 miles from Philadelphia, in-person visits are feasible for many southeastern Pennsylvania families.",
      "Because SCI Phoenix replaced SCI Graterford, some long-term inmates and their families may be more familiar with the Graterford name. The physical facility is entirely new, and all communication happens through the same JPay and GTL platforms used at other PA DOC institutions. If an inmate was previously at Graterford, their JPay and GTL account history carries forward since the same platforms serve the entire Pennsylvania state system. Families new to the Pennsylvania system should note that JPay handles messaging and money while GTL handles phones and video — these are separate platforms requiring separate setup.",
    ],

    address: "1200 Mokychic Drive, Collegeville, PA 19426",
    phone: "(484) 362-3500",
    website: "https://www.cor.pa.gov",
    rosterUrl: "https://www.cor.pa.gov/Inmates/Pages/Inmate-Locator.aspx",
    visitingHours: "Visits seven days a week by scheduled appointment; schedule online at least three days in advance.",
    inmateCapacity: 3400,
    established: 2018,
    operatedBy: "Pennsylvania Department of Corrections (PA DOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Requires PA DOC inmate number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the Pennsylvania DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires PA DOC inmate number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to PA DOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by PA DOC staff before delivery.",
      "PA DOC system-wide JPay and GTL accounts transfer if the inmate moves to another state facility.",
      "In-person visiting at SCI Phoenix requires prior approval through the PA DOC visitor application process.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "Is SCI Phoenix the same location as old Graterford prison?",
        answer: "SCI Phoenix is on the same grounds in Collegeville, but it is an entirely new, purpose-built facility that replaced SCI Graterford when it opened in 2018. The old Graterford buildings have been decommissioned. All communication now goes through SCI Phoenix using the same JPay and GTL platforms used at other PA DOC prisons.",
      },
      {
        question: "How do I start messaging someone at SCI Phoenix?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Pennsylvania DOC number. Purchase stamps and send messages. PA DOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do phone calls work at SCI Phoenix?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones. You cannot call in to speak with an inmate directly.",
      },
      {
        question: "How far is SCI Phoenix from Philadelphia?",
        answer: "SCI Phoenix is about 30 miles northwest of Philadelphia in Collegeville, reachable via I-76 (Pennsylvania Turnpike). The drive from the city is typically 45 to 60 minutes. It is the closest maximum-security state prison to the Philadelphia area, making in-person visits more feasible than at more distant facilities.",
      },
      {
        question: "How do I send money to a SCI Phoenix inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select SCI Phoenix. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "ohio-state-penitentiary",
      "philadelphia-detention-center",
      "attica-correctional-facility",
    ],
  },

  "mississippi-state-penitentiary": {
    id: "f-parchman",
    name: "Mississippi State Penitentiary",
    slug: "mississippi-state-penitentiary",
    type: "state",
    stateSlug: "mississippi",
    stateName: "Mississippi",
    stateAbbr: "MS",
    countySlug: null,
    countyName: "Sunflower County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Parchman Farm: Phone Calls, Messaging and Money Transfer Guide",
    seoDescription: "How to contact someone at Mississippi State Penitentiary Parchman. Find the correct provider for phone calls, messaging, video visits, and money transfers at this Mississippi DOC facility.",

    description:
      "Mississippi State Penitentiary (Parchman Farm) communication guide. Find JPay messaging and Securus phone options for families at this historic Mississippi Delta correctional facility.",

    overview: [
      "Mississippi State Penitentiary, widely known as Parchman Farm or simply Parchman, is a maximum-security state prison operated by the Mississippi Department of Corrections, located in Sunflower County in the heart of the Mississippi Delta. Parchman has operated as a working prison farm since its founding in 1901 on land that was previously a cotton plantation. It is one of the oldest continuously operating prisons in the United States and one of the most historically significant correctional facilities in American history, having held a wide range of individuals from civil rights activists to some of the state's most serious offenders. The facility occupies a large rural tract in an agricultural part of the Delta.",
      "Communication at Parchman operates through Mississippi DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Mississippi DOC number to begin correspondence. Securus Technologies manages phone calls and video visitation at Parchman under the MDOC contract. Setting up a Securus prepaid account allows families to receive inmate-initiated calls. Video visits through Securus are available and are a practical option given how remote the facility is — Parchman is more than two hours north of Jackson in a rural area without major nearby towns.",
      "The conditions and operations at Parchman have been the subject of ongoing legal and reform proceedings, and conditions can change more rapidly here than at more stable facilities. Communication access may be affected by facility lockdowns, population movement, or administrative changes. Families whose loved one has recently arrived at Parchman should confirm current communication availability directly with the facility or through MDOC before counting on a specific communication schedule. The Mississippi DOC offers an inmate search tool that can help confirm current housing assignment within the large facility.",
    ],

    address: "3794 MS Highway 32, Parchman, MS 38738",
    phone: "(662) 745-6611",
    website: "https://www.mdoc.ms.gov",
    fax: "(662) 745-8912",
    rosterUrl: "https://www.ms.gov/mdoc/inmate",
    mailingAddress: "Inmate Name, ID Number\nMississippi State Penitentiary\nP.O. Box 1057\nParchman, MS 38738",
    inmateCapacity: 4000,
    established: 1901,
    operatedBy: "Mississippi Department of Corrections (MDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Requires Mississippi DOC number.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the MDOC contract. Video is especially practical given the remote location.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available. Confirm current access as facility conditions can change." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available. Practical given the facility's remote Delta location." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MDOC content guidelines." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls. Fund Securus prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Facility conditions and lockdowns can affect communication access. Confirm current status before assuming standard access.",
      "JPay and Securus are separate platforms. Messaging and phone funds are not interchangeable.",
      "Messages via JPay are reviewed by MDOC staff before delivery.",
      "Video visits must be scheduled in advance through Securus.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Parchman?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Mississippi DOC number. Purchase stamps and send your message. Staff review messages before delivery. Be aware that conditions at Parchman have been subject to change; confirm current communication access is active if messages are not going through.",
      },
      {
        question: "How do I set up phone calls from Parchman?",
        answer: "Phone calls from Mississippi State Penitentiary use Securus. Create a Securus account at securustech.net or through the Securus app. Set up a prepaid account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "Is video visitation available at Parchman?",
        answer: "Yes, remote video visits are available through Securus and are especially practical given how remote the facility is in Sunflower County. Log into your Securus account, search for Mississippi State Penitentiary, and schedule an available slot. Book well in advance.",
      },
      {
        question: "How remote is Parchman?",
        answer: "Parchman is in the Mississippi Delta in Sunflower County, roughly 100 miles north of Jackson and more than two hours from Memphis. There are no major towns nearby. For most families, electronic communication via JPay and video visits via Securus are the most practical options for regular contact.",
      },
      {
        question: "How do I send money to a Parchman inmate?",
        answer: "Trust account deposits are made through JPay. Log in, navigate to Send Money, and select Mississippi State Penitentiary. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "louisiana-state-penitentiary",
      "holman-correctional-facility",
      "georgia-diagnostic-and-classification-prison",
    ],
  },

  "georgia-diagnostic-and-classification-prison": {
    id: "f-georgia-diagnostic",
    name: "Georgia Diagnostic and Classification Prison",
    slug: "georgia-diagnostic-and-classification-prison",
    type: "state",
    stateSlug: "georgia",
    stateName: "Georgia",
    stateAbbr: "GA",
    countySlug: null,
    countyName: "Butts County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Georgia Diagnostic Prison: Securus Phone and JPay Messaging Guide",
    seoDescription: "How to contact someone at Georgia Diagnostic and Classification Prison in Jackson. Securus for phone calls. JPay for messaging and money transfers. GDC number required for all contact.",

    description:
      "Georgia Diagnostic and Classification Prison communication guide. Find JPay messaging and GTL phone options for families at Georgia's main intake and death row facility in Butts County.",

    overview: [
      "Georgia Diagnostic and Classification Prison is a maximum-security state correctional facility operated by the Georgia Department of Corrections, located in Butts County near the town of Jackson, approximately 60 miles south of Atlanta. It serves as the primary intake and classification facility for new Georgia state prison commitments — most newly sentenced male inmates in the Georgia system pass through GDCP before being assigned to a permanent facility. The prison also houses Georgia's death row. Because of its classification function, the population at GDCP is constantly changing as inmates are processed and transferred, which is an important consideration for families in terms of communication setup timing.",
      "Communication at GDCP operates through Georgia DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Georgia DOC number. GTL manages phone calls and video visitation. Because many inmates at GDCP are in the initial classification process, it is worth noting that newly admitted inmates may take several weeks to fully enter the system before all communication access is active. Families are often advised to wait until an inmate has been classified and assigned a permanent facility before investing heavily in account setup, though setting up accounts early can help avoid delays.",
      "Once an inmate is classified and transferred out of GDCP to a permanent Georgia DOC facility, communication continues through JPay and GTL since both serve the entire state system. Georgia DOC accounts do not need to be recreated after transfer. If your loved one has been at GDCP for more than a few weeks without communication, it may indicate the classification process is still underway or that they have recently been transferred and the new facility information has not yet been updated. The Georgia DOC offender search tool at gdc.ga.gov allows families to look up current housing location.",
    ],

    address: "100 GA-36, Jackson, GA 30233",
    phone: "(770) 504-2000",
    website: "https://gdc.ga.gov",
    inmateCapacity: 1600,
    established: 1939,
    operatedBy: "Georgia Department of Corrections (GDC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photos, and trust account deposits. Uses Georgia DOC number. System-wide across GDC.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the Georgia DOC contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available once intake classification is complete. May take a few weeks for new arrivals." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available for eligible inmates. Schedule in advance." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to GDC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay. Available system-wide." },
    },

    rules: [
      "Newly admitted inmates may take several weeks to complete classification before full communication access is active.",
      "JPay and GTL are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages are reviewed by GDC staff before delivery.",
      "GDC-wide accounts transfer to new facility if inmate is classified and moved out of GDCP.",
      "Death row communication access may differ from standard classification population access.",
    ],

    faq: [
      {
        question: "Why is communication not going through for someone newly arrived at GDCP?",
        answer: "Newly sentenced inmates typically go through a classification process that can take several weeks. During this period, full communication access may not yet be active. Set up JPay and GTL accounts early, but expect some delay before messages and calls begin moving normally. Check gdc.ga.gov for current housing information.",
      },
      {
        question: "How do I message someone at Georgia Diagnostic?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Georgia DOC number. Purchase stamps and send messages. Once the inmate has completed initial classification, messages are reviewed by staff and delivered within 24 to 48 hours.",
      },
      {
        question: "How do phone calls work at GDCP?",
        answer: "Phone calls use GTL. Create a GTL account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones once phone access is active for their housing unit.",
      },
      {
        question: "Will accounts work at the next facility after transfer from GDCP?",
        answer: "Yes. JPay and GTL both serve all Georgia DOC facilities statewide. Your accounts, contact list, and history carry over. Use the GDC offender search to confirm the new facility, then update the facility name when scheduling GTL video visits.",
      },
      {
        question: "How do I send money to a GDCP inmate?",
        answer: "Trust account deposits go through JPay. Log in, go to Send Money, and select Georgia Diagnostic and Classification Prison. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "louisiana-state-penitentiary",
      "mississippi-state-penitentiary",
      "holman-correctional-facility",
    ],
  },

  "red-onion-state-prison": {
    id: "f-red-onion",
    name: "Red Onion State Prison",
    slug: "red-onion-state-prison",
    type: "state",
    stateSlug: "virginia",
    stateName: "Virginia",
    stateAbbr: "VA",
    countySlug: null,
    countyName: "Wise County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Red Onion State Prison: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Red Onion State Prison in Pound VA. Find the correct provider for phone calls, electronic messaging, and money transfers at this Virginia DOC facility.",

    description:
      "Red Onion State Prison communication guide. Find JPay messaging and GTL phone options for families at this remote maximum-security facility in Wise County, Virginia.",

    overview: [
      "Red Onion State Prison is a maximum-security state correctional facility operated by the Virginia Department of Corrections, located in Wise County in the far southwestern corner of Virginia, near the towns of Pound and Clintwood in the Appalachian coalfields region. Opened in 1998, the facility was built in a part of Virginia that is more than 350 miles from Northern Virginia and the Washington D.C. metro area, making it one of the more remote state prisons in the eastern United States. Red Onion was designed as a supermax-style facility and houses Virginia's most serious offenders, with a focus on segregation and restrictive housing.",
      "Communication at Red Onion operates through Virginia DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Virginia DOC number to begin correspondence. GTL manages phone calls and video visitation under the VADOC statewide contract. At a maximum-security facility like Red Onion, communication access depends significantly on the inmate's current housing assignment and privilege level. Those in segregated housing may have restricted messaging or phone access, while general-population maximum-security inmates have broader access.",
      "The extreme remoteness of Red Onion — it sits at the western tip of Virginia, accessible primarily via US-23 through the mountains — makes in-person visits exceptionally difficult for most families, particularly those in Northern Virginia, Richmond, or other population centers. For many families, JPay messaging and GTL video visits are the primary means of regular contact. Setting up both accounts early after an inmate's arrival at Red Onion is strongly recommended. Because JPay and GTL serve the entire Virginia DOC system, accounts created for Red Onion will work at any other VADOC facility if an inmate is transferred.",
    ],

    address: "10800 Morgan Ford Road, Pound, VA 24279",
    phone: "(276) 796-7510",
    website: "https://vadoc.virginia.gov",
    inmateCapacity: 800,
    established: 1998,
    operatedBy: "Virginia Department of Corrections (VADOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Access may vary by housing assignment.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation. Especially practical given the extremely remote location.",
      },
    ],

    communication: {
      messaging: { status: "limited", provider: "JPay", notes: "Available but restricted based on housing assignment. Segregated inmates may have reduced access." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Remote location makes video visits especially valuable." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay, subject to VADOC content guidelines." },
      phone: { status: "limited", provider: "GTL", notes: "Available but restricted based on housing tier and privilege level." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay. Available regardless of housing assignment." },
    },

    rules: [
      "Communication access depends on housing assignment and privilege level. Confirm status before funding accounts.",
      "JPay and GTL are separate platforms requiring separate accounts and funding.",
      "The remote location makes electronic communication and video visits especially important for regular contact.",
      "Messages are reviewed by VADOC staff before delivery.",
      "Senders must be on the approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Red Onion?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Virginia DOC number. Purchase stamps and send messages. Because Red Onion houses maximum-security inmates, some may have restricted messaging access depending on housing assignment. Confirm access status if messages are not being received.",
      },
      {
        question: "How do I set up phone calls from Red Onion?",
        answer: "Phone calls use GTL. Create a GTL account at telmate.com or through the GTL Connect app, set up a prepaid AdvancePay account linked to your phone number, and add funds. Phone access depends on the inmate's current privilege tier at this maximum-security facility.",
      },
      {
        question: "How far is Red Onion from major Virginia cities?",
        answer: "Red Onion is in Wise County at the far southwestern tip of Virginia — more than 350 miles from Northern Virginia, about 310 miles from Richmond, and about 200 miles from Roanoke. The drive from Northern Virginia takes five to six hours. For most families, GTL video visits and JPay messaging are far more practical than regular in-person visits.",
      },
      {
        question: "Can I do a video visit with someone at Red Onion?",
        answer: "Video visits are available for eligible inmates through GTL and are especially useful given the facility's remote location. Log into your GTL account, search for Red Onion State Prison, and select an available slot. Schedule well in advance. Confirm the inmate's eligibility for video visits based on their current housing assignment.",
      },
      {
        question: "How do I send money to a Red Onion inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Red Onion State Prison. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "federal-correctional-complex-petersburg",
      "sing-sing-correctional-facility",
      "attica-correctional-facility",
    ],
  },

  "mci-cedar-junction": {
    id: "f-mci-cedar-junction",
    name: "MCI Cedar Junction",
    slug: "mci-cedar-junction",
    type: "state",
    stateSlug: "massachusetts",
    stateName: "Massachusetts",
    stateAbbr: "MA",
    countySlug: null,
    countyName: "Norfolk County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "MCI Cedar Junction: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at MCI Cedar Junction in Walpole MA. Find the correct provider for phone calls, electronic messaging, and money transfers at this Massachusetts DOC facility.",

    description:
      "MCI Cedar Junction communication guide. Find JPay messaging and Securus phone options for families at Massachusetts' only Level VI maximum-security correctional institution in Walpole.",

    overview: [
      "Massachusetts Correctional Institution Cedar Junction, often referred to by its former name Walpole, is the only Level VI maximum-security state prison in Massachusetts, operated by the Massachusetts Department of Correction and located in the town of Walpole in Norfolk County, about 25 miles southwest of Boston. The facility was established in 1956 and houses the state's most serious offenders, including those serving life sentences and individuals requiring close management due to their criminal history or institutional behavior. Level VI is the highest security designation in the Massachusetts prison system.",
      "Communication at MCI Cedar Junction operates through Massachusetts DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Massachusetts DOC number to begin correspondence. Securus Technologies manages phone calls and video visitation under the Massachusetts DOC contract. Setting up a Securus prepaid account linked to your phone number allows you to receive inmate-initiated calls. Video visits through Securus are available and can be a useful option for families who live outside the Greater Boston area.",
      "Because MCI Cedar Junction is Massachusetts' only maximum-security facility, it receives the state's highest-risk inmates from across Massachusetts, meaning many families may be traveling from distant parts of the state or from other states altogether. The facility's location about 25 miles from Boston in Walpole makes it more accessible than some other maximum-security institutions in New England, and there is reasonable transit connectivity from the MBTA system for local families. Maximum-security status means some inmates will have restricted communication access depending on their housing unit or disciplinary status, so confirming current access with the facility is advisable before setting up accounts.",
    ],

    address: "1 Administration Road, Walpole, MA 02032",
    phone: "(508) 850-6001",
    website: "https://www.mass.gov/orgs/massachusetts-department-of-correction",
    inmateCapacity: 600,
    established: 1956,
    operatedBy: "Massachusetts Department of Correction (MADOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photos, and trust account deposits. Requires Massachusetts DOC number.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the Massachusetts DOC contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available. Maximum-security status may result in restricted access for some housing units." },
      video: { status: "limited", provider: "Securus", notes: "Available for eligible inmates. Confirm eligibility based on housing assignment." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay, subject to Massachusetts DOC content guidelines." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls. Fund Securus prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary purchases." },
    },

    rules: [
      "Level VI maximum security means some inmates have restricted communication access based on housing or disciplinary status.",
      "JPay and Securus are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by Massachusetts DOC staff before delivery.",
      "In-person visits require prior approval through the Massachusetts DOC visitor application process.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at MCI Cedar Junction?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Massachusetts DOC number. Purchase stamps and compose your message. DOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from MCI Cedar Junction?",
        answer: "Phone calls use Securus. Create a Securus account at securustech.net or through the Securus app. Set up a prepaid account linked to your phone number and add funds. The inmate will call you from facility phones on scheduled call days.",
      },
      {
        question: "Is video visitation available at MCI Cedar Junction?",
        answer: "Yes, through Securus, though availability depends on the inmate's current housing assignment and eligibility. Log into your Securus account, search for MCI Cedar Junction, and schedule an available slot well in advance.",
      },
      {
        question: "Is MCI Cedar Junction accessible from Boston?",
        answer: "Yes. Walpole is about 25 miles southwest of Boston, reachable by car or commuter rail on the MBTA Providence/Stoughton line (Walpole station). This makes it more accessible for Greater Boston families than most other New England state prisons.",
      },
      {
        question: "How do I send money to a MCI Cedar Junction inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select MCI Cedar Junction. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "fci-danbury",
      "fci-ray-brook",
      "sci-phoenix",
    ],
  },

  "ionia-correctional-facility": {
    id: "f-ionia-cf",
    name: "Ionia Correctional Facility",
    slug: "ionia-correctional-facility",
    type: "state",
    stateSlug: "michigan",
    stateName: "Michigan",
    stateAbbr: "MI",
    countySlug: null,
    countyName: "Ionia County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Ionia Correctional Facility: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Ionia Correctional Facility in Michigan. GTL ConnectNetwork handles phone calls. JPay for messaging. Michigan mail scanning converts letters to digital copies.",

    description:
      "Ionia Correctional Facility communication guide. Find JPay messaging and GTL phone options for families at this maximum-security Michigan Department of Corrections facility.",

    overview: [
      "Ionia Correctional Facility is a maximum-security state prison operated by the Michigan Department of Corrections, located in the city of Ionia in Ionia County in west-central Michigan, about 30 miles east of Grand Rapids. The facility has roots stretching back to 1877 when the site first operated as the Michigan Asylum for the Insane, and the grounds were later converted to correctional use. The current maximum-security facility houses adult male inmates serving longer sentences and represents one of the higher-security institutions in the Michigan prison system. Ionia County has a long history as a correctional hub in Michigan, with several facilities historically operating in the area.",
      "Communication at Ionia Correctional Facility follows Michigan DOC provider contracts. JPay manages electronic messaging, photo sharing, and money transfers. Families create a JPay account, add the inmate using their Michigan DOC number, and purchase stamps to begin correspondence. GTL handles phone calls and video visitation under the MDOC statewide contract. The standard two-platform setup — JPay for messaging and GTL for phone and video — applies here as it does across the Michigan state system.",
      "Ionia's location in west-central Michigan makes it reasonably accessible for families in the Grand Rapids area and other parts of western Michigan, though families in Detroit or southeastern Michigan face a two- to three-hour drive. For those who cannot visit in person regularly, JPay messaging and GTL video visits provide reliable alternatives. Because Michigan DOC uses JPay and GTL system-wide, accounts created at Ionia will transfer to any other Michigan DOC facility if an inmate is moved. The MDOC online offender search can confirm current housing location if there is uncertainty about which facility a loved one is assigned to.",
    ],

    address: "1576 W. Bluewater Highway, Ionia, MI 48846",
    phone: "(616) 527-6691",
    website: "https://www.michigan.gov/corrections",
    inmateCapacity: 1300,
    established: 1992,
    operatedBy: "Michigan Department of Corrections (MDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Uses Michigan DOC number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the MDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Michigan DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms requiring separate accounts and funding.",
      "Messages are reviewed by MDOC staff before delivery.",
      "MDOC system-wide accounts transfer if the inmate is moved to another Michigan facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Ionia Correctional Facility?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Michigan DOC number. Purchase stamps and send your message. MDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Ionia Correctional Facility?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Ionia from Grand Rapids and Detroit?",
        answer: "Ionia is about 30 miles east of Grand Rapids — roughly a 30 to 40 minute drive. Detroit is approximately 130 miles east, making it about a two-hour drive. For Grand Rapids-area families, in-person visits are fairly accessible.",
      },
      {
        question: "Do JPay and GTL accounts carry over if my loved one transfers to another Michigan facility?",
        answer: "Yes. JPay and GTL both serve all MDOC facilities statewide. Your accounts, contact history, and message records carry over automatically. You may need to update the facility name when scheduling GTL video visits after a transfer.",
      },
      {
        question: "How do I send money to an Ionia Correctional Facility inmate?",
        answer: "Trust account deposits are made through JPay. Log in, navigate to Send Money, and select Ionia Correctional Facility. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "fci-milan",
      "ohio-state-penitentiary",
      "stateville-correctional-center",
    ],
  },

  "riverbend-maximum-security-institution": {
    id: "f-riverbend",
    name: "Riverbend Maximum Security Institution",
    slug: "riverbend-maximum-security-institution",
    type: "state",
    stateSlug: "tennessee",
    stateName: "Tennessee",
    stateAbbr: "TN",
    countySlug: null,
    countyName: "Davidson County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Riverbend Maximum Security: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Riverbend Maximum Security Institution in Nashville TN. ConnectNetwork GTL handles phone calls. Find messaging and money transfer options at this TDOC facility.",

    description:
      "Riverbend Maximum Security Institution communication guide. Find JPay messaging and GTL phone options for families at Tennessee's death row facility in Nashville.",

    overview: [
      "Riverbend Maximum Security Institution is a maximum-security state correctional facility operated by the Tennessee Department of Correction, located in Davidson County on the west side of Nashville along the Cumberland River. The facility opened in 1989 and holds Tennessee's death row for male inmates alongside general-population maximum-security inmates. Its location within the Nashville metropolitan area makes it one of the more urban state maximum-security prisons in the South, accessible from multiple parts of Middle Tennessee without the long rural drives required to reach many other state facilities.",
      "Communication at Riverbend operates through Tennessee DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account, add the inmate using their Tennessee DOC number, and purchase stamps to begin correspondence. GTL manages phone calls and video visitation under the TDOC statewide contract. Like other Tennessee state facilities, the process requires separate accounts for messaging and phone services. JPay handles one side, GTL handles the other, and funds on one platform cannot be used on the other.",
      "Death row inmates at Riverbend may have communication access that differs from the general maximum-security population. Tennessee's death row is housed at Riverbend, and while JPay and GTL are the platforms used, specific access levels for death row inmates depend on TDOC policy and the inmate's current status. Families whose loved one is on Tennessee's death row should confirm current communication access with the facility. For general-population maximum-security inmates, the standard TDOC communication setup through JPay and GTL applies, and accounts created at Riverbend will carry over to any other Tennessee DOC facility if an inmate is transferred.",
    ],

    address: "7475 Cockrill Bend Industrial Road, Nashville, TN 37243",
    phone: "(615) 350-3100",
    website: "https://www.tn.gov/correction",
    inmateCapacity: 700,
    established: 1989,
    operatedBy: "Tennessee Department of Correction (TDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Requires Tennessee DOC number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the Tennessee DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ based on TDOC policy." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Death row video access varies. Confirm status before booking." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to TDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Death row phone access may be more restricted." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay." },
    },

    rules: [
      "Death row inmates may have different communication rules. Confirm access directly with the facility.",
      "JPay and GTL are separate platforms. Messaging and phone funds do not transfer.",
      "Messages are reviewed by TDOC staff before delivery.",
      "TDOC accounts are system-wide and transfer if the inmate moves to another Tennessee facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Riverbend?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Tennessee DOC number. Purchase stamps and send messages. Staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Riverbend?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "Is video visitation available at Riverbend?",
        answer: "Yes, through GTL, but death row inmates may have restricted video access. For general-population inmates, log into your GTL account, search for Riverbend Maximum Security Institution, and select an available slot. Schedule well in advance.",
      },
      {
        question: "Is Riverbend in Nashville?",
        answer: "Yes. Riverbend is located in Davidson County on the west side of Nashville along the Cumberland River. It is one of the few maximum-security state prisons located within a major city, which makes in-person visits significantly more accessible for Middle Tennessee families.",
      },
      {
        question: "How do I send money to a Riverbend inmate?",
        answer: "Trust account deposits go through JPay. Log in, navigate to Send Money, and select Riverbend Maximum Security Institution. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "fci-memphis",
      "shelby-county-criminal-justice-center",
      "louisiana-state-penitentiary",
    ],
  },

  "high-desert-state-prison": {
    id: "f-high-desert",
    name: "High Desert State Prison",
    slug: "high-desert-state-prison",
    type: "state",
    stateSlug: "nevada",
    stateName: "Nevada",
    stateAbbr: "NV",
    countySlug: null,
    countyName: "Clark County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "High Desert State Prison: Free Calls, Securus and Messaging Guide",
    seoDescription: "How to contact someone at High Desert State Prison in Susanville CA. CDCR phone calls are free under SB 1008. Securus replaced ViaPath. Find messaging and communication options.",

    description:
      "High Desert State Prison communication guide. Find JPay messaging and GTL phone options for families at Nevada's largest correctional facility near Las Vegas.",

    overview: [
      "High Desert State Prison is a maximum-security state correctional facility operated by the Nevada Department of Corrections, located in Indian Springs in Clark County, roughly 45 miles northwest of Las Vegas on US-95. Opened in 2012, it is the largest prison in Nevada by capacity and houses adult male inmates at maximum-security and medium-security levels. The facility sits in the Mojave Desert landscape of southern Nevada, near the Nevada Test and Training Range. Indian Springs is a small community with limited services, and the prison is the dominant employer in the area.",
      "Communication at High Desert State Prison operates through Nevada DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account, add the inmate using their Nevada DOC number, and purchase stamps to begin correspondence. GTL manages phone calls and video visitation under the NDOC statewide contract. For families in the Las Vegas area, the facility is roughly 45 miles away — a manageable drive — making in-person visits more feasible than for families elsewhere in the country. For those outside Nevada, JPay and GTL provide the primary means of regular contact.",
      "Nevada's prison system is smaller than those of larger states, and High Desert is one of only a handful of major state correctional institutions. JPay and GTL accounts created for High Desert will work at any other Nevada DOC facility if an inmate is transferred within the state system. The NDOC offender search tool at doc.nv.gov provides housing information if there is uncertainty about current location. Like all state facilities, communication access is subject to privilege levels and may be affected by disciplinary status or special housing assignments.",
    ],

    address: "20 High Desert Drive, Indian Springs, NV 89018",
    phone: "(702) 879-5400",
    website: "https://doc.nv.gov",
    inmateCapacity: 4000,
    established: 2012,
    operatedBy: "Nevada Department of Corrections (NDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Uses Nevada DOC number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the Nevada DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Nevada DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to NDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms requiring separate accounts and funding.",
      "Messages are reviewed by NDOC staff before delivery.",
      "NDOC system-wide accounts carry over to other Nevada facilities if the inmate is transferred.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at High Desert State Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Nevada DOC number. Purchase stamps and compose your message. NDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from High Desert State Prison?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "How far is High Desert from Las Vegas?",
        answer: "High Desert State Prison is in Indian Springs, about 45 miles northwest of Las Vegas on US-95. The drive typically takes about 45 to 60 minutes. For Las Vegas-area families, in-person visits are reasonably accessible.",
      },
      {
        question: "Can I do a video visit at High Desert State Prison?",
        answer: "Yes, remote video visits are available through GTL. Log into your GTL account, search for High Desert State Prison, and select an available time slot. Schedule in advance, as popular time slots can fill quickly.",
      },
      {
        question: "How do I send money to a High Desert State Prison inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select High Desert State Prison. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "arizona-state-prison-complex-florence",
      "corcoran-state-prison",
      "san-quentin-state-prison",
    ],
  },

  "corcoran-state-prison": {
    id: "f-corcoran",
    name: "Corcoran State Prison",
    slug: "corcoran-state-prison",
    type: "state",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    countySlug: null,
    countyName: "Kings County",
    securityLevel: "Level III / SHU",
    hasDetailPage: true,
    seoTitle: "Corcoran State Prison: Free Calls, Securus and Messaging Guide",
    seoDescription: "How to contact someone at California State Prison Corcoran. CDCR phone calls are free under SB 1008. Securus replaced ViaPath. Find messaging and communication options at Corcoran.",

    description:
      "Corcoran State Prison communication guide. Find JPay messaging and Securus phone options for families at this Kings County California facility known for its Security Housing Unit.",

    overview: [
      "California State Prison, Corcoran, commonly called Corcoran State Prison, is a Level III and IV state correctional facility operated by the California Department of Corrections and Rehabilitation, located in the agricultural San Joaquin Valley in Kings County, about 60 miles south of Fresno and roughly 200 miles north of Los Angeles. Opened in 1988, it also houses a Security Housing Unit designed for inmates who require the most restrictive housing available within the CDCR system. Over the years, the facility has housed a number of high-profile inmates, and it has been the subject of significant legal proceedings related to its SHU program. Following California's reforms to the SHU system in the mid-2010s, the facility's restrictive housing program has changed significantly from its earlier form.",
      "Communication at Corcoran operates through the standard CDCR provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their California CDCR number to send messages and photos. Securus manages phone calls and video visitation. The setup is the same as at other California state prisons — JPay for messaging and money, Securus for phone and video, with separate accounts and separate funding required for each. For SHU-assigned inmates, communication access may be more restricted depending on the inmate's current program level.",
      "Corcoran's location in the Central Valley means it is a significant distance from both the Bay Area and Los Angeles, making in-person visits logistically challenging for many California families. The nearest major city is Fresno, about 60 miles to the north. For families in Southern California, the drive from Los Angeles takes approximately three hours. This distance makes JPay messaging and Securus video visits particularly valuable for regular contact. Because CDCR uses JPay and Securus system-wide, accounts created for Corcoran will work at any other California state prison if an inmate is transferred within the system.",
    ],

    address: "4001 King Avenue, Corcoran, CA 93212",
    phone: "(559) 992-8800",
    website: "https://www.cdcr.ca.gov",
    inmateCapacity: 4500,
    established: 1988,
    operatedBy: "California Department of Corrections and Rehabilitation (CDCR)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses CDCR number. SHU inmates may have restricted access.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-700",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation. SHU-assigned inmates may have more restricted access.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. SHU inmates may have restricted messaging access." },
      video: { status: "limited", provider: "Securus", notes: "Available for eligible inmates. SHU status may limit video access." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to CDCR content guidelines." },
      phone: { status: "limited", provider: "Securus", notes: "Available for general population. SHU inmates may have restricted phone access." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay. Available regardless of housing assignment." },
    },

    rules: [
      "SHU-assigned inmates may have more restricted communication access than general-population Level III/IV inmates.",
      "Confirm the inmate's current housing assignment before setting up or funding accounts.",
      "JPay and Securus are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages are reviewed by CDCR staff before delivery.",
      "CDCR system-wide accounts carry over if the inmate transfers to another California state prison.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Corcoran?",
        answer: "Create a JPay account at jpay.com and add the inmate using their California CDCR number. Purchase stamps and send your message. CDCR staff review messages before delivery. If your loved one is in the SHU, confirm their current messaging access before funding stamps.",
      },
      {
        question: "How do I set up phone calls from Corcoran?",
        answer: "Phone calls use Securus. Create an account at www.securustech.net or through the Securus Mobile app. Set up a prepaid AdvancePay account linked to your phone number and add funds. General-population inmates call from facility phones on scheduled call days. SHU inmates may have restricted phone access.",
      },
      {
        question: "What is the SHU at Corcoran?",
        answer: "The SHU (Security Housing Unit) is a restrictive housing program for inmates requiring the most controlled environment within CDCR. SHU inmates are in more isolated conditions than general-population inmates, which can affect communication access. Following California's SHU reforms, the program has changed significantly from its earlier form, but SHU status still affects communication privileges.",
      },
      {
        question: "How far is Corcoran from Los Angeles and San Francisco?",
        answer: "Corcoran is in the San Joaquin Valley in Kings County — about 200 miles north of Los Angeles (roughly three hours) and about 230 miles southeast of San Francisco (roughly three and a half hours). Neither city is a short trip, making electronic communication and video visits important for regular contact.",
      },
      {
        question: "How do I send money to a Corcoran inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Corcoran State Prison. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "san-quentin-state-prison",
      "pelican-bay-state-prison",
      "folsom-state-prison",
    ],
  },

  "broad-river-correctional-institution": {
    id: "f-broad-river",
    name: "Broad River Correctional Institution",
    slug: "broad-river-correctional-institution",
    type: "state",
    stateSlug: "south-carolina",
    stateName: "South Carolina",
    stateAbbr: "SC",
    countySlug: null,
    countyName: "Richland County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Broad River Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Broad River Correctional Institution in Columbia SC. Find the correct provider for phone calls, messaging, and money transfers at this SCDC facility.",

    description:
      "Broad River Correctional Institution communication guide. Find JPay messaging and GTL phone options for families at South Carolina's maximum-security facility in Columbia.",

    overview: [
      "Broad River Correctional Institution is a maximum-security state prison operated by the South Carolina Department of Corrections, located in Richland County in the city of Columbia, the state capital. The facility opened in 1999 and houses South Carolina's most serious offenders, including those on death row. Its location within Columbia rather than a remote rural area makes it more accessible for families in the Midlands of South Carolina and for those visiting from the state's larger population centers. The facility sits in a largely industrial and institutional area on the western edge of Columbia.",
      "Communication at Broad River operates through South Carolina DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their South Carolina DOC number to begin sending messages. GTL manages phone calls and video visitation under the SCDOC statewide contract. For families who cannot travel to Columbia regularly, GTL video visits provide a practical remote alternative. The standard two-platform approach — JPay for messaging and money, GTL for phone and video — applies here as it does across the South Carolina state system.",
      "Death row at Broad River means a portion of the population faces stricter communication rules than the general maximum-security population. Families whose loved one is on South Carolina's death row should confirm current communication access with the facility before assuming standard rules apply. For general-population maximum-security inmates, the full JPay and GTL setup is available. Because both platforms serve the SCDOC system statewide, accounts created for Broad River will carry over to any other South Carolina DOC facility if an inmate is transferred.",
    ],

    address: "3060 Broad River Road, Columbia, SC 29210",
    phone: "(803) 896-1700",
    website: "https://www.doc.sc.gov",
    inmateCapacity: 1600,
    established: 1999,
    operatedBy: "South Carolina Department of Corrections (SCDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Requires South Carolina DOC number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the SCDOC contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible general-population inmates. Death row access varies." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to SCDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary purchases." },
    },

    rules: [
      "Death row inmates may have restricted communication access. Confirm directly with the facility.",
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by SCDOC staff before delivery.",
      "SCDOC accounts carry over to other South Carolina facilities if the inmate is transferred.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Broad River?",
        answer: "Create a JPay account at jpay.com and add the inmate using their South Carolina DOC number. Purchase stamps and send your message. Staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do phone calls work at Broad River?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "Is Broad River in Columbia, SC?",
        answer: "Yes. Broad River Correctional Institution is located in Richland County within the city of Columbia, South Carolina's state capital. This central location makes it more accessible than many state prisons for families across the Midlands and Upstate regions.",
      },
      {
        question: "Is video visitation available at Broad River?",
        answer: "Yes, through GTL. Log into your GTL account, search for Broad River Correctional Institution, and schedule an available slot. Death row inmates may have restricted video access. Confirm eligibility before booking.",
      },
      {
        question: "How do I send money to a Broad River inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Broad River Correctional Institution. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "federal-correctional-complex-butner",
      "georgia-diagnostic-and-classification-prison",
      "federal-correctional-complex-coleman",
    ],
  },

  "indiana-state-prison": {
    id: "f-indiana-state",
    name: "Indiana State Prison",
    slug: "indiana-state-prison",
    type: "state",
    stateSlug: "indiana",
    stateName: "Indiana",
    stateAbbr: "IN",
    countySlug: null,
    countyName: "LaPorte County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Indiana State Prison: ViaPath Phone, GettingOut Messaging Guide",
    seoDescription: "How to contact someone at Indiana State Prison in Michigan City. ViaPath ConnectNetwork handles phone calls. GettingOut for digital messaging. Must be on approved 20-person call list.",

    description:
      "Indiana State Prison communication guide. Find JPay messaging and GTL phone options for families at this maximum-security facility in Michigan City, Indiana.",

    overview: [
      "Indiana State Prison is a maximum-security state correctional facility operated by the Indiana Department of Correction, located in the city of Michigan City in LaPorte County in the northwest corner of Indiana, about five miles from Lake Michigan and roughly 60 miles east of Chicago. The facility opened in 1860, making it one of the oldest prisons in Indiana, and it houses adult male inmates serving long sentences, including those on Indiana's death row. Its location near the southern shore of Lake Michigan and close to the Chicago metropolitan area means many Indiana families are within reasonable driving distance.",
      "Communication at Indiana State Prison operates through Indiana DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account, add the inmate using their Indiana DOC number, and purchase stamps to begin correspondence. GTL manages phone calls and video visitation under the IDOC statewide contract. The two-platform model — JPay for messaging and money, GTL for phone and video — is consistent across Indiana state facilities. For death row inmates, communication access may be subject to additional restrictions compared to general maximum-security population inmates.",
      "Michigan City's location near the Illinois-Indiana border and relatively close to the Chicago area makes Indiana State Prison more geographically accessible for families in northern Indiana and suburban Chicago than most Indiana state prisons. Interstate 94 runs nearby, providing a direct route from the Chicago metropolitan area. For families elsewhere in Indiana or from other states, JPay messaging and GTL video visits are the practical alternatives to long-distance travel. Indiana DOC accounts created at Indiana State Prison will work at other IDOC facilities if an inmate is transferred within the state system.",
    ],

    address: "1 Park Row, Michigan City, IN 46360",
    phone: "(219) 874-7256",
    website: "https://www.in.gov/idoc",
    rosterUrl: "http://www.in.gov/apps/indcorrection/ofs/ofs",
    inmateCapacity: 1900,
    established: 1860,
    operatedBy: "Indiana Department of Correction (IDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Uses Indiana DOC number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the Indiana DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Death row inmates may have restricted access." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to IDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Death row inmates may face stricter communication limits than general maximum-security inmates.",
      "JPay and GTL are separate platforms. Messaging and phone funds are not transferable.",
      "Messages are reviewed by IDOC staff before delivery.",
      "IDOC system-wide accounts carry over if the inmate transfers to another Indiana facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Indiana State Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Indiana DOC number. Purchase stamps and compose your message. IDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Indiana State Prison?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you directly from facility phones.",
      },
      {
        question: "How close is Indiana State Prison to Chicago?",
        answer: "Michigan City is about 60 miles east of Chicago on I-94, roughly a one-hour drive. The location near the Illinois-Indiana border makes this facility significantly more accessible for Chicago-area families than most Indiana state prisons.",
      },
      {
        question: "Is video visitation available at Indiana State Prison?",
        answer: "Yes, remote video visits are available through GTL. Log into your GTL account, search for Indiana State Prison, and select an available time slot. Schedule in advance. Death row inmates may have restricted video access.",
      },
      {
        question: "How do I send money to an Indiana State Prison inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Indiana State Prison. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "federal-correctional-complex-terre-haute",
      "stateville-correctional-center",
      "ohio-state-penitentiary",
    ],
  },

  "potosi-correctional-center": {
    id: "f-potosi",
    name: "Potosi Correctional Center",
    slug: "potosi-correctional-center",
    type: "state",
    stateSlug: "missouri",
    stateName: "Missouri",
    stateAbbr: "MO",
    countySlug: null,
    countyName: "Washington County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Potosi Correctional Center: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Potosi Correctional Center in Mineral Point MO. Find the correct provider for phone calls, electronic messaging, and money transfers at this Missouri facility.",

    description:
      "Potosi Correctional Center communication guide. Find JPay messaging and Securus phone options for families at Missouri's maximum-security death row facility in Washington County.",

    overview: [
      "Potosi Correctional Center is a maximum-security state prison operated by the Missouri Department of Corrections, located in Washington County in the Ozark highlands of southeastern Missouri, near the small town of Mineral Point, about 70 miles southwest of St. Louis. The facility opened in 1989 and serves as Missouri's death row and primary maximum-security institution. Its rural Ozark setting means it is in a remote area with limited nearby services, though it is within reasonable driving distance of the St. Louis metropolitan area.",
      "Communication at Potosi operates through Missouri DOC provider contracts. JPay manages electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Missouri DOC number to begin sending messages. Securus Technologies handles phone calls and video visitation under the Missouri DOC contract. Setting up a Securus prepaid account linked to your phone number allows you to receive inmate-initiated calls. Video visits through Securus are a practical option for families who cannot easily make the drive to Washington County.",
      "Missouri's death row is housed at Potosi, which means a portion of the population faces more restrictive communication rules than the general maximum-security population. Families whose loved one is on Missouri's death row should confirm current communication access directly with the facility. For general-population maximum-security inmates, standard Missouri DOC communication through JPay and Securus applies. The two platforms serve the Missouri system statewide, so accounts created for Potosi will work at other Missouri DOC facilities if an inmate is transferred within the state.",
    ],

    address: "11593 State Highway O, Mineral Point, MO 63660",
    phone: "(573) 438-6000",
    website: "https://doc.mo.gov",
    inmateCapacity: 900,
    established: 1989,
    operatedBy: "Missouri Department of Corrections (MODOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Uses Missouri DOC number.",
      },
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation under the Missouri DOC contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ." },
      video: { status: "limited", provider: "Securus", notes: "Available for eligible inmates. Death row video access varies." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MODOC content guidelines." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls. Fund Securus prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay." },
    },

    rules: [
      "Death row inmates may have more restricted communication access. Confirm directly with the facility.",
      "JPay and Securus are separate platforms. Messaging and phone funds do not transfer.",
      "Messages are reviewed by Missouri DOC staff before delivery.",
      "Missouri DOC system-wide accounts carry over if the inmate is transferred.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Potosi Correctional Center?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Missouri DOC number. Purchase stamps and compose your message. Staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Potosi?",
        answer: "Phone calls from Potosi use Securus. Create a Securus account at securustech.net or through the Securus app. Set up a prepaid account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Potosi from St. Louis?",
        answer: "Potosi is in Washington County in the Ozarks, roughly 70 miles southwest of St. Louis — about an hour and 15 minutes by car. For St. Louis-area families, in-person visits are feasible on a day trip. For families further afield, electronic communication and video visits are the more practical options.",
      },
      {
        question: "Is video visitation available at Potosi?",
        answer: "Yes, through Securus. Log into your Securus account, search for Potosi Correctional Center, and select an available time slot. Schedule in advance. Death row inmates may have restricted video access — confirm eligibility before booking.",
      },
      {
        question: "How do I send money to a Potosi inmate?",
        answer: "Trust account deposits go through JPay. Log in, go to Send Money, and select Potosi Correctional Center. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "stateville-correctional-center",
      "louisiana-state-penitentiary",
      "federal-correctional-complex-terre-haute",
    ],
  },

  "eastham-unit": {
    id: "f-eastham",
    name: "Eastham Unit",
    slug: "eastham-unit",
    type: "state",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    countySlug: null,
    countyName: "Houston County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Eastham Unit: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Eastham Unit. Find the correct provider for phone calls, electronic messaging, and money transfers at this state correctional facility.",

    description:
      "Eastham Unit communication guide. Find JPay messaging and GTL phone options for families at one of the oldest and largest Texas Department of Criminal Justice facilities.",

    overview: [
      "The Eastham Unit is a maximum-security state prison operated by the Texas Department of Criminal Justice, located in Houston County in East Texas near the small town of Lovelady, roughly 120 miles north of Houston. The unit has operated since 1917, making it one of the oldest facilities in the TDCJ system. With a capacity of more than 2,000, it is one of the larger units in Texas, historically known as a working farm prison in the East Texas Piney Woods. The facility houses adult male inmates serving longer sentences, and its rural setting in Houston County makes it more remote than the Huntsville Unit but still accessible from Houston within a two-hour drive.",
      "Communication at the Eastham Unit follows TDCJ provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their TDCJ number to begin correspondence. GTL manages phone calls and video visitation under the TDCJ statewide contract. The two-platform model is the same as across all TDCJ units — separate accounts for JPay and GTL, with separate funding required. Because TDCJ uses these platforms statewide, accounts created for the Eastham Unit will work at any other TDCJ unit if an inmate is transferred.",
      "Lovelady and Houston County are in the loblolly pine region of East Texas, roughly two hours north of Houston and significantly more rural than the Huntsville Unit. For families in the Houston area, the drive is manageable for occasional visits. For families elsewhere in Texas or from out of state, JPay messaging and GTL video visits are the most practical means of regular contact. The TDCJ offender search at tdcj.texas.gov can confirm current housing assignment if there is uncertainty about which unit a loved one has been assigned to.",
    ],

    address: "2665 Prison Road 1, Lovelady, TX 75851",
    phone: "(936) 636-7321",
    website: "https://www.tdcj.texas.gov",
    inmateCapacity: 2200,
    established: 1917,
    operatedBy: "Texas Department of Criminal Justice (TDCJ)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Uses TDCJ number. System-wide across all TDCJ units.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation. Same GTL account works across all TDCJ units.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging. Requires TDCJ number. Messages reviewed before delivery." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to TDCJ content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "TDCJ system-wide accounts carry over if the inmate transfers to another TDCJ unit.",
      "Messages are reviewed by TDCJ staff before delivery.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at the Eastham Unit?",
        answer: "Create a JPay account at jpay.com and add the inmate using their TDCJ number. Purchase stamps and send your message. TDCJ staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from the Eastham Unit?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Eastham from Houston?",
        answer: "The Eastham Unit is in Lovelady in Houston County, roughly 120 miles north of Houston — about a two-hour drive. The facility is in a rural East Texas area. For Houston-area families, a day trip for in-person visits is feasible but requires planning.",
      },
      {
        question: "If my loved one transfers to another TDCJ unit, do I need new accounts?",
        answer: "No. JPay and GTL are TDCJ system-wide and your accounts carry over to any other TDCJ unit. You may need to update the unit name when scheduling GTL video visits after a transfer.",
      },
      {
        question: "How do I send money to an Eastham Unit inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Eastham Unit. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "huntsville-unit",
      "harris-county-jail",
      "dallas-county-jail",
    ],
  },

  "holman-correctional-facility": {
    id: "f-holman",
    name: "Holman Correctional Facility",
    slug: "holman-correctional-facility",
    type: "state",
    stateSlug: "alabama",
    stateName: "Alabama",
    stateAbbr: "AL",
    countySlug: null,
    countyName: "Escambia County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Holman Correctional Facility: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Holman Correctional Facility in Atmore AL. Securus Technologies handles phone calls. JPay for money transfers. Find messaging and communication options.",

    description:
      "Holman Correctional Facility communication guide. Find JPay messaging and GTL phone options for families at Alabama's death row and maximum-security facility in Escambia County.",

    overview: [
      "Holman Correctional Facility is a maximum-security state prison operated by the Alabama Department of Corrections, located in Escambia County in the southern part of Alabama, near the town of Atmore, roughly 60 miles north of Pensacola, Florida, and about 80 miles northeast of Mobile. The facility opened in 1969 and serves as the site of Alabama's death row and execution chamber. Like many Southern maximum-security prisons, Holman has been the subject of significant litigation and reform efforts over the years related to conditions and staffing. It is one of the most significant correctional institutions in Alabama both historically and in terms of the serious population it houses.",
      "Communication at Holman operates through Alabama DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Alabama DOC number to begin correspondence. GTL manages phone calls and video visitation under the ADOC statewide contract. For death row inmates, communication access may be subject to additional restrictions beyond those applied to the general maximum-security population. Families whose loved one is on Alabama's death row should confirm current access levels with the facility or through legal counsel.",
      "Holman's location in the rural south Alabama coastal plain means it is genuinely remote from most Alabama population centers. Birmingham is about three hours north, Montgomery is about two hours, and Mobile is roughly 80 miles to the west. For families traveling from outside Alabama, the nearest major airport with regular service is in Mobile or Pensacola. Because of this distance, JPay messaging and GTL video visits are particularly important for maintaining regular communication without requiring the significant time and travel that in-person visits demand. GTL accounts and JPay accounts created for Holman will work across the Alabama DOC system if an inmate is transferred.",
    ],

    address: "100 Holman Way, Atmore, AL 36503",
    phone: "(251) 368-8173",
    website: "https://doc.alabama.gov",
    inmateCapacity: 900,
    established: 1969,
    operatedBy: "Alabama Department of Corrections (ADOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Messaging, photo sharing, and trust account deposits. Requires Alabama DOC number.",
      },
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: false,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: false,
        notes: "Phone calls and video visitation. Video is especially practical given Holman's remote location.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ — confirm with facility." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Especially useful given the remote rural location." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ADOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay." },
    },

    rules: [
      "Death row inmates may have stricter communication limits. Confirm access directly with Holman or ADOC.",
      "JPay and GTL are separate platforms. Messaging and phone funds are not transferable.",
      "Messages are reviewed by ADOC staff before delivery.",
      "ADOC system-wide accounts carry over if the inmate is transferred to another Alabama facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Holman Correctional Facility?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Alabama DOC number. Purchase stamps and send your message. ADOC staff review messages before delivery. If your loved one is on death row, confirm their current messaging access before funding stamps.",
      },
      {
        question: "How do I set up phone calls from Holman?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "Is video visitation available at Holman?",
        answer: "Yes, through GTL, and it is especially practical given how remote the facility is in Escambia County. Log into your GTL account, search for Holman Correctional Facility, and select an available slot. Confirm death row eligibility for video visits if applicable.",
      },
      {
        question: "How far is Holman from Birmingham and Mobile?",
        answer: "Holman is near Atmore in Escambia County — roughly 80 miles northeast of Mobile (about 90 minutes) and approximately 220 miles south of Birmingham (about three hours). The nearest large city with regular airport service is Mobile or Pensacola, Florida.",
      },
      {
        question: "How do I send money to a Holman inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Holman Correctional Facility. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "louisiana-state-penitentiary",
      "mississippi-state-penitentiary",
      "jefferson-county-jail",
    ],
  },

  "maricopa-county-jail": {
    id: "f-maricopa-jail",
    name: "Maricopa County Jail",
    slug: "maricopa-county-jail",
    type: "county",
    stateSlug: "arizona",
    stateName: "Arizona",
    stateAbbr: "AZ",
    countySlug: null,
    countyName: "Maricopa County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Maricopa County Jail: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Maricopa County Jail in Phoenix AZ. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this Arizona facility.",

    description:
      "Maricopa County Jail communication guide. Find GTL phone, video, and messaging options for families. Learn how to stay connected at the Maricopa County Sheriff's Office jail system in Phoenix.",

    overview: [
      "Maricopa County Jail is the detention system operated by the Maricopa County Sheriff's Office in the Phoenix metropolitan area, the fourth-largest county by population in the United States. The system encompasses multiple facilities including the downtown Phoenix intake complex and several satellite jails spread across the Valley. With a total capacity exceeding 8,000 and a daily population that routinely approaches that number, Maricopa County's jail system is one of the largest in the country. The vast majority of people held in the system are pretrial detainees awaiting court proceedings in the Maricopa County court system.",
      "Communication across Maricopa County jail facilities is managed through GTL, which provides phone calls, video visitation, and electronic messaging services under the sheriff's office contract. Families can create a single GTL account to access all available services. For phone calls, setting up a GTL prepaid account linked to your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled through the GTL platform. Electronic messaging through GTL delivers messages digitally within the system. Commissary deposits can also be processed through GTL or AccessCorrections.",
      "One thing to know about the Maricopa County system is that it operates several distinct jails, and your loved one may be housed at any of them — the downtown 4th Avenue Jail, Towers Jail, Madison Street Jail, or one of the other facilities. The GTL platform and account setup are the same across all Maricopa County Sheriff's Office facilities, but confirming the specific facility and booking number is important when scheduling video visits or making deposits. After a conviction and sentencing, inmates transferred to the Arizona Department of Corrections state system will require a switch from GTL to JPay and Securus.",
    ],

    address: "100 W. Madison Street, Phoenix, AZ 85003",
    phone: "(602) 876-1000",
    website: "https://www.mcso.org",
    rosterUrl: "https://www.mcso.org/i-want-to/locate-an-inmate",
    inmateCapacity: 8000,
    established: 1994,
    operatedBy: "Maricopa County Sheriff's Office",

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "All Maricopa County jail communication — phone, video, messaging, and money — runs through GTL.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Delivered digitally within the facility." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance. Confirm specific facility location before booking." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail accepted subject to MCSO content restrictions. No digital photo service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL prepaid account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL serves all Maricopa County Sheriff's Office jail facilities. One account covers all services.",
      "Confirm the specific facility (4th Avenue, Towers, Madison, etc.) before scheduling visits.",
      "After sentencing and transfer to Arizona DOC state prison, switch to JPay and Securus.",
      "Phone and commissary accounts are funded separately within the GTL system.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone in Maricopa County Jail?",
        answer: "All communication services — phone, video, messaging, and money — are through GTL. Create a single GTL account at telmate.com or through the GTL Connect app. One account covers all Maricopa County Sheriff's Office jail facilities.",
      },
      {
        question: "Which specific jail is my loved one in?",
        answer: "Maricopa County operates several jails including the 4th Avenue Jail, Towers Jail, and Madison Street Jail among others. Use the MCSO inmate search at mcso.org to find the current facility and booking number. Confirming the specific location is important when scheduling video visits through GTL.",
      },
      {
        question: "Can I do a video visit with someone in Maricopa County Jail?",
        answer: "Yes, remote video visits are available through GTL. Log into your GTL account, navigate to video visitation, and select the specific Maricopa County facility. Schedule in advance. You will need a device with a working camera.",
      },
      {
        question: "What changes if my loved one is transferred to an Arizona state prison?",
        answer: "If sentenced and transferred to ADCRR, you will need to switch to JPay for messaging and money, and Securus for phone and video. GTL serves the county jail system, not the Arizona state prison system. Your GTL account balance does not transfer. Contact GTL about refund options for remaining funds.",
      },
      {
        question: "How do I send money to a Maricopa County jail inmate?",
        answer: "Commissary deposits can be made through GTL at telmate.com or through AccessCorrections. Add funds via debit or credit card, or cash at participating retail locations. Processing typically takes one business day.",
      },
    ],

    relatedFacilitySlugs: [
      "arizona-state-prison-complex-florence",
      "los-angeles-county-mens-central-jail",
      "dallas-county-jail",
    ],
  },

  "los-angeles-county-mens-central-jail": {
    id: "f-la-mcj",
    name: "Los Angeles County Men's Central Jail",
    slug: "los-angeles-county-mens-central-jail",
    type: "county",
    stateSlug: "california",
    stateName: "California",
    stateAbbr: "CA",
    countySlug: "los-angeles-county",
    countyName: "Los Angeles County",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "LA Men's Central Jail: Free Calls, GTL Setup and Messaging Guide",
    seoDescription: "How to contact someone at LA County Men's Central Jail. Phone calls from LA County jails are free since December 2023. GTL ConnectNetwork handles communication. No prepaid account needed.",

    description:
      "Los Angeles County Men's Central Jail communication guide. Find GTL phone, video, and messaging options for families at one of the largest jails in the United States.",

    overview: [
      "Los Angeles County Men's Central Jail is the primary adult detention facility operated by the Los Angeles County Sheriff's Department, located in downtown Los Angeles adjacent to the Hall of Justice on Bauchet Street. With a capacity exceeding 5,000 and a daily population that frequently approaches that number, MCJ is one of the largest single-site county jails in the United States. The facility serves as a central booking and housing location for the LA County jail system, which also includes Twin Towers Correctional Facility, the Pitchess Detention Center complex in Castaic, and several other jails. Booking into the LA County system typically begins at MCJ before possible transfer to another facility.",
      "Communication at Men's Central Jail and other LASD facilities is managed through GTL, which provides phone calls, video visitation, and electronic messaging services. Families create a GTL account at telmate.com to access all available services. For phone calls, a GTL prepaid account funded with your phone number allows you to receive inmate-initiated calls. Video visits can be scheduled remotely through GTL. Messaging via GTL delivers communications digitally within the facility. Money for commissary accounts can be deposited through GTL or AccessCorrections.",
      "An important note for families of LA County inmates: after processing and classification, your loved one may be transferred from MCJ to another facility within the LASD system — Twin Towers, the Century Regional Detention Center, or one of the Pitchess facilities. The GTL account and setup remain the same across all LASD facilities, but confirming the current location is necessary when scheduling video visits or making facility-specific requests. If your loved one is sentenced to a California state prison rather than remaining at an LASD facility, communication will shift to JPay for messaging and GTL phone remains but under a different system contract.",
    ],

    address: "441 Bauchet Street, Los Angeles, CA 90012",
    phone: "(213) 473-6100",
    website: "https://www.lasd.org",
    inmateCapacity: 5000,
    established: 1963,
    operatedBy: "Los Angeles County Sheriff's Department (LASD)",

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary communication provider for LASD jail facilities. One GTL account covers all services.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Messages delivered digitally within the facility." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Confirm current facility location before scheduling." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to LASD content restrictions. No digital photo service." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL is the communication platform for all LASD jail facilities. One account covers MCJ and any other LASD facility.",
      "Inmates may be transferred to another LASD facility after booking and classification. Confirm current location.",
      "If transferred to a California state prison, communication shifts to JPay for messaging and a separate CDCR contract.",
      "Phone and commissary accounts are funded separately within GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at LA County Men's Central Jail?",
        answer: "All communication services at LASD jails — phone, video, messaging, and money — are through GTL. Create an account at telmate.com or through the GTL Connect app. One GTL account works across all Los Angeles County Sheriff's Department facilities.",
      },
      {
        question: "What if my loved one has been transferred to another LASD facility?",
        answer: "Your GTL account works across all LASD facilities. When scheduling video visits, select the correct current facility from the GTL platform. Use the LASD inmate information center to confirm the current location before booking.",
      },
      {
        question: "Can I do a video visit at Men's Central Jail?",
        answer: "Yes, remote video visits are available through GTL. Log into your GTL account, navigate to video visitation, select the correct LASD facility, and choose an available time slot. Schedule in advance as slots fill quickly.",
      },
      {
        question: "What happens to communication if my loved one is sentenced to a California state prison?",
        answer: "After transfer to the California state system (CDCR), you will need a JPay account for messaging, photos, and money. GTL continues for phone and video but under the CDCR contract rather than the LASD contract. Creating a JPay account before the transfer is completed will reduce delays in communication.",
      },
      {
        question: "How do I send money to an LA County jail inmate?",
        answer: "Commissary deposits are made through GTL at telmate.com or through AccessCorrections. You can add funds via debit or credit card or in cash at participating retail locations. Processing typically takes one business day.",
      },
    ],

    relatedFacilitySlugs: [
      "san-quentin-state-prison",
      "pelican-bay-state-prison",
      "maricopa-county-jail",
    ],
  },

  "bexar-county-adult-detention-center": {
    id: "f-bexar-jail",
    name: "Bexar County Adult Detention Center",
    slug: "bexar-county-adult-detention-center",
    type: "county",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    countySlug: null,
    countyName: "Bexar County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Bexar County Adult Detention Center: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Bexar County Adult Detention Center. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this county facility.",

    description:
      "Bexar County Adult Detention Center communication guide. Find Securus phone, video, and messaging options for families in San Antonio. Learn how to stay connected at the Bexar County jail.",

    overview: [
      "The Bexar County Adult Detention Center is the main pretrial detention facility operated by the Bexar County Sheriff's Office in downtown San Antonio, Texas. With a capacity of approximately 4,000, it is one of the larger county jail systems in Texas and serves the San Antonio metropolitan area. The facility sits adjacent to the Bexar County Courthouse complex near downtown, and processes thousands of bookings annually. The majority of people held there are pretrial detainees awaiting court proceedings in the Bexar County criminal court system. San Antonio is the second-largest city in Texas and the seventh-largest in the United States, which contributes to the jail's substantial daily population.",
      "Communication at the Bexar County Adult Detention Center is managed through Securus Technologies, which provides phone calls, video visitation, and electronic messaging services under the county contract. Families can create a Securus account at securustech.net to access all available services. For phone calls, setting up a Securus AdvancePay or prepaid account linked to your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled through the Securus platform. Messaging through Securus delivers communications electronically within the facility.",
      "As with other Texas county jails, the Bexar County system uses Securus rather than the JPay and GTL platforms that serve TDCJ state prisons. If a detainee is convicted and transferred to the Texas Department of Criminal Justice state system after sentencing, you will need to switch to JPay for messaging and money, and GTL for phone calls. Until that transfer happens, Securus is the correct platform. Verifying current location using the Bexar County inmate search before setting up any account ensures you are using the right system.",
    ],

    address: "200 N. Comal Street, San Antonio, TX 78207",
    phone: "(210) 335-6300",
    website: "https://www.bexar.org/sheriff",
    visitingHours: "Video visitation; all visits must be scheduled. Tuesday to Friday 8:30 AM to 8:00 PM; Saturday 8:00 AM to 3:00 PM. No public visits on Monday (professional visits 7:00 AM to 3:00 PM). Sunday closed except Easter Sunday, Mother's Day, and Father's Day, 8:00 AM to 3:00 PM. Closed Thanksgiving Day and Christmas Day.",
    inmateCapacity: 4000,
    established: 1962,
    operatedBy: "Bexar County Sheriff's Office",

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for all Bexar County jail communication — phone, video, messaging, and money.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "Securus", notes: "Electronic messaging via Securus. Messages monitored by jail staff." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available. Schedule in advance through Securus." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Bexar County content restrictions. No digital service." },
      phone: { status: "available", provider: "Securus", notes: "Fund a Securus AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "Securus", notes: "Commissary deposits via Securus. Separate from phone account funding." },
    },

    rules: [
      "Securus serves Bexar County Jail. After transfer to a TDCJ state prison, switch to JPay and GTL.",
      "All calls, messages, and video visits are monitored by Bexar County Sheriff's Office staff.",
      "Phone and commissary accounts are separate within Securus.",
      "Video visits must be scheduled in advance. No same-day scheduling.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Bexar County Adult Detention Center?",
        answer: "All communication services — phone, video, messaging, and money — are through Securus. Create an account at securustech.net or download the Securus app. For phone calls, set up a prepaid AdvancePay account linked to your phone number.",
      },
      {
        question: "Can I do a video visit at Bexar County Jail?",
        answer: "Yes, remote video visits are available through Securus. Log into your Securus account, search for Bexar County Adult Detention Center, and select an available time slot. Schedule at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I find a current inmate at Bexar County?",
        answer: "The Bexar County Sheriff's Office provides an online inmate search at bexar.org/sheriff. You can search by name to find current booking information and confirm whether someone is currently in county custody.",
      },
      {
        question: "What changes when someone is transferred to a Texas state prison?",
        answer: "After sentencing and transfer to TDCJ, Securus is no longer the right platform. TDCJ state prisons use JPay for messaging and money, and GTL for phone and video. Create JPay and GTL accounts when transfer is anticipated to avoid communication gaps.",
      },
      {
        question: "How do I send money to a Bexar County Jail inmate?",
        answer: "Commissary deposits are processed through Securus. Log into your account and navigate to the money transfer section. You can add funds via debit or credit card. Note that commissary funds and phone account funds are separate within Securus.",
      },
    ],

    relatedFacilitySlugs: [
      "harris-county-jail",
      "dallas-county-jail",
      "huntsville-unit",
    ],
  },

  "dallas-county-jail": {
    id: "f-dallas-jail",
    name: "Dallas County Jail",
    slug: "dallas-county-jail",
    type: "county",
    stateSlug: "texas",
    stateName: "Texas",
    stateAbbr: "TX",
    countySlug: "dallas-county",
    countyName: "Dallas County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Dallas County Jail: Securus Phone, Video Visits and Money Guide",
    seoDescription: "How to contact someone at Dallas County Jail in Dallas TX. Securus handles phone calls at $0.20 per minute and video visits at $10 per 20 minutes. Book-in number required at 214-761-9025.",

    description:
      "Dallas County Jail (Lew Sterrett Justice Center) communication guide. Find Securus phone, video, and messaging options for families. Learn how to stay connected at the downtown Dallas jail.",

    overview: [
      "Dallas County Jail, formally the Lew Sterrett Justice Center, is the primary detention facility operated by the Dallas County Sheriff's Department, located in the Dallas Design District just northwest of downtown. With a capacity of approximately 7,000 and a daily population that makes it one of the ten largest county jails in the United States, Lew Sterrett processes a large volume of bookings from across Dallas County. The facility sits near the Dallas County courthouse complex and is a central part of the county criminal court system. The vast majority of people held there are awaiting trial on criminal charges filed in Dallas County courts.",
      "Communication at Dallas County Jail is handled by Securus Technologies, which provides phone calls, video visitation, and messaging services under the county contract. Families create a Securus account to access all available services. For phone calls, a Securus AdvancePay account funded with your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled through Securus. Messaging through Securus delivers communications electronically. Commissary deposits can also be processed through Securus. Because all services run through one provider, families only need a single account to manage communication.",
      "Like other Texas county jails, Dallas County uses Securus rather than the JPay and GTL platforms used by TDCJ state prisons. If someone is convicted in Dallas County and transferred to a TDCJ facility after sentencing, the communication providers will change and new accounts will be needed. Until that transfer, Securus is the correct system. Dallas County also operates additional jail facilities beyond the main Lew Sterrett complex, so confirming the specific facility location through the county inmate search before attempting to book visits or send messages is always the right first step.",
    ],

    address: "133 N. Industrial Boulevard, Dallas, TX 75207",
    phone: "(214) 749-8641",
    website: "https://www.dallascounty.org/sheriff",
    inmateCapacity: 7000,
    established: 1982,
    operatedBy: "Dallas County Sheriff's Department",

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for all Dallas County jail communication services.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "Securus", notes: "Electronic messaging via Securus. Messages monitored by Dallas County Sheriff's staff." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available through Securus. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail accepted subject to Dallas County content restrictions. No digital service." },
      phone: { status: "available", provider: "Securus", notes: "Fund a Securus AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "Securus", notes: "Commissary deposits via Securus. Separate from phone account funding." },
    },

    rules: [
      "All Dallas County jail communication goes through Securus. After TDCJ transfer, switch to JPay and GTL.",
      "Calls, messages, and visits are monitored by Dallas County Sheriff's staff.",
      "Phone and commissary accounts are maintained separately in Securus.",
      "Video visits require advance scheduling through Securus.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Dallas County Jail?",
        answer: "All communication services at Dallas County Jail are through Securus. Create an account at securustech.net or through the Securus app. One account covers phone calls, video visits, messaging, and money transfers.",
      },
      {
        question: "Can I do a video visit at Dallas County Jail?",
        answer: "Yes, remote video visits are available through Securus. Log into your account, navigate to video visitation, select Dallas County Jail (Lew Sterrett), and choose an available time slot. Schedule at least 24 hours in advance.",
      },
      {
        question: "How do I find if someone is in Dallas County Jail?",
        answer: "Dallas County provides an online inmate search at dallascounty.org. You can search by name to confirm whether someone is currently in county custody and which facility they are held in.",
      },
      {
        question: "What happens to communication when someone is transferred to TDCJ?",
        answer: "After sentencing and transfer to a Texas Department of Criminal Justice state prison, Securus no longer applies. TDCJ facilities use JPay for messaging and money, and GTL for phone and video. Create those accounts before or immediately after the transfer to maintain communication.",
      },
      {
        question: "How do I send money to a Dallas County Jail inmate?",
        answer: "Commissary deposits go through Securus. Log in to your account and use the money transfer feature. You can fund via debit or credit card. Note that commissary and phone funds are separate within the Securus system.",
      },
    ],

    relatedFacilitySlugs: [
      "harris-county-jail",
      "bexar-county-adult-detention-center",
      "eastham-unit",
    ],
  },

  "philadelphia-detention-center": {
    id: "f-philly-detention",
    name: "Philadelphia Detention Center",
    slug: "philadelphia-detention-center",
    type: "county",
    stateSlug: "pennsylvania",
    stateName: "Pennsylvania",
    stateAbbr: "PA",
    countySlug: null,
    countyName: "Philadelphia County",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "Philadelphia Detention Center: Phone Calls and Jail Messaging",
    seoDescription: "How to contact someone at Philadelphia Detention Center. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this Philadelphia facility.",

    description:
      "Philadelphia Detention Center communication guide. Find GTL phone, video, and messaging options for families. Learn how to stay connected at the Philadelphia Department of Prisons facility.",

    overview: [
      "The Philadelphia Detention Center is one of several facilities operated by the Philadelphia Department of Prisons, located in the Northeast Philadelphia neighborhood near State Road, roughly 10 miles from Center City. Philadelphia has its own city-run prison system separate from the Pennsylvania state correctional system, reflecting the city's status as a consolidated city-county. The Philadelphia prison system includes the Detention Center, the Curran-Fromhold Correctional Facility, the House of Correction, and other facilities. The Detention Center primarily houses pretrial detainees and some sentenced individuals serving shorter terms in the city system.",
      "Communication at Philadelphia Detention Center and other Philadelphia Department of Prisons facilities is managed through GTL. Phone calls, video visitation, and messaging all run through the GTL platform, which means families can use a single account to access all services. For phone calls, funding a GTL prepaid account linked to your phone number allows you to receive inmate-initiated calls. Video visits are available remotely through GTL. Because the Philadelphia prison system is city-operated rather than county or state, it functions independently from both the Pennsylvania state system and the federal system.",
      "An important distinction for Philadelphia families: the Philadelphia Department of Prisons uses GTL, which is different from what Pennsylvania state prisons use. If someone serving time at a Philadelphia facility is later transferred to a Pennsylvania DOC state prison (SCI), communication will shift to JPay for messaging and GTL under a different contract for phone. Keeping track of which system your loved one is in — city, state, or federal — ensures you are funding the correct accounts. The Philadelphia Department of Prisons provides an inmate locator to confirm current housing location across city facilities.",
    ],

    address: "8001 State Road, Philadelphia, PA 19136",
    phone: "(215) 685-8400",
    website: "https://www.phila.gov/departments/philadelphia-department-of-prisons",
    inmateCapacity: 3000,
    established: 1963,
    operatedBy: "Philadelphia Department of Prisons",

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for all Philadelphia Department of Prisons facilities. One GTL account covers all city facilities.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging available via GTL across Philadelphia city prisons." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Philadelphia Department of Prisons restrictions. No digital service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL prepaid account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL serves Philadelphia city prisons. Pennsylvania state prisons (SCIs) use a different system.",
      "Philadelphia has its own city-run prison system — it is separate from state and federal systems.",
      "One GTL account covers all Philadelphia Department of Prisons facilities.",
      "All calls, messages, and visits are monitored.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at the Philadelphia Detention Center?",
        answer: "All communication services — phone, video, messaging, and money — are through GTL. Create an account at telmate.com or through the GTL Connect app. One GTL account works across all Philadelphia Department of Prisons facilities.",
      },
      {
        question: "Is the Philadelphia prison system the same as a Pennsylvania state prison?",
        answer: "No. Philadelphia has its own city-run Department of Prisons, which is entirely separate from the Pennsylvania Department of Corrections state prisons (SCIs). City facilities use GTL. Pennsylvania state prisons use JPay for messaging and a different contract for phones. Confirm which system your loved one is in before setting up accounts.",
      },
      {
        question: "Can I do a video visit with someone at the Philadelphia Detention Center?",
        answer: "Yes, remote video visits are available through GTL. Log into your account, search for the Philadelphia Detention Center, and select an available time slot. Schedule in advance as slots can fill quickly.",
      },
      {
        question: "How do I find out which Philadelphia facility my loved one is in?",
        answer: "The Philadelphia Department of Prisons provides an inmate locator on their website at phila.gov/departments/philadelphia-department-of-prisons. You can search by name to find current housing location. Knowing the specific facility is important when scheduling visits.",
      },
      {
        question: "How do I send money to a Philadelphia Detention Center inmate?",
        answer: "Commissary deposits are processed through GTL at telmate.com or through AccessCorrections. Add funds via debit or credit card. Processing typically takes one business day.",
      },
    ],

    relatedFacilitySlugs: [
      "sci-phoenix",
      "cuyahoga-county-jail",
      "rikers-island",
    ],
  },

  "shelby-county-criminal-justice-center": {
    id: "f-shelby-cjc",
    name: "Shelby County Criminal Justice Center",
    slug: "shelby-county-criminal-justice-center",
    type: "county",
    stateSlug: "tennessee",
    stateName: "Tennessee",
    stateAbbr: "TN",
    countySlug: null,
    countyName: "Shelby County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Shelby County Jail Memphis: NCIC Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Shelby County Criminal Justice Center in Memphis TN. NCIC Inmate Communications handles phone calls at 201 Poplar Avenue. Find messaging and visit options.",

    description:
      "Shelby County Criminal Justice Center communication guide. Find GTL phone, video, and messaging options for families in Memphis. Learn how to stay connected at the 201 Poplar jail complex.",

    overview: [
      "The Shelby County Criminal Justice Center, commonly known by its address at 201 Poplar Avenue, is the main pretrial detention facility operated by the Shelby County Sheriff's Office in downtown Memphis, Tennessee. The building houses both the jail and multiple courtrooms, functioning as a combined criminal court and detention complex. Memphis is the largest city in Tennessee and the seat of Shelby County, and the CJC processes a substantial volume of bookings from across the county. The majority of people held at 201 Poplar are awaiting court dates on charges filed in Shelby County courts.",
      "Communication at the Shelby County Criminal Justice Center is managed through GTL, which provides phone calls, video visitation, and electronic messaging under the county contract. Families create a GTL account to access all available services. For phone calls, a GTL prepaid account funded with your phone number allows you to receive inmate-initiated calls. Video visits are available remotely through GTL. Electronic messaging through GTL delivers messages digitally within the facility. Commissary deposits can be processed through GTL or AccessCorrections.",
      "Shelby County uses GTL for the county jail, while Tennessee state prisons use JPay and GTL under TDOC contracts — so if someone is convicted and transferred to a Tennessee Department of Correction facility, some account changes may be needed. It is also worth noting that FCI Memphis, the federal prison in Shelby County, uses an entirely different system (CorrLinks and ConnectNetwork). Confirming the specific facility and jurisdiction before setting up accounts prevents funding the wrong platform. The Shelby County inmate search at shelby.tn.gov can help verify current custody status.",
    ],

    address: "201 Poplar Avenue, Memphis, TN 38103",
    phone: "(901) 545-2000",
    website: "https://www.shelby.tn.gov/sheriff",
    inmateCapacity: 3000,
    established: 1981,
    operatedBy: "Shelby County Sheriff's Office",

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for all Shelby County Criminal Justice Center communication services.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Messages monitored by Shelby County Sheriff's staff." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Shelby County content restrictions. No digital service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL prepaid account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL serves the Shelby County CJC. FCI Memphis (federal) uses CorrLinks and ConnectNetwork instead.",
      "After transfer to a Tennessee state prison, JPay is also needed for messaging and money.",
      "All calls, messages, and visits are monitored.",
      "Video visits must be scheduled in advance. Same-day availability is not guaranteed.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at 201 Poplar in Memphis?",
        answer: "All communication services — phone, video, messaging, and money — are through GTL. Create an account at telmate.com or through the GTL Connect app to access all services with a single account.",
      },
      {
        question: "How is Shelby County Jail different from FCI Memphis?",
        answer: "Shelby County Criminal Justice Center is a county jail operated by the Shelby County Sheriff's Office. FCI Memphis is a federal Bureau of Prisons facility in a different part of Shelby County. County jail inmates use GTL. Federal inmates at FCI Memphis use CorrLinks for messaging and ConnectNetwork for phone. They are entirely separate systems.",
      },
      {
        question: "Can I do a video visit with someone at Shelby County CJC?",
        answer: "Yes, remote video visits are available through GTL. Log into your GTL account, search for Shelby County Criminal Justice Center, and choose an available slot. Schedule in advance for best availability.",
      },
      {
        question: "How do I verify if someone is at the Shelby County CJC?",
        answer: "The Shelby County Sheriff's Office provides an inmate search online at shelby.tn.gov/sheriff. Searching by name will show current custody status and facility information.",
      },
      {
        question: "How do I send money to a Shelby County CJC inmate?",
        answer: "Commissary deposits are made through GTL at telmate.com or through AccessCorrections. You can add funds via debit or credit card or in cash at participating retail locations. Processing typically takes one business day.",
      },
    ],

    relatedFacilitySlugs: [
      "fci-memphis",
      "riverbend-maximum-security-institution",
      "jefferson-county-jail",
    ],
  },

  "cuyahoga-county-jail": {
    id: "f-cuyahoga-jail",
    name: "Cuyahoga County Jail",
    slug: "cuyahoga-county-jail",
    type: "county",
    stateSlug: "ohio",
    stateName: "Ohio",
    stateAbbr: "OH",
    countySlug: null,
    countyName: "Cuyahoga County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Cuyahoga County Jail: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Cuyahoga County Jail in Cleveland OH. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this Ohio facility.",

    description:
      "Cuyahoga County Jail communication guide. Find Securus phone, video, and messaging options for families in Cleveland. Learn how to stay connected at the Cuyahoga County correctional facility.",

    overview: [
      "Cuyahoga County Jail is the pretrial detention facility operated by the Cuyahoga County Sheriff's Office in Cleveland, Ohio. Located in downtown Cleveland near the Justice Center complex, it serves as the primary detention facility for people charged with crimes in Cuyahoga County courts. Cleveland is the second-largest city in Ohio and the county seat of Cuyahoga County. The jail processes thousands of bookings each year and holds a daily population of roughly 1,500 to 2,000 people, the majority awaiting trial. The facility is part of the Cleveland Justice Center, which also houses the county courthouse and Cleveland Municipal Court.",
      "Communication at Cuyahoga County Jail is managed through Securus Technologies, which provides phone calls, video visitation, and messaging services. Families create a Securus account at securustech.net to access all available services. For phone calls, setting up a Securus AdvancePay account linked to your phone number allows you to receive inmate-initiated calls. Remote video visits are available through Securus and can be scheduled in advance. Electronic messaging is also available. Commissary deposits can be processed through Securus or through separate deposit services accepted by the facility.",
      "Cuyahoga County Jail uses Securus, which is distinct from the Ohio DOC state prison system. Ohio state prisons use JPay and GTL. If someone serving time at Cuyahoga County is convicted and transferred to an Ohio state correctional institution, communication platforms will change and new accounts will be needed. The Ohio DOC offender search and the Cuyahoga County inmate search are two separate tools — use the county search for county jail information and the state search for Ohio prison information. Confirming current jurisdiction and location before setting up accounts saves time and prevents funding the wrong system.",
    ],

    address: "1215 West Third Street, Cleveland, OH 44113",
    phone: "(216) 443-6000",
    website: "https://sheriff.cuyahogacounty.us",
    visitingHours: "Remote video visits: Monday to Friday 8:30 AM to 11:00 AM, 1:30 PM to 4:30 PM, and 7:00 PM to 9:00 PM; Saturday and Sunday 8:30 AM to 10:00 AM and 7:00 PM to 9:00 PM. In-person visits: one per week, scheduled 24 hours in advance.",
    inmateCapacity: 2000,
    established: 1977,
    operatedBy: "Cuyahoga County Sheriff's Office",

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for Cuyahoga County Jail phone, video, messaging, and commissary deposits.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "Securus", notes: "Electronic messaging via Securus. Messages monitored by jail staff." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available through Securus. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Cuyahoga County restrictions. No digital photo service." },
      phone: { status: "available", provider: "Securus", notes: "Fund a Securus AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "Securus", notes: "Commissary deposits via Securus. Separate from phone account funding." },
    },

    rules: [
      "Securus serves Cuyahoga County Jail. Ohio state prisons use JPay and GTL instead.",
      "All calls, messages, and visits are monitored by Cuyahoga County Sheriff's staff.",
      "Phone and commissary accounts are maintained separately in Securus.",
      "Video visits require advance scheduling.",
      "Senders must be on the approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Cuyahoga County Jail?",
        answer: "All communication services are through Securus. Create an account at securustech.net or through the Securus app. Set up a prepaid AdvancePay account for phone calls, and use the same account for video visits, messaging, and commissary deposits.",
      },
      {
        question: "Can I do a video visit with someone at Cuyahoga County Jail?",
        answer: "Yes, remote video visits are available through Securus. Log into your account, search for Cuyahoga County Jail, and select an available time slot. Schedule in advance as popular slots fill quickly.",
      },
      {
        question: "What changes if someone is transferred from Cuyahoga County to an Ohio state prison?",
        answer: "Ohio state prisons (ODRC) use JPay for messaging and money, and GTL for phone and video. Securus will no longer be the correct platform. Create JPay and GTL accounts when a transfer is anticipated. Remaining Securus funds do not transfer — contact Securus about refund options.",
      },
      {
        question: "How do I find if someone is currently in Cuyahoga County Jail?",
        answer: "The Cuyahoga County Sheriff's Office provides an inmate search at sheriff.cuyahogacounty.us. You can search by name to confirm current custody status. The county search and the Ohio DOC search are separate tools for separate systems.",
      },
      {
        question: "How do I send money to a Cuyahoga County Jail inmate?",
        answer: "Commissary deposits are processed through Securus. Log into your account and navigate to money transfer. You can add funds via debit or credit card. Commissary and phone funds are held in separate accounts within Securus.",
      },
    ],

    relatedFacilitySlugs: [
      "ohio-state-penitentiary",
      "philadelphia-detention-center",
      "cook-county-jail",
    ],
  },

  "jefferson-county-jail": {
    id: "f-jefferson-al",
    name: "Jefferson County Jail",
    slug: "jefferson-county-jail",
    type: "county",
    stateSlug: "alabama",
    stateName: "Alabama",
    stateAbbr: "AL",
    countySlug: null,
    countyName: "Jefferson County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Jefferson County Jail: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Jefferson County Jail. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this county jail facility.",

    description:
      "Jefferson County Jail communication guide. Find Securus phone, video, and messaging options for families in Birmingham. Learn how to stay connected at the Jefferson County detention facility.",

    overview: [
      "Jefferson County Jail is the pretrial detention facility operated by the Jefferson County Sheriff's Office in Birmingham, Alabama. Located in downtown Birmingham, it serves as the primary detention facility for people charged with crimes in Jefferson County courts. Birmingham is the most populous city in Alabama and the seat of Jefferson County, and the jail handles a large volume of bookings from across the county's metropolitan area. Most people held at the facility are awaiting court dates on charges filed in Jefferson County courts.",
      "Communication at Jefferson County Jail is managed through Securus Technologies, which provides phone calls, video visitation, and messaging services. Families create a Securus account at securustech.net to access all available communication services. For phone calls, setting up a Securus AdvancePay account linked to your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled in advance through the Securus platform. Electronic messaging through Securus delivers communications electronically within the facility.",
      "Jefferson County Jail uses Securus, which is distinct from Alabama state prisons. Alabama DOC facilities, including Holman Correctional Facility, use JPay and GTL. If someone held at Jefferson County is convicted and later transferred to an Alabama state prison, communication platforms will change and new accounts will be needed. Confirming the current facility and jurisdiction — county versus state — before setting up accounts ensures you are using the right provider. The Jefferson County Sheriff's Office provides an inmate search to confirm current booking status.",
    ],

    address: "2200 8th Avenue North, Birmingham, AL 35203",
    phone: "(205) 325-5300",
    website: "https://www.jccal.org/sheriff",
    inmateCapacity: 1200,
    established: 1982,
    operatedBy: "Jefferson County Sheriff's Office",

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for Jefferson County Jail phone, video, messaging, and commissary.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "Securus", notes: "Electronic messaging via Securus. Messages monitored by jail staff." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available through Securus. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Jefferson County restrictions. No digital service." },
      phone: { status: "available", provider: "Securus", notes: "Fund a Securus AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "Securus", notes: "Commissary deposits via Securus. Separate from phone account funding." },
    },

    rules: [
      "Securus serves Jefferson County Jail. Alabama state prisons use JPay and GTL instead.",
      "All calls, messages, and visits are monitored by Jefferson County Sheriff's staff.",
      "Phone and commissary accounts are separate within Securus.",
      "Video visits require advance scheduling.",
      "Senders must be on the approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Jefferson County Jail?",
        answer: "All communication services — phone, video, messaging, and money — are through Securus. Create an account at securustech.net or through the Securus app. For phone calls, set up a prepaid AdvancePay account linked to your phone number.",
      },
      {
        question: "Can I do a video visit with someone at Jefferson County Jail?",
        answer: "Yes, remote video visits are available through Securus. Log into your account, navigate to video visitation, search for Jefferson County Jail, and select an available time slot. Schedule in advance.",
      },
      {
        question: "What changes if my loved one is transferred to an Alabama state prison?",
        answer: "Alabama DOC state prisons use JPay for messaging, photos, and money, and GTL for phone calls and video. Securus will no longer apply. Create JPay and GTL accounts when a state transfer is anticipated to avoid communication gaps. Remaining Securus funds do not transfer.",
      },
      {
        question: "How do I find out if someone is in Jefferson County Jail?",
        answer: "The Jefferson County Sheriff's Office provides an inmate search online. Search by name to confirm current booking status and facility information. Verifying the current location before setting up accounts prevents funding the wrong provider.",
      },
      {
        question: "How do I send money to a Jefferson County Jail inmate?",
        answer: "Commissary deposits are processed through Securus. Log into your account and use the money transfer section. You can add funds via debit or credit card. Commissary and phone funds are held in separate Securus accounts.",
      },
    ],

    relatedFacilitySlugs: [
      "holman-correctional-facility",
      "shelby-county-criminal-justice-center",
      "cook-county-jail",
    ],
  },

  "denver-county-jail": {
    id: "f-denver-jail",
    name: "Denver County Jail",
    slug: "denver-county-jail",
    type: "county",
    stateSlug: "colorado",
    stateName: "Colorado",
    stateAbbr: "CO",
    countySlug: null,
    countyName: "Denver County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Denver County Jail: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Denver County Jail. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this county facility.",

    description:
      "Denver County Jail communication guide. Find Securus phone, video, and messaging options for families. Learn how to stay connected at Denver Sheriff Department facilities in Colorado.",

    overview: [
      "Denver County Jail is the detention system operated by the Denver Sheriff Department in Denver, Colorado. As a consolidated city and county, Denver operates its own jail system independently from the surrounding Colorado counties. The Denver Sheriff Department operates two main jail facilities: the Van Cise-Simonet Detention Center in downtown Denver at Colfax and Champa, and the Denver County Jail on Smith Road in eastern Denver. Together the two facilities hold roughly 2,000 people on a given day, the majority of them pretrial detainees awaiting court proceedings in Denver District Court or Denver County Court.",
      "Communication at Denver city jail facilities is managed through Securus Technologies, which provides phone calls, video visitation, and messaging services under the Denver Sheriff Department contract. Families create a Securus account to access all available services. For phone calls, a Securus AdvancePay account funded with your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled through the Securus platform. Messaging through Securus delivers communications electronically within the facility.",
      "Denver's jail system is separate from the Colorado Department of Corrections state prison system. Colorado state prisons use a different provider contract than the Denver city jails. If someone held at a Denver facility is convicted and transferred to a Colorado DOC state prison, communication providers may change, so families should verify which system applies at each stage. Denver is also in the same state as ADX Florence, but ADX is a federal Bureau of Prisons facility with no connection to the city or state systems. The Denver Sheriff Department provides an inmate locator to confirm current housing information.",
    ],

    address: "490 W. Colfax Avenue, Denver, CO 80204",
    phone: "(720) 337-9400",
    website: "https://www.denvergov.org/sherif",
    inmateCapacity: 2000,
    established: 1956,
    operatedBy: "Denver Sheriff Department",

    providers: [
      {
        name: "Securus",
        slug: "securus",
        initial: "S",
        color: "bg-indigo-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for Denver Sheriff Department jail facilities.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "Securus", notes: "Electronic messaging via Securus. Messages monitored by Denver Sheriff staff." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available through Securus. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Denver Sheriff Department restrictions." },
      phone: { status: "available", provider: "Securus", notes: "Fund a Securus AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "Securus", notes: "Commissary deposits via Securus. Separate from phone account funding." },
    },

    rules: [
      "Securus serves Denver city jails. Colorado DOC state prisons may use a different provider.",
      "ADX Florence is a federal prison with no connection to Denver city or Colorado state systems.",
      "All calls, messages, and visits are monitored by Denver Sheriff Department staff.",
      "Phone and commissary accounts are separate within Securus.",
      "Senders must be on the approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Denver County Jail?",
        answer: "All communication services — phone, video, messaging, and money — are through Securus. Create an account at securustech.net or through the Securus app. Set up a prepaid AdvancePay account linked to your phone number for calls.",
      },
      {
        question: "Which Denver facility is my loved one in?",
        answer: "Denver operates two main jails: the Van Cise-Simonet Detention Center downtown and the Denver County Jail on Smith Road. Use the Denver Sheriff Department inmate locator at denvergov.org to confirm the specific facility before scheduling visits.",
      },
      {
        question: "Can I do a video visit with someone at a Denver jail?",
        answer: "Yes, remote video visits are available through Securus at both Denver jail facilities. Log into your account, navigate to video visitation, select the correct Denver facility, and choose an available time slot. Schedule in advance.",
      },
      {
        question: "Is ADX Florence part of the Denver jail system?",
        answer: "No. ADX Florence is a federal Bureau of Prisons facility in Fremont County, Colorado, entirely separate from the Denver city jail system and the Colorado state prison system. Federal inmates use CorrLinks for messaging and ConnectNetwork for phone. Denver jail inmates use Securus.",
      },
      {
        question: "How do I send money to a Denver jail inmate?",
        answer: "Commissary deposits are processed through Securus. Log into your account and use the money transfer feature. You can add funds via debit or credit card. Commissary and phone funds are maintained separately within Securus.",
      },
    ],

    relatedFacilitySlugs: [
      "adx-florence",
      "maricopa-county-jail",
      "cook-county-jail",
    ],
  },

  "wake-county-detention-center": {
    id: "f-wake-detention",
    name: "Wake County Detention Center",
    slug: "wake-county-detention-center",
    type: "county",
    stateSlug: "north-carolina",
    stateName: "North Carolina",
    stateAbbr: "NC",
    countySlug: null,
    countyName: "Wake County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Wake County Detention: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Wake County Detention Center in Raleigh NC. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this NC facility.",

    description:
      "Wake County Detention Center communication guide. Find GTL phone, video, and messaging options for families in Raleigh, North Carolina. Learn how to stay connected at the Wake County jail.",

    overview: [
      "Wake County Detention Center is the pretrial detention facility operated by the Wake County Sheriff's Office in Raleigh, North Carolina. Located on Hammond Road in southern Raleigh, the facility serves as the primary jail for the Wake County criminal court system. Raleigh is the state capital of North Carolina and the second-largest city in the state, and it sits at the center of the Research Triangle region. The detention center holds several hundred to over a thousand people on any given day, most of them awaiting court proceedings in Wake County courts.",
      "Communication at Wake County Detention Center is managed through GTL, which provides phone calls, video visitation, and electronic messaging services under the county contract. Families create a GTL account to access all services. For phone calls, a GTL prepaid account funded with your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled through GTL. Electronic messaging through GTL delivers messages digitally within the facility. Commissary deposits can be processed through GTL or AccessCorrections.",
      "Wake County uses GTL for its county jail, which is a different system from what North Carolina state prisons use. North Carolina DOC state prisons operate under separate provider contracts. If someone held at Wake County is convicted and transferred to a North Carolina state correctional institution, communication providers will change and new accounts may be needed. The Wake County Sheriff's Office provides an online inmate search to confirm current custody status. FCC Butner, the federal prison complex in Granville County nearby, uses CorrLinks and ConnectNetwork — a completely different system from the Wake County jail.",
    ],

    address: "3301 Hammond Road, Raleigh, NC 27603",
    phone: "(919) 856-6900",
    website: "https://www.wakegov.com/departments-agencies/sheriff",
    inmateCapacity: 1000,
    established: 1994,
    operatedBy: "Wake County Sheriff's Office",

    providers: [
      {
        name: "GTL",
        slug: "gtl",
        initial: "G",
        color: "bg-amber-600",
        messaging: true,
        video: true,
        photos: false,
        phone: true,
        moneyTransfer: true,
        notes: "Primary provider for all Wake County Detention Center communication services.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Messages monitored by Wake County Sheriff's staff." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available through GTL. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Wake County restrictions. No digital photo service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL prepaid account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL serves Wake County Detention Center. FCC Butner (federal) and NC state prisons use different providers.",
      "All calls, messages, and visits are monitored by Wake County Sheriff's staff.",
      "One GTL account covers all Wake County jail communication services.",
      "Video visits require advance scheduling.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Wake County Detention Center?",
        answer: "All communication services — phone, video, messaging, and money — are through GTL. Create an account at telmate.com or through the GTL Connect app. One account covers all services at Wake County Detention Center.",
      },
      {
        question: "Can I do a video visit at Wake County Detention Center?",
        answer: "Yes, remote video visits are available through GTL. Log into your account, navigate to video visitation, select Wake County Detention Center, and choose an available time slot. Schedule in advance for best availability.",
      },
      {
        question: "Is Wake County Detention Center the same as FCC Butner?",
        answer: "No. FCC Butner is a federal Bureau of Prisons complex in Granville County, a different county from Wake. Federal inmates at FCC Butner use CorrLinks and ConnectNetwork. Wake County Detention Center is a county jail using GTL. They are completely separate facilities with separate provider systems.",
      },
      {
        question: "How do I find if someone is in Wake County Detention Center?",
        answer: "The Wake County Sheriff's Office provides an inmate search online at wakegov.com/departments-agencies/sheriff. Search by name to confirm current custody status and booking information.",
      },
      {
        question: "How do I send money to a Wake County Detention Center inmate?",
        answer: "Commissary deposits are made through GTL at telmate.com or through AccessCorrections. Add funds via debit or credit card. Processing typically takes one business day.",
      },
    ],

    relatedFacilitySlugs: [
      "federal-correctional-complex-butner",
      "broad-river-correctional-institution",
      "philadelphia-detention-center",
    ],
  },
}
