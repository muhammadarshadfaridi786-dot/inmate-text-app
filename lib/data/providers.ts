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
  seoTitle?: string
  seoDescription?: string

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
  rating?: number
  reviewCount?: number
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
    tagline: "JPay: What It Is, How Stamps Work and How to Send Money to State Prison Inmates",
    services: { messaging: true, video: true, photos: true, phone: true, moneyTransfer: true },
    statesCount: 35,
    facilitiesCount: 1000,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "JPay is the most widely used messaging, money transfer, and video visit platform for state prison inmates in the United States. Learn what JPay is, how JPay stamps work, how much it costs to send money through JPay, and how to use the JPay mobile app. JPay serves over 35 states and 1,000 plus correctional facilities.",

    seoTitle: "What Is JPay: How It Works, Stamps, Money Transfer and App Guide",
    seoDescription:
      "What is JPay and how does it work for state prison families. JPay stamps cost, money transfer fees, video visits, and mobile app explained. Free guide for families.",

    website: "https://www.jpay.com",
    iosUrl: "https://apps.apple.com/us/app/jpay/id388308268",
    androidUrl: "https://play.google.com/store/apps/details?id=com.jpay.android",

    overview: [
      "What is JPay and what is it used for? JPay is a digital communication and money transfer platform for families of incarcerated people at state prisons and county jails. JPay is used for four things. First, electronic messaging using a stamp system where one stamp equals one message. Second, money transfers to inmate trust accounts for commissary and phone calls. Third, video visits scheduled from home without traveling to the facility. Fourth, tablet services funding entertainment and education content on JPay facility tablets. JPay is owned by Aventiv Technologies, the same parent company as Securus.",

      "How does JPay work for sending messages? Create a free account at jpay.com or on the JPay mobile app for iOS and Android. Search for the facility and add the inmate using their DOC number. Purchase stamps to send messages. JPay stamps cost between $0.33 and $0.47 each depending on the state. One stamp sends one standard message. One additional stamp attaches a photo. Messages go through staff review before delivery. Delivery typically takes 24 to 48 hours on business days.",

      "How does JPay money transfer work and how much does it cost? Log in to your JPay account and go to Send Money. Select the facility, enter the inmate DOC number, and choose a payment method. JPay accepts debit cards, credit cards, and cash at MoneyGram locations. Transfer fees are typically 2.75 percent of the amount or $2.95 whichever is greater. Funds are credited to the inmate trust account within one to two business days. Using a debit card instead of a credit card avoids cash advance fees charged by your bank. JPay does not accept Cash App directly.",

      "What is the difference between JPay and CorrLinks? JPay serves state prisons across more than 35 states. CorrLinks is the only approved messaging platform for all federal Bureau of Prisons facilities. These two platforms do not overlap and do not compete. If your loved one is in a state prison you need JPay. If they are in a federal prison you need CorrLinks. Using the wrong platform means messages never reach the inmate. Search our facility directory to confirm which provider serves the specific facility.",
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
        question: "What is JPay?",
        answer: "JPay is a digital messaging, money transfer, and video visit service for families of incarcerated people at state prisons. JPay is the most widely used state prison communication platform in the United States serving over 35 states and 1,000 plus facilities. JPay is owned by Aventiv Technologies. Create a free account at jpay.com or on the JPay mobile app.",
      },
      {
        question: "What is JPay used for?",
        answer: "JPay is used for four main services. Electronic messaging using stamps to send messages and photos. Money transfers to inmate trust accounts for commissary purchases. Video visits scheduled from home. Tablet services for entertainment and education content on JPay facility tablets. Not all four services are available at every facility. Check the specific facility to see which services are active.",
      },
      {
        question: "What are JPay stamps and how much do they cost?",
        answer: "JPay stamps are virtual credits used to send electronic messages. One stamp equals one standard message. One additional stamp attaches a photo. Stamps cost between $0.33 and $0.47 each depending on the state. You purchase stamps in advance in bundles. Stamps do not expire. Buy stamps through jpay.com or the JPay mobile app.",
      },
      {
        question: "What is the difference between JPay and CorrLinks?",
        answer: "JPay serves state prisons. CorrLinks serves federal Bureau of Prisons facilities only. These are completely separate platforms. If your loved one is in a state prison use JPay. If they are in a federal prison use CorrLinks. Using the wrong platform means messages will never reach the inmate. Do not sign up for JPay for a federal inmate.",
      },
      {
        question: "How does JPay money transfer work?",
        answer: "Log in to jpay.com and go to Send Money. Select the facility and enter the inmate DOC number. Choose a payment method. JPay accepts debit cards, credit cards, and cash at MoneyGram locations. Transfer fees are typically 2.75 percent or $2.95 whichever is greater. Funds are credited to the inmate trust account within one to two business days.",
      },
      {
        question: "How much does JPay charge to send money?",
        answer: "JPay money transfer fees are typically 2.75 percent of the amount sent or $2.95 whichever is greater. For example, sending $50 would cost approximately $3.33 in fees. Using a debit card instead of a credit card avoids additional cash advance fees that your bank may charge. Always check the fee before confirming the transaction in your JPay account.",
      },
      {
        question: "Does JPay accept Cash App?",
        answer: "JPay does not directly accept Cash App as a payment method. JPay accepts debit cards, credit cards, and cash at MoneyGram locations. If you want to use Cash App funds, transfer the money from Cash App to a linked debit card first, then use that debit card to make the JPay deposit. Always verify current accepted methods at jpay.com.",
      },
      {
        question: "What is a JPay cash advance fee?",
        answer: "A cash advance fee is charged by your credit card company, not by JPay, when your card issuer classifies the JPay transaction as a cash advance. To avoid this fee, use a debit card instead of a credit card for JPay deposits. Debit card transactions are not classified as cash advances. Contact your card issuer if you see unexpected fees after a JPay transaction.",
      },
      {
        question: "Is JPay safe and legitimate?",
        answer: "Yes. JPay is a legitimate company founded in 2002 and is the most widely used state prison communication platform in the United States. JPay is owned by Aventiv Technologies and serves over 35 states. JPay uses standard security for online transactions. Keep all transaction receipts and contact JPay customer service at jpay.com if there are issues.",
      },
      {
        question: "Is JPay free to use?",
        answer: "Creating a JPay account is completely free. You pay only for the services you use. Stamps for messaging cost $0.33 to $0.47 each. Money transfer fees are typically 2.75 percent or $2.95. Video visits have per-session pricing. JPay does not charge for account creation or maintenance fees.",
      },
      {
        question: "Does JPay work for federal prisons?",
        answer: "No. JPay does not serve federal Bureau of Prisons facilities. Federal inmates use CorrLinks exclusively for electronic messaging. If your loved one is in a federal prison do not sign up for JPay. Use CorrLinks instead. The inmate must send you a contact request from a TRULINCS terminal at the federal facility to start CorrLinks messaging.",
      },
      {
        question: "How do I find the inmate DOC number for JPay?",
        answer: "The DOC number is the state Department of Corrections identification number. Use the state DOC offender search for the state where your loved one is incarcerated. For example tdcj.texas.gov for Texas, cdcr.ca.gov for California, gdc.georgia.gov for Georgia. You can also ask your loved one to provide their DOC number directly. Do not guess the number as sending to the wrong account causes delays.",
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
    tagline: "ConnectNetwork by GTL ViaPath: How to Set Up AdvancePay, PIN Debit and Receive Calls",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1800,
    appAvailable: true,
    hasDetailPage: true,

    description:
       "ConnectNetwork is the family-facing platform operated by GTL ViaPath Technologies for receiving inmate phone calls, scheduling video visits, sending messages, and depositing money. Create a free account at connectnetwork.com or call ConnectNetwork customer service at 877-650-4249. The ConnectNetwork mobile app is available for iOS and Android.",

    seoTitle: "What Is ConnectNetwork: GTL Phone Calls, AdvancePay and Account Setup",
    seoDescription:
      "What is ConnectNetwork by GTL and how does it work. Set up AdvancePay or PIN Debit account at connectnetwork.com. Customer service at 877-650-4249. Free guide for families.",

    website: "https://www.connectnetwork.com",
    iosUrl: "https://apps.apple.com/us/app/gtl-connect/id943869522",
    androidUrl: "https://play.google.com/store/apps/details?id=com.gtl.connect",

    overview: [
  "What is ConnectNetwork and what is it used for? ConnectNetwork is the consumer platform operated by GTL, now known as ViaPath Technologies. ConnectNetwork is used to receive phone calls from incarcerated loved ones at state prisons and county jails, schedule video visits, send electronic messages, and deposit money to inmate accounts. ConnectNetwork serves over 1,800 facilities across the United States. Create a free account at connectnetwork.com. Customer service is available at 877-650-4249. The AdvancePay customer service line is 800-483-8314.",

  "What is the difference between AdvancePay and PIN Debit on ConnectNetwork? AdvancePay is a prepaid account linked to your phone number that you fund in advance. When the inmate calls your registered number, the cost is deducted from your AdvancePay balance. PIN Debit is an account owned by the incarcerated person. Family members deposit money into the PIN Debit account and the inmate uses those funds to call any approved number on their list. AdvancePay calls can only come to your registered number. PIN Debit calls can go to any approved number on the inmate's list. Both account types can be managed at connectnetwork.com.",

  "Why are ConnectNetwork GTL calls showing as spam on my phone? GTL uses specific outgoing phone numbers that vary by facility. These numbers are often flagged as spam or robo calls by mobile carriers. To fix this, save the specific GTL outgoing number for your loved one's facility in your contacts. You can also contact your mobile carrier and ask them to whitelist the number. Call GTL customer service at 877-650-4249 for the specific outgoing number for your facility.",

  "What is ConnectNetwork Debit Link? Debit Link is GTL ViaPath's digital currency for tablet-based services at facilities they serve. One dollar buys 100 Debit Link units at $0.01 per unit. Debit Link funds are used for tablet entertainment including streaming music, games, and ebooks. Debit Link is separate from phone account credits and commissary funds. Debit Link purchases are final and nonrefundable. Contact ConnectNetwork at 877-650-4249 for Debit Link questions.",
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
        question: "What is ConnectNetwork?",
        answer: "ConnectNetwork is the consumer platform operated by GTL ViaPath Technologies for families of incarcerated people. It handles phone calls, video visits, electronic messaging, and money deposits at over 1,800 facilities. Create a free account at connectnetwork.com. Customer service is at 877-650-4249.",
      },
      {
        question: "How do I set up a ConnectNetwork account?",
        answer: "Go to connectnetwork.com and click Create Account. Enter your name, email, and create a password. Confirm your age. After email verification, log in and go to My Facilities to add the facility. Then go to My Inmates and search for the incarcerated person by name or DOC number. Add them to your account and then fund an AdvancePay or PIN Debit account to begin receiving calls.",
      },
      {
        question: "What is the difference between AdvancePay and PIN Debit?",
        answer: "AdvancePay is your account tied to your phone number. You deposit money and when the inmate calls your registered number the cost is deducted from your balance. PIN Debit is the inmate's account. You deposit money for the inmate and they can call any approved number on their list using those funds. AdvancePay is simpler for families. PIN Debit gives the inmate more flexibility. Both are managed at connectnetwork.com.",
      },
      {
        question: "What is the ConnectNetwork customer service number?",
        answer: "ConnectNetwork GTL customer service is available at 877-650-4249. For AdvancePay account deposits and support call 800-483-8314. For Debit Link tablet service questions call 877-650-4249. Customer service hours are generally Monday through Friday 7am to 11pm Central and Saturday to Sunday 8am to 7pm Central.",
      },
      {
        question: "Why are GTL ConnectNetwork calls showing as spam?",
        answer: "GTL uses specific outgoing phone numbers that vary by facility. Mobile carriers often flag these as spam or robo calls. Save the specific GTL outgoing number for your facility in your contacts. Contact your mobile carrier to whitelist the number. Call GTL at 877-650-4249 to get the correct outgoing number for your specific facility.",
      },
      {
        question: "Is ConnectNetwork the same as GTL?",
        answer: "ConnectNetwork is the consumer-facing platform operated by GTL, now known as ViaPath Technologies. GTL is the company. ConnectNetwork is the website and app families use to manage accounts. GettingOut is another GTL platform for county jails operated through their Telmate subsidiary. All three refer to services under the same ViaPath Technologies parent company.",
      },
      {
        question: "Does ConnectNetwork have a mobile app?",
        answer: "Yes. The ConnectNetwork mobile app is available for iOS and Android. Search for ConnectNetwork in the App Store or Google Play. The app provides access to deposits, account management, and messaging services from your smartphone. It works just like the connectnetwork.com dashboard.",
      },
      {
        question: "What is Debit Link on ConnectNetwork?",
        answer: "Debit Link is GTL ViaPath's digital currency for tablet services. One dollar buys 100 Debit Link units at $0.01 per unit. Inmates use Debit Link for streaming music, games, and ebooks on their facility tablets. Debit Link is separate from phone credits and commissary. Debit Link purchases are nonrefundable. Effective June 1, 2026, AdvancePay accounts inactive for 180 days will expire. Contact ConnectNetwork at 877-650-4249 for details.",
      },
      {
        question: "How do I deposit money through ConnectNetwork?",
        answer: "Log in to connectnetwork.com and go to the deposit section. Select AdvancePay for your phone account or PIN Debit for the inmate account. ConnectNetwork accepts Visa and Mastercard including debit cards. You can also call 800-483-8314 for phone deposits. Deposits are processed 24 hours a day, 7 days a week.",
      },
      {
        question: "What states use ConnectNetwork GTL?",
        answer: "ConnectNetwork GTL serves over 1,800 facilities across 50 states including Ohio DOC state prisons, Illinois DOC through ICSolutions which is a GTL subsidiary, Washington state prisons, Tennessee state prisons, and many county jails nationwide. New Jersey is transitioning from JPay to ViaPath ConnectNetwork in 2025 and 2026. Check your specific facility to confirm whether ConnectNetwork is the active provider.",
      },
      {
        question: "What happens to my AdvancePay balance if I stop using it?",
        answer: "Effective June 1, 2026, ConnectNetwork AdvancePay accounts inactive for 180 consecutive days will expire. If you opt in to notifications, GTL will send a text or email reminder 30 days before expiration. After the account expires you have an additional 90 days to request a refund. After that the balance is converted to free calling minutes in ViaPath's free calling program. Contact GTL at 877-650-4249 to request a refund.",
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
    tagline: "GettingOut App: What It Is, How Video Visits Work and How Much They Cost",
    services: { messaging: true, video: true, photos: true, phone: true, moneyTransfer: true },
    statesCount: 45,
    facilitiesCount: 2200,
    appAvailable: true,
    hasDetailPage: true,

    description:
          "GettingOut is a video visitation, messaging, and phone call app for county jails operated by Telmate, a subsidiary of GTL ViaPath Technologies. GettingOut serves over 2,200 county jails across 45 states. Create a free account at gettingout.com to schedule video visits, send messages, and make phone calls. GettingOut is not the same as ConnectNetwork. Both are GTL ViaPath platforms but serve different facility types.",

    seoTitle: "What Is GettingOut App: Video Visits, Messaging and How It Works",
    seoDescription:
      "What is the GettingOut app and what is it used for. How GettingOut video visits work, cost per minute, account setup at gettingout.com. GTL Telmate guide for families.",

    website: "https://www.gettingout.com",
    iosUrl: "https://apps.apple.com/us/app/gettingout/id453021164",
    androidUrl: "https://play.google.com/store/apps/details?id=com.telmate.gettingout",

    overview: [
      "What is the GettingOut app and what is it used for? GettingOut is a county jail communication app operated by Telmate, a GTL ViaPath Technologies subsidiary. GettingOut is used for remote video visits from home, electronic messaging, phone calls, and money transfers at county jails. You do not need to travel to the facility to have a video visit through GettingOut. The app is available free for iOS and Android. Create a free account at gettingout.com. GettingOut serves 2,200 plus county jails across 45 states.",

      "How do GettingOut video visits work and how much do they cost? Create a free account at gettingout.com. Search for the county jail and add the incarcerated person as a contact. Schedule a video visit by selecting an available time slot and paying in advance. Remote visits from home are billed per minute or per session depending on the facility. A typical GettingOut session costs between $7.50 and $15 for 20 to 30 minutes. At the scheduled time open the app or website and join the session. A device with a camera and stable internet connection is required. All visits are recorded. Schedule up to 14 days in advance.",

      "What is GettingOut used for besides video visits? GettingOut also supports electronic messaging at participating facilities. You type a message, pay per message credit, and the message is delivered after staff review. Phone calls are available at some GettingOut facilities through a ConnectNetwork AdvancePay account. Money transfers to inmate accounts are also available. All these services are under one GettingOut account at facilities that have contracted for them. Check your dashboard to see which services are available at your specific county jail.",

      "Is GettingOut the same as ConnectNetwork? No. GettingOut and ConnectNetwork are both operated by GTL ViaPath Technologies but they are separate platforms serving different facility types. ConnectNetwork serves state prisons and larger facilities. GettingOut serves county jails through the Telmate subsidiary. You cannot use a ConnectNetwork account at a GettingOut facility and vice versa. If your loved one moves from a county jail to a state prison the provider typically changes from GettingOut to ConnectNetwork or JPay.",
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
        question: "What is the GettingOut app?",
        answer: "GettingOut is a video visitation, messaging, and phone call app for county jails operated by Telmate, a GTL ViaPath Technologies subsidiary. GettingOut serves over 2,200 county jails across 45 states. Create a free account at gettingout.com. The GettingOut app is available free on iOS and Android.",
      },
      {
        question: "What is GettingOut used for?",
        answer: "GettingOut is used for remote video visits from home, electronic messaging, phone calls, and money transfers at county jails. You do not need to travel to the jail to have a video visit. Create a free account at gettingout.com, add the county jail and incarcerated person, and schedule a video visit or send a message.",
      },
      {
        question: "How much does a GettingOut video visit cost?",
        answer: "GettingOut video visit costs vary by facility. A typical session costs between $7.50 and $15 for 20 to 30 minutes. Some facilities charge per minute rather than per session. At-home remote visits are billed. On-site lobby kiosk visits at some facilities may be free. Check your specific facility on gettingout.com for current rates before scheduling.",
      },
      {
        question: "How do I set up a GettingOut account?",
        answer: "Go to gettingout.com or download the GettingOut app for iOS or Android. Click Sign Up and enter your name, email, and phone number. Search for the county jail where your loved one is held and add them as a contact. Add payment information and fund your account to schedule video visits or send messages. Account creation is free.",
      },
      {
        question: "Is GettingOut the same as ConnectNetwork or GTL?",
        answer: "GettingOut and ConnectNetwork are both owned by GTL ViaPath Technologies but are separate platforms. GettingOut is operated by the Telmate subsidiary and serves county jails. ConnectNetwork serves state prisons and larger facilities. You cannot use one account at the other's facilities. GTL is the parent company name for both platforms.",
      },
      {
        question: "Is GettingOut legit?",
        answer: "Yes. GettingOut is a legitimate service operated by Telmate, a subsidiary of GTL ViaPath Technologies, one of the largest corrections communication companies in the United States. GettingOut serves over 2,200 county jails. Some users report billing issues with failed video visits. Report problems immediately with your confirmation number to request a credit.",
      },
      {
        question: "What do I do if a GettingOut video visit fails?",
        answer: "Contact GettingOut customer service immediately through gettingout.com with your confirmation number and a description of what failed. Keep records of all communication. Do not close the session without noting the failure. If customer service does not resolve it, file a Better Business Bureau complaint. Avoid bank chargebacks as they may result in account restrictions.",
      },
      {
        question: "Does GettingOut work at state prisons?",
        answer: "No. GettingOut is designed for county jails and serves over 2,200 county jail facilities. State prisons typically use ConnectNetwork by GTL, JPay, or Securus. If your loved one moves from a county jail to a state prison, GettingOut no longer works. Create a new account on the correct state prison provider after confirming the transfer.",
      },
      {
        question: "How do GettingOut messages work?",
        answer: "GettingOut electronic messaging is available at participating county jails. Type your message in the GettingOut app or website, pay per message credit, and the message is delivered after staff review. Messaging availability depends on whether the specific county jail has contracted for this service. Check your GettingOut dashboard to see whether messaging is available at your facility.",
      },
      {
        question: "What is the GettingOut Friends and Family account?",
        answer: "A GettingOut Friends and Family account is the standard account created at gettingout.com by family members and friends of incarcerated people. It allows you to schedule video visits, send messages, make phone calls, and transfer money at contracted county jails. Creating an account is free. You pay only for the services you use.",
      },
      {
        question: "Can I use GettingOut on Android?",
        answer: "Yes. The GettingOut app is available for both Android and iOS. Search for GettingOut in the Google Play Store or Apple App Store. The app allows you to schedule video visits, send messages, and manage your account from your smartphone. You can also access GettingOut through a web browser at gettingout.com.",
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
    tagline: "CorrLinks: What It Is, How TRULINCS Works and How to Set Up Your Free Account",
    services: { messaging: true, video: false, photos: false, phone: false, moneyTransfer: false },
    statesCount: 50,
    facilitiesCount: 120,
    appAvailable: false,
    hasDetailPage: true,

    description:
      "CorrLinks is the official email system for all federal Bureau of Prisons inmates, powered by the TRULINCS network. Learn what CorrLinks is, whether it is free, how to sign up, what the PIC number is, and how TRULINCS inmate email works. Creating an outside contact account on CorrLinks is completely free. CorrLinks only works for federal prisons. JPay serves state prisons.",

    seoTitle: "What Is CorrLinks: Federal Prison Email, TRULINCS and Free Account Guide",
    seoDescription:
      "What is CorrLinks and is it free. How TRULINCS federal prison email works, how to sign up, and what the PIC number is. Free outside contact account guide for families.",

    website: "https://www.corrlinks.com",

    overview: [
      "What is CorrLinks and is it free? CorrLinks is the official electronic messaging platform for the Federal Bureau of Prisons, operating through the TRULINCS system which stands for Trust Fund Limited Inmate Computer System. CorrLinks is how families send and receive electronic messages with federal prison inmates. Creating an outside contact account on CorrLinks at corrlinks.com is completely free. You do not pay per message as an outside contact. The inmate pays $0.30 per message from their trust account. The only paid option is CorrLinks Premier at approximately $8 per year which adds push notifications.",

      "What is TRULINCS and how does it work? TRULINCS is the secure federal BOP computer network that powers CorrLinks messaging. Inmates access TRULINCS through secure terminals in their housing units at federal prisons. The process must begin with the inmate. Your loved one logs in to a TRULINCS terminal, enters your name and email address, and sends you a contact request. CorrLinks then sends you a free invitation email. You cannot start the process from outside. Check your spam folder if the invitation does not arrive within 48 hours. CorrLinks limits inmates to 10 outside contacts.",

      "What is the PIC number on CorrLinks? PIC stands for Personal Identification Code. It is the unique number assigned to each outside contact on CorrLinks. The inmate uses your PIC number to find and add you as a contact on their TRULINCS terminal. Your PIC number appears in your CorrLinks account settings after you create your free account. Share your PIC number with your loved one so they can add you as a contact from the TRULINCS terminal at their federal facility.",

      "What is the difference between CorrLinks and JPay? CorrLinks works only at federal Bureau of Prisons facilities. JPay works at state prisons. These are completely separate platforms that do not overlap. If your loved one is in a federal prison use CorrLinks. If they are in a state prison use JPay. Using the wrong platform means your messages will never reach the inmate. Federal prisons include facilities with names like FCI, USP, FCC, FMC, and ADX. State prisons are operated by state Departments of Corrections.",
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
        question: "What is CorrLinks?",
        answer: "CorrLinks is the official electronic messaging platform for all federal Bureau of Prisons facilities in the United States. It is powered by the TRULINCS system. If your loved one is in any federal prison, CorrLinks is the only approved platform for electronic messaging. Creating an outside contact account at corrlinks.com is completely free.",
      },
      {
        question: "Is CorrLinks free?",
        answer: "Creating a CorrLinks outside contact account is completely free. You do not pay per message as an outside contact. The inmate pays $0.30 per message from their federal trust account. The only paid option is CorrLinks Premier at approximately $8 per year which adds push notifications so you know immediately when a new message arrives. Without Premier you must log in manually to check for new messages.",
      },
      {
        question: "What is TRULINCS?",
        answer: "TRULINCS stands for Trust Fund Limited Inmate Computer System. It is the secure federal BOP computer network that powers CorrLinks messaging. Inmates access TRULINCS through secure terminals in their housing units at federal prisons. All CorrLinks messages go through TRULINCS. The system is managed by the Federal Bureau of Prisons.",
      },
      {
        question: "How do I sign up for CorrLinks?",
        answer: "The process must begin with the inmate. Your loved one logs in to a TRULINCS terminal at their federal facility, enters your name and email address, and sends you a contact request. CorrLinks then sends you a free invitation email. Go to corrlinks.com and follow the link in the invitation to create your free account. You cannot start the process from outside. Check your spam folder if the invitation does not arrive within 48 hours.",
      },
      {
        question: "What is the PIC number on CorrLinks?",
        answer: "PIC stands for Personal Identification Code. It is the unique number assigned to your CorrLinks outside contact account. The inmate uses your PIC number to find and add you as a contact on their TRULINCS terminal. Your PIC number appears in your CorrLinks account settings after you create your free account. Share your PIC number with your loved one so they can add you.",
      },
      {
        question: "What is the difference between CorrLinks and JPay?",
        answer: "CorrLinks serves only federal Bureau of Prisons facilities. JPay serves state prisons across more than 35 states. These are completely separate platforms. If your loved one is in a federal prison use CorrLinks. If they are in a state prison use JPay. Federal prisons include FCI, USP, FCC, FMC, and ADX facilities. Do not sign up for JPay for a federal inmate.",
      },
      {
        question: "Is CorrLinks legitimate?",
        answer: "Yes. CorrLinks is the official electronic messaging system operated by the Federal Bureau of Prisons through the TRULINCS network. It is not a third-party service. CorrLinks is the only approved messaging platform for all federal BOP facilities in the United States. The website is corrlinks.com.",
      },
      {
        question: "Is CorrLinks down?",
        answer: "If you cannot access CorrLinks, first check your internet connection and try a different browser. Clear your browser cache and cookies. If the problem continues, the TRULINCS system may be undergoing maintenance. Contact CorrLinks support through corrlinks.com. Planned maintenance is not typically announced publicly in advance. Try again after a few hours if the site is unavailable.",
      },
      {
        question: "What is the CorrLinks phone number?",
        answer: "CorrLinks customer service is available through the corrlinks.com website support section. Submit a support ticket through your account for billing and technical issues. CorrLinks Premier billing disputes should include your payment confirmation. For urgent matters contact the federal facility directly. The most reliable way to reach support is through the corrlinks.com help center.",
      },
      {
        question: "How do I email a federal inmate?",
        answer: "Create a free CorrLinks account at corrlinks.com after receiving an invitation from the inmate. The inmate must initiate the process from a TRULINCS terminal at their federal facility by entering your name and email. Once your account is active, log in to corrlinks.com and compose a message. The inmate reads your message on a TRULINCS terminal and can reply. Messages are reviewed by staff before delivery.",
      },
      {
        question: "Does CorrLinks work at state prisons?",
        answer: "No. CorrLinks only works at federal Bureau of Prisons facilities. State prisons use JPay, ConnectNetwork, ICSolutions, or other state-contracted messaging providers. If your loved one is in a state prison do not sign up for CorrLinks. Use our facility directory to find the correct provider for the specific state prison.",
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
    tagline: "TextBehind - Print and Deliver Letters and Photos to Inmates as Physical Mail",
    services: { messaging: true, video: false, photos: true, phone: false, moneyTransfer: false },
    statesCount: 25,
    facilitiesCount: 600,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "TextBehind converts your digital messages and photos into physical printed mail delivered directly to inmates. TextBehind works at facilities that do not offer electronic messaging, making it a universal option for families who cannot reach their loved one through digital platforms.",

    seoTitle: "TextBehind Review: Print and Deliver Letters and Photos to Inmates by Mail",
    seoDescription:
      "TextBehind guide for families how to send printed letters and photos to inmates at facilities without electronic messaging. Works at nearly any facility that accepts physical mail.",

    website: "https://www.textbehind.com",
    iosUrl: "https://apps.apple.com/us/app/textbehind/id836022386",
    androidUrl: "https://play.google.com/store/apps/details?id=com.textbehind.android",

    overview: [
      "TextBehind is a print-and-deliver service that allows families to type messages and upload photos online, and TextBehind prints and mails them to the inmate as physical letters and photos. This makes TextBehind useful at facilities that do not offer any electronic messaging system, as physical mail is accepted at nearly all correctional facilities.",

      "You type your message at textbehind.com, pay per page, and TextBehind handles printing, addressing, and mailing. The cost is approximately $0.49 per page. TextBehind maintains current mailing specifications for thousands of facilities and formats your content to meet facility rules automatically.",

      "TextBehind is not an electronic messaging platform. Messages are not delivered digitally, they arrive as printed physical mail. Delivery takes several business days after submission. TextBehind is best used as a backup option when electronic messaging is not available at a facility, or when families want to send content that will be physically held by the inmate.",
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
    tagline: "SmartInmate by Smart Communications: What It Is and How to Set Up Video Visits and Messaging",
    services: { messaging: true, video: true, photos: true, phone: true, moneyTransfer: true },
    statesCount: 20,
    facilitiesCount: 400,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "SmartInmate is the family-facing platform operated by Smart Communications that provides video visits, electronic messaging, phone calls, and photo sharing at county jails and detention centers. Create a free account at smartinmate.com or call Smart Communications customer care at 727-349-1561. Safari is not compatible with SmartInmate. Use Google Chrome on all devices including iPhones and iPads.",

    seoTitle: "What Is SmartInmate: Video Visits, Messaging and Phone Calls Guide",
    seoDescription:
      "What is SmartInmate and how does it work. SmartInmate video visitation app setup, messaging, phone calls and customer service at 727-349-1561. Free guide for families.",

    website: "https://www.smartinmate.com",
    iosUrl: "https://apps.apple.com/us/app/smart-inmate/id1191826649",
    androidUrl: "https://play.google.com/store/apps/details?id=com.smartinmate",

    overview: [
      "What is SmartInmate and what is it used for? SmartInmate is an online platform operated by Smart Communications that connects families with incarcerated loved ones at county jails and detention centers. SmartInmate is used for electronic messaging, video visits from home, phone calls, and photo sharing. Creating a SmartInmate account at smartinmate.com is free. You pay only when you use paid services such as remote video visits or phone calls. SmartInmate does not handle commissary orders. For commissary contact the detention facility directly.",

      "How do SmartInmate video visits work? Log in to smartinmate.com and select Visits from the main menu. Choose the incarcerated person and select local on-site visit or remote home visit. Local on-site visits at facility kiosks may be free. Remote visits from home are billed per minute with costs varying by facility. Visits are scheduled in 15 or 30 minute time slots. You must use Google Chrome as your browser. Safari is not compatible with SmartInmate video visits even on Apple devices. Download Google Chrome from the App Store before your first visit. Visits can be scheduled up to 14 days in advance.",

      "How do SmartInmate phone calls work? SmartInmate offers two types of phone accounts. A Prepaid Account is tied to your registered phone number and you deposit funds in advance to receive calls. A PIN Account is owned by the incarcerated person who pays for calls from their own account. Contact Smart Communications at 727-349-1561 to set up a phone account. Phone calls from San Diego County facilities using Smart Communications are free. Contact your specific facility to confirm whether calls are free or charged.",

      "Is SmartInmate legitimate? Yes. SmartInmate is operated by Smart Communications Holding Inc, a legitimate corrections communications company. Smart Communications serves county jails and detention centers across the United States. The website is smartinmate.com and customer care is at 727-349-1561. Common user complaints include session timing issues and billing questions for remote video visits. Report problems immediately after a session with your confirmation number to request a credit.",
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
        available: true,
        description: "SmartInmate offers Prepaid Accounts tied to your phone number and PIN Accounts owned by the incarcerated person. Contact Smart Communications at 727-349-1561 to set up a phone account. San Diego County calls are free. Rates vary by facility.",
        notes: "SmartInmate offers both Prepaid and PIN phone accounts at contracted facilities. Call Smart Communications at 727-349-1561 to confirm phone availability at your specific facility.",
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
      "Phone call availability varies by facility. Confirm with your specific detention center whether SmartInmate handles calls or a separate provider is used.",
      "Less established than JPay or GTL, with fewer years of operational history.",
      "Growing but currently limited coverage means not available at many facilities.",
      "Pricing details require account creation to view in full.",
    ],

    faq: [
      {
        question: "What is SmartInmate?",
        answer: "SmartInmate is an online communication platform operated by Smart Communications that connects families with people in county jails and detention centers. Services include electronic messaging, video visits from home, phone calls, and photo sharing. Create a free account at smartinmate.com. Customer care is available at 727-349-1561.",
      },
      {
        question: "Is SmartInmate legit or a scam?",
        answer: "SmartInmate is a legitimate service operated by Smart Communications Holding Inc, a corrections communications company serving county jails across the United States. The website is smartinmate.com and customer care is at 727-349-1561. Some users report billing issues with remote video visits. Always report problems immediately with your confirmation number to request a credit.",
      },
      {
        question: "Does SmartInmate have an app?",
        answer: "SmartInmate does not have a dedicated mobile app in the traditional sense. You access SmartInmate through a web browser at smartinmate.com. Google Chrome is required on all devices including iPhones and iPads. Safari is not compatible with SmartInmate and will cause problems with video visits and account access. Download Google Chrome from the App Store before your first visit on an Apple device.",
      },
      {
        question: "How do I set up a SmartInmate video visit?",
        answer: "Create a free account at smartinmate.com using Google Chrome. Enter your name, email, and phone number. Search for the incarcerated person at the facility. Select Visits and choose between local on-site or remote home visit. Remote visits are billed per minute. Schedule up to 14 days in advance. You must be at least 18 years old to create an account. Visitors under 17 must have a parent or guardian present during the visit.",
      },
      {
        question: "How much do SmartInmate video visits cost?",
        answer: "Local on-site visits at facility kiosks may be free. Remote video visits from home are billed per minute with costs varying by facility. Polk County jail charges $0.17 per minute for 15-minute sessions. Costs vary by facility contract. Check the specific facility's SmartInmate page for current rates. All billing is handled by Smart Communications at 727-349-1561.",
      },
      {
        question: "What browser do I need for SmartInmate?",
        answer: "Google Chrome is required for all SmartInmate features including video visits. Safari is not compatible with SmartInmate and will cause problems with video visits, account access, and other features. If you are on an iPhone or iPad you must download Google Chrome from the App Store and use it instead of Safari. SmartInmate does not work in Firefox, Edge, or other browsers.",
      },
      {
        question: "How do SmartInmate phone calls work?",
        answer: "SmartInmate offers Prepaid Accounts tied to your phone number where you deposit funds in advance, and PIN Accounts owned by the incarcerated person. Contact Smart Communications at 727-349-1561 to set up a phone account. San Diego County jail phone calls through Smart Communications are free. Contact your specific facility to confirm whether calls are free or charged per minute.",
      },
      {
        question: "What is SmartInmate customer service phone number?",
        answer: "Smart Communications customer care is available at 727-349-1561. You can also contact them through the Contact Us form at smartinmate.com. For facility-specific questions such as visit scheduling or inmate location, contact the detention facility directly. Smart Communications handles billing and technical issues only.",
      },
      {
        question: "Does SmartInmate handle commissary?",
        answer: "No. Smart Communications provides communication services only. SmartInmate does not handle commissary orders, deposits to commissary accounts, or any commissary-related services. For commissary questions contact the detention facility directly.",
      },
      {
        question: "Can SmartInmate messaging reach any jail?",
        answer: "No. SmartInmate only works at facilities where Smart Communications holds the contract. Not all jails use SmartInmate. Common SmartInmate facilities include San Diego County jails, Polk County Florida, Collier County Florida, Pinellas County Florida, and Washoe County Nevada. Always confirm that the specific facility uses Smart Communications before creating an account.",
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
    tagline: "Pigeonly - Photo Printing and Letter Delivery Service for Inmates at Any Facility",
    services: { messaging: true, video: false, photos: true, phone: true, moneyTransfer: false },
    statesCount: 50,
    facilitiesCount: 3000,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "Pigeonly is a photo and letter delivery service that prints and mails your photos and messages directly to inmates as physical mail. Pigeonly works at nearly any facility that accepts mail, making it one of the most universally available inmate communication options.",

    seoTitle: "Pigeonly Review: Photo Printing and Letter Delivery for Inmates at Any Facility",
    seoDescription:
      "Pigeonly guide for families how to upload and send photos and letters to inmates as physical mail at any facility that accepts mail. Works where electronic messaging is not available.",

    website: "https://www.pigeonly.com",
    iosUrl: "https://apps.apple.com/us/app/pigeonly-inmate-mail-calling/id1077048131",
    androidUrl: "https://play.google.com/store/apps/details?id=com.pigeonly.android",

    overview: [
      "Pigeonly is a print-and-deliver service that allows families to upload photos and letters online, and Pigeonly handles printing and mailing them directly to the inmate as physical mail. Because Pigeonly delivers as physical mail rather than electronic messages, it works at nearly any correctional facility that accepts mail, giving it broader reach than most electronic platforms.",

      "Pigeonly is especially useful at facilities that do not offer electronic messaging, or when families want to send physical photos that the inmate can keep. You upload your photo through the Pigeonly website or app, and Pigeonly prints it to facility-compliant specifications and mails it to the correct address.",

      "Pigeonly also offers a phone plan service that provides a local phone number for inmates to call, reducing long-distance charges. The service costs a monthly subscription fee. Pigeonly is not an electronic messaging platform. It does not provide real-time digital communication between families and inmates.",
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
    tagline: "Securus Technologies - Phone Calls, Video Visits and Messaging at 1,200+ County Jails and State Prisons",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 45,
    facilitiesCount: 1200,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "Securus Technologies serves over 1,200 correctional facilities across 45 states, primarily county jails and state prisons. Securus provides phone calls, video visitation, electronic messaging, and money transfers. The free Securus Mobile app is available for iOS and Android.",

    seoTitle: "Securus Technologies Review: Phone Calls, Video Visits and Account Setup Guide",
    seoDescription:
      "Securus Technologies guide for families how to create an account, set up phone calls, schedule video visits, and send money at 1,200+ county jails and state prisons.",

    website: "https://www.securustech.net",
    iosUrl: "https://apps.apple.com/us/app/securus-mobile/id1090154482",
    androidUrl: "https://play.google.com/store/apps/details?id=com.securus.mobile",

    overview: [
      "Securus Technologies is one of the largest inmate communication providers in the United States, serving over 1,200 correctional facilities across 45 states. Securus is especially common at county jails and local detention centers, though it also holds contracts at some state prison facilities. Securus is owned by Aventiv Technologies, the same parent company as JPay.",

      "Securus provides phone calls through a prepaid AdvancePay account system. You fund an account in advance and the per-minute rate is deducted each time the inmate calls your registered phone number. You cannot call the inmate directly. All calls must be initiated by the inmate from a facility phone. Securus phone rates for interstate calls are regulated by the FCC.",

      "Securus also offers video visitation and electronic messaging at facilities that have contracted for these services. The free Securus Mobile app for iOS and Android allows families to manage phone accounts, schedule video visits, and send messages from a smartphone. Check your account dashboard to see which services are available at your specific facility.",
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
    tagline: "GTL ViaPath Technologies - Phone Calls and Video Visits Through ConnectNetwork at 800+ Facilities",
    services: { messaging: false, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 30,
    facilitiesCount: 800,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "GTL, now part of ViaPath Technologies, operates ConnectNetwork and serves over 800 facilities across 30 states. GTL provides phone calls and video visitation at state prisons and county jails. Families access GTL services through the ConnectNetwork website and app.",

    seoTitle: "GTL ViaPath Technologies Review: ConnectNetwork Phone and Video Guide for Families",
    seoDescription:
      "GTL guide for families how GTL relates to ConnectNetwork, how to set up phone calls and video visits, and which facilities use GTL services across 30 states.",

    website: "https://www.viapath.com",
    iosUrl: "https://apps.apple.com/us/app/gtl-connect/id943869522",
    androidUrl: "https://play.google.com/store/apps/details?id=com.gtl.connect",

    overview: [
      "GTL, which stands for Global Tel Link, is now part of ViaPath Technologies and operates ConnectNetwork, the consumer platform families use to manage phone calls, video visits, and money transfers. When you create a ConnectNetwork account, you are accessing GTL infrastructure. GTL serves over 800 facilities across 30 states at state prisons and county jails.",

      "GTL also operates GettingOut through its Telmate subsidiary, which serves county jails with video visitation and messaging. Both ConnectNetwork and GettingOut are GTL services under the ViaPath Technologies umbrella. If your loved one is in a county jail, check GettingOut first. If they are in a state prison or federal facility, use ConnectNetwork.",

      "GTL handles phone calls and video visits at many federal Bureau of Prisons facilities through ConnectNetwork. However, electronic messaging at all federal facilities goes through CorrLinks only, regardless of which company handles phone services. You may need both a ConnectNetwork account and a CorrLinks account if your loved one is in a federal facility.",
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
    tagline: "ICSolutions - Inmate Phone Calls and Communication Services at State and Federal Facilities",
    services: { messaging: true, video: true, photos: false, phone: true, moneyTransfer: true },
    statesCount: 15,
    facilitiesCount: 300,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "ICSolutions provides inmate phone call services at state and federal correctional facilities across the United States. Families set up a prepaid account to receive calls from incarcerated loved ones at facilities served by ICSolutions.",

    seoTitle: "ICSolutions Review: Inmate Phone Call Services at State and Federal Facilities",
    seoDescription:
      "ICSolutions guide for families how to set up a prepaid phone account, register your number, add funds, and receive calls from incarcerated loved ones.",

    website: "https://www.icsolutions.com",
    iosUrl: "https://apps.apple.com/us/app/icsolutions/id899399526",
    androidUrl: "https://play.google.com/store/apps/details?id=com.icsolutions.app",

    overview: [
      "ICSolutions is an inmate telephone service provider operating at state prisons, federal facilities, and county jails across the United States. ICSolutions provides phone call services under contracts with individual facilities and state correctional systems. The company focuses primarily on phone call infrastructure rather than messaging or video services.",

      "To receive calls through ICSolutions, families create a free prepaid account at icsolutions.com, register their phone number, and add funds. When the inmate calls your registered number from the facility phone, the call connects automatically and the per-minute charge is deducted from your balance. ICSolutions interstate call rates are regulated by the FCC.",

      "ICSolutions availability depends on the specific facility contract. Not all facilities use ICSolutions. The provider varies by state and individual facility agreement. Search our facility directory to confirm whether your loved one's facility uses ICSolutions before creating an account. You can also call the facility directly and ask which phone provider they use.",
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
    tagline: "Access Corrections - Inmate Money Deposits and Trust Account Funding at County Jails",
    services: { messaging: false, video: false, photos: false, phone: false, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1500,
    appAvailable: false,
    hasDetailPage: true,

    description:
      "Access Corrections is a money transfer service that allows families to deposit funds directly to inmate trust accounts at county jails and correctional facilities. Access Corrections accepts credit cards, debit cards, and cash deposits at participating locations.",

    seoTitle: "Access Corrections Review: Inmate Money Deposits and Trust Account Funding Guide",
    seoDescription:
      "Access Corrections guide for families how to deposit money to inmate trust accounts at county jails, accepted payment methods, fees, and processing times.",

    website: "https://www.accesscorrections.com",

    overview: [
      "Access Corrections is one of the most widely used inmate money transfer services in the United States, serving county jails and correctional facilities across many states. Families use Access Corrections to deposit money to an inmate trust account, which the inmate can then use for commissary purchases, phone calls, and other approved expenses.",

      "Access Corrections accepts multiple payment methods including credit cards, debit cards, and cash deposits at participating retail locations. Deposits can be made online at accesscorrections.com, through the mobile app, by phone, or in person at a kiosk. Transaction fees vary by facility, payment method, and deposit amount.",

      "Processing times for Access Corrections deposits vary by facility. Most online and kiosk deposits are credited to the inmate account within one to three business days. Always keep your transaction confirmation number until you confirm the funds have been received. Contact Access Corrections customer service with your confirmation number if funds do not arrive within the expected timeframe.",
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
    tagline: "HomeWAV - Video Visitation and Messaging for County Jails Without Travel",
    services: { messaging: true, video: true, photos: true, phone: false, moneyTransfer: false },
    statesCount: 30,
    facilitiesCount: 350,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "HomeWAV provides video visitation and messaging services at county jails, allowing families to connect with incarcerated loved ones from home without traveling to the facility. HomeWAV sessions are scheduled through the website or mobile app.",

    seoTitle: "HomeWAV Review: Video Visitation and Messaging for County Jails From Home",
    seoDescription:
      "HomeWAV guide for families how to schedule video visits from home, send messages, and connect with loved ones in county jails without traveling to the facility.",

    website: "https://www.homewav.com",
    iosUrl: "https://apps.apple.com/us/app/homewav/id980905046",
    androidUrl: "https://play.google.com/store/apps/details?id=com.homewav.mobile",

    overview: [
      "HomeWAV is a video visitation and messaging platform designed for county jails. HomeWAV allows families to schedule and join video visits from home using a smartphone, tablet, or computer, eliminating the need to travel to the facility for every visit. HomeWAV is used at county jails that have contracted for remote video visitation services.",

      "To use HomeWAV, families create a free account at homewav.com or through the HomeWAV mobile app, find their loved one's facility, and schedule a video visit. Sessions are paid in advance and typically last 20 to 30 minutes. All visits are recorded and monitored by facility staff.",

      "HomeWAV also supports electronic messaging at some facilities. Families can send text messages and in some cases photo attachments through the HomeWAV platform. Message delivery times vary by facility review process. Check your HomeWAV account dashboard to see which services are available at your specific facility.",
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
    tagline: "TouchPay - Fast Inmate Trust Account Deposits Available Every Day of the Year",
    services: { messaging: false, video: false, photos: false, phone: false, moneyTransfer: true },
    statesCount: 50,
    facilitiesCount: 1200,
    appAvailable: false,
    hasDetailPage: true,

    description:
      "TouchPay specializes in inmate trust account deposits at county jails and correctional facilities, offering 24-hour processing every day of the year. TouchPay accepts credit and debit card payments online and through kiosks at participating facilities.",

    seoTitle: "TouchPay Review: Fast Inmate Trust Account Deposits Available Every Day",
    seoDescription:
      "TouchPay guide for families how to make fast deposits to inmate trust accounts at county jails, kiosk locations, payment methods, and processing times.",

    website: "https://www.touchpaydirect.com",

    overview: [
      "TouchPay is an inmate money transfer service that specializes in fast deposits to inmate trust accounts at county jails and correctional facilities. TouchPay offers 24-hour processing every day of the year including holidays, which makes it one of the most reliable options when same-day or next-day funding is important.",

      "Families can make deposits through the TouchPay website, the mobile app, by phone, or at TouchPay kiosks located in facility lobbies. Kiosk deposits are often processed faster than online transfers and may have lower transaction fees. TouchPay accepts credit cards and debit cards as payment methods.",

      "TouchPay deposits go directly to the inmate trust account managed by the facility. The inmate can use these funds for commissary purchases, phone call credits, messaging stamps, and other approved expenses. Transaction fees apply and vary by facility and deposit amount. Check the TouchPay website for the current fee schedule before sending funds.",
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
    tagline: "City Tele Coin (CTC): How to Add Money, Set Up Phone Calls and Commissary Deposits",
    services: { messaging: true, video: true, photos: true, phone: true, moneyTransfer: true },
    statesCount: 12,
    facilitiesCount: 180,
    appAvailable: true,
    hasDetailPage: true,

    description:
      "City Tele Coin (CTC) provides inmate phone calls and commissary deposits at county jails across the South and Midwest since 1986. Learn how to add money on the CTC app, make commissary deposits, set up a DirectPay account, and fix common CTC problems. CTC customer service is available at 318-756-1114.",

    seoTitle: "City Tele Coin (CTC): How to Add Money, Set Up Phone Calls and Commissary",
    seoDescription:
      "How to add money on City Tele Coin app, set up CTC inmate phone calls, make commissary deposits at citytelecoin.com. Step-by-step guide for families. CTC customer service: 318-756-1114.",

    website: "https://www.citytelecoin.com",
    iosUrl: "https://apps.apple.com/us/app/citytelecoin/id1436829796",
    androidUrl: "https://play.google.com/store/apps/details?id=com.citytelecoin.mobile",

    overview: [
      "How do I add money to City Tele Coin for an inmate? Visit citytelecoin.com and log in to your account. Select Add Funds, choose the account type (phone account or commissary deposit), enter the amount, and pay by debit card, credit card, or money order. You can also add money through the City Tele Coin mobile app. Search for City Tele-Coin in the iOS App Store or Google Play Store to download it. For live help call CTC customer service at 318-756-1114 between 7 AM and 7 PM Central time seven days a week.",

      "How do I set up a CTC account for the first time? Go to citytelecoin.com and create a free DirectPay account linked to your phone number. Add the facility where your loved one is held by searching the facility name. Add funds via debit card, credit card, or money order. Once your account is funded the inmate can call your registered number directly from facility phones. You can also purchase a prepaid calling card at a CTC lobby kiosk inside the facility if you visit in person. For setup help call 318-756-1114.",

      "What is the difference between a phone account and a commissary deposit at City Tele Coin? The phone account funds are for inmate calls to your registered number. The commissary account goes to the inmate trust account for use at the facility store. These are two separate accounts and funds cannot be transferred between them. Funding the phone account does not fund commissary and vice versa. Always select the correct account type before making a deposit to avoid sending funds to the wrong account.",

      "City Tele Coin has provided inmate telephone services since 1986 and serves county jails and local detention centers primarily in the South and Southeast United States. CTC is a regional provider and its facilities are concentrated in Louisiana, Texas, Tennessee, Alabama, and surrounding states. Unlike larger national providers such as Securus or GTL, CTC is family owned and operated and handles its own programming, installation, and field service in-house without outsourcing. All CTC systems are tested in-house before installation.",
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
