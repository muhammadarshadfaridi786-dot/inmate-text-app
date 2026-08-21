// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface ProviderServices {
  messaging: boolean
  video: boolean
  photos: boolean
  phone: boolean
  moneyTransfer: boolean
}

export interface ProviderService {
  available: boolean
  description: string
  setupUrl?: string
  notes?: string
}

export interface ProviderPricingItem {
  label: string
  value: string
  notes?: string
}

export interface ProviderSupportedFacility {
  name: string
  slug: string
  stateAbbr: string
  type: string
}

export interface ProviderBasic {
  id: string
  name: string
  slug: string
  initial: string
  color: string           // Tailwind bg class
  tagline: string
  services: ProviderServices
  statesCount: number
  facilitiesCount: number
  appAvailable: boolean
  hasDetailPage: boolean
}

export interface ProviderDetail extends ProviderBasic {
  description: string     // 160-char SEO description
  overview: string[]      // 3–4 paragraphs, 500–800 words
  website: string
  iosUrl?: string
  androidUrl?: string

  serviceDetails: {
    messaging: ProviderService
    video: ProviderService
    photos: ProviderService
    phone: ProviderService
    moneyTransfer: ProviderService
  }

  coverage: {
    facilityTypes: string[]   // e.g. ["State", "County"]
    geographic: string        // e.g. "35+ states nationwide"
    notes: string
  }

  supportedFacilities: ProviderSupportedFacility[]

  pricing: ProviderPricingItem[]
  pros: string[]
  cons: string[]
  faq: Array<{ question: string; answer: string }>
  relatedProviderSlugs: string[]
}

// ─────────────────────────────────────────────
// ALL PROVIDERS — Directory listing
// ─────────────────────────────────────────────

