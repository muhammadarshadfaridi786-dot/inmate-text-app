// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type GlossaryCategory =
  | "Communication"
  | "Facility Types"
  | "Finance"
  | "Technology"
  | "Administration"
  | "Providers"

export interface GlossaryTermBasic {
  id: string
  term: string
  slug: string
  definition: string
  category: GlossaryCategory
  featured: boolean
}

export interface GlossaryTermDetail extends GlossaryTermBasic {
  fullExplanation: string[]
  alsoKnownAs?: string[]
  seoTitle?: string
  seoDescription?: string
  relatedTermSlugs: string[]
  relatedProviderSlugs: string[]
  relatedHubs: string[]
  faq: Array<{ question: string; answer: string }>
}

// ─────────────────────────────────────────────────────────────────────────────
// READING TIME UTILITY
// ─────────────────────────────────────────────────────────────────────────────

export function estimateReadingTime(term: GlossaryTermDetail): number {
  const allText = [
    term.definition,
    ...term.fullExplanation,
    ...term.faq.map((f) => `${f.question} ${f.answer}`),
  ]
    .join(" ")
    .trim()
    .split(/\s+/).length
  return Math.max(1, Math.ceil(allText / 200))
}

// ─────────────────────────────────────────────────────────────────────────────
// DETAILED TERM DATA, 15 seeded terms
// ─────────────────────────────────────────────────────────────────────────────

