import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS, Batch 5 (25 facilities, Phase 2 expansion)
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH5: Record<string, FacilityDetail> = {

"santa-rita-jail": {
  id: "f-198",
  name: "Santa Rita Jail",
  slug: "santa-rita-jail",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Alameda County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Santa Rita Jail: GTL Phone and Messaging Guide",
  seoDescription: "How to contact someone at Santa Rita Jail in Dublin, CA. GTL (ViaPath) for phone calls, video visits, and messaging. Alameda County's largest jail.",

  description:
    "Santa Rita Jail communication guide. GTL (ViaPath) phone, video visit, and messaging info for families of people housed at Alameda County's Dublin jail.",

  overview: [
    "Santa Rita Jail is the main detention facility of the Alameda County Sheriff's Office, located in Dublin in the eastern part of the county. It is one of the largest jails in California, and it houses pretrial detainees as well as sentenced inmates from across Alameda County, including people booked through Oakland, Berkeley, and the surrounding cities.",
    "All inmate telephone service at Santa Rita, including service-enabled tablets, is provided by Global Tel Link (GTL), now doing business as ViaPath Technologies, under contract with the Alameda County Sheriff's Office. Phone calls, remote video visits, and electronic messaging all run through the GTL/GettingOut platform. Families set up an account, select Santa Rita Jail, add their inmate as a contact, and fund the account for calls, video sessions, and messages.",
    "Because Santa Rita is such a large facility, it is worth confirming your loved one's exact housing location before setting up accounts, since call windows and tablet access can vary by unit. Video visitation is a service provided by ViaPath, so any technical problems with a scheduled visit go through the vendor's customer service rather than the Sheriff's Office. All communications are subject to monitoring under jail policy.",
  ],

  address: "5325 Broder Boulevard, Dublin, CA",
  visitingHours: "All visits by appointment only. Book up to three days ahead; no same-day appointments. In-person visiting times depend on the housing unit.",
  mailingAddress: "Personal mail goes to the Pigeonly Corrections processing center, not the jail. See the Sheriff's mail notice on alamedasheriff.gov for the current processing-center address. Legal mail goes directly to: Santa Rita Jail, 5325 Broder Blvd., Dublin, CA 94568. Include the inmate full name and PFN on everything.",
  operatedBy: "Alameda County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GTL (ViaPath) provides the inmate telephone system and service-enabled tablets at Santa Rita under the Alameda County Sheriff's contract. Calls, video visits, messaging, and photos run through the GTL/GettingOut platform.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Electronic messaging through the GettingOut/GTL platform; family accounts must be funded to respond to messages." },
    video: { status: "available", provider: "GTL", notes: "Remote video visitation via the GettingOut/GTL platform, scheduled online in advance. Technical support goes through ViaPath." },
    photos: { status: "available", provider: "GTL", notes: "Photos can be exchanged through the GettingOut/GTL messaging platform, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated outgoing calls through the GTL phone system. Create a funded account before the first call." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the Sheriff's communication pages. Check the Alameda County Sheriff's inmate information page before sending funds." },
  },

  rules: [
    "Set up and fund your GTL/GettingOut account before your loved one tries to call, so the first call connects without delay.",
    "Select Santa Rita Jail (not the Oakland Dyer facility) when you add the facility to your account.",
    "Schedule remote video visits in advance through the GettingOut platform; send technical issues to ViaPath support, not the jail.",
    "All calls, messages, and video visits are recorded and monitored under Alameda County Sheriff's Office policy.",
    "Confirm your loved one's housing unit, since schedules for phones and tablet access can vary across this large facility.",
  ],

  faq: [
    { question: "Which company handles phone calls at Santa Rita Jail?", answer: "Global Tel Link (GTL), operating as ViaPath Technologies, provides the inmate telephone system under contract with the Alameda County Sheriff's Office. Create an account on the GTL/ConnectNetwork site and add funds before the first call." },
    { question: "How do I schedule a video visit at Santa Rita Jail?", answer: "Video visits are scheduled through the GettingOut/GTL platform on a computer or the GettingOut mobile app. Select Santa Rita Jail, add your inmate as a contact, and book a slot in advance. Video visitation is a vendor service provided by ViaPath." },
    { question: "Can I exchange messages and photos with an inmate at Santa Rita Jail?", answer: "Yes. Electronic messaging and photo sharing are available through the GettingOut/GTL platform on the facility tablets. Family and friends need a funded account to send and reply to messages." },
    { question: "Why can't my call go through at Santa Rita Jail?", answer: "Common causes are an unfunded account, a collect-call block from your phone carrier, or the inmate calling outside allowed unit hours. Check your GTL account balance and confirm the inmate's housing unit schedule." },
    { question: "How do I send money to someone at Santa Rita Jail?", answer: "Deposit options are not published on the Sheriff's communication pages. Check the Alameda County Sheriff's inmate information page for the current deposit method before sending funds." },
  ],

  relatedFacilitySlugs: ["los-angeles-county-mens-central-jail", "san-diego-central-jail", "james-a-musick-facility"],
},

"orange-county-central-mens-jail": {
  id: "f-199",
  name: "Orange County Central Men's Jail",
  slug: "orange-county-central-mens-jail",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Orange County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Orange County Central Men's Jail: GTL Phone Guide",
  seoDescription: "How to contact someone at the Orange County Central Men's Jail in Santa Ana. ViaPath (GTL) for phone calls and video visits. Set up your account first.",

  description:
    "Orange County Central Men's Jail communication guide. ViaPath (GTL) phone and video visit info for families of people held at the Santa Ana Central Jail Complex.",

  overview: [
    "The Orange County Central Men's Jail is part of the Central Jail Complex in Santa Ana, operated by the Orange County Sheriff's Department. It houses adult male inmates alongside the Central Women's Jail and the Intake Release Center, making it one of the busiest intake and housing hubs in Southern California.",
    "The inmate phone call and video visitation system is not owned or operated by the OC Sheriff's Department. ViaPath Technologies (Global Tel Link, or GTL), an outside vendor, is contracted to provide these services. Families create a ViaPath account, and calls are inmate-initiated: your loved one calls you, you cannot call in. Video visits are also scheduled through the vendor system.",
    "Public visiting at the Central Jails is by appointment only, Friday through Monday, and must be scheduled at least 24 hours in advance through the central scheduling number. Because the complex includes several separate jail buildings, confirm which facility your loved one is housed in before setting up any communication account.",
  ],

  address: "550 N. Flower Street, Santa Ana, CA 92702",

  operatedBy: "Orange County Sheriff's Department",
  visitingHours: "Central Men's and Women's Jails: Friday to Monday, 8:00 AM to 4:00 PM. By appointment only, no walk-ups. Limited to four visits per inmate per week, one per day. Certain hours restricted by housing location. Schedule at 714-647-4543.",

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
      notes: "ViaPath Technologies (GTL) is contracted by the OC Sheriff's Department to provide the inmate phone call and video visitation system.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for the Central Men's Jail. Check the OC Sheriff's inmate communication page for current options." },
    video: { status: "available", provider: "GTL", notes: "Video visits through the ViaPath (GTL) system, scheduled in advance. All video visits are monitored and recorded." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed for this facility. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls through ViaPath (GTL). Set up and fund an account before the first call; all calls are monitored and recorded." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the Sheriff's communication page. Check the OC Sheriff's inmate information pages before sending funds." },
  },

  rules: [
    "Create and fund a ViaPath (GTL) account before your loved one calls, so the first call connects.",
    "You cannot call an inmate. All phone calls and video visits are initiated from inside the jail.",
    "Public visits are by appointment only, Friday to Monday, scheduled at least 24 hours in advance.",
    "Confirm which Central Jail Complex building your loved one is in before setting up accounts.",
    "All phone calls and video visits are subject to monitoring and recording, except approved attorney-client calls.",
  ],

  faq: [
    { question: "Which company handles phones at the Orange County Central Men's Jail?", answer: "ViaPath Technologies, also known as Global Tel Link (GTL), is contracted by the OC Sheriff's Department for the inmate phone call and video visitation system. Set up an account with ViaPath before the first call." },
    { question: "Can I call an inmate at the Central Men's Jail?", answer: "No. Inmates cannot receive incoming calls. They call you through the ViaPath (GTL) phone system, so keep your account funded and your number approved." },
    { question: "How do video visits work at the Central Men's Jail?", answer: "Video visits run through the ViaPath (GTL) system and are scheduled in advance. All video visits are monitored and recorded, and attorney-client private video visits are not available." },
    { question: "How do I schedule an in-person visit?", answer: "Public visiting is by appointment only, Friday through Monday, with appointments made at least 24 hours in advance by calling the central scheduling number. Visits are limited to four per inmate per week, one per day." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not listed on the Sheriff's inmate communication page. Check the OC Sheriff's inmate information pages for the current approved deposit method." },
  ],

  relatedFacilitySlugs: ["james-a-musick-facility", "theo-lacy-facility", "las-colinas-womens-detention-facility"],
},

