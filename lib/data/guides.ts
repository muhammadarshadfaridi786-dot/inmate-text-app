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
    title: "How to Find an Inmate: Complete Guide to Inmate Search Tools",
    excerpt: "Learn how to locate an incarcerated person using official inmate search tools, what information you need, and how to find their current facility.",
    category: "Getting Started",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Find an Inmate: Federal, State and County Inmate Search Guide",
    seoDescription: "Learn how to find an inmate in federal prison, state prison, or county jail - which search tools to use, how to search by name or ID, and what to do if the inmate does not appear. Free guide.",

    intro: [
      "Finding out where an incarcerated person is housed is the first step before you can send messages, make phone calls, arrange visits, or send money. Each correctional system maintains its own inmate search tool, and the tool you need depends on whether your loved one is in a federal prison, a state prison, or a county jail.",
      "Federal inmates are searchable through the Bureau of Prisons inmate locator at bop.gov. State inmates are searchable through each state Department of Corrections website. County jail inmates are searchable through the county sheriff or jail website, or through tools like VINELink.",
      "This guide explains which tools to use, how to search in each system, and what to do when an inmate does not appear in the search results.",
    ],

    sections: [
      {
        heading: "How to Find a Federal Inmate",
        body: [
          "The Federal Bureau of Prisons maintains a free public inmate locator at bop.gov. This tool covers federal inmates in BOP custody, including people currently incarcerated and those who have been released.",
          "To search for a federal inmate, go to bop.gov and click on the inmate locator. You can search by the inmate first and last name, or by their BOP register number. If searching by name, you can narrow results by entering race, age range, and gender to reduce results for common names.",
          "Search results show the inmate assigned facility name and location, their BOP register number, age, race, and projected release date. Clicking on a result provides additional facility information including the facility address.",
          "If the inmate appears as IN TRANSIT, they have been moved from one facility and may not yet be at the receiving facility. If they appear as RELEASED, they are no longer in BOP custody. If no record appears, they may be in state custody rather than federal custody.",
        ],
      },
      {
        heading: "How to Find a State Prison Inmate",
        body: [
          "Each state operates its own Department of Corrections and maintains its own inmate search tool. There is no single national database for state prisoners. You must search the correct state DOC website for the state where your loved one was convicted or is housed.",
          "To find the right search tool, go to your preferred search engine and type the state name followed by Department of Corrections inmate search. For example, search for Texas Department of Criminal Justice inmate search or Florida Department of Corrections offender search.",
          "Most state inmate search tools allow you to search by first and last name, inmate ID number, or both. Some states also allow searching by date of birth. Results typically show the facility name, security level, sentence information, and projected release date.",
          "If your loved one has been transferred to a different state facility, the search will reflect their current location. Transfers can take 24 to 72 hours to appear in the system. If you believe a transfer has occurred but the location has not updated, call the original facility to confirm.",
        ],
      },
      {
        heading: "How to Find a County Jail Inmate",
        body: [
          "County jails house people who are awaiting trial, serving short sentences, or waiting for transfer to a state or federal facility. County jail inmate records are managed by the county sheriff or the jail itself, not by the state DOC.",
          "To find a county jail inmate, go to the website of the county sheriff or county jail. Many county sheriff websites have an inmate roster or booking search tool. Search by the inmate first and last name or booking number.",
          "VINELink is a free national service at vinelink.com that provides inmate custody status information for many county jails and state prisons across the United States. You can search by name or inmate ID and set up notifications if the custody status changes.",
          "County jail rosters update frequently - often multiple times per day. A person who was recently booked may not appear in the online system for a few hours. If you cannot find someone who was recently arrested, call the jail directly to confirm they are in custody.",
        ],
      },
      {
        heading: "What to Do If the Inmate Does Not Appear in Search Results",
        body: [
          "If the inmate does not appear in the expected search tool, try these steps before assuming they are not in custody. First, check the spelling of the name. Try alternate spellings, nicknames, or the middle name if the common name search returns no results.",
          "Second, confirm which system to search. Federal inmates do not appear in state DOC searches. State inmates do not appear in the BOP locator. County jail inmates often do not appear in state DOC searches until they are transferred and processed.",
          "Third, check the timing. New inmates may not appear in search systems for 24 to 72 hours after booking or arrival. Inmates who are being transferred between facilities may temporarily not appear in any database.",
          "Fourth, call the facility or system directly. If you know the facility your loved one was sent to, call that facility and ask to confirm they are in the system. The facility reception or records office can usually confirm basic custody status over the phone.",
          "Fifth, contact an attorney. If you still cannot locate someone after trying all search tools and calling facilities, a criminal defense attorney can often obtain custody information faster through official legal channels.",
        ],
      },
    ],

    takeaways: [
      "Federal inmates are searchable at bop.gov using the Bureau of Prisons inmate locator. Search by name or BOP register number.",
      "State inmates are searchable through each state Department of Corrections website. There is no single national state database.",
      "County jail inmates are searchable through the county sheriff website or through VINELink at vinelink.com.",
      "New inmates may not appear in search systems for 24 to 72 hours after booking or transfer.",
      "If a name search returns no results, try alternate spellings, the middle name, or confirm which system covers their custody type.",
      "Once you find the facility, search our facility directory to see which communication providers serve it and how to set up accounts.",
    ],

    faq: [
      {
        question: "How do I find out what prison someone is in?",
        answer: "Start by determining whether they are in federal or state custody. For federal inmates, use the Bureau of Prisons inmate locator at bop.gov. For state inmates, search the Department of Corrections website for the state where they were convicted. For county jail inmates, search the county sheriff website or use VINELink at vinelink.com.",
      },
      {
        question: "Is the Bureau of Prisons inmate search free?",
        answer: "Yes. The BOP inmate locator at bop.gov is completely free to use. It covers all federal inmates in BOP custody. No account or registration is required.",
      },
      {
        question: "Why does the inmate not appear in the search results?",
        answer: "Common reasons include a spelling error in the name, searching the wrong system for their custody type, or the inmate being recently transferred or booked and not yet entered into the system. New inmates can take 24 to 72 hours to appear. Try alternate spellings and confirm you are searching the right system.",
      },
      {
        question: "What is VINELink and how does it work?",
        answer: "VINELink is a free national service at vinelink.com that allows families to search for inmates in many county jails and state prisons across the country. You can search by name or ID number and register for free notifications if the custody status of an inmate changes.",
      },
      {
        question: "Can I find a federal inmate if they were released?",
        answer: "Yes. The BOP inmate locator includes records of federal inmates, including those who have been released. If an inmate appears as RELEASED in the locator, they are no longer in BOP custody.",
      },
      {
        question: "How do I find an inmate in a private prison?",
        answer: "Inmates housed in private prisons under contract with the BOP or a state DOC still appear in the contracting agency locator. Search the BOP locator for federal contract inmates or the state DOC locator for state contract inmates. The locator reflects who holds primary custody, not who operates the physical facility.",
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
    title: "Inmate Tablets Explained: What They Are, What They Cost, and How Families Can Help",
    excerpt: "Learn what inmate tablets are, which platforms offer them, what features they include, and how families can communicate through tablet-based messaging.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Inmate Tablets Explained: JPay Tablets, What Is on Them, Costs and How to Send Money",
    seoDescription: "Learn how inmate tablets work at prisons and jails - what JPay and GTL tablets include, what services cost, how families send money for tablet use, and which facilities have tablet programs.",

    intro: [
      "Inmate tablets are secure electronic devices provided to incarcerated people at facilities that have contracted with a tablet program provider. They allow inmates to send and receive messages, make video calls, download entertainment and educational content, and in some facilities access legal resources and file grievances - all from inside the facility without internet access.",
      "Tablets are most commonly provided through JPay, which is owned by Securus Technologies, or through GTL ViaPath Technologies through their ConnectNetwork platform. The devices use a secure internal network managed by the provider and do not have open internet access.",
      "This guide explains how inmate tablet programs work, what services and content are available on them, what things cost, and how families can send money to support their loved one tablet use.",
    ],

    sections: [
      {
        heading: "What Are Inmate Tablets and How Do They Work",
        body: [
          "Inmate tablets are secure electronic devices distributed to incarcerated people at facilities that participate in a tablet program. The devices are provided by companies under contract with the facility or state Department of Corrections. Common providers include JPay, which operates under Securus Technologies and Aventiv Technologies, and GTL ViaPath Technologies.",
          "The tablets connect to a secure internal network inside the facility. They do not have open internet access - inmates cannot browse websites, use social media, or access any external services outside of what the provider has approved and loaded onto the device.",
          "Tablets must sync to a facility kiosk periodically to remain active. Some facilities require syncing every 30 days. If an inmate does not sync their device, it may lock and become unusable until the sync is completed.",
          "Access to tablets can be restricted or revoked as a disciplinary measure. Facilities use tablet access as an incentive for good behavior. Inmates who receive disciplinary infractions may temporarily or permanently lose access to their device.",
        ],
      },
      {
        heading: "What Is Available on an Inmate Tablet",
        body: [
          "Most inmate tablets come with a mix of free and paid content. Free content typically includes some educational materials, religious texts, law library access, facility handbooks, and a limited number of ebooks or other resources provided at no cost.",
          "Paid content includes electronic messaging, video calls, music downloads, movie rentals or purchases, games, additional ebooks, and premium educational programs. Each of these services is charged separately through a credit or stamp system linked to the inmate media account.",
          "Electronic messaging through the tablet works similarly to messaging through the provider website. Families send messages through JPay or ConnectNetwork as normal, and the inmate reads and replies on their tablet rather than at a shared kiosk. Photo attachments and VideoGrams may also be available depending on the facility.",
          "Video calls on tablets allow inmates to initiate calls to approved contacts without needing to use a shared video terminal or schedule in advance at some facilities. Families receive the call through the provider app on their smartphone. Costs are charged per minute or per session.",
        ],
      },
      {
        heading: "How Much Does Inmate Tablet Use Cost",
        body: [
          "The tablet device itself is often provided free of charge to the inmate under the facility contract. The provider recoups costs through usage fees paid by inmates and their families for content and services.",
          "Electronic messaging typically costs between $0.25 and $0.50 per message depending on the state and facility contract. Photo attachments cost additional stamps or credits per image. VideoGrams, which are short video messages, cost several stamps each.",
          "Music and entertainment downloads are charged per song, per album, or per rental. Prices vary by provider and contract but are generally comparable to standard retail digital media pricing or higher. Games and additional educational programs are also charged separately.",
          "The costs families absorb can add up significantly if messaging, video calls, and entertainment are all being used regularly. Setting a monthly budget and communicating it with your loved one can help manage costs and avoid unexpected charges to your account.",
        ],
      },
      {
        heading: "How Families Send Money for Tablet Use",
        body: [
          "To use paid services on the tablet, the inmate needs funds in their media account or trust account depending on how the facility structures payments. Families send money through the same platform that manages the tablet - typically JPay for JPay tablet facilities or ConnectNetwork for GTL tablet facilities.",
          "Log in to your JPay or ConnectNetwork account and look for the option to send money to your loved one. Select the appropriate account type - some facilities separate the inmate trust account used for commissary from the media account used for tablet content. Make sure you are funding the correct account.",
          "Transaction fees apply when sending money. These fees vary by provider and the amount sent. Keep your confirmation number until you confirm the funds have been received. Processing times vary but most deposits are credited within one to three business days.",
          "Some facilities allow families to send money by mailing a money order in addition to online transfers. Check the facility website for current accepted payment methods and addresses.",
        ],
      },
      {
        heading: "Which Facilities Have Tablet Programs",
        body: [
          "Tablet programs are widespread but not universal. Most large state prison systems have contracted with a tablet provider, but availability varies by state and individual facility. County jails are less likely to have tablet programs than state prisons, though some larger county facilities do offer them.",
          "JPay tablets are available in many state systems including Florida, Georgia, Michigan, Indiana, Colorado, New Jersey, New York, and others. GTL ViaPath tablet programs are available in California through the CDCR system and various other states.",
          "The federal Bureau of Prisons also operates a tablet program. Federal inmates can access messaging and some entertainment content through facility tablets managed under the TRULINCS system.",
          "To find out whether your loved one facility has a tablet program, search our facility directory or call the facility directly. If a tablet program is available, the facility or provider will explain how to send money and how messaging works through the device.",
        ],
      },
      {
        heading: "What Happens to the Tablet When an Inmate Is Released or Transferred",
        body: [
          "When an inmate is released from a facility, the tablet typically goes with them in states where the device is considered the inmate property under the program contract. Pennsylvania, for example, allows released inmates to keep their tablet. However, content linked to the secure facility network may no longer be accessible after release.",
          "When an inmate transfers to a different facility, the situation depends on whether the new facility uses the same provider. If the new facility uses the same provider, the tablet and its content usually transfer with the inmate. If the new facility uses a different provider, the old tablet may need to be mailed home or turned in.",
          "Families should be aware that when a state switches tablet providers - which happens when contracts expire and are renegotiated - all content on the old platform may be lost. Photos, messages, and purchased media from the previous provider are not always transferable to the new system.",
        ],
      },
    ],

    takeaways: [
      "Inmate tablets are secure devices provided through facility contracts with companies like JPay or GTL ViaPath. They do not have open internet access.",
      "Most tablets offer free basic content and paid services including messaging, video calls, music, movies, and games.",
      "Electronic messaging through the tablet costs between $0.25 and $0.50 per message depending on the facility.",
      "Families send money through the provider platform - typically JPay or ConnectNetwork - to fund the inmate media or trust account for tablet use.",
      "Tablet access can be restricted as a disciplinary measure. Facilities use it as an incentive for good behavior.",
      "Tablet programs are available at most large state prison systems but are less common at county jails.",
      "When a facility switches providers, content from the old platform may be lost and cannot transfer to the new system.",
    ],

    faq: [
      {
        question: "What can an inmate do on a prison tablet?",
        answer: "Inmate tablets allow messaging, video calls, music downloads, movie rentals, games, access to educational programs, law library resources, and in some facilities the ability to file grievances and check trust account balances. Free content varies by facility and provider. Most entertainment and communication services cost additional credits or stamps.",
      },
      {
        question: "How do I send money for my loved one to use on their tablet?",
        answer: "Log in to the provider platform your facility uses - typically JPay or ConnectNetwork. Find the option to send money and select the correct account type for tablet use - this may be labeled as a media account or trust account depending on the facility. Transaction fees apply and funds are usually credited within one to three business days.",
      },
      {
        question: "Is the tablet free for the inmate?",
        answer: "The tablet device itself is often provided free of charge to the inmate under the facility contract. However, most content and services on the tablet - including messaging, video calls, music, and entertainment - cost credits or stamps that must be purchased. The device is free but using it is not.",
      },
      {
        question: "Can I video call my loved one on their tablet?",
        answer: "Some tablet programs allow inmates to initiate video calls through the device. You would receive the call through the provider app on your smartphone. Not all facilities enable this feature. Check with the facility or look at your provider dashboard to see if tablet video calls are available.",
      },
      {
        question: "What happens to the tablet if my loved one is transferred?",
        answer: "If the new facility uses the same provider, the tablet and content usually transfer. If the new facility uses a different provider, the tablet may need to be mailed home or turned in. When a state switches providers entirely, content from the old platform may not transfer to the new system.",
      },
      {
        question: "Does my loved one facility have a tablet program?",
        answer: "Most large state prison systems have tablet programs but availability varies. Search our facility directory or call the facility directly to confirm whether a tablet program is available and which provider manages it.",
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
    title: "Prison Visitation Rules: Complete Guide for First-Time Visitors",
    excerpt: "Learn the general rules for visiting someone in prison or jail, including how to get approved, what to wear, what to bring, and what to expect.",
    category: "Visitation",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Prison Visitation Rules: Approval Process, Dress Code, ID Requirements and What to Expect",
    seoDescription: "Complete guide to prison visitation rules - how to get approved as a visitor, what ID to bring, what to wear, what you can and cannot bring inside, and what to expect on visiting day. Free guide.",

    intro: [
      "Visiting a loved one in prison requires advance preparation. Every correctional facility has specific rules for visitors, and not following them can result in being turned away at the entrance. Rules vary by facility and security level, but the core requirements are consistent across most systems.",
      "Before your first visit, you must be approved and placed on the inmate visiting list. Approval takes time and requires submitting personal information and in some cases passing a background check. You cannot simply show up at a facility and ask to visit without prior approval.",
      "This guide covers the visitor approval process, what identification you need, dress code rules, what you can and cannot bring inside, what happens at the entrance, and what to expect during the visit itself.",
    ],
    sections: [
      {
        heading: "How to Get Approved as a Prison Visitor",
        body: [
          "Getting on an inmate visiting list is a required first step before any visit can take place. The process begins with the inmate, who submits your name and contact information to the facility for approval. You cannot add yourself to the list directly.",
          "After the inmate submits your information, you may be required to complete a visitor application form. The form asks for your full legal name, date of birth, address, relationship to the inmate, and consent for a background check. Some facilities mail the form to you while others require you to complete it online.",
          "Background check results affect approval. A felony conviction does not automatically disqualify you from visiting in most systems, but it can. Certain offenses, particularly crimes against children or crimes at the same facility, are more likely to result in denial. Contact the facility if you have concerns about your background before submitting an application.",
          "Approval processing time varies by facility. Most approvals take between two and six weeks. Some facilities process faster and some take longer. Do not plan a visit until you have received written confirmation that you are approved. Showing up before approval is confirmed will result in being turned away.",
        ],
      },
      {
        heading: "What Identification You Need to Visit",
        body: [
          "All visitors must present a valid government-issued photo ID at the entrance. Acceptable forms of ID at most facilities include a state-issued driver's license, a state ID card, a passport, a military ID, or an immigration document issued by a federal agency.",
          "Expired identification is generally not accepted. Make sure your ID is current before your visit. If your ID has recently expired or your name has changed, contact the facility in advance to ask what documentation they will accept.",
          "Minors visiting with a parent or legal guardian who is on the approved visitor list typically do not need their own ID. However, if a minor is being brought by an adult who is not their parent or legal guardian, additional documentation such as a notarized permission statement may be required.",
          "Some facilities may also require your vehicle registration or insurance card for the parking area. Check with the facility before your visit to confirm exactly what documents you need to bring.",
        ],
      },
      {
        heading: "Prison Visitor Dress Code Rules",
        body: [
          "Every correctional facility enforces a dress code for visitors. Clothing that resembles inmate uniforms is almost universally prohibited. This typically means avoiding khaki, tan, orange, or gray clothing depending on what the facility uses for inmate uniforms. Call ahead to confirm the restricted colors for the specific facility you are visiting.",
          "Revealing clothing is not permitted. This includes low-cut tops, clothing that exposes the midriff, shorts or skirts more than three inches above the knee, see-through fabrics, sleeveless shirts at some facilities, and form-fitting clothing such as leggings or yoga pants at many facilities.",
          "Underwire bras can trigger metal detectors and may be flagged during security screening. Some facilities explicitly allow them while others ask visitors to wear a non-underwire bra. Check the facility dress code in advance if this is a concern.",
          "Open-toed shoes are prohibited at many facilities. Excessive jewelry should be left at home as it may trigger metal detectors and could be confiscated or require you to return to your vehicle. Hooded sweatshirts or jackets with hoods are restricted at some facilities.",
          "If you arrive wearing clothing that violates the dress code, you will be turned away and will need to return another day. When in doubt, call the facility or check their website for the specific dress code before your visit.",
        ],
      },
      {
        heading: "What You Can and Cannot Bring Inside",
        body: [
          "Most facilities allow visitors to bring a small amount of cash or coins for vending machines in the visiting area. This is typically limited to $20 to $40 in coins or small bills depending on the facility. Cash must be carried in a clear plastic bag. No wallets, purses, or bags are allowed inside beyond what the facility specifically permits.",
          "Cell phones, cameras, recording devices, and electronic devices of any kind are prohibited inside most correctional facilities. Leave these in your locked vehicle before entering. Some facilities have lockers at the entrance for storing personal items.",
          "Food and drinks from outside are not permitted inside. Vending machines are typically available in the visiting area and you can purchase snacks there for both yourself and the inmate in most facilities.",
          "Children may bring a small number of approved items such as diapers, a clear bag of snacks, or a change of clothes. These must be in clear plastic bags and are subject to inspection. Check with the facility for specific rules about children's items before your visit.",
        ],
      },
      {
        heading: "What Happens at the Entrance",
        body: [
          "Arrive early. Processing takes time and late arrivals may miss their visiting window or lose their spot. Plan to arrive at least 30 minutes before the scheduled visit start time.",
          "At the entrance, you will present your ID and sign in. Staff will verify that you are on the approved visitor list and confirm the visit is scheduled. If anything does not match - your name, the ID, or your approval status - the visit may be denied.",
          "You will pass through a metal detector. Some facilities also use pat-down searches, body scanners, or ion scanners to detect traces of drugs or other substances. Refusing a search means you will not be allowed to enter.",
          "After clearing security, you will be directed to the visiting area. You may need to wait before the inmate arrives. The inmate is notified of your arrival and is brought to the visiting area by staff.",
        ],
      },
      {
        heading: "What to Expect During the Visit",
        body: [
          "Physical contact rules vary by facility and security level. Most facilities allow a brief hug and kiss at the beginning and end of the visit. Extended physical contact is not permitted and staff will intervene if the rules are violated.",
          "Conversation is not private. All visiting room conversations are monitored and may be recorded. Do not discuss anything related to the inmate legal case, ongoing investigations, other people inside the facility, or anything that could be interpreted as planning for a violation of rules.",
          "Visit lengths are set by the facility. Most visits last between one and three hours. Some facilities have fixed visit windows and others allow flexible timing within a daily visiting period. The visit ends when the time limit is reached or when staff determine it is over.",
          "If a visit is terminated early by staff due to a rule violation, the visitor may be banned from future visits. Serious violations can result in a permanent ban at that facility.",
        ],
      },
    ],

    takeaways: [
      "You must be approved and placed on the inmate visiting list before your visit. This process takes two to six weeks and begins with the inmate submitting your information.",
      "Bring a valid government-issued photo ID. Expired IDs are not accepted.",
      "Follow the dress code strictly. Arriving in prohibited clothing means being turned away.",
      "Leave cell phones, cameras, wallets, and personal bags in your locked vehicle.",
      "Only bring approved cash in a clear plastic bag for vending machines. Amounts are typically limited to $20 to $40.",
      "Arrive early. Processing takes time and late arrivals may miss their visit window.",
      "All conversations in the visiting room are monitored and may be recorded.",
      "Physical contact is limited to a brief hug and kiss at the start and end of the visit.",
    ],

    faq: [
      {
        question: "How do I get on the visiting list for a prison?",
        answer: "The inmate must submit your name and contact information to the facility to begin the approval process. You may then be required to complete a visitor application form and consent to a background check. You cannot add yourself to the list directly.",
      },
      {
        question: "What ID do I need to visit someone in prison?",
        answer: "You need a valid government-issued photo ID. Acceptable forms include a driver's license, state ID card, passport, military ID, or immigration document. Expired IDs are not accepted. Check with the facility for their specific requirements before your visit.",
      },
      {
        question: "What should I wear to visit someone in prison?",
        answer: "Wear modest, non-revealing clothing that does not resemble inmate uniforms. Avoid the colors used for inmate clothing at that facility - call ahead to confirm. Avoid shorts or skirts more than three inches above the knee, see-through fabric, form-fitting clothing, and excessive jewelry. When in doubt, call the facility before your visit.",
      },
      {
        question: "Can I bring my phone into a prison visit?",
        answer: "No. Cell phones, cameras, and electronic devices are prohibited inside correctional facilities. Leave your phone in your locked vehicle before entering. Do not attempt to bring any electronic device inside.",
      },
      {
        question: "Can I bring food or drinks to a prison visit?",
        answer: "No. Outside food and drinks are not permitted inside visiting areas. Most facilities have vending machines in the visiting room where you can purchase snacks and drinks for yourself and the inmate. You can bring approved cash in a clear plastic bag for vending machine use.",
      },
      {
        question: "Can I hug someone during a prison visit?",
        answer: "Most facilities allow a brief hug and kiss at the beginning and end of the visit. Extended physical contact is not permitted and staff will intervene. Contact rules vary by facility and security level, so check the specific facility policy before your visit.",
      },
      {
        question: "What happens if I violate visiting rules?",
        answer: "Minor violations may result in a warning or termination of the visit. Serious violations can result in a temporary or permanent ban from visiting that facility. The inmate may also face disciplinary action as a result of visitor rule violations.",
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
    title: "How JPay Works: Complete Guide for Families of State Prison Inmates",
    excerpt: "A complete guide to JPay, the most widely used inmate communication platform for state prisons, covering messaging, video, money transfer, and account setup.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How JPay Works: Stamps, Messaging, Money Transfer, Video Visits Setup Guide",
    seoDescription: "Complete guide to JPay for families - how to create an account, buy stamps, send messages and photos, transfer money, and schedule video visits at state prisons. Free step-by-step guide.",

    intro: [
      "JPay is the most widely used inmate communication platform in the United States, serving over 35 states and more than 1,000 correctional facilities. If your loved one is in a state prison, JPay is the most likely platform you will need to use for messaging, money transfers, and video visits.",
      "JPay operates through a virtual stamp system. You purchase stamps in advance and use them to send messages and photos to your loved one. The inmate reads and replies through a JPay tablet or kiosk inside the facility. Everything goes through the JPay platform and is subject to facility review.",
      "This guide explains how to create a JPay account, how the stamp system works, how to send your first message, how to transfer money, and how to schedule a video visit.",
    ],

    sections: [
      {
        heading: "What Is JPay and Which Facilities Use It",
        body: [
          "JPay is a privately held inmate communication company that contracts with state departments of corrections to provide messaging, money transfers, video visitation, and tablet-based services to incarcerated people and their families. JPay is owned by Securus Technologies.",
          "JPay serves facilities in over 35 states including Florida, Georgia, Michigan, Colorado, Indiana, and many others. The services available through JPay vary by state and facility. Not every JPay facility offers every service - messaging may be available where video visits are not, and vice versa.",
          "JPay does not serve federal Bureau of Prisons facilities. Federal inmates use CorrLinks for messaging. If you are unsure whether your loved one facility uses JPay, search our facility directory or visit jpay.com and search by the inmate name and state.",
        ],
      },
      {
        heading: "How to Create a JPay Account",
        body: [
          "Go to jpay.com and click on the sign up or register option. On the homepage, you will see a search section where you can enter the state and the inmate correctional ID number. Enter this information and select your loved one from the results.",
          "Once you have found the inmate, you will be prompted to create your account. Enter your name, email address, and create a password. Agree to the terms of service and complete the registration process. Account creation is free.",
          "After creating your account, you will be taken to your dashboard which shows all available services for your loved one at their specific facility. Services shown on your dashboard are the ones actually available at that facility. If a service does not appear, it is not offered at that location.",
          "JPay also has a free mobile app available for iOS and Android. Download the JPay app from your app store, log in with your account details, and you can access all services from your smartphone.",
        ],
      },
      {
        heading: "How JPay Stamps Work",
        body: [
          "JPay uses a virtual stamp system for messaging. You purchase stamps in advance and use them to send messages and photo attachments. Each standard text message requires one stamp. Photo attachments require an additional stamp per photo.",
          "Stamp prices vary by state and bundle size. Stamps typically cost between $0.09 and $0.47 each depending on the state and the bundle you purchase. Larger bundles cost less per stamp. Some states set fixed stamp prices while others allow JPay to set their own rates.",
          "To buy stamps, log in to your JPay account, go to the email section, and click buy stamps. Select the bundle size and pay by credit card or debit card. Stamps are added to your account immediately after purchase and do not expire.",
          "Some facilities provide inmates with a small number of free stamps each month - typically four stamps per month. These free stamps reset on the first of each month and do not accumulate if unused.",
        ],
      },
      {
        heading: "How to Send a JPay Message",
        body: [
          "Log in to your JPay account or open the JPay app. Select your loved one from your contact list. Click compose or write email and type your message in the text field. Messages can be up to 6,000 characters in most states.",
          "To attach a photo, use the attachment option and upload your image. Each photo attachment uses one additional stamp. Photos are subject to review and must meet facility content guidelines. Rejected photos will not be delivered and stamps used for rejected content are typically not refunded.",
          "Click preview to see how your message looks before sending. When ready, click send and confirm the stamp cost. Your message is submitted and enters the facility review queue.",
          "Most JPay messages are delivered within 24 to 48 hours after submission. Some facilities deliver faster and some take longer depending on review volume. The inmate receives the message on their JPay tablet or at a kiosk in the facility.",
        ],
      },
      {
        heading: "How to Send Money Through JPay",
        body: [
          "Log in to your JPay account and go to the send money section. Select your loved one and enter the amount you want to send. JPay accepts credit cards, debit cards, and in some cases cash at JPay kiosks at the facility.",
          "JPay charges a transaction fee for money transfers. Fees vary by state, transfer amount, and payment method. Fees typically range from $0.95 to $4.95 per transaction. Some states have negotiated lower fees. Check the fee schedule on the jpay.com website before sending.",
          "Money sent through JPay goes directly to the inmate trust account. The inmate can use these funds to purchase commissary items, buy additional JPay stamps, pay for phone calls, and cover other approved expenses.",
          "Processing times for JPay money transfers vary. Most transfers are credited to the inmate account within one to three business days. Some facilities process transfers the same day.",
        ],
      },
      {
        heading: "How to Schedule a JPay Video Visit",
        body: [
          "Log in to your JPay account and go to the video section if it is available for your loved one facility. Not all JPay facilities offer video visitation. If the video option does not appear on your dashboard, the facility does not currently offer this service.",
          "Select an available date and time from the scheduling calendar. Review the cost and enter your payment information. You will receive a confirmation of the scheduled visit.",
          "At the scheduled time, log in to JPay on your computer or through the JPay app on your smartphone or tablet. Make sure your camera and microphone are working before the visit begins. Join the call at the scheduled time and wait for the inmate to connect from the facility terminal.",
          "JPay video visits typically cost between $7.50 and $12.99 per session depending on the facility. Sessions are usually 20 to 30 minutes long. All video visits are recorded and monitored by facility staff.",
        ],
      },
    ],

    takeaways: [
      "JPay serves over 35 states and more than 1,000 correctional facilities. It is the most widely used state prison communication platform.",
      "JPay does not serve federal prisons. Federal inmates use CorrLinks for messaging.",
      "Creating a JPay account is free. Go to jpay.com, search by the inmate state and ID number, and register.",
      "JPay uses a stamp system. Each message costs one stamp. Stamps typically cost between $0.09 and $0.47 depending on the state and bundle.",
      "Messages are delivered within 24 to 48 hours and go to the inmate JPay tablet or facility kiosk.",
      "Money sent through JPay goes to the inmate trust account and can be used for commissary, stamps, and phone calls.",
      "Video visits are available at select facilities and typically cost $7.50 to $12.99 per session.",
      "Download the free JPay app for iOS or Android to manage all services from your smartphone.",
    ],

    faq: [
      {
        question: "How do I set up a JPay account?",
        answer: "Go to jpay.com, enter the state and the inmate correctional ID number, and select your loved one from the results. Then create your free account by entering your name, email address, and a password. Account creation is free and takes only a few minutes.",
      },
      {
        question: "How much do JPay stamps cost?",
        answer: "Stamp prices vary by state and bundle size. Stamps typically cost between $0.09 and $0.47 each. Larger bundles cost less per stamp. Check the buy stamps section of your JPay account to see current pricing for your loved one facility.",
      },
      {
        question: "How long does it take for a JPay message to arrive?",
        answer: "Most JPay messages are delivered within 24 to 48 hours after submission. Delivery depends on the facility review process. Some facilities are faster and some take longer. There is no way to expedite delivery.",
      },
      {
        question: "Can I send photos through JPay?",
        answer: "Yes. JPay allows photo attachments. Each photo requires one additional stamp per image. Photos are reviewed by facility staff before delivery. Content that violates facility rules will be rejected and the stamps used may not be refunded.",
      },
      {
        question: "Does JPay work for federal prisons?",
        answer: "No. JPay serves state prisons and does not work for federal Bureau of Prisons facilities. Federal inmates use CorrLinks for messaging. If you are unsure whether your loved one is in a federal or state facility, check the Bureau of Prisons inmate locator at bop.gov.",
      },
      {
        question: "How do I send money through JPay?",
        answer: "Log in to your JPay account, go to the send money section, select your loved one, enter the amount, and pay by credit or debit card. JPay charges a transaction fee that varies by state and amount. Funds are typically credited to the inmate trust account within one to three business days.",
      },
      {
        question: "Is there a JPay mobile app?",
        answer: "Yes. JPay has a free mobile app available for iOS and Android. Download the JPay app from your app store and log in with your account details to access messaging, money transfers, and video visits from your smartphone.",
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
    title: "How CorrLinks Works: Complete Guide for Federal Prison Families",
    excerpt: "Learn how CorrLinks works for messaging federal inmates, how to register, how the approval process works, and what the service costs.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How CorrLinks Works: Setup, Invitation Process, Costs and Rules for Federal Inmates",
    seoDescription: "Complete guide to CorrLinks for families of federal inmates - how to receive your invitation, create an account, send messages, what it costs, and what rules apply. Free step-by-step guide.",

    intro: [
      "CorrLinks is the only approved electronic messaging platform for all federal Bureau of Prisons facilities in the United States. If your loved one is in a federal prison, CorrLinks is your only option for digital communication. No other messaging platform is accepted at BOP facilities.",
      "CorrLinks operates through a system called TRULINCS, which stands for Trust Fund Limited Inmate Computer System. Inmates access TRULINCS through secure computer terminals inside the facility. Families and approved contacts communicate through the CorrLinks website or mobile app from outside.",
      "This guide explains how CorrLinks works, how to receive your invitation, how to set up your account, what messages cost, and what rules apply to federal inmate messaging.",
    ],

    sections: [
      {
        heading: "What Is CorrLinks and How Does It Work",
        body: [
          "CorrLinks is a web-based messaging service that connects federal inmates with approved outside contacts. It is operated by Advanced Technologies Group under contract with the Federal Bureau of Prisons. CorrLinks is not a general email service - it operates through the TRULINCS system and has no connection to standard email providers.",
          "Inmates access CorrLinks through TRULINCS computer terminals in their housing unit. They can compose messages, read incoming messages, and manage their contact list from these terminals. Inmates are charged for the time they spend using the system at a rate of $0.05 per minute. This cost comes from the inmate trust account, not from outside contacts.",
          "Outside contacts use the CorrLinks website at corrlinks.com or the CorrLinks mobile app to read and reply to messages. Creating a CorrLinks account as an outside contact is free. You are not charged to send or receive messages through CorrLinks.",
        ],
      },
      {
        heading: "How to Get Started with CorrLinks",
        body: [
          "You cannot create a CorrLinks contact connection on your own. The process must begin with the inmate. The inmate logs in to TRULINCS at a facility terminal, enters your name, mailing address, and email address, and submits a contact request. CorrLinks then sends you an invitation email.",
          "When you receive the invitation email from CorrLinks, it will contain a link and an authorization code. Click the link and follow the instructions to create your free CorrLinks account. You will need to enter your name, email address, and create a password.",
          "Once your account is created, you must accept the contact request from the inmate. After both sides confirm the connection, you can begin exchanging messages. If you do not receive an invitation, ask your loved one to submit the request again using the correct email address.",
          "Account creation and approval typically takes between 30 minutes and a few hours. If you do not receive the invitation email within 24 hours, check your spam folder before asking the inmate to resend.",
        ],
      },
      {
        heading: "How to Send a Message Through CorrLinks",
        body: [
          "Log in to your CorrLinks account at corrlinks.com or through the CorrLinks mobile app. Select the inmate from your approved contact list. Click compose or new message and type your message in the text field.",
          "Messages on CorrLinks are text only. You cannot send photos, attachments, videos, or files through CorrLinks. If you want to send photos to a federal inmate, you must use a separate photo delivery service such as Pigeonly or a print-and-mail service.",
          "The maximum message length is 13,000 characters, which is roughly 2,000 to 2,500 words. There is no minimum length. You can send as many messages as you like. Outside contacts are not charged per message.",
          "After you submit the message, it enters a review queue. Staff monitoring means messages typically take around one hour to be delivered to the inmate. Messages from the inmate to outside contacts take around 20 minutes. These times vary by facility.",
        ],
      },
      {
        heading: "CorrLinks Costs and Premier Account",
        body: [
          "Creating a basic CorrLinks account as an outside contact is completely free. You can send and receive messages at no cost. The cost of using TRULINCS is charged entirely to the inmate at $0.05 per minute for composing, reading, and browsing messages.",
          "CorrLinks offers a Premier Account for outside contacts that costs approximately $6 per year. The Premier Account provides real-time push notifications when you receive a new message, faster message delivery in some cases, and access to the full mobile app features.",
          "A separate text message notification service is also available that allows CorrLinks message alerts to be delivered to your phone as a text message. This costs $6 per month or $36 per year and is separate from the Premier Account.",
          "If the inmate chooses to print incoming messages, the facility charges $0.15 per page for printing. This cost also comes from the inmate trust account.",
        ],
      },
      {
        heading: "CorrLinks Rules and Important Limitations",
        body: [
          "All messages sent and received through CorrLinks are monitored by Bureau of Prisons staff. There is no privacy in CorrLinks communication. Do not send sensitive legal information, financial details, or anything that could be interpreted as a violation of facility rules.",
          "CorrLinks does not support photo attachments, file attachments, or links. Text only is allowed. Messages that contain prohibited content will be blocked and may result in disciplinary action for the inmate or revocation of messaging privileges.",
          "Not all federal inmates have access to CorrLinks. Inmates whose crimes involved the use of a computer may be restricted from using the TRULINCS system. Ask your loved one if they have confirmed CorrLinks access before attempting to set up an account.",
          "If an inmate is transferred to a new facility, their CorrLinks contact list transfers with them. You do not need to re-register. However, the new facility must also use TRULINCS, which is standard at all BOP facilities.",
        ],
      },
    ],

    takeaways: [
      "CorrLinks is the only approved messaging platform for all federal Bureau of Prisons facilities. No other platform works for federal inmates.",
      "The process must start with the inmate. They submit your contact information through TRULINCS and CorrLinks sends you an invitation email.",
      "Creating a basic CorrLinks account as an outside contact is free. You are not charged to send or receive messages.",
      "Inmates pay $0.05 per minute to use TRULINCS. This comes from their trust account, not from you.",
      "Messages are text only - no photos, attachments, or file sharing through CorrLinks.",
      "Messages take approximately one hour to be delivered to the inmate after submission.",
      "A Premier Account costs around $6 per year and provides push notifications and full mobile app access.",
      "All messages are monitored by BOP staff. Never send sensitive legal or financial information through CorrLinks.",
    ],

    faq: [
      {
        question: "How do I get started with CorrLinks?",
        answer: "You cannot initiate the process yourself. The inmate must log in to TRULINCS at the facility, enter your name and email address, and submit a contact request. CorrLinks then sends you an invitation email with a link to create your free account.",
      },
      {
        question: "Is CorrLinks free for families?",
        answer: "Yes. Creating a basic CorrLinks account and sending or receiving messages as an outside contact is completely free. The cost of using TRULINCS is charged to the inmate at $0.05 per minute. A Premier Account for push notifications costs around $6 per year.",
      },
      {
        question: "Can I send photos through CorrLinks?",
        answer: "No. CorrLinks is text only. You cannot send photos, files, or attachments. To send photos to a federal inmate, you must use a separate print-and-mail photo service such as Pigeonly or a similar provider.",
      },
      {
        question: "How long does it take for a CorrLinks message to be delivered?",
        answer: "Messages to an inmate typically take around one hour to be delivered after submission due to staff monitoring. Messages from the inmate to outside contacts take around 20 minutes. Delivery times vary by facility and staff availability.",
      },
      {
        question: "Does CorrLinks have a mobile app?",
        answer: "Yes. CorrLinks has a free mobile app available for iOS and Android. The app allows you to read and send messages from your smartphone. A Premier Account subscription unlocks full app features including real-time push notifications.",
      },
      {
        question: "What if I never received my CorrLinks invitation?",
        answer: "Check your spam or junk mail folder first. If it is not there, ask your loved one to resubmit the contact request using the correct email address. Make sure the email address they entered matches your account exactly, including capitalization.",
      },
      {
        question: "Can CorrLinks be used at state prisons?",
        answer: "No. CorrLinks is exclusively for federal Bureau of Prisons facilities. State prisons use different providers such as JPay or ConnectNetwork. If your loved one is in a state prison, search our facility directory to find the correct messaging platform.",
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
    title: "How to Set Up Inmate Email: Step-by-Step Guide for Families",
    excerpt: "A step-by-step guide to creating an inmate email account, finding the right platform, getting approved as a contact, and sending your first message.",
    category: "Getting Started",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Set Up Inmate Email: JPay, CorrLinks, ConnectNetwork Account Setup Guide",
    seoDescription: "Step-by-step guide to setting up inmate email - how to create an account on JPay, CorrLinks, or ConnectNetwork, find your loved one, get approved, buy credits, and send your first message.",

    intro: [
      "Setting up inmate email is not the same as creating a regular email account. You cannot simply send a message to a prison address. You must create an account on the specific platform your loved one facility uses, find your loved one in the system, get approved as a contact, purchase messaging credits, and then send your first message.",
      "The platform you need depends entirely on which facility your loved one is in. Federal Bureau of Prisons facilities use CorrLinks. Most state prisons use JPay. County jails and some state prisons use ConnectNetwork or GettingOut. Using the wrong platform means you will not be able to find your loved one in the system.",
      "This guide walks you through the complete setup process for each major platform, step by step, so you can start communicating as quickly as possible.",
    ],

    sections: [
      {
        heading: "Step One: Find Out Which Platform Your Facility Uses",
        body: [
          "Before creating any account, confirm which messaging platform your loved one facility uses. The fastest way is to search our facility directory - find the facility by name and the provider information will be listed on the facility page.",
          "You can also call the facility directly and ask which electronic messaging provider they use. Have the inmate full name and ID number ready before you call. Facility reception staff can usually confirm the messaging provider quickly.",
          "If your loved one is in a federal Bureau of Prisons facility, the answer is always CorrLinks. No other messaging platform is approved for BOP facilities. If they are in a state prison, JPay is the most common but not universal. If they are in a county jail, ConnectNetwork or GettingOut are the most likely options.",
        ],
      },
      {
        heading: "How to Set Up a JPay Email Account",
        body: [
          "Go to jpay.com. On the homepage, find the sign up section and enter the state where your loved one is incarcerated along with their correctional ID number. Select your loved one from the search results to link their profile to your account.",
          "Enter your personal information including your full name, email address, and create a password. Agree to the terms of service and complete registration. Account creation is free. You will receive a confirmation email - click the link to verify your account.",
          "After your account is verified, log in and go to the email section of your dashboard. Click buy stamps to purchase messaging credits. Each message requires one stamp. Stamp prices vary by state and bundle size but typically cost between $0.09 and $0.47 each.",
          "Once you have stamps, click compose to write your first message. Type your message, preview it to confirm the stamp cost, and click send. Your message will enter the facility review queue and typically arrive within 24 to 48 hours.",
          "Download the free JPay app for iOS or Android to manage your account from your smartphone. The app provides the same features as the website and is often more convenient for checking messages on the go.",
        ],
      },
      {
        heading: "How to Set Up a CorrLinks Email Account for Federal Inmates",
        body: [
          "CorrLinks works differently from all other platforms. You cannot start the process yourself. The inmate must first log in to a TRULINCS terminal at the facility, enter your name and email address, and submit a contact request. CorrLinks will then send an invitation email to you.",
          "Check your inbox for an email from CorrLinks. It may take several hours to arrive. Check your spam folder if you do not see it within 24 hours. Do not delete this email - it contains the link you need to create your account.",
          "Click the link in the invitation email. You will be directed to the CorrLinks registration page. Create a username and password and complete your account profile. Account creation is completely free for outside contacts.",
          "Once your account is created, accept the contact request from the inmate. After both sides confirm the connection, you can begin exchanging messages. There is no cost to send or receive messages as an outside contact. The inmate pays a usage fee on their end.",
          "Enable email alerts during account setup so you receive a notification at your personal email address whenever the inmate sends you a new message. Without alerts, you would need to check CorrLinks manually to know if you have received a message.",
        ],
      },
      {
        heading: "How to Set Up a ConnectNetwork Email Account",
        body: [
          "Go to connectnetwork.com and click create account. Enter your full name, email address, and phone number and create a password. Account creation is free. Verify your account through the confirmation email.",
          "After logging in, go to My Facilities and select the state and facility from the dropdown menus. Add the facility to your account. Then go to My Inmates and search for your loved one by name or inmate ID number. Add them to your account.",
          "Once your loved one is added, your dashboard will show the services available at their facility. If messaging is available, you will see it as an option. Purchase messaging credits through the platform and compose your first message.",
          "ConnectNetwork also has a free mobile app for iOS and Android. Download the app and log in with your account details to access messaging and other services from your smartphone.",
        ],
      },
      {
        heading: "How to Set Up a GettingOut Account",
        body: [
          "GettingOut is common at county jails and uses an invitation model similar to CorrLinks at some facilities. The inmate may need to add you as a contact first, or you may be able to create an account and search for them directly depending on the facility.",
          "Go to gettingout.com or download the GettingOut app. Create a free account with your name, email, and phone number. Search for your loved one by facility name and inmate ID or name. If the facility requires the inmate to initiate contact, you will need to wait for their invitation.",
          "Once connected, you can send messages and in some cases schedule video visits through the same account. GettingOut is known for its mobile app which is generally well-reviewed and easy to use.",
        ],
      },
      {
        heading: "Common Problems When Setting Up Inmate Email",
        body: [
          "Using the wrong inmate ID is the most common problem. The ID used for messaging accounts is the facility-assigned inmate number, not a court case number, booking number, or social security number. Confirm the correct ID directly with your loved one or the facility before creating your account.",
          "Not receiving the CorrLinks invitation email is a frequent issue. Ask your loved one to confirm the exact email address they submitted. One wrong character means the invitation goes to a non-existent address. If the address was correct, check your spam folder before asking them to resubmit.",
          "Your loved one not appearing in a platform search usually means you are on the wrong platform for their facility, or you are searching with incorrect information. Double-check the facility name and the inmate ID before concluding they are not in the system.",
          "Stamps or credits not working after purchase is often caused by a delay in account verification. Make sure your account email is verified before purchasing credits. If stamps disappear without sending a message, contact the platform customer service with your transaction confirmation number.",
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
    title: "How ConnectNetwork Works: Complete Guide for Families",
    excerpt: "Learn how ConnectNetwork, operated by Global Tel Link, works for inmate communication across state prisons and county jails.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How ConnectNetwork Works: AdvancePay, Messaging, Video Visits and Money Transfer Guide",
    seoDescription: "Complete guide to ConnectNetwork by GTL for families - how to create an account, set up AdvancePay for phone calls, send messages, schedule video visits, and transfer money. Free step-by-step guide.",

    intro: [
      "ConnectNetwork is the consumer-facing platform operated by GTL, also known as Global Tel Link or ViaPath Technologies. GTL is one of the largest inmate communication companies in the United States, serving over 1,800 correctional facilities across all 50 states. ConnectNetwork is the website and app families use to manage their accounts and stay connected.",
      "ConnectNetwork handles phone calls through a prepaid system called AdvancePay, messaging at facilities where electronic messaging is available, video visitation, and inmate money transfers. The services available to you depend on which ones your loved one facility has contracted for.",
      "This guide explains how ConnectNetwork works, how to create your account, how to set up AdvancePay for phone calls, how to send messages, how to schedule video visits, and how to transfer money to an inmate trust account.",
    ],

    sections: [
      {
        heading: "What Is ConnectNetwork and Which Facilities Use It",
        body: [
          "ConnectNetwork is operated by GTL, one of the largest inmate communication and technology companies in the United States. GTL holds contracts with correctional facilities, and ConnectNetwork is the platform families use to access those services. GTL also operates the GettingOut platform, which handles messaging and video visits at some facilities.",
          "ConnectNetwork serves a wide range of facility types including federal Bureau of Prisons institutions, state prisons, and county jails across all 50 states. It is especially common in county detention centers and federal facilities. If your loved one is in a county jail, ConnectNetwork is one of the most likely platforms you will need.",
          "The specific services available through ConnectNetwork vary by facility. Your dashboard will show only the services that are actually available at your loved one facility. If phone calls are available but messaging is not, only the phone account option will appear.",
        ],
      },
      {
        heading: "How to Create a ConnectNetwork Account",
        body: [
          "Go to connectnetwork.com and click on the sign up or create account option. You will need to provide your full name, email address, phone number, and create a password. Account creation is free and takes only a few minutes.",
          "After creating your account, search for your loved one by facility name and inmate ID number. Once you find and add them to your account, your dashboard will display the services available at their facility.",
          "ConnectNetwork also has a free mobile app available for iOS and Android. Download the ConnectNetwork app from your app store and log in with your account details. You can manage all services from the app including funding accounts, sending messages, and scheduling video visits.",
          "If you do not have internet access, you can set up your account over the phone by calling ConnectNetwork customer service. Follow the voice prompts to complete account setup and fund your AdvancePay account.",
        ],
      },
      {
        heading: "How to Set Up AdvancePay for Phone Calls",
        body: [
          "AdvancePay is ConnectNetwork prepaid phone account. You deposit money in advance and funds are deducted each time the inmate calls you. This is the most cost-effective way to receive calls and the most commonly used account type.",
          "To set up AdvancePay, log in to your ConnectNetwork account and go to the phone account section. Register the phone number where you want to receive calls. Add funds using a credit card, debit card, or Western Union. There are no setup fees for AdvancePay accounts.",
          "Once your AdvancePay account is funded, the inmate can call your registered phone number from the facility phone. You cannot initiate calls - all calls must be started by the inmate from the facility. When the inmate calls, the call connects automatically and the per-minute rate is deducted from your AdvancePay balance.",
          "Keep your AdvancePay balance funded to avoid missed calls. If the balance reaches zero, calls cannot connect. You can set up automatic refills through your ConnectNetwork account to ensure your balance stays above a minimum level.",
        ],
      },
      {
        heading: "How to Send Messages Through ConnectNetwork",
        body: [
          "Electronic messaging through ConnectNetwork is available at facilities that have contracted for this service. If messaging is available, it will appear as an option on your dashboard. If it does not appear, your facility does not offer electronic messaging through ConnectNetwork.",
          "Log in to your account and go to the messaging section. Select your loved one and click compose to write a new message. Messages are similar to email - text-based with the option to attach photos at some facilities.",
          "Messages are reviewed by facility staff before delivery. Most messages are delivered within a few hours to one business day depending on the facility review process. The inmate reads and replies through a facility kiosk, tablet, or computer terminal.",
          "Messaging costs vary by facility. Some facilities charge per message while others use a credit-based system. Check your dashboard for the current pricing at your loved one facility before sending your first message.",
        ],
      },
      {
        heading: "How to Schedule a Video Visit Through ConnectNetwork",
        body: [
          "Video visitation through ConnectNetwork is available at facilities that have contracted for this service. If video visits are available, log in to your account and go to the video visits section. Select your loved one and choose an available date and time slot.",
          "Review the cost and enter your payment information to complete the booking. You will receive a confirmation of your scheduled visit. At the scheduled time, log in to your ConnectNetwork account or open the app and join the video call.",
          "Make sure your camera and microphone are working before the visit begins. Test your connection in advance to avoid technical issues during the session. Sessions typically last 20 to 30 minutes and end automatically when the time limit is reached.",
          "All video visits are recorded and monitored by facility staff. Follow the same content rules that apply to phone calls and in-person visits. Violations can result in visit termination and suspended privileges.",
        ],
      },
      {
        heading: "How to Send Money Through ConnectNetwork",
        body: [
          "ConnectNetwork allows you to deposit money directly to an inmate trust account. This is separate from the AdvancePay phone account. Trust account deposits are used by the inmate for commissary purchases, messaging credits, and other approved expenses.",
          "Log in to your account and go to the send money or trust account section. Select your loved one, enter the amount, and pay by credit card, debit card, or other accepted payment method. ConnectNetwork charges a transaction fee that varies by amount and payment method.",
          "Processing times vary by facility. Most deposits are credited to the inmate account within one to three business days. Keep your transaction confirmation number until you confirm the funds have been received.",
        ],
      },
    ],

    takeaways: [
      "ConnectNetwork is operated by GTL and serves over 1,800 facilities across all 50 states including federal prisons, state prisons, and county jails.",
      "Creating a ConnectNetwork account is free. Go to connectnetwork.com and register with your name, email, and phone number.",
      "AdvancePay is the prepaid phone account. Fund it before the inmate calls you. You cannot initiate calls - all calls are inmate-initiated.",
      "Electronic messaging is available at select facilities. Check your dashboard to see if it is offered at your loved one facility.",
      "Video visits are available at select facilities. Schedule in advance through your ConnectNetwork account or app.",
      "Money transfers to inmate trust accounts are handled separately from the AdvancePay phone account.",
      "Download the free ConnectNetwork app for iOS or Android to manage all services from your smartphone.",
    ],

    faq: [
      {
        question: "How do I set up a ConnectNetwork account?",
        answer: "Go to connectnetwork.com and click create account. Enter your name, email address, phone number, and create a password. Account creation is free. Then search for your loved one by facility name and inmate ID to add them to your account.",
      },
      {
        question: "What is AdvancePay and how does it work?",
        answer: "AdvancePay is ConnectNetwork prepaid phone account. You deposit money in advance and the per-minute rate is deducted each time the inmate calls you. Register your phone number, add funds, and the inmate can call you from the facility phone. You cannot call them directly.",
      },
      {
        question: "Can I send messages through ConnectNetwork?",
        answer: "Electronic messaging is available at facilities that have contracted for it. Log in to your account and check your dashboard. If messaging appears as an option, it is available at your facility. If it does not appear, your facility does not offer ConnectNetwork messaging.",
      },
      {
        question: "How do I send money to an inmate through ConnectNetwork?",
        answer: "Log in to your account, go to the send money section, select your loved one, enter the amount, and pay by credit or debit card. This deposits funds to the inmate trust account, which is separate from the AdvancePay phone account. Transaction fees apply and vary by amount.",
      },
      {
        question: "Does ConnectNetwork work at federal prisons?",
        answer: "Yes. ConnectNetwork handles phone calls, video visits, and money transfers at many federal Bureau of Prisons facilities. However, electronic messaging at federal facilities is handled exclusively through CorrLinks, not ConnectNetwork. You may need both accounts if your loved one is in a federal facility.",
      },
      {
        question: "Is there a ConnectNetwork mobile app?",
        answer: "Yes. ConnectNetwork has a free mobile app available for iOS and Android. Download it from your app store and log in with your account details to manage phone accounts, send messages, schedule video visits, and transfer money from your smartphone.",
      },
      {
        question: "How long does it take for a ConnectNetwork money transfer to arrive?",
        answer: "Most deposits are credited to the inmate trust account within one to three business days. Keep your transaction confirmation number until you confirm the funds have been received by the inmate.",
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
    title: "Why Prison Phone Calls Are So Expensive: The Complete Explanation",
    excerpt: "Understand why prison phone calls cost more than regular calls, how FCC regulations have changed pricing, and how to reduce what you spend.",
    category: "Money and Accounts",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Why Are Prison Phone Calls So Expensive: FCC Rates, Commissions and Reform Explained",
    seoDescription: "Learn why prison phone calls cost so much - how facility commissions drive up prices, what the FCC has done to limit rates, which states have the cheapest rates, and how families can reduce costs.",

    intro: [
      "Prison phone calls are among the most expensive telephone services in the United States. A call that would cost a few cents per minute on a standard phone plan can cost several times more when placed from a correctional facility. For families who depend on regular calls to stay connected with an incarcerated loved one, these costs add up quickly and place a significant financial burden on people who are often already struggling.",
      "The high cost of prison phone calls is not accidental. It is the result of a system where phone companies compete for facility contracts not by offering the lowest prices to users, but by offering the highest payments to the facilities themselves. Understanding how this system works explains why prices are so high and what has been done - and not yet done - to bring them down.",
      "This guide explains why prison phone calls cost so much, how the rate-setting process works, what the FCC has done to regulate costs, and practical steps families can take to reduce their phone costs as much as possible.",
    ],

    sections: [
      {
        heading: "How the Prison Phone System Works",
        body: [
          "When a correctional facility decides which phone company to use, it issues a contract to one provider for an exclusive agreement. The provider installs phone equipment throughout the facility, manages the calling system, and handles billing. In exchange for this exclusive contract, the provider pays the facility a share of the revenue generated from calls - this payment is called a site commission.",
          "The site commission is the root cause of high prison phone rates. Providers competing for contracts offer higher and higher commissions to win the business. To cover these commission payments and still generate profit, providers charge higher rates to callers. The facility benefits financially from the arrangement while the families making calls bear the cost.",
          "Commissions have historically been very high - in some cases reaching 60 percent or more of call revenue going back to the facility. This means that for every dollar a family spends on a prison phone call, more than half was being paid to the facility as a commission before any profit was taken by the phone company.",
          "This system created an incentive structure where facilities were financially motivated to choose the provider offering the highest commission rather than the one offering the best service or lowest cost to families. Families had no choice in the matter - they had to use whatever provider held the contract.",
        ],
      },
      {
        heading: "What the FCC Has Done to Regulate Prison Phone Rates",
        body: [
          "The Federal Communications Commission has regulatory authority over telephone services and has been working to address prison phone rates for many years. The process has been slow due to legal challenges from phone providers and limitations on the FCC authority over in-state calls.",
          "For interstate calls - calls made between two different states - the FCC has established rate caps that limit how much providers can charge. The current rate caps limit charges to $0.21 per minute for calls from prisons and $0.13 per minute for calls from jails for interstate calls. The FCC also prohibited certain add-on fees for interstate calls.",
          "For in-state calls - calls within the same state - the FCC authority was legally challenged for years. Providers argued that in-state call rates were outside federal jurisdiction and subject only to state regulation. This left in-state rates largely unregulated at the federal level for a long period, allowing them to remain much higher than interstate rates in many states.",
          "The FCC has continued to expand its regulations to address in-state rates and to extend its rules to cover video calling services, which had previously been unregulated and were often priced even higher than phone calls. The regulatory landscape continues to evolve as advocates push for broader rate caps and elimination of commissions entirely.",
        ],
      },
      {
        heading: "How Rates Vary by State and Facility",
        body: [
          "Prison phone rates vary significantly depending on the state, the type of facility, and the specific contract in place. Some states have taken action beyond federal requirements to reduce costs for families. A small number of states and counties have eliminated commissions entirely and now offer free or very low-cost calls.",
          "States and counties that have moved toward free or low-cost calls include New York City, which eliminated charges for calls from city jails, San Francisco, and a growing number of county systems where local governments decided to absorb the cost of communication rather than charge families.",
          "In states with no additional regulation beyond federal minimums, in-state rates can still be significantly higher than the federal interstate cap. Families calling a loved one in a facility within the same state may pay more per minute than families calling across state lines, which is counterintuitive but reflects the regulatory gap that existed for years.",
          "The specific rate you pay depends on the facility contract currently in place. Rates change when contracts expire and are renegotiated. A rate that applied last year may be different from the rate today if a new contract was awarded to a different provider or at different terms.",
        ],
      },
      {
        heading: "Additional Fees That Increase the Total Cost",
        body: [
          "The per-minute rate is not always the full cost of a prison phone call. Providers have historically charged a variety of additional fees that increased the total bill significantly. These included connection fees charged at the start of every call regardless of length, account setup fees, account maintenance fees, fees for adding money to an account, and fees for receiving paper statements.",
          "The FCC regulations have prohibited many of these additional fees for interstate calls. Connection fees, account setup fees, and certain other add-on charges are no longer allowed for calls between states under FCC rules. However, some fees may still apply to in-state calls depending on state regulations.",
          "Payment processing fees are still common. When families add money to a prepaid phone account, the provider typically charges a fee for the transaction. These fees vary by provider and payment method. Paying by credit card may incur a higher fee than paying by another method. Always check the fee schedule before adding funds.",
          "Inactivity fees charged for accounts that have not been used in a certain period are another cost families may encounter. If you do not receive calls for an extended time and your account balance is reduced by inactivity fees, contact the provider customer service to request a fee waiver or to close the account and request a refund of any remaining balance.",
        ],
      },
      {
        heading: "What Families Can Do to Reduce Phone Call Costs",
        body: [
          "Use a prepaid account rather than collect calls. Prepaid calling accounts consistently offer lower per-minute rates than collect calls billed to your phone line. Setting up a prepaid account with the facility phone provider before the first call will save money on every subsequent call.",
          "Add money in larger amounts when possible. Some providers charge a flat transaction fee per deposit regardless of the amount added. Adding a larger amount less frequently means you pay the transaction fee less often, reducing your overall cost per minute.",
          "Check whether your state has any rate assistance programs. Some states have programs that help low-income families access prison phone services at reduced rates. Contact your state Department of Corrections or a local prison family advocacy organization to ask about any assistance available in your state.",
          "Consider video visits as an alternative for some calls. Video visits are sometimes cheaper per minute than phone calls at certain facilities, especially if the facility offers free or reduced-cost video sessions. Compare the cost of phone calls versus video visits at your specific facility.",
          "Stay informed about rate changes. Contracts expire and new ones are awarded. When a facility switches providers or a new contract is negotiated, rates may change - sometimes significantly lower. Check your provider account periodically for any rate change notifications.",
        ],
      },
      {
        heading: "Prison Phone Reform and Advocacy",
        body: [
          "The issue of prison phone costs has attracted significant advocacy attention over the past two decades. Organizations including the Prison Policy Initiative, the Worth Rises advocacy group, and various civil rights organizations have pushed for regulatory reform at both the federal and state level.",
          "The campaign for lower prison phone rates has achieved meaningful progress. The FCC rate caps for interstate calls were a direct result of sustained advocacy. The expansion of those rules to cover in-state calls and video services represented further progress. The movement toward free calls in some jurisdictions reflects what advocates argue should be the standard everywhere.",
          "Advocates argue that charging families for communication with incarcerated people is counterproductive to public safety. Research shows that maintaining family connections reduces recidivism - the rate at which released people return to prison. If high phone costs reduce contact, the argument goes, they ultimately cost society more than they save.",
          "The reform effort is ongoing. Families who want to support this work can contact their elected representatives, support advocacy organizations working on this issue, and share their personal experiences with the cost of staying connected.",
        ],
      },
    ],

    takeaways: [
      "Prison phone calls are expensive because providers pay facilities a commission from call revenue, and those commissions are covered by charging families higher rates.",
      "The FCC has capped interstate call rates at $0.21 per minute for prisons and $0.13 per minute for jails. In-state rates have historically been less regulated.",
      "Additional fees including connection fees, account fees, and payment processing fees can add significantly to the total cost beyond the per-minute rate.",
      "Use a prepaid account rather than collect calls to get the lowest available per-minute rate.",
      "A small number of states and counties have eliminated phone call charges entirely. This number is growing as advocacy efforts continue.",
      "Add money in larger amounts to reduce the impact of per-transaction fees.",
      "Video visits are sometimes cheaper than phone calls and worth comparing at your specific facility.",
    ],

    faq: [
      {
        question: "Why do prison phone calls cost so much?",
        answer: "Prison phone providers pay the facility a commission from call revenue in exchange for an exclusive contract. To cover these payments and generate profit, providers charge families higher rates. Families have no choice of provider - they must use whatever company holds the contract with that facility.",
      },
      {
        question: "What is the maximum rate for a prison phone call?",
        answer: "The FCC has capped interstate prison phone calls at $0.21 per minute for prisons and $0.13 per minute for jails. These caps apply to calls between states. In-state rates vary by state and are not always subject to the same federal caps, though FCC regulation has been expanding.",
      },
      {
        question: "Are there any states where prison phone calls are free?",
        answer: "Yes. A growing number of jurisdictions have eliminated charges for prison phone calls. New York City eliminated charges for calls from city jails. Some county systems in California and elsewhere have also moved to free calls. The number of free-call jurisdictions continues to grow as advocacy efforts succeed.",
      },
      {
        question: "How can I reduce the cost of prison phone calls?",
        answer: "Use a prepaid account rather than collect calls for lower per-minute rates. Add money in larger amounts to reduce transaction fees. Compare video visit costs versus phone call costs at your facility. Stay informed about rate changes when facility contracts are renegotiated.",
      },
      {
        question: "What fees besides the per-minute rate might I be charged?",
        answer: "Additional fees can include payment processing fees when adding money to your account, account maintenance fees, and inactivity fees if the account is not used for a period of time. The FCC has eliminated connection fees and certain other add-on charges for interstate calls, but fees for in-state calls vary by state.",
      },
      {
        question: "Can I choose a cheaper phone provider for my loved one facility?",
        answer: "No. Each facility has an exclusive contract with one phone provider. You must use whatever provider holds that contract. You cannot switch providers or negotiate a better rate. The only way rates change is when the facility contract expires and is renegotiated, or when regulators impose new rate caps.",
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
    title: "County Jail vs State Prison: Key Differences for Families",
    excerpt: "Learn the differences between county jails and state prisons, who is held in each, how communication works, and which providers are typically used.",
    category: "Facility Types",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "County Jail vs State Prison: Differences in Communication, Visitation and Providers",
    seoDescription: "Learn the key differences between county jails and state prisons - who is held where, how long stays last, which communication providers to use, and what changes when someone transfers. Free guide.",

    intro: [
      "County jails and state prisons are two completely different types of facilities that serve different purposes in the criminal justice system. Understanding which type of facility your loved one is in determines which communication providers you must use, what visitation rules apply, and how long they are likely to stay.",
      "County jails are operated by local governments - typically a county sheriff. They hold people who are awaiting trial, recently arrested, or serving short sentences of less than one year. State prisons are operated by the state Department of Corrections and hold people who have been convicted and sentenced to longer terms.",
      "This guide explains the key differences between county jails and state prisons, how communication works in each system, which providers are most common, and what to expect if your loved one transfers from one system to the other.",
    ],

    sections: [
      {
        heading: "What Is a County Jail",
        body: [
          "A county jail is a local detention facility typically operated by a county sheriff or a city government. Jails serve multiple purposes in the justice system. They hold people who have been recently arrested and are waiting for a bail hearing or arraignment. They house people who cannot afford bail and are awaiting trial. They hold people who have been convicted and are serving sentences of one year or less, usually for misdemeanor offenses.",
          "Because jails hold people at various stages of the legal process - many of whom have not yet been convicted - the population is highly transient. People may be in a county jail for a few days, a few weeks, or several months depending on how their case progresses.",
          "County jails vary widely in size and resources. A large urban county jail may hold thousands of people and have extensive programming. A rural county jail may hold a few dozen people with minimal services. The rules, providers, and communication options available at any given jail depend entirely on that jail's contracts and policies.",
        ],
      },
      {
        heading: "What Is a State Prison",
        body: [
          "A state prison is a long-term correctional facility operated by the state Department of Corrections. State prisons hold people who have been convicted of state crimes and sentenced to more than one year of incarceration. Most violent crimes, serious felonies, and drug offenses result in state prison sentences.",
          "State prisons are classified by security level - minimum, medium, and maximum security. Where an inmate is housed depends on the length of their sentence, the nature of their offense, and their assessed behavior risk. Inmates may be transferred between facilities as their sentence progresses and their security classification changes.",
          "State prisons are larger and more structured than most county jails. They offer more programming, educational opportunities, and vocational training. Communication systems at state prisons are typically more established and consistent than at county jails.",
        ],
      },
      {
        heading: "Key Differences Between County Jails and State Prisons",
        body: [
          "Length of stay is the most fundamental difference. County jails hold people for days, weeks, or months - rarely more than one year. State prisons hold people for years or decades. If your loved one received a sentence of more than one year, they will be transferred from the county jail to a state prison after sentencing.",
          "Who operates the facility differs significantly. County jails are managed by local government - usually the county sheriff. State prisons are managed by the state Department of Corrections. Each system has its own rules, providers, and procedures that are completely independent of the other.",
          "Communication providers differ. County jails commonly use ConnectNetwork, GettingOut, Securus, or smaller local providers. State prisons more commonly use JPay or ConnectNetwork depending on the state. You may need to create entirely new accounts when your loved one transfers from jail to prison.",
          "Programming and services differ. County jails typically offer minimal programming due to the short-term nature of stays. State prisons offer more structured programs including GED courses, vocational training, substance abuse programs, and work assignments.",
          "Visitation rules also differ. County jails often use video-only visitation even for in-person visits, meaning you sit at a video terminal in the lobby rather than in a traditional visiting room. State prisons more commonly have physical visiting rooms with in-person contact visits.",
        ],
      },
      {
        heading: "Communication Providers at County Jails vs State Prisons",
        body: [
          "County jails use a wide variety of communication providers because each jail independently negotiates its own contracts. The most common providers at county jails include ConnectNetwork by GTL, GettingOut by Telmate, Securus Technologies, ICSolutions, and City Tele Coin. Some smaller county jails use regional or local providers.",
          "State prisons use more consistent providers across their systems. JPay is the most widely used messaging and money transfer platform for state prisons, serving over 35 states. Phone services at state prisons are commonly handled by Securus Technologies, GTL, or ICSolutions depending on the state contract.",
          "When your loved one transfers from a county jail to a state prison, you will almost certainly need to create new accounts on different platforms. The account and funds you have on the jail platform do not transfer to the prison platform. Contact the new facility to find out which providers they use before setting up new accounts.",
        ],
      },
      {
        heading: "What Happens When Someone Transfers from Jail to Prison",
        body: [
          "After sentencing, most people convicted of felonies are transferred from the county jail to a state correctional facility. This transfer process typically takes between a few days and several weeks after sentencing. Families are often not given advance notice of the exact transfer date.",
          "During transfer, your loved one may be temporarily unreachable. Communication may be cut off entirely for several days while they move through the intake process at the new facility. This is normal and does not indicate a problem.",
          "Once they arrive at the new facility and complete intake processing, they will be assigned a new inmate ID number. This new ID number is the one you will use for all communication accounts at the state prison. The old county jail ID number will no longer be active.",
          "To find out where your loved one has been transferred, use the state Department of Corrections inmate search tool online. The new facility will appear in the search results once intake processing is complete, which typically takes two to five business days.",
        ],
      },
    ],

    takeaways: [
      "County jails are local facilities operated by county sheriffs. They hold people awaiting trial or serving sentences of one year or less.",
      "State prisons are operated by the state Department of Corrections and hold people serving sentences longer than one year.",
      "County jail stays are short-term and highly transient. State prison stays are long-term and more structured.",
      "County jails commonly use ConnectNetwork, GettingOut, or Securus. State prisons more commonly use JPay or ConnectNetwork.",
      "When your loved one transfers from jail to prison, you will need new accounts on different platforms. Existing funds do not transfer.",
      "Transfer from jail to prison typically happens within weeks of sentencing. Communication may be unavailable for several days during the transfer.",
      "Use the state Department of Corrections inmate search to find your loved one after a transfer. A new inmate ID number will be assigned.",
    ],

    faq: [
      {
        question: "What is the difference between a county jail and a state prison?",
        answer: "County jails are local facilities operated by county sheriffs that hold people awaiting trial or serving short sentences of one year or less. State prisons are operated by the state Department of Corrections and hold people serving sentences longer than one year after conviction. They are completely separate systems with different rules, providers, and procedures.",
      },
      {
        question: "Which messaging platform do I use for a county jail?",
        answer: "County jails use a variety of providers. Common ones include ConnectNetwork, GettingOut, Securus, ICSolutions, and City Tele Coin. Search our facility directory or call the jail directly to find out which specific provider they use.",
      },
      {
        question: "Which messaging platform do I use for a state prison?",
        answer: "State prison providers vary by state. JPay is the most common for state prisons, serving over 35 states. Some states use ConnectNetwork or other providers. Search our facility directory to find the correct provider for your specific facility.",
      },
      {
        question: "How do I find out if my loved one is in a county jail or state prison?",
        answer: "If they were recently arrested and have not yet been sentenced, they are likely in a county jail. If they have been convicted and sentenced to more than one year, they are likely in or heading to a state prison. Use the county sheriff website to search for jail inmates or the state Department of Corrections website to search for state prison inmates.",
      },
      {
        question: "When does someone transfer from county jail to state prison?",
        answer: "Transfer typically happens within weeks of sentencing. The exact timing varies by state and facility capacity. You are usually not given advance notice of the transfer date. During the transfer, communication may be unavailable for several days while the inmate completes intake processing at the new facility.",
      },
      {
        question: "Do my existing accounts and funds transfer when my loved one moves from jail to prison?",
        answer: "No. Accounts and funds on county jail platforms do not transfer to state prison platforms. You will need to create new accounts on the providers used by the new facility. Contact the new facility after transfer to confirm which providers they use before setting up new accounts.",
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
    title: "What to Expect on Your First Prison Visit: Complete Preparation Guide",
    excerpt: "A practical guide for first-time prison visitors. Covers what happens at each stage of the visit, how to prepare, and how to handle the emotional experience.",
    category: "Visitation",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "First Prison Visit: What to Expect, What to Bring, Dress Code and Security Rules",
    seoDescription: "Complete guide to your first prison visit - what happens at the entrance, what to wear, what to bring, what the visiting room is like, and how to make the most of your time. Free guide for families.",

    intro: [
      "Your first visit to a prison or jail can feel overwhelming. The environment is unfamiliar, the rules are strict, and not knowing what to expect makes everything harder. Being prepared before you arrive makes a significant difference - both for how smoothly the visit goes and for how you feel when you walk in.",
      "Prison visits are meaningful. Research consistently shows that incarcerated people who maintain family connections have better outcomes, and the visit matters to your loved one even if it is short or awkward at first. The discomfort of the first visit almost always eases with time.",
      "This guide explains exactly what happens from the moment you arrive at the facility to the moment you leave, so your first visit has no surprises.",
    ],

    sections: [
      {
        heading: "Before You Arrive: What to Confirm",
        body: [
          "Confirm your approval status before making the trip. You must be on the inmate approved visitor list before you can enter. If you are not sure whether your approval has been processed, call the facility and ask. Arriving without confirmed approval almost always results in being turned away.",
          "Confirm the visiting hours and schedule for the specific day you plan to visit. Visiting schedules change due to facility lockdowns, counts, staffing, and holidays. Call the facility the day before or the morning of your visit to confirm visits are still happening as scheduled.",
          "Bring a valid government-issued photo ID. This is non-negotiable at every facility. Acceptable forms include a driver's license, state ID card, passport, or military ID. Expired IDs are not accepted. If your name has changed since your ID was issued, contact the facility in advance about what documentation you need.",
          "Bring a small amount of cash or coins in a clear plastic bag for vending machines if the facility allows it. Most facilities limit this to $20 to $40 in small bills or coins. Leave everything else - your wallet, purse, cell phone, keys, and personal items - locked in your vehicle.",
        ],
      },
      {
        heading: "What to Wear to a Prison Visit",
        body: [
          "Your clothing choice is one of the most important decisions before a prison visit. Arriving in clothing that violates the dress code means being turned away and rescheduling. When in doubt, call the facility and ask about their specific dress code before your visit.",
          "Avoid clothing that resembles inmate uniforms. Most facilities prohibit khaki, tan, orange, or the specific colors their inmates wear. Each facility has its own restricted colors - call ahead to confirm which colors are off limits at that location.",
          "Wear modest, non-revealing clothing. Avoid low-cut tops, midriff-baring shirts, shorts or skirts more than three inches above the knee, see-through fabric, and form-fitting clothing like leggings or yoga pants. Many facilities prohibit sleeveless shirts for adults.",
          "Leave excessive jewelry at home. It will trigger metal detectors and may need to be removed or held at the entrance. Underwire bras can also trigger metal detectors - some families bring an alternative just in case. Wear comfortable closed-toe shoes as open-toe footwear is prohibited at many facilities.",
          "Bring a change of clothes and leave it in your vehicle. If something you are wearing is flagged as a dress code violation at the entrance, you can change in the parking lot and try again rather than making a wasted trip.",
        ],
      },
      {
        heading: "What Happens at the Entrance",
        body: [
          "Arrive early. Arriving at least 30 minutes before the visiting period starts gives you time to complete check-in without rushing. If you arrive late, you may be turned away or given a shortened visit window.",
          "You will check in at a reception desk or entrance window. Present your government ID and state your name and the name of the inmate you are visiting. Staff will verify you are on the approved visitor list and confirm the visit is scheduled. Sign the visitor log as instructed.",
          "You will pass through security screening. At minimum this includes a metal detector. Many facilities also conduct pat-down searches, use ion scanners to detect trace amounts of drugs, or use search dogs in the parking area. Refusing any part of the search means your visit is denied.",
          "Everything you are not allowed to bring inside must be left in your vehicle or stored in a locker at the facility entrance. Most facilities have lockers available. Place your cell phone, keys, wallet, and all personal items in the locker before proceeding. You will retrieve them when you leave.",
          "After clearing security, you will wait in a holding area or be directed to the visiting room. The inmate is notified of your arrival and brought to the visiting area by staff. Wait times vary - the inmate may arrive quickly or it may take 15 to 30 minutes depending on where they are in the facility when you arrive.",
        ],
      },
      {
        heading: "What the Visiting Room Is Like",
        body: [
          "Visiting rooms vary by facility type and security level. Some facilities have traditional visiting rooms with tables and chairs where you sit across from or next to the inmate. Contact visits in these rooms allow limited physical contact within the rules.",
          "Some facilities use non-contact visiting rooms where you and the inmate sit on opposite sides of a partition with a phone or speaker to communicate. There is no physical contact in non-contact visits. Some county jails have moved to video-only visitation where you visit through a screen even when you are physically at the facility.",
          "The room is monitored at all times. Cameras record the space and staff observe the visiting room either in person or through monitors. Conversations are generally not recorded in traditional visiting rooms but staff can hear anything spoken at normal volume. Treat the visit as if everything you say is being listened to.",
          "The atmosphere is unlike any social setting you have experienced before. The furniture is often institutional and uncomfortable. The environment is not warm. This is normal and expected. Focus on your loved one rather than the surroundings.",
        ],
      },
      {
        heading: "Physical Contact Rules During a Visit",
        body: [
          "Most facilities allow a brief hug and kiss at the very beginning of the visit when you first see your loved one, and again at the end when the visit is over. This is standard across most contact visiting facilities. Anything beyond this brief contact at the start and end is generally not permitted.",
          "During the visit itself, holding hands across the table is allowed at most facilities but extended embracing, kissing, or physical contact beyond hand-holding is not. Staff will intervene if rules are violated. A single warning is typically given before the visit is terminated.",
          "Children visiting a parent are often given more flexibility depending on the facility and the officers on duty. Young children may be allowed to sit on the incarcerated parent's lap during a contact visit. Do not assume this is allowed - confirm with the facility before bringing young children.",
          "Non-contact visiting rooms have no physical contact at all. You and your loved one are separated by a partition for the entire visit. If you are unsure whether the facility offers contact or non-contact visits, call ahead and ask.",
        ],
      },
      {
        heading: "Making the Most of Your Visit",
        body: [
          "The first visit is often more emotional and less conversational than you expect. This is normal. Many families find the first visit is largely spent adjusting to the environment and simply being present with each other. The conversation becomes easier and more natural on subsequent visits.",
          "Prepare a few topics in advance. Think about family updates, positive news, and questions you want to ask. Having a mental list of things to talk about helps fill silence and keeps the visit feeling connected rather than awkward.",
          "Be patient with the process. Counts, shift changes, and facility operations may interrupt or delay the visit. Staff may ask all visitors to pause or be quiet during a facility count, which is a routine process where staff confirm inmate locations. This is normal and does not mean anything has gone wrong.",
          "When the visit ends, follow the instructions from staff on how to say goodbye and exit. Do not delay or try to extend the visit after staff indicate it is over. Leave calmly and plan your next visit before you go home while the details are fresh in your mind.",
        ],
      },
      {
        heading: "Bringing Children to a Prison Visit",
        body: [
          "Visiting a parent in prison can be a meaningful and important experience for children, but it requires preparation. Explain to children in age-appropriate terms what to expect before you go - what the building looks like, that there will be security checks, what the visiting room looks like, and what they can and cannot do during the visit.",
          "Children must be on the approved visitor list. They must follow the same dress code as adults. Minors accompanied by a legal guardian who is not their parent may need additional documentation such as a notarized letter of guardianship. Call the facility to confirm requirements for minors before bringing them.",
          "Bring only approved items for infants and young children. Many facilities allow a clear plastic bag with a small number of diapers, a bottle or sippy cup, and a change of clothing. Do not bring toys, books, or food beyond what the facility specifically approves.",
          "Consider making your first visit alone before bringing children. This lets you see the environment firsthand and gives you the ability to prepare children with accurate details about what to expect. Children who know what is coming handle the experience significantly better than those who do not.",
        ],
      },
    ],

    takeaways: [
      "Confirm your approval status and visit schedule before making the trip. Call the facility the day before to confirm visits are happening.",
      "Bring a valid government-issued photo ID. Expired IDs are not accepted.",
      "Follow the dress code strictly. Arriving in prohibited clothing means being turned away. Bring a change of clothes in your vehicle just in case.",
      "Leave your cell phone, wallet, keys, and personal items in your locked vehicle or in facility lockers before entering.",
      "Arrive at least 30 minutes early to allow time for check-in and security screening.",
      "Most contact visits allow a brief hug and kiss at the beginning and end only. During the visit, holding hands is typically the limit of physical contact.",
      "The first visit is often emotional and awkward. This is normal. It gets easier with each subsequent visit.",
      "If bringing children, explain what to expect in advance and confirm documentation requirements with the facility beforehand.",
    ],

    faq: [
      {
        question: "What should I bring to my first prison visit?",
        answer: "Bring a valid government-issued photo ID and a small amount of cash in a clear plastic bag for vending machines if the facility allows it. Leave everything else - your phone, wallet, keys, and personal items - locked in your vehicle. Confirm exactly what is allowed with the facility before your visit.",
      },
      {
        question: "What should I wear to visit someone in prison?",
        answer: "Wear modest clothing that does not resemble inmate uniforms. Avoid the colors used for inmate clothing at that facility, revealing clothing, form-fitting clothing, and excessive jewelry. Wear closed-toe shoes. When in doubt, call the facility before your visit to confirm their specific dress code.",
      },
      {
        question: "Can I hug someone during a prison visit?",
        answer: "At most facilities offering contact visits, a brief hug and kiss is allowed at the beginning and end of the visit only. Extended physical contact during the visit is not permitted and staff will intervene. Non-contact facilities do not allow any physical contact. Confirm the rules with the facility before your visit.",
      },
      {
        question: "What happens if I arrive without being on the approved visitor list?",
        answer: "You will be turned away. You cannot visit someone in prison without being on their approved visitor list. Confirm your approval status before making the trip by calling the facility. The approval process takes weeks and must be completed before any visit can happen.",
      },
      {
        question: "Can I bring my phone into the prison visiting room?",
        answer: "No. Cell phones and electronic devices are prohibited inside all correctional facilities. Leave your phone in your locked vehicle before entering the facility. Attempting to bring a phone inside is a serious violation and will result in being denied entry.",
      },
      {
        question: "How long does a prison visit last?",
        answer: "Visit length varies by facility, day of the week, and the number of visitors present. Most visits last between one and three hours. Some facilities have fixed time slots. Staff will indicate when the visit is over. Do not attempt to extend the visit after being told it is finished.",
      },
      {
        question: "Can I bring my children to visit someone in prison?",
        answer: "Yes, but children must be on the approved visitor list and follow the same dress code as adults. If you are not the child's parent, you may need guardianship documentation. Consider visiting alone first so you can prepare the children for what to expect. Call the facility to confirm all requirements for minors before bringing them.",
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
    title: "How Photo Sharing Works for Inmates: Complete Guide for Families",
    excerpt: "Learn how to send photos to an incarcerated loved one, which platforms handle photo sharing, how photos are reviewed, and what formats are accepted.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Send Photos to an Inmate: Rules, Services, Sizes and What Is Allowed",
    seoDescription: "Learn how to send photos to someone in prison or jail - which services to use, what size and content rules apply, how to avoid rejection, and the easiest way to get photos delivered. Free guide.",

    intro: [
      "Sending photos to an incarcerated loved one is one of the most meaningful ways to stay connected. Seeing family photos, special moments, and everyday life helps incarcerated people feel remembered and supported. However, sending photos to a prison or jail is not as simple as mailing an envelope - every facility has specific rules, and photos that do not comply are rejected and often disposed of without being returned.",
      "Most facilities do not allow digital photos to be sent directly by email. Instead, photos must either be mailed as physical prints following strict size and content rules, or uploaded through an approved photo service that handles printing and delivery on your behalf.",
      "This guide explains how photo sharing works for inmates, what rules apply, which services make the process easiest, and how to avoid the most common reasons photos get rejected.",
    ],

    sections: [
      {
        heading: "How Photos Reach an Inmate",
        body: [
          "Photos reach an inmate through one of two main paths. The first is direct mail - you print the photo yourself, place it in an envelope with a letter, and mail it to the facility. The second is through a photo service - you upload your photo online, and the service prints and mails it to the facility on your behalf.",
          "Some facilities require that photos come only from approved vendors or services, not directly from family members. At these facilities, you cannot mail photos yourself regardless of whether they meet size and content rules. Check your loved one facility policy before attempting to send photos directly.",
          "Regardless of how photos are sent, all mail is opened and inspected by facility mailroom staff before it reaches the inmate. Photos are reviewed for content compliance. Photos that violate facility rules are rejected and typically disposed of - they are not returned to the sender.",
        ],
      },
      {
        heading: "Photo Rules and Size Requirements",
        body: [
          "Size requirements are strictly enforced at most facilities. The most common accepted photo sizes are 4 by 6 inches and 5 by 7 inches. Some facilities also accept up to 8 by 10 inches. Instant-print photos such as Polaroid style prints may be prohibited at some facilities due to their thickness and backing.",
          "Photos must be printed on plain white photo paper. Colored paper, textured paper, cardstock, and glossy paper that is unusually thick may be rejected. Write the inmate full legal name and ID number on the back of each photo in pencil or light pen in case it becomes separated from the envelope.",
          "Most facilities limit the number of photos that can be sent in a single envelope. The most common limit is five photos per envelope. Some facilities allow up to ten. Sending more than the allowed number in one envelope typically results in the entire envelope being rejected, not just the extra photos.",
          "Do not write on, draw on, or add stickers to the front of photos. Some facilities prohibit any markings on the front of the image. Keep the photo surface clean and unmodified.",
        ],
      },
      {
        heading: "What Content Is and Is Not Allowed in Photos",
        body: [
          "Content rules vary by facility but most share common prohibitions. Photos showing nudity or sexually explicit content are prohibited at all correctional facilities. This includes photos that are suggestive even if not explicitly nude.",
          "Photos showing weapons, drugs, alcohol, gang symbols, or illegal activity are prohibited. Photos showing the inmate themselves may be prohibited at some facilities - some rules state that photos of the inmate cannot be sent back in to avoid other inmates obtaining images of them.",
          "Photos showing the outside of a correctional facility, security features, or any content that could compromise facility security will be rejected. Photos of children are permitted at most facilities but must show the child in appropriate, modest clothing.",
          "Photos depicting hate symbols, extremist content, or anything that could incite violence or violate facility rules will be rejected and may result in mail restriction for the sender. When in doubt, choose simple family photos showing everyday moments, celebrations, and people the inmate knows.",
        ],
      },
      {
        heading: "How to Send Photos Yourself by Mail",
        body: [
          "If your facility allows direct mail from family members, follow these steps. Print the photo at standard size - 4 by 6 inches is the safest universal size. Use a home printer or a photo printing service at a pharmacy or retail store.",
          "Write the inmate full legal name and ID number lightly on the back of each photo. Place the photos in a plain white envelope. Do not use colored envelopes, padded envelopes, or manila envelopes unless the facility specifically permits them.",
          "Address the envelope with the inmate full name and ID number on the first line, followed by the facility mailing address. Some facilities use a PO Box for mail processing that is different from the physical address - use the mailing address listed on the facility website.",
          "Include a brief letter if the facility allows it, or send the photos alone if the facility requires photos to be sent separately from mail. Do not include any prohibited items in the same envelope as photos.",
        ],
      },
      {
        heading: "Photo Services That Handle Printing and Delivery",
        body: [
          "Several services specialize in printing and mailing photos to inmates. These services allow you to upload photos from your phone or computer, and they handle printing, addressing, and mailing on your behalf. This is the easiest option for families who are not sure about facility rules or who want to avoid mail errors.",
          "Pigeonly is one of the most widely used photo services for inmates. You upload your photos, Pigeonly prints them to facility-compliant specifications, and mails them directly to the facility. Pigeonly maintains rules for thousands of facilities and automatically formats your photos to meet the requirements.",
          "TextBehind is another service that handles both letters and photos. You upload your content and TextBehind prints and delivers it as physical mail. TextBehind is especially useful at facilities that do not allow mail from private addresses and require all mail to come through an approved vendor.",
          "Using a service typically costs between $0.49 and $1.50 per photo depending on the service and the number of photos ordered. The convenience and compliance assurance often make this the most practical choice, particularly for first-time senders or facilities with strict vendor-only mail policies.",
        ],
      },
      {
        heading: "Digital Photo Attachments Through Messaging Platforms",
        body: [
          "Some inmate messaging platforms such as JPay allow photo attachments to be sent digitally as part of a message. This is separate from physical mail and works only at facilities that have enabled digital photo sharing through that platform.",
          "Digital photo attachments through JPay require an additional stamp per photo. Photos are reviewed by facility staff through the platform before they are delivered to the inmate tablet or kiosk. Not all facilities with JPay messaging also have JPay photo sharing enabled.",
          "ConnectNetwork and GettingOut also offer digital photo sharing at some facilities. Check your account dashboard to see whether photo attachments are available as an option at your loved one facility. If it appears as an option, it is available. If it does not appear, it is not offered there.",
        ],
      },
    ],

    takeaways: [
      "Photos must be mailed as physical prints or uploaded through an approved service. You cannot email photos directly to a facility.",
      "Some facilities require photos to come from approved vendors only. Check the facility policy before attempting to mail photos yourself.",
      "The safest photo size is 4 by 6 inches. Most facilities accept this size and it is the most common standard.",
      "Most facilities limit five photos per envelope. Sending more may result in the entire envelope being rejected.",
      "Prohibited content includes nudity, weapons, drugs, gang symbols, and content that could compromise facility security.",
      "Photo services like Pigeonly and TextBehind handle printing and delivery for you and are formatted to meet facility rules automatically.",
      "Some messaging platforms like JPay allow digital photo attachments at select facilities for an additional stamp per photo.",
      "Write the inmate full legal name and ID number lightly on the back of each photo before mailing.",
    ],

    faq: [
      {
        question: "Can I email photos directly to someone in prison?",
        answer: "No. Correctional facilities do not accept photos by standard email. Photos must be sent as physical prints by mail, through an approved photo service, or as digital attachments through an approved messaging platform such as JPay where that feature is available.",
      },
      {
        question: "What size photos can I send to an inmate?",
        answer: "The most commonly accepted size is 4 by 6 inches. Some facilities also accept 5 by 7 and up to 8 by 10 inches. Check the specific facility rules before printing. When in doubt, use 4 by 6 - it is the safest universal option.",
      },
      {
        question: "How many photos can I send at one time?",
        answer: "Most facilities limit five photos per envelope. Some allow up to ten. Sending more than the allowed number typically results in the entire envelope being rejected. Check the facility mail policy for the exact limit.",
      },
      {
        question: "What photos are not allowed in prison?",
        answer: "Prohibited photos typically include nudity or sexually suggestive content, weapons, drugs, alcohol, gang symbols, illegal activity, the outside of the facility or its security features, and any content that could threaten facility security. Content rules vary by facility so check the specific policy.",
      },
      {
        question: "What is the easiest way to send photos to an inmate?",
        answer: "Using a photo service like Pigeonly or TextBehind is the easiest option. You upload your photos online or through an app, and the service handles printing, addressing, and mailing to the facility. These services maintain current rules for thousands of facilities and format photos to meet requirements automatically.",
      },
      {
        question: "Can I send photos through JPay?",
        answer: "JPay allows digital photo attachments at some facilities as part of their messaging system. Each photo requires an additional stamp. Not all JPay facilities have photo sharing enabled. Check your JPay dashboard - if photo attachment appears as an option, it is available at your facility.",
      },
      {
        question: "What happens if a photo is rejected by the facility?",
        answer: "Rejected photos are typically disposed of by facility mailroom staff. They are usually not returned to the sender. To avoid rejection, follow the facility size and content rules carefully, or use a photo service that handles compliance for you.",
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
    title: "Inmate Communication Rules by State: What Families Need to Know",
    excerpt: "An overview of how inmate communication rules vary by state, what factors create the differences, and how to find the specific rules for any state's system.",
    category: "Communication Tips",
    difficulty: "Intermediate",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Inmate Communication Rules by State: Messaging, Phone, Visitation Differences Explained",
    seoDescription: "Learn how inmate communication rules vary by state - which messaging providers are used, how phone rates differ, what visitation rules apply, and how to find the specific rules for any state system.",

    intro: [
      "Inmate communication rules are not the same across the United States. Every state operates its own Department of Corrections with its own contracted providers, its own policies for messaging, phone calls, visitation, and mail, and its own rules for what families can and cannot do. What works in one state may not work in another.",
      "The single most important rule that applies in every state is this: the facility determines the provider. You cannot choose which messaging or phone platform to use. Whichever company has the contract with that specific facility is the one you must use. This is set at the facility level, not the state level, though many states standardize their contracts across all facilities.",
      "This guide explains what creates the differences between states, which providers are most common in which states, and how to find the specific rules that apply to your loved one facility.",
    ],

    sections: [
      {
        heading: "Why Communication Rules Differ by State",
        body: [
          "Each state Department of Corrections operates independently and sets its own policies. There is no federal standard for how state prisons handle family communication beyond the basic constitutional protections that apply to all facilities. This means states make their own decisions about which providers to contract with, what services to allow, and what rules families must follow.",
          "Provider contracts are negotiated at the state level for most state prison systems, which means all or most facilities within a state often use the same provider. However, county jails within the same state negotiate their own contracts separately and may use completely different providers than the state prisons.",
          "State budgets, political decisions, advocacy pressure, and historical contracts all influence which providers are used and what rules apply. States with strong prison reform advocacy may have more family-friendly policies. States with older contracts may have fewer digital options. Rules also change over time as contracts expire and are renegotiated.",
        ],
      },
      {
        heading: "Messaging Providers by State System",
        body: [
          "JPay is the most widely used messaging platform for state prisons, serving many states. In states where JPay is the primary messaging provider for state prisons, families create a JPay account and use stamps to send messages to state prison inmates.",
          "CorrLinks is used exclusively at federal Bureau of Prisons facilities and is not a state prison provider. If your loved one is in a state prison, CorrLinks does not apply to them regardless of which state they are in.",
          "ConnectNetwork by GTL is widely used at county jails across most states and also serves as the primary provider for some state prison systems. Some states use providers not found in others, such as ICSolutions or Securus. The only way to know for certain which provider serves a specific facility is to search the facility directly rather than assume based on the state.",
        ],
      },
      {
        heading: "Phone Call Rules by State",
        body: [
          "Phone call rates are federally regulated for interstate calls, which means calls between states have a federal maximum rate. For calls within the same state, rates are set by state regulators and vary significantly. Some states have capped in-state rates to match federal interstate limits while others allow higher in-state rates.",
          "Some states have taken additional steps to reduce phone call costs for families by eliminating commissions or lowering fees. In a few jurisdictions, advocacy has led to reduced-cost or free calls for certain populations.",
          "The phone provider used at a facility is separate from the messaging provider. A facility may use one company for messaging and a different company for phone services. Both accounts may need to be set up separately. Check the specific facility to see which provider handles phone services.",
        ],
      },
      {
        heading: "Visitation Rules by State",
        body: [
          "Visitation rules vary significantly between states and even between facilities within the same state. The visitor approval process, background check requirements, number of approved visitors allowed, visiting hours, dress code specifics, and contact rules all differ by state and facility.",
          "Some states allow contact visits where limited physical contact is permitted. Other states or specific facilities within a state require non-contact visits through glass or video terminals even for in-person visits.",
          "Some facilities have moved to video-only visitation at certain locations, meaning visitors use a video terminal rather than a traditional visiting room. Always call the facility before traveling to confirm visiting hours and contact rules.",
        ],
      },
      {
        heading: "Mail Rules by State",
        body: [
          "Mail policies for prisons and jails vary by state and facility. Some systems scan incoming mail at an off-site processing center and deliver a digital or printed copy to the inmate rather than the original physical letter.",
          "When mail scanning is used, you may need to send mail to a designated processing address rather than the facility's physical address. Check the facility mailing instructions carefully.",
          "Photo rules vary by state as well. Some facilities accept direct family-sent photos while others require photos to come from approved vendors only. Size, content, and quantity limits differ by facility.",
        ],
      },
      {
        heading: "How to Find Rules for Your Specific State and Facility",
        body: [
          "The most reliable source for current rules is the facility itself. Call the facility and ask about messaging, phone, visitation, and mail policies. Have your loved one inmate ID and name ready. Facility staff can confirm which providers are used and direct you to the right resources.",
          "The state Department of Corrections website publishes general policies for all state facilities. Search for the state DOC website and look for sections labeled family resources, visitation, or inmate communication. These pages list the general state rules along with links to facility-specific supplements.",
          "Search our facility directory to find your loved one facility and see which providers serve it. The facility page lists the messaging platform, phone provider, and available communication services with direct links to set up accounts.",
          "Rules change over time as contracts expire and are renegotiated. If something stops working - a platform you have been using stops accepting messages, or a visiting schedule changes - contact the facility directly to confirm what has changed.",
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
    title: "What to Do If Inmate Messages Are Blocked: Complete Appeal Guide",
    excerpt: "Learn what causes inmate messages to be blocked, how to find out why, and what steps to take to restore communication with an incarcerated loved one.",
    category: "Communication Tips",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Inmate Messages Blocked: Why It Happens, How to Appeal and Restore Communication",
    seoDescription: "Learn why inmate messages get blocked, how to find out the reason, who to contact to appeal, and what steps to take to restore communication with an incarcerated loved one. Free guide.",

    intro: [
      "Having messages blocked or rejected is one of the most frustrating experiences families face when communicating with an incarcerated loved one. Messages may stop being delivered without warning, and in many cases you will not receive a clear explanation of why. The process for finding out what happened and getting communication restored is different depending on whether the block came from the facility or from the messaging platform provider.",
      "Blocks can be temporary or permanent. They can be triggered by content in a specific message, by a pattern of communication flagged by automated screening, by a facility decision, or by the provider company acting independently. Understanding which of these caused the block determines who you need to contact and what steps to take.",
      "This guide explains the most common reasons messages get blocked, how to find out why your messages are not being delivered, who to contact, and how to formally appeal a communication block.",
    ],

    sections: [
      {
        heading: "Why Inmate Messages Get Blocked",
        body: [
          "The most common reason a message is blocked is content that violates facility rules. Every correctional facility has a list of prohibited content for incoming and outgoing messages. Messages that reference ongoing criminal activity, escape planning, threats, gang-related content, explicit material, or coded language that staff cannot interpret may be rejected during review.",
          "Automated content screening is used by most messaging platforms to flag potential violations before messages reach a human reviewer. Automated systems use keyword filters that can flag messages based on specific words or phrases even when the message does not actually violate any rule. This can result in false positives where an innocent message is flagged and blocked.",
          "A block may also be placed on your account rather than on a specific message. Account-level blocks can be placed by the facility if you are removed from the approved contact list, or by the provider company if your account is flagged for multiple content violations. Account blocks prevent all future messages from being sent or received.",
          "Phone call blocks are separate from messaging blocks and can happen when you accidentally reject a call, when the provider flags your number, or when the inmate removes your number from their approved call list. Each type of block requires a different resolution process.",
        ],
      },
      {
        heading: "How to Find Out Why Messages Are Being Blocked",
        body: [
          "The first step is checking your messaging platform account for any notifications or alerts. Platforms like JPay and ConnectNetwork may send an email or display a message in your account dashboard when a specific message is rejected. The notification may include a general reason such as content violation but will usually not specify the exact trigger.",
          "If you receive no notification and messages simply stop being delivered, log in to your account and check the sent message status. Some platforms show a delivered or pending status for each message. A message stuck in pending status may indicate it is held in review or has been blocked without a formal notification being sent.",
          "Contact the messaging platform customer service directly. Explain that you are not receiving confirmation of message delivery and ask them to check the status of your account and recent messages. Have your account information, the inmate name and ID, and the facility name ready before calling or submitting a support ticket.",
          "Contact the facility directly. The facility mailroom or communication coordinator can tell you whether a block has been placed from the facility side and whether you have been removed from the approved contact list. Call the facility main number and ask to speak with the person responsible for inmate communication or the mailroom supervisor.",
        ],
      },
      {
        heading: "How to Appeal a Blocked Message",
        body: [
          "For individual messages blocked by the platform, start by reviewing the message content yourself. Remove any language that could be interpreted as violating facility rules and resend the message. Avoid triggering keywords, abbreviations that could be misread as codes, references to legal cases or investigations, and any content that discusses what is happening outside the facility in detail that could be misread.",
          "If the platform blocked a message you believe was completely compliant, contact platform customer service and formally request a review. Provide the message ID or timestamp, explain why you believe the content does not violate rules, and ask for a specific explanation of what triggered the block. Keep records of all communication with customer service.",
          "For blocks placed by the facility rather than the platform, the appeal process goes through the facility. Write a formal letter addressed to the Warden or Communication Coordinator at the facility. Explain who you are, your relationship to the inmate, what communication was blocked, and why you believe the block was applied in error. Request a written response.",
          "Most facilities require appeals to be submitted in writing within a specific timeframe after the rejection - often ten business days. Check with the facility for their specific appeal deadline and submit your appeal before it expires.",
        ],
      },
      {
        heading: "How to Appeal an Account-Level Block",
        body: [
          "If your entire account has been blocked rather than a single message, the process is more complex. An account block from the platform typically requires contacting platform customer service and requesting a formal review of your account status. Ask specifically whether the block is temporary or permanent and what the reason for the block is.",
          "An account block from the facility - meaning you have been removed from the approved visitor or contact list - must be appealed through the facility. The inmate must also typically be involved in the appeal, as they may need to resubmit your information for contact approval.",
          "If you believe the block was placed in error or without a valid reason, document everything. Save copies of all previous messages, all notifications you received, and all communication with the facility and platform. This documentation is essential if you need to escalate the appeal.",
          "If standard appeals are unsuccessful, consider contacting the state Department of Corrections directly rather than the individual facility. State DOC offices sometimes have family services units or ombudsman programs that can review individual cases where communication has been cut off without clear justification.",
        ],
      },
      {
        heading: "How to Restore Blocked Phone Calls",
        body: [
          "If you accidentally blocked a call from an inmate, contact the phone provider customer service as soon as possible. For GTL ConnectNetwork, call their customer service line. For Securus, use their customer service number. Explain that you accidentally rejected or blocked a call and ask them to remove the block from your number. Most providers can resolve accidental call blocks quickly.",
          "If calls are being blocked because the inmate removed your number from their approved call list, only the inmate can restore it. They must contact the facility phone provider or request the number be re-added through the facility process. You cannot add yourself back to an approved call list from outside.",
          "If calls are being blocked for an unknown reason, contact both the phone provider and the facility. Ask the provider to check your number status and ask the facility to confirm your number is still on the inmate approved contact list. The block may be coming from either side and you need to identify the source before it can be resolved.",
        ],
      },
      {
        heading: "Preventing Future Blocks",
        body: [
          "Review the content rules for the facility and the messaging platform before sending every message. Rules are published in the platform terms of service and on most facility websites. Reading them once thoroughly can prevent the majority of accidental blocks.",
          "Avoid discussing anything related to ongoing legal cases, other people inside the facility, facility operations, or anything that could be interpreted as planning activity outside the rules. Keep messages focused on personal updates, family news, emotional support, and everyday topics.",
          "If you receive a notification that a message was blocked, do not simply resend the same message repeatedly. Multiple attempts to send blocked content can escalate a temporary block to a permanent one. Instead, revise the message, remove any potential triggers, and send the revised version once.",
          "Keep records of all messages you send. If a message is blocked and you later need to appeal, having a copy of the original message makes the appeal process faster and easier.",
        ],
      },
    ],

    takeaways: [
      "Messages can be blocked by the facility, by the messaging platform, or by automated content screening. Each requires a different resolution approach.",
      "Check your platform account dashboard and email for block notifications. Not all blocks generate automatic notifications.",
      "Contact the messaging platform customer service to check your account status and get a specific reason for any block.",
      "Contact the facility mailroom or communication coordinator to find out if a block was placed from the facility side.",
      "To appeal a facility block, write a formal letter to the Warden or Communication Coordinator and submit it within the facility appeal deadline - usually ten business days.",
      "If your entire account is blocked, ask specifically whether the block is temporary or permanent and what the exact reason is.",
      "Prevent future blocks by reviewing content rules before sending, avoiding triggering topics, and never resending a blocked message without revising it first.",
    ],

    faq: [
      {
        question: "Why are my messages to an inmate not being delivered?",
        answer: "Messages may be blocked due to content that triggered an automated filter or human review, an account-level block placed by the platform or facility, or removal from the approved contact list. Check your platform account for notifications, contact platform customer service, and contact the facility directly to identify which of these applies.",
      },
      {
        question: "How do I find out why a specific message was blocked?",
        answer: "Log in to your messaging account and check the message status. Contact platform customer service with the message details and ask for a specific reason. Platforms are not always required to provide detailed explanations, but customer service can often tell you whether the block was due to content, an account issue, or a facility-side decision.",
      },
      {
        question: "How do I appeal a blocked message?",
        answer: "For platform blocks, contact customer service and request a content review, explaining why you believe the message was compliant. For facility blocks, write a formal letter to the Warden or Communication Coordinator at the facility requesting a review. Most facilities require written appeals within ten business days of the rejection.",
      },
      {
        question: "Can the facility permanently ban me from communicating with an inmate?",
        answer: "Yes. A facility can permanently remove you from an inmate approved contact list, which blocks all future communication through that facility. Reasons include serious content violations, security concerns, or court orders. If you believe a permanent ban was applied without valid cause, you can appeal in writing to the facility and to the state Department of Corrections.",
      },
      {
        question: "I accidentally blocked a phone call from an inmate. How do I fix it?",
        answer: "Contact the phone provider customer service as soon as possible and explain that you accidentally rejected or blocked a call. Ask them to remove the block from your number. Most providers can resolve accidental call blocks quickly. Have your account information and the facility name ready when you call.",
      },
      {
        question: "What should I not include in messages to avoid them being blocked?",
        answer: "Avoid references to ongoing legal cases or investigations, other people inside the facility, facility operations or security, planned activities outside the rules, explicit content, gang-related language, coded language or abbreviations that could be misread, and anything that could be interpreted as planning for a rule violation.",
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