export const TERM_DETAILS: Record<string, GlossaryTermDetail> = {

  "inmate-messaging": {
    id: "term-01",
    term: "Inmate Messaging",
    slug: "inmate-messaging",
    category: "Communication",
    featured: true,
    alsoKnownAs: ["Inmate Email", "Prison Messaging", "Digital Messaging"],

    definition:
      "Inmate messaging is a digital service that lets families and approved contacts send written messages to incarcerated loved ones through a facility-contracted platform such as JPay or CorrLinks.",

    fullExplanation: [
      "Inmate messaging works differently from standard email. Messages are sent through a platform that holds a contract with the correctional facility, not through a regular email inbox. Common platforms include JPay for state prisons, CorrLinks for federal Bureau of Prisons facilities, TextBehind for print-based delivery, and SmartInmate at a smaller network of institutions. Each platform requires an account and uses a stamp or credit system to charge for messages sent.",

      "After you send a message, it goes through a review process before the inmate receives it. Facility staff or an automated system checks the content for prohibited material. This is standard practice across all correctional systems and is disclosed in each platform's terms of service. Delivery typically takes a few hours to one business day. The inmate can reply through the same platform, and their reply goes through the same review process before reaching you.",

      "The platform you need depends on where your loved one is housed. If they are in a state prison, JPay or a similar state-contracted service is most likely the right choice. If they are in a federal Bureau of Prisons facility, CorrLinks is the only approved messaging platform. County jails may use GettingOut or ConnectNetwork. Always confirm the correct platform with the specific facility before creating an account, because accounts are not transferable between platforms.",
    ],

    seoTitle: "What Is Inmate Messaging?: Prison Communication Glossary",
    seoDescription: "Inmate messaging lets families send digital messages to incarcerated loved ones through platforms like JPay and CorrLinks. Learn how it works and what it costs.",

    faq: [
      {
        question: "How do I send a message to someone in prison?",
        answer:
          "First, find out which messaging platform the facility uses. Create an account on that platform and search for your loved one using their inmate ID number and facility name. Purchase messaging credits, then compose and send your first message. The facility reviews communication requests before messages can be exchanged.",
      },
      {
        question: "How long does inmate message delivery take?",
        answer:
          "Most electronic messages are delivered within a few hours to one business day. The delay comes from the review process, where staff or an automated system checks messages before they reach the inmate. Exact delivery times vary by facility and how busy the review queue is.",
      },
      {
        question: "Is inmate messaging private?",
        answer:
          "No. All messages sent through inmate communication platforms are reviewed by facility staff and stored by the platform. You should assume any message you send could be read by correctional staff. This is a standard condition of all inmate communication services.",
      },
      {
        question: "How much does inmate messaging cost?",
        answer:
          "Costs vary by platform. JPay stamps typically cost $0.33 to $0.47 each. CorrLinks charges a small per-message fee against a prepaid account balance. TextBehind charges approximately $0.49 per message. Most platforms require you to purchase credits before sending.",
      },
      {
        question: "Can the inmate respond to my messages?",
        answer:
          "Yes, in most cases. Inmates can reply through the same platform using a kiosk, tablet, or terminal at their facility. Their reply also goes through a review process before reaching you. Some facilities have limited terminal access, which can cause delays in responses.",
      },
    ],

    relatedTermSlugs: ["electronic-messaging", "video-visitation", "inmate-tablet", "inmate-phone-calls"],
    relatedProviderSlugs: ["jpay", "corrlinks", "connectnetwork", "textbehind", "smartinmate"],
    relatedHubs: ["/messaging"],
  },

  "video-visitation": {
    id: "term-02",
    term: "Video Visitation",
    slug: "video-visitation",
    category: "Communication",
    featured: true,
    alsoKnownAs: ["Remote Visit", "Virtual Visit", "Video Call", "Remote Visitation"],

    definition:
      "Video visitation is a scheduled video call service that allows families to see and speak with incarcerated loved ones through a secure platform, without traveling to the correctional facility.",

    fullExplanation: [
      "Video visitation allows you to have a face-to-face conversation with an incarcerated person from home or another approved location. The visit takes place through an app or website provided by a platform the facility has contracted for communication services. Common platforms include GettingOut, ConnectNetwork, and JPay. You schedule a time slot in advance, and both you and the incarcerated person connect at the appointed time.",

      "There are two types of video visits. Remote visits allow the family member to connect from home using a smartphone, tablet, or computer with a camera. On-site visits happen at the facility, where the visitor comes in person and connects through a kiosk or screen inside the building. Remote visits are more convenient for most families and have become more widely available in recent years. Not all facilities offer remote visits, so confirming availability with the specific institution is important before scheduling.",

      "Video visits are typically scheduled in blocks of 20 to 45 minutes depending on facility policy. Most platforms charge per minute, and the cost is deducted from your account balance. You may need to submit a visitor application and be approved before your first visit. The platform and facility both set their own rules about how far in advance you can book, how many visits are allowed per week, and what technical requirements apply.",
    ],

    seoTitle: "What Is Video Visitation?: Prison Communication Glossary",
    seoDescription: "Video visitation lets families connect with incarcerated loved ones through a scheduled video call, without visiting the facility in person. Learn how it works.",

    relatedTermSlugs: ["inmate-messaging", "visitation-rules", "county-jail", "inmate-phone-calls"],
    relatedProviderSlugs: ["gettingout", "connectnetwork", "jpay"],
    relatedHubs: ["/video-calls"],

    faq: [
      {
        question: "Do I need special equipment for a video visit?",
        answer:
          "For remote visits, you need a smartphone, tablet, or computer with a working camera and microphone, plus a stable internet connection. Most platforms have a free app you can download. For on-site visits, the facility provides the equipment and you come in person.",
      },
      {
        question: "How do I schedule a video visit?",
        answer:
          "Create an account on the platform used by the facility. GettingOut, ConnectNetwork, and JPay are the most common. Add your loved one as a contact and complete any required identity verification. Select an open time slot from the visit schedule. Some facilities require a visitor application before your first visit is approved.",
      },
      {
        question: "How much does a video visit cost?",
        answer:
          "Pricing varies by platform and facility. GettingOut typically charges around $0.49 per minute. ConnectNetwork rates vary by facility contract. Many platforms charge by the minute and deduct from your account balance. Some facilities offer free video visits on specific days.",
      },
      {
        question: "Can I use my phone for video visits?",
        answer:
          "Yes. Most video visitation platforms have mobile apps for iOS and Android. GettingOut's app is one of the most widely used and is frequently reviewed as easy to use for mobile video visits.",
      },
      {
        question: "What happens if the connection drops during a visit?",
        answer:
          "Policies vary by facility. Some platforms allow you to reconnect if the call drops unexpectedly. Others end the scheduled visit regardless of disconnections. Check the specific platform and facility policy before your first visit so you know what to expect.",
      },
    ],
  },

  "inmate-phone-calls": {
    id: "term-03",
    term: "Inmate Phone Calls",
    slug: "inmate-phone-calls",
    category: "Communication",
    featured: true,
    alsoKnownAs: ["Prison Phone Calls", "Jail Phone Calls", "Inmate Calls"],

    definition:
      "Inmate phone calls are outgoing calls placed by an incarcerated person from a facility phone system to approved contacts, using a prepaid account managed through a contracted provider such as ConnectNetwork or GettingOut.",

    fullExplanation: [
      "Inmate phone calls work differently from regular phone calls. The incarcerated person places the call from a facility phone or tablet, and you receive it on your phone. You cannot call into a prison or jail directly to reach an inmate. Before an inmate can call you, you typically need to set up a prepaid account with the facility's contracted phone provider so that call charges have a place to be applied.",

      "The most common phone providers in correctional facilities are ConnectNetwork, operated by GTL, and GettingOut, operated by Telmate. To receive calls, you create an account on the provider's platform, add your phone number, and fund the account with a balance. Some providers also offer a collect call option where you pay the charges when you accept the call. Prepaid accounts are generally less expensive and give you more control over spending.",

      "Phone call costs in correctional settings have historically been high. The Federal Communications Commission now regulates interstate call rates to limit per-minute charges for calls crossing state lines. In-state call rates may still vary significantly by contract. Setting up a prepaid account in advance prevents missed calls, since inmates typically only have a limited window of time to use the phone each day. All inmate phone calls are recorded and monitored.",
    ],

    seoTitle: "What Are Inmate Phone Calls?: Prison Communication Glossary",
    seoDescription: "Inmate phone calls are outgoing calls placed by incarcerated people to approved contacts.",

    relatedTermSlugs: ["inmate-account", "money-transfer", "inmate-messaging", "video-visitation"],
    relatedProviderSlugs: ["connectnetwork", "gettingout"],
    relatedHubs: ["/phone-calls"],

    faq: [
      {
        question: "Why can't I call the inmate directly?",
        answer:
          "Correctional facilities do not allow incoming calls to inmates for security reasons. The inmate must initiate the call from a facility phone system. This allows the facility to monitor and record all calls, control call volumes, and manage the approved contact list.",
      },
      {
        question: "How do I set up an account to receive inmate calls?",
        answer:
          "Find out which phone provider the facility uses, then create an account on that platform's website or app. Add your phone number and fund the account with a balance. The inmate's facility and your account number must match for calls to connect. ConnectNetwork and GettingOut are the two most common providers.",
      },
      {
        question: "How much do inmate phone calls cost?",
        answer:
          "Rates vary by provider, facility, and whether the call is in-state or interstate. The FCC caps interstate call rates. Local or in-state rates are less regulated and can be higher. Always check the specific provider's rate schedule for your loved one's facility before funding an account.",
      },
      {
        question: "Are inmate phone calls recorded?",
        answer:
          "Yes. All inmate phone calls are recorded and may be monitored by facility staff. Calls to attorneys may be exempt from recording under attorney-client privilege, but only if the call is made through an approved legal line. Regular calls to family members are always subject to recording.",
      },
      {
        question: "Can I block inmate calls if I do not want to receive them?",
        answer:
          "Yes. Most providers allow you to set a do-not-call option or remove your number from an approved contact list. You can also decline a call by simply not accepting it. Contact the provider directly if you need to prevent calls from reaching your number.",
      },
    ],
  },

  "correctional-facility": {
    id: "term-04",
    term: "Correctional Facility",
    slug: "correctional-facility",
    category: "Facility Types",
    featured: true,
    alsoKnownAs: ["Prison", "Jail", "Detention Center", "Penal Institution", "Penitentiary"],

    definition:
      "A correctional facility is any institution operated by a government agency or private company that houses people who have been arrested, are awaiting trial, or are serving a court-ordered sentence.",

    fullExplanation: [
      "Correctional facility is an umbrella term covering many different types of institutions: federal prisons, state prisons, county jails, private prisons, juvenile detention facilities, and immigration detention centers. Each type operates under different rules, is run by a different level of government, and uses different communication systems. Knowing which type of facility your loved one is in is one of the first things to establish, because it directly affects which communication platforms and services are available.",

      "The three most common categories families encounter are federal prisons, state prisons, and county jails. Federal prisons are operated by the U.S. Bureau of Prisons and hold people convicted of federal crimes. State prisons are operated by state departments of corrections and hold people convicted of state-level felonies with sentences longer than one year. County jails are operated by county sheriff's offices and primarily hold people awaiting trial or serving shorter sentences.",

      "Communication options differ significantly between these facility types. Federal inmates use CorrLinks for electronic messaging and ConnectNetwork for phone calls. State prison inmates commonly use JPay for messaging and money transfers. County jail inmates often use GettingOut or ConnectNetwork. Each facility also sets its own specific rules around visits, phone access, tablet availability, and approved contact lists. The facility's website or intake paperwork is usually the best source for this information.",
    ],

    seoTitle: "What Is a Correctional Facility?: Prison Communication",
    seoDescription: "A correctional facility is any institution housing people under arrest or sentence, including federal prisons, state prisons, and county jails.",

    relatedTermSlugs: ["federal-prison", "state-prison", "county-jail", "inmate-search", "inmate-id-number"],
    relatedProviderSlugs: [],
    relatedHubs: [],

    faq: [
      {
        question: "What is the difference between a jail and a prison?",
        answer:
          "Jails are locally operated, usually by a county sheriff, and hold people awaiting trial or serving short sentences under one year. Prisons are operated by state or federal governments and hold people convicted of more serious crimes serving longer sentences. The distinction matters because jails and prisons use different communication platforms.",
      },
      {
        question: "How do I find out which facility my loved one is in?",
        answer:
          "Use the official inmate search tool for the relevant correctional system. The federal Bureau of Prisons has a free inmate locator at bop.gov. Each state's department of corrections also has its own searchable database. You can also call the arresting agency or the court handling the case if you are unsure where someone was taken.",
      },
      {
        question: "Does facility type affect which communication platform I use?",
        answer:
          "Yes, significantly. Federal inmates use CorrLinks for messaging. State prison inmates most often use JPay. County jail inmates frequently use GettingOut or ConnectNetwork. Using the wrong platform means your account will not connect to your loved one's facility.",
      },
      {
        question: "Can an inmate be transferred to a different facility?",
        answer:
          "Yes. Transfers happen for various reasons including classification changes, overcrowding, medical needs, or court appearances. When an inmate is transferred, the communication platform may change. Always confirm the current facility before adding money or setting up a new communication account.",
      },
      {
        question: "What is a correctional facility number?",
        answer:
          "Each correctional facility has its own official identification code used in government records and inmate databases. This is different from an inmate's personal ID number. When sending money or messages, you typically search by facility name rather than facility number.",
      },
    ],
  },

  "federal-prison": {
    id: "term-05",
    term: "Federal Prison",
    slug: "federal-prison",
    category: "Facility Types",
    featured: true,
    alsoKnownAs: ["Federal Correctional Institution", "FCI", "Federal Penitentiary", "BOP Facility", "USP"],

    definition:
      "A federal prison is a correctional facility operated by the U.S. Bureau of Prisons that houses people convicted of federal crimes and sentenced under federal law.",

    fullExplanation: [
      "Federal prisons are run by the U.S. Bureau of Prisons, a division of the Department of Justice. The BOP operates approximately 120 facilities across the United States, ranging from minimum-security camps to maximum-security penitentiaries. People end up in federal prison when they are convicted of crimes that violate federal law, such as drug trafficking across state lines, bank robbery, wire fraud, and certain firearms offenses. Sentences in federal facilities are generally served without parole under the federal sentencing guidelines.",

      "Communication with federal inmates is handled through a different system than state prisons. Electronic messaging at all BOP facilities goes through CorrLinks, which is the Bureau of Prisons' own messaging platform. Phone calls and video visits are managed through ConnectNetwork. Money transfers for commissary can be made through ConnectNetwork or by money order. There is no JPay access at any federal facility. Families new to the system sometimes set up the wrong account before learning this distinction.",

      "Each federal inmate has a unique BOP register number, which typically looks like eight digits followed by a three-letter district code, for example 12345-678. You will need this number to find your loved one in the BOP online inmate locator, to send messages through CorrLinks, and to make money deposits. The BOP's free inmate locator is available at bop.gov and allows you to search by name or register number to find the current facility.",
    ],

    seoTitle: "What Is a Federal Prison?: Prison Communication Glossary",
    seoDescription: "A federal prison is a BOP facility holding people convicted of federal crimes.",

    relatedTermSlugs: ["correctional-facility", "state-prison", "county-jail", "electronic-messaging", "inmate-id-number"],
    relatedProviderSlugs: ["corrlinks", "connectnetwork"],
    relatedHubs: ["/messaging"],

    faq: [
      {
        question: "What is the Bureau of Prisons?",
        answer:
          "The Bureau of Prisons (BOP) is a federal agency within the U.S. Department of Justice responsible for managing all federal correctional facilities and the people sentenced under federal law. It operates around 120 facilities across the country and sets the rules for communication, visitation, and inmate programs at all of them.",
      },
      {
        question: "How do I send messages to someone in a federal prison?",
        answer:
          "Federal inmates communicate through CorrLinks, the BOP's official electronic messaging system. Create an account at corrlinks.com and wait for the inmate to add you to their approved contact list. The inmate must initiate this process from inside the facility. Once approved, you can exchange messages through the platform.",
      },
      {
        question: "Can I use JPay for a federal inmate?",
        answer:
          "No. JPay does not serve any federal Bureau of Prisons facilities. If you create a JPay account expecting to reach a federal inmate, it will not work. Federal messaging requires a CorrLinks account. Federal phone and video services require a ConnectNetwork account.",
      },
      {
        question: "How do I find which federal prison my loved one is in?",
        answer:
          "Use the BOP's free inmate locator at bop.gov. You can search by first and last name or by BOP register number. The locator shows the current facility, projected release date, and basic inmate information. If the person is not found, they may not yet be in BOP custody or may be listed under a different name.",
      },
      {
        question: "What is a BOP register number?",
        answer:
          "A BOP register number is the unique identifier assigned to every federal inmate. It typically takes the format 12345-678, where the last three digits represent the federal judicial district where the person was sentenced. You need this number to send messages through CorrLinks, to deposit money, and to track the inmate in official databases.",
      },
    ],
  },

  "state-prison": {
    id: "term-06",
    term: "State Prison",
    slug: "state-prison",
    category: "Facility Types",
    featured: true,
    alsoKnownAs: ["State Correctional Facility", "State Penitentiary", "DOC Facility"],

    definition:
      "A state prison is a correctional facility operated by a state government's department of corrections that holds people convicted of state-level felonies serving sentences of more than one year.",

    fullExplanation: [
      "State prisons are managed by each state's department of corrections, commonly abbreviated as DOC. Every U.S. state runs its own prison system with its own rules, communication platforms, and inmate identification numbering system. Someone enters state prison after being convicted of a felony under state law and receiving a sentence longer than one year. The specific DOC number assigned to each inmate varies by state: California uses a CDCR number, New York uses a DIN, and Texas uses a TDCJ number.",

      "Communication at state prisons follows a common pattern, though it varies by state. JPay is contracted with over 35 state departments of corrections for messaging, photo sharing, and money transfers, making it the most widely encountered state prison messaging platform. Phone services at state facilities are often managed by ConnectNetwork or Securus Technologies under separate contracts. Some states have moved to tablet-based communication programs, while others still rely on kiosk terminals. Checking the specific state DOC website confirms which platforms are active for a given facility.",

      "State prisons differ from county jails in an important way that affects communication. If someone is arrested and held while awaiting trial, they are in a county jail. Once convicted and sentenced, they may be transferred to a state prison. This transfer changes the communication platform. A GettingOut account used while your loved one was in county jail will not work at a state prison. After a transfer, families typically need to create new accounts with the state prison's contracted providers.",
    ],

    seoTitle: "What Is a State Prison?: Prison Communication Glossary",
    seoDescription: "A state prison is a DOC-operated facility holding people convicted of state felonies.",

    relatedTermSlugs: ["correctional-facility", "federal-prison", "county-jail", "inmate-messaging", "inmate-id-number"],
    relatedProviderSlugs: ["jpay", "connectnetwork"],
    relatedHubs: ["/messaging"],

    faq: [
      {
        question: "What is the difference between a state prison and a county jail?",
        answer:
          "State prisons hold people convicted of felonies with sentences longer than one year and are run by the state department of corrections. County jails hold people awaiting trial or serving shorter sentences and are run by the county sheriff's office. The distinction matters because each uses different communication platforms.",
      },
      {
        question: "Which messaging platform should I use for state prisons?",
        answer:
          "JPay is the most widely used messaging platform for state prisons, covering over 35 states. However, not every state uses JPay. Check the specific facility or state DOC website to confirm which platform is contracted before creating an account.",
      },
      {
        question: "How do I find what state prison my loved one is in?",
        answer:
          "Each state's department of corrections maintains a free public inmate search tool on its website. Search by name or the inmate's state ID number. If you are not sure which state has custody, start with the state where the person was sentenced.",
      },
      {
        question: "Do state prisons have video visitation?",
        answer:
          "Many state prisons offer video visitation, but it is not universal. Availability depends on the specific facility and whether it has contracted a video platform. JPay, ConnectNetwork, and Securus all offer video products used at state facilities. Check the facility's communication options directly.",
      },
      {
        question: "What is a state inmate ID number?",
        answer:
          "Each state assigns its own identification number to inmates when they enter the DOC system. California uses CDCR numbers, New York uses DIN numbers, and Texas uses TDCJ numbers. The format varies by state. You need this number to find your loved one in the state database and to set up communication accounts.",
      },
    ],
  },

  "county-jail": {
    id: "term-07",
    term: "County Jail",
    slug: "county-jail",
    category: "Facility Types",
    featured: false,
    alsoKnownAs: ["Local Jail", "City Jail", "County Detention Center", "County Detention Facility"],

    definition:
      "A county jail is a local detention facility operated by a county sheriff's office that primarily holds people awaiting trial or serving short sentences of one year or less.",

    fullExplanation: [
      "County jails are run by county sheriff's departments rather than state or federal agencies. They serve two main groups: people who have been arrested and are awaiting trial, called pretrial detainees, and people who have been sentenced and are serving shorter sentences of one year or less. The rules and communication systems at county jails can vary significantly from one county to the next, even within the same state. Population sizes range from small rural facilities to large urban jails holding thousands of people.",

      "GettingOut and ConnectNetwork are the two most common communication platforms at county jails. GettingOut, operated by Telmate, is particularly well known for its video visitation product, which many county jails use for both scheduled in-person kiosk visits and remote video calls from home. ConnectNetwork is widely used for phone calls. Some jails use both platforms under separate contracts: one for video and messaging and another for phone calls.",

      "County jail communication does not carry over to state prison. If your loved one is transferred from a county jail to a state prison after sentencing, your GettingOut or ConnectNetwork account for that jail's specific services will not apply at the new facility. You will likely need to create a new account with the state prison's contracted provider. Any unused balances in your previous account may be refundable. Contact the platform's customer service to ask about refunds after a transfer.",
    ],

    seoTitle: "What Is a County Jail?: Prison Communication Glossary",
    seoDescription: "A county jail is a local facility run by a sheriff's office that holds people awaiting trial or serving short sentences.",

    relatedTermSlugs: ["correctional-facility", "state-prison", "video-visitation", "inmate-messaging"],
    relatedProviderSlugs: ["gettingout", "connectnetwork"],
    relatedHubs: ["/video-calls"],

    faq: [
      {
        question: "What is the difference between a county jail and a state prison?",
        answer:
          "County jails are locally run by a sheriff's office and hold people for shorter periods, usually under one year, often including those awaiting trial. State prisons are run by the state government and hold people serving longer felony sentences. Each uses different communication platforms.",
      },
      {
        question: "Which platform should I use for county jail communication?",
        answer:
          "GettingOut and ConnectNetwork are the two most common platforms at county jails. GettingOut is particularly strong for video visitation. Check the specific jail's website or call the facility to confirm which platforms it uses before creating an account.",
      },
      {
        question: "How long can someone stay in a county jail?",
        answer:
          "There is no fixed limit. Pretrial detainees stay until their case is resolved, which can take weeks, months, or in complex cases, years. People serving sentences in county jail typically serve one year or less. After a guilty verdict or plea, the person may be transferred to state prison to serve a longer sentence.",
      },
      {
        question: "Can I visit someone in a county jail in person?",
        answer:
          "Most county jails allow in-person visits, but the rules vary by facility. Some jails require visitors to be on an approved list in advance. Others allow walk-in visits during scheduled hours. Many jails now offer video visitation as an alternative to in-person visits. Contact the facility to learn the specific rules.",
      },
      {
        question: "Does a GettingOut account work at state prisons?",
        answer:
          "No. GettingOut is a county jail platform and does not serve state prisons. If your loved one is transferred from a county jail to a state prison after sentencing, you will need a new account with the state prison's contracted provider, which is often JPay.",
      },
    ],
  },

  "inmate-account": {
    id: "term-08",
    term: "Inmate Account",
    slug: "inmate-account",
    category: "Finance",
    featured: false,
    alsoKnownAs: ["Trust Fund Account", "Inmate Trust Account", "Prison Account", "DOC Account"],

    definition:
      "An inmate account, also called a trust fund account, is a personal financial account held by the correctional facility on behalf of an incarcerated person that they use to pay for commissary, phone calls, and other approved services.",

    fullExplanation: [
      "When a person enters a correctional facility, the facility creates a financial account in their name to hold any money sent by family or deposited through approved means. This account is sometimes called a trust fund account or inmate trust account. The money belongs to the inmate and can be used to purchase items from the facility commissary, pay for phone call credits, buy messaging stamps, and cover other facility-approved expenses.",

      "Families can add money to an inmate account through several methods depending on the facility and its contracted providers. Common options include sending money through JPay, ConnectNetwork, or Pigeonly using a debit or credit card online, using a money order mailed directly to the facility, or using MoneyGram at a physical retail location. Each method may carry a service fee, and processing times range from a few hours for digital transfers to several business days for money orders.",

      "An inmate account is separate from any bank accounts the person had before incarceration. The facility controls the account during the person's time there and may deduct fees for court-ordered restitution in some jurisdictions. When the person is released, the remaining balance is typically returned by check or loaded onto a release debit card. The exact process depends on the facility and the state.",
    ],

    seoTitle: "What Is an Inmate Account?: Prison Communication Glossary",
    seoDescription: "An inmate account (trust fund account) holds money sent by families for commissary, phone calls, and services. Learn how to send money and what fees to expect.",

    relatedTermSlugs: ["commissary", "money-transfer", "inmate-phone-calls", "inmate-id-number"],
    relatedProviderSlugs: ["jpay", "connectnetwork", "pigeonly"],
    relatedHubs: ["/money-transfer"],

    faq: [
      {
        question: "How do I put money on an inmate's account?",
        answer:
          "Use the platform contracted by the facility for deposits. JPay, ConnectNetwork, and Pigeonly are common options. You can usually send money online by debit or credit card, in person at a MoneyGram location, or by mailing a money order to the facility. You will need the inmate's ID number and the facility name to complete the transfer.",
      },
      {
        question: "How long does it take for a deposit to appear in an inmate account?",
        answer:
          "Digital deposits through platforms like JPay typically process within a few hours to two business days. Money orders mailed to the facility can take several days to a week after arrival to be processed. Timing varies by facility and provider.",
      },
      {
        question: "Are there fees for sending money to an inmate?",
        answer:
          "Yes, most platforms charge a service fee. JPay fees are typically around 2.75% of the amount or a minimum flat fee. Money order fees at the post office or retail store are low but the processing time is slower. Compare the options for your facility to find the most cost-effective method.",
      },
      {
        question: "What can an inmate use their account money for?",
        answer:
          "Inmates can use their account balance to buy items from the facility commissary, pay for phone call credits, purchase messaging stamps, order approved reading material, and cover other facility-sanctioned expenses. The exact list of what is available depends on the facility.",
      },
      {
        question: "What happens to money in an inmate account when they are released?",
        answer:
          "The remaining balance is typically returned to the person upon release, usually by check or loaded onto a release debit card. Any outstanding court-ordered fees or restitution may be deducted first. The process varies by state and facility, so the person should ask facility staff about the release procedure in advance.",
      },
    ],
  },

  "commissary": {
    id: "term-09",
    term: "Commissary",
    slug: "commissary",
    category: "Finance",
    featured: true,
    alsoKnownAs: ["Canteen", "Prison Store", "Jail Store", "Inmate Store"],

    definition:
      "Commissary is an in-facility store available to incarcerated people where they can purchase food, hygiene items, clothing, stationery, and other approved goods using funds from their inmate account.",

    fullExplanation: [
      "Commissary functions as a store inside the correctional facility. Incarcerated people can browse a list of approved items, place orders on a set schedule, and have the items delivered to their housing unit. Common commissary items include snack foods and drinks, shampoo and soap, toothpaste, writing materials, envelopes and stamps, over-the-counter medications, and in some facilities, clothing like socks and undergarments. Selection and prices vary by facility and the contracted commissary vendor.",

      "Orders are typically placed once a week or every two weeks through a paper order form or a kiosk. The cost of the items is deducted directly from the inmate's account. Families cannot purchase commissary items themselves and have them delivered directly to an inmate. The way to support commissary purchases is to add money to the inmate's account, which they then spend at their own discretion during the order window. Some facilities also allow family members to order commissary care packages through an approved third-party vendor.",

      "Commissary plays an important role in daily life inside a facility. Prison meals are often supplemented with commissary snacks and foods. Writing materials like paper and stamps are also purchased through commissary at facilities that have not moved to a fully digital messaging system. Understanding how commissary works helps families decide how much money to send and how often, since orders happen on a set schedule and the balance needs to be available before the order window opens.",
    ],

    seoTitle: "What Is Commissary in Prison?: Prison Communication Glossary",
    seoDescription: "Commissary is an in-facility store where incarcerated people buy food, hygiene items, and stationery using their inmate account. Learn how commissary works.",

    relatedTermSlugs: ["inmate-account", "money-transfer", "inmate-tablet"],
    relatedProviderSlugs: ["jpay", "connectnetwork"],
    relatedHubs: ["/money-transfer"],

    faq: [
      {
        question: "Can families buy commissary items directly for an inmate?",
        answer:
          "Generally, no. Most facilities require inmates to order commissary themselves using their account balance. The standard way families help is by sending money to the inmate's account. Some facilities partner with approved vendors for care packages, which families can order and the vendor ships directly to the facility.",
      },
      {
        question: "What types of items are available at commissary?",
        answer:
          "Typical commissary items include food and snacks, beverages, hygiene products, stationery and writing supplies, postage stamps, over-the-counter medications, and in some facilities, clothing like socks or undergarments. Electronics, phone chargers, and most outside food are not available through commissary.",
      },
      {
        question: "How often can an inmate order from commissary?",
        answer:
          "Order frequency varies by facility. Most facilities allow commissary orders once a week or once every two weeks. The facility sets the schedule, and inmates must place their order during the designated window. Orders placed outside the window are typically held until the next cycle.",
      },
      {
        question: "How much money should I send for commissary?",
        answer:
          "The right amount depends on the inmate's needs and the facility's price list. A typical weekly commissary order might cost $30 to $80 for basic food and hygiene items. Sending an amount that covers the order with a small buffer is a common approach, though this varies widely by person and facility.",
      },
      {
        question: "Does commissary include phone and messaging credits?",
        answer:
          "Not always. In some facilities, phone credits are purchased directly through the commissary system. In others, they are handled separately through a phone provider platform like ConnectNetwork. Messaging stamps may also be purchased through commissary at facilities that have not moved to a fully digital platform. Ask the facility which system they use.",
      },
    ],
  },

  "money-transfer": {
    id: "term-10",
    term: "Money Transfer",
    slug: "money-transfer",
    category: "Finance",
    featured: true,
    alsoKnownAs: ["Inmate Deposit", "Commissary Deposit", "Trust Fund Deposit", "Inmate Money Transfer"],

    definition:
      "A money transfer in the correctional system means sending funds to an incarcerated person's inmate account so they can use the balance for commissary purchases, phone calls, and other approved services.",

    fullExplanation: [
      "Sending money to an incarcerated person is a common need for families and is handled through several methods depending on the facility. The most convenient options are online platforms like JPay, ConnectNetwork, and Pigeonly, which let you transfer money using a debit or credit card from a phone or computer. You will need the inmate's ID number and the facility name to direct the deposit to the correct account.",

      "Money transfers typically carry a service fee. JPay fees are generally around 2.75% of the amount sent or a minimum flat fee, depending on the transfer method and amount. ConnectNetwork has similar structures. Sending a money order directly by mail to the facility is usually the lowest-cost method but also the slowest. Digital transfers process within a few hours to two business days. Money orders can take a week or more after they arrive at the facility.",

      "Before sending money, confirm the exact format of the inmate's ID number and the facility's full official name. Incorrect information can cause the deposit to be delayed or rejected. Most platforms let you save your loved one's information after the first successful transfer, making future deposits faster. Some facilities also have daily or monthly limits on the amount of money that can be deposited.",
    ],

    seoTitle: "What Is an Inmate Money Transfer?: Prison Communication",
    seoDescription: "A money transfer sends funds to an inmate's account for commissary, phone calls, and other services.",

    relatedTermSlugs: ["commissary", "inmate-account", "inmate-phone-calls"],
    relatedProviderSlugs: ["jpay", "connectnetwork", "pigeonly"],
    relatedHubs: ["/money-transfer"],

    faq: [
      {
        question: "What is the easiest way to send money to an inmate?",
        answer:
          "Online platforms like JPay and ConnectNetwork are generally the fastest and most convenient. You can complete a transfer in a few minutes from your phone or computer using a debit or credit card. You need the inmate's ID number and the facility name. First-time users may need to verify their identity before a transfer is processed.",
      },
      {
        question: "What information do I need to send money to an inmate?",
        answer:
          "You will need the inmate's full legal name, their inmate ID number, and the full official name of the facility. The ID number format varies by system: BOP register numbers for federal inmates, state DOC numbers for state inmates. Having this information ready before starting the transfer prevents errors.",
      },
      {
        question: "How long does a money transfer to an inmate take?",
        answer:
          "Digital transfers through JPay or ConnectNetwork typically take a few hours to two business days to appear in the inmate's account. Money orders mailed to the facility can take up to a week or more after arrival to be processed. Processing speed varies by facility and provider.",
      },
      {
        question: "What are the typical fees for sending money to an inmate?",
        answer:
          "Fees vary by platform, transfer method, and amount. JPay typically charges around 2.75% or a minimum flat fee. Sending by money order at a post office has a small face-value fee but avoids platform service charges. Compare the options available for your specific facility to find the best combination of cost and speed.",
      },
      {
        question: "Is there a limit on how much money I can send?",
        answer:
          "Some facilities set daily or monthly caps on deposits to inmate accounts. Limits also vary by platform and may depend on your account verification level. Check the specific facility's rules and the platform's transfer limits before sending a large amount.",
      },
    ],
  },

  "electronic-messaging": {
    id: "term-11",
    term: "Electronic Messaging",
    slug: "electronic-messaging",
    category: "Technology",
    featured: false,
    alsoKnownAs: ["Inmate Email", "Digital Messaging", "Prison Email", "Correctional Messaging"],

    definition:
      "Electronic messaging in the correctional system is a digital service that allows incarcerated people and their approved contacts to exchange written messages through a facility-contracted platform, similar to email but with review and restrictions applied.",

    fullExplanation: [
      "Electronic messaging replaced physical mail as the primary written communication method at many correctional facilities. Instead of mailing a letter, family members log into a messaging platform, type a message, and send it digitally. The message is routed to the facility's system and reviewed before the inmate can read it on a kiosk or tablet. The inmate can write a reply through the same system, which is also reviewed before reaching the family member.",

      "The platform used for electronic messaging depends on the type of facility. At state prisons, JPay is the most widely contracted platform, covering over 35 states. At federal Bureau of Prisons facilities, CorrLinks is the only approved system for all electronic communication. At county jails, availability varies significantly. Smaller or less-resourced facilities may not offer electronic messaging at all, making physical mail the only written communication option.",

      "Electronic messaging is faster than physical mail but is not instant. Most messages are delivered within a few hours to one business day once the review process is complete. The key advantages over physical mail are speed, the ability to include digital photos where the facility permits, and the convenience of managing communication from a phone or computer. The key limitation is that all messages are reviewed by facility staff and can be accessed by correctional officers at any time.",
    ],

    seoTitle: "What Is Electronic Messaging for Inmates?: Prison",
    seoDescription: "Electronic messaging lets families send digital messages to incarcerated loved ones through platforms like JPay and CorrLinks.",

    relatedTermSlugs: ["inmate-messaging", "inmate-tablet", "federal-prison", "state-prison"],
    relatedProviderSlugs: ["corrlinks", "jpay", "textbehind", "smartinmate"],
    relatedHubs: ["/messaging"],

    faq: [
      {
        question: "Is electronic messaging the same as regular email?",
        answer:
          "No. Electronic messaging for inmates uses a closed platform that operates within the correctional system, not through standard email providers like Gmail or Outlook. Messages are reviewed before delivery, require an account on the facility's contracted platform, and are subject to content restrictions. Regular email does not reach inmates.",
      },
      {
        question: "How are electronic messages screened before delivery?",
        answer:
          "After you send a message, it enters a review queue at the facility. Staff or an automated system reads the content and checks it against prohibited content rules. Messages that violate facility rules may be rejected without delivery. Approved messages are then forwarded to the inmate's account on a kiosk or tablet.",
      },
      {
        question: "Which platforms offer electronic messaging?",
        answer:
          "JPay covers messaging at state prisons in over 35 states. CorrLinks is required for all federal Bureau of Prisons facilities. TextBehind offers a print-based alternative that converts messages into physical letters. SmartInmate offers fully digital messaging at a smaller network of facilities.",
      },
      {
        question: "How long do electronic messages take to arrive?",
        answer:
          "Delivery typically takes a few hours to one business day. The review process is the main cause of delay. Some facilities process messages faster than others depending on staffing and review volume.",
      },
      {
        question: "Can I send attachments or photos with electronic messages?",
        answer:
          "Some platforms allow digital photo attachments at participating facilities. JPay supports photo sharing at many of its facilities. CorrLinks does not support photo attachments. TextBehind can include printed photos. Whether photos are allowed depends on the platform and the specific facility's rules.",
      },
    ],
  },

  "inmate-tablet": {
    id: "term-12",
    term: "Inmate Tablet",
    slug: "inmate-tablet",
    category: "Technology",
    featured: false,
    alsoKnownAs: ["Prison Tablet", "JPay Tablet", "Correctional Tablet", "Inmate Device"],

    definition:
      "An inmate tablet is a restricted digital device provided at participating correctional facilities that gives incarcerated people access to messaging, educational content, entertainment, and other approved services.",

    fullExplanation: [
      "Inmate tablets are dedicated devices that look similar to consumer tablets but run restricted software controlled by the facility and its contracted technology provider. JPay is one of the largest providers of inmate tablets in the United States, and their devices are used in facilities across dozens of states. The tablets allow inmates to send and receive messages, listen to music, watch approved videos, and in some cases access educational content or legal resources.",

      "Tablets change how families communicate with incarcerated loved ones. At facilities with tablet programs, inmates can receive messages directly on their device rather than waiting for a shared kiosk terminal to be available. This often means faster replies and a more consistent communication experience. Video visits may also be possible directly from the tablet at some facilities. Families can sometimes purchase music, movies, or other approved content for the tablet through the provider's platform.",

      "Not all facilities have tablet programs, and rules around tablets vary significantly. Some facilities provide tablets at no cost to inmates. Others require the inmate or family to pay a lease or purchase fee. Some content is free, while other items such as music or video are purchased individually. Tablet programs are a relatively recent development in correctional communication, and availability continues to expand as providers negotiate new contracts.",
    ],

    seoTitle: "What Is an Inmate Tablet?: Prison Communication Glossary",
    seoDescription: "An inmate tablet is a restricted device used in correctional facilities for messaging, education, and entertainment.",

    relatedTermSlugs: ["electronic-messaging", "inmate-messaging", "video-visitation", "commissary"],
    relatedProviderSlugs: ["jpay", "smartinmate"],
    relatedHubs: ["/messaging"],

    faq: [
      {
        question: "Can an inmate use a tablet for video calls?",
        answer:
          "At some facilities, yes. Certain tablet programs include video visitation as a feature. Whether this is available depends on the facility contract and the platform. Not all tablet programs include video calling functionality.",
      },
      {
        question: "Who pays for inmate tablets?",
        answer:
          "It depends on the facility. Some correctional systems provide tablets at no cost to inmates as part of their communication and education programs. Others require inmates or their families to pay a device fee or leasing charge. The provider's website or the facility will have the specific terms.",
      },
      {
        question: "Are inmate tablets free?",
        answer:
          "The device itself may be free at some facilities, but content is often purchased separately. Music, movies, and some educational materials are sold through the platform's marketplace. Messaging credits also cost money. The tablet being free does not mean all services on it are free.",
      },
      {
        question: "Can families send content to inmate tablets?",
        answer:
          "Some platforms allow families to purchase and send content to an inmate's tablet account, such as music albums or movies. This is done through the provider's website or app, not by uploading files directly. The available content and purchasing options vary by provider.",
      },
      {
        question: "Do all facilities have tablet programs?",
        answer:
          "No. Tablet programs are available at many facilities but not all. Availability depends on whether the facility has contracted with a tablet provider. Contact the specific facility or check its official communications page to find out whether a tablet program is in place.",
      },
    ],
  },

  "visitation-rules": {
    id: "term-13",
    term: "Visitation Rules",
    slug: "visitation-rules",
    category: "Administration",
    featured: false,
    alsoKnownAs: ["Visiting Rules", "Prison Visit Rules", "Inmate Visit Guidelines", "Visitor Policy"],

    definition:
      "Visitation rules are the policies set by each correctional facility that govern who can visit an incarcerated person, how visits are scheduled, what is required for entry, and how visitors must behave during a visit.",

    fullExplanation: [
      "Every correctional facility sets its own visitation rules, and these rules can differ significantly from one institution to the next. Generally, visitors must be on an approved visitor list before they can visit. Getting on the list requires submitting a visitor application, which involves a background check in many cases. Approval can take days to several weeks. Facilities typically limit how many people can be on an approved visitor list at one time.",

      "In-person visits usually require a government-issued photo ID, adherence to a dress code, and compliance with security procedures including metal detectors and bag inspections. Facilities often prohibit specific items, such as open-toed shoes, underwire garments, or certain clothing colors that might be confused with facility uniforms. Children are generally permitted to visit but may have additional requirements, such as being accompanied by an approved adult guardian.",

      "Remote video visits have become a common alternative to in-person visits at many facilities. The rules for video visits are managed separately through the facility's contracted video platform and do not follow the same dress code or ID requirements as in-person visits. Remote visits still require the family member to be on an approved contact list. Many families use video visits for regular contact and save in-person visits for special occasions, since in-person visits require more planning and may be limited in frequency.",
    ],

    seoTitle: "What Are Prison Visitation Rules?: Prison Communication",
    seoDescription: "Visitation rules set by each correctional facility govern who can visit, how to schedule visits, and what to bring.",

    relatedTermSlugs: ["video-visitation", "county-jail", "state-prison", "federal-prison"],
    relatedProviderSlugs: ["gettingout", "connectnetwork"],
    relatedHubs: ["/video-calls"],

    faq: [
      {
        question: "How do I get on an inmate's approved visitor list?",
        answer:
          "Contact the facility to request a visitor application form. Complete the form with your personal information and submit it as instructed. The facility will conduct a background check and notify you of the decision. Approval timelines vary. Some facilities allow you to submit an application online through their website.",
      },
      {
        question: "What ID do I need to bring for a prison visit?",
        answer:
          "Most facilities require a government-issued photo ID such as a driver's license, state ID card, or passport. Some facilities also accept military IDs. Check with the specific facility in advance, as requirements vary.",
      },
      {
        question: "Can children visit someone in prison?",
        answer:
          "Yes, children can generally visit, but they must be accompanied by an approved adult guardian who is also on the visitor list. The incarcerated person must also agree to allow visits from the child. Some facilities have specific rules about the age of children and how they are supervised during a visit.",
      },
      {
        question: "What are typical dress code rules for prison visits?",
        answer:
          "Common rules include avoiding clothing that matches facility or staff uniform colors, covering the shoulders and knees, not wearing open-toed shoes, and avoiding revealing or transparent clothing. Specific rules vary by facility. Always check the facility's visitor guidelines before your first visit, as a dress code violation can result in being turned away.",
      },
      {
        question: "How far in advance do I need to schedule a visit?",
        answer:
          "Scheduling requirements vary by facility. Some facilities allow walk-in visits during designated hours. Others require reservations made 24 to 72 hours in advance. Video visits typically require advance scheduling through the platform, often 24 hours before the visit. Check the facility's visitation page for its specific booking rules.",
      },
    ],
  },

  "inmate-id-number": {
    id: "term-14",
    term: "Inmate ID Number",
    slug: "inmate-id-number",
    category: "Administration",
    featured: false,
    alsoKnownAs: ["DIN Number", "BOP Register Number", "DOC Number", "CDCR Number", "TDCJ Number", "Inmate Number"],

    definition:
      "An inmate ID number is a unique identification code assigned to a person when they enter the correctional system, used across all facility systems to track their record, location, account information, and communications.",

    fullExplanation: [
      "Every person who enters a correctional facility receives a unique identification number. This number is used across all systems at the facility, including communication platforms, the commissary account, medical records, and official legal documentation. Without the correct inmate ID number, families cannot set up messaging accounts, send money, or find their loved one in an official database.",

      "The format of the ID number differs by system. Federal Bureau of Prisons inmates receive a register number in the format 12345-678, where the last three digits represent the federal judicial district where the person was sentenced. State DOC numbers vary by state. California uses a CDCR number made up of a letter followed by five digits. New York uses a DIN, or Department Identification Number. Texas uses a TDCJ number. Checking the specific state DOC website explains what the number looks like and how to find it.",

      "The best way to find an inmate's ID number is to use the official inmate search tool for the relevant correctional system. The Bureau of Prisons provides a free inmate locator at bop.gov. Each state DOC maintains its own searchable database. If you already know the facility, calling the facility's records office directly can often confirm the ID number quickly. Having the correct format and number saves significant time when setting up communication accounts for the first time.",
    ],

    seoTitle: "What Is an Inmate ID Number?: Prison Communication Glossary",
    seoDescription: "An inmate ID number is a unique code used across all prison systems to identify an incarcerated person.",

    relatedTermSlugs: ["inmate-search", "inmate-account", "federal-prison", "state-prison"],
    relatedProviderSlugs: [],
    relatedHubs: [],

    faq: [
      {
        question: "Where do I find an inmate's ID number?",
        answer:
          "Use the official inmate search tool for the system holding your loved one. The BOP inmate locator at bop.gov displays the register number for federal inmates. State DOC websites have their own search tools that show the state ID number. Court documents, sentencing papers, or the facility's intake records may also include the number.",
      },
      {
        question: "Is a federal inmate's BOP number the same as a state DOC number?",
        answer:
          "No. These are separate numbering systems that do not overlap. A BOP register number is assigned by the federal Bureau of Prisons. State DOC numbers are assigned by each state's corrections department. They use different formats and are not interchangeable.",
      },
      {
        question: "Do I need the inmate ID number to send messages or money?",
        answer:
          "Yes, in most cases. Messaging platforms and money transfer services use the inmate ID number to route your message or deposit to the correct person at the correct facility. Using the wrong number can cause your transaction to fail or go to the wrong account.",
      },
      {
        question: "What is a CDCR number?",
        answer:
          "A CDCR number is the identification number assigned by the California Department of Corrections and Rehabilitation to every inmate in the California state prison system. It typically consists of one letter followed by five digits, such as A12345. You need this number to find someone in the CDCR inmate locator or to send money through JPay in California.",
      },
      {
        question: "What is a BOP register number?",
        answer:
          "A BOP register number is the unique ID assigned by the Bureau of Prisons to every person in federal custody. It usually appears as eight digits followed by a hyphen and three digits representing the sentencing district, for example 12345-678. This number is required to access CorrLinks messaging and to use the BOP's online inmate locator.",
      },
    ],
  },

  "inmate-search": {
    id: "term-15",
    term: "Inmate Search",
    slug: "inmate-search",
    category: "Administration",
    featured: false,
    alsoKnownAs: ["Inmate Locator", "Offender Search", "Inmate Lookup", "Offender Locator"],

    definition:
      "An inmate search is the process of using an official online database or locator tool to find where a specific person is currently incarcerated, including their facility location and basic status information.",

    fullExplanation: [
      "Inmate search tools allow family members, attorneys, and members of the public to look up where a specific person is being held. These tools are provided by government agencies and are generally free to use. The most important first step is knowing whether the person is in federal custody or state custody, because each system uses its own search database. Using a federal search tool to look for someone in a state prison will not return results.",

      "For federal inmates, the Bureau of Prisons maintains a free Inmate Locator at bop.gov. You can search by first and last name or by BOP register number. The locator shows the current facility name and location, the projected release date, and basic inmate information such as age and race. It does not display detailed criminal history or the charges. For state inmates, each state's department of corrections operates its own searchable database, all of which are free and publicly available.",

      "If an inmate does not appear in a search result, there are several possible explanations. The person may have been recently transferred and the database has not yet updated. They may be held in a facility type not covered by the database, such as a private facility, an immigration detention center, or a juvenile facility. The name may also be listed differently in the system, such as a legal name that differs from a preferred name or a nickname. Contacting the arresting jurisdiction or the relevant correctional agency directly is the most reliable way to locate someone who does not appear in online databases.",
    ],

    seoTitle: "What Is an Inmate Search?: Prison Communication Glossary",
    seoDescription: "An inmate search uses an official database to find where someone is incarcerated. Learn how to use the BOP inmate locator and state DOC search tools.",

    relatedTermSlugs: ["inmate-id-number", "correctional-facility", "federal-prison", "state-prison", "county-jail"],
    relatedProviderSlugs: [],
    relatedHubs: [],

    faq: [
      {
        question: "How do I find where an inmate is being held?",
        answer:
          "Start by determining whether the person is in federal or state custody. For federal inmates, use the BOP Inmate Locator at bop.gov. For state inmates, visit the department of corrections website for the state where they were sentenced and use that state's inmate search tool.",
      },
      {
        question: "What information do I need to search for an inmate?",
        answer:
          "You need the person's first and last name as they are listed in the system, or their inmate ID number. Providing the state or system type (federal, specific state) narrows results faster. Some databases also allow filtering by date of birth, which helps distinguish between people with the same name.",
      },
      {
        question: "Is the BOP inmate locator free?",
        answer:
          "Yes. The Bureau of Prisons inmate locator at bop.gov is free to use and does not require an account or registration. It is a public government resource that displays basic information about anyone currently in federal BOP custody.",
      },
      {
        question: "Can I use the federal inmate locator to find someone in state prison?",
        answer:
          "No. The BOP inmate locator only shows people in federal Bureau of Prisons custody. If someone is in a state prison, county jail, or any non-federal facility, they will not appear in the BOP database. You need to use the correct state's DOC search tool or the local county jail's inmate roster.",
      },
      {
        question: "Why might an inmate not show up in a search result?",
        answer:
          "Several reasons are possible. The database may not have updated after a recent transfer or intake. The person may be held in a facility not covered by the public database, such as a private prison or immigration detention center. The name in the system may differ from the name you are searching. Contacting the facility or the arresting agency directly is the most reliable fallback if an online search fails.",
      },
    ],
  },
  "advancepay": {
    id: "term-16",
    term: "AdvancePay",
    slug: "advancepay",
    category: "Communication",
    featured: false,

    definition:
      "AdvancePay is a prepaid collect calling service offered by GTL through ConnectNetwork that allows family members to fund a calling account linked to their phone number so an inmate can call them.",

    fullExplanation: [
      "AdvancePay is a prepaid collect calling service offered by GTL through ConnectNetwork that allows family members to fund a calling account linked to their phone number so an inmate can call them. You deposit money into your AdvancePay account and when the inmate calls your registered number, the cost is deducted from your balance. AdvancePay works with all phone types including cell phones. It is the most common way families receive calls from state prison inmates.",

      "A family member creates a free ConnectNetwork account, adds their phone number, and deposits $25 into their AdvancePay account. When their loved one calls from the facility, the call connects and per-minute charges are deducted from the $25 balance.",
    ],

    faq: [],

    relatedTermSlugs: ["pin-debit", "collect-call", "inmate-phone-calls"],
    relatedProviderSlugs: ["connectnetwork"],
    relatedHubs: [],
  },

  "pin-debit": {
    id: "term-17",
    term: "PIN Debit",
    slug: "pin-debit",
    category: "Communication",
    featured: false,

    definition:
      "PIN Debit is a phone account managed by the inmate rather than the family.",

    fullExplanation: [
      "PIN Debit is a phone account managed by the inmate rather than the family. The inmate uses their personal identification number (PIN) to place calls and the cost is deducted from their own account balance. Family members can deposit money directly into the inmate's PIN Debit account, and the inmate can call any approved number on their facility call list. PIN Debit calls are generally less expensive per minute than collect calls.",

      "A family deposits $20 into their loved one's PIN Debit account through ConnectNetwork. The inmate can then use those funds to call any approved number on their list, not just one designated family phone number.",
    ],

    faq: [],

    relatedTermSlugs: ["advancepay", "collect-call", "approved-contact-list", "inmate-phone-calls"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "collect-call": {
    id: "term-18",
    term: "Collect Call",
    slug: "collect-call",
    category: "Communication",
    featured: false,

    definition:
      "A collect call is a telephone call where the charges are billed to the person receiving the call rather than the person placing it.",

    fullExplanation: [
      "A collect call is a telephone call where the charges are billed to the person receiving the call rather than the person placing it. Prison and jail phone systems historically used collect calls as the primary billing method. Collect calls from correctional facilities typically cannot be accepted on cell phones through most carriers. Setting up an AdvancePay prepaid account is the recommended alternative to collect calls for families with cell phones.",

      "An inmate places a collect call from the facility phone. The family member's landline accepts the call and the per-minute charges appear on their phone bill at the end of the month.",
    ],

    faq: [],

    relatedTermSlugs: ["advancepay", "pin-debit", "inmate-phone-calls"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "inmate-trust-account": {
    id: "term-19",
    term: "Inmate Trust Account",
    slug: "inmate-trust-account",
    category: "Finance",
    featured: false,

    definition:
      "An inmate trust account is the financial account maintained by the correctional facility on behalf of each incarcerated person.",

    fullExplanation: [
      "An inmate trust account is the financial account maintained by the correctional facility on behalf of each incarcerated person. All money deposited by family members, earned from prison jobs, or received from any other source goes into this account. The inmate uses trust account funds to pay for commissary purchases, phone calls, electronic messaging, and other approved expenses. The inmate never handles cash directly.",

      "A family deposits $50 through JPay to their loved one's trust account. The inmate can then spend $30 at commissary and use $20 for phone call minutes purchased through the facility phone system.",
    ],

    faq: [],

    relatedTermSlugs: ["commissary", "jpay-stamps", "money-transfer", "spending-limit"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "booking-number": {
    id: "term-20",
    term: "Booking Number",
    slug: "booking-number",
    category: "Administration",
    featured: false,

    definition:
      "A booking number is the identification number assigned to a person when they are booked into a county jail.",

    fullExplanation: [
      "A booking number is the identification number assigned to a person when they are booked into a county jail. It is specific to that booking and that jail. The booking number is required for county jail communication accounts, money deposits, and mail. It is different from a court case number and different from the state DOC number assigned if the person is later sentenced to state prison.",

      "When someone is arrested and booked at Harris County Jail, they receive a booking number. Family members need this number to set up a Securus account to receive calls and to send money to the jail trust account.",
    ],

    faq: [],

    relatedTermSlugs: ["doc-number", "inmate-id-number", "inmate-search"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "doc-number": {
    id: "term-21",
    term: "DOC Number",
    slug: "doc-number",
    category: "Administration",
    featured: false,

    definition:
      "A DOC number is the identification number assigned by a state Department of Corrections to every person sentenced to state prison.",

    fullExplanation: [
      "A DOC number is the identification number assigned by a state Department of Corrections to every person sentenced to state prison. It is permanent for the duration of the sentence regardless of which facility the person is transferred to. The DOC number is required for state prison communication accounts, money deposits, and mail. Each state uses different terminology such as TDCJ number in Texas, CDCR number in California, MDOC number in Mississippi, and GDC number in Georgia.",

      "When someone is transferred from county jail to a Texas state prison, they receive a TDCJ number. This number must appear on all mail and is required to set up Securus and JPay accounts for that person.",
    ],

    faq: [],

    relatedTermSlugs: ["booking-number", "register-number", "inmate-id-number", "inmate-search"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "register-number": {
    id: "term-22",
    term: "Register Number",
    slug: "register-number",
    category: "Administration",
    featured: false,

    definition:
      "A register number is the identification number assigned by the federal Bureau of Prisons to every person sentenced to federal prison.",

    fullExplanation: [
      "A register number is the identification number assigned by the federal Bureau of Prisons to every person sentenced to federal prison. It consists of eight digits followed by a dash and three more digits. The register number is required to locate a federal inmate using the BOP inmate locator at bop.gov, to set up a CorrLinks account, and to send money to a federal inmate's trust account through MoneyGram or Western Union.",

      "A federal inmate's register number is 12345-678. Family members need this number to find the inmate on bop.gov and to send funds through the BOP approved money transfer methods.",
    ],

    faq: [],

    relatedTermSlugs: ["bop", "doc-number", "booking-number", "inmate-search"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "three-way-calling": {
    id: "term-23",
    term: "Three-Way Calling",
    slug: "three-way-calling",
    category: "Communication",
    featured: false,

    definition:
      "Three-way calling refers to adding a third person to an active phone call, which is strictly prohibited at all correctional facilities.",

    fullExplanation: [
      "Three-way calling refers to adding a third person to an active phone call, which is strictly prohibited at all correctional facilities. Prison phone systems automatically detect and disconnect calls where a third party is added. Attempting three-way calling is a violation of facility rules and can result in the loss of phone privileges. The prohibition exists because three-way calling has been used to make anonymous calls that circumvent monitoring.",

      "A family member receives a call from their incarcerated loved one and attempts to conference in another family member. The system detects the additional connection and immediately disconnects the call. The inmate may receive a conduct violation.",
    ],

    faq: [],

    relatedTermSlugs: ["inmate-phone-calls", "approved-contact-list", "lockdown"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "approved-contact-list": {
    id: "term-24",
    term: "Approved Contact List",
    slug: "approved-contact-list",
    category: "Communication",
    featured: false,

    definition:
      "An approved contact list is the list of people an inmate is authorized to communicate with through phone calls, messages, or visits.",

    fullExplanation: [
      "An approved contact list is the list of people an inmate is authorized to communicate with through phone calls, messages, or visits. Inmates submit the names and contact information of approved contacts, and the facility reviews and approves them before communication can begin. The number of approved contacts is typically limited to 20 or fewer. Family members must be on this list before they can receive calls or exchange messages with an inmate.",

      "When someone arrives at an Indiana state prison, they are allowed to list up to 20 approved phone contacts. A family member not on this list cannot receive calls regardless of whether they have a funded ConnectNetwork account.",
    ],

    faq: [],

    relatedTermSlugs: ["inmate-phone-calls", "three-way-calling", "visitation-rules"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "mail-scanning": {
    id: "term-25",
    term: "Mail Scanning",
    slug: "mail-scanning",
    category: "Communication",
    featured: false,

    definition:
      "Mail scanning is a system where incoming physical mail is intercepted at a central processing facility, scanned digitally, and delivered to the inmate electronically or as a photocopy rather than as the original physical letter.",

    fullExplanation: [
      "Mail scanning is a system where incoming physical mail is intercepted at a central processing facility, scanned digitally, and delivered to the inmate electronically or as a photocopy rather than as the original physical letter. Many state prison systems have adopted mail scanning as a security measure to prevent contraband from entering facilities through mail. Oklahoma, Missouri, North Carolina, and North Dakota are among the states with mail scanning systems.",

      "A family mails a letter to a Missouri state prison. Instead of being delivered physically to the facility, the letter is rerouted to a Securus Digital Mail Center in another city, scanned, and delivered digitally to the inmate's tablet.",
    ],

    faq: [],

    relatedTermSlugs: ["digital-mail", "legal-mail", "contraband"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "digital-mail": {
    id: "term-26",
    term: "Digital Mail",
    slug: "digital-mail",
    category: "Communication",
    featured: false,

    definition:
      "Digital mail is the electronic delivery of letters and photos to inmates through approved platforms, either by family uploading content directly through a service like JPay or Pigeonly, or through a mail scanning system that converts physical mail into digital format.",

    fullExplanation: [
      "Digital mail is the electronic delivery of letters and photos to inmates through approved platforms, either by family uploading content directly through a service like JPay or Pigeonly, or through a mail scanning system that converts physical mail into digital format. Digital mail is delivered to inmate tablets or kiosk terminals. Services like Pigeonly and TextBehind allow families to send digital messages that are printed and delivered as physical letters.",

      "A family uses JPay to send a digital letter and three attached photos to their loved one at a state prison. The message appears on the inmate's JPay tablet within 24 hours after staff review.",
    ],

    faq: [],

    relatedTermSlugs: ["mail-scanning", "emessaging", "legal-mail"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "emessaging": {
    id: "term-27",
    term: "eMessaging",
    slug: "emessaging",
    category: "Communication",
    featured: false,

    definition:
      "eMessaging refers to electronic messaging services available to prison and jail inmates through approved communication platforms such as JPay, CorrLinks, ConnectNetwork, and GettingOut.",

    fullExplanation: [
      "eMessaging refers to electronic messaging services available to prison and jail inmates through approved communication platforms such as JPay, CorrLinks, ConnectNetwork, and GettingOut. Messages are typed by the sender, paid for using stamps or credits, and delivered to the inmate after staff review. The inmate reads messages on a tablet or kiosk terminal and can send replies. eMessaging is typically faster than physical mail but slower than real-time communication.",

      "A family member purchases 10 JPay stamps at approximately $0.40 each and sends a message to their loved one at a state prison. The message is reviewed and delivered within several hours.",
    ],

    faq: [],

    relatedTermSlugs: ["jpay-stamps", "digital-mail", "trulincs"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "pretrial-detention": {
    id: "term-28",
    term: "Pretrial Detention",
    slug: "pretrial-detention",
    category: "Facility Types",
    featured: false,

    definition:
      "Pretrial detention is the holding of a person in custody before their trial or conviction.",

    fullExplanation: [
      "Pretrial detention is the holding of a person in custody before their trial or conviction. People in pretrial detention have not been found guilty and are held either because they cannot afford bail or because a judge determined they pose a flight risk or danger. Most pretrial detainees are held in county jails. Communication rules and provider availability are generally the same as for sentenced inmates at the same facility.",

      "Someone is arrested and unable to post bail. They are held at Miami-Dade County Jail in pretrial detention while awaiting trial. Their family uses Securus for phone calls and GTL for video visits at that facility.",
    ],

    faq: [],

    relatedTermSlugs: ["county-jail", "booking-number"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "halfway-house": {
    id: "term-29",
    term: "Halfway House",
    slug: "halfway-house",
    category: "Facility Types",
    featured: false,

    definition:
      "A halfway house, also called a Residential Reentry Center (RRC), is a transitional facility where people are placed toward the end of their prison sentence to help them reintegrate into the community.",

    fullExplanation: [
      "A halfway house, also called a Residential Reentry Center (RRC), is a transitional facility where people are placed toward the end of their prison sentence to help them reintegrate into the community. Federal inmates are often placed in a halfway house operated by a BOP contract provider in the months before their release date. Communication rules at halfway houses are typically less restrictive than at prisons.",

      "A federal inmate with six months remaining on their sentence is transferred to a Residential Reentry Center in their home city. They have greater freedom to use phones and communicate with family while preparing for full release.",
    ],

    faq: [],

    relatedTermSlugs: ["reentry", "federal-prison", "work-release"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "shu": {
    id: "term-30",
    term: "SHU",
    slug: "shu",
    category: "Facility Types",
    featured: false,

    definition:
      "SHU stands for Special Housing Unit, which is a segregated area of a correctional facility where inmates are held separately from the general population for disciplinary reasons or for their own protection.",

    fullExplanation: [
      "SHU stands for Special Housing Unit, which is a segregated area of a correctional facility where inmates are held separately from the general population for disciplinary reasons or for their own protection. Inmates in the SHU typically have severely restricted communication privileges including limited or no phone calls, no electronic messaging, and only limited mail access. SHU placement significantly reduces or eliminates contact with families.",

      "After a disciplinary incident, an inmate is placed in the SHU for 30 days. During this period, their family receives no phone calls and electronic messaging is suspended. Only legal mail may be received.",
    ],

    faq: [],

    relatedTermSlugs: ["general-population", "lockdown", "contraband"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "general-population": {
    id: "term-31",
    term: "General Population",
    slug: "general-population",
    category: "Facility Types",
    featured: false,

    definition:
      "General population refers to the main housing area of a correctional facility where inmates live and follow the standard daily schedule including meals, recreation, work, and programming.",

    fullExplanation: [
      "General population refers to the main housing area of a correctional facility where inmates live and follow the standard daily schedule including meals, recreation, work, and programming. Communication privileges such as phone calls, messaging, and visits are available to general population inmates subject to facility rules. Being placed in general population means an inmate has the full range of communication options available at that facility.",

      "After completing intake and classification, an inmate is assigned to general population housing. They immediately begin the process of setting up their approved contact list and their family can start receiving calls.",
    ],

    faq: [],

    relatedTermSlugs: ["shu", "lockdown", "approved-contact-list"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "minimum-security": {
    id: "term-32",
    term: "Minimum Security",
    slug: "minimum-security",
    category: "Facility Types",
    featured: false,

    definition:
      "Minimum security is the lowest level of security classification in the correctional system.",

    fullExplanation: [
      "Minimum security is the lowest level of security classification in the correctional system. Minimum security facilities house inmates who pose the lowest risk, have shorter sentences, or have demonstrated good behavior. They have fewer physical restrictions and typically more relaxed communication rules. Federal minimum security facilities are called Federal Prison Camps (FPC).",

      "After serving several years at a medium security facility with good behavior, an inmate is reclassified and transferred to a minimum security Federal Prison Camp where they have more freedom of movement and more flexible communication hours.",
    ],

    faq: [],

    relatedTermSlugs: ["medium-security", "maximum-security", "general-population"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "medium-security": {
    id: "term-33",
    term: "Medium Security",
    slug: "medium-security",
    category: "Facility Types",
    featured: false,

    definition:
      "Medium security is the middle classification level in the correctional system.",

    fullExplanation: [
      "Medium security is the middle classification level in the correctional system. Most state prison inmates are held at medium security facilities. Medium security facilities have more physical controls than minimum security but less than maximum. Communication options including phone calls, messaging, and visits are available subject to facility rules.",

      "Someone convicted of a state felony is classified as medium security and assigned to a state correctional institution. They follow standard communication procedures with phone calls, JPay messaging, and scheduled visiting hours.",
    ],

    faq: [],

    relatedTermSlugs: ["minimum-security", "maximum-security", "general-population"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "maximum-security": {
    id: "term-34",
    term: "Maximum Security",
    slug: "maximum-security",
    category: "Facility Types",
    featured: false,

    definition:
      "Maximum security is the highest standard classification level for correctional facilities, housing inmates who pose the greatest risk or have committed the most serious offenses.",

    fullExplanation: [
      "Maximum security is the highest standard classification level for correctional facilities, housing inmates who pose the greatest risk or have committed the most serious offenses. Communication is more restricted than at lower security levels. Phone call hours may be limited, visitor lists are strictly controlled, and movement within the facility is highly restricted. ADX Florence in Colorado is the federal supermax, which is a step above maximum security.",

      "An inmate classified as maximum security at a state penitentiary has access to phone calls only during designated hours and may have a shorter approved contact list than inmates at lower security levels.",
    ],

    faq: [],

    relatedTermSlugs: ["medium-security", "minimum-security", "shu"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "moneygram": {
    id: "term-35",
    term: "MoneyGram",
    slug: "moneygram",
    category: "Finance",
    featured: false,

    definition:
      "MoneyGram is a money transfer service used to send funds to federal Bureau of Prisons inmate trust accounts and to some state and county facility accounts.",

    fullExplanation: [
      "MoneyGram is a money transfer service used to send funds to federal Bureau of Prisons inmate trust accounts and to some state and county facility accounts. For federal inmates, MoneyGram transfers are sent online or at MoneyGram agent locations such as Walmart and CVS using the inmate's full committed name and register number. MoneyGram transfers to federal accounts typically clear within one to two business days.",

      "A family sends $100 to their loved one at a federal prison using MoneyGram online. They enter the inmate's full committed name and eight-digit register number. The funds clear in the trust account within two business days.",
    ],

    faq: [],

    relatedTermSlugs: ["western-union", "inmate-trust-account", "bop", "money-transfer"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "western-union": {
    id: "term-36",
    term: "Western Union",
    slug: "western-union",
    category: "Finance",
    featured: false,

    definition:
      "Western Union is a money transfer service used to send funds to federal Bureau of Prisons inmate trust accounts and some other facility accounts.",

    fullExplanation: [
      "Western Union is a money transfer service used to send funds to federal Bureau of Prisons inmate trust accounts and some other facility accounts. For federal inmates, Western Union transfers use FBOP as the receive city. Transfers can be made online or at Western Union agent locations. Like MoneyGram, Western Union transfers to federal accounts typically clear within one to two business days.",

      "A family sends funds to their loved one at FCI Cumberland using Western Union online, entering FBOP as the receive city and the inmate's committed name and register number. The funds appear in the trust account within two business days.",
    ],

    faq: [],

    relatedTermSlugs: ["moneygram", "inmate-trust-account", "bop", "money-transfer"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "jpay-stamps": {
    id: "term-37",
    term: "JPay Stamps",
    slug: "jpay-stamps",
    category: "Finance",
    featured: false,

    definition:
      "JPay stamps are virtual credits used to send electronic messages through the JPay platform at state prison facilities.",

    fullExplanation: [
      "JPay stamps are virtual credits used to send electronic messages through the JPay platform at state prison facilities. Each standard text message requires one stamp. Stamps cost between $0.33 and $0.47 each depending on the state. Photo attachments require one additional stamp per image. Stamps are purchased in bundles and do not expire. JPay stamps are only used for messaging and cannot be applied to money transfers or other services.",

      "A family purchases a bundle of 10 JPay stamps at $0.40 each for $4.00. They use one stamp to send a text message and one stamp to attach a photo, using two stamps total for that message.",
    ],

    faq: [],

    relatedTermSlugs: ["emessaging", "inmate-trust-account", "transaction-fee"],
    relatedProviderSlugs: ["jpay"],
    relatedHubs: [],
  },

  "transaction-fee": {
    id: "term-38",
    term: "Transaction Fee",
    slug: "transaction-fee",
    category: "Finance",
    featured: false,

    definition:
      "A transaction fee is a charge applied by a communication or money transfer provider each time a deposit or purchase is made.",

    fullExplanation: [
      "A transaction fee is a charge applied by a communication or money transfer provider each time a deposit or purchase is made. Transaction fees at prison communication providers can range from $2.95 to $11.99 per transaction depending on the provider, payment method, and deposit amount. Mailed money orders typically have lower or no transaction fees compared to online or phone deposits. The FCC has regulated call rates but transaction fees on money transfers remain largely unregulated.",

      "A family deposits $20 to their loved one's JPay account and is charged a $3.99 transaction fee, meaning $23.99 total leaves their account but only $20 reaches the inmate trust account.",
    ],

    faq: [],

    relatedTermSlugs: ["money-transfer", "jpay-stamps", "moneygram"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "spending-limit": {
    id: "term-39",
    term: "Spending Limit",
    slug: "spending-limit",
    category: "Finance",
    featured: false,

    definition:
      "A spending limit is the maximum amount an inmate can spend on commissary purchases within a given time period, typically per week or per month.",

    fullExplanation: [
      "A spending limit is the maximum amount an inmate can spend on commissary purchases within a given time period, typically per week or per month. Spending limits vary by facility and security level. Federal Bureau of Prisons facilities have a standard monthly commissary spending limit of $360. County jails often have lower weekly limits of $50 to $100. Spending limits do not affect how much money can be deposited into the trust account, only how much can be spent at once.",

      "At a federal prison, an inmate has $500 in their trust account but the $360 monthly spending limit means they can only spend $360 at the commissary that month. The remaining $140 carries forward to the next month.",
    ],

    faq: [],

    relatedTermSlugs: ["commissary", "inmate-trust-account", "canteen"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "debit-link": {
    id: "term-40",
    term: "Debit Link",
    slug: "debit-link",
    category: "Finance",
    featured: false,

    definition:
      "Debit Link is the digital currency system used by ViaPath Technologies for tablet-based services at facilities they serve.",

    fullExplanation: [
      "Debit Link is the digital currency system used by ViaPath Technologies for tablet-based services at facilities they serve. One dollar buys 100 link units at a rate of $0.01 per unit. Debit Link funds are used for tablet services including streaming music, games, and ebooks rather than for phone calls or commissary. Debit Link purchases are final and nonrefundable, which is different from phone account funds that may be eligible for refunds.",

      "A family deposits $10 to their loved one's Debit Link account, which converts to 1,000 link units. The inmate uses 500 units to purchase a streaming music subscription on their ViaPath tablet for the month.",
    ],

    faq: [],

    relatedTermSlugs: ["inmate-trust-account", "emessaging", "transaction-fee"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "vinelink": {
    id: "term-41",
    term: "VINELink",
    slug: "vinelink",
    category: "Administration",
    featured: false,

    definition:
      "VINELink is a free national victim notification service that also allows the public to search for inmate status information.",

    fullExplanation: [
      "VINELink is a free national victim notification service that also allows the public to search for inmate status information. It is used in many states as a way to find an inmate's current facility, custody status, and scheduled release date. VINELink is particularly useful in Louisiana and other states where it serves as the primary public inmate search tool. The service also sends automatic notifications when an inmate's status changes.",

      "A Louisiana family uses VINELink at vinelink.vineapps.com to find their loved one's current LDOC facility and confirm which provider to use for phone calls before setting up a Securus account.",
    ],

    faq: [],

    relatedTermSlugs: ["inmate-search", "doc-number"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "bop": {
    id: "term-42",
    term: "BOP",
    slug: "bop",
    category: "Administration",
    featured: false,

    definition:
      "BOP stands for Bureau of Prisons, which is the federal agency that operates all federal correctional facilities in the United States.",

    fullExplanation: [
      "BOP stands for Bureau of Prisons, which is the federal agency that operates all federal correctional facilities in the United States. The BOP is part of the Department of Justice. All BOP facilities use CorrLinks for electronic messaging and ConnectNetwork for phone calls. Money transfers to federal inmates go through MoneyGram or Western Union rather than JPay, which serves state prisons. The BOP inmate locator at bop.gov is used to find any current or former federal inmate.",

      "A family learns their loved one was sentenced to federal prison. They visit bop.gov to find the facility using the inmate locator, then set up CorrLinks for messaging and ConnectNetwork for phone calls since all BOP facilities use these providers.",
    ],

    faq: [],

    relatedTermSlugs: ["federal-prison", "trulincs", "register-number", "moneygram"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "trulincs": {
    id: "term-43",
    term: "TRULINCS",
    slug: "trulincs",
    category: "Communication",
    featured: false,

    definition:
      "TRULINCS stands for Trust Fund Limited Inmate Computer System.",

    fullExplanation: [
      "TRULINCS stands for Trust Fund Limited Inmate Computer System. It is the secure computer network operated by the Federal Bureau of Prisons that gives incarcerated people access to electronic messaging through CorrLinks, along with limited other digital services. Inmates access TRULINCS through secure terminals in their housing units. The TRULINCS system is the infrastructure that powers all CorrLinks federal email communication.",

      "A federal inmate uses a TRULINCS terminal in their housing unit to send a contact request to a family member through CorrLinks. The family member receives an invitation email and creates a free account to begin exchanging messages.",
    ],

    faq: [],

    relatedTermSlugs: ["bop", "federal-prison", "emessaging"],
    relatedProviderSlugs: ["corrlinks"],
    relatedHubs: [],
  },

  "dress-code": {
    id: "term-44",
    term: "Dress Code",
    slug: "dress-code",
    category: "Administration",
    featured: false,

    definition:
      "The visiting dress code is a set of rules governing what clothing visitors may wear to a correctional facility.",

    fullExplanation: [
      "The visiting dress code is a set of rules governing what clothing visitors may wear to a correctional facility. Dress codes exist to distinguish visitors from inmates and prevent the introduction of contraband. Common restrictions include no clothing similar in color to inmate uniforms such as khaki, tan, or orange, no revealing clothing, no open-toed shoes, and no excessive jewelry. Dress code violations are among the most common reasons visitors are turned away.",

      "A visitor arrives at a federal prison wearing khaki pants similar in color to the facility's inmate uniform. The officer at the entrance turns them away. The visitor drives to a nearby store, purchases acceptable clothing, and returns for their visit.",
    ],

    faq: [],

    relatedTermSlugs: ["visitation-rules", "approved-contact-list", "video-visitation"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "attorney-call": {
    id: "term-45",
    term: "Attorney Call",
    slug: "attorney-call",
    category: "Communication",
    featured: false,

    definition:
      "An attorney call is a phone call between an incarcerated person and their legal counsel that is legally protected and not recorded or monitored.",

    fullExplanation: [
      "An attorney call is a phone call between an incarcerated person and their legal counsel that is legally protected and not recorded or monitored. Attorney calls are exempt from the standard recording and monitoring that applies to all other inmate phone calls. For an attorney call to be protected, the attorney's phone number must typically be verified and registered with the facility as a legal contact. Attorney-client privilege applies to these calls.",

      "An inmate's attorney contacts the facility and registers their direct line as a legal number. When the inmate calls that number from the facility phone, the call is not recorded and is protected by attorney-client privilege.",
    ],

    faq: [],

    relatedTermSlugs: ["inmate-phone-calls", "legal-mail", "approved-contact-list"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "legal-mail": {
    id: "term-46",
    term: "Legal Mail",
    slug: "legal-mail",
    category: "Communication",
    featured: false,

    definition:
      "Legal mail is correspondence between an incarcerated person and their attorney, court, or government agency that is protected by attorney-client privilege and handled differently from regular personal mail.",

    fullExplanation: [
      "Legal mail is correspondence between an incarcerated person and their attorney, court, or government agency that is protected by attorney-client privilege and handled differently from regular personal mail. Legal mail is typically opened in the presence of the inmate but not read by staff. In states that have implemented mail scanning systems, legal mail is generally still delivered directly to the facility rather than going through the scanning center.",

      "In Oklahoma, which banned physical mail at state prisons in 2024, legal mail from attorneys is still delivered directly to the facility. Personal mail from family goes to the Dallas processing center for scanning.",
    ],

    faq: [],

    relatedTermSlugs: ["mail-scanning", "digital-mail", "attorney-call"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "work-release": {
    id: "term-47",
    term: "Work Release",
    slug: "work-release",
    category: "Facility Types",
    featured: false,

    definition:
      "Work release is a program that allows incarcerated people nearing the end of their sentence to work at jobs in the community while returning to the facility during non-working hours.",

    fullExplanation: [
      "Work release is a program that allows incarcerated people nearing the end of their sentence to work at jobs in the community while returning to the facility during non-working hours. Work release participants have greater access to phones and communication but still follow facility rules for contact with approved persons. Communication providers vary by the specific work release or community corrections facility.",

      "An inmate with 90 days remaining on their sentence is approved for work release and moved to a community corrections center. They work at a local business during the day and return to the center in the evening where they have regular access to facility phones.",
    ],

    faq: [],

    relatedTermSlugs: ["halfway-house", "reentry", "general-population"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "reentry": {
    id: "term-48",
    term: "Reentry",
    slug: "reentry",
    category: "Administration",
    featured: false,

    definition:
      "Reentry refers to the process of transitioning from incarceration back into the community, including finding housing, employment, and support services.",

    fullExplanation: [
      "Reentry refers to the process of transitioning from incarceration back into the community, including finding housing, employment, and support services. Many correctional facilities offer reentry programs to help prepare incarcerated people for release. Federal inmates often transition through a halfway house (Residential Reentry Center) before full release. Maintaining family communication during incarceration is shown to improve reentry outcomes and reduce recidivism.",

      "Six months before release, a federal inmate begins participating in a reentry program that includes job preparation, housing assistance, and family communication planning. They are later transferred to a Residential Reentry Center near their home community.",
    ],

    faq: [],

    relatedTermSlugs: ["halfway-house", "work-release", "parole"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "parole": {
    id: "term-49",
    term: "Parole",
    slug: "parole",
    category: "Administration",
    featured: false,

    definition:
      "Parole is a form of early release from prison that allows a person to serve the remainder of their sentence under supervision in the community rather than in a facility.",

    fullExplanation: [
      "Parole is a form of early release from prison that allows a person to serve the remainder of their sentence under supervision in the community rather than in a facility. Parolees must follow conditions set by their parole officer and report regularly. Communication restrictions ease significantly after release on parole. The federal system uses supervised release rather than traditional parole. State parole policies and eligibility vary significantly.",

      "After serving two-thirds of a state prison sentence, an inmate is granted parole. They are released from the facility and must report to a parole officer weekly, maintain employment, and avoid contact with prohibited individuals.",
    ],

    faq: [],

    relatedTermSlugs: ["reentry", "probation", "halfway-house"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "probation": {
    id: "term-50",
    term: "Probation",
    slug: "probation",
    category: "Administration",
    featured: false,

    definition:
      "Probation is a form of court-imposed supervision that allows a person to serve their sentence in the community rather than in a correctional facility, subject to conditions set by the court.",

    fullExplanation: [
      "Probation is a form of court-imposed supervision that allows a person to serve their sentence in the community rather than in a correctional facility, subject to conditions set by the court. Probation is typically an alternative to incarceration for first-time or lower-level offenses. Probationers must follow their conditions, report to a probation officer, and may have restrictions on who they can contact.",

      "Instead of prison time, someone convicted of a first-time nonviolent offense is sentenced to three years of probation. They remain at home but must check in with their probation officer monthly and follow all conditions of their sentence.",
    ],

    faq: [],

    relatedTermSlugs: ["parole", "reentry"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "case-manager": {
    id: "term-51",
    term: "Case Manager",
    slug: "case-manager",
    category: "Administration",
    featured: false,

    definition:
      "A case manager is a correctional staff member assigned to each inmate who is responsible for managing their programming, classification, correspondence, and release planning.",

    fullExplanation: [
      "A case manager is a correctional staff member assigned to each inmate who is responsible for managing their programming, classification, correspondence, and release planning. Case managers are the primary point of contact for inmates who need to add someone to their approved contact list, request certified mail approval, or address issues with their communication accounts. Case manager approval is sometimes required for money deposits above certain amounts.",

      "An inmate needs to add a new family member to their approved phone contact list. They submit a request to their case manager, who reviews the application and adds the approved number to the system within a week.",
    ],

    faq: [],

    relatedTermSlugs: ["approved-contact-list", "visitation-rules", "reentry"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "contraband": {
    id: "term-52",
    term: "Contraband",
    slug: "contraband",
    category: "Administration",
    featured: false,

    definition:
      "Contraband is any item that is prohibited inside a correctional facility.",

    fullExplanation: [
      "Contraband is any item that is prohibited inside a correctional facility. Common contraband includes drugs, weapons, unauthorized food, cell phones, and items sent through unapproved channels. Mail scanning and mail bans at many facilities are implemented specifically to prevent contraband from entering through incoming correspondence. Items confiscated as contraband are typically destroyed, and the sender may not receive a refund.",

      "Books sent to a South Carolina state prison after October 2025 through an unapproved vendor are classified as contraband. The books are confiscated and sent to Contraband disposal without a refund to the sender.",
    ],

    faq: [],

    relatedTermSlugs: ["mail-scanning", "legal-mail", "shu", "lockdown"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "lockdown": {
    id: "term-53",
    term: "Lockdown",
    slug: "lockdown",
    category: "Administration",
    featured: false,

    definition:
      "A lockdown is a security measure at a correctional facility where all inmates are confined to their cells and normal activities including phone calls, visits, and programming are suspended.",

    fullExplanation: [
      "A lockdown is a security measure at a correctional facility where all inmates are confined to their cells and normal activities including phone calls, visits, and programming are suspended. Lockdowns are ordered in response to security incidents, counts, emergencies, or disturbances. Families often have no advance notice when a lockdown occurs and may receive no calls during the lockdown period. Lockdowns can last from hours to days.",

      "A family member expects a call from their loved one but receives nothing. They later learn the facility was placed on lockdown following a disturbance and all communication was suspended for 48 hours. Calls resume once normal operations restart.",
    ],

    faq: [],

    relatedTermSlugs: ["shu", "general-population", "inmate-phone-calls"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "canteen": {
    id: "term-54",
    term: "Canteen",
    slug: "canteen",
    category: "Finance",
    featured: false,

    definition:
      "Canteen is an alternative term for commissary used at some correctional facilities, particularly in federal and some state systems.",

    fullExplanation: [
      "Canteen is an alternative term for commissary used at some correctional facilities, particularly in federal and some state systems. The canteen and commissary refer to the same thing , the store inside the facility where inmates purchase items beyond what the institution provides. Some facilities use canteen and commissary interchangeably while others use one term exclusively. Purchases are always paid from the inmate trust account.",

      "At a federal Bureau of Prisons facility, the inmate store is called the commissary in official BOP documents but some staff and inmates refer to it informally as the canteen. Both terms refer to the same place.",
    ],

    faq: [],

    relatedTermSlugs: ["commissary", "inmate-trust-account", "spending-limit"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "gtl": {
    id: "term-55",
    term: "GTL",
    slug: "gtl",
    category: "Providers",
    featured: false,

    definition:
      "GTL stands for Global Tel Link, a telecommunications company founded in 1989 that provides phone, messaging, video, and money transfer services to correctional facilities. GTL rebranded as ViaPath Technologies and operates ConnectNetwork as its consumer platform and GettingOut through its Telmate subsidiary. GTL delivers services to over 1,800 facilities across the United States.",

    fullExplanation: [
      "GTL stands for Global Tel Link, a telecommunications company that is one of the two dominant providers in the prison communication industry alongside Securus Technologies. GTL was founded in 1989 and rebranded as ViaPath Technologies. Its consumer-facing platforms include ConnectNetwork for state prisons and GettingOut through its Telmate subsidiary for county jails.",

      "GTL operates under several brand names that families encounter. ConnectNetwork is the website and app for state prison phone calls and messaging. GettingOut is the app for county jail video visits and messaging. AdvancePay is GTL's prepaid calling product. If your loved one is at a facility served by GTL, you will create an account on one of these platforms depending on which services the specific facility contracts for.",

    ],

    faq: [],

    relatedTermSlugs: ["viapath", "advancepay"],
    relatedProviderSlugs: ["gtl", "connectnetwork", "gettingout"],
    relatedHubs: [],
  },

  "viapath": {
    id: "term-56",
    term: "ViaPath",
    slug: "viapath",
    category: "Providers",
    featured: false,

    definition:
      "ViaPath Technologies is the rebranded name of GTL (Global Tel Link), one of the two largest prison communication companies in the United States. ViaPath operates ConnectNetwork for consumer-facing phone and messaging services and GettingOut through its Telmate subsidiary for county jail video visits. ViaPath lost the California CDCR contract to Securus in 2025.",

    fullExplanation: [
      "ViaPath Technologies is the corporate name under which GTL now operates. The company rebranded from GTL to ViaPath in recent years. ViaPath serves over 1,800 correctional facilities through its ConnectNetwork and GettingOut platforms. New Jersey began transitioning from JPay to ViaPath in 2025, and Ohio previously transitioned from Securus to ViaPath.",

      "The name ViaPath appears in official state DOC communications but families typically interact with the brand through ConnectNetwork at connectnetwork.com or GettingOut at gettingout.com. Customer service for ViaPath can be reached at 877-650-4249.",

    ],

    faq: [],

    relatedTermSlugs: ["gtl", "advancepay"],
    relatedProviderSlugs: ["gtl", "connectnetwork", "gettingout"],
    relatedHubs: [],
  },

  "telmate": {
    id: "term-57",
    term: "Telmate",
    slug: "telmate",
    category: "Providers",
    featured: false,

    definition:
      "Telmate is a subsidiary of GTL ViaPath Technologies that operates the GettingOut platform for county jail video visits, messaging, and phone calls. Telmate holds contracts with over 2,200 county jails across 45 states. If a family member is at a county jail using GettingOut, Telmate is the underlying company operating the service.",

    fullExplanation: [
      "Telmate is the GTL ViaPath subsidiary responsible for the GettingOut app and platform. While families interact with the GettingOut brand, Telmate is the company holding the facility contracts and operating the backend systems. Telmate specializes in county jail communication and has a particularly strong focus on video visitation.",

      "When researching or troubleshooting GettingOut issues, families may encounter the Telmate name in terms of service documents, BBB complaints, or official correspondence. Telmate customer service is accessed through the GettingOut platform at gettingout.com.",

    ],

    faq: [],

    relatedTermSlugs: ["gtl", "viapath"],
    relatedProviderSlugs: ["gettingout", "gtl"],
    relatedHubs: [],
  },

  "securus": {
    id: "term-58",
    term: "Securus Technologies",
    slug: "securus",
    category: "Providers",
    featured: false,

    definition:
      "Securus Technologies is one of the two largest prison communication companies in the United States alongside GTL ViaPath. Securus provides phone calls, video visits, messaging, and digital mail services to over 1,200 correctional facilities across 45 states. Securus was acquired by Aventiv Technologies and also owns JPay. In 2025, Securus won the California CDCR contract worth $315 million replacing ViaPath.",

    fullExplanation: [
      "Securus Technologies serves a large number of county jails and some state prisons with phone calls, video visits, and messaging. Securus and JPay are both owned by Aventiv Technologies. If your loved one is at a county jail, Securus is one of the most likely providers. For state prisons, JPay handles messaging while Securus handles phone calls at many facilities.",

      "Securus customer service is available at 800-844-6591 and at securustech.net. The Securus Mobile app is available for iOS and Android. Common issues families report include video visits failing without refunds and account restrictions after bank chargebacks.",

    ],

    faq: [],

    relatedTermSlugs: ["advancepay", "inmate-phone-calls"],
    relatedProviderSlugs: ["securus"],
    relatedHubs: [],
  },

  "access-corrections": {
    id: "term-59",
    term: "Access Corrections",
    slug: "access-corrections",
    category: "Providers",
    featured: false,

    definition:
      "Access Corrections is a money transfer service operated by Keefe Group that allows families to deposit funds to inmate trust accounts at many correctional facilities. Access Corrections is commonly used at county jails and some state facilities as an alternative or complement to JPay and ConnectNetwork. Deposits can be made online, by phone, or at MoneyGram and Western Union locations.",

    fullExplanation: [
      "Access Corrections is operated by Keefe Group, a company that also provides commissary services to many jails and prisons. Access Corrections specializes in money transfers to inmate accounts and is contracted at numerous county jail facilities. Unlike JPay which also offers messaging, Access Corrections focuses primarily on financial transactions.",

      "When a county jail uses Access Corrections, families deposit funds online at accesscorrections.com, by phone, or at approved retail locations. Always confirm whether a facility uses Access Corrections or another money transfer provider before sending funds.",

    ],

    faq: [],

    relatedTermSlugs: ["money-transfer", "inmate-trust-account", "commissary", "touchpay"],
    relatedProviderSlugs: ["access-corrections"],
    relatedHubs: [],
  },

  "touchpay": {
    id: "term-60",
    term: "TouchPay",
    slug: "touchpay",
    category: "Providers",
    featured: false,

    definition:
      "TouchPay is a money transfer and payment service used at some correctional facilities for depositing funds to inmate accounts. TouchPay is commonly used at county jails and some state facilities. Miami-Dade Corrections uses TouchPay for commissary deposits. TouchPay can be reached at 1-866-232-1899 and provides lobby kiosks at some facilities.",

    fullExplanation: [
      "TouchPay is a financial services company that provides money transfer services to correctional facilities. It is one of several approved deposit providers used at county jails and some state facilities. TouchPay is specifically used at Miami-Dade Corrections in Florida for commissary deposits. TouchPay kiosks are available in the lobbies of some facilities for in-person deposits.",

      "When a facility uses TouchPay, families deposit funds online, by phone at 1-866-232-1899, or at lobby kiosks. Always verify whether TouchPay is the approved provider for your specific facility before sending money to ensure funds reach the correct account.",

    ],

    faq: [],

    relatedTermSlugs: ["money-transfer", "inmate-trust-account", "access-corrections"],
    relatedProviderSlugs: ["touchpay"],
    relatedHubs: [],
  },

  "pigeonly": {
    id: "term-61",
    term: "Pigeonly",
    slug: "pigeonly",
    category: "Providers",
    featured: false,

    definition:
      "Pigeonly is a service that converts digital messages and photos into physical printed letters delivered to inmates through the postal system. Pigeonly has sent over 15 million photos and letters and maintains compliance rules for over 4,000 facilities. Pigeonly offers a free plan for a limited number of monthly communications and paid unlimited plans. It is particularly useful when electronic messaging is not available or when physical mail quality is better.",

    fullExplanation: [
      "Pigeonly works by accepting your digital message or uploaded photos, printing them on physical paper, and mailing them to the facility address on your behalf. This is useful for families at facilities that do not have electronic messaging or where photo quality through digital platforms is poor.",

      "Pigeonly maintains current facility-specific rules including photo restrictions and content guidelines. Their free Forever Free Plan allows a limited number of monthly communications at no charge. Pigeonly recommends sending no more than five photos per envelope unless the facility specifically allows more.",

    ],

    faq: [],

    relatedTermSlugs: ["digital-mail", "mail-scanning", "textbehind"],
    relatedProviderSlugs: ["pigeonly"],
    relatedHubs: [],
  },

  "textbehind": {
    id: "term-62",
    term: "TextBehind",
    slug: "textbehind",
    category: "Providers",
    featured: false,

    definition:
      "TextBehind is a service that converts digital messages and photos into physical printed letters delivered to inmates as standard mail. TextBehind costs approximately $0.49 per page and works at nearly any facility that accepts mail. It is particularly useful at facilities that do not have electronic messaging contracts with major providers like JPay or CorrLinks.",

    fullExplanation: [
      "TextBehind allows families to type messages and upload photos through their website or app, then delivers them as physical printed letters to the facility. Because TextBehind delivers as standard mail rather than through a provider platform, it works at virtually any facility that accepts incoming mail.",

      "TextBehind is a good option when the facility does not have a JPay or ConnectNetwork contract, when electronic messaging is unavailable, or as a supplement to electronic messaging for longer letters or more photos.",

    ],

    faq: [],

    relatedTermSlugs: ["digital-mail", "mail-scanning", "pigeonly"],
    relatedProviderSlugs: ["textbehind"],
    relatedHubs: [],
  },

  "smartinmate": {
    id: "term-63",
    term: "Smart Communications",
    slug: "smartinmate",
    category: "Providers",
    featured: false,

    definition:
      "Smart Communications is a prison communication company that provides phone calls, video visits, messaging, and mail processing services. Smart Communications operates the SmartInmate platform and serves county jails and some state facilities. San Diego County uses Smart Communications for all jail communication including free phone calls. Smart Communications can be reached at 727-349-1561.",

    fullExplanation: [
      "Smart Communications operates the SmartInmate system which bundles phone calls, video visits, electronic messaging, and mail processing under one platform. San Diego County transitioned to Smart Communications and now offers free phone calls to inmates. Calls from San Diego County jails display from the number 727-349-1561 which families should save in their contacts.",

      "Smart Communications serves a smaller number of facilities than Securus or GTL but is notable for its presence in San Diego County and other jurisdictions. If your loved one is in a San Diego County jail, create an account at smartjailmail.com.",

    ],

    faq: [],

    relatedTermSlugs: ["inmate-phone-calls", "video-visitation", "digital-mail"],
    relatedProviderSlugs: ["smartinmate"],
    relatedHubs: [],
  },

  "corrlinks-premier": {
    id: "term-64",
    term: "CorrLinks Premier",
    slug: "corrlinks-premier",
    category: "Communication",
    featured: false,

    definition:
      "CorrLinks Premier is a paid upgrade to the standard free CorrLinks account that adds push notification alerts when a new message arrives from a federal inmate. The standard free account requires the outside contact to log in manually to check for new messages. CorrLinks Premier costs approximately $8 per year. It does not change the messaging system itself, only adds the notification feature.",

    fullExplanation: [
      "The standard CorrLinks account for outside contacts is completely free. The only limitation is that you must log in to corrlinks.com to see if a new message has arrived since no notifications are sent. CorrLinks Premier adds an alert notification so you know immediately when a message comes in without having to check manually.",

      "For families who exchange messages frequently with a federal inmate, CorrLinks Premier at approximately $8 per year can be worth the convenience. For occasional messaging, the free account is sufficient. Contact CorrLinks customer service through corrlinks.com if there are billing issues with a Premier account.",

    ],

    faq: [],

    relatedTermSlugs: ["trulincs", "emessaging"],
    relatedProviderSlugs: ["corrlinks"],
    relatedHubs: [],
  },

  "snap-n-send": {
    id: "term-65",
    term: "Snap n Send",
    slug: "snap-n-send",
    category: "Communication",
    featured: false,

    definition:
      "Snap n Send is a feature within the Securus platform that allows families to send images to incarcerated loved ones. Images are sent digitally and reviewed by facility staff before delivery. Snap n Send is available at Securus-contracted facilities that have enabled the feature. It is an alternative to mailing physical photos.",

    fullExplanation: [
      "Snap n Send is one of several Securus features for sending images to inmates alongside standard photo messaging. Through Snap n Send, families upload images through their Securus account and the images are delivered digitally to the inmate's tablet or kiosk after staff review.",

      "Availability of Snap n Send depends on whether the specific facility has enabled the feature. Check your Securus account dashboard to see which services are available at your loved one's facility before attempting to use Snap n Send.",

    ],

    faq: [],

    relatedTermSlugs: ["digital-mail", "emessaging", "securus"],
    relatedProviderSlugs: ["securus"],
    relatedHubs: [],
  },

  "videogram": {
    id: "term-66",
    term: "VideoGram",
    slug: "videogram",
    category: "Communication",
    featured: false,

    definition:
      "VideoGram is a Securus feature that allows families to send a short pre-recorded video message to an incarcerated loved one. VideoGrams are reviewed by staff before delivery and are viewed by the inmate on their tablet or kiosk. VideoGrams are distinct from live video visits which occur in real time at a scheduled time.",

    fullExplanation: [
      "A VideoGram is a short recorded video that a family member creates and sends through their Securus account. Unlike a live video visit which requires both parties to be available at the same time, a VideoGram is recorded at any time and delivered asynchronously for the inmate to watch when available.",

      "VideoGram availability depends on whether the facility has enabled the feature through Securus. Check your account dashboard for availability. VideoGrams go through staff review before delivery. They are a good option when scheduling a live video visit is difficult.",

    ],

    faq: [],

    relatedTermSlugs: ["video-visitation", "emessaging", "securus"],
    relatedProviderSlugs: ["securus"],
    relatedHubs: [],
  },

  "fcc-rate-cap": {
    id: "term-67",
    term: "FCC Rate Cap",
    slug: "fcc-rate-cap",
    category: "Administration",
    featured: false,

    definition:
      "FCC rate caps are federal limits set by the Federal Communications Commission on how much correctional facilities and their contracted phone providers can charge per minute for inmate phone calls. Under rules effective April 6, 2026, the cap is $0.11 per minute for large prisons and jails, up to $0.18 per minute for the smallest facilities. Video call caps are $0.23 per minute at large facilities.",

    fullExplanation: [
      "The FCC has been regulating prison phone call rates since 2013. The 2025 order, effective April 6, 2026, set interim caps of $0.11 per minute at large prisons and jails, $0.14 at medium facilities, $0.16 at small facilities, and $0.18 at the smallest jails. These are significantly lower than historical rates that often exceeded $1.00 per minute.",

      "These are caps, not fixed rates. Providers can charge less. States that have eliminated call charges entirely such as California, Colorado, Connecticut, Massachusetts, Minnesota, and New York go beyond the FCC caps. The FCC rate caps do not cover transaction fees on money transfers or tablet content purchases.",

    ],

    faq: [],

    relatedTermSlugs: ["inmate-phone-calls", "collect-call", "advancepay"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "approved-vendor": {
    id: "term-68",
    term: "Approved Vendor",
    slug: "approved-vendor",
    category: "Administration",
    featured: false,

    definition:
      "An approved vendor is a company or retailer that a correctional facility has specifically authorized to send publications, packages, or other items to inmates. Facilities typically require that books, magazines, and packages come only from an approved vendor list to prevent contraband from entering through mail. Common approved vendors for books include Amazon and Barnes and Noble online.",

    fullExplanation: [
      "Correctional facilities maintain approved vendor lists for publications and packages. Only items shipped directly from these approved sources are accepted. South Carolina, for example, requires books from Barnes and Noble to be purchased online rather than in-store. Books from unapproved sources are rejected and may be destroyed.",

      "Before sending any book or publication to an inmate, check the facility's approved vendor list. Sending through an unapproved source wastes money as the item is typically rejected or classified as contraband without a refund to the sender.",

    ],

    faq: [],

    relatedTermSlugs: ["contraband", "legal-mail", "mail-scanning"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "count": {
    id: "term-69",
    term: "Count",
    slug: "count",
    category: "Administration",
    featured: false,

    definition:
      "A count is a mandatory security procedure at correctional facilities where all inmates are physically located and accounted for by staff. During count, all activities including phone calls, visits, and movement are suspended until every inmate is accounted for. Counts occur multiple times per day at scheduled intervals. If a count comes up short, a recount is ordered and the facility may enter lockdown until all inmates are located.",

    fullExplanation: [
      "Correctional facilities conduct multiple counts per day to verify the location of every incarcerated person. Count times vary by facility but typically occur in the early morning, afternoon, and evening. During count, phone calls are unavailable which families may notice as a sudden disconnection or inability to receive calls at certain times.",

      "If a family member suddenly stops receiving calls at a previously reliable time, the count schedule may have changed. Count times are not typically published for security reasons. Families learn the rough count schedule through their incarcerated loved ones.",

    ],

    faq: [],

    relatedTermSlugs: ["lockdown", "general-population", "inmate-phone-calls"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "orientation": {
    id: "term-70",
    term: "Orientation",
    slug: "orientation",
    category: "Administration",
    featured: false,

    definition:
      "Orientation is the period after an inmate arrives at a new facility during which they learn the rules, procedures, and available services. During orientation, inmates are typically informed about how to set up phone accounts, add contacts to their approved list, and access available communication services. Families may experience a delay in receiving calls while the inmate completes orientation.",

    fullExplanation: [
      "When someone arrives at a new correctional facility, they go through an orientation period that can last from a few days to several weeks. During this time, communication with family may be limited while the inmate sets up their approved contact list, learns facility rules, and completes any required intake assessments.",

      "If a family does not hear from a loved one shortly after a transfer or initial incarceration, the orientation period is a common reason. The inmate typically sends a letter or card during orientation with their new address and any ID numbers the facility assigned.",

    ],

    faq: [],

    relatedTermSlugs: ["approved-contact-list", "inmate-id-number", "doc-number"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "classification": {
    id: "term-71",
    term: "Classification",
    slug: "classification",
    category: "Administration",
    featured: false,

    definition:
      "Classification is the process by which a correctional system assigns an inmate to a specific security level and facility based on their offense, criminal history, behavior, and other factors. Classification determines whether someone is housed at minimum, medium, or maximum security. The classification level affects communication privileges, visitation rules, and which specific facility the person is assigned to.",

    fullExplanation: [
      "When someone enters the state or federal prison system, they go through a classification process at a reception or diagnostic center. Evaluators assess the nature of the offense, the length of the sentence, prior criminal history, and behavioral risk factors to determine the appropriate security level.",

      "Classification is not permanent. Inmates can be reclassified up or down based on behavior during incarceration. Good behavior over time can result in a lower security classification and potentially a transfer to a less restrictive facility closer to family.",

    ],

    faq: [],

    relatedTermSlugs: ["minimum-security", "medium-security", "maximum-security", "orientation"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "facility-transfer": {
    id: "term-72",
    term: "Facility Transfer",
    slug: "facility-transfer",
    category: "Administration",
    featured: false,

    definition:
      "A facility transfer is when an incarcerated person is moved from one correctional facility to another. Transfers can be within the same system such as from one state prison to another, or between systems such as from county jail to state prison. Communication accounts and balances may or may not transfer depending on whether the new facility uses the same provider. Families should always verify the new facility and provider before funding new accounts.",

    fullExplanation: [
      "Facility transfers are common in the correctional system and happen for many reasons including reclassification, programming needs, facility overcrowding, or disciplinary reasons. When a transfer occurs, families often experience a period of no communication while the inmate is processed at the new facility.",

      "The most important step after a transfer is confirmed is to find out whether the new facility uses the same communication provider. If the provider changes, existing account balances may not transfer. Contact the original provider about refund options and set up new accounts with the new provider as quickly as possible.",

    ],

    faq: [],

    relatedTermSlugs: ["doc-number", "classification", "inmate-search", "orientation"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "residential-reentry-center": {
    id: "term-73",
    term: "Residential Reentry Center",
    slug: "residential-reentry-center",
    category: "Facility Types",
    featured: false,

    definition:
      "A Residential Reentry Center (RRC) is a halfway house operated under contract with the federal Bureau of Prisons where federal inmates serve the final months of their sentence in a community setting. RRCs provide transitional housing and support services to help people prepare for full release. Communication rules at RRCs are generally less restrictive than at federal prisons.",

    fullExplanation: [
      "Federal inmates nearing their release date are often transferred to a Residential Reentry Center in or near their home community. At an RRC, residents typically have greater phone access, may be able to work in the community, and participate in reentry programming.",

      "The length of time spent at an RRC varies by case. Families of federal inmates should contact the case manager as the projected release date approaches to understand whether an RRC placement is planned and which RRC will be used.",

    ],

    faq: [],

    relatedTermSlugs: ["halfway-house", "reentry", "work-release", "bop"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "phone-privilege": {
    id: "term-74",
    term: "Phone Privilege",
    slug: "phone-privilege",
    category: "Communication",
    featured: false,

    definition:
      "Phone privilege refers to an inmate's access to the facility phone system, which can be granted, restricted, or revoked based on behavior and facility rules. Phone access is a privilege rather than a right in correctional facilities. Violations such as attempting three-way calling, using abusive language, or receiving disciplinary sanctions can result in temporary or permanent loss of phone privileges.",

    fullExplanation: [
      "When an inmate loses phone privileges, families receive no advance notice and simply stop receiving calls. Common reasons for phone privilege loss include disciplinary violations, attempted three-way calling, use of profanity or threats during calls, and placement in the SHU or restrictive housing.",

      "If calls suddenly stop with no explanation, the inmate may have lost phone privileges. The only way to find out is for the inmate to send a letter or for the family to contact the facility case manager directly.",

    ],

    faq: [],

    relatedTermSlugs: ["three-way-calling", "shu", "approved-contact-list", "lockdown"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "call-block": {
    id: "term-75",
    term: "Call Block",
    slug: "call-block",
    category: "Communication",
    featured: false,

    definition:
      "A call block is a restriction placed on a specific phone number to prevent an inmate from calling it or to prevent calls from a facility from reaching a specific number. Family members can request call blocks from the phone provider if they do not want to receive calls from a specific inmate or from all facility calls. Facilities can also block numbers for security reasons. Call blocks are typically managed through the phone provider rather than the facility.",

    fullExplanation: [
      "Call blocks work in two directions. An individual can contact the facility's phone provider such as Securus or GTL to request that their number be blocked from receiving any calls from a specific inmate. This is useful in situations involving domestic violence protective orders or unwanted contact.",

      "Facilities also block numbers for security reasons. If a number is associated with known criminal activity or violations of calling rules, the facility may add it to a blocked list. Families can contact the provider to find out whether their number has been blocked and request removal if appropriate.",

    ],

    faq: [],

    relatedTermSlugs: ["phone-privilege", "approved-contact-list", "inmate-phone-calls"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "mail-processing-center": {
    id: "term-76",
    term: "Mail Processing Center",
    slug: "mail-processing-center",
    category: "Communication",
    featured: false,

    definition:
      "A mail processing center is an off-site facility where incoming inmate mail is sent for scanning and digital conversion before delivery. Several state prison systems use centralized mail processing centers rather than delivering physical mail directly to facilities. North Dakota uses a Securus Digital Mail Center in Tampa Florida. Oklahoma routes all non-legal mail to a Dallas Texas processing center. Missouri routes personal mail to a Securus digital mail center.",

    fullExplanation: [
      "When a state uses a mail processing center, families must address mail to the processing center address rather than the prison address. Mail sent directly to the prison is rejected and returned. The processing center scans the letter and delivers it digitally to the inmate's tablet or as a photocopy.",

      "Mail processing center addresses vary by state and provider. Check the specific state DOC website or the facility directly for the current mailing address before sending any correspondence. Using an outdated address causes mail to be returned or lost.",

    ],

    faq: [],

    relatedTermSlugs: ["mail-scanning", "digital-mail", "legal-mail", "contraband"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "release-date": {
    id: "term-77",
    term: "Release Date",
    slug: "release-date",
    category: "Administration",
    featured: false,

    definition:
      "A release date is the date on which an incarcerated person is scheduled to be released from custody. Release dates can be projected (estimated) or confirmed based on sentence calculations, good time credits, and parole decisions. Federal inmate release dates are publicly available through the BOP inmate locator at bop.gov. State inmate release information varies by state and may be found through the state DOC offender search.",

    fullExplanation: [
      "Release dates in the federal system are calculated based on the sentence imposed, time served, and good time credits earned. Federal inmates generally earn 54 days of good time credit per year. The BOP inmate locator shows a projected release date that updates as credits are earned.",

      "For state inmates, release date information varies by state. Some states make projected release dates publicly available through their offender search tools while others restrict this information. Parole board decisions can change release dates for those serving indeterminate sentences.",

    ],

    faq: [],

    relatedTermSlugs: ["parole", "reentry", "halfway-house", "inmate-search"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "good-time-credit": {
    id: "term-78",
    term: "Good Time Credit",
    slug: "good-time-credit",
    category: "Administration",
    featured: false,

    definition:
      "Good time credit is a reduction in the length of a prison sentence earned by an inmate for good behavior and program participation. In the federal system, inmates can earn up to 54 days of good time credit per year of sentence imposed under the First Step Act. Good time credits accumulate over the sentence and reduce the projected release date. State good time credit policies vary significantly.",

    fullExplanation: [
      "Good time credits are one of the primary ways incarcerated people can reduce their time in custody. Federal inmates earn 54 days per year of sentence imposed, calculated annually. The First Step Act passed in 2018 increased good time credits from the previous 47 days per year.",

      "State good time credit policies vary widely. Some states offer day-for-day good time where one day of good behavior reduces the sentence by one day. Others offer partial credits. Some offenses are not eligible for good time reductions. Check the specific state DOC policies for accurate information.",

    ],

    faq: [],

    relatedTermSlugs: ["release-date", "parole", "reentry"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "first-step-act": {
    id: "term-79",
    term: "First Step Act",
    slug: "first-step-act",
    category: "Administration",
    featured: false,

    definition:
      "The First Step Act is a federal criminal justice reform law signed in 2018 that made significant changes to federal sentencing and prison policies. Key provisions include increasing good time credits from 47 to 54 days per year, creating earned time credit programs for program participation, and expanding eligibility for elderly and terminally ill inmate compassionate release. The law affects federal inmates only and does not apply to state prisons.",

    fullExplanation: [
      "The First Step Act was a bipartisan criminal justice reform that passed Congress in 2018 and was signed into law. For federal inmates and their families, the most significant impact is the increase in good time credits which reduces time served for eligible inmates.",

      "Beyond good time credits, the First Step Act created Earned Time Credits where federal inmates can earn additional reductions by participating in approved programming and productive activities. These credits can be used toward early placement in a halfway house or on home confinement.",

    ],

    faq: [],

    relatedTermSlugs: ["good-time-credit", "release-date", "bop", "halfway-house"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "compassionate-release": {
    id: "term-80",
    term: "Compassionate Release",
    slug: "compassionate-release",
    category: "Administration",
    featured: false,

    definition:
      "Compassionate release is a provision that allows early release from prison for inmates with extraordinary and compelling circumstances such as terminal illness, debilitating medical conditions, or advanced age. Federal compassionate release is administered by the BOP under 18 U.S.C. 3582(c)(1)(A). The First Step Act allowed inmates to petition courts directly for compassionate release if the BOP does not act on a request within 30 days.",

    fullExplanation: [
      "Compassionate release allows courts to reduce a federal sentence when extraordinary circumstances exist. Qualifying circumstances include terminal illness with a life expectancy of 18 months or less, serious medical conditions that substantially diminish the ability to provide self-care, and age combined with time served.",

      "The process begins with a request to the BOP Warden. If the BOP does not act within 30 days, the inmate can petition the sentencing court directly under the First Step Act. Family members often play an important role by providing letters of support and a release plan to the court.",

    ],

    faq: [],

    relatedTermSlugs: ["first-step-act", "bop", "release-date", "reentry"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "protective-custody": {
    id: "term-81",
    term: "Protective Custody",
    slug: "protective-custody",
    category: "Facility Types",
    featured: false,

    definition:
      "Protective custody is a form of administrative segregation where an inmate is separated from the general population for their own safety. Unlike disciplinary segregation in the SHU, protective custody is not a punishment. Inmates in protective custody may have similar communication restrictions as those in the SHU, with limited phone access and fewer visits. Common reasons for protective custody include threats from other inmates, gang-related safety concerns, and cooperation with law enforcement.",

    fullExplanation: [
      "Protective custody can be voluntary when an inmate requests it for their own safety, or involuntary when the facility places an inmate there based on a safety assessment. Communication restrictions in protective custody vary by facility but are generally more limited than general population.",

      "Families may notice reduced or eliminated calls if their loved one is placed in protective custody. The inmate may not be able to explain the reason for restricted communication. Families can contact the case manager to understand the general situation without receiving specific details.",

    ],

    faq: [],

    relatedTermSlugs: ["shu", "general-population", "phone-privilege", "lockdown"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "recidivism": {
    id: "term-82",
    term: "Recidivism",
    slug: "recidivism",
    category: "Administration",
    featured: false,

    definition:
      "Recidivism refers to the tendency of a formerly incarcerated person to reoffend and return to prison. Research consistently shows that maintaining family contact during incarceration significantly reduces recidivism rates. This is a key argument used by advocates for free prison phone calls and improved communication access. Studies show that incarcerated people who maintain strong family bonds are less likely to return to prison after release.",

    fullExplanation: [
      "Recidivism is measured in different ways but typically refers to rearrest, reconviction, or reincarceration within a specified period after release. The Bureau of Justice Statistics tracks recidivism rates nationally.",

      "The link between family communication and reduced recidivism is well documented. Families who stay connected through calls, visits, and messages help incarcerated people maintain community ties and accountability. This evidence base supports advocacy for reduced-cost or free communication as a public safety measure.",

    ],

    faq: [],

    relatedTermSlugs: ["reentry", "parole", "good-time-credit"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "inmate-calling-service": {
    id: "term-83",
    term: "Inmate Calling Service",
    slug: "inmate-calling-service",
    category: "Communication",
    featured: false,

    definition:
      "Inmate Calling Service (ICS) is the industry term for the telephone service provided to correctional facilities for inmate-initiated outgoing calls. ICS providers hold exclusive contracts with facilities and are regulated by the FCC. Major ICS providers include Securus Technologies, GTL ViaPath, and ICSolutions. The FCC has jurisdiction over interstate ICS rates and has implemented rate caps effective April 2026.",

    fullExplanation: [
      "The Inmate Calling Service industry has historically been characterized by very high per-minute rates due to exclusive contracts and the captive nature of the market. The FCC began regulating ICS rates in 2013 following advocacy by families and reform organizations.",

      "ICS providers pay commissions to correctional facilities in exchange for exclusive contracts, which has been identified as a contributor to high rates. The FCC 2025 interim rules capped rates at $0.11 per minute for large prisons and jails. Additional FCC rulemaking is ongoing to set permanent rate caps.",

    ],

    faq: [],

    relatedTermSlugs: ["fcc-rate-cap", "inmate-phone-calls", "collect-call", "advancepay"],
    relatedProviderSlugs: ["securus", "gtl", "icsolutions"],
    relatedHubs: [],
  },

  "worth-rises": {
    id: "term-84",
    term: "Worth Rises",
    slug: "worth-rises",
    category: "Administration",
    featured: false,

    definition:
      "Worth Rises is a nonprofit advocacy organization focused on ending the exploitation of incarcerated people and their families by the prison industry. Worth Rises produces research and policy advocacy on prison phone rates, commissary pricing, and other issues that affect families. Their annual reports track which states offer free calls and document the financial burden of prison communication on families.",

    fullExplanation: [
      "Worth Rises was founded to advocate for the abolition of for-profit prison services that burden incarcerated people and their families. The organization produces widely cited research on prison phone call costs, including estimates that free call programs save Massachusetts families an average of $1,801 per year.",

      "Worth Rises maintains the Free Calls Coalition, tracks legislation related to prison communication costs, and provides advocacy tools for families and organizations working on these issues. Their website at worthrises.org provides current information on which states have free call programs.",

    ],

    faq: [],

    relatedTermSlugs: ["fcc-rate-cap", "recidivism", "reentry"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "prison-policy-initiative": {
    id: "term-85",
    term: "Prison Policy Initiative",
    slug: "prison-policy-initiative",
    category: "Administration",
    featured: false,

    definition:
      "Prison Policy Initiative (PPI) is a nonprofit research organization that produces data and analysis on mass incarceration and its effects on communities and families. PPI maintains a mail scanning appendix tracking which states use mail scanning systems, tracks postcard-only mail restrictions, and produces research on prison phone costs and communication barriers. Their website at prisonpolicy.org is a key resource for families seeking current information on state policies.",

    fullExplanation: [
      "Prison Policy Initiative was founded in 2001 and is known for producing detailed research reports on mass incarceration. For families navigating prison communication, PPI is particularly useful for its mail policy tracking which documents which states have implemented mail scanning, where processing centers are located, and which counties have postcard-only restrictions.",

      "PPI also tracks county jail policies and produces the widely cited Whole Pie report annually documenting the full scope of incarceration in the United States. Families can use PPI's resources at prisonpolicy.org to find current state and county-level policy information.",

    ],

    faq: [],

    relatedTermSlugs: ["mail-scanning", "digital-mail", "recidivism"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "aventiv": {
    id: "term-86",
    term: "Aventiv Technologies",
    slug: "aventiv",
    category: "Providers",
    featured: false,

    definition:
      "Aventiv Technologies is the parent company of both Securus Technologies and JPay, two of the largest prison communication companies in the United States. Aventiv was formed as a holding company to own these subsidiaries. Because both Securus and JPay are owned by Aventiv, they share corporate leadership while operating as separate platforms facing different markets.",

    fullExplanation: [
      "Aventiv Technologies acquired both Securus and JPay, making it one of the dominant forces in the prison communication industry. Despite being owned by the same parent company, Securus and JPay operate as separate platforms with different products. Securus focuses on phone calls and video, while JPay focuses on messaging, money transfers, and tablet services.",

      "Aventiv has faced regulatory and consumer protection scrutiny. In November 2024, the FCC ordered GTL ViaPath to pay $3 million in penalties for consumer protection violations. Families dealing with JPay or Securus billing issues may find that the same corporate leadership oversees both.",

    ],

    faq: [],

    relatedTermSlugs: ["securus", "fcc-rate-cap"],
    relatedProviderSlugs: ["securus", "jpay"],
    relatedHubs: [],
  },

  "keefe-group": {
    id: "term-87",
    term: "Keefe Group",
    slug: "keefe-group",
    category: "Providers",
    featured: false,

    definition:
      "Keefe Group is a company that provides commissary services and money transfer services to correctional facilities through its Access Corrections platform. Keefe operates commissary stores at many jails and prisons, supplying the products that inmates purchase. Keefe's Access Corrections service allows families to deposit money into inmate accounts at facilities where Keefe holds the commissary contract.",

    fullExplanation: [
      "Keefe Group is one of the largest commissary providers in the correctional industry, supplying goods and operating commissary stores at many facilities. When a facility uses Keefe for commissary, families typically use Access Corrections for money deposits.",

      "Keefe and its subsidiary Access Corrections are separate from the phone and messaging providers. A facility can use Keefe for commissary and Securus for phone calls, requiring families to use different platforms for different services.",

    ],

    faq: [],

    relatedTermSlugs: ["commissary", "access-corrections", "inmate-trust-account"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "cop-out": {
    id: "term-88",
    term: "Cop Out",
    slug: "cop-out",
    category: "Administration",
    featured: false,

    definition:
      "A cop out is informal prison slang for an inmate request form submitted to staff to ask for specific actions, information, or services. Inmates use cop outs to request changes to their phone list, ask case managers for information, request medical appointments, and communicate needs to facility staff. The term is widely used in federal and state correctional facilities.",

    fullExplanation: [
      "The cop out form is the standard internal communication tool for inmates to make official requests to facility staff. When an inmate wants to add a new contact to their phone list, request a special visit, or ask a question of their case manager, they typically do so through a cop out form.",

      "Families can help by ensuring their loved one knows to submit cop outs for communication-related requests such as adding phone numbers to the approved list or reporting account issues. Responses to cop outs can take days to weeks depending on the facility and the nature of the request.",

    ],

    faq: [],

    relatedTermSlugs: ["approved-contact-list", "case-manager", "phone-privilege"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "hold": {
    id: "term-89",
    term: "Hold",
    slug: "hold",
    category: "Finance",
    featured: false,

    definition:
      "A hold in the correctional finance context refers to a restriction placed on an inmate's trust account funds. Holds can be placed for several reasons including outstanding court costs, restitution obligations, medical co-pay debts, or facility-specific fines. When a hold is placed, incoming deposits may be partially or fully applied to the hold before the inmate can access the funds for commissary or other expenses.",

    fullExplanation: [
      "Holds on inmate trust accounts mean that money deposited by family does not go directly to the inmate's available balance. Instead, some or all of the deposit is applied to the outstanding debt first. Families can be frustrated when they deposit money and the inmate reports not receiving the full amount.",

      "Common types of holds include court-ordered restitution, victim fees, court costs, medical co-pay debts, and disciplinary fines. Some holds are mandatory while others can potentially be negotiated. Contact the facility's trust fund or business office for information about specific holds on an account.",

    ],

    faq: [],

    relatedTermSlugs: ["inmate-trust-account", "commissary", "spending-limit"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "restitution": {
    id: "term-90",
    term: "Restitution",
    slug: "restitution",
    category: "Administration",
    featured: false,

    definition:
      "Restitution is a court-ordered payment that an incarcerated person must make to their victim or victims to compensate for harm caused by their crime. Restitution obligations continue during and after incarceration. Correctional facilities deduct a percentage of inmate earnings and sometimes of deposits to apply toward restitution. Outstanding restitution can affect parole eligibility and release conditions.",

    fullExplanation: [
      "When a court orders restitution, the incarcerated person is legally required to pay the amount regardless of their financial situation. During incarceration, facilities typically deduct 25 percent or more of the inmate's earnings toward restitution obligations.",

      "Families sending money to an incarcerated loved one should be aware that some of those funds may be automatically applied to restitution, reducing the amount available for commissary. The case manager can provide information about the specific restitution deduction schedule at that facility.",

    ],

    faq: [],

    relatedTermSlugs: ["hold", "inmate-trust-account", "parole", "case-manager"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "mail-rejection": {
    id: "term-91",
    term: "Mail Rejection",
    slug: "mail-rejection",
    category: "Communication",
    featured: false,

    definition:
      "Mail rejection occurs when incoming mail to an inmate is refused by the facility and returned to the sender. Common reasons for mail rejection include prohibited content, failure to include required information such as the inmate ID number, sending from an unapproved vendor, using prohibited materials such as glitter or stickers, or sending mail directly to a facility that uses a mail processing center. Rejected mail is typically returned to the sender without the inmate receiving it.",

    fullExplanation: [
      "Facilities have detailed mail rules that must be followed precisely to avoid rejection. Common rejection triggers include sending books from unapproved vendors, including glitter, stickers, or staples in the envelope, sending photos that do not meet the facility's photo policy, and failing to include the inmate's full name and ID number on the envelope.",

      "When mail is rejected, the inmate is typically notified but the family may not be. The sender may or may not receive the item back depending on facility policy. Using approved vendors and following the specific facility's mail rules carefully avoids preventable rejections.",

    ],

    faq: [],

    relatedTermSlugs: ["contraband", "approved-vendor", "mail-scanning", "digital-mail"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "photo-policy": {
    id: "term-92",
    term: "Photo Policy",
    slug: "photo-policy",
    category: "Communication",
    featured: false,

    definition:
      "A photo policy is the set of rules governing what types of photos can be sent to an inmate, in what format, through what method, and in what quantities. Photo policies vary significantly by facility. Common restrictions include limiting photos to 4x6 inch prints, prohibiting Polaroid photos, limiting the number of photos per envelope, and prohibiting photos showing alcohol, weapons, gang signs, or suggestive content.",

    fullExplanation: [
      "Before sending any photos to an inmate, check the specific facility's photo policy. Policies differ on print size requirements, number of photos allowed per envelope, whether digital or physical photos are accepted, and what content is prohibited.",

      "Hand gestures are a frequently overlooked photo rejection trigger. Even innocent gestures like peace signs or thumbs up can be misinterpreted as gang signs. Photos with alcohol in the background even if incidental can also cause rejection. Services like Pigeonly and Inmate Photos show facility-specific rules at upload to help avoid preventable rejections.",

    ],

    faq: [],

    relatedTermSlugs: ["mail-rejection", "contraband", "digital-mail"],
    relatedProviderSlugs: ["pigeonly"],
    relatedHubs: [],
  },

  "victim-notification": {
    id: "term-93",
    term: "Victim Notification",
    slug: "victim-notification",
    category: "Administration",
    featured: false,

    definition:
      "Victim notification is a system that alerts crime victims when an offender's status changes, such as when they are released, transferred, or escape. VINELink is the primary national victim notification service. Victims register to receive automatic notifications. Families of incarcerated people can also use VINELink to track status changes, though they are not the primary intended audience.",

    fullExplanation: [
      "Victim notification services like VINELink allow registered individuals to receive automatic alerts when an offender's custody status changes. Crime victims use this service to know when someone who harmed them is being released. Families of incarcerated people can also register to receive transfer and release notifications.",

      "VINELink is available at vinelink.vineapps.com and is operated in partnership with most state corrections systems. Registration is free and notifications can be received by phone, email, or text message.",

    ],

    faq: [],

    relatedTermSlugs: ["vinelink", "inmate-search", "release-date"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "prison-rape-elimination-act": {
    id: "term-94",
    term: "PREA",
    slug: "prison-rape-elimination-act",
    category: "Administration",
    featured: false,

    definition:
      "PREA stands for the Prison Rape Elimination Act, a federal law enacted in 2003 that established national standards to prevent, detect, and respond to sexual abuse in correctional facilities. PREA affects how facilities handle reports of abuse and requires staff training and audits. Inmates have the right to report PREA violations confidentially. Families can reference PREA when an incarcerated loved one reports sexual abuse at a facility.",

    fullExplanation: [
      "PREA established the first national standards addressing sexual abuse in prisons, jails, and other confinement settings. The law created the National Prison Rape Elimination Commission and required the Department of Justice to develop and publish standards for correctional facilities.",

      "If an incarcerated person experiences sexual abuse, they have the right to report it through PREA channels at the facility. Reports can also be made to the facility's PREA coordinator, the DOC, or the Department of Justice. Families can contact advocacy organizations for guidance on supporting a loved one through a PREA report.",

    ],

    faq: [],

    relatedTermSlugs: ["case-manager", "shu", "general-population"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "legal-aid": {
    id: "term-95",
    term: "Legal Aid",
    slug: "legal-aid",
    category: "Administration",
    featured: false,

    definition:
      "Legal aid refers to free or reduced-cost legal services provided to people who cannot afford an attorney. Incarcerated people and their families can access legal aid through law school clinics, public defender offices, nonprofit legal organizations, and prison legal services programs. Legal aid is particularly relevant for post-conviction matters, appeals, compassionate release petitions, and civil rights claims.",

    fullExplanation: [
      "Many incarcerated people cannot afford private attorneys for post-conviction matters. Legal aid organizations provide free or low-cost legal assistance for appeals, sentence reduction motions, civil rights claims, and reentry matters. Each state has different legal aid resources available.",

      "Families can help their loved one access legal aid by researching organizations in the state where the person is incarcerated. The Legal Services Corporation maintains a directory of legal aid organizations at lsc.gov. Law school clinics often handle criminal justice matters at no cost.",

    ],

    faq: [],

    relatedTermSlugs: ["attorney-call", "legal-mail", "compassionate-release", "first-step-act"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "inmate-locator": {
    id: "term-96",
    term: "Inmate Locator",
    slug: "inmate-locator",
    category: "Administration",
    featured: false,

    definition:
      "An inmate locator is an online tool used to find an incarcerated person and confirm their current facility and basic status. The federal Bureau of Prisons maintains an inmate locator at bop.gov searchable by name or register number. Each state DOC maintains its own offender search tool. County jail inmate rosters are maintained by individual sheriff offices. Inmate locators are free to use and publicly accessible.",

    fullExplanation: [
      "Inmate locators are the first step for families who have lost contact with an incarcerated loved one or need to find the current facility after a transfer. The BOP inmate locator at bop.gov shows name, age, race, registration number, projected release date, and facility location for federal inmates.",

      "State inmate locators vary in the information they provide. Most show the current facility and inmate ID number which families need for setting up communication accounts. County jail rosters typically show only basic booking information. Search by full legal name for the best results.",

    ],

    faq: [],

    relatedTermSlugs: ["inmate-search", "bop", "doc-number", "register-number"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "supermax": {
    id: "term-97",
    term: "Supermax",
    slug: "supermax",
    category: "Facility Types",
    featured: false,

    definition:
      "Supermax is an abbreviation for super maximum security prison, the highest level of security in the correctional system above standard maximum security. Supermax facilities house the most dangerous or disruptive inmates in extreme isolation. ADX Florence in Colorado is the only federal supermax. Communication is severely restricted at supermax facilities with very limited phone and mail access.",

    fullExplanation: [
      "Supermax facilities use solitary confinement as the standard housing condition rather than as a punishment. Inmates at supermax prisons spend 22 to 24 hours per day in their cells with minimal human contact. Communication with family is severely restricted and may be limited to a small number of monitored calls per month and limited mail.",

      "ADX Florence in Fremont County Colorado is the federal supermax, officially called the United States Penitentiary Administrative Maximum Facility. Federal inmates at ADX Florence are limited to 300 phone minutes per month. Families of ADX Florence inmates face significant communication barriers compared to other federal facilities.",
    ],

    faq: [],

    relatedTermSlugs: ["maximum-security", "shu", "protective-custody", "phone-privilege"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "sentence": {
    id: "term-98",
    term: "Sentence",
    slug: "sentence",
    category: "Administration",
    featured: false,

    definition:
      "A sentence is the punishment imposed by a court on a person convicted of a crime, specifying the length of incarceration and any additional conditions. Sentence length determines which type of facility an inmate is housed in. Sentences of less than one year are typically served in county jails while longer sentences are served in state or federal prisons. Understanding an inmate's sentence helps families anticipate communication timelines.",

    fullExplanation: [
      "Criminal sentences come in several forms. A determinate sentence has a fixed length such as five years. An indeterminate sentence has a range such as five to ten years with parole eligibility. A life sentence may or may not include the possibility of parole. Federal sentences generally do not include parole but have supervised release after incarceration.",

      "Sentence length affects many practical aspects of communication. Longer sentences mean more time to navigate the communication system and potentially more facility transfers. Understanding the general structure of the sentence helps families plan for long-term communication needs.",
    ],

    faq: [],

    relatedTermSlugs: ["parole", "good-time-credit", "release-date", "classification"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "prison-commission": {
    id: "term-99",
    term: "Prison Commission",
    slug: "prison-commission",
    category: "Finance",
    featured: false,

    definition:
      "A prison commission is a payment made by a communication or commissary provider to a correctional facility in exchange for an exclusive contract. Commissions are paid as a percentage of revenue generated from inmate calls, messages, and purchases. Critics argue that commissions incentivize facilities to select the highest-paying provider rather than the best or most affordable service for families. The FCC has investigated commissions as a contributor to high prison phone rates.",

    fullExplanation: [
      "Prison commissions work like kickbacks where the provider shares a portion of every dollar families spend on calls, messages, and money transfers with the facility that granted them the exclusive contract. This creates a financial incentive for facilities to choose providers that generate the most revenue rather than those offering the best value to families.",

      "Commission rates have historically been as high as 50 percent or more of call revenue. The FCC has moved to cap and eventually eliminate site commissions as part of its effort to reduce inmate calling costs. Some states have passed laws restricting or eliminating commissions while others continue the practice.",
    ],

    faq: [],

    relatedTermSlugs: ["fcc-rate-cap", "inmate-calling-service", "transaction-fee"],
    relatedProviderSlugs: [],
    relatedHubs: [],
  },

  "collect2phone": {
    id: "term-100",
    term: "Collect2Phone",
    slug: "collect2phone",
    category: "Communication",
    featured: false,

    definition:
      "Collect2Phone is a GTL ViaPath pay-per-call option that allows a family member to accept a collect call from an inmate on a cell phone without setting up a prepaid account. The charge for the call appears on the cell phone bill. Collect2Phone is an alternative to AdvancePay for people who do not want to set up a prepaid account but still need to receive occasional calls on their cell phone.",

    fullExplanation: [
      "Traditional collect calls from correctional facilities cannot be accepted on cell phones through most carriers. Collect2Phone solves this problem by enabling cell phone users to accept collect calls and have the charges billed directly to their cell phone account.",

      "Collect2Phone is available at GTL ConnectNetwork facilities. It is best suited for occasional calls rather than regular communication because per-call rates without a prepaid account are typically higher than AdvancePay rates. For families who expect regular calls, setting up an AdvancePay account is generally more cost-effective.",
    ],

    faq: [],

    relatedTermSlugs: ["collect-call", "advancepay", "inmate-phone-calls", "pin-debit"],
    relatedProviderSlugs: ["gtl", "connectnetwork"],
    relatedHubs: [],
  },

}

// ─────────────────────────────────────────────────────────────────────────────
// ALL TERMS, flat array for directory (featured first, then alphabetical)
// ─────────────────────────────────────────────────────────────────────────────

function toBasic(d: GlossaryTermDetail): GlossaryTermBasic {
  return {
    id: d.id,
    term: d.term,
    slug: d.slug,
    definition: d.definition,
    category: d.category,
    featured: d.featured,
  }
}

export const ALL_TERMS: GlossaryTermBasic[] = Object.values(TERM_DETAILS)
  .map(toBasic)
  .sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    return a.term.localeCompare(b.term)
  })