export const ALL_PROVIDERS: ProviderBasic[] = [
  {
    id: "p-jpay",
    name: "JPay",
    slug: "jpay",
    initial: "J",
    color: "bg-blue-600",
    tagline: "Messaging, photos, and money transfer for state inmates",
    services: { messaging: true, video: true, photos: true, phone: true, moneyTransfer: true },
    statesCount: 35,
    facilitiesCount: 1000,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-connectnetwork",
    name: "ConnectNetwork",
    slug: "connectnetwork",
    initial: "C",
    color: "bg-teal-600",
    tagline: "Phone, video, and messaging for federal and county facilities",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1800,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-gettingout",
    name: "GettingOut",
    slug: "gettingout",
    initial: "G",
    color: "bg-violet-600",
    tagline: "Video visitation and messaging for county jails nationwide",
    services: { messaging: true, video: true, photos: true, phone: true, moneyTransfer: true },
    statesCount: 45,
    facilitiesCount: 2200,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-corrlinks",
    name: "CorrLinks",
    slug: "corrlinks",
    initial: "C",
    color: "bg-emerald-700",
    tagline: "Official federal Bureau of Prisons email communication system",
    services: { messaging: true, video: false, photos: false, phone: false, moneyTransfer: false },
    statesCount: 50,
    facilitiesCount: 120,
    appAvailable: false,
    hasDetailPage: true,
  },
  {
    id: "p-textbehind",
    name: "TextBehind",
    slug: "textbehind",
    initial: "T",
    color: "bg-orange-600",
    tagline: "Simple messaging and photo delivery for incarcerated loved ones",
    services: { messaging: true, video: false, photos: true, phone: false, moneyTransfer: false },
    statesCount: 25,
    facilitiesCount: 600,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-smartinmate",
    name: "SmartInmate",
    slug: "smartinmate",
    initial: "S",
    color: "bg-cyan-600",
    tagline: "All-in-one messaging, photos, and video platform for families",
    services: { messaging: true, video: true, photos: true, phone: false, moneyTransfer: true },
    statesCount: 20,
    facilitiesCount: 400,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-pigeonly",
    name: "Pigeonly",
    slug: "pigeonly",
    initial: "P",
    color: "bg-rose-600",
    tagline: "Letter writing, photo printing, and low-cost calling for families",
    services: { messaging: true, video: false, photos: true, phone: true, moneyTransfer: false },
    statesCount: 50,
    facilitiesCount: 3000,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-securus",
    name: "Securus Technologies",
    slug: "securus",
    initial: "S",
    color: "bg-indigo-700",
    tagline: "Phone, video, and messaging for county jails and state prisons",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 45,
    facilitiesCount: 1200,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-gtl",
    name: "GTL (ViaPath Technologies)",
    slug: "gtl",
    initial: "G",
    color: "bg-amber-600",
    tagline: "State prison phone and video visits across 30+ states",
    services: { messaging: false, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 30,
    facilitiesCount: 800,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-icsolutions",
    name: "ICSolutions",
    slug: "icsolutions",
    initial: "I",
    color: "bg-sky-700",
    tagline: "Phone and video communication for county jails and detention centers",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 15,
    facilitiesCount: 300,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-access-corrections",
    name: "Access Corrections",
    slug: "access-corrections",
    initial: "A",
    color: "bg-green-700",
    tagline: "Commissary deposits and money transfers for incarcerated individuals",
    services: { messaging: false, video: false, photos: false, phone: false, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1500,
    appAvailable: false,
    hasDetailPage: true,
  },
  {
    id: "p-homewav",
    name: "HomeWAV",
    slug: "homewav",
    initial: "H",
    color: "bg-purple-600",
    tagline: "Software-only video visitation and messaging for county jails",
    services: { messaging: true, video: true, photos: true, phone: false, moneyTransfer: false },
    statesCount: 30,
    facilitiesCount: 350,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-ncic",
    name: "NCIC Inmate Communications",
    slug: "ncic",
    initial: "N",
    color: "bg-slate-600",
    tagline: "Phone, tablet, and video services for regional correctional facilities",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 20,
    facilitiesCount: 250,
    appAvailable: true,
    hasDetailPage: true,
  },
  {
    id: "p-touchpay",
    name: "TouchPay",
    slug: "touchpay",
    initial: "T",
    color: "bg-lime-700",
    tagline: "Kiosk and online commissary deposits for correctional facilities",
    services: { messaging: false, video: false, photos: false, phone: false, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1200,
    appAvailable: false,
    hasDetailPage: true,
  },
  {
    id: "p-city-tele-coin",
    name: "City Tele Coin",
    slug: "city-tele-coin",
    initial: "C",
    color: "bg-red-700",
    tagline: "Inmate phone calls and communication services for county facilities",
    services: { messaging: false, video: false, photos: false, phone: true, moneyTransfer: true },
    statesCount: 12,
    facilitiesCount: 180,
    appAvailable: false,
    hasDetailPage: true,
  },
]

// ─────────────────────────────────────────────
// DETAILED PROVIDER DATA — 7 seeded providers
// ─────────────────────────────────────────────

export const PROVIDER_DETAILS: Record<string, ProviderDetail> = {

  jpay: {
    id: "p-jpay",
    name: "JPay",
    slug: "jpay",
    initial: "J",
    color: "bg-blue-600",
    tagline: "Messaging, photos, and money transfer for state inmates",
    services: { messaging: true, video: true, photos: true, phone: true, moneyTransfer: true },
    statesCount: 35,
    facilitiesCount: 1000,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "JPay provides messaging, photo sharing, video visitation, and money transfer services at 1,000+ state correctional facilities across 35 states. Create a free account to get started.",

    website: "https://www.jpay.com",
    iosUrl: "https://apps.apple.com/us/app/jpay/id388308268",
    androidUrl: "https://play.google.com/store/apps/details?id=com.jpay.android",

    overview: [
      "JPay is one of the most widely used inmate communication platforms in the United States, serving more than 35 states and over 1,000 correctional facilities. Originally founded in 2000, JPay pioneered electronic messaging for incarcerated individuals and has since expanded into a full-service platform covering messaging, photo sharing, video visitation, phone services, and money transfers. The company operates as a subsidiary of Aventiv Technologies, which also includes Securus Technologies, making JPay part of one of the largest correctional technology companies in the country. For families with a loved one in a state prison system, JPay is often the first provider they encounter.",

      "The platform works around a stamp-based system for messaging. Families purchase JPay stamps, which function like digital currency for sending electronic messages. One stamp typically covers a single message of standard length, and responses from the inmate use their own stamp allotment. Photos can also be sent through JPay using a per-photo purchase model. The JPay app — available on iOS and Android — makes it straightforward to compose messages, attach photos, and track the status of recent communications. Money transfers for commissary purposes are processed directly through the platform and typically credited within one to two business days.",

      "JPay is primarily a state prison platform. It is not used at federal Bureau of Prisons facilities, where CorrLinks is the mandatory messaging system. It is also not universally available at county jails, where providers like GettingOut or Securus typically hold county-level contracts. Confirming that JPay serves the specific facility where your loved one is housed is the essential first step. The JPay website includes a facility search tool that allows families to verify coverage before creating an account or purchasing any stamps or services.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Electronic messaging using a stamp-based system. Purchase stamps to send messages to incarcerated individuals. Messages are reviewed by facility staff before delivery.",
        setupUrl: "https://www.jpay.com",
        notes: "Stamp prices vary by state, typically $0.33–$0.47 per stamp. One stamp = one standard message.",
      },
      video: {
        available: true,
        description: "Remote video visitation available at participating facilities. Schedule visits through the JPay app or website.",
        setupUrl: "https://www.jpay.com",
        notes: "Not available at all JPay facilities. Check facility-specific availability before scheduling.",
      },
      photos: {
        available: true,
        description: "Send digital photos directly to incarcerated individuals through the JPay platform. Photos are reviewed for content compliance before delivery.",
        setupUrl: "https://www.jpay.com",
        notes: "Typically $0.45–$0.65 per photo. Photos must comply with facility content guidelines.",
      },
      phone: {
        available: true,
        description: "Phone calling services available at select facilities through JPay's phone platform.",
        notes: "Phone services at many CDCR and TDCJ facilities are managed by GTL rather than JPay. Confirm which provider handles phone at the specific facility.",
      },
      moneyTransfer: {
        available: true,
        description: "Send funds directly to an inmate's trust account for commissary purchases. Accepts debit cards, credit cards, and cash at MoneyGram locations.",
        setupUrl: "https://www.jpay.com",
        notes: "Transfer fees apply. Typically 2.75%–$2.95 depending on transfer amount and method.",
      },
    },

    coverage: {
      facilityTypes: ["State Prison", "County Jail"],
      geographic: "35+ states nationwide",
      notes: "JPay is primarily a state prison provider. Coverage varies significantly by state — some states use JPay system-wide while others use it only at select facilities. JPay does not serve federal Bureau of Prisons facilities.",
    },

    supportedFacilities: [
      { name: "San Quentin State Prison",          slug: "san-quentin-state-prison",          stateAbbr: "CA", type: "State Prison" },
      { name: "Attica Correctional Facility",       slug: "attica-correctional-facility",       stateAbbr: "NY", type: "State Prison" },
      { name: "Folsom State Prison",                slug: "folsom-state-prison",                stateAbbr: "CA", type: "State Prison" },
      { name: "Sing Sing Correctional Facility",    slug: "sing-sing-correctional-facility",    stateAbbr: "NY", type: "State Prison" },
      { name: "Pelican Bay State Prison",           slug: "pelican-bay-state-prison",           stateAbbr: "CA", type: "State Prison" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free",             notes: "No cost to create a JPay account." },
      { label: "Email Stamp",          value: "$0.33–$0.47",      notes: "Per stamp. Price varies by state contract." },
      { label: "Photo",                value: "$0.45–$0.65",      notes: "Per digital photo sent." },
      { label: "Money Transfer Fee",   value: "2.75% or $2.95",   notes: "Whichever is greater. Varies by method." },
      { label: "Video Visit",          value: "Varies",           notes: "Per-minute or session pricing depending on facility." },
    ],

    pros: [
      "Largest state prison network, covering 35+ states and 1,000+ facilities.",
      "All-in-one account covers messaging, photos, video, and money transfer.",
      "Well-designed mobile app available on iOS and Android.",
      "Messaging, photos, and money transfer in one platform reduces account management.",
      "Established platform with years of family communication experience.",
    ],
    cons: [
      "Not available at federal Bureau of Prisons facilities. Use CorrLinks for federal inmates.",
      "Stamp-based pricing can feel confusing for first-time users.",
      "Transfer fees on money deposits add cost over time.",
      "Phone services at some facilities managed by a different provider (GTL).",
      "Video visitation not universally available. Availability depends on the facility.",
    ],

    faq: [
      {
        question: "How do I get started with JPay?",
        answer: "Create a free account at jpay.com or through the JPay mobile app. Search for the facility where your loved one is housed to confirm JPay is available there. Add the inmate using their ID number, purchase stamps, and compose your first message.",
      },
      {
        question: "What is a JPay stamp?",
        answer: "A JPay stamp is the digital currency used to send electronic messages. One stamp covers one standard-length message. Stamp prices vary by state, typically between $0.33 and $0.47 each. You purchase stamps in advance and use them each time you send a message.",
      },
      {
        question: "Does JPay work for federal prisons?",
        answer: "No. Federal Bureau of Prisons facilities use CorrLinks — the BOP's official email system — not JPay. If your loved one is in a federal facility (such as a Federal Correctional Institution or United States Penitentiary), you need a CorrLinks account, not JPay.",
      },
      {
        question: "How long does it take for a JPay message to arrive?",
        answer: "JPay messages are typically reviewed by facility staff before delivery to the inmate. Delivery usually takes 24 to 48 hours on business days, though some facilities process messages faster. Responses from the inmate depend on their access to JPay tablets or kiosks within the facility.",
      },
      {
        question: "How do I send money through JPay?",
        answer: "Log into your JPay account and navigate to the Send Money section. Select the facility, enter the inmate's ID, and choose a payment method — debit card, credit card, or cash at a MoneyGram location. Funds are typically credited to the inmate's trust account within one to two business days. A processing fee applies.",
      },
    ],

    relatedProviderSlugs: ["connectnetwork", "corrlinks", "gettingout"],
  },

  connectnetwork: {
    id: "p-connectnetwork",
    name: "ConnectNetwork",
    slug: "connectnetwork",
    initial: "C",
    color: "bg-teal-600",
    tagline: "ConnectNetwork by GTL — Inmate Messaging, Video & Phone for County Jails",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1800,
    appAvailable: true,
    hasDetailPage: true,

    description:
       "ConnectNetwork by GTL is one of the largest inmate communication platforms in the U.S., serving 1,800+ facilities across 50 states. Families can send messages, schedule video visits, fund phone accounts, and transfer money — all from one account. Setting up is free and takes less than 5 minutes.",
    website: "https://www.connectnetwork.com",
    iosUrl: "https://apps.apple.com/us/app/gtl-connect/id943869522",
    androidUrl: "https://play.google.com/store/apps/details?id=com.gtl.connect",

    overview: [
  "ConnectNetwork is operated by GTL (Global Tel Link), one of the largest inmate communication companies in the United States, serving over 1,800 correctional facilities across all 50 states.",

  "The platform is especially strong in county jails and federal facilities. If your loved one is in a county detention center, ConnectNetwork is likely the provider you will need to use.",

  "Creating a ConnectNetwork account is free. Families can set up an AdvancePay phone account, schedule video visits, send electronic messages, and deposit money to an inmate trust account — all from the same login.",

  "ConnectNetwork phone rates are regulated by the FCC for interstate calls. For most families, the cost is $0.06 to $0.21 per minute depending on the facility and call type.",

  "To get started, visit connectnetwork.com, create a free account, search for your loved one's facility, and add funds to begin receiving calls or sending messages.",
],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Electronic messaging available at select facilities through GTL's messaging platform.",
        setupUrl: "https://www.connectnetwork.com",
        notes: "Messaging availability varies by facility. Not all ConnectNetwork facilities offer electronic messaging.",
      },
      video: {
        available: true,
        description: "Schedule remote video visits through your ConnectNetwork account. Available at participating facilities.",
        setupUrl: "https://www.connectnetwork.com",
        notes: "Requires a device with camera. Must schedule in advance. Walk-in video visits are not available.",
      },
      photos: {
        available: false,
        description: "Photo sharing is not available through ConnectNetwork.",
        notes: "For digital photo services, consider JPay or TextBehind if available at the facility.",
      },
      phone: {
        available: true,
        description: "Fund an AdvancePay account linked to your phone number to receive inmate-initiated calls. Rates vary by facility contract.",
        setupUrl: "https://www.connectnetwork.com",
        notes: "Rates are regulated by the FCC for interstate calls. In-state rates may vary.",
      },
      moneyTransfer: {
        available: true,
        description: "Send funds to inmate trust accounts via debit card, credit card, or Western Union.",
        setupUrl: "https://www.connectnetwork.com",
        notes: "Processing fees apply. Funds typically credited within one to two business days.",
      },
    },

    coverage: {
      facilityTypes: ["Federal Prison", "State Prison", "County Jail"],
      geographic: "All 50 states, including federal BOP facilities",
      notes: "ConnectNetwork/GTL is one of the few providers serving federal Bureau of Prisons facilities in addition to state and county institutions. Coverage for specific services (phone, video, messaging) varies by individual facility contract.",
    },

    supportedFacilities: [
      { name: "Federal Correctional Complex Coleman", slug: "federal-correctional-complex-coleman", stateAbbr: "FL", type: "Federal Prison" },
      { name: "Harris County Jail",                   slug: "harris-county-jail",                   stateAbbr: "TX", type: "County Jail"   },
      { name: "Rikers Island",                        slug: "rikers-island",                        stateAbbr: "NY", type: "County Jail"   },
      { name: "Miami-Dade Corrections Facility",      slug: "miami-dade-corrections-facility",      stateAbbr: "FL", type: "County Jail"   },
    ],

    pricing: [
      { label: "Account Registration", value: "Free" },
      { label: "Phone Calls",          value: "$0.14–$0.25/min", notes: "Interstate rates regulated. In-state rates may vary by contract." },
      { label: "Video Visit",          value: "$0.49/min or flat", notes: "Session pricing varies by facility." },
      { label: "Money Transfer Fee",   value: "Varies",          notes: "Depends on transfer amount and payment method." },
    ],

    pros: [
      "Widest facility coverage, serving all 50 states including federal BOP institutions.",
      "Single account can cover phone, video, and money transfer at many facilities.",
      "Regulated interstate calling rates provide some cost protection.",
      "Mobile app consolidates account management across services.",
      "Long-established platform with proven reliability at thousands of facilities.",
    ],
    cons: [
      "Photo sharing not available through ConnectNetwork.",
      "Messaging availability varies widely by facility and is not universally offered.",
      "In-state calling rates can be significantly higher than interstate rates.",
      "User interface can feel dated compared to newer platforms.",
      "Customer service quality varies depending on facility type and location.",
    ],

    faq: [
      {
        question: "What is the difference between ConnectNetwork and GTL?",
        answer: "ConnectNetwork is the consumer-facing brand name for the platform operated by GTL (Global Tel Link), now also known as ViaPath Technologies. GTL holds the facility contracts, while ConnectNetwork is the portal families use to manage accounts. They are the same underlying service.",
      },
      {
        question: "Does ConnectNetwork work at federal prisons?",
        answer: "Yes. ConnectNetwork/GTL serves many federal Bureau of Prisons facilities for phone calls, video visits, and money transfers. However, for electronic messaging at federal facilities, you still need a CorrLinks account — messaging at BOP facilities is handled exclusively through the TRULINCS/CorrLinks system.",
      },
      {
        question: "How do I set up phone calls through ConnectNetwork?",
        answer: "Create a free account at connectnetwork.com. Set up an AdvancePay account linked to your phone number and add funds via debit card, credit card, or Western Union. Once your account is funded, the incarcerated individual can call your number directly from facility phones. You cannot initiate calls. All calls are inmate-initiated.",
      },
      {
        question: "Can I send photos through ConnectNetwork?",
        answer: "No. ConnectNetwork does not offer a photo sharing service. If photo sharing is available at the facility you need, check whether JPay or TextBehind serves that location — those platforms offer digital photo delivery.",
      },
      {
        question: "How do I schedule a video visit through ConnectNetwork?",
        answer: "Log into your ConnectNetwork account and navigate to the video visitation section. Search for the facility, select an available time slot, and complete the booking. You will need a device with a working camera and a stable internet connection. Schedule visits at least 24 to 48 hours in advance.",
      },
    ],

    relatedProviderSlugs: ["jpay", "gettingout", "corrlinks"],
  },

  gettingout: {
    id: "p-gettingout",
    name: "GettingOut",
    slug: "gettingout",
    initial: "G",
    color: "bg-violet-600",
    tagline: "GettingOut by Telmate Video Visits, Messaging and Phone Calls at 2,200+ County Jails",
    services: { messaging: true, video: true, photos: true, phone: true, moneyTransfer: true },
    statesCount: 45,
    facilitiesCount: 2200,
    appAvailable: true,
    hasDetailPage: true,

    description:
          "GettingOut by Telmate provides video visitation, messaging, phone calls, photo sharing, and money transfers at 2,200+ county jails across 45 states. Best known for easy-to-use remote video visits from home.",

    website: "https://www.gettingout.com",
    iosUrl: "https://apps.apple.com/us/app/gettingout/id453021164",
    androidUrl: "https://play.google.com/store/apps/details?id=com.telmate.gettingout",

    overview: [
  "GettingOut is operated by Telmate, a subsidiary of GTL (Global Tel Link) and part of ViaPath Technologies. The platform serves over 2,200 county jails across 45 states and is one of the most widely used video visitation tools at the county jail level in the United States. If your loved one is in a county jail, GettingOut is one of the first platforms to check.",

  "In addition to video visits, GettingOut supports electronic messaging, photo sharing, phone calls, and money transfers at participating facilities. Families create a single free account that covers all these services at any GettingOut-served facility. The same account and contact history carries over if a loved one transfers between county facilities in the same system.",

  "GettingOut is primarily a county jail platform. Most state prisons use different providers such as JPay or Securus. If your loved one transfers from a county jail to a state prison after sentencing, you will likely need to create a new account on the state facility provider. Always confirm the current facility and its provider before setting up a new account.",
],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Send electronic messages to incarcerated individuals at participating county jails. Messages are delivered digitally and reviewed by facility staff.",
        setupUrl: "https://www.gettingout.com",
        notes: "Per-message pricing applies. Messaging availability varies by facility contract.",
      },
      video: {
        available: true,
        description: "Schedule and conduct remote video visits from any device with a camera. GettingOut's video platform is optimized for both mobile and desktop.",
        setupUrl: "https://www.gettingout.com",
        notes: "Per-minute or session pricing. Must be on the inmate's approved contact list.",
      },
      photos: {
        available: true,
        description: "Send digital photos through GettingOut's photo service. Photos are reviewed for content compliance before delivery.",
        setupUrl: "https://www.gettingout.com",
        notes: "Per-photo pricing. Must comply with facility content guidelines.",
      },
      phone: {
        available: true,
        description: "Fund a prepaid account to receive inmate-initiated phone calls. Manage call history and account balance through the GettingOut app.",
        setupUrl: "https://www.gettingout.com",
        notes: "Rates vary by facility. Interstate rates are FCC-regulated.",
      },
      moneyTransfer: {
        available: true,
        description: "Deposit funds to inmate commissary accounts via debit card, credit card, or cash at participating locations.",
        setupUrl: "https://www.gettingout.com",
        notes: "Processing fees apply. Typical credit within one business day.",
      },
    },

    coverage: {
      facilityTypes: ["County Jail", "Detention Center"],
      geographic: "45 states, primarily county jails and local detention facilities",
      notes: "GettingOut's strength is county jail coverage. It is not the primary platform for state prisons or federal facilities. If a loved one is transferred from a county jail to a state prison after sentencing, a different provider account will likely be required.",
    },

    supportedFacilities: [
      { name: "Rikers Island",                   slug: "rikers-island",                   stateAbbr: "NY", type: "County Jail" },
      { name: "Cook County Jail",                slug: "cook-county-jail",                stateAbbr: "IL", type: "County Jail" },
      { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", stateAbbr: "FL", type: "County Jail" },
      { name: "Harris County Jail",              slug: "harris-county-jail",              stateAbbr: "TX", type: "County Jail" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free" },
      { label: "Video Visit",          value: "$0.49/min",   notes: "Flat per-minute rate at most facilities." },
      { label: "Phone Calls",          value: "Varies",      notes: "Per-minute rate regulated for interstate calls." },
      { label: "Photo",                value: "$0.49–$0.99", notes: "Per photo sent." },
      { label: "Money Transfer Fee",   value: "Varies",      notes: "Depends on transfer amount and method." },
    ],

    pros: [
      "Best-in-class video visitation platform with a highly rated mobile app.",
      "Serves 2,200+ county jails, the largest county jail network of any provider.",
      "Single account covers video, messaging, phone, and money transfer.",
      "Remote video eliminates travel for families who live far from the facility.",
      "Intuitive app interface frequently cited as easier to use than competitors.",
    ],
    cons: [
      "Primarily a county jail provider. Does not serve most state prisons.",
      "Accounts typically do not carry over when an inmate transfers to a state facility.",
      "Video visit pricing can add up with frequent use.",
      "Photo sharing not as widely available as messaging and video.",
      "Customer service responsiveness varies by facility region.",
    ],

    faq: [
      {
        question: "What types of facilities does GettingOut serve?",
        answer: "GettingOut primarily serves county jails and local detention centers across 45 states. It is one of the most widely used platforms at the county level. It generally does not serve state prisons or federal Bureau of Prisons facilities — those institutions typically use JPay, Securus, or CorrLinks.",
      },
      {
        question: "How do I schedule a video visit through GettingOut?",
        answer: "Download the GettingOut app on iOS or Android, or visit gettingout.com. Create a free account, search for the facility, and select an available time slot. You must be on the inmate's approved contact list. A device with a working camera is required for the visit.",
      },
      {
        question: "Does GettingOut work if my loved one is transferred to a state prison?",
        answer: "Generally no. GettingOut is a county jail platform. If your loved one is transferred to a state prison after sentencing, that facility likely uses a different provider — typically JPay for messaging and Securus or GTL for phone. You will need to set up accounts on the new provider platform for the state facility.",
      },
      {
        question: "Can I use GettingOut for messaging as well as video?",
        answer: "Yes, GettingOut supports electronic messaging at participating facilities. However, not all county jails that use GettingOut for video also use it for messaging — availability varies by facility contract. Check the facility's specific services within your GettingOut account.",
      },
      {
        question: "Is GettingOut available for federal prisons?",
        answer: "No. Federal Bureau of Prisons facilities use CorrLinks for messaging and ConnectNetwork/GTL for phone and video. GettingOut does not serve federal institutions.",
      },
    ],

    relatedProviderSlugs: ["jpay", "connectnetwork", "smartinmate"],
  },

  corrlinks: {
    id: "p-corrlinks",
    name: "CorrLinks",
    slug: "corrlinks",
    initial: "C",
    color: "bg-emerald-700",
    tagline: "Official federal Bureau of Prisons email communication system",
    services: { messaging: true, video: false, photos: false, phone: false, moneyTransfer: false },
    statesCount: 50,
    facilitiesCount: 120,
    appAvailable: false,
    hasDetailPage: true,

    description:
      "CorrLinks is the official Bureau of Prisons email system for all federal inmates. Required for any electronic messaging with someone in federal custody. Create a free account at corrlinks.com.",

    website: "https://www.corrlinks.com",

    overview: [
      "CorrLinks is the official electronic messaging system for the Federal Bureau of Prisons, operating under the TRULINCS program (Trust Fund Limited Inmate Computer System). It is the only approved platform for electronic correspondence with individuals in federal custody. All 120 federal correctional institutions across the United States — including federal penitentiaries, medium and low-security facilities, federal detention centers, and federal medical centers — use CorrLinks exclusively for electronic messaging. There are no alternative email or messaging providers for federal inmates. If your loved one is in any Bureau of Prisons facility, CorrLinks is the only way to exchange electronic messages.",

      "The CorrLinks system works differently from consumer email or from platforms like JPay or GettingOut. Families cannot initiate contact with a federal inmate through CorrLinks on their own — the inmate must add you to their contact list from within the facility, or send you an initial invitation through the TRULINCS system. Once a connection is established, messages function similarly to email: you compose a message through your CorrLinks account, it is reviewed by BOP staff, and delivered to the inmate's TRULINCS account. Responses follow the same path in reverse. CorrLinks charges a small per-message fee funded through a prepay account.",

      "CorrLinks does not support video calls, photo delivery, or phone services. Those functions at federal facilities are handled through separate systems — phone calls are managed through the BOP's Inmate Telephone System via ConnectNetwork/GTL, and in-person or video visits are arranged through the specific facility's scheduling system. Families who need a complete communication setup for a federal inmate typically need both a CorrLinks account for messaging and a ConnectNetwork account for phone and video. Understanding these two systems are separate and must be set up independently is one of the most common points of confusion for families new to the federal system.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Official BOP email system. Inmate must add you to their contact list before you can exchange messages.",
        setupUrl: "https://www.corrlinks.com",
        notes: "Per-message fee charged to your prepay balance. Messages reviewed by BOP staff before delivery.",
      },
      video: {
        available: false,
        description: "CorrLinks does not provide video visitation services.",
        notes: "Video visits at federal facilities must be arranged directly through the institution. ConnectNetwork/GTL manages phone and video at many BOP locations.",
      },
      photos: {
        available: false,
        description: "CorrLinks does not support digital photo delivery.",
        notes: "Photos can be sent by physical mail subject to BOP content guidelines. Digital photo services are not available at federal facilities.",
      },
      phone: {
        available: false,
        description: "CorrLinks does not handle phone services.",
        notes: "Federal inmate phone calls are managed through the BOP's Inmate Telephone System via ConnectNetwork. Set up a ConnectNetwork account separately for phone access.",
      },
      moneyTransfer: {
        available: false,
        description: "CorrLinks does not process commissary deposits.",
        notes: "BOP commissary deposits are handled through ConnectNetwork or by money order. See the BOP website for current deposit instructions.",
      },
    },

    coverage: {
      facilityTypes: ["Federal Prison"],
      geographic: "All 120 federal Bureau of Prisons facilities nationwide",
      notes: "CorrLinks is the exclusive messaging provider for all BOP federal facilities. It does not serve state prisons, county jails, or any non-federal correctional institutions.",
    },

    supportedFacilities: [
      { name: "Federal Correctional Complex Coleman", slug: "federal-correctional-complex-coleman", stateAbbr: "FL", type: "Federal Prison" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free",           notes: "Free to create a CorrLinks account at corrlinks.com." },
      { label: "Messaging",            value: "Prepay required", notes: "Per-message debit from prepay balance. Typically fractions of a cent per character." },
      { label: "Prepay Minimum",       value: "Varies",          notes: "Fund your account via credit card or check. Minimum deposit varies." },
    ],

    pros: [
      "Only approved messaging platform for all 120 federal Bureau of Prisons facilities.",
      "Messages are legally compliant and fully integrated with BOP systems.",
      "Free account creation. Only pay for messages sent.",
      "Reliable delivery within the federal system.",
      "Accessible from any browser, with no app download required.",
    ],
    cons: [
      "Messaging only. No video, photos, or phone calls through CorrLinks.",
      "Inmate must initiate or approve contact first. Families cannot reach out independently.",
      "Per-message fees apply, unlike some consumer messaging platforms.",
      "No mobile app. Browser-based only, which is less convenient on smartphones.",
      "Setup and approval process can take days to weeks for new contacts.",
    ],

    faq: [
      {
        question: "Can I create a CorrLinks account and message a federal inmate right away?",
        answer: "No. You cannot initiate contact with a federal inmate through CorrLinks on your own. The inmate must first add your email address to their TRULINCS contact list from within the facility and send you an invitation. Once you receive the invitation, you can create a CorrLinks account and accept it to begin exchanging messages.",
      },
      {
        question: "Does CorrLinks work for state prisons or county jails?",
        answer: "No. CorrLinks is exclusively for federal Bureau of Prisons facilities. State prisons and county jails use different providers — JPay and Securus for state prisons, GettingOut and Securus for county jails. If your loved one is not in a federal BOP institution, CorrLinks does not apply.",
      },
      {
        question: "How do I fund my CorrLinks account for messaging?",
        answer: "Visit corrlinks.com and log into your account. Navigate to the funding section and add money to your prepay balance via credit card or check. Messages are charged against this balance each time you send. The per-message cost is small, but regular messaging can deplete the balance over time.",
      },
      {
        question: "How do I set up phone calls with a federal inmate if CorrLinks doesn't handle phone?",
        answer: "Phone calls from federal facilities are managed through the BOP's Inmate Telephone System, accessed through ConnectNetwork. Create a separate ConnectNetwork account at connectnetwork.com and fund a prepaid calling account linked to your phone number. The inmate can then call you from facility phones.",
      },
      {
        question: "Is there a CorrLinks mobile app?",
        answer: "There is no official CorrLinks mobile app. The platform is browser-based and accessible through any web browser, including mobile browsers on smartphones and tablets. Some third-party apps claim CorrLinks compatibility, but the official platform is web-only at corrlinks.com.",
      },
    ],

    relatedProviderSlugs: ["jpay", "connectnetwork", "textbehind"],
  },

  textbehind: {
    id: "p-textbehind",
    name: "TextBehind",
    slug: "textbehind",
    initial: "T",
    color: "bg-orange-600",
    tagline: "Simple messaging and photo delivery for incarcerated loved ones",
    services: { messaging: true, video: false, photos: true, phone: false, moneyTransfer: false },
    statesCount: 25,
    facilitiesCount: 600,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "TextBehind offers simple electronic messaging and photo delivery at 600+ correctional facilities. No account required for basic features — send messages and photos directly from your phone.",

    website: "https://www.textbehind.com",
    iosUrl: "https://apps.apple.com/us/app/textbehind/id836022386",
    androidUrl: "https://play.google.com/store/apps/details?id=com.textbehind.android",

    overview: [
      "TextBehind is a messaging and photo delivery service designed with simplicity as a core principle. The platform allows families to send electronic messages and photos to incarcerated individuals at more than 600 correctional facilities across 25 states. Unlike full-service providers that require account setup, funding, and navigation of multiple service options, TextBehind is designed to reduce friction — some features are available without creating an account at all, making it an accessible option for families who only need to send an occasional message or photo rather than maintain an ongoing multi-service communication setup.",

      "Messages sent through TextBehind are converted to printed letters and delivered to the inmate through the facility's mail system at some locations, while others support digital delivery depending on the facility's capabilities. Photo delivery follows a similar model — photos are printed on photo paper and sent as physical mail, arriving within the normal mail processing timeline. This print-based delivery model means families do not need to worry about whether a facility has tablet or kiosk access for the inmate, as the final form is physical mail that any facility can process.",

      "TextBehind does not offer phone calls, video visitation, or money transfers. It is a messaging and photo service only. For families who need a complete communication solution covering phone, video, and money, TextBehind works best as a supplement to another provider rather than as a standalone solution. For families who primarily want to send letters and photos and prefer the ease of a smartphone app over navigating traditional mail, TextBehind offers a streamlined alternative that many find more convenient than printing and mailing physical letters.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Send messages from your phone or computer. Messages are converted to printed letters and delivered through the facility mail system.",
        setupUrl: "https://www.textbehind.com",
        notes: "Per-message pricing. Some facilities support digital delivery; others receive printed letters. Delivery times depend on facility mail processing.",
      },
      video: {
        available: false,
        description: "TextBehind does not offer video visitation services.",
        notes: "For video visits, consider GettingOut, ConnectNetwork, or Securus depending on the facility.",
      },
      photos: {
        available: true,
        description: "Send digital photos that are printed and mailed to the inmate as physical photo prints.",
        setupUrl: "https://www.textbehind.com",
        notes: "Per-photo pricing. Photos are printed on quality paper and delivered through facility mail. Must comply with facility content guidelines.",
      },
      phone: {
        available: false,
        description: "TextBehind does not provide phone call services.",
        notes: "For phone services, set up an account with the facility's contracted phone provider (Securus, GTL, or ConnectNetwork).",
      },
      moneyTransfer: {
        available: false,
        description: "TextBehind does not handle commissary deposits or money transfers.",
        notes: "For money transfers, use JPay, ConnectNetwork, or the facility's contracted money transfer provider.",
      },
    },

    coverage: {
      facilityTypes: ["State Prison", "County Jail", "Federal Prison"],
      geographic: "25+ states, covering both state and county facilities",
      notes: "TextBehind's coverage is more limited than full-service providers like JPay or GettingOut. Families should confirm TextBehind serves the specific facility before using the service.",
    },

    supportedFacilities: [
      { name: "Attica Correctional Facility",    slug: "attica-correctional-facility",    stateAbbr: "NY", type: "State Prison" },
      { name: "Folsom State Prison",             slug: "folsom-state-prison",             stateAbbr: "CA", type: "State Prison" },
      { name: "Cook County Jail",                slug: "cook-county-jail",                stateAbbr: "IL", type: "County Jail"  },
    ],

    pricing: [
      { label: "Account Registration", value: "Free",           notes: "No account required for basic features." },
      { label: "Message",              value: "$0.49",           notes: "Per message sent." },
      { label: "Photo",                value: "$0.99–$1.49",    notes: "Per printed photo delivered." },
    ],

    pros: [
      "Simple and accessible, with minimal setup required for basic messaging.",
      "Physical print delivery works at virtually any facility, including those without digital kiosks.",
      "Good for occasional contact without committing to a full-service provider account.",
      "Clean mobile app that is easy for first-time users.",
      "No account required for some services, lowering the barrier to first contact.",
    ],
    cons: [
      "Messaging and photos only. No phone, video, or money transfer.",
      "Print-based delivery is slower than digital delivery at platforms like JPay.",
      "Coverage limited to 25 states, smaller than JPay or GettingOut.",
      "Not a complete communication solution for ongoing, multi-channel contact.",
      "Per-message pricing without a subscription option for frequent users.",
    ],

    faq: [
      {
        question: "Do I need to create an account to use TextBehind?",
        answer: "Not for all features. TextBehind allows some basic messaging without requiring an account, which makes it accessible for one-time or infrequent use. Creating an account unlocks additional features and makes it easier to track message history and manage contacts.",
      },
      {
        question: "How does TextBehind deliver messages to inmates?",
        answer: "Messages sent through TextBehind are converted to printed letters and delivered to the inmate through the facility's regular mail system. At some facilities, digital delivery is supported. Delivery time depends on how quickly the facility processes incoming mail, typically one to three business days after the message is sent.",
      },
      {
        question: "Can I use TextBehind for phone calls or video visits?",
        answer: "No. TextBehind is a messaging and photo service only. For phone calls, set up an account with the facility's phone provider (typically Securus, GTL/ConnectNetwork, or ICSolutions). For video visits, use a platform like GettingOut or ConnectNetwork depending on the facility.",
      },
      {
        question: "How are photos delivered through TextBehind?",
        answer: "Photos uploaded through TextBehind are printed on photo paper and mailed to the inmate as physical prints. This means photos arrive through the facility mail system. Photos must meet facility content guidelines. Inappropriate images will not be processed or delivered.",
      },
      {
        question: "Is TextBehind available at federal prisons?",
        answer: "TextBehind coverage at federal facilities is limited. For electronic messaging at federal Bureau of Prisons institutions, CorrLinks is the required and only approved platform. TextBehind's physical letter and photo service may still be available as a supplement, since physical mail is generally accepted at all facilities.",
      },
    ],

    relatedProviderSlugs: ["jpay", "smartinmate", "pigeonly"],
  },

  smartinmate: {
    id: "p-smartinmate",
    name: "SmartInmate",
    slug: "smartinmate",
    initial: "S",
    color: "bg-cyan-600",
    tagline: "All-in-one messaging, photos, and video platform for families",
    services: { messaging: true, video: true, photos: true, phone: false, moneyTransfer: true },
    statesCount: 20,
    facilitiesCount: 400,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "SmartInmate provides messaging, video visitation, photo sharing, and money transfers at 400+ facilities across 20 states. Known for its intuitive interface and responsive support.",

    website: "https://www.smartinmate.com",
    iosUrl: "https://apps.apple.com/us/app/smart-inmate/id1191826649",
    androidUrl: "https://play.google.com/store/apps/details?id=com.smartinmate",

    overview: [
      "SmartInmate is a full-featured inmate communication platform covering electronic messaging, video visitation, photo sharing, and money transfers at more than 400 correctional facilities across 20 states. The platform positions itself as a family-first service, with a clean interface and straightforward account management that aims to reduce the complexity that families often experience with larger legacy providers. SmartInmate is a newer entrant compared to established platforms like JPay or GTL, which means its coverage footprint is smaller but its user experience tends to be more modern.",

      "The platform's messaging system delivers correspondence electronically to facility kiosks or tablets where available, with print delivery as a fallback at facilities without digital infrastructure. Video visitation is available through the SmartInmate app and web platform, with scheduling handled directly through the account interface. Photo sharing is supported with a per-photo pricing model and standard content review before delivery. Money transfers for commissary purposes are also available, making SmartInmate one of the more complete smaller-scale providers in terms of service breadth. Phone calling is the primary service not currently supported — for phone, families will need to use the facility's contracted phone provider.",

      "SmartInmate is often recommended for families who have found the larger providers' interfaces cumbersome and are looking for a platform that prioritizes ease of use. Customer service responsiveness is frequently cited as a positive in user feedback. Coverage, however, is the main limitation — with 400 facilities across 20 states, SmartInmate serves a fraction of the facilities covered by JPay or GettingOut. Confirming SmartInmate's availability at the specific facility is the necessary first step before committing to the platform.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Electronic messaging with digital or print delivery depending on facility capabilities.",
        setupUrl: "https://www.smartinmate.com",
        notes: "Per-message or subscription pricing available.",
      },
      video: {
        available: true,
        description: "Remote video visits scheduled through the SmartInmate app or website.",
        setupUrl: "https://www.smartinmate.com",
        notes: "Requires a device with camera. Advance scheduling required.",
      },
      photos: {
        available: true,
        description: "Digital photos reviewed for content compliance and delivered to the inmate.",
        setupUrl: "https://www.smartinmate.com",
        notes: "Per-photo pricing. Standard content guidelines apply.",
      },
      phone: {
        available: false,
        description: "SmartInmate does not currently offer phone call services.",
        notes: "For phone calls, use the facility's contracted provider (Securus, GTL, or ICSolutions).",
      },
      moneyTransfer: {
        available: true,
        description: "Deposit funds to inmate commissary accounts via debit or credit card.",
        setupUrl: "https://www.smartinmate.com",
        notes: "Processing fees may apply. Credit within one to two business days.",
      },
    },

    coverage: {
      facilityTypes: ["State Prison", "County Jail"],
      geographic: "20 states, with coverage expanding",
      notes: "SmartInmate has a smaller footprint than JPay or GettingOut. Coverage is expanding but currently limited to select state and county facilities across 20 states. Always confirm availability at the specific facility.",
    },

    supportedFacilities: [
      { name: "Pelican Bay State Prison",         slug: "pelican-bay-state-prison",         stateAbbr: "CA", type: "State Prison" },
      { name: "Harris County Jail",               slug: "harris-county-jail",               stateAbbr: "TX", type: "County Jail"  },
      { name: "Sing Sing Correctional Facility",  slug: "sing-sing-correctional-facility",  stateAbbr: "NY", type: "State Prison" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free" },
      { label: "Messaging",            value: "Varies",      notes: "Per-message or subscription plans available." },
      { label: "Video Visit",          value: "Varies",      notes: "Per-session pricing." },
      { label: "Photo",                value: "Varies",      notes: "Per-photo pricing." },
      { label: "Money Transfer",       value: "Fee applies", notes: "Percentage or flat fee depending on transfer amount." },
    ],

    pros: [
      "Modern, intuitive interface frequently praised in user feedback.",
      "Covers messaging, video, photos, and money transfer in one account.",
      "Responsive customer service compared to larger legacy providers.",
      "Clean mobile app designed for ease of use.",
      "Good option for families who find JPay or GTL interfaces frustrating.",
    ],
    cons: [
      "Smaller coverage, serving 400 facilities across 20 states versus 1,000+ for JPay.",
      "Phone calls not supported. Use a separate provider account for calls.",
      "Less established than JPay or GTL, with fewer years of operational history.",
      "Growing but currently limited coverage means not available at many facilities.",
      "Pricing details require account creation to view in full.",
    ],

    faq: [
      {
        question: "What makes SmartInmate different from JPay or GettingOut?",
        answer: "SmartInmate differentiates itself with a more modern, user-friendly interface and responsive customer service. It is smaller than JPay or GettingOut in terms of facility coverage, but families who prioritize ease of use and quality support often find it preferable. The tradeoff is coverage: SmartInmate serves 400+ facilities versus 1,000+ for JPay.",
      },
      {
        question: "Does SmartInmate support phone calls?",
        answer: "No. SmartInmate does not currently offer phone call services. For phone calls, you will need to use the facility's contracted phone provider, which is typically Securus, GTL/ConnectNetwork, or ICSolutions depending on the institution.",
      },
      {
        question: "How do I confirm SmartInmate is available at my loved one's facility?",
        answer: "Visit smartinmate.com and use the facility search tool to look up the specific correctional facility. If it appears in the SmartInmate network, you can create an account and begin setting up communication. If it does not appear, you will need to use a different provider.",
      },
      {
        question: "Can I use SmartInmate for both messaging and video visits?",
        answer: "Yes, SmartInmate supports both electronic messaging and remote video visitation at participating facilities. Both services are managed through the same account. Messaging and video visit scheduling are available through the SmartInmate app and website.",
      },
      {
        question: "Is SmartInmate available at federal prisons?",
        answer: "SmartInmate does not serve federal Bureau of Prisons facilities. For federal inmates, CorrLinks is the only approved messaging platform. If your loved one is in a federal facility, you will need CorrLinks for messaging and ConnectNetwork for phone and video.",
      },
    ],

    relatedProviderSlugs: ["jpay", "gettingout", "textbehind"],
  },

  pigeonly: {
    id: "p-pigeonly",
    name: "Pigeonly",
    slug: "pigeonly",
    initial: "P",
    color: "bg-rose-600",
    tagline: "Letter writing, photo printing, and low-cost calling for families",
    services: { messaging: true, video: false, photos: true, phone: true, moneyTransfer: false },
    statesCount: 50,
    facilitiesCount: 3000,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "Pigeonly helps families stay connected through letter writing, photo printing, and low-cost phone calls at 3,000+ facilities across all 50 states. Subscription model keeps costs predictable.",

    website: "https://www.pigeonly.com",
    iosUrl: "https://apps.apple.com/us/app/pigeonly-inmate-mail-calling/id1077048131",
    androidUrl: "https://play.google.com/store/apps/details?id=com.pigeonly.android",

    overview: [
      "Pigeonly is a family communication service that takes a distinct approach compared to most inmate communication providers. Rather than operating as a facility-contracted platform for digital messaging or video visits, Pigeonly positions itself as a subscription service focused on three core offerings: physical letter writing, photo printing and mailing, and low-cost phone calling. The company's mission centers on making prison communication more affordable and accessible for families across all income levels, with subscription pricing that replaces per-message or per-photo fees for letter and photo services.",

      "The letter writing service allows families to compose messages through the Pigeonly app or website, which are then printed as physical letters and mailed to the inmate through the postal system. Because the final form is a physical letter, Pigeonly's service works at virtually any correctional facility in the country that accepts standard mail — which includes the vast majority of the 3,000+ facilities the company claims to support. Photo printing works similarly, with family-submitted digital photos printed on quality photo paper and mailed directly to the inmate. Pigeonly's subscription model includes a set number of letters and photos per month, making it especially cost-effective for families who maintain regular written correspondence.",

      "For phone services, Pigeonly operates as a low-cost calling intermediary — not as a direct facility-contracted provider. The platform helps families identify lower-cost phone options and, in some cases, provides calling plans that reduce per-minute rates compared to the facility's default contracted rates. This is a meaningful distinction: Pigeonly's phone service does not replace the facility's phone system but works alongside it. For families who find standard inmate calling rates prohibitive, Pigeonly's phone options can provide meaningful cost savings, though availability varies by state and facility. Pigeonly does not offer video visitation or money transfer services.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Compose messages through the Pigeonly app that are printed as physical letters and mailed to the inmate.",
        setupUrl: "https://www.pigeonly.com",
        notes: "Included in subscription plan. Physical delivery via postal mail — typically 3 to 7 days. Works at virtually all facilities that accept standard mail.",
      },
      video: {
        available: false,
        description: "Pigeonly does not offer video visitation services.",
        notes: "For video visits, use GettingOut, ConnectNetwork, or Securus depending on the facility.",
      },
      photos: {
        available: true,
        description: "Upload photos through the Pigeonly app that are printed and mailed as physical photo prints.",
        setupUrl: "https://www.pigeonly.com",
        notes: "Included in subscription plan. Printed on photo-quality paper. Must comply with facility content guidelines.",
      },
      phone: {
        available: true,
        description: "Low-cost calling plans that help reduce the per-minute cost of inmate phone calls.",
        setupUrl: "https://www.pigeonly.com",
        notes: "Pigeonly's calling service works alongside the facility's phone system. Rates and availability vary by state.",
      },
      moneyTransfer: {
        available: false,
        description: "Pigeonly does not handle commissary deposits or money transfers.",
        notes: "For money transfers, use JPay, ConnectNetwork, or the facility's contracted money provider.",
      },
    },

    coverage: {
      facilityTypes: ["Federal Prison", "State Prison", "County Jail", "Private Facility"],
      geographic: "All 50 states — physical mail service works at any mail-accepting facility",
      notes: "Pigeonly's letter and photo services work at virtually any facility that accepts standard postal mail. Phone service coverage is more limited and varies by state. Families should verify phone plan availability for their specific state.",
    },

    supportedFacilities: [
      { name: "San Quentin State Prison",          slug: "san-quentin-state-prison",          stateAbbr: "CA", type: "State Prison" },
      { name: "Federal Correctional Complex Coleman", slug: "federal-correctional-complex-coleman", stateAbbr: "FL", type: "Federal Prison" },
      { name: "Cook County Jail",                  slug: "cook-county-jail",                  stateAbbr: "IL", type: "County Jail"   },
      { name: "Harris County Jail",                slug: "harris-county-jail",                stateAbbr: "TX", type: "County Jail"   },
    ],

    pricing: [
      { label: "Monthly Subscription", value: "~$9.99/month", notes: "Includes letters and photos per month. Higher tiers available." },
      { label: "Printed Letter",       value: "Included",     notes: "In subscription. Additional letters at per-letter rate." },
      { label: "Photo Print",          value: "Included",     notes: "In subscription. Additional photos at per-photo rate." },
      { label: "Phone Calling",        value: "Varies",       notes: "Prepay plan — rates vary by state. Lower than standard facility rates." },
    ],

    pros: [
      "Physical letter delivery works at virtually all 3,000+ facilities regardless of digital infrastructure.",
      "Subscription model makes costs predictable for families who write regularly.",
      "Phone plans can significantly reduce per-minute calling costs.",
      "Works at federal facilities where digital messaging options are very limited.",
      "Family-friendly company with a community-focused mission.",
    ],
    cons: [
      "Physical mail delivery is slower than digital messaging, typically 3 to 7 days.",
      "No video visitation or money transfer services.",
      "Phone service availability is limited by state and not available everywhere.",
      "Subscription cost applies even in months with reduced communication.",
      "Not a real-time communication option. It should not be used as the sole communication method.",
    ],

    faq: [
      {
        question: "How does Pigeonly's letter service work?",
        answer: "You compose a letter through the Pigeonly app or website and submit it. Pigeonly prints your letter and mails it to the facility via the postal service. The inmate receives it as a standard physical letter through the mail. Delivery typically takes 3 to 7 days depending on the facility's mail processing.",
      },
      {
        question: "Does Pigeonly work at federal prisons?",
        answer: "Yes. Because Pigeonly's letter and photo services are delivered as physical postal mail, they work at any facility that accepts standard mail — including federal Bureau of Prisons institutions. Physical mail is generally accepted at all BOP facilities. For electronic messaging with a federal inmate, you still need CorrLinks separately.",
      },
      {
        question: "How does Pigeonly's phone plan save money?",
        answer: "Pigeonly partners with lower-cost calling networks to offer rates below what the facility's default contracted provider charges. The exact savings depend on your state and facility. Pigeonly does not replace the facility's phone system — the inmate still calls from facility phones, but the call is routed through Pigeonly's network at a reduced rate. Phone plan availability is not universal and must be confirmed for your specific state.",
      },
      {
        question: "Is Pigeonly a subscription service?",
        answer: "Yes. Pigeonly offers monthly subscription plans that include a set number of letters and photos per month. This makes costs predictable for families who maintain regular written correspondence. Additional letters or photos beyond the plan allowance are available at per-unit pricing. Phone services are prepay and billed separately from the subscription.",
      },
      {
        question: "Can I use Pigeonly alongside JPay or GettingOut?",
        answer: "Yes. Many families use Pigeonly for letter writing and photos while using JPay or GettingOut for digital messaging and video visits. Because Pigeonly's letter service is postal-based, it works in parallel with any digital platform without conflict. This combination is common for families who want both the immediacy of digital messaging and the personal feel of a physical letter.",
      },
    ],

    relatedProviderSlugs: ["textbehind", "smartinmate", "jpay"],
  },

  securus: {
    id: "p-securus",
    name: "Securus Technologies",
    slug: "securus",
    initial: "S",
    color: "bg-indigo-700",
    tagline: "Phone, video, and messaging for county jails and state prisons",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 45,
    facilitiesCount: 1200,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "Securus Technologies provides phone, video visitation, messaging, and money transfer services at 1,200+ county jails and state prisons across 45 states. Create a free account at securustech.net.",

    website: "https://www.securustech.net",
    iosUrl: "https://apps.apple.com/us/app/securus-mobile/id1090154482",
    androidUrl: "https://play.google.com/store/apps/details?id=com.securus.mobile",

    overview: [
      "Securus Technologies is one of the two largest correctional communication companies in the United States, serving more than 1,200 facilities across 45 states. The company holds phone, video visitation, messaging, and money transfer contracts at a wide range of county jails and state prisons, making it the provider that millions of families interact with each year. Securus operates under Aventiv Technologies, the same parent company as JPay. However, Securus and JPay serve different facilities under separate contracts — if your loved one is at a Securus-contracted facility, you will need a Securus account, not a JPay account.",

      "Families interact with Securus primarily through the Securus Mobile app or the securustech.net website. A single Securus account can cover phone calls, video visits, messaging, and commissary deposits at the same facility, which reduces the number of accounts families need to manage. Phone calls are inmate-initiated — the incarcerated individual calls your number from facility phones, and charges are drawn from your prepaid Securus account. Video visits are scheduled through your account in advance, require a device with a working camera, and are typically priced per minute or per session. Messaging, where available, is delivered electronically within the facility. Commissary deposits for trust accounts are also processed through Securus at most contracted facilities.",

      "Securus is most commonly found at county jails and state prisons in Texas, Arizona, Colorado, Hawaii, Washington, Illinois, and New York, among others. Unlike JPay, which focuses primarily on state prisons, Securus holds contracts across both county and state levels in many of the same states. If you are unsure which provider serves the facility where your loved one is held, the Securus website includes a facility search tool. Confirming the facility and its contract before creating an account and adding funds is the most important step for families new to the Securus platform.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Electronic messaging delivered digitally to facility kiosks or tablets. Available at participating Securus facilities.",
        setupUrl: "https://www.securustech.net",
        notes: "Per-message pricing applies. Messaging availability varies by facility contract.",
      },
      video: {
        available: true,
        description: "Schedule remote video visits through your Securus account. Available at participating facilities.",
        setupUrl: "https://www.securustech.net",
        notes: "Requires a device with a working camera. Must schedule in advance. Must be on the inmate's approved contact list.",
      },
      photos: {
        available: false,
        description: "Securus does not offer a digital photo delivery service.",
        notes: "For digital photo services, consider JPay or TextBehind if available at the facility.",
      },
      phone: {
        available: true,
        description: "Fund a prepaid account to receive inmate-initiated calls. Set up through the Securus website or mobile app.",
        setupUrl: "https://www.securustech.net",
        notes: "Calls are inmate-initiated. You cannot call the facility to speak with an inmate. Interstate rates are FCC-regulated.",
      },
      moneyTransfer: {
        available: true,
        description: "Send funds to inmate trust accounts via debit card, credit card, or cash at participating retail locations.",
        setupUrl: "https://www.securustech.net",
        notes: "Processing fees apply. Note that phone account funds and commissary funds are separate accounts within Securus.",
      },
    },

    coverage: {
      facilityTypes: ["County Jail", "State Prison", "Detention Center"],
      geographic: "45 states, with strong coverage in Texas, Arizona, Illinois, New York, Colorado, Hawaii, and Washington",
      notes: "Securus holds facility-level contracts. Coverage varies significantly by county and state. Always confirm Securus serves the specific facility before creating an account.",
    },

    supportedFacilities: [
      { name: "Attica Correctional Facility",              slug: "attica-correctional-facility",              stateAbbr: "NY", type: "State Prison" },
      { name: "Cook County Jail",                          slug: "cook-county-jail",                          stateAbbr: "IL", type: "County Jail"  },
      { name: "Harris County Jail",                        slug: "harris-county-jail",                        stateAbbr: "TX", type: "County Jail"  },
      { name: "Sing Sing Correctional Facility",           slug: "sing-sing-correctional-facility",           stateAbbr: "NY", type: "State Prison" },
      { name: "Arizona State Prison Complex Florence",     slug: "arizona-state-prison-complex-florence",     stateAbbr: "AZ", type: "State Prison" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free",           notes: "No cost to create a Securus account." },
      { label: "Phone Calls",          value: "$0.14–$0.21/min", notes: "Interstate rates are FCC-regulated. In-state rates vary by facility contract." },
      { label: "Video Visit",          value: "$0.49/min or flat", notes: "Per-minute or flat session pricing depending on the facility." },
      { label: "Messaging",            value: "Varies",          notes: "Per-message pricing. Rates differ by facility." },
      { label: "Money Transfer Fee",   value: "Varies",          notes: "Fee structure depends on transfer amount and payment method." },
    ],

    pros: [
      "Covers 1,200+ facilities across 45 states, with strong county jail and state prison presence.",
      "Single account covers phone, video, messaging, and money transfer at most facilities.",
      "Well-rated mobile app for iOS and Android simplifies account management.",
      "Established provider with decades of operational experience in corrections.",
      "Facility search tool makes it easy to confirm coverage before signing up.",
    ],
    cons: [
      "No digital photo delivery service. Families needing photos must use a separate provider like JPay or TextBehind.",
      "Phone account funds and commissary funds are held in separate accounts and cannot be combined.",
      "In-state calling rates can be higher than regulated interstate rates.",
      "Customer service responsiveness varies by region and facility type.",
      "Not available at federal Bureau of Prisons facilities. CorrLinks and ConnectNetwork handle federal communication.",
    ],

    faq: [
      {
        question: "How do I set up a Securus account?",
        answer: "Go to securustech.net or download the Securus Mobile app on iOS or Android. Create a free account using your email address. Search for the facility where your loved one is housed to confirm Securus serves that location. Once confirmed, add the inmate using their ID number and fund your account to start receiving calls or scheduling video visits.",
      },
      {
        question: "Can I use Securus for both phone calls and video visits?",
        answer: "Yes. A single Securus account covers phone calls, video visits, messaging, and money transfers at most Securus-contracted facilities. You do not need separate accounts for each service. However, your phone account balance and commissary deposit balance are tracked separately within your Securus account.",
      },
      {
        question: "Does Securus work at federal prisons?",
        answer: "No. Federal Bureau of Prisons facilities do not use Securus. Federal inmates use CorrLinks for electronic messaging and ConnectNetwork for phone calls and video visits. Securus is for county jails and state prisons only.",
      },
      {
        question: "How do I schedule a video visit through Securus?",
        answer: "Log into your Securus account and navigate to the video visitation section. Search for the facility, select an available time slot, and complete the booking. You will need a device with a working camera and a stable internet connection. Scheduling at least 24 to 48 hours in advance is recommended, as slots fill quickly around weekends.",
      },
      {
        question: "What is the difference between Securus and JPay?",
        answer: "Both Securus and JPay are large correctional communication providers under the Aventiv Technologies umbrella, but they operate under separate facility contracts. Securus is strongest at county jails and select state prisons, particularly in Texas, Arizona, Illinois, and New York. JPay is strongest at state prisons across 35 states. Which one you need depends entirely on which company holds the contract at your loved one's specific facility.",
      },
    ],

    relatedProviderSlugs: ["jpay", "gtl", "connectnetwork"],
  },

  gtl: {
    id: "p-gtl",
    name: "GTL (ViaPath Technologies)",
    slug: "gtl",
    initial: "G",
    color: "bg-amber-600",
    tagline: "State prison phone and video visits across 30+ states",
    services: { messaging: false, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 30,
    facilitiesCount: 800,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "GTL (now ViaPath Technologies) provides phone calls, video visitation, and money transfers at 800+ state prisons and county jails. Families access GTL services through the GTL Connect app or telmate.com.",

    website: "https://www.viapath.com",
    iosUrl: "https://apps.apple.com/us/app/gtl-connect/id943869522",
    androidUrl: "https://play.google.com/store/apps/details?id=com.gtl.connect",

    overview: [
      "GTL, now operating under the ViaPath Technologies brand, is one of the most established correctional communication companies in the United States. At the state prison level, GTL holds phone and video contracts across more than 30 states, making it the provider families encounter for phone calls and video visits when a loved one is housed in a state correctional system. GTL is also the parent company of GettingOut — the county jail video and messaging platform — and ConnectNetwork, the consumer portal for federal and county communication. At state prisons, however, families interact with GTL directly through the GTL Connect app or telmate.com, which is a different experience from GettingOut or ConnectNetwork.",

      "At most state facilities served by GTL, the setup works as follows: JPay manages electronic messaging, photo sharing, and trust account deposits, while GTL handles phone calls and video visitation under a separate contract. This means families often need both a JPay account for messaging and a GTL account for phone and video. These accounts are independent — JPay credits cannot be used to fund GTL calls, and GTL account balances do not carry over to JPay. Understanding that these two accounts are both necessary and separate is one of the most common points of confusion for families at state facilities.",

      "GTL's phone system works through an AdvancePay account — families fund the account with a phone number, and the incarcerated individual calls that number directly from facility phones. Video visits are scheduled through the same GTL account. Money transfers for commissary purposes are handled through Access Corrections, which is a GTL-affiliated deposit platform. GTL serves state systems across Georgia, Indiana, Virginia, Louisiana, Alaska, Arkansas, Delaware, Idaho, Iowa, Maine, Maryland, California (many CDCR facilities), and others. Because GTL holds statewide contracts in many of these systems, a single GTL account works across all facilities within the same state system — a useful feature when inmates are transferred between facilities.",
    ],

    serviceDetails: {
      messaging: {
        available: false,
        description: "GTL does not handle messaging at state prisons. Messaging at most GTL state facilities is managed by JPay.",
        notes: "If your loved one is in a state facility using JPay for messaging and GTL for phone/video, create a JPay account separately for messaging.",
      },
      video: {
        available: true,
        description: "Schedule remote video visits through your GTL account or the GTL Connect app. Available at participating state and county facilities.",
        setupUrl: "https://www.viapath.com",
        notes: "Requires a device with a working camera. Must schedule in advance. Being on the inmate's approved contact list is required.",
      },
      photos: {
        available: false,
        description: "GTL does not offer digital photo delivery at state prison facilities.",
        notes: "For photo services at GTL state facilities, use JPay if available, or TextBehind for print-based photo delivery.",
      },
      phone: {
        available: true,
        description: "Fund an AdvancePay account linked to your phone number to receive inmate-initiated calls. Manage your account through GTL Connect or telmate.com.",
        setupUrl: "https://www.viapath.com",
        notes: "All calls are inmate-initiated. You cannot call the facility to speak with an inmate. Rates vary by state contract.",
      },
      moneyTransfer: {
        available: true,
        description: "Commissary deposits at GTL state facilities are processed through Access Corrections, a GTL-affiliated platform at accesscorrections.com.",
        setupUrl: "https://www.accesscorrections.com",
        notes: "Access Corrections processes commissary deposits. Phone account funding (for calls) is handled separately within GTL.",
      },
    },

    coverage: {
      facilityTypes: ["State Prison", "County Jail"],
      geographic: "30+ states, primarily at state prison systems under statewide DOC contracts",
      notes: "GTL holds statewide contracts in many systems — one account typically works at all facilities within the same state DOC. Coverage differs from GettingOut (county jails) and ConnectNetwork (federal), though all are part of the ViaPath Technologies family.",
    },

    supportedFacilities: [
      { name: "San Quentin State Prison",         slug: "san-quentin-state-prison",         stateAbbr: "CA", type: "State Prison" },
      { name: "Georgia State Prison",             slug: "georgia-state-prison",             stateAbbr: "GA", type: "State Prison" },
      { name: "Fulton County Jail",               slug: "fulton-county-jail",               stateAbbr: "GA", type: "County Jail"  },
      { name: "Pendleton Correctional Facility",  slug: "pendleton-correctional-facility",  stateAbbr: "IN", type: "State Prison" },
      { name: "Iowa State Penitentiary",          slug: "iowa-state-penitentiary",          stateAbbr: "IA", type: "State Prison" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free",             notes: "No cost to create a GTL account." },
      { label: "Phone Calls",          value: "$0.14–$0.25/min",  notes: "Interstate rates are FCC-regulated. In-state rates vary by state contract." },
      { label: "Video Visit",          value: "Varies",           notes: "Per-minute or session pricing depending on the facility." },
      { label: "Money Transfer",       value: "Fee applies",      notes: "Commissary deposits via Access Corrections. Processing fees vary by amount." },
    ],

    pros: [
      "Statewide contracts in many systems mean one account works across facility transfers within the same state.",
      "GTL Connect app consolidates phone account management and video scheduling.",
      "Widely used across 30+ state prison systems, making it one of the most common state-level phone providers.",
      "Part of the ViaPath/Telmate ecosystem — same login infrastructure as GettingOut at some facilities.",
      "Regulated interstate calling rates provide cost predictability for long-distance families.",
    ],
    cons: [
      "Messaging and photos not handled by GTL at state prisons. Requires a separate JPay account for those services.",
      "Commissary deposits go through Access Corrections, not GTL directly — a separate step many families find confusing.",
      "In-state calling rates can be significantly higher than the regulated interstate rate.",
      "GTL, GettingOut, ConnectNetwork, and ViaPath are all part of the same company but operate through different portals, which causes confusion.",
      "Not available at federal Bureau of Prisons facilities.",
    ],

    faq: [
      {
        question: "What is the relationship between GTL, GettingOut, ConnectNetwork, and ViaPath?",
        answer: "They are all part of the same company. GTL (Global Tel Link) is the original company, now rebranded as ViaPath Technologies. GettingOut is GTL's county jail video and messaging platform, operated through its Telmate subsidiary. ConnectNetwork is the consumer portal for GTL phone accounts at federal and county facilities. At state prisons, families interact directly with GTL through the GTL Connect app or telmate.com. Same parent company, different products for different facility types.",
      },
      {
        question: "Do I need both a JPay account and a GTL account for a state prison?",
        answer: "At most state prisons where both are available, yes. JPay typically handles messaging, photo sharing, and trust account deposits. GTL handles phone calls and video visits under a separate facility contract. These are independent systems — you need both accounts and must fund them separately. Check the specific facility to confirm which services each provider handles there.",
      },
      {
        question: "How do I set up a GTL phone account?",
        answer: "Go to telmate.com or download the GTL Connect app. Create a free account and set up an AdvancePay account linked to your phone number. Add funds via debit card, credit card, or Western Union. Once your account is active and funded, the incarcerated individual can call your number directly from facility phones. Calls are inmate-initiated — you cannot call the facility to reach an inmate.",
      },
      {
        question: "Will my GTL account work if my loved one is transferred to a different facility?",
        answer: "In most cases, yes — if the transfer is within the same state DOC system under a GTL statewide contract. GTL holds system-wide contracts in many states, so accounts carry over automatically between facilities in the same system. You may need to update the scheduled facility for video visits after a transfer. If the transfer is to a different state or a county jail, you will likely need a different provider account.",
      },
      {
        question: "How do I send commissary money to an inmate at a GTL facility?",
        answer: "GTL commissary deposits are processed through Access Corrections, not GTL directly. Visit accesscorrections.com, search for the facility, and follow the deposit process. Funds can be added via debit card, credit card, or cash at participating retail locations. Note that commissary deposits and your GTL phone account are separate — you need to fund both independently.",
      },
    ],

    relatedProviderSlugs: ["jpay", "gettingout", "access-corrections"],
  },

  icsolutions: {
    id: "p-icsolutions",
    name: "ICSolutions",
    slug: "icsolutions",
    initial: "I",
    color: "bg-sky-700",
    tagline: "Phone and video communication for county jails and detention centers",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 15,
    facilitiesCount: 300,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "ICSolutions provides phone calls, video visitation, messaging, and money transfers at 300+ county jails and detention facilities across 15 states, with strong coverage in Texas, New Mexico, and Tennessee.",

    website: "https://www.icsolutions.com",
    iosUrl: "https://apps.apple.com/us/app/icsolutions/id899399526",
    androidUrl: "https://play.google.com/store/apps/details?id=com.icsolutions.app",

    overview: [
      "ICSolutions is a correctional communication provider specializing in county jails, municipal detention centers, and regional correctional facilities. The company competes with Securus and GTL in regional markets and holds phone, video, messaging, and money transfer contracts at more than 300 facilities across 15 states. ICSolutions is particularly active in Texas, New Mexico, Tennessee, Nevada, and parts of the South and Southwest, where it serves as the primary communication provider at smaller county systems that the largest national providers do not always prioritize.",

      "For families, ICSolutions works similarly to other facility-contracted providers. You create an account at icsolutions.com or through the ICSolutions mobile app, confirm that ICSolutions serves the specific facility, and set up a prepaid account. Phone calls are inmate-initiated, meaning the incarcerated individual calls your number from facility phones using the ICSolutions phone system. Video visits can be scheduled in advance through the same account. Messaging, where available under the facility's contract, is delivered electronically to facility kiosks or tablets. Money transfers for commissary accounts are also processed through the ICSolutions platform.",

      "ICSolutions positions itself as a customer-focused alternative to the largest providers. The platform has a simpler account structure than some of its larger competitors, and customer service is generally considered more accessible. The tradeoff is coverage: with 300 facilities across 15 states, ICSolutions serves a fraction of the total facilities reached by Securus or GTL. If the facility where your loved one is housed does not appear in the ICSolutions facility search, a different provider holds that contract. ICSolutions is worth checking first for families in Texas, New Mexico, and Tennessee, as its presence in those states is particularly concentrated.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Electronic messaging at participating facilities. Delivered digitally to facility kiosks or tablets where supported.",
        setupUrl: "https://www.icsolutions.com",
        notes: "Messaging availability varies by facility contract. Not all ICSolutions facilities offer the messaging service.",
      },
      video: {
        available: true,
        description: "Remote video visits scheduled through your ICSolutions account or the mobile app.",
        setupUrl: "https://www.icsolutions.com",
        notes: "Requires a device with a camera and a stable internet connection. Must schedule in advance. Must be on the inmate's approved contact list.",
      },
      photos: {
        available: false,
        description: "ICSolutions does not offer a digital photo delivery service.",
        notes: "For photo services, check whether JPay or TextBehind is available as a secondary option at the facility.",
      },
      phone: {
        available: true,
        description: "Fund a prepaid account to receive inmate-initiated phone calls at ICSolutions-contracted facilities.",
        setupUrl: "https://www.icsolutions.com",
        notes: "All calls are inmate-initiated. Interstate rates are FCC-regulated. In-state rates vary.",
      },
      moneyTransfer: {
        available: true,
        description: "Deposit funds to inmate commissary accounts via debit card, credit card, or cash at participating locations.",
        setupUrl: "https://www.icsolutions.com",
        notes: "Processing fees apply. Funds typically credited within one to two business days.",
      },
    },

    coverage: {
      facilityTypes: ["County Jail", "Detention Center", "Municipal Jail"],
      geographic: "15 states, with strong presence in Texas, New Mexico, Tennessee, and Nevada",
      notes: "ICSolutions is a regional provider. Coverage is concentrated in the South and Southwest. Always confirm ICSolutions serves the specific facility before creating an account.",
    },

    supportedFacilities: [
      { name: "Harris County Jail",   slug: "harris-county-jail",   stateAbbr: "TX", type: "County Jail" },
      { name: "Rikers Island",        slug: "rikers-island",        stateAbbr: "NY", type: "County Jail" },
      { name: "Cook County Jail",     slug: "cook-county-jail",     stateAbbr: "IL", type: "County Jail" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free",           notes: "No cost to create an ICSolutions account." },
      { label: "Phone Calls",          value: "$0.14–$0.25/min", notes: "Interstate rates regulated by FCC. In-state rates vary." },
      { label: "Video Visit",          value: "Varies",          notes: "Per-minute or session pricing." },
      { label: "Money Transfer Fee",   value: "Varies",          notes: "Fee depends on transfer amount and method." },
    ],

    pros: [
      "Covers phone, video, messaging, and money transfer in one account at most facilities.",
      "Strong regional presence in Texas, New Mexico, and Tennessee where it is often the primary provider.",
      "Customer service is generally considered more responsive than the largest national providers.",
      "Mobile app makes account management accessible from a smartphone.",
      "Straightforward account structure with clear prepaid calling and deposit options.",
    ],
    cons: [
      "Smaller network — 300 facilities across 15 states versus 1,200+ for Securus.",
      "No digital photo delivery service.",
      "Coverage is regional, so it is not the correct provider for families in states where ICSolutions does not hold contracts.",
      "Less name recognition means families often overlook it when searching for their facility's provider.",
      "Not available at federal Bureau of Prisons facilities.",
    ],

    faq: [
      {
        question: "How do I know if ICSolutions serves my loved one's facility?",
        answer: "Visit icsolutions.com and use the facility search tool. Enter the facility name, city, or state to check. If the facility appears, ICSolutions holds that contract and you can create an account. If it does not appear, a different provider — Securus, GTL, or ConnectNetwork — likely holds the contract at that facility.",
      },
      {
        question: "How do I set up phone calls through ICSolutions?",
        answer: "Create a free account at icsolutions.com or through the ICSolutions mobile app. Set up a prepaid account linked to your phone number and add funds via debit card, credit card, or cash at a participating retail location. Once funded, the incarcerated individual can call you directly from facility phones. You cannot initiate calls — all calls are inmate-initiated.",
      },
      {
        question: "Does ICSolutions offer video visits?",
        answer: "Yes, remote video visits are available at participating ICSolutions facilities. Log into your account, navigate to the video visitation section, and select an available time slot for the specific facility. You will need a device with a working camera and a stable internet connection. Not every ICSolutions-contracted facility offers video visits — check the facility's available services within your account.",
      },
      {
        question: "Can I send money to an inmate through ICSolutions?",
        answer: "Yes. ICSolutions processes commissary deposits through its money transfer platform. Log into your account, search for the facility, and deposit funds via debit card, credit card, or cash at a participating location. Note that your calling account balance (for receiving calls) and the inmate's commissary balance are handled separately.",
      },
      {
        question: "Does ICSolutions work at federal prisons or state prisons?",
        answer: "ICSolutions primarily serves county jails and detention centers. It holds some state-level contracts in certain states, but it is not the dominant state prison provider in most markets. Federal Bureau of Prisons facilities use CorrLinks and ConnectNetwork, not ICSolutions.",
      },
    ],

    relatedProviderSlugs: ["securus", "gtl", "connectnetwork"],
  },

  "access-corrections": {
    id: "p-access-corrections",
    name: "Access Corrections",
    slug: "access-corrections",
    initial: "A",
    color: "bg-green-700",
    tagline: "Commissary deposits and money transfers for incarcerated individuals",
    services: { messaging: false, video: false, photos: false, phone: false, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1500,
    appAvailable: false,
    hasDetailPage: true,

    description:
      "Access Corrections is the primary commissary deposit platform for GTL-contracted facilities, covering 1,500+ jails and prisons nationwide. Send money online, by phone, or in person at participating locations.",

    website: "https://www.accesscorrections.com",

    overview: [
      "Access Corrections is a commissary deposit and money transfer platform operated in partnership with GTL (ViaPath Technologies). It serves as the primary channel through which families send funds to inmate trust accounts at facilities where GTL holds the communication contract. With coverage at more than 1,500 facilities across all 50 states, Access Corrections is one of the most widely used inmate money transfer platforms in the country — many families encounter it as part of the standard GTL facility setup without realizing it is a separate service from the phone and video platform.",

      "Using Access Corrections is straightforward. Families visit accesscorrections.com, search for the facility, enter the inmate's ID or booking number, and submit a payment via debit card, credit card, or cash at a participating retail location such as a MoneyGram agent or Walmart. Funds are typically credited to the inmate's trust account within one to two business days, though processing times vary by facility. Access Corrections does not charge the inmate — all fees are paid by the sender and are assessed at the time of the transaction.",

      "It is important to understand what Access Corrections does and does not cover. It is a money transfer platform only — it does not handle phone calls, video visits, messaging, or photo delivery. For phone calls at GTL facilities, families use the GTL Connect app or telmate.com to fund their calling account. For messaging at most state prisons, JPay is the correct platform. Access Corrections handles only the commissary deposit function. Because multiple accounts are often needed at a single facility — one for calling, one for commissary, and potentially one for messaging — keeping track of which platform does what is the most common challenge for families at GTL-contracted facilities.",
    ],

    serviceDetails: {
      messaging: {
        available: false,
        description: "Access Corrections does not handle messaging.",
        notes: "For messaging at most GTL state facilities, use JPay. For county jails, use GettingOut or the facility's contracted messaging provider.",
      },
      video: {
        available: false,
        description: "Access Corrections does not handle video visitation.",
        notes: "For video visits at GTL facilities, use the GTL Connect app or telmate.com.",
      },
      photos: {
        available: false,
        description: "Access Corrections does not handle photo delivery.",
        notes: "For digital photo services, use JPay or TextBehind if available at the facility.",
      },
      phone: {
        available: false,
        description: "Access Corrections does not handle phone call accounts.",
        notes: "For phone calls at GTL facilities, create a separate GTL calling account through the GTL Connect app or telmate.com.",
      },
      moneyTransfer: {
        available: true,
        description: "Send funds to inmate commissary trust accounts at 1,500+ GTL-contracted facilities nationwide.",
        setupUrl: "https://www.accesscorrections.com",
        notes: "Debit card, credit card, and cash at MoneyGram/retail locations accepted. Processing fees apply. Funds typically credited within one to two business days.",
      },
    },

    coverage: {
      facilityTypes: ["County Jail", "State Prison", "Federal Prison", "Detention Center"],
      geographic: "All 50 states, primarily at GTL-contracted facilities",
      notes: "Access Corrections works alongside GTL's phone and video services. If a facility uses GTL for phone and video, Access Corrections is typically the commissary deposit option. For non-GTL facilities, other platforms such as JPay, Securus, or TouchPay handle deposits.",
    },

    supportedFacilities: [
      { name: "Rikers Island",                        slug: "rikers-island",                        stateAbbr: "NY", type: "County Jail"  },
      { name: "Fulton County Jail",                   slug: "fulton-county-jail",                   stateAbbr: "GA", type: "County Jail"  },
      { name: "Marion County Jail",                   slug: "marion-county-jail",                   stateAbbr: "IN", type: "County Jail"  },
      { name: "Miami-Dade Corrections Facility",      slug: "miami-dade-corrections-facility",      stateAbbr: "FL", type: "County Jail"  },
      { name: "Georgia State Prison",                 slug: "georgia-state-prison",                 stateAbbr: "GA", type: "State Prison" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free",         notes: "No cost to use accesscorrections.com." },
      { label: "Online Transfer",       value: "Fee applies", notes: "Percentage or flat fee depending on amount and payment method." },
      { label: "Phone Transfer",        value: "Fee applies", notes: "Slightly higher than online rates. Convenience fee for phone-based deposits." },
      { label: "In-Person (Cash)",      value: "Fee applies", notes: "Cash deposits at MoneyGram or Walmart locations. Fee varies by amount." },
    ],

    pros: [
      "Covers 1,500+ facilities in all 50 states, making it one of the most widely accessible deposit platforms.",
      "Multiple payment options including online, phone, and in-person cash at retail locations.",
      "Straightforward process with no account required for some deposit types.",
      "Widely recognized at GTL-contracted facilities, so facility staff can confirm it is the correct platform.",
      "Funds typically credited within one to two business days.",
    ],
    cons: [
      "Money transfer only — no phone, video, messaging, or photo services.",
      "Families at GTL facilities still need a separate GTL calling account, which requires a second account setup.",
      "Processing fees add cost over time, especially for frequent smaller deposits.",
      "Not universal — families at non-GTL facilities must use a different deposit platform.",
      "No mobile app. Web-based only, which is less convenient for mobile users.",
    ],

    faq: [
      {
        question: "How do I send money through Access Corrections?",
        answer: "Visit accesscorrections.com and search for the facility by name, city, or state. Enter the inmate's ID or booking number. Choose a payment method — debit card, credit card, or cash at a participating retail location — and complete the transaction. Funds are typically credited to the inmate's trust account within one to two business days. A processing fee is charged at the time of the transaction.",
      },
      {
        question: "Is Access Corrections the same as GTL?",
        answer: "Access Corrections is operated in partnership with GTL (ViaPath Technologies) and is the commissary deposit platform for GTL-contracted facilities. They are related services under the same corporate umbrella, but they are separate platforms. GTL handles phone calls and video visits. Access Corrections handles commissary deposits. You may need accounts on both platforms at a GTL-served facility.",
      },
      {
        question: "Do I need an Access Corrections account to send money?",
        answer: "Not always. Some deposits can be completed as a guest transaction without creating an account. Creating an account allows you to save the inmate's information and view your deposit history, which makes repeat deposits faster. For one-time or infrequent deposits, the guest option is sufficient.",
      },
      {
        question: "How long does it take for an Access Corrections deposit to appear?",
        answer: "Funds are typically credited to the inmate's trust account within one to two business days. Processing times depend on the facility's schedule for updating inmate accounts. Weekend and holiday deposits may take slightly longer. If funds have not appeared after three business days, contact Access Corrections customer support with your transaction confirmation number.",
      },
      {
        question: "Can I use Access Corrections to fund phone calls?",
        answer: "No. Access Corrections handles commissary trust account deposits only. To fund phone calls at a GTL facility, you need to create a separate GTL calling account through telmate.com or the GTL Connect app and add funds there. Phone account funds and commissary trust account funds are separate. You will need both accounts if your loved one needs both phone access and commissary spending.",
      },
    ],

    relatedProviderSlugs: ["gtl", "jpay", "touchpay"],
  },

  homewav: {
    id: "p-homewav",
    name: "HomeWAV",
    slug: "homewav",
    initial: "H",
    color: "bg-purple-600",
    tagline: "Software-only video visitation and messaging for county jails",
    services: { messaging: true, video: true, photos: true, phone: false, moneyTransfer: false },
    statesCount: 30,
    facilitiesCount: 350,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "HomeWAV provides video visitation, messaging, and photo sharing at 350+ county jails across 30 states. A software-only platform that requires no facility hardware installation.",

    website: "https://www.homewav.com",
    iosUrl: "https://apps.apple.com/us/app/homewav/id980905046",
    androidUrl: "https://play.google.com/store/apps/details?id=com.homewav.mobile",

    overview: [
      "HomeWAV is a video visitation and messaging platform that takes a different approach from most facility communication providers. Rather than requiring facilities to install proprietary kiosks or hardware, HomeWAV is a software-only system — the facility uses standard tablets or computers already in use, and families connect through the HomeWAV app on their own devices. This lower barrier to adoption has allowed HomeWAV to sign contracts with smaller county jails and regional detention centers that might not have the budget or infrastructure for traditional video visitation hardware installations.",

      "For families, HomeWAV offers remote video visits, electronic messaging, and photo sharing through a single account. Video visits are conducted through the HomeWAV app on iOS or Android, or through a web browser, and are scheduled in advance through the platform. Messaging is delivered digitally to the inmate's device at the facility. Photo sharing allows families to send images that are reviewed for content compliance before being delivered. The platform does not handle phone calls or money transfers — for those services, families need to use the facility's contracted phone provider and separate commissary deposit platform.",

      "HomeWAV is particularly common in smaller county systems across the South, Midwest, and Mountain West. It serves approximately 350 facilities across 30 states. Because it is a newer company compared to Securus or GTL, and because it tends to serve smaller markets, HomeWAV is often the correct platform at facilities that families may not immediately recognize as HomeWAV-contracted. If a family is told their loved one's facility offers remote video visits but GTL, Securus, or GettingOut do not show that facility in their search results, HomeWAV is a strong next candidate to check.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Send electronic messages to incarcerated individuals at HomeWAV-contracted facilities. Messages are reviewed before delivery.",
        setupUrl: "https://www.homewav.com",
        notes: "Per-message pricing applies. Messaging delivery is digital at HomeWAV-equipped facilities.",
      },
      video: {
        available: true,
        description: "Schedule and conduct remote video visits through the HomeWAV app or web browser. No special facility hardware required.",
        setupUrl: "https://www.homewav.com",
        notes: "Per-minute or session pricing. Requires a device with a working camera. Must be on the inmate's approved contact list.",
      },
      photos: {
        available: true,
        description: "Send digital photos through HomeWAV. Photos are reviewed for content compliance before delivery.",
        setupUrl: "https://www.homewav.com",
        notes: "Per-photo pricing. Must comply with facility content guidelines.",
      },
      phone: {
        available: false,
        description: "HomeWAV does not handle phone call services.",
        notes: "For phone calls, use the facility's contracted phone provider, typically Securus, ICSolutions, or a regional provider.",
      },
      moneyTransfer: {
        available: false,
        description: "HomeWAV does not process commissary deposits or money transfers.",
        notes: "For commissary deposits, use Access Corrections, TouchPay, or the facility's designated deposit platform.",
      },
    },

    coverage: {
      facilityTypes: ["County Jail", "Detention Center"],
      geographic: "30 states, primarily smaller county jails in the South, Midwest, and Mountain West",
      notes: "HomeWAV specializes in county jails that have not adopted larger provider platforms. If your loved one is in a smaller county jail and other major providers do not show it in their searches, HomeWAV is worth checking.",
    },

    supportedFacilities: [
      { name: "Harris County Jail",              slug: "harris-county-jail",              stateAbbr: "TX", type: "County Jail" },
      { name: "Cook County Jail",                slug: "cook-county-jail",                stateAbbr: "IL", type: "County Jail" },
      { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", stateAbbr: "FL", type: "County Jail" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free" },
      { label: "Video Visit",          value: "$0.50/min",  notes: "Approximate per-minute rate. Varies by facility." },
      { label: "Messaging",            value: "Varies",     notes: "Per-message pricing." },
      { label: "Photo",                value: "Varies",     notes: "Per-photo pricing." },
    ],

    pros: [
      "Software-only platform means more county jails can adopt it without expensive hardware upgrades.",
      "Single account covers video, messaging, and photos.",
      "Good option for smaller county jails not served by the major national providers.",
      "Well-rated mobile app for both iOS and Android.",
      "Growing network with expanding facility coverage across 30 states.",
    ],
    cons: [
      "No phone calls or money transfers. Families need additional platforms for those services.",
      "Smaller facility network than Securus or GettingOut.",
      "Less name recognition makes it harder for families to discover when searching for their facility's provider.",
      "Coverage is concentrated in smaller markets, so not useful for families at major urban facilities.",
      "Not available at state prisons or federal facilities.",
    ],

    faq: [
      {
        question: "How is HomeWAV different from GettingOut?",
        answer: "Both serve county jails with video visitation and messaging, but they serve different facility networks. GettingOut (by Telmate/GTL) requires facilities to install proprietary hardware and is more common at larger county systems. HomeWAV is software-only, making it accessible to smaller jails without hardware budgets. If your loved one's county jail is not on GettingOut, HomeWAV is a strong next option to check.",
      },
      {
        question: "How do I schedule a video visit through HomeWAV?",
        answer: "Download the HomeWAV app on iOS or Android, or visit homewav.com. Create a free account and search for the facility. Select an available time slot and complete the booking. You will need a device with a working camera. You must be on the inmate's approved contact list before scheduling a visit.",
      },
      {
        question: "Does HomeWAV offer phone calls?",
        answer: "No. HomeWAV handles video visits, messaging, and photos only. For phone calls, you need to use the facility's contracted phone provider, which is typically Securus, ICSolutions, or a regional carrier depending on the jail.",
      },
      {
        question: "Can I send money through HomeWAV?",
        answer: "No. HomeWAV does not process commissary deposits or money transfers. For sending money to an inmate at a HomeWAV-served facility, use the facility's designated deposit platform — typically Access Corrections, TouchPay, or a provider specified on the facility's website.",
      },
      {
        question: "How do I know if HomeWAV is available at my loved one's facility?",
        answer: "Visit homewav.com and use the facility search. If the facility appears, HomeWAV is the provider for video visits and messaging at that location. If it does not appear, the facility uses a different provider. GettingOut, Securus, and ICSolutions are common alternatives at county jails.",
      },
    ],

    relatedProviderSlugs: ["gettingout", "securus", "icsolutions"],
  },

  ncic: {
    id: "p-ncic",
    name: "NCIC Inmate Communications",
    slug: "ncic",
    initial: "N",
    color: "bg-slate-600",
    tagline: "Phone, tablet, and video services for regional correctional facilities",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 20,
    facilitiesCount: 250,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "NCIC Inmate Communications provides phone calls, video visitation, messaging, and money transfers at 250+ regional county jails and correctional facilities across 20 states.",

    website: "https://www.ncic.com",
    iosUrl: "https://apps.apple.com/us/app/ncic-inmate/id1448782234",
    androidUrl: "https://play.google.com/store/apps/details?id=com.ncic.inmateapp",

    overview: [
      "NCIC Inmate Communications is a regional correctional communication provider serving county jails, detention centers, and smaller correctional facilities across 20 states. The company offers phone calls, video visitation, electronic messaging, and commissary deposits as an integrated service. NCIC is a family-owned company with a long history in the corrections industry, and it positions itself as a more customer-focused alternative to the large national providers. While its network is smaller than Securus or GTL, NCIC holds exclusive contracts at the facilities it serves, meaning it is the only provider available at those locations.",

      "NCIC's services are accessible through the NCIC website and a companion mobile app. Families create an account, confirm the facility is served by NCIC, and fund phone accounts, schedule video visits, or send messages from a single interface. Phone calls follow the standard inmate-calling model — the incarcerated individual initiates calls to approved numbers, and families fund a prepaid account in advance. Video visits are conducted remotely through the app or browser. NCIC also provides tablet services at many of its contracted facilities, with inmates using NCIC-provided tablets for messaging and access to educational content.",

      "NCIC's strongest markets include parts of the South, Southwest, and Great Plains. Families who find their loved one's county jail is not covered by Securus, GTL, GettingOut, or ICSolutions should check NCIC as the next possibility. The provider's focus on smaller regional markets means it often holds contracts at jails that the largest companies overlook. NCIC's customer service is frequently cited as a strength — the company offers extended support hours and is generally easier to reach than the largest national providers for account issues or dispute resolution.",
    ],

    serviceDetails: {
      messaging: {
        available: true,
        description: "Electronic messaging at NCIC facilities via tablet or kiosk. Messages reviewed before delivery.",
        setupUrl: "https://www.ncic.com",
        notes: "Per-message pricing or tablet-access plans at participating facilities.",
      },
      video: {
        available: true,
        description: "Remote video visits scheduled through your NCIC account or the mobile app.",
        setupUrl: "https://www.ncic.com",
        notes: "Per-session or per-minute pricing. Requires a device with a camera. Advance scheduling required.",
      },
      photos: {
        available: false,
        description: "NCIC does not offer digital photo delivery services.",
        notes: "For photo services, use TextBehind or Pigeonly if available at the facility.",
      },
      phone: {
        available: true,
        description: "Fund a prepaid account to receive inmate-initiated calls at NCIC-contracted facilities.",
        setupUrl: "https://www.ncic.com",
        notes: "Calls are inmate-initiated. Interstate rates are FCC-regulated.",
      },
      moneyTransfer: {
        available: true,
        description: "Deposit funds to inmate commissary accounts through NCIC's integrated money transfer service.",
        setupUrl: "https://www.ncic.com",
        notes: "Processing fees apply. Debit card, credit card, and money order options available.",
      },
    },

    coverage: {
      facilityTypes: ["County Jail", "Detention Center"],
      geographic: "20 states, concentrated in the South, Southwest, and Great Plains regions",
      notes: "NCIC serves smaller regional markets often not prioritized by the largest national providers. It is the exclusive provider at its contracted facilities.",
    },

    supportedFacilities: [
      { name: "Harris County Jail",              slug: "harris-county-jail",              stateAbbr: "TX", type: "County Jail" },
      { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", stateAbbr: "FL", type: "County Jail" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free" },
      { label: "Phone Calls",          value: "$0.14–$0.25/min", notes: "Interstate rates are FCC-regulated. In-state rates vary." },
      { label: "Video Visit",          value: "Varies",          notes: "Per-session or per-minute pricing." },
      { label: "Messaging",            value: "Varies",          notes: "Per-message pricing or tablet plan." },
      { label: "Money Transfer",       value: "Fee applies",     notes: "Percentage or flat fee." },
    ],

    pros: [
      "Single account covers phone, video, messaging, and money transfer at NCIC facilities.",
      "Customer service is considered more accessible than the largest national providers.",
      "Tablet-based services at many facilities provide a better inmate experience than kiosk-only setups.",
      "Family-owned company with a long track record in the industry.",
      "Regional focus means dedicated attention to the markets it serves.",
    ],
    cons: [
      "Smaller network — 250 facilities across 20 states. Not a solution for most facilities nationwide.",
      "No photo delivery service.",
      "Limited name recognition makes it easy to overlook when searching for a facility's provider.",
      "Coverage is concentrated in smaller regional markets, not major metropolitan areas.",
      "Not available at state prisons or federal facilities.",
    ],

    faq: [
      {
        question: "How do I find out if NCIC serves my loved one's facility?",
        answer: "Visit ncic.com and use the facility search. Enter the facility name, city, or state. If the facility appears, NCIC is the provider. If it does not, another provider holds the contract — Securus, GTL, GettingOut, or ICSolutions are the most common alternatives at county jails.",
      },
      {
        question: "How do I set up phone calls through NCIC?",
        answer: "Create a free account at ncic.com or through the NCIC mobile app. Set up a prepaid calling account linked to your phone number and add funds via debit card, credit card, or money order. The incarcerated individual can then call your number from facility phones once the account is active. Calls are inmate-initiated.",
      },
      {
        question: "Does NCIC offer tablet services for inmates?",
        answer: "Yes. At many NCIC-contracted facilities, inmates have access to NCIC-provided tablets that allow messaging, educational content, and other services. The availability of tablet features depends on the specific facility's contract and policies.",
      },
      {
        question: "Can I use NCIC for video visits?",
        answer: "Yes. Remote video visits are available at participating NCIC facilities. Log into your account, navigate to the video visitation section, and schedule an available time slot. You will need a device with a working camera and a stable internet connection.",
      },
      {
        question: "Is NCIC available at state prisons?",
        answer: "NCIC focuses primarily on county jails and regional detention facilities. It does not serve most state prisons or federal facilities. For state prisons, GTL and JPay are the most common providers. For federal facilities, CorrLinks and ConnectNetwork are required.",
      },
    ],

    relatedProviderSlugs: ["securus", "icsolutions", "gettingout"],
  },

  touchpay: {
    id: "p-touchpay",
    name: "TouchPay",
    slug: "touchpay",
    initial: "T",
    color: "bg-lime-700",
    tagline: "Kiosk and online commissary deposits for correctional facilities",
    services: { messaging: false, video: false, photos: false, phone: false, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1200,
    appAvailable: false,
    hasDetailPage: true,

    description:
      "TouchPay provides commissary deposits and inmate money transfers at 1,200+ correctional facilities nationwide through kiosk, online, and phone payment options. Part of the GTL (ViaPath) family.",

    website: "https://www.touchpaydirect.com",

    overview: [
      "TouchPay is a commissary deposit and inmate money transfer platform that operates as part of the GTL (ViaPath Technologies) family of services. It is one of the most widespread inmate deposit solutions in the country, providing families with multiple ways to send funds to an incarcerated individual's trust account: online through the TouchPay website, by phone through an automated system, or in person at a TouchPay kiosk installed in facility lobbies. With coverage at more than 1,200 facilities across all 50 states, TouchPay and its sister platform Access Corrections together cover the majority of GTL-contracted facilities for commissary deposits.",

      "TouchPay kiosks are a familiar feature at county jail lobbies across the United States. They accept cash and card payments, process deposits quickly, and provide a receipt. For families who prefer in-person deposits, the kiosk method eliminates the need to set up an online account or navigate a website. Online deposits through touchpaydirect.com work similarly to Access Corrections — families search for the facility, enter the inmate's ID, choose a payment method, and submit. Funds are typically credited within one to two business days, depending on the facility's account processing schedule.",

      "TouchPay handles commissary deposits only. It does not provide phone calls, video visits, messaging, or photo services. Families at GTL-contracted facilities who need phone and video services must use a separate GTL calling account through telmate.com or the GTL Connect app. Families who need messaging at a state prison must use JPay. Understanding that commissary deposits, phone calls, messaging, and video visits are often on separate platforms at the same facility is key to setting up communication correctly from the start.",
    ],

    serviceDetails: {
      messaging: {
        available: false,
        description: "TouchPay does not provide messaging services.",
        notes: "For messaging at state prisons, use JPay. For county jails, use GettingOut or the facility's messaging provider.",
      },
      video: {
        available: false,
        description: "TouchPay does not provide video visitation services.",
        notes: "For video visits at GTL facilities, use the GTL Connect app or telmate.com.",
      },
      photos: {
        available: false,
        description: "TouchPay does not handle photo delivery.",
        notes: "For photo services, use JPay, TextBehind, or Pigeonly depending on facility availability.",
      },
      phone: {
        available: false,
        description: "TouchPay does not handle phone call accounts.",
        notes: "For phone at GTL facilities, use telmate.com or the GTL Connect app to fund your calling account.",
      },
      moneyTransfer: {
        available: true,
        description: "Deposit funds to inmate commissary trust accounts via TouchPay kiosk, online at touchpaydirect.com, or by phone.",
        setupUrl: "https://www.touchpaydirect.com",
        notes: "Cash and card accepted at kiosks. Online accepts debit and credit cards. Processing fees apply. Funds typically credited within one to two business days.",
      },
    },

    coverage: {
      facilityTypes: ["County Jail", "State Prison", "Federal Prison", "Detention Center"],
      geographic: "All 50 states, with both online and kiosk options at many facilities",
      notes: "TouchPay is most commonly found at GTL-contracted facilities. For facilities outside the GTL network, Access Corrections, JPay, or Securus are the typical deposit platforms.",
    },

    supportedFacilities: [
      { name: "Rikers Island",               slug: "rikers-island",               stateAbbr: "NY", type: "County Jail"  },
      { name: "Fulton County Jail",           slug: "fulton-county-jail",           stateAbbr: "GA", type: "County Jail"  },
      { name: "Marion County Jail",           slug: "marion-county-jail",           stateAbbr: "IN", type: "County Jail"  },
      { name: "San Quentin State Prison",     slug: "san-quentin-state-prison",     stateAbbr: "CA", type: "State Prison" },
    ],

    pricing: [
      { label: "Kiosk Deposit (Cash)",   value: "Fee applies", notes: "Flat fee or percentage. Varies by facility contract." },
      { label: "Online Deposit",         value: "Fee applies", notes: "Debit or credit card. Fee varies by amount and facility." },
      { label: "Phone Deposit",          value: "Fee applies", notes: "Automated phone deposit line. Typically slightly higher than online." },
    ],

    pros: [
      "In-person kiosk option is convenient for families who prefer cash or want immediate confirmation.",
      "Available at 1,200+ facilities across all 50 states.",
      "Multiple deposit methods — kiosk, online, and phone — give families flexibility.",
      "No account required for kiosk deposits, which is useful for one-time or infrequent use.",
      "Part of the GTL family, so widely recognized at county jails with GTL contracts.",
    ],
    cons: [
      "Money transfer only. No phone, video, messaging, or photo services.",
      "Processing fees apply across all payment methods.",
      "Families at GTL facilities still need a separate account for phone calls.",
      "Kiosks are only useful for in-person visits — remote families must use the online option.",
      "No mobile app. Web-based online deposits only.",
    ],

    faq: [
      {
        question: "What is the difference between TouchPay and Access Corrections?",
        answer: "Both are commissary deposit platforms in the GTL (ViaPath) family. TouchPay emphasizes kiosk deposits — the machines you see in jail lobbies — and also offers online and phone deposits. Access Corrections is a primarily web-based platform used at many of the same facilities. In practice, the two platforms often serve the same facilities under different access points. If one does not list your facility, try the other.",
      },
      {
        question: "How do I use a TouchPay kiosk to send money?",
        answer: "Find a TouchPay kiosk at the facility's lobby or visiting area. Select the facility on the screen, enter the inmate's ID or booking number, insert cash or a payment card, and confirm the deposit amount. The machine will print a receipt confirming the transaction. Funds are typically credited within one to two business days.",
      },
      {
        question: "Can I deposit money online through TouchPay?",
        answer: "Yes. Visit touchpaydirect.com and search for the facility. Enter the inmate's ID, choose a payment method — debit or credit card — and complete the deposit. You do not need to create an account for a one-time deposit, though creating an account saves your information for faster future deposits.",
      },
      {
        question: "Does TouchPay handle phone calls or video visits?",
        answer: "No. TouchPay handles commissary deposits only. For phone calls at GTL facilities, create a separate calling account through telmate.com or the GTL Connect app. For video visits, use the same GTL account. These are separate from your commissary deposit.",
      },
      {
        question: "How long does a TouchPay deposit take to process?",
        answer: "Funds are typically credited to the inmate's trust account within one to two business days after the deposit is submitted. Kiosk deposits process at the same speed as online deposits. Deposits made on weekends or holidays may take an additional day to process depending on the facility's account update schedule.",
      },
    ],

    relatedProviderSlugs: ["access-corrections", "gtl", "jpay"],
  },

  "city-tele-coin": {
    id: "p-city-tele-coin",
    name: "City Tele Coin",
    slug: "city-tele-coin",
    initial: "C",
    color: "bg-red-700",
    tagline: "City Tele Coin (CTC) Inmate Phone Calls & Money Transfer for County Jails",
    services: { messaging: false, video: false, photos: false, phone: true, moneyTransfer: true },
    statesCount: 12,
    facilitiesCount: 180,
    appAvailable: false,
    hasDetailPage: true,

    description:
      "City Tele Coin (CTC) is an inmate phone service provider serving 180+ county jails across 12 states. Families can fund prepaid phone accounts, deposit commissary money, and stay connected with incarcerated loved ones. Account setup is free and calls can begin within hours of adding funds.",

    website: "https://www.citytelecoin.com",

    overview: [
  "City Tele Coin (CTC) is an inmate telephone service provider operating in over 180 county jails and local detention centers across 12 states. CTC specializes in phone calls and commissary deposits for families of incarcerated individuals in smaller county facilities.",

  "To receive calls from an inmate using CTC, families must create a free prepaid account at citytelecoin.com and add funds before the first call. Once funds are added, the inmate can call your number directly from the facility phone.",

  "CTC phone call rates vary by facility and are regulated by the FCC for interstate calls. Most families pay between $0.06 and $0.21 per minute depending on the facility location and call type.",

  "In addition to phone calls, CTC offers commissary deposit services that allow families to send money directly to an inmate trust account. Funds are typically credited within one to two business days.",

  "To find out if your loved one is in a CTC facility, contact the facility directly and ask which phone provider they use, or search our facility directory for the complete provider list.",
],

    serviceDetails: {
      messaging: {
        available: false,
        description: "City Tele Coin does not provide messaging services.",
        notes: "Many CTC-contracted facilities do not have a messaging provider. Check with the facility directly about available communication options.",
      },
      video: {
        available: false,
        description: "City Tele Coin does not provide video visitation.",
        notes: "If video visits are available at a CTC facility, they would be through a separate contracted provider. Confirm with the facility.",
      },
      photos: {
        available: false,
        description: "City Tele Coin does not offer photo delivery.",
        notes: "For photo services at CTC facilities, Pigeonly's physical letter and photo printing service works at most facilities that accept standard mail.",
      },
      phone: {
        available: true,
        description: "Fund a prepaid account to receive inmate-initiated calls at City Tele Coin facilities.",
        setupUrl: "https://www.citytelecoin.com",
        notes: "Calls are inmate-initiated. You cannot call the facility to speak with an inmate. Interstate rates are FCC-regulated.",
      },
      moneyTransfer: {
        available: true,
        description: "Deposit funds to inmate commissary trust accounts through the City Tele Coin platform.",
        setupUrl: "https://www.citytelecoin.com",
        notes: "Processing fees apply. Debit card, credit card, and money order options available.",
      },
    },

    coverage: {
      facilityTypes: ["County Jail", "Municipal Jail", "Detention Center"],
      geographic: "12 states, concentrated in the South and parts of the Midwest",
      notes: "City Tele Coin serves a limited regional network. It is the exclusive provider at its contracted facilities. For facilities outside its network, Securus, GTL, or ICSolutions are more common alternatives.",
    },

    supportedFacilities: [
      { name: "Cook County Jail",                slug: "cook-county-jail",                stateAbbr: "IL", type: "County Jail" },
      { name: "Miami-Dade Corrections Facility", slug: "miami-dade-corrections-facility", stateAbbr: "FL", type: "County Jail" },
    ],

    pricing: [
      { label: "Account Registration", value: "Free",           notes: "No cost to create a CTC account." },
      { label: "Phone Calls",          value: "$0.14–$0.21/min", notes: "Interstate rates are FCC-regulated. In-state rates vary by facility contract." },
      { label: "Money Transfer",       value: "Fee applies",    notes: "Processing fee varies by transfer amount and payment method." },
    ],

    pros: [
      "Long-established provider with decades of experience in county jail communication.",
      "Single account covers both phone calls and commissary deposits at most CTC facilities.",
      "Regional focus means dedicated customer service in its core markets.",
      "Straightforward prepaid account model that is easy to understand.",
      "FCC-regulated interstate rates provide cost protection for long-distance families.",
    ],
    cons: [
      "Phone and money transfer only. No video visits, messaging, or photos.",
      "Small network — 180 facilities across 12 states. Not useful for most families nationally.",
      "Regional concentration means it is the correct provider only in specific states.",
      "No mobile app. Account management is web-based only.",
      "Less name recognition means families often search for other providers first.",
    ],

    faq: [
      {
        question: "How do I know if City Tele Coin serves my loved one's facility?",
        answer: "Visit citytelecoin.com and use the facility search tool. Enter the facility name, city, or state. If it appears, CTC holds the phone contract there. If it does not, the facility uses a different provider — Securus, GTL, or ICSolutions are the most common alternatives at county jails.",
      },
      {
        question: "How do I set up a calling account with City Tele Coin?",
        answer: "Go to citytelecoin.com and create a prepaid account linked to your phone number. Add funds via debit card, credit card, or money order. Once your account is funded, the incarcerated individual can call your number directly from facility phones. Calls are inmate-initiated — you cannot initiate contact.",
      },
      {
        question: "Does City Tele Coin offer video visits?",
        answer: "No. City Tele Coin is a phone and money transfer provider only. If the facility where your loved one is held offers video visitation, it would be through a separate provider. Check with the facility directly about whether a video visit option is available.",
      },
      {
        question: "Can I send commissary money through City Tele Coin?",
        answer: "Yes. In addition to phone calls, City Tele Coin processes commissary deposits at most of its contracted facilities. Log into your account and navigate to the money transfer section. Add funds via debit card, credit card, or money order. Processing fees apply, and funds are typically credited within one to two business days.",
      },
      {
        question: "Is City Tele Coin available at state prisons or federal facilities?",
        answer: "No. City Tele Coin serves county jails and local detention centers in its regional markets. State prisons typically use GTL or Securus for phone services. Federal Bureau of Prisons facilities use ConnectNetwork. If your loved one is transferred from a CTC county jail to a state prison, you will need to set up a new account with the appropriate state-level provider.",
      },
    ],

    relatedProviderSlugs: ["securus", "icsolutions", "ncic"],
  },
}
