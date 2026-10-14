import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS - Batch 10 (25 facilities, Batch 3 expansion)
// Thin states B: HI, ME, SD, WV, WY
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH10: Record<string, FacilityDetail> = {

"hawaii-community-correctional-center": {
  id: "f-323",
  name: "Hawaii Community Correctional Center",
  slug: "hawaii-community-correctional-center",
  type: "state",
  stateSlug: "hawaii",
  stateName: "Hawaii",
  stateAbbr: "HI",
  countySlug: null,
  countyName: "Hawaii County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Hawaii Community Correctional Center: ConnectNetwork Phones and Contact Guide",
  seoDescription: "How to contact someone at Hawaii Community Correctional Center in Hilo HI. ConnectNetwork phone service, visitation, and contact rules for this Hawaii DCR facility.",

  description:
    "Hawaii Community Correctional Center communication guide. ConnectNetwork phone service, visitation, and contact rules for families of inmates at this Hawaii DCR facility in Hilo HI.",

  overview: [
    "Hawaii Community Correctional Center is a Hawaii Department of Corrections and Rehabilitation (DCR) facility in Hilo, Hawaii, on the Big Island. It has a capacity of about 226 beds and operates across two sites. The Hale Nani site offers reintegration and work release programming.",
    "Phone service at Hawaii Community Correctional Center runs through GTL and ViaPath, under the ConnectNetwork brand. Families set up a ConnectNetwork account, add the inmate, and fund phone service for outgoing calls.",
    "Visitation follows Hawaii DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 226,
  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",

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
      notes: "ConnectNetwork by GTL and ViaPath provides phone service at Hawaii DCR facilities, including Hawaii Community Correctional Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "ConnectNetwork", notes: "Electronic messaging options are not confirmed for this facility. Confirm with ConnectNetwork or the facility." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visitation through ConnectNetwork. Schedule in advance and confirm eligibility." },
    photos: { status: "limited", provider: "ConnectNetwork", notes: "Photo sharing options are not confirmed for this facility. Confirm with ConnectNetwork or the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the ConnectNetwork phone system. Fund a ConnectNetwork account and keep your number on the approved list." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Fund phone accounts through ConnectNetwork. Trust account deposits follow Hawaii DCR rules." },
  },

  rules: [
    "Set up a ConnectNetwork account and keep your phone number on the inmate's approved list before expecting calls.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Hawaii DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Hawaii Community Correctional Center?", answer: "ConnectNetwork by GTL and ViaPath provides phone service at Hawaii DCR facilities, including Hawaii Community Correctional Center in Hilo." },
    { question: "Can I send electronic messages to an inmate at Hawaii Community Correctional Center?", answer: "Messaging options are not confirmed for this facility. Confirm current options through ConnectNetwork or by contacting the facility." },
    { question: "How do I visit someone at Hawaii Community Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Hawaii DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the Hale Nani site?", answer: "Hale Nani is one of the two sites of Hawaii Community Correctional Center. It offers reintegration and work release programming." },
    { question: "How do I add money for phone calls at Hawaii Community Correctional Center?", answer: "Fund your ConnectNetwork account online or through the ConnectNetwork app. The inmate can only call numbers on the approved list." },
  ],

  relatedFacilitySlugs: ["halawa-correctional-facility", "oahu-community-correctional-center", "maui-community-correctional-center"],
  relatedGuideSlugs: ["how-connectnetwork-works", "how-prison-phone-calls-work"],
},

