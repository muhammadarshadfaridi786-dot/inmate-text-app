import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS - Batch 9 (25 facilities, Batch 3 expansion)
// Thin states A: NH, ND, AK, CT, DE, VT, MT
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH9: Record<string, FacilityDetail> = {

"rockingham-county-jail": {
  id: "f-298",
  name: "Rockingham County Jail",
  slug: "rockingham-county-jail",
  type: "county",
  stateSlug: "new-hampshire",
  stateName: "New Hampshire",
  stateAbbr: "NH",
  countySlug: null,
  countyName: "Rockingham County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Rockingham County Jail: Securus Phones, Messaging and Video Visits",
  seoDescription: "How to contact someone at Rockingham County Jail in Brentwood NH. Securus phone, eMessaging and remote video visitation for this Rockingham County jail.",

  description:
    "Rockingham County Jail communication guide. Securus phone, eMessaging and remote video visitation for families of inmates at this county jail in Brentwood NH.",

  overview: [
    "Rockingham County Jail is the county detention facility in Brentwood, New Hampshire, operated by the Rockingham County Department of Corrections. It houses pretrial and sentenced inmates from across Rockingham County.",
    "Communication at Rockingham County Jail runs through Securus Technologies. Video visitation, eMessaging, and phone time are all handled via Securus. Visitation has been remote-only since March 2020, so families visit by video rather than in person.",
    "Families set up a Securus account online or in the app, select Rockingham County Jail, and add the inmate to get started. All calls, messages, and video visits are monitored and recorded.",
  ],

  operatedBy: "Rockingham County Department of Corrections",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service, eMessaging, and video visitation at Rockingham County Jail.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging through a Securus account. Fund the account to send and receive messages." },
    video: { status: "available", provider: "Securus", notes: "Remote-only video visitation through Securus. Schedule visits in advance through your Securus account." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options for the inmate trust fund follow county rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Create a Securus account and add your inmate before scheduling visits or sending messages.",
    "Visits are remote-only video visits. Schedule ahead through Securus and log in on time.",
    "Bring valid photo ID for any required identity verification.",
    "All calls, messages, and video visits are monitored and recorded.",
    "Confirm current visiting hours and rules with the facility, since schedules can change.",
  ],

  faq: [
    { question: "Which company handles phone calls at Rockingham County Jail?", answer: "Securus Technologies provides phone service, eMessaging, and video visitation at Rockingham County Jail." },
    { question: "Can I visit in person at Rockingham County Jail?", answer: "No. Visitation has been remote-only since March 2020. Families visit by video through Securus." },
    { question: "Can I send electronic messages to an inmate at Rockingham County Jail?", answer: "Yes, through Securus eMessaging. Create a Securus account, add the inmate, and fund the service." },
    { question: "How do video visits work at Rockingham County Jail?", answer: "Video visits run through Securus. Create an account, add the inmate, and schedule in advance. Log in on time for your scheduled visit." },
    { question: "How do I add money for phone calls at Rockingham County Jail?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["strafford-county-house-of-corrections", "cheshire-county-jail", "grafton-county-jail"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"cheshire-county-jail": {
  id: "f-299",
  name: "Cheshire County Jail",
  slug: "cheshire-county-jail",
  type: "county",
  stateSlug: "new-hampshire",
  stateName: "New Hampshire",
  stateAbbr: "NH",
  countySlug: null,
  countyName: "Cheshire County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cheshire County Jail: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Cheshire County Jail in Keene NH. Securus phone service, mail rules, and visitation for this Cheshire County jail.",

  description:
    "Cheshire County Jail communication guide. Securus phone service, mail rules, and visitation for families of inmates at this county jail in Keene NH.",

  overview: [
    "Cheshire County Jail is the county detention facility in Keene, New Hampshire, operated by the Cheshire County Department of Corrections. It houses pretrial and sentenced inmates from across Cheshire County.",
    "Phone service at Cheshire County Jail runs through Securus Technologies. Personal mail for inmates is routed to the Securus Digital Mail Center, so families should follow the county's published mail instructions rather than sending letters directly to the jail address.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Cheshire County Department of Corrections",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service at Cheshire County Jail. Personal mail is routed to the Securus Digital Mail Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options for the inmate trust fund follow county rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Send personal mail to the Securus Digital Mail Center address published by the county, not directly to the jail.",
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours and rules with the facility before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at Cheshire County Jail?", answer: "Securus Technologies provides phone service at Cheshire County Jail." },
    { question: "How do I send mail to an inmate at Cheshire County Jail?", answer: "Personal mail is routed to the Securus Digital Mail Center. Follow the county's published mail instructions and do not send letters directly to the jail address." },
    { question: "Can I send electronic messages to an inmate at Cheshire County Jail?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Cheshire County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "How do I add money for phone calls at Cheshire County Jail?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["strafford-county-house-of-corrections", "rockingham-county-jail", "grafton-county-jail"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"grafton-county-jail": {
  id: "f-300",
  name: "Grafton County Jail",
  slug: "grafton-county-jail",
  type: "county",
  stateSlug: "new-hampshire",
  stateName: "New Hampshire",
  stateAbbr: "NH",
  countySlug: null,
  countyName: "Grafton County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Grafton County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Grafton County Jail in North Haverhill NH. Phone, visitation and deposit options for this Grafton County jail.",

  description:
    "Grafton County Jail communication guide. Phone, visitation and deposit options for families of inmates at this county jail in North Haverhill NH.",

  overview: [
    "Grafton County Jail is the county detention facility in North Haverhill, New Hampshire, operated by the Grafton County Department of Corrections. The current facility opened in July 2012 and houses pretrial and sentenced inmates, with a capacity of about 150, including 32 female and 118 male beds.",
    "Phone calls at Grafton County Jail run through ICSolutions (Inmate Calling Solutions). The video and messaging vendors are not confirmed.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 150,
  established: 2012,
  operatedBy: "Grafton County Department of Corrections",
  // TODO(Jan): verify video and messaging provider

  providers: [
    {
      name: "ICSolutions",
      slug: "icsolutions",
      initial: "I",
      color: "bg-sky-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "ICSolutions (Inmate Calling Solutions) provides inmate phone service.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "ICSolutions", notes: "Phone calls through ICSolutions." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Grafton County Jail?", answer: "Phone calls run through ICSolutions (Inmate Calling Solutions)." },
    { question: "How do I visit someone at Grafton County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Grafton County Jail located?", answer: "Grafton County Jail is in North Haverhill, New Hampshire. The current facility opened in July 2012." },
  ],

  relatedFacilitySlugs: ["strafford-county-house-of-corrections", "rockingham-county-jail", "cheshire-county-jail"],
},

"merrimack-county-jail": {
  id: "f-301",
  name: "Merrimack County Jail",
  slug: "merrimack-county-jail",
  type: "county",
  stateSlug: "new-hampshire",
  stateName: "New Hampshire",
  stateAbbr: "NH",
  countySlug: null,
  countyName: "Merrimack County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Merrimack County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Merrimack County Jail in Boscawen NH. Phone, visitation and deposit options for this direct supervision county jail.",

  description:
    "Merrimack County Jail communication guide. Phone, visitation and deposit options for families of inmates at this county jail in Boscawen NH.",

  overview: [
    "Merrimack County Jail is the county detention facility in Boscawen, New Hampshire, operated by the Merrimack County Department of Corrections. It is a direct supervision facility that houses federal inmates plus pretrial and sentenced inmates.",
    "Phone calls and e-messages at Merrimack County Jail run through Securus. Video visitation runs through JailATM, which also handles commissary deposits.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Merrimack County Department of Corrections",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: true,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service and eMessaging.",
    },
    {
      name: "JailATM",
      slug: "jailatm",
      initial: "J",
      color: "bg-lime-700",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "JailATM provides video visitation and handles commissary deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Electronic messaging through Securus eMessaging." },
    video: { status: "available", provider: "JailATM", notes: "Video visits through JailATM. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Securus", notes: "Phone calls through Securus." },
    moneyTransfer: { status: "available", provider: "JailATM", notes: "Commissary deposits through JailATM." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account. Published sources disagree.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Merrimack County Jail?", answer: "Phone calls run through Securus. Video visits run through JailATM." },
    { question: "How do I visit someone at Merrimack County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "What is a direct supervision jail?", answer: "In a direct supervision jail, officers are stationed inside the housing units with inmates rather than observing from a separate control room. Merrimack County Jail uses this model." },
  ],

  relatedFacilitySlugs: ["strafford-county-house-of-corrections", "rockingham-county-jail", "cheshire-county-jail"],
},

"new-hampshire-state-prison-for-women": {
  id: "f-302",
  name: "New Hampshire State Prison for Women",
  slug: "new-hampshire-state-prison-for-women",
  type: "state",
  stateSlug: "new-hampshire",
  stateName: "New Hampshire",
  stateAbbr: "NH",
  countySlug: null,
  countyName: "Merrimack County",
  securityLevel: "Medium / Minimum",
  hasDetailPage: true,
  seoTitle: "New Hampshire State Prison for Women: ConnectNetwork Phones and Contact Guide",
  seoDescription: "How to contact someone at the New Hampshire State Prison for Women in Concord NH. ConnectNetwork phone service, visitation, and contact rules for the only women's prison in NH.",

  description:
    "New Hampshire State Prison for Women communication guide. ConnectNetwork phone service, visitation, and contact rules for families of inmates at the only women's prison in New Hampshire.",

  overview: [
    "The New Hampshire State Prison for Women, now known as the NH Correctional Facility for Women, is the only women's prison in New Hampshire, operated by the NH Department of Corrections. It is located in Concord. The old Goffstown site is closed. The facility houses a medium and minimum mixed population, with a capacity of about 224.",
    "Phone service runs through ConnectNetwork by GTL, now ViaPath, per the official NH Department of Corrections communications page. Families set up a ConnectNetwork account, add the inmate, and fund phone service.",
    "In-person visiting follows NH Department of Corrections rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 224,
  operatedBy: "New Hampshire Department of Corrections",

  providers: [
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "ConnectNetwork by GTL (now ViaPath) provides phone service at NH Department of Corrections facilities.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "ConnectNetwork", notes: "Electronic messaging options are not confirmed for this facility. Confirm with ConnectNetwork or the facility." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visitation through ConnectNetwork. Schedule in advance and confirm eligibility." },
    photos: { status: "limited", provider: "ConnectNetwork", notes: "Photo sharing options are not confirmed for this facility. Confirm with ConnectNetwork or the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the ConnectNetwork phone system. Fund a ConnectNetwork account and keep your number on the approved list." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Fund phone accounts through ConnectNetwork. Trust account deposits follow NH DOC rules." },
  },

  rules: [
    "Set up a ConnectNetwork account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the NH Department of Corrections dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at the New Hampshire State Prison for Women?", answer: "ConnectNetwork by GTL, now ViaPath, provides phone service at NH Department of Corrections facilities, including the women's prison in Concord." },
    { question: "Where is the New Hampshire State Prison for Women?", answer: "The facility is in Concord, New Hampshire, and is now known as the NH Correctional Facility for Women. The old Goffstown site is closed." },
    { question: "Can I video visit an inmate at the New Hampshire State Prison for Women?", answer: "Video visitation is available through ConnectNetwork. Schedule in advance and confirm eligibility with the facility." },
    { question: "How do I visit someone at the New Hampshire State Prison for Women?", answer: "Visitors must be approved. Bring valid photo ID and follow NH DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "How do I add money for phone calls?", answer: "Fund your ConnectNetwork account online or through the ConnectNetwork app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["new-hampshire-state-prison-for-men", "strafford-county-house-of-corrections", "rockingham-county-jail"],
  relatedGuideSlugs: ["how-connectnetwork-works", "how-prison-phone-calls-work"],
},

"burleigh-county-jail": {
  id: "f-303",
  name: "Burleigh County Jail",
  slug: "burleigh-county-jail",
  type: "county",
  stateSlug: "north-dakota",
  stateName: "North Dakota",
  stateAbbr: "ND",
  countySlug: null,
  countyName: "Burleigh County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Burleigh County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Burleigh County Jail in Bismarck ND. Phone, visitation and deposit options for the largest county jail in North Dakota.",

  description:
    "Burleigh County Jail communication guide. Phone, visitation and deposit options for families of inmates at the largest county jail in North Dakota, in Bismarck ND.",

  overview: [
    "Burleigh County Jail, now known as the Burleigh/Morton County Detention Center, is the county detention facility in Bismarck, North Dakota, operated by the Burleigh County Sheriff's Office. With about 555 beds, it is the largest county jail in North Dakota. The ND Department of Corrections and Rehabilitation contracted 120 beds there in 2025 for minimum security state inmates.",
    "Phone calls at Burleigh County Jail run through Reliance Telephone. Only phone time purchased through Reliance can be used in the Detention Center. The video and messaging vendors are not confirmed.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 555,
  operatedBy: "Burleigh County Sheriff's Office",
  // TODO(Jan): verify video and messaging provider

  providers: [
    {
      name: "Reliance Telephone",
      slug: "reliance-telephone",
      initial: "R",
      color: "bg-pink-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Reliance Telephone provides phone service. Only phone time purchased through Reliance can be used in the Detention Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Reliance Telephone", notes: "Phone calls through Reliance Telephone. Only phone time purchased through Reliance can be used." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Burleigh County Jail?", answer: "Phone calls run through Reliance Telephone. Only phone time purchased through Reliance can be used." },
    { question: "How do I visit someone at Burleigh County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Is Burleigh County Jail the largest county jail in North Dakota?", answer: "Yes. With about 555 beds, the Burleigh/Morton County Detention Center is the largest county jail in North Dakota." },
  ],

  relatedFacilitySlugs: ["cass-county-jail", "north-dakota-state-penitentiary", "grand-forks-county-jail"],
},

"grand-forks-county-jail": {
  id: "f-304",
  name: "Grand Forks County Jail",
  slug: "grand-forks-county-jail",
  type: "county",
  stateSlug: "north-dakota",
  stateName: "North Dakota",
  stateAbbr: "ND",
  countySlug: null,
  countyName: "Grand Forks County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Grand Forks County Jail: HomeWAV Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Grand Forks County Jail in Grand Forks ND. HomeWAV phone, messaging and video visits for this Grand Forks County jail.",

  description:
    "Grand Forks County Jail communication guide. HomeWAV phone, messaging and video visits for families of inmates at this Grand Forks County jail in Grand Forks ND.",

  overview: [
    "Grand Forks County Jail, also known as the Grand Forks County Correctional Center, is the county detention facility in Grand Forks, North Dakota, operated by the Grand Forks County Sheriff. It is a sheriff-operated adult corrections facility.",
    "Communication at Grand Forks County Jail runs through HomeWAV for phone calls, video visits, and messaging.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Grand Forks County Sheriff",

  providers: [
    {
      name: "HomeWAV",
      slug: "homewav",
      initial: "H",
      color: "bg-yellow-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "HomeWAV provides phone service, video visits, and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "HomeWAV", notes: "Electronic messaging through HomeWAV." },
    video: { status: "available", provider: "HomeWAV", notes: "Video visits through HomeWAV. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "HomeWAV", notes: "Phone calls through HomeWAV." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Grand Forks County Jail?", answer: "Phone calls run through HomeWAV." },
    { question: "How do I visit someone at Grand Forks County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the official name of Grand Forks County Jail?", answer: "The facility is also known as the Grand Forks County Correctional Center. It is operated by the Grand Forks County Sheriff." },
  ],

  relatedFacilitySlugs: ["cass-county-jail", "north-dakota-state-penitentiary", "burleigh-county-jail"],
},

"ward-county-jail": {
  id: "f-305",
  name: "Ward County Jail",
  slug: "ward-county-jail",
  type: "county",
  stateSlug: "north-dakota",
  stateName: "North Dakota",
  stateAbbr: "ND",
  countySlug: null,
  countyName: "Ward County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Ward County Jail: Reliance Phones and Contact Guide",
  seoDescription: "How to contact someone at Ward County Jail in Minot ND. Reliance Telephone phone service, mail rules, and visitation for this Ward County detention center.",

  description:
    "Ward County Jail communication guide. Reliance Telephone phone service, mail rules, and visitation for families of inmates at this county detention center in Minot ND.",

  overview: [
    "Ward County Jail, also known as the Ward County Detention Center, is the county detention facility in Minot, North Dakota, operated by the Ward County Sheriff. The campus includes an adult jail plus a juvenile detention facility.",
    "Phone service at Ward County Jail runs through Reliance Telephone. The county's official Mail and Telephone page directs phone billing questions to Reliance, so families with billing issues should contact Reliance directly.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Ward County Sheriff",

  providers: [
    {
      name: "Reliance Telephone",
      slug: "reliance-telephone",
      initial: "R",
      color: "bg-slate-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Reliance Telephone provides phone service at Ward County Jail. The county directs phone billing questions to Reliance.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Reliance Telephone", notes: "Electronic messaging options are not confirmed for this facility. Confirm with the facility." },
    video: { status: "limited", provider: "Reliance Telephone", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Reliance Telephone", notes: "Photo sharing options are not confirmed for this facility. Confirm with the facility." },
    phone: { status: "available", provider: "Reliance Telephone", notes: "Outgoing calls through the Reliance Telephone system. Direct phone billing questions to Reliance." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Direct phone billing questions to Reliance Telephone, per the county's official page.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Ward County Jail?", answer: "Reliance Telephone provides phone service at Ward County Jail. The county's official Mail and Telephone page directs phone billing questions to Reliance." },
    { question: "How do I visit someone at Ward County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Does Ward County Jail hold juveniles too?", answer: "Yes. The Ward County campus includes an adult jail plus a juvenile detention facility. The official page details juvenile mail and phone rules separately." },
    { question: "Who do I contact about a phone billing problem at Ward County Jail?", answer: "Contact Reliance Telephone. The county's official page directs phone billing questions to Reliance." },
  ],

  relatedFacilitySlugs: ["cass-county-jail", "north-dakota-state-penitentiary", "burleigh-county-jail"],
  relatedGuideSlugs: ["how-prison-phone-calls-work"],
},

"stutsman-county-jail": {
  id: "f-306",
  name: "Stutsman County Jail",
  slug: "stutsman-county-jail",
  type: "county",
  stateSlug: "north-dakota",
  stateName: "North Dakota",
  stateAbbr: "ND",
  countySlug: null,
  countyName: "Stutsman County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Stutsman County Jail: Video Visits and Contact Guide",
  seoDescription: "How to contact someone at Stutsman County Jail in Jamestown ND. Video visitation via Turnkey Corrections, phone, and visitation rules for this Stutsman County jail.",

  description:
    "Stutsman County Jail communication guide. Video visitation via Turnkey Corrections, phone, and visitation rules for families of inmates at this county jail in Jamestown ND.",

  overview: [
    "Stutsman County Jail, also known as the Stutsman County Correctional Center, is the county detention facility in Jamestown, North Dakota, operated by the Stutsman County Sheriff.",
    "Video visitation at Stutsman County Jail runs through Turnkey Corrections and Inmate Canteen, per the county's official visitation page. Onsite video visits are free, while online visits carry a fee. Visits are limited to 45 minutes.",
    "The phone vendor is not confirmed from official sources, so families should confirm the current phone provider with the facility before creating a prepaid account. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Stutsman County Sheriff",
  // TODO(Jan): verify phone provider (video via Turnkey Corrections confirmed)

  providers: [
    {
      name: "Turnkey Corrections",
      slug: "turnkey-corrections",
      initial: "T",
      color: "bg-stone-600",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Video visitation via Turnkey Corrections and Inmate Canteen, per the county's official visitation page. Phone vendor not confirmed.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "Turnkey Corrections", notes: "Video visits through Turnkey Corrections and Inmate Canteen. Onsite visits are free, online visits carry a fee. Visits limited to 45 minutes." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Schedule video visits through Turnkey Corrections and Inmate Canteen. Onsite visits are free, online visits carry a fee.",
    "Video visits are limited to 45 minutes.",
    "Confirm the phone vendor with the facility before creating a prepaid account.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "How do video visits work at Stutsman County Jail?", answer: "Video visits run through Turnkey Corrections and Inmate Canteen. Onsite video visits are free, online visits carry a fee, and visits are limited to 45 minutes." },
    { question: "Which company handles phone calls at Stutsman County Jail?", answer: "The phone vendor is not confirmed from official sources. Confirm the provider with the facility before creating a prepaid account. Video visitation is confirmed via Turnkey Corrections." },
    { question: "How do I visit someone at Stutsman County Jail?", answer: "Visits are by video. Schedule through Turnkey Corrections and Inmate Canteen. Onsite visits are free and online visits carry a fee." },
  ],

  relatedFacilitySlugs: ["cass-county-jail", "north-dakota-state-penitentiary", "burleigh-county-jail"],
  relatedGuideSlugs: ["how-video-visitation-works"],
},

"missouri-river-correctional-center": {
  id: "f-307",
  name: "Missouri River Correctional Center",
  slug: "missouri-river-correctional-center",
  type: "state",
  stateSlug: "north-dakota",
  stateName: "North Dakota",
  stateAbbr: "ND",
  countySlug: null,
  countyName: "Burleigh County",
  securityLevel: "Minimum",
  hasDetailPage: true,
  seoTitle: "Missouri River Correctional Center: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Missouri River Correctional Center in Bismarck ND. Phone, visitation and deposit options for this minimum security ND correctional center.",

  description:
    "Missouri River Correctional Center communication guide. Phone, visitation and deposit options for families of inmates at this minimum security correctional center in Bismarck ND.",

  overview: [
    "Missouri River Correctional Center is a minimum security facility in Bismarck, North Dakota, operated by the ND Department of Corrections and Rehabilitation. It has a capacity of about 151 and no perimeter fence, with a transitional and work-release focus. It opened in December 1992.",
    "Inmate funds deposits at Missouri River Correctional Center go through JPay, per the ND DOCR handbook. The phone and video vendor is not confirmed.",
    "Visitation follows ND DOCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 151,
  established: 1992,
  operatedBy: "North Dakota Department of Corrections and Rehabilitation",
  // TODO(Jan): verify phone and video provider

  providers: [
    {
      name: "JPay",
      slug: "jpay",
      initial: "J",
      color: "bg-blue-600",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "JPay handles inmate funds deposits, per the ND DOCR handbook.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Inmate funds deposits through JPay, per the ND DOCR handbook." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the ND DOCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Missouri River Correctional Center?", answer: "The phone vendor is not confirmed. Inmate funds deposits go through JPay, per the ND DOCR handbook." },
    { question: "How do I visit someone at Missouri River Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow ND DOCR visiting rules. Confirm visiting hours before traveling." },
    { question: "Does Missouri River Correctional Center have a fence?", answer: "No. It is a minimum security facility with no perimeter fence, focused on transitional and work-release programming. It opened in December 1992." },
  ],

  relatedFacilitySlugs: ["north-dakota-state-penitentiary", "cass-county-jail", "burleigh-county-jail"],
},

"fairbanks-correctional-center": {
  id: "f-308",
  name: "Fairbanks Correctional Center",
  slug: "fairbanks-correctional-center",
  type: "state",
  stateSlug: "alaska",
  stateName: "Alaska",
  stateAbbr: "AK",
  countySlug: null,
  countyName: "Fairbanks North Star Borough",
  securityLevel: "Close",
  hasDetailPage: true,
  seoTitle: "Fairbanks Correctional Center: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Fairbanks Correctional Center in Fairbanks AK. Securus phone service, visitation, and contact rules for this Alaska DOC facility.",

  description:
    "Fairbanks Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Alaska DOC facility in Fairbanks AK.",

  overview: [
    "Fairbanks Correctional Center is a close custody facility in Fairbanks, Alaska, operated by the Alaska Department of Corrections. It has a capacity of about 257 and serves as the primary intake facility for Interior and Northern Alaska. It was constructed in 1967.",
    "Phone service at Fairbanks Correctional Center runs through Securus Technologies. The Alaska DOC contracts with Securus for the statewide inmate phone system, per the official AK DOC Inmate Phone System page.",
    "Visitation follows Alaska DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 257,
  established: 1967,
  operatedBy: "Alaska Department of Corrections",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides the inmate phone system for Alaska DOC facilities, including Fairbanks Correctional Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Alaska DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Alaska DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Fairbanks Correctional Center?", answer: "Securus Technologies provides the inmate phone system for Alaska DOC facilities, including Fairbanks Correctional Center." },
    { question: "Can I send electronic messages to an inmate at Fairbanks Correctional Center?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Fairbanks Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Alaska DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "What is Fairbanks Correctional Center used for?", answer: "It is a close custody facility and the primary intake facility for Interior and Northern Alaska. It was constructed in 1967." },
    { question: "How do I add money for phone calls at Fairbanks Correctional Center?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["anchorage-correctional-complex", "goose-creek-correctional-center", "spring-creek-correctional-center"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"lemon-creek-correctional-center": {
  id: "f-309",
  name: "Lemon Creek Correctional Center",
  slug: "lemon-creek-correctional-center",
  type: "state",
  stateSlug: "alaska",
  stateName: "Alaska",
  stateAbbr: "AK",
  countySlug: null,
  countyName: "Juneau Borough",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Lemon Creek Correctional Center: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Lemon Creek Correctional Center in Juneau AK. Securus phone service, visitation, and contact rules for Southeast Alaska's only state correctional facility.",

  description:
    "Lemon Creek Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Alaska DOC facility in Juneau AK.",

  overview: [
    "Lemon Creek Correctional Center is a multi-custody male facility in Juneau, Alaska, operated by the Alaska Department of Corrections. It has a capacity of about 226 and is the only state correctional facility in Southeast Alaska.",
    "Phone service at Lemon Creek runs through Securus Technologies. The Alaska DOC contracts with Securus for the statewide inmate phone system, per the official AK DOC Inmate Phone System page.",
    "Visitation follows Alaska DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 226,
  operatedBy: "Alaska Department of Corrections",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides the inmate phone system for Alaska DOC facilities, including Lemon Creek Correctional Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Alaska DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Alaska DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Lemon Creek Correctional Center?", answer: "Securus Technologies provides the inmate phone system for Alaska DOC facilities, including Lemon Creek Correctional Center." },
    { question: "Can I send electronic messages to an inmate at Lemon Creek Correctional Center?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Lemon Creek Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Alaska DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "Is Lemon Creek the only state correctional facility in Southeast Alaska?", answer: "Yes. Lemon Creek Correctional Center in Juneau is the only state correctional facility in Southeast Alaska." },
    { question: "How do I add money for phone calls at Lemon Creek Correctional Center?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["anchorage-correctional-complex", "goose-creek-correctional-center", "spring-creek-correctional-center"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"ketchikan-correctional-center": {
  id: "f-310",
  name: "Ketchikan Correctional Center",
  slug: "ketchikan-correctional-center",
  type: "state",
  stateSlug: "alaska",
  stateName: "Alaska",
  stateAbbr: "AK",
  countySlug: null,
  countyName: "Ketchikan Gateway Borough",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Ketchikan Correctional Center: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Ketchikan Correctional Center in Ketchikan AK. Securus phone service, visitation, and contact rules for this co-gender Alaska DOC facility.",

  description:
    "Ketchikan Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this co-gender Alaska DOC facility in Ketchikan AK.",

  overview: [
    "Ketchikan Correctional Center is a co-gender facility in Ketchikan, Alaska, operated by the Alaska Department of Corrections. It has a capacity of about 71 and is accessible only by air or sea. It has been operating since 1984.",
    "Phone service at Ketchikan runs through Securus Technologies. The Alaska DOC contracts with Securus for the statewide inmate phone system, per the official AK DOC Inmate Phone System page.",
    "Visitation follows Alaska DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 71,
  established: 1984,
  operatedBy: "Alaska Department of Corrections",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides the inmate phone system for Alaska DOC facilities, including Ketchikan Correctional Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Alaska DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Alaska DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary. Plan travel by air or sea.",
  ],

  faq: [
    { question: "Which company handles phone calls at Ketchikan Correctional Center?", answer: "Securus Technologies provides the inmate phone system for Alaska DOC facilities, including Ketchikan Correctional Center." },
    { question: "Can I send electronic messages to an inmate at Ketchikan Correctional Center?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Ketchikan Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Alaska DOC visiting rules. Ketchikan is accessible only by air or sea, so plan travel accordingly." },
    { question: "Is Ketchikan Correctional Center co-gender?", answer: "Yes. Ketchikan Correctional Center is a co-gender facility with a capacity of about 71. It has been operating since 1984." },
    { question: "How do I add money for phone calls at Ketchikan Correctional Center?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["anchorage-correctional-complex", "goose-creek-correctional-center", "spring-creek-correctional-center"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"palmer-correctional-center": {
  id: "f-311",
  name: "Palmer Correctional Center",
  slug: "palmer-correctional-center",
  type: "state",
  stateSlug: "alaska",
  stateName: "Alaska",
  stateAbbr: "AK",
  countySlug: null,
  countyName: "Matanuska-Susitna Borough",
  securityLevel: "Medium / Minimum",
  hasDetailPage: true,
  seoTitle: "Palmer Correctional Center: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Palmer Correctional Center in Palmer AK. Securus phone service, visitation, and contact rules for this Alaska DOC facility.",

  description:
    "Palmer Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Alaska DOC facility in Palmer AK.",

  overview: [
    "Palmer Correctional Center is a medium and minimum security male facility in Palmer, Alaska, operated by the Alaska Department of Corrections. It has a capacity of about 514. It reopened in 2021 after a five-year closure.",
    "Phone service at Palmer runs through Securus Technologies. The Alaska DOC contracts with Securus for the statewide inmate phone system, per the official AK DOC Inmate Phone System page.",
    "Visitation follows Alaska DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 514,
  operatedBy: "Alaska Department of Corrections",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides the inmate phone system for Alaska DOC facilities, including Palmer Correctional Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Alaska DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Alaska DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Palmer Correctional Center?", answer: "Securus Technologies provides the inmate phone system for Alaska DOC facilities, including Palmer Correctional Center." },
    { question: "Can I send electronic messages to an inmate at Palmer Correctional Center?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Palmer Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Alaska DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "When did Palmer Correctional Center reopen?", answer: "Palmer Correctional Center reopened in 2021 after a five-year closure. It houses medium and minimum security male inmates." },
    { question: "How do I add money for phone calls at Palmer Correctional Center?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["anchorage-correctional-complex", "goose-creek-correctional-center", "spring-creek-correctional-center"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"wildwood-correctional-complex": {
  id: "f-312",
  name: "Wildwood Correctional Complex",
  slug: "wildwood-correctional-complex",
  type: "state",
  stateSlug: "alaska",
  stateName: "Alaska",
  stateAbbr: "AK",
  countySlug: null,
  countyName: "Kenai Peninsula Borough",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Wildwood Correctional Complex: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Wildwood Correctional Complex in Kenai AK. Securus phone service, visitation, and contact rules for this Alaska DOC facility.",

  description:
    "Wildwood Correctional Complex communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Alaska DOC facility in Kenai AK.",

  overview: [
    "Wildwood Correctional Complex is a multi-custody facility in Kenai, Alaska, operated by the Alaska Department of Corrections. It has a total capacity of about 360, made up of a 255-bed correctional center plus a 113-bed pretrial facility. The site was formerly the Wildwood Army and Air Force Station and has been used for corrections since 1983. It includes a correctional industries program.",
    "Phone service at Wildwood runs through Securus Technologies. The Alaska DOC contracts with Securus for the statewide inmate phone system, per the official AK DOC Inmate Phone System page.",
    "Visitation follows Alaska DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 360,
  established: 1983,
  operatedBy: "Alaska Department of Corrections",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides the inmate phone system for Alaska DOC facilities, including Wildwood Correctional Complex.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Alaska DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Alaska DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Wildwood Correctional Complex?", answer: "Securus Technologies provides the inmate phone system for Alaska DOC facilities, including Wildwood Correctional Complex." },
    { question: "Can I send electronic messages to an inmate at Wildwood Correctional Complex?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Wildwood Correctional Complex?", answer: "Visitors must be approved. Bring valid photo ID and follow Alaska DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "What was Wildwood before it was a prison?", answer: "The site was formerly the Wildwood Army and Air Force Station. It has been used for corrections since 1983 and includes a correctional industries program." },
    { question: "How do I add money for phone calls at Wildwood Correctional Complex?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["anchorage-correctional-complex", "goose-creek-correctional-center", "spring-creek-correctional-center"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"york-correctional-institution": {
  id: "f-313",
  name: "York Correctional Institution",
  slug: "york-correctional-institution",
  type: "state",
  stateSlug: "connecticut",
  stateName: "Connecticut",
  stateAbbr: "CT",
  countySlug: null,
  countyName: "New London County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "York Correctional Institution: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at York Correctional Institution in Niantic CT. Securus phone service, visitation, and contact rules for Connecticut's only women's prison.",

  description:
    "York Correctional Institution communication guide. Securus phone service, visitation, and contact rules for families of inmates at Connecticut's only women's prison in Niantic CT.",

  overview: [
    "York Correctional Institution is Connecticut's only prison for women, in Niantic, Connecticut, operated by the Connecticut Department of Correction. It opened in 1918 and has a capacity of about 1,239.",
    "Phone service at York runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 1239,
  established: 1918,
  operatedBy: "Connecticut Department of Correction",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Calls at Connecticut DOC facilities go through the Securus phone system, including York Correctional Institution.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Connecticut DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Connecticut DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at York Correctional Institution?", answer: "Calls at Connecticut DOC facilities go through the Securus phone system, including York Correctional Institution." },
    { question: "Can I send electronic messages to an inmate at York Correctional Institution?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at York Correctional Institution?", answer: "Visitors must be approved. Bring valid photo ID and follow Connecticut DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "Is York the only women's prison in Connecticut?", answer: "Yes. York Correctional Institution in Niantic is Connecticut's only prison for women. It opened in 1918." },
    { question: "How do I add money for phone calls at York Correctional Institution?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["cheshire-correctional-institution", "macdougall-walker-correctional-institution", "fci-danbury"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"garner-correctional-institution": {
  id: "f-314",
  name: "Garner Correctional Institution",
  slug: "garner-correctional-institution",
  type: "state",
  stateSlug: "connecticut",
  stateName: "Connecticut",
  stateAbbr: "CT",
  countySlug: null,
  countyName: "Fairfield County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Garner Correctional Institution: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Garner Correctional Institution in Newtown CT. Securus phone service, visitation, and contact rules for this Connecticut prison.",

  description:
    "Garner Correctional Institution communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Connecticut prison in Newtown CT.",

  overview: [
    "Garner Correctional Institution is a Connecticut Department of Correction facility in Newtown, Connecticut. It has a capacity of about 593 and houses male inmates, with a focus on inmates with mental health needs.",
    "Phone service at Garner runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 593,
  operatedBy: "Connecticut Department of Correction",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Calls at Connecticut DOC facilities go through the Securus phone system, including Garner Correctional Institution.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Connecticut DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Connecticut DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Garner Correctional Institution?", answer: "Calls at Connecticut DOC facilities go through the Securus phone system, including Garner Correctional Institution." },
    { question: "Can I send electronic messages to an inmate at Garner Correctional Institution?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Garner Correctional Institution?", answer: "Visitors must be approved. Bring valid photo ID and follow Connecticut DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "What is Garner Correctional Institution known for?", answer: "Garner houses male inmates with a focus on inmates with mental health needs. It has a capacity of about 593." },
    { question: "How do I add money for phone calls at Garner Correctional Institution?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["cheshire-correctional-institution", "macdougall-walker-correctional-institution", "fci-danbury"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"corrigan-radgowski-correctional-center": {
  id: "f-315",
  name: "Corrigan-Radgowski Correctional Center",
  slug: "corrigan-radgowski-correctional-center",
  type: "state",
  stateSlug: "connecticut",
  stateName: "Connecticut",
  stateAbbr: "CT",
  countySlug: null,
  countyName: "New London County",
  securityLevel: "Level 3 / 4",
  hasDetailPage: true,
  seoTitle: "Corrigan-Radgowski Correctional Center: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Corrigan-Radgowski Correctional Center in Uncasville CT. Securus phone service, visitation, and contact rules for this Connecticut prison.",

  description:
    "Corrigan-Radgowski Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Connecticut prison in Uncasville CT.",

  overview: [
    "Corrigan-Radgowski Correctional Center is a Level 3 and 4 male facility in Uncasville, Connecticut, operated by the Connecticut Department of Correction. It was formed by the 2001 merger of the Corrigan and Radgowski facilities and opened on December 30, 1994.",
    "Phone service at Corrigan-Radgowski runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  established: 1994,
  operatedBy: "Connecticut Department of Correction",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Calls at Connecticut DOC facilities go through the Securus phone system, including Corrigan-Radgowski Correctional Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Connecticut DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Connecticut DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Corrigan-Radgowski Correctional Center?", answer: "Calls at Connecticut DOC facilities go through the Securus phone system, including Corrigan-Radgowski Correctional Center." },
    { question: "Can I send electronic messages to an inmate at Corrigan-Radgowski Correctional Center?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Corrigan-Radgowski Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Connecticut DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "When was Corrigan-Radgowski formed?", answer: "The center was formed by the 2001 merger of the Corrigan and Radgowski facilities. The facility opened on December 30, 1994." },
    { question: "How do I add money for phone calls at Corrigan-Radgowski Correctional Center?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["cheshire-correctional-institution", "macdougall-walker-correctional-institution", "fci-danbury"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"hartford-correctional-center": {
  id: "f-316",
  name: "Hartford Correctional Center",
  slug: "hartford-correctional-center",
  type: "state",
  stateSlug: "connecticut",
  stateName: "Connecticut",
  stateAbbr: "CT",
  countySlug: null,
  countyName: "Hartford County",
  securityLevel: "Level 4",
  hasDetailPage: true,
  seoTitle: "Hartford Correctional Center: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Hartford Correctional Center in Hartford CT. Securus phone service, visitation, and contact rules for this Connecticut pretrial facility.",

  description:
    "Hartford Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Connecticut pretrial facility in Hartford CT.",

  overview: [
    "Hartford Correctional Center is a Level 4 facility in Hartford, Connecticut, operated by the Connecticut Department of Correction. It opened in 1977, has a capacity of about 1,000, and primarily holds a pretrial population. It also houses the DOC medical unit.",
    "Phone service at Hartford runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 1000,
  established: 1977,
  operatedBy: "Connecticut Department of Correction",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Calls at Connecticut DOC facilities go through the Securus phone system, including Hartford Correctional Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Connecticut DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Connecticut DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Hartford Correctional Center?", answer: "Calls at Connecticut DOC facilities go through the Securus phone system, including Hartford Correctional Center." },
    { question: "Can I send electronic messages to an inmate at Hartford Correctional Center?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Hartford Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Connecticut DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "What population does Hartford Correctional Center hold?", answer: "Hartford Correctional Center primarily holds a pretrial population. It opened in 1977 and also houses the DOC medical unit." },
    { question: "How do I add money for phone calls at Hartford Correctional Center?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["cheshire-correctional-institution", "macdougall-walker-correctional-institution", "fci-danbury"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"osborn-correctional-institution": {
  id: "f-317",
  name: "Osborn Correctional Institution",
  slug: "osborn-correctional-institution",
  type: "state",
  stateSlug: "connecticut",
  stateName: "Connecticut",
  stateAbbr: "CT",
  countySlug: null,
  countyName: "Tolland County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Osborn Correctional Institution: Securus Phones and Contact Guide",
  seoDescription: "How to contact someone at Osborn Correctional Institution in Somers CT. Securus phone service, visitation, and contact rules for this Connecticut prison.",

  description:
    "Osborn Correctional Institution communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Connecticut prison in Somers CT.",

  overview: [
    "Osborn Correctional Institution is a Connecticut Department of Correction facility in Somers, Connecticut. It opened in 1963 and is among the largest and oldest prisons in Connecticut, with a capacity of about 1,900. It housed the state execution chamber from 1994 to 2015.",
    "Phone service at Osborn runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 1900,
  established: 1963,
  operatedBy: "Connecticut Department of Correction",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Calls at Connecticut DOC facilities go through the Securus phone system, including Osborn Correctional Institution.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation availability is not confirmed. Confirm current options with the facility before scheduling." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Connecticut DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Connecticut DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Osborn Correctional Institution?", answer: "Calls at Connecticut DOC facilities go through the Securus phone system, including Osborn Correctional Institution." },
    { question: "Can I send electronic messages to an inmate at Osborn Correctional Institution?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "How do I visit someone at Osborn Correctional Institution?", answer: "Visitors must be approved. Bring valid photo ID and follow Connecticut DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "How old is Osborn Correctional Institution?", answer: "Osborn opened in 1963 and is among the largest and oldest prisons in Connecticut. It housed the state execution chamber from 1994 to 2015." },
    { question: "How do I add money for phone calls at Osborn Correctional Institution?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["cheshire-correctional-institution", "macdougall-walker-correctional-institution", "fci-danbury"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"delores-j-baylor-womens-correctional-institution": {
  id: "f-318",
  name: "Delores J. Baylor Women's Correctional Institution",
  slug: "delores-j-baylor-womens-correctional-institution",
  type: "state",
  stateSlug: "delaware",
  stateName: "Delaware",
  stateAbbr: "DE",
  countySlug: null,
  countyName: "New Castle County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Baylor Women's Correctional Institution: GettingOut Messaging and Video Visits",
  seoDescription: "How to contact someone at Baylor Women's Correctional Institution in New Castle DE. GettingOut tablet messaging and video visitation for Delaware's only women's prison.",

  description:
    "Baylor Women's Correctional Institution communication guide. GettingOut tablet messaging and video visitation for families of inmates at Delaware's only women's prison in New Castle DE.",

  overview: [
    "Delores J. Baylor Women's Correctional Institution, known as Baylor Women's Correctional Institution, is the only women's prison in Delaware, in New Castle, operated by the Delaware Department of Correction. It opened on December 29, 1991, has a designed capacity of 464, and houses pretrial and sentenced females at minimum, medium, and maximum security.",
    "Tablet messaging and video visitation run through GettingOut, per an official Delaware DOC announcement. Families create a GettingOut account, add the inmate, and fund messaging and video visit services.",
    "In-person visiting follows Delaware DOC rules. Visitors must be approved and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  inmateCapacity: 464,
  established: 1991,
  operatedBy: "Delaware Department of Correction",

  providers: [
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
      notes: "Tablet messaging and video visitation via GettingOut, per an official Delaware DOC announcement.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Tablet messaging through a GettingOut account. Fund the account to send and receive messages." },
    video: { status: "available", provider: "GettingOut", notes: "Video visitation through GettingOut. Schedule in advance and confirm eligibility." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut messaging, subject to facility content rules." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current phone provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Delaware DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Create a GettingOut account and add your inmate before sending messages or scheduling video visits.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Delaware DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls, messages, and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles messaging at Baylor Women's Correctional Institution?", answer: "GettingOut provides tablet messaging and video visitation at Baylor Women's Correctional Institution, per an official Delaware DOC announcement." },
    { question: "Can I video visit an inmate at Baylor Women's Correctional Institution?", answer: "Yes. Video visitation runs through GettingOut. Create an account, add the inmate, and schedule in advance." },
    { question: "Is Baylor the only women's prison in Delaware?", answer: "Yes. Baylor Women's Correctional Institution in New Castle is the only women's prison in Delaware. It opened on December 29, 1991." },
    { question: "How do I visit someone at Baylor Women's Correctional Institution?", answer: "Visitors must be approved. Bring valid photo ID and follow Delaware DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "How do I send messages to an inmate at Baylor Women's Correctional Institution?", answer: "Use GettingOut. Create an account, add the inmate, and fund the service to send and receive messages." },
  ],

  relatedFacilitySlugs: ["howard-r-young-correctional-institution", "james-t-vaughn-correctional-center", "sussex-correctional-institution"],
  relatedGuideSlugs: ["how-gettingout-works", "how-video-visitation-works"],
},

"northwest-state-correctional-facility": {
  id: "f-319",
  name: "Northwest State Correctional Facility",
  slug: "northwest-state-correctional-facility",
  type: "state",
  stateSlug: "vermont",
  stateName: "Vermont",
  stateAbbr: "VT",
  countySlug: null,
  countyName: "Franklin County",
  securityLevel: "Medium / Multi-Level",
  hasDetailPage: true,
  seoTitle: "Northwest State Correctional Facility: ICSolutions Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Northwest State Correctional Facility in Swanton VT. ICSolutions phone, messaging and video visits for this Vermont men's prison.",

  description:
    "Northwest State Correctional Facility communication guide. ICSolutions phone, messaging and video visits for families of inmates at this Vermont men's prison in Swanton VT.",

  overview: [
    "Northwest State Correctional Facility is a male facility in Swanton, Vermont, operated by the Vermont Department of Corrections. It houses medium and multi-level custody inmates and was established in 1969.",
    "Phone calls, video visits, and messaging at Northwest State Correctional Facility run through ICSolutions under the Vermont DOC contract.",
    "Visitation follows Vermont DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  established: 1969,
  operatedBy: "Vermont Department of Corrections",

  providers: [
    {
      name: "ICSolutions",
      slug: "icsolutions",
      initial: "I",
      color: "bg-sky-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "ICSolutions provides phone service, video visits, and messaging under the Vermont DOC contract.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Electronic messaging through ICSolutions." },
    video: { status: "available", provider: "ICSolutions", notes: "Video visits through ICSolutions. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "ICSolutions", notes: "Phone calls through ICSolutions." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Vermont DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Northwest State Correctional Facility?", answer: "Phone calls run through ICSolutions under the Vermont DOC contract." },
    { question: "How do I visit someone at Northwest State Correctional Facility?", answer: "Visitors must be approved. Bring valid photo ID and follow Vermont DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "What population does Northwest State Correctional Facility hold?", answer: "Northwest State Correctional Facility in Swanton is a male facility housing medium and multi-level custody inmates. It was established in 1969." },
  ],

  relatedFacilitySlugs: ["marble-valley-regional-correctional-facility", "cheshire-correctional-institution", "fci-ray-brook"],
},

"marble-valley-regional-correctional-facility": {
  id: "f-320",
  name: "Marble Valley Regional Correctional Facility",
  slug: "marble-valley-regional-correctional-facility",
  type: "state",
  stateSlug: "vermont",
  stateName: "Vermont",
  stateAbbr: "VT",
  countySlug: null,
  countyName: "Rutland County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Marble Valley Regional Correctional Facility: ICSolutions Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Marble Valley Regional Correctional Facility in Rutland VT. ICSolutions phone, messaging and video visits for this Vermont correctional facility.",

  description:
    "Marble Valley Regional Correctional Facility communication guide. ICSolutions phone, messaging and video visits for families of inmates at this Vermont correctional facility in Rutland VT.",

  overview: [
    "Marble Valley Regional Correctional Facility is a Vermont Department of Corrections facility in Rutland, Vermont. It opened in 1980 and holds male and female pretrial and sentenced inmates. A historic marble wall from the 1878 Rutland House of Correction survives at the site.",
    "Phone calls, video visits, and messaging at Marble Valley Regional Correctional Facility run through ICSolutions under the Vermont DOC contract.",
    "Visitation follows Vermont DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  established: 1980,
  operatedBy: "Vermont Department of Corrections",

  providers: [
    {
      name: "ICSolutions",
      slug: "icsolutions",
      initial: "I",
      color: "bg-sky-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "ICSolutions provides phone service, video visits, and messaging under the Vermont DOC contract.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Electronic messaging through ICSolutions." },
    video: { status: "available", provider: "ICSolutions", notes: "Video visits through ICSolutions. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "ICSolutions", notes: "Phone calls through ICSolutions." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Vermont DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Marble Valley Regional Correctional Facility?", answer: "Phone calls run through ICSolutions under the Vermont DOC contract." },
    { question: "How do I visit someone at Marble Valley Regional Correctional Facility?", answer: "Visitors must be approved. Bring valid photo ID and follow Vermont DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the marble wall at Marble Valley?", answer: "A historic marble wall from the 1878 Rutland House of Correction survives at the site. The current facility opened in 1980." },
  ],

  relatedFacilitySlugs: ["northwest-state-correctional-facility", "cheshire-correctional-institution", "fci-ray-brook"],
},

"gallatin-county-detention-center": {
  id: "f-321",
  name: "Gallatin County Detention Center",
  slug: "gallatin-county-detention-center",
  type: "county",
  stateSlug: "montana",
  stateName: "Montana",
  stateAbbr: "MT",
  countySlug: null,
  countyName: "Gallatin County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Gallatin County Detention Center: GettingOut Messaging and Video Visits",
  seoDescription: "How to contact someone at Gallatin County Detention Center in Bozeman MT. GettingOut messaging, video visitation, and voice messaging for this Montana jail.",

  description:
    "Gallatin County Detention Center communication guide. GettingOut messaging, video visitation, and voice messaging for families of inmates at this Montana jail in Bozeman MT.",

  overview: [
    "Gallatin County Detention Center is a division of the Gallatin County Sheriff's Office in Bozeman, Montana. It primarily holds pretrial inmates.",
    "Communication at Gallatin County Detention Center runs through GettingOut, per the county's official Friends and Family brochure. Video visitation, inmate messaging, and voice messaging are handled through gettingout.com. Commissary funds go through Inmate Canteen.",
    "Families create a GettingOut account, add the inmate, and fund messaging and visit services. All calls, messages, and video visits are monitored and recorded.",
  ],

  operatedBy: "Gallatin County Sheriff's Office",

  providers: [
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Video visitation, inmate messaging, and voice messaging via GettingOut, per the county's official Friends and Family brochure. Commissary funds via Inmate Canteen.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Inmate messaging through a GettingOut account. Fund the account to send and receive messages." },
    video: { status: "available", provider: "GettingOut", notes: "Video visitation through GettingOut. Schedule in advance and confirm eligibility." },
    photos: { status: "limited", provider: "GettingOut", notes: "Photo sharing options are not confirmed for this facility. Confirm with GettingOut or the facility." },
    phone: { status: "available", provider: "GettingOut", notes: "Voice messaging and phone services through GettingOut. Fund a GettingOut account." },
    moneyTransfer: { status: "limited", notes: "Commissary funds go through Inmate Canteen. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Create a GettingOut account and add your inmate before sending messages or scheduling video visits.",
    "Commissary funds go through Inmate Canteen, not GettingOut.",
    "All calls, messages, and video visits are monitored and recorded.",
    "Confirm visiting hours and rules with the facility, since schedules can change.",
    "Bring valid photo ID for any required identity verification.",
  ],

  faq: [
    { question: "Which company handles messaging at Gallatin County Detention Center?", answer: "GettingOut handles video visitation, inmate messaging, and voice messaging at Gallatin County Detention Center, per the county's official Friends and Family brochure." },
    { question: "How do video visits work at Gallatin County Detention Center?", answer: "Video visits run through GettingOut. Create an account, add the inmate, and schedule in advance." },
    { question: "How do I add commissary money at Gallatin County Detention Center?", answer: "Commissary funds go through Inmate Canteen. GettingOut handles messaging, video visits, and voice messaging, not commissary deposits." },
    { question: "How do I send messages to an inmate at Gallatin County Detention Center?", answer: "Use GettingOut. Create an account, add the inmate, and fund the service to send and receive messages." },
  ],

  relatedFacilitySlugs: ["missoula-county-detention-center", "montana-state-prison", "fci-seagoville"],
  relatedGuideSlugs: ["how-gettingout-works", "how-video-visitation-works"],
},

"missoula-county-detention-center": {
  id: "f-322",
  name: "Missoula County Detention Center",
  slug: "missoula-county-detention-center",
  type: "county",
  stateSlug: "montana",
  stateName: "Montana",
  stateAbbr: "MT",
  countySlug: null,
  countyName: "Missoula County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Missoula County Detention Center: Smart Communications Phones and Video Visits",
  seoDescription: "How to contact someone at Missoula County Detention Center in Missoula MT. Smart Communications telecom and video visits for this Montana detention facility.",

  description:
    "Missoula County Detention Center communication guide. Smart Communications telecom and video visits for families of inmates at this Montana detention facility in Missoula MT.",

  overview: [
    "Missoula County Detention Center, also known as the Missoula County Detention Facility, is the county detention facility in Missoula, Montana, operated by the Missoula County Sheriff's Office. It opened on November 1, 1999, has a total capacity of 394 including adult and juvenile beds, and holds inmates for the US Marshals Service and other agencies. It includes a 24-bed juvenile unit.",
    "Telecom services at Missoula County Detention Center are provided by Smart Communications, per the county's official detention page. Video visits run through smartinmate.com.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 394,
  established: 1999,
  operatedBy: "Missoula County Sheriff's Office",

  providers: [
    {
      name: "Smart Communications",
      slug: "smartinmate",
      initial: "S",
      color: "bg-cyan-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Smart Communications provides telecom services at Missoula County Detention Center. Video visits run through smartinmate.com.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Smart Communications", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Smart Communications or the facility." },
    video: { status: "available", provider: "Smart Communications", notes: "Video visits through smartinmate.com. Schedule in advance and confirm eligibility." },
    photos: { status: "limited", provider: "Smart Communications", notes: "Photo sharing options are not confirmed for this facility. Confirm with the facility." },
    phone: { status: "available", provider: "Smart Communications", notes: "Outgoing calls through the Smart Communications telecom system." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Set up a Smart Communications account for phone and video visit services.",
    "Schedule video visits through smartinmate.com and log in on time.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Missoula County Detention Center?", answer: "Smart Communications provides telecom services at Missoula County Detention Center, per the county's official detention page." },
    { question: "How do video visits work at Missoula County Detention Center?", answer: "Video visits run through smartinmate.com. Set up a Smart Communications account, add the inmate, and schedule in advance." },
    { question: "Can I send electronic messages to an inmate at Missoula County Detention Center?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Smart Communications or by contacting the facility." },
    { question: "Does Missoula County Detention Center hold federal inmates?", answer: "Yes. The facility holds inmates for the US Marshals Service and other agencies, plus a 24-bed juvenile unit." },
    { question: "How do I visit someone at Missoula County Detention Center?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
  ],

  relatedFacilitySlugs: ["gallatin-county-detention-center", "montana-state-prison", "fci-seagoville"],
  relatedGuideSlugs: ["how-video-visitation-works", "how-prison-phone-calls-work"],
},
}