"robert-presley-detention-center": {
  id: "f-200",
  name: "Robert Presley Detention Center",
  slug: "robert-presley-detention-center",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Riverside County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Robert Presley Detention Center: Securus Phone Guide",
  seoDescription: "How to contact someone at Robert Presley Detention Center in Riverside, CA. Securus for phone calls. Account setup, rates, and visiting rules.",

  description:
    "Robert Presley Detention Center communication guide. Securus phone setup for families of people held at Riverside County's downtown Riverside jail.",

  overview: [
    "The Robert Presley Detention Center is a Riverside County Sheriff's Department jail located in downtown Riverside. It primarily houses pretrial detainees booked through the western part of the county, along with sentenced inmates, and it is one of five jails in the Riverside County corrections system.",
    "Phone calls from the Robert Presley Detention Center run through Securus Technologies. Families enroll in a Securus account, choose the facility, and pick an account type such as AdvanceConnect, Securus Debit, or Direct Bill. Inmates cannot receive incoming calls, and every call is recorded and stored, so it is best not to discuss pending case details on a jail call.",
    "Video visitation at Riverside County jails is managed through the county's own visitation system, which is separate from the Securus phone service. All visitors, including remote video visitors, must be on the inmate's approved visitation list, and scheduling involves several steps, so plan ahead rather than waiting until the last minute.",
  ],

  address: "4000 Orange Street, Riverside, CA 92501",
  phone: "951-955-4500",

  operatedBy: "Riverside County Sheriff's Department",

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
      notes: "Securus Technologies handles the inmate phone system at the Robert Presley Detention Center. Enroll at securus.net and choose AdvanceConnect, Securus Debit, or Direct Bill.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check the Riverside County Sheriff's corrections pages for current options." },
    video: { status: "limited", provider: undefined, notes: "Video visitation is available but runs on the county's own visitation system, not a standard vendor platform. Visitors must be on the approved list and schedule in advance." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard Riverside County mail rules." },
    phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls through Securus. All calls are recorded and stored." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the county's communication pages. Check the Riverside County Sheriff's corrections pages before sending funds." },
  },

  rules: [
    "Enroll in a Securus account and choose the right account type (AdvanceConnect, Debit, or Direct Bill) before your loved one calls.",
    "Make sure you are on the inmate's approved phone and visitation lists before trying to connect.",
    "Do not discuss pending case details on jail calls. All calls are recorded and stored.",
    "Video visits require approved-visitor status and advance scheduling through the county system.",
    "Inmates cannot receive incoming calls under any circumstances.",
  ],

  faq: [
    { question: "Which company handles phone calls at Robert Presley Detention Center?", answer: "Securus Technologies. Enroll in an account, choose the Robert Presley Detention Center, and select AdvanceConnect, Securus Debit, or Direct Bill. Customer service is available at 972-734-1111 or 800-844-6591." },
    { question: "How do video visits work at Robert Presley Detention Center?", answer: "Video visitation runs on Riverside County's own visitation system. You must be on the inmate's approved visitation list, and visits must be scheduled in advance through the county's scheduling process." },
    { question: "Can an inmate text me from the Robert Presley Detention Center?", answer: "No. Inmates cannot text from the facility phones. Messaging availability through kiosks or tablets is not confirmed, so check the Riverside County Sheriff's corrections pages for current options." },
    { question: "How much do calls cost?", answer: "Rates are subject to change and are published by Securus. AdvanceConnect and inmate debit calls have been listed around $0.21 per minute, but confirm current rates when you enroll." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed on the county's communication pages. Check the Riverside County Sheriff's corrections pages or the commissary information for the current approved deposit method." },
      {
        question: "How do I find or search for an inmate at Robert Presley Detention Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Riverside County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Robert Presley Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Robert Presley Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Robert Presley Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Robert Presley Detention Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["san-diego-central-jail", "los-angeles-county-mens-central-jail"],
},

"west-valley-detention-center": {
  id: "f-201",
  name: "West Valley Detention Center",
  slug: "west-valley-detention-center",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "San Bernardino County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "West Valley Detention Center: GTL Phone and Video Guide",
  seoDescription: "How to contact someone at West Valley Detention Center in Rancho Cucamonga. GTL for phone calls and video visits. ConnectNetwork accounts.",

  description:
    "West Valley Detention Center communication guide. GTL phone and VisitMe video visit info for families of people held at San Bernardino County's Rancho Cucamonga jail.",

  overview: [
    "The West Valley Detention Center in Rancho Cucamonga is operated by the San Bernardino County Sheriff's Department and serves as the main booking facility for the western portion of the county. It is a large maximum-security style facility housing pretrial detainees and sentenced inmates.",
    "Phone calls and video visitation at West Valley run through Global Tel Link (GTL). Families set up accounts through ConnectNetwork to receive calls and schedule video visits, which are offered through the GTL VisitMe system. Inmates can make collect calls or use prepaid phone accounts, and all calls are recorded and monitored.",
    "Deposits for inmate accounts can be made online through ConnectNetwork or JailATM, at the lobby kiosk, or by mail with a money order. Because visitation is conducted largely through video, schedule appointments through the GTL VisitMe website and confirm the schedule with the facility, since hours vary by housing unit and classification.",
  ],

  address: "9500 Etiwanda Ave, Rancho Cucamonga, CA 91739",
  phone: "909-708-8371",
  mailingAddress: "Inmate name, booking number, West Valley Detention Center, 9500 Etiwanda Ave, Rancho Cucamonga, CA 91739. Mail must include sender name, return address, inmate name, booking number, facility address on plain envelope",
  rosterUrl: "https://wp.sbcounty.gov/sheriff/corrections/inmate-locator/",
  commissary: "Inmates order hygiene, snacks, small items via commissary paid from inmate account. Family can order via iCare. Deposits via lobby kiosk 24/7, cash/credit/debit, no personal checks or money orders",
  bailInfo: "Bail bond or cash bail accepted 24 hours a day at any jail facility. Department accepts cash, checks, money orders, property bonds, bail bonds. Bail info call (909) 350-2476",
  operatedBy: "San Bernardino County Sheriff's Department",

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
      notes: "GTL provides phone service and video visitation (GTL VisitMe). Accounts are managed through ConnectNetwork, which also handles deposits.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check the San Bernardino County Sheriff's corrections page for current options." },
    video: { status: "available", provider: "GTL", notes: "Video visitation through the GTL VisitMe system. Schedule appointments online in advance; hours vary by housing unit." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated collect or prepaid calls through GTL. Set up a ConnectNetwork account before the first call." },
    moneyTransfer: { status: "available", provider: "GTL", notes: "Deposits through ConnectNetwork or JailATM online, the lobby kiosk, or by money order by mail." },
  },

  rules: [
    "Set up a ConnectNetwork account before your loved one calls so the first call connects.",
    "Schedule video visits through the GTL VisitMe website and confirm the housing-unit schedule in advance.",
    "Inmates cannot receive incoming calls. All outgoing calls are recorded and monitored.",
    "Add funds through ConnectNetwork, JailATM, the lobby kiosk, or by mailed money order only.",
    "Visitors must arrive early for on-site visits and follow the facility dress code and search rules.",
  ],

  faq: [
    { question: "Which company handles phones at West Valley Detention Center?", answer: "Global Tel Link (GTL). Families set up accounts through ConnectNetwork to receive calls and fund prepaid calling. Inmates make collect calls or use prepaid phone accounts." },
    { question: "How do video visits work at West Valley Detention Center?", answer: "Video visitation runs through the GTL VisitMe system. Schedule appointments online in advance through the VisitMe website. Hours vary by the inmate's housing unit and classification." },
    { question: "How do I send money to an inmate at West Valley Detention Center?", answer: "Deposits can be made online through ConnectNetwork or JailATM, at the kiosk in the facility lobby, by phone, or by mailing a money order with the inmate's name and booking number." },
    { question: "Can I call an inmate at West Valley Detention Center?", answer: "No. Inmates cannot receive incoming calls. They can make outgoing collect or prepaid calls, and they get one free outgoing call at booking." },
    { question: "Can inmates message me from West Valley Detention Center?", answer: "Electronic messaging is not confirmed for this facility. Phone calls, video visits, and mail are the established contact options. Check the Sheriff's corrections page for updates." },
      {
        question: "How do I find or search for an inmate at West Valley Detention Center?",
        answer: "Use the official inmate search at https://wp.sbcounty.gov/sheriff/corrections/inmate-locator/. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at West Valley Detention Center?",
        answer: "Address mail as follows: Inmate name, booking number, West Valley Detention Center, 9500 Etiwanda Ave, Rancho Cucamonga, CA 91739. Mail must include sender name, return address, inmate name, booking number, facility address on plain envelope. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "Can I receive incoming calls from an inmate at West Valley Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at West Valley Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at West Valley Detention Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["los-angeles-county-mens-central-jail", "san-diego-central-jail"],
},

"elmwood-correctional-facility": {
  id: "f-202",
  name: "Elmwood Correctional Facility",
  slug: "elmwood-correctional-facility",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Santa Clara County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Elmwood Correctional Facility: GTL Phone and Video Guide",
  seoDescription: "How to contact someone at Elmwood Correctional Facility in Milpitas, CA. GTL (ViaPath) tablets for voice and video calls. Sheriff's visit rules.",

  description:
    "Elmwood Correctional Facility communication guide. GTL (ViaPath) tablet calls and visitation info for families of people held at Santa Clara County's Milpitas complex.",

  overview: [
    "The Elmwood Correctional Complex in Milpitas is operated by the Santa Clara County Sheriff's Office and includes both men's and women's facilities. It is the county's larger jail complex, housing pretrial detainees and sentenced inmates, while the Main Jail in San Jose handles intake and higher-security housing.",
    "Tablet devices at Elmwood, and at the Main Jail, are provided by Global Tel Link Corporation doing business as ViaPath Technologies, under the county's tablet services program. The tablets allow incarcerated persons to place voice and video calls, access educational materials and entertainment, and submit grievances and commissary orders electronically. All tablet activity is monitored and recorded.",
    "Social visiting at Elmwood follows strict rules: visits can be terminated for disruptive behavior, there is no expectation of privacy, and cell phones and smart watches are not allowed inside. Families planning a visit should review the current visiting rules on the Sheriff's website and contact the facility with questions before traveling.",
  ],

  address: "701 S. Abel St, Milpitas, CA",
  phone: "(408) 808-4400",
    mailingAddress: "Inmate name, PFN/booking number, Elmwood Complex, 701 South Abel Street, Milpitas, CA 95035. Commissary mail: Inmate Services, 701 S. Abel Street, Milpitas, CA 95035",
    visitingHours: "M2, M3, M4, M5, M8, w2d, w2e, w2f: Mon-Thu 7:00 p.m. to 10:30 p.m. slots, Fri 8:00 p.m. to 10:30 p.m. Minimum camp: Sat-Sun 8:00 a.m. to 10:30 a.m. and 8:00 p.m. to 10:30 p.m. Up to two 30-minute visits per week, one per day",
    commissary: "Order via iCare www.icaregifts.com. Cashier check/money order payable to Santa Clara County Department of Correction, include inmate name plus PFN and sender contact, mail to Inmate Services address above",
  operatedBy: "Santa Clara County Sheriff's Office",

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
      notes: "Global Tel Link (ViaPath Technologies) provides the tablet devices used for voice and video calls at Elmwood under the Santa Clara County Sheriff's tablet program.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for Elmwood. Check the Santa Clara County Sheriff's custody pages for current options." },
    video: { status: "available", provider: "GTL", notes: "Video calls through the GTL/ViaPath tablets issued to incarcerated persons. All tablet activity is monitored and recorded." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Voice calls through the GTL/ViaPath tablet platform. All calls are monitored and recorded." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the Sheriff's communication pages. Check the Santa Clara County Sheriff's custody pages before sending funds." },
  },

  rules: [
    "Voice and video calls run through the GTL/ViaPath tablets, not a separate phone vendor account.",
    "All tablet activity, including calls, is monitored and recorded by the Sheriff's Office.",
    "Review the current Elmwood visiting rules before traveling. Disruptive visitors can lose visiting privileges.",
    "No cell phones, smart watches, hats, or money are allowed inside the Elmwood Complex.",
    "Confirm whether your loved one is at Elmwood or the Main Jail in San Jose before setting up contact.",
  ],

  faq: [
    { question: "Which company provides phone service at Elmwood?", answer: "Global Tel Link, doing business as ViaPath Technologies, provides the tablet devices used for voice and video calls at Elmwood and the Main Jail under the Santa Clara County Sheriff's tablet program." },
    { question: "Can I visit someone at Elmwood in person?", answer: "Yes, but visiting rules are strict. Visits can be cancelled without notice, disruptive visitors lose privileges, and cell phones, smart watches, hats, and money are prohibited inside the facility. Check the Sheriff's visiting pages for current schedules." },
    { question: "Are Elmwood calls and video visits recorded?", answer: "Yes. The Sheriff's tablet monitoring policy states that all tablet activity, including voice and video calls, is managed, monitored, and recorded for safety and security." },
    { question: "Can I message an inmate at Elmwood?", answer: "Electronic messaging is not confirmed for Elmwood. The confirmed remote contact options are voice and video calls through the GTL/ViaPath tablets. Check the Sheriff's custody pages for updates." },
    { question: "How do I send money to an inmate at Elmwood?", answer: "Deposit options are not published on the Sheriff's communication pages. Check the Santa Clara County Sheriff's custody pages for the current approved deposit method." },
      {
        question: "How do I find or search for an inmate at Elmwood Correctional Facility?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Santa Clara County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Elmwood Correctional Facility?",
        answer: "Address mail as follows: Inmate name, PFN/booking number, Elmwood Complex, 701 South Abel Street, Milpitas, CA 95035. Commissary mail: Inmate Services, 701 S. Abel Street, Milpitas, CA 95035. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "What are the visiting hours at Elmwood Correctional Facility?",
        answer: "M2, M3, M4, M5, M8, w2d, w2e, w2f: Mon-Thu 7:00 p.m. to 10:30 p.m. slots, Fri 8:00 p.m. to 10:30 p.m. Minimum camp: Sat-Sun 8:00 a.m. to 10:30 a.m. and 8:00 p.m. to 10:30 p.m. Up to two 30-minute visits per week, one per day",
      },
      {
        question: "Can I receive incoming calls from an inmate at Elmwood Correctional Facility?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Elmwood Correctional Facility?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["san-diego-central-jail", "theo-lacy-facility", "james-a-musick-facility"],
},

"sacramento-county-main-jail": {
  id: "f-203",
  name: "Sacramento County Main Jail",
  slug: "sacramento-county-main-jail",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Sacramento County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Sacramento County Main Jail: Securus Phone Guide",
  seoDescription: "How to contact someone at Sacramento County Main Jail. Securus for phone calls, digital mail, and email. Visiting hours and account setup.",

  description:
    "Sacramento County Main Jail communication guide. Securus phone, digital mail, and email info for families of people held at the downtown Sacramento jail.",

  overview: [
    "The Sacramento County Main Jail in downtown Sacramento is operated by the Sacramento County Sheriff's Office and is the county's primary pretrial detention facility, with the Rio Cosumnes Correctional Center handling sentenced and lower-security housing. It processes a large daily intake of arrestees from across the county.",
    "The incarcerated persons telephone system at the Main Jail is provided by Securus Technologies. Families create a Securus account or call 1-800-844-6591 to set up calling. The jail also runs an email system: family members can email an incarcerated person through the inmate information system, and emails are printed and delivered, usually the next day. Incarcerated persons cannot reply electronically.",
    "Mail to the Main Jail goes through the Securus Digital Mail Center, not directly to the jail building, with legal and confidential mail still sent to the housing location. Social visits run on a schedule of two 45-minute visits per week per inmate, Sunday through Saturday, and visitors must present valid identification.",
  ],

  address: "651 I Street, Sacramento, CA 95814",
  phone: "916-874-6752",

  operatedBy: "Sacramento County Sheriff's Office",
  rosterUrl: "https://www.sacsheriff.com/InmateInformation/",
  visitingHours: "Two 45-minute social visits per week, Sunday through Saturday. Morning and afternoon visiting hours: 7:30, 8:30, 9:30, 11:30, 12:30, 1:30, and 2:30. Evening visiting hours: 4:30, 5:30, 7:30, 8:30, and 9:30. Last visit registered no later than 9:30 PM. First come, first served.",

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
      notes: "Securus Technologies provides the inmate telephone system. The jail also uses the Securus Digital Mail Center for processing general mail.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "The jail offers a one-way email system: family emails are printed and delivered, usually the next day. Two-way electronic messaging is not available." },
    video: { status: "limited", provider: undefined, notes: "Remote video visitation is not confirmed. In-person social visits run two 45-minute visits per week per inmate." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical mail, including photos, is processed through the Securus Digital Mail Center." },
    phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls through Securus. Create an account or call 1-800-844-6591 to set up calling." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the Sheriff's inmate information page. Check the page before sending funds." },
  },

  rules: [
    "Set up a Securus account before your loved one calls. Inmates cannot receive incoming calls.",
    "Use the jail's email system for one-way messages. Emails are printed and delivered, usually the next day.",
    "Send general mail through the Securus Digital Mail Center, not directly to the jail. Legal mail still goes to the housing location.",
    "Social visits are limited to two 45-minute visits per week per inmate, with valid ID required.",
    "Do not solicit business through the inmate email system. It is prohibited and can be shut off.",
  ],

  faq: [
    { question: "Which company handles phone calls at Sacramento County Main Jail?", answer: "Securus Technologies provides the inmate telephone system. Create an account with Securus or call 1-800-844-6591 to set up calling and accept calls from an incarcerated person." },
    { question: "Can I email someone at Sacramento County Main Jail?", answer: "Yes, one way. Look up the incarcerated person in the Sheriff's inmate information system and use the email link. Emails are printed and delivered, usually the next day. Incarcerated persons cannot reply electronically." },
    { question: "Where do I send mail to an inmate?", answer: "General mail is processed through the Securus Digital Mail Center and is not sent directly to the Main Jail. Legal and confidential mail is still sent directly to the incarcerated person at their housing location." },
    { question: "What are the visiting hours?", answer: "Each inmate is authorized two 45-minute social visits per week, Sunday through Saturday. Morning, afternoon, and evening slots are posted on the Sheriff's visitation page, and valid identification is required." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not listed on the Sheriff's inmate information page. Check the page or call the non-emergency line at 916-874-5115 for the current approved deposit method." },
  ],

  relatedFacilitySlugs: ["folsom-state-prison", "san-diego-central-jail", "james-a-musick-facility"],
},

"fresno-county-jail": {
  id: "f-204",
  name: "Fresno County Jail",
  slug: "fresno-county-jail",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Fresno County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Fresno County Jail: GTL Phone Guide",
  seoDescription: "How to contact someone at Fresno County Jail. GTL (ViaPath) for inmate phone calls since 2021. ConnectNetwork accounts and jail info number.",

  description:
    "Fresno County Jail communication guide. GTL (ViaPath) phone service and account info for families of people held at the downtown Fresno jail.",

  overview: [
    "The Fresno County Jail, centered on the Main Detention Facility in downtown Fresno, is operated by the Fresno County Sheriff's Office and houses pretrial detainees and sentenced inmates for the county. The jail complex includes the main facility and the north and south annex jails.",
    "Since April 5, 2021, Global Tel Link (GTL), doing business as ViaPath, has been the provider for incarcerated person phone services at the Fresno County Jail, replacing Legacy Inmate Communications. Families add money to a GTL/ViaPath account through ConnectNetwork online or by calling 1-800-483-8314. The Sheriff's Office warns not to place money with Legacy, since it is no longer a telephone provider for the jail.",
    "Under California law, newly booked arrestees get at least three free local calls at booking: one to an attorney, one to a bail bond agent, and one to a relative or other contact. After booking, phones in housing units are generally available from 8:00 am to 9:45 pm, and all calls are subject to recording and monitoring.",
  ],

  address: "1225 \"M\" Street, Fresno, CA 93721",
  phone: "(559) 475-9491",
    mailingAddress: "Incarcerated person Name, Booking Number / Jail Identification Number (JID), Fresno County Jail - 1900, PO Box 96777, Las Vegas, NV 89193. Effective Sep 15, 2025, non-privileged mail to Pigeonly processing center",
    commissary: "Deposit via TouchPay kiosks in Jail Lobbies, online www.touchpaydirect.com, phone 866-232-1899",
  operatedBy: "Fresno County Sheriff's Office",

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
      notes: "GTL (ViaPath) has provided inmate phone services at the Fresno County Jail since April 5, 2021. Accounts and deposits are handled through ConnectNetwork.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check the Fresno County Sheriff's jail pages for current options." },
    video: { status: "limited", provider: undefined, notes: "Video visitation is not confirmed on the Sheriff's telephone and jail pages. Check the Sheriff's visitation information before planning." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls through GTL/ViaPath. Fund an account through ConnectNetwork or 1-800-483-8314. Do not fund Legacy Inmate Communications." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Commissary deposit options are not confirmed on the Sheriff's telephone pages. Check the Sheriff's jail pages before sending funds." },
  },

  rules: [
    "Fund a GTL/ViaPath account through ConnectNetwork. Do not place money with Legacy Inmate Communications.",
    "Call the jail information office at (559) 475-9491 for general inmate questions.",
    "Newly booked arrestees get three free local calls at booking: attorney, bail agent, and a personal contact.",
    "Housing-unit phones are generally available 8:00 am to 9:45 pm. All calls are recorded and monitored.",
    "Inmates cannot receive incoming calls. They call you once your account is funded.",
  ],

  faq: [
    { question: "Which company handles phone calls at Fresno County Jail?", answer: "Global Tel Link (GTL), doing business as ViaPath, has been the inmate phone provider since April 5, 2021. Add money through ConnectNetwork online or by calling 1-800-483-8314." },
    { question: "I used to fund calls through Legacy. Is that still right?", answer: "No. The Sheriff's Office states that Legacy Inmate Communications is no longer a telephone provider for Fresno County Jail inmates, and you should not place money with Legacy." },
    { question: "When can inmates make phone calls?", answer: "After booking, inmates assigned to housing units generally have phone access from 8:00 am to 9:45 pm, except during searches, emergencies, lockdowns, or disciplinary restrictions. All calls are recorded and monitored." },
    { question: "Can I message an inmate at Fresno County Jail?", answer: "Electronic messaging is not confirmed on the Sheriff's jail pages. Phone calls and mail are the established contact options." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed on the Sheriff's telephone pages. Check the Fresno County Sheriff's jail pages for the current approved commissary deposit method." },
      {
        question: "How do I find or search for an inmate at Fresno County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Fresno County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Fresno County Jail?",
        answer: "Address mail as follows: Incarcerated person Name, Booking Number / Jail Identification Number (JID), Fresno County Jail - 1900, PO Box 96777, Las Vegas, NV 89193. Effective Sep 15, 2025, non-privileged mail to Pigeonly processing center. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Fresno County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Fresno County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Fresno County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["san-diego-central-jail", "corcoran-state-prison", "rj-donovan-correctional-facility"],
},

"san-francisco-county-jail": {
  id: "f-205",
  name: "San Francisco County Jail",
  slug: "san-francisco-county-jail",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "San Francisco County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "San Francisco County Jail: GTL Phone and Video Guide",
  seoDescription: "How to contact someone at San Francisco County Jail. GTL (ViaPath) for free phone and video calls. San Francisco's free jail communications model.",

  description:
    "San Francisco County Jail communication guide. GTL (ViaPath) free phone and video call info for families of people held in the San Francisco jails.",

  overview: [
    "The San Francisco County jails, operated by the San Francisco Sheriff's Department, include intake and housing facilities in the city and in San Bruno. County Jail 1 and County Jail 2 are at 425 7th Street in San Francisco, and County Jail 3 is at 1 Moreland Drive in San Bruno. The department has pursued a free-communications model: rather than charging families per call, the city pays the vendor a fixed rate so incarcerated people and their families are not charged for calls.",
    "Global Tel Link (GTL), now ViaPath Technologies, was selected as the jail phone service provider under the city's contract, which also allows for free video calls. Families still set up accounts with the vendor for calling, but the per-call cost burden that existed before the contract is gone.",
    "San Francisco has also moved toward free tablet services for incarcerated people, with the Sheriff's Office running a request-for-proposals process for a free tablet program. Because the communications setup here differs from most California jails, check the Sheriff's current pages before assuming any fee schedule you see on a vendor site applies.",
  ],

  operatedBy: "San Francisco Sheriff's Department",

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
      notes: "GTL (ViaPath) provides the jail phone service under the city's contract, with free phone and video calls for incarcerated people and families.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Two-way electronic messaging is not confirmed. The county has pursued a free tablet program, but the current messaging setup should be checked on the Sheriff's pages." },
    video: { status: "available", provider: "GTL", notes: "Free video calls under the city's GTL contract. Check the Sheriff's pages for scheduling details." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Free phone calls under the city's GTL contract. Set up a vendor account so calls can connect." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the Sheriff's communication pages. Check the Sheriff's pages before sending funds." },
  },

  rules: [
    "Phone and video calls are free under the city's GTL contract, a different model from most California jails.",
    "Set up a vendor account with GTL so calls from your loved one can connect to your number.",
    "Inmates cannot receive incoming calls. All calls are initiated from inside the jail.",
    "Confirm the current tablet and messaging setup on the Sheriff's pages before relying on it.",
    "All communications are subject to the Sheriff's monitoring policies, except approved attorney communications.",
  ],

  faq: [
    { question: "Are phone calls free at San Francisco County Jail?", answer: "Yes. Under the city's contract with GTL (ViaPath), the city pays the vendor a fixed rate instead of charging families per call, and the contract also allows for free video calls." },
    { question: "Which company provides the phone service?", answer: "Global Tel Link (GTL), now ViaPath Technologies, was selected as the jail phone service provider. Families set up accounts with the vendor so calls can connect." },
    { question: "Can I video visit someone in San Francisco County Jail?", answer: "Free video calls are included under the city's GTL contract. Check the Sheriff's pages for the current scheduling process." },
    { question: "Can I message an inmate?", answer: "Two-way electronic messaging is not confirmed. The Sheriff's Office has pursued a free tablet program, but check the current Sheriff's pages for what messaging is actually available." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed on the Sheriff's communication pages. Check the San Francisco Sheriff's pages for the current approved deposit method." },
      {
        question: "How do I find or search for an inmate at San Francisco County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for San Francisco County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at San Francisco County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at San Francisco County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at San Francisco County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at San Francisco County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["san-diego-central-jail", "theo-lacy-facility"],
},

"pima-county-adult-detention-complex": {
  id: "f-206",
  name: "Pima County Adult Detention Complex",
  slug: "pima-county-adult-detention-complex",
  type: "county",
  stateSlug: "arizona",
  stateName: "Arizona",
  stateAbbr: "AZ",
  countySlug: null,
  countyName: "Pima County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Pima County Jail: GTL Phone, Video, and Messaging Guide",
  seoDescription: "How to contact someone at Pima County Adult Detention Complex in Tucson. GTL/GettingOut for phones, video visits, messaging, and photos.",

  description:
    "Pima County Adult Detention Complex communication guide. GTL/GettingOut phone, video visit, messaging, and photo info for families of people held at the Tucson jail.",

  overview: [
    "The Pima County Adult Detention Complex in Tucson is operated by the Pima County Sheriff's Department and provides detention services for law enforcement agencies across metropolitan Tucson and Pima County. It is one of the largest jails in Arizona.",
    "Global Tel Link (GTL) provides the technology platform for the jail, including tablets, phones, video visits, and electronic messaging. Families register on the GettingOut platform, select the Pima County facility, add the inmate as a contact, and fund the account. Messages are limited in length, and families can attach credits so the inmate can reply. Visits are scheduled online at the county's GTL VisitMe scheduling page, at least one day in advance.",
    "The tablets also carry education, entertainment, and programming content. Because the jail uses video visitation as its primary visit method, families should get comfortable with the GettingOut app and the online scheduling page before the first visit. All communications are monitored under jail policy.",
  ],

  address: "1270 W. Silverlake Road, Tucson, AZ 85713",
  phone: "(520) 351-8111",
  operatedBy: "Pima County Sheriff's Department",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GTL provides the phone, tablet, video visit, messaging, and photo platform at the Pima County jail through its GettingOut service. Video visits are scheduled at the county's GTL VisitMe page.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Secure messaging through GettingOut. Register, add the inmate, and fund the account. Messages have a character limit, and you can attach credits for replies." },
    video: { status: "available", provider: "GTL", notes: "Video visitation is the primary visit method. Schedule online at the county's GTL VisitMe page at least one day in advance. No same-day walk-in visits." },
    photos: { status: "available", provider: "GTL", notes: "Photos can be sent through the GettingOut messaging platform, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls through the GTL phone system. Set up and fund an account before the first call." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits can be made online, at the lobby kiosk, by phone, or by mailed money order, but the current vendor setup should be confirmed on the Sheriff's jail pages." },
  },

  rules: [
    "Register on GettingOut, select the Pima County facility, add your inmate, and fund the account before the first call or visit.",
    "Schedule video visits at least one day in advance on the county's GTL VisitMe page. Same-day walk-ins are not accepted.",
    "Keep messages within the character limit and attach reply credits if you want the inmate to respond.",
    "Call the jail visits hotline at (520) 351-8114 with scheduling questions.",
    "All communications are monitored under jail policy. Calls to attorneys and public defender offices are handled separately.",
  ],

  faq: [
    { question: "Which company handles communication at the Pima County jail?", answer: "Global Tel Link (GTL) provides phones, tablets, video visits, messaging, and photos through its GettingOut platform. Register at gettingout.com or through the GettingOut app." },
    { question: "How do video visits work at the Pima County Adult Detention Complex?", answer: "Video visitation is the primary visit method. Schedule online at the county's GTL VisitMe page at least one day in advance. Same-day walk-in visits are no longer accepted." },
    { question: "Can I send messages and photos to an inmate?", answer: "Yes. Secure messaging and photo sharing run through the GettingOut platform. Messages are limited to a set character count, and you can attach credits so the inmate can reply." },
    { question: "How do phone calls work?", answer: "Inmates place outgoing calls through the GTL phone system. Families register on GettingOut and fund the account before the first call." },
    { question: "How do I send money to an inmate?", answer: "Deposits can be made online, at the kiosk in the detention center lobby, by phone, or by mailing a money order. Confirm the current vendor and fee details on the Sheriff's jail pages before sending." },
    { question: "How do I find out if someone is in custody at the Pima County jail?", answer: "Use the Pima County Sheriff's jail roster to search by name. If the person does not appear, allow time after booking and try alternate spellings of the name." },
    { question: "Can I call an inmate at the Pima County jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "What do I do if calls from the Pima County jail stop coming through?", answer: "Check your GettingOut balance first, then confirm your number is still on the inmate's approved call list and that the account is in good standing. If the balance is fine, contact GTL support." },
    { question: "How do I block calls from the Pima County jail?", answer: "Ask GTL to block the number on the inmate's account, or block the number through your own phone carrier. You can also ask the jail to remove your number from the inmate's approved list." },
  ],

  relatedFacilitySlugs: ["maricopa-county-jail", "clark-county-detention-center", "bernalillo-county-metropolitan-detention-center"],
},

"washoe-county-detention-facility": {
  id: "f-207",
  name: "Washoe County Detention Facility",
  slug: "washoe-county-detention-facility",
  type: "county",
  stateSlug: "nevada",
  stateName: "Nevada",
  stateAbbr: "NV",
  countySlug: null,
  countyName: "Washoe County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Washoe County Jail: Phone, Video, and Messaging Guide",
  seoDescription: "How to contact someone at Washoe County Detention Facility in Reno. Smart Communications for phones, video visits, email, and tablets.",

  description:
    "Washoe County Detention Facility communication guide. Smart Communications phone, video visit, and messaging info for families of people held at the Reno jail.",

  overview: [
    "The Washoe County Detention Facility in Reno is operated by the Washoe County Sheriff's Office and is the main jail for the county, housing pretrial detainees and sentenced inmates from Reno, Sparks, and the surrounding area.",
    "The Sheriff's Office awarded its inmate communications contract to Smart Communications, which provides an integrated system covering video visitation, phones, email, tablets, and mail. Families create an account at smartinmate.com to fund prepaid collect calling, send emails, schedule video visits, and add money to the inmate's communications account. Inmates also receive one free 15-minute phone call per week, not usable for international calls.",
    "Because everything runs on one vendor platform, a single funded Smart Communications account covers calls, emails, visits, and entertainment. All calls are billed at a per-minute rate with no connection fees, three-way calls are prohibited, and incoming calls are not accepted except for voicemail messages to approved inmates.",
  ],

  address: "911 Parr Blvd, Reno, NV",
  phone: "775-328-3062",

  operatedBy: "Washoe County Sheriff's Office",
  visitingHours: "On-site video visiting is available in the public lobby, Monday through Friday, 8:00 AM to 9:30 PM. Create an account at smartinmate.com with a government-issued ID photo and a current face photo; the facility must approve the account before you can schedule. Visits can also be scheduled at on-site kiosks. You must be 18 or older to create an account.",
  providers: [
    {
      name: "Smart Communications",
      slug: "smartinmate",
      initial: "S",
      color: "bg-cyan-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Smart Communications provides the integrated visitation, phone, email, tablet, and mail system at Washoe County Detention Facility. Create an account at smartinmate.com.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Smart Communications", notes: "Email and messaging through Smart Communications at smartinmate.com. Fund the account to send messages." },
    video: { status: "available", provider: "Smart Communications", notes: "Video visitation through the Smart Communications platform. Create an account at smartinmate.com to schedule." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical mail is delivered digitally through tablets, so check the Sheriff's mail rules." },
    phone: { status: "available", provider: "Smart Communications", notes: "Inmate-initiated calls through Smart Communications. Fund a prepaid collect account at smartinmate.com. One free 15-minute call per week, domestic only." },
    moneyTransfer: { status: "available", provider: undefined, notes: "Add money to the inmate's Smart Communications account for calls, emails, visits, and entertainment at smartinmate.com. Commissary deposits also accepted at lobby kiosks and by mail." },
  },

  rules: [
    "Create one Smart Communications account at smartinmate.com. It covers calls, email, video visits, and entertainment.",
    "Fund the account before the first call or visit. Inmates get one free 15-minute domestic call per week.",
    "Do not attempt three-way calls. They are prohibited and will disconnect the call.",
    "Inmates cannot receive incoming calls, except voicemail messages for approved inmates.",
    "All communications are monitored and recorded under Sheriff's Office policy.",
  ],

  faq: [
    { question: "Which company handles communication at Washoe County Detention Facility?", answer: "Smart Communications, under contract with the Washoe County Sheriff's Office. It provides an integrated system for video visitation, phones, email, tablets, and mail. Families create an account at smartinmate.com." },
    { question: "How do I receive phone calls from an inmate?", answer: "Create and fund a prepaid collect account at smartinmate.com. The inmate calls you after booking. Inmates also receive one free 15-minute domestic phone call per week." },
    { question: "How do video visits work?", answer: "Video visitation runs on the Smart Communications platform. Create an account at smartinmate.com to schedule a visit." },
    { question: "Can I email an inmate?", answer: "Yes. Email is part of the Smart Communications platform. Fund your account at smartinmate.com to send emails, and inmates can reply from the facility tablets." },
    { question: "How do I send money to an inmate?", answer: "Add money directly to the inmate's Smart Communications account at smartinmate.com for calls, emails, visits, and entertainment. Commissary deposits can also be made at the lobby kiosks, online, or by mailed money order." },
    { question: "How do I set up an account for Washoe County Detention Facility visits?", answer: "Create an account at smartinmate.com. You will need a government-issued ID photo and a current photo of yourself, and the facility must approve the account before you can schedule visits." },
    { question: "Can I visit an inmate at Washoe County Detention Facility in person?", answer: "On-site video visiting is available in the public lobby, Monday through Friday, 8:00 AM to 9:30 PM. Visits are scheduled through your Smart Communications account or at the on-site kiosks." },
    { question: "How do I find out if someone is in custody at Washoe County Detention Facility?", answer: "Use the Sheriff's inmate search. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at Washoe County Detention Facility directly?", answer: "No. Inmates place outgoing calls. You cannot call an inmate directly." },
  ],

  relatedFacilitySlugs: ["clark-county-detention-center", "maricopa-county-jail", "denver-county-jail"],
},

"snohomish-county-jail": {
  id: "f-208",
  name: "Snohomish County Jail",
  slug: "snohomish-county-jail",
  type: "county",
  stateSlug: "washington",
  stateName: "Washington",
  stateAbbr: "WA",
  countySlug: null,
  countyName: "Snohomish County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Snohomish County Jail: GTL Phone and Video Guide",
  seoDescription: "How to contact someone at Snohomish County Jail in Everett, WA. GTL for phone calls and GettingOut for video visits and messaging.",

  description:
    "Snohomish County Jail communication guide. GTL phone and GettingOut video visit info for families of people held at the Everett jail.",

  overview: [
    "The Snohomish County Jail in Everett is operated by the Snohomish County Sheriff's Office Corrections Bureau and houses pretrial detainees and sentenced inmates for the county, one of the largest jail populations in Washington state.",
    "Global Tel Link (GTL) provides the inmate telephone service at the jail under a county contract, and video visitation runs through the GTL/GettingOut platform. Families set up an account with the vendor, add the inmate as a contact, and schedule video visits, which are limited to 30 minutes each. Inmates may also use issued tablets for video visits from their cells where the signal allows.",
    "The jail's inmate handbook notes that video visits are on demand and encouraged during recreation times, and that phone or video visit sharing between inmates is prohibited. As with most jails, all calls are monitored, three-way calls are not allowed, and inmates cannot receive incoming calls.",
  ],

  address: "3025 Oakes Ave., Everett, WA 98201",
  phone: "425-388-3395",

  operatedBy: "Snohomish County Sheriff's Office",

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
      notes: "GTL provides the inmate telephone service under contract with Snohomish County. Video visitation and messaging run through the GTL/GettingOut platform.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Text messaging through the GettingOut service on kiosks and tablets. Fund the family account to exchange messages." },
    video: { status: "available", provider: "GTL", notes: "Video visits through the GTL/GettingOut platform, limited to 30 minutes each. Set up a vendor account and get the connection approved by jail staff." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls through GTL. Fund an account before the first call. No incoming calls, no three-way calls." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the Sheriff's communication pages. Check the Snohomish County Sheriff's corrections pages before sending funds." },
  },

  rules: [
    "Set up and fund a GTL/GettingOut account before your loved one calls or video visits.",
    "Video visits are limited to 30 minutes each and work best during scheduled recreation times.",
    "No sharing of phones, video visits, tablets, or PIN numbers between inmates.",
    "Inmates cannot receive incoming calls, and three-way calls are prohibited.",
    "All calls and video visits are monitored under the Corrections Bureau's policies.",
  ],

  faq: [
    { question: "Which company handles phones at Snohomish County Jail?", answer: "Global Tel Link (GTL) provides the inmate telephone service under a county contract. Families set up an account with GTL and fund it before the first call." },
    { question: "How do video visits work?", answer: "Video visitation runs through the GTL/GettingOut platform. Set up an account, add the inmate, and have the connection approved by jail staff. Visits are limited to 30 minutes each and are encouraged during recreation times." },
    { question: "Can inmates use tablets for video visits?", answer: "Yes, if issued a tablet with headphones, an inmate may video visit from the cell during lockdown times, though the Wi-Fi signal may not reach every cell." },
    { question: "Can I message an inmate?", answer: "Text messaging is available through the GettingOut service on kiosks and tablets in the housing units. Fund the family account to send and receive messages." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed on the Sheriff's communication pages. Check the Snohomish County Sheriff's corrections pages for the current approved deposit method." },
    { question: "How do I find out if someone is in custody at Snohomish County Jail?", answer: "Use the county Inmate Lookup tool to search by name or booking number. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at Snohomish County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "What do I do if calls from Snohomish County Jail stop coming through?", answer: "Check your GTL balance first, then confirm your number is still on the inmate's approved call list. If the balance is fine, contact GTL support." },
    { question: "How do I block calls from Snohomish County Jail?", answer: "Ask GTL to block the number, or block it through your own phone carrier. You can also ask the jail to remove your number from the inmate's approved list." },
  ],

  relatedFacilitySlugs: ["king-county-correctional-facility", "monroe-correctional-complex", "washington-state-penitentiary"],
},

"pierce-county-jail": {
  id: "f-209",
  name: "Pierce County Jail",
  slug: "pierce-county-jail",
  type: "county",
  stateSlug: "washington",
  stateName: "Washington",
  stateAbbr: "WA",
  countySlug: null,
  countyName: "Pierce County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Pierce County Jail: Securus Video and Deposit Guide",
  seoDescription: "How to contact someone at Pierce County Jail in Tacoma, WA. Securus for video visits and inmate deposits. Account setup and visiting info.",

  description:
    "Pierce County Jail communication guide. Securus video visit and deposit info for families of people held at the Tacoma jail.",

  overview: [
    "The Pierce County Jail in Tacoma is operated by the Pierce County Sheriff's Department Corrections Bureau and is the main adult detention facility for the county, housing pretrial detainees and sentenced inmates.",
    "Remote video visitation at the Pierce County Jail runs through Securus Technologies: visitors set up a Securus account to schedule video visits and to deposit funds on inmate accounts. The county's official video visitation page directs families to Securus for both visiting and deposits.",
    "Because the jail's communication setup centers on the Securus account, families should create and fund that account before planning any remote contact. As with most county jails, inmates cannot receive incoming phone calls, and all communications are monitored under facility policy.",
  ],

  address: "701 Nollmeyer Ln, Tacoma, WA 98402",
  phone: "(253) 798-4590",
  operatedBy: "Pierce County Sheriff's Department",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "Securus Technologies handles remote video visitation and inmate account deposits for the Pierce County Jail, per the county's official video visitation page.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check the Pierce County Sheriff's corrections pages for current options." },
    video: { status: "available", provider: "Securus", notes: "Remote video visitation through Securus. Set up a Securus account to schedule visits." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "limited", provider: undefined, notes: "Inmates can place outgoing calls, but the phone vendor is not confirmed on the county's pages. Check the Pierce County Sheriff's corrections pages." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Deposit funds on inmate accounts through a Securus account, per the county's video visitation page." },
  },

  rules: [
    "Set up a Securus account before scheduling a remote video visit or depositing funds.",
    "Confirm which Pierce County facility your loved one is in before setting up accounts.",
    "Inmates cannot receive incoming calls under any circumstances.",
    "All communications are monitored and recorded under Corrections Bureau policy.",
    "Check the county's official jail pages for current visiting schedules and deposit instructions.",
  ],

  faq: [
    { question: "Which company handles video visits at Pierce County Jail?", answer: "Securus Technologies. The county's official video visitation page directs visitors to set up a Securus account to schedule remote video visits." },
    { question: "How do I send money to an inmate at Pierce County Jail?", answer: "Set up a Securus account, which the county's video visitation page also lists for depositing funds on inmate accounts." },
    { question: "Can I call an inmate at Pierce County Jail?", answer: "No. Inmates cannot receive incoming calls. They place outgoing calls, and the current phone vendor should be confirmed on the Pierce County Sheriff's corrections pages." },
    { question: "Can I message an inmate?", answer: "Electronic messaging is not confirmed for this facility. Video visits, phone calls, and mail are the established contact options." },
    { question: "What is the jail's address and phone number?", answer: "The Pierce County Jail is at 701 Nollmeyer Ln, Tacoma, WA 98402. The main jail reception number is (253) 798-4590." },
    { question: "How do I find out if someone is in custody at Pierce County Jail?", answer: "Use the county Corrections inmate lookup. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at Pierce County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I block calls from Pierce County Jail?", answer: "Ask the phone provider to block the number, or block it through your own phone carrier. You can also ask the jail to remove your number from the inmate's approved list." },
    { question: "What should I do if I cannot find the inmate I am looking for?", answer: "Confirm the spelling of the name and check whether the person may be housed at a different Pierce County facility or has been released or transferred. Call the jail for help if the lookup still shows nothing." },
  ],

  relatedFacilitySlugs: ["king-county-correctional-facility", "monroe-correctional-complex", "multnomah-county-detention-center"],
},

"spokane-county-jail": {
  id: "f-210",
  name: "Spokane County Jail",
  slug: "spokane-county-jail",
  type: "county",
  stateSlug: "washington",
  stateName: "Washington",
  stateAbbr: "WA",
  countySlug: null,
  countyName: "Spokane County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Spokane County Jail: Securus Phone and Video Guide",
  seoDescription: "How to contact someone at Spokane County Jail. Securus for phone calls, video visits, and deposits. Set up your account before the first call.",

  description:
    "Spokane County Jail communication guide. Securus phone, video visit, and deposit info for families of people held at the Spokane jail.",

  overview: [
    "The Spokane County Jail in downtown Spokane is operated by Spokane County Detention Services and is the primary adult detention facility for the county, housing pretrial detainees and sentenced inmates. A separate Geiger Corrections facility handles lower-security housing.",
    "Spokane County selected Securus Technologies as the provider for its inmate phone and visitation project. Phone calls, remote video visits through Securus Video Connect, and deposits on inmate accounts all run through Securus. Visitors set up a Securus account with a photo ID, email address, and phone number, and visit applications are typically screened within about 24 hours on business days.",
    "Free visitation kiosks are also available in the lobby of the Spokane County Jail and at the Geiger Corrections Visiting Center for on-site video visits. All video visits are a privilege, not a right, and both visitor and inmate are expected to conduct themselves appropriately at all times.",
  ],

  address: "1100 W Mallon Avenue, Spokane, WA 99260",
  phone: "509-477-2278",

  operatedBy: "Spokane County Detention Services",

  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: true,
      notes: "Securus Technologies is the county's contracted inmate phone and visitation provider. Calls, Securus Video Connect visits, and inmate account deposits all run through Securus.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check Spokane County Detention Services pages for current options." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits through Securus Video Connect. Set up a Securus account with photo ID, email, and phone number. Applications are screened within about 24 hours on business days." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls through Securus. Set up and fund an account before the first call." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Deposit funds on inmate accounts through a Securus account." },
  },

  rules: [
    "Set up a Securus account with a photo ID, email address, and phone number before the first call or visit.",
    "Allow about 24 hours on business days for your visitor application to be screened.",
    "Free video visit kiosks are available in the jail lobby and at the Geiger Corrections Visiting Center.",
    "Video visitation is a privilege, not a right, and visits can be denied or terminated for misconduct.",
    "All communications are monitored and recorded under Detention Services policy.",
  ],

  faq: [
    { question: "Which company handles phones and video visits at Spokane County Jail?", answer: "Securus Technologies, selected by Spokane County as its inmate phone and visitation provider. Phone calls, Securus Video Connect visits, and deposits all run through Securus." },
    { question: "How do I set up a video visit?", answer: "Create a Securus account with a photo ID, email address, and phone number. Your application is screened within about 24 hours on business days, then you can schedule video sessions on a computer, phone, or tablet app." },
    { question: "Are there free on-site video visit options?", answer: "Yes. Free visitation booths and kiosks are available in the lobby of the Spokane County Jail and at the Geiger Corrections Visiting Center." },
    { question: "How do I send money to an inmate?", answer: "Deposit funds on inmate accounts through your Securus account." },
    { question: "Can I message an inmate?", answer: "Electronic messaging is not confirmed for this facility. Phone calls, video visits, and mail are the established contact options." },
    { question: "How do I find out if someone is in custody at Spokane County Jail?", answer: "Use the county Detention Services inmate lookup. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at Spokane County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I schedule a video visit at Spokane County Jail?", answer: "Video visits are by appointment through the Securus platform. Confirm the current scheduling steps and check-in rules with the jail before your first visit." },
    { question: "How do I block calls from Spokane County Jail?", answer: "Ask Securus to block the number, or block it through your own phone carrier. You can also ask the jail to remove your number from the inmate's approved list." },
  ],

  relatedFacilitySlugs: ["king-county-correctional-facility", "washington-state-penitentiary", "multnomah-county-detention-center"],
},

"utah-county-jail": {
  id: "f-211",
  name: "Utah County Jail",
  slug: "utah-county-jail",
  type: "county",
  stateSlug: "utah",
  stateName: "Utah",
  stateAbbr: "UT",
  countySlug: null,
  countyName: "Utah County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Utah County Jail: Phone, Video, and Messaging Guide",
  seoDescription: "How to contact someone at Utah County Jail in Spanish Fork. Telmate for phone calls, video visits, and messaging. Account setup info.",

  description:
    "Utah County Jail communication guide. Telmate phone, video visit, and messaging info for families of people held at the Spanish Fork jail.",

  overview: [
    "The Utah County Jail in Spanish Fork is operated by the Utah County Sheriff's Office and is the main adult detention facility for the county, housing pretrial detainees and sentenced inmates from across Utah County.",
    "Telmate provides the jail's inmate phone, email, and video visitation services, replacing the previous vendor. Families create a Telmate account to fund phone calls, schedule video visits, and exchange messages. Telmate is part of the ViaPath (formerly GTL) family of companies, and its platform covers calls, video visitation, and messaging from one account.",
    "Because the vendor changed in recent years, families with old account information should confirm they are using the current Telmate system rather than a legacy vendor account. All communications are monitored under the Sheriff's Office policies.",
  ],

  address: "3075 North Main, Spanish Fork, UT 84660",
  phone: "801-851-4302",

  operatedBy: "Utah County Sheriff's Office",
  mailingAddress: "Inmate First and Last Name, Booking Number, Utah County Jail, 3075 N Main St, Spanish Fork, UT 84660. Include a return name and address. Personal mail is scanned and viewed digitally on a tablet or kiosk, and originals are held until release. Legal mail and new softcover books from a publisher or bookstore are still accepted.",
  visitingHours: "All visits are by remote video. Video Connect calls are initiated by the inmate and funded by AdvanceConnect prepaid accounts. Set up a Securus account at securustech.net with a state ID and a current photo. There are no visits during the first 3 days after booking. Video Connect is available 8:00 AM to 10:00 PM depending on classification.",
  rosterUrl: "https://sheriff.utahcounty.gov/corrections/inmatesearch",
  callRates: "Video Connect calls cost $0.19 per minute plus taxes, fees, and surcharges.",
  commissary: "Commissary deposits go through JailATM at jailatm.com.",
  providers: [
    {
      name: "Securus",
      slug: "securus",
      initial: "S",
      color: "bg-indigo-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Securus provides phone service and video visitation at Utah County Jail. Set up an account at securustech.net.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: undefined, notes: "Electronic messaging through Telmate. Create a Telmate account and fund it to exchange messages." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Telmate. Schedule visits through your Telmate account." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls through Telmate. Set up and fund an account before the first call." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Commissary deposit options are not confirmed on the Sheriff's communication pages. Check the Utah County Sheriff's jail pages before sending funds." },
  },

  rules: [
    "Create a Telmate account and fund it before your loved one calls or video visits.",
    "Make sure you are using the current Telmate system, not a legacy vendor account from before the switch.",
    "Inmates cannot receive incoming calls. All calls are initiated from inside the jail.",
    "Schedule video visits in advance through your Telmate account.",
    "All communications are monitored and recorded under Sheriff's Office policy.",
  ],

  faq: [
    { question: "Which company handles communication at Utah County Jail?", answer: "Telmate provides the jail's inmate phone, email, and video visitation services, replacing the previous vendor. Telmate is part of the ViaPath (formerly GTL) family of companies." },
    { question: "How do I set up phone calls?", answer: "Create a Telmate account and add funds. The inmate calls you through the Telmate phone system once the account is funded." },
    { question: "How do video visits work?", answer: "Video visitation runs through Telmate. Create an account, add your inmate as a contact, and schedule visits in advance." },
    { question: "Can I message an inmate?", answer: "Yes. Electronic messaging is available through the Telmate platform. Fund your account to send and receive messages." },
    { question: "How do I send money to an inmate?", answer: "Commissary deposit options are not confirmed on the Sheriff's communication pages. Check the Utah County Sheriff's jail pages for the current approved deposit method." },
    { question: "How do I set up a Securus account for Utah County Jail?", answer: "Create an account at securustech.net with a state ID and a current photo. Fund an AdvanceConnect prepaid account so the inmate can call you and start Video Connect calls." },
    { question: "Can I call an inmate at Utah County Jail directly?", answer: "No. Inmates place outgoing calls. Video Connect calls are initiated by the inmate." },
    { question: "How do I find out if someone is in custody at Utah County Jail?", answer: "Use the Sheriff's inmate search by name or arrest date. Booking information stays available for one year and booking photos for 30 days." },
    { question: "What happens to mail sent to Utah County Jail?", answer: "Personal mail is scanned and delivered digitally to the inmate's tablet or kiosk. The original is held until release. Always include a return name and address." },
  ],

  relatedFacilitySlugs: ["salt-lake-county-metro-jail", "central-utah-correctional-facility", "utah-state-correctional-facility"],
},

"arapahoe-county-detention-center": {
  id: "f-212",
  name: "Arapahoe County Detention Center",
  slug: "arapahoe-county-detention-center",
  type: "county",
  stateSlug: "colorado",
  stateName: "Colorado",
  stateAbbr: "CO",
  countySlug: null,
  countyName: "Arapahoe County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Arapahoe County Jail: GTL Phone and Video Guide",
  seoDescription: "How to contact someone at Arapahoe County Detention Center in Centennial. GTL for phones, GettingOut for video visits and messaging.",

  description:
    "Arapahoe County Detention Center communication guide. GTL phone and GettingOut video visit info for families of people held at the Centennial jail.",

  overview: [
    "The Arapahoe County Detention Center in Centennial is operated by the Arapahoe County Sheriff's Office and is the main adult detention facility for the county, housing pretrial detainees and sentenced inmates.",
    "Inmate communication at the jail runs on the GTL family of platforms. Phone service is funded through AdvancePay accounts on ConnectNetwork, PIN debit calling and tablet services are funded through the offender's account, and video visitation is scheduled and funded separately through GettingOut. The county's official payment poster lists each account type and where to fund it, so families should match the account to the service they want.",
    "Deposits can be made online, through the GettingOut and ConnectNetwork mobile apps, at the lobby kiosk, or by toll-free phone. Because phone, tablet, and video visitation each use a different account, double-check that you are funding the right one before the first call or visit.",
  ],

  address: "7375 South Potomac Street, Centennial, CO 80112",
  phone: "720-874-3500",

  operatedBy: "Arapahoe County Sheriff's Office",

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
      moneyTransfer: true,
      notes: "GTL provides phone service at the Arapahoe County jail. Family and friends fund AdvancePay accounts through ConnectNetwork; inmates fund PIN debit calling through their own account.",
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
      notes: "GettingOut handles video visitation and tablet-based messaging at the jail. Video visits use a separate GettingOut visitation account.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Tablet-based messaging through GettingOut. Fund the account at gettingout.com." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits scheduled and funded through GettingOut. This uses a separate account from phone service." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls through GTL. Fund an AdvancePay account on ConnectNetwork or a PIN debit account for the inmate." },
    moneyTransfer: { status: "available", provider: "GTL", notes: "Deposits through ConnectNetwork, the GettingOut and ConnectNetwork apps, the lobby kiosk, or toll-free phone. Payment services run through GTL Financial Services." },
  },

  rules: [
    "Fund the right account: AdvancePay on ConnectNetwork for calls to you, PIN debit for the inmate's own calling, GettingOut for video visits.",
    "Video visitation uses a separate GettingOut account from phone service. Do not mix them up.",
    "Inmates cannot receive incoming calls. They call you once the correct account is funded.",
    "Deposits can be made online, by app, at the lobby kiosk, or by phone. Fees apply to automated payments.",
    "All communications are monitored and recorded under Sheriff's Office policy.",
  ],

  faq: [
    { question: "Which company handles phones at Arapahoe County Detention Center?", answer: "GTL. Family and friends fund AdvancePay phone accounts through ConnectNetwork, and inmates can fund PIN debit calling through their own offender account." },
    { question: "How do video visits work?", answer: "Video visitation runs through GettingOut and uses a separate visitation account from phone service. Schedule and fund visits at gettingout.com." },
    { question: "Can I message an inmate?", answer: "Yes. Tablet-based messaging is available through GettingOut. Fund the account at gettingout.com." },
    { question: "How do I send money to an inmate?", answer: "Deposit online through ConnectNetwork or gettingout.com, through the mobile apps, at the lobby kiosk, or by toll-free phone. You will need the offender's name, ID number, and date of birth. Fees apply." },
    { question: "Why are there different accounts?", answer: "The county separates AdvancePay (calls to your number), PIN debit (the inmate's own calling and tablet use), and GettingOut video visitation into different accounts. Fund each one for the service you want to use." },
      {
        question: "How do I find or search for an inmate at Arapahoe County Detention Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Arapahoe County, Colorado. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Arapahoe County Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Arapahoe County Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Arapahoe County Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Arapahoe County Detention Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["denver-county-jail", "laramie-county-detention-center", "douglas-county-department-of-corrections"],
},

"el-paso-county-criminal-justice-center": {
  id: "f-213",
  name: "El Paso County Criminal Justice Center",
  slug: "el-paso-county-criminal-justice-center",
  type: "county",
  stateSlug: "colorado",
  stateName: "Colorado",
  stateAbbr: "CO",
  countySlug: null,
  countyName: "El Paso County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "El Paso County CJC: Video Visits and Phone Guide",
  seoDescription: "How to contact someone at El Paso County Criminal Justice Center in Colorado Springs. Video visitation, phone calls, and inmate services.",

  description:
    "El Paso County Criminal Justice Center communication guide. Video visit and phone info for families of people held at the Colorado Springs jail.",

  overview: [
    "The El Paso County Criminal Justice Center (CJC) in Colorado Springs is operated by the El Paso County Sheriff's Office and is the primary jail for the county, housing both pretrial detainees and sentenced inmates.",
    "Visitation at the CJC is conducted through video visitation. The Sheriff's Office inmate services pages cover the visitation process, and visit payments and refunds are handled through JailATM. Friends and family schedule visits in advance, and visits must take place during the inmate's unlocked time.",
    "Phone calls run through Correct Solutions Group (csgpay.com): contact the Correct Solutions Service Department at (877) 618-3516 to set up prepaid phone accounts. Video visitation runs through JailATM at jailatm.com. Deposits go through Access Corrections online at accesscorrections.com or by phone at 1-866-394-0490, per the Sheriff's Inmate Services page.",
  ],

  address: "2739 East Las Vegas St, Colorado Springs, CO 80906",
  phone: "(719) 390-2000",
  operatedBy: "El Paso County Sheriff's Office",

  providers: [
    {
      name: "Correct Solutions Group",
      slug: "correct-solutions-group",
      initial: "C",
      color: "bg-orange-700",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Prepaid phone accounts through Correct Solutions Group (csgpay.com), per the Sheriff's Inmate Services page.",
    },
    {
      name: "Jail ATM",
      slug: "jailatm",
      initial: "J",
      color: "bg-lime-700",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Video visitation through JailATM at jailatm.com, per the Sheriff's Inmate Services page.",
    },
    {
      name: "Access Corrections",
      slug: "access-corrections",
      initial: "A",
      color: "bg-green-700",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "Deposits through Access Corrections online or by phone at 1-866-394-0490, per the Sheriff's Inmate Services page.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed. Check the Sheriff's inmate services pages for current options." },
    video: { status: "available", provider: "Jail ATM", notes: "Video visitation through JailATM at jailatm.com. Visit payments and refunds are handled through JailATM. Schedule in advance during the inmate's unlocked time." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "Correct Solutions Group", notes: "Prepaid phone accounts through Correct Solutions Group (csgpay.com). Contact the Correct Solutions Service Department at (877) 618-3516 to set up an account." },
    moneyTransfer: { status: "available", provider: "Access Corrections", notes: "Deposits through Access Corrections online at accesscorrections.com or by phone at 1-866-394-0490, per the Sheriff's Inmate Services page." },
  },

  rules: [
    "Start at the Sheriff's official inmate services pages for current vendor details.",
    "Schedule video visits in advance. Visits must take place during the inmate's unlocked time.",
    "Visit payments and refunds run through JailATM, per the Sheriff's inmate services page.",
    "Inmates cannot receive incoming calls. All calls are initiated from inside the jail.",
    "Call (719) 390-2000 to confirm the current phone and deposit setup before funding anything.",
  ],

  faq: [
    { question: "How do video visits work at the El Paso County Criminal Justice Center?", answer: "Video visitation runs through JailATM at jailatm.com. Schedule visits in advance, during the inmate's unlocked time. Visit payments and refunds are handled through JailATM." },
    { question: "Which company handles phone calls?", answer: "Correct Solutions Group handles phone calls at the CJC. Set up a prepaid phone account through csgpay.com or call the Correct Solutions Service Department at (877) 618-3516." },
    { question: "Can I call an inmate at the CJC?", answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved contacts." },
    { question: "How do I send money to an inmate?", answer: "Send deposits through Access Corrections online at accesscorrections.com or by phone at 1-866-394-0490, per the Sheriff's Inmate Services page." },
    { question: "What is the jail's address and phone number?", answer: "The Criminal Justice Center is at 2739 East Las Vegas St, Colorado Springs, CO 80906. The jail's main number is (719) 390-2000." },
    { question: "How do I find out if someone is in custody at the El Paso County Criminal Justice Center?", answer: "Use the Sheriff's inmate search. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at the CJC directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I send mail to an inmate at the CJC?", answer: "Address mail to the inmate's full booking name and booking number at the Criminal Justice Center, 2739 E. Las Vegas St., Colorado Springs, CO 80906. Include a return address." },
    { question: "How do I block calls from the CJC?", answer: "Ask the phone provider to block the number, or block it through your own phone carrier. You can also ask the jail to remove your number from the inmate's approved list." },
  ],

  relatedFacilitySlugs: ["denver-county-jail", "douglas-county-department-of-corrections", "laramie-county-detention-center"],
},

"dona-ana-county-detention-center": {
  id: "f-214",
  name: "Dona Ana County Detention Center",
  slug: "dona-ana-county-detention-center",
  type: "county",
  stateSlug: "new-mexico",
  stateName: "New Mexico",
  stateAbbr: "NM",
  countySlug: null,
  countyName: "Dona Ana County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Dona Ana County Jail: Video, Phone, Messaging Guide",
  seoDescription: "How to contact someone at Dona Ana County Detention Center in Las Cruces. GettingOut for video visits and messaging, ConnectNetwork for phones.",

  description:
    "Dona Ana County Detention Center communication guide. GettingOut video visit and messaging info for families of people held at the Las Cruces jail.",

  overview: [
    "The Dona Ana County Detention Center in Las Cruces is the primary jail for Dona Ana County, housing pretrial detainees and sentenced inmates. It also operates a separate juvenile detention program with its own visitation schedule.",
    "Video visitation and text messaging run through GettingOut. Families schedule visits at gettingout.com or through the GettingOut app, with daily video visitation blocks posted by the facility. Text messaging is also available through the GettingOut platform. For phone calls, detainees place outbound calls by collect, prepaid, or debit, and families typically set up a funded account through ConnectNetwork.",
    "GettingOut tablets are also deployed in the facility for video calls, messaging, entertainment, and education. Because the facility posts specific daily video visitation blocks, families should check the current schedule when booking rather than assuming the hours from another source.",
  ],

  website: "https://www.donaanacounty.org/detention/",
  operatedBy: "Dona Ana County Sheriff's Office",

  providers: [
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
      notes: "GettingOut provides video visitation and text messaging at the Dona Ana County Detention Center. Schedule at gettingout.com or through the GettingOut app.",
    },
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
      notes: "Phone accounts are typically set up through ConnectNetwork (GTL) for collect, prepaid, and debit calling.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Text messaging through gettingout.com and the GettingOut app. Fund the account to exchange messages." },
    video: { status: "available", provider: "GettingOut", notes: "Online video visitation through GettingOut, available daily in posted blocks. Schedule at gettingout.com or through the app. Some visits are free, others have fees." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Outbound calls by collect, prepaid, or debit. Families typically set up a funded account through ConnectNetwork." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Commissary deposits can be made online, by phone, at the lobby kiosk, or by mailed money order, but the current vendor should be confirmed on the county detention pages." },
  },

  rules: [
    "Schedule video visits at gettingout.com or through the GettingOut app, within the facility's posted daily blocks.",
    "Set up a funded ConnectNetwork account so collect and prepaid calls can connect.",
    "Confirm the current video visitation hours when booking, since posted blocks can change.",
    "Inmates cannot receive incoming calls. They place outbound calls only.",
    "Juvenile detainees have a separate visitation schedule. Call (575) 647-7680 for juvenile visits.",
  ],

  faq: [
    { question: "Which company handles video visits at Dona Ana County Detention Center?", answer: "GettingOut. Schedule online video visits at gettingout.com or through the GettingOut app, within the facility's posted daily visitation blocks." },
    { question: "Can I message a detainee?", answer: "Yes. Text messaging is available through the GettingOut platform. Fund your account at gettingout.com to send and receive messages." },
    { question: "How do phone calls work?", answer: "Detainees place outbound calls by collect, prepaid, or debit. Families typically set up a funded account through ConnectNetwork so calls can connect." },
    { question: "How do I send money to a detainee?", answer: "Commissary deposits can be made online, by phone, at the lobby kiosk, or by mailing a money order. Confirm the current vendor and fee details on the county detention pages." },
    { question: "What are the video visitation hours?", answer: "The facility posts daily video visitation blocks covering morning, afternoon, and evening. Confirm the current blocks when you schedule, since they can change." },
    { question: "How do I find out if someone is in custody at Dona Ana County Detention Center?", answer: "Use the county detention center roster search. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at Dona Ana County Detention Center directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I send mail to a detainee?", answer: "Address mail to the detainee's full name and booking number at the Dona Ana County Detention Center, and include a return address. Confirm the current mail rules with the facility before sending, since mail policies can change." },
    { question: "How do I block calls from Dona Ana County Detention Center?", answer: "Ask GTL to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
  ],

  relatedFacilitySlugs: ["bernalillo-county-metropolitan-detention-center", "lea-county-correctional-facility", "new-mexico-state-penitentiary"],
},

"missoula-county-detention-facility": {
  id: "f-215",
  name: "Missoula County Detention Facility",
  slug: "missoula-county-detention-facility",
  type: "county",
  stateSlug: "montana",
  stateName: "Montana",
  stateAbbr: "MT",
  countySlug: null,
  countyName: "Missoula County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Missoula County Detention Facility: Smart Communications Phone, Video and Messaging",
  seoDescription: "How to contact someone at Missoula County Detention Facility. Smart Communications phone calls, video visits and messaging via smartinmate.com, per the county's detention page.",

  description:
    "Missoula County Detention Facility communication guide. Smart Communications phone, video visit and messaging info for families of people held at the Missoula jail.",

  overview: [
    "The Missoula County Detention Facility in Missoula is the main adult detention facility for the county, housing pretrial detainees and sentenced inmates from Missoula and the surrounding area of western Montana.",
    "Smart Communications provides telecommunication services at the facility, per the county's detention page. Inmates get telephone calls, video visitation, and email-type messaging via kiosks and tablets in their housing units. Families fund communications accounts at smartinmate.com.",
    "Because Smart Communications is the channel for remote contact, families should set up their Smart Communications account at smartinmate.com before the first call or visit. All communications are monitored under the facility's policies.",
  ],

  address: "2340 Mullan Road, Missoula, MT 59808",
  phone: "(406) 258-4000",
  mailingAddress: "Routine mail: Smart Communications/Missoula County Detention Facility, Inmate Name and Global #, PO Box 9182, Seminole, FL 33775-3197. Legal and non-routine mail: Inmate Name, Missoula County Detention Facility, 2340 Mullan Road, Missoula, MT 59808.",
  visitingHours: "In-person public visitation: not permitted during the first 72 hours after arrival. Schedule by calling (406) 258-4000 or in person in the lobby, at least 24 hours in advance; no same-day visits. Video visitation: schedule online at smartinmate.com.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",

  operatedBy: "Missoula County Sheriff's Office",

  providers: [
    {
      name: "Smart Communications",
      slug: "smartinmate",
      initial: "S",
      color: "bg-cyan-600",
      messaging: true,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Smart Communications provides telecommunication services at Missoula County Detention Facility: phone calls, video visitation, and email-type messaging via smartinmate.com.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Smart Communications", notes: "Email-type messaging via kiosks and tablets in housing units. Fund communications at smartinmate.com." },
    video: { status: "available", provider: "Smart Communications", notes: "Video visits scheduled online at smartinmate.com." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "Smart Communications", notes: "Outgoing calls through the Smart Communications telecom system. Fund communications at smartinmate.com." },
    moneyTransfer: { status: "available", provider: "Smart Communications", notes: "Fund communications (phone, messaging, video) at smartinmate.com. Commissary deposits go through CorrectPay." },
  },

  rules: [
    "Set up and fund a Smart Communications account at smartinmate.com before the first call, video visit, or message.",
    "Video visits are scheduled online at smartinmate.com; in-person visits are scheduled by calling (406) 258-4000.",
    "Confirm current schedules and requirements with the facility before traveling, since visiting days and times are assigned according to where inmates are housed.",
    "Inmates cannot receive incoming calls. They place outgoing calls to approved contacts.",
    "All communications are monitored and recorded under facility policy.",
  ],

  faq: [
    { question: "Which company handles video visits at Missoula County Detention Facility?", answer: "Smart Communications provides telecom services at the facility. Video visits are scheduled online at smartinmate.com." },
    { question: "Can I message an inmate?", answer: "Yes. Email-type messaging runs through Smart Communications via kiosks and tablets. Set up an account at smartinmate.com and fund it to exchange messages." },
    { question: "How do phone calls work?", answer: "Inmates place outgoing calls to approved contacts through the Smart Communications telecom system. Fund communications at smartinmate.com." },
    { question: "How do I send mail to an inmate at Missoula County Detention Facility?", answer: "Routine mail goes through Smart Communications: Smart Communications/Missoula County Detention Facility, Inmate Name and Global #, PO Box 9182, Seminole, FL 33775-3197. Legal and non-routine mail goes directly to the inmate at 2340 Mullan Road, Missoula, MT 59808. Routine mail is scanned and the physical mail is destroyed, so do not send anything you want returned." },
    { question: "How do I send money to an inmate?", answer: "Fund communications (phone, messaging, video) at smartinmate.com. Commissary deposits go through CorrectPay. Money orders can also be mailed to 2340 Mullan Road, Missoula, MT 59808 with the inmate's name and the sender's name and address; personal checks are not accepted." },
    { question: "How do I find out if someone is in custody at Missoula County Detention Facility?", answer: "Use the county detention facility roster search. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at Missoula County Detention Facility directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "What do I need to schedule a video visit?", answer: "An approved account with Smart Communications and the inmate's availability. Video visits are scheduled online at smartinmate.com. Coordinate the time with the inmate first, since staff do not publish individual schedules." },
    { question: "How do I block calls from Missoula County Detention Facility?", answer: "Ask Smart Communications (smartinmate.com) to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
    { question: "Does Missoula County Detention Facility hold federal inmates?", answer: "Yes. The facility holds inmates for the US Marshals Service and other agencies, plus a 24-bed juvenile unit." },
  ],

  relatedFacilitySlugs: ["montana-state-prison", "cascade-county-regional-correctional-facility", "yellowstone-county-detention-facility"],
},

"washington-county-jail": {
  id: "f-216",
  name: "Washington County Jail",
  slug: "washington-county-jail",
  type: "county",
  stateSlug: "oregon",
  stateName: "Oregon",
  stateAbbr: "OR",
  countySlug: null,
  countyName: "Washington County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Washington County Jail (OR): GTL Phone Guide",
  seoDescription: "How to contact someone at Washington County Jail in Hillsboro, Oregon. ViaPath (GTL) prepaid phone accounts. Visiting hours and rules.",

  description:
    "Washington County Jail communication guide. ViaPath (GTL) phone account info for families of people held at the Hillsboro, Oregon jail.",

  overview: [
    "The Washington County Jail in Hillsboro, Oregon, houses adults in custody for the county, including pretrial detainees and sentenced inmates from the Portland metro area's western suburbs.",
    "Telephones are located throughout the jail housing units for outgoing calls. The county's official jail page names ViaPath, an outside telephone service provider, for prepaid phone accounts: families can set up an account for a specific phone number or a specific adult in custody, and the inmate can purchase prepaid phone time with account funds through the jail commissary. Collect calls are also available, subject to the phone service provider's fees.",
    "Contact visiting runs on a daily schedule with morning and afternoon or early evening blocks, seven days a week including holidays. Adults in custody cannot receive incoming telephone calls, jail staff cannot relay messages, and all calls are recorded except calls to an attorney and verified clergy.",
  ],

  phone: "(503) 846-2600",
    visitingHours: "Social and video visiting Mon to Sun 7:15 am to 10:45 am and 1:45 pm to 5 pm, holidays same. Hours updated 12/3/2025 on official page",
    callRates: "Video visit 30-minute call is $7.50, charged to scheduler. Phone call rates not stated, Viapath prepaid or collect",
    commissary: "Deposit money via Viapath kiosks in jail lobby or online at gettingout.com. AICs can buy prepaid phone time with commissary funds",
    notToConfuseWith: "Not to be confused with Washington County Detention Center in Fayetteville, Arkansas.",
  operatedBy: "Washington County Sheriff's Office",

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
      notes: "ViaPath (GTL) provides prepaid phone accounts for the Washington County Jail, per the county's official contact-and-visit page.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check the county Sheriff's jail pages for current options." },
    video: { status: "limited", provider: undefined, notes: "Remote video visitation is not confirmed. Contact visiting runs daily in morning and afternoon or early evening blocks." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through ViaPath (GTL) prepaid accounts, or collect calls subject to provider fees. Inmates cannot receive incoming calls." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the county's contact page. Call (503) 846-2600 for current deposit instructions." },
  },

  rules: [
    "Set up a ViaPath prepaid phone account for your number or for the adult in custody before the first call.",
    "Adults in custody cannot receive incoming calls, and jail staff cannot relay messages.",
    "No three-way calls. Calls are recorded, except calls to an attorney and verified clergy.",
    "Contact visiting runs daily in posted morning and afternoon or early evening blocks.",
    "Call (503) 846-2600 with questions about the jail that do not involve phone services.",
  ],

  faq: [
    { question: "Which company handles phone calls at Washington County Jail (Oregon)?", answer: "ViaPath, an outside telephone service provider in the GTL family, offers prepaid phone accounts for the jail, per the county's official contact-and-visit page." },
    { question: "How do prepaid phone accounts work?", answer: "ViaPath offers accounts for a specific phone number or a specific adult in custody. The inmate can also purchase prepaid phone time with account funds through the jail commissary." },
    { question: "Can I call an inmate at the jail?", answer: "No. Adults in custody cannot receive telephone calls, and jail staff cannot relay messages. They call you through the ViaPath phone system." },
    { question: "What are the contact visiting hours?", answer: "Contact visiting runs daily, seven days a week including holidays, in morning and afternoon or early evening blocks posted on the county's contact-and-visit page." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not listed on the county's contact page. Call (503) 846-2600 for the current approved deposit method." },
      {
        question: "How do I find or search for an inmate at Washington County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Washington County, Oregon. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Washington County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "How much does it cost to call or video-visit an inmate at Washington County Jail?",
        answer: "Verified rates: Video visit 30-minute call is $7.50, charged to scheduler. Phone call rates not stated, Viapath prepaid or collect",
      },
      {
        question: "What are the visiting hours at Washington County Jail?",
        answer: "Social and video visiting Mon to Sun 7:15 am to 10:45 am and 1:45 pm to 5 pm, holidays same. Hours updated 12/3/2025 on official page",
      },
      {
        question: "Can I receive incoming calls from an inmate at Washington County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },

  ],

  relatedFacilitySlugs: ["multnomah-county-detention-center", "oregon-state-penitentiary", "snake-river-correctional-institution"],
},

"lane-county-jail": {
  id: "f-217",
  name: "Lane County Jail",
  slug: "lane-county-jail",
  type: "county",
  stateSlug: "oregon",
  stateName: "Oregon",
  stateAbbr: "OR",
  countySlug: null,
  countyName: "Lane County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Lane County Jail: Phone, Video, and Messaging Guide",
  seoDescription: "How to contact someone at Lane County Jail in Eugene, Oregon. Smart Communications for phones, tablets, and messaging. Account setup.",

  description:
    "Lane County Jail communication guide. Smart Communications phone, tablet, and messaging info for families of people held at the Eugene jail.",

  overview: [
    "The Lane County Adult Corrections Facility in Eugene is operated by the Lane County Sheriff's Office and is the main adult jail for the county, housing pretrial detainees and sentenced inmates.",
    "The county approved a contract with Smart Communications for phones, tablets, and secure mail scanning for adults in custody, replacing the previous ViaPath (Telmate) contract. The tablets are used for video messaging, text messaging, entertainment, and educational content, and they also deliver scans of physical mail. Families create a Smart Communications account to fund calls, messages, and visits.",
    "Because the vendor changed recently, families with old ViaPath or Telmate account information should make sure they are using the current Smart Communications system. All communications are monitored under the Sheriff's Office policies.",
  ],

  address: "101 West 5th Avenue, Eugene, OR 97401",
  phone: "(541) 682-4263",

  operatedBy: "Lane County Sheriff's Office",
  visitingHours: "Attorney visiting at the Main Jail Facility, 101 West 5th, is Monday through Friday only: morning 7:45 to 10:30 AM (last call 10:15 AM), afternoon 12:30 to 4:30 PM (last call 4:15 PM), evening 5:30 to 8:00 PM (last call 7:45 PM). The reception lobby is closed 11:30 AM to 12:30 PM. General inmate visiting follows a separate schedule; confirm it with the jail.",
  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "Lane County Jail uses the Telmate phone system, part of the GTL/GettingOut platform. Contact Telmate through GettingOut.com or 866-516-0115 for prepaid phone accounts, messages, voicemail, and phone blocks.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: undefined, notes: "Text and video messaging through Smart Communications tablets. Create an account and fund it to exchange messages." },
    video: { status: "available", provider: undefined, notes: "Video visits through the Smart Communications platform. Schedule through your account." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical mail is scanned and delivered through the tablet system." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls through Smart Communications. Set up and fund an account before the first call." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the county's communication pages. Check the Lane County Sheriff's pages before sending funds." },
  },

  rules: [
    "Create a Smart Communications account and fund it before the first call, message, or video visit.",
    "Make sure you are using the current Smart Communications system, not a legacy ViaPath or Telmate account.",
    "Inmates cannot receive incoming calls. They place outgoing calls to approved contacts.",
    "Physical mail is scanned and delivered through the tablet system, so follow the county's mail rules.",
    "All communications are monitored and recorded under Sheriff's Office policy.",
  ],

  faq: [
    { question: "Which company handles communication at Lane County Jail?", answer: "Smart Communications, under a county-approved contract for phones, tablets, and secure mail scanning. It replaced the previous ViaPath (Telmate) contract." },
    { question: "How do I set up phone calls?", answer: "Create a Smart Communications account and add funds. The adult in custody calls you through the Smart Communications phone system." },
    { question: "Can I message someone at the jail?", answer: "Yes. Text messaging and video messaging run through the Smart Communications tablets. Fund your account to send and receive messages." },
    { question: "How does mail work now?", answer: "Physical mail is scanned and delivered to the tablets through the secure mail scanning service. Follow the county's mail rules for what can be sent." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed on the county's communication pages. Check the Lane County Sheriff's pages for the current approved deposit method." },
    { question: "How do I set up a prepaid phone account for Lane County Jail?", answer: "Lane County Jail does not administer the Telmate phone system. Set up a prepaid account through Telmate at GettingOut.com or call 866-516-0115." },
    { question: "Can I call an inmate at Lane County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I find out if someone is in custody at Lane County Jail?", answer: "Use the county jail inmate records lookup. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "How do I block calls from Lane County Jail?", answer: "Contact Telmate at 866-516-0115 to block the number, or block it through your own phone carrier." },
  ],

  relatedFacilitySlugs: ["multnomah-county-detention-center", "oregon-state-penitentiary", "snake-river-correctional-institution"],
},

"canyon-county-jail": {
  id: "f-218",
  name: "Canyon County Jail",
  slug: "canyon-county-jail",
  type: "county",
  stateSlug: "idaho",
  stateName: "Idaho",
  stateAbbr: "ID",
  countySlug: null,
  countyName: "Canyon County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Canyon County Jail: Video Visits and Phone Guide",
  seoDescription: "How to contact someone at Canyon County Jail in Caldwell, Idaho. Video visitation info, phone calls, and family account setup.",

  description:
    "Canyon County Jail communication guide. Video visit and phone info for families of people held at the Caldwell, Idaho detention center.",

  overview: [
    "The Canyon County Detention Center in Caldwell, Idaho, is the county's main adult detention facility, housing pretrial detainees and sentenced inmates from Caldwell, Nampa, and the surrounding area.",
    "Remote video visitation is available through the jail's InmateSales video visit platform. Visitors must be on the inmate's approved list even for a video visit, and visits are scheduled in advance. The platform handles the scheduling and connection for remote visits from a computer or phone.",
    "The phone service vendor for the jail is not clearly published, so families should confirm the current phone setup directly with the Canyon County Sheriff's Office before funding any vendor account. As with most county jails, inmates cannot receive incoming calls, and all communications are monitored.",
  ],

  address: "219 N. 12th Ave., Caldwell, ID 83605",

  operatedBy: "Canyon County Sheriff's Office",
  rosterUrl: "https://jailroster.canyoncounty.id.gov/",

  providers: [
    {
      name: "InmateSales",
      slug: "inmatesales",
      initial: "I",
      color: "bg-slate-600",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Remote video visits through the InmateSales video visit platform. Schedule at inmatesales.com.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check the Canyon County Sheriff's pages for current options." },
    video: { status: "available", provider: "InmateSales", notes: "Remote video visits through the InmateSales video visit platform. Visitors must be on the approved list and schedule in advance." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "limited", provider: undefined, notes: "Phone vendor not confirmed: one directory names Consolidated Telecom (CTEL) and another names InmateSales. Check with the Canyon County Sheriff's Office before funding any account." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed. Check the Canyon County Sheriff's pages before sending funds." },
  },

  rules: [
    "Be on the inmate's approved list before scheduling any video visit, including remote ones.",
    "Schedule remote video visits in advance through the jail's video visit platform.",
    "Confirm the current phone vendor with the Sheriff's Office before funding any phone account.",
    "Inmates cannot receive incoming calls. They place outgoing calls to approved contacts.",
    "All communications are monitored and recorded under facility policy.",
  ],

  faq: [
    { question: "How do video visits work at Canyon County Jail?", answer: "Remote video visitation runs through the jail's InmateSales video visit platform. You must be on the inmate's approved list, even for a video visit, and visits are scheduled in advance." },
    { question: "Which company handles phone calls?", answer: "The phone vendor is not confirmed: one directory names Consolidated Telecom (CTEL) and another names InmateSales. Confirm the current phone setup with the Canyon County Sheriff's Office before funding any vendor account." },
    { question: "Can I call an inmate at the jail?", answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved contacts." },
    { question: "Can I message an inmate?", answer: "Electronic messaging is not confirmed for this facility. Video visits, phone calls, and mail are the established contact options." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed for this facility. Check the Canyon County Sheriff's pages for the current approved deposit method." },
    { question: "How do I find out if someone is in custody at Canyon County Jail?", answer: "Search the Canyon County Jail Roster by name. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at Canyon County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I send mail to an inmate at Canyon County Jail?", answer: "Address mail to the inmate's full name and inmate number at Canyon County Jail, and include a return address. Confirm current mail rules with the jail before sending." },
    { question: "How do I block calls from Canyon County Jail?", answer: "Ask the phone provider to block the number, or block it through your own phone carrier. You can also ask the jail to remove your number from the approved list." },
  ],

  relatedFacilitySlugs: ["ada-county-jail", "idaho-state-correctional-institution", "idaho-maximum-security-institution"],
},

"ventura-county-pre-trial-detention-facility": {
  id: "f-219",
  name: "Ventura County Pre-Trial Detention Facility",
  slug: "ventura-county-pre-trial-detention-facility",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Ventura County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Ventura County Pre-Trial Jail: Securus Phone Guide",
  seoDescription: "How to contact someone at Ventura County Pre-Trial Detention Facility. Securus for phone calls, video visits, messaging, and tablets.",

  description:
    "Ventura County Pre-Trial Detention Facility communication guide. Securus phone, video visit, and messaging info for families of people held at the Ventura jail.",

  overview: [
    "The Ventura County Pre-Trial Detention Facility in Ventura, also known as the Main Jail, is operated by the Ventura County Sheriff's Office and serves as the primary intake and booking facility for adult arrestees in the county. It houses both male and female inmates awaiting trial or serving short sentences.",
    "The Sheriff's Office is contracted with Securus Technologies as the provider of the incarcerated person phone system across the county's jail facilities. Securus also handles video visitation, email and texting, digital letters, and SecureView tablet rentals. Inmates can make calls directly from the tablets as well as the unit phones, and eMessaging supports text-based messages and pictures on a fee basis.",
    "Deposits for inmate accounts can be made online through JailATM, at the kiosk in the jail lobby, by phone, or by mailing a money order. Because Securus covers nearly all communication channels here, one funded Securus account is the starting point for calls, messages, and video visits.",
  ],

  address: "800 S. Victoria Avenue, Ventura, CA 93009",
  phone: "805-654-3335",

  website: "https://www.venturasheriff.org/divisions/detention-services/jail-facilities/",
  operatedBy: "Ventura County Sheriff's Office",

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
      notes: "Securus Technologies is contracted by the Ventura County Sheriff's Office for the incarcerated person phone system. Securus also handles video visitation, eMessaging, digital letters, and SecureView tablet rentals.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging through Securus, including text-based messages and pictures. Fee based. SecureView tablets also support messaging." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Schedule in advance. Inmates can also make video calls from rented SecureView tablets." },
    photos: { status: "available", provider: "Securus", notes: "Pictures can be sent through Securus eMessaging, subject to jail content rules." },
    phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls through the Securus phone system, from unit phones or SecureView tablets. All calls are recorded and monitored." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits can be made online through JailATM, at the lobby kiosk, by phone, or by mailed money order. Confirm current options on the Sheriff's detention pages." },
  },

  rules: [
    "Set up and fund a Securus account before your loved one calls. One account covers calls, messages, and video visits.",
    "Schedule video visits in advance through the Securus platform.",
    "Inmates cannot receive incoming calls. They place outgoing calls to approved contacts.",
    "Send money through JailATM online, the lobby kiosk, by phone, or by mailed money order.",
    "All calls, messages, and video visits are recorded and monitored, except privileged attorney calls.",
  ],

  faq: [
    { question: "Which company handles communication at the Ventura County Pre-Trial Detention Facility?", answer: "Securus Technologies. The Sheriff's Office is contracted with Securus for the incarcerated person phone system, and Securus also handles video visitation, eMessaging, digital letters, and SecureView tablet rentals." },
    { question: "How do video visits work?", answer: "Video visitation runs through Securus and is scheduled in advance. Inmates with rented SecureView tablets can also make video calls directly from the tablet." },
    { question: "Can I message an inmate?", answer: "Yes. Securus eMessaging supports text-based messages and pictures on a fee basis. Fund your Securus account to send messages." },
    { question: "How do I send money to an inmate?", answer: "Deposit online through JailATM, at the kiosk in the jail lobby, by phone, or by mailing a money order made payable to the inmate. Confirm current options on the Sheriff's detention pages." },
    { question: "Can inmates use tablets?", answer: "Yes. The facility offers Securus SecureView tablet rentals on a monthly basis, funded by the inmate, for calls, eMessaging, education, entertainment, and more." },
    { question: "How do I find out if someone is in custody at the Ventura County Pre-Trial Detention Facility?", answer: "Use the Sheriff's inmate search. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at the Pre-Trial Detention Facility directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I schedule a visit at the Pre-Trial Detention Facility?", answer: "Visits must be scheduled in advance. Confirm the current scheduling steps, visit length, and the inmate's unit schedule with the facility before booking." },
    { question: "How do I block calls from the Pre-Trial Detention Facility?", answer: "Ask Securus to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
  ],

  relatedFacilitySlugs: ["san-diego-central-jail", "los-angeles-county-mens-central-jail", "james-a-musick-facility"],
},

"san-joaquin-county-jail": {
  id: "f-220",
  name: "San Joaquin County Jail",
  slug: "san-joaquin-county-jail",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "San Joaquin County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "San Joaquin County Jail: Securus Phone Guide",
  seoDescription: "How to contact someone at San Joaquin County Jail in French Camp. Securus for inmate phone calls. Account setup and family info.",

  description:
    "San Joaquin County Jail communication guide. Securus phone setup info for families of people held at the French Camp jail.",

  overview: [
    "The San Joaquin County Jail in French Camp is operated by the San Joaquin County Sheriff's Office and is the main adult detention facility for the county, housing pretrial detainees and sentenced inmates from Stockton and the surrounding area.",
    "An incarcerated caller from the jail identified Securus Technologies as the facility's phone system. Families should set up and fund a Securus account so calls from the inmate can connect, and confirm the current vendor on the Sheriff's pages since provider information for this jail is limited.",
    "As with most county jails, inmates cannot receive incoming calls, and all calls are recorded and monitored. Families should get the inmate's booking number first, since it is needed for phone accounts, deposits, mail, and visitation registration.",
  ],

  address: "7000 Michael Canlis Blvd, French Camp, CA 95231",
  phone: "(209) 468-4562",

  operatedBy: "San Joaquin County Sheriff's Office",

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
      notes: "An incarcerated caller from this jail identified Securus Technologies as the phone system. Confirm the current vendor with the San Joaquin County Sheriff's Office.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check the San Joaquin County Sheriff's pages for current options." },
    video: { status: "limited", provider: undefined, notes: "Video visitation is not confirmed on the available sources. Check the Sheriff's visitation pages before planning." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls through Securus, per an incarcerated caller from the jail. Confirm the current vendor with the Sheriff's Office." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed. Check the San Joaquin County Sheriff's pages before sending funds." },
  },

  rules: [
    "Get the inmate's booking number first. It is needed for phone accounts, deposits, mail, and visits.",
    "Set up and fund a Securus account, and confirm the current phone vendor with the Sheriff's Office.",
    "Inmates cannot receive incoming calls. They place outgoing calls to approved contacts.",
    "All calls are recorded and monitored. Do not discuss case details on jail calls.",
    "Check the Sheriff's visitation pages for current visiting rules before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at San Joaquin County Jail?", answer: "Securus Technologies, identified by an incarcerated caller from the jail as the facility's phone system. Set up and fund a Securus account, and confirm the current vendor with the San Joaquin County Sheriff's Office." },
    { question: "Can I call an inmate at San Joaquin County Jail?", answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved contacts through the jail's phone system." },
    { question: "Can I video visit or message an inmate?", answer: "Video visitation and electronic messaging are not confirmed for this facility. Check the Sheriff's pages for current options." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed for this facility. Check the San Joaquin County Sheriff's pages for the current approved deposit method." },
    { question: "What do I need to set up contact?", answer: "Start with the inmate's booking number. You will need it for phone accounts, commissary deposits, mail, and visitation registration." },
    { question: "How do I find out if someone is in custody at San Joaquin County Jail?", answer: "Use the Sheriff's inmate search. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at San Joaquin County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I schedule a visit at San Joaquin County Jail?", answer: "Jail Core visits are by appointment. Call Jail Core Inmate Visiting at 209-468-4295, South Jail Visiting at 209-468-4676, or Honor Farm Visiting at 209-468-4384 for the facility where the person is housed." },
    { question: "How do I block calls from San Joaquin County Jail?", answer: "Ask Securus to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
  ],

  relatedFacilitySlugs: ["folsom-state-prison", "corcoran-state-prison", "san-diego-central-jail"],
},

"lerdo-facility": {
  id: "f-221",
  name: "Lerdo Detention Facilities",
  slug: "lerdo-facility",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Kern County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Lerdo Facility (Kern County): Securus Phone Guide",
  seoDescription: "How to contact someone at the Lerdo detention facilities in Bakersfield. Securus for phone calls, video visits, messaging, and tablets.",

  description:
    "Lerdo Facility communication guide. Securus phone, video visit, and messaging info for families of people held at Kern County's Lerdo jail complex in Bakersfield.",

  overview: [
    "The Lerdo detention facilities in Bakersfield are operated by the Kern County Sheriff's Department and form the county's main jail complex, with separate pre-trial, maximum-medium, and minimum-security facilities on the Lerdo grounds. Together they house pretrial detainees and sentenced inmates for Kern County.",
    "Securus Technologies handles the inmate phone system, video visitation, email and texting, and digital letters across the Lerdo facilities. SecureView tablet rentals are also available: inmates can make calls directly from the tablets, use eMessaging for text-based messages and pictures, and access education, entertainment, and facility services. The county's own orientation materials route inmate mail through the Securus Digital Mail Center.",
    "Because the Lerdo complex includes several separate facilities, families should confirm exactly which Lerdo facility their loved one is in before setting up accounts, since schedules and procedures can differ. One funded Securus account covers calls, messages, and video visits across the complex.",
  ],

  operatedBy: "Kern County Sheriff's Department",
  mailingAddress: "Effective June 1, 2025, Kern County no longer accepts physical personal mail at its detention facilities. Personal mail is scanned and distributed digitally on inmate kiosks and tablets. Sign up through Securus Technologies for the digital mail service. Privileged legal mail is not affected by this change.",
  rosterUrl: "https://www.kernsheriff.org/Inmate-Search",
  commissary: "Money can be deposited at a kiosk at the Metro Court Holding, Max-Med, or Justice Facility, by phone at 1-866-345-1884, or online through Access Corrections.",

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
      notes: "Securus Technologies handles the phone system, video visitation, eMessaging, and digital letters at the Lerdo facilities. SecureView tablet rentals are available, and mail routes through the Securus Digital Mail Center.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging through Securus, including text-based messages and pictures. Fee based. SecureView tablets also support messaging." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Schedule in advance. Inmates can also make video calls from rented SecureView tablets." },
    photos: { status: "available", provider: "Securus", notes: "Pictures can be sent through Securus eMessaging, subject to jail content rules." },
    phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls through the Securus phone system, from unit phones or SecureView tablets. All calls are recorded and monitored." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed on the available sources. Check the Kern County Sheriff's detentions pages before sending funds." },
  },

  rules: [
    "Confirm which Lerdo facility your loved one is in (pre-trial, max-medium, or minimum) before setting up accounts.",
    "Set up and fund one Securus account. It covers calls, messages, and video visits across the complex.",
    "Schedule video visits in advance through the Securus platform.",
    "Send general mail through the Securus Digital Mail Center, per the county's orientation materials.",
    "All calls, messages, and video visits are recorded and monitored, except privileged attorney calls.",
  ],

  faq: [
    { question: "Which company handles communication at the Lerdo facilities?", answer: "Securus Technologies handles the inmate phone system, video visitation, email and texting, and digital letters. SecureView tablet rentals are also available for calls, eMessaging, and more." },
    { question: "How do video visits work?", answer: "Video visitation runs through Securus and is scheduled in advance. Inmates with rented SecureView tablets can also make video calls directly from the tablet." },
    { question: "Can I message an inmate?", answer: "Yes. Securus eMessaging supports text-based messages and pictures on a fee basis. Fund your Securus account to send messages." },
    { question: "Where do I send mail to an inmate?", answer: "General mail routes through the Securus Digital Mail Center for Kern County, per the Sheriff's orientation materials. Follow the county's mail instructions for the correct addressing." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed on the available sources. Check the Kern County Sheriff's detentions pages for the current approved deposit method." },
    { question: "How do I find out if someone is in custody at a Lerdo facility?", answer: "Use the Kern County Sheriff's inmate search. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at a Lerdo facility directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I pick up an inmate's property from a Lerdo facility?", answer: "Property releases are processed Monday through Friday, 8:00 AM to 5:00 PM, at the Justice Facility, 17801 Industrial Farm Road, Bakersfield. The person picking up property needs a valid state or federal photo ID. Allow 30 minutes to 3 hours for processing." },
    { question: "How do I block calls from a Lerdo facility?", answer: "Ask Securus to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
  ],

  relatedFacilitySlugs: ["corcoran-state-prison", "california-institution-for-men", "san-diego-central-jail"],
},

"martinez-detention-facility": {
  id: "f-222",
  name: "Martinez Detention Facility",
  slug: "martinez-detention-facility",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Contra Costa County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Martinez Detention Facility: GTL Phone Guide",
  seoDescription: "How to contact someone at Martinez Detention Facility in Contra Costa County. GTL for inmate phone calls. Account setup and family info.",

  description:
    "Martinez Detention Facility communication guide. GTL phone setup info for families of people held at the Contra Costa County jail in Martinez.",

  overview: [
    "The Martinez Detention Facility in Martinez is operated by the Contra Costa County Sheriff's Office and is the county's main adult detention facility, housing pretrial detainees and sentenced inmates.",
    "Phone calls from the Martinez Detention Facility run through Global Tel Link (GTL). Families set up a GTL account and add phone time so the inmate can call approved numbers. Inmates cannot receive incoming calls, and all calls are recorded and monitored under facility policy.",
    "The phone vendor information for this jail is limited, so families should confirm the current setup with the Contra Costa County Sheriff's Office before funding an account. Messaging and video visitation options are not confirmed for this facility.",
  ],

  address: "901 Court Street, Martinez, CA 94553",
  phone: "(925) 335-4600",

  operatedBy: "Contra Costa County Sheriff's Office",

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
      notes: "GTL provides the inmate phone service at the Martinez Detention Facility. Families add GTL phone time so the inmate can call approved numbers.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Check the Contra Costa County Sheriff's pages for current options." },
    video: { status: "limited", provider: undefined, notes: "Video visitation is not confirmed for this facility. Check the Sheriff's visitation pages before planning." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Physical photos by mail follow standard jail mail rules." },
    phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls through GTL. Set up and fund an account before the first call. Confirm the current vendor with the Sheriff's Office." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposit options are not confirmed. Check the Contra Costa County Sheriff's pages before sending funds." },
  },

  rules: [
    "Set up and fund a GTL account before your loved one calls, and confirm the current vendor with the Sheriff's Office.",
    "Inmates cannot receive incoming calls. They place outgoing calls to approved numbers.",
    "All calls are recorded and monitored. Do not discuss case details on jail calls.",
    "Check the Sheriff's visitation pages for current visiting rules before traveling.",
    "Get the inmate's booking number first. It is needed for accounts, deposits, and mail.",
  ],

  faq: [
    { question: "Which company handles phone calls at Martinez Detention Facility?", answer: "Global Tel Link (GTL). Families set up a GTL account and add phone time so the inmate can call approved numbers. Confirm the current vendor with the Contra Costa County Sheriff's Office." },
    { question: "Can I call an inmate at Martinez Detention Facility?", answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through the GTL phone system." },
    { question: "Can I video visit or message an inmate?", answer: "Video visitation and electronic messaging are not confirmed for this facility. Check the Sheriff's pages for current options." },
    { question: "How do I send money to an inmate?", answer: "Deposit options are not confirmed for this facility. Check the Contra Costa County Sheriff's pages for the current approved deposit method." },
    { question: "What do I need to set up contact?", answer: "Start with the inmate's booking number. You will need it for phone accounts, commissary deposits, mail, and visitation registration." },
    { question: "How do I find out if someone is in custody at Martinez Detention Facility?", answer: "Use the Contra Costa Sheriff's inmate search. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "Can I call an inmate at Martinez Detention Facility directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I schedule a visit at Martinez Detention Facility?", answer: "Confirm the current visiting schedule and scheduling steps with the facility before your first visit, since visiting rules vary by housing unit." },
    { question: "How do I block calls from Martinez Detention Facility?", answer: "Ask GTL to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
  ],

  relatedFacilitySlugs: ["san-diego-central-jail", "theo-lacy-facility"],
},

}
