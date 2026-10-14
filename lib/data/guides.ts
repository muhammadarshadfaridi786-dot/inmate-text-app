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
// DETAILED GUIDE DATA, 20 seed guides
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-08-01",
    seoTitle: "How Inmate Messaging Works: Platforms, Costs, Rules and",
    seoDescription: "Learn how inmate messaging works - which platforms to use, how messages are reviewed, what it costs, and how to send your first message to an incarcerated",

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
      {
        heading: "Why Your Message May Not Be Delivered",
        body: [
          "One of the most common problems families face is sending a message that never arrives. There are several reasons this can happen and understanding each one helps you resolve the issue faster. The most common cause is content that triggered an automated filter during the review process. Messaging platforms use keyword screening systems that flag messages based on specific words or phrases even when the message does not actually violate any rule.",
          "A red lock icon on your sent message in JPay means the message was flagged and is being held for review or has been blocked. This does not always mean you did something wrong. The automated system can flag innocent messages based on word combinations that appear suspicious to the filter. If you see a red lock, check your account notifications for any explanation and consider revising the message to remove any language that could be misread.",
          "Messages can also fail to deliver if your account has been placed on hold by the facility or the platform. This can happen after multiple flagged messages, a change in your contact approval status, or a facility-wide communication restriction such as a lockdown. Contact the platform customer service and the facility directly to find out which type of hold is in place and what steps are needed to restore communication.",
          "If you recently changed your phone number or email address, your account details may no longer match the approved contact information on file at the facility. Always update your contact information on the platform and notify the facility whenever your details change. The inmate may also need to resubmit your updated information through the facility contact approval process.",
        ],
      },
      {
        heading: "CorrLinks Specific Problems and How to Fix Them",
        body: [
          "CorrLinks users report several recurring issues that are worth knowing before you start. The platform is known to log users out unexpectedly during long sessions. If you are writing a long message, copy the text before attempting to send or save it. This prevents losing your work if the session expires before the message is submitted.",
          "In late 2024, still in effect as of 2026, the Bureau of Prisons limited CorrLinks accounts to a maximum of 10 outside contacts at one time. If an inmate already has 10 approved contacts, they cannot add new ones until an existing contact is removed. If you submitted a contact request and have not received an invitation, this limit may be the reason. Ask your loved one to check their contact list and remove inactive contacts if needed.",
          "CorrLinks outages do occur periodically. The site may be slow or unavailable due to maintenance or technical issues. If you cannot connect to corrlinks.com, wait a few hours and try again. Clear your browser cache and cookies before retrying. If the problem persists for more than 24 hours, check for announcements from the Bureau of Prisons or contact CorrLinks support directly.",
          "If you were previously connected with someone on CorrLinks and they are transferred to a new federal facility, the connection should carry over because CorrLinks is used at all BOP facilities. However, if they are transferred to a state facility, the CorrLinks connection will no longer be active and you will need to set up a new account on whichever platform the state facility uses.",
        ],
      },
      {
        heading: "JPay Messaging Problems and Solutions",
        body: [
          "JPay users frequently report confusion about the stamp system and why messages are not going through. If you have stamps in your account but a message is not sending, check that you are using the correct account for the correct inmate. If your loved one has transferred to a new facility in a different JPay state, you may need to update their profile in your account.",
          "JPay tablet outages have affected many facilities. In New York, the state Attorney General reached an agreement with JPay after hundreds of complaints about defective tablets, delayed deliveries, and failure to provide refunds for services not delivered. If you purchased stamps and the messages were not delivered due to a JPay system outage, you may be entitled to a refund or credit. Contact JPay customer service with your transaction confirmation number.",
          "If an inmate has blocked you on JPay, you will not receive any notification. Messages you send will appear to go through on your end but will not be delivered. If you suspect you have been blocked, contact JPay customer service and ask them to verify the delivery status of your recent messages. Resolving a block requires the inmate to take action from inside the facility.",
        ],
      },
      {
        heading: "How Long Does Inmate Message Delivery Actually Take",
        body: [
          "Delivery times vary more than most families expect when they first start using inmate messaging. The platform may show your message as sent immediately, but the actual delivery depends entirely on when facility staff review and approve the message. At busy facilities with high message volumes, this review process can take anywhere from two hours to two business days.",
          "Messages sent late at night or on weekends may not be reviewed until the next business day at facilities with limited weekend staffing. If your message was sent Friday evening and has not been delivered by Monday, this is often the reason rather than a technical problem. Planned facility events such as lockdowns, counts, and inspections also pause message processing until normal operations resume.",
          "Once a message clears the review process it is delivered to the inmate tablet or kiosk almost immediately. The inmate can then read and reply at their next available opportunity to access the messaging terminal. Their reply goes through the same review process before it reaches you, so the total round-trip time for a message and reply can range from a few hours to several days depending on facility operations.",
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
      "A red lock icon on a JPay message means it was flagged during review. Check your account notifications and consider revising the message before resending.",
      "CorrLinks limits inmates to 10 outside contacts at one time, a rule from late 2024 still in effect as of 2026. If your invitation has not arrived, the inmate may need to remove an inactive contact first.",
      "Copy long messages before sending on CorrLinks because the platform can log you out unexpectedly and unsaved messages are lost.",
      "Message delivery can take two hours to two business days depending on facility review volume and staffing.",
      "If JPay messages appear sent on your end but the inmate never receives them, contact JPay customer service to verify delivery status.",
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
      {
        question: "What does a red lock mean on my JPay message?",
        answer: "A red lock icon means your message was flagged during the automated content review process and is being held or blocked. Check your account notifications for any explanation. Revise the message to remove any language that could be misread as a content violation, then resend the revised version. Do not resend the original blocked message multiple times as this can escalate the issue.",
      },
      {
        question: "Why has my CorrLinks invitation not arrived?",
        answer: "Several things can delay a CorrLinks invitation. Check your spam folder first. Confirm with your loved one that they entered your email address exactly correctly. Since late 2024, still in effect as of 2026, CorrLinks limits inmates to 10 outside contacts at one time. If they already have 10 approved contacts they cannot add more until an existing contact is removed. Ask them to check their contact list if the invitation has not arrived within 48 hours.",
      },
      {
        question: "How long does it take for an inmate to receive my message?",
        answer: "Most messages are delivered within a few hours to one business day after submission. Messages sent late at night or on weekends may not be reviewed until the next business day. Facility lockdowns, counts, and high message volumes can extend delivery times. If a message has not been delivered after two business days, check your account for any block notifications and contact platform customer service.",
      },
      {
        question: "Can I get a refund if my JPay message was never delivered?",
        answer: "If a message was not delivered due to a JPay system outage or technical failure on the platform side, you may be entitled to a refund or credit of the stamps used. Contact JPay customer service with your transaction confirmation number and the date the message was sent. JPay has issued refunds in the past following documented outages and platform failures.",
      },
      {
        question: "What happens to my messaging account if my loved one is transferred?",
        answer: "It depends on whether the new facility uses the same platform. For CorrLinks users, the connection transfers automatically because CorrLinks is used at all federal BOP facilities. For JPay or ConnectNetwork users, if the new facility uses the same provider the account usually continues working. If the new facility uses a different provider, you will need to create a new account on that platform. Always confirm which provider the new facility uses before setting up a new account.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-10-12",
    seoTitle: "How to Send Money to an Inmate: Methods, Fees, and",
    seoDescription: "Complete guide to sending money to an incarcerated loved one - which platforms to use, how much fees cost, how long transfers take, and how to avoid common",

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
      {
        heading: "How Fees Work and How to Compare Them",
        body: [
          "Money transfer fees are one of the biggest frustrations families report. Fees vary by provider, by the amount sent, and by the payment method used. There is no single cheapest provider for every situation. The same provider that charges the lowest fee for a $20 transfer may charge the highest fee for a $50 transfer. The only way to find the lowest fee for your specific situation is to compare at the time of the transaction.",
          "California is an example of this complexity. The California Department of Corrections contracts with three separate money transfer vendors: JPay, GTL, and Access Corrections. For a $20 transfer, JPay is significantly cheaper than the other two. For a $50 transfer, JPay becomes the most expensive option. The state DOC website does not show a comparison chart, so families must create accounts with multiple providers and initiate test transactions to find the best rate.",
          "JPay and Access Corrections generally charge a percentage of the deposited amount, which means fees increase as the deposit amount increases. TouchPay follows a similar model with additional processing fees depending on the payment method. Western Union and MoneyGram tend to use a fixed fee structure that varies by transaction amount and payment method. For smaller deposits, fixed-fee providers can be more expensive. For larger deposits, percentage-based fees can exceed fixed fees.",
          "Using a debit card rather than a credit card reduces costs across all providers. Credit card transactions may be classified as cash advances by your card issuer, triggering additional fees beyond what the transfer provider charges. Always use a debit card for money transfers to incarcerated loved ones unless a debit card is not accepted at your specific provider.",
        ],
      },
      {
        heading: "What To Do When Money Does Not Arrive",
        body: [
          "The most stressful scenario families face is sending money that does not appear in the inmate account. Before assuming the transfer failed, check whether the funds are in a pending or hold status. Many providers hold transfers for review, especially for first-time senders or unusually large amounts. A hold does not mean the money is lost.",
          "Contact the provider with your transaction confirmation number within 24 to 48 hours if the funds have not appeared. Provide the inmate name, facility name, inmate ID number, the amount sent, the payment method, and the exact date and time of the transfer. Keep your email receipt as the primary documentation.",
          "If the provider cannot locate the transfer or refuses to help, contact your bank or credit card company to dispute the charge. Provide the provider confirmation email and explain that the funds were not delivered. Banks typically side with consumers in non-delivery disputes when documentation is provided.",
          "Access Corrections experienced a documented outage in 2025 that temporarily prevented deposits and caused processing delays. During provider outages, transactions may appear to complete successfully on the sender side but not be credited to the inmate account. If you sent money during a known outage period and it was not received, contact the provider and reference the outage dates when filing your complaint.",
        ],
      },
      {
        heading: "Sending Money When Your Loved One Transfers Facilities",
        body: [
          "One of the most common mistakes families make is sending money to the facility their loved one was in before a transfer rather than the new facility. Money sent to the wrong facility can be delayed by weeks or returned entirely. Always confirm the current facility before sending funds.",
          "When an inmate transfers from a county jail to a state prison, the money transfer provider often changes as well. Funds in a JPay account linked to a county jail do not automatically transfer to a state prison account. Contact both the old provider and the new provider to ask about fund transfer procedures when a facility change occurs.",
          "The inmate is assigned a new ID number at the new facility in most cases. This new ID number must be used for all money transfers at the new location. The old ID number from the county jail will not work at the state prison. Confirm the new ID number with the inmate or the facility before sending any funds to avoid the transfer being rejected or delayed.",
        ],
      },
      {
        heading: "Transfer Times by Payment Method",
        body: [
          "Online card payments through providers like JPay, Access Corrections, or ConnectNetwork are usually the fastest option. Deposits made online typically reach the inmate trust account within a few hours to one business day, though facility processing can add extra time on top of the provider transfer.",
          "Phone payments with a debit or credit card follow roughly the same timeline as online payments, since they run through the same provider systems. The main difference is convenience, not speed.",
          "Lobby kiosk cash deposits at the facility are often credited quickly, sometimes within the hour, because the money never leaves the facility system. This is the fastest option when you can visit in person.",
          "Mailed money orders are the slowest method. The order must travel through the postal system, then through the facility mail room and trust account office. Families should allow one to two weeks and should never mail cash.",
          "Weekends, holidays, and facility lockdowns delay every method. A deposit made on a Friday evening may not post until the following business day or later. If money is urgently needed, online payment early on a weekday gives the best chance of same-week posting. Exact timelines vary by provider and facility, so confirm with the facility trust account office when timing matters.",
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
      "Fees vary by provider, amount, and payment method. The cheapest provider for a $20 transfer may be the most expensive for a $50 transfer. Always compare at the time you send.",
      "Use a debit card rather than a credit card to avoid cash advance fees that some credit card companies charge on inmate money transfer transactions.",
      "If funds do not arrive within two business days, contact the provider with your confirmation number. Keep all email receipts until funds are confirmed received.",
      "Always confirm the current facility and new inmate ID number before sending money after a transfer. Sending to the wrong facility delays funds significantly.",
      "If a provider outage affected your transfer, reference the outage dates in your complaint to customer service.",
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
      {
        question: "Why are money transfer fees so high and can I avoid them?",
        answer: "Fees exist because providers charge for the service of processing and crediting the deposit. Fees vary by provider, amount sent, and payment method. To minimize fees, compare providers at the time of the transfer, use a debit card rather than a credit card, and send larger amounts less frequently to reduce the number of transaction fees you pay overall.",
      },
      {
        question: "The money I sent is not in the inmate account. What do I do?",
        answer: "First check whether the funds are in a pending or hold status in your provider account. Contact customer service with your transaction confirmation number, inmate ID, facility name, amount, and transfer date. If the provider cannot help, dispute the charge with your bank. Keep your email receipt as documentation for any dispute.",
      },
      {
        question: "Can I send money to an inmate at any facility using any provider?",
        answer: "No. Each facility contracts with specific money transfer providers. You must use a provider that serves the specific facility your loved one is in. Some facilities have contracts with multiple providers and you can choose between them. Others have an exclusive contract with one provider. Search our facility directory to find which providers serve your loved one's facility.",
      },
      {
        question: "What happens to the money if my loved one transfers to a new facility?",
        answer: "Funds in the inmate trust account at the old facility typically transfer with the inmate through the facility accounting system, but this can take time. Money in a provider platform account such as JPay linked to the old facility may not transfer automatically. Contact both the old and new provider to ask about fund transfer procedures. Always get the new inmate ID number before sending any new funds.",
      },
      {
        question: "Is there a free way to send money to an inmate?",
        answer: "Some states and facilities have eliminated fees for certain deposit methods. JPay eliminated money order deposit fees at some state facilities following public pressure. A small number of states offer free deposit options as part of broader prison communication reform efforts. Contact the facility or your state Department of Corrections to ask whether any fee-free deposit options are available.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-10-12",
    seoTitle: "How Video Visitation Works: Setup, Cost, Equipment and",
    seoDescription: "Learn how video visitation works at prisons and jails - how to schedule a video visit, what equipment you need, how much sessions cost, and which providers",

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
          "Step one is confirming that your loved one's facility offers video visitation and which provider they use. You can search our facility directory or call the facility directly to find out.",
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
      {
        heading: "New FCC Video Call Rate Caps",
        body: [
          "The Federal Communications Commission capped prison video call rates for the first time under FCC rules that took effect in 2024 and 2025. Before these rules, video calls were completely unregulated and providers charged whatever the facility contract allowed. The original 2024 rules capped video call rates at $0.16 per minute at prisons and between $0.11 and $0.25 per minute at jails depending on size. In October 2025 the FCC voted to raise these caps, and the current rates in force are $0.25 per minute at prisons and between $0.19 and $0.44 per minute at jails depending on size. Transaction fees for video calls remain eliminated under the current rules.",
          "Securus and JPay notified users in late 2024 that they were making system updates to comply with the new per-minute video call billing requirement. Some facilities experienced temporary video visit disruptions during these compliance updates. If your scheduled video visit was cancelled during a provider system update, the visit should have been automatically refunded. Contact the provider with your booking confirmation if you did not receive the refund.",
          "GTL ViaPath Technologies was ordered to pay $3 million for violations of consumer protection laws in 2025, following complaints about video visitation service quality and billing practices. If you experienced billing issues or failed video visits through GTL ConnectNetwork or GettingOut, you may be eligible to file a complaint with your state attorney general consumer protection office.",
        ],
      },
      {
        heading: "Video Visit Technical Problems and How to Fix Them",
        body: [
          "Video visit technical failures are among the most frustrating experiences families report. Common problems include the visit freezing or pixelating, audio delays making conversation impossible, the platform redirecting users to download plugins in a loop, and the visit simply never connecting despite both parties being present at the scheduled time.",
          "Audio delays are a frequently reported problem with JPay video visits. Families report delays of up to 10 seconds between speaking and being heard on the other end. This is caused by insufficient bandwidth on the facility side rather than the family connection. There is no fix available to families for facility-side bandwidth issues, but using the clearest audio setup possible on your end helps. Use a quiet room, position yourself close to your device microphone, and avoid speakerphone if possible.",
          "If the platform keeps redirecting you to download a plugin despite already having it installed, try a different browser. Google Chrome is the most compatible browser for most video visit platforms. If Chrome does not work, try Firefox or Edge. Clearing all browser data including cookies, cache, and plugin data before the visit can resolve redirect loops that persist through normal troubleshooting.",
          "If both parties were present at the scheduled time but the visit never connected, contact provider customer service within 24 hours with your booking confirmation number. Document the exact time you joined and how long you waited. Most providers will issue a credit for a failed visit caused by their system rather than your connection, but only if you report the issue promptly with documentation.",
        ],
      },
      {
        heading: "How to Get a Refund for a Failed Video Visit",
        body: [
          "If a video visit fails due to a technical problem on the provider side, you are generally entitled to a credit or refund. The process and likelihood of getting one depends on which provider you use and how quickly you report the issue. The key rule is to report immediately after the failed visit, not days or weeks later.",
          "Contact provider customer service the same day the visit fails. Provide your account details, the booking confirmation number, the scheduled date and time, and a clear description of what happened. State specifically that you want a credit or refund for the failed session. Some providers issue credits automatically when a session drops below a minimum length, but most require you to contact them.",
          "If the provider refuses a refund for a clearly failed visit, escalate to your state attorney general consumer protection office. Prison communication providers operate under state contracts and state consumer protection laws apply to their services. A formal complaint filed with the attorney general carries more weight than a customer service call.",
          "Keep records of every failed visit including screenshots of error messages, the exact time you joined and left, and any communication with customer service. These records are essential if you need to dispute a charge with your bank or file a formal complaint.",
        ],
      },
      {
        heading: "States That Have Banned In-Person Visits and Replaced Them With Video Only",
        body: [
          "A growing number of facilities have eliminated traditional in-person contact visits entirely and replaced them with video-only visitation. This means even when you travel to the facility, you do not see your loved one face to face. Instead, you sit at a video terminal in the lobby and connect through a screen. Some advocates argue this model reduces meaningful family connection while generating revenue for providers.",
          "Colorado is among the states where specific facilities have maintained video-only visitation policies that began during the pandemic and were never reversed. Children of incarcerated parents have filed lawsuits in Colorado challenging visitation bans as violations of their rights to family connection. Colorado also passed new legislation in 2025 to expand prisoner visitation rights in response to these concerns.",
          "Before traveling to visit a facility in person, always call ahead to confirm whether the facility offers contact visits or video-only visits. This information is not always clearly stated on facility websites and policies can change without public notice. If you arrive for a contact visit and the facility has moved to video-only, you may be able to conduct a lobby video visit at no charge depending on the facility policy.",
        ],
      },
      {
        heading: "Video Visit Troubleshooting Checklist",
        body: [
          "Frozen screen: close other programs using your camera, check that your internet connection is stable, and rejoin the session. If the freeze happens at the same point every time, try a different browser or device before assuming the provider is at fault.",
          "Dropped visit mid-session: note the exact time it dropped and whether you received any error message. Rejoin immediately if the session allows it. If the visit cannot be recovered, contact the provider the same day with your booking confirmation and the drop time to ask for a credit.",
          "Webpage cannot be found error: this usually means the visit link expired or was generated for a different session. Do not keep refreshing the dead link. Go back to the provider site or app, find your scheduled visit in your account, and use the current join link from there.",
          "No audio or video on your end: check browser permissions for camera and microphone. The browser must be explicitly allowed to use both. Test with the provider pre-visit equipment check if one is offered, at least 30 minutes before the visit.",
          "General rule: test everything before the scheduled time, join a few minutes early, and screenshot any error the moment it appears. Same-day reporting with documentation is what gets credits issued.",
        ],
      },
      {
        heading: "Dress Code and Visit Rules",
        body: [
          "Video visits follow dress standards similar to in-person visits. Dress modestly and avoid revealing clothing, sleeveless tops, or anything that could be considered inappropriate by facility staff. When in doubt, dress as you would for an in-person visit.",
          "Stay seated and keep only yourself visible on camera for the entire visit. Staff may end the visit if you move around the room or if other people appear in the frame. Use a quiet, private location where you will not be interrupted.",
          "Do not attempt to record the visit unless the facility explicitly allows recording. Unauthorized recording can lead to loss of visiting privileges.",
          "Follow any additional rules announced at the start of the visit. Staff commonly state the rules before connecting you, and those instructions override any general guidance. Rules vary by facility, so treat the staff briefing as the final word.",
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
      "FCC rules first capped video call rates in 2024 at $0.16 per minute for prisons and $0.11 to $0.25 per minute for jails, then the FCC raised those caps in 2025 to $0.25 per minute for prisons and $0.19 to $0.44 per minute for jails. Transaction fees for video calls remain prohibited.",
      "If a scheduled video visit is cancelled due to a provider system update, it should be automatically refunded. Contact the provider with your booking confirmation if you do not receive the refund.",
      "Report failed video visits to customer service the same day with your booking confirmation number. Most providers require prompt reporting to issue a credit.",
      "If the video platform keeps redirecting you to download a plugin, try Google Chrome first, then clear all browser data and try again.",
      "Always call the facility before traveling to confirm whether they offer contact visits or video-only visitation. Policies change without public notice.",
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
      {
        question: "What are the new FCC rules for video visit costs?",
        answer: "The FCC first capped prison video call rates in 2024 at $0.16 per minute for prisons and between $0.11 and $0.25 per minute for jails depending on size. In October 2025 the FCC voted to raise these caps, and the rates currently in force are $0.25 per minute for prisons and between $0.19 and $0.44 per minute for jails depending on size. Transaction fees for video calls remain eliminated. Before the original 2024 rules, video calls were completely unregulated and often more expensive than phone calls.",
      },
      {
        question: "My video visit froze and ended early. Can I get a refund?",
        answer: "Contact provider customer service the same day with your booking confirmation number and a description of what happened. Most providers will issue a credit for visits that fail due to technical issues on their side, but require prompt reporting. If the provider refuses, escalate to your state attorney general consumer protection office.",
      },
      {
        question: "Why does the video visit platform keep asking me to download a plugin?",
        answer: "This is a common technical issue. Try using Google Chrome as your browser and clear all browser data including cookies, cache, and plugin data before the visit. If Chrome does not work, try Firefox or Microsoft Edge. Restarting your computer before the visit can also resolve plugin redirect loops.",
      },
      {
        question: "The facility replaced in-person visits with video only. Is this legal?",
        answer: "Facilities have broad discretion over visitation policies and video-only visitation is legal at most facilities. Some advocacy organizations and families have filed lawsuits challenging video-only policies, particularly for children visiting incarcerated parents. Colorado passed legislation in 2025 expanding visitation rights. Contact a prison rights advocacy organization in your state for guidance on the specific rules that apply.",
      },
      {
        question: "Can I do a video visit if I travel to the facility in person?",
        answer: "Some facilities offer on-site lobby video visits where you come to the facility and connect through a terminal in the lobby. These are sometimes free or lower cost than remote video visits. Call the facility before traveling to confirm what visit options are available and whether an appointment is required.",
      },
      {
        question: "What ID do I need for a video visit?",
        answer: "Have a valid government-issued photo ID ready, such as a driver license or state ID. Staff may ask you to show it on camera before or during the visit. If you are visiting from outside the US, a foreign passport is generally accepted as photo ID, but confirm with the facility in advance since ID policies vary. Some families report using other official photo IDs successfully. When in doubt, call the facility visitation office before your scheduled visit to confirm which IDs they accept.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-08-01",
    seoTitle: "How to Find an Inmate: Federal, State and County Inmate",
    seoDescription: "Learn how to find an inmate in federal prison, state prison, or county jail - which search tools to use, how to search by name or ID, and what to do if the",

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
      {
        heading: "Why an Inmate May Not Appear in Search Results",
        body: [
          "The most common reason an inmate does not appear in a search tool is that they are in transit between facilities. When an inmate is being transferred, they are temporarily removed from the sending facility database but have not yet been processed into the receiving facility system. During this window, which can last from one day to several weeks, the inmate will not appear in any public database. This is intentional for security reasons: the Bureau of Prisons does not publicly disclose transit routes or schedules.",
          "A name spelling error is the second most common reason a search returns no results. Try every possible spelling variation of the first and last name. If the person goes by a nickname, try their legal first name instead. If they have a hyphenated or compound last name, try searching with just one part of it. Middle names and name suffixes like Jr or III can also cause mismatches if entered incorrectly.",
          "Jurisdiction mismatch is another frequent cause. A person convicted of a state crime will not appear in the federal BOP locator. A person in a county jail will not appear in the state DOC database until they are transferred and processed. Always confirm whether you are searching the correct system for the type of facility your loved one is in.",
          "Some records are sealed or restricted due to protective custody, witness protection, or ongoing legal proceedings. In these cases, the record may exist but is not publicly visible. If you believe someone is in custody but cannot find them through any public database, contacting an attorney is the most effective next step as legal representatives have access to information not available to the general public.",
        ],
      },
      {
        heading: "Tips for Searching the BOP Federal Inmate Locator",
        body: [
          "The Bureau of Prisons inmate locator at bop.gov covers all federal inmates from 1982 to the present. If you have the inmate BOP Register Number, always search by that number first. A Register Number overrides name spelling issues, duplicate names, and recent transfers. The number is typically provided at sentencing and may appear on court documents.",
          "If you are searching by name and get too many results, use the optional filters to narrow them down. You can filter by age range, race, and gender. For California federal inmates, look for the Western Region designation in the results. The facility codes can help identify location: USP indicates a high-security penitentiary, FCI indicates a medium or low-security correctional institution, FPC indicates a minimum-security camp.",
          "The BOP locator updates overnight, so transfers and releases typically appear within 24 hours of the change being processed. If an inmate shows as IN TRANSIT, check back the following day. If they show as RELEASED or NOT IN BOP CUSTODY, they are no longer in federal custody but may still be under supervised release or parole conditions.",
          "FCI Dublin in California closed in April 2024 following a federal investigation, and the facility remains closed as of 2026. If you are searching for someone who was previously at FCI Dublin, their record will still appear in the locator showing their last location or current transfer status. Contact the BOP directly for assistance locating inmates from closed facilities.",
        ],
      },
      {
        heading: "Finding an Inmate After a Transfer",
        body: [
          "Transfers between facilities are one of the most disruptive events for family communication. Inmates can be transferred for many reasons including security reclassification, medical needs, overcrowding, facility closures, or program placement. Families are rarely given advance notice of transfers.",
          "After a transfer, the inmate should appear in the new facility database within 24 to 72 hours of arrival after intake processing is complete. During this window, communication through messaging and phone systems may also be interrupted because the inmate has not yet been registered in the new facility system. This disruption is temporary and normal.",
          "If your loved one is transferred from a county jail to a state prison after sentencing, search the state Department of Corrections inmate locator rather than the county sheriff website. The state DOC locator will show their new facility once intake is complete. The inmate will also receive a new ID number at the state facility which you will need for all communication and money transfer accounts.",
          "If you cannot locate someone after a transfer through online tools, call the last known facility and ask the records office for assistance. They can often confirm a transfer occurred and may be able to provide the destination facility name. You can then contact the destination facility directly to confirm the inmate has arrived and get the new ID number.",
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
      "Inmates in transit between facilities will not appear in any public database. This is normal and intentional. Check back daily until they appear at the new facility.",
      "Always try multiple name spellings when a search returns no results. Legal names, nicknames, and hyphenated names all require different search approaches.",
      "If you have the BOP Register Number, search by that first. It overrides name spelling issues and transfer gaps in search results.",
      "After a transfer from county jail to state prison, the inmate receives a new ID number. You will need this new ID for all communication and money transfer accounts.",
      "FCI Dublin closed in April 2024, still applicable in 2026 as the facility remains closed. Inmates previously at that facility have been transferred and their records show current transfer status in the BOP locator.",
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
      {
        question: "Why does my loved one not show up in the BOP inmate locator?",
        answer: "The most common reasons are that they are in transit between facilities, there is a name spelling error in your search, or you are searching the wrong database for their custody type. Try searching with the BOP Register Number if you have it. If they are in transit, check back daily. If you still cannot find them after 72 hours, call the last known facility records office.",
      },
      {
        question: "How long does it take for a transfer to show up in the database?",
        answer: "Most transfers appear in the new facility database within 24 to 72 hours after the inmate arrives and completes intake processing. During this window the inmate will not appear in any public search tool. Messaging and phone access may also be temporarily unavailable during intake. Check the database daily and expect communication to resume within a few days of the transfer.",
      },
      {
        question: "What does IN TRANSIT mean in the BOP locator?",
        answer: "IN TRANSIT means the inmate has left one facility and is traveling to another. They are in the custody of the U.S. Marshals Service during transport. The BOP does not disclose transit routes or schedules for security reasons. Check the locator daily. The new facility will appear in the record once the inmate completes intake processing at their destination.",
      },
      {
        question: "Can I find an inmate who was released before 1982 in the BOP locator?",
        answer: "The BOP inmate locator only covers federal inmates from 1982 to the present. Records from before 1982 are held by the National Archives and Records Administration. Contact NARA directly for information on inmates who were released before 1982.",
      },
      {
        question: "What is the BOP Register Number and where do I find it?",
        answer: "The BOP Register Number is a unique identifier assigned to every federal inmate. It typically appears on court sentencing documents and any official BOP correspondence. If you do not have it, search by name first and use the age, race, and gender filters to narrow results. Once you find the correct record, the Register Number is displayed and can be used for all future searches.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-08-15",
    seoTitle: "How Prison Phone Calls Work: Complete Guide",
    seoDescription: "Learn how inmates make phone calls, how to set up a prepaid account to receive calls, what providers facilities use, and how much prison calls cost.",
    intro: [
      "Prison phone calls work through a prepaid system. Families create an account with the facility phone provider, add funds, and wait for the inmate to call. The call is automatically deducted from the prepaid balance at a per-minute rate set by the facility contract.",
      "The most common prison phone providers in the United States are GTL, Securus Technologies, ICSolutions, and City Tele Coin. Each facility has a contract with only one provider, so families must use whichever provider their facility has chosen.",
      "Prison phone call rates are regulated by the FCC for interstate calls. The maximum rate is $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current rules.",
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
          "Per-minute rates for prison calls have been significantly reduced under FCC regulations in recent years. Interstate calls are now capped at $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current FCC rules. Intrastate rates vary by state but most are in the $0.05 to $0.25 per-minute range.",
          "Fees can add significantly to the base rate. Connection fees, account maintenance fees, and payment processing fees are common. A 15-minute call at $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) costs $1.65 in base rate but may total $3 to $5 after fees depending on the provider.",
        ],
      },
      {
        heading: "States With Free Phone Calls and How They Work",
        body: [
          "Minnesota has offered free phone calls from all state DOC facilities since July 1, 2023. Families no longer need a ConnectNetwork AdvancePay account or any funds to receive calls from Minnesota state prisons. You still need to accept the call by pressing zero when it comes through. If you have unused funds in an existing ConnectNetwork AdvancePay account from before the free call program, you can request a refund by calling ViaPath customer service at 1-877-650-4249. Closing your account does not prevent you from receiving free Minnesota DOC calls.",
          "New York State made all calls from state correctional facilities free effective August 1, 2025. The state uses Securus Technology for its phone system. Since calls are now free, a Securus account is no longer required for New York state prison calls. Families with unused Securus balances can request a refund. Each incarcerated individual in New York state receives three free calls per week of up to 15 minutes, added to their accounts at the beginning of each Saturday. Calls can reach numbers in the United States, Canada, and US territories including Puerto Rico, Guam, and the US Virgin Islands.",
          "Florida State Prison uses ConnectNetwork for phone calls and offers one free five-minute call per week per incarcerated person in addition to standard AdvancePay calls. The free call applies to the first call made each week. You may hear a message that the call is free when you accept it. The inmate does not hear this message. After the free weekly call, subsequent calls are deducted from your AdvancePay balance at the facility rate.",
          "California, Colorado, Connecticut, and Massachusetts have also implemented free or reduced-cost call programs at state facilities. These programs apply only to state-operated facilities under each state DOC contract. County jails and private facilities within these states may not be covered by the free call policy. Check with the specific facility before assuming free calls apply.",
        ],
      },
      {
        heading: "Types of Phone Accounts Explained",
        body: [
          "AdvancePay is a prepaid account where you deposit money in advance linked to your phone number. When the inmate calls your number, the cost is deducted from your balance. AdvancePay is available through ConnectNetwork and similar prepaid systems at other providers. It gives you better per-minute rates than collect calls and is the recommended account type for families who receive calls regularly.",
          "PIN Debit accounts allow the inmate to use their own trust account funds to pay for calls rather than having the family fund the account. This is useful when the family cannot maintain a prepaid balance. PIN Debit calls allow the inmate to call any approved number rather than being restricted to one phone number as with some AdvancePay configurations. PIN Debit rates are generally less expensive than collect call rates at most facilities.",
          "Traditional collect calls bill the charges to your phone bill after the call. This is the most expensive option and is not always available depending on your phone carrier. Some carriers place spending limits on collect call billing. Collect calls are also not accepted on cell phones at many facilities.",
          "Debit Link accounts at ViaPath facilities allow inmates to use funds for tablet-based services including streaming music, games, and ebooks in addition to phone calls. Debit Link units cost $0.01 each, meaning $1 buys 100 link units. Note that Debit Link purchases are final and no refunds are issued. This is a separate account from the trust fund and AdvancePay accounts.",
          "It is important to understand that the inmate commissary account and the phone account are typically separate accounts at most facilities. Funds deposited to one account cannot be transferred to the other. Morgan County Jail and many similar facilities explicitly state this. Make sure you are depositing funds into the correct account for your intended purpose.",
        ],
      },
      {
        heading: "What Happens When You Receive a Prison Phone Call",
        body: [
          "When an inmate calls your number, you will hear an automated announcement before the call connects. The announcement typically says something like: You are receiving a call from, followed by the inmate name, an inmate at, followed by the facility name. The announcement then prompts you to press a number to accept the call. On AdvancePay accounts, pressing the correct number connects the call and deductions begin from your balance immediately.",
          "If your balance is too low to cover the call, the system may not connect at all or may play a message indicating insufficient funds. Keep your balance above zero at all times if you want to ensure you do not miss calls. Many providers allow you to set up automatic refills that trigger when your balance drops below a minimum amount. This is the most reliable way to avoid missed calls due to an empty account.",
          "If you do not want to receive calls from a specific inmate, you can contact the facility in writing and ask to be placed on the inmate negative contact list. Your number will be blocked from receiving that inmate calls going forward. This is relevant in situations involving domestic violence protective orders or other circumstances where contact should not occur.",
          "Calls are limited in length, typically 15 to 30 minutes, and disconnect automatically when the limit is reached. At Minnesota DOC facilities, all completed calls are subject to a 15-minute wait period before another call can be made beginning May 14, 2025. This policy prevents any one inmate from monopolizing the phones so all incarcerated people have equal access.",
        ],
      },
    ],

    takeaways: [
      "Inmates call out through a facility-contracted phone provider. You cannot call in.",
      "Your phone number must be on the inmate's approved contact list before they can call you.",
      "Setting up a prepaid account gives you lower rates and better cost control than collect calls.",
      "All calls are recorded and monitored unless specifically exempted.",
      "FCC-capped rates are $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current FCC rules.",
      "Extra fees from providers can double the actual cost of a call.",
      "Minnesota phone calls from state DOC facilities are free since July 2023. No AdvancePay account or funds are needed. Press zero to accept the call.",
      "New York State phone calls are free from state prisons since August 1, 2025. Each inmate gets three free calls per week up to 15 minutes each.",
      "The inmate commissary account and phone account are separate at most facilities. Funds cannot be transferred between them. Deposit to the correct account.",
      "PIN Debit accounts let the inmate pay for calls from their own trust funds. This allows calls to any approved number rather than just one registered number.",
      "Debit Link purchases at ViaPath facilities are final with no refunds. One dollar buys 100 link units for tablet services.",
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
      {
        question: "Do I need a phone account if my loved one is in a Minnesota or New York state prison?",
        answer: "No. Minnesota DOC calls have been free since July 2023. New York state prison calls have been free since August 1, 2025. You do not need a ConnectNetwork or Securus account to receive these calls. Simply press zero to accept the call when it comes through. If you have an existing account with unused funds, contact the provider to request a refund.",
      },
      {
        question: "What is PIN Debit and how is it different from AdvancePay?",
        answer: "AdvancePay is funded by the family and linked to one specific phone number. PIN Debit is funded by the inmate from their trust account and allows calls to any approved number on their list. PIN Debit is useful when the family cannot maintain a prepaid balance. Both offer better rates than collect calls. Check your facility to see which account types are available.",
      },
      {
        question: "Why did my prison phone call get disconnected?",
        answer: "The most common reasons are reaching the call time limit (typically 15 to 30 minutes), your AdvancePay balance reaching zero mid-call, or a facility count or lockdown that requires all calls to end. If your balance ran out, add funds and wait for the inmate to call again. If the facility ended calls, they will be able to call when normal operations resume.",
      },
      {
        question: "What does the automated message say when I receive a prison call?",
        answer: "The automated message typically says you are receiving a call from the inmate name at the facility name and prompts you to press a number to accept. On free call systems like Minnesota and New York, you may hear a message that the call is free before connecting. Press the prompted number to accept. If you do not press anything or hang up, the call is rejected and the inmate must call again.",
      },
      {
        question: "Can I block calls from a specific inmate?",
        answer: "Yes. Contact the facility in writing and ask to be placed on the inmate negative contact list. Your number will be blocked from receiving calls from that specific inmate. This process varies by facility. If there is a protective order in place, notify the facility immediately as additional steps may be required to ensure compliance.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Complete Inmate Communication Guide: Messaging, Calls",
    seoDescription: "Complete guide to communicating with an incarcerated loved one - how digital messaging works, how to receive phone calls, how to schedule video visits, how to",

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
          "Interstate call rates are federally regulated by the FCC with a maximum rate of $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current rules. In-state rates may vary. Additional fees such as account setup fees or connection fees may apply depending on the provider.",
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
      {
        heading: "Important: Prison Phone Rate Changes in 2025",
        body: [
          "The cost of prison phone and video calls changed significantly in 2025. The FCC had capped interstate prison phone call rates at $0.06 per minute in its 2024 ruling, but the Trump administration raised that cap to $0.11 per minute in 2025, representing an 83 percent increase from the 2024 rates. Families who had adjusted their budgets based on the 2024 rates need to recalculate their expected monthly costs under the new higher cap.",
          "Video call rates were also affected by the 2025 changes. The 2024 FCC order had capped video call rates at between $0.11 and $0.25 per minute. The 2025 changes under the new administration reversed much of the 2024 reform framework, moving rates back upward. Prison advocacy organizations including the Prison Policy Initiative have been tracking these changes and filing opposition.",
          "Despite the federal rate increases, some states and counties continue to offer free or reduced-cost calls independently of federal regulation. New York City, San Francisco, Massachusetts, and other jurisdictions that eliminated charges at the local level continue to do so regardless of federal rate caps. Contact the specific facility to find out whether any free call programs apply to your situation.",
        ],
      },
      {
        heading: "First Steps When a Loved One Is First Incarcerated",
        body: [
          "The first days and weeks after someone is incarcerated are the most confusing for families. Information is hard to get, the person may be moved between facilities without notice, and setting up communication accounts takes time. Having a clear checklist of what to do first reduces the chaos significantly.",
          "Step one is finding out exactly where they are. If they were just arrested, call the arresting jurisdiction or county jail directly. If they have been sentenced and transferred to a state or federal facility, use the state DOC inmate locator or the BOP locator at bop.gov. Do not try to set up any communication accounts until you have confirmed their current location and the facility name.",
          "Step two is getting their inmate ID number. This is different from any court case number or booking number. You need the facility-assigned inmate ID for every communication account, money transfer, and visit application. Call the facility records office or ask your loved one to provide it in their first communication to you.",
          "Step three is finding out which communication providers serve that facility. Search our facility directory by facility name to see which messaging, phone, video, and money transfer providers are available. This tells you exactly which accounts to create and prevents wasting time and money on the wrong platforms.",
          "Step four is setting up accounts in order of priority. Most families prioritize getting on the phone call list first because calls can happen quickly once you register your number. Messaging accounts take longer to activate because the inmate must initiate the contact in most systems. Visit approval takes the longest, typically two to six weeks, so submit the visitor application as soon as possible.",
        ],
      },
      {
        heading: "How Communication Affects Reentry and Outcomes",
        body: [
          "Research consistently shows that maintaining family communication during incarceration improves outcomes. Studies from the Office of Justice Programs and the Bureau of Prisons have found that strong family ties during imprisonment are associated with better behavior inside the facility, lower rates of reincarceration after release, and more successful reintegration into the community.",
          "Around 60 percent of incarcerated parents maintain phone contact with their families and approximately 70 percent maintain contact through letters. These numbers decline at facilities where costs are prohibitive. The Prison Policy Initiative found that high phone and messaging costs directly reduce contact frequency, with families cutting back on communication when fees exceed what they can afford.",
          "The BOP recognizes the importance of family contact and states that electronic messaging helps inmates stay connected to family, linking family ties to successful reentry. This acknowledgment from the federal prison system itself reflects decades of research showing that the cost of cutting family ties extends well beyond the incarcerated individual to communities and taxpayers who ultimately bear the cost of higher recidivism.",
        ],
      },
      {
        heading: "Accessibility Services for Families with Disabilities",
        body: [
          "Families with hearing, speech, or communication disabilities have specific rights regarding inmate communication services. Starting January 1, 2024, the FCC required that facilities with an average daily population of 50 or more incarcerated people and available broadband internet access provide Internet Protocol Captioned Telephone Service and Internet Protocol Relay Service through their contracted providers.",
          "If you are deaf or hard of hearing and need captioning or relay services to communicate with an incarcerated loved one, contact the facility directly to ask which accessibility services are available through their communication provider. You can also file a complaint with the FCC if a facility required to provide these services is not doing so.",
          "Some families have difficulty with the online account setup process due to technology access or literacy challenges. Most providers offer phone-based account setup as an alternative to online registration. Call the provider customer service line and ask to set up your account over the phone. Some facilities also have staff who can assist family members through the account setup process on site.",
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
      "Prison phone call rates increased in 2025 under the Trump administration from $0.06 to $0.11 per minute, an 83 percent increase from the 2024 FCC caps.",
      "First steps after incarceration: find the facility, get the inmate ID number, find which providers serve the facility, then set up accounts in order of priority.",
      "Visit approval takes two to six weeks. Submit the visitor application as early as possible even before other accounts are set up.",
      "Research shows strong family communication during incarceration reduces recidivism and improves reentry outcomes. Staying connected matters beyond the immediate relationship.",
      "Families with disabilities have FCC-protected rights to captioning and relay services at facilities with 50 or more incarcerated people and available broadband.",
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
        answer: "Costs vary by communication type. Digital messages typically cost $0.25 to $0.50 each. Phone calls cost up to $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for interstate calls. Video visits cost $7.50 to $15 per session. Photo delivery costs around $0.49 per photo. Money transfer fees vary by platform and amount.",
      },
      {
        question: "What if the facility changes its communication provider?",
        answer: "Facility provider contracts do expire and change. If communication through your current platform suddenly stops working, contact the facility directly to confirm whether a provider change has occurred and which new platform to use.",
      },
      {
        question: "Can all incarcerated people receive digital messages?",
        answer: "No. Not all facilities offer digital messaging. Federal prisons almost all use CorrLinks. State prisons vary by provider. Some smaller county jails only support phone calls and physical mail. Use the facility directory to check what is available at your specific facility.",
      },
      {
        question: "Did prison phone call rates go up or down in 2025?",
        answer: "Prison phone call rates increased in 2025. The FCC had capped interstate rates at $0.06 per minute in 2024, but the Trump administration raised that cap to $0.11 per minute in 2025, an 83 percent increase. Some states and counties with local free call programs continue to offer free calls regardless of the federal rate changes.",
      },
      {
        question: "What should I do first when a loved one is newly incarcerated?",
        answer: "Start by confirming the current facility and getting the facility-assigned inmate ID number. Then search the facility directory to find which communication providers serve that location. Set up phone accounts first since calls can begin quickly. Submit the visitor application immediately since approval takes two to six weeks. Messaging accounts typically require the inmate to initiate contact, so the account can be created but may not activate immediately.",
      },
      {
        question: "Does staying in contact actually help someone who is incarcerated?",
        answer: "Yes. Research from the Office of Justice Programs and the Bureau of Prisons consistently shows that maintaining family contact during incarceration is associated with better behavior inside the facility, lower rates of reincarceration after release, and more successful reintegration. The BOP itself acknowledges the link between family ties and successful reentry outcomes.",
      },
      {
        question: "Are there free communication options for families who cannot afford the fees?",
        answer: "A growing number of states and counties offer free phone calls from their facilities. New York City, San Francisco, Massachusetts, and other jurisdictions have eliminated call charges. Some advocacy organizations provide communication support for low-income families. Contact the facility and your state Department of Corrections to ask whether any free or reduced-cost programs apply to your situation.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Federal Prison vs State Prison: Differences in",
    seoDescription: "Learn the key differences between federal and state prisons - who goes where, how communication works in each system, which providers to use, and how to find",

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
      {
        heading: "Communication Cost Differences Between Federal and State Prisons",
        body: [
          "Communication costs differ between federal and state facilities in ways that directly affect families. Federal prison phone calls go through the TRULINCS system managed by ConnectNetwork. State prison phone costs vary by state contract and provider. Under current FCC rules in effect as of 2026, interstate phone call rates are capped at $0.11 per minute for prisons, raised from the original 2024 cap of $0.06 per minute.",
          "Electronic messaging costs also differ. CorrLinks charges $0.30 per message for federal inmates as of 2025. State prison messaging through JPay uses a stamp system ranging from $0.33 to $0.47 per stamp depending on the state. Some state systems have negotiated lower rates through their DOC contracts. Federal messaging costs are uniform across all BOP facilities because CorrLinks is the single approved provider.",
          "More than a third of families with incarcerated loved ones go into debt trying to pay prison communication costs according to research from the Ella Baker Center for Human Rights. Federal families face consistent costs nationwide while state families face highly variable costs depending on which state and which provider serves their facility. Families in states that have eliminated communication charges pay nothing, while families in states without reform pay the full market rate.",
        ],
      },
      {
        heading: "How the Martha Wright-Reed Act Affects Federal Prison Communication",
        body: [
          "The Martha Wright-Reed Just and Reasonable Communications Act became law in 2023, giving the FCC authority to regulate both interstate and in-state prison phone and video call rates. The law is named after Martha Wright, whose grandson was transferred to out-of-state federal prisons, leaving the family unable to afford the long-distance call costs that resulted.",
          "The FCC used this authority to issue sweeping rate caps in 2024, setting maximum rates of $0.06 per minute for prisons and eliminating many add-on fees. However, the FCC voted in October 2025 to raise those caps significantly, to $0.11 per minute for prisons. Congress members including 35 House Democrats formally opposed the rate increases, calling them a dramatic departure from the bipartisan framework established in 2024.",
          "For families of federal inmates specifically, the Martha Wright-Reed Act matters because federal transfers often result in inmates being housed far from home. Long-distance calls were historically among the most expensive. The rate caps established under this law apply most directly to interstate calls, which are more common for federal inmates who may be transferred across state lines.",
        ],
      },
      {
        heading: "When a Loved One Is Transferred Between Federal Facilities",
        body: [
          "Federal inmates are transferred between BOP facilities more frequently than many families expect. Transfers can happen for security reclassification, medical needs, program placement, overcrowding, or following a facility closure such as FCI Dublin which closed in April 2024 and remains closed as of 2026. Families are not given advance notice of federal transfers.",
          "The advantage for federal families is that CorrLinks transfers with the inmate. Because all federal facilities use the same TRULINCS system, your existing CorrLinks connection continues at the new facility without requiring any action on your part. Phone service through ConnectNetwork also typically continues without disruption once the inmate is processed into the new facility.",
          "The BOP inmate locator at bop.gov will show the new facility within 24 to 72 hours of the inmate completing intake processing. During this window, communication may be temporarily unavailable. Check the locator daily after a transfer and expect a brief interruption in messaging and phone access while the inmate is processed into the new facility system.",
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
      "CorrLinks charges $0.30 per message for federal inmates as of 2025. State prison JPay stamps range from $0.33 to $0.47 depending on the state.",
      "The Martha Wright-Reed Act gave the FCC authority to regulate all prison phone rates. The FCC capped rates in 2024 but raised them again in October 2025 to $0.11 per minute.",
      "More than a third of families with incarcerated loved ones go into debt paying prison communication costs according to research from the Ella Baker Center for Human Rights.",
      "Federal inmates can be transferred between facilities without notice. CorrLinks connections transfer automatically to the new BOP facility without any action needed from family members.",
      "Check bop.gov daily after a federal transfer. The new facility appears within 24 to 72 hours of intake processing.",
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
      {
        question: "Do federal inmates have the same messaging platform at every facility?",
        answer: "Yes. All federal Bureau of Prisons facilities use CorrLinks for electronic messaging through the TRULINCS system. If your loved one transfers to a new federal facility, your CorrLinks connection continues automatically. You do not need to create a new account or submit a new contact request when they transfer within the federal system.",
      },
      {
        question: "What is the Martha Wright-Reed Act and how does it affect prison communication costs?",
        answer: "The Martha Wright-Reed Just and Reasonable Communications Act became law in 2023 and gave the FCC authority to regulate both interstate and in-state prison phone and video rates. The FCC used this authority to cap rates at $0.06 per minute in 2024, but voted in October 2025 to raise those caps to $0.11 per minute for prisons. The law is named after Martha Wright, whose grandson was transferred to out-of-state federal prisons and whose family could not afford the resulting long-distance costs.",
      },
      {
        question: "Why are federal prison phone costs different from state prison costs?",
        answer: "Federal phone costs are more uniform because all BOP facilities use the same contracted providers under centralized BOP agreements. State prison phone costs vary by state because each state negotiates its own contracts independently. Some states have eliminated charges entirely while others charge the maximum allowed rates. Federal families face consistent national rates while state families face highly variable costs depending on their specific state and facility.",
      },
      {
        question: "What happens to my CorrLinks connection if my loved one is transferred to a new federal prison?",
        answer: "Your CorrLinks connection transfers automatically. All federal BOP facilities use the same TRULINCS system, so the existing connection continues at the new facility without requiring any action. Expect a brief interruption of 24 to 72 hours while the inmate completes intake processing at the new facility. Check the BOP inmate locator at bop.gov to confirm when they have arrived.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-10-12",
    seoTitle: "Inmate Tablets Explained: JPay Tablets, What Is on Them",
    seoDescription: "Learn how inmate tablets work at prisons and jails - what JPay and GTL tablets include, what services cost, how families send money for tablet use, and which",

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
      {
        heading: "JPay Tablet Problems and the NY Attorney General Agreement",
        body: [
          "JPay tablets have been the subject of significant complaints and legal action. The New York Attorney General reached an agreement with JPay after receiving hundreds of complaints from incarcerated New Yorkers that tablets were defective, arrived late, or never arrived. JPay also failed to refund consumers when purchased music and videos did not download. As a result of the agreement, JPay provided 100 digital stamps worth approximately $500,000 to every person at a New York DOCCS facility. JPay was also required to hire at least 11 customer service representatives specifically for New York state prison complaints and to resolve all complaints within 14 days.",
          "A class action lawsuit was filed in Georgia federal court alleging that JPay operated a scheme to sell tablets to inmates and then take them back without reimbursement when contracts changed or the tablet was replaced. Inmates in the lawsuit reported purchasing devices and paying for games and music content only to have tablets confiscated or exchanged without credit for the paid content.",
          "Common tablet problems reported by families include tablets stuck at the startup menu after a software update, syncing failures between the tablet and facility kiosk, malfunction after recommended updates, and customer service taking weeks to respond without resolution. If your loved one is experiencing tablet problems, the family can contact JPay customer service directly and reference the facility name and existing ticket number.",
        ],
      },
      {
        heading: "Provider Transitions: When Facilities Switch From JPay to ViaPath",
        body: [
          "A growing number of state correctional systems have transitioned from JPay tablets to ViaPath Technologies tablets. Idaho completed this transition in May 2025, replacing JPay tablets with free ViaPath Bridge tablets. New Jersey began a similar transition in 2026. When a state switches providers, all content purchased on the old platform including music, games, and movies does not automatically transfer to the new platform.",
          "In Idaho, the DOC communicated that inmates could continue using old JPay tablets until they stopped working. When the device stops functioning, there is a process to send the tablet back, have data pulled to a USB drive, and have the unlocked tablet returned to a home address. Families should save the home address in advance for this purpose.",
          "In New Jersey, a civil rights lawsuit was filed in July 2026 challenging the transition from JPay to ViaPath, with inmates arguing that content purchased on JPay tablets would not remain accessible and that the switch resulted in significant cost increases. If your loved one's facility is undergoing a tablet provider transition, contact the facility directly to ask about the timeline, what happens to previously purchased content, and whether any credit will be provided for lost content.",
        ],
      },
      {
        heading: "How to Get a Refund or Credit for Tablet Problems",
        body: [
          "If your loved one purchased content on a JPay tablet that was never delivered or is inaccessible due to a malfunction, submit a formal support ticket through JPay. Include the specific items purchased, the dates of purchase, the transaction confirmation numbers, and a clear description of what is not working.",
          "If JPay does not respond within 14 days, escalate to your state Department of Corrections. The DOC holds the contract with JPay and has leverage to require resolution. New York established a 14-day resolution requirement as part of its Attorney General agreement.",
          "For families who cannot resolve tablet issues through these channels, filing a complaint with your state attorney general consumer protection office is the most effective escalation option. The New York Attorney General case demonstrates that state AG offices will act on widespread tablet complaints when they receive sufficient documentation.",
          "Document all tablet content purchases with confirmation numbers and screenshots before any announced provider transition date. This documentation is essential for any credit or refund claim when content is lost during a platform change.",
        ],
      },
      {
        heading: "Tablet Warranty and the FLUSH Warning",
        body: [
          "Families report that tablets can be remotely wiped, a process some support agents call a FLUSH, during maintenance, troubleshooting, or provider transitions. A FLUSH resets the tablet to factory state and can erase purchased pictures, games, music, and other downloaded content.",
          "Purchased content is not always restored after a wipe. This is one of the most painful tablet surprises families face: money was spent on content that simply disappears with no automatic refund.",
          "Before agreeing to any remote reset or troubleshooting wipe suggested by support, ask explicitly whether purchased content will be preserved. Get the answer in writing if you can, such as in a support ticket reply.",
          "Keep your own records of every content purchase: confirmation numbers, dates, and screenshots of the purchased items on the tablet. These records are your only evidence if content vanishes and you need to request a credit.",
        ],
      },
      {
        heading: "Tablet Lost After a Facility Transfer",
        body: [
          "When an inmate transfers to a new facility, the tablet usually does not go with them. Tablets are tied to the facility contract, and the new facility may use a different provider, a different tablet model, or no tablet program at all.",
          "Content purchased on the old tablet typically does not transfer to the new facility system. Families should treat a transfer as a likely loss of purchased content and plan purchases accordingly.",
          "If the new facility uses the same provider, ask support whether the inmate account and any remaining balances can be linked at the new location. Balances and content are handled separately, so ask about both explicitly.",
          "Before a known transfer, avoid large new content purchases. Spend down existing balances on things the inmate can use immediately rather than building a library that may not survive the move.",
        ],
      },
      {
        heading: "Apps Won't Sync or No Apps on the Tablet",
        body: [
          "A common tablet complaint: the apps that should be on the tablet are missing, will not open, or will not sync new content. The tablet looks fine but the app list is empty or frozen.",
          "First, check whether the facility is doing maintenance or a system update. App sync failures during announced or unannounced maintenance windows usually resolve on their own within a day or two.",
          "If the problem persists, the inmate should report it to facility staff or submit a support request through the provider. From the outside, you can contact provider customer service with the inmate ID and describe the sync failure.",
          "Do not repurchase missing apps or content while the sync issue is unresolved. Duplicate purchases during a glitch are difficult to get refunded, and the original content often reappears once sync is restored.",
        ],
      },
      {
        heading: "GTL Tablet Glitches to Know About",
        body: [
          "GTL, now operating as ViaPath, tablets have their own set of reported glitches. Families and inmates report video calls dropping mid-session, movies freezing during playback, and the on-screen keyboard vanishing when trying to type messages.",
          "These glitches are usually software-side rather than hardware failures. Restarting the tablet resolves many of them temporarily, but recurring glitches should be reported so they are logged against the account.",
          "For dropped video calls, note whether the drop happens at a consistent time into the call. A pattern helps support distinguish a tablet glitch from a network or facility problem.",
          "Document each glitch with the date, what was happening, and any error shown. If purchased content becomes unusable because of persistent glitches, that documentation supports a credit request.",
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
      "JPay reached an agreement with the New York Attorney General and provided $500,000 in credits after hundreds of complaints about defective or undelivered tablets.",
      "A class action lawsuit in Georgia alleged JPay took back tablets from inmates without reimbursement for purchased content.",
      "States including Idaho and New Jersey have transitioned from JPay tablets to ViaPath tablets. Content purchased on JPay does not automatically transfer to the new platform.",
      "If tablet problems are not resolved by JPay within 14 days, escalate to the state Department of Corrections which holds the contract.",
      "Document all tablet content purchases before any announced provider transition. This documentation is essential for refund claims.",
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
      {
        question: "My loved one's JPay tablet is broken and customer service is not helping. What can I do?",
        answer: "Submit a formal support ticket through JPay with the specific problem, purchase confirmation numbers, and dates. If JPay does not respond within 14 days, contact the state Department of Corrections to report the unresolved issue. If it remains unresolved, file a complaint with your state attorney general consumer protection office.",
      },
      {
        question: "What happens to content purchased on JPay tablets when a facility switches to ViaPath?",
        answer: "Purchased content generally does not transfer automatically to a new provider platform. In Idaho, the DOC arranged for tablet data to be pulled to a USB drive when the old tablet stops working. Contact the facility directly to ask what process exists for handling purchased content during a transition and document all purchases before the transition date.",
      },
      {
        question: "Is there a class action lawsuit against JPay for tablets?",
        answer: "Yes. A class action lawsuit was filed in Georgia federal court alleging that JPay sold tablets to inmates and then took them back without reimbursement when contracts changed. If your loved one experienced similar issues, search for the current status of JPay tablet class action lawsuits to find out if they may qualify to join.",
      },
      {
        question: "Can families contact JPay about tablet problems on behalf of an incarcerated person?",
        answer: "Yes. Families can contact JPay customer service directly to report tablet problems. Provide the facility name, inmate name and ID number, the nature of the problem, and any existing ticket number. Reference specific purchase confirmation numbers to support any refund or credit request.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-08-01",
    seoTitle: "Prison Visitation Rules: Approval Process, Dress Code, ID",
    seoDescription: "Complete guide to prison visitation rules - how to get approved as a visitor, what ID to bring, what to wear, what you can and cannot bring inside, and what to",

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
      {
        heading: "Why Visitors Get Turned Away and How to Avoid It",
        body: [
          "Being turned away at the gate is one of the most upsetting experiences families face, especially after traveling a long distance. The most common reasons visitors are denied entry are dress code violations, not being on the approved visitor list, expired or missing identification, and arriving during a facility lockdown or count. Understanding each of these in advance eliminates the majority of preventable turn-aways.",
          "Dress code enforcement is the most inconsistent source of problems. Rules vary by facility and individual officers can make different judgment calls about the same item of clothing. Families report being allowed in wearing certain clothing on one visit and being turned away for the same clothing on a subsequent visit. The only reliable protection against this inconsistency is to call the facility before every visit and confirm the current dress code, particularly for any item you are unsure about.",
          "A visitor in California was denied entry when an officer determined her earring was contraband after she removed it and placed it on the visiting table. Her visiting privileges were suspended for 90 days as a result. This case highlights how rules can be applied in unexpected ways. When in doubt about any item including jewelry, accessories, or clothing details, leave it in your vehicle before entering.",
          "Facility lockdowns and counts can end or prevent visits without advance notice. If you arrive during a count or lockdown, the facility will not allow visitors to enter until the count clears. This can take anywhere from 30 minutes to several hours. Always call the facility the morning of your visit to confirm visits are proceeding as scheduled before making a long trip.",
        ],
      },
      {
        heading: "How to Appeal a Denied or Terminated Visit",
        body: [
          "If your visit is denied or terminated, you have the right to receive written notification explaining the reason. In California, facilities are required to provide a written notice on a specific form that includes instructions for appealing the decision. Most state systems have a similar requirement. If you are denied entry and no written notice is provided, ask the supervising officer for documentation of the reason.",
          "The appeal process typically begins with the facility itself. Write a formal letter addressed to the Warden or Visiting Coordinator explaining the circumstances of the denial, why you believe it was applied incorrectly, and what outcome you are requesting. Submit the letter in writing and keep a copy for your records. Most facilities have a specific timeframe within which appeals must be submitted, often ten business days from the date of the denial.",
          "If the facility-level appeal does not resolve the issue, escalate to the state Department of Corrections. State DOC oversight offices review complaints about facility decisions including visiting denials. A complaint submitted to the DOC inspector general or ombudsman carries more weight than one submitted only to the facility.",
          "The New York City Council found in a recent report on Rikers Island that visitors were being turned away for dress code issues in ways that were inconsistent and preventable. The report recommended that facilities assess dress code compliance only once per visit and that nobody willing to wear a cover-up garment should be denied. If you were turned away but willing to make an adjustment, document this in any appeal you file.",
        ],
      },
      {
        heading: "Visiting Rules for Children and Special Circumstances",
        body: [
          "Children visiting an incarcerated parent face additional considerations. Most facilities allow contact visits for children accompanied by an approved adult guardian. However, children are subject to the same security screening as adults including metal detectors and in some cases pat-down searches. Prepare children in advance for what to expect to reduce anxiety during the security process.",
          "If you are bringing a child who is not your own biological child, you may need additional documentation. Many facilities require a notarized letter from the child's legal guardian authorizing the visit if the accompanying adult is not the parent. Contact the facility in advance to confirm exactly what documentation is required for minor visitors who are not in your custody.",
          "Visitors with disabilities or medical needs should contact the facility before visiting to arrange any necessary accommodations. Some facilities have discontinued ADA visitor transportation services, requiring alternative arrangements. Medication, medical devices, and mobility aids are subject to security screening and approval. Give yourself extra time when visiting with a disability-related need.",
          "If your loved one is on a restricted visiting status due to a disciplinary action, the number of visitors, visit frequency, or contact visiting may be limited. Ask the facility to clarify the terms of the restriction and when it is expected to end. Some restrictions are temporary and tied to a specific disciplinary period.",
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
      "Call the facility the morning of every visit to confirm visits are proceeding as scheduled. Lockdowns and counts can cancel visits without advance notice.",
      "Dress code enforcement is inconsistent between officers. When in doubt about any item, leave it in your vehicle before entering rather than risking being turned away.",
      "If your visit is denied, ask for written notification explaining the reason. You have the right to receive documentation and to appeal the decision.",
      "Children accompanying adults on visits are subject to the same security screening. Prepare children in advance for metal detectors and the visiting room environment.",
      "If you were turned away for a dress code issue but were willing to make an adjustment, document this in any appeal you file with the facility.",
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
      {
        question: "What are the most common reasons visitors are turned away at prison?",
        answer: "The most common reasons are dress code violations, not being on the approved visitor list, expired or missing identification, and arriving during a facility lockdown or count. Call the facility the morning of your visit to confirm visits are proceeding and to verify current dress code requirements before making the trip.",
      },
      {
        question: "Can I appeal if I was denied entry to a prison visit?",
        answer: "Yes. You have the right to receive written notification explaining why your visit was denied. Write a formal appeal letter to the Warden or Visiting Coordinator explaining why the denial was incorrect and submit it within the facility appeal deadline, typically ten business days. If the facility does not resolve the appeal, escalate to the state Department of Corrections inspector general or ombudsman.",
      },
      {
        question: "What happens if there is a lockdown during my visit?",
        answer: "A lockdown or facility count can end a visit in progress or prevent new visitors from entering. Staff will instruct visitors to leave the visiting area immediately during a lockdown. There is no advance notice given to visitors. If your visit was cut short due to a lockdown, contact the facility about rescheduling. Some facilities provide makeup visits for visits terminated by facility-initiated lockdowns.",
      },
      {
        question: "Do I need special documentation to bring a child who is not mine to a prison visit?",
        answer: "Many facilities require a notarized letter from the child's legal guardian authorizing the visit if the accompanying adult is not the parent. Requirements vary by facility. Contact the facility before your visit to confirm exactly what documentation is needed for minor visitors who are not in your legal custody.",
      },
      {
        question: "What should I do if I was turned away for a dress code issue I did not expect?",
        answer: "Document the date, time, officer name if provided, and the specific item or reason given for the denial. If you were willing to make an adjustment but were still denied, note this. Write a formal appeal to the Warden or Visiting Coordinator referencing these details. In future visits, call ahead to confirm dress code requirements and bring a change of clothes in your vehicle as a backup.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-10-12",
    seoTitle: "How JPay Works: Stamps, Messaging, Money Transfer, Video",
    seoDescription: "Complete guide to JPay for families - how to create an account, buy stamps, send messages and photos, transfer money, and schedule video visits at state",

    intro: [
      "JPay is a digital communication and money transfer service for families of incarcerated people at state prisons and county jails across the United States. If you are asking what JPay is, the short answer is this: JPay lets you send messages, photos, and money to someone in a state prison, and schedule video visits from home. JPay is not a phone call service. JPay is owned by Aventiv Technologies, the same parent company that owns Securus Technologies.",
      "JPay is not the same as CorrLinks. CorrLinks is the only approved messaging platform for federal Bureau of Prisons facilities. JPay serves state prisons only. If your loved one is in a federal prison, you need CorrLinks, not JPay. If they are in a state prison, you most likely need JPay. Search the facility name in our directory to confirm which provider serves that location.",
      "Creating a JPay account is completely free at jpay.com or through the JPay mobile app on iOS and Android. You pay only when you use services such as purchasing stamps to send messages or depositing money to the inmate trust account. JPay serves over 35 states and more than 1,000 correctional facilities making it the most widely used state prison communication platform in the United States.",
    ],

    sections: [
      {
        heading: "What Is JPay and Which Facilities Use It",
        body: [
          "JPay is a privately held inmate communication company that contracts with state departments of corrections to provide messaging, money transfers, video visitation, and tablet-based services to incarcerated people and their families. JPay is owned by Securus Technologies.",
          "JPay serves facilities in over 35 states including Florida, Georgia, Michigan, Colorado, Indiana, and many others. The services available through JPay vary by state and facility. Not every JPay facility offers every service - messaging may be available where video visits are not, and vice versa.",
          "JPay does not serve federal Bureau of Prisons facilities. Federal inmates use CorrLinks for messaging. If you are unsure whether your loved one's facility uses JPay, search our facility directory or visit jpay.com and search by the inmate name and state.",
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
          "Log in to your JPay account and go to the video section if it is available for your loved one's facility. Not all JPay facilities offer video visitation. If the video option does not appear on your dashboard, the facility does not currently offer this service.",
          "Select an available date and time from the scheduling calendar. Review the cost and enter your payment information. You will receive a confirmation of the scheduled visit.",
          "At the scheduled time, log in to JPay on your computer or through the JPay app on your smartphone or tablet. Make sure your camera and microphone are working before the visit begins. Join the call at the scheduled time and wait for the inmate to connect from the facility terminal.",
          "JPay video visits typically cost between $7.50 and $12.99 per session depending on the facility. Sessions are usually 20 to 30 minutes long. All video visits are recorded and monitored by facility staff.",
        ],
      },
      {
        heading: "Common JPay Problems and How to Fix Them",
        body: [
          "JPay has a 1.8 star rating from hundreds of consumer reviews, with the most common complaints involving stamps not appearing after purchase, money transfers not credited, video visits freezing or dropping, and difficulty reaching customer service. Knowing these issues in advance helps you avoid them and resolve them faster when they occur.",
          "If you purchased stamps and they are not showing in your account, do not purchase again immediately. Wait 30 minutes and refresh your account. If stamps still do not appear, contact JPay customer service with your transaction confirmation number and the exact time of purchase. Keep all purchase receipts in your email until you confirm the stamps are in your account.",
          "If you sent money and it was not credited to the inmate account, check whether the funds are being held in a pending or review status. Money held in a hold account is not lost but requires contacting JPay to release it. If JPay customer service does not resolve the issue, contact your bank to dispute the transaction and provide your JPay confirmation number as documentation.",
          "JPay video visits are consistently reported as the most frustrating service. Common problems include the visit freezing, dropping connection, audio cutting out, and the platform redirecting users to download plugins repeatedly. Before every scheduled visit, test your camera and microphone, use a wired internet connection if possible, and close all other applications. If a visit fails due to a JPay technical issue rather than your connection, contact customer service within 24 hours to request a credit.",
        ],
      },
      {
        heading: "JPay Stamp Costs and How to Save Money",
        body: [
          "Stamp prices vary by state but families consistently report that the cost adds up quickly when messaging regularly. A standard text message requires one stamp costing between $0.33 and $0.47 depending on the state. Photo attachments require an additional stamp per photo. Video messages called VideoGrams cost four stamps each for a short clip, which families report feels excessive for the quality delivered.",
          "To reduce stamp costs, buy stamps in larger bundles. The cost per stamp decreases as the bundle size increases. If you are messaging regularly, purchasing the largest available bundle gives you the lowest per-message cost. Stamps do not expire so there is no downside to buying in bulk.",
          "Some states have negotiated lower stamp prices through their DOC contracts with JPay. California, New York, and other high-population states may have different pricing than smaller states. Check the stamp purchase page in your JPay account to see the exact price per stamp for your loved one's specific facility rather than relying on general estimates.",
          "JPay charges a cash advance fee when families use a credit card to purchase stamps or send money. This is because JPay transactions are classified as cash advances by some credit card companies, triggering additional fees that JPay does not always clearly disclose. Using a debit card instead of a credit card avoids this cash advance classification and the associated fees.",
        ],
      },
      {
        heading: "What To Do When JPay Customer Service Does Not Help",
        body: [
          "JPay customer service is frequently cited as a major frustration. The 24-hour phone line often routes to automated systems with no option to reach a live person. When you cannot get resolution through standard customer service channels, there are escalation options available.",
          "File a complaint with the Better Business Bureau at bbb.org. JPay is registered with the BBB and complaints filed there receive a formal response. The BBB complaint process has resulted in resolutions for many families who could not get answers through JPay directly.",
          "Contact your state Department of Corrections. The DOC contracts with JPay and has leverage over the provider that individual families do not have. A complaint filed with the DOC communications office about ongoing JPay failures may result in faster resolution than a direct complaint to JPay.",
          "If JPay took money from your account and did not deliver the service, you can dispute the charge with your bank or credit card company. Provide your JPay confirmation number, the date of the transaction, and documentation that the service was not delivered. Banks generally side with consumers in clear cases of non-delivery.",
        ],
      },
      {
        heading: "JPay Reply Notifications: How to Know He Replied",
        body: [
          "JPay does not reliably tell you when a reply arrives. Many families report no inbox, no notification, and no obvious indicator that the inmate responded. If you are waiting on a reply, do not assume silence means no answer.",
          "The practical fix is to check your inbox manually and regularly. Log in to your JPay account on the website or app and open the inbox or message history. Replies appear there even when no notification was ever sent.",
          "On the inmate side, your loved one is notified through the facility kiosk or tablet when a new message arrives, so they generally know you wrote. The notification gap is mostly on the outside contact side.",
          "If you consistently receive no notifications at all, check your account notification settings and make sure the email address on file is one you actually check. Also check your spam folder, since JPay mail is sometimes filtered.",
        ],
      },
      {
        heading: "Videograms That Never Arrived: No Resend, No Refund",
        body: [
          "Videograms, the short video messages you can send through JPay, have a documented failure problem. Families report recording a videogram, sending it, and the video failing during processing with no way to retry. In some cases the recorded video was simply deleted by the program after the failure.",
          "When this happens, JPay typically offers neither a resend nor a refund for the failed videogram. The fee for the video is lost along with the recording, and support responses on this issue are inconsistent.",
          "To reduce the risk, record shorter videograms and send them when your connection is stable. If a videogram fails, document the date, time, and what happened, and contact JPay support with your transaction details to ask for a credit. Keep expectations modest, since refunds for failed videograms are rarely granted.",
        ],
      },
      {
        heading: "Buy JPay Stamps by Phone or Kiosk Without a Computer",
        body: [
          "You do not need a computer to buy JPay stamps. JPay customer service can take stamp purchases over the phone, which is useful if you do not have reliable internet access or struggle with the website.",
          "Have your JPay account email address, the inmate name and ID number, and your payment card ready before you call. Phone purchases go through the same stamp system as online purchases, so the stamps land in the same account.",
          "Facility lobby kiosks are another no-computer option. Many facilities with JPay service have kiosks where visitors can purchase stamps and other services during visits. Kiosk availability varies by facility.",
          "Note that JPay support hold times can be long, so call well before you need the stamps. If phone support cannot complete the purchase, ask for the specific reason and a reference number rather than hanging up.",
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
      "Buy stamps in larger bundles for a lower per-stamp cost. Stamps do not expire so bulk purchasing saves money over time.",
      "Use a debit card instead of a credit card to avoid cash advance fees that some credit card companies charge on JPay transactions.",
      "If a JPay video visit fails due to a technical issue on the platform side, contact customer service within 24 hours to request a credit.",
      "If JPay customer service does not resolve your issue, file a complaint with the Better Business Bureau or your state Department of Corrections.",
      "Keep all transaction confirmation numbers until you confirm stamps and money transfers have been received.",
    ],

    faq: [
      {
        question: "How do I set up a JPay account?",
        answer: "Go to jpay.com, enter the state and the inmate correctional ID number, and select your loved one from the results. Then create your free account by entering your name, email address, and a password. Account creation is free and takes only a few minutes.",
      },
      {
        question: "How much do JPay stamps cost?",
        answer: "Stamp prices vary by state and bundle size. Stamps typically cost between $0.09 and $0.47 each. Larger bundles cost less per stamp. Check the buy stamps section of your JPay account to see current pricing for your loved one's facility.",
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
      {
        question: "Why did my JPay stamps disappear after purchase?",
        answer: "Wait 30 minutes and refresh your account before assuming the stamps are lost. If they still do not appear, contact JPay customer service with your transaction confirmation number and purchase time. Do not purchase stamps again until the issue is resolved, as you may end up paying twice for the same stamps.",
      },
      {
        question: "Can I get a refund from JPay for a failed video visit?",
        answer: "Yes, if the video visit failed due to a JPay technical issue rather than your own connection or equipment. Contact JPay customer service within 24 hours of the failed visit with your confirmation number and a description of what happened. JPay has issued credits and refunds for documented technical failures. If customer service does not help, file a complaint with the Better Business Bureau.",
      },
      {
        question: "Why is JPay charging me a cash advance fee?",
        answer: "Some credit card companies classify JPay transactions as cash advances rather than standard purchases, triggering additional fees that JPay does not always disclose upfront. Using a debit card instead of a credit card avoids this classification. If you were charged a cash advance fee you were not informed about, contact your credit card company and JPay to dispute the unexpected charge.",
      },
      {
        question: "What do I do if JPay took my money but the inmate never received it?",
        answer: "Check your account for any pending or hold status on the transfer. Contact JPay customer service with your confirmation number. If the funds are in a hold account they may be released after verification. If JPay does not resolve the issue, contact your bank to dispute the transaction and provide your JPay confirmation as documentation. You can also file a complaint with your state Department of Corrections.",
      },
      {
        question: "How do I contact a real person at JPay customer service?",
        answer: "Call the JPay customer service number listed on jpay.com. If the automated system does not connect you to a live agent, try calling at off-peak hours such as early morning. You can also submit a written support ticket through your JPay account. For unresolved issues, file a formal complaint with the Better Business Bureau at bbb.org or contact your state Department of Corrections.",
      },
      {
        question: "What is the difference between JPay and CorrLinks?",
        answer: "JPay serves state prisons across more than 35 states for messaging, money transfers, video visits, and tablet services. CorrLinks is the only approved messaging platform for federal Bureau of Prisons facilities. These two platforms do not overlap. If your loved one is in a state prison use JPay. If they are in a federal prison use CorrLinks. Using the wrong platform means your messages will never reach the inmate.",
      },
      {
        question: "What does JPay mean and who owns it?",
        answer: "JPay stands for Jail Pay and was founded in 2002 originally as a payments company before expanding into messaging and tablets. JPay is owned by Aventiv Technologies, the same parent company that owns Securus Technologies. Despite being owned by the same parent company, JPay and Securus operate as separate platforms with separate accounts serving different services at correctional facilities.",
      },
      {
        question: "Can I do a JPay video visit on my phone?",
        answer: "Yes. JPay video visits can be done on a smartphone using the JPay mobile app available for iOS and Android. Download the app, log in to your JPay account, and schedule a video visit from your device. You need a stable internet connection and a working camera. All video visits are recorded and monitored by facility staff.",
      },
      {
        question: "What is a JPay cash advance fee and how do I avoid it?",
        answer: "A JPay cash advance fee is a charge applied when you use a credit card to deposit money and your card issuer classifies the transaction as a cash advance rather than a purchase. Cash advance fees are charged by your bank or credit card company, not by JPay. To avoid this fee, use a debit card instead of a credit card when making JPay deposits. Debit card transactions are not classified as cash advances.",
      },
      {
        question: "Does JPay accept Cash App?",
        answer: "JPay does not directly accept Cash App as a payment method. JPay accepts debit cards, credit cards, and money orders. If you want to use Cash App funds, transfer the money from your Cash App balance to a linked debit card first, then use that debit card to fund your JPay account. Always verify current accepted payment methods at jpay.com as they may change.",
      },
      {
        question: "How long does JPay take to process money for inmates?",
        answer: "JPay money transfers to inmate trust accounts are typically processed within two business days for online and app deposits. Deposits made by phone are also typically processed within two business days. Mailed money orders take longer, usually five to seven business days after JPay receives them. Processing times can be longer around holidays or if there are facility lockdowns.",
      },
      {
        question: "What does offender mean in JPay?",
        answer: "In JPay, the term offender refers to the incarcerated person you are trying to communicate with. When you search for someone on JPay, the search field is labeled offender search. This is standard correctional industry terminology used by JPay and most correctional systems. Enter the incarcerated person's name and facility in the offender search to add them to your JPay account.",
      },
      {
        question: "What is a JPay kiosk?",
        answer: "A JPay kiosk is a self-service terminal located inside correctional facilities that allows inmates to access JPay services including reading messages, sending replies, viewing photos, and managing their account. Kiosks are the main way inmates at facilities without tablets interact with JPay. Some facilities have kiosks in common areas while others have them in housing units. Availability and hours depend on the specific facility.",
      },
      {
        question: "Is JPay legitimate and safe to use?",
        answer: "Yes. JPay is a legitimate company that has operated since 2002 and is the most widely used state prison communication platform in the United States. JPay is owned by Aventiv Technologies and serves over 35 states. JPay uses standard security measures for online transactions. Some families report billing issues and delayed processing. Always keep transaction receipts and contact JPay customer service at jpay.com if there are problems.",
      },
      {
        question: "How do I find the inmate ID number for JPay?",
        answer: "The inmate ID number for JPay is the DOC number assigned by the state Department of Corrections. Find it using the state DOC offender search tool for the state where your loved one is incarcerated. For example, use tdcj.texas.gov for Texas, cdcr.ca.gov for California, or search our facility directory and follow the inmate search link for the specific state. You can also ask your loved one to provide their DOC number directly.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-10-12",
    seoTitle: "How CorrLinks Works: Setup, Invitation Process, Costs and",
    seoDescription: "Complete guide to CorrLinks for families of federal inmates - how to receive your invitation, create an account, send messages, what it costs, and what rules",

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
      {
        heading: "CorrLinks Not Working: Common Problems and Fixes",
        body: [
          "CorrLinks has a 1.7 star rating from hundreds of consumer reviews with the most common complaints involving login failures, the app not syncing with the server, messages not appearing in the inbox despite notifications, and difficulty reaching customer service. These issues are widely reported and knowing how to handle them saves significant frustration.",
          "If CorrLinks shows a communication error or cannot connect to the server, the first step is to clear your browser cache and cookies and try again. On the mobile app, delete the app completely and reinstall it fresh. Many users report that reinstalling resolves persistent sync failures that other troubleshooting steps cannot fix. If the problem continues for more than 24 hours, check issitedownrightnow.com or a similar service to see if CorrLinks is experiencing a widespread outage.",
          "If you received a notification that a new message arrived but the message is not visible in your inbox, this is a known sync issue with the CorrLinks app. Log out of the app, clear the cache, and log back in. If the message still does not appear, switch to the CorrLinks website at corrlinks.com through a browser rather than the app. Messages are sometimes visible on the website when the app fails to sync them.",
          "If you cannot log in at all and the site shows an Argo tunnel error or a security block, try accessing corrlinks.com directly by typing the full address including https in your browser rather than clicking a saved link. Saved links sometimes point to a version of the URL that redirects incorrectly. Try both https://corrlinks.com and https://www.corrlinks.com to see which one loads.",
        ],
      },
      {
        heading: "CorrLinks Premier Account: Is It Worth It",
        body: [
          "CorrLinks offers a Premier Account subscription that costs approximately $6 per year for outside contacts. The Premier Account provides real-time push notifications when you receive a new message, which means you do not have to manually check the inbox to know when a reply arrives. Without the Premier Account, you must log in and check your inbox manually to see if new messages are waiting.",
          "Users report significant frustration when Premier Account payments are processed but the account does not reflect the subscription status. If you paid for a Premier Account and it still shows a zero balance or expired status, contact CorrLinks customer service immediately with your payment confirmation. Keep the email receipt from your payment as documentation.",
          "Whether the Premier Account is worth the cost depends on how actively you message. If you exchange messages daily or near-daily, the notification feature saves time and ensures you reply quickly. If you message less frequently, manually checking the inbox is manageable and the basic free account is sufficient. The $6 annual cost is relatively minor but the value depends entirely on whether the notifications function reliably on your device.",
        ],
      },
      {
        heading: "What To Do When CorrLinks Customer Service Does Not Help",
        body: [
          "CorrLinks customer service is consistently cited as one of the platform's biggest weaknesses. Users report difficulty reaching a live person, unanswered support tickets, and billing disputes that are not resolved despite multiple contacts. When standard customer service channels fail, there are escalation options.",
          "Submit a written complaint through your CorrLinks account rather than relying on phone support. Written tickets create a paper trail that is useful if you need to escalate further. Save copies of every support ticket you submit and every response you receive.",
          "If CorrLinks charged you for a Premier Account or a service that was not delivered, contact your bank or credit card company to dispute the charge. Provide your CorrLinks confirmation email, the date of the charge, and documentation that the service was not delivered or was not functional. Banks generally resolve clear cases of non-delivery in favor of the consumer.",
          "You can also file a complaint with the Federal Bureau of Prisons if the service disruption is affecting your ability to communicate with a federal inmate. The BOP contracts with CorrLinks and has leverage over the provider. Contact the specific facility and ask to speak with the Communications Coordinator about ongoing CorrLinks issues affecting family communication.",
        ],
      },
      {
        heading: "CorrLinks 10 Contact Limit and What It Means for Families",
        body: [
          "Under a rule introduced in late 2024 that remains in effect, the Bureau of Prisons limits CorrLinks accounts to a maximum of 10 outside contacts per inmate at one time. Before this change, inmates could have more than 10 approved contacts. If an inmate has already reached the 10-contact limit, they cannot add new contacts until an existing one is removed.",
          "If you submitted a contact request and have not received your invitation email after 48 hours, the 10-contact limit may be the reason. Ask your loved one to log in to their TRULINCS terminal and check their contact list. If they are at the limit, they will need to remove an inactive contact before your request can be processed.",
          "The 10-contact limit affects extended families and support networks more than immediate family members. Inmates who had large networks of pen pals, advocacy contacts, or distant family members on CorrLinks may have had to reduce their contact list to comply with the new rule. If you were previously connected and the connection was dropped without explanation, this policy change may be the cause.",
        ],
      },
      {
        heading: "CorrLinks Invite Code Timeline and Expiry",
        body: [
          "Your CorrLinks identification code does not last forever. Families report codes becoming invalid after roughly 10 days when registration was never completed. If you wait too long after receiving the invitation, you will need a new one.",
          "There is no way to extend an expired code from the CorrLinks website. The inmate must submit a fresh contact request through the TRULINCS terminal, which generates a new invitation email with a new code.",
          "Register within a day or two of receiving the invitation to avoid expiry entirely. For the full step-by-step fix process, see our guide on what to do when the CorrLinks invite code is not working.",
        ],
      },
      {
        heading: "What To Do When the Password Reset Email Never Arrives",
        body: [
          "If you forgot your CorrLinks password, go to the password reset page at corrlinks.com/ForgotPassword.aspx. Enter the exact email address you registered with, complete the reCAPTCHA, and click Next. CorrLinks sends a reset link to that email address.",
          "If the reset email does not arrive, check your spam and junk folders first. Then verify you entered the registered address exactly. If you registered with a different address than the one you are entering, the reset email is going somewhere you are not checking.",
          "If the reset link expires before you use it, request a new one rather than trying the old link repeatedly. Old reset links stop working once a newer one is generated.",
        ],
      },
      {
        heading: "CorrLinks Video Visit Invitations Expire in 48 Hours",
        body: [
          "CorrLinks video visit invitations expire 48 hours after they are issued. If you do not accept the invitation within that window, it lapses and the visit cannot be scheduled from it.",
          "Accept video invitations as soon as they arrive. If an invitation expired before you could act, ask the inmate to send a new video visit invitation from their TRULINCS terminal.",
          "Do not confuse the video invitation with the messaging invitation. They are separate invitations with separate expiry rules. An active messaging connection does not keep a video invitation alive past its 48-hour window.",
        ],
      },
      {
        heading: "Email Alerts When an Inmate Messages You",
        body: [
          "Without a Premier Account, CorrLinks does not push notifications to your phone. But you can turn on email alerts so you know when a new message is waiting. Log in to corrlinks.com with your account.",
          "Click Account Management, then click Manage My Inmate List. Find the inmate name in your list and check the box under the email alert column next to their name. This turns alerts on for that specific inmate.",
          "The alerts go to the email address you registered with, not to a different address. If you use multiple email accounts, make sure you are checking the one tied to your CorrLinks login. Alerts tell you a message is waiting. You still need to log in to read it.",
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
      "CorrLinks has a 1.7 star rating from hundreds of reviews. The most common issues are login failures, app sync errors, and billing problems.",
      "If the CorrLinks app shows a communication error, delete and reinstall the app. Switch to the website at corrlinks.com if the app continues to fail.",
      "CorrLinks limits inmates to 10 outside contacts at one time under a rule introduced in 2024, still in effect. If your invitation has not arrived, the inmate may need to remove an inactive contact first.",
      "If CorrLinks charged you for a service that was not delivered, dispute the charge with your bank and provide your confirmation email as documentation.",
      "Write your messages in a separate document before pasting into CorrLinks. The platform can log you out unexpectedly and unsaved messages are permanently lost.",
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
      {
        question: "Why is CorrLinks not working or showing a communication error?",
        answer: "Clear your browser cache and cookies and try again. On the mobile app, delete and reinstall the app completely. If the problem persists, check issitedownrightnow.com to see if CorrLinks is experiencing a widespread outage. Try accessing corrlinks.com directly through a browser rather than the app during outages.",
      },
      {
        question: "I got a notification that I have a new message but it is not in my inbox. What do I do?",
        answer: "This is a known sync issue with the CorrLinks app. Log out, clear the app cache, and log back in. If the message still does not appear in the app, try accessing your inbox through the corrlinks.com website in a browser. Messages are sometimes visible on the website when the app fails to sync them properly.",
      },
      {
        question: "Why has my CorrLinks Premier Account not activated after payment?",
        answer: "Contact CorrLinks customer service immediately with your payment confirmation email. Keep the receipt as documentation. If customer service does not resolve the issue and the charge was made to your card, contact your bank to dispute the charge and provide your confirmation as evidence of non-delivery.",
      },
      {
        question: "Why did CorrLinks drop my connection with an inmate I was already messaging?",
        answer: "Several things can cause an existing connection to drop. The inmate may have removed you from their contact list. The facility may have placed a communication restriction. The 10-contact limit per inmate, in effect as of late 2024 and continuing through 2026, may have required them to remove some contacts. Contact the facility directly to find out if a restriction is in place.",
      },
      {
        question: "Can I use CorrLinks on my phone?",
        answer: "Yes. CorrLinks has a free mobile app for iOS and Android. A Premier Account subscription is required to use the full app with push notifications. The app has mixed reviews and users frequently report sync issues. If the app is not working reliably, the corrlinks.com website accessed through your phone browser is an alternative that some users find more stable.",
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
    title: "Best Inmate Text Service in 2026: JPay, CorrLinks, ConnectNetwork Compared",
    excerpt: "Compare the top inmate messaging platforms including JPay, CorrLinks, ConnectNetwork, and GettingOut to find the right option for your situation.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-10-12",
    seoTitle: "Best Inmate Text Service (2026): Top 5 Compared",
    seoDescription: "Best inmate text service guide for 2026: JPay, CorrLinks, ConnectNetwork, GettingOut and TextBehind compared. Find which platform your facility uses.",

    intro: [
      "The best inmate messaging service is whichever one your loved one facility uses - you cannot choose freely. Every correctional facility has a contract with one messaging provider, and all communication goes through that provider only. This guide compares the four main platforms so you know exactly what to expect before you sign up.",
      "The platforms compared in this guide are JPay, CorrLinks, ConnectNetwork, GettingOut, and TextBehind. Each serves a different type of facility, and understanding which one covers your situation will save you time and frustration.",
    ],

    sections: [
      {
        heading: "Best Inmate Text Services Compared",
        body: [
          "The five main inmate text services are JPay, CorrLinks, ConnectNetwork, GettingOut, and TextBehind. JPay leads for state prisons, CorrLinks is the only option for federal prisons, ConnectNetwork and GettingOut cover county jails, and TextBehind works anywhere physical mail is accepted. The right choice depends entirely on which platform your loved one's facility uses, so the sections below break down each service in detail.",
        ],
      },
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
          "Messaging costs $0.30 per message, paid by the inmate from their trust account. Outside contacts pay nothing per message. Despite its limitations, CorrLinks is reliable and widely used across all 122 federal facilities.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Set Up Inmate Email: JPay, CorrLinks, ConnectNetwork",
    seoDescription: "Step-by-step guide to setting up inmate email - how to create an account on JPay, CorrLinks, or ConnectNetwork, find your loved one, get approved, buy credits",

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
      {
        heading: "Troubleshooting Common Account Setup Problems",
        body: [
          "The most common problem during account setup is not receiving the invitation email from CorrLinks. Before asking the inmate to resend the invitation, check your spam and junk mail folder thoroughly. Add web@corrlinks.com to your email contacts or safe sender list to prevent future emails from being filtered. If the invitation is not in spam, ask the inmate to confirm the exact email address they entered, including any numbers or punctuation. A single wrong character means the invitation was sent to a non-existent address.",
          "On JPay, a common setup problem is not being able to find the inmate after creating an account. The most frequent cause is selecting the wrong state. Confirm the state where the inmate is currently housed, not the state where they were convicted or the state where you live. Also confirm the inmate ID number directly with the facility or the inmate rather than using a court case number, which is a different identifier.",
          "GettingOut uses two different connection models depending on the facility. At some facilities you can search for the inmate directly after creating an account. At others, the inmate must send you an invitation from the facility kiosk before you can connect. If you cannot find the inmate after creating a GettingOut account, contact the facility to confirm which connection model they use before assuming something is wrong with your account.",
          "The safest approach for any new platform is to create the account, verify it, add your contact, then make one small initial purchase and send one short test message. Once you confirm the test message is delivered, you can scale up purchases and messaging frequency. This approach prevents the common mistake of loading a large balance on the wrong platform or an account that is not correctly configured.",
        ],
      },
      {
        heading: "JPay Account Setup Tips for 2026",
        body: [
          "JPay updated its mobile app interface in late 2025. Users setting up accounts in 2026 may notice different button labels and navigation than older guides describe. The core process remains the same: select state, enter inmate ID, create your profile, verify your email, then purchase stamps before composing your first message. If the app interface looks different from instructions you have seen elsewhere, look for equivalent functions under different labels rather than assuming something is broken.",
          "Avoid switching between the JPay app and the JPay website during your first purchase. Users report that switching mid-transaction can cause the stamp purchase to fail or to be charged without the stamps appearing in the account. Complete the entire purchase process within one interface before switching.",
          "Some JPay facilities require the inmate to approve you as a contact before messages go through. After sending your first message you may see it show as sent but not delivered. Check whether the facility requires inmate contact approval as a first step. If approval is required, the inmate needs to accept your contact request from the facility kiosk before your messages can be received.",
          "Credit card transactions on JPay may be classified as cash advances by some card issuers, triggering additional fees that JPay does not always disclose upfront. Use a debit card for JPay stamp purchases and money transfers to avoid unexpected cash advance fees from your card issuer.",
        ],
      },
      {
        heading: "CorrLinks Unavailable Message: What It Means",
        body: [
          "If you try to send a CorrLinks message and receive a notification that the inmate is unavailable or does not have access to messaging, there are several possible reasons. The inmate may have lost messaging privileges due to a disciplinary action at the facility. They may have been transferred to a different facility and are in the process of re-registering in the TRULINCS system at the new location. Their TRULINCS access may also be temporarily suspended during a facility lockdown or administrative review.",
          "When a federal inmate transfers to a new facility, they typically need to re-register in the TRULINCS system at the new location. During this re-registration period, which usually takes a few days to a week after arrival, your connection may show as unavailable even though the underlying contact relationship remains active. In most cases you do not need to submit a new contact request. The connection resumes automatically once the inmate completes re-registration.",
          "If the unavailable status persists for more than two weeks after a confirmed transfer, contact the new facility records office to confirm that the inmate has TRULINCS access at that location. Not all BOP facilities have identical TRULINCS configurations and some program levels have restricted computer access. If TRULINCS access is permanently restricted at the new facility, physical mail becomes the primary communication option.",
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
      "Add web@corrlinks.com to your safe sender list before the inmate sends your invitation to prevent the email from going to spam.",
      "On JPay, always confirm the inmate current state and facility-assigned ID number before searching. Court case numbers and booking numbers are different from the inmate ID.",
      "Complete JPay stamp purchases entirely within one interface. Switching between the app and website mid-transaction can cause purchase failures.",
      "Use a debit card for JPay transactions to avoid cash advance fees that some credit card issuers charge on JPay purchases.",
      "If CorrLinks shows an inmate as unavailable after a transfer, wait one week before contacting support. Re-registration in the new facility TRULINCS system usually resolves within a few days.",
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
      {
        question: "I created a CorrLinks account but never received an invitation. What should I do?",
        answer: "Check your spam and junk mail folder first. Add web@corrlinks.com to your safe sender list. Ask the inmate to confirm the exact email address they entered, including any numbers or punctuation. As of late 2024, CorrLinks limits inmates to 10 outside contacts at one time. If the inmate is at the limit, they cannot send new invitations until an existing contact is removed. Ask them to check their contact list if the invitation still does not arrive after 48 hours.",
      },
      {
        question: "Why can I not find the inmate when setting up my JPay account?",
        answer: "The most common causes are selecting the wrong state or using the wrong ID number. Confirm the state where the inmate is currently housed, not where they were convicted. Confirm the facility-assigned inmate ID number directly with the inmate or the facility. Court case numbers and booking numbers are different from the inmate ID and will not work in JPay search.",
      },
      {
        question: "What does it mean when CorrLinks says the inmate is unavailable?",
        answer: "The inmate may have lost messaging privileges due to a disciplinary action, or they may have recently transferred to a new facility and are in the process of re-registering in the TRULINCS system. Re-registration after a transfer typically takes a few days to one week. If unavailable status persists for more than two weeks after a confirmed transfer, contact the new facility records office to confirm that TRULINCS access is available at that location.",
      },
      {
        question: "GettingOut says I need an invitation to connect. How does this work?",
        answer: "Some GettingOut facilities use an invitation model where the inmate must send you a connection request from the facility kiosk before you can message them. Create your GettingOut account first, then ask your loved one to search for you by name or email and send a connection request. You will receive a notification to accept it. Other GettingOut facilities allow you to search for the inmate directly. Contact the facility to confirm which model they use if you are unsure.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How ConnectNetwork Works: AdvancePay, Messaging, Video",
    seoDescription: "Complete guide to ConnectNetwork by GTL for families - how to create an account, set up AdvancePay for phone calls, send messages, schedule video visits, and",

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
      {
        heading: "Important ConnectNetwork Changes in 2025 and 2026",
        body: [
          "Several major state correctional systems made provider changes affecting ConnectNetwork families in 2025 and 2026. California CDCR awarded a new telecom contract to Securus on February 21, 2025, following a court ruling that vacated the prior GTL ConnectNetwork contract. The transition rolled out across CDCR facilities from September 2025 through February 2026, moving phone, video, tablet, and messaging services away from GTL ConnectNetwork. California state prison families now need to use Securus for phone calls. Minnesota DOC moved to a free calling model, meaning all phone calls are now free of charge and families no longer need to fund prepaid calling accounts.",
          "New Jersey completed a full transition from JPay to ViaPath for both messaging and money transfers. JPay payment services for New Jersey ended August 1, 2026. New Jersey families must now use ViaPath through ConnectNetwork for all deposits. The NJDOC also announced a 22 percent reduction in domestic phone call rates, bringing rates to $0.034 per minute as of May 2025.",
          "Effective June 1, 2026, ConnectNetwork AdvancePay accounts become inactive after 180 consecutive days of non-use. Once inactive, you have an additional 90 days to request a refund by calling 877-650-4249. After the 270-day total window, any remaining balance is automatically converted to audio calling minutes in ViaPath's Free Calling Program and is no longer available as a cash refund. Set up account activity reminders if you have a balance but are not using the account regularly.",
        ],
      },
      {
        heading: "ConnectNetwork Common Problems and How to Fix Them",
        body: [
          "The ConnectNetwork app has received consistently low ratings from users, with the majority of feedback citing frequent crashes, login problems, and inability to add funds or contacts. If the app crashes or will not load, delete and reinstall the app completely rather than simply closing and reopening it. Make sure you are running the most recent version. The app received a significant update in May 2025. Outdated versions are more likely to experience compatibility and login issues.",
          "A common complaint from families is being blocked from making deposits for ten days at a time without explanation. This automatic block is typically triggered by an unusual transaction pattern flagged by the ConnectNetwork fraud detection system. If you are blocked from deposits, contact ConnectNetwork customer service at the number listed on connectnetwork.com. Do not attempt to make deposits using multiple payment methods or devices during the block period as this can extend the block duration.",
          "Billing disputes have been reported by users in 2026, including cases where a deposit such as $25 was charged to a payment method but never credited to the ConnectNetwork account. If you see a charge on your bank statement that does not match your account balance, file a dispute with ConnectNetwork customer service immediately and provide bank or card verification showing the charge. Also file a chargeback with your bank if the issue is not resolved. ConnectNetwork is owned by TouchPay LLC as part of ViaPath Technologies.",
          "Photo rejections are a recurring frustration. Users report inconsistent enforcement of photo rules between facilities, with photos accepted at one location but rejected at another without clear explanation. When a photo is rejected, you do not automatically receive a refund for the credit used. Contact ConnectNetwork customer service with the rejection notice and request a credit for content that was rejected due to a facility policy disagreement rather than a clear rule violation.",
        ],
      },
      {
        heading: "ConnectNetwork Customer Service Contacts for 2026",
        body: [
          "ConnectNetwork is operated by GTL, now part of ViaPath Technologies. The company operates under multiple brand names including ConnectNetwork, GettingOut, Telmate, TouchPay, GTL Financial Services, AdvancePay, and ViaPath Visitor Web. When contacting customer service, have your account information, inmate name, facility name, and any transaction confirmation numbers ready before calling.",
          "For AdvancePay automated payments, call 1-800-483-8314. For Trust Fund automated payments, call 1-888-988-4768. For PIN Debit automated payments, call 1-855-706-2445. For visitation scheduling problems, call 1-855-208-7349 or email visitorsupport@gtl.net. For refund requests on inactive accounts, call 877-650-4249.",
          "If standard customer service does not resolve your issue, escalate by filing a complaint with the Better Business Bureau. ViaPath Technologies has an active BBB profile and responds formally to BBB complaints. A complaint filed with your state attorney general consumer protection office is also effective, particularly for billing disputes involving duplicate charges or funds not credited to the account.",
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
      "California CDCR switched from ConnectNetwork to Securus for phone services in February 2025. California state prison families must now use Securus for phone calls.",
      "Minnesota DOC phone calls are now free. Families with loved ones in Minnesota state prisons no longer need to fund prepaid phone accounts.",
      "ConnectNetwork AdvancePay accounts go inactive after 180 days of non-use as of June 1, 2026. You have 90 additional days to request a refund before the balance is converted.",
      "If the ConnectNetwork app crashes or will not load, delete and reinstall it completely. Make sure you are running the version updated in May 2025 or later.",
      "For ConnectNetwork refund requests on inactive accounts, call 877-650-4249. For visitation scheduling problems, call 1-855-208-7349.",
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
      {
        question: "Does ConnectNetwork still work for California state prisons?",
        answer: "For phone calls, no. California CDCR awarded its telecom contract to Securus effective February 21, 2025. California state prison families must use Securus for phone calls. ConnectNetwork may still handle other services at some California facilities. Contact the specific facility to confirm which providers are currently active for phone, messaging, and money transfers.",
      },
      {
        question: "What happens to my ConnectNetwork AdvancePay balance if I stop using it?",
        answer: "Effective June 1, 2026, AdvancePay accounts go inactive after 180 consecutive days of non-use. Once inactive, you have an additional 90 days to request a refund by calling 877-650-4249. After the full 270-day window, any remaining balance is automatically converted to calling minutes in ViaPath's Free Calling Program and is no longer available as a cash refund. Set a reminder if you have a balance but are not actively using the account.",
      },
      {
        question: "I was charged twice on ConnectNetwork. What do I do?",
        answer: "Contact ConnectNetwork customer service immediately and provide your transaction confirmation emails showing both charges. Also file a chargeback with your bank or credit card issuer and provide the same documentation. ConnectNetwork is owned by TouchPay LLC as part of ViaPath Technologies. If customer service does not resolve the duplicate charge, file a complaint with the Better Business Bureau, where ViaPath Technologies has an active profile and formally responds to complaints.",
      },
      {
        question: "ConnectNetwork blocked me from making deposits. What happened?",
        answer: "This block is typically triggered by an unusual transaction pattern flagged by the fraud detection system. Contact ConnectNetwork customer service to find out why the block was applied and when it will be lifted. Do not attempt to make deposits using multiple payment methods or devices during the block period as this can extend the duration of the restriction.",
      },
      {
        question: "What is the ConnectNetwork customer service number?",
        answer: "For AdvancePay automated payments call 1-800-483-8314. For Trust Fund payments call 1-888-988-4768. For PIN Debit call 1-855-706-2445. For visitation scheduling problems call 1-855-208-7349 or email visitorsupport@gtl.net. For refunds on inactive accounts call 877-650-4249. Have your account information and transaction confirmation numbers ready before calling.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-08-01",
    seoTitle: "Why Prison Phone Calls Are So Expensive: New FCC Rate Caps",
    seoDescription: "Learn why prison phone calls cost so much and how FCC rate caps changed - cut to $0.06 per minute in 2024, then raised to $0.11 per minute in 2025.",

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
          "For interstate calls, calls made between two different states, the FCC has established rate caps that limit how much providers can charge. Under current FCC rules in effect as of 2026, the rate caps limit charges to $0.11 per minute for calls from prisons and $0.13 per minute for calls from jails for interstate calls. These caps replaced the original 2024 reform, which had set the prison rate at $0.06 per minute before the FCC voted in October 2025 to raise it to $0.11 per minute. The FCC also prohibited certain add-on fees for interstate calls.",
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
      {
        heading: "New FCC Rate Caps That Changed Everything",
        body: [
          "In July 2024, the Federal Communications Commission approved landmark rules that dramatically cut inmate phone call rates across the United States. Before these rules, a single 15-minute phone call could cost a family as much as $11.35 at a large jail. Under the 2024 FCC caps, that same call cost just $0.90, and the FCC estimated that families, inmates, and friends would save approximately $386 million every year as a result. However, in October 2025 the FCC voted 2-1 to raise the rate caps again after pushback from the corrections industry and phone providers, so the actual savings families see today are smaller than the FCC originally projected.",
          "The rate caps currently in force, as revised in October 2025, set a maximum of $0.11 per minute for calls at prisons, $0.10 per minute for large jails, $0.12 per minute for medium-sized jails, $0.13 per minute for small jails, and $0.15 to $0.19 per minute for very small jails. These replaced the lower rates set in 2024, which had capped calls at $0.06 to $0.12 per minute across the same facility tiers. These are the maximum rates providers are allowed to charge for interstate calls, calls made between two different states. In-state call rates are also regulated under the expanded FCC authority.",
          "Video call rates were capped for the first time under the 2024 rules, at $0.16 per minute for prisons and between $0.11 and $0.25 per minute for jails depending on size. Before this, video calls were completely unregulated and often priced even higher than voice calls. The October 2025 revision raised these caps as well, to $0.25 per minute for prisons and between $0.19 and $0.44 per minute for jails depending on size. This change affects millions of families who rely on video visits as an alternative to expensive phone calls.",
          "The FCC rules also eliminated many of the additional fees that providers had historically used to increase revenue beyond the per-minute rate. Connection fees, account setup fees, and certain other charges are now prohibited for interstate calls. This means the rate you see per minute is much closer to the actual total cost of the call than it was before the rule changes.",
        ],
      },
      {
        heading: "Why Some Families Are Still Paying High Rates",
        body: [
          "Despite the new FCC rules, some families are still experiencing high costs. There are several reasons this can happen. First, some providers and correctional facilities sought waivers or delays in implementing the new rules, arguing that the rate reductions created financial hardship. The FCC granted some temporary waivers, meaning the new rates may not have taken effect immediately at every facility.",
          "Second, the FCC rules apply to interstate calls, calls between two states, more straightforwardly than to in-state calls. The regulatory process for in-state calls involved additional legal steps and timelines. Some families calling a loved one within the same state may have experienced slower rate reductions depending on their state and facility.",
          "Third, some providers use account fees, payment processing fees, and minimum balance requirements that add to the effective cost even when per-minute rates are reduced. Always read the full fee schedule for your specific provider and facility before adding funds to your account. If you believe you are being charged rates higher than the FCC caps, you can file a complaint directly with the FCC at fcc.gov.",
        ],
      },
      {
        heading: "States and Counties Offering Free or Reduced Cost Calls",
        body: [
          "A growing number of states and counties have gone beyond the FCC minimums and now offer free phone calls to incarcerated people and their families. New York City was one of the first major jurisdictions to eliminate charges for calls from city jails. San Francisco, Los Angeles, and several other counties followed with their own free call programs.",
          "At the state level, several states have passed legislation requiring free or significantly reduced cost calls at state-operated facilities. These programs typically work by having the state government absorb the cost of calls rather than passing it on to families. Advocates argue this model reduces recidivism by keeping family connections stronger and ultimately saves money for the state through reduced reincarceration costs.",
          "To find out whether your loved one's facility offers free or reduced cost calls, contact the facility directly or check the state Department of Corrections website. Free call programs are still relatively uncommon at private facilities and smaller county jails, where the financial incentives to maintain paid call systems remain strong.",
        ],
      },
      {
        heading: "How to File a Complaint If You Are Overcharged",
        body: [
          "If you believe a prison phone provider is charging you rates above the FCC caps, you have the right to file a complaint. The FCC accepts complaints from consumers at fcc.gov/consumers/guides/filing-informal-complaint. You can also contact your state public utilities commission, which may have additional authority over in-state call rates.",
          "When filing a complaint, document the specific charges you were billed, the facility where your loved one is housed, the provider name, and the dates of the calls in question. The more specific your documentation, the more effectively regulators can investigate the issue.",
          "Prison advocacy organizations such as the Prison Policy Initiative and Worth Rises also track provider compliance with FCC rules and can provide guidance on filing complaints. These organizations have been at the forefront of prison phone rate reform and can connect families with additional resources if standard complaint processes do not resolve the issue.",
        ],
      },
      {
        heading: "Practical Tips to Keep Your Phone Costs as Low as Possible",
        body: [
          "Even with improved FCC regulations, the cost of prison phone calls can add up significantly for families who receive calls regularly. Using a prepaid account through the facility phone provider instead of accepting collect calls is the single most effective way to reduce your per-minute cost. Prepaid rates are consistently lower than collect call rates at every provider.",
          "When adding funds to your account, deposit larger amounts less frequently. Most providers charge a flat transaction fee each time you add money, regardless of the amount deposited. Adding $50 once costs the same flat fee as adding $10 five times, but you pay the fee only once with the larger deposit.",
          "Compare the cost of phone calls versus video visits at your specific facility. In some cases video visits are now cheaper per minute than voice calls under the new FCC caps. If your facility offers both options, calculate the actual cost per minute for each before deciding which to use for regular contact.",
          "Some providers offer automatic refill options that trigger when your balance drops below a set amount. This ensures you never miss a call because your balance ran out unexpectedly. Set the minimum threshold high enough that you have a buffer even if the inmate calls more frequently than expected.",
        ],
      },
    ],

    takeaways: [
      "Prison phone calls are expensive because providers pay facilities a commission from call revenue, and those commissions are covered by charging families higher rates.",
      "Under current FCC rules in effect as of 2026, interstate call rates are capped at $0.11 per minute for prisons and $0.13 per minute for jails, after the original 2024 cap of $0.06 was raised by the FCC in October 2025. In-state rates have historically been less regulated.",
      "Additional fees including connection fees, account fees, and payment processing fees can add significantly to the total cost beyond the per-minute rate.",
      "Use a prepaid account rather than collect calls to get the lowest available per-minute rate.",
      "A small number of states and counties have eliminated phone call charges entirely. This number is growing as advocacy efforts continue.",
      "Add money in larger amounts to reduce the impact of per-transaction fees.",
      "Video visits are sometimes cheaper than phone calls and worth comparing at your specific facility.",
      "FCC rules cut prison call rates to $0.06 per minute for prisons and large jails in 2024, reducing a 15-minute call from $11.35 to $0.90. In October 2025 the FCC raised the cap to $0.11 per minute for prisons, so a 15-minute call now costs about $1.65.",
      "Video call rates were capped for the first time in 2024 at $0.11 to $0.25 per minute depending on facility size, then raised in 2025 to a range of about $0.19 to $0.44 per minute.",
      "The FCC originally estimated $386 million in annual savings under the 2024 rate caps, though the October 2025 rate increase reduced those savings for families.",
      "A growing number of states and counties now offer free phone calls from correctional facilities.",
      "If you are being overcharged, file a complaint at fcc.gov or contact your state public utilities commission.",
    ],

    faq: [
      {
        question: "Why do prison phone calls cost so much?",
        answer: "Prison phone providers pay the facility a commission from call revenue in exchange for an exclusive contract. To cover these payments and generate profit, providers charge families higher rates. Families have no choice of provider - they must use whatever company holds the contract with that facility.",
      },
      {
        question: "What is the maximum rate for a prison phone call?",
        answer: "Under current FCC rules in effect as of 2026, interstate prison phone calls are capped at $0.11 per minute for prisons and $0.13 per minute for jails. This followed the original 2024 cap of $0.06 per minute, which the FCC raised to $0.11 in October 2025. These caps apply to calls between states. In-state rates vary by state and are not always subject to the same federal caps, though FCC regulation has been expanding.",
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
        question: "Can I choose a cheaper phone provider for my loved one's facility?",
        answer: "No. Each facility has an exclusive contract with one phone provider. You must use whatever provider holds that contract. You cannot switch providers or negotiate a better rate. The only way rates change is when the facility contract expires and is renegotiated, or when regulators impose new rate caps.",
      },
      {
        question: "What are the new FCC prison phone call rate caps?",
        answer: "The FCC originally capped interstate prison phone call rates in 2024 at $0.06 per minute for prisons and large jails, $0.07 for medium jails, $0.09 for small jails, and $0.12 for very small jails. In October 2025 the FCC voted to raise these caps. The rates currently in force are $0.11 per minute for prisons, $0.10 for large jails, $0.12 for medium jails, $0.13 for small jails, and $0.15 to $0.19 for very small jails. Video calls are now capped at $0.19 to $0.44 per minute depending on facility size, up from the original 2024 range of $0.11 to $0.25.",
      },
      {
        question: "How much does a 15-minute prison phone call cost now?",
        answer: "Under the FCC rules currently in force since the October 2025 rate increase, a 15-minute call from a prison costs approximately $1.65 at the $0.11 per minute rate. Before the original 2024 reform, the same call could cost as much as $11.35. Rates briefly dropped to about $0.90 for a 15-minute call under the 2024 caps before the FCC raised them again in 2025. The exact cost depends on the facility size and whether it is an in-state or interstate call.",
      },
      {
        question: "Are prison phone calls free anywhere in the United States?",
        answer: "Yes. A growing number of cities and counties now offer free phone calls from local jails. New York City, San Francisco, Los Angeles, and other jurisdictions have eliminated charges for calls from their facilities. Some states have also passed legislation requiring free or reduced-cost calls at state prisons. Contact the specific facility to find out if free calls are available.",
      },
      {
        question: "What should I do if I am being charged more than the FCC caps?",
        answer: "Document the charges you were billed including the date, amount, provider name, and facility. File a complaint at fcc.gov or contact your state public utilities commission. Prison advocacy organizations such as the Prison Policy Initiative can also help you navigate the complaint process.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "County Jail vs State Prison: Differences in Communication",
    seoDescription: "Learn the key differences between county jails and state prisons - who is held where, how long stays last, which communication providers to use, and what",

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
      {
        heading: "Communication During Pretrial Detention in County Jail",
        body: [
          "Pretrial detention in a county jail creates unique communication challenges that differ from sentenced incarceration. A person in pretrial detention has not been convicted of any crime and may be released at any point during the process. However, during the time they are held, they face the same communication barriers and costs as sentenced individuals. Families often find the county jail phase the most confusing because information is harder to obtain and the situation changes rapidly.",
          "County jails have highly transient populations compared to state prisons. People come and go daily as bail is posted, cases are resolved, or transfers occur. This transience means that jail communication systems are often less sophisticated than state prison systems. Some county jails still rely primarily on phone calls and physical mail with limited or no electronic messaging options.",
          "Free communication policies have expanded significantly at the county level. According to Worth Rises, free communication policies implemented across the country have saved incarcerated people and their families $622.5 million to date as of May 2026. County jails have been a primary focus of free call campaigns because the pretrial population includes people who have not been convicted and should not face punitive costs for maintaining family contact.",
          "Not all county jails have a consistent staff member acting as a liaison for communication between incarcerated people and their families. Without a reliable point of contact, families cannot easily check on the health and well-being of their relatives. If you need to verify information about someone in county jail, calling the jail directly and asking for the records office or jail administrator is more effective than waiting for official notifications.",
        ],
      },
      {
        heading: "What Happens to Communication When a Loved One Is Transferred From Jail to Prison",
        body: [
          "The transfer from county jail to state prison after sentencing is one of the most disruptive events for family communication. The transfer ends one communication system entirely and starts another. Accounts, contacts, and balances on county jail platforms such as GettingOut or ConnectNetwork do not transfer to state prison platforms such as JPay. Families must set up entirely new accounts on the state prison provider.",
          "The inmate receives a new ID number at the state facility after completing intake processing. This new ID is different from the booking number used at the county jail and from any court case number. All new communication and money transfer accounts at the state facility require this new ID number. Wait until you have confirmed the new ID before setting up any new accounts to avoid errors.",
          "The transfer process itself can take anywhere from a few days to several weeks after sentencing. During this time the inmate may pass through a reception or classification center before being assigned to a permanent facility. Communication is typically unavailable or severely limited during this intake and classification period. Check the state Department of Corrections inmate locator daily after sentencing to track the transfer.",
          "Time already served in county jail while awaiting trial is credited toward the final state prison sentence. This means the actual time remaining to serve in state prison is the total sentence minus the time already spent in jail. Families should factor this in when planning for the duration of state prison communication and visit schedules.",
        ],
      },
      {
        heading: "Cost Differences and Free Call Programs by Facility Type",
        body: [
          "Phone call costs at county jails and state prisons have historically differed, with county jails often charging higher rates because they operate under individual contracts rather than large state-level agreements. Under current FCC rules in effect as of 2026, interstate call rates are capped at $0.11 per minute for both prisons and large jails. However, the implementation and compliance varies between facilities.",
          "New Jersey announced a 22 percent reduction in domestic phone call rates at state facilities as of May 2025, bringing rates to $0.034 per minute. This is significantly below the federal cap and reflects state-level action to reduce costs beyond what federal regulation requires. A growing number of states and counties are offering free calls entirely. Worth Rises reports that free communication policies have saved families $622.5 million since these programs began.",
          "County jail free call programs have expanded faster than state prison programs in recent years because county governments have more direct control over their facility contracts and more immediate accountability to local residents. If your loved one is in a county jail, contact the facility or check the county government website to find out whether a free call program is currently in effect.",
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
      "Free communication policies have saved incarcerated people and their families $622.5 million to date according to Worth Rises, May 2026.",
      "Pretrial detainees in county jail have not been convicted of any crime but face the same communication costs as sentenced individuals.",
      "When a loved one transfers from county jail to state prison, all existing communication accounts must be recreated on the new state prison provider. No data transfers.",
      "The new state prison inmate ID is different from the county jail booking number. Wait to confirm the new ID before setting up any state prison accounts.",
      "New Jersey reduced state facility phone call rates to $0.034 per minute as of May 2025, well below the federal FCC cap.",
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
      {
        question: "My loved one is in county jail waiting for trial. How do I set up communication?",
        answer: "First confirm the exact facility name and which communication providers serve it. County jails often use GettingOut, ConnectNetwork, Securus, or local providers. Call the jail directly to confirm the provider, then create an account on that platform. Submit a visitor application immediately since approval takes two to six weeks. For messaging, the inmate may need to add you as a contact from the facility kiosk first.",
      },
      {
        question: "Will my loved one's JPay or GettingOut account transfer when they move from jail to prison?",
        answer: "No. Communication accounts at county jails do not transfer to state prison platforms. You will need to create new accounts on whichever provider serves the state prison. Funds in the old platform account do not transfer automatically. Contact the old provider about recovering any remaining balance. Wait until you have the new state prison inmate ID number before setting up new accounts.",
      },
      {
        question: "How long does the transfer from county jail to state prison take?",
        answer: "The transfer typically happens within a few days to several weeks after sentencing. The inmate may pass through a reception or classification center before assignment to a permanent facility. Communication is usually unavailable during this intake period. Check the state Department of Corrections inmate locator daily after sentencing to track the transfer and find out when they arrive at the permanent facility.",
      },
      {
        question: "Are phone calls free at county jails?",
        answer: "At some county jails, yes. Free call programs have expanded significantly at the county level. Worth Rises reported that free communication policies have saved families $622.5 million to date. Contact the specific jail or check the county government website to find out whether a free call program is in effect. In jurisdictions without free calls, county jail rates are subject to FCC caps of $0.11 per minute for large jails.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "First Prison Visit: What to Expect, What to Bring, Dress",
    seoDescription: "Complete guide to your first prison visit - what happens at the entrance, what to wear, what to bring, what the visiting room is like, and how to make the most",

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
      {
        heading: "The Walmart Mistake: A Real Story About Dress Code Enforcement",
        body: [
          "One of the most documented stories shared by prison visit consultants involves a woman who drove hours to visit a federal prison only to be turned away because the color of her clothing looked too similar to prisoner clothing. She then drove to a nearby Walmart, bought different clothes, and returned for her visit. This story illustrates how dress code enforcement works in practice and why experienced visitors advise dressing in a way that cannot be questioned.",
          "The advice from those with experience visiting federal Bureau of Prisons facilities is to dress boring on purpose. Choose neutral colors that are not khaki, tan, orange, or any shade used for prisoner uniforms at that facility. Nothing tight. Nothing low-cut. Nothing that can be questioned. The goal is to get through the door, not to make a fashion statement. Read the facility-specific visiting procedures before every visit because local rules supplement the general institutional dress code.",
          "Federal prison wardens have authority to restrict visit length or the number of visitors at one time to avoid overcrowding. This means you can drive hours and receive a shorter visit than expected. BOP policy entitles each inmate to a minimum of four hours of visitation per month, but the facility can offer more or restrict visits to manage capacity. Conjugal visits are not permitted at any federal Bureau of Prisons facility.",
        ],
      },
      {
        heading: "Complete Dress Code Checklist for Prison Visits",
        body: [
          "Clothing restrictions that apply at most facilities include the following. No clothing resembling inmate uniforms including all-orange, all-khaki, all-white, or military camouflage. No revealing clothing including shorts above the knee, tank tops, low-cut shirts, or sheer fabrics. Sleeves required at most facilities with a minimum length of at least two inches at some institutions. No open-toed shoes at most facilities. No excessive jewelry, a wedding ring and small earrings are generally permitted. No hats or head coverings except religious head coverings which are generally permitted with prior approval.",
          "Items that cause the most preventable turn-aways include underwire bras that trigger metal detectors, leggings worn without a top that covers the hips when arms are raised, button-front shirts left unbuttoned enough to show a low neckline, and any color that can be questioned as similar to prisoner clothing. Philadelphia specifically prohibits plain white t-shirts. Dauphin County Prison requires sleeves of at least two inches. Rules vary by facility and are enforced at the discretion of the officer at the entrance.",
          "A practical solution adopted by many experienced visitors is to keep a bag in the vehicle with a change of clothes. If you are turned away for a dress code issue, you can change in the parking lot and return on the same day. This eliminates the wasted trip. Choose the backup outfit to be the most conservative option possible, solid neutral colors, fully covered, no jewelry, flat closed-toe shoes.",
        ],
      },
      {
        heading: "Bringing Children to a Prison Visit: What to Know and How to Prepare",
        body: [
          "Research shows that children maintaining contact with an incarcerated parent strengthens family bonds and benefits both the child and the parent. Studies point to lower recidivism rates for prisoners who stay connected to supportive family members. However, prisons can be intimidating environments for children, particularly for a first visit. Preparation before the visit makes a significant difference in how children experience it.",
          "Before bringing children, visit alone first. This allows you to see the environment firsthand, understand the security process, and prepare the children with accurate details about what to expect. Children who are told what to expect handle the experience significantly better than those who are not. Explain that there will be security checks similar to an airport, that there may be dogs on site at some facilities, that they will go through a metal detector, and that guards may pat them down.",
          "Children face the same security screening as adults. All visitors including children must be searched before entering. Consider the impact of long lines and wait times on children who cannot bring books, toys, or food into the facility. Children may become hungry, tired, and irritable before the visit even begins. Bring approved snacks in a clear plastic bag if the facility allows it and arrive early to allow time for processing.",
          "Children under 16 are generally allowed to visit when accompanied by a responsible adult. Some facilities provide child-friendly areas in the visiting room. Children in foster care visiting an incarcerated parent may require additional coordination between the facility, the child welfare agency, and the foster caregiver. Contact the facility in advance if your situation involves any non-standard guardianship arrangement.",
        ],
      },
      {
        heading: "Video Visits as an Alternative to In-Person Visits",
        body: [
          "Video visitation has expanded significantly since the pandemic and is now a permanent option at most facilities. Video visits cost between $0 and $12 per session depending on the facility and provider, compared to the cost and time of traveling to the facility in person. For families who live far from the facility, video visits provide a practical and more frequent connection option between in-person visits.",
          "Major video visitation providers include JPay through ViaPath, ConnectNetwork through GTL, Securus, and GettingOut through Telmate. Sessions are scheduled in advance through the provider platform and typically last 20 to 30 minutes. All visits are recorded and monitored by facility staff.",
          "Some facilities have moved to video-only visitation, replacing traditional in-person contact visits entirely. At these facilities, even when you travel to the location in person, you visit through a video terminal in the lobby rather than in a physical room with the inmate. Always call ahead to confirm what type of visit is available before making a trip to the facility.",
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
      "Dress boring on purpose for prison visits. Choose neutral colors that cannot be questioned as similar to prisoner clothing. The goal is to get through the door.",
      "Keep a backup change of clothes in your vehicle. If you are turned away for a dress code issue, you can change in the parking lot and return the same day.",
      "Visit alone before bringing children. This lets you see the environment firsthand and prepare them with accurate details about what to expect.",
      "Federal BOP inmates are entitled to a minimum of four hours of visitation per month. Wardens can restrict visits for overcrowding but cannot fall below this minimum.",
      "Video visits cost $0 to $12 per session and are now a permanent option at most facilities. They provide a practical connection option between in-person visits.",
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
      {
        question: "What is the most common reason visitors are turned away at prison?",
        answer: "Dress code violations are the most common reason. Clothing that resembles prisoner uniforms, including khaki, tan, orange, or military camouflage, is the most frequently cited issue. Revealing clothing, open-toed shoes, and excessive jewelry also cause turn-aways. Read the facility-specific visiting procedures before every visit and keep a change of conservative clothing in your vehicle as a backup.",
      },
      {
        question: "Do children go through the same security screening as adults at a prison?",
        answer: "Yes, children are generally permitted to visit when accompanied by an approved adult. Children under 16 typically do not need their own ID. All children are subject to the same security screening as adults including metal detectors. Visit alone first before bringing children so you can prepare them for what to expect. Confirm any special documentation requirements if you are not the child's parent.",
      },
      {
        question: "How many times can I visit someone in federal prison per month?",
        answer: "Federal Bureau of Prisons inmates are entitled to a minimum of four hours of visitation per month. Facilities can offer more and can restrict the length or number of visitors at one time to manage overcrowding. Conjugal visits are not permitted at any federal facility. Check the specific facility visiting schedule as visiting hours vary by institution.",
      },
      {
        question: "Are video visits cheaper than traveling to the facility in person?",
        answer: "For most families, yes. Video visits cost between $0 and $12 per session depending on the facility and provider. When you factor in travel time, fuel or transportation costs, and time off work for an in-person visit, video visits are significantly less expensive for families who live far from the facility. Video visits also allow more frequent contact between in-person visits.",
      },
      {
        question: "What should I tell my children before their first prison visit?",
        answer: "Tell them what the building looks like from outside. Explain that there will be security checks similar to an airport, that they will go through a metal detector, and that a guard may pat them down. Tell them there may be dogs on site at some facilities. Explain that they cannot bring toys, books, or food inside. Describe what the visiting room looks like. Children who know what to expect handle the experience significantly better than those who are surprised.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "How to Send Photos to an Inmate: Rules, Services, Sizes and",
    seoDescription: "Learn how to send photos to someone in prison or jail - which services to use, what size and content rules apply, how to avoid rejection, and the easiest way",

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
      {
        heading: "The Growing Trend of Physical Mail Bans and What It Means for Photos",
        body: [
          "A significant and growing number of state prison systems have eliminated direct physical mail from families entirely, replacing it with digitized mail systems where letters and photos are scanned and delivered electronically or as photocopies. As of February 2026, most U.S. prisoners are now barred from directly receiving physical mail according to Prison Legal News. This shift has major implications for how families send photos.",
          "Utah DOC began using Pigeonly to process and copy prisoner mail in January 2025, only to resume using guard staff for the task in January 2026. Despite the change, Utah still prohibits direct physical photos and requires photos to be uploaded digitally through one of three approved photo-sharing sites. Families in Utah cannot mail physical photos directly regardless of which vendor handles processing.",
          "Massachusetts DOC resumed using guards to make and deliver photocopies of prisoner mail. Restricted items include glitter, stickers, staples, and any book or magazine that is bound with a spine. Photos are banned from direct mail but may be uploaded digitally through approved photo-sharing services. The rules are applied at the state level but each facility may have additional restrictions on top of the state baseline.",
          "The practical effect of these bans is that even families who were previously mailing photos directly must now use an approved digital service or vendor. If you were successfully mailing photos directly to a state prison and they suddenly stopped being delivered, check whether the facility or state system has implemented a mail digitization policy. Contact the facility mailroom directly to confirm current rules before sending.",
        ],
      },
      {
        heading: "Photo Rejection: Why It Happens and How to Avoid It",
        body: [
          "Photo rejection is one of the most frustrating experiences families report. A photo that seems perfectly innocent to you may be flagged by mailroom staff for reasons that are not obvious. Understanding the most common rejection triggers helps you avoid them.",
          "Hand gestures are a frequently overlooked rejection trigger. Even common signs such as a peace sign, thumbs up, or fingers pointing can be misinterpreted as gang signals by mailroom staff. Avoid any hand gestures in photos intended for incarcerated loved ones. Choose photos where hands are at the side, in a lap, or holding something neutral like a child or a pet.",
          "Background content matters as much as the subject. A photo showing alcohol bottles in the background of a party, weapons on a wall, or other people who appear to be in a compromising situation can cause a rejection even if the main subject of the photo is not involved in anything problematic. Review the entire background of a photo before sending it.",
          "Texas is specifically noted by experienced families as printing JPay photo attachments in black and white on plain paper rather than in color. The result is often too low quality to be meaningful. Families sending photos to Texas facilities through JPay report this limitation and recommend using a physical photo service instead for better quality results.",
          "Using a dedicated photo service such as Pigeonly or Inmate Photos reduces rejection rates significantly because these services automatically show facility-specific rules at the time of upload and format the submission to meet those requirements. Pigeonly has sent over 15 million photos and letters and maintains current compliance rules for over 4,000 facilities.",
        ],
      },
      {
        heading: "Photo Services Comparison: Pigeonly, TextBehind, Inmate Photos and JPay",
        body: [
          "Pigeonly offers a Forever Free Plan that allows a set amount of monthly communication at no charge. Paid plans offer unlimited photos. Pigeonly recommends sending no more than five photos per envelope unless you know the specific facility allows more. Some facilities allow up to ten. Pigeonly handles printing, addressing, and mailing and advertises same-day mailing for orders placed early in the day. Pigeonly serves over 4,000 facilities.",
          "Inmate Photos is an iOS and Android app that automatically shows jail-specific rules at the time of upload including photo restrictions and content guidelines. If a facility has a photo limit, the app automatically spaces orders to stay compliant. The service positions itself as a compliance-first option for families who have had photos rejected elsewhere.",
          "TextBehind converts your photos and messages into physical printed mail. The cost is approximately $0.49 per page. TextBehind is particularly useful at facilities that do not have contracts with digital photo platforms because it delivers as standard physical mail rather than through a provider platform.",
          "JPay digital photo attachments are available at some state prison facilities as part of the JPay messaging system. Each photo requires an additional stamp beyond the message stamp. Photos are reviewed by facility staff before delivery and typically take 24 to 48 hours. JPay photo quality in Texas and some other states is limited by black and white printing on plain paper. Check your JPay account dashboard to see if digital photo sharing is enabled at your specific facility.",
          "GettingOut through Telmate also offers digital photo sharing at some county jail facilities. Photos are uploaded through the app and reviewed before delivery. Pricing and availability vary by facility contract.",
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
      "As of February 2026, most U.S. prisoners are now barred from directly receiving physical mail. Check current facility rules before mailing photos directly.",
      "Avoid hand gestures in photos. Even peace signs and thumbs up can be misinterpreted as gang signals and cause rejection.",
      "Review the entire background of a photo before sending. Background content including alcohol, weapons, or other people in compromising situations can cause rejection.",
      "Texas JPay facilities print photo attachments in black and white on plain paper. Use a physical photo service for better quality results when sending to Texas.",
      "Pigeonly has sent over 15 million photos and maintains compliance rules for 4,000+ facilities. Their free plan allows a set amount of monthly photos at no charge.",
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
      {
        question: "Can I still mail photos directly to a prison in 2026?",
        answer: "It depends on the facility and state. As of February 2026, most U.S. prisoners are barred from directly receiving physical mail according to Prison Legal News. Many state systems now require photos to go through approved digital services or vendor mail processing systems. Contact the specific facility mailroom to confirm current rules before mailing anything directly.",
      },
      {
        question: "Why do facilities ban direct physical mail for photos?",
        answer: "Facilities cite security concerns as the primary reason. Physical mail can be used to conceal messages, smuggle information, or introduce contraband. Digitized mail systems allow staff to review all incoming content electronically before anything physical reaches an inmate, which facilities argue reduces security risks. Critics argue the transition also generates revenue for approved vendors.",
      },
      {
        question: "Why was my photo rejected even though it seemed harmless?",
        answer: "Common rejection triggers include hand gestures such as peace signs or thumbs up that can be read as gang signals, background content showing alcohol or weapons even when incidental, photos that are too dark or unclear for staff to review, and content that varies from facility-specific rules that differ from general guidelines. Use a service like Pigeonly or Inmate Photos that shows facility-specific rules at upload to avoid preventable rejections.",
      },
      {
        question: "Are there free options for sending photos to inmates?",
        answer: "Yes. Pigeonly offers a Forever Free Plan that allows a set amount of monthly photos at no charge. The free plan covers printing and mailing through the postal system. Paid plans offer unlimited photos. Digital photo attachments through JPay use stamps you may already have purchased for messaging, though each photo requires an additional stamp.",
      },
      {
        question: "Why do JPay photos look bad at some facilities?",
        answer: "JPay photo attachments at Texas facilities and some other states are printed in black and white on plain paper rather than in color. This significantly reduces photo quality. If you are sending photos to a Texas JPay facility, use a physical photo printing service such as Pigeonly instead of JPay digital attachments for better quality results.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Inmate Communication Rules by State: Messaging, Phone",
    seoDescription: "Learn how inmate communication rules vary by state - which messaging providers are used, how phone rates differ, what visitation rules apply, and how to find",

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
      {
        heading: "States With Free Phone Calls as of 2026",
        body: [
          "A growing number of states have gone beyond federal FCC requirements and eliminated phone call charges entirely at state correctional facilities. As of August 2026, the states that have implemented free phone call programs at state prisons include California, Colorado (fully effective 2026), Connecticut, Massachusetts, Minnesota, and New York. New York made calls free on August 1, 2025, the first state to do so administratively without requiring legislation.",
          "New York City became the first U.S. city to make jail calls free in 2019, saving city families an estimated $10 million per year. New York State followed on August 1, 2025 with statewide implementation at state prisons. The move came after nearly five years of legislative advocacy. Senator Jamaal T. Bailey stated that the policy drives public safety because communication anchors rehabilitation.",
          "Colorado's free call policy was announced in 2025 and took full effect in 2026. Connecticut, Massachusetts, and Minnesota had implemented free calls at state facilities in prior years. At least two additional states, Maryland and Missouri, considered legislation in 2025 to make prison and jail calls more affordable. Missouri capped rates at $0.12 per minute regardless of facility size regardless of the federal cap.",
          "Free call programs at the state level apply only to state-operated facilities. County jails and private facilities within these states may not be covered by the free call policy. Always confirm with the specific facility whether free calls apply to their location. Families whose loved ones are in federal prisons within these states are not covered by state free call programs, which apply only to state DOC facilities.",
        ],
      },
      {
        heading: "FCC Rate Caps Effective April 6, 2026",
        body: [
          "The FCC voted in late October 2025 to raise the rate caps that had been set in its landmark 2024 order. The 2024 rules capped calls at $0.06 per minute for large prisons and jails. The 2025 order raised those caps significantly. The new interim rate caps took effect April 6, 2026 following publication in the Federal Register.",
          "Under the rules in effect as of April 6, 2026, phone calls cost up to $0.11 per minute at large prisons, $0.14 per minute at medium facilities, $0.16 per minute at small facilities, and $0.18 per minute at the smallest jails. Video call rates are capped at up to $0.23 per minute at large facilities and up to $0.41 per minute at the smallest jails. These caps apply to all intrastate, interstate, and international calls except for additional international call termination charges.",
          "The FCC described these as interim caps while permanent rules are developed. Worth Rises advocacy organization called the changes a betrayal of families. Only three states, Florida, Kentucky, and Oklahoma, had rates above the new caps at the time of the vote, meaning most facilities were already operating below the new ceilings. Critics argue the higher caps create room for providers to increase rates toward the new maximum.",
          "The 2025 order is labeled interim, meaning permanent rate caps are still being negotiated. The political situation at the FCC can affect the direction of future rules. Families who want to stay current on rate changes should bookmark the FCC IPCS page at fcc.gov/general/ipcs which publishes current rules and rate tables.",
        ],
      },
      {
        heading: "Mail Scanning Policies by State in 2026",
        body: [
          "Mail scanning has expanded significantly across state prison systems. As of 2026, the majority of state prison systems either scan incoming mail off-site or use guards to photocopy mail before it reaches inmates. Oklahoma banned physical mail from entering state prisons in September 2024 and now scans all mail at an off-site processing center, delivering it digitally to inmate tablets.",
          "The Prison Policy Initiative maintains an appendix tracking mail scanning policies by state updated through 2026 at prisonpolicy.org. This resource shows when each state implemented mail scanning, where processing takes place, and who conducts it. Families who previously mailed letters and photos directly should check this resource before sending to confirm whether their state has moved to a scanning system.",
          "When a state uses mail scanning, your physical letter is delivered to a processing center rather than the facility. Staff or contractors scan the letter and deliver it electronically or as a photocopy. The original physical letter may be destroyed rather than stored. Some states allow families to opt for digital submission directly through an approved platform to avoid the physical mail scanning process entirely.",
          "Some sheriffs have attempted to limit jail mail to postcard-only format, requiring all communication to fit on a standard postcard. The Prison Policy Initiative has actively campaigned against postcard-only mail restrictions and offers tools for advocates to push back against these policies at the county level. Families affected by postcard-only restrictions can contact local advocacy organizations for support.",
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
      "As of 2026, states with free phone calls at state prisons include California, Colorado, Connecticut, Massachusetts, Minnesota, and New York. New York made calls free on August 1, 2025.",
      "New FCC rate caps took effect April 6, 2026. Phone calls cost up to $0.11 per minute at large prisons and up to $0.18 per minute at the smallest jails.",
      "Video call caps under the April 2026 rules are $0.23 per minute at large facilities and up to $0.41 per minute at the smallest jails.",
      "Oklahoma banned physical mail from state prisons in September 2024 and now delivers all mail digitally to inmate tablets after off-site scanning.",
      "Check prisonpolicy.org for a state-by-state mail scanning appendix updated through 2026 to find out if your state scans mail before delivery.",
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
      {
        question: "Which states have free phone calls from prison in 2026?",
        answer: "As of 2026, states with free phone calls at state prisons include California, Colorado (fully effective 2026), Connecticut, Massachusetts, Minnesota, and New York. New York made calls free on August 1, 2025, the first state to do so administratively without legislation. Free call programs apply only to state-operated facilities. County jails and private facilities within these states may not be covered.",
      },
      {
        question: "What are the current FCC prison phone rate caps in 2026?",
        answer: "The FCC's 2025 interim order, effective April 6, 2026, set caps of $0.11 per minute at large prisons, $0.14 at medium facilities, $0.16 at small facilities, and $0.18 at the smallest jails. Video call caps are $0.23 per minute at large facilities and up to $0.41 at the smallest jails. These are interim caps while permanent rules are developed. The 2025 order raised rates from the $0.06 per minute cap set in 2024.",
      },
      {
        question: "What is mail scanning and does my state use it?",
        answer: "Mail scanning is a system where incoming physical mail is sent to an off-site processing center, scanned, and delivered to inmates electronically or as photocopies rather than as original physical letters. Oklahoma banned physical mail entirely in September 2024 and now delivers all mail digitally. Check the Prison Policy Initiative mail scanning appendix at prisonpolicy.org for a state-by-state list updated through 2026.",
      },
      {
        question: "My state has free phone calls. Do I still need a prepaid account?",
        answer: "In states with free phone calls at state prisons, families typically do not need to fund a prepaid calling account for state prison calls. The calls are covered under the state contract at no charge to the family. However, confirm with the specific facility how the free call program works in practice, as implementation details vary. Free call programs do not apply to federal prisons or county jails unless those facilities have their own separate free call programs.",
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
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-31",
    seoTitle: "Inmate Messages Blocked: Why It Happens, How to Appeal and",
    seoDescription: "Learn why inmate messages get blocked, how to find out the reason, who to contact to appeal, and what steps to take to restore communication with an",

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
      {
        heading: "Different Types of Blocks and What Each Means",
        body: [
          "Not all blocks work the same way and understanding the type of block helps you take the right action. On JPay, a red lock icon on a sent message means the message was flagged during automated content screening and is held for review or has been blocked by facility staff. This is different from an account-level block where you cannot send messages at all. A red lock on a specific message does not mean your entire account is suspended.",
          "An inmate being blocked on JPay when you try to add funds is a different type of restriction. This typically indicates an administrative hold placed on the inmate account by the facility or by JPay due to a disciplinary issue, an unresolved payment dispute, a chargeback on a previous card transaction, or unusual activity flagged by JPay systems. The facility and JPay both have authority to place this type of hold independently of each other.",
          "On JPay, an inmate can request to have a specific outside contact blocked from messaging them. When this happens, the contact remains visible on your account and messages appear to go through on your end, but they are never delivered to the inmate. If you suspect you have been blocked by the inmate rather than by the facility or platform, sending a VideoGram is reported by users to be a useful test because the platform will not allow a VideoGram to be sent to an inmate who is on messaging restriction.",
          "On CorrLinks, a red lock or a message that bounces back typically indicates the inmate is no longer at a facility served by CorrLinks, they have been transferred, or their TRULINCS access has been suspended due to a disciplinary action at the federal level. CorrLinks restrictions at the federal level are more formal and are documented through the BOP administrative process.",
        ],
      },
      {
        heading: "Why Private Companies Can Block Communication Without Notice",
        body: [
          "Prison communication providers including JPay and Securus, both owned by Aventiv Technologies, have the authority to block communication between families and incarcerated people without providing a reason or advance notice. A 2025 investigation found that families are often permanently blocked from contact with a loved one without any notification of what rule was violated or what remedies are available.",
          "Reaching a live person at JPay customer service requires navigating an automated phone system. Users report that the only reliable way to reach a live agent is to continue pressing buttons through the automated tree for several minutes. Generic email addresses and 1-800 numbers are provided for all issues including being blocked, but responses are often automated and resolution can take days or weeks.",
          "The lack of transparency in blocking decisions is a recognized problem in the prison communication reform space. Advocates argue that families and incarcerated people should receive written notice with a specific reason when communication is blocked, along with clear instructions for appeal. Until such reforms are implemented, families are left to navigate a system that provides minimal information and limited recourse.",
        ],
      },
      {
        heading: "New Jersey Provider Transition and What It Means for Blocked Accounts",
        body: [
          "New Jersey completed a significant transition in 2025 and 2026, moving from JPay to ViaPath for both money transfers and messaging services. JPay payment services for New Jersey ended on August 1, 2026. Families who had funds in JPay accounts linked to New Jersey facilities needed to transition to ViaPath through ConnectNetwork before that date to avoid service interruption.",
          "During provider transitions, some families reported that previously functioning accounts appeared blocked or inaccessible. In many cases this was not an actual block but rather a system issue during the transition period. If your account appears blocked during or after a facility provider transition, contact both the old provider and the new provider to confirm which platform is now active and whether your account needs to be recreated on the new system.",
          "New Jersey also announced a 22 percent reduction in domestic phone call rates as of May 2025, bringing the rate to $0.034 per minute. This rate is significantly below the current federal FCC cap of $0.11 per minute, making New Jersey one of the most affordable states for prison phone calls. If you are a New Jersey family experiencing communication problems during the transition period, the NJDOC family information page at nj.gov/corrections is updated with current provider instructions.",
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
      "A red lock on a JPay message means that specific message was flagged, not that your entire account is blocked. These are different types of restrictions requiring different responses.",
      "JPay and Securus can block communication without providing a reason or advance notice. Reaching a live customer service agent requires persistence through the automated phone system.",
      "If you suspect an inmate has personally blocked you on JPay, try sending a VideoGram. The platform will not allow a VideoGram to be sent to an inmate on messaging restriction.",
      "New Jersey transitioned from JPay to ViaPath in 2025 and 2026. JPay payment services for NJ ended August 1, 2026. NJ families must use ViaPath through ConnectNetwork.",
      "During provider transitions, apparent blocks may be system issues rather than actual restrictions. Contact both old and new providers to confirm which platform is now active.",
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
      {
        question: "What does a red lock on my JPay message mean?",
        answer: "A red lock icon means that specific message was flagged during automated content screening and is either held for review or blocked by facility staff. This is different from an account-level block. The red lock applies to that message only. Review the message for any content that could trigger a filter, revise it, and send the revised version. Do not resend the original flagged message multiple times as this can escalate the issue.",
      },
      {
        question: "JPay says the inmate is blocked when I try to add funds. What does this mean?",
        answer: "This typically indicates an administrative hold on the inmate account placed by the facility or by JPay. Common causes include a disciplinary issue at the facility, an unresolved payment dispute, a chargeback on a previous card transaction, or unusual activity flagged by JPay systems. Contact both the facility and JPay customer service to find out which side placed the hold and what is required to remove it.",
      },
      {
        question: "Can an inmate block me personally on JPay?",
        answer: "Yes. An inmate can request that JPay block a specific outside contact from messaging them. When this happens, you remain on their contact list and messages appear to send on your end but are never delivered. If you suspect this, try sending a VideoGram. The platform will not allow a VideoGram to be sent to an inmate on messaging restriction, which can confirm whether a personal block is in place.",
      },
      {
        question: "How do I reach a live person at JPay customer service?",
        answer: "Call the JPay customer service number listed on jpay.com. Users report that reaching a live agent requires continuing through the automated phone system for several minutes rather than hanging up. Calling at off-peak hours such as early morning increases the chance of reaching an agent faster. You can also submit a written support ticket through your account, which creates a paper trail useful for escalation.",
      },
      {
        question: "I am a New Jersey family and my JPay account seems blocked. What happened?",
        answer: "New Jersey transitioned from JPay to ViaPath for all payment and messaging services in 2025 and 2026. JPay payment services for New Jersey ended on August 1, 2026. Your JPay account may no longer be active for New Jersey facilities. Visit nj.gov/corrections for current provider instructions and create a new account through ViaPath at connectnetwork.com to resume communication.",
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

  "how-securus-works": {
    id: "guide-21",
    slug: "how-securus-works",
    title: "How Securus Technologies Works: Complete Guide for Families",
    excerpt: "Learn how Securus Technologies works for inmate phone calls, video visits, and messaging at county jails and state prisons across 45 states.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 6,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-06-01",
    updatedAt: "2026-08-01",
    seoTitle: "How Securus Technologies Works: Phone Calls, Video Visits",
    seoDescription: "Complete guide to Securus Technologies for families - how to create an account, set up phone calls, schedule video visits, send money, and which facilities use",

    intro: [
      "Securus Technologies is one of the largest inmate communication providers in the United States, serving over 1,200 correctional facilities across 45 states. If your loved one is in a county jail or state prison that uses Securus, this guide explains everything you need to know to set up an account and start communicating.",
      "Securus provides phone calls, video visitation, electronic messaging at some facilities, and inmate money transfers. The services available to you depend on which ones your loved one facility has contracted for. Not every Securus facility offers every service.",
      "This guide explains how to create a Securus account, how to set up phone calls, how to schedule video visits, how to send money, and what to do if you have problems.",
    ],

    sections: [
      {
        heading: "What Is Securus Technologies and Which Facilities Use It",
        body: [
          "Securus Technologies is a privately held inmate communication company that contracts with correctional facilities to provide phone, video, messaging, and financial services. Securus is headquartered in Dallas, Texas and is owned by Aventiv Technologies, the same parent company that owns JPay.",
          "Securus serves over 1,200 facilities across 45 states, making it one of the most widely deployed inmate communication providers in the country. Securus is especially common at county jails and local detention centers, though it also holds contracts at some state prison facilities.",
          "To find out if your loved one facility uses Securus, search our facility directory by facility name. The provider information is listed on each facility page. You can also call the facility directly and ask which phone and communication provider they use.",
        ],
      },
      {
        heading: "How to Create a Securus Account",
        body: [
          "Go to securustech.net and click on the option to create a new account. You will need to provide your full name, email address, phone number, and create a password. Account creation is free and takes only a few minutes.",
          "After creating your account, you will need to find your loved one in the Securus system. Search by the facility name and the inmate name or inmate ID number. Once you find them, add them to your account.",
          "Securus also has a mobile app available for iOS and Android called Securus Mobile. Download the app from your app store and log in with your account details to manage phone accounts, schedule video visits, and send messages from your smartphone.",
          "If you have trouble creating an account online, you can call Securus customer service for assistance. Have the facility name and your loved one inmate ID number ready before calling.",
        ],
      },
      {
        heading: "How to Set Up Phone Calls Through Securus",
        body: [
          "Securus handles inmate phone calls through a prepaid account system. You fund an account in advance and the per-minute rate is deducted each time the inmate calls you. You cannot call the inmate directly - all calls must be initiated by the inmate from a facility phone.",
          "To set up your phone account, log in to your Securus account and go to the AdvancePay or prepaid calling section. Register the phone number where you want to receive calls and add funds using a credit card, debit card, or other accepted payment method.",
          "Once your account is funded, the inmate can call your registered number from a facility phone. The call connects automatically and the per-minute charge is deducted from your balance. Keep your balance funded to avoid missed calls.",
          "Securus phone rates for interstate calls are regulated by the FCC with a maximum of $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current rules. In-state rates may vary by facility. Check your account for the specific rate that applies to your facility.",
        ],
      },
      {
        heading: "How to Schedule a Securus Video Visit",
        body: [
          "Securus offers video visitation at many facilities where this service has been contracted. To check if video visits are available at your loved one facility, log in to your account and look for a video visits option on your dashboard. If it appears, the facility supports this service.",
          "To schedule a video visit, select your loved one from your contact list and choose an available date and time slot from the scheduling calendar. Review the cost and enter your payment information. You will receive a confirmation of your scheduled visit.",
          "At the scheduled time, log in to your Securus account on your computer or open the Securus Mobile app on your smartphone or tablet. Make sure your camera and microphone are working before the visit begins. Join the session at the scheduled time and wait for the inmate to connect from the facility.",
          "Video visits through Securus typically cost between $7.50 and $15 per session depending on the facility. Sessions are usually 20 to 30 minutes long. All video visits are recorded and monitored by facility staff.",
        ],
      },
      {
        heading: "How to Send Money Through Securus",
        body: [
          "Securus allows families to send money directly to an inmate trust account through their platform. Log in to your account and go to the send money or inmate deposit section. Select your loved one, enter the amount, and pay by credit card or debit card.",
          "Securus charges a transaction fee for money transfers. Fees vary by facility and transfer amount. Always check the current fee schedule before sending to avoid surprises. Keep your transaction confirmation number until you confirm the funds have been credited to the inmate account.",
          "Processing times vary by facility. Most deposits are credited to the inmate trust account within one to three business days. Inmate trust account funds can be used for commissary purchases, phone call credits, and other approved facility expenses.",
        ],
      },
      {
        heading: "Common Problems and How to Fix Them",
        body: [
          "If you are not receiving calls, check that your phone number is registered in your Securus account and that your balance is funded. Also confirm with the facility that your number is on the inmate approved contact list. If your number was recently changed, update it in your account before the next call.",
          "If a video visit does not connect, check your internet connection and make sure your camera and microphone permissions are enabled for the Securus app or website. Test your connection before the scheduled session. If the problem is on the Securus side, contact customer service with your confirmation number to request a credit.",
          "If a money transfer does not arrive, contact Securus customer service with your transaction confirmation number. Common causes include an incorrect inmate ID number or a transfer sent to the wrong facility. Always verify the inmate ID and facility name before sending funds.",
        ],
      },
      {
        heading: "Securus Takes Over California State Prisons in 2025 and 2026",
        body: [
          "California awarded a major telecommunications contract worth an estimated $315 million to Securus Technologies in February 2025, replacing ViaPath as the provider for all California Department of Corrections and Rehabilitation facilities. The rollout began in September 2025 and facility transitions to Securus continued through spring 2026. Fire camps completed their transition first. Individual institution transitions began in February 2026.",
          "California families whose loved ones are housed at facilities that have already transitioned must use Securus for phone calls, video visits, and messaging going forward. If a loved one is transferred to a facility still using ViaPath during the transition period, families must return to the ViaPath platform for that facility until it also transitions to Securus. The CDCR website at cdcr.ca.gov/family-resources/tablets publishes the current transition schedule by institution.",
          "A significant issue during the California transition is that ViaPath messages, photos, and media do not transfer to Securus tablets. Once a facility transitions, incarcerated individuals lose access to all content purchased or received on their ViaPath account. Families were advised to print important messages or photos from the ViaPath tablet or a kiosk before their institution's transition date. Only the inmate can initiate a print request from inside the facility.",
          "Shortly after the California transition began, Securus was found to be charging more than the 3 cents per message stated in its contract, apparently due to an undisclosed pricing scheme based on character count. After prisoners and advocates complained and news organizations asked questions, Securus corrected the billing and issued a $10 credit to every person at the California Institution for Women. California families should check their account billing carefully and report discrepancies.",
        ],
      },
      {
        heading: "Common Securus Problems and How to Handle Them",
        body: [
          "Securus has a consistently low consumer rating with the most common complaints involving failed video visits with no refund, customer service providing false assurances about refunds that are never issued, and accounts being permanently restricted after families dispute charges. Understanding these patterns helps families protect themselves.",
          "If a Securus video visit fails due to technical issues such as no audio or no video on their side, contact Securus customer service immediately and file a formal complaint requesting a refund. Document the date, time, your confirmation number, and exactly what failed. Securus requires a formal complaint to process a refund for a failed visit. Follow up weekly if you do not receive a response. Keep records of every communication.",
          "A documented pattern at Securus involves permanently restricting account access when families dispute charges with their bank. One account shows a family that disputed a charge after Securus failed to provide a working video visit and received assurances of a refund that never came. When the family filed a bank dispute, Securus permanently restricted their account, canceled a scheduled visit, and refused any refund. If you are considering a bank dispute, be aware that Securus may respond by restricting your account.",
          "Michigan lawsuits filed against St. Clair County and Genesee County allege that these counties banned in-person jail visits in exchange for a share of Securus video call revenue. Under the alleged contracts, Securus paid the county 50 percent of the video call fee and 78 percent of the per-minute phone call rate. The lawsuits argue that eliminating in-person visits solely to generate video call revenue violates the rights of families and incarcerated people. These cases highlight how financial incentives in provider contracts can directly affect family access.",
        ],
      },
      {
        heading: "Securus Customer Service Contacts and Escalation",
        body: [
          "Securus customer service is available through securustech.net. For phone support, call the customer service number listed on the website. Have your account details, the facility name, your loved one inmate ID, and any transaction confirmation numbers ready before calling. The most common issues requiring customer service contact are failed video visits, account access problems, and billing disputes.",
          "If standard Securus customer service does not resolve your issue, file a complaint with the Better Business Bureau. Securus Technologies has a BBB profile and formally responds to complaints filed there. A BBB complaint often receives a faster response than a standard customer service call or email.",
          "For California families experiencing issues during the ViaPath to Securus transition, major outage notices are posted on the CDCR website. Contact both Securus and ViaPath customer service if you are unsure which platform is currently active at your loved one facility. The CDCR family resources page at cdcr.ca.gov/family-resources is updated with current provider information.",
        ],
      },
    ],

    takeaways: [
      "Securus Technologies serves over 1,200 facilities across 45 states and is especially common at county jails.",
      "Creating a Securus account is free. Go to securustech.net or download the Securus Mobile app.",
      "Phone calls use a prepaid account system. Fund your account before the inmate calls you.",
      "Video visits are available at select facilities. Schedule in advance through your Securus account.",
      "Money transfers go to the inmate trust account and are credited within one to three business days.",
      "FCC caps interstate phone rates at $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current rules.",
      "If the facility does not appear to use Securus, search our facility directory to find the correct provider.",
      "Securus won a $315 million contract to replace ViaPath in all California state prisons. Transitions began September 2025 and continued through spring 2026.",
      "ViaPath messages, photos, and media do not transfer to Securus tablets during the California transition. Content must be printed before the institution transitions.",
      "Securus was found charging California prisoners more than the contracted 3 cents per message and issued a $10 credit after advocates complained.",
      "If a Securus video visit fails, file a formal complaint immediately with your confirmation number. Document everything before considering a bank dispute.",
      "Be aware that Securus may permanently restrict your account if you file a bank chargeback. Exhaust all direct resolution options before disputing with your bank.",
    ],

    faq: [
      {
        question: "How do I set up a Securus account?",
        answer: "Go to securustech.net and create a free account with your name, email, and phone number. Then search for your loved one by facility name and inmate ID to add them to your account. Download the Securus Mobile app for iOS or Android to manage your account from your smartphone.",
      },
      {
        question: "Which facilities use Securus Technologies?",
        answer: "Securus serves over 1,200 facilities across 45 states, primarily county jails and some state prisons. Search our facility directory to find out if your specific facility uses Securus. You can also call the facility directly and ask which communication provider they use.",
      },
      {
        question: "How much do Securus phone calls cost?",
        answer: "Interstate call rates are federally regulated with a maximum of $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current rules. In-state rates vary by facility and state. Log in to your Securus account to see the specific rate for your loved one facility.",
      },
      {
        question: "Can I video visit through Securus?",
        answer: "Video visitation is available at Securus facilities that have contracted for this service. Log in to your account and check your dashboard - if video visits appear as an option, the service is available at your facility. Sessions typically cost between $7.50 and $15 and last 20 to 30 minutes.",
      },
      {
        question: "How do I send money to an inmate through Securus?",
        answer: "Log in to your Securus account, go to the send money section, select your loved one, enter the amount, and pay by credit or debit card. Transaction fees apply and vary by facility and amount. Funds are typically credited to the inmate trust account within one to three business days.",
      },
      {
        question: "Is there a Securus mobile app?",
        answer: "Yes. The Securus Mobile app is available for free on iOS and Android. Download it from your app store and log in with your account details to manage phone accounts, schedule video visits, and access other services from your smartphone.",
      },
      {
        question: "Does Securus now serve California state prisons?",
        answer: "Yes. California awarded Securus a $315 million contract in February 2025 to replace ViaPath as the provider for all CDCR facilities. Transitions began in September 2025. Families with loved ones at transitioned facilities must use Securus. For facilities still on ViaPath during the transition period, families continue to use ViaPath until that specific institution completes its switch. Check cdcr.ca.gov/family-resources/tablets for the current transition schedule.",
      },
      {
        question: "What happened to ViaPath content when California switched to Securus?",
        answer: "ViaPath messages, photos, and media do not transfer to Securus tablets. Once a facility transitions, incarcerated individuals lose access to all content from their ViaPath account. Families were advised to have their loved one print important messages or photos from the ViaPath tablet or kiosk before the institution's transition date. Only the inmate can initiate a print request from inside the facility.",
      },
      {
        question: "What should I do if a Securus video visit fails and I cannot get a refund?",
        answer: "File a formal complaint with Securus customer service immediately with your confirmation number, the date and time, and a description of what failed. Document every communication and follow up weekly. If Securus does not respond, file a complaint with the Better Business Bureau where Securus has a formal profile. Be aware that disputing the charge with your bank may result in Securus permanently restricting your account.",
      },
      {
        question: "Why did Securus charge me more than the stated price per message in California?",
        answer: "Securus was found to be using an undisclosed pricing scheme based on character count rather than per-message pricing stated in the CDCR contract. After advocates complained and news organizations reported on the issue, Securus corrected its billing to the contracted 3 cents per message and issued a $10 credit to incarcerated people at the California Institution for Women. If you believe you are being overcharged, compare your bills to the contracted rates and file a complaint with Securus and the CDCR.",
      },
    ],

    relatedGuideSlugs: ["how-prison-phone-calls-work", "how-video-visitation-works", "how-to-send-money-to-an-inmate", "county-jail-vs-state-prison"],
    relatedTermSlugs: ["inmate-phone-calls", "video-visitation", "inmate-account"],
    relatedProviderSlugs: ["securus", "gtl", "connectnetwork"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks"],
    ctaType: "provider",
    ctaTarget: "/provider/securus",
    ctaLabel: "View Securus Provider Page",
  },

  "how-gtl-works": {
    id: "guide-22",
    slug: "how-gtl-works",
    title: "How GTL Works: Complete Guide to ViaPath Technologies for Families",
    excerpt: "Learn how GTL (Global Tel Link / ViaPath Technologies) works for inmate phone calls and video visits at state prisons and county jails across 30 states.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-06-01",
    updatedAt: "2026-08-01",
    seoTitle: "How GTL Works: ViaPath Technologies Phone Calls, Video",
    seoDescription: "Complete guide to GTL ViaPath Technologies for families - how GTL relates to ConnectNetwork, how to set up phone calls and video visits, which facilities use",

    intro: [
      "GTL, which stands for Global Tel Link, is one of the largest inmate communication companies in the United States. GTL is now part of ViaPath Technologies and operates ConnectNetwork, the consumer-facing platform that families use to manage phone calls, video visits, and money transfers.",
      "GTL serves over 800 facilities across 30 states, primarily at state prisons and county jails. If your loved one is in a facility that uses GTL, you will interact with their services through the ConnectNetwork website and app rather than through a GTL-branded platform.",
      "This guide explains the relationship between GTL and ConnectNetwork, how to set up your account, how phone calls work, and which facilities use GTL services.",
    ],

    sections: [
      {
        heading: "What Is GTL and How Does It Relate to ConnectNetwork",
        body: [
          "GTL (Global Tel Link) is the company that holds facility contracts and provides the underlying communication infrastructure at prisons and jails. ConnectNetwork is the consumer brand - the website and app that families use to access GTL services. When you sign up for ConnectNetwork, you are using GTL infrastructure.",
          "GTL is part of ViaPath Technologies, a company formed from GTL and Telmate. ViaPath also operates GettingOut, another consumer platform used primarily at county jails. If your loved one is in a county jail, they may be on GettingOut rather than ConnectNetwork even though both are ultimately GTL services.",
          "For most families, the practical starting point is the ConnectNetwork website at connectnetwork.com or the ConnectNetwork app. This is where you create your account, fund phone calls, schedule video visits, and manage money transfers for GTL-served facilities.",
        ],
      },
      {
        heading: "Which Facilities Use GTL",
        body: [
          "GTL serves over 800 facilities across 30 states through its ConnectNetwork platform. GTL holds contracts at state prison systems and county jails. Because GTL often wins large state-level contracts, their services can cover an entire state prison system under one agreement.",
          "GTL also operates the federal Bureau of Prisons phone and video infrastructure at many federal facilities. ConnectNetwork handles phone calls and video visits at many BOP institutions, though electronic messaging at federal facilities always goes through CorrLinks regardless of which phone provider is used.",
          "To find out if your loved one facility uses GTL, search our facility directory. You can also visit connectnetwork.com and search for the facility name directly.",
        ],
      },
      {
        heading: "How to Set Up a GTL Account Through ConnectNetwork",
        body: [
          "Go to connectnetwork.com and click create account. Enter your full name, email address, and phone number and create a password. Account creation is free. Verify your account through the confirmation email that is sent to you.",
          "After logging in, add your loved one facility and search for them by name or inmate ID number. Once added, your dashboard will show the services available at their specific facility. Services that appear on your dashboard are the ones contracted at that location.",
          "Download the free ConnectNetwork app for iOS or Android to manage your account from your smartphone. The app allows you to fund phone accounts, schedule video visits, and receive notifications when your balance is low.",
        ],
      },
      {
        heading: "How GTL Phone Calls Work",
        body: [
          "GTL phone calls work through the AdvancePay prepaid system on ConnectNetwork. You deposit money in advance and funds are deducted each time the inmate calls your registered phone number. You cannot call the inmate - all calls must be initiated by the inmate from a facility phone.",
          "To receive calls, register your phone number in your ConnectNetwork account and add funds to your AdvancePay balance. When the inmate calls, the call connects automatically and the per-minute rate is deducted from your balance. Set up automatic refills to ensure your balance never runs out.",
          "GTL phone rates for interstate calls are regulated by the FCC. The maximum rate is $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current rules. In-state rates vary. Check your ConnectNetwork account for the specific rate that applies to your facility.",
        ],
      },
      {
        heading: "How GTL Video Visits Work",
        body: [
          "Video visits through GTL are scheduled through your ConnectNetwork account. Log in, go to the video visits section, and select an available date and time. Pay for the session and receive a confirmation. At the scheduled time, join through the ConnectNetwork website or app.",
          "You need a device with a camera and microphone and a stable internet connection. Test your camera and microphone before the visit. Sessions are typically 20 to 30 minutes and end automatically when the time limit is reached.",
          "Video visit costs vary by facility but typically range from $7.50 to $15 per session. All visits are recorded and monitored. Follow the same content rules that apply to phone calls.",
        ],
      },
      {
        heading: "GTL ViaPath Lost California and What It Means for Families",
        body: [
          "GTL ViaPath Technologies lost its California CDCR contract to Securus Technologies in February 2025 following a court ruling that vacated the prior ViaPath contract. California had been one of ViaPath's largest state contracts. The transition from ViaPath to Securus at California institutions began in September 2025 and continued through spring 2026. California families whose loved ones have transitioned to Securus must now create Securus accounts and can no longer use ConnectNetwork for those facilities.",
          "During the California transition, ViaPath maintained an emergency interim agreement with CDCR to prevent service gaps. Families were advised to check the CDCR website for the transition schedule by facility before switching to Securus accounts. If a loved one was transferred to a facility still on ViaPath during the transition, families needed to continue using ConnectNetwork until that facility also completed its switch.",
          "ViaPath content including messages, photos, and media did not transfer to Securus tablets. California families who had years of digital communication history stored on ViaPath tablets lost access to that content permanently after their institution's transition date. CDCR stated that incarcerated individuals could request their digital content from ViaPath upon release, though this option may not apply to those serving longer terms.",
        ],
      },
      {
        heading: "GTL ViaPath Ordered to Pay $3 Million by Consumer Financial Protection Bureau",
        body: [
          "In November 2024, the federal Consumer Financial Protection Bureau ordered GTL, doing business as ViaPath Technologies, to pay $3 million in restitution and penalties for violations of consumer protection laws. The CFPB identified three specific practices that violated consumer protection laws.",
          "The first violation was a no-refund policy for most money transfers. When money transfers went wrong, families were forced to file chargebacks with their banks or credit card companies rather than receiving direct refunds from GTL. The second violation involved unclear and deceptive fee disclosures that made it difficult for consumers to understand what they were being charged. The third violation involved specific practices related to how funds were handled when accounts were closed or transfers failed.",
          "The CFPB enforcement capacity has been significantly reduced since early 2025 following staff reductions. It remains to be seen how effectively the agency can enforce this order. Families who experienced problems with GTL money transfers should document all transactions and contact GTL customer service directly. If GTL does not resolve the issue, file a complaint with your state attorney general consumer protection office as state-level enforcement remains active.",
        ],
      },
      {
        heading: "New Jersey Transition From JPay to ViaPath in 2025 and 2026",
        body: [
          "New Jersey began transitioning its state prisons from JPay to ViaPath tablets in 2025. Three facilities including Bayside State Prison in Leesburg, Mid State Correctional Facility in Wrightstown, and Edna Mahan Correctional Facility for Women in Clinton completed their transitions first. Six additional facilities were expected to receive ViaPath tablets by end of July 2026. The NJ DOC Commissioner noted some technical glitches in initial rollouts and stated the department was proceeding carefully before expanding to larger facilities.",
          "New Jersey maintained contracts with both JPay and ViaPath simultaneously during the transition period. The JPay contract was extended through July 31, 2026, and the ViaPath contract runs through December 31, 2028. Families with loved ones at facilities that have transitioned to ViaPath must use ConnectNetwork for messaging and money transfers. Families at facilities still on JPay continue to use JPay until their facility transitions.",
          "A civil rights lawsuit was filed in July 2026 challenging the New Jersey transition from JPay to ViaPath. Incarcerated people in the lawsuit argued they were led to believe content purchased on JPay tablets would remain accessible and that the switch resulted in significant cost increases. The Marshall Project reported on how incarcerated people become the unwilling consumers of a billion-dollar industry when states switch providers without protecting purchased content or managing transition costs.",
        ],
      },
    ],

    takeaways: [
      "GTL is the company behind ConnectNetwork. Families access GTL services through the ConnectNetwork website and app.",
      "GTL serves over 800 facilities across 30 states at state prisons and county jails.",
      "GTL also operates GettingOut for county jails through its ViaPath Technologies parent company.",
      "Create your account at connectnetwork.com. Account creation is free.",
      "Phone calls use the AdvancePay prepaid system. Fund your account before the inmate calls.",
      "Video visits are available at select facilities. Schedule through your ConnectNetwork account.",
      "Federal BOP inmates use CorrLinks for messaging even at facilities where GTL handles phone calls.",
      "GTL ViaPath lost its California CDCR contract to Securus in February 2025. California families must now use Securus for facilities that have completed their transition.",
      "The CFPB ordered GTL ViaPath to pay $3 million in November 2024 for consumer protection violations including a no-refund policy on money transfers.",
      "New Jersey is transitioning from JPay to ViaPath in 2025 and 2026. JPay contract extended through July 31, 2026. ViaPath contract runs through December 31, 2028.",
      "ViaPath messages, photos, and media do not transfer during provider switches. Content is permanently lost after the facility transition date.",
      "If GTL does not resolve a billing dispute, file a complaint with your state attorney general consumer protection office. State-level enforcement remains active.",
    ],

    faq: [
      {
        question: "What is the difference between GTL and ConnectNetwork?",
        answer: "GTL is the company that holds facility contracts and provides communication infrastructure. ConnectNetwork is the consumer platform families use to access those services. When you create a ConnectNetwork account, you are using GTL services. The two names refer to different layers of the same system.",
      },
      {
        question: "How do I set up a GTL account?",
        answer: "Go to connectnetwork.com and create a free account. Enter your name, email, and phone number. Then add your loved one facility and search for them by name or inmate ID. Your dashboard will show the services available at their specific facility.",
      },
      {
        question: "Which states use GTL for prison communications?",
        answer: "GTL serves facilities in over 30 states through ConnectNetwork. The company holds contracts at state prison systems and county jails. Search our facility directory to find out if your specific facility uses GTL.",
      },
      {
        question: "Is ConnectNetwork the same as GTL?",
        answer: "ConnectNetwork is the consumer brand operated by GTL. GTL is the parent company that holds facility contracts. Families use ConnectNetwork to manage accounts while GTL maintains the underlying infrastructure. Both names refer to the same service.",
      },
      {
        question: "Does GTL handle federal prison communications?",
        answer: "GTL handles phone calls and video visits at many federal Bureau of Prisons facilities through ConnectNetwork. However, electronic messaging at all federal facilities goes through CorrLinks only, regardless of which company handles phone services.",
      },
      {
        question: "How much do GTL phone calls cost?",
        answer: "GTL interstate call rates are capped by the FCC at $0.11 per minute under current FCC rules in effect as of 2026 (raised from the original 2024 cap of $0.06 per minute) for prisons and $0.11 per minute for large jails under current rules. In-state rates vary by facility. Log in to your ConnectNetwork account to see the specific rate for your loved one facility.",
      },
      {
        question: "Does ConnectNetwork still work for California state prisons?",
        answer: "Not at facilities that have completed the transition to Securus. California awarded its CDCR contract to Securus in February 2025 and transitions began in September 2025. For facilities that have already switched, families must use Securus for phone calls, video visits, and messaging. For facilities still using ViaPath during the transition period, ConnectNetwork continues to work. Check cdcr.ca.gov/family-resources/tablets for the current transition schedule.",
      },
      {
        question: "Was GTL fined for consumer protection violations?",
        answer: "Yes. In November 2024, the Consumer Financial Protection Bureau ordered GTL ViaPath to pay $3 million in restitution and penalties. The violations included a no-refund policy for money transfers that forced families to file bank chargebacks instead of receiving direct refunds, and unclear fee disclosures. If you experienced problems with GTL money transfers, contact GTL customer service and if unresolved file a complaint with your state attorney general consumer protection office.",
      },
      {
        question: "My loved one is in a New Jersey state prison. Do I use JPay or ViaPath?",
        answer: "It depends on which facility and when. New Jersey began transitioning from JPay to ViaPath in 2025. Three facilities completed their transitions early in 2026 and more are expected by end of July 2026. The JPay contract runs through July 31, 2026. Check with the specific facility to confirm which provider is currently active. If your facility has transitioned, use ConnectNetwork at connectnetwork.com. If it has not yet transitioned, continue using JPay.",
      },
      {
        question: "What happened to ViaPath content when California switched to Securus?",
        answer: "ViaPath messages, photos, and media did not transfer to Securus tablets. Once a California facility completed its transition, incarcerated individuals permanently lost access to content stored on their ViaPath account. CDCR stated that incarcerated individuals could request their digital content from ViaPath upon release. Families were advised to have their loved one print important messages or photos from the ViaPath tablet before the institution's transition date.",
      },
    ],

    relatedGuideSlugs: ["how-connectnetwork-works", "how-video-visitation-works", "how-prison-phone-calls-work", "federal-prison-vs-state-prison"],
    relatedTermSlugs: ["inmate-phone-calls", "video-visitation", "inmate-account"],
    relatedProviderSlugs: ["gtl", "connectnetwork", "gettingout", "securus"],
    relatedComparisonSlugs: ["jpay-vs-connectnetwork", "gettingout-vs-connectnetwork"],
    ctaType: "provider",
    ctaTarget: "/provider/gtl",
    ctaLabel: "View GTL Provider Page",
  },

  "how-gettingout-works": {
    id: "guide-23",
    slug: "how-gettingout-works",
    title: "How GettingOut Works: Complete Guide for County Jail Families",
    excerpt: "Learn how GettingOut by Telmate works for video visits, messaging, phone calls, and money transfers at over 2,200 county jails across 45 states.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 6,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-06-01",
    updatedAt: "2026-08-01",
    seoTitle: "How GettingOut Works: Video Visits, Messaging and Account",
    seoDescription: "Complete guide to GettingOut by Telmate for families - how to create an account, schedule your first video visit, send messages, make phone calls, and transfer",

    intro: [
      "GettingOut is an inmate communication platform operated by Telmate, a subsidiary of GTL and part of the ViaPath Technologies family. GettingOut serves over 2,200 county jails across 45 states and is one of the most widely used platforms for families of people held in local detention.",
      "GettingOut is best known for its video visitation feature, which allows families to schedule and join video visits from home without traveling to the facility. The platform also supports electronic messaging, phone calls, photo sharing, and money transfers under one account.",
      "This guide explains how GettingOut works, how to create an account, how to schedule your first video visit, and what to expect from messaging and phone calls through the platform.",
    ],

    sections: [
      {
        heading: "What Is GettingOut and Which Facilities Use It",
        body: [
          "GettingOut is operated by Telmate, which is owned by GTL (Global Tel Link) as part of ViaPath Technologies. GettingOut is designed specifically for county jails rather than state prisons. If your loved one is in a county jail, GettingOut is one of the most likely platforms you will need.",
          "GettingOut serves over 2,200 county jails across 45 states. The platform covers a broad range of facility sizes from large urban county detention centers to smaller local jails. Because GettingOut focuses on county facilities, it is the right platform to check first if your loved one is awaiting trial or serving a short sentence in a local facility.",
          "To confirm whether your loved one facility uses GettingOut, search our facility directory or visit gettingout.com and search for the facility by name. You can also call the facility directly and ask which communication provider they use.",
        ],
      },
      {
        heading: "How to Create a GettingOut Account",
        body: [
          "Go to gettingout.com and click on the sign up or create account option. Enter your full name, email address, phone number, and create a password. Account creation is free. You will receive a verification email - click the link to activate your account.",
          "After logging in, search for your loved one facility and find them by name or inmate ID number. Add them to your account. Once added, your dashboard will show the services available at their specific facility.",
          "Download the free GettingOut app for iOS or Android. The app is generally well-reviewed and is the most convenient way to schedule video visits, send messages, and manage your account on the go. Log in with the same account details you created on the website.",
          "Some facilities require the inmate to initiate the contact connection rather than allowing you to add them directly. If you cannot find your loved one after creating an account, ask them to add you as a contact from the facility kiosk or tablet.",
        ],
      },
      {
        heading: "How to Schedule a Video Visit Through GettingOut",
        body: [
          "Video visitation is the most popular feature on GettingOut. To schedule a visit, log in to your account or open the app and go to the video visits section. Select your loved one and choose an available date and time from the scheduling calendar.",
          "Review the cost and enter your payment information to complete the booking. You will receive a confirmation. At the scheduled time, log in to your GettingOut account or open the app and join the video call. Make sure your camera and microphone are working before the visit begins.",
          "GettingOut video visits typically cost between $7.50 and $15 per session depending on the facility. Sessions are usually 20 to 30 minutes long. All visits are recorded and monitored by facility staff.",
          "If a scheduled visit is missed because the inmate was not available due to facility operations such as a lockdown or count, contact GettingOut customer service with your confirmation number to request a credit or reschedule.",
        ],
      },
      {
        heading: "How Messaging Works on GettingOut",
        body: [
          "Electronic messaging is available at GettingOut facilities that have contracted for this service. Log in to your account and check your dashboard - if messaging appears as an option, it is available at your facility.",
          "To send a message, select your loved one and click compose. Type your message and submit it. Messages are reviewed by facility staff before delivery. Most messages are delivered within a few hours to one business day.",
          "Messaging costs vary by facility. Some facilities charge per message while others use a credit-based system. Check your dashboard for the current pricing at your specific facility.",
          "GettingOut also supports photo sharing at many facilities. You can upload photos through the app and they are delivered to the inmate after staff review. Photo rules vary by facility - always check the content guidelines before sending.",
        ],
      },
      {
        heading: "How Phone Calls Work Through GettingOut",
        body: [
          "Phone calls through GettingOut work through a prepaid account. You fund an account and the per-minute charge is deducted when the inmate calls your registered number. Inmates must initiate all calls - you cannot call them directly.",
          "To set up phone calls, register your phone number in your GettingOut account and add funds. When the inmate calls your number, the call connects and charges begin. Keep your balance funded to avoid missed calls.",
          "GettingOut phone rates for interstate calls are regulated by the FCC. In-state rates vary by facility. Check your account for the specific rate that applies.",
        ],
      },
      {
        heading: "How to Send Money Through GettingOut",
        body: [
          "GettingOut allows families to send money to an inmate trust or commissary account. Log in to your account, go to the send money section, select your loved one, enter the amount, and pay by credit or debit card.",
          "Transaction fees apply and vary by facility and transfer amount. Keep your confirmation number until you confirm the funds have been credited. Processing times vary but most deposits are credited within one to three business days.",
          "Note that the phone call account and the inmate trust account are separate. Funding your phone account does not add money to the commissary and vice versa. Make sure you are selecting the correct account type when sending funds.",
        ],
      },
    ],

    takeaways: [
      "GettingOut serves over 2,200 county jails across 45 states and is operated by Telmate under the GTL ViaPath Technologies family.",
      "GettingOut is designed for county jails. If your loved one transfers to a state prison, you will likely need a different platform.",
      "Creating a GettingOut account is free at gettingout.com or through the free mobile app.",
      "Video visitation is the most popular feature. Schedule visits in advance through your account. Sessions typically cost between $7.50 and $15.",
      "Messaging, photo sharing, phone calls, and money transfers are all available under the same account at participating facilities.",
      "Phone calls are inmate-initiated. Fund your prepaid account before the inmate calls your registered number.",
      "If your loved one transfers to a state prison, confirm the new facility provider - GettingOut accounts typically do not transfer to state prison systems.",
    ],

    faq: [
      {
        question: "How do I set up a GettingOut account?",
        answer: "Go to gettingout.com or download the GettingOut app and create a free account with your name, email, and phone number. Then search for your loved one facility and add them to your account. Some facilities require the inmate to initiate the contact connection from inside.",
      },
      {
        question: "Which facilities use GettingOut?",
        answer: "GettingOut serves over 2,200 county jails across 45 states. It is designed for county-level facilities rather than state prisons. Search our facility directory or visit gettingout.com to find out if your specific facility uses GettingOut.",
      },
      {
        question: "How much does a GettingOut video visit cost?",
        answer: "Video visits typically cost between $7.50 and $15 per session depending on the facility. Sessions are usually 20 to 30 minutes. You schedule and pay in advance through your GettingOut account or app.",
      },
      {
        question: "Can I send messages through GettingOut?",
        answer: "Electronic messaging is available at facilities that have contracted for this service. Log in to your account and check your dashboard - if messaging appears as an option, it is available. Messages are reviewed by staff before delivery and typically arrive within a few hours to one business day.",
      },
      {
        question: "What happens to my GettingOut account if my loved one transfers to a state prison?",
        answer: "GettingOut accounts are designed for county jails and typically do not transfer to state prison systems. If your loved one is transferred to a state prison after sentencing, you will likely need to create a new account on the provider used by the state facility - most commonly JPay or ConnectNetwork.",
      },
      {
        question: "Is GettingOut the same as GTL or ConnectNetwork?",
        answer: "GettingOut is operated by Telmate, which is owned by GTL as part of ViaPath Technologies. ConnectNetwork is a separate GTL consumer platform used primarily at state prisons and some county jails. GettingOut and ConnectNetwork are different platforms under the same parent company. Use GettingOut for county jails and ConnectNetwork for state prison or federal facilities.",
      },
      {
        question: "How do I send money to an inmate through GettingOut?",
        answer: "Log in to your GettingOut account, go to the send money section, select your loved one, enter the amount, and pay by credit or debit card. Transaction fees apply. Funds are typically credited within one to three business days. Note that the phone account and inmate trust account are separate - make sure you select the correct account type.",
      },
    ],

    relatedGuideSlugs: ["how-video-visitation-works", "how-inmate-messaging-works", "county-jail-vs-state-prison", "how-connectnetwork-works"],
    relatedTermSlugs: ["video-visitation", "inmate-messaging", "county-jail"],
    relatedProviderSlugs: ["gettingout", "gtl", "connectnetwork", "securus"],
    relatedComparisonSlugs: ["gettingout-vs-connectnetwork", "jpay-vs-gettingout"],
    ctaType: "provider",
    ctaTarget: "/provider/gettingout",
    ctaLabel: "View GettingOut Provider Page",
  },

  "canadian-prison-communication-guide": {
    id: "guide-canada-01",
    slug: "canadian-prison-communication-guide",
    title: "Canadian Prison Communication Guide: How to Contact Someone in a Canadian Prison",
    excerpt: "A complete guide for families trying to contact someone in a Canadian federal or provincial prison. Covers the CSC Inmate Telephone System, FedPhoneLine, email, visits, and how to find a federal inmate.",
    category: "International",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 6,
    country: "canada",
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-01",
    seoTitle: "Canadian Prison Communication Guide: Phone Calls, Email and",
    seoDescription: "How to contact someone in a Canadian federal or provincial prison.",

    intro: [
      "Canada's correctional system is divided into two levels. The federal Correctional Service Canada (CSC) manages federal penitentiaries for people serving sentences of two years or more. Provincial and territorial corrections systems manage jails and prisons for sentences under two years and for people in pretrial detention. The communication rules, phone systems, and providers differ significantly between the two levels.",
      "Families trying to contact someone in a Canadian prison face a different system than US families. Canada does not use JPay or CorrLinks. Federal inmates in CSC facilities use the Inmate Telephone System (ITS), which operates through Smart Cards and PINs. FedPhoneLine is the most widely used service that helps families receive calls from Canadian federal inmates on their cell phones.",
      "This guide covers the key steps for contacting someone in a Canadian federal prison, finding an inmate through the CSC offender locator, understanding provincial jail communication, and using email and mail where available.",
    ],

    sections: [
      {
        heading: "Federal vs Provincial: Which System Is Your Loved One In?",
        body: [
          "Federal sentences in Canada are two years or more and are served in CSC penitentiaries. Provincial sentences are under two years and are served in provincial jails or remand centers. This distinction is critical because the phone systems, email options, and rules are completely different between the two levels.",
          "If you are not sure which system your loved one is in, use the CSC offender locator at csc-scc.gc.ca. If they appear in the CSC database, they are in the federal system. If they do not appear, they are likely in a provincial jail. Contact the provincial corrections ministry or the local jail directly for provincial inmates.",
        ],
      },
      {
        heading: "Phone Calls from Canadian Federal Prisons",
        body: [
          "Canadian federal inmates use the Inmate Telephone System (ITS) to make outgoing calls. Inmates cannot receive incoming calls. Before an inmate can call you, your phone number must be added to their authorized call list. The institution verifies and approves all numbers before they can be called.",
          "Inmates use a Smart Card or PIN to access the phone system and link to their authorized call list. The Smart Card stays with the inmate if they transfer to another CSC facility. Calls are typically charged to the inmate's canteen account or placed as collect calls.",
          "The biggest challenge for Canadian families is that most inmates call from payphones using the local call rate, which is typically $0.40 per call. If you have a cell phone or a number outside the local calling area, you may receive expensive long distance charges. FedPhoneLine solves this problem by providing you a local phone number that the inmate can call at the local rate.",
        ],
      },
      {
        heading: "What Is FedPhoneLine?",
        body: [
          "FedPhoneLine is a service that provides families with a local phone number that federal inmates can call at the local call rate. Instead of calling your cell phone long distance, the inmate calls the FedPhoneLine number which then connects to your actual phone. FedPhoneLine has been helping Canadian families for over 10 years.",
          "To use FedPhoneLine, create an account at fedphoneline.com, select the institution where your loved one is held, and choose a plan. FedPhoneLine will provide you a local number by email. Give this number to your loved one and have them add it to their authorized call list at the institution. Once approved the inmate can call the FedPhoneLine number which connects directly to your phone.",
        ],
      },
      {
        heading: "How to Find Someone in a Canadian Federal Prison",
        body: [
          "The Correctional Service Canada maintains a free public offender locator at csc-scc.gc.ca. Search by the person's full name to find their current CSC institution, security level, and expected release date. The locator shows whether the person is eligible for parole and their current location within the federal system.",
          "For provincial inmates, there is no single national database. Each province manages its own jail system. Contact the provincial corrections ministry or the local jail directly. Ontario does not have an online locator and requires a direct phone call to the specific facility.",
        ],
      },
      {
        heading: "Email and Mail at Canadian Federal Prisons",
        body: [
          "Email availability at CSC federal institutions varies by facility. Some institutions offer email programs while others do not. Contact the specific institution directly to find out whether email is available and how to register as an approved contact.",
          "Physical mail is accepted at all CSC federal institutions. Write the inmate's full name and CSC number on the envelope along with the institution mailing address. All non-legal mail is inspected before delivery. Legal mail from lawyers is treated as privileged correspondence and is not read by staff.",
        ],
      },
      {
        heading: "Provincial Jail Communication",
        body: [
          "Provincial jails across Canada each have their own phone systems and rules. Some provinces have standardized systems while others vary by facility. Ontario provincial jails often use Telmate or similar providers. British Columbia provincial jails have their own communication systems.",
          "For provincial jail phone calls, contact the specific facility directly to find out which phone provider they use, how to add your number to the approved list, and whether collect calls or prepaid accounts are required. Rules change by province and by facility.",
        ],
      },
    ],

    takeaways: [
      "Canada has two separate systems: federal (CSC) for sentences of two years or more, and provincial for shorter sentences and pretrial detention. Rules differ significantly between them.",
      "Canada does not use JPay or CorrLinks. Federal inmates use the CSC Inmate Telephone System (ITS) with Smart Cards and PINs.",
      "FedPhoneLine at fedphoneline.com provides a local phone number so families with cell phones or out-of-area numbers avoid expensive long distance charges from prison payphones.",
      "Use the CSC offender locator at csc-scc.gc.ca to confirm whether your loved one is in the federal system before setting up any communication accounts.",
      "Provincial jails have no national database or standard system. Contact the specific province or facility directly.",
      "Email availability at CSC institutions varies by facility. Physical mail is accepted everywhere and requires the inmate's full name and CSC number.",
    ],

    faq: [
      {
        question: "Do Canadian federal prisons use JPay or CorrLinks?",
        answer: "No. Canadian federal prisons operate their own Inmate Telephone System (ITS) through the Correctional Service Canada. JPay and CorrLinks are US-only services that do not operate in Canada. FedPhoneLine is the most widely used service for Canadian federal inmate phone calls.",
      },
      {
        question: "What is FedPhoneLine and do I need it?",
        answer: "FedPhoneLine provides families with a local phone number that federal inmates can call at the local call rate from CSC prison payphones. Without FedPhoneLine, inmates calling cell phones or numbers outside the local calling area generate expensive long distance charges. If you have a cell phone or live outside the prison local calling area, FedPhoneLine is strongly recommended. Sign up at fedphoneline.com.",
      },
      {
        question: "How do I find someone in a Canadian federal prison?",
        answer: "Use the CSC offender locator at csc-scc.gc.ca. Search by the person's full name to find their current institution and basic information. For provincial jail inmates, contact the provincial corrections ministry or the specific jail directly as there is no national database for provincial inmates.",
      },
      {
        question: "How long does it take for a new number to be approved on the call list?",
        answer: "Processing times vary by institution. The CSC requires that all phone numbers be verified before an inmate can call them. This process can take several days to a few weeks depending on the facility workload. Contact the institution case management officer to check on the approval status of a new number.",
      },
      {
        question: "Can I call a Canadian prison inmate directly?",
        answer: "No. Canadian federal inmates cannot receive incoming calls. All calls are outgoing from the inmate using the prison phone system. The inmate must initiate the call to your number which must be on their approved call list.",
      },
      {
        question: "What is a CSC number?",
        answer: "The CSC number is the identification number assigned to every person in Canadian federal custody. It must appear on all mail sent to CSC institutions. You can find the CSC number using the offender locator at csc-scc.gc.ca or by asking your loved one to provide it.",
      },
      {
        question: "Is there an email system for Canadian federal prisons?",
        answer: "Email availability varies by CSC institution. Some institutions offer email programs while others rely on physical mail only. Contact the specific institution directly to find out whether email is available and how to register. Physical mail is accepted at all CSC institutions.",
      },
      {
        question: "What is the difference between a federal penitentiary and a provincial jail in Canada?",
        answer: "Federal penitentiaries hold people serving sentences of two years or more and are operated by the Correctional Service Canada. Provincial jails hold people serving sentences under two years and pretrial detainees, and are operated by each province. Phone systems, email availability, and visitation rules differ between the two systems.",
      },
    ],

    relatedGuideSlugs: ["uk-prison-communication-guide", "australian-prison-communication-guide", "how-to-find-an-inmate"],
    relatedTermSlugs: [],
    relatedProviderSlugs: [],
    relatedComparisonSlugs: [],
    ctaType: "directory",
    ctaTarget: "/guides",
    ctaLabel: "Browse All Guides",
  },

  "uk-prison-communication-guide": {
    id: "guide-uk-01",
    slug: "uk-prison-communication-guide",
    title: "UK Prison Communication Guide: Phone Calls, Email a Prisoner and Visits",
    excerpt: "A complete guide for families trying to contact someone in a UK prison. Covers phone calls, Email a Prisoner, video calls, visits, sending money, and finding a prisoner in England, Wales, Scotland, and Northern Ireland.",
    category: "International",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    country: "uk",
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-01",
    seoTitle: "UK Prison Communication Guide: Phone Calls, Email and",
    seoDescription: "How to contact someone in a UK prison. Learn how prison phone calls work in England and Wales, how to use Email a Prisoner, video calls, visits, and how to",

    intro: [
      "The United Kingdom prison system is divided into three separate systems. England and Wales share a prison system managed by His Majesty's Prison and Probation Service (HMPPS). Scotland has its own system managed by the Scottish Prison Service. Northern Ireland has its own system managed by the Northern Ireland Prison Service. Communication rules differ slightly between these systems.",
      "UK prisons do not use JPay, CorrLinks, or US-style communication providers. Phone calls from UK prisons use dedicated prison phone systems. Email a Prisoner is the most widely used service for sending electronic messages to people in UK prisons. Video calls are available at many UK prisons through secure apps approved by the prison service.",
      "This guide covers the essential steps for contacting someone in an England and Wales prison and notes key differences for Scotland and Northern Ireland.",
    ],

    sections: [
      {
        heading: "Phone Calls from UK Prisons",
        body: [
          "Prison inmates in the UK can only make outgoing calls using designated prison phones. They cannot receive incoming calls. Inmates must register phone numbers on their approved contact list before calling. All non-legal calls are recorded and monitored by prison staff.",
          "Prison phone calls in the UK are charged at standard rates. Calls from prison phones are typically paid from the inmate's prison account (sometimes called a private cash account). To receive calls, your number must be on the inmate's approved list. Save the prison's outgoing number in your contacts so you recognise the call when it comes.",
          "Prison Phone is a UK service available at prisonphone.co.uk that provides mobile plans specifically designed to reduce costs for families receiving prison calls. The Prisoners Families Helpline at 0808 808 2003 can advise on reducing call costs.",
        ],
      },
      {
        heading: "Email a Prisoner",
        body: [
          "Email a Prisoner is a UK service that allows families to send electronic messages to prisoners in England and Wales. Messages are sent digitally and printed for delivery to the prisoner. The service is available at emailaprisoner.com. Each message costs a small fee paid by the sender.",
          "Email a Prisoner is not real-time email. Messages are printed and delivered as physical letters to the prisoner's cell. The prisoner reads the printed letter and can respond through the prison mail system. This service is available at most prisons in England and Wales.",
        ],
      },
      {
        heading: "Video Calls",
        body: [
          "Video calls are available at many UK prisons. Prisoners are typically entitled to one free video call per month of up to 30 minutes under current HM Prison and Probation Service guidelines. Additional video calls may be available at some facilities.",
          "To arrange a video call, you must be on the prisoner's approved visitor list. Install the secure video calling app used by that prison. Check with the specific prison to confirm which app they use and how to schedule a call. All video calls are recorded.",
        ],
      },
      {
        heading: "Visits",
        body: [
          "In-person visits require advance approval. You must be on the prisoner's approved visitor list and book visits in advance through the prison. Each prisoner is entitled to a minimum number of visits per month based on their security category and behaviour.",
          "Visit booking can often be done online through the prison's own system or by phone. Bring photo ID to every visit. Follow the prison dress code. Contact the specific prison for current visiting rules as they vary by facility and security level.",
        ],
      },
      {
        heading: "Sending Money",
        body: [
          "Money can be sent to prisoners in England and Wales through the Prison Service online payment system at gov.uk. Use the prisoner's name and prisoner number. Payments are processed and added to the prisoner's private cash account. The prisoner uses this account for phone calls, canteen purchases, and approved items.",
        ],
      },
      {
        heading: "Finding a Prisoner",
        body: [
          "Use the Find a Prisoner service at gov.uk to locate someone in an England and Wales prison. The prisoner must give their consent for their information to be shared unless the request comes from certain organisations such as police or solicitors.",
          "For Scotland, contact the Scottish Prison Service directly. For Northern Ireland, contact the Northern Ireland Prison Service. Contact details for all prisons can be found on the respective prison service websites.",
        ],
      },
      {
        heading: "Support for Families",
        body: [
          "The Prisoners Families Helpline provides free, confidential information and support for anyone with a loved one in UK prison. Call 0808 808 2003 Monday to Friday 9am to 8pm and Saturday to Sunday 10am to 3pm. The helpline is operated by the Prison Advice and Care Trust (PACT).",
          "In Scotland, contact the Families Outside support and information helpline at 0800 254 0088. In Northern Ireland, contact the Family Links service.",
        ],
      },
    ],

    takeaways: [
      "The UK has three separate prison systems: England and Wales (HMPPS), Scotland, and Northern Ireland, each with slightly different rules.",
      "UK prisons do not use JPay or CorrLinks. Email a Prisoner at emailaprisoner.com is the main service for sending digital messages, which are printed and delivered as letters.",
      "Prisoners can only make outgoing calls and cannot receive incoming calls. Your number must be on their approved contact list first.",
      "Prisoners are typically entitled to one free video call per month of up to 30 minutes under current HMPPS guidelines.",
      "Send money through the Prison Service online payment system at gov.uk using the prisoner's name and prisoner number.",
      "Use Find a Prisoner at gov.uk for England and Wales. Scotland and Northern Ireland each have their own prison services to contact directly.",
      "The Prisoners Families Helpline at 0808 808 2003 offers free, confidential support for families of UK prisoners.",
    ],

    faq: [
      {
        question: "Do UK prisons use JPay or CorrLinks?",
        answer: "No. UK prisons use their own phone systems managed by HM Prison and Probation Service in England and Wales. JPay and CorrLinks are US-only services. Email a Prisoner at emailaprisoner.com is the main electronic messaging service for UK prisons.",
      },
      {
        question: "What is Email a Prisoner?",
        answer: "Email a Prisoner is a UK service at emailaprisoner.com that lets families send electronic messages to prisoners. Messages are printed and delivered as physical letters. The prisoner reads them in their cell. Each message costs a small fee. The prisoner can respond by standard mail.",
      },
      {
        question: "How do I find someone in a UK prison?",
        answer: "Use the Find a Prisoner service at gov.uk for prisons in England and Wales. The prisoner must consent to sharing their information unless the request is from police or solicitors. For Scotland, contact the Scottish Prison Service. For Northern Ireland, contact the Northern Ireland Prison Service.",
      },
      {
        question: "How do I send money to someone in a UK prison?",
        answer: "Send money through the Prison Service online payment system at gov.uk. Use the prisoner's name and prisoner number. Payments are added to the prisoner's private cash account which they use for phone calls, canteen, and approved purchases.",
      },
      {
        question: "How many visits is a prisoner entitled to in the UK?",
        answer: "The minimum number of visits depends on the prisoner's security category and behaviour. Standard prisoners in England and Wales are entitled to at least two visits per month. Prisoners on enhanced status may be entitled to more. Contact the specific prison for current visiting entitlements.",
      },
      {
        question: "Where can I get support as a family member of a UK prisoner?",
        answer: "The Prisoners Families Helpline at 0808 808 2003 provides free, confidential support Monday to Friday 9am to 8pm and Saturday to Sunday 10am to 3pm. In Scotland, call Families Outside at 0800 254 0088. In Northern Ireland, contact the Family Links service.",
      },
      {
        question: "Are UK prison phone calls free?",
        answer: "No. Prison phone calls in the UK are charged at standard rates paid from the inmate's prison account. However some prison reform advocacy groups are pushing for reduced rates. The Prisoners Families Helpline at 0808 808 2003 can advise on reducing call costs.",
      },
      {
        question: "Can I receive calls directly from a UK prison?",
        answer: "No. Prisoners can only make outgoing calls from designated prison phones. They cannot receive incoming calls. Your number must be on the prisoner's approved contact list before they can call you. Save the prison's outgoing phone number in your contacts so you recognise the call.",
      },
    ],

    relatedGuideSlugs: ["canadian-prison-communication-guide", "australian-prison-communication-guide", "how-to-find-an-inmate"],
    relatedTermSlugs: [],
    relatedProviderSlugs: [],
    relatedComparisonSlugs: [],
    ctaType: "directory",
    ctaTarget: "/guides",
    ctaLabel: "Browse All Guides",
  },

  "australian-prison-communication-guide": {
    id: "guide-au-01",
    slug: "australian-prison-communication-guide",
    title: "Australian Prison Communication Guide: Phone Calls, Email and Visits by State",
    excerpt: "A complete guide for families trying to contact someone in an Australian prison. Covers phone calls, email, video visits, sending money, and finding a prisoner in NSW, Victoria, Queensland, and other Australian states.",
    category: "International",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 6,
    country: "australia",
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-01",
    seoTitle: "Australian Prison Communication Guide: Phone Calls, Email",
    seoDescription: "How to contact someone in an Australian prison.",

    intro: [
      "Australia's prison system is managed separately by each state and territory. New South Wales (NSW), Victoria, Queensland, Western Australia, South Australia, Tasmania, the Australian Capital Territory, and the Northern Territory each operate their own correctional systems with different rules, phone systems, and communication options. There is no single national prison communication platform in Australia.",
      "Australian prisons do not use JPay, CorrLinks, or US-style communication providers. Each state has its own phone system for outgoing inmate calls. Inmates cannot receive incoming calls. Email options vary significantly by state, with some states offering digital messaging while others rely on physical mail only.",
      "This guide covers the key steps for contacting someone in an Australian state prison, with specific information for NSW and Victoria, which together hold the largest prison populations.",
    ],

    sections: [
      {
        heading: "Phone Calls: How Australian Prison Phones Work",
        body: [
          "Australian prisoners can make outgoing calls but cannot receive incoming calls. Inmates must have their numbers approved on their Personal Allowed Numbers (PAN) list before calling. All non-legal calls are recorded and monitored. Call duration is typically limited to 10 minutes to ensure fair access across all inmates.",
          "Phone calls from Australian prisons are paid from the inmate's prison account. Prisoners can transfer money from their general prison account to their telephone account. Some states allow families to top up the inmate's phone account directly through the prison's approved payment system.",
        ],
      },
      {
        heading: "NSW Prison Phone Calls",
        body: [
          "In New South Wales, the Offenders Telephone System (OTS) regulates all prison phone calls. Regulations introduced in June 2023 require that phone numbers on the approved list be fixed local numbers with a single answering location, no VoIP, and no call diversion. This means most cell phones cannot be directly added to NSW prison approved lists under the current OTS rules.",
          "NSW Prison Calling at nswprisoncalling.com.au is a service built specifically for OTS compliance. It provides a compliant fixed local number for $39 per month with unlimited calling. The inmate pays the standard $0.40 local call rate. Your loved one adds the NSW Prison Calling number to their approved list at the prison.",
        ],
      },
      {
        heading: "Victoria Prison Phone Calls and Video Visits",
        body: [
          "Victoria's correctional facilities offer phone calls and video visits. Video visits are available at Victorian prisons and can be scheduled through the prison's approved system. Families can send emails to prisoners in Victoria through the approved email program at corrections.vic.gov.au.",
          "Contact the specific Victorian prison to confirm current phone account setup procedures, video visit scheduling, and email registration requirements. Rules and availability vary by facility.",
        ],
      },
      {
        heading: "South Australia Prison Phone Calls",
        body: [
          "South Australia's Department for Correctional Services allows inmates to make calls to numbers on their approved list of up to 10 authorized numbers. Legal numbers and support group contacts are included in the 10 allowed numbers. After completing a phone access form, numbers are approved within 24 hours.",
          "A credit of $1 is given to each inmate's account when first admitted. Inmates can transfer money from their prison account to their telephone account on a weekly or monthly basis. Calls are limited to 10 minutes for fair access. All calls except to approved legal numbers are recorded.",
        ],
      },
      {
        heading: "Sending Email in Australia",
        body: [
          "Email availability varies significantly by state and facility. Victoria offers an email program for some facilities. South Australia and other states may have limited or no email programs. Contact the specific prison directly to find out whether email is available and how to register.",
          "Where email is not available, physical mail is accepted at all Australian state prisons. Letters must include the prisoner's full name and prisoner number on the envelope. Mail is inspected before delivery. Legal mail from lawyers is treated as privileged and is not read by staff.",
        ],
      },
      {
        heading: "Finding a Prisoner in Australia",
        body: [
          "There is no single national prisoner locator in Australia. Each state manages its own records. Contact the state corrections department directly or call the specific prison to confirm a prisoner's location. For NSW, contact Corrective Services NSW at correctiveservices.dcj.nsw.gov.au. For Victoria, contact Corrections Victoria at corrections.vic.gov.au.",
          "Ask your loved one to provide their prisoner number (sometimes called a CSID or ID number) as soon as possible. This number is required for all communication account setup, mail, and sending money.",
        ],
      },
      {
        heading: "Sending Money to Australian Prisoners",
        body: [
          "Money transfer procedures vary by state. In South Australia, families can top up a prisoner's telephone account directly. In NSW, deposits are made through the prison's approved payment system. Contact the specific prison to confirm the current accepted payment methods before sending money.",
        ],
      },
    ],

    takeaways: [
      "Australia has no national prison system. Each state and territory (NSW, Victoria, Queensland, WA, SA, Tasmania, ACT, NT) runs its own correctional system with different rules.",
      "Australian prisons do not use JPay or CorrLinks. Inmates can only make outgoing calls and must have your number approved on their Personal Allowed Numbers (PAN) list first.",
      "NSW's Offenders Telephone System (OTS), updated in June 2023, requires fixed local numbers with no VoIP or call diversion, which blocks most direct cell phone additions. NSW Prison Calling offers a compliant local number for $39 per month.",
      "Email availability varies by state. Victoria offers an email program at some facilities; other states rely mainly on physical mail.",
      "There is no national prisoner locator. Contact the specific state corrections department, such as Corrective Services NSW or Corrections Victoria, or the facility directly.",
      "Money transfer methods vary by state. Confirm the accepted payment method with the specific prison before sending funds.",
    ],

    faq: [
      {
        question: "Do Australian prisons use JPay or CorrLinks?",
        answer: "No. Australian prisons use their own state-managed phone systems. JPay and CorrLinks are US-only services. Each Australian state has its own communication setup. NSW uses the Offenders Telephone System (OTS). Victoria has its own system. Contact the specific prison for current communication options.",
      },
      {
        question: "Can I add my cell phone number to an Australian prison approved list?",
        answer: "It depends on the state. In NSW, the OTS regulations introduced in June 2023 require fixed local numbers with no VoIP and no call diversion, which means most cell phones cannot be directly added. NSW Prison Calling at nswprisoncalling.com.au provides a compliant local number that connects to your cell phone. In other states, policies vary. Contact the specific facility.",
      },
      {
        question: "How do I find someone in an Australian prison?",
        answer: "There is no single national prisoner locator. Contact the state corrections department or the specific prison directly. For NSW, contact Corrective Services NSW. For Victoria, contact Corrections Victoria. Ask your loved one to provide their prisoner number as soon as possible.",
      },
      {
        question: "How long are prison phone calls in Australia?",
        answer: "Call duration varies by state. In South Australia, calls are normally limited to 10 minutes to ensure fair access. Other states have similar limits. Calls are outgoing only from the inmate using designated prison phones during scheduled access times.",
      },
      {
        question: "Is email available at Australian prisons?",
        answer: "Email availability varies significantly by state and facility. Victoria offers email programs at some facilities. Other states may have limited or no email programs. Contact the specific prison to confirm whether email is available and how to register.",
      },
      {
        question: "Are Australian prison phone calls free?",
        answer: "No. Prison phone calls in Australia are charged from the inmate's prison account. The inmate typically pays the local call rate from the prison payphone. In NSW, the standard rate is $0.40 per local call. Families can help by ensuring the inmate has funds in their prison account.",
      },
      {
        question: "What is NSW Prison Calling?",
        answer: "NSW Prison Calling at nswprisoncalling.com.au is a service that provides a compliant local phone number for families to receive calls from NSW prisoners under the OTS regulations. The service costs $39 per month with unlimited calling. The inmate pays the $0.40 standard local call rate. The number must be approved on the inmate's PAN list at the prison.",
      },
      {
        question: "How do I send money to someone in an Australian prison?",
        answer: "Money transfer procedures vary by state. Contact the specific prison to confirm current accepted payment methods. In South Australia, families can top up the inmate's telephone account directly. Keep the inmate's prisoner number ready as it is required for all financial transactions.",
      },
    ],

    relatedGuideSlugs: ["canadian-prison-communication-guide", "uk-prison-communication-guide", "how-to-find-an-inmate"],
    relatedTermSlugs: [],
    relatedProviderSlugs: [],
    relatedComparisonSlugs: [],
    ctaType: "directory",
    ctaTarget: "/guides",
    ctaLabel: "Browse All Guides",
  },

  "corrlinks-invite-code-not-working": {
    id: "guide-24",
    slug: "corrlinks-invite-code-not-working",
    title: "CorrLinks Invite Code Not Working? How to Fix It",
    excerpt: "CorrLinks invite code not working or never arrived? Learn why the invitation email goes missing, when codes expire, and step-by-step fixes to get connected.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 5,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "CorrLinks Invite Code Not Working: 7 Fixes That Work",
    seoDescription: "CorrLinks invite code not working? Why the invitation email never arrives, when codes expire, and step-by-step fixes to get connected.",

    intro: [
      "CorrLinks will not let you create a contact connection on your own. The inmate must add you through the TRULINCS terminal, and CorrLinks sends an invitation email containing an authorization (identification) code. Without that code, you cannot complete registration.",
      "This invitation step is the single most common place where families get stuck. The invitation email never arrives, arrives but the code is rejected, or the code worked once and now seems expired. Each of these has a different fix.",
      "This guide walks through every common failure point in the CorrLinks invitation process, based on reports from families who worked through the same problems. Follow the fixes in order before asking the inmate to resubmit the request again.",
    ],

    sections: [
      {
        heading: "Why Your CorrLinks Invitation Email Never Arrives",
        body: [
          "The most common reason is simple: the invitation went to the wrong email address or landed in spam. The inmate enters your email address on the TRULINCS terminal by hand. One wrong character means the invitation went to someone else or nowhere at all.",
          "Check your spam, junk, and promotions folders for mail from CorrLinks. Users report that invitations from CorrLinks frequently land in spam folders, especially on Gmail and Yahoo accounts. Search your entire mailbox for the word CorrLinks before doing anything else.",
          "Ask your loved one to read the email address back to you exactly as they entered it on the terminal. If it does not match your real address exactly, they need to submit the contact request again with the correct address. There is no way to fix a mistyped address from the CorrLinks website.",
          "If several requests have been sent and nothing has arrived at either of your email addresses, ask the inmate to confirm the request actually went through. TRULINCS terminals can time out or fail to submit the request without the inmate realizing it.",
        ],
      },
      {
        heading: "CorrLinks Invite Code Expiry and Timeline",
        body: [
          "CorrLinks identification codes do expire. Families report codes becoming invalid after roughly 10 days if the registration was never completed. If you waited more than a week after receiving the invitation, the code may no longer work.",
          "When a code expires, there is no reset or extension option on the CorrLinks website. The inmate must submit a fresh contact request through TRULINCS, which generates a new invitation email with a new code.",
          "Register as soon as the invitation arrives. Do not wait. The registration itself is quick, and completing it within a day or two eliminates expiry as a possible problem.",
        ],
      },
      {
        heading: "How to Enter the Invite Code Correctly",
        body: [
          "Many rejected codes are simply entered incorrectly. Go to corrlinks.com and click the Register button under the New User block. Enter the email address exactly as it appears in the invitation email, including the full domain name after the @ sign.",
          "Copy and paste the identification code directly from the invitation email into the Identification Code box instead of typing it by hand. This eliminates mistakes from confusing characters like the number 0 and the letter O.",
          "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number. If your password does not meet these rules, the registration will fail and the error may look like a code problem.",
          "Make sure Caps Lock is off when entering the email address. Email addresses are not case sensitive in practice, but entering exactly what the invitation shows removes one more variable.",
        ],
      },
      {
        heading: "Why You Must Use the Same Email Address",
        body: [
          "A frequent trap: the inmate had the code sent to one email address, but you try to register with a different one. CorrLinks ties the identification code to the email address the invitation was sent to. Registering with a different address will not work even if the code is copied perfectly.",
          "Use the exact email address from the invitation email for every step of registration. If that address is one you no longer use, the inmate needs to resubmit the request with your current address and you need to start with the new invitation.",
          "If you need the invitation sent to a second email address because you have two accounts, the inmate must submit a separate contact request for the other address. One invitation cannot be redirected to a different address.",
        ],
      },
      {
        heading: "What To Do After Registration Is Approved",
        body: [
          "After submitting registration, the account typically activates within about 30 minutes. If you try to log in immediately and it fails, wait at least half an hour before assuming something went wrong.",
          "After logging in, you still need to accept the contact request from the inmate before you can exchange messages. Registration alone does not complete the connection. Look for the pending contact request in your account and accept it.",
          "If more than 24 hours have passed with no activation and no error message, contact CorrLinks support. Keep your registration confirmation email as documentation.",
        ],
      },
      {
        heading: "When to Ask the Inmate to Resubmit the Request",
        body: [
          "Ask for a fresh request when any of these are true: the original code is more than 10 days old, the invitation went to a mistyped address, the code keeps being rejected after careful copy-paste, or no invitation ever arrived despite correct details.",
          "Before asking for a resubmit, have the inmate check their TRULINCS contact list. If you appear as removed or as a pending entry that never resolved, ask them to delete the old entry first so the new request starts clean.",
          "Note that the Bureau of Prisons limits inmates to 10 approved CorrLinks contacts at one time. If the inmate is at the limit, new requests cannot be processed until an inactive contact is removed. This can look exactly like an invitation problem from your side.",
        ],
      },
    ],

    takeaways: [
      "The CorrLinks invitation process must start with the inmate on the TRULINCS terminal. You cannot generate an invite code yourself.",
      "Check spam and junk folders before assuming the invitation never came. CorrLinks mail is frequently filtered.",
      "Codes can expire after roughly 10 days. Register within a day or two of receiving the invitation.",
      "Copy and paste the code from the email. Do not type it by hand.",
      "Use the exact email address the invitation was sent to, and pick a password with uppercase, lowercase, and a number.",
      "Activation typically takes about 30 minutes after registration is submitted.",
      "If the inmate is already at the 10-contact limit, no new invitation can be processed until a contact is removed.",
    ],

    faq: [
      {
        question: "Why does CorrLinks say my invite code is invalid?",
        answer: "The most common causes are a mistyped code, a code older than about 10 days, or registering with a different email address than the one the invitation was sent to. Copy and paste the code directly from the email, use the exact invited address, and request a new code if the original is old.",
      },
      {
        question: "My CorrLinks invitation email never arrived. What do I do?",
        answer: "Search your spam and junk folders for CorrLinks first. Then have the inmate read back the email address they entered on the terminal to catch typos. If the address was wrong or the mail still does not arrive, ask them to resubmit the contact request. Also check whether the inmate is at the 10-contact limit, which blocks new requests.",
      },
      {
        question: "Can I request a CorrLinks invite myself?",
        answer: "No. Only the inmate can initiate the contact request from a TRULINCS terminal at the facility. Outside contacts cannot generate invitation codes. If you have no inmate connection yet, you need your loved one to submit your name and email address from inside.",
      },
      {
        question: "How long does CorrLinks activation take after registering?",
        answer: "Typically around 30 minutes. If you cannot log in immediately, wait at least half an hour. If 24 hours pass with no activation, contact CorrLinks support and keep your registration confirmation email as documentation.",
      },
      {
        question: "Can I use one CorrLinks account for two different email addresses?",
        answer: "One CorrLinks login is tied to one email address. If the inmate needs to invite you at a second address, they must submit a separate contact request for that address, which generates a separate invitation and code.",
      },
    ],

    relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-add-second-inmate", "how-inmate-messaging-works", "how-to-set-up-inmate-email"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "federal-prison"],
    relatedProviderSlugs: ["corrlinks"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks"],
    ctaType: "provider",
    ctaTarget: "/provider/corrlinks",
    ctaLabel: "View CorrLinks Details",
  },

  "corrlinks-add-second-inmate": {
    id: "guide-25",
    slug: "corrlinks-add-second-inmate",
    title: "How to Add a Second Inmate on CorrLinks",
    excerpt: "CorrLinks says your email is already in use? Learn how to add a second inmate to your existing CorrLinks account using Account Management and the identification code.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "How to Add a Second Inmate on CorrLinks (Email in Use Fix)",
    seoDescription: "How to add a second inmate on CorrLinks when it says your email is already in use. Log in, open Account Management, Manage My Inmate List, enter the code.",

    intro: [
      "You do not need a new CorrLinks account for each inmate. One CorrLinks account can hold multiple inmate connections, and each new inmate is added to the existing account with their own identification code.",
      "The confusion comes from the registration screen. If you try to register again with the same email address for a second inmate, CorrLinks rejects you with an email already in use message. That error is telling you that you already have an account, not that the second inmate cannot be added.",
      "This guide shows the correct steps to add another inmate to your existing CorrLinks account.",
    ],

    sections: [
      {
        heading: "Why CorrLinks Says Your Email Is Already in Use",
        body: [
          "The email already in use error appears when you click Register instead of Log In. Your email address is already tied to your CorrLinks account from the first inmate, so the registration system refuses to create a duplicate account with the same address.",
          "The fix is not to create a second account. It is to log in to your existing account and add the second inmate through Account Management. Each inmate needs their own identification code, but the login stays the same.",
          "Do not try to work around this with a second email address. Managing multiple CorrLinks logins creates confusion, and you still need each inmate to invite each address separately.",
        ],
      },
      {
        heading: "How to Add a Second Inmate Step by Step",
        body: [
          "First, ask the second inmate to add you as a contact from their TRULINCS terminal, exactly like the first one did. They must enter your email address and you will receive a separate invitation email with a new identification code for this inmate.",
          "Log in to www.corrlinks.com with your existing account. Do not click Register. Use the same email and password you already set up.",
          "Click Account Management, then click Manage My Inmate List. Choose the Federal Bureau of Prisons as the agency when prompted.",
          "Enter the new identification code in the code field. Important: enter the identification code from the invitation email, not the inmate register number. These are different values and the register number will not work here. Then click Go.",
          "After the code is accepted, the second inmate appears in your contact list. Accept the pending contact request to complete the connection. You can now message both inmates from the same login.",
        ],
      },
      {
        heading: "Identification Code vs Register Number",
        body: [
          "This is the most common stumbling point. The identification code is the authorization code CorrLinks emails you when an inmate requests you as a contact. The register number is the inmate federal ID number assigned by the Bureau of Prisons.",
          "When adding a new inmate through Manage My Inmate List, the field asks for the identification code. Entering the register number here fails. If you do not have an invitation email with a code, the inmate has not submitted the contact request yet.",
          "Each inmate generates a separate identification code tied to your email address. Codes are not shared between inmates and cannot be reused.",
        ],
      },
      {
        heading: "Limits When Adding Multiple Inmates",
        body: [
          "One CorrLinks account can hold connections to multiple inmates without a fixed limit on the outside contact side. The limit that matters is on the inmate side: each inmate can have at most 10 outside contacts at one time under Bureau of Prisons rules.",
          "If an inmate cannot add you because they already have 10 contacts, no registration trick will fix it. They need to remove an inactive contact from their TRULINCS terminal before the new request can go through.",
          "Remember that CorrLinks is only for federal inmates. If the second person is in a state prison or county jail, you need a different platform entirely, and no amount of CorrLinks troubleshooting will connect you.",
        ],
      },
    ],

    takeaways: [
      "One CorrLinks account handles multiple inmates. Do not create a second account.",
      "Log in to your existing account, then go to Account Management and Manage My Inmate List to add the next inmate.",
      "Enter the identification code from the invitation email, not the inmate register number.",
      "Each new inmate must send you their own invitation with their own code.",
      "The email already in use message means you clicked Register instead of Log In.",
    ],

    faq: [
      {
        question: "Why does CorrLinks say my email address is already in use?",
        answer: "Because you clicked Register instead of Log In. Your email is already attached to your CorrLinks account. Log in to your existing account and add the second inmate through Account Management, then Manage My Inmate List.",
      },
      {
        question: "What is the difference between the identification code and the register number?",
        answer: "The identification code is the authorization code CorrLinks emails you when an inmate requests you as a contact. The register number is the inmate federal ID number. When adding an inmate, enter the identification code, not the register number.",
      },
      {
        question: "How many inmates can I connect with on one CorrLinks account?",
        answer: "There is no fixed limit on the outside contact side. You can add multiple inmates to one login. The binding limit is on the inmate side: each inmate can have at most 10 approved CorrLinks contacts at one time.",
      },
      {
        question: "I added the code but the second inmate does not show up. What now?",
        answer: "Make sure you entered the identification code from the latest invitation email, not the register number. Then look for a pending contact request and accept it. If the code keeps failing, ask the inmate to resubmit the contact request from TRULINCS so you get a fresh code.",
      },
    ],

    relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working", "how-inmate-messaging-works", "federal-prison-vs-state-prison"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "federal-prison"],
    relatedProviderSlugs: ["corrlinks"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks"],
    ctaType: "provider",
    ctaTarget: "/provider/corrlinks",
    ctaLabel: "View CorrLinks Details",
  },

  "how-to-tell-if-inmate-blocked-you-on-jpay": {
    id: "guide-26",
    slug: "how-to-tell-if-inmate-blocked-you-on-jpay",
    title: "How to Tell If an Inmate Blocked You on JPay",
    excerpt: "JPay does not notify you when an inmate removes you. Learn the real signs you were blocked, how to check, and what to do about it.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 5,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "How to Tell If an Inmate Blocked You on JPay: 5 Signs",
    seoDescription: "How to tell if an inmate blocked you on JPay: no notification is sent when you are removed. Check these 5 signs and learn how to confirm your status.",

    intro: [
      "If an inmate removes you from their contacts on JPay, you will not receive any notification. There is no you were removed message, no email, and no status change announced on your account. This silence is by design and it confuses nearly everyone the first time it happens.",
      "That means you have to read the indirect signs: messages that stop getting replies, a contact that disappears from your list, options like Send Message that are suddenly greyed out. Each sign on its own is ambiguous, but several together usually tell the story.",
      "This guide covers what actually happens when an inmate removes you, the signs to check, and how to rule out other causes like facility restrictions or account problems.",
    ],

    sections: [
      {
        heading: "JPay Does Not Notify You When You Are Removed",
        body: [
          "The first thing to understand is that JPay sends no alert when an inmate deletes or blocks a contact. Your account will not show a banner, your email will get nothing, and the app will not push a notification. The removal happens entirely on the inmate side.",
          "Since mid-2021, inmates have been able to remove contacts themselves directly from their JPay account inside the facility. Before that change, blocking required a written request to facility security, which took much longer.",
          "Because there is no notification, families often spend weeks unsure whether they were blocked, whether messages are being held in review, or whether the facility changed a policy. The checks below help you narrow it down.",
        ],
      },
      {
        heading: "The 5 Signs an Inmate Removed You on JPay",
        body: [
          "Sign one: the inmate profile disappears from your Contacts or Friends list, or shows limited interaction options. If you could previously send messages and request video visits and those buttons are now greyed out or gone, that points to removal.",
          "Sign two: communication stops suddenly with no explanation. Messages you send appear to go through on your end but no replies ever come back. Video and phone call attempts fail or return contact unavailable style errors.",
          "Sign three: stamps and money transactions behave differently. You can usually still send money to an inmate account even after being removed, because financial transactions are tied to the inmate account number rather than contact status. If even a money transfer is rejected, the problem is more likely an account restriction or facility issue rather than a simple removal.",
          "Sign four: your return stamps or reply options vanish. If you previously had the option to attach return stamps for the inmate reply and that option disappeared, the contact link is likely broken.",
          "Sign five: no new messages arrive over a long period while the facility is operating normally. By itself this proves nothing, but combined with greyed-out options it strengthens the case.",
        ],
      },
      {
        heading: "Other Causes That Look Like Being Blocked",
        body: [
          "Do not assume removal until you rule out the alternatives. A facility lockdown, disciplinary loss of messaging privileges, or a transfer to another facility can all stop communication without any notification to you.",
          "Account and technical problems also mimic blocking. JPay app glitches, login issues, or messages stuck in content review can all look like silence from the other side. Check whether JPay is having a widespread outage before concluding you were removed.",
          "If your messages stopped arriving at the same time as a known facility event, such as a transfer or a lockdown, the facility is the likely cause. Ask around or contact the facility communication office rather than assuming a personal falling out.",
        ],
      },
      {
        heading: "How to Confirm Your Contact Status",
        body: [
          "Try to send a test e-message. A clear error such as unable to deliver or contact not available suggests removal or a messaging restriction. Messages that appear to send normally tell you less.",
          "Try a small money transaction using the inmate ID or booking number. If the system accepts the payment, the inmate account still exists and the issue is likely contact-level. If payment is rejected too, you are dealing with an account or facility restriction.",
          "Contact JPay customer service and ask them to verify the delivery status of your recent messages. They may be limited in what they can disclose, but they can sometimes confirm whether a block is in place.",
          "If the facility allows it, contact the facility inmate communications office. They can sometimes confirm whether a messaging restriction exists, though privacy rules limit what they will share.",
        ],
      },
      {
        heading: "What To Do If You Were Removed",
        body: [
          "Only the inmate can restore the contact. There is no appeal process on the outside contact side and JPay support cannot add you back. The inmate must add you again from their JPay account inside the facility.",
          "In the meantime, standard mail still works. If the relationship matters to you, a letter is often the fastest way to find out what happened and whether the removal was intentional.",
          "Resist the urge to create a brand new JPay account to get around the removal. It is easy to do, since anyone can register, but the inmate can remove the new account just as quickly. Respect the decision and communicate through other channels.",
        ],
      },
    ],

    takeaways: [
      "JPay sends no notification when an inmate removes you from contacts.",
      "Watch for a missing profile, greyed-out Send Message and video buttons, and communication that stops cold.",
      "You can usually still send money after being removed, since payments are tied to the account number, not contact status.",
      "Rule out lockdowns, transfers, privilege loss, and JPay outages before assuming removal.",
      "Only the inmate can restore the contact. JPay support cannot add you back.",
    ],

    faq: [
      {
        question: "Will JPay tell me if an inmate deletes me from their contacts?",
        answer: "No. JPay does not send any notification, message, or alert when an inmate removes a contact. You have to notice the indirect signs, such as the profile disappearing from your contacts or interaction options becoming unavailable.",
      },
      {
        question: "Can I still send money on JPay if an inmate blocked me?",
        answer: "Usually yes. Money transfers are tied to the inmate account number rather than your contact status, so they often still go through after a removal. If a money transfer is also rejected, you are likely facing an account or facility restriction rather than a simple removal.",
      },
      {
        question: "Can an inmate block me on JPay by themselves?",
        answer: "Yes. Since mid-2021, inmates have been able to remove contacts directly from their JPay account without filing a request with facility security. Before that change, blocking required a written request and took much longer.",
      },
      {
        question: "How do I get unblocked on JPay?",
        answer: "Only the inmate can restore the contact by adding you again from their JPay account inside the facility. JPay customer service cannot add you back. Standard mail is the most reliable way to reach the person and find out what happened.",
      },
      {
        question: "Why did my messages suddenly stop getting replies on JPay?",
        answer: "Removal is one possibility, but not the only one. Messages can also stop because of a facility lockdown, loss of messaging privileges, a transfer, JPay technical problems, or messages held in content review. Check for outages and facility events before concluding you were removed.",
      },
    ],

    relatedGuideSlugs: ["how-jpay-works", "how-inmate-messaging-works", "inmate-communication-guide", "how-to-appeal-blocked-messages"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "inmate-phone-calls"],
    relatedProviderSlugs: ["jpay"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks"],
    ctaType: "provider",
    ctaTarget: "/provider/jpay",
    ctaLabel: "View JPay Details",
  },

  "gettingout-app-not-working": {
    id: "guide-27",
    slug: "gettingout-app-not-working",
    title: "GettingOut App Not Working? Fixes That Actually Help",
    excerpt: "GettingOut app freezing, crashing, or stuck on the verification photo step? Try these fixes in order, including the website workaround that bypasses the app entirely.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "GettingOut App Not Working? Fixes That Actually Help",
    seoDescription: "GettingOut app not working? Fix freezing, crashes, and the verification photo that never submits. Step-by-step fixes plus the website workaround.",

    intro: [
      "The GettingOut app is the main way many county jail families schedule video visits, deposit money, and message their loved ones. When it breaks, everything stops, and the app has a reputation for breaking at the worst moments.",
      "Common reports include the app freezing mid-session, crashing on launch, and the visitor verification photo step where the submit button does nothing no matter how many times it is pressed. If you are stuck on any of these, you are not alone.",
      "This guide runs through the fixes in order, from the quickest to the most thorough, and ends with the website workaround that many families use when the app simply will not cooperate.",
    ],

    sections: [
      {
        heading: "Quick Fixes to Try First",
        body: [
          "Force close the app completely and reopen it. On both iPhone and Android, swipe the app away from the recent apps list. A frozen app will not recover on its own, and a fresh launch fixes most temporary freezes.",
          "Check your internet connection. GettingOut needs a stable connection for video visits and photo uploads. Switch between Wi-Fi and mobile data to see if one works better. The verification photo step fails silently on weak connections.",
          "Restart your phone. This clears temporary system issues that can make the app behave strangely even when the app itself is fine. It takes a minute and fixes more problems than people expect.",
        ],
      },
      {
        heading: "Verification Photo Submit Does Nothing",
        body: [
          "This is one of the most reported GettingOut problems: you take the verification photo and press submit, and nothing happens, even after multiple attempts. The screen just sits there.",
          "First, make sure the app has camera permission in your phone settings. Without camera permission, the photo capture can appear to work while the upload silently fails.",
          "Take the photo in good lighting against a plain background. Poor lighting or a cluttered background can cause the verification to reject the image without telling you why.",
          "If submit still does nothing, the upload is likely failing on the connection. Try again on a different network, or switch to the GettingOut website in your phone browser, where the same verification can often be completed without the app.",
        ],
      },
      {
        heading: "Update, Reinstall, and Clear Cache",
        body: [
          "Make sure you are running the latest version of the GettingOut app from the App Store or Google Play. Old versions break when the service changes something on its end, and the app will not always tell you an update is required.",
          "On Android, clear the app cache from Settings, then Apps, then GettingOut, then Storage. Cached data that goes stale is a common cause of freezing and login loops.",
          "If the problems continue, delete the app completely and reinstall it. A fresh install removes corrupted local data that cache clearing does not touch. You will need to log in again, so make sure you know your password first.",
          "Check that your phone operating system is up to date. GettingOut drops support for very old OS versions, and an outdated phone can cause crashes that look like app bugs.",
        ],
      },
      {
        heading: "The Website Workaround",
        body: [
          "When the app will not cooperate, use the GettingOut website in your phone or computer browser instead. The website offers the same core features: scheduling video visits, messaging, and deposits.",
          "Many families report the website is more stable than the app for scheduling visits and managing accounts. Bookmark the site and use it as your primary access method if the app keeps failing.",
          "For video visits specifically, test your camera and microphone on the website before your scheduled time. Browser permissions for camera and microphone must be allowed, just like in the app.",
        ],
      },
      {
        heading: "When Nothing Works: Contact Support",
        body: [
          "If you have tried the app, the website, and a fresh install, contact GettingOut customer support. Note the exact error or behavior, your phone model, and the app version so support can help faster.",
          "For time-sensitive problems like a visit scheduled today, contact support as early as possible. Policies vary by facility on missed visits, and there is no guarantee a technical failure earns you a reschedule, so document everything with screenshots.",
          "If a visit failed because of a GettingOut outage rather than your device, ask support explicitly about a credit or reschedule. Keep your confirmation emails and any error screenshots as evidence.",
        ],
      },
    ],

    takeaways: [
      "Force close and restart the app and your phone before trying anything drastic.",
      "The verification photo step usually fails because of camera permissions or a weak connection.",
      "Update the app, clear the cache, or reinstall if problems persist.",
      "The GettingOut website in a browser works when the app does not, and many families prefer it.",
      "Document failures with screenshots if you need to ask support for a credit or reschedule.",
    ],

    faq: [
      {
        question: "Why does the GettingOut app keep freezing?",
        answer: "Freezing is usually caused by stale cached data, an outdated app version, or a weak connection. Force close the app, update to the latest version, clear the cache on Android, and try a different network. If it keeps freezing, switch to the GettingOut website in your browser.",
      },
      {
        question: "The verification photo submit button does nothing. How do I fix it?",
        answer: "Check that the app has camera permission in your phone settings, take the photo in good lighting against a plain background, and try again on a stronger network. If it still fails, complete verification through the GettingOut website in your phone browser instead.",
      },
      {
        question: "Can I use GettingOut without the app?",
        answer: "Yes. The GettingOut website offers the same core features as the app, including scheduling video visits, messaging, and deposits. Many families find the website more stable and use it as their primary access method.",
      },
      {
        question: "Will I get a refund if the GettingOut app ruins my video visit?",
        answer: "Policies vary by facility. Contact GettingOut support with your confirmation email and screenshots of the failure and ask for a credit or reschedule. There is no automatic refund, so document everything at the time it happens.",
      },
    ],

    relatedGuideSlugs: ["how-gettingout-works", "how-video-visitation-works", "how-inmate-messaging-works", "jpay-error-messages-explained"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "video-visitation"],
    relatedProviderSlugs: ["gettingout"],
    relatedComparisonSlugs: [],
    ctaType: "provider",
    ctaTarget: "/provider/gettingout",
    ctaLabel: "View GettingOut Details",
  },

  "jpay-stamps-wrong-state": {
    id: "guide-28",
    slug: "jpay-stamps-wrong-state",
    title: "JPay Stamps for the Wrong State? What to Do",
    excerpt: "Bought JPay stamps for the wrong state? Learn why stamps are state-specific, what options you have, and how to avoid buying the wrong stamps again.",
    category: "Money and Accounts",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "JPay Stamps for the Wrong State: What You Can Do",
    seoDescription: "Bought JPay stamps for the wrong state? Stamps are tied to the state selected at purchase and rarely transfer. Learn your options and how to avoid this.",

    intro: [
      "JPay stamps are not universal. They are purchased for a specific state agency, and stamps bought for one state cannot be used to message an inmate in another state. Families discover this the hard way after buying stamps for the wrong state.",
      "The JPay website has been known to glitch during purchase, selecting a different state than the one intended, leaving buyers with dozens of stamps they cannot use. JPay customer service is frequently reported as unhelpful on this issue, with refunds and transfers denied or ignored.",
      "This guide explains why stamps are state-specific, what you can realistically do with wrong-state stamps, and how to make sure it does not happen again.",
    ],

    sections: [
      {
        heading: "Why JPay Stamps Are State-Specific",
        body: [
          "JPay contracts with each state correctional agency separately, and the stamp system follows those contracts. When you buy stamps, you are buying them for the agency currently selected in your JPay account, not for JPay in general.",
          "This means stamps bought while Colorado was selected can only be used for messaging connected to the Colorado system. If your loved one is in Texas, those stamps are useless to you, and JPay does not move them across state lines on request.",
          "Always check which state or agency is selected before you click buy. The purchase screen should show the agency name. If it does not match your inmate state, stop and fix the selection before paying.",
        ],
      },
      {
        heading: "Can You Get a Refund or Transfer",
        body: [
          "In practice, getting wrong-state stamps refunded or transferred is very difficult. Families report that JPay customer service often refuses refunds for stamp purchases, and support tickets on this issue frequently go unanswered.",
          "You can still try. Contact JPay customer service with your transaction confirmation number, the date of purchase, and a clear explanation that the website selected the wrong state. Keep copies of every message you send.",
          "If JPay does not resolve it and the charge was made to your card, you can contact your bank to dispute the charge, providing your confirmation email as evidence that the purchased service was not usable. Banks decide these case by case.",
          "Note that refund policies vary and JPay terms of service generally treat stamp purchases as final. Treat the dispute route as a last resort, not an expectation.",
        ],
      },
      {
        heading: "What About States Where Inmates Cannot Reply by JPay",
        body: [
          "Some states, including Colorado and Texas, have systems where outside contacts use JPay stamps to write in, but the inmate replies by physical mail rather than through JPay. Stamps in these states only cover your outgoing messages.",
          "This matters when you are stuck with wrong-state stamps, because transferring them to someone else messaging an inmate in that state is one of the few practical uses. You cannot move the stamps to your own account for a different state, but they are not fake money, they are real stamps tied to that state system.",
          "Do not buy stamps from or for strangers online to solve this. Handing account access or payment details to people you met on a forum is a common scam setup.",
        ],
      },
      {
        heading: "How to Avoid Buying the Wrong Stamps Again",
        body: [
          "Before every purchase, verify the selected inmate and the state or agency shown in your JPay account. If you message inmates in more than one state, check the selection every single time, because the site can default to a different state than you expect.",
          "Buy stamps in smaller amounts until you are sure the correct state is selected. Losing 10 stamps to a glitch hurts far less than losing 64.",
          "Take a screenshot of the purchase confirmation showing the state. If a dispute becomes necessary, that screenshot is your proof of what was selected versus what you intended.",
        ],
      },
    ],

    takeaways: [
      "JPay stamps are tied to the state agency selected at purchase and cannot be moved to another state by you.",
      "Always verify the selected state before buying. The site has been reported to select the wrong state during purchase.",
      "JPay rarely refunds wrong-state stamps, so treat every purchase as final.",
      "If customer service does not help, a bank dispute with your confirmation email is a last resort.",
      "Buy in smaller amounts and screenshot every purchase confirmation.",
    ],

    faq: [
      {
        question: "Can I transfer JPay stamps to a different state?",
        answer: "No. JPay does not let you move stamps between states yourself, and customer service rarely does it on request. Stamps stay tied to the state agency selected at purchase.",
      },
      {
        question: "Will JPay refund stamps bought for the wrong state?",
        answer: "Usually not. Families report that JPay customer service frequently refuses refunds for stamp purchases or does not respond. You can try with your transaction confirmation number, and as a last resort dispute the charge with your bank. Refund policies vary, so treat every purchase as final.",
      },
      {
        question: "Why did JPay buy stamps for a different state than I selected?",
        answer: "The JPay website has been reported to glitch during purchase and select a different state than the one intended, especially for users who message inmates in more than one state. Always verify the selected state on the confirmation screen and take a screenshot before paying.",
      },
      {
        question: "Do inmates in Colorado and Texas reply through JPay?",
        answer: "In these states, outside contacts use JPay stamps to write in, but inmates typically reply by physical mail rather than through JPay. Your stamps cover your outgoing messages only. Policies vary by facility, so confirm the current setup with the facility if you are unsure.",
      },
    ],

    relatedGuideSlugs: ["how-jpay-works", "how-to-send-money-to-an-inmate", "how-inmate-messaging-works", "inmate-communication-guide"],
    relatedTermSlugs: ["inmate-messaging", "money-transfer", "inmate-account"],
    relatedProviderSlugs: ["jpay"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks"],
    ctaType: "provider",
    ctaTarget: "/provider/jpay",
    ctaLabel: "View JPay Details",
  },

  "jpay-account-locked": {
    id: "guide-29",
    slug: "jpay-account-locked",
    title: "JPay Account Locked? How to Unlock It",
    excerpt: "Locked out of JPay, or told to agree to terms but unable to log in? Work through these steps to recover your account and get back to messaging.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 4,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "JPay Account Locked? How to Unlock It Fast",
    seoDescription: "JPay account locked or stuck at the terms screen? Work through login recovery, password reset, and support escalation steps to unlock your JPay account.",

    intro: [
      "A locked JPay account cuts off messaging, video visits, and money transfers all at once. The lockout can come from too many failed login attempts, a security flag on the account, or a terms-of-service update that you are asked to accept before you can get in.",
      "One particularly frustrating loop: JPay tells you to log in and agree to the new terms, but the login itself is what is failing. If you are stuck in that loop, this guide is for you.",
      "Work through the steps below in order. Most lockouts are resolved without needing customer service, but the escalation steps are here for the ones that are not.",
    ],

    sections: [
      {
        heading: "Try the Website Instead of the App",
        body: [
          "Many JPay lockouts only affect one access method. If the app will not let you in, try jpay.com in a browser on your phone or computer. If the website fails, try the app. Families frequently find that one works while the other is stuck.",
          "Clear your browser cache and cookies before retrying on the website. Stale login data is a common cause of login loops that look like a locked account.",
          "Try a different browser if the first one keeps looping. A fresh browser with no saved JPay data removes extensions and cached sessions as possible causes.",
        ],
      },
      {
        heading: "Reset Your Password Properly",
        body: [
          "Use the official password reset on the JPay website. Enter the exact email address you registered with, then check your inbox and your spam folder for the reset email.",
          "If the reset email never arrives, the address on file may not match what you are entering. Try any other email addresses you might have used when you first registered.",
          "After resetting, log in on the website first before trying the app. Confirm the new password works in the browser, then use it in the app.",
        ],
      },
      {
        heading: "Stuck at the Agree to Terms Screen",
        body: [
          "JPay periodically updates its terms of service and requires users to accept before continuing. If you are told to agree but cannot reach the agreement screen because login fails, the login problem is the real issue, not the terms.",
          "Get the login working first using the steps above. The terms screen appears immediately after a successful login, and accepting it takes one click.",
          "Do not try to bypass the terms screen with old bookmarks or deep links into the site. Those routes can trigger security flags that make the lockout worse.",
        ],
      },
      {
        heading: "Contact JPay Support to Unlock the Account",
        body: [
          "If none of the self-service steps work, contact JPay customer service. Have your registered email address, the inmate name and ID if relevant, and details of any recent transactions ready. Support uses these to verify your identity.",
          "Ask specifically whether the account has a security hold and what is needed to lift it. Vague requests get vague answers. A direct question about the hold status gets you further.",
          "Document every contact: dates, ticket numbers, and what you were told. If support does not resolve the issue, this record is what you need for escalation. Policies on account holds vary, and timelines are not published, so ask for a specific next step and a reference number on every call.",
        ],
      },
    ],

    takeaways: [
      "Try both the website and the app. Many lockouts affect only one access method.",
      "Clear cache and cookies, then reset your password with the exact registered email address.",
      "If you are told to agree to terms but cannot log in, fix the login first. The terms screen appears after a successful login.",
      "Contact support with your registered email and transaction details, and ask directly about a security hold.",
      "Document every support contact with dates and ticket numbers.",
    ],

    faq: [
      {
        question: "Why is my JPay account locked?",
        answer: "Common causes include too many failed login attempts, a security flag triggered by unusual activity, or an unaccepted terms-of-service update. Try the website and the app separately, clear your cache, and reset your password before assuming the worst.",
      },
      {
        question: "JPay tells me to agree to the terms but I cannot log in to agree. What do I do?",
        answer: "Fix the login first. The terms screen appears right after a successful login, so the login failure is the real problem. Try the opposite access method from the one failing, clear cache and cookies, and reset your password. Once you can log in, accepting the terms takes one click.",
      },
      {
        question: "How long does it take JPay support to unlock an account?",
        answer: "Timelines are not published and vary by case. Ask support directly for the hold status, the specific steps to lift it, and a reference number. Document every contact so you can escalate if the issue drags on.",
      },
      {
        question: "Can I just make a new JPay account if mine is locked?",
        answer: "That is not recommended. A new account will not have your purchase history, contacts, or transaction records, and creating duplicate accounts can trigger additional security flags. Recover the original account through the steps in this guide.",
      },
    ],

    relatedGuideSlugs: ["how-jpay-works", "jpay-error-messages-explained", "how-inmate-messaging-works", "how-to-set-up-inmate-email"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "inmate-account"],
    relatedProviderSlugs: ["jpay"],
    relatedComparisonSlugs: ["jpay-vs-corrlinks"],
    ctaType: "provider",
    ctaTarget: "/provider/jpay",
    ctaLabel: "View JPay Details",
  },

  "city-tele-coin-account-types": {
    id: "guide-30",
    slug: "city-tele-coin-account-types",
    title: "City Tele Coin Account Types Explained (Phone vs Commissary)",
    excerpt: "Put money in the wrong City Tele Coin account? Learn the difference between DirectPay phone, commissary, and media accounts, and why funds cannot be moved between them.",
    category: "Money and Accounts",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "City Tele Coin Account Types: Phone vs Commissary vs Media",
    seoDescription: "City Tele Coin account types explained: DirectPay phone, commissary deposits, and media accounts. Why funds cannot move between them and how to fund correctly.",

    intro: [
      "City Tele Coin keeps your money in separate accounts for separate purposes, and this is where most families go wrong. Money added to the commissary account cannot be used for phone calls. Money in the phone account cannot buy commissary items. Picking the wrong account type means the inmate cannot use the funds the way you intended.",
      "City Tele Coin serves county jails and local detention centers, mainly in the Southern and Southeastern United States. It is a family-owned provider operating since 1986, and its system centers on the DirectPay prepaid calling account plus separate fund accounts.",
      "This guide explains each account type, how to fund the right one, and what to do when money lands in the wrong place.",
    ],

    sections: [
      {
        heading: "The Three Account Types",
        body: [
          "The DirectPay account is a prepaid calling account linked to your phone number. It lets the incarcerated person call you directly from facility phones. This is the account you fund when the goal is phone calls.",
          "The commissary account is a deposit into the inmate trust account for purchases at the facility store, such as snacks and hygiene items. This money is for the inmate to spend inside, not for communication.",
          "The media account covers tablet usage, such as music, movies, and games where the facility offers them. Like the others, it is a separate balance with a separate purpose.",
          "All three are funded through the same City Tele Coin login at citytelecoin.com or through the CityTeleCoin mobile app for iOS and Android, but they remain distinct balances.",
        ],
      },
      {
        heading: "Why Funds Cannot Be Moved Between Accounts",
        body: [
          "Funds cannot be transferred between account types. This is the single most important thing to understand. If you put $50 in the commissary account but meant it for phone calls, City Tele Coin cannot shift it to the phone account for you.",
          "This catches families constantly. The symptom is always the same: you added money, but the inmate still cannot call you, or cannot buy what they need, because the balance sits in the wrong account.",
          "When adding funds, the Add Funds flow asks you to choose the account type: phone, commissary, or media. Slow down at this step and pick the one that matches your goal. There is no undo after the payment completes.",
        ],
      },
      {
        heading: "How to Fund the Right Account",
        body: [
          "Log in at citytelecoin.com or open the CityTeleCoin app. Select Add Funds, choose the account type (phone, commissary, or media), enter the amount, and pay with a debit card, credit card, or money order. Funds are typically credited quickly.",
          "If the goal is for the inmate to call your number, choose the phone account under DirectPay. Make sure the phone number linked to the DirectPay account is your current number, since the account is tied to a specific number.",
          "If your phone number changed and you have a DirectPay account, contact City Tele Coin to request transferring your existing balance to the new number. Do not just create a new account and abandon the old balance.",
          "Every funding transaction includes a processing fee, and additional administrative or card fees and state taxes may apply. You must agree to these before completing payment, so check the total before you confirm.",
        ],
      },
      {
        heading: "Money in the Wrong Account: What To Do",
        body: [
          "If the funds just went in and you immediately realize the mistake, contact City Tele Coin customer service at 318-756-1114, available 7 AM to 7 PM Central time, 7 days a week. Explain which account received the funds and which one you intended.",
          "Be prepared for the answer to be no. Because transfers between account types are not supported, support may not be able to move the money. Ask anyway, and ask whether a refund of the mistaken deposit is possible so you can re-add it correctly.",
          "Going forward, label the purpose of each deposit for yourself before you start the Add Funds flow. One extra minute of care beats a support call and a stuck balance.",
        ],
      },
      {
        heading: "Other City Tele Coin Features Worth Knowing",
        body: [
          "Beyond funding, the CityTeleCoin app supports video visitation scheduling at participating facilities with CTC video kiosks or tablets, electronic messaging where contracted, and photo sharing.",
          "You can also purchase calling cards online or at lobby kiosks and give the PIN to the inmate for use. Your full transaction and communication history is visible in your account.",
          "Remember that all calls, messages, and video visits are recorded, stored, and may be reviewed by facility staff. There is no private communication on the platform.",
        ],
      },
    ],

    takeaways: [
      "DirectPay is the phone calling account. Commissary is for the facility store. Media is for tablet content. They are separate balances.",
      "Funds cannot be transferred between account types. Choose correctly at the Add Funds step.",
      "If the inmate cannot call you after you added money, check that the funds went to the phone account, not commissary or media.",
      "DirectPay is linked to a specific phone number. Update it if your number changes.",
      "Customer service is at 318-756-1114, 7 AM to 7 PM Central, 7 days a week.",
      "All funding transactions carry a processing fee plus possible administrative fees and taxes.",
    ],

    faq: [
      {
        question: "What is a City Tele Coin DirectPay account?",
        answer: "DirectPay is a prepaid calling account linked to your phone number. It allows the incarcerated person to call you directly from facility phones. Fund the DirectPay phone account when your goal is receiving calls.",
      },
      {
        question: "Can I move money from commissary to the phone account?",
        answer: "No. Funds cannot be transferred between City Tele Coin account types. If money landed in the wrong account, contact customer service at 318-756-1114 to ask about a refund so you can re-add it correctly, but transfers are not supported.",
      },
      {
        question: "I added money but the inmate still cannot call me. Why?",
        answer: "The most common cause is that the funds went to the commissary or media account instead of the phone account. Log in and check your balances by account type. Also confirm the DirectPay account is linked to your current phone number.",
      },
      {
        question: "Are there fees for adding money to City Tele Coin?",
        answer: "Yes. City Tele Coin is prepaid-only and every funding transaction includes a processing fee. Additional administrative fees, credit card fees, and state taxes may also apply, and you must agree to them before completing the payment.",
      },
    ],

    relatedGuideSlugs: ["how-to-send-money-to-an-inmate", "how-prison-phone-calls-work", "prison-phone-call-costs", "how-video-visitation-works"],
    relatedTermSlugs: ["money-transfer", "inmate-account", "commissary", "inmate-phone-calls"],
    relatedProviderSlugs: ["city-tele-coin"],
    relatedComparisonSlugs: [],
    ctaType: "provider",
    ctaTarget: "/provider/city-tele-coin",
    ctaLabel: "View City Tele Coin Details",
  },

  "jpay-video-visit-refund-policy": {
    id: "guide-31",
    slug: "jpay-video-visit-refund-policy",
    title: "JPay Video Visit Refunds: The Real Policy",
    excerpt: "Conflicting answers on JPay video visit refunds? Learn what happens with cancelled, failed, and late-starting visits, and how to ask for a credit or reschedule.",
    category: "Visitation",
    difficulty: "Beginner",
    featured: false,
    popular: true,
    readingTimeMinutes: 6,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "JPay Video Visit Refunds: The Real Policy Explained",
    seoDescription: "JPay video visit refunds explained: what happens when visits are cancelled, never start, or start late. How to request a credit or free reschedule.",

    intro: [
      "JPay video visits cost real money, and when a visit fails, families want to know one thing: do I get my money back? The honest answer is that it depends, and JPay support has given families conflicting answers on this for years.",
      "The common failure scenarios are well documented: a visit is scheduled but never starts, the visit starts late and eats into your paid time, a promised free weekly visit disappears and you are charged instead, or you miss the visit because of a facility problem like the kiosk being in a different dorm.",
      "This guide lays out what families report actually happening in each scenario, and the exact steps that give you the best chance of a credit or free reschedule. Refund policies vary by facility, so treat this as a playbook, not a guarantee.",
    ],

    sections: [
      {
        heading: "The Refund Reality: Conflicting Answers",
        body: [
          "There is no single published JPay video visit refund policy that families can point to. What you get depends on who you talk to at JPay support, what the facility says, and how well you document the failure.",
          "Families report receiving directly contradictory answers: one agent promises a credit, another says no refunds are possible for the same situation. This inconsistency is itself the most reliable fact about JPay video visit refunds.",
          "Because of this, your approach matters more than the official policy. Contact support promptly, be specific about what failed, and always ask for a reference or ticket number so the next agent can see the history.",
        ],
      },
      {
        heading: "Visit Scheduled but Never Started",
        body: [
          "This is the clearest case for a credit: you paid, you showed up on time with working equipment, and the inmate never appeared or the session never connected. Families in this situation generally have the strongest claim.",
          "Contact JPay support as soon as possible after the missed visit. State the scheduled date and time, confirm you were present and ready, and ask explicitly for either a refund or a free reschedule.",
          "If support resists, ask to escalate and ask the facility as well. Sometimes the failure was on the facility side, such as the inmate not being brought to the video station, and the facility can authorize a reschedule even when JPay will not.",
        ],
      },
      {
        heading: "Visit Started Late and Ate Into Your Time",
        body: [
          "A frequent complaint: a 30-minute visit starts 4 or 5 minutes late because of technical delays, and the clock still runs out at the original end time. You paid for 30 minutes and received 25.",
          "Document the actual start and end times with screenshots if you can. The visit interface usually shows a timer, and a screenshot of a late start is your evidence.",
          "Ask support for a partial credit or a time extension on a future visit. This is a weaker claim than a visit that never happened, so be polite, be specific about the minutes lost, and accept a reschedule offer if a refund is refused.",
        ],
      },
      {
        heading: "Free Weekly Visit Disappeared or Was Charged",
        body: [
          "Some facilities offer one free video visit per week, and families report this benefit disappearing without notice, with visits suddenly being charged, in some cases around $3.50 per visit.",
          "If your free visit vanished, first confirm the benefit still exists at the facility. Free visit policies are set by the facility, not by JPay, and they can change. Call the facility visitation office and ask directly.",
          "If the facility confirms the free visit should still apply, take that confirmation back to JPay support and ask for the charge to be reversed. A statement from the facility carries more weight than your word alone.",
        ],
      },
      {
        heading: "Missed Visit Because of a Facility Problem",
        body: [
          "Families report missing visits because the video kiosk was in a different dorm than the inmate, the inmate was not moved in time, or the facility was on an unannounced lockdown. In these cases JPay typically says the failure was not theirs and refuses a refund.",
          "Your recourse here is the facility, not JPay. Contact the facility visitation coordinator, explain what happened, and ask for a free reschedule. Facilities handle these case by case.",
          "Document everything: your confirmation email, the scheduled time, and any communication from the facility. If the facility acknowledges the problem, ask for that acknowledgment in writing or by email so you can show JPay.",
        ],
      },
      {
        heading: "How to Ask for a Credit or Reschedule",
        body: [
          "Step one: contact JPay support promptly, ideally the same day. Delays weaken your case. Have your confirmation email, the scheduled date and time, and a description of exactly what failed.",
          "Step two: state what you want clearly. Ask for a refund to your payment method or a free reschedule, not both vaguely. Specific requests get specific answers.",
          "Step three: get a ticket or reference number for every contact. If the first agent says no, call back with the reference number and ask to escalate. Conflicting answers mean a second attempt sometimes succeeds where the first failed.",
          "Step four: if JPay will not budge and the failure was clearly on their technical side, you can dispute the charge with your bank as a last resort, providing your confirmation and documentation of the failure.",
        ],
      },
    ],

    takeaways: [
      "There is no single consistent JPay video visit refund policy. Answers from support vary by agent and facility.",
      "Visits that never started give you the strongest claim for a credit or free reschedule.",
      "Late starts that eat into your paid time are worth disputing with screenshots of the actual times.",
      "Free weekly visits are a facility benefit, not a JPay benefit. Confirm changes with the facility first.",
      "Missed visits caused by facility problems must be taken up with the facility, not JPay.",
      "Always get a ticket number, and try again with a different agent if the first one refuses.",
    ],

    faq: [
      {
        question: "Does JPay refund cancelled video visits?",
        answer: "Sometimes. There is no consistent published policy, and support agents give conflicting answers. Visits that were paid for but never started have the strongest claim. Contact support the same day with your confirmation email and ask explicitly for a refund or free reschedule, and always get a ticket number.",
      },
      {
        question: "My video visit started 5 minutes late. Can I get that time back?",
        answer: "You can ask. Screenshot the actual start and end times as evidence, then contact JPay support and request a partial credit or a time extension on a future visit. This is a weaker claim than a visit that never happened, so be specific about the minutes lost and accept a reschedule if a refund is refused.",
      },
      {
        question: "I missed my visit because the kiosk was in another dorm. Can I get a refund?",
        answer: "JPay typically refuses refunds for facility-side problems. Take this to the facility visitation coordinator instead and ask for a free reschedule. Document your confirmation email and the scheduled time, and get any facility acknowledgment in writing.",
      },
      {
        question: "Is there really a free weekly JPay video visit?",
        answer: "Some facilities offer one free video visit per week, but this is a facility benefit, not a JPay guarantee, and it can change or disappear. If you were charged unexpectedly, confirm the current policy with the facility visitation office first, then take that confirmation to JPay support to reverse the charge.",
      },
      {
        question: "What if JPay support keeps giving me different answers?",
        answer: "That is common. Get a ticket or reference number on every contact, then call back and ask to escalate. A different agent sometimes resolves what the first one refused. Keep copies of all confirmations, screenshots, and correspondence.",
      },
    ],

    relatedGuideSlugs: ["how-video-visitation-works", "how-jpay-works", "prison-visitation-rules", "what-to-expect-first-prison-visit"],
    relatedTermSlugs: ["video-visitation", "visitation-rules", "money-transfer"],
    relatedProviderSlugs: ["jpay"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/video-calls",
    ctaLabel: "Explore Video Visitation Options",
  },

  "jpay-error-messages-explained": {
    id: "guide-32",
    slug: "jpay-error-messages-explained",
    title: "JPay Error Messages Explained",
    excerpt: "Seeing Error Occurred, illegal input values, or a JPay app stuck on the sign-in screen? Learn what JPay errors actually mean and how to fix each one.",
    category: "Provider Guides",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "JPay Error Messages Explained: What They Mean",
    seoDescription: "JPay error messages explained: what Error Occurred and illegal input values really mean, why the site reroutes to home, and how to fix a stuck sign-in screen.",

    intro: [
      "JPay error messages are famously unhelpful. A message about illegal input values sounds like you are in trouble, a site that keeps dumping you back on the home screen feels broken, and an app frozen on the sign-in screen gives you nothing to work with.",
      "Most of these errors are technical glitches or input quirks, not account problems. Families who have seen them before report simple fixes that the error text never suggests.",
      "This guide translates the most common JPay errors into plain language and gives you the fix for each one.",
    ],

    sections: [
      {
        heading: "Error Occurred: Illegal Input Values",
        body: [
          "The full message reads: Error Occurred! We are sorry, but an error occurred processing your last request. This could be a result of illegal input values. Please, try again. It usually appears when logging in or submitting a form on the JPay website.",
          "Despite how it sounds, illegal input values does not mean you did anything illegal or that your messages were flagged. It is a software term meaning the site received characters or data it did not expect.",
          "The most common trigger is pasting text that contains special characters, emojis, or formatting copied from another app, such as a word processor or notes app. These hidden characters confuse the JPay form processing.",
          "The fix: refresh the page and try again. If the error repeats on a message, retype the message directly in the JPay text box instead of pasting it. Avoid emojis and unusual symbols. Families report the error usually clears on retry.",
        ],
      },
      {
        heading: "Site Keeps Rerouting to the Home Screen",
        body: [
          "Some users report that the JPay website keeps sending them back to the home screen when they try to do something specific, such as setting up a video visit. The session seems to reset instead of completing the task.",
          "This is typically a session or browser problem. Clear your browser cache and cookies for the JPay site, then log in fresh and retry the task immediately.",
          "Try a different browser, or try the JPay mobile app for the same task. If the website session handling is broken, the app sometimes works, and vice versa.",
          "If the rerouting happens for everyone and not just you, JPay may be having a site-wide problem. Check outage reports, wait a few hours, and try again before assuming your account is the issue.",
        ],
      },
      {
        heading: "App Stuck on the Sign-In Screen",
        body: [
          "The JPay app sometimes idles on the sign-in screen: you enter your credentials, tap sign in, and nothing happens. No error, no progress, just the same screen.",
          "Force close the app completely and reopen it. On both iPhone and Android, remove the app from the recent apps list so it fully restarts.",
          "Check for an app update in the App Store or Google Play. An outdated app can fail silently when JPay changes something on the server side.",
          "If it still hangs, delete and reinstall the app. Make sure you know your password first, since you will need to log in again. A fresh install clears corrupted local data that causes most persistent sign-in hangs.",
        ],
      },
      {
        heading: "General Rules for Any JPay Error",
        body: [
          "First, determine whether the problem is you or JPay. If the site or app fails the same way on two different devices or networks, it is likely a JPay outage. Wait and retry later instead of troubleshooting your own setup endlessly.",
          "Second, switch access methods. The website and the app fail independently of each other. Whatever is broken on one often works fine on the other.",
          "Third, simplify your input. Type directly instead of pasting, avoid special characters and emojis, and complete one task at a time instead of rushing through multiple screens.",
          "Fourth, screenshot every error. If you end up contacting support, an exact screenshot of the message and what you were doing when it appeared gets you help far faster than a description from memory.",
        ],
      },
    ],

    takeaways: [
      "Illegal input values is a software glitch term, not an accusation. It usually means pasted special characters confused the form.",
      "Retype messages directly instead of pasting from other apps, and avoid emojis and unusual symbols.",
      "If the site dumps you back to the home screen, clear cache and cookies or switch browsers.",
      "If the app hangs on sign-in, force close, update, or reinstall it.",
      "The website and the app fail independently. Always try the other one before giving up.",
      "Screenshot every error before contacting support.",
    ],

    faq: [
      {
        question: "What does illegal input values mean on JPay?",
        answer: "It is a software error meaning the site received characters it did not expect, not an accusation of wrongdoing. It is usually triggered by pasting text with special characters, emojis, or hidden formatting from another app. Refresh and retype the message directly in the JPay text box.",
      },
      {
        question: "Did I get flagged for illegal content because of this error?",
        answer: "No. The word illegal in this message refers to input the software could not process, not to the content of your messages. Families who saw this error report it clearing on retry with no consequences to their accounts.",
      },
      {
        question: "Why does the JPay website keep sending me back to the home screen?",
        answer: "This is usually a broken browser session. Clear your cache and cookies, log in fresh, and retry the task. If it persists, try a different browser or the JPay mobile app, or check whether JPay is having a site-wide outage.",
      },
      {
        question: "The JPay app is stuck on the sign-in screen. How do I fix it?",
        answer: "Force close the app and reopen it first. Then check for an app update. If it still hangs, delete and reinstall the app, making sure you know your password first. If the app will not cooperate at all, use the JPay website in your browser instead.",
      },
    ],

    relatedGuideSlugs: ["how-jpay-works", "jpay-account-locked", "how-inmate-messaging-works", "gettingout-app-not-working"],
    relatedTermSlugs: ["inmate-messaging", "electronic-messaging", "inmate-account"],
    relatedProviderSlugs: ["jpay"],
    relatedComparisonSlugs: [],
    ctaType: "provider",
    ctaTarget: "/provider/jpay",
    ctaLabel: "View JPay Details",
  },

  "inmate-call-cut-off-third-party": {
    id: "guide-33",
    slug: "inmate-call-cut-off-third-party",
    title: "Why Inmate Calls Get Cut Off (Third-Party Warning)",
    excerpt: "Inmate calls cut off with a third-party warning when nothing happened? Learn how the detection works, what triggers false cutoffs, and how to keep calls connected.",
    category: "How It Works",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "Inmate Calls Cut Off? Third-Party Warning Explained",
    seoDescription: "Why inmate calls get cut off with a third-party warning even when nothing happened. How detection works, what triggers false cutoffs, and how to prevent them.",

    intro: [
      "Few things are more frustrating than a call with your loved one suddenly ending with a warning about a third-party call when you did nothing wrong. The call just drops, the money for the minutes is gone, and you are left wondering what happened.",
      "Prison phone systems actively monitor calls for three-way calling and call forwarding, because those are the main ways inmates reach numbers that are not approved. The detection is automated, and automated detection makes mistakes.",
      "This guide explains how third-party call detection works, what commonly triggers a false cutoff, and the habits that keep your calls connected. Policies and detection sensitivity vary by facility and provider.",
    ],

    sections: [
      {
        heading: "How Third-Party Call Detection Works",
        body: [
          "Prison phone systems listen for the audio signatures of a third party joining the call: the click of call waiting, the tones of merging calls, sudden changes in background noise, or a second voice on the line. When the system detects these patterns, it plays a warning and may terminate the call automatically.",
          "This monitoring exists because three-way calling lets an inmate talk to someone who is not on the approved call list, which facilities treat as a security violation. The system errs on the side of cutting the call rather than letting a possible violation continue.",
          "Because the detection is automated, it reacts to patterns, not intentions. Anything that sounds like a third party joining, even briefly, can trigger it.",
        ],
      },
      {
        heading: "What Triggers a False Cutoff",
        body: [
          "Call waiting is the most common false trigger. If someone calls your phone while you are on the inmate call, the call-waiting beep can sound exactly like a third party joining, and the system may cut the call. Disable call waiting before accepting inmate calls if your carrier allows it.",
          "Background noise and multiple voices near your phone can also trigger detection. A television playing, another person talking in the room, or a child shouting near the phone can all sound like an extra party on the line.",
          "Speakerphone, Bluetooth headsets, and poor connections create audio artifacts that the system can misread. Families report more cutoffs on speakerphone than on a direct handset call.",
          "Brief connection drops that reconnect can register as a new party joining. If your carrier signal is weak, the reconnection pattern alone can end the call.",
        ],
      },
      {
        heading: "Habits That Keep Calls Connected",
        body: [
          "Take inmate calls in a quiet room on a handset, not speakerphone. Hold the phone normally and keep background noise as low as possible.",
          "Disable call waiting and do not use any phone features during the call. Do not merge calls, do not put the call on hold to answer another, and do not use your phone conferencing features while connected.",
          "Do not hand the phone to someone else mid-call unless that person is also approved, and even then, the voice change can trigger the system. Keep the approved caller on the line for the whole call.",
          "Use a strong, stable connection. If you are on a cell phone, stay in one place with good signal rather than walking around. A stable connection produces fewer artifacts for the system to misread.",
        ],
      },
      {
        heading: "What To Do After a False Cutoff",
        body: [
          "First, do not assume the inmate did something wrong or that you are in trouble. False cutoffs are common and are a known limitation of automated detection.",
          "If cutoffs happen on every call, contact the phone provider customer service and describe the pattern. Ask whether the facility has had similar reports and whether the detection sensitivity can be reviewed.",
          "You can also raise it with the facility communications office, especially if the cutoffs started suddenly after working fine for months. A change in equipment or settings on the facility side can increase false detections.",
          "Keep a simple log: date, time, how far into the call the cutoff happened, and what you were doing. A pattern in the log, such as cutoffs always at the same minute mark, helps support diagnose the cause. Note that the exact detection triggers are proprietary and providers do not publish them, so some trial and error is unavoidable.",
        ],
      },
      {
        heading: "Dropped Calls vs Third-Party Cutoffs",
        body: [
          "Not every dropped call is a third-party cutoff. Families also report plain poor quality: choppy audio, long delays, one side unable to hear the other, and calls that simply disconnect without any warning message.",
          "These quality problems come from aging facility phone infrastructure and network issues, and they are documented in oversight reports on prison telecommunications. They are a different problem with a different fix.",
          "If your calls drop without any third-party warning, focus on connection quality: your carrier signal, the time of day, and whether the facility has known phone system problems. If calls end specifically with a third-party warning, focus on the habits in this guide.",
        ],
      },
    ],

    takeaways: [
      "Third-party detection is automated and reacts to audio patterns, not intentions. False cutoffs are common.",
      "Call waiting beeps, background voices, speakerphone, and weak signals are the top false triggers.",
      "Take calls in a quiet room on a handset with call waiting disabled.",
      "Never merge calls or use conferencing features during an inmate call.",
      "Log repeated cutoffs with dates and times before contacting the provider or facility.",
      "Dropped calls without a warning are usually a connection quality problem, not a third-party detection.",
    ],

    faq: [
      {
        question: "Why did my inmate call get cut off for a third-party call when nobody else was on the line?",
        answer: "The detection system reacts to audio patterns like call-waiting beeps, background voices, speakerphone artifacts, or brief reconnections, and it cannot tell these apart from a real third party joining. Disable call waiting, take the call in a quiet room on a handset, and avoid speakerphone.",
      },
      {
        question: "Can I get my money back for minutes lost to a false cutoff?",
        answer: "Policies vary by provider and facility. Contact the phone provider customer service, describe the pattern, and ask for a credit. Keep a log of dates and times, since documented patterns are more persuasive than a single complaint.",
      },
      {
        question: "Is it safe to use speakerphone on inmate calls?",
        answer: "It is not recommended. Speakerphone creates audio artifacts and picks up room noise that the third-party detection system can misread as an extra caller. Use the handset directly for the most reliable connection.",
      },
      {
        question: "Will I get in trouble if my call is flagged as third-party?",
        answer: "A single flagged call from an obvious false trigger is unlikely to cause problems, but repeated flags can draw attention. If the inmate was not actually three-way calling, explain the pattern to the facility communications office. Deliberate three-way calling to reach unapproved numbers is treated as a security violation, so never do it intentionally.",
      },
    ],

    relatedGuideSlugs: ["how-prison-phone-calls-work", "prison-phone-call-costs", "how-inmate-messaging-works", "inmate-communication-guide"],
    relatedTermSlugs: ["inmate-phone-calls", "correctional-facility"],
    relatedProviderSlugs: ["jpay", "gtl", "securus"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/phone-calls",
    ctaLabel: "Explore Phone Call Options",
  },

  "video-visits-without-app": {
    id: "guide-34",
    slug: "video-visits-without-app",
    title: "Video Visits Without an App (Jitsi and Google Meet)",
    excerpt: "Some facilities run video visits over Jitsi Meet or Google Meet instead of a provider app. Learn how these visits are scheduled and what to expect.",
    category: "Visitation",
    difficulty: "Beginner",
    featured: false,
    popular: false,
    readingTimeMinutes: 5,
    country: "us",
    featuredImage: undefined,
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    seoTitle: "Video Visits Without an App: Jitsi and Google Meet Guide",
    seoDescription: "Video visits without an app: how facilities use Jitsi Meet or Google Meet for video visitation, how to schedule, what ID you need, and the rules to follow.",

    intro: [
      "Not every facility uses a provider app for video visits. Some run visits over standard video conferencing tools like Jitsi Meet or Google Meet, scheduled directly with the facility instead of through JPay, Securus, or GettingOut.",
      "This usually happens at facilities where the video visit program is managed by the unit itself, sometimes set up during periods when in-person visiting was restricted. The process is more manual: you coordinate with the warden office or visitation staff by phone and email.",
      "This guide explains how these app-free video visits work, how to schedule one, and what to expect when you join.",
    ],

    sections: [
      {
        heading: "How App-Free Video Visits Work",
        body: [
          "The inmate must add you to their visitation list first, just like with any other video visit. You cannot schedule anything until the facility confirms you are an approved visitor for that inmate.",
          "Instead of booking through an app, you contact the facility directly, usually the warden office or the visitation coordinator, by phone. You provide the inmate name and ID number, confirm you are on the visit list, and agree on a date and time.",
          "You give the facility your name, email address, and phone number. Shortly before the visit, often about five minutes prior, you receive an email or text message containing the meeting link.",
          "You click the link, which opens in Jitsi Meet or Google Meet in your browser or in the conferencing app if you have it installed. A staff member typically explains the visit rules before connecting you to the inmate.",
        ],
      },
      {
        heading: "Do You Need to Install Anything",
        body: [
          "Jitsi Meet works in a web browser without installing anything, which is why some facilities prefer it. You can join from a phone, tablet, or computer browser by clicking the link.",
          "Google Meet also works in a browser, though having the app installed can make joining smoother on a phone. Either way, no provider account and no special prison-visit app is required.",
          "Before the visit, test your camera and microphone in the browser you plan to use. Browser permission prompts for camera and microphone must be accepted, or the staff will see a visitor with no video or audio.",
        ],
      },
      {
        heading: "ID and Scheduling Details",
        body: [
          "Have a valid photo ID ready. Staff may ask you to show it on camera before or during the visit. Families report being asked to hold up a driver license or similar photo ID at the start of the session.",
          "When you schedule, confirm the exact date, time, and time zone with the facility. Ask how far in advance you need to book and whether there is a limit on how many visits per month.",
          "Save the facility phone number and the name of the person you spoke with. If the link does not arrive before the visit, you need someone to call immediately.",
          "Procedures differ between units, even within the same state system. One unit may handle everything by email while another requires a phone call to the warden office. Always follow the specific instructions for your inmate unit.",
        ],
      },
      {
        heading: "Rules to Follow During the Visit",
        body: [
          "Stay seated and keep only yourself visible on camera. Staff commonly instruct visitors not to move around and not to have other people visible in the frame. Moving around or showing other people can end the visit.",
          "Dress modestly. Facilities apply dress standards to video visits similar to in-person visits. Avoid revealing clothing, and when in doubt, dress as you would for an in-person visit.",
          "Use a quiet, private location with a stable internet connection. Background noise, people walking behind you, and a shaky connection all risk interruption or termination of the visit.",
          "Do not record the visit unless the facility explicitly allows it. Recording rules vary, and unauthorized recording can lead to loss of visiting privileges.",
        ],
      },
      {
        heading: "Troubleshooting Common Problems",
        body: [
          "If the link never arrives, check your spam folder, then call the facility immediately. Links are typically sent only minutes before the visit, so there is a narrow window to fix a missing link.",
          "If you join but cannot see or hear the inmate, check your browser camera and microphone permissions first, then try rejoining through the link. Audio routing glitches, such as sound coming from the phone speaker instead of headphones, are common and usually fixed by rejoining.",
          "If you join early and get disconnected when the inmate connects, simply rejoin and wait. Families report this happening when arriving before the inmate is brought to the station.",
          "If the visit fails entirely because of a facility technical problem, contact the visitation coordinator afterward and ask for a reschedule. Policies on missed visits vary by facility.",
        ],
      },
    ],

    takeaways: [
      "Some facilities run video visits over Jitsi Meet or Google Meet instead of a provider app.",
      "The inmate must add you to the visitation list before you can schedule anything.",
      "You schedule directly with the facility, usually by calling the warden office, and receive the link minutes before the visit.",
      "No special account is needed. Jitsi Meet works in a browser with no install.",
      "Have photo ID ready, dress modestly, stay seated, and keep only yourself on camera.",
      "Procedures differ by unit. Always follow the specific instructions for your inmate facility.",
    ],

    faq: [
      {
        question: "Does my facility offer video visits without an app?",
        answer: "It depends on the facility. Some units run visits over Jitsi Meet or Google Meet, scheduled directly with facility staff. Ask your loved one to check with their unit, or call the facility visitation office and ask what video visit options exist.",
      },
      {
        question: "How do I schedule a Jitsi Meet video visit with an inmate?",
        answer: "First the inmate must add you to their visitation list. Then call the warden office or visitation coordinator, confirm you are on the list, and agree on a date and time. You will receive the meeting link by email or text shortly before the visit.",
      },
      {
        question: "Do I need to download Jitsi Meet for a prison video visit?",
        answer: "No. Jitsi Meet works in a web browser without installing anything. Click the link the facility sends you and join from your browser. Just make sure your browser has camera and microphone permission enabled.",
      },
      {
        question: "What ID do I need for a video visit?",
        answer: "Have a valid photo ID ready, such as a driver license. Staff may ask you to hold it up to the camera at the start of the visit. Confirm the exact ID requirements with the facility when you schedule, since policies vary.",
      },
      {
        question: "What are the rules during a Jitsi or Google Meet prison visit?",
        answer: "Stay seated, keep only yourself visible on camera, dress modestly, and use a quiet private location. A staff member typically explains the rules before connecting you. Do not record the visit unless the facility explicitly allows it.",
      },
    ],

    relatedGuideSlugs: ["how-video-visitation-works", "prison-visitation-rules", "what-to-expect-first-prison-visit", "how-to-set-up-inmate-email"],
    relatedTermSlugs: ["video-visitation", "visitation-rules", "correctional-facility"],
    relatedProviderSlugs: ["securus"],
    relatedComparisonSlugs: [],
    ctaType: "hub",
    ctaTarget: "/video-calls",
    ctaLabel: "Explore Video Visitation Options",
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// DIRECTORY EXPORT, featured first, then popular, then alphabetical by title
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_GUIDES: GuideBasic[] = Object.values(GUIDE_DETAILS)
  .map(({ id, slug, title, excerpt, category, difficulty, featured, popular, readingTimeMinutes, country }) => ({
    id, slug, title, excerpt, category, difficulty, featured, popular, readingTimeMinutes, country,
  }))
  .sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    if (a.popular !== b.popular) return a.popular ? -1 : 1
    return a.title.localeCompare(b.title)
  })

// Re-exported from the small file so server imports stay stable.
// Client components must import from lib/data/guide-categories directly.
export { GUIDE_CATEGORIES } from "./guide-categories"
