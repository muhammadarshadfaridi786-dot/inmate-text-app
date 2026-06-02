// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface ComparisonScore {
  messaging: number      // 1–10
  video: number
  photos: number
  phone: number
  moneyTransfer: number
  coverage: number
  easeOfUse: number
}

export interface ComparisonSide {
  slug: string
  name: string
  initial: string
  color: string          // Tailwind bg class
  score: ComparisonScore
  overallScore: number   // rounded to one decimal
}

export interface ComparisonService {
  providerA: string      // prose for provider A
  providerB: string      // prose for provider B
  winner: string | null  // provider slug or null for tie
  notes?: string
}

export interface ComparisonBestFor {
  scenario: string
  winner: string         // provider slug
  reason: string
}

export interface ComparisonBasic {
  id: string
  slug: string           // "jpay-vs-corrlinks"
  providerASlug: string
  providerBSlug: string
  providerAName: string
  providerBName: string
  winner: string | null  // provider slug or null for tie
  winnerReason: string
  category: string       // e.g. "State vs Federal"
  featured: boolean
}

export interface ComparisonDetail extends ComparisonBasic {
  description: string    // 160-char SEO description
  intro: string[]        // 2–3 paragraphs
  verdict: string[]      // 3–5 quick-guidance sentences

  sideA: ComparisonSide
  sideB: ComparisonSide

  services: {
    messaging: ComparisonService
    video: ComparisonService
    photos: ComparisonService
    phone: ComparisonService
    moneyTransfer: ComparisonService
  }

  coverage: ComparisonService
  pricing: ComparisonService
  mobileApp: ComparisonService

  prosConsA: { pros: string[]; cons: string[] }
  prosConsB: { pros: string[]; cons: string[] }

  bestFor: ComparisonBestFor[]
  faq: Array<{ question: string; answer: string }>
  relatedComparisonSlugs: string[]
}

// ─────────────────────────────────────────────
// HELPER — resolve slug regardless of order
// ─────────────────────────────────────────────

export function getComparisonSlug(a: string, b: string): string | null {
  const forward = `${a}-vs-${b}`
  const reverse = `${b}-vs-${a}`
  if (COMPARISON_DETAILS[forward]) return forward
  if (COMPARISON_DETAILS[reverse]) return reverse
  return null
}

// ─────────────────────────────────────────────
// ALL COMPARISONS — Directory listing
// ─────────────────────────────────────────────

export const ALL_COMPARISONS: ComparisonBasic[] = [
  {
    id: "cmp-jpay-corrlinks",
    slug: "jpay-vs-corrlinks",
    providerASlug: "jpay",
    providerBSlug: "corrlinks",
    providerAName: "JPay",
    providerBName: "CorrLinks",
    winner: "jpay",
    winnerReason: "JPay offers significantly more services, though CorrLinks is mandatory for federal inmates.",
    category: "State vs Federal",
    featured: true,
  },
  {
    id: "cmp-jpay-connectnetwork",
    slug: "jpay-vs-connectnetwork",
    providerASlug: "jpay",
    providerBSlug: "connectnetwork",
    providerAName: "JPay",
    providerBName: "ConnectNetwork",
    winner: null,
    winnerReason: "Depends on your facility type — JPay leads on messaging, ConnectNetwork leads on phone and coverage.",
    category: "State vs Multi-System",
    featured: true,
  },
  {
    id: "cmp-jpay-gettingout",
    slug: "jpay-vs-gettingout",
    providerASlug: "jpay",
    providerBSlug: "gettingout",
    providerAName: "JPay",
    providerBName: "GettingOut",
    winner: null,
    winnerReason: "JPay is right for state prisons; GettingOut is right for county jails. Facility type decides.",
    category: "State vs County",
    featured: true,
  },
  {
    id: "cmp-corrlinks-connectnetwork",
    slug: "corrlinks-vs-connectnetwork",
    providerASlug: "corrlinks",
    providerBSlug: "connectnetwork",
    providerAName: "CorrLinks",
    providerBName: "ConnectNetwork",
    winner: "connectnetwork",
    winnerReason: "ConnectNetwork provides more services. For federal families, both platforms are typically needed.",
    category: "Federal Focused",
    featured: true,
  },
  {
    id: "cmp-textbehind-smartinmate",
    slug: "textbehind-vs-smartinmate",
    providerASlug: "textbehind",
    providerBSlug: "smartinmate",
    providerAName: "TextBehind",
    providerBName: "SmartInmate",
    winner: "smartinmate",
    winnerReason: "SmartInmate offers a more complete digital experience. TextBehind wins on coverage and simplicity.",
    category: "Messaging Focused",
    featured: false,
  },
  {
    id: "cmp-gettingout-connectnetwork",
    slug: "gettingout-vs-connectnetwork",
    providerASlug: "gettingout",
    providerBSlug: "connectnetwork",
    providerAName: "GettingOut",
    providerBName: "ConnectNetwork",
    winner: null,
    winnerReason: "GettingOut leads on video; ConnectNetwork leads on phone and geographic reach.",
    category: "County Jails",
    featured: false,
  },
]

// ─────────────────────────────────────────────
// DETAILED COMPARISON DATA — 6 seeded comparisons
// ─────────────────────────────────────────────

