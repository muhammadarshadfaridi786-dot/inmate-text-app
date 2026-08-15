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
    title: "How Inmate Messaging Works: Complete Guide for Families",
    excerpt: "Learn how digital messaging to incarcerated loved ones works, which platforms are used, how messages are reviewed, and what it costs.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: true,
    popular: true,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How Inmate Messaging Works: Platforms, Costs, Rules and Setup",
    seoDescription: "Learn how inmate messaging works - which platforms to use, how messages are reviewed, what it costs, and how to send your first message to an incarcerated loved one. Free complete guide.",

    intro: [
      "Inmate messaging lets families and approved contacts send written messages to incarcerated loved ones through a digital platform. It works similarly to email but operates through a dedicated system approved by the correctional facility. You cannot use a regular email address to reach someone in prison.",
      "Every correctional facility chooses one messaging platform and contracts with that provider exclusively. The platform you need depends entirely on where your loved one is housed - not on which app you prefer. This guide explains how the system works, which platforms are most common, what messages cost, and what rules apply.",
      "The four most widely used inmate messaging platforms in the United States are JPay, CorrLinks, ConnectNetwork, and GettingOut. Each serves a different type of facility, and understanding which one your facility uses is the first step before creating any account.",
    ],

    sections: [
      {
        heading: "What Is Inmate Messaging and How Does It Work",
        body: [
          "Inmate messaging is a digital communication service that allows approved contacts to exchange written messages with incarcerated people through a facility-contracted platform. The facility decides which platform to use, and that platform manages all messaging in and out of that location.",
          "You create a free account on the approved platform, search for your loved one using their inmate ID number and facility name, purchase messaging credits or stamps, and send your message. The message enters a review queue before it is delivered to the inmate.",
          "The inmate reads and replies through the same platform using a kiosk, tablet, or shared computer terminal inside the facility. Their reply goes through the same review process before it reaches you. The entire exchange is monitored and stored by both the platform and the facility.",
          "Common platforms include JPay for state prisons, CorrLinks for all federal Bureau of Prisons facilities, ConnectNetwork for a wide range of county jails and state prisons, and GettingOut for many county jails with a focus on mobile access.",
        ],
      },
      {
        heading: "How to Send Your First Inmate Message",
        body: [
          "Step one is finding out which facility your loved one is housed in and which messaging platform that facility uses. You can search our facility directory to find this information or call the facility directly.",
          "Step two is creating a free account on the correct platform. You will need to provide your name, email address, and a valid government ID in most cases. Some platforms also require a phone number for verification.",
          "Step three is finding your loved one on the platform. You will search by their inmate ID number and facility name. The inmate ID is assigned by the facility and is different from any court case number.",
          "Step four is purchasing message credits or stamps. Most platforms require a minimum deposit before you can send your first message. Step five is writing and submitting your message. Once submitted, the message enters the review queue and is typically delivered within a few hours to one business day.",
        ],
      },
      {
        heading: "How Much Does Inmate Messaging Cost",
        body: [
          "Costs vary by platform and facility. JPay uses a stamp system where each stamp costs between $0.33 and $0.47 and covers one standard message. Stamps are purchased in bundles and the cost per stamp decreases when you buy larger bundles.",
          "CorrLinks charges a small per-message fee deducted from a prepaid account balance. ConnectNetwork and GettingOut use their own credit-based pricing that varies by facility and message type.",
          "Some facilities offer free incoming messages to the inmate but charge the sender. Others require both sides to purchase credits. There may also be account setup fees or transaction charges when loading funds. Always read the platform fee schedule before making your first deposit.",
          "Photo attachments, when available, are priced separately from text messages and typically cost more per item. Video messages, where offered, are also priced separately.",
        ],
      },
      {
        heading: "Message Review Process and Delivery Times",
        body: [
          "Every message sent through an inmate messaging platform goes through a review process before it reaches the inmate. This review is conducted by facility staff, an automated content screening system, or both. This process is disclosed in each platform terms of service and is standard at all correctional facilities.",
          "Review times vary by facility. Most messages are delivered within a few hours to one business day. High-volume facilities or facilities with limited staff may take longer. There is no way to expedite the review process.",
          "Messages that fail the content review are blocked or deleted. You may receive a notification that the message was not delivered, but platforms do not always provide a specific reason for rejection. Review the facility content rules and revise the message before attempting to resend.",
        ],
      },
      {
        heading: "Privacy and Content Rules for Inmate Messages",
        body: [
          "All inmate messages are monitored. The platform and the facility retain copies of every message, and staff can read them at any time. There is no expectation of privacy in inmate messaging. Never include sensitive legal, financial, or personal information in a message.",
          "Content rules vary by facility but generally prohibit anything involving escape plans, criminal activity, threats, explicit content, or coded language. Messages that reference ongoing legal cases should be limited to factual updates rather than strategy or evidence details.",
          "Repeated violations of content rules can result in suspended messaging privileges for the sender. In serious cases, access to the platform may be permanently revoked at that facility. The inmate may also face disciplinary action for messages that violate facility rules.",
        ],
      },
    ],

    takeaways: [
      "Inmate messaging works through facility-approved platforms, not standard email. You must use the platform your facility has contracted with.",
      "The four main platforms are JPay for state prisons, CorrLinks for federal prisons, ConnectNetwork for county jails and state prisons, and GettingOut for county jails.",
      "To get started, find the facility, create an account on the correct platform, purchase credits, and send your message.",
      "Messages go through a review process before delivery. Most arrive within a few hours to one business day.",
      "Costs are paid by the sender through a credit or stamp system. Prices range from $0.25 to $0.50 per message depending on the platform.",
      "All messages are monitored and stored. Never include sensitive legal, financial, or personal information.",
      "Messages that violate content rules are blocked. Repeated violations can result in suspended messaging privileges.",
    ],

    faq: [
      {
        question: "How do I know which inmate messaging platform to use?",
        answer: "Look up the facility in our directory or contact the facility directly. Federal Bureau of Prisons facilities use CorrLinks. Most state prisons use JPay or ConnectNetwork. County jails often use GettingOut or ConnectNetwork. The platform is determined by the facility contract, not by your preference.",
      },
      {
        question: "Can an inmate message me first?",
        answer: "In most cases, the inmate must first request to add you as an approved contact. Once the facility approves the request, they can initiate messages and you can reply. The approval process varies by facility and platform.",
      },
      {
        question: "How long does it take for an inmate message to arrive?",
        answer: "Most electronic messages are delivered within a few hours to one business day, depending on the review queue at that facility. There is no way to expedite delivery. Messages sent late at night may not be reviewed until the next business day.",
      },
      {
        question: "Is inmate messaging private?",
        answer: "No. All messages are reviewed and stored by both the platform and the facility. Staff can read any message at any time. Never send sensitive legal, financial, or personal information through inmate messaging.",
      },
      {
        question: "What happens if my inmate message is blocked?",
        answer: "The platform may notify you that the message was not delivered. You will not always receive a specific reason. Review the facility content rules, remove any content that may have triggered the block, and revise the message before resending.",
      },
      {
        question: "Can I send photos with inmate messages?",
        answer: "Some platforms allow photo attachments for an additional fee. Photo sharing is typically handled as a separate service from text messaging and has its own rules, review process, and approval requirements. Not all facilities support photo messaging.",
      },
      {
        question: "What if my loved one changes facilities?",
        answer: "If your loved one transfers to a new facility, you may need to create an account on a different platform. The new facility may use a different provider. Contact the new facility to confirm which platform they use and set up a new account if needed.",
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
    title: "How to Send Money to an Inmate: Step-by-Step Guide for Families",
    excerpt: "A step-by-step guide to sending money to an incarcerated person, covering accepted methods, platforms, fees, and common mistakes to avoid.",
    category: "Money and Accounts",
    difficulty: "Beginner",
    featured: true,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Send Money to an Inmate: Methods, Fees, and Step-by-Step Setup",
    seoDescription: "Complete guide to sending money to an incarcerated loved one - which platforms to use, how much fees cost, how long transfers take, and how to avoid common mistakes. Free guide for families.",

    intro: [
      "Sending money to an incarcerated loved one allows them to purchase items from the facility commissary, pay for phone calls, buy messaging stamps, and cover other approved expenses. Most facilities use a trust account system where funds are deposited and drawn from as needed.",
      "Every facility works with specific money transfer providers. You cannot send money through a personal bank transfer or PayPal. You must use whichever service the facility has approved. Common providers include JPay, Access Corrections, TouchPay, and Western Union Send2Corrections.",
      "This guide explains every method available, how much each costs, how long transfers take, and the most common mistakes families make when sending funds for the first time.",
    ],

    sections: [
      {
        heading: "How Inmate Money Transfers Work",
        body: [
          "When you send money to an incarcerated person, the funds go into a trust account managed by the facility. The inmate then uses that balance to make purchases at the commissary, pay for phone calls, buy messaging credits, or cover other approved services.",
          "The facility contracts with one or more money transfer providers. You create an account on the approved provider platform, find the inmate using their ID number and facility name, choose your transfer amount, and pay using a credit card, debit card, or other accepted method.",
          "Transaction fees are charged by the transfer provider, not the facility. Fees vary based on the provider, the transfer amount, and the payment method. Larger transfers often have lower percentage fees than smaller ones. Always check the fee schedule before sending.",
        ],
      },
      {
        heading: "Ways to Send Money to an Inmate",
        body: [
          "Online transfer is the most common method. You create an account on the approved provider website or app, enter the inmate details, choose an amount, and pay by credit or debit card. Funds are typically credited within one to two business days. Some providers offer same-day processing for an additional fee.",
          "Lobby kiosk deposits are available at many facilities. You visit the facility lobby, use the kiosk machine, enter the inmate ID, and deposit cash. Kiosk deposits are often processed immediately and have lower fees than online transfers. Not all facilities have kiosks.",
          "Money order by mail is accepted at most facilities. You purchase a money order, make it payable according to the facility instructions, include the inmate full name and ID number, and mail it to the facility designated address. Processing can take one to two weeks plus additional facility processing time.",
          "Phone transfer is available through some providers. You call the provider customer service number, provide inmate details, and pay by card over the phone. Fees for phone transfers are often higher than online transfers.",
        ],
      },
      {
        heading: "Main Money Transfer Providers and Their Fees",
        body: [
          "JPay is the most widely used inmate money transfer service in the United States, serving over 35 states. JPay fees typically range from $0.95 to $4.95 per transaction depending on the amount sent and the payment method. JPay also handles messaging and other services for state prisons.",
          "Access Corrections serves a large number of county jails and state facilities. Fees range from $1.95 to $5.95 per transaction. Access Corrections accepts credit cards, debit cards, and cash at participating locations.",
          "TouchPay specializes in county jail deposits and offers 24-hour processing every day of the year. TouchPay accepts credit and debit card transactions and posts funds quickly to inmate trust accounts.",
          "Western Union Send2Corrections is available at both online and in-person Western Union locations. Fees tend to be higher, ranging from $5 to $15 or more per transaction. Western Union is useful for families who prefer in-person cash transactions or do not have access to credit cards.",
        ],
      },
      {
        heading: "How Long Does It Take for Money to Reach an Inmate",
        body: [
          "Electronic transfers through JPay or Access Corrections typically arrive within one to three business days. Some facilities process transfers the same day. The processing time depends on the provider and the facility.",
          "Lobby kiosk cash deposits are usually posted to the inmate account immediately or within a few hours. This is the fastest method when same-day access to funds is important.",
          "Mailed money orders take the longest. After mailing, the money order must arrive at the facility, be processed by facility staff, and then be credited to the account. Total processing time is often one to two weeks or longer.",
          "Always keep your transaction receipt or confirmation number until the funds are confirmed received by the inmate. If funds do not arrive within the expected timeframe, contact the provider customer service with your confirmation number.",
        ],
      },
      {
        heading: "Common Mistakes When Sending Money to an Inmate",
        body: [
          "Using the wrong inmate ID number is the most common mistake. The inmate ID is assigned by the facility and is different from any court case number or booking number. Always confirm the correct ID directly with your loved one or the facility before sending.",
          "Sending to the wrong facility is another frequent error. If your loved one has transferred to a new facility, funds sent to the old facility may be delayed or rejected. Always confirm the current facility location before sending money.",
          "Choosing an unapproved transfer method will result in rejection. You cannot send funds through personal bank transfers, PayPal, Venmo, or any service not approved by the facility. The facility will return or reject any funds received through unapproved channels.",
          "Sending money before the inmate arrives at the facility can cause problems. Some facilities cannot process incoming funds until the inmate is officially in their system. Wait until you have confirmed your loved one has arrived and been processed before sending the first transfer.",
        ],
      },
    ],

    takeaways: [
      "Funds go into an inmate trust account managed by the facility and are used for commissary, phone calls, and messaging.",
      "You must use the transfer provider the facility has approved - personal bank transfers and apps like PayPal are not accepted.",
      "Main providers include JPay, Access Corrections, TouchPay, and Western Union Send2Corrections.",
      "Online transfers typically arrive within one to three business days. Lobby kiosk cash deposits are often immediate.",
      "Always use the correct inmate ID number - it is different from court case numbers or booking numbers.",
      "Keep your transaction confirmation number until funds are confirmed received.",
      "Do not send money until you confirm your loved one has arrived and been processed at the facility.",
    ],

    faq: [
      {
        question: "How do I send money to someone in prison?",
        answer: "Find out which money transfer provider the facility uses by searching our facility directory or calling the facility. Create an account on that provider platform, find the inmate by their ID number and facility, choose an amount, and pay by credit card, debit card, or other accepted method.",
      },
      {
        question: "How long does it take for money to reach an inmate?",
        answer: "Electronic transfers typically arrive within one to three business days. Some facilities offer same-day processing. Lobby kiosk cash deposits are usually immediate. Mailed money orders can take one to two weeks plus facility processing time.",
      },
      {
        question: "How much does it cost to send money to an inmate?",
        answer: "Fees vary by provider and transfer amount. JPay fees range from $0.95 to $4.95 per transaction. Access Corrections charges $1.95 to $5.95. Western Union fees are typically $5 to $15 or more. Lobby kiosk deposits often have the lowest fees.",
      },
      {
        question: "What is the inmate ID number and where do I find it?",
        answer: "The inmate ID number is assigned by the facility when the person is booked or transferred in. It is different from any court case number. You can get it directly from your loved one, by calling the facility, or by using an official state inmate search tool.",
      },
      {
        question: "Can I use PayPal or Venmo to send money to an inmate?",
        answer: "No. Personal payment apps like PayPal, Venmo, Cash App, or Zelle are not accepted by correctional facilities. You must use the approved transfer provider the facility has contracted with. Funds sent through unapproved channels will be rejected or returned.",
      },
      {
        question: "What if the money I sent never arrived?",
        answer: "Keep your transaction confirmation number and contact the provider customer service. Provide your confirmation number, the inmate name and ID, and the facility name. Common causes of delayed funds include incorrect inmate ID, facility transfer, or a processing delay at the facility.",
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
    title: "How Video Visitation Works: Complete Guide for Families",
    excerpt: "Understand how video visitation works at prisons and jails, how to schedule a video call, what equipment you need, and how much it costs.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: true,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How Video Visitation Works: Setup, Cost, Equipment and Scheduling",
    seoDescription: "Learn how video visitation works at prisons and jails - how to schedule a video visit, what equipment you need, how much sessions cost, and which providers offer video visits. Free complete guide.",

    intro: [
      "Video visitation allows families to see and speak with an incarcerated loved one through a live video connection without traveling to the facility. Sessions are scheduled in advance through the facility approved platform, and you connect using a smartphone, tablet, or computer from your home.",
      "Not all facilities offer video visitation. For those that do, the system works through a provider contracted by the facility. Common providers include JPay, ConnectNetwork, GettingOut, Securus, and SmartInmate. The provider you use depends entirely on which one your facility has chosen.",
      "This guide explains how video visitation works, how to schedule your first visit, what equipment you need, how much sessions cost, and what to expect during the call.",
    ],

    sections: [
      {
        heading: "How Video Visitation Works",
        body: [
          "Video visitation uses a secure video connection to allow families and approved contacts to visit with an incarcerated person without being physically present at the facility. The inmate connects through a video terminal, kiosk, or tablet inside the facility. You connect through your smartphone, tablet, or computer from home or another approved location.",
          "Sessions are scheduled in advance through the provider platform. You choose a date and time from available slots, pay for the session, and receive a confirmation. At the scheduled time, you log in to the platform and join the video call. The inmate joins from their end at the facility.",
          "All video visits are recorded and monitored by facility staff. The same content rules that apply to physical visits and messaging also apply to video visits. Visits can be terminated by staff at any time if rules are violated.",
        ],
      },
      {
        heading: "Types of Video Visitation",
        body: [
          "Remote video visits are conducted from your home or any location with a reliable internet connection. You use your own device - a smartphone, tablet, or computer with a camera and microphone. Remote visits are the most common type and are available at most facilities that offer video visitation.",
          "On-site video visits take place in the facility lobby or a designated visitation room. You visit the facility in person but connect through a video terminal rather than a physical booth. Some facilities provide on-site video visits for free or at a lower cost than remote visits.",
          "Some facilities have eliminated in-person face-to-face visitation entirely and replaced it with video visitation only. In these cases, video visits through the facility approved platform are the only option for seeing your loved one in real time.",
        ],
      },
      {
        heading: "How to Schedule a Video Visit",
        body: [
          "Step one is confirming that your loved one facility offers video visitation and which provider they use. You can search our facility directory or call the facility directly to find out.",
          "Step two is creating a free account on the provider platform. For ConnectNetwork, go to connectnetwork.com. For JPay, go to jpay.com. For GettingOut, go to gettingout.com. Account creation requires your name, email, and in some cases a government ID.",
          "Step three is finding your loved one on the platform and connecting as an approved contact. The approval process varies by facility and may require submitting your name, date of birth, and government ID. Some facilities also run a background check.",
          "Step four is scheduling the visit. Select your loved one, choose an available date and time slot, review the cost, and enter your payment information. You will receive a confirmation email with the visit details.",
          "Step five is joining the visit at the scheduled time. Log in to the platform five to fifteen minutes before the scheduled start. Test your camera and microphone before the session begins. Join the call at the scheduled time and wait for the inmate to connect from their end.",
        ],
      },
      {
        heading: "Equipment You Need for Video Visits",
        body: [
          "You need a device with a camera and microphone. A smartphone works well for most platforms and is the most convenient option. A tablet or laptop with a built-in camera also works. Desktop computers require an external webcam and microphone if they do not have them built in.",
          "You need a reliable internet connection. A stable Wi-Fi connection is recommended. Video calls over a weak mobile data signal may drop or freeze, which can end the session without a refund.",
          "Most platforms have a dedicated app for mobile devices. Download the provider app before your scheduled visit and test your connection in advance. Some platforms also work through a web browser without requiring an app.",
        ],
      },
      {
        heading: "How Much Does Video Visitation Cost",
        body: [
          "Video visit costs vary by facility and provider. Most remote video visits cost between $7.50 and $15 per session. Some facilities charge by the minute rather than by session, with rates typically ranging from $0.25 to $1.00 per minute.",
          "On-site lobby video visits are often free or available at a reduced rate compared to remote visits. Some facilities provide a set number of free video visits per week for inmates and their families.",
          "Payment is made at the time of scheduling through the provider platform. Most providers accept credit cards and debit cards. If a session is ended early due to a technical issue on the provider side, contact customer service to request a refund or credit.",
        ],
      },
      {
        heading: "What to Expect During a Video Visit",
        body: [
          "Video visits are typically 20 to 30 minutes long. The session ends automatically when the time limit is reached. If you want to continue, you must schedule and pay for another session.",
          "The inmate joins from a facility terminal or tablet. The image and audio quality depend on both the facility equipment and your own connection. Have a backup plan if your connection is unstable - reschedule rather than risk a dropped session.",
          "All video visits are recorded. Treat the visit the same way you would a monitored phone call. Do not discuss anything that could be interpreted as violating facility rules, including legal strategy, ongoing cases, or anything prohibited by the facility policy.",
          "If a visit is terminated early by staff, contact the provider customer service with your confirmation number. Most providers will review terminated visits and issue a credit if the termination was not due to a rule violation.",
        ],
      },
    ],

    takeaways: [
      "Video visitation lets families visit an incarcerated loved one through a live video call from home, without traveling to the facility.",
      "Not all facilities offer video visitation. Check our facility directory to find out if your facility supports it.",
      "Common providers include JPay, ConnectNetwork, GettingOut, Securus, and SmartInmate.",
      "You need a device with a camera and microphone and a reliable internet connection.",
      "Sessions must be scheduled in advance through the provider platform. You must be an approved contact first.",
      "Remote video visits cost between $7.50 and $15 per session. On-site lobby visits are often free or lower cost.",
      "All video visits are recorded and monitored. Follow the same content rules as physical visits.",
    ],

    faq: [
      {
        question: "How do I set up a video visit with someone in prison?",
        answer: "First confirm the facility offers video visitation and which provider they use. Create a free account on that provider platform, find your loved one, get approved as a contact, and then schedule and pay for a visit. You will receive a confirmation with the visit details.",
      },
      {
        question: "What equipment do I need for a video visit?",
        answer: "You need a smartphone, tablet, or computer with a camera and microphone, and a reliable internet connection. Most providers have a mobile app you should download before your visit. Test your camera and microphone before the scheduled session.",
      },
      {
        question: "How much does a video visit cost?",
        answer: "Remote video visits typically cost between $7.50 and $15 per session. Some facilities charge by the minute at rates between $0.25 and $1.00 per minute. On-site lobby visits are often free or lower cost. Pricing varies by facility and provider.",
      },
      {
        question: "How long do video visits last?",
        answer: "Most video visits are 20 to 30 minutes long. The session ends automatically when the time limit is reached. If you want to continue, you must schedule and pay for another session.",
      },
      {
        question: "Can I do a video visit from my phone?",
        answer: "Yes. Most video visitation providers have a mobile app that works on iOS and Android smartphones. Download the provider app before your scheduled visit and test your connection in advance.",
      },
      {
        question: "Are video visits recorded?",
        answer: "Yes. All video visits are recorded and monitored by facility staff. Treat the visit the same way you would a monitored phone call. Do not discuss anything that could violate facility rules.",
      },
      {
        question: "What if my video visit drops or has technical problems?",
        answer: "If the session drops due to a technical issue on the provider side, contact customer service with your confirmation number and request a refund or credit. If the problem was on your end, such as a weak internet connection, providers may not offer a refund.",
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
    title: "How Prison Phone Calls Work: Cost, Setup and Cheapest Options",
    excerpt: "Understand how inmates make phone calls, how to set up an account to receive calls, which providers are used, and what calls cost.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-08-15",
    seoTitle: "How Prison Phone Calls Work: Complete Guide",
    seoDescription: "Learn how inmates make phone calls, how to set up a prepaid account to receive calls, what providers facilities use, and how much prison calls cost.",
    intro: [
      "Prison phone calls work through a prepaid system. Families create an account with the facility phone provider, add funds, and wait for the inmate to call. The call is automatically deducted from the prepaid balance at a per-minute rate set by the facility contract.",
      "The most common prison phone providers in the United States are GTL, Securus Technologies, ICSolutions, and City Tele Coin. Each facility has a contract with only one provider, so families must use whichever provider their facility has chosen.",
      "Prison phone call rates are regulated by the FCC for interstate calls. As of 2026, the maximum rate is $0.21 per minute for prisons and $0.13 per minute for jails.",
      "To set up a prison phone account, visit the provider website, create a free account, search for your loved one facility, and add a minimum deposit.",
      "All prison phone calls are recorded and monitored by facility staff except calls to attorneys. Calls are typically limited to 15 to 30 minutes.",
      "To save money on prison phone calls, use a prepaid account instead of collect calls and check if your facility offers video visits which are often cheaper."
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
    title: "Complete Inmate Communication Guide: Every Option Explained",
    excerpt: "A full overview of every way to communicate with an incarcerated loved one, including messaging, phone calls, video visits, photos, and mail.",
    category: "Getting Started",
    difficulty: "Beginner",
    featured: true,
    popular: true,
    readingTimeMinutes: 6,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Complete Inmate Communication Guide: Messaging, Calls, Video and Mail",
    seoDescription: "Complete guide to communicating with an incarcerated loved one - how digital messaging works, how to receive phone calls, how to schedule video visits, how to send photos, and how to send money. Free, no account needed.",

    intro: [
      "Staying connected with an incarcerated loved one means learning a system that works very differently from normal communication. There is no single app or phone number that works at every facility. Each prison, jail, or detention center contracts with specific providers for each type of communication, and you must use whichever provider that facility has chosen.",
      "This guide covers every communication option available to families - digital messaging, phone calls, video visitation, photo sharing, physical mail, and money transfers. Each section explains how the option works, what it costs, and how to get started.",
      "The most important first step is finding out exactly which facility your loved one is housed in. Once you know the facility, you can look up which providers serve it and set up the right accounts.",
    ],

    sections: [
      {
        heading: "Digital Messaging",
        body: [
          "Digital messaging is the fastest and most affordable written communication option for most families. Messages are sent through a platform contracted by the facility - common platforms include JPay, CorrLinks, ConnectNetwork, and GettingOut. You create a free account, find the inmate profile, purchase message credits or stamps, and send your message.",
          "Messages are reviewed by facility staff before delivery. Review times vary by facility, but most messages are delivered within a few hours to one business day. A single message typically costs between $0.25 and $0.50 depending on the platform and facility.",
          "JPay is most common at state prisons. CorrLinks is the only approved platform for federal Bureau of Prisons facilities. ConnectNetwork is widely used at county jails and some state prisons. GettingOut is common at county jails with a focus on mobile-friendly access.",
          "To get started with digital messaging, search our facility directory for your loved one facility, find which messaging platform it uses, create your account on that platform, and complete the contact approval process before sending your first message.",
        ],
      },
      {
        heading: "Phone Calls",
        body: [
          "Inmates call out - you cannot call them directly. All calls go through a facility-contracted phone provider such as Securus Technologies, GTL, ICSolutions, or City Tele Coin. Your phone number must be on the inmate approved contact list before any calls can be placed to you.",
          "There are two main account types for receiving calls. A prepaid account means you deposit money in advance and calls are deducted from your balance - this gives you better rates. A collect call means the charges are billed directly to your phone bill - this is more expensive and not available with all carriers.",
          "Interstate call rates are federally regulated by the FCC with a maximum rate of $0.21 per minute for prisons and $0.13 per minute for jails. In-state rates may vary. Additional fees such as account setup fees or connection fees may apply depending on the provider.",
          "Most facilities limit calls to 15 to 30 minutes. The call disconnects automatically when the time limit is reached. All calls are recorded and monitored except calls to attorneys.",
        ],
      },
      {
        heading: "Video Visitation",
        body: [
          "Video visitation allows you to see and speak with your loved one through a live video connection. Sessions are scheduled in advance through the facility approved platform. You connect using a smartphone, tablet, or computer. The inmate connects through a video terminal or tablet inside the facility.",
          "Not all facilities offer video visitation. For those that do, sessions typically last 20 to 30 minutes and must be booked ahead of time. Costs range from $7.50 to $15 per session depending on the facility and provider.",
          "You must be an approved contact before you can schedule a video visit. The approval process varies by facility but generally requires submitting your name, date of birth, and government ID. Some facilities also require a background check.",
          "Common video visitation providers include JPay, ConnectNetwork, Securus, and GettingOut. If in-person visits are difficult due to distance, video visitation is a practical and more affordable alternative.",
        ],
      },
      {
        heading: "Photos and Physical Mail",
        body: [
          "Sending photos to an incarcerated loved one works differently than sending a digital image. Most facilities do not allow digital photos to be emailed directly. Instead, photo sharing platforms like Pigeonly or TextBehind allow you to upload a photo online, and the service prints it and delivers it as physical mail to the inmate.",
          "Physical mail is still accepted at most facilities. Letters should be written on plain white paper. Envelopes must be standard size. Most facilities prohibit stickers, glitter, perfume, greeting cards with metallic or raised elements, and any colored paper. Always check the specific facility mail policy before sending.",
          "Books and magazines may be sent in some facilities but must come directly from an approved publisher or retailer. Personal copies sent from home are typically rejected. Packages are generally not allowed unless the facility has a specific approved package program.",
        ],
      },
      {
        heading: "Money Transfers",
        body: [
          "Sending money to an incarcerated loved one allows them to purchase items from the facility commissary, pay for phone calls or messaging stamps, and cover other approved expenses. Most facilities use a trust account system where funds are deposited and drawn from as needed.",
          "Common money transfer platforms include JPay, Access Corrections, TouchPay, and Western Union or MoneyGram at some facilities. Each platform charges a transaction fee that varies based on the amount sent and the payment method used.",
          "Deposits can be made online, through a mobile app, at a kiosk, or in some cases by money order sent by mail. Processing times vary - online and kiosk deposits are often credited within one to two business days. Money order deposits may take longer.",
          "Always use the exact inmate name and ID number when sending funds. Errors in the name or ID can delay or reject the transfer. Keep your transaction receipts until the funds are confirmed received.",
        ],
      },
    ],

    takeaways: [
      "Every facility uses its own contracted providers for each type of communication - you must use whoever they have chosen.",
      "Digital messaging through JPay, CorrLinks, ConnectNetwork, or GettingOut is the fastest and most affordable written option.",
      "Phone calls are inmate-initiated only - you cannot call them. Set up a prepaid account for the best rates.",
      "Video visitation requires advance scheduling and approved contact status. Costs range from $7.50 to $15 per session.",
      "Photos must go through a print-and-deliver service - you cannot email photos directly to most facilities.",
      "Physical mail is widely accepted but has strict rules about paper type, envelope size, and prohibited items.",
      "Money transfers go to an inmate trust account and can be used for commissary, messaging, and phone calls.",
      "Start by identifying the facility your loved one is in, then search the facility directory to find which providers are available.",
    ],

    faq: [
      {
        question: "How do I start communicating with someone in prison?",
        answer: "Start by confirming the exact facility name and location. Then search our facility directory to see which communication providers serve that facility. Create an account on the appropriate platform, complete the contact approval process, and you can begin communicating.",
      },
      {
        question: "Do I need a different account for each type of communication?",
        answer: "Sometimes yes. Platforms like JPay and ConnectNetwork handle messaging, video, and money transfer under one account. Other services specialize in one type of communication. You may need accounts on two or three platforms depending on what your facility supports.",
      },
      {
        question: "Can I call an inmate directly?",
        answer: "No. Inmates must initiate all calls from facility phones. Your number must be on their approved contact list before they can call you. You can set up a prepaid account with the facility phone provider so funds are ready when they call.",
      },
      {
        question: "How much does it cost to communicate with someone in prison?",
        answer: "Costs vary by communication type. Digital messages typically cost $0.25 to $0.50 each. Phone calls cost up to $0.21 per minute for interstate calls. Video visits cost $7.50 to $15 per session. Photo delivery costs around $0.49 per photo. Money transfer fees vary by platform and amount.",
      },
      {
        question: "What if the facility changes its communication provider?",
        answer: "Facility provider contracts do expire and change. If communication through your current platform suddenly stops working, contact the facility directly to confirm whether a provider change has occurred and which new platform to use.",
      },
      {
        question: "Can all incarcerated people receive digital messages?",
        answer: "No. Not all facilities offer digital messaging. Federal prisons almost all use CorrLinks. State prisons vary by provider. Some smaller county jails only support phone calls and physical mail. Use the facility directory to check what is available at your specific facility.",
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
    title: "Federal Prison vs State Prison: Key Differences for Families",
    excerpt: "Understand the key differences between federal and state prisons, including how inmates end up there, communication rules, and provider differences.",
    category: "Facility Types",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Federal Prison vs State Prison: Differences in Communication, Rules and Providers",
    seoDescription: "Learn the key differences between federal and state prisons - who goes where, how communication works in each system, which providers to use, and how to find your loved one. Free guide for families.",

    intro: [
      "Federal prisons and state prisons are two completely separate systems operated by different levels of government. Who ends up in each system depends on the type of crime committed, not the severity. Understanding which system your loved one is in determines which communication providers you must use and how the rules apply.",
      "Federal prisons are operated by the Federal Bureau of Prisons, a division of the U.S. Department of Justice. State prisons are operated by each individual state through their Department of Corrections. The two systems have different rules, different communication providers, and different processes for families.",
      "This guide explains the key differences between federal and state prisons, how to identify which system your loved one is in, and what that means for messaging, phone calls, video visits, and money transfers.",
    ],

    sections: [
      {
        heading: "What Is a Federal Prison",
        body: [
          "Federal prisons house people convicted of federal crimes - offenses that violate federal law or involve interstate activities. Common federal crimes include drug trafficking across state lines, tax evasion, bank robbery, counterfeiting, immigration offenses, and crimes committed on federal property or against federal officers.",
          "The Federal Bureau of Prisons, commonly called the BOP, manages all federal correctional facilities in the United States. The BOP operates over 100 facilities across the country at various security levels including minimum, low, medium, high, and administrative facilities.",
          "Federal sentences are typically longer than state sentences for similar offenses. Federal inmates must serve at least 85 percent of their sentence before being considered for release. There is no parole in the federal system.",
        ],
      },
      {
        heading: "What Is a State Prison",
        body: [
          "State prisons house people convicted of state crimes - offenses that violate state law. Most violent crimes, property crimes, and drug offenses prosecuted at the local or county level result in state prison sentences. State prisons hold the majority of incarcerated people in the United States.",
          "Each state operates its own prison system through a Department of Corrections or a similarly named agency. Rules, facilities, communication providers, and conditions vary significantly from state to state. What applies in Texas may be very different from what applies in California or New York.",
          "State sentences vary widely in length and eligibility for parole or early release depending on state law and the nature of the offense. Some states have abolished parole for certain crimes while others maintain broad parole eligibility.",
        ],
      },
      {
        heading: "Key Differences Between Federal and State Prisons",
        body: [
          "The type of crime determines the system. Federal crimes go to federal prison. State crimes go to state prison. A person cannot choose which system they enter - it is determined by where and how they were prosecuted.",
          "Conditions in federal prisons are generally considered more consistent across facilities because they are all managed under one federal agency. State prison conditions vary much more widely because each state sets its own standards.",
          "Federal prisons typically have more educational and vocational programming available to inmates. State prisons vary widely in the programs they offer depending on the state budget and facility type.",
          "Security levels exist in both systems. Both federal and state prisons have minimum, medium, and maximum security facilities. Where an inmate is housed depends on the length of their sentence, their behavior history, and their assessed risk level.",
        ],
      },
      {
        heading: "Communication Differences Between Federal and State Prisons",
        body: [
          "This is the most important difference for families. Federal and state prisons use completely different communication providers, and the setup process is different for each.",
          "Federal prisons use CorrLinks for all electronic messaging. CorrLinks is the only approved messaging platform for all Bureau of Prisons facilities. The inmate must send you an invitation through CorrLinks before you can exchange messages. There is no alternative messaging platform for federal inmates.",
          "Federal phone calls go through the TRULINCS system and are managed by a contracted phone provider. ConnectNetwork by GTL handles phone services for many federal facilities. You set up a prepaid account to receive calls.",
          "State prisons use a variety of providers that vary by state and facility. JPay is the most common messaging provider for state prisons, serving over 35 states. Phone services at state prisons are handled by providers such as Securus, GTL, ICSolutions, and City Tele Coin depending on the facility contract.",
          "Money transfers also differ. JPay handles money transfers for state prisons it serves. Federal inmate trust accounts are funded through MoneyGram, Western Union, or facility-specific processes approved by the BOP.",
        ],
      },
      {
        heading: "How to Find Out If Your Loved One Is in Federal or State Prison",
        body: [
          "The easiest way to find out is to ask your loved one directly or ask their attorney. If you do not have that information, you can use official inmate search tools.",
          "For federal inmates, the Bureau of Prisons maintains a public inmate locator at bop.gov. You can search by name or register number. The locator shows the facility name, location, and release date.",
          "For state inmates, each state operates its own inmate search tool through their Department of Corrections website. Search for your state Department of Corrections online and look for the inmate locator or offender search tool.",
          "You can also search our facility directory to find a facility and confirm whether it is a federal or state facility, which providers serve it, and what communication options are available.",
        ],
      },
    ],

    takeaways: [
      "Federal prisons house people convicted of federal crimes. State prisons house people convicted of state crimes. The type of crime determines the system, not the severity.",
      "Federal prisons are managed by the Bureau of Prisons. State prisons are managed by each state Department of Corrections.",
      "Federal inmates must use CorrLinks for all electronic messaging. There is no alternative.",
      "State prison inmates typically use JPay for messaging. Phone providers vary by state and facility.",
      "Money transfers for federal inmates go through MoneyGram or Western Union. State prison transfers typically go through JPay or Access Corrections.",
      "Use the BOP inmate locator at bop.gov to find a federal inmate. Use each state DOC website to find a state inmate.",
      "Search our facility directory to find which providers and communication options are available at any specific facility.",
    ],

    faq: [
      {
        question: "How do I know if my loved one is in federal or state prison?",
        answer: "Ask your loved one or their attorney directly. If you do not have that information, use the Bureau of Prisons inmate locator at bop.gov for federal inmates. For state inmates, search your state Department of Corrections website for their inmate locator tool.",
      },
      {
        question: "What messaging platform do I use for a federal prison?",
        answer: "All federal Bureau of Prisons facilities use CorrLinks exclusively. The inmate must send you an invitation through CorrLinks before you can exchange messages. You cannot use JPay, ConnectNetwork, or any other platform for federal inmates.",
      },
      {
        question: "What messaging platform do I use for a state prison?",
        answer: "It depends on the state and facility. JPay is the most common provider for state prisons, serving over 35 states. Some state facilities use ConnectNetwork or Securus. Search our facility directory to find the correct provider for your specific facility.",
      },
      {
        question: "Can a federal inmate use JPay?",
        answer: "No. JPay does not serve federal Bureau of Prisons facilities. Federal inmates use CorrLinks for messaging. For phone calls, many federal facilities use ConnectNetwork by GTL.",
      },
      {
        question: "How do I send money to a federal inmate?",
        answer: "Federal inmate trust accounts are funded through MoneyGram or Western Union using the receive code for the Bureau of Prisons. The BOP website at bop.gov has current instructions for sending funds. JPay does not handle federal money transfers.",
      },
      {
        question: "Is federal prison harder than state prison?",
        answer: "This depends on the specific facility and security level rather than the system as a whole. Federal prisons tend to have more consistent conditions across facilities. State prison conditions vary widely by state and facility type. Security level is a better indicator of daily conditions than federal versus state.",
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
    title: "Best Inmate Messaging Services in 2026: JPay, CorrLinks, ConnectNetwork Compared",
    excerpt: "Compare the top inmate messaging platforms including JPay, CorrLinks, ConnectNetwork, and GettingOut to find the right option for your situation.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Best Inmate Messaging Services 2026: JPay vs CorrLinks vs ConnectNetwork vs GettingOut",
    seoDescription: "Compare the best inmate messaging services in 2026 - JPay for state prisons, CorrLinks for federal prisons, ConnectNetwork for county jails, and GettingOut for local detention. Find which platform your facility uses, free.",

    intro: [
      "The best inmate messaging service is whichever one your loved one facility uses - you cannot choose freely. Every correctional facility has a contract with one messaging provider, and all communication goes through that provider only. This guide compares the four main platforms so you know exactly what to expect before you sign up.",
      "The platforms compared in this guide are JPay, CorrLinks, ConnectNetwork, GettingOut, and TextBehind. Each serves a different type of facility, and understanding which one covers your situation will save you time and frustration.",
    ],

    sections: [
      {
        heading: "JPay - Best for State Prisons",
        body: [
          "JPay is the most widely used inmate messaging platform in the United States, serving over 35 states and more than 1,000 correctional facilities. If your loved one is in a state prison, JPay is the most likely provider you will encounter.",
          "Messaging on JPay uses a stamp system. Each stamp costs roughly $0.33 to $0.47 and covers one message up to a standard length. Stamps are purchased in bundles. The JPay app is available for iOS and Android and is one of the better-designed apps in this category.",
          "JPay also offers video visitation, money transfer, and in some facilities, tablet-based digital content and music. JPay does not serve federal Bureau of Prisons facilities.",
        ],
      },
      {
        heading: "CorrLinks - Only Option for Federal Prisons",
        body: [
          "CorrLinks is the exclusive messaging platform for all federal Bureau of Prisons facilities. If your loved one is in a federal prison, CorrLinks is your only option - no other platform is approved.",
          "The system works differently from other platforms. The inmate must send you an invitation first. You cannot initiate contact until you receive and accept that invitation. There is no mobile app. CorrLinks runs through a website that works on mobile browsers but was built for desktop.",
          "Messaging costs are charged per message to both the sender and receiver. Despite its limitations, CorrLinks is reliable and widely used across all 122 federal facilities.",
        ],
      },
      {
        heading: "ConnectNetwork - Best for County Jails and Mixed Facilities",
        body: [
          "ConnectNetwork, operated by GTL (Global Tel Link), serves over 1,800 facilities across all 50 states, making it one of the broadest networks available. It is especially common in county jails and federal detention centers.",
          "The platform offers messaging, video visitation, phone account management, and money transfers all in one place. Creating an account is free. ConnectNetwork has a mobile app with mixed but improving reviews.",
          "If your loved one is in a county detention center or a facility that is not served by JPay or CorrLinks, ConnectNetwork is the most likely alternative you will need to use.",
        ],
      },
      {
        heading: "GettingOut - Best for County Jails with Video Focus",
        body: [
          "GettingOut is commonly used at county jails and focuses primarily on video visitation and messaging. The mobile app is well-reviewed and handles most features smoothly, making it one of the easier platforms to use for families.",
          "If your loved one is in a county jail and the facility uses GettingOut, video visits through the app are often more affordable than in-person visits and can be scheduled from home.",
        ],
      },
      {
        heading: "TextBehind - Best When Electronic Messaging is Not Available",
        body: [
          "TextBehind is different from all other platforms on this list. Instead of electronic delivery, TextBehind prints your message and delivers it as physical mail to the inmate. This makes it useful at facilities that do not offer any electronic messaging system.",
          "You type your message online, pay roughly $0.49 per page, and TextBehind handles printing and delivery. Because it delivers as physical mail, it works at nearly any facility that accepts mail - giving it the broadest potential reach of any platform on this list.",
        ],
      },
    ],

    takeaways: [
      "You must use the platform your loved one facility is contracted with - you cannot choose freely between providers.",
      "JPay serves most state prisons across 35+ states and is the most commonly used platform.",
      "CorrLinks is the only approved platform for all federal Bureau of Prisons facilities.",
      "ConnectNetwork covers 1,800+ facilities across all 50 states and is common in county jails.",
      "GettingOut focuses on video and messaging at county jails and has a well-reviewed mobile app.",
      "TextBehind delivers printed mail and works at facilities with no electronic messaging available.",
      "Search our facility directory to see exactly which platform your loved one facility uses.",
    ],

    faq: [
      {
        question: "Which inmate messaging service is best?",
        answer: "The best service is whichever one your loved one facility uses. You cannot choose between providers. JPay is most common for state prisons, CorrLinks is required for federal prisons, ConnectNetwork and GettingOut are common for county jails.",
      },
      {
        question: "Can I use multiple messaging platforms for one person?",
        answer: "No. A facility only supports one messaging platform at a time. If the facility uses JPay, everyone communicating with inmates at that facility uses JPay. You cannot choose an alternative.",
      },
      {
        question: "How do I find out which messaging service my facility uses?",
        answer: "Search our facility directory and select your loved one facility. The provider information is listed on each facility page. You can also call the facility directly and ask which messaging platform they use.",
      },
      {
        question: "What if the facility switches providers?",
        answer: "Facility provider contracts do expire and change. If communication suddenly stops working, contact the facility directly to confirm whether a provider switch has occurred and which new platform to use.",
      },
      {
        question: "Which inmate messaging platform has the best mobile app?",
        answer: "JPay and GettingOut have the best-reviewed mobile apps. CorrLinks has no app and runs through a website only. ConnectNetwork has an app with mixed reviews that has improved in recent years.",
      },
      {
        question: "Is there one messaging platform that works at all facilities?",
        answer: "No single electronic platform covers all facilities. TextBehind comes closest because it delivers printed mail, which nearly all facilities accept. For electronic messaging, the provider depends entirely on the facility contract.",
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
