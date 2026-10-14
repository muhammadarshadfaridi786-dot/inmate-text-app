// ─────────────────────────────────────────────
// HOME_FAQS, single source of truth for the homepage FAQ section.
//
// These FAQs are rendered VISIBLY on the homepage (FaqPreview) AND used to
// build the FAQPage JSON-LD schema in app/page.tsx. Keeping both in one place
// guarantees the structured data always matches the visible content, which
// Google requires for FAQ rich results.
// ─────────────────────────────────────────────

export interface HomeFaqSegment {
  text: string
  /** When set, this segment renders as an internal link. */
  href?: string
}

export interface HomeFaq {
  question: string
  /** Rich answer rendered visibly on the page (links preserved). */
  answer: HomeFaqSegment[]
  /** Plain-text answer used for the JSON-LD FAQPage schema. */
  plainAnswer: string
}

export const HOME_FAQS: HomeFaq[] = [
  {
    question: "What is JPay?",
    answer: [
      {
        text: "JPay is a leading inmate communication platform that allows family members to send messages, photos, and money to incarcerated loved ones. JPay is contracted with dozens of state correctional systems and serves facilities across the US. ",
      },
      { text: "Read our JPay overview", href: "/provider/jpay" },
      { text: " for more detail." },
    ],
    plainAnswer:
      "JPay is a leading inmate communication platform that allows family members to send messages, photos, and money to incarcerated loved ones. JPay is contracted with dozens of state correctional systems and serves facilities across the US. Read our JPay overview for more detail.",
  },
  {
    question: "How do inmate messaging services work?",
    answer: [
      {
        text: "Inmate messaging services let you send and receive electronic messages through a secure platform approved by the facility. Both the sender and recipient need accounts with the same provider. Messages are reviewed by facility staff before delivery. ",
      },
      { text: "Our full messaging guide", href: "/guides/how-inmate-messaging-works" },
      { text: " explains the process step by step." },
    ],
    plainAnswer:
      "Inmate messaging services let you send and receive electronic messages through a secure platform approved by the facility. Both the sender and recipient need accounts with the same provider. Messages are reviewed by facility staff before delivery. Our full messaging guide explains the process step by step.",
  },
  {
    question: "Can I send photos to an inmate?",
    answer: [
      {
        text: "Many facilities allow digital photo sharing through approved providers such as JPay and others. Photos are reviewed before delivery and must meet the facility's content guidelines. Use our ",
      },
      { text: "facility search", href: "/facilities" },
      { text: " to find out which photo services are available at a specific location." },
    ],
    plainAnswer:
      "Many facilities allow digital photo sharing through approved providers such as JPay and others. Photos are reviewed before delivery and must meet the facility's content guidelines. Use our facility search to find out which photo services are available at a specific location.",
  },
  {
    question: "How do video visits work?",
    answer: [
      {
        text: "Video visits are scheduled through the facility's approved provider. You book a time slot online, and both parties connect through a secure video platform during the scheduled window. Some facilities offer on-site video rooms; others allow visits from home. ",
      },
      { text: "Learn more about video visitation", href: "/video-calls" },
      { text: "." },
    ],
    plainAnswer:
      "Video visits are scheduled through the facility's approved provider. You book a time slot online, and both parties connect through a secure video platform during the scheduled window. Some facilities offer on-site video rooms; others allow visits from home. Learn more about video visitation.",
  },
  {
    question: "Which provider does my facility use?",
    answer: [
      { text: "Each facility contracts with one or more communication providers. Use our " },
      { text: "facility search", href: "/facilities" },
      {
        text: " to find the specific prison or jail by name or state, then view the full list of available providers and which services each one offers.",
      },
    ],
    plainAnswer:
      "Each facility contracts with one or more communication providers. Use our facility search to find the specific prison or jail by name or state, then view the full list of available providers and which services each one offers.",
  },
  {
    question: "Can I text an inmate in jail or prison?",
    answer: [
      {
        text: "Yes, but not through regular SMS text messages. Inmates use approved platforms like JPay, CorrLinks, GettingOut, and ConnectNetwork for electronic messaging. The platform depends on which facility your loved one is in. Each facility contracts with a specific provider. Create a free account on the correct platform, and the inmate can then exchange messages with you after staff review.",
      },
    ],
    plainAnswer:
      "Yes, but not through regular SMS text messages. Inmates use approved platforms like JPay, CorrLinks, GettingOut, and ConnectNetwork for electronic messaging. The platform depends on which facility your loved one is in. Each facility contracts with a specific provider. Create a free account on the correct platform, and the inmate can then exchange messages with you after staff review.",
  },
  {
    question: "What is the best inmate text app?",
    answer: [
      {
        text: "The best inmate text app depends on which facility your loved one is in. JPay is the most widely used for state prisons, serving over 35 states. CorrLinks is the only approved platform for all federal Bureau of Prisons facilities. GettingOut by Telmate serves 2,200 plus county jails. ConnectNetwork by GTL covers both state prisons and county jails. You cannot choose your preferred app because the facility determines which platform to use.",
      },
    ],
    plainAnswer:
      "The best inmate text app depends on which facility your loved one is in. JPay is the most widely used for state prisons, serving over 35 states. CorrLinks is the only approved platform for all federal Bureau of Prisons facilities. GettingOut by Telmate serves 2,200 plus county jails. ConnectNetwork by GTL covers both state prisons and county jails. You cannot choose your preferred app because the facility determines which platform to use.",
  },
  {
    question: "How do I find out which inmate text service my loved one uses?",
    answer: [
      {
        text: "Search our facility directory by the facility name or browse by state. Each facility page lists which providers are available for messaging, phone calls, video visits, and money transfers. You can also call the facility directly and ask which provider they use for each type of communication.",
      },
    ],
    plainAnswer:
      "Search our facility directory by the facility name or browse by state. Each facility page lists which providers are available for messaging, phone calls, video visits, and money transfers. You can also call the facility directly and ask which provider they use for each type of communication.",
  },
  {
    question: "Is InmateTextApp.com free to use?",
    answer: [
      {
        text: "Yes. InmateTextApp.com is completely free. We do not charge for any information on this site. No account or registration is required. Creating accounts on communication providers like JPay, CorrLinks, or ConnectNetwork is also free, though the services themselves charge per message or per call.",
      },
    ],
    plainAnswer:
      "Yes. InmateTextApp.com is completely free. We do not charge for any information on this site. No account or registration is required. Creating accounts on communication providers like JPay, CorrLinks, or ConnectNetwork is also free, though the services themselves charge per message or per call.",
  },
  {
    question: "How can I text an inmate for free?",
    answer: [
      {
        text: "Free inmate texting depends on the facility. Several states including California, Colorado, Connecticut, Massachusetts, Minnesota, and New York have eliminated messaging costs at state facilities. Some county jails in Los Angeles, San Diego, and New York City also offer free communication. For facilities that still charge, electronic messages typically cost $0.25 to $0.50 each. Physical mail through services like TextBehind or Pigeonly converts your digital message to a printed letter and is often the most affordable option.",
      },
    ],
    plainAnswer:
      "Free inmate texting depends on the facility. Several states including California, Colorado, Connecticut, Massachusetts, Minnesota, and New York have eliminated messaging costs at state facilities. Some county jails in Los Angeles, San Diego, and New York City also offer free communication. For facilities that still charge, electronic messages typically cost $0.25 to $0.50 each. Physical mail through services like TextBehind or Pigeonly converts your digital message to a printed letter and is often the most affordable option.",
  },
  {
    question: "What is the difference between JPay, CorrLinks, and GettingOut?",
    answer: [
      {
        text: "JPay serves most state prisons and handles messaging, photos, video visits, and money transfers. CorrLinks is the only approved platform for all federal Bureau of Prisons facilities. GettingOut by Telmate serves 2,200 plus county jails and focuses on video visits. ConnectNetwork by GTL handles phone calls and messaging at both state prisons and county jails. The platform you need depends entirely on which specific facility your loved one is in.",
      },
    ],
    plainAnswer:
      "JPay serves most state prisons and handles messaging, photos, video visits, and money transfers. CorrLinks is the only approved platform for all federal Bureau of Prisons facilities. GettingOut by Telmate serves 2,200 plus county jails and focuses on video visits. ConnectNetwork by GTL handles phone calls and messaging at both state prisons and county jails. The platform you need depends entirely on which specific facility your loved one is in.",
  },
  {
    question: "How much do prison phone calls cost in 2026?",
    answer: [
      {
        text: "Under FCC rules effective April 6, 2026, prison phone call rates are capped at $0.11 per minute for large prisons and large jails. Smaller facilities have higher caps up to $0.18 per minute for the smallest jails. Several states including California, Colorado, Connecticut, Massachusetts, Minnesota, and New York now offer free calls at state facilities. Check the specific facility page to find the current rate.",
      },
    ],
    plainAnswer:
      "Under FCC rules effective April 6, 2026, prison phone call rates are capped at $0.11 per minute for large prisons and large jails. Smaller facilities have higher caps up to $0.18 per minute for the smallest jails. Several states including California, Colorado, Connecticut, Massachusetts, Minnesota, and New York now offer free calls at state facilities. Check the specific facility page to find the current rate.",
  },
  {
    question: "Can I use the same account for multiple facilities?",
    answer: [
      {
        text: "Most platforms allow you to add multiple inmates to one account as long as they are at facilities served by the same provider. If your contacts are at facilities using different providers, you will need separate accounts on each platform. For example, a JPay account works for state prison contacts but you need a separate CorrLinks account for any federal prison contacts.",
      },
    ],
    plainAnswer:
      "Most platforms allow you to add multiple inmates to one account as long as they are at facilities served by the same provider. If your contacts are at facilities using different providers, you will need separate accounts on each platform. For example, a JPay account works for state prison contacts but you need a separate CorrLinks account for any federal prison contacts.",
  },
  {
    question: "How long does it take for an inmate message to arrive?",
    answer: [
      {
        text: "Most electronic messages are delivered within a few hours to one business day after submission. Messages go through a staff review process before delivery. Physical letters sent through services like TextBehind or Pigeonly typically arrive within three to seven business days after printing and mailing.",
      },
    ],
    plainAnswer:
      "Most electronic messages are delivered within a few hours to one business day after submission. Messages go through a staff review process before delivery. Physical letters sent through services like TextBehind or Pigeonly typically arrive within three to seven business days after printing and mailing.",
  },
  {
    question: "How do I send money to an inmate?",
    answer: [
      {
        text: "Find out which money transfer provider the facility uses through our facility directory. Common providers include JPay, Access Corrections, TouchPay, and ConnectNetwork. Create a free account on the correct platform, find the inmate by their ID number, and add funds by credit or debit card. Always confirm the inmate ID number and facility name before sending funds to avoid sending to the wrong account.",
      },
    ],
    plainAnswer:
      "Find out which money transfer provider the facility uses through our facility directory. Common providers include JPay, Access Corrections, TouchPay, and ConnectNetwork. Create a free account on the correct platform, find the inmate by their ID number, and add funds by credit or debit card. Always confirm the inmate ID number and facility name before sending funds to avoid sending to the wrong account.",
  },
]