export const COMPARISON_DETAILS: Record<string, ComparisonDetail> = {

  "jpay-vs-corrlinks": {
    id: "cmp-jpay-corrlinks",
    slug: "jpay-vs-corrlinks",
    providerASlug: "jpay",
    providerBSlug: "corrlinks",
    providerAName: "JPay",
    providerBName: "CorrLinks",
    winner: "jpay",
    winnerReason: "JPay offers significantly more services, though CorrLinks is mandatory for federal inmates.",
    category: "State vs Federal",
    featured: true,

    description:
      "JPay vs CorrLinks: compare features, coverage, and pricing. Find out which platform is right for state prison or federal facility communication.",

    intro: [
      "JPay and CorrLinks are two of the most recognized names in inmate communication, but they serve completely different correctional systems and are not interchangeable. JPay is primarily a state prison platform, contracted with departments of corrections across 35 states to provide messaging, photo sharing, video visits, and money transfers. CorrLinks — officially known as TRULINCS — is the Bureau of Prisons' own electronic messaging system and is the only approved way to send electronic messages to anyone in federal custody. If you are not sure which one applies to your situation, the single most important question to answer first is whether your loved one is in a state facility or a federal Bureau of Prisons institution.",

      "The confusion between JPay and CorrLinks is common, and it leads to families spending time setting up the wrong account. A JPay account is of no use for communicating with someone in a federal penitentiary, federal correctional institution, or federal detention center. Likewise, a CorrLinks account will not work for someone housed in a state prison. The two platforms exist within entirely separate government systems with no overlap. Knowing the distinction before creating any account will save significant frustration.",

      "This comparison breaks down both platforms across every relevant dimension — features, coverage, pricing, ease of use, and mobile access — to help families understand what each one offers and which applies to their situation. For most users, the choice between JPay and CorrLinks is not really a choice at all: it is determined by the facility type. But for families navigating the process for the first time, understanding what each platform does and does not offer is genuinely useful context.",
    ],

    verdict: [
      "Choose JPay if your loved one is held in a state correctional facility — it is the standard platform for messaging, photos, and money transfers across 35 states.",
      "Choose CorrLinks if they are in any Bureau of Prisons federal facility — it is the only approved electronic messaging platform and is mandatory for federal inmates.",
      "JPay offers a broader range of communication services including digital photo sharing, video visits, and direct money transfers.",
      "CorrLinks handles messaging only. Phone calls and video visits with federal inmates require a separate account through ConnectNetwork.",
      "If you are unsure whether the facility is state or federal, check the facility name online before setting up either account — this single step prevents the most common setup mistake.",
    ],

    sideA: {
      slug: "jpay",
      name: "JPay",
      initial: "J",
      color: "bg-blue-600",
      score: { messaging: 9, video: 7, photos: 9, phone: 6, moneyTransfer: 9, coverage: 7, easeOfUse: 7 },
      overallScore: 7.7,
    },
    sideB: {
      slug: "corrlinks",
      name: "CorrLinks",
      initial: "C",
      color: "bg-emerald-700",
      score: { messaging: 7, video: 1, photos: 1, phone: 1, moneyTransfer: 1, coverage: 5, easeOfUse: 5 },
      overallScore: 3.0,
    },

    services: {
      messaging: {
        providerA: "JPay uses a stamp-based system where families purchase stamps and send electronic messages. Messages are reviewed by facility staff before delivery. The JPay app makes composing and tracking messages straightforward.",
        providerB: "CorrLinks is the Bureau of Prisons' official email system. It functions similarly to email but requires the inmate to initiate or approve contact first. Per-message fees are charged from a prepay balance.",
        winner: "jpay",
        notes: "JPay's stamp system is more intuitive for new users. CorrLinks has a steeper initial setup curve because the inmate must act first.",
      },
      video: {
        providerA: "Video visits available at participating JPay facilities through the JPay platform or GTL. Must be scheduled in advance.",
        providerB: "CorrLinks does not offer video visitation. Federal video visits must be arranged directly through the specific facility.",
        winner: "jpay",
        notes: "CorrLinks has no video capability at all. Federal video visits are facility-specific and not managed through any single consumer platform.",
      },
      photos: {
        providerA: "Digital photos can be sent through JPay directly from the app or website. Photos are reviewed for compliance before delivery to the inmate.",
        providerB: "CorrLinks does not support digital photo delivery. Photos must be sent as physical prints by postal mail, subject to BOP content guidelines.",
        winner: "jpay",
        notes: "JPay's digital photo service is a clear advantage for families who want to share photos regularly.",
      },
      phone: {
        providerA: "Phone services at many JPay facilities are handled by GTL separately. JPay itself manages phone services at select facilities.",
        providerB: "CorrLinks does not handle phone services. Federal inmate phone calls are managed through the BOP's Inmate Telephone System via ConnectNetwork.",
        winner: null,
        notes: "Neither platform is the primary phone provider. Phone requires a separate account at most facilities regardless of which messaging platform is used.",
      },
      moneyTransfer: {
        providerA: "JPay provides direct money transfers to inmate trust accounts. Families can send funds via debit card, credit card, or MoneyGram. Typical processing time is one to two business days.",
        providerB: "CorrLinks does not process commissary deposits. BOP money transfers are handled through ConnectNetwork or by money order.",
        winner: "jpay",
        notes: "JPay's integrated money transfer is a significant convenience advantage.",
      },
    },

    coverage: {
      providerA: "JPay serves 35+ states and over 1,000 state correctional facilities. It does not serve any federal Bureau of Prisons institutions.",
      providerB: "CorrLinks serves all 120 federal Bureau of Prisons facilities across the United States. It does not serve state prisons, county jails, or any non-federal institutions.",
      winner: null,
      notes: "These platforms cover entirely separate systems. JPay covers state; CorrLinks covers federal. Coverage is not a competition — it is a distinction.",
    },

    pricing: {
      providerA: "JPay stamps typically cost $0.33–$0.47 each. Photos cost $0.45–$0.65 per image. Money transfers carry a fee of approximately 2.75% or $2.95, whichever is greater.",
      providerB: "CorrLinks requires a prepay balance. Messages are charged against the balance as a small per-message fee. Account creation is free.",
      winner: null,
      notes: "Both have per-message costs. For families who communicate frequently, JPay's stamp bundle pricing can be cost-effective. CorrLinks fees are generally lower per message but require a prepay deposit.",
    },

    mobileApp: {
      providerA: "JPay has a well-reviewed mobile app available on iOS and Android. The app handles messaging, photos, video scheduling, and money transfers in one interface.",
      providerB: "CorrLinks has no official mobile app. The platform is browser-based and accessible on mobile browsers, but there is no dedicated app.",
      winner: "jpay",
      notes: "JPay's mobile app is a meaningful usability advantage, particularly for families who prefer to manage communication from a smartphone.",
    },

    prosConsA: {
      pros: [
        "All-in-one platform covering messaging, photos, video, and money transfer.",
        "Well-designed mobile app on iOS and Android.",
        "Broad state prison network with 35+ states covered.",
        "Intuitive stamp-based messaging system.",
        "Faster setup — family initiates contact, no waiting for inmate to act first.",
      ],
      cons: [
        "Not available at any federal Bureau of Prisons facility.",
        "Stamp pricing can add up for families who message daily.",
        "Phone services at many facilities are handled by a separate provider (GTL).",
        "Video not available at all JPay facilities.",
      ],
    },

    prosConsB: {
      pros: [
        "Only approved messaging platform for all 120 federal BOP facilities.",
        "Legally compliant and fully integrated with Bureau of Prisons systems.",
        "Free account creation — pay only per message sent.",
        "Works on any browser without an app download.",
      ],
      cons: [
        "Messaging only — no video, photos, or money transfer.",
        "Inmate must initiate or approve contact before families can send messages.",
        "No mobile app — browser-based only.",
        "Setup process is slower due to BOP contact approval requirements.",
        "Only useful for federal facilities — irrelevant for state or county systems.",
      ],
    },

    bestFor: [
      {
        scenario: "Communicating with state prison inmates",
        winner: "jpay",
        reason: "JPay is contracted with 35+ state correctional systems and is the standard messaging platform for state facilities.",
      },
      {
        scenario: "Communicating with federal Bureau of Prisons inmates",
        winner: "corrlinks",
        reason: "CorrLinks is mandatory for all federal inmates — there is no alternative for electronic messaging with BOP facilities.",
      },
      {
        scenario: "Sending photos to an incarcerated loved one",
        winner: "jpay",
        reason: "JPay supports digital photo delivery. CorrLinks only accepts physical mail photos.",
      },
      {
        scenario: "Transferring money to a commissary account",
        winner: "jpay",
        reason: "JPay handles direct trust account deposits. CorrLinks does not offer money transfer services.",
      },
    ],

    faq: [
      {
        question: "Can I use JPay for federal inmates?",
        answer: "No. JPay does not serve federal Bureau of Prisons facilities. Federal inmates communicate through CorrLinks for electronic messaging and ConnectNetwork for phone and video. If you set up a JPay account for a federal inmate, it will not work and you will need to start over with the correct platform.",
      },
      {
        question: "Can I use CorrLinks for state prison inmates?",
        answer: "No. CorrLinks is exclusively the Bureau of Prisons' messaging system and only works for federal facilities. State prison inmates use JPay, Securus, or another state-level platform depending on the facility and state. CorrLinks accounts have no function at state correctional institutions.",
      },
      {
        question: "Do I need both JPay and CorrLinks?",
        answer: "Only if your loved one moves between state and federal custody. Most families only need one platform based on where their loved one is currently housed. If they are in a state facility, use JPay. If they are in a federal facility, use CorrLinks for messaging and ConnectNetwork for phone.",
      },
      {
        question: "Which platform is easier to set up?",
        answer: "JPay is generally faster to set up because the family initiates the account and can begin messaging once the inmate is added. CorrLinks requires the inmate to add you to their contact list from inside the facility first — you cannot send a message until the inmate has acted, which can take days depending on facility procedures.",
      },
      {
        question: "Is CorrLinks free?",
        answer: "Creating a CorrLinks account is free, but messaging is not. You must fund a prepay balance on the platform, and messages are charged against that balance. The per-message cost is small, but you need to maintain a funded account balance to send and receive messages.",
      },
    ],

    relatedComparisonSlugs: [
      "jpay-vs-connectnetwork",
      "jpay-vs-gettingout",
      "corrlinks-vs-connectnetwork",
    ],
  },

  "jpay-vs-connectnetwork": {
    id: "cmp-jpay-connectnetwork",
    slug: "jpay-vs-connectnetwork",
    providerASlug: "jpay",
    providerBSlug: "connectnetwork",
    providerAName: "JPay",
    providerBName: "ConnectNetwork",
    winner: null,
    winnerReason: "Depends on your facility type — JPay leads on messaging, ConnectNetwork leads on phone and coverage.",
    category: "State vs Multi-System",
    featured: true,

    description:
      "JPay vs ConnectNetwork: compare messaging, video, phone, and coverage. Find out which platform fits your facility and communication needs.",

    intro: [
      "JPay and ConnectNetwork (operated by GTL) are two of the largest inmate communication platforms in the United States, and many families encounter both at some point. JPay is primarily known as a state prison messaging and money transfer platform, serving correctional departments across 35 states. ConnectNetwork is the consumer-facing platform for GTL — one of the largest correctional communication companies — and serves a wider geographic footprint that includes state prisons, county jails, and federal Bureau of Prisons institutions. Understanding where each platform is strongest helps families set up the right account from the start.",

      "The platforms have different service emphases. JPay's messaging experience — including its digital photo sharing, stamp-based email system, and integrated money transfers — is widely considered one of the stronger state prison communication products available. ConnectNetwork's strength lies in phone services and video visitation, particularly its broad coverage across different institution types. At many state facilities, families use JPay for messaging and money while using GTL or ConnectNetwork for phone calls, meaning both accounts may ultimately be needed regardless of which is 'better' in a direct comparison.",

      "This comparison examines both platforms across features, pricing, coverage, and usability to give families a clear picture of what each offers. The most important factor in this comparison is not which platform is objectively superior — it is which platform serves the specific facility where your loved one is housed. Checking the facility's contracted providers before creating any account remains the single most important first step.",
    ],

    verdict: [
      "Choose JPay if your primary needs are electronic messaging, photo sharing, and money transfers at a state correctional facility.",
      "Choose ConnectNetwork if your primary need is phone calls or video visits, or if your loved one is in a federal or county facility.",
      "JPay has a more polished messaging and photo experience; ConnectNetwork has broader geographic coverage and stronger phone infrastructure.",
      "At many state prisons, both accounts are used together — JPay for messaging and ConnectNetwork/GTL for phone.",
      "The right choice depends almost entirely on which platform your specific facility is contracted with.",
    ],

    sideA: {
      slug: "jpay",
      name: "JPay",
      initial: "J",
      color: "bg-blue-600",
      score: { messaging: 9, video: 7, photos: 9, phone: 6, moneyTransfer: 9, coverage: 7, easeOfUse: 7 },
      overallScore: 7.7,
    },
    sideB: {
      slug: "connectnetwork",
      name: "ConnectNetwork",
      initial: "C",
      color: "bg-teal-600",
      score: { messaging: 7, video: 8, photos: 2, phone: 9, moneyTransfer: 8, coverage: 9, easeOfUse: 7 },
      overallScore: 7.1,
    },

    services: {
      messaging: {
        providerA: "JPay's stamp-based messaging is available at 1,000+ state facilities. Messages, including digital photos, can be composed in the JPay app and are delivered after staff review.",
        providerB: "ConnectNetwork messaging is available at select facilities under GTL contracts. Not universally offered — availability varies by facility contract.",
        winner: "jpay",
        notes: "JPay's messaging system is more widely available at state prisons and more feature-rich for family communication.",
      },
      video: {
        providerA: "Video visitation through JPay is available at participating state facilities. Must be scheduled in advance through the app or website.",
        providerB: "ConnectNetwork/GTL has a strong video visitation platform available across state, county, and federal facilities. Known for reliable remote visit technology.",
        winner: "connectnetwork",
        notes: "ConnectNetwork's video product has broader availability and is used at more facility types.",
      },
      photos: {
        providerA: "JPay supports digital photo delivery directly from the app. Photos are reviewed for compliance before reaching the inmate.",
        providerB: "ConnectNetwork does not offer a digital photo sharing service. Families must use postal mail for photos at ConnectNetwork facilities.",
        winner: "jpay",
        notes: "JPay's photo service is a clear advantage for families who regularly send photos.",
      },
      phone: {
        providerA: "Phone services are available through JPay at select facilities, but many state prisons use GTL (ConnectNetwork) for phone separately from JPay messaging.",
        providerB: "Phone calling is ConnectNetwork's primary service, available across all 50 states including federal facilities. AdvancePay accounts are easy to fund and manage.",
        winner: "connectnetwork",
        notes: "ConnectNetwork/GTL is the stronger phone platform by a significant margin.",
      },
      moneyTransfer: {
        providerA: "JPay's money transfer is one of its strongest features — fast, widely accepted at state facilities, and integrated with the main account.",
        providerB: "ConnectNetwork handles money transfers at many facilities and is a solid option, particularly for county and federal institutions.",
        winner: "jpay",
        notes: "Both offer reliable money transfers, but JPay's integration with messaging makes it more convenient at state prison facilities.",
      },
    },

    coverage: {
      providerA: "35+ states, 1,000+ state correctional facilities. Does not serve federal BOP institutions.",
      providerB: "All 50 states, 1,800+ facilities including federal BOP, state prisons, and county jails. Broadest geographic footprint of any provider.",
      winner: "connectnetwork",
      notes: "ConnectNetwork's coverage advantage is significant, particularly for families who need a platform that works across multiple facility types.",
    },

    pricing: {
      providerA: "JPay stamps cost $0.33–$0.47 per message. Photo delivery costs $0.45–$0.65 per photo. Money transfer fees are approximately 2.75% or $2.95 minimum.",
      providerB: "Phone rates are FCC-regulated for interstate calls, typically $0.14–$0.25 per minute. Video visit pricing varies by facility. Money transfer fees vary.",
      winner: null,
      notes: "Pricing is not directly comparable since the services differ. Both are fairly priced for their respective service categories.",
    },

    mobileApp: {
      providerA: "JPay has a well-rated mobile app for iOS and Android, covering messaging, photos, video, and money in one interface.",
      providerB: "ConnectNetwork has a mobile app available for iOS and Android that manages phone accounts, video visits, and money transfers.",
      winner: null,
      notes: "Both have functional mobile apps. JPay's messaging app experience is generally rated higher; ConnectNetwork's phone management interface is well-regarded.",
    },

    prosConsA: {
      pros: [
        "Strongest messaging and photo experience in the state prison market.",
        "Integrated money transfer within the same account.",
        "Established platform trusted by families across 35 states.",
        "Good mobile app with all services in one interface.",
      ],
      cons: [
        "Not available at federal institutions — requires CorrLinks for federal messaging.",
        "Phone services at many facilities use GTL/ConnectNetwork separately.",
        "Narrower geographic coverage than ConnectNetwork.",
        "No photo service through ConnectNetwork if you need a single account.",
      ],
    },

    prosConsB: {
      pros: [
        "Largest geographic coverage — all 50 states plus federal facilities.",
        "Strongest phone calling platform in the market.",
        "Serves federal, state, and county facilities from one account.",
        "Solid video visitation technology.",
      ],
      cons: [
        "No digital photo sharing service.",
        "Messaging not available at all facilities under ConnectNetwork contracts.",
        "User interface feedback is more mixed than JPay.",
        "Phone rates can vary significantly by state contract.",
      ],
    },

    bestFor: [
      {
        scenario: "Messaging and photo sharing at state prisons",
        winner: "jpay",
        reason: "JPay's messaging and photo platform is stronger and more widely available at state correctional facilities.",
      },
      {
        scenario: "Phone calls and video visits",
        winner: "connectnetwork",
        reason: "ConnectNetwork/GTL is the leading phone provider with the widest facility coverage.",
      },
      {
        scenario: "Families needing one platform for multiple facility types",
        winner: "connectnetwork",
        reason: "ConnectNetwork serves federal, state, and county facilities, making it more versatile for families with contacts in different systems.",
      },
      {
        scenario: "Money transfers to state prison commissary accounts",
        winner: "jpay",
        reason: "JPay's integrated money transfer system is convenient and well-established at state facilities.",
      },
    ],

    faq: [
      {
        question: "Can I use JPay and ConnectNetwork at the same facility?",
        answer: "Yes, and this is common at many state prisons. JPay may hold the messaging and money transfer contract while GTL/ConnectNetwork manages the phone and video contract at the same facility. You would need separate accounts for each service.",
      },
      {
        question: "Which platform has better customer support?",
        answer: "Both platforms have mixed customer service reviews. JPay users frequently cite delays in resolution, particularly for account issues. ConnectNetwork users report similar variability. Neither platform is notably superior for customer service, so setting up accounts correctly from the start — before any issues arise — is important.",
      },
      {
        question: "Does ConnectNetwork serve federal prisons?",
        answer: "Yes. ConnectNetwork/GTL serves federal Bureau of Prisons facilities for phone calls, video visits, and money transfers. However, for electronic messaging with federal inmates, you still need a CorrLinks account — ConnectNetwork does not provide email-style messaging at BOP facilities.",
      },
      {
        question: "Which is better for video visits?",
        answer: "ConnectNetwork/GTL generally has a stronger and more widely available video visitation platform. It covers more facility types including federal institutions. JPay video is available at participating state facilities but is not its primary strength.",
      },
      {
        question: "Can I send photos through ConnectNetwork?",
        answer: "No. ConnectNetwork does not offer a digital photo service. If you need to send photos to an inmate at a ConnectNetwork facility, you will need to either send physical mail photos or check whether JPay also serves that facility for photo delivery.",
      },
    ],

    relatedComparisonSlugs: [
      "jpay-vs-corrlinks",
      "jpay-vs-gettingout",
      "gettingout-vs-connectnetwork",
    ],
  },

  "jpay-vs-gettingout": {
    id: "cmp-jpay-gettingout",
    slug: "jpay-vs-gettingout",
    providerASlug: "jpay",
    providerBSlug: "gettingout",
    providerAName: "JPay",
    providerBName: "GettingOut",
    winner: null,
    winnerReason: "JPay is right for state prisons; GettingOut is right for county jails. Facility type decides.",
    category: "State vs County",
    featured: true,

    description:
      "JPay vs GettingOut: compare state prison and county jail communication platforms. Find out which fits your facility, messaging needs, and video visit requirements.",

    intro: [
      "JPay and GettingOut serve different parts of the correctional system, and the choice between them is almost always determined by one factor: facility type. JPay is the dominant platform for state prisons, contracted with departments of corrections across more than 35 states. GettingOut — operated by Telmate, part of the GTL/ViaPath family — serves over 2,200 county jails across 45 states and is best known for its video visitation product. If you know whether your loved one is in a state prison or a county jail, you can likely determine the right platform immediately.",

      "That said, comparing the two platforms is still worthwhile because the distinction between a state prison and a county jail is not always obvious to families navigating the system for the first time. County jails are operated by county sheriff's offices and typically hold people in pretrial detention or serving shorter sentences. State prisons hold people convicted of felonies with longer sentences and are operated by the state department of corrections. The facility's formal name and website are usually the fastest way to determine which category applies.",

      "Beyond the facility type question, there are genuine feature differences worth understanding. GettingOut's video visitation platform is widely regarded as the best in the county jail space, making remote visits particularly accessible. JPay's messaging, photo sharing, and money transfer capabilities are among the strongest in state prison systems. This comparison covers both platforms in detail to help families understand the full picture.",
    ],

    verdict: [
      "Choose JPay if your loved one is in a state correctional facility — it is the standard messaging and money transfer platform for state prisons across 35 states.",
      "Choose GettingOut if they are in a county jail — it serves over 2,200 county facilities and is particularly strong for video visitation.",
      "GettingOut generally has the better video visit experience; JPay has the better messaging and photo platform.",
      "If your loved one is transferred from a county jail to a state prison after sentencing, your GettingOut account will no longer apply — you will need a new JPay account.",
      "If you are unsure whether the facility is a county jail or state prison, check the operating agency online before setting up either account.",
    ],

    sideA: {
      slug: "jpay",
      name: "JPay",
      initial: "J",
      color: "bg-blue-600",
      score: { messaging: 9, video: 7, photos: 9, phone: 6, moneyTransfer: 9, coverage: 7, easeOfUse: 7 },
      overallScore: 7.7,
    },
    sideB: {
      slug: "gettingout",
      name: "GettingOut",
      initial: "G",
      color: "bg-violet-600",
      score: { messaging: 7, video: 9, photos: 7, phone: 8, moneyTransfer: 8, coverage: 8, easeOfUse: 8 },
      overallScore: 7.9,
    },

    services: {
      messaging: {
        providerA: "JPay's stamp-based messaging is a mature, widely-used system at state facilities. Digital photos can be included, and the mobile app makes composing messages easy.",
        providerB: "GettingOut offers electronic messaging at participating county jails. Messages are delivered digitally. Not all GettingOut facilities use it for messaging — availability varies by contract.",
        winner: "jpay",
        notes: "JPay's messaging is more consistent across facilities and includes better photo integration.",
      },
      video: {
        providerA: "JPay video visits are available at participating state facilities but are not the platform's primary strength.",
        providerB: "GettingOut is widely recognized as one of the strongest video visitation platforms available. Remote visits are easy to schedule through the mobile app and work well on standard consumer devices.",
        winner: "gettingout",
        notes: "GettingOut's video platform is a significant differentiator and one of the main reasons families choose it.",
      },
      photos: {
        providerA: "JPay's digital photo service is strong — photos are uploaded through the app and delivered electronically after review.",
        providerB: "GettingOut offers photo services at participating facilities. Digital or print-based delivery depending on the county jail's setup.",
        winner: "jpay",
        notes: "JPay's photo experience is more consistent and better integrated with the main messaging platform.",
      },
      phone: {
        providerA: "Phone services at JPay state facilities are often handled separately by GTL or Securus. JPay handles phone at select facilities.",
        providerB: "GettingOut/Telmate manages phone calling at county jails under its contracts. Prepaid accounts are easy to fund through the app.",
        winner: "gettingout",
        notes: "GettingOut typically manages the full phone and video experience at county jails under a single contract.",
      },
      moneyTransfer: {
        providerA: "JPay money transfers are integrated, reliable, and widely used at state facilities. Multiple funding methods supported.",
        providerB: "GettingOut handles commissary deposits at county jail facilities. The process is similar to JPay and can be completed through the app.",
        winner: null,
        notes: "Both handle money transfers adequately for their respective facility types.",
      },
    },

    coverage: {
      providerA: "35+ states, 1,000+ state prison facilities. JPay does not serve county jails except in limited cases.",
      providerB: "45 states, 2,200+ county jails and local detention centers. GettingOut rarely serves state prisons.",
      winner: null,
      notes: "Coverage comparison is not meaningful here since the platforms serve different facility types. Each is the market leader in its own category.",
    },

    pricing: {
      providerA: "JPay stamps cost $0.33–$0.47 per message. Photos cost $0.45–$0.65 each. Money transfers carry a fee of approximately 2.75%.",
      providerB: "Video visits typically cost around $0.49 per minute. Phone rates vary by facility contract. Photo and messaging rates also vary.",
      winner: null,
      notes: "Pricing is similar across both platforms for comparable services.",
    },

    mobileApp: {
      providerA: "JPay has a well-rated mobile app for iOS and Android covering messaging, photos, video, and money.",
      providerB: "GettingOut's app is frequently cited as one of the easiest to use in the inmate communication space. Available on iOS and Android.",
      winner: "gettingout",
      notes: "GettingOut's app receives slightly better usability reviews, particularly for video visit scheduling.",
    },

    prosConsA: {
      pros: [
        "Dominant platform for state prison communication in 35+ states.",
        "Strong messaging, photo, and money transfer integration.",
        "Trusted by millions of families for state prison communication.",
        "Good mobile app experience.",
      ],
      cons: [
        "Does not serve most county jails.",
        "GettingOut account required when loved one is in county jail pre-sentencing.",
        "Video not as strong as GettingOut.",
        "Phone services often managed by a separate platform.",
      ],
    },

    prosConsB: {
      pros: [
        "Best-in-class video visitation experience.",
        "Largest county jail network with 2,200+ facilities.",
        "Manages phone, video, messaging, and money in one account at county facilities.",
        "Highly rated mobile app.",
      ],
      cons: [
        "Does not carry over to state prisons after sentencing.",
        "Messaging not available at all GettingOut county facilities.",
        "Video pricing can add up for frequent visits.",
        "Useful only at county jails, not state prisons.",
      ],
    },

    bestFor: [
      {
        scenario: "Staying connected with state prison inmates",
        winner: "jpay",
        reason: "JPay is the standard messaging, photo, and money transfer platform across state correctional systems.",
      },
      {
        scenario: "Video visits with county jail inmates",
        winner: "gettingout",
        reason: "GettingOut has the strongest video visitation product in the county jail space and the widest county facility coverage.",
      },
      {
        scenario: "Managing all communication from one platform",
        winner: "gettingout",
        reason: "At county jails, GettingOut typically manages phone, video, messaging, and money under one contract — simpler than managing two accounts.",
      },
      {
        scenario: "Sending photos to a state prison inmate",
        winner: "jpay",
        reason: "JPay's digital photo delivery is consistently available and well-integrated at state facilities.",
      },
    ],

    faq: [
      {
        question: "What happens to my GettingOut account when my loved one is sentenced and transferred to a state prison?",
        answer: "Your GettingOut account will no longer be useful once they are transferred to a state facility. State prisons use different providers — typically JPay for messaging and Securus or GTL for phone. You will need to create new accounts. Any unused GettingOut balance may be refundable — contact GettingOut customer service for options.",
      },
      {
        question: "How do I know if my loved one is in a county jail or state prison?",
        answer: "County jails are operated by county sheriff's departments and typically hold people awaiting trial or serving sentences under one year. State prisons are run by the state department of corrections and hold people serving longer sentences. You can usually identify the facility type from its name — jails often include 'Jail,' 'Detention Center,' or 'Correctional Center,' while state prisons often include 'State Prison,' 'Correctional Facility,' or 'Correctional Institution.'",
      },
      {
        question: "Does GettingOut work at state prisons?",
        answer: "No. GettingOut is primarily a county jail platform and does not serve state prisons. If you try to use GettingOut for a state prison inmate, you will not find the facility in their system. State prison families should use JPay for messaging.",
      },
      {
        question: "Can I use both platforms for the same person?",
        answer: "Generally not at the same time — your loved one is housed in either a county jail or a state prison, not both. However, if they move between the two during legal proceedings, you would need to switch platforms. Some families maintain accounts on both out of preparedness.",
      },
      {
        question: "Which platform is easier to set up?",
        answer: "Both have similarly straightforward setups. GettingOut is often praised for its clean app interface. JPay requires knowing the inmate's CDCR or state-specific ID number. Both can be set up in under 15 minutes once you have the required information.",
      },
    ],

    relatedComparisonSlugs: [
      "jpay-vs-connectnetwork",
      "gettingout-vs-connectnetwork",
      "textbehind-vs-smartinmate",
    ],
  },

  "corrlinks-vs-connectnetwork": {
    id: "cmp-corrlinks-connectnetwork",
    slug: "corrlinks-vs-connectnetwork",
    providerASlug: "corrlinks",
    providerBSlug: "connectnetwork",
    providerAName: "CorrLinks",
    providerBName: "ConnectNetwork",
    winner: "connectnetwork",
    winnerReason: "ConnectNetwork provides more services. For federal families, both platforms are typically needed.",
    category: "Federal Focused",
    featured: true,

    description:
      "CorrLinks vs ConnectNetwork: both serve federal Bureau of Prisons facilities but for different services. Learn which you need and whether both are required.",

    intro: [
      "CorrLinks and ConnectNetwork are the two primary platforms that families with federal Bureau of Prisons inmates will encounter — not as alternatives to each other, but as complements. CorrLinks is the BOP's official electronic messaging system, used for all email-style communication with federal inmates. ConnectNetwork (operated by GTL/ViaPath) handles phone calls, video visitation, and money transfers at many federal facilities. Understanding that these platforms serve different functions rather than competing for the same service is the essential starting point for navigating federal inmate communication.",

      "The distinction matters practically: many families new to the federal system try to find a single platform that covers everything, similar to how JPay works in state systems. No such platform exists in the federal system. If you want to send electronic messages, you need CorrLinks. If you want to make or receive phone calls or schedule video visits, you need ConnectNetwork. Setting up both is not redundant — it is how federal communication works.",

      "This comparison examines both platforms to help federal families understand what each does, how to set it up, and what to expect in terms of cost and usability. For families who are primarily evaluating which platform offers more value, ConnectNetwork's broader service set gives it a clear advantage on paper — but since CorrLinks is mandatory for federal messaging, it is not really optional.",
    ],

    verdict: [
      "You will likely need both platforms if your loved one is in federal custody — they serve different functions and are not substitutes.",
      "Use CorrLinks for electronic messaging — it is the only approved way to send messages to federal inmates.",
      "Use ConnectNetwork for phone calls and video visits at federal facilities.",
      "ConnectNetwork provides more services overall, but CorrLinks is mandatory and cannot be replaced.",
      "Set up CorrLinks first, since messaging requires the inmate to initiate or approve contact — starting this process early saves time.",
    ],

    sideA: {
      slug: "corrlinks",
      name: "CorrLinks",
      initial: "C",
      color: "bg-emerald-700",
      score: { messaging: 7, video: 1, photos: 1, phone: 1, moneyTransfer: 1, coverage: 5, easeOfUse: 5 },
      overallScore: 3.0,
    },
    sideB: {
      slug: "connectnetwork",
      name: "ConnectNetwork",
      initial: "C",
      color: "bg-teal-600",
      score: { messaging: 7, video: 8, photos: 2, phone: 9, moneyTransfer: 8, coverage: 9, easeOfUse: 7 },
      overallScore: 7.1,
    },

    services: {
      messaging: {
        providerA: "CorrLinks is the only approved electronic messaging platform for all federal BOP facilities. The inmate must initiate or approve contact before families can send messages. Per-message fees apply.",
        providerB: "ConnectNetwork offers messaging at select facilities but it is not its primary service and is not universally available at BOP institutions.",
        winner: "corrlinks",
        notes: "For federal messaging specifically, CorrLinks wins — it is the only approved option.",
      },
      video: {
        providerA: "CorrLinks does not offer video visitation. Federal video visits must be arranged directly through the facility.",
        providerB: "ConnectNetwork offers video visitation at federal facilities under BOP contracts. Video visits require prior approval and advance scheduling.",
        winner: "connectnetwork",
        notes: "ConnectNetwork is the clear choice for video — CorrLinks has no video capability.",
      },
      photos: {
        providerA: "CorrLinks does not support digital photo delivery. Physical photos can be sent by postal mail subject to BOP guidelines.",
        providerB: "ConnectNetwork does not offer digital photo delivery either. Physical mail is the only photo option at BOP facilities.",
        winner: null,
        notes: "Neither platform supports digital photos for federal inmates. Photos at BOP facilities must be sent by traditional mail.",
      },
      phone: {
        providerA: "CorrLinks does not handle phone services. All federal phone calling is managed through the BOP's Inmate Telephone System.",
        providerB: "ConnectNetwork manages phone calling at federal facilities. Families create prepaid accounts to receive inmate-initiated calls.",
        winner: "connectnetwork",
        notes: "ConnectNetwork is the only option for phone calls with federal inmates through a consumer platform.",
      },
      moneyTransfer: {
        providerA: "CorrLinks does not process commissary deposits or money transfers.",
        providerB: "ConnectNetwork processes trust fund deposits at BOP facilities through its platform and via money order or third-party services.",
        winner: "connectnetwork",
        notes: "ConnectNetwork is the only option here — CorrLinks has no money transfer capability.",
      },
    },

    coverage: {
      providerA: "CorrLinks covers all 120 federal Bureau of Prisons facilities exclusively. It does not serve any non-federal institutions.",
      providerB: "ConnectNetwork covers all 50 states including federal BOP facilities, state prisons, and county jails — over 1,800 facilities total.",
      winner: "connectnetwork",
      notes: "ConnectNetwork's broader coverage is an advantage, though both serve all BOP facilities for their respective services.",
    },

    pricing: {
      providerA: "CorrLinks requires a prepay account balance. Messages are charged at a small per-character or per-message rate. Account creation is free.",
      providerB: "ConnectNetwork phone rates are FCC-regulated for interstate calls. Video visit fees vary by facility. Money transfer fees apply.",
      winner: null,
      notes: "CorrLinks is generally inexpensive per message. ConnectNetwork's phone rates vary but are regulated for interstate calls.",
    },

    mobileApp: {
      providerA: "CorrLinks has no official mobile app. The platform is browser-based only, accessible via mobile browser but without a dedicated app.",
      providerB: "ConnectNetwork has a mobile app (GTL Connect) available on iOS and Android for managing phone accounts, video visits, and deposits.",
      winner: "connectnetwork",
      notes: "ConnectNetwork's mobile app is a meaningful usability advantage over CorrLinks' browser-only experience.",
    },

    prosConsA: {
      pros: [
        "The only approved messaging platform for all 120 federal BOP facilities.",
        "Legally compliant with BOP communication policies.",
        "Free to create an account — pay only per message.",
        "Reliable within the federal system — fully integrated with BOP infrastructure.",
      ],
      cons: [
        "Messaging only — no video, phone, or money transfer.",
        "Inmate must act first before families can message.",
        "No mobile app — browser-based access only.",
        "Cannot be used at any non-federal facility.",
      ],
    },

    prosConsB: {
      pros: [
        "Covers phone, video, and money transfer at federal facilities.",
        "Mobile app available for iOS and Android.",
        "Serves federal, state, and county facilities from one account.",
        "FCC-regulated interstate call rates provide cost protection.",
      ],
      cons: [
        "No digital photo service.",
        "Messaging at BOP facilities not available — CorrLinks is required.",
        "Phone rates can be high for in-state calls.",
        "Setting up a ConnectNetwork account does not replace the need for CorrLinks.",
      ],
    },

    bestFor: [
      {
        scenario: "Sending electronic messages to a federal inmate",
        winner: "corrlinks",
        reason: "CorrLinks is mandatory for all federal BOP messaging — there is no alternative.",
      },
      {
        scenario: "Phone calls and video visits with federal inmates",
        winner: "connectnetwork",
        reason: "ConnectNetwork manages phone and video at BOP facilities and is the standard platform for these services.",
      },
      {
        scenario: "Sending money to a federal inmate's commissary account",
        winner: "connectnetwork",
        reason: "CorrLinks does not handle money. ConnectNetwork and BOP-approved payment services handle commissary deposits.",
      },
    ],

    faq: [
      {
        question: "Do I need both CorrLinks and ConnectNetwork for a federal inmate?",
        answer: "Yes, in most cases. If you want to send electronic messages, you need CorrLinks — there is no substitute. If you want to make phone calls or schedule video visits, you need ConnectNetwork. Most families with federal inmates maintain accounts on both platforms.",
      },
      {
        question: "Why does CorrLinks require the inmate to go first?",
        answer: "Bureau of Prisons policy requires inmates to add contacts to their approved list from within the TRULINCS system at their facility. This is a security measure — the BOP controls who can communicate with each inmate. Families cannot initiate CorrLinks contact on their own. The inmate must add your email address and send an invitation, which you then accept.",
      },
      {
        question: "Is ConnectNetwork the same as GTL?",
        answer: "Yes. ConnectNetwork is the consumer-facing brand name operated by GTL (Global Tel Link), now known as ViaPath Technologies. When you set up a ConnectNetwork account, you are using GTL's platform. The company also operates GettingOut and other brands under the same parent organization.",
      },
      {
        question: "Can I use JPay for federal inmates instead of CorrLinks?",
        answer: "No. JPay does not serve federal Bureau of Prisons facilities. CorrLinks is the only approved electronic messaging system for federal inmates. Using JPay for a federal inmate will not work.",
      },
      {
        question: "How long does it take to set up CorrLinks?",
        answer: "Creating a CorrLinks account takes a few minutes at corrlinks.com. However, the account is not useful until the inmate adds you to their contact list, which requires them to initiate the process from inside the facility. Depending on the facility's processing speed and the inmate's access to TRULINCS terminals, this can take anywhere from a few days to a few weeks.",
      },
    ],

    relatedComparisonSlugs: [
      "jpay-vs-corrlinks",
      "jpay-vs-connectnetwork",
      "gettingout-vs-connectnetwork",
    ],
  },

  "textbehind-vs-smartinmate": {
    id: "cmp-textbehind-smartinmate",
    slug: "textbehind-vs-smartinmate",
    providerASlug: "textbehind",
    providerBSlug: "smartinmate",
    providerAName: "TextBehind",
    providerBName: "SmartInmate",
    winner: "smartinmate",
    winnerReason: "SmartInmate offers a more complete digital experience. TextBehind wins on coverage and simplicity.",
    category: "Messaging Focused",
    featured: false,

    description:
      "TextBehind vs SmartInmate: compare messaging, photo delivery, and platform experience. Find out which smaller provider better fits your communication needs.",

    intro: [
      "TextBehind and SmartInmate are both focused on messaging and photo communication but take different approaches to delivering that service. TextBehind converts digital messages into physical letters that are mailed to the inmate through the postal system — meaning it works at virtually any facility that accepts standard mail. SmartInmate is a fully digital platform offering electronic messaging, video visits, photo sharing, and money transfers, with a clean interface that many families find more intuitive than larger legacy platforms.",

      "The fundamental tradeoff between these two platforms is coverage versus features. TextBehind works at over 600 facilities because its print-based delivery model does not depend on the facility having installed digital kiosks or tablets. SmartInmate's digital-first approach offers a richer communication experience, but it only serves around 400 facilities across 20 states — meaning it may not be available at the specific facility you need. Checking facility availability for each platform is the critical first step before investing time in setup.",

      "Both platforms are considered alternatives or supplements to the larger legacy providers like JPay and GettingOut. Some families use TextBehind or SmartInmate alongside a primary platform for its specific advantages — TextBehind for the personal feel of physical letters, SmartInmate for its cleaner digital experience. This comparison examines both platforms in detail to help families understand which one fits their situation better.",
    ],

    verdict: [
      "Choose TextBehind if you need a simple, low-commitment way to send letters and photos that works at any facility accepting standard mail.",
      "Choose SmartInmate if you want a full digital platform with messaging, video visits, photos, and money transfers in one modern interface.",
      "TextBehind is better if your loved one is at a facility without digital messaging infrastructure, or if you prefer a physical letter format.",
      "SmartInmate offers more services and a better long-term digital communication experience for regular contact.",
      "Always verify whether each platform serves your specific facility before setting up an account.",
    ],

    sideA: {
      slug: "textbehind",
      name: "TextBehind",
      initial: "T",
      color: "bg-orange-600",
      score: { messaging: 7, video: 1, photos: 7, phone: 1, moneyTransfer: 1, coverage: 7, easeOfUse: 8 },
      overallScore: 4.6,
    },
    sideB: {
      slug: "smartinmate",
      name: "SmartInmate",
      initial: "S",
      color: "bg-cyan-600",
      score: { messaging: 8, video: 7, photos: 7, phone: 1, moneyTransfer: 7, coverage: 5, easeOfUse: 8 },
      overallScore: 6.1,
    },

    services: {
      messaging: {
        providerA: "TextBehind converts typed messages into printed letters sent by postal mail. The physical format has a personal quality that digital messages lack. Delivery takes 3 to 7 days.",
        providerB: "SmartInmate delivers messages electronically to participating facility kiosks or tablets. Digital delivery is typically faster and confirmed more reliably.",
        winner: "smartinmate",
        notes: "For speed and delivery confirmation, SmartInmate's digital messaging is more efficient. TextBehind's physical format is preferred by some for its personal quality.",
      },
      video: {
        providerA: "TextBehind does not offer video visitation services.",
        providerB: "SmartInmate provides remote video visits at participating facilities, scheduled through the app or website.",
        winner: "smartinmate",
        notes: "TextBehind has no video capability. SmartInmate's video is available at select facilities.",
      },
      photos: {
        providerA: "TextBehind prints digital photos and mails them as physical photo prints. Works at any facility that accepts standard mail.",
        providerB: "SmartInmate delivers photos digitally to participating facility systems after content review.",
        winner: null,
        notes: "Both support photo delivery in different formats. TextBehind's print approach works at more facilities; SmartInmate's digital delivery is faster where available.",
      },
      phone: {
        providerA: "TextBehind does not offer phone services.",
        providerB: "SmartInmate does not currently offer phone calling services.",
        winner: null,
        notes: "Neither platform supports phone calls. For phone, use the facility's contracted phone provider.",
      },
      moneyTransfer: {
        providerA: "TextBehind does not offer money transfer or commissary deposit services.",
        providerB: "SmartInmate supports commissary deposits at participating facilities via the platform.",
        winner: "smartinmate",
        notes: "SmartInmate's money transfer capability is an advantage for families who want to handle multiple services in one account.",
      },
    },

    coverage: {
      providerA: "600+ facilities across 25 states. Broader than SmartInmate because print-based delivery works at any standard mail-accepting facility.",
      providerB: "400+ facilities across 20 states. Growing but currently has a smaller footprint than TextBehind.",
      winner: "textbehind",
      notes: "TextBehind's coverage advantage is directly related to its print-based model, which does not require facility digital infrastructure.",
    },

    pricing: {
      providerA: "TextBehind charges per message (approximately $0.49) and per photo (approximately $0.99–$1.49). No subscription required.",
      providerB: "SmartInmate pricing varies by service type — messaging packages, per-photo fees, and video visit rates. Some subscription options available.",
      winner: null,
      notes: "For infrequent contact, TextBehind's pay-per-message model is cost-effective. For regular communication, SmartInmate's package pricing may be more efficient.",
    },

    mobileApp: {
      providerA: "TextBehind has a mobile app on iOS and Android. Known for its simple, easy-to-use interface suitable for users with no prior experience.",
      providerB: "SmartInmate has a mobile app on iOS and Android. Frequently described as more modern and intuitive than legacy providers.",
      winner: null,
      notes: "Both apps are well-regarded for simplicity. SmartInmate's app handles more services; TextBehind's app is more focused and streamlined.",
    },

    prosConsA: {
      pros: [
        "Works at any facility that accepts standard mail — widest practical coverage.",
        "Simple and accessible — no technical infrastructure at the facility required.",
        "Physical letter format has a personal quality that digital messages lack.",
        "No account required for basic features.",
      ],
      cons: [
        "Physical mail delivery takes 3 to 7 days — not suitable for time-sensitive communication.",
        "No video, phone, or money transfer services.",
        "Print-based delivery is not a real-time communication option.",
        "Per-message pricing with no subscription option for frequent users.",
      ],
    },

    prosConsB: {
      pros: [
        "Full digital platform covering messaging, video, photos, and money transfer.",
        "Modern, clean interface frequently praised for ease of use.",
        "Digital delivery is faster and more reliable than physical mail.",
        "Single account covers multiple communication needs.",
      ],
      cons: [
        "Smaller coverage than TextBehind — only available at 400 facilities in 20 states.",
        "No phone calling support.",
        "Coverage expansion is ongoing but uncertain.",
        "Less established than major providers like JPay or GettingOut.",
      ],
    },

    bestFor: [
      {
        scenario: "Communicating at a facility without digital kiosks or tablets",
        winner: "textbehind",
        reason: "TextBehind's print-based delivery works at any mail-accepting facility regardless of its digital infrastructure.",
      },
      {
        scenario: "Families who prefer a modern digital platform",
        winner: "smartinmate",
        reason: "SmartInmate's clean interface and digital delivery offer a more complete and faster communication experience.",
      },
      {
        scenario: "Video visits",
        winner: "smartinmate",
        reason: "TextBehind does not offer video. SmartInmate provides video at participating facilities.",
      },
      {
        scenario: "Sending a one-time message without a full account setup",
        winner: "textbehind",
        reason: "TextBehind allows some features without creating a full account, making it more accessible for occasional use.",
      },
    ],

    faq: [
      {
        question: "What is the main difference between TextBehind and SmartInmate?",
        answer: "TextBehind converts your typed messages into printed letters and mails them to the inmate. SmartInmate delivers messages digitally to facility kiosks or tablets. TextBehind works at more facilities because it uses standard postal mail; SmartInmate is faster and offers more services where it is available.",
      },
      {
        question: "Does TextBehind work at federal prisons?",
        answer: "TextBehind's physical letter and photo service works at any facility that accepts standard postal mail, including federal Bureau of Prisons institutions. However, for electronic messaging with federal inmates, CorrLinks remains the required platform. TextBehind's print letters and CorrLinks electronic messages can be used simultaneously.",
      },
      {
        question: "Can SmartInmate replace JPay?",
        answer: "Only if SmartInmate serves your specific facility. SmartInmate covers about 400 facilities in 20 states, while JPay covers 1,000+ facilities in 35+ states. If your loved one is at a JPay facility, SmartInmate likely is not available there. Always check facility availability before setting up an account.",
      },
      {
        question: "How long does TextBehind delivery take?",
        answer: "TextBehind letters are typically printed and mailed within one to two business days of submission. Standard mail delivery from that point depends on the postal service and the facility's mail processing — typically three to seven business days total from submission to the inmate receiving the letter.",
      },
      {
        question: "Is SmartInmate available at my loved one's facility?",
        answer: "Visit smartinmate.com and use the facility search feature to check. If the facility does not appear, SmartInmate is not currently available there. In that case, consider JPay, GettingOut, or Securus depending on the facility type, or use TextBehind's print-based service as a supplement.",
      },
    ],

    relatedComparisonSlugs: [
      "jpay-vs-gettingout",
      "gettingout-vs-connectnetwork",
      "jpay-vs-connectnetwork",
    ],
  },

  "gettingout-vs-connectnetwork": {
    id: "cmp-gettingout-connectnetwork",
    slug: "gettingout-vs-connectnetwork",
    providerASlug: "gettingout",
    providerBSlug: "connectnetwork",
    providerAName: "GettingOut",
    providerBName: "ConnectNetwork",
    winner: null,
    winnerReason: "GettingOut leads on video; ConnectNetwork leads on phone and geographic reach.",
    category: "County Jails",
    featured: false,

    description:
      "GettingOut vs ConnectNetwork: compare county jail communication platforms. Find out which is right for video visits, phone calls, and messaging at your facility.",

    intro: [
      "GettingOut (by Telmate) and ConnectNetwork (by GTL) are both products of ViaPath Technologies — the same parent company — but they operate as separate platforms under different contracts with different facilities. This means the comparison is not about choosing between competing companies, but about understanding which platform your specific facility uses. At some county jails, GettingOut holds the communication contract. At others, ConnectNetwork or GTL serves the same function. Knowing which platform applies to your facility is what matters most.",

      "Beyond the facility-contract question, there are genuine product differences worth understanding. GettingOut has built its reputation primarily around video visitation at county jails — its app and scheduling interface for remote video visits is widely regarded as one of the most user-friendly in the market. ConnectNetwork's strength is phone calling, and its geographic reach extends across more facility types including federal institutions and some state prisons that GettingOut does not typically serve.",

      "For families whose loved one is in a county jail, this comparison is highly relevant because many county facilities use one or the other but not both. Understanding what each platform does well helps set expectations for the communication experience and ensures you choose the right platform to invest time in setting up.",
    ],

    verdict: [
      "Choose GettingOut if your facility uses it and video visitation is your primary communication method.",
      "Choose ConnectNetwork if your facility uses it, or if phone calls are your main priority.",
      "Both platforms are operated by the same parent company (ViaPath) but serve different facilities under separate contracts.",
      "The platform your specific facility uses is almost always the deciding factor — check the jail's website or call the facility to confirm.",
      "If your loved one is transferred to a federal or state facility, ConnectNetwork has wider cross-system coverage.",
    ],

    sideA: {
      slug: "gettingout",
      name: "GettingOut",
      initial: "G",
      color: "bg-violet-600",
      score: { messaging: 7, video: 9, photos: 7, phone: 8, moneyTransfer: 8, coverage: 8, easeOfUse: 8 },
      overallScore: 7.9,
    },
    sideB: {
      slug: "connectnetwork",
      name: "ConnectNetwork",
      initial: "C",
      color: "bg-teal-600",
      score: { messaging: 7, video: 8, photos: 2, phone: 9, moneyTransfer: 8, coverage: 9, easeOfUse: 7 },
      overallScore: 7.1,
    },

    services: {
      messaging: {
        providerA: "GettingOut offers electronic messaging at participating county jails. Delivered digitally to facility kiosks. Not available at all GettingOut facilities.",
        providerB: "ConnectNetwork messaging is available at select facilities but is not its primary service. Availability varies significantly by facility contract.",
        winner: null,
        notes: "Neither platform is primarily known for messaging. Both are stronger in video and phone respectively.",
      },
      video: {
        providerA: "GettingOut's video visitation is its flagship service and is widely regarded as the best-in-class for county jails. Remote visits are easy to schedule and work well on mobile devices.",
        providerB: "ConnectNetwork/GTL also offers video at participating facilities. The experience is functional but GettingOut is generally considered more polished for this use case.",
        winner: "gettingout",
        notes: "GettingOut's video platform is a differentiated strength and the main reason many families prefer it.",
      },
      photos: {
        providerA: "GettingOut supports photo delivery at participating county facilities, either digitally or via print depending on the facility setup.",
        providerB: "ConnectNetwork does not offer a digital photo delivery service.",
        winner: "gettingout",
        notes: "GettingOut supports photos where available; ConnectNetwork does not.",
      },
      phone: {
        providerA: "GettingOut manages phone calling at county jail facilities under Telmate contracts. Easy to fund through the app.",
        providerB: "Phone calling is ConnectNetwork's primary service across its entire network. The widest phone coverage of any provider.",
        winner: "connectnetwork",
        notes: "ConnectNetwork/GTL is the market leader for inmate phone services by volume.",
      },
      moneyTransfer: {
        providerA: "GettingOut handles commissary deposits at county jail facilities through its app or website.",
        providerB: "ConnectNetwork processes money transfers at facilities across its network, including federal institutions.",
        winner: null,
        notes: "Both handle money transfers adequately. ConnectNetwork covers more facility types.",
      },
    },

    coverage: {
      providerA: "45 states, 2,200+ county jails and local detention centers. Primarily a county jail platform.",
      providerB: "All 50 states, 1,800+ facilities including county jails, state prisons, and federal BOP institutions.",
      winner: "connectnetwork",
      notes: "ConnectNetwork's broader coverage across facility types is an advantage for families who may need multi-system communication.",
    },

    pricing: {
      providerA: "Video visits approximately $0.49 per minute. Phone rates vary by facility contract. Per-photo fees apply.",
      providerB: "Phone rates FCC-regulated for interstate calls, approximately $0.14–$0.25 per minute. Video fees vary. Money transfer fees apply.",
      winner: null,
      notes: "Pricing is comparable. GettingOut's video pricing and ConnectNetwork's phone pricing are both competitive within their respective service categories.",
    },

    mobileApp: {
      providerA: "GettingOut's app is frequently cited as one of the best in the inmate communication market. Clean design, easy video scheduling, and intuitive navigation.",
      providerB: "ConnectNetwork has a capable mobile app (GTL Connect) for iOS and Android. Well-regarded for phone account management but slightly less polished for video scheduling.",
      winner: "gettingout",
      notes: "GettingOut's app experience is generally rated higher, particularly for video visits.",
    },

    prosConsA: {
      pros: [
        "Best-in-class video visitation platform for county jails.",
        "Largest county jail network at 2,200+ facilities.",
        "Highly rated mobile app, particularly for video scheduling.",
        "Covers phone, video, messaging, and money from one account at most facilities.",
      ],
      cons: [
        "Primarily a county jail platform — limited state and no federal coverage.",
        "If loved one transfers to state or federal facility, account becomes unusable.",
        "Video pricing can be significant for daily visits.",
        "Messaging not universally available at all GettingOut county facilities.",
      ],
    },

    prosConsB: {
      pros: [
        "Widest geographic coverage, including federal, state, and county facilities.",
        "Phone calling is its strongest service — available almost everywhere.",
        "Account carries value if loved one moves between different facility types.",
        "FCC-regulated interstate call rates.",
      ],
      cons: [
        "No digital photo service.",
        "Video experience less polished than GettingOut.",
        "Messaging availability varies widely by facility.",
        "App slightly less intuitive than GettingOut for video scheduling.",
      ],
    },

    bestFor: [
      {
        scenario: "Video visits with county jail inmates",
        winner: "gettingout",
        reason: "GettingOut's video platform is the top choice for county jail families wanting to do remote video visits.",
      },
      {
        scenario: "Phone calls from county jails",
        winner: "connectnetwork",
        reason: "ConnectNetwork/GTL is the market leader for inmate phone services and has the broadest phone coverage.",
      },
      {
        scenario: "Families needing cross-system coverage (county to federal or state)",
        winner: "connectnetwork",
        reason: "ConnectNetwork serves federal, state, and county facilities, so accounts may retain value if the inmate is transferred.",
      },
      {
        scenario: "Sending photos to county jail inmates",
        winner: "gettingout",
        reason: "GettingOut supports photo delivery at participating facilities. ConnectNetwork does not offer digital photo services.",
      },
    ],

    faq: [
      {
        question: "Are GettingOut and ConnectNetwork operated by the same company?",
        answer: "Yes. Both GettingOut (Telmate) and ConnectNetwork (GTL) are brands under ViaPath Technologies, the same parent company. Despite this, they operate as separate platforms with separate facility contracts. Being on one platform does not give you access to the other.",
      },
      {
        question: "How do I know which platform my county jail uses?",
        answer: "The most reliable way is to check the county jail's official website — it typically lists the communication providers in its visitor information or inmate services section. You can also call the facility directly. If neither option is available, you can check both GettingOut's and ConnectNetwork's facility search tools to see which one lists your facility.",
      },
      {
        question: "Can I use GettingOut for state prisons?",
        answer: "No. GettingOut is a county jail platform and does not serve state prisons. If your loved one is transferred from a county jail to a state prison after sentencing, you will need to switch to a different platform — typically JPay for messaging at state facilities.",
      },
      {
        question: "Is video visitation really better on GettingOut than ConnectNetwork?",
        answer: "In most user feedback and reviews, GettingOut's video platform is rated slightly higher for ease of scheduling, app quality, and overall visit experience. ConnectNetwork's video product is functional and reliable, but it is not the platform's primary strength the way video is for GettingOut.",
      },
      {
        question: "What happens to my GettingOut account if my loved one is sentenced and transferred?",
        answer: "GettingOut accounts do not carry over to state or federal facilities. If your loved one is transferred after sentencing, you will need a new account on the appropriate platform for their new facility. Any unused balance in your GettingOut account may be refundable — contact GettingOut customer service to request a refund.",
      },
    ],

    relatedComparisonSlugs: [
      "jpay-vs-gettingout",
      "jpay-vs-connectnetwork",
      "corrlinks-vs-connectnetwork",
    ],
  },
}
