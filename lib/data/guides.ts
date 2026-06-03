import type { GuideBasic, GuideDetail, GuideCategory } from "@/types"

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY
// ─────────────────────────────────────────────────────────────────────────────

export function estimateGuideReadingTime(guide: GuideDetail): number {
  const words = [
    ...guide.intro,
    ...guide.sections.flatMap((s) => [s.heading, ...s.body]),
    ...guide.takeaways,
    ...guide.faq.flatMap((f) => [f.question, f.answer]),
  ]
    .join(" ")
    .trim()
    .split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

// ─────────────────────────────────────────────────────────────────────────────
// DETAILED GUIDE DATA — 20 seed guides
// ─────────────────────────────────────────────────────────────────────────────

export const GUIDE_DETAILS: Record<string, GuideDetail> = {

  "how-inmate-messaging-works": {
    id: "guide-01",
    slug: "how-inmate-messaging-works",
    title: "How Inmate Messaging Works",
    excerpt: "Learn how digital messaging to incarcerated loved ones works, which platforms are used, how messages are reviewed, and what it costs.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: true,
    popular: true,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How Inmate Messaging Works: Complete Beginner Guide",
    seoDescription: "Learn how inmate messaging works, which platforms to use, how messages are reviewed, and what it costs to stay in contact with an incarcerated loved one.",

    intro: [
      "Inmate messaging lets families and approved contacts send written messages to incarcerated loved ones through a digital platform. It works similarly to email but operates through a dedicated system approved by the correctional facility.",
      "This guide explains how messages travel from sender to inmate, which platforms are most commonly used, what the review process looks like, and how much it typically costs.",
    ],

    sections: [
      {
        heading: "What Is Inmate Messaging?",
        body: [
          "Inmate messaging is a digital communication service that allows approved contacts to exchange written messages with incarcerated people. Unlike standard email, it operates through platforms that hold contracts with correctional facilities. The facility decides which platform to use, and that platform manages all messaging in and out of that location.",
          "Common platforms include JPay for state prisons, CorrLinks for federal Bureau of Prisons facilities, ConnectNetwork for a wide range of jails and prisons, and GettingOut for many county jails. The platform you need depends entirely on where your loved one is housed.",
          "You cannot use a regular email address to reach someone in prison. You must create an account on the approved platform and find your loved one by their inmate ID number and facility name.",
        ],
      },
      {
        heading: "How Messages Are Sent and Delivered",
        body: [
          "To send your first message, create an account on the approved platform, search for your loved one using their inmate ID and facility, and purchase messaging credits before writing. The process varies slightly by platform but follows this same general flow.",
          "After you submit a message, it enters a review queue. Facility staff or an automated content screening system checks the message before it reaches the inmate. This is standard at all correctional facilities and is disclosed in each platform's terms of service.",
          "Most messages are delivered within a few hours to one business day. The inmate reads and replies through the same platform terminal. Their reply goes through the same review process before it reaches you.",
        ],
      },
      {
        heading: "How Much Inmate Messaging Costs",
        body: [
          "Costs vary by platform and facility. JPay uses a stamp system, with stamps typically costing between $0.33 and $0.47 each. CorrLinks charges a small per-message fee from a prepaid account. ConnectNetwork and GettingOut have their own credit-based pricing.",
          "Some facilities offer the inmate free incoming messages but charge the sender. Others require both sides to purchase credits. Check the pricing page of the specific platform before adding money to your account.",
          "There may also be initial account fees or transaction charges when loading funds. Read the platform's fee schedule carefully before your first deposit.",
        ],
      },
      {
        heading: "Privacy and Content Rules",
        body: [
          "All inmate messages are monitored. The platform and the facility retain copies, and staff can read them at any time. Never include sensitive legal, financial, or personal information in a message.",
          "Content rules vary by facility but generally prohibit anything involving escape plans, criminal activity, explicit content, or coded language. Messages that violate these rules are blocked or deleted without detailed notice.",
          "Repeated violations can result in suspended messaging privileges. In serious cases, access to the platform may be permanently revoked for that facility.",
        ],
      },
    ],

    takeaways: [
      "Inmate messaging works through facility-approved platforms, not standard email.",
      "Find out which platform your loved one's facility uses before creating an account.",
      "Messages go through a review process before delivery and are never private.",
      "Most messages arrive within a few hours to one business day.",
      "Costs are typically paid by the sender through a credit or stamp system.",
      "Content must follow strict facility rules or the message will be blocked.",
    ],

    faq: [
      {
        question: "How do I know which messaging platform to use?",
        answer: "Look up the facility on this site or contact them directly. Federal Bureau of Prisons facilities use CorrLinks. Most state prisons use JPay or ConnectNetwork. County jails often use GettingOut or ConnectNetwork.",
      },
      {
        question: "Can an inmate message me first?",
        answer: "In most cases, the inmate must first request to add you as an approved contact. Once the facility approves the request, they can initiate messages and you can reply.",
      },
      {
        question: "How long does it take for a message to arrive?",
        answer: "Most electronic messages are delivered within a few hours to one business day, depending on the review queue at that facility.",
      },
      {
        question: "Is inmate messaging private?",
        answer: "No. All messages are reviewed and stored by both the platform and the facility. Never send sensitive legal, financial, or personal information through inmate messaging.",
      },
      {
        question: "What happens if my message is blocked?",
        answer: "The platform may notify you that the message was not delivered. You will not always receive a specific reason. Review the facility's content rules and revise the message before resending.",
      },
      {
        question: "Can I send photos with messages?",
        answer: "Some platforms allow photo attachments for an extra fee. Photo sharing is typically handled as a separate service from text messaging and has its own rules and approval process.",
      },
    ],

    relatedGuideSlugs: ["how-to-set-up-inmate-email", "best-inmate-messaging-services", "how-jpay-works", "how-corrlinks-works"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "inmate-account"],
    relatedProviderSlugs: ["jpay", "corrlinks", "connectnetwork", "gettingout"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks", "jpay-vs-connectnetwork"],
    ctaType: "hub",
    ctaTarget: "/messaging",
    ctaLabel: "Explore Messaging Options",
  },

  "how-to-send-money-to-an-inmate": {
    id: "guide-02",
    slug: "how-to-send-money-to-an-inmate",
    title: "How to Send Money to an Inmate",
    excerpt: "A step-by-step guide to sending money to an incarcerated person, covering accepted methods, platforms, fees, and common mistakes to avoid.",
    category: "Money and Accounts",
    difficulty: "Beginner",
    featured: true,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Send Money to an Inmate: Step-by-Step Guide",
    seoDescription: "Learn how to send money to someone in prison or jail. Covers accepted payment methods, platforms like JPay and Access Corrections, fees, and transfer limits.",

    intro: [
      "Sending money to an incarcerated person is straightforward once you know which platform the facility uses. The money goes into the inmate's trust account, which they can use for commissary purchases, phone calls, and other approved services.",
      "This guide walks through the main methods for sending money, what fees to expect, and what to watch out for.",
    ],

    sections: [
      {
        heading: "Where the Money Goes",
        body: [
          "When you send money to an inmate, it is deposited into their inmate trust account. This is a managed account held by the facility. The inmate does not receive physical cash. They use the account balance to purchase items from the commissary, pay for phone or messaging credits, or cover other approved expenses.",
          "Each facility controls how and when funds can be accessed. Some facilities process deposits the same day. Others may hold new deposits for up to 48 hours before the balance is available.",
        ],
      },
      {
        heading: "How to Send Money",
        body: [
          "The most common methods are online through a platform like JPay, Access Corrections, or TouchPay, by phone using a credit or debit card, by money order mailed to the facility, or in person at a kiosk in the facility lobby.",
          "Online is the fastest and most convenient option for most people. You create an account on the approved platform, search for the inmate by ID and facility, enter the amount, and pay by debit or credit card. The transfer typically processes within minutes to a few hours.",
          "Money orders are accepted at most facilities but are slower. Make the money order payable to the facility or the approved processing service, include the inmate's full name and ID number, and mail it to the address listed on the facility's website.",
        ],
      },
      {
        heading: "Fees and Transfer Limits",
        body: [
          "Most money transfer platforms charge a processing fee. Fees vary by platform, transfer method, and amount. JPay typically charges $4.95 to $11.95 per transfer. Access Corrections and TouchPay have similar fee structures. Fees are charged to the sender, not deducted from the deposited amount.",
          "Transfer limits also vary. Many facilities cap individual transfers at $300 or $500. Some have monthly limits. Check the platform's limits page and the facility's inmate account rules before sending large amounts.",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        body: [
          "Always verify the inmate's full legal name and ID number before sending. A mismatch can cause the transfer to be rejected or sent to the wrong person. The inmate's ID number on their prison ID card is the correct identifier.",
          "Sending money to an inmate who has been transferred to a different facility can delay the deposit significantly. Confirm the current location with the facility or the inmate before sending.",
          "Do not send money through unauthorized channels such as personal cash apps, direct bank transfers to unknown accounts, or anyone claiming to collect funds on behalf of an inmate. These are common scams.",
        ],
      },
    ],

    takeaways: [
      "Money goes into the inmate's trust account, not directly to them as cash.",
      "Online platforms like JPay and Access Corrections are the fastest way to send funds.",
      "Processing fees are charged to the sender and typically range from $5 to $12.",
      "Always verify the inmate's full legal name and ID number before sending.",
      "Money orders are accepted but take longer to process.",
      "Never send money through unofficial channels or personal cash apps.",
    ],

    faq: [
      {
        question: "How long does it take for money to arrive?",
        answer: "Online transfers through platforms like JPay usually process within a few hours. Money orders take 3 to 7 business days after mailing. Processing times vary by facility.",
      },
      {
        question: "Is there a limit on how much I can send?",
        answer: "Yes. Most facilities cap individual transfers at $300 to $500 and may have monthly limits. Check the platform and the facility's rules before sending.",
      },
      {
        question: "Can the inmate send money back to me?",
        answer: "Inmates generally cannot send money out of their accounts during incarceration. Upon release, any remaining balance is returned to the inmate directly.",
      },
      {
        question: "What if my transfer is rejected?",
        answer: "A rejected transfer is usually caused by a name or ID number mismatch, or the inmate is at a different facility. Contact the platform's customer support to confirm the details and resubmit.",
      },
      {
        question: "Can I send money using a credit card?",
        answer: "Yes, most platforms accept credit cards, though some card issuers treat these transactions as cash advances and charge additional fees. Using a debit card or bank transfer is usually cheaper.",
      },
    ],

    relatedGuideSlugs: ["how-inmate-messaging-works", "prison-phone-call-costs", "inmate-communication-guide"],
    relatedTermSlugs: ["money-transfer", "inmate-account", "commissary"],
    relatedProviderSlugs: ["jpay", "connectnetwork"],
    relatedComparisonSlugs: ["jpay-vs-connectnetwork"],
    ctaType: "hub",
    ctaTarget: "/money-transfer",
    ctaLabel: "Explore Money Transfer Options",
  },

  "how-video-visitation-works": {
    id: "guide-03",
    slug: "how-video-visitation-works",
    title: "How Video Visitation Works",
    excerpt: "Understand how video visitation works at prisons and jails, how to schedule a video call, what equipment you need, and how much it costs.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: true,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How Video Visitation Works: Prison Video Calls Explained",
    seoDescription: "Learn how video visitation works at prisons and jails. Covers scheduling, equipment, costs, and which platforms offer video calls for inmates.",

    intro: [
      "Video visitation allows families to see and speak with incarcerated loved ones through a scheduled video call. It works through the same platforms used for messaging and phone calls, such as ConnectNetwork, JPay, and GettingOut.",
      "This guide explains how to set up a video visit, what equipment you need, what it costs, and what to expect during the call.",
    ],

    sections: [
      {
        heading: "What Is Video Visitation?",
        body: [
          "Video visitation is a scheduled video call between an inmate and an approved contact. Calls take place through a platform the facility contracts with. The inmate uses a video terminal inside the facility. You connect using a smartphone, tablet, or computer.",
          "Not all facilities offer video visitation. Availability depends on the facility type, its contract with a communication provider, and whether the inmate has video privileges. Always confirm availability before scheduling.",
        ],
      },
      {
        heading: "How to Schedule a Video Visit",
        body: [
          "First, create an account on the platform approved by the facility. Look up the inmate by their ID number and facility name. Request to be added as an approved contact. Once the facility approves you, you can browse available time slots and book a session.",
          "Scheduling windows vary by facility. Some facilities allow bookings up to 7 days in advance. Others open slots only 24 to 48 hours ahead. Sessions are typically 20 to 30 minutes long. Popular times fill quickly, so schedule early.",
          "You will receive a confirmation after booking. Make note of the date, time, and any technical requirements. If you need to cancel, do so within the cancellation window to avoid being charged.",
        ],
      },
      {
        heading: "What Equipment You Need",
        body: [
          "You need a smartphone, tablet, or computer with a working camera and microphone. A stable internet connection is important. Video calls on mobile data can work but a wifi connection reduces the chance of dropped calls.",
          "Download the platform's app before your scheduled visit and test the camera and microphone ahead of time. Dress appropriately. Some facilities have dress code requirements for video visits, just as they do for in-person visits.",
        ],
      },
      {
        heading: "Cost of Video Visitation",
        body: [
          "Video calls are billed per minute or as flat-rate sessions. Per-minute rates typically range from $0.25 to $0.50. A 30-minute session can cost between $7.50 and $15.00, plus any processing fees.",
          "Some facilities charge the inmate, some charge the visitor, and some split the cost. Check the platform's pricing page for the specific facility before booking. Credits must usually be purchased in advance.",
        ],
      },
    ],

    takeaways: [
      "Video visitation is a scheduled call through a facility-approved platform, not a regular video app.",
      "You must be an approved contact before you can book a visit.",
      "You need a device with a camera, microphone, and stable internet connection.",
      "Sessions are typically 20 to 30 minutes and must be scheduled in advance.",
      "Costs range from $7.50 to $15 per session depending on the platform and facility.",
      "Not all facilities offer video visitation, so confirm availability before scheduling.",
    ],

    faq: [
      {
        question: "Can I use FaceTime or Zoom for a prison video visit?",
        answer: "No. Prisons and jails do not allow regular video apps like FaceTime or Zoom. All video visits must go through the facility's approved platform, such as ConnectNetwork, JPay, or GettingOut.",
      },
      {
        question: "How far in advance can I schedule a video visit?",
        answer: "It depends on the facility. Most allow scheduling 24 to 72 hours in advance. Some open slots up to 7 days ahead. Check the platform's scheduling page for the specific facility.",
      },
      {
        question: "What happens if the call is disconnected?",
        answer: "If the call drops, credits may or may not be refunded depending on the platform's policy. Most platforms have a support process for technical disconnections. Contact customer support with the session date and time.",
      },
      {
        question: "Are video visits recorded?",
        answer: "Yes. Video visits are recorded and monitored by facility staff. Do not discuss legal matters, financial details, or anything you would not want reviewed.",
      },
      {
        question: "Can children participate in video visits?",
        answer: "Yes, in most cases. Children must be accompanied by an adult. Some facilities require children to be listed separately as approved visitors. Check the facility's visitation rules for details.",
      },
    ],

    relatedGuideSlugs: ["prison-visitation-rules", "what-to-expect-first-prison-visit", "how-inmate-messaging-works"],
    relatedTermSlugs: ["video-visitation", "visitation-rules"],
    relatedProviderSlugs: ["connectnetwork", "jpay", "gettingout"],
    relatedComparisonSlugs: ["jpay-vs-connectnetwork", "jpay-vs-gettingout"],
    ctaType: "hub",
    ctaTarget: "/video-calls",
    ctaLabel: "Explore Video Visitation Options",
  },

  "how-to-find-an-inmate": {
    id: "guide-04",
    slug: "how-to-find-an-inmate",
    title: "How to Find an Inmate",
    excerpt: "Learn how to locate an incarcerated person using official inmate search tools, what information you need, and how to find their current facility.",
    category: "Getting Started",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Find an Inmate: Inmate Search Guide",
    seoDescription: "Learn how to find an inmate using official inmate locator tools. Covers federal, state, and county jail search systems and what information you need.",

    intro: [
      "Finding someone in the prison or jail system is possible through official government inmate search tools. These are free, publicly accessible databases maintained by correctional agencies.",
      "This guide explains how to use inmate search tools, what information you need to start, and what to do if the standard searches do not return results.",
    ],

    sections: [
      {
        heading: "What You Need Before You Search",
        body: [
          "The more information you have, the easier the search. At a minimum you need the person's full legal name as it appears on official documents. Middle names and suffixes matter. A common name without additional details can return dozens of results.",
          "Having the state where they were sentenced or the approximate date of incarceration narrows the results significantly. If you have their inmate ID number or booking number, you can often find them in a single lookup.",
        ],
      },
      {
        heading: "How to Search for a Federal Inmate",
        body: [
          "The Federal Bureau of Prisons operates a free inmate locator at bop.gov. You can search by first name, last name, age, race, and sex. The database covers anyone currently in BOP custody and includes release dates for those nearing the end of their sentence.",
          "BOP records do not include people held at county jails awaiting federal sentencing or people held in privately contracted facilities that are not part of the BOP system. If your search returns no results, the person may not yet be in the federal system.",
        ],
      },
      {
        heading: "How to Search for a State Inmate",
        body: [
          "Every state operates its own inmate search database. Search for the name of the state followed by 'department of corrections inmate search' to find the official lookup tool. State databases typically cover people in state prisons and may include those on parole or probation.",
          "State databases vary in quality. Some update in real time. Others update once daily or less frequently. If someone was recently transferred, their new location may not appear immediately.",
        ],
      },
      {
        heading: "How to Search for a County Jail Inmate",
        body: [
          "County jail rosters are maintained at the county level. Search for the county name and 'jail roster' or 'inmate lookup.' Many counties post booking rosters online that update throughout the day.",
          "County jail rosters are often less complete than state or federal databases. If you cannot find someone through an online roster, call the jail directly. Provide the full legal name and approximate date of booking.",
        ],
      },
    ],

    takeaways: [
      "Federal inmates can be found through the free BOP inmate locator at bop.gov.",
      "State inmates are searchable through each state's Department of Corrections website.",
      "County jail inmates appear on county jail rosters, which vary in completeness.",
      "A full legal name gives better results than a nickname or informal name.",
      "Inmate ID numbers, if available, return the fastest and most accurate results.",
      "If online searches fail, calling the facility directly is the most reliable fallback.",
    ],

    faq: [
      {
        question: "Is inmate search information free to access?",
        answer: "Yes. Official government inmate search tools are free. Be cautious of third-party websites that charge fees to search inmate records. The official sources are always free.",
      },
      {
        question: "Why can't I find the person I'm looking for?",
        answer: "There are several reasons: the name may be listed differently in the system, they may be in transit between facilities, they may have been recently booked and not yet entered, or they may be held at a different jurisdiction than expected.",
      },
      {
        question: "Can I find out when someone will be released?",
        answer: "Federal and most state inmate databases show projected release dates. These dates can change based on good behavior credits, parole hearings, or sentence modifications.",
      },
      {
        question: "Do inmate search tools show the person's current location?",
        answer: "Most state and federal tools show the current facility. County jail rosters usually show the booking location. If someone has been transferred, there may be a delay before the new location appears.",
      },
    ],

    relatedGuideSlugs: ["inmate-communication-guide", "how-inmate-messaging-works", "federal-prison-vs-state-prison"],
    relatedTermSlugs: ["inmate-search", "inmate-id-number", "correctional-facility"],
    relatedProviderSlugs: [],
    relatedComparisonSlugs: [],
    ctaType: "directory",
    ctaTarget: "/facilities",
    ctaLabel: "Browse Facility Directory",
  },

  "how-prison-phone-calls-work": {
    id: "guide-05",
    slug: "how-prison-phone-calls-work",
    title: "How Prison Phone Calls Work",
    excerpt: "Understand how inmates make phone calls, how to set up an account to receive calls, which providers are used, and what calls cost.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How Prison Phone Calls Work: Complete Guide",
    seoDescription: "Learn how inmates make phone calls, how to set up a prepaid account to receive calls, what providers facilities use, and how much prison calls cost.",

    intro: [
      "Prison phone calls work differently from regular calls. The inmate places the call from an approved phone inside the facility, and the call goes through a third-party provider that charges per-minute rates. You can accept the call by setting up a prepaid account.",
      "This guide explains the full process, from setting up your phone number to receiving calls, and covers the costs and providers involved.",
    ],

    sections: [
      {
        heading: "How Inmates Place Phone Calls",
        body: [
          "Inmates use phones located in common areas of the facility. Each call is placed through a system managed by the facility's contracted phone provider. The inmate dials a number from their approved contact list. You cannot receive a call from an inmate unless your number has been added to their list.",
          "Adding a number to the approved list is done by the inmate through the facility's phone system or by submitting a form to facility staff. The approval process can take a few days.",
        ],
      },
      {
        heading: "How to Set Up Your Account",
        body: [
          "Most prison phone providers offer two ways to accept calls. You can accept collect calls and be billed after the fact, or you can set up a prepaid account with the provider and have calls billed against your balance.",
          "Prepaid accounts are recommended. They let you control spending, often have lower per-minute rates, and avoid unexpected phone bills. Create an account on the provider's website, link it to the phone number the inmate will be calling, and add funds before the first call.",
          "Common providers include Securus Technologies, Global Tel Link (GTL), ICSolutions, and Telmate. The provider depends entirely on which company holds the contract with that facility.",
        ],
      },
      {
        heading: "Call Monitoring and Recording",
        body: [
          "All prison phone calls are recorded and monitored by facility staff. Calls to attorneys are generally protected and may not be recorded, but this depends on how the attorney number is registered. All other calls should be treated as if they are being reviewed.",
          "Do not discuss legal strategy, financial transactions, or any activity that could be problematic if heard by a third party. This applies to every call regardless of how casual the conversation seems.",
        ],
      },
      {
        heading: "What Phone Calls Cost",
        body: [
          "Per-minute rates for prison calls have been significantly reduced under FCC regulations in recent years. Interstate calls are now capped at $0.21 per minute for prisons and $0.12 per minute for jails. Intrastate rates vary by state but most are in the $0.05 to $0.25 per-minute range.",
          "Fees can add significantly to the base rate. Connection fees, account maintenance fees, and payment processing fees are common. A 15-minute call at $0.21 per minute costs $3.15 in base rate but may total $5 to $7 after fees depending on the provider.",
        ],
      },
    ],

    takeaways: [
      "Inmates call out through a facility-contracted phone provider. You cannot call in.",
      "Your phone number must be on the inmate's approved contact list before they can call you.",
      "Setting up a prepaid account gives you lower rates and better cost control than collect calls.",
      "All calls are recorded and monitored unless specifically exempted.",
      "FCC-capped rates are $0.21 per minute for prisons and $0.12 per minute for jails.",
      "Extra fees from providers can double the actual cost of a call.",
    ],

    faq: [
      {
        question: "Can I call the inmate directly?",
        answer: "No. Inmates do not have personal phone numbers. All calls are initiated by the inmate. You can only receive calls from them.",
      },
      {
        question: "How do I get my number added to an inmate's call list?",
        answer: "The inmate must submit a request to add your number through the facility's phone system or by filling out a contact form. The facility then approves or denies the request. This process typically takes 3 to 7 days.",
      },
      {
        question: "What is the difference between collect and prepaid?",
        answer: "Collect calls bill you after the call and are usually more expensive. Prepaid accounts let you load funds ahead of time and are typically cheaper with more transparent pricing.",
      },
      {
        question: "What happens if I miss a call?",
        answer: "Missed calls from inmates cannot be returned. The inmate must try calling again. Some facilities give inmates a limited number of call minutes per day or week, so missed calls are a real loss.",
      },
      {
        question: "Are calls to attorneys recorded?",
        answer: "Attorney calls may be exempt from recording if the attorney's number is registered with the facility as privileged. However, this varies by facility and jurisdiction. Confirm this with the facility and with the attorney's office.",
      },
    ],

    relatedGuideSlugs: ["prison-phone-call-costs", "how-inmate-messaging-works", "inmate-communication-guide"],
    relatedTermSlugs: ["inmate-phone-calls"],
    relatedProviderSlugs: ["connectnetwork"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/phone-calls",
    ctaLabel: "Explore Phone Call Options",
  },

  "inmate-communication-guide": {
    id: "guide-06",
    slug: "inmate-communication-guide",
    title: "Complete Inmate Communication Guide",
    excerpt: "A full overview of every way to communicate with an incarcerated loved one, including messaging, phone calls, video visits, photos, and mail.",
    category: "Getting Started",
    difficulty: "Beginner",
    featured: true,
    popular: true,
    readingTimeMinutes: 6,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Complete Inmate Communication Guide: All Options Explained",
    seoDescription: "A complete guide to communicating with an incarcerated loved one. Covers messaging, phone calls, video visits, photo sharing, mail, and money transfers.",

    intro: [
      "Staying in contact with an incarcerated loved one involves navigating a system that is different from normal communication. There is no single app or phone number that works across all facilities. Each prison or jail decides which provider to use for each type of communication.",
      "This guide covers every communication option available and explains how to get started with each one.",
    ],

    sections: [
      {
        heading: "Digital Messaging",
        body: [
          "Digital messaging is the most common form of written communication and works through platforms like JPay, CorrLinks, ConnectNetwork, or GettingOut. You create an account, find the inmate, purchase credits, and send text messages. Messages are reviewed before delivery.",
          "This is the fastest written communication option. Most messages arrive within a few hours to one business day. It costs less than a postage stamp per message on most platforms.",
        ],
      },
      {
        heading: "Phone Calls",
        body: [
          "Inmates call out through a facility-contracted phone system. You cannot call them directly. Your number must be on their approved contact list. Setting up a prepaid account with the provider gives you better rates than accepting collect calls.",
          "Common providers include Securus Technologies, GTL, ICSolutions, and Telmate. Per-minute rates for interstate calls are federally capped. Extra fees can still add up, so check the full cost before adding funds.",
        ],
      },
      {
        heading: "Video Visitation",
        body: [
          "Video visits are scheduled through the facility's approved platform and use a video terminal inside the facility. You connect using a phone, tablet, or computer. Sessions are usually 20 to 30 minutes and must be booked in advance.",
          "Not all facilities offer video visitation. Costs typically range from $7.50 to $15 per session. You must be an approved contact before scheduling.",
        ],
      },
      {
        heading: "Photos and Mail",
        body: [
          "Photo sharing platforms like Pigeonly or TextBehind allow you to upload digital photos that are printed and delivered to the inmate. This is different from emailing a photo. The photo goes through the same review process as other communication.",
          "Traditional mail is still accepted at most facilities. Letters should be sent on plain white paper. No stickers, glitter, perfume, or greeting cards with metallic elements. Check the facility's mail policy before sending packages or books.",
        ],
      },
    ],

    takeaways: [
      "Every facility uses its own approved provider for each type of communication.",
      "Digital messaging is the fastest and cheapest written option.",
      "Phone calls must be received, not placed. Your number needs prior approval.",
      "Video visits require scheduling and an approved contact status.",
      "Photo sharing uses print-and-deliver services, not direct digital delivery.",
      "Traditional mail is still accepted but has strict content and format rules.",
    ],

    faq: [
      {
        question: "Where do I start if I've never done this before?",
        answer: "Start by finding out which facility your loved one is at. Then look up that facility to see which communication providers it uses. Create an account on that provider's platform and follow the setup steps to get approved as a contact.",
      },
      {
        question: "Do I need a different account for each type of communication?",
        answer: "Sometimes, yes. Some platforms like JPay and ConnectNetwork offer messaging, video, and money transfer under one account. Others specialize in one service. You may end up with accounts on two or three different platforms.",
      },
      {
        question: "What if the facility changes providers?",
        answer: "Facilities do occasionally switch providers. If your loved one suddenly cannot receive messages through your current platform, contact the facility to find out if a switch has occurred.",
      },
      {
        question: "Can incarcerated people in all facilities receive digital messages?",
        answer: "No. Not all facilities have digital messaging. Federal facilities almost all use CorrLinks. State prisons vary. Smaller county jails may only support phone calls and mail.",
      },
    ],

    relatedGuideSlugs: ["how-inmate-messaging-works", "how-prison-phone-calls-work", "how-video-visitation-works", "how-to-send-money-to-an-inmate"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "visitation-rules"],
    relatedProviderSlugs: ["jpay", "corrlinks", "connectnetwork", "gettingout"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks", "jpay-vs-connectnetwork"],
    ctaType: "directory",
    ctaTarget: "/providers",
    ctaLabel: "Browse All Providers",
  },

  "federal-prison-vs-state-prison": {
    id: "guide-07",
    slug: "federal-prison-vs-state-prison",
    title: "Federal Prison vs State Prison",
    excerpt: "Understand the key differences between federal and state prisons, including how inmates end up there, communication rules, and provider differences.",
    category: "Facility Types",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Federal Prison vs State Prison: Key Differences Explained",
    seoDescription: "Learn the differences between federal and state prisons. Covers how inmates end up in each system, communication options, providers, and visitation rules.",

    intro: [
      "Federal prisons and state prisons are separate systems run by different government agencies. They house different types of offenders and operate under different rules. Understanding which system your loved one is in affects how you communicate with them.",
      "This guide covers the core differences between the two systems and explains how those differences affect communication options.",
    ],

    sections: [
      {
        heading: "Who Goes Where",
        body: [
          "Federal prisons house people convicted of federal crimes, meaning crimes investigated and prosecuted under federal law. This includes drug trafficking across state lines, bank robbery, immigration offenses, fraud targeting federal programs, and crimes that occur on federal property.",
          "State prisons house people convicted of crimes under state law. Most violent crimes, burglary, assault, and drug offenses at the state level result in state prison sentences. If someone was arrested by local or state police and tried in a state court, they are almost always in the state system.",
        ],
      },
      {
        heading: "Who Runs Them",
        body: [
          "The Federal Bureau of Prisons (BOP) operates all federal prisons. There are about 120 federal facilities across the United States. The BOP sets the rules for inmate communication and contracts with providers at the federal level.",
          "State prisons are operated by each state's Department of Corrections. There are around 1,800 state prisons in the United States. Each state sets its own communication rules and contracts with providers independently.",
        ],
      },
      {
        heading: "Communication Differences",
        body: [
          "Federal inmates use CorrLinks for all electronic messaging. CorrLinks is the only messaging platform approved for the BOP system. If your loved one is in a federal facility, you must create a CorrLinks account to exchange messages.",
          "State inmates use the platform contracted by their facility, which varies by state and facility. JPay is common in many state systems. ConnectNetwork also serves numerous state prisons. The platform your loved one uses depends on where specifically they are housed.",
        ],
      },
      {
        heading: "Visitation and Other Rules",
        body: [
          "Federal facilities tend to have more standardized visitation procedures, as they are all governed by BOP policy. State facilities vary more widely, because each state and each facility can set its own rules within state law.",
          "Federal transfers between facilities are more common than in the state system. If a loved one in federal prison is transferred, their facility will change in the BOP inmate locator, and you may need to re-register at the new location for certain communication services.",
        ],
      },
    ],

    takeaways: [
      "Federal prisons hold people convicted of federal crimes. State prisons hold people convicted of state crimes.",
      "The Federal Bureau of Prisons operates all federal facilities under unified policies.",
      "State prisons are run independently by each state, so rules and providers vary widely.",
      "Federal inmates use CorrLinks for messaging. State inmates use the platform their facility contracts with.",
      "Federal inmates are more frequently transferred between facilities.",
      "Knowing which system your loved one is in tells you which communication platform to use.",
    ],

    faq: [
      {
        question: "How do I know if my loved one is in federal or state prison?",
        answer: "Search the Federal Bureau of Prisons inmate locator at bop.gov. If they appear there, they are in the federal system. If not, check your state's Department of Corrections inmate search.",
      },
      {
        question: "Can someone go to both federal and state prison?",
        answer: "Yes. Someone can be sentenced in both federal and state courts for separate offenses. They would typically serve one sentence first, then the other, depending on the court orders.",
      },
      {
        question: "Are federal prisons safer than state prisons?",
        answer: "This is not a simple comparison. Safety conditions vary significantly by individual facility regardless of whether it is federal or state. Security classification level is a more meaningful factor than federal vs. state status.",
      },
      {
        question: "Do federal inmates get more privileges than state inmates?",
        answer: "Not necessarily. Privileges depend on the security level of the facility and the individual inmate's behavior history. Low-security federal facilities may offer more programming, but maximum-security federal facilities are among the most restrictive in the country.",
      },
    ],

    relatedGuideSlugs: ["county-jail-vs-state-prison", "how-corrlinks-works", "how-to-find-an-inmate"],
    relatedTermSlugs: ["federal-prison", "state-prison", "correctional-facility"],
    relatedProviderSlugs: ["corrlinks", "jpay"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks"],
    ctaType: "directory",
    ctaTarget: "/facilities",
    ctaLabel: "Search Facility Directory",
  },

  "inmate-tablets-explained": {
    id: "guide-08",
    slug: "inmate-tablets-explained",
    title: "Inmate Tablets Explained",
    excerpt: "Learn what inmate tablets are, which platforms offer them, what features they include, and how families can communicate through tablet-based messaging.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Inmate Tablets Explained: What They Are and How They Work",
    seoDescription: "Learn what inmate tablets are, which communication platforms offer them, what features are available, and how families can message through tablet systems.",

    intro: [
      "Inmate tablets are restricted devices provided to incarcerated people by communication providers under contract with correctional facilities. They are not standard consumer devices. The platform controls which features are available and monitors all activity.",
      "This guide explains how tablet programs work, what features they typically include, and what it means for family communication.",
    ],

    sections: [
      {
        heading: "What Inmate Tablets Are",
        body: [
          "Inmate tablets are purpose-built or modified consumer devices loaded with approved apps from the provider's platform. Common providers of tablet programs include JPay, GTL, Securus, and ConnectNetwork. The facility chooses the provider, and the provider supplies the devices.",
          "The device is typically assigned to a specific inmate and linked to their account. They cannot download apps, access the general internet, or use the device for anything outside what the platform permits.",
        ],
      },
      {
        heading: "What Features Are Available",
        body: [
          "Features vary by provider and facility contract but commonly include digital messaging, email-style communication with approved contacts, access to music and e-books purchased through the platform store, educational programming and GED prep materials, and in some cases video calls.",
          "All communication features are monitored. Music and reading materials are often sold at a premium through the provider's store. The tablet replaces physical access to these things, not a free supplement to it.",
        ],
      },
      {
        heading: "How Tablets Affect Family Communication",
        body: [
          "If the facility uses a tablet program, the inmate may be able to message from their cell or bunk instead of using a shared terminal. This can mean more frequent and longer messages. Some tablets also support video calls directly from the unit.",
          "From the family side, communication still goes through the same provider platform you would use otherwise. You do not need to do anything differently to communicate with someone who has a tablet. The same account, credits, and contact approval process applies.",
        ],
      },
      {
        heading: "Costs and Controversies",
        body: [
          "Tablet programs are often criticized for charging high prices for basic services like e-books and music that the inmate must pay for through their trust account. In some programs, the tablet itself is provided free but all content costs money.",
          "Advocacy groups have raised concerns that tablet programs shift communication costs heavily onto incarcerated people and their families. If cost is a concern, check the provider's full fee schedule before relying on the tablet as the primary communication channel.",
        ],
      },
    ],

    takeaways: [
      "Inmate tablets are locked-down devices provided by the facility's contracted communication provider.",
      "Features include messaging, music, e-books, education, and sometimes video calls.",
      "All tablet activity is monitored just like all other inmate communication.",
      "Families communicate through the same platform as always. No change is needed on your end.",
      "Content on tablets is often sold at a premium through the provider's store.",
      "Not all facilities have tablet programs. Availability depends on the provider contract.",
    ],

    faq: [
      {
        question: "Can I send my loved one a tablet?",
        answer: "No. Tablets in prison programs are provided and controlled by the communication provider contracted with the facility. Outside devices are not permitted.",
      },
      {
        question: "Does having a tablet mean inmates have internet access?",
        answer: "No. Tablets do not provide general internet access. They connect only to the provider's controlled network, which limits access to approved content and communication tools.",
      },
      {
        question: "Who pays for the tablet?",
        answer: "In most programs, the tablet device itself is provided at no cost or a subsidized cost. Ongoing services such as messaging credits, music, and e-books are paid for through the inmate's trust account.",
      },
      {
        question: "What happens to the tablet when an inmate is released?",
        answer: "The tablet remains the property of the provider. It is collected by the facility upon release. Some providers allow inmates to purchase the device or transfer their account at release.",
      },
    ],

    relatedGuideSlugs: ["how-inmate-messaging-works", "how-jpay-works", "inmate-communication-guide"],
    relatedTermSlugs: ["inmate-tablet", "inmate-messaging", "electronic-messaging"],
    relatedProviderSlugs: ["jpay", "connectnetwork"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/messaging",
    ctaLabel: "Explore Messaging Platforms",
  },

  "prison-visitation-rules": {
    id: "guide-09",
    slug: "prison-visitation-rules",
    title: "Prison Visitation Rules",
    excerpt: "Learn the general rules for visiting someone in prison or jail, including how to get approved, what to wear, what to bring, and what to expect.",
    category: "Visitation",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Prison Visitation Rules: What You Need to Know Before You Visit",
    seoDescription: "Learn how to get approved for prison visitation, what to bring, what to wear, and what to expect during your first visit. Covers both in-person and video visits.",

    intro: [
      "Visiting someone in prison requires advance approval and preparation. Rules vary by facility, but most follow the same general framework for who can visit, how to get approved, and what is allowed during the visit.",
      "This guide covers the key steps to becoming an approved visitor, what to expect on the day, and how to avoid common mistakes that can end a visit early.",
    ],

    sections: [
      {
        heading: "How to Get Approved as a Visitor",
        body: [
          "Most facilities require visitors to submit an application before visiting for the first time. The inmate usually initiates this by adding your name to their visitor list. The facility then runs a background check on you.",
          "People with certain criminal records, active warrants, or outstanding fines may be denied as visitors. Results typically take 2 to 4 weeks. Some facilities accept same-day visits after approval, but most require scheduling.",
          "Bring a valid government-issued photo ID on the day of the visit. The name on your ID must exactly match the name you used on your application. Expired IDs are generally not accepted.",
        ],
      },
      {
        heading: "What to Wear",
        body: [
          "Dress codes at correctional facilities are strict and vary by location. Most prohibit clothing in the same colors as inmate uniforms, typically orange, tan, beige, or all-white. Revealing clothing, camouflage, and clothing with offensive text or graphics are also usually prohibited.",
          "Wear comfortable, modest clothing. Avoid underwire bras, as metal detectors will flag them and may create problems at the entry checkpoint. Many facilities provide specific dress code guidelines on their website.",
        ],
      },
      {
        heading: "What to Bring and What to Leave Behind",
        body: [
          "Leave almost everything in your car or at home. Most facilities allow only a government-issued ID, a limited amount of cash (often in coins for vending machines), car keys, and approved items for infants if applicable.",
          "Do not bring phones, cameras, smartwatches, food, drinks, bags, or personal medications unless specifically approved in advance. Items brought in without permission can result in the visit being terminated and your visitor status revoked.",
        ],
      },
      {
        heading: "What to Expect During the Visit",
        body: [
          "You will pass through a security checkpoint with a metal detector and possibly a pat-down search. This is standard and applies to all visitors. Allow extra time, especially for your first visit.",
          "Visits take place in a designated visitation room or area. Contact visits allow limited physical contact such as a brief hug at the start and end. Non-contact visits take place through a glass partition. Rules on contact vary by facility and security level.",
          "Visits last anywhere from 30 minutes to several hours depending on the facility and the inmate's status. You may be asked to leave early if the facility goes on lockdown for security reasons. This is not related to anything you or the inmate did.",
        ],
      },
    ],

    takeaways: [
      "You must be on the inmate's approved visitor list before you can visit.",
      "Background checks are standard and can take 2 to 4 weeks.",
      "Bring only a valid government-issued ID and the limited items explicitly permitted.",
      "Follow the dress code carefully. Violations can prevent entry.",
      "Security checkpoints with metal detectors apply to all visitors without exception.",
      "Visits can be cut short by facility lockdowns, which are outside your control.",
    ],

    faq: [
      {
        question: "Can children visit someone in prison?",
        answer: "Yes, in most cases. Children must be accompanied by an adult, who must be an approved visitor. Some facilities require children to be separately listed as visitors. Check the facility's rules for minors.",
      },
      {
        question: "What if I am denied as a visitor?",
        answer: "You can typically appeal a denial by contacting the facility's visiting office. The denial reason matters. Background check results, active warrants, or falsified application information are harder to appeal than administrative errors.",
      },
      {
        question: "Can I bring food or drinks?",
        answer: "Generally, no. Most facilities do not allow outside food. Vending machines in visiting areas may be available. Some facilities allow small amounts of cash to use those machines.",
      },
      {
        question: "What happens if I wear the wrong thing?",
        answer: "You will likely be turned away at the checkpoint and not allowed to visit that day. Some facilities have spare coveralls or clothing you can change into, but this is not standard. Check the dress code before every visit.",
      },
      {
        question: "How often can I visit?",
        answer: "Visitation frequency limits vary by facility and the inmate's behavior status. A typical allowance is one to two visits per week, with limits on the total number of visitors per session.",
      },
    ],

    relatedGuideSlugs: ["what-to-expect-first-prison-visit", "how-video-visitation-works", "inmate-communication-guide"],
    relatedTermSlugs: ["visitation-rules", "correctional-facility"],
    relatedProviderSlugs: [],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/video-calls",
    ctaLabel: "Explore Video Visitation",
  },

  "how-jpay-works": {
    id: "guide-10",
    slug: "how-jpay-works",
    title: "How JPay Works",
    excerpt: "A complete guide to JPay, the most widely used inmate communication platform for state prisons, covering messaging, video, money transfer, and account setup.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How JPay Works: Complete Guide to JPay Inmate Communication",
    seoDescription: "Learn how JPay works for inmate communication. Covers account setup, messaging stamps, video visits, money transfers, and the JPay mobile app.",

    intro: [
      "JPay is one of the most widely used inmate communication platforms in the United States, serving families with loved ones in state prison systems across dozens of states.",
      "This guide explains how JPay works, how to create an account, what services are available, and what everything costs.",
    ],

    sections: [
      {
        heading: "What JPay Offers",
        body: [
          "JPay provides electronic messaging, video visitation, money transfers to inmate trust accounts, and in facilities with tablet programs, access to digital content such as music and e-books.",
          "Not every service is available at every facility. A facility may have JPay for money transfers but not for messaging, or vice versa. When you look up a facility on JPay, it will show which services are active there.",
        ],
      },
      {
        heading: "How to Set Up a JPay Account",
        body: [
          "Go to jpay.com or download the JPay app on iOS or Android. Create an account with your name, email address, and a password. Find the inmate by searching their name, inmate ID, and state. Once located, add them to your account.",
          "For messaging, the first contact request may need to be sent by the inmate from their end or through the facility's registration process. Follow the instructions on the platform after adding the inmate.",
        ],
      },
      {
        heading: "How JPay Messaging Works",
        body: [
          "JPay uses a stamp system for messaging. You purchase stamps through the platform and use one stamp per message sent. Stamps typically cost $0.33 to $0.47 depending on the state and current pricing.",
          "Messages are reviewed before delivery. Most messages arrive within a few hours. You can attach photos to messages for an additional charge. Photo attachments go through the same review process as text messages.",
        ],
      },
      {
        heading: "Money Transfers Through JPay",
        body: [
          "JPay is one of the most common platforms for sending money to inmate trust accounts. You can send money online, through the app, or by phone. A processing fee applies and typically ranges from $4.95 to $11.95 depending on the transfer amount and method.",
          "Funds typically reach the inmate's account within a few hours for online transfers. Money sent by money order or check takes longer. Always use the correct inmate ID and legal name to avoid rejected transfers.",
        ],
      },
    ],

    takeaways: [
      "JPay serves state prison systems. Federal prisons use CorrLinks, not JPay.",
      "Services vary by facility. Check the JPay site to see what is available for your loved one.",
      "Messaging uses a stamp system at $0.33 to $0.47 per stamp.",
      "Money transfers carry processing fees of $4.95 to $11.95.",
      "The JPay mobile app is available for iOS and Android.",
      "Always use the inmate's full legal name and correct ID number for all transactions.",
    ],

    faq: [
      {
        question: "Does JPay work for federal prisons?",
        answer: "No. Federal Bureau of Prisons facilities use CorrLinks, not JPay. JPay is only for state prisons and some county facilities.",
      },
      {
        question: "How many stamps do I need?",
        answer: "One stamp covers one standard text message. Photo attachments require additional stamps. Purchase a small bundle first to test the system before buying in bulk.",
      },
      {
        question: "What happens to unused stamps if my loved one is transferred?",
        answer: "Stamps are typically tied to your JPay account, not the inmate's location. If the new facility also uses JPay, your stamps should still be usable. Contact JPay support if you encounter issues after a transfer.",
      },
      {
        question: "Can I use JPay for video visits?",
        answer: "JPay offers video visitation at participating facilities. Not all JPay facilities have video available. Check the facility's page on JPay to confirm.",
      },
      {
        question: "Is the JPay app free?",
        answer: "Yes, the JPay app is free to download. You pay for stamps, transfers, and any other services you use through the app.",
      },
    ],

    relatedGuideSlugs: ["how-inmate-messaging-works", "how-corrlinks-works", "best-inmate-messaging-services"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "money-transfer"],
    relatedProviderSlugs: ["jpay", "corrlinks", "connectnetwork"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks", "jpay-vs-connectnetwork", "jpay-vs-gettingout"],
    ctaType: "provider",
    ctaTarget: "/provider/jpay",
    ctaLabel: "View JPay Details",
  },

  "how-corrlinks-works": {
    id: "guide-11",
    slug: "how-corrlinks-works",
    title: "How CorrLinks Works",
    excerpt: "Learn how CorrLinks works for messaging federal inmates, how to register, how the approval process works, and what the service costs.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How CorrLinks Works: Federal Inmate Messaging Guide",
    seoDescription: "Learn how CorrLinks works for communicating with federal inmates. Covers registration, the approval process, messaging costs, and how the system differs from JPay.",

    intro: [
      "CorrLinks is the only approved electronic messaging platform for the Federal Bureau of Prisons. If your loved one is in a federal facility, CorrLinks is the only way to exchange electronic messages with them.",
      "This guide explains how the CorrLinks system works, how to register, and what to expect during the approval process.",
    ],

    sections: [
      {
        heading: "What CorrLinks Is",
        body: [
          "CorrLinks is an email-style messaging platform operated by Advanced Technologies Group. It holds an exclusive contract with the Federal Bureau of Prisons. Unlike JPay or ConnectNetwork, CorrLinks does not serve state prisons. It is strictly for federal facilities.",
          "CorrLinks provides text messaging only. Photo sharing and video visitation at federal facilities are handled through separate services. Money transfers for federal inmates go through Access Corrections, not CorrLinks.",
        ],
      },
      {
        heading: "How to Register",
        body: [
          "Go to corrlinks.com and create a free account using your email address. You do not search for the inmate yourself. Instead, the inmate must send you an invitation from their CorrLinks terminal inside the facility.",
          "Once the inmate sends the invitation, you receive an email from CorrLinks with a link to accept it. You must accept within 30 days or the invitation expires. After acceptance, both of you can exchange messages.",
        ],
      },
      {
        heading: "How Messaging Works",
        body: [
          "CorrLinks messaging works like email. You write a message, send it, and the inmate receives it on the CorrLinks terminal in the facility. Messages are reviewed before delivery.",
          "CorrLinks charges a flat monthly subscription fee or per-message fees depending on the plan. The federal inmate's account is charged for messages they send to you. Messages you send are charged to your account. Rates are set by the BOP and are regulated.",
        ],
      },
      {
        heading: "Key Differences from JPay",
        body: [
          "JPay uses a stamp system. CorrLinks uses an account balance that is drawn down per message. JPay serves state prisons. CorrLinks serves federal prisons exclusively. JPay offers photo sharing, video calls, and money transfers in one platform. CorrLinks handles messaging only.",
          "If your loved one is transferred from a federal to a state facility or vice versa, you will need to switch platforms. CorrLinks accounts cannot be used at state facilities, and JPay cannot be used at federal facilities.",
        ],
      },
    ],

    takeaways: [
      "CorrLinks is the only messaging platform approved for federal Bureau of Prisons facilities.",
      "The inmate must send you an invitation. You cannot initiate contact through CorrLinks.",
      "Registration is free. Costs are per-message and charged to both sender and receiver.",
      "CorrLinks handles messaging only. Video and money transfers use different services.",
      "Invitations expire after 30 days if not accepted.",
      "If your loved one is in a state prison, you need JPay or another platform, not CorrLinks.",
    ],

    faq: [
      {
        question: "Can I send the first message on CorrLinks?",
        answer: "No. The inmate must send you the first invitation from inside the facility. You can only accept the invitation and reply after it has been sent.",
      },
      {
        question: "What if the inmate's invitation expired?",
        answer: "The inmate must send a new invitation from their terminal. Invitations expire after 30 days. There is no way to reactivate an expired invitation on your end.",
      },
      {
        question: "Does CorrLinks work on mobile?",
        answer: "CorrLinks does not have a dedicated mobile app. The website is accessible on mobile browsers, but the experience is optimized for desktop.",
      },
      {
        question: "How much does CorrLinks cost?",
        answer: "Messaging fees are charged per message. Both the sender and recipient pay per message. Exact rates are set by the BOP. Check the CorrLinks pricing page for the current fee schedule.",
      },
      {
        question: "Can I use CorrLinks for money transfers?",
        answer: "No. CorrLinks handles messaging only. To send money to a federal inmate, use Access Corrections or another BOP-approved financial service.",
      },
    ],

    relatedGuideSlugs: ["how-jpay-works", "federal-prison-vs-state-prison", "how-inmate-messaging-works"],
    relatedTermSlugs: ["inmate-messaging", "federal-prison", "electronic-messaging"],
    relatedProviderSlugs: ["corrlinks", "jpay"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks", "corrlinks-vs-connectnetwork"],
    ctaType: "provider",
    ctaTarget: "/provider/corrlinks",
    ctaLabel: "View CorrLinks Details",
  },

  "best-inmate-messaging-services": {
    id: "guide-12",
    slug: "best-inmate-messaging-services",
    title: "Best Inmate Messaging Services",
    excerpt: "Compare the top inmate messaging platforms including JPay, CorrLinks, ConnectNetwork, and GettingOut to find the right option for your situation.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Best Inmate Messaging Services: JPay vs CorrLinks vs ConnectNetwork",
    seoDescription: "Compare the best inmate messaging services including JPay, CorrLinks, ConnectNetwork, and GettingOut. Find out which platform is right for your situation.",

    intro: [
      "The right inmate messaging service depends on where your loved one is housed, not which platform you prefer. Each facility contracts with one provider, and you must use that provider. This guide compares the main platforms to help you understand what to expect from each one.",
      "The platforms covered here are JPay, CorrLinks, ConnectNetwork, GettingOut, and TextBehind.",
    ],

    sections: [
      {
        heading: "JPay",
        body: [
          "JPay is the most widely used platform for state prisons. It operates in dozens of states and offers messaging, video visitation, money transfer, and in some facilities, tablet-based digital content.",
          "Messaging uses a stamp system at roughly $0.33 to $0.47 per message. The JPay app is available for iOS and Android. Setup is straightforward. JPay does not serve federal prisons.",
        ],
      },
      {
        heading: "CorrLinks",
        body: [
          "CorrLinks is exclusively for federal Bureau of Prisons facilities. It handles messaging only. The inmate must invite you before you can correspond. There is no app. The website functions on mobile but was designed for desktop use.",
          "Costs are per-message and charged to both parties. CorrLinks is not optional if your loved one is in a federal facility. It is the only approved platform.",
        ],
      },
      {
        heading: "ConnectNetwork",
        body: [
          "ConnectNetwork, operated by Global Tel Link, serves a large network of state prisons and county jails. It offers messaging, video visits, phone account management, and money transfers.",
          "The platform is widely available across both state and county systems, making it one of the most broadly applicable options. Interface quality and pricing have improved over recent years.",
        ],
      },
      {
        heading: "GettingOut and TextBehind",
        body: [
          "GettingOut is common at county jails. It focuses on video visitation and messaging, with a mobile app that handles most features. If your loved one is in a county jail, GettingOut is worth checking first.",
          "TextBehind specializes in print-and-deliver letters and photos. You type a message online, and it is printed and delivered to the inmate like physical mail. This is useful at facilities that do not offer electronic messaging. Cost is around $0.49 per message.",
        ],
      },
    ],

    takeaways: [
      "You must use the platform your loved one's facility contracts with. You cannot choose freely.",
      "JPay serves most state prisons. CorrLinks is exclusive to federal Bureau of Prisons facilities.",
      "ConnectNetwork covers a broad mix of state prisons and county jails.",
      "GettingOut is common at county jails and focuses on video and messaging.",
      "TextBehind delivers printed messages where electronic messaging is not available.",
      "Use the facility's detail page on this site to see which platforms are available.",
    ],

    faq: [
      {
        question: "Can I use multiple messaging platforms for one person?",
        answer: "A facility only supports one messaging platform at a time. You do not choose between them. If the facility uses JPay, everyone who communicates with that inmate uses JPay.",
      },
      {
        question: "What if the facility switches providers?",
        answer: "This can happen. Contracts between facilities and providers do expire and change. If communication suddenly stops working, confirm with the facility whether a provider switch has occurred.",
      },
      {
        question: "Which platform has the best mobile app?",
        answer: "JPay and GettingOut both have well-reviewed mobile apps. CorrLinks does not have an app. ConnectNetwork has an app with mixed reviews. Quality varies and updates frequently.",
      },
      {
        question: "Is there a platform that works at all facilities?",
        answer: "No. No single platform covers all facilities. The provider depends entirely on the facility's contract. TextBehind comes closest to universal reach because it delivers printed mail, which nearly all facilities accept.",
      },
    ],

    relatedGuideSlugs: ["how-jpay-works", "how-corrlinks-works", "how-connectnetwork-works", "how-inmate-messaging-works"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging"],
    relatedProviderSlugs: ["jpay", "corrlinks", "connectnetwork", "gettingout", "textbehind"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks", "jpay-vs-connectnetwork", "textbehind-vs-smartinmate"],
    ctaType: "directory",
    ctaTarget: "/providers",
    ctaLabel: "Browse All Providers",
  },

  "how-to-set-up-inmate-email": {
    id: "guide-13",
    slug: "how-to-set-up-inmate-email",
    title: "How to Set Up Inmate Email",
    excerpt: "A step-by-step guide to creating an inmate email account, finding the right platform, getting approved as a contact, and sending your first message.",
    category: "Getting Started",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Set Up Inmate Email: Step-by-Step Account Setup Guide",
    seoDescription: "Learn how to set up inmate email step by step. Find the right platform, create your account, get approved as a contact, and send your first message.",

    intro: [
      "Setting up inmate email takes about 15 minutes once you know which platform the facility uses. The process involves creating an account, finding the inmate, and going through a contact approval step before you can exchange messages.",
      "This guide walks through every step in order.",
    ],

    sections: [
      {
        heading: "Step 1: Find Out Which Platform to Use",
        body: [
          "You cannot use regular email to contact someone in prison. You need the platform the facility has contracted with. The most common platforms are JPay for state prisons, CorrLinks for federal prisons, ConnectNetwork for many state and county facilities, and GettingOut for county jails.",
          "Look up the facility on this site or call the facility directly to confirm which platform they use. Creating an account on the wrong platform wastes time and will not get any messages through.",
        ],
      },
      {
        heading: "Step 2: Create Your Account",
        body: [
          "Go to the platform's website or download their app. Sign up with your email address, a password, your full legal name, and a valid phone number for verification. Use your real name. This information may be checked against your approved contact status.",
          "For CorrLinks, do not create an account yet. The inmate must send you an invitation first. Your account is created during the acceptance process.",
        ],
      },
      {
        heading: "Step 3: Find the Inmate and Request Contact",
        body: [
          "Once registered, search for the inmate by their full legal name, inmate ID number, and facility. If you have their inmate ID, this is the fastest lookup. Add them to your contacts on the platform.",
          "Most platforms require both sides to approve contact before messaging can begin. Depending on the platform, you may need to submit a contact request that the inmate accepts, or the inmate may need to initiate first. CorrLinks always requires the inmate to send the first invitation.",
        ],
      },
      {
        heading: "Step 4: Purchase Credits and Send Your First Message",
        body: [
          "Once approved, purchase messaging credits or stamps. Do not buy a large bundle until you confirm the system works. Start with a small purchase, write a short test message, and wait for the delivery confirmation.",
          "Most messages arrive within a few hours. If you do not hear back within a few days, confirm the platform is active at that facility and that the inmate's account is in good standing.",
        ],
      },
    ],

    takeaways: [
      "You cannot use regular email. You must use the specific platform the facility contracts with.",
      "Start by confirming which platform is correct before creating any account.",
      "Use your real legal name when registering. It may be checked during approval.",
      "For CorrLinks, the inmate must send the first invitation. You cannot start the process.",
      "Buy a small credit bundle first to confirm the system works before purchasing more.",
      "If setup is blocked, contact the facility to confirm your contact status.",
    ],

    faq: [
      {
        question: "How long does contact approval take?",
        answer: "It varies by platform and facility. JPay approvals can take a few hours to a few days. CorrLinks approvals happen as soon as you accept the inmate's invitation. Some facilities require additional manual review.",
      },
      {
        question: "What if the inmate doesn't know their inmate ID?",
        answer: "Inmates receive their ID number when processed into the facility. It appears on their facility ID card. They can also ask staff. You can look up federal inmates through bop.gov.",
      },
      {
        question: "Can I have multiple inmates on one account?",
        answer: "Yes. Most platforms allow you to add multiple incarcerated contacts to a single account. Each contact has their own messaging thread and approval status.",
      },
      {
        question: "What if I used the wrong name when signing up?",
        answer: "Contact the platform's customer support to correct your name before any contact request is submitted. A name mismatch can cause approval to fail or be delayed.",
      },
    ],

    relatedGuideSlugs: ["how-inmate-messaging-works", "how-jpay-works", "how-corrlinks-works", "inmate-communication-guide"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "inmate-account"],
    relatedProviderSlugs: ["jpay", "corrlinks", "connectnetwork"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/messaging",
    ctaLabel: "Explore Messaging Platforms",
  },

  "how-connectnetwork-works": {
    id: "guide-14",
    slug: "how-connectnetwork-works",
    title: "How ConnectNetwork Works",
    excerpt: "Learn how ConnectNetwork, operated by Global Tel Link, works for inmate communication across state prisons and county jails.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How ConnectNetwork Works: Inmate Communication Guide",
    seoDescription: "Learn how ConnectNetwork works for messaging, phone calls, video visits, and money transfers at state prisons and county jails across the US.",

    intro: [
      "ConnectNetwork is a communication platform operated by Global Tel Link (GTL), one of the largest inmate communications companies in the United States. It serves state prisons, county jails, and federal facilities.",
      "This guide covers how to set up a ConnectNetwork account, what services are available, and how it compares to other platforms.",
    ],

    sections: [
      {
        heading: "What ConnectNetwork Offers",
        body: [
          "ConnectNetwork offers electronic messaging, phone call account management, video visitation, money transfer to inmate accounts, and at some facilities, photo sharing. It is a multi-service platform, similar to JPay.",
          "Because GTL is one of the largest prison phone providers, ConnectNetwork is often the platform managing phone accounts at facilities where Securus or another GTL product handles the phones.",
        ],
      },
      {
        heading: "How to Create a ConnectNetwork Account",
        body: [
          "Go to connectnetwork.com or download the ConnectNetwork app. Register with your email address, full name, and phone number. After registration, search for the inmate by name and facility to add them to your account.",
          "Contact approval typically requires either the inmate to add you or a brief review period on the platform's end. Setup is similar to JPay and takes about 10 to 15 minutes.",
        ],
      },
      {
        heading: "Messaging Through ConnectNetwork",
        body: [
          "ConnectNetwork messaging works on a credit system. You purchase credits and spend them to send messages. The cost per message varies by facility and state. Credits can be purchased in bundles through the website or app.",
          "Messages are reviewed before delivery. Delivery time is typically within a few hours to one business day.",
        ],
      },
      {
        heading: "Phone Calls and Money Transfers",
        body: [
          "Many families use ConnectNetwork primarily to manage their phone account. If the facility's phone calls go through GTL, you set up a prepaid account on ConnectNetwork or the related GTL platform to receive calls at a prepaid rate.",
          "Money transfers through ConnectNetwork are processed to the inmate's trust account. Processing fees apply. The same inmate ID and legal name requirements apply as with any other platform.",
        ],
      },
    ],

    takeaways: [
      "ConnectNetwork is operated by Global Tel Link and serves both state prisons and county jails.",
      "It offers messaging, phone accounts, video visits, and money transfers.",
      "Credit-based messaging costs vary by facility. Check pricing before purchasing.",
      "If your facility uses GTL for phone calls, ConnectNetwork manages your phone account.",
      "Setup takes about 10 to 15 minutes and is similar to JPay's process.",
      "The ConnectNetwork app is available for iOS and Android.",
    ],

    faq: [
      {
        question: "Is ConnectNetwork the same as GTL?",
        answer: "GTL (Global Tel Link) is the company that operates ConnectNetwork. You may see both names used interchangeably. The platform is accessed through connectnetwork.com.",
      },
      {
        question: "Can I use ConnectNetwork for federal inmates?",
        answer: "ConnectNetwork does serve some federal facilities but is not the BOP-wide platform. Federal inmates in BOP facilities use CorrLinks for messaging. ConnectNetwork may handle phone or other services at some federal facilities.",
      },
      {
        question: "What if the facility has both JPay and ConnectNetwork?",
        answer: "This is rare. Most facilities contract exclusively with one messaging provider. If you are unsure, contact the facility to confirm which platform is used for each service.",
      },
      {
        question: "How do I load money on my ConnectNetwork phone account?",
        answer: "Log into your ConnectNetwork account, go to the phone section, and add funds using a debit or credit card. The balance is applied to incoming calls from the facility.",
      },
    ],

    relatedGuideSlugs: ["how-jpay-works", "how-corrlinks-works", "best-inmate-messaging-services"],
    relatedTermSlugs: ["inmate-messaging", "inmate-phone-calls"],
    relatedProviderSlugs: ["connectnetwork", "jpay", "gettingout"],
    relatedComparisonSlugs: ["jpay-vs-connectnetwork", "corrlinks-vs-connectnetwork", "gettingout-vs-connectnetwork"],
    ctaType: "provider",
    ctaTarget: "/provider/connectnetwork",
    ctaLabel: "View ConnectNetwork Details",
  },

  "prison-phone-call-costs": {
    id: "guide-15",
    slug: "prison-phone-call-costs",
    title: "Why Prison Phone Calls Are So Expensive",
    excerpt: "Understand why prison phone calls cost more than regular calls, how FCC regulations have changed pricing, and how to reduce what you spend.",
    category: "Money and Accounts",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Why Prison Phone Calls Are So Expensive: Cost Guide",
    seoDescription: "Learn why prison phone calls cost so much, how provider contracts and facility fees inflate prices, and what FCC caps mean for what you actually pay.",

    intro: [
      "Prison phone calls have historically cost far more than regular calls. A 15-minute call that would be free on a smartphone can cost $5 to $15 when placed from a correctional facility.",
      "This guide explains why the costs are so high, what has changed under recent FCC regulations, and how to reduce what you spend on phone communication.",
    ],

    sections: [
      {
        heading: "Why the Costs Are So High",
        body: [
          "Prison phone providers operate under contracts with correctional facilities. These contracts often include a site commission, meaning a portion of every call's revenue goes back to the facility. Facilities use this income for various purposes including inmate programs.",
          "Because the facility selects one provider through an exclusive contract, there is no market competition at the consumer level. The inmate and their family have no choice but to use whatever provider the facility has contracted with, regardless of price.",
        ],
      },
      {
        heading: "What the FCC Has Done",
        body: [
          "The Federal Communications Commission has worked to cap interstate prison call rates. As of recent rulemakings, per-minute interstate rates are capped at $0.21 for prisons and $0.12 for jails. These caps apply to calls that cross state lines.",
          "Intrastate calls, which stay within one state, have historically been harder to regulate at the federal level. Some states have enacted their own caps. Others have not. If the facility and the caller are in the same state, federal caps may not apply.",
        ],
      },
      {
        heading: "Understanding the Full Cost",
        body: [
          "The per-minute rate is only one part of the cost. Connection fees, account setup fees, payment processing fees, and maintenance fees can add $1 to $3 per call on top of the per-minute charge.",
          "A 15-minute call at $0.21 per minute costs $3.15 in rate. With a $3.00 connection fee and a $1.50 payment processing fee from loading funds, the effective cost per call can reach $7.65 or more.",
        ],
      },
      {
        heading: "How to Reduce Costs",
        body: [
          "Use a prepaid account instead of collect calls. Prepaid accounts almost always offer lower per-minute rates and more transparent fees than collect billing.",
          "Load funds in larger amounts when possible. Some providers charge a flat processing fee per deposit regardless of the amount. Depositing $50 at once costs less per dollar than depositing $10 five times.",
          "If digital messaging is available at the facility, it is significantly cheaper than phone calls for most communication. A JPay stamp costs less than $0.50. A 15-minute phone call can cost ten times that.",
        ],
      },
    ],

    takeaways: [
      "Prison call costs are high because providers hold exclusive contracts with facilities, removing market competition.",
      "Site commissions paid to facilities from call revenue add to the total cost.",
      "FCC caps apply to interstate calls at $0.21 per minute for prisons and $0.12 for jails.",
      "Fees beyond the per-minute rate can double or triple the effective cost per call.",
      "Prepaid accounts offer better rates than collect call billing.",
      "Digital messaging is a much cheaper alternative for non-urgent communication.",
    ],

    faq: [
      {
        question: "Are prison phone call rates getting lower?",
        answer: "Yes, over time. FCC regulations have brought interstate rates down significantly compared to 10 years ago. Advocacy groups continue to push for broader caps on intrastate rates and fees.",
      },
      {
        question: "What is a site commission?",
        answer: "A site commission is a payment from the phone provider to the correctional facility, calculated as a percentage of call revenue. It is a structural reason for high call prices.",
      },
      {
        question: "Can I negotiate a better rate with the phone provider?",
        answer: "No. Rates are set by contract and are the same for all users at a given facility. There is no individual negotiation available.",
      },
      {
        question: "Is messaging always cheaper than calling?",
        answer: "In most cases, yes. Digital messaging through platforms like JPay typically costs under $0.50 per message. Phone calls at FCC-capped rates plus fees often cost $5 to $10 for a 15 to 20 minute call.",
      },
    ],

    relatedGuideSlugs: ["how-prison-phone-calls-work", "how-to-send-money-to-an-inmate", "how-inmate-messaging-works"],
    relatedTermSlugs: ["inmate-phone-calls", "money-transfer"],
    relatedProviderSlugs: ["connectnetwork", "jpay"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/phone-calls",
    ctaLabel: "Explore Phone Call Options",
  },

  "county-jail-vs-state-prison": {
    id: "guide-16",
    slug: "county-jail-vs-state-prison",
    title: "County Jail vs State Prison",
    excerpt: "Learn the differences between county jails and state prisons, who is held in each, how communication works, and which providers are typically used.",
    category: "Facility Types",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "County Jail vs State Prison: Key Differences Explained",
    seoDescription: "Learn the differences between county jails and state prisons. Who is held where, how communication works, which providers are used, and what visitation looks like.",

    intro: [
      "County jails and state prisons serve different purposes in the correctional system. Understanding which type of facility your loved one is in affects which communication platforms you need, how visitation works, and what to expect day to day.",
      "This guide explains the core differences between the two and what those differences mean practically.",
    ],

    sections: [
      {
        heading: "Who Is Held in a County Jail",
        body: [
          "County jails are operated by county sheriff's offices. They typically hold people who have been recently arrested and are awaiting trial, people serving short sentences of less than one year, and people awaiting transfer to a state or federal facility.",
          "Because jails hold people at various stages of the legal process, the population changes frequently. Someone may be in the county jail for a few days after arrest or may stay for months while their case goes through the courts.",
        ],
      },
      {
        heading: "Who Is Held in a State Prison",
        body: [
          "State prisons hold people who have been convicted of state-level crimes and sentenced to more than one year. After sentencing, people typically move from county jail to state prison, often spending time at a reception or intake center first.",
          "State prisons have more stable populations than county jails. Most people in state prison will be there for at least a year and sometimes much longer.",
        ],
      },
      {
        heading: "Communication Differences",
        body: [
          "County jails tend to use different providers than state prisons. GettingOut and ConnectNetwork are common at county jails. JPay is rare at the county level and more common at state prisons.",
          "County jail communication rules can also be more restrictive than state prisons during the pretrial phase. Some jails limit messaging during active cases. Check with the specific facility.",
        ],
      },
      {
        heading: "Visitation Differences",
        body: [
          "County jails often have more limited visitation options than state prisons. Many county jails have replaced in-person visitation with video-only visits. State prisons more often still allow in-person contact visits.",
          "Scheduling and dress code rules apply in both. County jails may have fewer available time slots due to smaller visitation areas and higher staff-to-inmate ratios.",
        ],
      },
    ],

    takeaways: [
      "County jails hold people awaiting trial or serving short sentences. State prisons hold people sentenced to more than a year.",
      "Jail populations change frequently. State prison populations are more stable.",
      "County jails typically use GettingOut or ConnectNetwork. State prisons more often use JPay.",
      "County jails may have more restrictive communication rules, especially before trial.",
      "In-person visitation is more common at state prisons. Many county jails are video-only.",
      "Your loved one may move from county jail to state prison after sentencing.",
    ],

    faq: [
      {
        question: "How do I know which facility my loved one is currently in?",
        answer: "If recently arrested, search the county's jail roster. If sentenced, check the state Department of Corrections inmate locator. The population often moves from jail to prison after sentencing.",
      },
      {
        question: "Can I visit someone in county jail before their trial?",
        answer: "Usually yes, if you are on the approved visitor list. Some jails restrict visitation during active pretrial detention based on the nature of the case. Check with the facility.",
      },
      {
        question: "What happens to communication accounts when someone moves from jail to prison?",
        answer: "Accounts do not automatically transfer. If the new facility uses a different provider, you will need to set up a new account on the new platform.",
      },
      {
        question: "Do county jails have the same communication technology as state prisons?",
        answer: "Not always. Smaller county jails may have older phone systems and fewer digital options. Larger county jail systems in major metros often have robust communication technology.",
      },
    ],

    relatedGuideSlugs: ["federal-prison-vs-state-prison", "how-to-find-an-inmate", "prison-visitation-rules"],
    relatedTermSlugs: ["county-jail", "state-prison", "correctional-facility"],
    relatedProviderSlugs: ["gettingout", "connectnetwork"],
    relatedComparisonSlugs: ["jpay-vs-gettingout", "gettingout-vs-connectnetwork"],
    ctaType: "directory",
    ctaTarget: "/facilities",
    ctaLabel: "Search Facility Directory",
  },

  "what-to-expect-first-prison-visit": {
    id: "guide-17",
    slug: "what-to-expect-first-prison-visit",
    title: "What to Expect on Your First Prison Visit",
    excerpt: "A practical guide for first-time prison visitors. Covers what happens at each stage of the visit, how to prepare, and how to handle the emotional experience.",
    category: "Visitation",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "What to Expect on Your First Prison Visit: Visitor Guide",
    seoDescription: "Prepare for your first prison visit. Learn what happens at the checkpoint, what the visiting room is like, how long visits last, and how to handle the experience.",

    intro: [
      "Visiting a correctional facility for the first time can be intimidating if you do not know what to expect. The security process, the environment, and the rules are unlike anything most people encounter in daily life.",
      "This guide walks through the entire experience from arrival to departure so you feel prepared.",
    ],

    sections: [
      {
        heading: "Before You Arrive",
        body: [
          "Confirm your visit is scheduled and that you are on the approved visitor list. Bring only your government-issued photo ID. Leave everything else in your car, including your phone.",
          "Wear clothing that follows the facility's dress code. Avoid colors similar to inmate uniforms, revealing clothing, and anything with metal that would trigger the detector. Arriving in the wrong clothing means you will not be allowed in.",
          "Arrive early. Security processing takes time, especially for first-time visitors. Arriving 30 minutes before your scheduled time is a reasonable buffer.",
        ],
      },
      {
        heading: "At the Security Checkpoint",
        body: [
          "You will check in at a front desk or gate. Staff will verify your ID against the visitor list. You may need to sign in and declare that you are not bringing in any prohibited items.",
          "Next comes a metal detector screening. Empty your pockets completely. Remove your shoes if asked. Some facilities use a wand scanner in addition to the walk-through detector.",
          "Pat-down searches may occur, particularly at higher-security facilities. This applies to all visitors without exception and is not a sign that you are suspected of anything. It is standard procedure.",
        ],
      },
      {
        heading: "In the Visiting Room",
        body: [
          "The visiting room environment varies by facility. Some are open rooms with chairs and tables. Others are divided by glass with phone handsets for communication. At contact facilities, you may be able to sit across a table from your loved one.",
          "You will typically be allowed a brief hug at the start and end of the visit. Some facilities restrict all physical contact. Follow the rules you were given during check-in.",
          "Keep the conversation natural. There is no need to whisper or be secretive about normal topics. Staff monitor the room but are not listening to every conversation unless something attracts attention.",
        ],
      },
      {
        heading: "After the Visit",
        body: [
          "When the visit ends, staff will signal or announce the conclusion. Say your goodbyes and exit through the designated area. You may need to pass through a checkpoint again on the way out.",
          "It is normal to feel emotionally drained after a first visit. The environment can be stressful. Give yourself time to decompress afterward. Many families say the second visit is significantly easier than the first.",
        ],
      },
    ],

    takeaways: [
      "Confirm your appointment and approved visitor status before the day of the visit.",
      "Bring only your government-issued ID. Leave your phone and everything else in your car.",
      "Follow the dress code exactly. Wrong clothing means you will be turned away.",
      "Security processing includes metal detectors and possibly a pat-down. This is standard.",
      "Contact rules vary by facility. Follow the instructions you receive at check-in.",
      "First visits are emotionally intense. The experience gets easier over time.",
    ],

    faq: [
      {
        question: "Can I take photos during the visit?",
        answer: "Generally, no. Personal cameras and phones are not allowed inside. Some facilities have a designated photo area with a staff photographer for a fee.",
      },
      {
        question: "What do I do if I forget my ID?",
        answer: "You will not be allowed in without valid government-issued photo ID. If you forget it, you will need to reschedule. There are usually no exceptions.",
      },
      {
        question: "Can I bring gifts or food?",
        answer: "No outside food or gifts are allowed in the visiting room. Vending machines are available in many visiting areas. Gifts and packages must be sent through an approved vendor, not handed in during a visit.",
      },
      {
        question: "What if my loved one is not brought to the visiting room?",
        answer: "This can happen during lockdowns, medical issues, or disciplinary situations. Ask staff at the desk to confirm the status. If it is a lockdown, you will likely need to reschedule.",
      },
      {
        question: "Is it normal to feel upset during or after a visit?",
        answer: "Yes. Many visitors and incarcerated people find visits emotionally difficult, especially early in a sentence. This is a normal response to an unusual and stressful situation.",
      },
    ],

    relatedGuideSlugs: ["prison-visitation-rules", "how-video-visitation-works", "inmate-communication-guide"],
    relatedTermSlugs: ["visitation-rules", "correctional-facility"],
    relatedProviderSlugs: [],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/video-calls",
    ctaLabel: "Explore Video Visitation Options",
  },

  "how-photo-sharing-works-for-inmates": {
    id: "guide-18",
    slug: "how-photo-sharing-works-for-inmates",
    title: "How Photo Sharing Works for Inmates",
    excerpt: "Learn how to send photos to an incarcerated loved one, which platforms handle photo sharing, how photos are reviewed, and what formats are accepted.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How Photo Sharing Works for Inmates: Complete Guide",
    seoDescription: "Learn how to send photos to someone in prison. Covers platforms like Pigeonly and TextBehind, the review process, accepted formats, and typical costs.",

    intro: [
      "Sending photos to an incarcerated person requires a specific process. You cannot email or text photos to someone in prison. Photos must be sent through an approved platform that handles review, printing, and delivery.",
      "This guide explains how photo sharing works, which platforms to use, what gets accepted, and what it costs.",
    ],

    sections: [
      {
        heading: "How Photo Delivery Works",
        body: [
          "Photos sent to inmates go through one of two delivery methods. The first is digital delivery, where the inmate views the photo on a tablet or terminal screen. The second is print-and-deliver, where the platform prints the photo and delivers a physical copy to the inmate.",
          "Not all facilities support digital photo delivery. Print-and-deliver services like Pigeonly and TextBehind work at most facilities because the output is a physical print, which goes through the same mail handling as a standard letter.",
        ],
      },
      {
        heading: "Which Platforms Handle Photo Sharing",
        body: [
          "Pigeonly is a dedicated photo and mail service for inmates. You upload photos through the website or app, and Pigeonly prints and mails them to the facility. Prices are typically $1 to $3 per photo.",
          "TextBehind offers a similar print-and-deliver service for photos and letters. JPay allows photo attachments to messages at participating facilities for an extra charge. ConnectNetwork also supports photo messages at select facilities.",
        ],
      },
      {
        heading: "What Photos Are Accepted",
        body: [
          "Most facilities reject photos that are sexually explicit, show nudity, depict violence or criminal activity, or show security-sensitive areas like facility entrances. Photos must typically be standard print sizes such as 4x6.",
          "Polaroids, photos with stickers or glitter, photos with writing on the back, and photos sent in envelopes with staples or tape may be rejected depending on the facility's mail rules. Check the facility's photo policy before uploading.",
        ],
      },
      {
        heading: "Digital Photo Attachments",
        body: [
          "At facilities with JPay or ConnectNetwork digital messaging, you can attach photos to messages. The photo is reviewed electronically before being displayed on the inmate's terminal or tablet screen.",
          "Digital attachments cost extra stamps or credits depending on the platform. Image quality requirements vary. Most platforms accept standard smartphone photo formats (JPEG, PNG) and resize automatically.",
        ],
      },
    ],

    takeaways: [
      "You cannot email or text photos directly to inmates. A platform must handle the process.",
      "Print-and-deliver services like Pigeonly work at most facilities because the result is physical mail.",
      "Digital photo attachments are available at facilities with JPay or ConnectNetwork messaging.",
      "Photos go through a review process and can be rejected for content or format violations.",
      "Prices for print-and-deliver photos typically range from $1 to $3 per photo.",
      "Check the facility's photo policy before using any service to avoid rejected submissions.",
    ],

    faq: [
      {
        question: "Can I send photos taken on my phone?",
        answer: "Yes. Most photo sharing platforms accept uploads from your phone camera. The platform resizes and formats the photo before printing or delivering it.",
      },
      {
        question: "How long does it take for a printed photo to arrive?",
        answer: "Print-and-deliver photos typically take 5 to 10 business days to arrive, depending on the service and the facility's mail processing time.",
      },
      {
        question: "Are there limits on how many photos I can send?",
        answer: "Some facilities limit the total number of photos an inmate can receive per month. Check with the facility or the platform for specific limits.",
      },
      {
        question: "What happens if a photo is rejected?",
        answer: "The platform may notify you of the rejection. Some platforms refund the cost. Others do not. The facility is not required to explain the specific reason for a rejection.",
      },
    ],

    relatedGuideSlugs: ["how-inmate-messaging-works", "inmate-communication-guide", "prison-visitation-rules"],
    relatedTermSlugs: ["inmate-messaging"],
    relatedProviderSlugs: ["jpay", "connectnetwork", "pigeonly"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/photo-sharing",
    ctaLabel: "Explore Photo Sharing Options",
  },

  "inmate-communication-rules-by-state": {
    id: "guide-19",
    slug: "inmate-communication-rules-by-state",
    title: "Inmate Communication Rules by State",
    excerpt: "An overview of how inmate communication rules vary by state, what factors create the differences, and how to find the specific rules for any state's system.",
    category: "Communication Tips",
    difficulty: "Intermediate",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Inmate Communication Rules by State: Overview and Guide",
    seoDescription: "Learn how inmate communication rules vary by state, what creates those differences, and how to find the specific rules for the state your loved one is in.",

    intro: [
      "Inmate communication rules are not uniform across the United States. Each state's Department of Corrections sets its own policies for messaging, phone calls, visitation, and photo sharing. What is allowed in one state may be restricted in another.",
      "This guide explains why rules vary, what categories of rules differ most, and how to find the authoritative rules for any specific state.",
    ],

    sections: [
      {
        heading: "Why Rules Differ by State",
        body: [
          "Each state legislature and Department of Corrections has authority over how communication is managed in state facilities. There is no federal mandate that standardizes state prison communication policy.",
          "State budgets, political priorities, facility security levels, and the contracts negotiated with communication providers all influence what is available and under what terms. Two neighboring states with similar prison populations can have significantly different messaging rules.",
        ],
      },
      {
        heading: "What Varies Most",
        body: [
          "The platform used for messaging is the most significant variable. JPay dominates in many states, but ConnectNetwork, Securus, and other providers are also common. Some states run their own systems.",
          "Messaging content rules, photo size and quantity limits, phone call time limits, visitation frequency, and approved visitor background check requirements all vary. States also differ on whether video visitation substitutes for or supplements in-person visits.",
        ],
      },
      {
        heading: "How to Find State-Specific Rules",
        body: [
          "The most reliable source for communication rules is the state Department of Corrections website. Most states publish an inmate handbook online that covers all communication policies in detail.",
          "For facility-specific rules, the facility's official page or a direct call to the facility's visitation coordinator is the best resource. General state-level policy may be overridden at the facility level in some areas.",
          "This site's state pages provide links to each state's Department of Corrections, available providers, and facility directories. Use those as your starting point for any state-specific research.",
        ],
      },
      {
        heading: "Common Misconceptions",
        body: [
          "A common mistake is assuming rules learned from one facility apply everywhere. Someone who had experience with a facility in Florida, for example, may not realize that Texas operates under completely different policies with different providers and different visitation rules.",
          "Rules also change over time as contracts expire, legislation changes, or administrations shift. Always verify current rules from the official source rather than relying on information that may be outdated.",
        ],
      },
    ],

    takeaways: [
      "Each state sets its own inmate communication rules. There is no national standard for state prisons.",
      "The communication platform varies by state and facility based on provider contracts.",
      "State DOC websites publish inmate handbooks that are the authoritative source for rules.",
      "Facility-level rules can differ from state-level policy.",
      "Rules change when contracts change or legislation is updated.",
      "Do not assume rules from one state or facility apply to another.",
    ],

    faq: [
      {
        question: "How do I find the communication rules for a specific state?",
        answer: "Go to the state's Department of Corrections website and look for an inmate handbook or family guide. Most states publish this document publicly.",
      },
      {
        question: "Can a facility have stricter rules than the state DOC policy?",
        answer: "Yes. Facility wardens often have discretion to impose additional restrictions beyond state-level policy. This is common at higher-security facilities.",
      },
      {
        question: "What if I cannot find the rules online?",
        answer: "Call the facility directly. Ask to speak with the visitation coordinator or the inmate services unit. They can provide current rules for communication and visitation.",
      },
      {
        question: "Do federal prisons follow state rules?",
        answer: "No. Federal prisons follow BOP policy, which applies uniformly across all federal facilities regardless of what state they are in.",
      },
    ],

    relatedGuideSlugs: ["federal-prison-vs-state-prison", "county-jail-vs-state-prison", "inmate-communication-guide"],
    relatedTermSlugs: ["state-prison", "correctional-facility", "visitation-rules"],
    relatedProviderSlugs: ["jpay", "connectnetwork"],
    relatedComparisonSlugs: [],
    ctaType: "directory",
    ctaTarget: "/states",
    ctaLabel: "Browse States Directory",
  },

  "how-to-appeal-blocked-messages": {
    id: "guide-20",
    slug: "how-to-appeal-blocked-messages",
    title: "What to Do If Inmate Messages Are Blocked",
    excerpt: "Learn what causes inmate messages to be blocked, how to find out why, and what steps to take to restore communication with an incarcerated loved one.",
    category: "Communication Tips",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "What to Do If Inmate Messages Are Blocked: Step-by-Step Guide",
    seoDescription: "Learn why inmate messages get blocked, how to find out the reason, and what steps to take to restore messaging access for you or your incarcerated loved one.",

    intro: [
      "Finding out that your messages to an incarcerated loved one are being blocked or that they cannot receive your communications is stressful. There are several possible reasons, and most can be resolved with the right steps.",
      "This guide explains the common causes of blocked messages and what to do in each situation.",
    ],

    sections: [
      {
        heading: "Why Messages Get Blocked",
        body: [
          "Messages are blocked for several reasons. Content violations are the most common cause. Messages that include prohibited topics such as discussions of criminal activity, escape, threats, or explicit material are automatically flagged or rejected.",
          "Technical issues can also cause apparent blocking. An incorrect inmate ID, an account that has not completed the contact approval process, or insufficient credits or stamps can all prevent messages from sending successfully.",
          "Disciplinary restrictions imposed on the inmate are another cause. If the inmate has lost communication privileges as part of a disciplinary action, messages will not reach them until privileges are restored.",
        ],
      },
      {
        heading: "How to Find Out the Reason",
        body: [
          "Start with the platform itself. Check your sent messages for a delivery status. Platforms like JPay and ConnectNetwork show whether a message was delivered or flagged. An undelivered status without a specific error usually indicates a content review hold.",
          "Contact the platform's customer support. Explain the situation and ask for the delivery status of specific messages. They may be able to tell you whether the issue is on the platform's end or requires contact with the facility.",
          "Contact the facility directly if the platform support cannot resolve it. Ask for the inmate services coordinator or the communications unit. Be polite and specific about the dates and platform involved.",
        ],
      },
      {
        heading: "If Your Contact Status Has Been Revoked",
        body: [
          "If the facility has removed you from the inmate's approved contact list, you will need to be re-approved before communication can resume. This can happen if a content violation triggered an investigation, if someone at the facility raised a concern, or if a court order restricts communication.",
          "Re-approval requires submitting a new visitor or contact application, which goes through the same background check and facility review as the original. Depending on the reason for revocation, re-approval may be denied.",
        ],
      },
      {
        heading: "Preventing Future Blocks",
        body: [
          "Review the content rules for both the platform and the facility before sending any message. Focus on normal topics: family updates, daily life, encouragement. Avoid any discussion of legal strategy, criminal activity, finances beyond normal support, or coded references.",
          "If you are unsure whether a topic is permitted, it is safer to discuss it in person during a visit, where you can ask staff if needed, or through an attorney if it is a legal matter.",
        ],
      },
    ],

    takeaways: [
      "Content violations, technical errors, and disciplinary restrictions are the most common causes of blocked messages.",
      "Check the platform's delivery status first before assuming a block.",
      "Contact platform support for specific delivery status on flagged messages.",
      "If contact status was revoked, you must reapply and go through the approval process again.",
      "Avoid all prohibited content categories in every message, regardless of how casual the conversation seems.",
      "Legal matters should go through an attorney, not through the messaging platform.",
    ],

    faq: [
      {
        question: "Will I be notified if my message is blocked?",
        answer: "Sometimes. Platforms vary in how they communicate blocked messages. Some show a failed delivery status. Others silently suppress the message without notifying you. If you do not see a delivery confirmation, contact support.",
      },
      {
        question: "Can I appeal a blocked message?",
        answer: "You can contact the platform to inquire about the status of a specific message. Whether the block can be reversed depends on why it was blocked and who made the decision.",
      },
      {
        question: "What if the inmate's privileges have been suspended?",
        answer: "You will need to wait until privileges are restored. Contact the facility to understand the length and conditions of the suspension. There is usually nothing you can do to accelerate the process from the outside.",
      },
      {
        question: "Does a blocked message affect future messages?",
        answer: "A single blocked message does not automatically block all future messages. However, repeated violations can result in account suspension or permanent loss of messaging access.",
      },
      {
        question: "Should I contact a lawyer if communication is blocked?",
        answer: "If you believe the blocking is unjust or is violating someone's rights, consulting with an attorney who handles prisoner rights cases is reasonable. For standard content-related blocks, working through the platform and facility is usually sufficient.",
      },
    ],

    relatedGuideSlugs: ["how-inmate-messaging-works", "inmate-communication-rules-by-state", "inmate-communication-guide"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging"],
    relatedProviderSlugs: ["jpay", "corrlinks", "connectnetwork"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/messaging",
    ctaLabel: "Explore Messaging Platforms",
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// DIRECTORY EXPORT — featured first, then popular, then alphabetical by title
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_GUIDES: GuideBasic[] = Object.values(GUIDE_DETAILS)
  .map(({ id, slug, title, excerpt, category, difficulty, featured, popular, readingTimeMinutes }) => ({
    id, slug, title, excerpt, category, difficulty, featured, popular, readingTimeMinutes,
  }))
  .sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    if (a.popular !== b.popular) return a.popular ? -1 : 1
    return a.title.localeCompare(b.title)
  })

// Re-exported from the small file so server imports stay stable.
// Client components must import from lib/data/guide-categories directly.
export { GUIDE_CATEGORIES } from "./guide-categories"
