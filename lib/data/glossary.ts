// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type GlossaryCategory =
  | "Communication"
  | "Facility Types"
  | "Finance"
  | "Technology"
  | "Administration"

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
// DETAILED TERM DATA — 15 seeded terms
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
    seoDescription:
      "Inmate messaging lets families send digital messages to incarcerated loved ones through platforms like JPay and CorrLinks. Learn how it works and what it costs.",

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
    seoDescription:
      "Video visitation lets families connect with incarcerated loved ones through a scheduled video call, without visiting the facility in person. Learn how it works.",

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
    seoDescription:
      "Inmate phone calls are outgoing calls placed by incarcerated people to approved contacts. Learn how to receive calls, set up a prepaid account, and what they cost.",

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

    seoTitle: "What Is a Correctional Facility?: Prison Communication Glossary",
    seoDescription:
      "A correctional facility is any institution housing people under arrest or sentence, including federal prisons, state prisons, and county jails. Learn the key differences.",

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
    seoDescription:
      "A federal prison is a BOP facility holding people convicted of federal crimes. Learn about CorrLinks messaging, how to find an inmate, and how communication works.",

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
    seoDescription:
      "A state prison is a DOC-operated facility holding people convicted of state felonies. Learn about JPay messaging, how to find an inmate, and how communication works.",

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
    seoDescription:
      "A county jail is a local facility run by a sheriff's office that holds people awaiting trial or serving short sentences. Learn about GettingOut, phone calls, and visits.",

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
    seoDescription:
      "An inmate account (trust fund account) holds money sent by families for commissary, phone calls, and services. Learn how to send money and what fees to expect.",

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
    seoDescription:
      "Commissary is an in-facility store where incarcerated people buy food, hygiene items, and stationery using their inmate account. Learn how commissary works.",

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

    seoTitle: "What Is an Inmate Money Transfer?: Prison Communication Glossary",
    seoDescription:
      "A money transfer sends funds to an inmate's account for commissary, phone calls, and other services. Learn how to send money, what fees to expect, and how long it takes.",

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

    seoTitle: "What Is Electronic Messaging for Inmates?: Prison Communication Glossary",
    seoDescription:
      "Electronic messaging lets families send digital messages to incarcerated loved ones through platforms like JPay and CorrLinks. Learn how it differs from regular email.",

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
    seoDescription:
      "An inmate tablet is a restricted device used in correctional facilities for messaging, education, and entertainment. Learn how they work and how families can use them.",

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

    seoTitle: "What Are Prison Visitation Rules?: Prison Communication Glossary",
    seoDescription:
      "Visitation rules set by each correctional facility govern who can visit, how to schedule visits, and what to bring. Learn what to expect for in-person and video visits.",

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
    seoDescription:
      "An inmate ID number is a unique code used across all prison systems to identify an incarcerated person. Learn about BOP register numbers, CDCR numbers, and DOC numbers.",

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
    seoDescription:
      "An inmate search uses an official database to find where someone is incarcerated. Learn how to use the BOP inmate locator and state DOC search tools.",

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
}

// ─────────────────────────────────────────────────────────────────────────────
// ALL TERMS — flat array for directory (featured first, then alphabetical)
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