"kauai-community-correctional-center": {
  id: "f-324",
  name: "Kauai Community Correctional Center",
  slug: "kauai-community-correctional-center",
  type: "state",
  stateSlug: "hawaii",
  stateName: "Hawaii",
  stateAbbr: "HI",
  countySlug: null,
  countyName: "Kauai County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Kauai Community Correctional Center: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Kauai Community Correctional Center in Lihue HI. Phone, visitation and deposit options for this Hawaii DCR jail.",

  description:
    "Kauai Community Correctional Center communication guide. Phone, visitation and deposit options for families of inmates at this Hawaii DCR jail in Lihue HI.",

  overview: [
    "Kauai Community Correctional Center is a Hawaii Department of Corrections and Rehabilitation (DCR) jail in Lihue, Hawaii, on Kauai. It is one of four DCR jails statewide. The Kauai Intake Service Center is located in Lihue.",
    "Communication at Kauai Community Correctional Center runs through ViaPath (formerly GTL). Phone calls and video visits run through GTL, and trust deposits go through ViaPath ConnectNetwork. Electronic messaging is not confirmed by DCR sources, so confirm messaging options with the facility.",
    "Visitation follows Hawaii DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",

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
      moneyTransfer: true,
      notes: "GTL (ViaPath) provides phone calls and video visits. Trust deposits go through ViaPath ConnectNetwork.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "GTL", notes: "Video visits through GTL tablets. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL. Set up a prepaid account through ConnectNetwork." },
    moneyTransfer: { status: "available", provider: "GTL", notes: "Trust deposits through ViaPath ConnectNetwork." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Hawaii DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Kauai Community Correctional Center?", answer: "Phone calls run through GTL (ViaPath). Set up a prepaid account through ConnectNetwork." },
    { question: "How do I visit someone at Kauai Community Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Hawaii DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Kauai Community Correctional Center?", answer: "Kauai Community Correctional Center is in Lihue, Hawaii, on Kauai. It is one of four Hawaii DCR jails statewide." },
  ],

  relatedFacilitySlugs: ["halawa-correctional-facility", "oahu-community-correctional-center", "maui-community-correctional-center"],
},

"womens-community-correctional-center": {
  id: "f-325",
  name: "Women's Community Correctional Center",
  slug: "womens-community-correctional-center",
  type: "state",
  stateSlug: "hawaii",
  stateName: "Hawaii",
  stateAbbr: "HI",
  countySlug: null,
  countyName: "Honolulu County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Women's Community Correctional Center: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Women's Community Correctional Center in Kailua HI. Phone, visitation and deposit options for Hawaii's only women's prison.",

  description:
    "Women's Community Correctional Center communication guide. Phone, visitation and deposit options for families of inmates at Hawaii's only women's prison in Kailua HI.",

  overview: [
    "Women's Community Correctional Center is the only women's prison in Hawaii, in Kailua, operated by the Hawaii Department of Corrections and Rehabilitation (DCR). It houses maximum, medium, and minimum custody female offenders plus pretrial detainees.",
    "Communication at Women's Community Correctional Center runs through ViaPath (formerly GTL). Phone calls and video visits run through GTL, and trust deposits go through ViaPath ConnectNetwork. Electronic messaging is not confirmed by DCR sources, so confirm messaging options with the facility.",
    "Visitation follows Hawaii DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",

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
      moneyTransfer: true,
      notes: "GTL (ViaPath) provides phone calls and video visits. Trust deposits go through ViaPath ConnectNetwork.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "GTL", notes: "Video visits through GTL tablets. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL. Set up a prepaid account through ConnectNetwork." },
    moneyTransfer: { status: "available", provider: "GTL", notes: "Trust deposits through ViaPath ConnectNetwork." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Hawaii DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Women's Community Correctional Center?", answer: "Phone calls run through GTL (ViaPath). Set up a prepaid account through ConnectNetwork." },
    { question: "How do I visit someone at Women's Community Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Hawaii DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "Is Women's Community Correctional Center the only women's prison in Hawaii?", answer: "Yes. Women's Community Correctional Center in Kailua is the only women's prison in Hawaii. It houses maximum, medium, and minimum custody female offenders plus pretrial detainees." },
  ],

  relatedFacilitySlugs: ["halawa-correctional-facility", "oahu-community-correctional-center", "maui-community-correctional-center"],
},

"fdc-honolulu": {
  id: "f-326",
  name: "FDC Honolulu",
  slug: "fdc-honolulu",
  type: "federal",
  stateSlug: "hawaii",
  stateName: "Hawaii",
  stateAbbr: "HI",
  countySlug: null,
  countyName: "Honolulu County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "FDC Honolulu: CorrLinks Messaging and Phone Guide for Families",
  seoDescription: "How to contact someone at FDC Honolulu in Hawaii. CorrLinks electronic messaging through TRULINCS, BOP phone calls, and visitation rules for this federal detention center.",

  description:
    "FDC Honolulu communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of pretrial and holdover inmates at this federal detention center in Honolulu HI.",

  overview: [
    "FDC Honolulu is an administrative security federal detention center in Honolulu, Hawaii, operated by the Federal Bureau of Prisons. It opened in 2001 and holds men and women who are pretrial or in court proceedings, plus brief sentences.",
    "Electronic messaging at FDC Honolulu runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through TRUFONE, the BOP phone system, funded through the inmate's trust account.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  established: 2001,
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    {
      name: "CorrLinks",
      slug: "corrlinks",
      initial: "C",
      color: "bg-emerald-700",
      messaging: true,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Official BOP electronic messaging system. Inmate must initiate or approve contact.",
    },
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "BOP phone system (TRUFONE) and trust fund deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging through CorrLinks. The inmate must add you to their approved contact list first." },
    video: { status: "limited", notes: "The BOP does not offer general remote video visitation at most facilities. Plan in-person visits instead." },
    photos: { status: "limited", notes: "Photo sharing is not available through CorrLinks. Confirm any photo options with the facility." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Outgoing calls through the BOP phone system (TRUFONE), funded through the inmate's trust account." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits through approved BOP deposit methods." },
  },

  rules: [
    "Get on the inmate's approved contact list before expecting CorrLinks messages.",
    "Visitors must be approved and on the visiting list, and bring a valid government-issued photo ID.",
    "Follow the BOP dress code. Inappropriate clothing will get your visit denied.",
    "All calls and messages are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary by housing area.",
  ],

  faq: [
    { question: "How do I message an inmate at FDC Honolulu?", answer: "Use CorrLinks, the BOP electronic messaging system. The inmate must add you to their approved contact list before messaging can begin. Create a CorrLinks account and wait for the inmate's approval." },
    { question: "Can I video visit an inmate at FDC Honolulu?", answer: "The BOP does not offer general remote video visitation at most facilities, including FDC Honolulu. Plan in-person visits instead." },
    { question: "How do phone calls work at FDC Honolulu?", answer: "Inmates make outgoing calls through the BOP phone system (TRUFONE), funded through their trust account. You cannot call an inmate directly." },
    { question: "What kind of inmates does FDC Honolulu hold?", answer: "FDC Honolulu is a federal detention center. It holds men and women who are pretrial or in court proceedings, plus brief sentences. It opened in 2001." },
    { question: "How do I add money to an inmate's trust fund at FDC Honolulu?", answer: "Use the approved BOP deposit methods for trust fund deposits, including online deposits through the BOP's approved services. Confirm the current method on the BOP website." },
  ],

  relatedFacilitySlugs: ["halawa-correctional-facility", "oahu-community-correctional-center", "fdc-philadelphia"],
  relatedGuideSlugs: ["how-corrlinks-works", "corrlinks-invite-code-not-working"],
},

"waiawa-correctional-facility": {
  id: "f-327",
  name: "Waiawa Correctional Facility",
  slug: "waiawa-correctional-facility",
  type: "state",
  stateSlug: "hawaii",
  stateName: "Hawaii",
  stateAbbr: "HI",
  countySlug: null,
  countyName: "Honolulu County",
  securityLevel: "Minimum",
  hasDetailPage: true,
  seoTitle: "Waiawa Correctional Facility: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Waiawa Correctional Facility in Waipahu HI. Phone, visitation and deposit options for this minimum security Hawaii prison.",

  description:
    "Waiawa Correctional Facility communication guide. Phone, visitation and deposit options for families of inmates at this minimum security Hawaii prison in Waipahu HI.",

  overview: [
    "Waiawa Correctional Facility is a minimum security prison in Waipahu, Hawaii, operated by the Hawaii Department of Corrections and Rehabilitation (DCR). It is listed as one of the four prisons of the Hawaii corrections system.",
    "Communication at Waiawa Correctional Facility runs through ViaPath (formerly GTL). Phone calls and video visits run through GTL, and trust deposits go through ViaPath ConnectNetwork. Electronic messaging is not confirmed by DCR sources, so confirm messaging options with the facility.",
    "Visitation follows Hawaii DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",

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
      moneyTransfer: true,
      notes: "GTL (ViaPath) provides phone calls and video visits. Trust deposits go through ViaPath ConnectNetwork.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "GTL", notes: "Video visits through GTL tablets. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL. Set up a prepaid account through ConnectNetwork." },
    moneyTransfer: { status: "available", provider: "GTL", notes: "Trust deposits through ViaPath ConnectNetwork." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Hawaii DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Waiawa Correctional Facility?", answer: "Phone calls run through GTL (ViaPath). Set up a prepaid account through ConnectNetwork." },
    { question: "How do I visit someone at Waiawa Correctional Facility?", answer: "Visitors must be approved. Bring valid photo ID and follow Hawaii DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "What security level is Waiawa Correctional Facility?", answer: "Waiawa is a minimum security prison in Waipahu, Hawaii. It is one of the four prisons of the Hawaii corrections system." },
  ],

  relatedFacilitySlugs: ["halawa-correctional-facility", "oahu-community-correctional-center", "maui-community-correctional-center"],
},

"york-county-jail-maine": {
  id: "f-328",
  name: "York County Jail",
  slug: "york-county-jail-maine",
  type: "county",
  stateSlug: "maine",
  stateName: "Maine",
  stateAbbr: "ME",
  countySlug: null,
  countyName: "York County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "York County Jail: Securus Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at York County Jail in Alfred ME. Securus phone, messaging and video visits for this York County pretrial jail.",

  description:
    "York County Jail communication guide. Securus phone, messaging and video visits for families of inmates at this York County pretrial jail in Alfred ME.",

  overview: [
    "York County Jail is the county jail in Alfred, Maine, operated by the York County Sheriff's Office. It is primarily a pretrial jail.",
    "Communication at York County Jail runs through Securus. Phone calls, eMessaging, and video visits are handled via Securus.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "York County Sheriff's Office",

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
      notes: "Securus provides phone service, eMessaging, and video visitation.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Electronic messaging through Securus eMessaging." },
    video: { status: "available", provider: "Securus", notes: "Video visits through Securus Video Connect. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Securus", notes: "Phone calls through Securus. Set up a Securus account to fund calls." },
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
    { question: "Which company handles phone calls at York County Jail in Maine?", answer: "Phone calls run through Securus. Set up a Securus account to fund calls and eMessaging." },
    { question: "How do I visit someone at York County Jail in Maine?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is York County Jail in Maine?", answer: "York County Jail is in Alfred, Maine. It is primarily a pretrial jail operated by the York County Sheriff's Office." },
  ],

  relatedFacilitySlugs: ["cumberland-county-jail", "penobscot-county-jail", "maine-state-prison"],
},

"maine-correctional-center": {
  id: "f-329",
  name: "Maine Correctional Center",
  slug: "maine-correctional-center",
  type: "state",
  stateSlug: "maine",
  stateName: "Maine",
  stateAbbr: "ME",
  countySlug: null,
  countyName: "Cumberland County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Maine Correctional Center: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Maine Correctional Center in Windham ME. Phone, visitation and deposit options for this Maine DOC state prison.",

  description:
    "Maine Correctional Center communication guide. Phone, visitation and deposit options for families of inmates at this Maine DOC state prison in Windham ME.",

  overview: [
    "Maine Correctional Center is a state prison in Windham, Maine, operated by the Maine Department of Corrections.",
    "Phone calls and video visitation at Maine Correctional Center run through Legacy Inmate Communications under the Maine DOC contract. Messaging and money transfer vendors are not confirmed.",
    "Visitation follows Maine DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Maine Department of Corrections",

  providers: [
    {
      name: "Legacy Inmate Communications",
      slug: "legacy-inmate-communications",
      initial: "L",
      color: "bg-fuchsia-700",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Legacy Inmate Communications provides phone service and video visitation under the Maine DOC contract.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "Legacy Inmate Communications", notes: "Video visits through Legacy Inmate Communications. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Legacy Inmate Communications", notes: "Phone calls through Legacy Inmate Communications." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Maine DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Maine Correctional Center?", answer: "Phone calls run through Legacy Inmate Communications under the Maine DOC contract." },
    { question: "How do I visit someone at Maine Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Maine DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Maine Correctional Center?", answer: "Maine Correctional Center is in Windham, Maine. It is operated by the Maine Department of Corrections." },
  ],

  relatedFacilitySlugs: ["maine-state-prison", "cumberland-county-jail", "penobscot-county-jail"],
},

"androscoggin-county-jail": {
  id: "f-330",
  name: "Androscoggin County Jail",
  slug: "androscoggin-county-jail",
  type: "county",
  stateSlug: "maine",
  stateName: "Maine",
  stateAbbr: "ME",
  countySlug: null,
  countyName: "Androscoggin County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Androscoggin County Jail: Securus Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Androscoggin County Jail in Auburn ME. Securus phone, messaging and video visits for this Androscoggin County jail.",

  description:
    "Androscoggin County Jail communication guide. Securus phone, messaging and video visits for families of inmates at this Androscoggin County jail in Auburn ME.",

  overview: [
    "Androscoggin County Jail is the county jail in Auburn, Maine, operated by the Androscoggin County Sheriff's Department. It primarily holds pretrial inmates.",
    "Communication at Androscoggin County Jail runs through Securus. Phone calls, eMessaging, and video visits are handled via Securus.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Androscoggin County Sheriff's Department",

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
      notes: "Securus provides phone service, eMessaging, and video visitation.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Electronic messaging through Securus eMessaging." },
    video: { status: "available", provider: "Securus", notes: "Video visits through Securus Video Connect. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Securus", notes: "Phone calls through Securus. Set up a Securus account to fund calls." },
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
    { question: "Which company handles phone calls at Androscoggin County Jail?", answer: "Phone calls run through Securus. Set up a Securus account to fund calls and eMessaging." },
    { question: "How do I visit someone at Androscoggin County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Androscoggin County Jail?", answer: "Androscoggin County Jail is in Auburn, Maine. It primarily holds pretrial inmates and is operated by the Androscoggin County Sheriff's Department." },
  ],

  relatedFacilitySlugs: ["cumberland-county-jail", "penobscot-county-jail", "maine-state-prison"],
},

"kennebec-county-jail": {
  id: "f-331",
  name: "Kennebec County Jail",
  slug: "kennebec-county-jail",
  type: "county",
  stateSlug: "maine",
  stateName: "Maine",
  stateAbbr: "ME",
  countySlug: null,
  countyName: "Kennebec County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Kennebec County Jail: Securus Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Kennebec County Jail in Augusta ME. Securus phone, messaging and video visits for this Kennebec County correctional facility.",

  description:
    "Kennebec County Jail communication guide. Securus phone, messaging and video visits for families of inmates at this Kennebec County correctional facility in Augusta ME.",

  overview: [
    "Kennebec County Jail, also known as the Kennebec County Correctional Facility, is the county correctional facility in Augusta, Maine, operated by the Kennebec County Sheriff's Office. The Sheriff's Office lists a separate corrections service line and intake unit.",
    "Communication at Kennebec County Jail runs through Securus. Phone calls, eMessaging, and video visits are handled via Securus.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Kennebec County Sheriff's Office",

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
      notes: "Securus provides phone service, eMessaging, and video visitation.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Electronic messaging through Securus eMessaging." },
    video: { status: "available", provider: "Securus", notes: "Video visits through Securus Video Connect. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Securus", notes: "Phone calls through Securus. Set up a Securus account to fund calls." },
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
    { question: "Which company handles phone calls at Kennebec County Jail?", answer: "Phone calls run through Securus. Set up a Securus account to fund calls and eMessaging." },
    { question: "How do I visit someone at Kennebec County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the official name of Kennebec County Jail?", answer: "The facility is also known as the Kennebec County Correctional Facility. It is operated by the Kennebec County Sheriff's Office in Augusta." },
  ],

  relatedFacilitySlugs: ["cumberland-county-jail", "penobscot-county-jail", "maine-state-prison"],
},

"somerset-county-jail": {
  id: "f-332",
  name: "Somerset County Jail",
  slug: "somerset-county-jail",
  type: "county",
  stateSlug: "maine",
  stateName: "Maine",
  stateAbbr: "ME",
  countySlug: null,
  countyName: "Somerset County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Somerset County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Somerset County Jail in Madison ME. Phone, visitation and deposit options for this Somerset County jail.",

  description:
    "Somerset County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Somerset County jail in Madison ME.",

  overview: [
    "Somerset County Jail is the county jail in Madison, Maine, operated by the Somerset County Sheriff's Office. Note that the jail is in Madison, not in the county seat of Skowhegan. The Sheriff's Office states the jail is ACA Certified.",
    "Published sources do not confirm the current inmate communications vendor, so families should confirm the phone and video provider directly with the facility before creating any paid account.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Somerset County Sheriff's Office",
  // TODO(Jan): verify provider

  providers: [],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
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
    { question: "Which company handles phone calls at Somerset County Jail?", answer: "The current vendor is not confirmed from official sources. Confirm the provider with the facility before creating a prepaid account." },
    { question: "How do I visit someone at Somerset County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Somerset County Jail?", answer: "Somerset County Jail is in Madison, Maine, not in the county seat of Skowhegan. The Sheriff's Office states the jail is ACA Certified." },
  ],

  relatedFacilitySlugs: ["cumberland-county-jail", "penobscot-county-jail", "maine-state-prison"],
},

"minnehaha-county-jail": {
  id: "f-333",
  name: "Minnehaha County Jail",
  slug: "minnehaha-county-jail",
  type: "county",
  stateSlug: "south-dakota",
  stateName: "South Dakota",
  stateAbbr: "SD",
  countySlug: null,
  countyName: "Minnehaha County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Minnehaha County Jail: NCIC Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Minnehaha County Jail in Sioux Falls SD. NCIC phone, messaging and video visits for this Minnehaha County jail.",

  description:
    "Minnehaha County Jail communication guide. NCIC phone, messaging and video visits for families of inmates at this Minnehaha County jail in Sioux Falls SD.",

  overview: [
    "Minnehaha County Jail is the county jail in Sioux Falls, South Dakota, operated by the Minnehaha County Sheriff's Office.",
    "Communication at Minnehaha County Jail runs through NCIC Inmate Communications for phone, video visitation, and messaging. Deposits go through JailATM.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Minnehaha County Sheriff's Office",

  providers: [
    {
      name: "NCIC",
      slug: "ncic",
      initial: "N",
      color: "bg-rose-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "NCIC provides phone service, video visitation, and messaging.",
    },
    {
      name: "JailATM",
      slug: "jailatm",
      initial: "J",
      color: "bg-lime-700",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "JailATM handles deposits.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Electronic messaging through NCIC." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through NCIC Inmate Communications." },
    moneyTransfer: { status: "available", provider: "JailATM", notes: "Deposits through JailATM." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Minnehaha County Jail?", answer: "Phone calls run through NCIC Inmate Communications." },
    { question: "How do I visit someone at Minnehaha County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Minnehaha County Jail?", answer: "Minnehaha County Jail is in Sioux Falls, South Dakota. It is operated by the Minnehaha County Sheriff's Office." },
  ],

  relatedFacilitySlugs: ["pennington-county-jail", "south-dakota-state-penitentiary", "fci-yankton"],
},

"mike-durfee-state-prison": {
  id: "f-334",
  name: "Mike Durfee State Prison",
  slug: "mike-durfee-state-prison",
  type: "state",
  stateSlug: "south-dakota",
  stateName: "South Dakota",
  stateAbbr: "SD",
  countySlug: null,
  countyName: "Bon Homme County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Mike Durfee State Prison: GTL Phones and GettingOut Visits Guide",
  seoDescription: "How to contact someone at Mike Durfee State Prison in Springfield SD. GTL phones and GettingOut messaging and video visits for this South Dakota men's prison.",

  description:
    "Mike Durfee State Prison communication guide. GTL phone calls and GettingOut messaging and video visits for families of inmates at this South Dakota men's prison in Springfield SD.",

  overview: [
    "Mike Durfee State Prison is a state prison for men in Springfield, South Dakota, operated by the South Dakota Department of Corrections. It is located on the campus of the former University of South Dakota at Springfield.",
    "Communication at Mike Durfee State Prison runs through GTL and ViaPath. GTL handles phone calls, and GettingOut handles electronic messaging, video visits, and photo sharing. Families set up a GettingOut account, select Mike Durfee State Prison, and add funds to get started.",
    "In-person visiting follows South Dakota DOC rules. Visitors must be approved and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  operatedBy: "South Dakota Department of Corrections",

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
      notes: "GTL operates the inmate phone system at Mike Durfee State Prison, managed through GettingOut accounts.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GettingOut (GTL's consumer brand) handles electronic messaging, video visits, and photo sharing at Mike Durfee State Prison.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through a GettingOut account. Fund the account to send and receive messages." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance and confirm eligibility." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut messaging, subject to facility content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system, managed through GettingOut accounts." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow South Dakota DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Create a GettingOut account first, then select Mike Durfee State Prison and your inmate before scheduling anything.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the South Dakota DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls, messages, and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which app do I use to contact someone at Mike Durfee State Prison?", answer: "GettingOut, GTL's consumer app. Create an account, choose Mike Durfee State Prison, add your inmate, and fund messaging, video visits, or phone service." },
    { question: "Can I send messages to an inmate at Mike Durfee State Prison?", answer: "Yes, through GettingOut electronic messaging. Create a GettingOut account, add the inmate, and fund the service." },
    { question: "How do video visits work at Mike Durfee State Prison?", answer: "Video visits run through GettingOut. Create an account, add the inmate, and schedule in advance." },
    { question: "How do phone calls work at Mike Durfee State Prison?", answer: "Phone calls run through the GTL phone system, managed through GettingOut accounts. The inmate can only call numbers on the approved list." },
    { question: "Where is Mike Durfee State Prison?", answer: "Mike Durfee State Prison is in Springfield, South Dakota, on the campus of the former University of South Dakota at Springfield. It is a state prison for men." },
  ],

  relatedFacilitySlugs: ["pennington-county-jail", "south-dakota-state-penitentiary", "fci-yankton"],
  relatedGuideSlugs: ["how-gtl-works", "how-gettingout-works"],
},

"hughes-county-jail": {
  id: "f-335",
  name: "Hughes County Jail",
  slug: "hughes-county-jail",
  type: "county",
  stateSlug: "south-dakota",
  stateName: "South Dakota",
  stateAbbr: "SD",
  countySlug: null,
  countyName: "Hughes County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hughes County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Hughes County Jail in Pierre SD. Phone, visitation and deposit options for this Hughes County jail.",

  description:
    "Hughes County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Hughes County jail in Pierre SD.",

  overview: [
    "Hughes County Jail is the county jail in Pierre, South Dakota, operated by the Hughes County Sheriff's Office.",
    "Published sources do not confirm the current inmate communications vendor, so families should confirm the phone and video provider directly with the facility before creating any paid account.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Hughes County Sheriff's Office",
  // TODO(Jan): verify provider

  providers: [],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
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
    { question: "Which company handles phone calls at Hughes County Jail?", answer: "The current vendor is not confirmed from official sources. Confirm the provider with the facility before creating a prepaid account." },
    { question: "How do I visit someone at Hughes County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Hughes County Jail?", answer: "Hughes County Jail is in Pierre, South Dakota. It is operated by the Hughes County Sheriff's Office." },
  ],

  relatedFacilitySlugs: ["pennington-county-jail", "south-dakota-state-penitentiary", "fci-yankton"],
},

"yankton-county-jail": {
  id: "f-336",
  name: "Yankton County Jail",
  slug: "yankton-county-jail",
  type: "county",
  stateSlug: "south-dakota",
  stateName: "South Dakota",
  stateAbbr: "SD",
  countySlug: null,
  countyName: "Yankton County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Yankton County Jail: NCIC Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Yankton County Jail in Yankton SD. NCIC phone, messaging and video visits for this Yankton County jail.",

  description:
    "Yankton County Jail communication guide. NCIC phone, messaging and video visits for families of inmates at this Yankton County jail in Yankton SD.",

  overview: [
    "Yankton County Jail is the county jail in Yankton, South Dakota, under the jurisdiction of the Yankton County Sheriff's Office.",
    "Communication at Yankton County Jail runs through NCIC devices, which provide telephone, video, and messaging services.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Yankton County Sheriff's Office",

  providers: [
    {
      name: "NCIC",
      slug: "ncic",
      initial: "N",
      color: "bg-rose-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "NCIC provides phone service, video visitation, and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Electronic messaging through NCIC." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through NCIC Inmate Communications." },
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
    { question: "Which company handles phone calls at Yankton County Jail?", answer: "Phone calls run through NCIC Inmate Communications." },
    { question: "How do I visit someone at Yankton County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Yankton County Jail?", answer: "Yankton County Jail is in Yankton, South Dakota. It is under the jurisdiction of the Yankton County Sheriff's Office." },
  ],

  relatedFacilitySlugs: ["pennington-county-jail", "south-dakota-state-penitentiary", "fci-yankton"],
},

"south-dakota-womens-prison": {
  id: "f-337",
  name: "South Dakota Women's Prison",
  slug: "south-dakota-womens-prison",
  type: "state",
  stateSlug: "south-dakota",
  stateName: "South Dakota",
  stateAbbr: "SD",
  countySlug: null,
  countyName: "Hughes County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "South Dakota Women's Prison: GTL Phones and GettingOut Visits Guide",
  seoDescription: "How to contact someone at South Dakota Women's Prison in Pierre SD. GTL phones and GettingOut messaging and video visits for this South Dakota women's prison.",

  description:
    "South Dakota Women's Prison communication guide. GTL phone calls and GettingOut messaging and video visits for families of inmates at this South Dakota women's prison in Pierre SD.",

  overview: [
    "South Dakota Women's Prison is the state women's prison in Pierre, South Dakota, operated by the South Dakota Department of Corrections. It is part of the Solem Public Safety Center complex.",
    "Communication at South Dakota Women's Prison runs through GTL and ViaPath. GTL handles phone calls, and GettingOut handles electronic messaging, video visits, and photo sharing. Families set up a GettingOut account, select South Dakota Women's Prison, and add funds to get started.",
    "In-person visiting follows South Dakota DOC rules. Visitors must be approved and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  operatedBy: "South Dakota Department of Corrections",

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
      notes: "GTL operates the inmate phone system at South Dakota Women's Prison, managed through GettingOut accounts.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GettingOut (GTL's consumer brand) handles electronic messaging, video visits, and photo sharing at South Dakota Women's Prison.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through a GettingOut account. Fund the account to send and receive messages." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance and confirm eligibility." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut messaging, subject to facility content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system, managed through GettingOut accounts." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow South Dakota DOC rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Create a GettingOut account first, then select South Dakota Women's Prison and your inmate before scheduling anything.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the South Dakota DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls, messages, and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which app do I use to contact someone at South Dakota Women's Prison?", answer: "GettingOut, GTL's consumer app. Create an account, choose South Dakota Women's Prison, add your inmate, and fund messaging, video visits, or phone service." },
    { question: "Can I send messages to an inmate at South Dakota Women's Prison?", answer: "Yes, through GettingOut electronic messaging. Create a GettingOut account, add the inmate, and fund the service." },
    { question: "How do video visits work at South Dakota Women's Prison?", answer: "Video visits run through GettingOut. Create an account, add the inmate, and schedule in advance." },
    { question: "How do phone calls work at South Dakota Women's Prison?", answer: "Phone calls run through the GTL phone system, managed through GettingOut accounts. The inmate can only call numbers on the approved list." },
    { question: "Where is South Dakota Women's Prison?", answer: "South Dakota Women's Prison is in Pierre, South Dakota. It is part of the Solem Public Safety Center complex." },
  ],

  relatedFacilitySlugs: ["pennington-county-jail", "south-dakota-state-penitentiary", "fci-yankton"],
  relatedGuideSlugs: ["how-gtl-works", "how-gettingout-works"],
},

"south-central-regional-jail": {
  id: "f-338",
  name: "South Central Regional Jail",
  slug: "south-central-regional-jail",
  type: "state",
  stateSlug: "west-virginia",
  stateName: "West Virginia",
  stateAbbr: "WV",
  countySlug: null,
  countyName: "Kanawha County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "South Central Regional Jail: GettingOut Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at South Central Regional Jail in Charleston WV. GettingOut phone, messaging and video visits for this West Virginia regional jail.",

  description:
    "South Central Regional Jail communication guide. GettingOut phone, messaging and video visits for families of inmates at this West Virginia regional jail in Charleston WV.",

  overview: [
    "South Central Regional Jail is a West Virginia Division of Corrections and Rehabilitation facility in Charleston, West Virginia. It serves Jackson and Kanawha counties and has been in operation since 1993. It contains the state's only Forensic Evaluation Unit.",
    "Communication at South Central Regional Jail runs through GettingOut, ViaPath's platform for phone calls, video visits, and messaging.",
    "Visitation follows West Virginia DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  established: 1993,
  operatedBy: "West Virginia Division of Corrections and Rehabilitation",

  providers: [
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GettingOut, ViaPath's platform, handles phone calls, video visits, and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut." },
    phone: { status: "available", provider: "GettingOut", notes: "Phone calls through GettingOut." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the West Virginia DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at South Central Regional Jail?", answer: "Phone calls run through GettingOut, ViaPath's platform." },
    { question: "How do I visit someone at South Central Regional Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow West Virginia DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "Which counties does South Central Regional Jail serve?", answer: "South Central Regional Jail serves Jackson and Kanawha counties. It has been in operation since 1993 and contains the state's only Forensic Evaluation Unit." },
  ],

  relatedFacilitySlugs: ["mount-olive-correctional-complex", "western-regional-jail", "fci-hazelton"],
},

"north-central-regional-jail": {
  id: "f-339",
  name: "North Central Regional Jail",
  slug: "north-central-regional-jail",
  type: "state",
  stateSlug: "west-virginia",
  stateName: "West Virginia",
  stateAbbr: "WV",
  countySlug: null,
  countyName: "Doddridge County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "North Central Regional Jail: GettingOut Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at North Central Regional Jail in Greenwood WV. GettingOut phone, messaging and video visits for this West Virginia regional jail.",

  description:
    "North Central Regional Jail communication guide. GettingOut phone, messaging and video visits for families of inmates at this West Virginia regional jail in Greenwood WV.",

  overview: [
    "North Central Regional Jail is a West Virginia Division of Corrections and Rehabilitation facility in Greenwood, West Virginia. It opened in August 2001 and serves nine counties: Doddridge, Harrison, Marion, Monongalia, Pleasants, Ritchie, Tyler, Wirt, and Wood.",
    "Communication at North Central Regional Jail runs through GettingOut, ViaPath's platform for phone calls, video visits, and messaging.",
    "Visitation follows West Virginia DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  established: 2001,
  operatedBy: "West Virginia Division of Corrections and Rehabilitation",

  providers: [
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GettingOut, ViaPath's platform, handles phone calls, video visits, and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut." },
    phone: { status: "available", provider: "GettingOut", notes: "Phone calls through GettingOut." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the West Virginia DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at North Central Regional Jail?", answer: "Phone calls run through GettingOut, ViaPath's platform." },
    { question: "How do I visit someone at North Central Regional Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow West Virginia DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "Which counties does North Central Regional Jail serve?", answer: "North Central Regional Jail serves nine counties: Doddridge, Harrison, Marion, Monongalia, Pleasants, Ritchie, Tyler, Wirt, and Wood. It opened in August 2001." },
  ],

  relatedFacilitySlugs: ["mount-olive-correctional-complex", "western-regional-jail", "fci-hazelton"],
},

"eastern-regional-jail": {
  id: "f-340",
  name: "Eastern Regional Jail",
  slug: "eastern-regional-jail",
  type: "state",
  stateSlug: "west-virginia",
  stateName: "West Virginia",
  stateAbbr: "WV",
  countySlug: null,
  countyName: "Berkeley County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Eastern Regional Jail: GettingOut Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Eastern Regional Jail in Martinsburg WV. GettingOut phone, messaging and video visits for this West Virginia regional jail.",

  description:
    "Eastern Regional Jail communication guide. GettingOut phone, messaging and video visits for families of inmates at this West Virginia regional jail in Martinsburg WV.",

  overview: [
    "Eastern Regional Jail is a West Virginia Division of Corrections and Rehabilitation facility in Martinsburg, West Virginia. It serves Berkeley, Jefferson, and Morgan counties and has been in operation since September 1999. Its rated capacity is 568.",
    "Communication at Eastern Regional Jail runs through GettingOut, ViaPath's platform for phone calls, video visits, and messaging.",
    "Visitation follows West Virginia DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 568,
  established: 1999,
  operatedBy: "West Virginia Division of Corrections and Rehabilitation",

  providers: [
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GettingOut, ViaPath's platform, handles phone calls, video visits, and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut." },
    phone: { status: "available", provider: "GettingOut", notes: "Phone calls through GettingOut." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the West Virginia DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Eastern Regional Jail?", answer: "Phone calls run through GettingOut, ViaPath's platform." },
    { question: "How do I visit someone at Eastern Regional Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow West Virginia DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "Which counties does Eastern Regional Jail serve?", answer: "Eastern Regional Jail serves Berkeley, Jefferson, and Morgan counties. It has been in operation since September 1999 and has a rated capacity of 568." },
  ],

  relatedFacilitySlugs: ["mount-olive-correctional-complex", "western-regional-jail", "fci-hazelton"],
},

"northern-regional-jail": {
  id: "f-341",
  name: "Northern Regional Jail",
  slug: "northern-regional-jail",
  type: "state",
  stateSlug: "west-virginia",
  stateName: "West Virginia",
  stateAbbr: "WV",
  countySlug: null,
  countyName: "Marshall County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Northern Regional Jail: GettingOut Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Northern Regional Jail in Moundsville WV. GettingOut phone, messaging and video visits for this West Virginia regional jail.",

  description:
    "Northern Regional Jail communication guide. GettingOut phone, messaging and video visits for families of inmates at this West Virginia regional jail in Moundsville WV.",

  overview: [
    "Northern Regional Jail is a West Virginia Division of Corrections and Rehabilitation facility in Moundsville, West Virginia. It opened in Marshall County in 1994 and serves Brooke, Hancock, Marshall, Ohio, Tyler, and Wetzel counties. Its designated capacity is 306.",
    "Communication at Northern Regional Jail runs through GettingOut, ViaPath's platform for phone calls, video visits, and messaging.",
    "Visitation follows West Virginia DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 306,
  established: 1994,
  operatedBy: "West Virginia Division of Corrections and Rehabilitation",

  providers: [
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GettingOut, ViaPath's platform, handles phone calls, video visits, and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut." },
    phone: { status: "available", provider: "GettingOut", notes: "Phone calls through GettingOut." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the West Virginia DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Northern Regional Jail?", answer: "Phone calls run through GettingOut, ViaPath's platform." },
    { question: "How do I visit someone at Northern Regional Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow West Virginia DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "Which counties does Northern Regional Jail serve?", answer: "Northern Regional Jail serves Brooke, Hancock, Marshall, Ohio, Tyler, and Wetzel counties. It opened in Marshall County in 1994." },
  ],

  relatedFacilitySlugs: ["mount-olive-correctional-complex", "western-regional-jail", "fci-hazelton"],
},

"denmar-correctional-center": {
  id: "f-342",
  name: "Denmar Correctional Center",
  slug: "denmar-correctional-center",
  type: "state",
  stateSlug: "west-virginia",
  stateName: "West Virginia",
  stateAbbr: "WV",
  countySlug: null,
  countyName: "Pocahontas County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Denmar Correctional Center: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Denmar Correctional Center in Hillsboro WV. Phone, visitation and deposit options for this West Virginia medium security prison.",

  description:
    "Denmar Correctional Center communication guide. Phone, visitation and deposit options for families of inmates at this West Virginia medium security prison in Hillsboro WV.",

  overview: [
    "Denmar Correctional Center is a medium security prison in Hillsboro, West Virginia, operated by the West Virginia Division of Corrections and Rehabilitation. It houses about 232 adult males. The building originally opened as a hospital in 1919.",
    "Phone service at Denmar Correctional Center runs through GTL (ConnectNetwork), and video visits and messaging run through GettingOut.",
    "Visitation follows West Virginia DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 232,
  established: 1919,
  operatedBy: "West Virginia Division of Corrections and Rehabilitation",

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
      notes: "GTL (ViaPath) provides phone service. Accounts are managed through ConnectNetwork.",
    },
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "GettingOut handles video visits and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL. Accounts are managed through ConnectNetwork." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the West Virginia DCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Denmar Correctional Center?", answer: "Phone calls run through GTL (ConnectNetwork)." },
    { question: "How do I visit someone at Denmar Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow West Virginia DCR visiting rules. Confirm visiting hours before traveling." },
    { question: "What was Denmar Correctional Center before it was a prison?", answer: "The building originally opened as a hospital in 1919. Today Denmar is a medium security prison housing about 232 adult males." },
  ],

  relatedFacilitySlugs: ["mount-olive-correctional-complex", "western-regional-jail", "fci-hazelton"],
},

"wyoming-womens-center": {
  id: "f-343",
  name: "Wyoming Women's Center",
  slug: "wyoming-womens-center",
  type: "state",
  stateSlug: "wyoming",
  stateName: "Wyoming",
  stateAbbr: "WY",
  countySlug: null,
  countyName: "Niobrara County",
  securityLevel: "Multi-Custody",
  hasDetailPage: true,
  seoTitle: "Wyoming Women's Center: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Wyoming Women's Center in Lusk WY. Phone, visitation and deposit options for Wyoming's primary women's correctional facility.",

  description:
    "Wyoming Women's Center communication guide. Phone, visitation and deposit options for families of inmates at Wyoming's primary women's correctional facility in Lusk WY.",

  overview: [
    "Wyoming Women's Center is the Wyoming Department of Corrections primary correctional facility for female offenders, in Lusk, Wyoming. It is a multi-custody campus housing inmates from intake through discharge.",
    "Phone calls and video visitation at Wyoming Women's Center run through ICSolutions under the Wyoming DOC contract.",
    "Visitation follows Wyoming DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Wyoming Department of Corrections",

  providers: [
    {
      name: "ICSolutions",
      slug: "icsolutions",
      initial: "I",
      color: "bg-sky-700",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "ICSolutions provides phone service and video visitation under the Wyoming DOC contract.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "ICSolutions", notes: "Video visits through ICSolutions. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "ICSolutions", notes: "Phone calls through ICSolutions." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Wyoming DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Wyoming Women's Center?", answer: "Phone calls run through ICSolutions under the Wyoming DOC contract." },
    { question: "How do I visit someone at Wyoming Women's Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Wyoming DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "What is Wyoming Women's Center?", answer: "Wyoming Women's Center in Lusk is the Wyoming Department of Corrections primary correctional facility for female offenders. It is a multi-custody campus housing inmates from intake through discharge." },
  ],

  relatedFacilitySlugs: ["wyoming-state-penitentiary", "wyoming-medium-correctional-institution", "laramie-county-detention-center"],
},

"natrona-county-jail": {
  id: "f-344",
  name: "Natrona County Jail",
  slug: "natrona-county-jail",
  type: "county",
  stateSlug: "wyoming",
  stateName: "Wyoming",
  stateAbbr: "WY",
  countySlug: null,
  countyName: "Natrona County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Natrona County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Natrona County Jail in Casper WY. Phone, visitation and deposit options for this Natrona County detention center.",

  description:
    "Natrona County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Natrona County detention center in Casper WY.",

  overview: [
    "Natrona County Jail, officially known as the Natrona County Detention Center, is the county detention center in Casper, Wyoming, operated by the Natrona County Sheriff's Office.",
    "Phone calls and video visits at Natrona County Jail run through NCIC Correctional Services.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Natrona County Sheriff's Office",

  providers: [
    {
      name: "NCIC",
      slug: "ncic",
      initial: "N",
      color: "bg-rose-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "NCIC provides phone service and video visitation.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through NCIC." },
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
    { question: "Which company handles phone calls at Natrona County Jail?", answer: "Phone calls run through NCIC Correctional Services." },
    { question: "How do I visit someone at Natrona County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the official name of Natrona County Jail?", answer: "The facility is officially known as the Natrona County Detention Center. It is operated by the Natrona County Sheriff's Office in Casper." },
  ],

  relatedFacilitySlugs: ["wyoming-state-penitentiary", "wyoming-medium-correctional-institution", "laramie-county-detention-center"],
},

"albany-county-jail-wyoming": {
  id: "f-345",
  name: "Albany County Jail",
  slug: "albany-county-jail-wyoming",
  type: "county",
  stateSlug: "wyoming",
  stateName: "Wyoming",
  stateAbbr: "WY",
  countySlug: null,
  countyName: "Albany County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Albany County Jail Wyoming: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Albany County Jail in Laramie WY. Phone, visitation and deposit options for this Albany County detention center.",

  description:
    "Albany County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Albany County detention center in Laramie WY.",

  overview: [
    "Albany County Jail, officially known as the Albany County Detention Center, is the county detention center in Laramie, Wyoming, operated by the Albany County Sheriff's Office.",
    "Phone calls from Albany County Jail go through GettingOut (ViaPath/Telmate). The video visitation vendor is not confirmed.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Albany County Sheriff's Office",
  // TODO(Jan): verify video vendor

  providers: [
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Phone calls go through GettingOut (ViaPath/Telmate).",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check with the facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GettingOut", notes: "Phone calls go through GettingOut (ViaPath/Telmate)." },
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
    { question: "Which company handles phone calls at Albany County Jail in Wyoming?", answer: "Phone calls go through GettingOut (ViaPath/Telmate). The video vendor is not confirmed." },
    { question: "How do I visit someone at Albany County Jail in Wyoming?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the official name of Albany County Jail in Wyoming?", answer: "The facility is officially known as the Albany County Detention Center. It is operated by the Albany County Sheriff's Office in Laramie." },
  ],

  relatedFacilitySlugs: ["wyoming-state-penitentiary", "wyoming-medium-correctional-institution", "laramie-county-detention-center"],
},

"wyoming-honor-farm": {
  id: "f-346",
  name: "Wyoming Honor Farm",
  slug: "wyoming-honor-farm",
  type: "state",
  stateSlug: "wyoming",
  stateName: "Wyoming",
  stateAbbr: "WY",
  countySlug: null,
  countyName: "Fremont County",
  securityLevel: "Minimum",
  hasDetailPage: true,
  seoTitle: "Wyoming Honor Farm: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Wyoming Honor Farm in Riverton WY. Phone, visitation and deposit options for this minimum custody Wyoming facility.",

  description:
    "Wyoming Honor Farm communication guide. Phone, visitation and deposit options for families of inmates at this minimum custody Wyoming facility in Riverton WY.",

  overview: [
    "Wyoming Honor Farm is a minimum custody facility in Riverton, Wyoming, operated by the Wyoming Department of Corrections. It is known for its wild horse program: the Bureau of Land Management and the Honor Farm have cooperated since 1988 to train and adopt wild horses.",
    "Phone calls and video visitation at Wyoming Honor Farm run through ICSolutions under the Wyoming DOC contract.",
    "Visitation follows Wyoming DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Wyoming Department of Corrections",

  providers: [
    {
      name: "ICSolutions",
      slug: "icsolutions",
      initial: "I",
      color: "bg-sky-700",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "ICSolutions provides phone service and video visitation under the Wyoming DOC contract.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "ICSolutions", notes: "Video visits through ICSolutions. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "ICSolutions", notes: "Phone calls through ICSolutions." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Wyoming DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Wyoming Honor Farm?", answer: "Phone calls run through ICSolutions under the Wyoming DOC contract." },
    { question: "How do I visit someone at Wyoming Honor Farm?", answer: "Visitors must be approved. Bring valid photo ID and follow Wyoming DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the wild horse program at Wyoming Honor Farm?", answer: "The Bureau of Land Management and the Honor Farm have cooperated since 1988 to train and adopt wild horses. Inmates work with the horses as part of the program." },
  ],

  relatedFacilitySlugs: ["wyoming-state-penitentiary", "wyoming-medium-correctional-institution", "laramie-county-detention-center"],
},

"campbell-county-detention-center": {
  id: "f-347",
  name: "Campbell County Detention Center",
  slug: "campbell-county-detention-center",
  type: "county",
  stateSlug: "wyoming",
  stateName: "Wyoming",
  stateAbbr: "WY",
  countySlug: null,
  countyName: "Campbell County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Campbell County Detention Center: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Campbell County Detention Center in Gillette WY. Phone, visitation and deposit options for this Campbell County detention center.",

  description:
    "Campbell County Detention Center communication guide. Phone, visitation and deposit options for families of inmates at this Campbell County detention center in Gillette WY.",

  overview: [
    "Campbell County Detention Center is the detention center in Gillette, Wyoming, part of the Campbell County Sheriff's Office. It houses county, state, and federal inmates.",
    "Phone calls and video visits at Campbell County Detention Center run through NCIC Correctional Services.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Campbell County Sheriff's Office",

  providers: [
    {
      name: "NCIC",
      slug: "ncic",
      initial: "N",
      color: "bg-rose-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "NCIC provides phone service and video visitation.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through NCIC." },
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
    { question: "Which company handles phone calls at Campbell County Detention Center?", answer: "Phone calls run through NCIC Correctional Services." },
    { question: "How do I visit someone at Campbell County Detention Center?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Does Campbell County Detention Center hold federal inmates?", answer: "Yes. The detention center in Gillette houses county, state, and federal inmates. It is part of the Campbell County Sheriff's Office." },
  ],

  relatedFacilitySlugs: ["wyoming-state-penitentiary", "wyoming-medium-correctional-institution", "laramie-county-detention-center"],
},
}
