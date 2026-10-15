import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS, Batch 7 (25 facilities, Phase 2 expansion)
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH7: Record<string, FacilityDetail> = {

"orange-county-jail": {
  id: "f-248",
  name: "Orange County Jail",
  slug: "orange-county-jail",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Orange County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Orange County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Orange County Jail in Orlando FL. GTL handles phone calls and video visits. County jail on S. John Young Pkwy.",

  description:
    "Orange County Jail communication guide. Find GTL phone and video visit options for families of inmates at this large Orlando FL county jail.",

  overview: [
    "Orange County Jail is the main county jail for Orange County, Florida, operated by the Orange County Corrections Department and located on South John Young Parkway in Orlando. The campus includes the main jail facility along with related housing facilities, and it books and houses pretrial and sentenced inmates from across the county. With well over a thousand beds, it is one of the largest county jails in Central Florida, and families often travel from across the region to reach it.",
    "Communication at Orange County Jail runs through GTL (ViaPath). Families set up phone accounts through GTL, and video visits are scheduled through the county's GTL VisitMe portal. Inmates cannot receive incoming calls, so families need a funded phone account before the inmate can call them. Remote video visits are available from home and from the county's visitation center, and visits must be scheduled in advance through the GTL system.",
    "Because this is a large intake facility, new arrivals may move between booking and housing before their first call, so it is worth waiting until the inmate's housing assignment is set before funding accounts. All calls and video visits are monitored and recorded. For the fastest answers about a specific inmate's status, use the county's online inmate search before setting up communication accounts.",
  ],

  address: "3855 S John Young Pkwy, Orlando, FL 32839",
  phone: "(407) 836-3400",
  operatedBy: "Orange County Corrections Department",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Phone calls and remote video visits through GTL/ViaPath, including the county's VisitMe portal.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Available. Electronic messaging options listed on the facility's inmate services page." },
    video: { status: "available", provider: "GTL", notes: "Available. Remote video visits through the county's GTL VisitMe portal, scheduled in advance." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility. Check the GTL visit portal or the corrections department's visitation page." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls only. Fund a GTL phone account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Account funding options are listed on the county's inmate services page. Check there for current deposit methods." },
  },

  rules: [
    "Set up a GTL phone account before the inmate calls; inmates cannot receive incoming calls.",
    "Schedule video visits in advance through the county's GTL VisitMe portal.",
    "Wait until the inmate's housing assignment is set before funding communication accounts.",
    "Save the inmate's booking number; most systems require it for deposits and visit scheduling.",
    "All calls and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "How do I receive calls from an inmate at Orange County Jail?", answer: "Fund a GTL phone account online or by phone. The inmate places the call to you; you cannot call the inmate directly." },
    { question: "How do video visits work at Orange County Jail?", answer: "Register at the county's GTL VisitMe portal, schedule a remote visit in advance, and check in through the app before your session. Visits are time-limited and fee-based." },
    { question: "Where is Orange County Jail located?", answer: "3855 S John Young Pkwy, Orlando, FL 32839. The campus includes the main jail and related housing facilities." },
    { question: "Can I send mail to an inmate?", answer: "Yes. Address personal mail with the inmate's full name, booking number, and cell assignment to P.O. Box 4970, Orlando, FL 32802-4970." },
    { question: "How do I find an inmate's booking number?", answer: "Use the Orange County Corrections Department's online inmate search before setting up accounts." },
      {
        question: "How do I find or search for an inmate at Orange County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Orange County, Florida. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Orange County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Orange County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Orange County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Orange County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["broward-county-jail", "miami-dade-corrections-facility", "hillsborough-county-department-of-corrections"],
},

"duval-county-jail": {
  id: "f-249",
  name: "Duval County Jail",
  slug: "duval-county-jail",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Duval County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Duval County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Duval County Jail in Jacksonville FL. GettingOut video visits, GTL phones. Pretrial detention facility downtown.",

  description:
    "Duval County Jail communication guide. Find GettingOut video visits and GTL phone options for families of inmates at this Jacksonville FL jail.",

  overview: [
    "Duval County Jail, officially the John E. Goode Pre-Trial Detention Facility, is the main county jail in downtown Jacksonville, Florida, operated by the Jacksonville Sheriff's Office. It holds pretrial detainees for the consolidated city-county government of Jacksonville and Duval County. There is no in-person visitation here; all family visits happen by video.",
    "Communication runs through GTL's platforms. Video visits are scheduled through GettingOut, GTL's consumer site, where remote visits from home carry a per-minute fee and the inmate calls you once you are connected. Phone accounts are funded through the GTL phone system, and the inmate places the calls. Families must register and verify their identity on GettingOut before scheduling a visit, and each visit requires the inmate's approval.",
    "Since late 2024, personal mail no longer goes to the jail directly; letters are sent to a processing center and scanned to the inmate's tablet. Money for commissary goes through Access Secure Deposits rather than directly to the jail. Because mail and video both run through outside systems, families should set up their GettingOut account as soon as they know their loved one is in custody.",
  ],

  address: "500 E Adams St, Jacksonville, FL",
  operatedBy: "Jacksonville Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone accounts through the GTL phone system.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "GTL's consumer platform for remote video visits, messaging, and photo sharing.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Available. Messaging through the GettingOut app and website, subject to facility approval." },
    video: { status: "available", provider: "GettingOut", notes: "Available. No in-person visits; all visits are by video through GettingOut. Register and verify your identity first." },
    photos: { status: "available", provider: "GettingOut", notes: "Available. Photo sharing through the GettingOut app where the facility allows it." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls only. Fund a GTL phone account before the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits go through Access Secure Deposits online or by phone, plus a lobby kiosk. The jail does not take cash or money orders directly." },
  },

  rules: [
    "Register and verify your identity on GettingOut before scheduling a video visit.",
    "Fund a GTL phone account; the inmate calls you, and incoming calls are not possible.",
    "Send personal mail to the Phoenix MD processing center, not to the jail.",
    "Use Access Secure Deposits for money; the jail does not take cash or money orders directly.",
    "Recording or screenshotting a video visit can bring a one-year suspension.",
  ],

  faq: [
    { question: "How do video visits work at Duval County Jail?", answer: "There are no in-person visits. Register at GettingOut.com, verify your identity, and schedule a remote visit; the inmate calls you from the jail. Remote visits carry a per-minute fee." },
    { question: "How do I set up phone calls?", answer: "Fund a phone account through the GTL phone system. The inmate places the call to you." },
    { question: "Where do I send mail?", answer: "Since late 2024, personal mail goes to: Jacksonville Sheriff's Office - Duval, FL, inmate name and 10-digit booking number, P.O. Box 247, Phoenix, MD 21131. Legal mail still goes to 500 E. Adams Street." },
    { question: "How do I send money?", answer: "Use Access Secure Deposits at inmatedeposits.com or 1-866-345-1884, or the cash kiosk in the jail lobby." },
    { question: "Are onsite video visits free?", answer: "Free video visits are available at the onsite visitation center at 500 E. Adams Street on select days; book at least 24 hours ahead." },
      {
        question: "How do I find or search for an inmate at Duval County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Duval County, Florida. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Duval County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Duval County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Duval County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Duval County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["broward-county-jail", "hillsborough-county-department-of-corrections", "miami-dade-corrections-facility"],
},

"palm-beach-county-main-detention-center": {
  id: "f-250",
  name: "Palm Beach County Main Detention Center",
  slug: "palm-beach-county-main-detention-center",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Palm Beach County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Palm Beach County Main Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Palm Beach County Main Detention Center in West Palm Beach FL. Securus phones, GTL video visits. PBSO jail.",

  description:
    "Palm Beach County Main Detention Center communication guide. Find Securus phone and GTL video visit options for families at this West Palm Beach FL jail.",

  overview: [
    "The Palm Beach County Main Detention Center is the primary county jail in West Palm Beach, Florida, operated by the Palm Beach County Sheriff's Office. It sits on Gun Club Road and serves as the county's main intake and housing facility for pretrial and sentenced inmates. The county also runs a west detention center in Belle Glade, with video visitation centers in West Palm Beach and Belle Glade supporting family visits across the county.",
    "Phone calls at the Main Detention Center run through Securus; families set up a Securus phone account so the inmate can call them. Video visitation is handled separately through GTL, with visits scheduled in advance and held at the county's video visitation centers or remotely. Mail is restricted to postcards, which are scanned and delivered to the inmate. Money for commissary goes through Access Corrections SmartDeposit or lobby kiosks.",
    "All visits are by video; there are no contact visits. Visitors must register before scheduling, and visits take place at the Central Video Visitation Center on Weisman Way or the West County center in Belle Glade, or from home where available. Because two different companies handle phones and video, families need accounts with both Securus and GTL to use every communication option.",
  ],

  address: "3228 Gun Club Rd, West Palm Beach, FL 33406",
  phone: "(561) 688-4401",
  operatedBy: "Palm Beach County Sheriff's Office",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone system; families fund Securus phone accounts.",
    },
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Video visitation provider for the county's detention centers.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Messaging not confirmed for this facility. Check the PBSO corrections pages for current options." },
    video: { status: "available", provider: "GTL", notes: "Available. All visits are by video, scheduled in advance through GTL at the county's visitation centers or remotely." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed. Check the visitation provider's page for current options." },
    phone: { status: "available", provider: "Securus", notes: "Available. Inmate-initiated calls. Set up a Securus phone account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits through Access Corrections SmartDeposit online or at lobby kiosks." },
  },

  rules: [
    "Set up a Securus phone account for calls and a GTL account for video visits; they are separate systems.",
    "Register before scheduling a video visit; visitors must be on the inmate's approved list.",
    "Mail is postcard-only; include the inmate's booked name, jacket number, and cell assignment.",
    "Check in 15 minutes early for video visits with a current government photo ID.",
    "Leave cell phones and smart watches outside the visitation area.",
  ],

  faq: [
    { question: "How do phone calls work at Palm Beach County Main Detention Center?", answer: "Calls run through Securus. Set up a Securus phone account at 800-844-6591 so the inmate can call you." },
    { question: "How do I schedule a video visit?", answer: "Register first, then reserve a time through GTL. Visits happen at the Central Video Visitation Center in West Palm Beach or the West County center in Belle Glade." },
    { question: "What mail is allowed?", answer: "Postcards only, 3.5x5 to 4.25x6 inches, in blue or black ink, with the inmate's booked name, jacket number, and cell assignment. Send to P.O. Box 24716, West Palm Beach, FL 33416." },
    { question: "How do I add money to an account?", answer: "Use Access Corrections SmartDeposit at accesscorrections.com or 866-394-0490, or the kiosks in the release lobby and visitation center." },
    { question: "Where is the Main Detention Center?", answer: "3228 Gun Club Rd, West Palm Beach, FL 33406. Reach the jail at 561-688-4401." },
      {
        question: "How do I schedule a video visit at Palm Beach County Main Detention Center?",
        answer: "Visits are conducted by video. Register with the PBSO visitation system, then reserve a time. Check in early with a current government photo ID. Confirm current visitation center locations and hours with PBSO before traveling.",
      },
      {
        question: "How do I find someone at Palm Beach County Main Detention Center?",
        answer: "Use the PBSO inmate search. Search by name to confirm current custody, charges, and bond information.",
      },
      {
        question: "How do I block calls from Palm Beach County Main Detention Center?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why did a call from Palm Beach County Main Detention Center not go through?",
        answer: "Common causes: no funds in the Securus account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
      {
        question: "What happens if someone is transferred from Palm Beach County Main Detention Center?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
  ],

  relatedFacilitySlugs: ["broward-county-jail", "miami-dade-corrections-facility", "turner-guilford-knight-correctional-center"],
},

"pinellas-county-jail": {
  id: "f-251",
  name: "Pinellas County Jail",
  slug: "pinellas-county-jail",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Pinellas County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Pinellas County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Pinellas County Jail in Clearwater FL. Smart Communications for video visits and messaging. PCSO jail.",

  description:
    "Pinellas County Jail communication guide. Find Smart Communications video visits and messaging options for families at this Clearwater FL jail.",

  overview: [
    "Pinellas County Jail is the county detention facility in Clearwater, Florida, operated by the Pinellas County Sheriff's Office. It houses pretrial and sentenced inmates from across Pinellas County on 49th Street North in Clearwater. The jail moved its family visitation fully to remote video in late 2025, replacing its old onsite visitation center with tablet-based communication in every housing unit.",
    "Communication at Pinellas County Jail runs through Smart Communications. Families create an account on the Smart Communications website to schedule remote video visits, exchange electronic messages, and send photos; inmates can also initiate video sessions on demand from their tablets. There are no face-to-face visits except specifically approved professional visits. Online money deposits for inmate accounts go through ConnectNetwork.",
    "Inmates receive several free video sessions per week, with additional time available for purchase, so families should confirm the current free-visit allowance before paying for extra time. Legal mail still goes to the jail's mailing address on 49th Street North. Because video, messaging, and money run through two different systems, families need both a Smart Communications account and a ConnectNetwork account.",
  ],

  address: "14400 49th Street North, Clearwater, FL 33762",
  phone: "(727) 464-6415",
  operatedBy: "Pinellas County Sheriff's Office",

  providers: [
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "Online deposits to inmate accounts through connectnetwork.com.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: undefined, notes: "Available. Electronic messaging through Smart Communications; create an account at smartinmate.com to connect." },
    video: { status: "available", provider: undefined, notes: "Available. Remote video visits through Smart Communications, scheduled or inmate-initiated on demand. No face-to-face visits." },
    photos: { status: "available", provider: undefined, notes: "Available. Send photos to inmates through Smart Communications messaging." },
    phone: { status: "limited", provider: undefined, notes: "Phone options not confirmed. Check the PCSO inmate information page for current phone service details." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Available. Online deposits at connectnetwork.com; money orders and lobby kiosks also accepted." },
  },

  rules: [
    "Create a Smart Communications account at smartinmate.com to schedule visits and message.",
    "There are no face-to-face visits except specifically approved professional visits.",
    "Inmates get a set number of free video sessions weekly; confirm the allowance before buying more.",
    "Use ConnectNetwork for online money deposits, separate from the Smart Communications account.",
    "Answer inmate-initiated video sessions within the three-minute window.",
  ],

  faq: [
    { question: "How do video visits work at Pinellas County Jail?", answer: "All family visits are remote through Smart Communications. Create an account at smartinmate.com to schedule visits, or answer inmate-initiated sessions on demand. Each visit is 30 minutes." },
    { question: "How do I message an inmate?", answer: "Use Smart Communications messaging at smartinmate.com. Inmates receive a set number of free messages per month." },
    { question: "How do I add money to an inmate's account?", answer: "Deposit online at connectnetwork.com, send a money order by mail, or use the lobby kiosks. Include the inmate's full name, docket number, and housing assignment." },
    { question: "Can I visit in person?", answer: "No. Family visits are remote only. Only professional visits specifically approved by jail command happen in person." },
    { question: "Where is the jail?", answer: "14400 49th Street North, Clearwater, FL 33762. Call 727-464-6415 for general information." },
      {
        question: "How do I find or search for an inmate at Pinellas County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Pinellas County, Florida. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Pinellas County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Pinellas County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Pinellas County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Pinellas County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["hillsborough-county-department-of-corrections", "broward-county-jail", "miami-dade-corrections-facility"],
},

"lee-county-jail": {
  id: "f-252",
  name: "Lee County Jail",
  slug: "lee-county-jail",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Lee County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Lee County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Lee County Jail in Fort Myers FL. GTL phone system. County jail serving Lee County Florida.",

  description:
    "Lee County Jail communication guide. Find GTL phone options for families of inmates at this Fort Myers FL county jail.",

  overview: [
    "Lee County Jail is the county detention facility in Fort Myers, Florida, operated by the Lee County Sheriff's Office. It houses pretrial and sentenced inmates from across Lee County and serves as the county's main intake facility. The jail books new arrests around the clock and holds a large daily population from the Fort Myers area.",
    "Inmate phone calls at Lee County Jail run through GTL's ConnectNetwork system. Families can set up an AdvancePay prepaid account so the inmate can call them, or fund a PIN debit account tied to the inmate's commissary funds. Inmates cannot receive incoming calls, so a funded account is required before the inmate can call out.",
    "All calls are monitored and recorded except legal communications. Because phone and any video or messaging options may run through different systems, families should confirm the current providers on the sheriff's inmate information page before funding accounts. For the fastest answers about a specific inmate, use the sheriff's online inmate search.",
  ],

  operatedBy: "Lee County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone system; families use AdvancePay or PIN debit accounts.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Messaging not confirmed for this facility. Check the sheriff's inmate information page." },
    video: { status: "limited", provider: undefined, notes: "Video visitation not confirmed. Check the sheriff's visitation page for current options." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL. Set up an AdvancePay account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Set up a GTL AdvancePay account so the inmate can call you.",
    "Inmates cannot receive incoming calls; all calls are inmate-initiated.",
    "Use the sheriff's online inmate search to confirm custody before funding accounts.",
    "All calls are monitored and recorded except legal communications.",
    "Confirm current video and messaging options on the sheriff's inmate information page.",
  ],

  faq: [
    { question: "How do I receive calls from a Lee County Jail inmate?", answer: "Create a GTL AdvancePay account online or by phone and add funds. The inmate calls you; you cannot call the inmate." },
    { question: "What is PIN debit?", answer: "PIN debit lets the inmate pay for calls from their own commissary funds, with no control from you over who they call." },
    { question: "Can inmates receive incoming calls?", answer: "No. Inmates can only make outgoing calls to approved contacts." },
    { question: "How do I find an inmate?", answer: "Use the Lee County Sheriff's Office online inmate search to confirm custody status and get the booking number." },
    { question: "Are calls monitored?", answer: "Yes. All calls are recorded and monitored except communications with legal counsel." },
      {
        question: "How do I find or search for an inmate at Lee County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Lee County, Florida. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Lee County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Lee County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Lee County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Lee County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["broward-county-jail", "hillsborough-county-department-of-corrections", "miami-dade-corrections-facility"],
},

"hillsborough-county-jail": {
  id: "f-253",
  name: "Hillsborough County Jail",
  slug: "hillsborough-county-jail",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Hillsborough County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hillsborough County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Hillsborough County Jail in Tampa FL. GTL phones, remote video visits. Falkenburg and Orient Road jails.",

  description:
    "Hillsborough County Jail communication guide. Find GTL phone and remote video visit options for families at this Tampa FL county jail.",

  overview: [
    "Hillsborough County Jail is the county detention system in Tampa, Florida, operated by the Hillsborough County Sheriff's Office. It includes two main facilities: the Falkenburg Road Jail and the Orient Road Jail, which together house pretrial and sentenced inmates from across the county. In late 2025 the sheriff closed onsite family visitation, so every family visit is now remote.",
    "Inmate phone service runs through GTL's ConnectNetwork; families fund AdvancePay accounts so the inmate can call them. Remote video visits now run through Smart Communications, with scheduled and on-demand sessions from the inmate's tablet. Inmates receive a set amount of free video time each week, and additional sessions can be purchased.",
    "Mail goes to the county's mail processing center rather than the jail, where it is scanned and delivered digitally. Deposits can be made through lobby kiosks or the county's deposit service. Because phones, video, and mail each run through different systems, families should set up their GTL and Smart Communications accounts separately and confirm current schedules on the sheriff's website.",
  ],

  address: "520 N Falkenburg Rd, Tampa, FL 33619",
  phone: "(813) 247-8300",
    mailingAddress: "Personal mail: Inmate Name, Inmate Booking Number, c/o Mail Processing Center, PO BOX 9115, Seminole, FL 33775-9115. Legal/privileged mail: Falkenburg Road Jail, 520 N. Falkenburg Road, Tampa, Florida 33619, or Orient Road Jail, 1201 N. Orient Road, Tampa, FL 33619",
    visitingHours: "Video Visitation typically 9:30 am to 8:45 pm, 2 hours no-cost prescheduled per week, on-demand for fee. Onsite Visitation Center closed as of Oct 28, 2025, all VVS remote. Professional visits 6:00 am to 11:00 pm daily",
    commissary: "Inmate Accounts via Aramark, TouchPay. Money order with inmate name and booking number to Aramark, 207 Kelsey Lane Suite G, Tampa, FL 33619, phone 813-626-8800",
    fax: "Falkenburg Road Jail: 813-242-1885, Orient Road Jail: 813-242-1881, professional documentation only",
  operatedBy: "Hillsborough County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone services through GTL's ConnectNetwork.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Messaging provider not confirmed. Check the sheriff's inmate information page for current options." },
    video: { status: "available", provider: undefined, notes: "Available. All family visits are remote through Smart Communications, scheduled or on demand. Onsite visitation is closed." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL. Fund an AdvancePay account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits through the lobby kiosk or the county's deposit service; check the sheriff's site for current options." },
  },

  rules: [
    "Fund a GTL AdvancePay account for phone calls; inmates cannot receive incoming calls.",
    "Schedule video visits through Smart Communications; onsite family visitation is closed.",
    "Send mail to the county's mail processing center, not the jail.",
    "Confirm the weekly free video time allowance before purchasing extra sessions.",
    "Attorneys and court-appointed professionals can still visit in person with paperwork filed.",
  ],

  faq: [
    { question: "How do phone calls work at Hillsborough County Jail?", answer: "Phones run through GTL's ConnectNetwork. Set up an AdvancePay account so the inmate can call you. Housing unit phones are outgoing only." },
    { question: "How do video visits work now?", answer: "All family visits are remote through Smart Communications. Create an account at smartinmate.com to schedule visits or receive inmate-initiated sessions. Each inmate gets free scheduled video time weekly." },
    { question: "Where do I send mail?", answer: "Mail goes to the county's mail processing center: inmate name and booking number, c/o Mail Processing Center, PO Box 9115, Seminole, FL 33775-9115. Legal mail goes to 520 N. Falkenburg Road." },
    { question: "How do I add money?", answer: "Use the deposit kiosk in the Falkenburg Road lobby or the county's phone deposit service." },
    { question: "What are the two jail facilities?", answer: "The Falkenburg Road Jail at 520 N Falkenburg Rd and the Orient Road Jail at 1201 Orient Road, both in Tampa." },
      {
        question: "How do I find or search for an inmate at Hillsborough County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Hillsborough County, Florida. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Hillsborough County Jail?",
        answer: "Address mail as follows: Personal mail: Inmate Name, Inmate Booking Number, c/o Mail Processing Center, PO BOX 9115, Seminole, FL 33775-9115. Legal/privileged mail: Falkenburg Road Jail, 520 N. Falkenburg Road, Tampa, Florida 33619, or Orient Road Jail, 1201 N. Orient Road, Tampa, FL 33619. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "What are the visiting hours at Hillsborough County Jail?",
        answer: "Video Visitation typically 9:30 am to 8:45 pm, 2 hours no-cost prescheduled per week, on-demand for fee. Onsite Visitation Center closed as of Oct 28, 2025, all VVS remote. Professional visits 6:00 am to 11:00 pm daily",
      },
      {
        question: "Can I receive incoming calls from an inmate at Hillsborough County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Hillsborough County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["hillsborough-county-department-of-corrections", "broward-county-jail", "miami-dade-corrections-facility"],
},

"dekalb-county-jail": {
  id: "f-254",
  name: "DeKalb County Jail",
  slug: "dekalb-county-jail",
  type: "county",
  stateSlug: "georgia",
  stateName: "Georgia",
  stateAbbr: "GA",
  countySlug: null,
  countyName: "DeKalb County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "DeKalb County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at DeKalb County Jail in Decatur GA. Securus phones, video visits, and eMessaging. DeKalb County Sheriff jail.",

  description:
    "DeKalb County Jail communication guide. Find Securus phone, video visit, and eMessaging options for families at this Decatur GA jail.",

  overview: [
    "DeKalb County Jail is the county detention facility in Decatur, Georgia, operated by the DeKalb County Sheriff's Office. It houses pretrial and sentenced inmates from across DeKalb County on Memorial Drive, east of Atlanta. The jail serves as the county's main intake point and holds a large daily population from the Atlanta metro area.",
    "Communication at DeKalb County Jail runs through Securus Technologies. Families set up Securus accounts to receive phone calls, schedule video visits, and exchange electronic messages with inmates. Inmates can make outgoing calls using inmate debit accounts, and friends and family can fund prepaid accounts through the Securus website or app.",
    "Visits must be scheduled at least a day in advance through the Securus system, and visitors need to be on the inmate's approved list. Mail is limited to postcards, which must follow strict size and content rules. Money for commissary can be deposited through lobby kiosks or the county's deposit service.",
  ],

  address: "4415 Memorial Dr, Decatur, GA 30032",
  phone: "(404) 298-8500",
  operatedBy: "DeKalb County Sheriff's Office",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "Phone calls, video visits, and eMessaging through Securus.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Available. Electronic messaging through Securus eMessaging." },
    video: { status: "available", provider: "Securus", notes: "Available. Video visits scheduled through Securus; visitors must be on the approved list." },
    photos: { status: "available", provider: "Securus", notes: "Available. Photo attachments through Securus messaging where enabled." },
    phone: { status: "available", provider: "Securus", notes: "Available. Inmate-initiated calls via inmate debit or prepaid Securus accounts." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits through lobby kiosks or the county's deposit service." },
  },

  rules: [
    "Set up a Securus account to receive calls, schedule video visits, and send messages.",
    "Schedule visits at least 24 hours in advance; visitors must be on the approved list.",
    "Mail is postcard-only with strict size, ink, and content rules.",
    "Inmates make outgoing calls using inmate debit; fund accounts through Securus.",
    "Only one visit per week per inmate is allowed.",
  ],

  faq: [
    { question: "How do I receive calls from a DeKalb County Jail inmate?", answer: "Create a Securus account and fund a prepaid calling option. Inmates place outgoing calls using inmate debit." },
    { question: "How do video visits work?", answer: "Register and schedule through Securus. Visits are available daily in morning and evening blocks, one visit per inmate per week, and must be booked at least 24 hours ahead." },
    { question: "What mail is allowed?", answer: "Postcards only, unaltered, in blue or black ink, addressed to the inmate's name and SPN at 4415 Memorial Drive, Decatur, GA 30032." },
    { question: "How do I add money?", answer: "Deposit cash or debit at the lobby kiosks, use TouchPay at 866-232-1899, or mail a Western Union or USPS money order marked for inmate accounting." },
    { question: "Can I message an inmate?", answer: "Yes, through Securus eMessaging once you have an account and the inmate is on your contact list." },
      {
        question: "How do I find or search for an inmate at DeKalb County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for DeKalb County, Georgia. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at DeKalb County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at DeKalb County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at DeKalb County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at DeKalb County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fulton-county-jail", "georgia-state-prison", "georgia-diagnostic-and-classification-prison"],
},

"cobb-county-adult-detention-center": {
  id: "f-255",
  name: "Cobb County Adult Detention Center",
  slug: "cobb-county-adult-detention-center",
  type: "county",
  stateSlug: "georgia",
  stateName: "Georgia",
  stateAbbr: "GA",
  countySlug: null,
  countyName: "Cobb County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cobb County Adult Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Cobb County Adult Detention Center in Marietta GA. GTL phone system. Cobb County Sheriff's jail.",

  description:
    "Cobb County Adult Detention Center communication guide. Find GTL phone options for families of inmates at this Marietta GA jail.",

  overview: [
    "The Cobb County Adult Detention Center is the county jail in Marietta, Georgia, operated by the Cobb County Sheriff's Office. Located on County Services Parkway, it is one of the largest detention facilities in the Atlanta metro area and houses pretrial and sentenced inmates from across Cobb County.",
    "Inmate phone calls run through GTL. Families set up GTL phone accounts so the inmate can call them; inmates cannot receive incoming calls. The facility's phone system supports prepaid and collect calling options managed through GTL's friends and family site.",
    "Visits require the visitor to be on the inmate's approved list and are generally scheduled in advance. All calls are monitored and recorded except legal communications. Families should confirm current visitation and messaging options on the sheriff's website before planning a visit, since services can change.",
  ],

  address: "1825 County Services Pkwy, Marietta, GA 30008",
  phone: "(770) 499-4200",
  operatedBy: "Cobb County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone system for the detention center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Messaging not confirmed for this facility. Check the sheriff's inmate information page." },
    video: { status: "limited", provider: undefined, notes: "Video visitation not confirmed. Check the sheriff's visitation page for current options." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL. Fund an account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate services page." },
  },

  rules: [
    "Set up a GTL phone account so the inmate can call you.",
    "Confirm the visitor is on the inmate's approved list before planning a visit.",
    "Use the sheriff's online detainee search to confirm custody and get the booking number.",
    "All calls are monitored and recorded except legal communications.",
    "Confirm current visitation options on the sheriff's website, since services can change.",
  ],

  faq: [
    { question: "How do I receive calls from a Cobb County jail inmate?", answer: "Create a GTL phone account and add funds. The inmate places the call to you; incoming calls are not allowed." },
    { question: "How do I find an inmate?", answer: "Use the Cobb County Sheriff's Office online detainee search, or call 770-499-4200 with the inmate's full name and date of birth." },
    { question: "Where is the detention center?", answer: "1825 County Services Parkway, Marietta, GA 30008." },
    { question: "Can I visit in person?", answer: "Visits require the visitor to be on the inmate's approved list and are generally scheduled in advance. Check the sheriff's website for current visitation rules." },
    { question: "How do I add money to an account?", answer: "Deposit options are listed on the sheriff's inmate services page; confirm current methods before sending funds." },
      {
        question: "How do I send mail to someone at Cobb County Adult Detention Center?",
        answer: "Address mail with the inmate's full name and SOID number. Confirm the current mailing address with the Cobb County Sheriff's Office before sending, since mail may be routed through a scanning center.",
      },
      {
        question: "How do I schedule a video visit at Cobb County Adult Detention Center?",
        answer: "Visits are scheduled through GTL/ViaPath. Register, then book a time slot at least a day ahead. Visits are 30 minutes. Confirm current scheduling rules with the facility before traveling.",
      },
      {
        question: "How do I block calls from Cobb County Adult Detention Center?",
        answer: "You can decline individual calls, or contact GTL to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask GTL support for a full block.",
      },
      {
        question: "Why did a call from Cobb County Adult Detention Center not go through?",
        answer: "Common causes: no funds in the GTL account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
      {
        question: "What happens if someone is transferred from Cobb County Adult Detention Center?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
  ],

  relatedFacilitySlugs: ["fulton-county-jail", "georgia-state-prison", "valdosta-state-prison"],
},

"gwinnett-county-jail": {
  id: "f-256",
  name: "Gwinnett County Jail",
  slug: "gwinnett-county-jail",
  type: "county",
  stateSlug: "georgia",
  stateName: "Georgia",
  stateAbbr: "GA",
  countySlug: null,
  countyName: "Gwinnett County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Gwinnett County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Gwinnett County Jail in Lawrenceville GA. Securus phones and video visits. Gwinnett County Sheriff jail.",

  description:
    "Gwinnett County Jail communication guide. Find Securus phone and video visit options for families at this Lawrenceville GA jail.",

  overview: [
    "Gwinnett County Jail is the county detention facility in Lawrenceville, Georgia, operated by the Gwinnett County Sheriff's Office. Located on University Parkway, it houses pretrial and sentenced inmates from across Gwinnett County, one of the most populous counties in the Atlanta metro area.",
    "The sheriff's office contracts with Securus Technologies for inmate phones and video visitation. Families create Securus accounts to receive calls and to schedule video visits, which are the primary way to visit since visits are video-based. Inmate mail is processed through a central facility and delivered as scanned postcards.",
    "Money for commissary can be deposited through lobby kiosks or online through the county's deposit service. Visitors must be on the inmate's approved list and register through the Securus system before scheduling a video visit. All calls and video visits are monitored and recorded.",
  ],

  address: "2900 University Pkwy, Lawrenceville, GA 30043",
  phone: "(770) 619-6500",
  website: "https://gwinnettcounty.com/government/departments/sheriff/inmate-services",
  operatedBy: "Gwinnett County Sheriff's Office",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone services and video visitation through Securus.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Available. Electronic messaging through Securus." },
    video: { status: "available", provider: "Securus", notes: "Available. Video visits through Securus; register and schedule in advance." },
    photos: { status: "available", provider: "Securus", notes: "Available. Photo sharing through Securus messaging where enabled." },
    phone: { status: "available", provider: "Securus", notes: "Available. Inmate-initiated calls; set up a Securus phone account to receive them." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits through the lobby kiosk or the county's online deposit service." },
  },

  rules: [
    "Create a Securus account to receive calls and schedule video visits.",
    "Visits are video-based; register through the Securus system before scheduling.",
    "Mail goes to the JailATM processing center as postcards and is scanned to the inmate.",
    "Deposit commissary funds through the lobby Smart Deposit kiosk or JailATM.com.",
    "Visitors must be on the inmate's approved list.",
  ],

  faq: [
    { question: "How do I receive calls from a Gwinnett County Jail inmate?", answer: "Set up a Securus phone account with options like AdvanceConnect prepaid or Direct Bill. The inmate places the call to you." },
    { question: "How do video visits work?", answer: "The sheriff's office allows video visitation through Securus. Create an account, get approved, and schedule your visit through the Securus system." },
    { question: "Where do I send mail?", answer: "Postcards go to the JailATM mail processing center: inmate name and ID, JailATM.com - Gwinnett County Jail, 925B Peachtree St. NE, Box 2062, Atlanta, GA 30309." },
    { question: "How do I add money?", answer: "Use the Smart Deposit kiosk in the jail lobby or deposit online at JailATM.com. Money orders can be mailed to the jail marked for deposit only." },
    { question: "Where is the jail?", answer: "2900 University Parkway, Lawrenceville, GA 30043. Call 770-619-6500 for general information." },
      {
        question: "How do I find or search for an inmate at Gwinnett County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Gwinnett County, Georgia. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Gwinnett County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Gwinnett County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Gwinnett County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Gwinnett County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fulton-county-jail", "georgia-state-prison", "georgia-diagnostic-and-classification-prison"],
},

"chatham-county-detention-center": {
  id: "f-257",
  name: "Chatham County Detention Center",
  slug: "chatham-county-detention-center",
  type: "county",
  stateSlug: "georgia",
  stateName: "Georgia",
  stateAbbr: "GA",
  countySlug: null,
  countyName: "Chatham County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Chatham County Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Chatham County Detention Center in Savannah GA. Phone, video visits, and mail. Chatham County Sheriff jail.",

  description:
    "Chatham County Detention Center communication guide. Find phone, video visit, and mail options for families at this Savannah GA jail.",

  overview: [
    "The Chatham County Detention Center is the county jail in Savannah, Georgia, operated by the Chatham County Sheriff's Office. Located on Carl Griffin Drive, it houses pretrial and sentenced inmates from across Chatham County and the Savannah metro area. In 2025 the sheriff's office reopened in-person visitation for the first time in over a decade.",
    "Phone service at Chatham County Detention Center runs through PayTel Communications. Video visits and text messaging run through JailATM.",
    "In-person visits resumed in 2025 in dedicated visitation stations, with additional housing units being added over time. Visitors must follow the facility's dress code and scheduling rules. All calls are monitored and recorded except legal communications.",
  ],

  address: "1050 Carl Griffin Dr, Savannah, GA 31405",
  phone: "(912) 652-7700",
  operatedBy: "Chatham County Sheriff's Office",

  providers: [
    {
      name: "PayTel",
      slug: "paytel",
      initial: "P",
      color: "bg-orange-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "PayTel Communications provides phone service.",
    },
    {
      name: "JailATM",
      slug: "jailatm",
      initial: "J",
      color: "bg-lime-700",
      messaging: true,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "JailATM provides video visitation and text messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "JailATM", notes: "Text messaging through JailATM." },
    video: { status: "available", provider: "JailATM", notes: "Video visits through JailATM. Confirm scheduling on the sheriff's site." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility." },
    phone: { status: "available", provider: "PayTel", notes: "Phone service through PayTel Communications." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Confirm the current phone and video provider on the sheriff's website before funding any account.",
    "Visitors must be on the inmate's approved list and follow the dress code.",
    "In-person visits resumed in 2025; check which housing units are currently eligible.",
    "All calls are monitored and recorded except legal communications.",
    "Call the facility at 912-652-7700 to confirm current communication options.",
  ],

  faq: [
    { question: "How do I call an inmate at Chatham County Detention Center?", answer: "Phone service runs through PayTel Communications. Confirm the current account setup on the sheriff's website or by calling 912-652-7700 before funding an account." },
    { question: "Can I visit in person?", answer: "Yes. The sheriff's office reopened in-person visitation in 2025 in dedicated stations, expanding unit by unit. Check the sheriff's site for current eligibility and scheduling." },
    { question: "How do video visits work?", answer: "Video visits run through JailATM. Confirm the current scheduling process on the sheriff's website." },
    { question: "Where is the detention center?", answer: "1050 Carl Griffin Drive, Savannah, GA 31405." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; call 912-652-7700 for current methods." },
      {
        question: "How do I send mail to someone at Chatham County Detention Center?",
        answer: "Address mail with the inmate's full name and booking number, care of Chatham County Detention Center. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How much do video visits cost at Chatham County Detention Center?",
        answer: "Remote video visits through JailATM are charged per minute. Check the current rate in your JailATM account when booking, since rates can change. On-site visits follow the facility's schedule.",
      },
      {
        question: "How do I block calls from Chatham County Detention Center?",
        answer: "You can decline individual calls, or contact PayTel to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask PayTel support for a full block.",
      },
      {
        question: "Why did a call from Chatham County Detention Center not go through?",
        answer: "Common causes: no funds in the PayTel account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
      {
        question: "What happens if someone is transferred from Chatham County Detention Center?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
  ],

  relatedFacilitySlugs: ["fulton-county-jail", "georgia-state-prison", "georgia-diagnostic-and-classification-prison"],
},

"durham-county-detention-center": {
  id: "f-258",
  name: "Durham County Detention Center",
  slug: "durham-county-detention-center",
  type: "county",
  stateSlug: "north-carolina",
  stateName: "North Carolina",
  stateAbbr: "NC",
  countySlug: null,
  countyName: "Durham County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Durham County Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Durham County Detention Center in Durham NC. GTL phones, GettingOut video visits and messaging.",

  description:
    "Durham County Detention Center communication guide. Find GTL phone and GettingOut video visit options for families at this Durham NC jail.",

  overview: [
    "The Durham County Detention Center is the county jail in Durham, North Carolina, operated by the Durham County Sheriff's Office. Located on South Mangum Street in downtown Durham, it houses pretrial and sentenced inmates from across Durham County and serves as the county's main intake facility.",
    "Phone calls run through GTL's ConnectNetwork system, with families funding AdvancePay accounts so the inmate can call them. Video visits and electronic messaging run through GettingOut, GTL's consumer platform; families register on GettingOut, verify their identity, and schedule visits in advance. In-person visits are available alongside remote video options, with visits scheduled through the county's visitation portal.",
    "Visitors must be on the inmate's approved list and check in ahead of their scheduled time. Because phones and video run through GTL's two connected systems, families need both a ConnectNetwork phone account and a GettingOut account to use every option. All calls and video visits are monitored and recorded.",
  ],

  address: "219 S Mangum St, Durham, NC 27701",
  phone: "(919) 560-0912",
    visitingHours: "Virtual visits via SmartInmate Mon, Wed, Fri, Sat, Sun 9 a.m. to 1 p.m. and 4 p.m. to 9 p.m. In-person visits Tue 4:00PM to 7:30PM Pods A and B, Thu 4:00PM to 7:30PM Pods C and D except 3C North and South, not on Durham County holidays, schedule 2 to 7 days in advance",
    commissary: "Add funds in person at facility, by mail with money order, or online or by phone via TouchPay, facility ID 227701, inmate number required. Money orders mailed to: Durham County Detention Facility, P.O. Box 544, Durham, NC 27702, include full name and inmate number, no personal correspondence",
  operatedBy: "Durham County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone system through GTL's ConnectNetwork.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "GTL's consumer platform for video visits, messaging, and photo sharing.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Available. Messaging through the GettingOut app and website." },
    video: { status: "available", provider: "GettingOut", notes: "Available. Video visits through GettingOut; register, verify your identity, and schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Available. Photo sharing through the GettingOut app where the facility allows it." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL. Fund an AdvancePay account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Create a ConnectNetwork account for phone calls and a GettingOut account for video and messaging.",
    "Verify your identity on GettingOut before scheduling a video visit.",
    "Schedule visits at least two days in advance through the county's visitation portal.",
    "Check in 15 minutes before your scheduled visit with a valid photo ID.",
    "Visitors must be on the inmate's approved list.",
  ],

  faq: [
    { question: "How do I receive calls from a Durham County Detention Center inmate?", answer: "Fund a GTL AdvancePay account through ConnectNetwork. The inmate places the call to you." },
    { question: "How do video visits work?", answer: "Register on GettingOut, verify your identity, and schedule through the county's visitation portal. Visits are available in person and by video on set days." },
    { question: "Can I message an inmate?", answer: "Yes, through the GettingOut app and website once your account is verified and the inmate approves the contact." },
    { question: "Where is the detention center?", answer: "219 South Mangum Street, Durham, NC 27701. Call 919-560-0912 for information." },
    { question: "How do I add money?", answer: "Deposit options include online, phone, lobby kiosk, and mail; confirm current methods on the sheriff's inmate information page." },
      {
        question: "How do I find or search for an inmate at Durham County Detention Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Durham County, North Carolina. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Durham County Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at Durham County Detention Center?",
        answer: "Virtual visits via SmartInmate Mon, Wed, Fri, Sat, Sun 9 a.m. to 1 p.m. and 4 p.m. to 9 p.m. In-person visits Tue 4:00PM to 7:30PM Pods A and B, Thu 4:00PM to 7:30PM Pods C and D except 3C North and South, not on Durham County holidays, schedule 2 to 7 days in advance",
      },
      {
        question: "Can I receive incoming calls from an inmate at Durham County Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Durham County Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["mecklenburg-county-detention-center", "wake-county-detention-center", "central-prison"],
},

"guilford-county-jail": {
  id: "f-259",
  name: "Guilford County Jail",
  slug: "guilford-county-jail",
  type: "county",
  stateSlug: "north-carolina",
  stateName: "North Carolina",
  stateAbbr: "NC",
  countySlug: null,
  countyName: "Guilford County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Guilford County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Guilford County Jail in Greensboro NC. Securus phones and video visits. Guilford County Sheriff jail.",

  description:
    "Guilford County Jail communication guide. Find Securus phone and video visit options for families at this Greensboro NC jail.",

  overview: [
    "Guilford County Jail is the county detention system in Greensboro, North Carolina, operated by the Guilford County Sheriff's Office. It includes the Greensboro Detention Center and the High Point Detention Center, which together house pretrial and sentenced inmates from across Guilford County in the Piedmont Triad.",
    "Communication runs through Securus Technologies, which provides the jail's phone system and video visitation. Families set up Securus accounts to receive calls and to schedule video visits, and inmates use debit or prepaid calling options to place calls. Visitors must be on the inmate's approved list.",
    "Video visits are the primary visit option and must be scheduled in advance through the Securus system. All calls and video visits are monitored and recorded. Families should confirm current schedules and any messaging options on the sheriff's website before funding accounts.",
  ],

  operatedBy: "Guilford County Sheriff's Office",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone system and video visitation through Securus.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Available. Electronic messaging through Securus." },
    video: { status: "available", provider: "Securus", notes: "Available. Video visits scheduled through Securus; visitors must be on the approved list." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility." },
    phone: { status: "available", provider: "Securus", notes: "Available. Inmate-initiated calls through Securus." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Set up a Securus account to receive calls and schedule video visits.",
    "Visits are video-based; register through Securus before scheduling.",
    "Confirm the visitor is on the inmate's approved list.",
    "All calls and video visits are monitored and recorded.",
    "Check the sheriff's website for current visitation hours before planning a visit.",
  ],

  faq: [
    { question: "How do I receive calls from a Guilford County Jail inmate?", answer: "Create a Securus phone account and add funds. The inmate places the call to you; incoming calls are not allowed." },
    { question: "How do video visits work?", answer: "Video visits run through the Securus Video Visitation app. Register, get approved, and schedule in advance." },
    { question: "Which facilities are part of Guilford County Jail?", answer: "The Greensboro Detention Center and the High Point Detention Center, both operated by the Guilford County Sheriff's Office." },
    { question: "Can I message an inmate?", answer: "Electronic messaging is available through Securus once your account is set up." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; confirm current methods before sending funds." },
      {
        question: "How do I find or search for an inmate at Guilford County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Guilford County, North Carolina. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Guilford County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Guilford County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Guilford County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Guilford County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["mecklenburg-county-detention-center", "wake-county-detention-center", "central-prison"],
},

"forsyth-county-detention-center": {
  id: "f-260",
  name: "Forsyth County Detention Center",
  slug: "forsyth-county-detention-center",
  type: "county",
  stateSlug: "north-carolina",
  stateName: "North Carolina",
  stateAbbr: "NC",
  countySlug: null,
  countyName: "Forsyth County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Forsyth County Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Forsyth County Detention Center in Winston-Salem NC. Phone, visits, and mail. Forsyth County Sheriff jail.",

  description:
    "Forsyth County Detention Center communication guide. Find phone, visit, and mail options for families at this Winston-Salem NC jail.",

  overview: [
    "The Forsyth County Detention Center is the county jail in Winston-Salem, North Carolina, operated by the Forsyth County Sheriff's Office. The twin-tower facility on North Church Street houses around a thousand pretrial and sentenced inmates and serves as the county's main intake point.",
    "Phone calls, messaging, and video visits at Forsyth County Detention Center run through PayTel Communications, per the Sheriff's Office.",
    "Visits are scheduled in advance and visitors must be on the inmate's approved list. Personal mail is processed through a central mail center and scanned for delivery. All calls are monitored and recorded except legal communications.",
  ],

  address: "201 N Church St, Winston-Salem, NC 27101",
  phone: "(336) 917-7600",
    visitingHours: "Public visits in three sessions 9:00 to 11:30 AM, 1:00 to 3:00 PM, 5:30 to 7:30 PM, by housing unit. Units 2A, 2B, 4A, 4C, 6A, 6C, 8A, 10A, 10C: Sun, Tue, Thu. Units 2C, 4B, 4D, 6B, 6D, 8B, 10B, 10D: Mon, Wed, Sat. Unit 2D: Sun through Thu and Sat. Unit 8C: Mon. Unit 8D: Tue. Unit 8E: Thu. Unit 8F: Sun and Sat. Register at least 30 min before session ends, 2 adult visits per week",
  inmateCapacity: 1016,
  operatedBy: "Forsyth County Sheriff's Office",

  providers: [
    {
      name: "PayTel",
      slug: "paytel",
      initial: "P",
      color: "bg-orange-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "PayTel Communications provides phone service, messaging, and video visits, per the Sheriff's Office.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "PayTel", notes: "Messaging through PayTel." },
    video: { status: "available", provider: "PayTel", notes: "Video visits through PayTel. Schedule in advance." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility." },
    phone: { status: "available", provider: "PayTel", notes: "Phone service through PayTel Communications." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Confirm the current phone and messaging provider on the sheriff's website before funding any account.",
    "Schedule visits in advance; visitors must be on the inmate's approved list.",
    "Personal mail goes to the central mail processing center and is scanned for delivery.",
    "All calls are monitored and recorded except legal communications.",
    "Call 336-917-7600 to confirm current communication options.",
  ],

  faq: [
    { question: "How do I call an inmate at Forsyth County Detention Center?", answer: "The sheriff's office lists PayTel Communications as the inmate communications provider for phone, messaging, and video. Confirm the current account setup on the sheriff's website or by calling 336-917-7600." },
    { question: "How do visits work?", answer: "Visits are scheduled in advance and visitors must be on the approved list. Check the sheriff's visitation page for current hours and options." },
    { question: "Where do I send mail?", answer: "Personal mail goes to the county's mail processing center and is scanned for digital delivery. Legal mail goes directly to the facility at 201 Church Street, Winston-Salem, NC 27101." },
    { question: "How big is the facility?", answer: "The detention center has a rated capacity of about 1,016 beds." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; call 336-917-7600 for current methods." },
      {
        question: "How do I find or search for an inmate at Forsyth County Detention Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Forsyth County, North Carolina. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Forsyth County Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at Forsyth County Detention Center?",
        answer: "Public visits in three sessions 9:00 to 11:30 AM, 1:00 to 3:00 PM, 5:30 to 7:30 PM, by housing unit. Units 2A, 2B, 4A, 4C, 6A, 6C, 8A, 10A, 10C: Sun, Tue, Thu. Units 2C, 4B, 4D, 6B, 6D, 8B, 10B, 10D: Mon, Wed, Sat. Unit 2D: Sun through Thu and Sat. Unit 8C: Mon. Unit 8D: Tue. Unit 8E: Thu. Unit 8F: Sun and Sat. Register at least 30 min before session ends, 2 adult visits per week",
      },
      {
        question: "Can I receive incoming calls from an inmate at Forsyth County Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Forsyth County Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["mecklenburg-county-detention-center", "wake-county-detention-center", "central-prison"],
},

"charleston-county-detention-center": {
  id: "f-261",
  name: "Charleston County Detention Center",
  slug: "charleston-county-detention-center",
  type: "county",
  stateSlug: "south-carolina",
  stateName: "South Carolina",
  stateAbbr: "SC",
  countySlug: null,
  countyName: "Charleston County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Charleston County Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Charleston County Detention Center in SC. Securus messaging and phones. Sheriff Al Cannon Detention Center.",

  description:
    "Charleston County Detention Center communication guide. Find Securus messaging and phone options for families at this Charleston SC jail.",

  overview: [
    "The Charleston County Detention Center, also known as the Sheriff Al Cannon Detention Center, is the county jail in Charleston, South Carolina, operated by the Charleston County Sheriff's Office. Located on Leeds Avenue in North Charleston, it houses pretrial and sentenced inmates from across Charleston County.",
    "Inmates have access to Securus tablets for electronic messaging, and personal mail is processed through the Securus Digital Mail Center and delivered digitally. Phone calls run through the facility's Securus-based phone system; families fund calling accounts so the inmate can call them.",
    "Onsite visits are offered in daily time blocks, and visitors must follow the facility's scheduling and dress code rules. Because messaging, mail, and phones all run through Securus, one family account covers most communication options. All communications are monitored and recorded except legal communications.",
  ],

  address: "3841 Leeds Ave, Charleston, SC 29405",
  phone: "(843) 529-7300",
    visitingHours: "Video visitation Sun through Sat 8:00 a.m. to 11:00 a.m., 1:00 p.m. to 4:00 p.m. Inmate must be incarcerated at least 72 hours",
    rosterUrl: "https://inmatesearch.charlestoncounty.org/",
  operatedBy: "Charleston County Sheriff's Office",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: true,
      video: false,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "Electronic messaging via Securus tablets; scanned mail through the Securus Digital Mail Center.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Available. Electronic messaging through Securus tablets." },
    video: { status: "limited", provider: undefined, notes: "Onsite visits in daily time blocks; remote video provider not confirmed. Check the sheriff's visitation page." },
    photos: { status: "available", provider: "Securus", notes: "Available. Photo attachments through Securus messaging where enabled." },
    phone: { status: "available", provider: "Securus", notes: "Available. Inmate-initiated calls through the Securus phone system." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Set up a Securus account for phone calls and electronic messaging.",
    "Onsite visits run in three daily time blocks; scheduled visits get priority.",
    "Personal mail goes to the Securus Digital Mail Center and is delivered digitally.",
    "Visitors must follow the dress code and scheduling rules.",
    "All communications are monitored and recorded except legal communications.",
  ],

  faq: [
    { question: "How do I message an inmate at Charleston County Detention Center?", answer: "Inmates use Securus tablets for electronic messaging. Create a Securus account to exchange messages." },
    { question: "How do phone calls work?", answer: "Calls run through the facility's Securus phone system. Fund a calling account so the inmate can call you." },
    { question: "How do visits work?", answer: "Onsite visits are offered every day in three time blocks: morning, afternoon, and evening. Scheduled visits get priority over walk-ins." },
    { question: "Where do I send mail?", answer: "Personal mail goes to the Securus Digital Mail Center: inmate name and number, c/o Securus Digital Mail Center, PO Box 20207, Tampa, FL 33622." },
    { question: "Where is the detention center?", answer: "3841 Leeds Avenue, Charleston, SC 29405. Call 843-529-7300 for information." },
      {
        question: "How do I find or search for an inmate at Charleston County Detention Center?",
        answer: "Use the official inmate search at https://inmatesearch.charlestoncounty.org/. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Charleston County Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at Charleston County Detention Center?",
        answer: "Video visitation Sun through Sat 8:00 a.m. to 11:00 a.m., 1:00 p.m. to 4:00 p.m. Inmate must be incarcerated at least 72 hours",
      },
      {
        question: "Can I receive incoming calls from an inmate at Charleston County Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Charleston County Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["lee-correctional-institution", "broad-river-correctional-institution", "fulton-county-jail"],
},

"greenville-county-detention-center": {
  id: "f-262",
  name: "Greenville County Detention Center",
  slug: "greenville-county-detention-center",
  type: "county",
  stateSlug: "south-carolina",
  stateName: "South Carolina",
  stateAbbr: "SC",
  countySlug: null,
  countyName: "Greenville County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Greenville County Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Greenville County Detention Center in SC. Securus phones and video visits. Greenville County Sheriff jail.",

  description:
    "Greenville County Detention Center communication guide. Find Securus phone and video visit options for families at this Greenville SC jail.",

  overview: [
    "The Greenville County Detention Center is the county jail in Greenville, South Carolina, operated by the Greenville County Sheriff's Office. Located on McGee Street in downtown Greenville, it houses pretrial and sentenced inmates from across Greenville County in multiple housing buildings.",
    "The detention center contracts with Securus for inmate telephone services and video visitation. Families set up Securus accounts to receive phone calls and to schedule video visits, which can be held at the jail's visitation area or remotely from home. Visitors must be on the inmate's approved list.",
    "Video visits are the primary visit option, with in-person non-contact and contact visits available depending on policy. All calls and video visits are monitored and recorded. Families should confirm current messaging options on the sheriff's website before funding accounts.",
  ],

  address: "20 McGee St, Greenville, SC 29601",
  phone: "(864) 467-2309",
    visitingHours: "Two 30-minute visits per week, schedules vary by building and housing unit, first come first served on visiting day. Building Four video-visit office open daily 8:00 AM to 6:00 PM, last visit accepted at 5:30 PM, Building Four visitors report to Building Two lobby. Call 864-467-2330 to confirm inmate building and time",
  operatedBy: "Greenville County Sheriff's Office",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate telephone services and video visitation through Securus.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Available. Electronic messaging through Securus." },
    video: { status: "available", provider: "Securus", notes: "Available. Video visits through Securus, onsite or remote; schedule in advance." },
    photos: { status: "available", provider: "Securus", notes: "Available. Photo attachments through Securus messaging where enabled." },
    phone: { status: "available", provider: "Securus", notes: "Available. Inmate-initiated calls; set up a Securus phone account to receive them." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Set up a Securus account to receive calls and schedule video visits.",
    "Schedule video visits in advance; visitors must be on the approved list.",
    "Professional visits can be arranged by phone or email with the detention center.",
    "All calls and video visits are monitored and recorded.",
    "Confirm current messaging options on the sheriff's website before funding accounts.",
  ],

  faq: [
    { question: "How do I receive calls from a Greenville County Detention Center inmate?", answer: "Create a Securus phone account and add funds. The inmate places the call to you." },
    { question: "How do video visits work?", answer: "Video visits run through Securus and can be held at the jail's visitation area or remotely from home. Register and schedule in advance." },
    { question: "How do attorneys visit?", answer: "Professional visits can be scheduled in person, by phone at 864-467-2370, or by email. Business hours are Monday through Friday." },
    { question: "Where is the detention center?", answer: "20 McGee Street, Greenville, SC 29601. Call 864-467-2309 for information." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; confirm current methods before sending funds." },
      {
        question: "How do I find or search for an inmate at Greenville County Detention Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Greenville County, South Carolina. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Greenville County Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at Greenville County Detention Center?",
        answer: "Two 30-minute visits per week, schedules vary by building and housing unit, first come first served on visiting day. Building Four video-visit office open daily 8:00 AM to 6:00 PM, last visit accepted at 5:30 PM, Building Four visitors report to Building Two lobby. Call 864-467-2330 to confirm inmate building and time",
      },
      {
        question: "Can I receive incoming calls from an inmate at Greenville County Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Greenville County Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["lee-correctional-institution", "broad-river-correctional-institution", "fulton-county-jail"],
},

"richland-county-detention-center": {
  id: "f-263",
  name: "Richland County Detention Center",
  slug: "richland-county-detention-center",
  type: "county",
  stateSlug: "south-carolina",
  stateName: "South Carolina",
  stateAbbr: "SC",
  countySlug: null,
  countyName: "Richland County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Richland County Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Richland County Detention Center in Columbia SC. GTL phones, GettingOut video visits and messaging.",

  description:
    "Richland County Detention Center communication guide. Find GTL phone and GettingOut video visit options for families at this Columbia SC jail.",

  overview: [
    "The Richland County Detention Center, officially the Alvin S. Glenn Detention Center, is the county jail in Columbia, South Carolina, operated by the Richland County Sheriff's Department. Located on John Mark Dial Drive, it houses pretrial and sentenced inmates from across Richland County and the Columbia metro area.",
    "Phone calls run through GTL, with families funding ConnectNetwork phone accounts so the inmate can call them. Video visits and electronic messaging run through GettingOut, GTL's consumer platform; families register on GettingOut, verify their identity, and schedule visits in advance.",
    "Visitors must be on the inmate's approved list and check in ahead of their scheduled time. Because phones and video run through GTL's connected systems, families need both a ConnectNetwork account and a GettingOut account. All calls and video visits are monitored and recorded.",
  ],

  address: "201 John Mark Dial Dr, Columbia, SC 29209",
  phone: "(803) 576-3200",
  operatedBy: "Richland County Sheriff's Department",
  visitingHours: "Monday through Friday, 8:15 a.m. to 8:30 p.m.",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone system through GTL's ConnectNetwork.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "GTL's consumer platform for video visits, messaging, and photo sharing.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Available. Messaging through the GettingOut app and website." },
    video: { status: "available", provider: "GettingOut", notes: "Available. Video visits through GettingOut; register and schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Available. Photo sharing through the GettingOut app where the facility allows it." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL. Fund a ConnectNetwork account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Create a ConnectNetwork account for phone calls and a GettingOut account for video and messaging.",
    "Verify your identity on GettingOut before scheduling a video visit.",
    "Confirm the visitor is on the inmate's approved list before planning a visit.",
    "All calls and video visits are monitored and recorded.",
    "Check in ahead of your scheduled visit time with a valid photo ID.",
  ],

  faq: [
    { question: "How do I receive calls from a Richland County Detention Center inmate?", answer: "Fund a GTL AdvancePay account through ConnectNetwork. The inmate places the call to you." },
    { question: "How do video visits work?", answer: "Register on GettingOut, verify your identity, and schedule in advance through the facility's visitation process." },
    { question: "Can I message an inmate?", answer: "Yes, through the GettingOut app and website once your account is verified and the inmate approves the contact." },
    { question: "Where is the detention center?", answer: "201 John Mark Dial Drive, Columbia, SC 29209. Call 803-576-3200 for information." },
    { question: "Is this the same as Alvin S. Glenn Detention Center?", answer: "Yes. The Richland County Detention Center is officially named the Alvin S. Glenn Detention Center." },
      {
        question: "How do I send mail to someone at Richland County Detention Center?",
        answer: "Address mail with the inmate's full name and booking number, care of Richland County Detention Center, 201 John Mark Dial Drive, Columbia, SC 29209. Mail is inspected before delivery.",
      },
      {
        question: "How do I schedule a visit at Richland County Detention Center?",
        answer: "Visits run Monday through Friday, 8:15 a.m. to 8:30 p.m. Confirm the current schedule and any appointment requirement with the facility before traveling.",
      },
      {
        question: "How do I find someone at Richland County Detention Center?",
        answer: "Use the Richland County detainee lookup on the county website. Search by name to confirm current custody.",
      },
      {
        question: "How do I block calls from Richland County Detention Center?",
        answer: "You can decline individual calls, or contact GTL to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask GTL support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
  ],

  relatedFacilitySlugs: ["lee-correctional-institution", "broad-river-correctional-institution", "mecklenburg-county-detention-center"],
},

"davidson-county-jail": {
  id: "f-264",
  name: "Davidson County Jail",
  slug: "davidson-county-jail",
  type: "county",
  stateSlug: "tennessee",
  stateName: "Tennessee",
  stateAbbr: "TN",
  countySlug: null,
  countyName: "Davidson County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Davidson County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Davidson County Jail in Nashville TN. GTL phones, Securus video visits and messaging.",

  description:
    "Davidson County Jail communication guide. Find GTL phone and Securus video visit options for families at this Nashville TN jail.",

  overview: [
    "Davidson County Jail is the county detention system in Nashville, Tennessee, operated by the Davidson County Sheriff's Office. Its main facility, the Downtown Detention Center, sits in downtown Nashville and houses pretrial and sentenced inmates from across the consolidated city-county of Nashville and Davidson County.",
    "The sheriff's office partnered with GTL for inmate phone service, so families fund GTL phone accounts to receive calls from inmates. Video visits and electronic messaging run through Securus tablets deployed in the facilities; families set up Securus accounts to schedule video visits and exchange messages.",
    "Because phones and video run through two different companies, families need accounts with both GTL and Securus to use every option. Visitors must be on the inmate's approved list and schedule visits in advance. All calls and video visits are monitored and recorded except legal communications.",
  ],

  operatedBy: "Davidson County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone service through GTL under the county's partnership.",
    },
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: true,
      video: true,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "Video visits and messaging through Securus tablets in the facilities.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Available. Electronic messaging through Securus." },
    video: { status: "available", provider: "Securus", notes: "Available. Video visits through Securus; schedule in advance." },
    photos: { status: "available", provider: "Securus", notes: "Available. Photo attachments through Securus messaging where enabled." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL. Fund a phone account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Fund a GTL phone account for calls and a Securus account for video visits and messaging; they are separate systems.",
    "Schedule video visits in advance; visitors must be on the approved list.",
    "Inmates cannot receive incoming calls; all calls are inmate-initiated.",
    "All calls and video visits are monitored and recorded except legal communications.",
    "Use the sheriff's online inmate search to confirm custody before funding accounts.",
  ],

  faq: [
    { question: "How do I receive calls from a Davidson County Jail inmate?", answer: "Set up a GTL phone account under the county's partnership with GTL. The inmate places the call to you." },
    { question: "How do video visits work?", answer: "Video visits run through Securus. Create a Securus account and schedule your visit in advance." },
    { question: "Can I message an inmate?", answer: "Yes, through Securus messaging on the facility tablets once your account is set up." },
    { question: "What is the Downtown Detention Center?", answer: "The Downtown Detention Center is the Davidson County Sheriff's Office's main facility in downtown Nashville." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; confirm current methods before sending funds." },
      {
        question: "How do I find or search for an inmate at Davidson County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Davidson County, Tennessee. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Davidson County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Davidson County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Davidson County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Davidson County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["shelby-county-criminal-justice-center", "shelby-county-correctional-center", "fci-memphis"],
},

"knox-county-detention-facility": {
  id: "f-265",
  name: "Knox County Detention Facility",
  slug: "knox-county-detention-facility",
  type: "county",
  stateSlug: "tennessee",
  stateName: "Tennessee",
  stateAbbr: "TN",
  countySlug: null,
  countyName: "Knox County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Knox County Detention Facility: Contact Guide",
  seoDescription: "How to contact someone at Knox County Detention Facility in Knoxville TN. Phone, video visits, and mail. Knox County Sheriff jail.",

  description:
    "Knox County Detention Facility communication guide. Find phone, video visit, and mail options for families at this Knoxville TN jail.",

  overview: [
    "The Knox County Detention Facility is the county jail system in Knoxville, Tennessee, operated by the Knox County Sheriff's Office. It includes the main detention facility and the Roger D. Wilson Detention Facility, which together house pretrial and sentenced inmates from across Knox County.",
    "The county has historically used Securus Technologies for phone calls, messaging, and video visits, but Knox County was rebidding its inmate communication services contract in 2026. Because the current provider is not confirmed, families should verify the active phone and video provider on the sheriff's website or by calling the facility before funding any account.",
    "Visits are scheduled in advance and visitors must be on the inmate's approved list. All calls and video visits are monitored and recorded except legal communications. For the fastest answers about a specific inmate, use the sheriff's online inmate search.",
  ],

  operatedBy: "Knox County Sheriff's Office",
  // TODO(Jan): verify provider

  providers: [],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Messaging provider not confirmed following the 2026 contract rebid. Check the sheriff's site." },
    video: { status: "limited", provider: undefined, notes: "Video visit provider not confirmed. Check the sheriff's visitation page for current options." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility." },
    phone: { status: "limited", provider: undefined, notes: "Phone provider not confirmed following the 2026 contract rebid. Check the sheriff's site." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Confirm the current phone and video provider on the sheriff's website before funding any account.",
    "Schedule visits in advance; visitors must be on the inmate's approved list.",
    "All calls and video visits are monitored and recorded except legal communications.",
    "Use the sheriff's online inmate search to confirm custody and get the booking number.",
    "Check the sheriff's visitation page for current options following the 2026 contract rebid.",
  ],

  faq: [
    { question: "How do I call an inmate at Knox County Detention Facility?", answer: "Knox County was rebidding its inmate communication services contract in 2026. Confirm the current phone provider on the sheriff's website or by calling the facility before funding an account." },
    { question: "How do video visits work?", answer: "Video visitation is available, but the current provider is not confirmed following the 2026 rebid. Check the sheriff's visitation page for the current scheduling process." },
    { question: "Can I visit in person?", answer: "Visits are generally by video. Confirm current visitation options on the sheriff's website." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; confirm current methods before sending funds." },
    { question: "Which facilities are part of the Knox County jail system?", answer: "The main detention facility and the Roger D. Wilson Detention Facility, both operated by the Knox County Sheriff's Office." },
      {
        question: "How do I find or search for an inmate at Knox County Detention Facility?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Knox County, Tennessee. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Knox County Detention Facility?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Knox County Detention Facility?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Knox County Detention Facility?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Knox County Detention Facility?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["shelby-county-criminal-justice-center", "northeast-correctional-complex", "riverbend-maximum-security-institution"],
},

"hamilton-county-jail": {
  id: "f-266",
  name: "Hamilton County Jail",
  slug: "hamilton-county-jail",
  type: "county",
  stateSlug: "tennessee",
  stateName: "Tennessee",
  stateAbbr: "TN",
  countySlug: null,
  countyName: "Hamilton County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hamilton County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Hamilton County Jail in Chattanooga TN. GettingOut video visits and messaging, GTL phones.",

  description:
    "Hamilton County Jail communication guide. Find GettingOut video visit and GTL phone options for families at this Chattanooga TN jail.",

  overview: [
    "Hamilton County Jail, formally the Hamilton County Jail and Detention Center, is the county detention facility in Chattanooga, Tennessee, operated by the Hamilton County Sheriff's Office. Located on Standifer Gap Road, it houses pretrial and sentenced inmates from across Hamilton County and serves as the county's main intake facility.",
    "Remote video visits are handled through GettingOut, GTL's consumer platform; families register on GettingOut, choose a friends-and-family or inmate account, verify their identity, and schedule visits in advance. Phone calls run through GTL as well, and the GettingOut account can manage phone, video, and messaging funds in one place.",
    "Visitors must be on the inmate's approved list and check in ahead of their scheduled session. All calls and video visits are monitored and recorded. Because the GettingOut system covers most communication options, one verified account handles phones, video visits, and messaging for this facility.",
  ],

  address: "7609 Standifer Gap Rd, Chattanooga, TN",
  phone: "(423) 209-7050",
  website: "https://www.hcsheriff.gov/Corrections",
    notToConfuseWith: "Not to be confused with Hamilton County Jail in Cincinnati, Ohio.",
  operatedBy: "Hamilton County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate phone system through GTL.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "GTL's consumer platform for remote video visits, messaging, and photo sharing.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Available. Messaging through the GettingOut app and website." },
    video: { status: "available", provider: "GettingOut", notes: "Available. Remote video visits through GettingOut; register, verify your identity, and schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Available. Photo sharing through the GettingOut app where the facility allows it." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL. Fund an account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's corrections page." },
  },

  rules: [
    "Register on GettingOut and verify your identity before scheduling a video visit.",
    "Choose a friends-and-family or inmate account type when registering.",
    "Confirm the visitor is on the inmate's approved list.",
    "All calls and video visits are monitored and recorded.",
    "Arrive early for scheduled sessions with a valid photo ID.",
  ],

  faq: [
    { question: "How do video visits work at Hamilton County Jail?", answer: "Remote visits run through GettingOut. Register an account, verify your identity, select the facility, and schedule your visit. You can visit from home, from your phone, or at the jail kiosk." },
    { question: "How do phone calls work?", answer: "Calls run through GTL. Fund your GettingOut account to manage phone, video, and messaging funds in one place. The inmate places the call to you." },
    { question: "Can I message an inmate?", answer: "Yes, through the GettingOut app and website once your account is verified." },
    { question: "Where is the jail?", answer: "7609 Standifer Gap Road, Chattanooga, TN. Call 423-209-7050 for information." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's corrections page; confirm current methods before sending funds." },
      {
        question: "How do I find or search for an inmate at Hamilton County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Hamilton County, Tennessee. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Hamilton County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Hamilton County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Hamilton County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Hamilton County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["shelby-county-criminal-justice-center", "northeast-correctional-complex", "fci-memphis"],
},

"virginia-beach-correctional-center": {
  id: "f-267",
  name: "Virginia Beach Correctional Center",
  slug: "virginia-beach-correctional-center",
  type: "county",
  stateSlug: "virginia",
  stateName: "Virginia",
  stateAbbr: "VA",
  countySlug: null,
  countyName: "City of Virginia Beach",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Virginia Beach Correctional Center: Contact Guide",
  seoDescription: "How to contact someone at Virginia Beach Correctional Center in VA. GTL phones and video visits. Virginia Beach Sheriff's jail.",

  description:
    "Virginia Beach Correctional Center communication guide. Find GTL phone and video visit options for families at this Virginia Beach VA jail.",

  overview: [
    "The Virginia Beach Correctional Center is the city jail in Virginia Beach, Virginia, operated by the Virginia Beach Sheriff's Office. It houses around 1,400 pretrial and sentenced inmates and is one of the largest local jails in the Hampton Roads region.",
    "The sheriff's office contracts with GTL for both the inmate phone system and the video visitation system. Families fund GTL phone accounts through ConnectNetwork so the inmate can call them, and video visits are scheduled through the GTL visit system, including web-based visits from home.",
    "Visitors must be on the inmate's approved list and schedule visits in advance. All calls and video visits are monitored and recorded except legal communications. Families should confirm current visitation hours on the sheriff's website before planning a visit.",
  ],

  operatedBy: "Virginia Beach Sheriff's Office",
  visitingHours: "Video visits by appointment only. Inmates are allowed one 25-minute visit per week; workforce and trustee inmates receive two 55-minute visits per week. Schedule at least 24 hours ahead through the Sheriff's Office visitation system. Confirm current visit windows before traveling.",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Contractor for the inmate phone system and the video visitation system.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Messaging not confirmed for this facility. Check the sheriff's inmate information page." },
    video: { status: "available", provider: "GTL", notes: "Available. Video visits through the GTL visit system, including web-based visits from home." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed for this facility." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL. Fund a ConnectNetwork account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Fund a GTL ConnectNetwork phone account so the inmate can call you.",
    "Schedule video visits in advance through the GTL visit system.",
    "Confirm the visitor is on the inmate's approved list.",
    "All calls and video visits are monitored and recorded.",
    "Check the sheriff's website for current visitation hours before planning a visit.",
  ],

  faq: [
    { question: "How do I receive calls from a Virginia Beach Correctional Center inmate?", answer: "Set up a GTL AdvancePay account through ConnectNetwork. The inmate places the call to you." },
    { question: "How do video visits work?", answer: "Video visits run through the GTL visitation system, including web-based visits from home. Schedule in advance through the sheriff's visitation process." },
    { question: "Can I message an inmate?", answer: "Messaging options are not confirmed for this facility. Check the sheriff's inmate information page for current options." },
    { question: "How big is the facility?", answer: "The correctional center houses around 1,400 inmates." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; confirm current methods before sending funds." },
      {
        question: "Can I visit someone in person at Virginia Beach Correctional Center?",
        answer: "No. All visits are conducted by video through a terminal in the visitation room. There is no in-person contact visitation for friends and family.",
      },
      {
        question: "How do I send mail to someone at Virginia Beach Correctional Center?",
        answer: "Address mail with the inmate's full name and booking number, care of Virginia Beach Correctional Center. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I block calls from Virginia Beach Correctional Center?",
        answer: "You can decline individual calls, or contact GTL to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask GTL support for a full block.",
      },
      {
        question: "Why did a call from Virginia Beach Correctional Center not go through?",
        answer: "Common causes: no funds in the GTL account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
      {
        question: "What happens if someone is transferred from Virginia Beach Correctional Center?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
  ],

  relatedFacilitySlugs: ["fairfax-county-adult-detention-center", "federal-correctional-complex-petersburg", "red-onion-state-prison"],
},

"richmond-city-justice-center": {
  id: "f-268",
  name: "Richmond City Justice Center",
  slug: "richmond-city-justice-center",
  type: "county",
  stateSlug: "virginia",
  stateName: "Virginia",
  stateAbbr: "VA",
  countySlug: null,
  countyName: "City of Richmond",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Richmond City Justice Center: Contact Guide",
  seoDescription: "How to contact someone at Richmond City Justice Center in VA. GTL phones, video chats, and messaging on facility tablets.",

  description:
    "Richmond City Justice Center communication guide. Find GTL phone, video, and messaging options for families at this Richmond VA jail.",

  overview: [
    "The Richmond City Justice Center is the city jail in Richmond, Virginia, operated by the Richmond City Sheriff's Office. Located on Fairfield Way, it houses around 1,400 pretrial and sentenced inmates and serves as the main intake facility for the city of Richmond.",
    "The sheriff's office equipped the jail with GTL tablets that support web-based video chats and text messaging from the inmate's housing unit. Families set up GTL accounts to pay for video time and messages, and phone calls run through GTL's phone system as well.",
    "Video chats and messages are fee-based, with video time billed per minute, so families should confirm current rates on the GTL site before funding an account. Visitors must be on the inmate's approved list. All calls, video chats, and messages are monitored and recorded except legal communications.",
  ],

  address: "1701 Fairfield Way, Richmond, VA 23223",
  phone: "(804) 646-4464",
  operatedBy: "Richmond City Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Phone system and facility tablets for video chats and text messaging.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "GTL's consumer platform for video visits, messaging, and photo sharing.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Available. Text messaging through GTL facility tablets and the GettingOut app." },
    video: { status: "available", provider: "GettingOut", notes: "Available. Video visits through GettingOut; register and verify your identity first." },
    photos: { status: "available", provider: "GettingOut", notes: "Available. Photo sharing through the GettingOut app where the facility allows it." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Set up a GTL account to pay for video chats and messages on the facility tablets.",
    "Verify your identity on GettingOut before scheduling a video visit.",
    "Confirm the visitor is on the inmate's approved list.",
    "Confirm current per-minute video rates on the GTL site before funding an account.",
    "All calls, video chats, and messages are monitored and recorded except legal communications.",
  ],

  faq: [
    { question: "How do video visits work at Richmond City Justice Center?", answer: "Video visits run through GettingOut and GTL tablets in the facility. Register, verify your identity, and schedule in advance. Video time is billed per minute." },
    { question: "How do phone calls work?", answer: "Calls run through GTL's phone system. Fund an account so the inmate can call you." },
    { question: "Can I message an inmate?", answer: "Yes. Text messaging is available through the GTL tablets and the GettingOut app, billed per message." },
    { question: "Where is the justice center?", answer: "1701 Fairfield Way, Richmond, VA 23223. Call 804-646-4464 for information." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; confirm current methods before sending funds." },
      {
        question: "How do I send mail to someone at Richmond City Justice Center?",
        answer: "Address mail with the inmate's full name and booking number, care of Richmond City Justice Center. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I find someone at Richmond City Justice Center?",
        answer: "Use the Richmond City Sheriff's Office inmate search, or call the facility with the person's full name and date of birth.",
      },
      {
        question: "How do I block calls from Richmond City Justice Center?",
        answer: "You can decline individual calls, or contact GTL to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask GTL support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
      {
        question: "What happens if someone is transferred from Richmond City Justice Center?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
  ],

  relatedFacilitySlugs: ["fairfax-county-adult-detention-center", "federal-correctional-complex-petersburg", "sussex-i-state-prison"],
},

"henrico-county-jail": {
  id: "f-269",
  name: "Henrico County Jail",
  slug: "henrico-county-jail",
  type: "county",
  stateSlug: "virginia",
  stateName: "Virginia",
  stateAbbr: "VA",
  countySlug: null,
  countyName: "Henrico County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Henrico County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Henrico County Jail in VA. GTL phones, GettingOut video calls and messaging. Henrico County Sheriff jail.",

  description:
    "Henrico County Jail communication guide. Find GTL phone and GettingOut video options for families at this Henrico VA jail.",

  overview: [
    "Henrico County Jail is the county detention system in Henrico County, Virginia, operated by the Henrico County Sheriff's Office. It includes the Jail East and Jail West facilities, which together house pretrial and sentenced inmates from across the county in the Richmond metro area.",
    "The county's inmate telephone system is provided by GTL, and video calls with family run through the GettingOut app on facility tablets. Families create a GettingOut account to schedule video visits and to send secure messages and photos, while phone calls are funded through GTL's phone accounts.",
    "Visitors must be on the inmate's approved list and follow the facility's scheduling rules. Because phones and video run through GTL's connected systems, families need both a GTL phone account and a GettingOut account. All calls and video visits are monitored and recorded except legal communications.",
  ],

  operatedBy: "Henrico County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Inmate telephone system provider for the county jails.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "Video calls, secure messaging, and photo sharing through the GettingOut app.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Available. Secure messaging through the GettingOut app." },
    video: { status: "available", provider: "GettingOut", notes: "Available. Video calls through the GettingOut app; register and schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Available. Photo sharing through the GettingOut app." },
    phone: { status: "available", provider: "GTL", notes: "Available. Inmate-initiated calls through GTL." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Create a GettingOut account to schedule video calls and send messages and photos.",
    "Fund a GTL phone account for voice calls; inmates cannot receive incoming calls.",
    "Confirm the visitor is on the inmate's approved list.",
    "All calls and video visits are monitored and recorded.",
    "Check the sheriff's website for current visitation options at Jail East and Jail West.",
  ],

  faq: [
    { question: "How do video visits work at Henrico County Jail?", answer: "Video calls run through the GettingOut app on facility tablets. Create an account, get approved, and schedule in advance." },
    { question: "How do phone calls work?", answer: "The county's inmate telephone system is provided by GTL. Fund a phone account so the inmate can call you." },
    { question: "Can I message an inmate?", answer: "Yes. Secure messages and photos can be sent through the GettingOut app." },
    { question: "Which facilities make up Henrico County Jail?", answer: "Jail East and Jail West, both operated by the Henrico County Sheriff's Office." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; confirm current methods before sending funds." },
      {
        question: "How do I send mail to someone at Henrico County Jail?",
        answer: "Address mail with the inmate's full name and booking number, care of Henrico County Jail. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I schedule a video visit at Henrico County Jail?",
        answer: "Visits are by appointment only and must be scheduled at least 24 hours ahead. Register through the facility's visitation system, and confirm current visit windows before traveling.",
      },
      {
        question: "How do I block calls from Henrico County Jail?",
        answer: "You can decline individual calls, or contact GTL to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask GTL support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
      {
        question: "What happens if someone is transferred from Henrico County Jail?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
  ],

  relatedFacilitySlugs: ["fairfax-county-adult-detention-center", "federal-correctional-complex-petersburg", "red-onion-state-prison"],
},

"fayette-county-detention-center": {
  id: "f-270",
  name: "Fayette County Detention Center",
  slug: "fayette-county-detention-center",
  type: "county",
  stateSlug: "kentucky",
  stateName: "Kentucky",
  stateAbbr: "KY",
  countySlug: null,
  countyName: "Fayette County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Fayette County Detention Center: Contact Guide",
  seoDescription: "How to contact someone at Fayette County Detention Center in Lexington KY. Securus phones, video visits, and eMessaging.",

  description:
    "Fayette County Detention Center communication guide. Find Securus phone, video visit, and eMessaging options for families at this Lexington KY jail.",

  overview: [
    "The Fayette County Detention Center is the county jail in Lexington, Kentucky, operated by the Lexington-Fayette Urban County Government's Division of Community Corrections. Located on Old Frankfort Pike, it houses pretrial and sentenced inmates from across Fayette County.",
    "The detention center uses Securus for its inmate phone system, video visitation, and electronic messaging. Families set up Securus accounts to receive calls, schedule video visits through Securus Video Connect, and exchange messages; visits can be held at the jail's lobby video stations or remotely from home.",
    "All visits must be scheduled online at least a day in advance, and visitors need to be on the inmate's approved list. Inmates make outgoing calls using debit or prepaid accounts funded through Securus. All communications are monitored and recorded except legal communications.",
  ],

  address: "600 Old Frankfort Pike, Lexington, KY 40510",
  phone: "(859) 425-2700",
  operatedBy: "Lexington-Fayette Urban County Government",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "Phone system, Securus Video Connect visits, and eMessaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Available. Electronic messaging through Securus eMessaging." },
    video: { status: "available", provider: "Securus", notes: "Available. Video visits through Securus Video Connect, at the jail or remotely; schedule at least a day ahead." },
    photos: { status: "available", provider: "Securus", notes: "Available. Photo attachments through Securus messaging where enabled." },
    phone: { status: "available", provider: "Securus", notes: "Available. Inmate-initiated calls via debit or prepaid Securus accounts." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the facility's inmate information page." },
  },

  rules: [
    "Set up a Securus account to receive calls, schedule video visits, and send messages.",
    "Schedule video visits online at least 24 hours in advance.",
    "Visitors must be on the inmate's approved list and log in 15 minutes early.",
    "Inmates make outgoing calls using debit or prepaid Securus accounts.",
    "All communications are monitored and recorded except legal communications.",
  ],

  faq: [
    { question: "How do I receive calls from a Fayette County Detention Center inmate?", answer: "Create a Securus account and fund a prepaid option such as AdvanceConnect or inmate debit. The inmate places the call to you." },
    { question: "How do video visits work?", answer: "Visits run through Securus Video Connect. Schedule online at least 24 hours ahead; visit at the jail lobby video stations or remotely from home." },
    { question: "Can I message an inmate?", answer: "Yes, through Securus eMessaging once your account is set up and the inmate is on your contact list." },
    { question: "Where is the detention center?", answer: "600 Old Frankfort Pike, Lexington, KY 40510. Call 859-425-2700 for information." },
    { question: "How do I add money?", answer: "Deposit options are listed on the facility's inmate information page; confirm current methods before sending funds." },
      {
        question: "How do I send mail to someone at Fayette County Detention Center?",
        answer: "Address mail with the inmate's full name and booking number, care of Fayette County Detention Center. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I schedule a video visit at Fayette County Detention Center?",
        answer: "Video visits are scheduled through the facility's Securus visitation system. Register in advance, then book a time slot. Confirm current hours and any free-visit allowance with the facility before traveling.",
      },
      {
        question: "How do I block calls from Fayette County Detention Center?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why did a call from Fayette County Detention Center not go through?",
        answer: "Common causes: no funds in the Securus account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
      {
        question: "What happens if someone is transferred from Fayette County Detention Center?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
  ],

  relatedFacilitySlugs: ["louisville-metro-corrections", "kentucky-state-penitentiary", "fci-manchester"],
},

"mobile-county-metro-jail": {
  id: "f-271",
  name: "Mobile County Metro Jail",
  slug: "mobile-county-metro-jail",
  type: "county",
  stateSlug: "alabama",
  stateName: "Alabama",
  stateAbbr: "AL",
  countySlug: null,
  countyName: "Mobile County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Mobile County Metro Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Mobile County Metro Jail in AL. GTL phones, VisitMe video visits, GettingOut messaging.",

  description:
    "Mobile County Metro Jail communication guide. Find GTL phone and video visit options for families at this Mobile AL jail.",

  overview: [
    "The Mobile County Metro Jail is the county detention facility in Mobile, Alabama, operated by the Mobile County Sheriff's Office. Located on St. Emanuel Street in downtown Mobile, it houses pretrial and sentenced inmates from across Mobile County.",
    "Phone calls run through GTL's ConnectNetwork system, and video visits are scheduled through GTL's VisitMe portal branded for the county. Families register online, verify their identity, and book visits one to seven days ahead; onsite video visits at the jail are free during weekday time blocks, while remote visits from home run daily.",
    "Personal mail is limited to metered postcards sent to the jail's post office box, and money orders are no longer accepted; deposits go through the lobby kiosk or the county's deposit service. All calls and video visits are monitored and recorded. Visitors must be on the inmate's approved list and arrive early for their scheduled session.",
  ],

  address: "450 St Emanuel St, Mobile, AL 36603",
  phone: "(251) 574-6412",
  website: "https://www.mobileso.com/metro-jail-2/",
  visitingHours: "On-site video visits Monday through Friday, 8:00-11:00 a.m. and 2:00-5:30 p.m. Remote video visits 7 days a week, 8:00-11:00 a.m. and 2:00-5:30 p.m. Only approved visitors may visit; sign in 15 minutes before the scheduled visit. For questions or assistance, call 855-208-7349.",
  commissary: "Deposit money on an inmate account through InmateCanteen.com. Money orders are no longer accepted for deposit into inmate trust accounts (effective September 1, 2023).",
  operatedBy: "Mobile County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Phone calls through ConnectNetwork; video visits through the county's GTL VisitMe portal.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "GTL's consumer platform for messaging, photo sharing, and video visits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Available. Messaging through GettingOut." },
    video: { status: "available", provider: "GTL", notes: "Available. Video visits through GTL VisitMe; onsite visits free on weekdays, remote visits daily." },
    photos: { status: "available", provider: "GettingOut", notes: "Available. Photo sharing through the GettingOut app where the facility allows it." },
    phone: { status: "available", provider: "GTL", notes: "Available. Outgoing calls only through GTL's ConnectNetwork. Fund an account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits through the lobby kiosk or the county's deposit service; money orders not accepted." },
  },

  rules: [
    "Register on the county's GTL VisitMe portal and book visits one to seven days ahead.",
    "Onsite video visits are free on weekdays; remote visits from home run daily.",
    "Mail is metered postcard only; money orders are no longer accepted.",
    "Fund a GTL ConnectNetwork phone account; calls are outgoing only.",
    "Each inmate can have up to four approved visitors; arrive 15 minutes early.",
  ],

  faq: [
    { question: "How do video visits work at Mobile County Metro Jail?", answer: "Register at the county's GTL VisitMe portal, get approved, and schedule one to seven days ahead. Onsite visits are free Monday through Friday; remote visits from home run seven days a week." },
    { question: "How do phone calls work?", answer: "Calls run through GTL's ConnectNetwork. Set up an account at 877-650-4249 so the inmate can call you. Calls are outgoing only." },
    { question: "What mail is allowed?", answer: "Metered postcards no larger than 4x6 inches, with your full return address, to: inmate name and date of birth, Mobile County Metro Jail, P.O. Box 104, Mobile, AL 36601." },
    { question: "How do I add money?", answer: "Deposit through the lobby kiosk or the county's deposit service. Money orders are no longer accepted." },
    { question: "Where is the jail?", answer: "450 St. Emanuel Street, Mobile, AL 36603. Call 251-574-6412 for information." },
      {
        question: "How do I schedule a video visit at Mobile County Metro Jail?",
        answer: "Video visits are available on-site Monday through Friday and remotely 7 days a week, 8:00-11:00 a.m. and 2:00-5:30 p.m. Only approved visitors may visit. For questions or assistance, call 855-208-7349.",
      },
      {
        question: "Can I visit someone in person at Mobile County Metro Jail?",
        answer: "Only professional face-to-face visits are allowed, for clergy, medical, or legal visitors. All other visits are video visits, on-site or remote.",
      },
      {
        question: "How do I block calls from Mobile County Metro Jail?",
        answer: "You can decline individual calls, or contact GTL to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask GTL support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
      {
        question: "What happens if someone is transferred from Mobile County Metro Jail?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
  ],

  relatedFacilitySlugs: ["holman-correctional-facility", "kilby-correctional-facility", "fci-talladega"],
},

"montgomery-county-detention-facility": {
  id: "f-272",
  name: "Montgomery County Detention Facility",
  slug: "montgomery-county-detention-facility",
  type: "county",
  stateSlug: "alabama",
  stateName: "Alabama",
  stateAbbr: "AL",
  countySlug: null,
  countyName: "Montgomery County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Montgomery County Detention Facility: Contact Guide",
  seoDescription: "How to contact someone at Montgomery County Detention Facility in AL. IC Solutions phones, video visits, and messaging.",

  description:
    "Montgomery County Detention Facility communication guide. Find IC Solutions phone, video, and messaging options for families at this Montgomery AL jail.",

  overview: [
    "The Montgomery County Detention Facility is the county jail in Montgomery, Alabama, operated by the Montgomery County Sheriff's Office. Located on South McDonough Street in downtown Montgomery, it houses pretrial and sentenced inmates from across Montgomery County.",
    "IC Solutions provides the facility's inmate phone system, video visitation, and electronic messaging. Families set up IC Solutions accounts to receive calls, schedule video visits, and exchange messages and photos with inmates. Inmates can also rent tablets that support calls, messaging, and video visits.",
    "Phone calls are available during daytime and evening hours, and inmates are limited only by the funds available on their accounts. Visitors must be on the inmate's approved list. All calls and video visits are monitored and recorded except legal communications.",
  ],

  address: "250 S McDonough St, Montgomery, AL 36104",
  phone: "(334) 832-4985",
  operatedBy: "Montgomery County Sheriff's Office",
  notToConfuseWith: "Not to be confused with Montgomery County Jail in Conroe, Texas, or Montgomery County Jail in Dayton, Ohio.",

  providers: [
    {
      name: "ICSolutions",
      slug: "icsolutions",
      initial: "I",
      color: "bg-sky-700",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "Phone system, video visitation, and eMessaging through IC Solutions; tablet rentals available.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Available. Electronic messaging through IC Solutions." },
    video: { status: "available", provider: "ICSolutions", notes: "Available. Video visits through IC Solutions; visitors must be on the approved list." },
    photos: { status: "available", provider: "ICSolutions", notes: "Available. Photo sharing through IC Solutions messaging." },
    phone: { status: "available", provider: "ICSolutions", notes: "Available. Inmate-initiated calls; fund an IC Solutions account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are listed on the sheriff's inmate information page." },
  },

  rules: [
    "Set up an IC Solutions account to receive calls, schedule video visits, and send messages.",
    "Phone calls are available during daytime and evening hours, generally 7:30 AM to 10 PM.",
    "Confirm the visitor is on the inmate's approved list before scheduling.",
    "Inmates are limited by the funds available on their accounts.",
    "All calls and video visits are monitored and recorded except legal communications.",
  ],

  faq: [
    { question: "How do I receive calls from a Montgomery County Detention Facility inmate?", answer: "Create an IC Solutions account and add phone time. The inmate places the call to you; incoming calls are not allowed." },
    { question: "How do video visits work?", answer: "Video visits run through IC Solutions. Register, get approved, and schedule in advance. Visitors must be on the approved list." },
    { question: "Can I message an inmate?", answer: "Yes, through IC Solutions eMessaging, including photo attachments, once your account is set up." },
    { question: "Where is the facility?", answer: "250 S. McDonough Street, Montgomery, AL 36104. Call 334-832-4985 for information." },
    { question: "How do I add money?", answer: "Deposit options are listed on the sheriff's inmate information page; confirm current methods before sending funds." },
      {
        question: "How do I send mail to someone at Montgomery County Detention Facility?",
        answer: "Address mail with the inmate's full name and booking number, care of Montgomery County Detention Facility. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I schedule a video visit at Montgomery County Detention Facility?",
        answer: "Video visits run through ICSolutions. Register first, then schedule at least one day and no more than a week ahead. On-site visits are limited; confirm current on-site days and hours with the facility before traveling.",
      },
      {
        question: "How do I block calls from Montgomery County Detention Facility?",
        answer: "You can decline individual calls, or contact ICSolutions to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask ICSolutions support for a full block.",
      },
      {
        question: "Why did a call from Montgomery County Detention Facility not go through?",
        answer: "Common causes: no funds in the ICSolutions account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
      {
        question: "Is Montgomery County Detention Facility the same as Mac Sim Butler Detention Facility?",
        answer: "Yes. The Montgomery County Detention Facility in Montgomery, Alabama is also known as the Mac Sim Butler Detention Facility. Both names refer to the same facility.",
      },
  ],

  relatedFacilitySlugs: ["holman-correctional-facility", "kilby-correctional-facility", "fci-talladega"],
},

}
