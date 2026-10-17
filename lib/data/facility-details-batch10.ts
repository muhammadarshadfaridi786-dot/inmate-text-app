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
  seoTitle: "Hawaii Community Correctional Center: ConnectNetwork Phones",
  seoDescription: "How to contact someone at Hawaii Community Correctional Center in Hilo HI.",

  description:
    "Hawaii Community Correctional Center communication guide. ConnectNetwork phone service, visitation, and contact rules for families of inmates at this Hawaii DCR facility in Hilo HI.",

  overview: [
    "Hawaii Community Correctional Center is a Hawaii Department of Corrections and Rehabilitation (DCR) facility in Hilo, Hawaii, on the Big Island. It has a capacity of about 226 beds and operates across two sites. The Hale Nani site offers reintegration and work release programming.",
    "Phone service at Hawaii Community Correctional Center runs through GTL and ViaPath, under the ConnectNetwork brand. Families set up a ConnectNetwork account, add the inmate, and fund phone service for outgoing calls.",
    "Visitation follows Hawaii DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "60 Punahele Street, Hilo, HI 96720",
  phone: "808-933-0428",

  inmateCapacity: 226,
  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",
    mailingAddress: "Inmate Full Name, c/o Hawaii Community Correctional Center, 60 Punahele Street, Hilo, HI 96720.",
    visitingHours: "Visitation follows a posted schedule that changes with facility operations. Confirm the current visiting schedule and approval requirements with the facility before traveling.",
    commissary: "Trust account deposits through GTL and ViaPath ConnectNetwork.",
    fax: "(808) 933-0425",

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
    { question: "How do I mail a letter to someone at Hawaii Community Correctional Center?", answer: "Address the envelope with the inmate's full name, c/o Hawaii Community Correctional Center, 60 Punahele Street, Hilo, HI 96720. Include a return address and follow Hawaii DCR mail rules." },
    { question: "Can I receive calls from Hawaii Community Correctional Center?", answer: "Yes. Inmates place outgoing calls through the ConnectNetwork phone system. Set up a ConnectNetwork account, add the inmate, and keep your number on the approved list. You cannot call an inmate directly." },
    { question: "How do I block calls from Hawaii Community Correctional Center?", answer: "Contact ConnectNetwork to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Hawaii Community Correctional Center?", answer: "Video visits run through GTL tablets. Set up a ConnectNetwork account, add the inmate, and schedule in advance. Confirm eligibility and the current schedule with the facility before traveling." },
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
  seoTitle: "Kauai Community Correctional Center: Phone and Visitation",
  seoDescription: "How to contact someone at Kauai Community Correctional Center in Lihue HI. Phone, visitation and deposit options for this Hawaii DCR jail.",

  description:
    "Kauai Community Correctional Center communication guide. Phone, visitation and deposit options for families of inmates at this Hawaii DCR jail in Lihue HI.",

  overview: [
    "Kauai Community Correctional Center is a Hawaii Department of Corrections and Rehabilitation (DCR) jail in Lihue, Hawaii, on Kauai. It is one of four DCR jails statewide. The Kauai Intake Service Center is located in Lihue.",
    "Communication at Kauai Community Correctional Center runs through ViaPath (formerly GTL). Phone calls and video visits run through GTL, and trust deposits go through ViaPath ConnectNetwork. Electronic messaging is not confirmed by DCR sources, so confirm messaging options with the facility.",
    "Visitation follows Hawaii DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "3-5351 Kuhio Highway, Lihue, HI 96766",
  phone: "(808) 241-3050 ext. 244",

  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",
    mailingAddress: "Inmate Full Name, c/o Kauai Community Correctional Center, 3-5351 Kuhio Highway, Lihue, HI 96766.",
    visitingHours: "Visitation follows a posted schedule that changes with facility operations. Confirm the current visiting schedule and approval requirements with the facility before traveling.",
    commissary: "Trust account deposits through ViaPath ConnectNetwork.",
    fax: "(808) 241-3059",

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
    { question: "How do I mail a letter to someone at Kauai Community Correctional Center?", answer: "Address the envelope with the inmate's full name, c/o Kauai Community Correctional Center, 3-5351 Kuhio Highway, Lihue, HI 96766. Include a return address and follow Hawaii DCR mail rules." },
    { question: "Can I receive calls from Kauai Community Correctional Center?", answer: "Yes. Inmates place outgoing calls through GTL. Set up a prepaid account through ConnectNetwork, add the inmate, and keep your number on the approved list. You cannot call an inmate directly." },
    { question: "How do I block calls from Kauai Community Correctional Center?", answer: "Contact ConnectNetwork to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Kauai Community Correctional Center?", answer: "Video visits run through GTL tablets. Set up a ConnectNetwork account, add the inmate, and schedule in advance. Confirm eligibility and the current schedule with the facility before traveling." },
    { question: "How do I add money to an inmate's account at Kauai Community Correctional Center?", answer: "Trust deposits go through ViaPath ConnectNetwork. Create a ConnectNetwork account, add the inmate, and fund the trust account. Confirm current deposit options with the facility." },
    { question: "How do I find out if someone is at Kauai Community Correctional Center?", answer: "Contact the facility at (808) 241-3050, ext. 244, to confirm custody status. Have the person's full legal name ready." },
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
  seoTitle: "Women's Community Correctional Center: Phone and Visitation",
  seoDescription: "How to contact someone at Women's Community Correctional Center in Kailua HI. Phone, visitation and deposit options for Hawaii's only women's prison.",

  description:
    "Women's Community Correctional Center communication guide. Phone, visitation and deposit options for families of inmates at Hawaii's only women's prison in Kailua HI.",

  overview: [
    "Women's Community Correctional Center is the only women's prison in Hawaii, in Kailua, operated by the Hawaii Department of Corrections and Rehabilitation (DCR). It houses maximum, medium, and minimum custody female offenders plus pretrial detainees.",
    "Communication at Women's Community Correctional Center runs through ViaPath (formerly GTL). Phone calls and video visits run through GTL, and trust deposits go through ViaPath ConnectNetwork. Electronic messaging is not confirmed by DCR sources, so confirm messaging options with the facility.",
    "Visitation follows Hawaii DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",
    mailingAddress: "Inmate First and Last Name, c/o Women's Community Correctional Center, 42-477 Kalanianaole Hwy, Kailua, HI 96734.",
    visitingHours: "Visitation follows a posted schedule that changes with facility operations. Confirm the current visiting schedule and approval requirements with the facility before traveling.",
    commissary: "After the first 30 days, only people on the inmate's visitation list may deposit funds. Cashier's checks or official bank drafts are accepted through the mail, payable to Women's Community Correctional Center, with the inmate name and SID number on the lower-left corner. A payment kiosk is planned.",

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
    { question: "How do I mail a letter to someone at Women's Community Correctional Center?", answer: "Address the envelope with the inmate's first and last name, c/o Women's Community Correctional Center, 42-477 Kalanianaole Hwy, Kailua, HI 96734. Include a return address and follow Hawaii DCR mail rules." },
    { question: "Can I receive calls from Women's Community Correctional Center?", answer: "Yes. Inmates place outgoing calls through GTL. Set up a prepaid account through ConnectNetwork, add the inmate, and keep your number on the approved list. You cannot call an inmate directly." },
    { question: "How do I block calls from Women's Community Correctional Center?", answer: "Contact ConnectNetwork to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Women's Community Correctional Center?", answer: "Video visits run through GTL tablets. Set up a ConnectNetwork account, add the inmate, and schedule in advance. Confirm eligibility and the current schedule with the facility before traveling." },
    { question: "Who can deposit money for an inmate at Women's Community Correctional Center?", answer: "After the first 30 days, only people on the inmate's visitation list may deposit funds. Send a cashier's check or official bank draft through the mail, payable to Women's Community Correctional Center, with the inmate name and SID number on the lower-left corner." },
    { question: "How do I get on an inmate's visitation list at Women's Community Correctional Center?", answer: "Visitation list approval runs through Hawaii DCR. Contact the facility to confirm the application process, and allow time for approval before planning a visit." },
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
  seoTitle: "FDC Honolulu: CorrLinks Messaging and Phone Guide for",
  seoDescription: "How to contact someone at FDC Honolulu in Hawaii.",

  description:
    "FDC Honolulu communication guide. CorrLinks messaging, BOP phone calls, and visitation rules for families of pretrial and holdover inmates at this federal detention center in Honolulu HI.",

  overview: [
    "FDC Honolulu is an administrative security federal detention center in Honolulu, Hawaii, operated by the Federal Bureau of Prisons. It opened in 2001 and holds men and women who are pretrial or in court proceedings, plus brief sentences.",
    "Electronic messaging at FDC Honolulu runs through CorrLinks, the BOP's TRULINCS system. The inmate must add you to their approved contact list before any messaging can begin. Phone calls run through TRUFONE, the BOP phone system, funded through the inmate's trust account.",
    "In-person visiting follows BOP rules. Visitors must be approved and on the inmate's visiting list, and must bring valid photo identification. All calls and messages are monitored. The BOP does not offer general remote video visitation at most facilities, so plan in-person visits ahead.",
  ],

  address: "351 Elliott Street, Honolulu, HI 96819",
  phone: "808-838-4200",

  established: 2001,
  operatedBy: "Federal Bureau of Prisons (BOP)",
    mailingAddress: "Inmate Name and Register Number, FDC Honolulu, Federal Detention Center, P.O. Box 30080, Honolulu, HI 96820.",
    visitingHours: "Visits require approved-visitor status on the inmate's visiting list. Confirm the current visiting schedule with the facility before traveling.",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    commissary: "Trust fund deposits go through BOP-approved methods, including MoneyGram, Western Union, and mail to the BOP lockbox in Des Moines. Do not send money to the facility address.",
    fax: "(808) 838-4507",

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
    { question: "How do I mail a letter to someone at FDC Honolulu?", answer: "Address the envelope with the inmate name and register number, FDC Honolulu, Federal Detention Center, P.O. Box 30080, Honolulu, HI 96820. Mail is inspected for contraband." },
    { question: "How do I find an inmate at FDC Honolulu?", answer: "Use the BOP Inmate Locator at bop.gov/inmateloc to search by name or register number. Confirm current custody status before planning a visit or sending mail." },
    { question: "Can an inmate at FDC Honolulu call me?", answer: "Yes. Inmates place outgoing calls through the BOP phone system (TRUFONE), funded through their trust account. You cannot call an inmate directly." },
    { question: "Can I block calls from FDC Honolulu?", answer: "Ask the facility to remove your number from the inmate's approved calling list, or block the number through your phone carrier." },
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
    mailingAddress: "Inmate First and Last Name, c/o Waiawa Correctional Facility, P.O. Box 1839, Pearl City, HI 96782.",
    visitingHours: "Visitation follows a posted schedule that changes with facility operations. Confirm the current visiting schedule and approval requirements with the facility before traveling.",
    commissary: "Trust account deposits through ViaPath ConnectNetwork.",

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
    { question: "How do I mail a letter to someone at Waiawa Correctional Facility?", answer: "Address the envelope with the inmate's first and last name, c/o Waiawa Correctional Facility, P.O. Box 1839, Pearl City, HI 96782. Mail must follow Hawaii DCR rules: no stickers, glitter, glue, or drawings on the envelope or letter." },
    { question: "Can I receive calls from Waiawa Correctional Facility?", answer: "Yes. Inmates place outgoing calls through GTL. Set up a prepaid account through ConnectNetwork, add the inmate, and keep your number on the approved list. You cannot call an inmate directly." },
    { question: "How do I block calls from Waiawa Correctional Facility?", answer: "Contact ConnectNetwork to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Waiawa Correctional Facility?", answer: "Video visits run through GTL tablets. Set up a ConnectNetwork account, add the inmate, and schedule in advance. Confirm eligibility and the current schedule with the facility before traveling." },
    { question: "How do I add money to an inmate's account at Waiawa Correctional Facility?", answer: "Trust deposits go through ViaPath ConnectNetwork. Create a ConnectNetwork account, add the inmate, and fund the trust account. Confirm current deposit options with the facility." },
    { question: "How do I get on an inmate's visitation list at Waiawa Correctional Facility?", answer: "Visitation list approval runs through Hawaii DCR. Contact the facility to confirm the application process, and allow time for approval before planning a visit." },
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
    mailingAddress: "Inmate Full Name, York County Jail, 1 Layman Way, Alfred, ME 04002.",
    visitingHours: "Video visits are scheduled in advance through Securus. Visitors must be on the inmate's approved list and bring valid photo ID. Confirm the current visiting schedule with the facility before traveling.",
    commissary: "Commissary deposits through Securus.",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
    { question: "How do I mail a letter to someone at York County Jail in Maine?", answer: "Address the envelope with the inmate's full name, York County Jail, 1 Layman Way, Alfred, ME 04002. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find out if someone is at York County Jail in Maine?", answer: "Contact the facility or the York County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at York County Jail in Maine call me?", answer: "Yes. Inmates place outgoing calls through Securus. Set up a Securus account to fund calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from York County Jail in Maine?", answer: "Contact Securus to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at York County Jail in Maine?", answer: "Video visits run through Securus Video Connect. Create a Securus account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I send money to someone at York County Jail in Maine?", answer: "Commissary deposits go through Securus. Create a Securus account, add the inmate, and fund the account. Confirm current deposit options with the facility." },
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
    "Maine Correctional Center is a state prison in Windham, Maine, operated by the Maine Department of Corrections. Families should confirm the resident's current housing location with the facility before setting up any account.",
    "Phone calls and video visits at Maine Correctional Center have run through Legacy Inmate Communications under a Maine DOC agreement signed in 2017, and the DOC's own video visitation brochure names Legacy for video visits at the facility. Because no newer official contract was found, confirm the current vendor with Maine DOC before funding any account. Calls are placed by the resident.",
    "Maine law requires each DOC facility to publish guidelines for resident access to free telephone calls, under a 2023 law. A 2025 bill, LD 647, would go further and require 90 minutes per week of free phone and video calls for DOC residents, plus no fee to deposit money into a phone or video account and no connection fee. The bill's enactment was not confirmed, so ask the facility how the free-call allowance works.",
    "Mail follows the Maine DOC two-address system, confirmed on the DOC's own Mail and Visitation page. Send general correspondence to the resident's name and MDOC number at Maine Correctional Center, 813 Cushing Road, Warren, ME 04864. Send packages, magazines, newspapers, and legal mail to the resident's name and MDOC number at Maine Correctional Center, 17 Mallison Falls Road, Windham, Maine 04062. General correspondence must be on 8.5 x 11 inch white paper in black or dark blue ink, with a verifiable name and return address, and cash must not be sent.",
    "Money and messaging vendors are not confirmed from an official source. The DOC site offers an Add Funds Online option and an inmate search-and-deposit tool, but no retrieved official source names the deposit vendor, the rates, or the limits. Confirm the deposit and messaging setup with Maine DOC before sending money or messages. Visitation follows Maine DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded. Confirm the current visit steps and schedule with the facility before traveling.",
  ],

  operatedBy: "Maine Department of Corrections",
    mailingAddress: "General correspondence: Resident Name and MDOC Number, Maine Correctional Center, 813 Cushing Road, Warren, ME 04864. Packages, magazines, newspapers, and legal mail: Resident Name and MDOC Number, Maine Correctional Center, 17 Mallison Falls Road, Windham, Maine 04062.",
    visitingHours: "Visitors must complete a Maine DOC visitor application and wait for approval before visiting. Once approved, schedule with the facility and confirm the current visiting schedule and processing time.",
    fax: "(207) 893-7001",

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
      notes: "Legacy Inmate Communications has provided phone service and video visitation under a Maine DOC agreement signed in 2017. Confirm the current vendor with Maine DOC before funding an account, since no newer official contract was found.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "Legacy Inmate Communications", notes: "Video visits through Legacy Inmate Communications, per the DOC's video visitation brochure. Schedule in advance. Confirm the current vendor with Maine DOC before funding an account." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Legacy Inmate Communications", notes: "Phone calls through Legacy Inmate Communications under the 2017 Maine DOC agreement. Confirm the current vendor with Maine DOC before funding an account." },
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
    { question: "Which company handles phone calls at Maine Correctional Center?", answer: "Legacy Inmate Communications has been the vendor under a Maine DOC agreement signed in 2017, and the DOC's own video visitation brochure names Legacy for video visits. Because no newer official contract was found, confirm the current vendor with Maine DOC before funding an account." },
    { question: "How do I visit someone at Maine Correctional Center?", answer: "Visitors must be approved. Bring valid photo ID and follow Maine DOC visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Maine Correctional Center?", answer: "Maine Correctional Center is in Windham, Maine. It is operated by the Maine Department of Corrections." },
    { question: "How do I mail a letter to someone at Maine Correctional Center?", answer: "Maine DOC uses a two-address mail system. Send general correspondence to the resident's name and MDOC number, Maine Correctional Center, 813 Cushing Road, Warren, ME 04864. Send packages, magazines, newspapers, and legal mail to the resident's name and MDOC number, Maine Correctional Center, 17 Mallison Falls Road, Windham, Maine 04062. Letters must be on 8.5 x 11 inch white paper in black or dark blue ink, with a verifiable return address. Never include cash. Mail is inspected for contraband." },
    { question: "How do I find an inmate at Maine Correctional Center?", answer: "Use the Maine DOC adult resident search by name to confirm custody status, or contact the facility. Have the person's full legal name ready." },
    { question: "Can an inmate at Maine Correctional Center call me?", answer: "Yes. Inmates place outgoing calls through the facility's phone provider. Legacy Inmate Communications has been the vendor under a Maine DOC agreement signed in 2017; confirm the current vendor with Maine DOC before funding an account. Keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Maine Correctional Center?", answer: "Ask the facility's current phone provider to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I get approved to visit Maine Correctional Center?", answer: "Complete a Maine DOC visitor application and wait for approval before visiting. Once approved, schedule with the facility and confirm the current visiting schedule and processing time." },
    { question: "Are phone calls free at Maine Correctional Center?", answer: "Maine law requires each DOC facility to publish guidelines for resident access to free telephone calls, under a 2023 law. A 2025 bill, LD 647, would require 90 minutes per week of free phone and video calls, but its enactment was not confirmed. Ask the facility how the free-call allowance works." },
    { question: "How do I send money to someone at Maine Correctional Center?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with the facility before sending money." },
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
  seoTitle: "Androscoggin County Jail: Securus Phone, Messaging and",
  seoDescription: "How to contact someone at Androscoggin County Jail in Auburn ME. Securus phone, messaging and video visits for this Androscoggin County jail.",

  description:
    "Androscoggin County Jail communication guide. Securus phone, messaging and video visits for families of inmates at this Androscoggin County jail in Auburn ME.",

  overview: [
    "Androscoggin County Jail in Auburn, Maine is operated by the Androscoggin County Sheriff's Department and holds mainly pretrial detainees. The county's inmate telephone page directs families to fund phone accounts through Securus Technologies.",
    "Phone calls work one way: inmates call out, and staff cannot relay messages to inmates. People booked into the facility get an initial call to make bail arrangements or tell family where they are. After that, inmates can make collect calls for a short period before billing arrangements are required. Families fund phone time through Securus at securustech.net or by phone at 1-800-844-6591, or through the lobby kiosk. If the phone connection or phone system has a problem, Securus is the contact at 1-800-844-6591.",
    "If you are receiving calls from an inmate and want them stopped, ask the Canteen Officer or the Jail Shift Supervisor to block your number. The county says blocking may take up to 24 hours and may not be reversible, so be sure before you ask. When an inmate is released or transferred, money left on the phone account moves back to the inmate account, and the remaining balance is issued on a debit card.",
    "Money for commissary follows the county's commissary rules, not the phone rules. The jail no longer accepts money orders to fund an inmate account. Families can use the lobby kiosk, or deposit online through Access Corrections at accesscorrections.com or by phone at 1-866-345-1884. Accounts can also be funded through Securus at securustech.net or by phone at 1-800-844-6591. Care packages can be bought through Access Securepak at accesssecurepak.com. Funds on the account pay for commissary items, phone time, medical co-pays, and haircuts. Inmates with no money are considered indigent and get hygiene items, writing material, and one haircut every 60 days. The Canteen Officer can be reached at (207) 753-2500 Ext. 1718.",
    "Video visits and electronic messaging are reported by directories as Securus services, but the county's own pages do not name a video or messaging vendor, so confirm the current setup with the jail before paying for anything. Directories describe Securus Video Connect for on-site and remote video visits, and eMessaging for text-like messages and photos through a Securus Online account with purchased stamps. Visitors must be approved and bring valid photo identification, and all calls and visits are monitored and recorded. Confirm the current visit steps and schedule with the jail before traveling or funding an account.",
  ],

  address: "40 Pleasant Street, Auburn, ME 04210",
  phone: "(207) 753-2500 Ext. 1992",

  operatedBy: "Androscoggin County Sheriff's Department",
    mailingAddress: "Confirm the current mailing address with the facility before sending mail. Include the inmate's full name and ID on all mail.",
    commissary: "The jail no longer accepts money orders. Fund an inmate account through the lobby kiosk, Access Corrections online at accesscorrections.com or by phone at 1-866-345-1884, or Securus at securustech.net or by phone at 1-800-844-6591. Care packages through Access Securepak at accesssecurepak.com. Account funds cover commissary items, phone time, medical co-pays, and haircuts. Canteen Officer: (207) 753-2500 Ext. 1718.",
    visitingHours: "Video visits are scheduled in advance. Visitors must be on the inmate's approved list and bring valid photo ID. Confirm the current visiting schedule with the facility before traveling.",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
      notes: "Securus provides phone service at Androscoggin County Jail, per the county's inmate telephone page. Video visitation and eMessaging are reported by directories as Securus services but are not named on the county's pages; confirm with the jail before paying for them.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "eMessaging is reported by directories as a Securus service, but the county's pages do not name a messaging vendor. Confirm with the jail before buying stamps." },
    video: { status: "limited", provider: "Securus", notes: "Video visits reported by directories as Securus Video Connect. The county's pages do not name a video vendor. Confirm the current setup with the jail before paying." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Securus", notes: "Phone calls through Securus, per the county's inmate telephone page. Fund phone time at securustech.net or by phone at 1-800-844-6591, or through the lobby kiosk." },
    moneyTransfer: { status: "available", notes: "Deposits through the lobby kiosk, Access Corrections at accesscorrections.com or 1-866-345-1884, or Securus at securustech.net or 1-800-844-6591, per the county's commissary page. The jail no longer accepts money orders." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Androscoggin County Jail?", answer: "Phone calls run through Securus, per the county's inmate telephone page. Inmates call out; staff cannot relay messages. Fund phone time through Securus at securustech.net or by phone at 1-800-844-6591, or use the lobby kiosk. After booking, inmates get an initial call, then can make collect calls for a short period before billing arrangements are required. For phone-system problems, call Securus at 1-800-844-6591." },
    { question: "How do I visit someone at Androscoggin County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Androscoggin County Jail?", answer: "Androscoggin County Jail is in Auburn, Maine. It primarily holds pretrial inmates and is operated by the Androscoggin County Sheriff's Department." },
    { question: "How do I mail a letter to someone at Androscoggin County Jail?", answer: "The county's pages do not publish a mailing address. Confirm the current mailing address with the facility before sending mail, and include the inmate's full name and ID on all mail. Mail is inspected for contraband." },
    { question: "How do I find out if someone is at Androscoggin County Jail?", answer: "Contact the facility or the Androscoggin County Sheriff's Department to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Androscoggin County Jail call me?", answer: "Yes. Inmates place outgoing calls through Securus. Staff cannot relay messages to inmates. Booked persons get an initial call for bail arrangements or to communicate their location. Keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I schedule a video visit at Androscoggin County Jail?", answer: "Video visits are reported by directories as Securus Video Connect. The county's pages do not name a video vendor, so confirm the current video visit setup and schedule with the jail before paying for anything." },
    { question: "How do I send money to someone at Androscoggin County Jail?", answer: "The jail no longer accepts money orders to fund an inmate account. Use the lobby kiosk, deposit online through Access Corrections at accesscorrections.com or by phone at 1-866-345-1884, or fund through Securus at securustech.net or by phone at 1-800-844-6591. Care packages can be bought through Access Securepak at accesssecurepak.com. For help, contact the Canteen Officer at (207) 753-2500 Ext. 1718." },
    { question: "How do I block calls from Androscoggin County Jail?", answer: "Ask the Canteen Officer or the Jail Shift Supervisor to block your number from the jail's phone system. The county says blocking may take up to 24 hours and may not be reversible." },
    { question: "Does Androscoggin County Jail offer eMessaging?", answer: "Directories report Securus eMessaging, but the county's pages do not name a messaging vendor. Confirm with the jail before buying stamps. eMessaging is Securus email-like messaging through a Securus Online account: you find your contact, buy a book of stamps, and write in the eMessaging inbox. Messages and photos are reviewed by the facility, and stamps are not refunded if content is rejected." },
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
  seoTitle: "Kennebec County Jail: Securus Phone, Messaging and Video",
  seoDescription: "How to contact someone at Kennebec County Jail in Augusta ME. Securus phone, messaging and video visits for this Kennebec County correctional facility.",

  description:
    "Kennebec County Jail communication guide. Securus phone, messaging and video visits for families of inmates at this Kennebec County correctional facility in Augusta ME.",

  overview: [
    "Kennebec County Jail, also known as the Kennebec County Correctional Facility, is the county correctional facility in Augusta, Maine, operated by the Kennebec County Sheriff's Office. The Sheriff's Office lists a separate corrections service line and intake unit.",
    "Communication at Kennebec County Jail runs through Securus. Phone calls, eMessaging, and video visits are handled via Securus.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  phone: "(207) 623-2270 x1111",

  operatedBy: "Kennebec County Sheriff's Office",
    mailingAddress: "Inmate Full Name, Kennebec County Jail, 115 State Street, Augusta, ME 04330.",
    visitingHours: "Video visits are scheduled in advance. Visitors must be on the inmate's approved list and bring valid photo ID. Confirm the current visiting schedule with the facility before traveling.",
    commissary: "Commissary deposits through Securus.",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
    { question: "How do I mail a letter to someone at Kennebec County Jail?", answer: "Address the envelope with the inmate's full name, Kennebec County Jail, 115 State Street, Augusta, ME 04330. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find out if someone is at Kennebec County Jail?", answer: "Contact the facility or the Kennebec County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Kennebec County Jail call me?", answer: "Yes. Inmates place outgoing calls through Securus. Set up a Securus account to fund calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Kennebec County Jail?", answer: "Contact Securus to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Kennebec County Jail?", answer: "Video visits run through Securus Video Connect. Create a Securus account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I send money to someone at Kennebec County Jail?", answer: "Commissary deposits go through Securus. Create a Securus account, add the inmate, and fund the account. Confirm current deposit options with the facility." },
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
    "Phone calls and video visits run through Securus Technologies, per the Sheriff's Office pages: the Sheriff lists Securus for inmate telephone services and describes video visits as Securus Video Visitation from a home computer or Android/Apple device. No messaging (email/text) vendor is named on the Sheriff's pages, and no deposit vendor is named; deposits are accepted via a lobby kiosk or the web.",
    "Visitation follows county rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Somerset County Sheriff's Office",
    mailingAddress: "Inmate Full Name, Somerset County Jail, 131 East Madison Road, Madison, ME 04950.",
    visitingHours: "Family and friend visits: Tuesday, Wednesday, Thursday 6:30-7:30 p.m. and 7:45-8:45 p.m.; Sunday 1:30-2:30 p.m. and 3:15-4:15 p.m. Schedule by calling the jail Monday or Friday, 9:00 a.m.-3:00 p.m. Attorney visits Monday-Friday 8:00-11:45 a.m. and 1:00-4:00 p.m., plus weekend, evening and Zoom options. Visitors must be on the inmate's approved list and bring valid photo ID.",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",
  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-700",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus phone calls and Securus Video Visitation, per the Sheriff's Office pages. No messaging or deposit vendor is named on the Sheriff's pages.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "No email/text messaging vendor is named on the Sheriff's pages. Scanned postal mail via the Securus Digital Mail Center is postal mail, not electronic messaging." },
    video: { status: "available", provider: "Securus", notes: "Securus Video Visitation from a home computer or Android/Apple device, per the Sheriff's Office. Video cost is comparable to phone call rates." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Securus", notes: "Inmate telephone services through Securus, per the Sheriff's Office informational links page." },
    moneyTransfer: { status: "limited", notes: "Deposits accepted via a kiosk in the jail lobby or via the web. No deposit vendor is named on the Sheriff's pages." },
  },

  rules: [
    "Set up phone and video accounts through Securus; the Sheriff's Office names Securus for phone calls and video visits.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Somerset County Jail?", answer: "Securus Technologies handles phone calls at Somerset County Jail, per the Sheriff's Office informational links page." },
    { question: "How do I visit someone at Somerset County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Somerset County Jail?", answer: "Somerset County Jail is in Madison, Maine, not in the county seat of Skowhegan. The Sheriff's Office states the jail is ACA Certified." },
    { question: "How do I mail a letter to someone at Somerset County Jail?", answer: "Address the envelope with the inmate's full name, Somerset County Jail, 131 East Madison Road, Madison, ME 04950. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find out if someone is at Somerset County Jail?", answer: "Contact the facility or the Somerset County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Somerset County Jail call me?", answer: "Inmates place outgoing calls through Securus. Set up a Securus account before the first call. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Somerset County Jail?", answer: "Ask the facility how to block calls from the jail, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a visit at Somerset County Jail?", answer: "Schedule family and friend visits by calling the jail Monday or Friday, 9:00 a.m.-3:00 p.m. Visiting windows are Tuesday, Wednesday and Thursday 6:30-7:30 p.m. and 7:45-8:45 p.m., and Sunday 1:30-2:30 p.m. and 3:15-4:15 p.m. Arrive 15 minutes early with valid photo ID." },
    { question: "How do I send money to someone at Somerset County Jail?", answer: "Deposits can be made via a kiosk in the jail lobby or via the web, per the Sheriff's Office. No deposit vendor is named on the Sheriff's pages, so confirm the current deposit method with the facility before sending money." },
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
  seoTitle: "Minnehaha County Jail: NCIC Phone, Messaging and Video",
  seoDescription: "How to contact someone at Minnehaha County Jail in Sioux Falls SD. NCIC phone, messaging and video visits for this Minnehaha County jail.",

  description:
    "Minnehaha County Jail communication guide. NCIC phone, messaging and video visits for families of inmates at this Minnehaha County jail in Sioux Falls SD.",

  overview: [
    "Minnehaha County Jail in Sioux Falls, South Dakota, is operated by the Minnehaha County Sheriff's Office. All three communication services at the jail run through one vendor, NCIC Inmate Communications. Phone calls, video visits, and messaging all use a single NCIC prepaid account. Families set up and fund that account at account.ncic.com or by calling 1-800-943-2189.",
    "Inmates place outgoing calls, and they cannot receive incoming calls. Calls are billed per minute with no connection fee, at rates published by the county: 16 cents per minute for calls in the United States, 25 cents for Mexico and Canada, and 35 cents for other international calls. Three-way calls are prohibited. Set up the NCIC account before the first call, since the jail's phone service runs through NCIC.",
    "Video visits come in two forms. Lobby video visits at the jail are free, and remote visits from home or another location cost 30 cents per minute. Both types must be scheduled at least 24 hours in advance. Visit windows are 7:30 to 10:15 a.m., 1:00 to 4:00 p.m., and 7:00 to 9:30 p.m. Lobby visits are not offered on Monday, while web visits run daily. Each person may visit an inmate once per day, visits last 30 minutes unless a supervisor approves longer, and visits never exceed 60 minutes.",
    "NCIC uses facial recognition during video visits, so both the inmate and the visitor must keep both eyes, nose, and mouth visible to the camera, and both cameras must stay as stationary as possible. Visits are monitored and recorded. Inmates on disciplinary status cannot receive non-professional visits, though attorney, clergy, and other professional visits continue. Arrive on time, since a visit is automatically terminated if you are more than 10 minutes late.",
    "Messaging runs through the same NCIC account. Messages cost 25 cents each, and picture messages and documents cost 35 cents each, with no limit on how many can be sent. Paper mail, except legal and medical mail, must go to the NCIC processing address: Inmate Name, File ID number, Minnehaha County Jail, PO Box 591, Longview, Texas 75606. Mail is scanned and delivered electronically, then destroyed, so never mail originals. Mail is limited to 5 pages, front side only, one photo per mailing, and envelopes no larger than 8.5 by 11 inches.",
    "Legal and medical mail must go to the facility where the inmate is housed, not to the PO Box. Books and magazines must come directly from a publisher or bookstore, and the jail does not accept them from companies known to allow third-party sellers, including Amazon, Walmart, and Target. Packages need prior approval from a Sergeant. Money goes into an inmate account through the lobby kiosk, the front desk, or JailATM.com. If the inmate has a negative room-and-board balance from a previous sentenced stay, 50 percent of a deposit goes toward that balance. CourtMoney.com can be used to post bond or add commissary funds. Questions can go to the jail at (605) 367-4321.",
  ],

  operatedBy: "Minnehaha County Sheriff's Office",
    mailingAddress: "Regular mail (except legal and medical): Inmate Name, File ID number, Minnehaha County Jail, PO Box 591, Longview, TX 75606. Legal and medical mail and approved packages: Inmate Name, Minnehaha County Jail, 305 W. 4th St., Sioux Falls, SD 57104.",
    visitingHours: "Lobby video visits: Sun, Tue-Sat, 7:30-10:15 a.m., 1:00-4:00 p.m., 7:00-9:30 p.m., no lobby visits Monday. Web visits: daily, same windows. All visits scheduled at least 24 hours in advance. Each person may visit an inmate once per day. Visits last 30 minutes unless a supervisor approves longer, never over 60 minutes. Arrive on time: more than 10 minutes late auto-terminates the visit. Bring government-issued photo ID.",
    commissary: "Deposits through the lobby kiosk, the front desk, or JailATM.com. CourtMoney.com can be used to post bond or add commissary funds. If the inmate has a negative room-and-board balance from a previous sentenced stay, 50 percent of a deposit goes toward that balance. Jail: (605) 367-4321.",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
      notes: "NCIC provides phone service, video visitation, and messaging through a single prepaid account, per the county's jail visitation page. Account setup at account.ncic.com or 1-800-943-2189.",
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
      notes: "JailATM handles deposits, per the county's jail information page. Deposits also accepted at the lobby kiosk and front desk.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Electronic messaging through NCIC. Messages 25 cents each, picture messages and documents 35 cents each, no limit, per the county-hosted NCIC rate sheet." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC. Lobby visits free, remote visits 30 cents per minute. Schedule at least 24 hours in advance. Lobby visits not offered Monday; web visits daily." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through NCIC Inmate Communications. Per-minute billing, no connection fee: 16 cents US, 25 cents Mexico/Canada, 35 cents other international, per the county-hosted NCIC rate sheet. Three-way calls prohibited." },
    moneyTransfer: { status: "available", provider: "JailATM", notes: "Deposits through JailATM.com, the lobby kiosk, or the front desk, per the county's jail information page. CourtMoney.com can be used for bond or commissary funds." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Minnehaha County Jail?", answer: "One NCIC prepaid account covers phone calls, video visits, and messaging. Create and fund it at account.ncic.com or by calling 1-800-943-2189. Calls are billed per minute with no connection fee: 16 cents US, 25 cents Mexico/Canada, 35 cents other international." },
    { question: "How do I visit someone at Minnehaha County Jail?", answer: "Visitors must be approved. Bring government-issued photo ID and follow county visiting rules. Lobby visits run Sun and Tue-Sat, web visits daily, both 7:30-10:15 a.m., 1:00-4:00 p.m., 7:00-9:30 p.m., scheduled at least 24 hours in advance. Confirm the current schedule with the facility before traveling." },
    { question: "Where is Minnehaha County Jail?", answer: "Minnehaha County Jail is in Sioux Falls, South Dakota. It is operated by the Minnehaha County Sheriff's Office." },
    { question: "How do I mail a letter to someone at Minnehaha County Jail?", answer: "Send regular mail, except legal and medical mail, to: Inmate Name, File ID number, Minnehaha County Jail, PO Box 591, Longview, Texas 75606. Mail is limited to 5 pages, front side only, one photo per mailing, and envelopes no larger than 8.5 by 11 inches. Mail is scanned, delivered electronically, and then destroyed, so never mail originals. Legal and medical mail must go to the facility where the inmate is housed." },
    { question: "How do I find out if someone is at Minnehaha County Jail?", answer: "Contact the facility or the Minnehaha County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Minnehaha County Jail call me?", answer: "Yes. Inmates place outgoing calls through NCIC Inmate Communications. Set up an NCIC account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Minnehaha County Jail?", answer: "Contact NCIC to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Minnehaha County Jail?", answer: "Lobby video visits at the jail are free; remote visits cost 30 cents per minute. Both must be scheduled at least 24 hours in advance. Lobby visits are not offered on Monday; web visits run daily. Windows: 7:30-10:15 a.m., 1:00-4:00 p.m., 7:00-9:30 p.m. Each person may visit an inmate once per day. More than 10 minutes late auto-terminates the visit." },
    { question: "How much does a video visit cost at Minnehaha County Jail?", answer: "Lobby video visits at the jail are free. Remote visits from home or another location cost 30 cents per minute. Both types must be scheduled at least 24 hours in advance." },
    { question: "How do I send money to someone at Minnehaha County Jail?", answer: "Deposit money through the lobby kiosk, the front desk, or JailATM.com. CourtMoney.com can be used to post bond or add commissary funds. If the inmate has a negative room-and-board balance from a previous sentenced stay, 50 percent of a deposit goes toward that balance. Jail: (605) 367-4321." },
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
  seoTitle: "Mike Durfee State Prison: GTL Phones and GettingOut Visits",
  seoDescription: "How to contact someone at Mike Durfee State Prison in Springfield SD. GTL phones and GettingOut messaging and video visits for this South Dakota men's prison.",

  description:
    "Mike Durfee State Prison communication guide. GTL phone calls and GettingOut messaging and video visits for families of inmates at this South Dakota men's prison in Springfield SD.",

  overview: [
    "Mike Durfee State Prison is a state prison for men in Springfield, South Dakota, operated by the South Dakota Department of Corrections. It is located on the campus of the former University of South Dakota at Springfield.",
    "Communication at Mike Durfee State Prison runs through GTL and ViaPath. GTL handles phone calls, and GettingOut handles electronic messaging, video visits, and photo sharing. Families set up a GettingOut account, select Mike Durfee State Prison, and add funds to get started.",
    "In-person visiting follows South Dakota DOC rules. Visitors must be approved and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  operatedBy: "South Dakota Department of Corrections",
    mailingAddress: "Inmate Full Name and DOC Number, Mike Durfee State Prison, 1412 Wood Street, Springfield, SD 57062.",
    visitingHours: "In-person visitation is scheduled Friday through Sunday, 1:00pm to 3:00pm. Complete the South Dakota DOC visitor application and wait for approval, then register and schedule visits through the GTL VisitMe system at least 72 hours in advance. Confirm the current schedule with the facility before traveling.",
    rosterUrl: "https://doc.sd.gov/adult/lookup/",
    fax: "(605) 369-2813",

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
    { question: "How do I mail a letter to someone at Mike Durfee State Prison?", answer: "Address the envelope with the inmate's full name and DOC number, Mike Durfee State Prison, 1412 Wood Street, Springfield, SD 57062. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at Mike Durfee State Prison?", answer: "Use the South Dakota DOC offender lookup at doc.sd.gov/adult/lookup to search for an inmate by name." },
    { question: "Can an inmate at Mike Durfee State Prison call me?", answer: "Yes. Inmates place outgoing calls through the GTL phone system, managed through GettingOut accounts. Keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How much do video visits cost at Mike Durfee State Prison?", answer: "GTL and GettingOut video visits cost $0.25 per minute through VisitNow. Confirm current rates with the facility or GettingOut before scheduling." },
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
  seoTitle: "Hughes County Jail: Reliance Phone and Video Visits",
  seoDescription: "Remote video visits and phone calls at Hughes County Jail in Pierre SD run through Reliance Telephone. Deposits via Jail ATM.",

  description:
    "Hughes County Jail communication guide. Reliance Telephone phone and video visits, Jail ATM deposits, and Inmate Canteen commissary for families of inmates at this Hughes County jail in Pierre SD.",

  overview: [
    "Hughes County Jail is the county jail in Pierre, South Dakota, operated by the Hughes County Sheriff's Office. The jail is at 3100 E Hwy 34, Pierre, SD 57501. Its stated mission is safe, secure, and professional detention and court security services.",
    "Phone calls, texting, and remote video visits run through Reliance Telephone. Schedule a remote video visit at reliancetelephone.com. Remote visits run daily from 8:00 a.m. to 10:00 p.m. For help with a remote visit, contact Reliance support on its website or at 1.800.896.3201.",
    "On-site non-contact visits are available from the jail visit room, with one visit per day. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
    "Leave a voicemail for an inmate at 605-223-5244. Since July 1, 2026, the jail no longer accepts personal mail at the jail address. Send personal mail to the processing address: Hughes County Jail, Pierre, SD, Inmate Full Name, 1533 S 42nd St Suite 200, Grand Forks, ND 58201. Send legal mail and money orders to the jail address in Pierre.",
    "Send money through Jail ATM online or at the jail lobby kiosk. Online, select Hughes County Jail and search by inmate name. The kiosk accepts cash or Visa, MasterCard, and Discover, charges a $3.00 transaction fee, and transactions are final and non-refundable. Funds by mail must be a U.S. Postal Money Order or cashier's check, with a $500 maximum.",
    "Order commissary through Inmate Canteen at team3.inmatecanteen.com. Orders are processed twice per week. Orders placed by Sunday at 10:00 p.m. MST are delivered Tuesday, and orders placed by Wednesday at 10:00 p.m. MST are delivered Friday. Holidays may affect delivery, and inmates must have available funds to place an order.",
  ],

  operatedBy: "Hughes County Sheriff's Office",
    mailingAddress: "Personal mail: Inmate Full Name and Inmate ID, Hughes County Jail, 1533 S 42nd St Suite 200, Grand Forks, ND 58201. Legal mail and money orders: Hughes County Jail, 3100 East Highway 34, Pierre, SD 57501.",
    visitingHours: "Remote video visits daily 8:00 a.m. to 10:00 p.m. via Reliance Telephone. On-site non-contact visits available in the visit room, one visit per day. Visitors must be on the inmate's approved list and bring valid photo ID.",
    bailInfo: "Bond payments accepted at the jail from anyone 18 or older with ID: cash, cashier's check, postal money order, bail bond companies, or credit card via courtmoney.com.",
    commissary: "Commissary orders processed twice per week. Family and friends may order commissary through Inmate Canteen. Deposits via Jail ATM online or lobby kiosk ($3.00 transaction fee) or money order by mail (max $500).",
  providers: [
    {
      name: "Reliance Telephone",
      slug: "reliance-telephone",
      initial: "R",
      color: "bg-pink-700",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Remote video visits, phone calls, and messaging through Reliance Telephone, per the county jail page. Schedule video visits at reliancetelephone.com.",
    },
    {
      name: "Jail ATM",
      slug: "jailatm",
      initial: "J",
      color: "bg-lime-700",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "Deposits via Jail ATM online or at the lobby kiosk, per the county jail page.",
    },
    {
      name: "Turnkey Corrections",
      slug: "turnkey-corrections",
      initial: "T",
      color: "bg-stone-600",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "Family and friends may order commissary through Inmate Canteen, per the county jail page.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Reliance Telephone", notes: "Text and email messaging through Reliance Telephone. Confirm availability for the inmate when registering." },
    video: { status: "available", provider: "Reliance Telephone", notes: "Remote video visits daily 8am-10pm via Reliance Telephone. Schedule at reliancetelephone.com. On-site non-contact visits also available." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Reliance Telephone", notes: "Phone calls through Reliance Telephone. Purchase credits from Reliance (800-896-3201)." },
    moneyTransfer: { status: "available", provider: "Jail ATM", notes: "Deposits via Jail ATM online or lobby kiosk ($3.00 fee). Money orders by mail up to $500." },
  },

  rules: [
    "Schedule remote video visits through Reliance Telephone at reliancetelephone.com.",
    "Since July 1, 2026, personal mail goes to the Grand Forks, ND processing address; only legal mail and money orders go to the jail at 3100 E Hwy 34.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Hughes County Jail?", answer: "Phone calls run through Reliance Telephone. Purchase credits from Reliance (800-896-3201)." },
    { question: "How do I visit someone at Hughes County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Hughes County Jail?", answer: "Hughes County Jail is in Pierre, South Dakota. It is operated by the Hughes County Sheriff's Office." },
    { question: "How do I mail a letter to someone at Hughes County Jail?", answer: "Use the mailing address in the 'Where do I send mail' answer below. Include a return address. All mail is inspected for contraband. Do not send cash; send only legal mail and money orders to the jail itself." },
    { question: "How do I find out if someone is at Hughes County Jail?", answer: "Contact the facility or the Hughes County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Hughes County Jail call me?", answer: "Inmates place outgoing calls through Reliance Telephone. Purchase credits from Reliance. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Hughes County Jail?", answer: "Ask the facility how to block calls from the jail, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a visit at Hughes County Jail?", answer: "Visits are scheduled in advance and require approved-visitor status. Contact the facility for the current scheduling process and visiting hours." },
    { question: "How do I schedule a remote video visit at Hughes County Jail?", answer: "Schedule at reliancetelephone.com. Remote visits run daily from 8:00 a.m. to 10:00 p.m. For help, contact Reliance support on its website or at 1.800.896.3201." },
    { question: "How do I send money to someone at Hughes County Jail?", answer: "Deposits run through Jail ATM online or at the lobby kiosk ($3.00 transaction fee). Online, select Hughes County Jail and search by inmate name. The kiosk accepts cash or Visa, MasterCard, and Discover, and transactions are final and non-refundable. Money orders up to $500 can be mailed to the jail." },
    { question: "How do I order commissary for an inmate at Hughes County Jail?", answer: "Order through Inmate Canteen at team3.inmatecanteen.com. Orders are processed twice per week. Orders placed by Sunday at 10:00 p.m. MST are delivered Tuesday, and orders placed by Wednesday at 10:00 p.m. MST are delivered Friday. Holidays may affect delivery, and inmates must have available funds to place an order." },
    { question: "Where do I send mail to someone at Hughes County Jail?", answer: "Since July 1, 2026, personal mail goes to: Inmate Full Name and Inmate ID, Hughes County Jail, 1533 S 42nd St Suite 200, Grand Forks, ND 58201. Legal mail and money orders still go to 3100 East Highway 34, Pierre, SD 57501." },
    { question: "Is there an inmate voicemail line at Hughes County Jail?", answer: "Yes. The jail lists an inmate voicemail line at 605-223-5244." },
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
    "Yankton County Jail is the county jail in Yankton, South Dakota, operated by the Yankton County Sheriff's Office. The jail is at 410 Walnut Suite 104, Yankton, SD 57078. Questions can go to the jail at (605) 668-3567.",
    "All three communication services at the jail run through NCIC Communication devices. Phone calls, video visits, and messaging all use NCIC. Set up an account at ncic.com, and schedule video visits at videovisit.ncic.com/scheduling/login. Jail staff approve each visitation appointment after the request is entered.",
    "Video visitation is available from 5:00 a.m. to midnight, seven days a week. Inmates may lose video visitation access because of disciplinary actions or other issues within the jail. All visits are monitored and recorded.",
    "Messaging runs through the same NCIC account. Messages cost 25 cents each, and picture messages and documents cost 35 cents each, with no limit on how many can be sent. The Sheriff's Office points families to messaging as the quicker option for documents and photos, since messages and pictures arrive instantly.",
    "Paper mail changed on October 18, 2023. All mail except legal and medical mail must go to: Inmate Name, PIN number, Yankton County Jail, PO Box 591, Longview, Texas 75606. Mail sent there is processed, delivered electronically, and then destroyed, so it will not be returned. Legal and medical mail must still go to the jail in Yankton. Commissary money goes in at the kiosk in the jail lobby or by mailing a money order to the jail. Soft-covered books come only directly from a publisher or retail outlet.",
  ],

  operatedBy: "Yankton County Sheriff's Office",
    mailingAddress: "Regular mail (except legal and medical): Inmate Name, PIN number, Yankton County Jail, PO Box 591, Longview, TX 75606. Legal and medical mail: Inmate Name, PIN number, Yankton County Jail, 410 Walnut Suite 104, Yankton, SD 57078.",
    visitingHours: "Video visits daily 5:00 a.m. to midnight via NCIC. Schedule at videovisit.ncic.com/scheduling/login. Jail staff approve each visitation appointment after the request is entered. Disciplinary actions can remove video access. Visits may be monitored and recorded.",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",
    commissary: "Money deposited at the kiosk in the jail lobby or by mailing a money order to the jail. Jail: (605) 668-3567.",

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
      notes: "NCIC provides phone service, video visitation, and messaging through NCIC Communication devices, per the Sheriff's Office jail-information page. Account setup at ncic.com.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Electronic messaging through NCIC. Messages 25 cents each, picture messages and documents 35 cents each, no limit, per the Sheriff's Office jail-information page." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC Communication devices. Available 5:00 a.m. to midnight, 7 days a week. Schedule at videovisit.ncic.com/scheduling/login. Jail staff approve each appointment. Disciplinary actions can remove video access. Visits may be monitored and recorded." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through the NCIC Phone System, per the Sheriff's Office jail-information page. Account setup at ncic.com." },
    moneyTransfer: { status: "available", notes: "Deposits at the kiosk in the jail lobby or by mailing a money order to the jail, per the Sheriff's Office jail-information page." },
  },

  rules: [
    "Video visits run through NCIC Communication devices. Schedule at videovisit.ncic.com/scheduling/login; jail staff approve each appointment.",
    "Regular mail goes to the PO Box 591 processing address; only legal and medical mail goes to the jail.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Yankton County Jail?", answer: "Phone calls run through the NCIC Phone System. Set up an account at ncic.com." },
    { question: "How do I visit someone at Yankton County Jail?", answer: "Video visits run through NCIC Communication devices, available 5:00 a.m. to midnight, seven days a week. Schedule at videovisit.ncic.com/scheduling/login; jail staff approve each appointment. Visits may be monitored and recorded." },
    { question: "Where is Yankton County Jail?", answer: "Yankton County Jail is in Yankton, South Dakota. It is under the jurisdiction of the Yankton County Sheriff's Office." },
    { question: "How do I mail a letter to someone at Yankton County Jail?", answer: "Send regular mail, except legal and medical mail, to: Inmate Name, PIN number, Yankton County Jail, PO Box 591, Longview, Texas 75606. Mail sent there is processed, delivered electronically, and then destroyed, so it will not be returned. Send legal and medical mail to the jail at 410 Walnut Suite 104, Yankton, SD 57078." },
    { question: "How do I find out if someone is at Yankton County Jail?", answer: "Contact the facility or the Yankton County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Yankton County Jail call me?", answer: "Yes. Inmates place outgoing calls through NCIC Inmate Communications. Set up an NCIC account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Yankton County Jail?", answer: "Contact NCIC to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Yankton County Jail?", answer: "Set up an account at videovisit.ncic.com/scheduling/login, enter the visit request, and jail staff approve the appointment. Video visitation runs 5:00 a.m. to midnight, seven days a week." },
    { question: "How much does it cost to message an inmate at Yankton County Jail?", answer: "Messages cost 25 cents each, and picture messages and documents cost 35 cents each, with no limit on how many can be sent. Set up an account at ncic.com. Messages and pictures arrive instantly." },
    { question: "How do I send money to someone at Yankton County Jail?", answer: "Deposit money at the kiosk in the jail lobby or by mailing a money order to the jail. Jail: (605) 668-3567." },
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
  seoTitle: "South Dakota Women's Prison: GTL Phones and GettingOut",
  seoDescription: "How to contact someone at South Dakota Women's Prison in Pierre SD. GTL phones and GettingOut messaging and video visits for this South Dakota women's prison.",

  description:
    "South Dakota Women's Prison communication guide. GTL phone calls and GettingOut messaging and video visits for families of inmates at this South Dakota women's prison in Pierre SD.",

  overview: [
    "South Dakota Women's Prison is the state women's prison in Pierre, South Dakota, operated by the South Dakota Department of Corrections. It is part of the Solem Public Safety Center complex.",
    "Communication at South Dakota Women's Prison runs through GTL and ViaPath. GTL handles phone calls, and GettingOut handles electronic messaging, video visits, and photo sharing. Families set up a GettingOut account, select South Dakota Women's Prison, and add funds to get started.",
    "In-person visiting follows South Dakota DOC rules. Visitors must be approved and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  operatedBy: "South Dakota Department of Corrections",
    mailingAddress: "Inmate Full Name and DOC Number, South Dakota Women's Prison, 3200 East Highway 34, c/o 500 E. Capitol Ave., Pierre, SD 57501.",
    visitingHours: "Complete the South Dakota DOC visitor application and wait for approval, about 15 business days. The offender is notified of approval or denial. After approval, register and schedule visits through the GTL VisitMe system. Confirm the current schedule with the facility before traveling.",
    rosterUrl: "https://doc.sd.gov/adult/lookup/",

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
    { question: "How do I mail a letter to someone at South Dakota Women's Prison?", answer: "Address the envelope with the inmate's full name and DOC number, South Dakota Women's Prison, 3200 East Highway 34, c/o 500 E. Capitol Ave., Pierre, SD 57501. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at South Dakota Women's Prison?", answer: "Use the South Dakota DOC offender lookup at doc.sd.gov/adult/lookup to search for an inmate by name." },
    { question: "Can an inmate at South Dakota Women's Prison call me?", answer: "Yes. Inmates place outgoing calls through the GTL phone system, managed through GettingOut accounts. Keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I schedule a video visit at South Dakota Women's Prison?", answer: "After visitor approval, register and schedule visits through the GTL VisitMe system. Schedule in advance and confirm the current visiting schedule with the facility." },
    { question: "Is messaging limited at South Dakota Women's Prison?", answer: "A limited messaging pilot runs at South Dakota Women's Prison for approved visitors. Messages are not instant and photos are not included. Confirm current messaging availability with the facility before funding an account." },
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
  seoTitle: "South Central Regional Jail: GettingOut Phone, Messaging",
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
    mailingAddress: "Inmate Full Name, South Central Regional Jail, 1001 Centre Way, Charleston, WV 25309.",
    visitingHours: "Visits are scheduled in advance through GettingOut. Visitors must be on the inmate's approved list and bring valid photo ID. Confirm the current visiting schedule with the facility before traveling.",
    rosterUrl: "https://apps.wv.gov/OIS/OffenderSearch/RJA/Daily",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
    { question: "How do I mail a letter to someone at South Central Regional Jail?", answer: "Address the envelope with the inmate's full name, South Central Regional Jail, 1001 Centre Way, Charleston, WV 25309. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at South Central Regional Jail?", answer: "Use the West Virginia DCR regional jail offender search to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at South Central Regional Jail call me?", answer: "Yes. Inmates place outgoing calls through GettingOut. Set up a GettingOut account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from South Central Regional Jail?", answer: "Contact GettingOut to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at South Central Regional Jail?", answer: "Video visits run through GettingOut. Create a GettingOut account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I send money to someone at South Central Regional Jail?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with the facility before sending money." },
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
  seoTitle: "North Central Regional Jail: GettingOut Phone, Messaging",
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
    mailingAddress: "Inmate Full Name, North Central Regional Jail, 1 Lois Lane, Greenwood, WV 26415.",
    visitingHours: "Visits are scheduled in advance through GettingOut. Visitors must be on the inmate's approved list and bring valid photo ID. Confirm the current visiting schedule with the facility before traveling.",
    rosterUrl: "https://apps.wv.gov/OIS/OffenderSearch/RJA/Daily",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
    { question: "How do I mail a letter to someone at North Central Regional Jail?", answer: "Address the envelope with the inmate's full name, North Central Regional Jail, 1 Lois Lane, Greenwood, WV 26415. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at North Central Regional Jail?", answer: "Use the West Virginia DCR regional jail offender search to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at North Central Regional Jail call me?", answer: "Yes. Inmates place outgoing calls through GettingOut. Set up a GettingOut account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from North Central Regional Jail?", answer: "Contact GettingOut to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at North Central Regional Jail?", answer: "Video visits run through GettingOut. Create a GettingOut account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I send money to someone at North Central Regional Jail?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with the facility before sending money." },
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
  seoTitle: "Eastern Regional Jail: GettingOut Phone, Messaging and",
  seoDescription: "How to contact someone at Eastern Regional Jail in Martinsburg WV. GettingOut phone, messaging and video visits for this West Virginia regional jail.",

  description:
    "Eastern Regional Jail communication guide. GettingOut phone, messaging and video visits for families of inmates at this West Virginia regional jail in Martinsburg WV.",

  overview: [
    "Eastern Regional Jail is a West Virginia Division of Corrections and Rehabilitation facility in Martinsburg, West Virginia. It serves Berkeley, Jefferson, and Morgan counties and has been in operation since September 1999. Its rated capacity is 568.",
    "Communication at Eastern Regional Jail runs through GettingOut, ViaPath's platform for phone calls, video visits, and messaging.",
    "Visitation follows West Virginia DCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "94 Grapevine Road, Martinsburg, WV 25405",
  phone: "(304) 267-0045",

  inmateCapacity: 568,
  established: 1999,
  operatedBy: "West Virginia Division of Corrections and Rehabilitation",
    mailingAddress: "Inmate Full Name, Eastern Regional Jail, 94 Grapevine Road, Martinsburg, WV 25405.",
    visitingHours: "Schedule visits Monday, Wednesday, or Friday, 9am to 3pm, by calling at least a day in advance at 304-267-0045 or 304-267-0048. Visits last 30 minutes, with one visit per week. One adult and two children, or two adults, may attend. Confirm the current schedule with the facility before traveling.",
    rosterUrl: "https://apps.wv.gov/OIS/OffenderSearch/RJA/Daily",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
    { question: "How do I mail a letter to someone at Eastern Regional Jail?", answer: "Address the envelope with the inmate's full name, Eastern Regional Jail, 94 Grapevine Road, Martinsburg, WV 25405. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at Eastern Regional Jail?", answer: "Use the West Virginia DCR regional jail offender search to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Eastern Regional Jail call me?", answer: "Yes. Inmates place outgoing calls through GettingOut. Set up a GettingOut account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Eastern Regional Jail?", answer: "Contact GettingOut to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a visit at Eastern Regional Jail?", answer: "Call 304-267-0045 or 304-267-0048 at least a day in advance to schedule. Visits are held Monday, Wednesday, and Friday, 9am to 3pm, last 30 minutes, and are limited to one visit per week." },
    { question: "How do I send money to someone at Eastern Regional Jail?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with the facility before sending money." },
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
  seoTitle: "Northern Regional Jail: GettingOut Phone, Messaging and",
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
    mailingAddress: "Inmate Full Name, Northern Regional Jail, 112 Northern Regional Correction Drive, Moundsville, WV 26041.",
    visitingHours: "Visits are scheduled in advance through GettingOut. Visitors must be on the inmate's approved list and bring valid photo ID. Confirm the current visiting schedule with the facility before traveling.",
    rosterUrl: "https://apps.wv.gov/OIS/OffenderSearch/RJA/Daily",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
    { question: "How do I mail a letter to someone at Northern Regional Jail?", answer: "Address the envelope with the inmate's full name, Northern Regional Jail, 112 Northern Regional Correction Drive, Moundsville, WV 26041. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at Northern Regional Jail?", answer: "Use the West Virginia DCR regional jail offender search to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Northern Regional Jail call me?", answer: "Yes. Inmates place outgoing calls through GettingOut. Set up a GettingOut account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Northern Regional Jail?", answer: "Contact GettingOut to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Northern Regional Jail?", answer: "Video visits run through GettingOut. Create a GettingOut account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I send money to someone at Northern Regional Jail?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with the facility before sending money." },
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

  address: "4319 Denmar Road, Hillsboro, WV 24946",
  phone: "(304) 653-4201",

  inmateCapacity: 232,
  established: 1919,
  operatedBy: "West Virginia Division of Corrections and Rehabilitation",
    mailingAddress: "Inmate Name and ID Number, Denmar Correctional Center, 4319 Denmar Road, Hillsboro, WV 24946.",
    visitingHours: "Visitors must complete an approved visitor application before visiting. Confirm the current visiting schedule with the facility before traveling.",
    rosterUrl: "https://apps.wv.gov/OIS/OffenderSearch/DOC?expired=True",

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
    { question: "How do I mail a letter to someone at Denmar Correctional Center?", answer: "Address the envelope with the inmate name and ID number, Denmar Correctional Center, 4319 Denmar Road, Hillsboro, WV 24946. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at Denmar Correctional Center?", answer: "Use the West Virginia DCR DOC offender search to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Denmar Correctional Center call me?", answer: "Yes. Inmates place outgoing calls through GTL. Set up a ConnectNetwork account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Denmar Correctional Center?", answer: "Contact ConnectNetwork to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Denmar Correctional Center?", answer: "Video visits run through GettingOut. Create a GettingOut account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I send money to someone at Denmar Correctional Center?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with the facility before sending money." },
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
    "Wyoming Women's Center in Lusk, Wyoming, is the Wyoming Department of Corrections facility for female offenders. Wyoming law establishes it at Lusk as a place of confinement, employment and training for convicted female felons sentenced to DOC custody. The center was first established on June 20, 1977, temporarily on Wyoming State Hospital grounds in Evanston, and the Legislature formally created it in 1980, authorizing a permanent facility in Lusk in 1981.",
    "The center is at 1000 West Griffith, Lusk, WY 82225, and the facility phone is (307) 334-3693. The main facility now holds 261 beds, plus 32 beds in the Intensive Treatment Unit. Mail goes to Inmate Name and ID, Wyoming Women's Center, P.O. Box 300, Lusk, WY 82225. Include the inmate's full name and ID number on all mail.",
    "All visitors must be approved. Visitors complete the WDOC visitor application and mail or fax it directly to the facility, not to the WDOC Central Office in Cheyenne. The facility fax is (307) 334-2254. In-person visitation at the center runs Saturday, Sunday, and Monday. Morning visitation starts at 7:30 AM, and visitors must arrive between 7:00 and 7:15 AM. Afternoon visitation starts at 12:00 PM, and visitors must arrive between 11:30 and 11:45 AM. The schedule is subject to change, and proper attire is required.",
    "Video visits run through ICSolutions' The Visitor system, per ICSolutions' own page for the Wyoming Department of Corrections. Visitors register at no cost at icsolutions.com, and offsite visits are fee-based with the cost varying by facility. Test the ICS Mobile app or computer application before scheduling. Note: this vendor page covers the Wyoming Department of Corrections as a whole and does not name Wyoming Women's Center specifically.",
    "Directory sources report that phone calls at the center run through ICSolutions, with prepaid and debit account options. No current official WDOC page naming the phone vendor was found, so confirm the phone setup with the facility before funding an account. Do not rely on directory rate claims, which are stale and marked subject to change.",
    "The deposit method for inmate accounts is not published on the official WDOC pages found. Directory sources disagree about the deposit vendor, so confirm the current deposit method with the facility before sending money.",
  ],

  operatedBy: "Wyoming Department of Corrections",
    mailingAddress: "Inmate Name and ID, Wyoming Women's Center, P.O. Box 300, Lusk, WY 82225.",
    visitingHours: "In-person visitation: Saturday, Sunday, Monday. Morning visitation starts 7:30 AM, arrive 7:00-7:15 AM. Afternoon visitation starts 12:00 PM, arrive 11:30-11:45 AM. Schedule subject to change. All visitors must be approved, proper attire required. Video visits: ICSolutions The Visitor, register at icsolutions.com.",
    fax: "(307) 334-2254",

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
      notes: "Video visitation through ICSolutions' The Visitor system, per ICSolutions' page for the Wyoming Department of Corrections (WDOC-wide page, does not name this facility specifically). Phone service is reported by directory sources as ICSolutions; no current official WDOC page names the phone vendor, so confirm before funding an account.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "ICSolutions", notes: "Video visits through ICSolutions' The Visitor system, per ICSolutions' page for the Wyoming Department of Corrections. Register at no cost at icsolutions.com; offsite visits are fee-based, cost varies by facility." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "ICSolutions", notes: "Phone service reported by directory sources as ICSolutions; no current official WDOC page names the phone vendor. Confirm the phone setup with the facility before funding an account." },
    moneyTransfer: { status: "limited", notes: "Deposit method not published on official WDOC pages found; directory sources disagree about the deposit vendor. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Confirm the phone setup and deposit method with the facility before funding any account; no current official WDOC page names those vendors.",
    "In-person visitation runs Saturday, Sunday, and Monday; morning starts 7:30 AM, afternoon starts 12:00 PM, arrive early. Schedule subject to change.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Wyoming DOC dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Wyoming Women's Center?", answer: "Directory sources report phone calls run through ICSolutions. No current official WDOC page names the phone vendor, so confirm the phone setup with the facility before funding an account." },
    { question: "How do I visit someone at Wyoming Women's Center?", answer: "In-person visitation runs Saturday, Sunday, and Monday. Morning visitation starts at 7:30 AM (arrive 7:00-7:15 AM); afternoon visitation starts at 12:00 PM (arrive 11:30-11:45 AM). All visitors must be approved, and proper attire is required. The schedule is subject to change." },
    { question: "What is Wyoming Women's Center?", answer: "Wyoming Women's Center in Lusk is the Wyoming Department of Corrections facility for female offenders. Wyoming law establishes it at Lusk as a place of confinement, employment and training for convicted female felons sentenced to DOC custody. The main facility holds 261 beds, plus 32 beds in the Intensive Treatment Unit." },
    { question: "How do I mail a letter to someone at Wyoming Women's Center?", answer: "Address the envelope with the inmate name and ID, Wyoming Women's Center, P.O. Box 300, Lusk, WY 82225. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at Wyoming Women's Center?", answer: "Use the Wyoming DOC offender locator, which searches by inmate number or by the first two letters of the last name. Have the person's full legal name ready." },
    { question: "Can an inmate at Wyoming Women's Center call me?", answer: "Yes. Inmates place outgoing calls. Directory sources report the phone service runs through ICSolutions; confirm the phone setup with the facility. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Wyoming Women's Center?", answer: "Ask the facility how to block calls from the center, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Wyoming Women's Center?", answer: "Video visits run through ICSolutions' The Visitor system. Register at no cost at icsolutions.com. Offsite visits are fee-based, and the cost varies by facility. Test the app or computer application before scheduling." },
    { question: "How do I apply to visit Wyoming Women's Center?", answer: "Complete the WDOC visitor application and mail or fax it directly to the facility, not to the WDOC Central Office in Cheyenne. Mail to Wyoming Women's Center, P.O. Box 300, Lusk, WY 82225, or fax to (307) 334-2254. Wait for approval before traveling." },
    { question: "How do I send money to someone at Wyoming Women's Center?", answer: "The deposit method is not published on the official WDOC pages found. Directory sources disagree about the deposit vendor, so confirm the current deposit method with the facility before sending money." },
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
    "Natrona County Jail, officially the Natrona County Detention Center, is the county detention center in Casper, Wyoming, operated by the Natrona County Sheriff's Office. Its function is to safely and securely detain both pre-trial detainees and sentenced inmates. The facility is at 1100 Bruce Lane, Casper, WY 82601, and the Detention Center phone is (307) 235-9521.",
    "Since March 14, 2024, all communications between the public and people incarcerated at the center run through NCIC Inmate Communications. Phone calls, video visits, and messaging all use NCIC. Set up and fund a prepaid account at account.ncic.com or by calling 1-800-943-2189.",
    "Video visits cost 30 cents per minute. Messages cost 25 cents each, and picture messages and video messages cost 35 cents each, with no limit on how many can be sent, and inmates receive them instantly. In-person non-contact visits may be approved case by case with special circumstances; requests go to Lieutenant Schumacker or Lieutenant Davison at 307-235-9521. Visitors must dress modestly, and the county publishes a list of clothing that is not allowed.",
    "Paper mail changed on March 14, 2024. All mail except books, magazines, newspapers, legal mail, and medical mail must go to: Inmate full name, Natrona County Detention Center, PO Box 591, Longview, Texas 75606. Mail is limited to 5 pages, front side only, one photo per mailing, and envelopes no larger than 8.5 by 11 inches. Mail is scanned, delivered electronically through the NCIC messaging system, then destroyed, so it will not be returned. Books, magazines, newspapers, legal mail, and medical mail go directly to the facility at 201 N David, Casper, WY 82601.",
    "Money goes into an inmate account in person or by mail. The Detention Center accepts cash, Western Union or MoneyGram money orders, and cashier's checks. Credit cards and personal checks are not accepted, and cash must not be sent through the mail. Mail money orders or cashier's checks alone to: Inmate full name, C/O NCDC, 201 N David, 2nd Floor, Casper, WY 82601, with a return address. Deposit hours are Sunday through Saturday, 8:00 to 11:00 a.m., 1:00 to 4:00 p.m., and after 6:00 p.m. Questions can go to the Detention Center at (307) 235-9524.",
  ],

  operatedBy: "Natrona County Sheriff's Office",
    mailingAddress: "Regular mail (except books, magazines, newspapers, legal and medical mail): Inmate full name, Natrona County Detention Center, PO Box 591, Longview, TX 75606. Books, magazines, newspapers, legal and medical mail: Inmate full name, Natrona County Detention Center, 201 N David, Casper, WY 82601.",
    visitingHours: "All friend and family visits are remote video visits through NCIC. In-person non-contact visits may be approved case by case with special circumstances; contact Lt. Schumacker or Lt. Davison at 307-235-9521. Video visits $0.30 per minute. Schedule at account.ncic.com. Visitors must dress modestly.",
    commissary: "Deposits in person Sunday through Saturday, 8:00-11:00 a.m., 1:00-4:00 p.m., and after 6:00 p.m., or by mail. Accepts cash, Western Union or MoneyGram money orders, and cashier's checks. Credit cards and personal checks are not accepted.",

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
      notes: "NCIC provides phone, video visitation, and messaging for all communications since March 14, 2024, per the county visitation page. Account setup at account.ncic.com or 1-800-943-2189.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Electronic messaging through NCIC. Messages 25 cents each, picture messages and video messages 35 cents each, no limit, per the county visitation page." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC. Video visits $0.30 per minute. Set up and fund an account at account.ncic.com or 1-800-943-2189." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through NCIC Inmate Communications, per the county visitation page. Account setup at ncic.com." },
    moneyTransfer: { status: "available", notes: "Deposits in person or by mail, per the county Sending Money page. Accepts cash, Western Union or MoneyGram money orders, and cashier's checks. Credit cards and personal checks are not accepted." },
  },

  rules: [
    "All communications run through NCIC Inmate Communications since March 14, 2024. Set up an account at account.ncic.com.",
    "Regular mail goes to PO Box 591; books, magazines, newspapers, legal and medical mail go to 201 N David.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Natrona County Jail?", answer: "Phone calls run through NCIC Inmate Communications. Set up and fund a prepaid account at account.ncic.com or by calling 1-800-943-2189." },
    { question: "How do I visit someone at Natrona County Jail?", answer: "All friend and family visits are remote video visits through NCIC. In-person non-contact visits may be approved case by case with special circumstances; contact Lt. Schumacker or Lt. Davison at 307-235-9521. Visitors must dress modestly." },
    { question: "What is the official name of Natrona County Jail?", answer: "The facility is officially known as the Natrona County Detention Center. It is operated by the Natrona County Sheriff's Office in Casper." },
    { question: "How do I mail a letter to someone at Natrona County Jail?", answer: "Send regular mail, except books, magazines, newspapers, legal mail, and medical mail, to: Inmate full name, Natrona County Detention Center, PO Box 591, Longview, Texas 75606. Mail is limited to 5 pages, front side only, one photo per mailing, and envelopes no larger than 8.5 by 11 inches. It is scanned, delivered electronically, then destroyed, so it will not be returned. Send books, magazines, newspapers, legal mail, and medical mail directly to the facility at 201 N David, Casper, WY 82601." },
    { question: "How do I find out if someone is at Natrona County Jail?", answer: "Contact the facility or the Natrona County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Natrona County Jail call me?", answer: "Yes. Inmates place outgoing calls through NCIC. Set up an NCIC account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Natrona County Jail?", answer: "Contact NCIC to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "Are in-person visits allowed at Natrona County Jail?", answer: "Generally no. All friend and family visits are remote video visits through NCIC. In-person non-contact visits may be approved case by case with special circumstances; contact Lt. Schumacker or Lt. Davison at 307-235-9521." },
    { question: "How do I schedule a video visit at Natrona County Jail?", answer: "Set up and fund an NCIC prepaid account at account.ncic.com or by calling 1-800-943-2189. Video visits cost 30 cents per minute." },
    { question: "How do I send money to someone at Natrona County Jail?", answer: "Deposit in person Sunday through Saturday, 8:00-11:00 a.m., 1:00-4:00 p.m., and after 6:00 p.m., or by mail. The Detention Center accepts cash, Western Union or MoneyGram money orders, and cashier's checks. Credit cards and personal checks are not accepted, and cash must not be sent through the mail. Mail a money order or cashier's check alone to: Inmate full name, C/O NCDC, 201 N David, 2nd Floor, Casper, WY 82601, with a return address." },
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
    "Albany County Jail, officially the Albany County Detention Center, is the county detention center in Laramie, Wyoming, operated by the Albany County Sheriff's Office. The facility is at 420 Ivinson Avenue, Laramie, WY 82070, and is open 24 hours a day, 7 days a week. Questions can go to the jail at (307) 755-3521.",
    "Phone calls and tablet services run through GettingOut, the ViaPath/Telmate brand. Money can be added to the inmate phone and tablet system three ways: on the GettingOut website at pay.gettingout.com, by calling 1-866-516-0115, or at the kiosk in the Detention Center lobby.",
    "Directory sources report that video visits also run through GettingOut, with on-site visits at the jail and remote visits from home or another location. The official county page names GettingOut for the phone and tablet system but does not name a video vendor, so confirm the current video visit setup with the facility before scheduling.",
    "Mail goes to Inmate Full Name and Inmate ID, Albany County Detention Center, 420 Ivinson Avenue, Laramie, WY 82070. Include the inmate's full name and ID on all mail.",
    "Money for the inmate phone and tablet system goes through GettingOut: pay.gettingout.com, 1-866-516-0115, or the lobby kiosk. The official county page does not describe a separate commissary or trust-account deposit method, and it does not name JailATM. Directory sources describe mailing a money order or cashier's check to the jail for inmate deposits; confirm the current deposit options with the facility before sending money.",
  ],

  address: "420 Ivinson Avenue, Laramie, WY 82070",
  phone: "307-755-3521",

  operatedBy: "Albany County Sheriff's Office",
    mailingAddress: "Inmate Full Name and Inmate ID, Albany County Detention Center, 420 Ivinson Avenue, Laramie, WY 82070.",
    visitingHours: "Visits are scheduled in advance. Visitors must be on the inmate's approved list and bring valid photo ID. The official county page publishes no visitation schedule; confirm the current visiting schedule with the facility before traveling.",
    commissary: "Money for the inmate phone and tablet system: pay.gettingout.com, 1-866-516-0115, or the lobby kiosk. The official county page names no separate commissary deposit method and does not name JailATM. Confirm current deposit options with the facility before sending money.",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
      notes: "Phone calls and tablet services go through GettingOut (ViaPath/Telmate), per the official county page. Video visits are reported by directory sources as GettingOut; the official page does not name a video vendor, so confirm before scheduling.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visits reported by directory sources as GettingOut; the official county page does not name a video vendor. Confirm the current video visit setup with the facility before scheduling." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GettingOut", notes: "Phone calls and tablet services go through GettingOut (ViaPath/Telmate), per the official county page. Add money at pay.gettingout.com, 1-866-516-0115, or the lobby kiosk." },
    moneyTransfer: { status: "limited", notes: "Money for the inmate phone and tablet system goes through GettingOut (pay.gettingout.com, 1-866-516-0115, lobby kiosk), per the official county page. No separate commissary deposit method is published; confirm with the facility before sending money." },
  },

  rules: [
    "Phone and tablet services run through GettingOut. Confirm the video visit setup with the facility, since the official page does not name a video vendor.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Albany County Jail in Wyoming?", answer: "Phone calls and tablet services go through GettingOut (ViaPath/Telmate), per the official county page. The video vendor is reported by directory sources as GettingOut, but the official page does not name a video vendor." },
    { question: "How do I visit someone at Albany County Jail in Wyoming?", answer: "Visitors must be approved. Bring valid photo ID and follow county visiting rules. The official county page publishes no visitation schedule; confirm the current visiting schedule with the facility before traveling." },
    { question: "What is the official name of Albany County Jail in Wyoming?", answer: "The facility is officially known as the Albany County Detention Center. It is operated by the Albany County Sheriff's Office in Laramie." },
    { question: "How do I mail a letter to someone at Albany County Jail in Wyoming?", answer: "Address the envelope with the inmate's full name and ID, Albany County Detention Center, 420 Ivinson Avenue, Laramie, WY 82070. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find out if someone is at Albany County Jail in Wyoming?", answer: "Contact the facility or the Albany County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Albany County Jail in Wyoming call me?", answer: "Yes. Inmates place outgoing calls through GettingOut. Set up a GettingOut account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Albany County Jail in Wyoming?", answer: "Contact GettingOut to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a visit at Albany County Jail in Wyoming?", answer: "Visits are scheduled in advance and require approved-visitor status. Contact the facility for the current scheduling process and visiting hours." },
    { question: "How do I send money to someone at Albany County Jail in Wyoming?", answer: "Add money to the inmate phone and tablet system three ways: pay.gettingout.com, 1-866-516-0115, or the kiosk in the Detention Center lobby. The official county page names no separate commissary deposit method and does not name JailATM. Confirm current deposit options with the facility before sending money." },
    { question: "How do I schedule a video visit at Albany County Jail in Wyoming?", answer: "Directory sources report video visits run through GettingOut, using the jail kiosk, a home computer, or the GettingOut app. The official county page names GettingOut for the phone and tablet system but does not name a video vendor, so confirm the current video visit setup with the facility at 307-755-3521 before scheduling." },
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
    mailingAddress: "Inmate Name and ID, Wyoming Honor Farm, 40 Honor Farm Road, Riverton, WY 82501.",
    visitingHours: "Visitors must complete a Wyoming DOC visitor application, mailed or faxed directly to the facility, and wait for approval. Visits are typically on weekends. Confirm the current visiting schedule with the facility before traveling.",
    fax: "(307) 856-2505",

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
    { question: "How do I mail a letter to someone at Wyoming Honor Farm?", answer: "Address the envelope with the inmate name and ID, Wyoming Honor Farm, 40 Honor Farm Road, Riverton, WY 82501. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find an inmate at Wyoming Honor Farm?", answer: "Use the Wyoming DOC offender locator, which searches by inmate number or by the first two letters of the last name. Have the person's full legal name ready." },
    { question: "Can an inmate at Wyoming Honor Farm call me?", answer: "Yes. Inmates place outgoing calls through ICSolutions. Set up an ICSolutions account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Wyoming Honor Farm?", answer: "Contact ICSolutions to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Wyoming Honor Farm?", answer: "Video visits run through ICSolutions. Create an ICSolutions account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I apply to visit Wyoming Honor Farm?", answer: "Visitor applications go directly to the facility by mail or fax, not to WDOC Central Office. Wait for approval before traveling, and confirm the current visiting schedule with the facility." },
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
    "Campbell County Detention Center is the detention center in Gillette, Wyoming, operated by the Campbell County Sheriff's Office. Detention officers and civilian staff maintain a safe and secure environment for housing inmates, and officers receive training through the Wyoming Law Enforcement Academy. Questions can go to the Detention Center at 307-687-6138.",
    "All communication services at the center run through NCIC Inmate Communications. Phone calls, video visits, and messaging all use NCIC. Set up and fund a prepaid account by calling 1-800-943-2189 or visiting ncic.com.",
    "Calls are billed per minute with no connection fees: 16 cents per minute for calls within the United States, 25 cents for Mexico and Canada, and 35 cents for all other international calls. Off-site video visits cost 30 cents per minute. Messages cost 25 cents each, picture and video messages cost 35 cents each, and GIFs cost 5 cents each. Rates do not include pass-through regulatory taxes.",
    "Visits run 8:00 to 10:00 a.m., 12:30 to 4:00 p.m., and 7:00 to 9:30 p.m., with an additional on-site-only window from 7:00 to 7:30 p.m. Schedule a visit by creating an account at ncic.com or in the app, choosing remote video or on-site visitation, picking a date and time, and submitting the request for approval. For an on-site visit, arrive with the reservation code emailed or texted plus valid photo ID. A maximum of two visitors are allowed in the visiting room at one time, excluding small children. All visits are recorded and may be monitored, and visitation may be canceled at the discretion of the Sheriff's Office.",
    "Paper mail changed in November 2023. All inmate mail must go to: Inmate Name, Inmate Number, Campbell County Detention Center, PO Box 591, Longview, Texas 75606. Mail sent there is processed, delivered electronically, and then destroyed, so it will not be returned or reimbursed. This includes pictures or anything else mailed to the processing facility. All personal incoming mail is opened and inspected for contraband. The Sheriff's Office points families to NCIC messaging as the quicker option for documents and photos, since messages and pictures arrive instantly.",
  ],

  operatedBy: "Campbell County Sheriff's Office",
    mailingAddress: "All inmate mail: Inmate Name, Inmate Number, Campbell County Detention Center, PO Box 591, Longview, TX 75606. Mail sent there is processed, delivered electronically, then destroyed and will not be returned.",
    visitingHours: "Visits: 8:00-10:00 a.m., 12:30-4:00 p.m., 7:00-9:30 p.m.; additional on-site-only window 7:00-7:30 p.m. Schedule at ncic.com or in the app and submit for approval. For an on-site visit, arrive with the reservation code plus valid photo ID. Maximum two visitors in the visiting room at one time, excluding small children. All visits are recorded and may be monitored. Visitation may be canceled at the discretion of the Sheriff's Office.",

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
      notes: "NCIC provides phone, video visitation, and messaging, per the county visitation policy page. Account setup at ncic.com or 1-800-943-2189.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Electronic messaging through NCIC. Messages 25 cents each, picture and video messages 35 cents each, GIFs 5 cents each, per the county visitation policy page." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC. Off-site video visits $0.30 per minute. Schedule at ncic.com or in the app and submit for approval." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through NCIC Inmate Communications, per the county visitation policy page. Per-minute billing, no connection fees: 16 cents US, 25 cents Mexico/Canada, 35 cents other international." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "All communication services run through NCIC Inmate Communications. Set up an account at ncic.com or 1-800-943-2189.",
    "All inmate mail goes to PO Box 591, Longview, TX; mail sent there is processed, delivered electronically, then destroyed and will not be returned.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the county dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Campbell County Detention Center?", answer: "Phone calls run through NCIC Inmate Communications. Set up and fund a prepaid account by calling 1-800-943-2189 or visiting ncic.com. Calls are billed per minute with no connection fees: 16 cents US, 25 cents Mexico/Canada, 35 cents other international." },
    { question: "How do I visit someone at Campbell County Detention Center?", answer: "Visits run 8:00-10:00 a.m., 12:30-4:00 p.m., and 7:00-9:30 p.m., with an additional on-site-only window from 7:00-7:30 p.m. Schedule at ncic.com or in the app and submit the request for approval. For an on-site visit, arrive with the reservation code plus valid photo ID. A maximum of two visitors are allowed in the visiting room at one time, excluding small children. All visits are recorded and may be monitored." },
        { question: "How do I mail a letter to someone at Campbell County Detention Center?", answer: "Send all inmate mail to: Inmate Name, Inmate Number, Campbell County Detention Center, PO Box 591, Longview, Texas 75606. Mail sent there is processed, delivered electronically, and then destroyed, so it will not be returned or reimbursed. This includes pictures. All personal incoming mail is opened and inspected for contraband." },
    { question: "How do I find out if someone is at Campbell County Detention Center?", answer: "Contact the facility or the Campbell County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Campbell County Detention Center call me?", answer: "Yes. Inmates place outgoing calls through NCIC. Set up an NCIC account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Campbell County Detention Center?", answer: "Contact NCIC to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Campbell County Detention Center?", answer: "Create an account at ncic.com or in the app, click Schedule Visit, choose remote video or on-site visitation, pick a date and time, and submit the request for approval. You will receive notification of approval or denial. For an on-site visit, arrive with the reservation code emailed or texted plus valid photo ID." },
    { question: "How much does a video visit cost at Campbell County Detention Center?", answer: "Off-site video visits cost 30 cents per minute. Messages cost 25 cents each, picture and video messages cost 35 cents each, and GIFs cost 5 cents each. Rates do not include pass-through regulatory taxes." },
    { question: "How do I send money to someone at Campbell County Detention Center?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with the facility before sending money." },
  ],

  relatedFacilitySlugs: ["wyoming-state-penitentiary", "wyoming-medium-correctional-institution", "laramie-county-detention-center"],
},
}
