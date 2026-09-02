import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS — Batch 2 (20 new facilities)
// Includes 12 orphan fixes + 8 new state expansions
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH2: Record<string, FacilityDetail> = {

  // ─── Orphan Fixes: Georgia ───

  "georgia-state-prison": {
    id: "f-georgia-state-prison",
    name: "Georgia State Prison",
    slug: "georgia-state-prison",
    type: "state",
    stateSlug: "georgia",
    stateName: "Georgia",
    stateAbbr: "GA",
    countySlug: null,
    countyName: "Tattnall County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Georgia State Prison: Securus Phone, JPay Messaging and Money",
    seoDescription: "How to contact someone at Georgia State Prison in Reidsville. Securus Technologies handles phone calls. JPay for messaging, video visits, and money transfers. GDC number required.",

    description:
      "Georgia State Prison communication guide. Find JPay messaging and GTL phone options for families at this historic maximum-security facility in Reidsville, Georgia.",

    overview: [
      "Georgia State Prison is a maximum-security correctional facility operated by the Georgia Department of Corrections, located in Reidsville in Tattnall County in the southeastern part of the state, roughly 65 miles west of Savannah. Founded in 1937, it is one of the oldest state prisons in Georgia and has housed some of the state's most serious offenders throughout its history. The facility sits in a largely rural area and has been the subject of significant attention over the years due to its conditions and population management. Today it functions as a maximum-security institution within the Georgia DOC system.",
      "Communication at Georgia State Prison follows the statewide Georgia Department of Corrections provider contracts. JPay is the primary platform for electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Georgia DOC number to begin correspondence. GTL manages phone calls and video visitation under the GDC statewide contract. The standard two-platform approach applies here as it does across the Georgia state system: JPay for messaging and money, GTL for phone and video, with each requiring a separate account and separate funding.",
      "For families in the Savannah area, Georgia State Prison is a reasonable drive west. For those in Atlanta or other parts of the state, the facility is more distant. Many families rely on JPay messaging and GTL video visits for regular contact rather than making the full trip to Tattnall County. Because JPay and GTL serve all Georgia DOC facilities statewide, accounts created for Georgia State Prison carry over automatically if an inmate is transferred to another Georgia facility. Use the GDC offender search at gdc.ga.gov to confirm current housing location before setting up or funding any account.",
    ],

    address: "100 Georgia State Prison Road, Reidsville, GA 30453",
    phone: "(912) 557-7101",
    website: "https://gdc.ga.gov",
    inmateCapacity: 1500,
    established: 1937,
    operatedBy: "Georgia Department of Corrections (GDC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Georgia DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Georgia DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Georgia DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to GDC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by GDC staff before delivery.",
      "GDC system-wide accounts transfer if the inmate moves to another Georgia facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Georgia State Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Georgia DOC number. Purchase stamps and compose your message. GDC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Georgia State Prison?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "Is video visitation available at Georgia State Prison?",
        answer: "Yes, remote video visits are available through GTL. Log into your GTL account, search for Georgia State Prison, and select an available time slot. Schedule well in advance, as popular slots fill quickly.",
      },
      {
        question: "If my loved one transfers to another Georgia DOC facility, do my accounts still work?",
        answer: "Yes. JPay and GTL both serve all Georgia DOC facilities statewide. Your accounts, contact list, and history carry over automatically. Update the facility name when scheduling GTL video visits after any transfer.",
      },
      {
        question: "How do I send money to a Georgia State Prison inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Georgia State Prison. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "georgia-diagnostic-and-classification-prison",
      "fulton-county-jail",
      "louisiana-state-penitentiary",
    ],
  },

  "fulton-county-jail": {
    id: "f-fulton-county-jail",
    name: "Fulton County Jail",
    slug: "fulton-county-jail",
    type: "county",
    stateSlug: "georgia",
    stateName: "Georgia",
    stateAbbr: "GA",
    countySlug: null,
    countyName: "Fulton County",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "Fulton County Jail: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Fulton County Jail in Atlanta GA. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this Georgia facility.",

    description:
      "Fulton County Jail communication guide. Find GTL phone, video, and messaging options for families in Atlanta. Learn how to stay connected at the Fulton County jail complex.",

    overview: [
      "Fulton County Jail is the primary detention facility operated by the Fulton County Sheriff's Office in Atlanta, Georgia. With Atlanta as its county seat, Fulton County is the most populous county in Georgia, and the jail system reflects that scale. The facility processes a large number of bookings from across Atlanta and Fulton County, with most people held in pretrial status awaiting court proceedings. The jail complex includes multiple units and is located near the downtown Atlanta court district, making it central to the Fulton County criminal justice system.",
      "Communication at Fulton County Jail is managed through GTL, which provides phone calls, video visitation, and electronic messaging services under the county contract. Families create a GTL account to access all available services. For phone calls, setting up a GTL prepaid account linked to your phone number allows you to receive inmate-initiated calls. Remote video visits can be scheduled through the GTL platform and are especially practical for families outside the Atlanta area. Electronic messaging via GTL delivers messages digitally within the facility.",
      "Fulton County Jail uses GTL rather than the JPay and GTL system used by Georgia state prisons. If a person is convicted and transferred from the county jail to a Georgia DOC state prison, the communication setup will change. State prison communication uses JPay for messaging and money, and GTL under a separate GDOC contract for phone and video. Checking the facility before funding any account prevents spending money on a platform that no longer applies. Use the Fulton County Sheriff's Office inmate search to confirm current location before setting up accounts.",
    ],

    address: "901 Rice Street NW, Atlanta, GA 30318",
    phone: "(404) 612-5100",
    website: "https://www.fultoncountyga.gov/departments/sheriff",
    inmateCapacity: 2800,
    established: 1989,
    operatedBy: "Fulton County Sheriff's Office",

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
        moneyTransfer: true,
        notes: "All Fulton County Jail communication — phone, video, messaging, and money — runs through GTL.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Delivered digitally within the facility." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Fulton County content restrictions. No digital photo service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL prepaid account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL serves Fulton County Jail. After transfer to a Georgia state prison, JPay is required for messaging.",
      "All calls, messages, and visits are monitored by Fulton County Sheriff's staff.",
      "One GTL account covers all Fulton County jail communication services.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Fulton County Jail?",
        answer: "All communication services at Fulton County Jail — phone, video, messaging, and money — are through GTL. Create a single account at telmate.com or through the GTL Connect app to access everything.",
      },
      {
        question: "Can I do a video visit with someone at Fulton County Jail?",
        answer: "Yes, remote video visits are available through GTL. Log into your account, navigate to video visitation, select Fulton County Jail, and schedule a time slot in advance. You will need a device with a working camera.",
      },
      {
        question: "Does JPay work at Fulton County Jail?",
        answer: "No. JPay is used for Georgia DOC state prisons, not for Fulton County jail. Fulton County Jail uses GTL. If your loved one is transferred to a state prison after sentencing, you will then need JPay for messaging.",
      },
      {
        question: "How do I find out if someone is currently in Fulton County Jail?",
        answer: "The Fulton County Sheriff's Office provides an online inmate search at fultoncountyga.gov. You can search by name to confirm current custody status and booking information.",
      },
      {
        question: "How do I send money to a Fulton County Jail inmate?",
        answer: "Commissary deposits can be made through GTL at telmate.com or through AccessCorrections. Add funds via debit or credit card. Processing typically takes one business day.",
      },
    ],

    relatedFacilitySlugs: [
      "georgia-state-prison",
      "georgia-diagnostic-and-classification-prison",
      "jefferson-county-jail",
    ],
  },

  // ─── Orphan Fixes: Indiana ───

  "pendleton-correctional-facility": {
    id: "f-pendleton-cf",
    name: "Pendleton Correctional Facility",
    slug: "pendleton-correctional-facility",
    type: "state",
    stateSlug: "indiana",
    stateName: "Indiana",
    stateAbbr: "IN",
    countySlug: null,
    countyName: "Madison County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Pendleton Correctional: ViaPath Phone and GettingOut Messaging",
    seoDescription: "How to contact someone at Pendleton Correctional Facility in Indiana. ViaPath ConnectNetwork handles phone calls. GettingOut for digital messaging. Must be on approved 20-person call list.",

    description:
      "Pendleton Correctional Facility communication guide. Find JPay messaging and GTL phone options for families at this Indiana Department of Correction maximum-security facility.",

    overview: [
      "Pendleton Correctional Facility is a maximum-security state prison operated by the Indiana Department of Correction, located in the town of Pendleton in Madison County, roughly 35 miles northeast of Indianapolis. One of Indiana's older correctional institutions, the facility opened in 1923 and has housed some of the state's most serious offenders over the past century. Today it serves as a close and maximum-security institution within the IDOC system. Its location in Madison County, within reach of the Indianapolis metropolitan area, makes it more accessible for central Indiana families than remote facilities in the northern or southern part of the state.",
      "Communication at Pendleton Correctional Facility follows Indiana DOC provider contracts. JPay manages electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Indiana DOC number to begin correspondence. GTL manages phone calls and video visitation under the IDOC statewide contract. The process is straightforward: set up JPay for messaging and money, GTL for phone calls and video visits. These are separate platforms with separate accounts, and funds on one do not transfer to the other.",
      "Pendleton's location about 35 miles from Indianapolis makes in-person visits practical for many central Indiana families. I-69 provides direct access from the northeast side of Indianapolis. For families outside Indianapolis or those from other states, JPay messaging and GTL video visits offer consistent alternatives. Because IDOC uses JPay and GTL system-wide, accounts set up for Pendleton will work at any other Indiana DOC facility if an inmate is transferred within the state system.",
    ],

    address: "4490 W. Reformatory Road, Pendleton, IN 46064",
    phone: "(765) 778-2107",
    website: "https://www.in.gov/idoc",
    inmateCapacity: 2000,
    established: 1923,
    operatedBy: "Indiana Department of Correction (IDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Indiana DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Indiana DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Indiana DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to IDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by IDOC staff before delivery.",
      "IDOC system-wide accounts carry over if the inmate transfers to another Indiana facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Pendleton Correctional Facility?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Indiana DOC number. Purchase stamps and compose your message. IDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Pendleton?",
        answer: "Phone calls use GTL. Create an account at telmate.com or the GTL Connect app, set up a prepaid AdvancePay account linked to your phone number, and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "How far is Pendleton from Indianapolis?",
        answer: "Pendleton is about 35 miles northeast of Indianapolis — roughly a 40-minute drive via I-69. For Indianapolis-area families, in-person visits are very feasible.",
      },
      {
        question: "Do accounts carry over if my loved one is transferred to another Indiana facility?",
        answer: "Yes. JPay and GTL both serve all Indiana DOC facilities under statewide contracts. Your accounts, contact history, and message records carry over automatically to any other IDOC facility.",
      },
      {
        question: "How do I send money to a Pendleton inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Pendleton Correctional Facility. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "indiana-state-prison",
      "federal-correctional-complex-terre-haute",
      "marion-county-jail",
    ],
  },

  "marion-county-jail": {
    id: "f-marion-county-jail",
    name: "Marion County Jail",
    slug: "marion-county-jail",
    type: "county",
    stateSlug: "indiana",
    stateName: "Indiana",
    stateAbbr: "IN",
    countySlug: null,
    countyName: "Marion County",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "Marion County Jail: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Marion County Jail in Indianapolis IN. ViaPath ConnectNetwork handles phone calls. GettingOut for digital messaging. Find providers and contact information.",

    description:
      "Marion County Jail communication guide. Find GTL phone, video, and messaging options for families in Indianapolis. Learn how to stay connected at the Indianapolis jail complex.",

    overview: [
      "Marion County Jail, operated by the Indianapolis Metropolitan Police Department and Marion County Sheriff's Office, is the primary pretrial detention facility for Indiana's most populous county. Located in downtown Indianapolis, the jail serves the county seat of Indiana and processes bookings from across Marion County. The facility houses both pretrial detainees awaiting court proceedings and individuals serving shorter sentences. Indianapolis's size and population mean the jail system maintains a substantial daily population across its facilities.",
      "Communication at Marion County Jail is managed through GTL, which provides phone calls, video visitation, and electronic messaging services under the county contract. Families create a GTL account to access all available services. For phone calls, funding a GTL prepaid account linked to your phone number allows you to receive inmate-initiated calls. Remote video visits can be scheduled through the GTL platform. Electronic messaging via GTL delivers messages digitally within the facility.",
      "Marion County Jail uses GTL under a county contract, not the JPay and GTL setup used by Indiana state prisons. If your loved one is convicted and transferred to an Indiana DOC state facility, communication will shift to JPay for messaging and a different GTL contract for phone and video. Until that transfer happens, the GTL county account is the right platform. Use the Marion County inmate search to verify current location before setting up accounts.",
    ],

    address: "695 Justice Way, Indianapolis, IN 46203",
    phone: "(317) 327-1700",
    website: "https://www.indy.gov/agency/marion-county-sheriffs-office",
    inmateCapacity: 2600,
    established: 1970,
    operatedBy: "Marion County Sheriff's Office",

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
        moneyTransfer: true,
        notes: "All Marion County Jail communication — phone, video, messaging, and money — runs through GTL.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Delivered digitally within the facility." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Marion County content restrictions. No digital photo service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL prepaid account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL serves Marion County Jail. After transfer to an IDOC state prison, JPay is required for messaging.",
      "All calls, messages, and visits are monitored by Marion County Sheriff's staff.",
      "One GTL account covers all Marion County jail communication services.",
      "Video visits require advance scheduling through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Marion County Jail?",
        answer: "All services — phone, video, messaging, and money — are through GTL. Create an account at telmate.com or through the GTL Connect app. One account covers all communication.",
      },
      {
        question: "Can I do a video visit with someone at Marion County Jail?",
        answer: "Yes, remote video visits are available through GTL. Log in, navigate to video visitation, select Marion County Jail, and schedule an available slot. You need a device with a camera and a stable internet connection.",
      },
      {
        question: "What changes when someone is transferred to an Indiana state prison?",
        answer: "After transfer to an Indiana DOC facility, you will need a JPay account for messaging, photos, and trust account deposits. GTL continues for phone and video under a different IDOC contract. Set up JPay before or immediately after the transfer to avoid communication gaps.",
      },
      {
        question: "How do I find out if someone is in Marion County Jail?",
        answer: "Marion County provides an online inmate search through the Marion County Sheriff's Office at indy.gov. Search by name to confirm current booking and custody status.",
      },
      {
        question: "How do I send money to a Marion County Jail inmate?",
        answer: "Commissary deposits are made through GTL at telmate.com or through AccessCorrections. Add funds via debit or credit card. Processing typically takes one business day.",
      },
    ],

    relatedFacilitySlugs: [
      "pendleton-correctional-facility",
      "indiana-state-prison",
      "cook-county-jail",
    ],
  },

  // ─── Orphan Fix: Virginia ───

  "sussex-i-state-prison": {
    id: "f-sussex-i",
    name: "Sussex I State Prison",
    slug: "sussex-i-state-prison",
    type: "state",
    stateSlug: "virginia",
    stateName: "Virginia",
    stateAbbr: "VA",
    countySlug: null,
    countyName: "Sussex County",
    securityLevel: "Close / Maximum",
    hasDetailPage: true,

    description:
      "Sussex I State Prison communication guide. Find JPay messaging and GTL phone options for families at this close-security Virginia DOC facility in Sussex County.",

    overview: [
      "Sussex I State Prison is a close-security state correctional facility operated by the Virginia Department of Corrections, located in Sussex County in the southeastern part of Virginia, roughly 40 miles south of Richmond and about 60 miles west of the Hampton Roads area. The facility was opened in the early 1990s and operates alongside Sussex II State Prison on the same grounds, with both institutions sharing administrative infrastructure. Sussex I houses adult male inmates at close-security classification, which is the designation in the Virginia system for inmates requiring a high level of supervision short of supermax-style restriction.",
      "Communication at Sussex I follows Virginia DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Virginia DOC number to begin correspondence. GTL manages phone calls and video visitation under the VADOC statewide contract. As with other Virginia state facilities, the two-platform setup applies: JPay for messaging and money, GTL for phone and video. Both platforms serve the Virginia DOC system statewide, so accounts created for Sussex I carry over if an inmate transfers within the system.",
      "Sussex County is rural, located between Richmond and Hampton Roads along a stretch of US-460. For families in Richmond, the facility is about 40 miles away — a straightforward drive. For Northern Virginia families, the distance is greater. Because JPay and GTL cover the entire VADOC system, families who have already set up accounts for other Virginia DOC facilities do not need to start over when dealing with Sussex I. Confirm current housing using the VADOC offender search at vadoc.virginia.gov before setting up or funding any account.",
    ],

    address: "24414 Musselwhite Drive, Waverly, VA 23891",
    phone: "(804) 834-2678",
    website: "https://vadoc.virginia.gov",
    inmateCapacity: 1200,
    established: 1995,
    operatedBy: "Virginia Department of Corrections (VADOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Virginia DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Virginia DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Virginia DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to VADOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Sussex I and Sussex II are on the same grounds but operate independently. Confirm the specific facility.",
      "JPay and GTL are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages are reviewed by VADOC staff before delivery.",
      "VADOC system-wide accounts carry over if the inmate transfers to another Virginia facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Sussex I State Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Virginia DOC number. Purchase stamps and send your message. VADOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Sussex I?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you directly from facility phones.",
      },
      {
        question: "What is the difference between Sussex I and Sussex II?",
        answer: "Sussex I and Sussex II are two separate state prison facilities on the same grounds in Sussex County. They have different inmate populations and classifications. Confirm which facility your loved one is assigned to using the VADOC offender search at vadoc.virginia.gov before scheduling visits or sending messages.",
      },
      {
        question: "How far is Sussex I from Richmond?",
        answer: "Sussex I is in Waverly in Sussex County, about 40 miles south of Richmond via US-460 — roughly a 45-minute drive. For Hampton Roads families, the facility is about 60 miles west. In-person visits are feasible for families in both areas.",
      },
      {
        question: "How do I send money to a Sussex I inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Sussex I State Prison. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "red-onion-state-prison",
      "federal-correctional-complex-petersburg",
      "central-prison",
    ],
  },

  // ─── Orphan Fixes: Louisiana ───

  "elayn-hunt-correctional-center": {
    id: "f-elayn-hunt",
    name: "Elayn Hunt Correctional Center",
    slug: "elayn-hunt-correctional-center",
    type: "state",
    stateSlug: "louisiana",
    stateName: "Louisiana",
    stateAbbr: "LA",
    countySlug: null,
    countyName: "St. Gabriel, Iberville Parish",
    securityLevel: "Medium / Maximum",
    hasDetailPage: true,
    seoTitle: "Elayn Hunt Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Elayn Hunt Correctional Center in St. Gabriel LA. Find the correct provider for phone calls, messaging, and money transfers at this Louisiana DOC facility.",

    description:
      "Elayn Hunt Correctional Center communication guide. Find JPay messaging and GTL phone options for families at this Louisiana DOC facility in St. Gabriel, Iberville Parish.",

    overview: [
      "Elayn Hunt Correctional Center is a medium and maximum-security state correctional facility operated by the Louisiana Department of Public Safety and Corrections, located in St. Gabriel in Iberville Parish, about 25 miles south of Baton Rouge. The facility opened in 1976 and was renamed in honor of Elayn Hunt, a Louisiana corrections reformer. It serves as one of the major medium-security institutions in the Louisiana state prison system and also houses an intake and diagnostic center for newly sentenced offenders entering the Louisiana DOC. Because of its diagnostic role, some newly admitted inmates pass through Hunt before being assigned to a permanent facility.",
      "Communication at Elayn Hunt follows Louisiana DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Louisiana DOC number. GTL manages phone calls and video visitation under the statewide contract. The two-platform setup applies here as it does across the Louisiana state system. If your loved one is in the diagnostic/intake process at Hunt rather than serving as a permanent resident, they may take several weeks to gain full communication access.",
      "Hunt's location about 25 miles south of Baton Rouge makes it reasonably accessible for families in the capital region compared to more remote Louisiana facilities like Angola in West Feliciana Parish. For families in New Orleans, the drive is roughly 80 miles on I-10. Because JPay and GTL serve all Louisiana DOC facilities statewide, accounts created for Elayn Hunt work at any permanent facility an inmate may be transferred to after the classification process is complete.",
    ],

    address: "17544 Tunica Trace, St. Gabriel, LA 70776",
    phone: "(225) 642-5200",
    website: "https://www.doc.louisiana.gov",
    inmateCapacity: 1800,
    established: 1976,
    operatedBy: "Louisiana Department of Public Safety and Corrections (LDPSC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photos, and trust account deposits. Uses Louisiana DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Louisiana DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available once intake classification is complete. New arrivals may have a brief delay." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to Louisiana DOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls. Fund GTL AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Newly admitted inmates in the diagnostic process may have a brief delay before full communication access is active.",
      "JPay and GTL are separate platforms. Messaging stamps and phone funds do not transfer between them.",
      "Messages are reviewed by Louisiana DOC staff before delivery.",
      "Louisiana DOC system-wide accounts carry over if the inmate transfers to a permanent facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Elayn Hunt Correctional Center?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Louisiana DOC number. Purchase stamps and send your message. If the inmate is new to the system and still in classification, allow a few extra days before messaging becomes fully active.",
      },
      {
        question: "How do I set up phone calls from Elayn Hunt?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "Is Elayn Hunt a permanent assignment or an intake facility?",
        answer: "It serves both functions. Some inmates are permanently assigned to Hunt for their sentence. Others are in the diagnostic and classification process before being sent to a permanent Louisiana DOC facility. Use the LDOC offender search to confirm current assignment status.",
      },
      {
        question: "How far is Elayn Hunt from Baton Rouge and New Orleans?",
        answer: "Hunt is in St. Gabriel, about 25 miles south of Baton Rouge — roughly a 30-minute drive. New Orleans is approximately 80 miles east on I-10, about an hour and 15 minutes. In-person visits are feasible for families in both cities.",
      },
      {
        question: "How do I send money to an Elayn Hunt inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Elayn Hunt Correctional Center. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "louisiana-state-penitentiary",
      "orleans-justice-center",
      "mississippi-state-penitentiary",
    ],
  },

  "orleans-justice-center": {
    id: "f-orleans-justice-center",
    name: "Orleans Justice Center",
    slug: "orleans-justice-center",
    type: "county",
    stateSlug: "louisiana",
    stateName: "Louisiana",
    stateAbbr: "LA",
    countySlug: null,
    countyName: "Orleans Parish",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "Orleans Justice Center: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Orleans Justice Center in New Orleans LA. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this facility.",

    description:
      "Orleans Justice Center communication guide. Find GTL phone, video, and messaging options for families in New Orleans. Learn how to stay connected at the Orleans Parish jail.",

    overview: [
      "Orleans Justice Center is the primary jail facility operated by the Orleans Parish Sheriff's Office in New Orleans, Louisiana. Opened in 2015 as a replacement for the older Orleans Parish Prison complex, the OJC was designed to house pretrial detainees and sentenced individuals serving shorter terms in Orleans Parish. New Orleans is Louisiana's largest city and a major cultural and economic hub, and the jail system serves both the city's large permanent population and visitors. The facility is located in the Mid-City neighborhood of New Orleans and is managed by the Orleans Parish Sheriff's Office.",
      "Communication at Orleans Justice Center is managed through GTL, which provides phone calls, video visitation, and electronic messaging services under the parish contract. Families create a GTL account to access all available services. For phone calls, funding a GTL prepaid account linked to your phone number allows you to receive inmate-initiated calls. Video visits can be scheduled remotely through GTL, which is particularly useful for families traveling from outside the New Orleans area. Electronic messaging through GTL delivers communications digitally within the facility.",
      "Orleans Justice Center uses GTL under a parish contract, separate from the JPay and GTL contracts used by Louisiana state prisons. If someone is convicted and transferred to a Louisiana DOC state facility after sentencing, communication will change to JPay for messaging and money. Until that transfer, GTL is the correct platform for all OJC communication. Because New Orleans is located in a hurricane-prone area, facility operations can be affected by severe weather events, which may temporarily affect communication access. Check the OPSO website for any current advisories.",
    ],

    address: "2700 Perdido Street, New Orleans, LA 70119",
    phone: "(504) 822-8000",
    website: "https://www.opso.us",
    inmateCapacity: 1438,
    established: 2015,
    operatedBy: "Orleans Parish Sheriff's Office (OPSO)",

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
        moneyTransfer: true,
        notes: "All Orleans Justice Center communication — phone, video, messaging, and money — runs through GTL.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Delivered digitally within the facility." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to OPSO content restrictions. No digital photo service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL prepaid account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL serves Orleans Justice Center. After transfer to a Louisiana state prison, JPay is required for messaging.",
      "All calls, messages, and visits are monitored by Orleans Parish Sheriff's staff.",
      "One GTL account covers all OJC communication services.",
      "Video visits require advance scheduling through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Orleans Justice Center?",
        answer: "All communication services — phone, video, messaging, and money — are through GTL. Create a single account at telmate.com or the GTL Connect app. One account covers everything at OJC.",
      },
      {
        question: "Can I do a video visit at Orleans Justice Center?",
        answer: "Yes, remote video visits are available through GTL. Log into your account, search for Orleans Justice Center, and select an available time slot. Schedule well in advance. You need a device with a working camera.",
      },
      {
        question: "Does JPay work at Orleans Justice Center?",
        answer: "No. JPay is used for Louisiana DOC state prisons, not for Orleans Parish jail. OJC uses GTL for all communication. If your loved one is transferred to a state prison after sentencing, you will then need a JPay account.",
      },
      {
        question: "How do I find out if someone is in Orleans Justice Center?",
        answer: "The Orleans Parish Sheriff's Office provides an inmate search at opso.us. Search by name to confirm current custody status and booking information.",
      },
      {
        question: "How do I send money to an Orleans Justice Center inmate?",
        answer: "Commissary deposits can be made through GTL at telmate.com or through AccessCorrections. Add funds via debit or credit card. Processing typically takes one business day.",
      },
    ],

    relatedFacilitySlugs: [
      "elayn-hunt-correctional-center",
      "louisiana-state-penitentiary",
      "harris-county-jail",
    ],
  },

  // ─── Orphan Fix: Oklahoma ───

  "oklahoma-state-penitentiary": {
    id: "f-oklahoma-state-pen",
    name: "Oklahoma State Penitentiary",
    slug: "oklahoma-state-penitentiary",
    type: "state",
    stateSlug: "oklahoma",
    stateName: "Oklahoma",
    stateAbbr: "OK",
    countySlug: null,
    countyName: "Pittsburg County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Oklahoma State Penitentiary: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Oklahoma State Penitentiary in McAlester. Find the correct provider for phone calls, electronic messaging, and money transfers at this Oklahoma DOC facility.",

    description:
      "Oklahoma State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at Oklahoma's maximum-security facility in McAlester.",

    overview: [
      "Oklahoma State Penitentiary is a maximum-security state prison operated by the Oklahoma Department of Corrections, located in McAlester in Pittsburg County in southeastern Oklahoma, roughly 110 miles southeast of Oklahoma City. Founded in 1908, it is the oldest prison in Oklahoma and serves as the state's primary maximum-security institution, housing Oklahoma's death row and some of the state's most serious and long-serving offenders. McAlester is a small city in the southeastern part of the state, and the prison is a significant part of the local economy.",
      "Communication at Oklahoma State Penitentiary follows Oklahoma DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Oklahoma DOC number to begin correspondence. GTL manages phone calls and video visitation under the ODOC statewide contract. Death row inmates may face more restrictive communication rules than the general maximum-security population. Families whose loved one is on Oklahoma's death row should confirm current communication access directly with the facility.",
      "McAlester's location about 110 miles from Oklahoma City means the facility is accessible by car but is not a short trip. In-person visits require advance approval through the Oklahoma DOC visitor application process. For families outside southeastern Oklahoma, JPay messaging and GTL video visits are the most practical options for regular contact. Because ODOC uses JPay and GTL system-wide, accounts set up for OSP will work at any other Oklahoma DOC facility if an inmate is transferred.",
    ],

    address: "100 Corrections Way, McAlester, OK 74501",
    phone: "(918) 423-4700",
    website: "https://oklahoma.gov/doc",
    inmateCapacity: 900,
    established: 1908,
    operatedBy: "Oklahoma Department of Corrections (ODOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Oklahoma DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Oklahoma DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ — confirm with facility." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Death row video access varies. Confirm before booking." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ODOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Death row inmates may have stricter communication limits than general maximum-security inmates.",
      "JPay and GTL are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages are reviewed by ODOC staff before delivery.",
      "ODOC system-wide accounts carry over if the inmate transfers to another Oklahoma facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Oklahoma State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Oklahoma DOC number. Purchase stamps and compose your message. ODOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Oklahoma State Penitentiary?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "Does Oklahoma State Penitentiary house death row inmates?",
        answer: "Yes. OSP holds Oklahoma's death row. Death row inmates may face stricter communication rules than general maximum-security inmates. If your loved one is on death row, confirm their current communication access with the facility before funding any account.",
      },
      {
        question: "How far is OSP from Oklahoma City?",
        answer: "Oklahoma State Penitentiary is in McAlester, about 110 miles southeast of Oklahoma City — roughly a two-hour drive. For Oklahoma City-area families, day trips for visits are possible but require planning.",
      },
      {
        question: "How do I send money to an Oklahoma State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Oklahoma State Penitentiary. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "holman-correctional-facility",
      "dick-conner-correctional-center",
      "huntsville-unit",
    ],
  },

  // ─── Orphan Fix: Ohio ───

  "chillicothe-correctional-institution": {
    id: "f-chillicothe-ci",
    name: "Chillicothe Correctional Institution",
    slug: "chillicothe-correctional-institution",
    type: "state",
    stateSlug: "ohio",
    stateName: "Ohio",
    stateAbbr: "OH",
    countySlug: null,
    countyName: "Ross County",
    securityLevel: "Medium",
    hasDetailPage: true,

    description:
      "Chillicothe Correctional Institution communication guide. Find JPay messaging and GTL phone and video options for families at this medium-security Ohio DOC facility.",

    overview: [
      "Chillicothe Correctional Institution is a medium-security state prison operated by the Ohio Department of Rehabilitation and Correction, located in Ross County near the city of Chillicothe in south-central Ohio, approximately 50 miles south of Columbus. CCI houses adult male inmates at medium-security classification and is one of several Ohio DOC facilities serving the south-central part of the state. Chillicothe is a small city with historical significance as Ohio's first state capital, and the correctional facility is one of the larger employers in the region.",
      "Communication at Chillicothe Correctional Institution follows ODRC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and link the inmate using their Ohio DOC number. GTL manages phone calls and video visitation under the ODRC statewide contract. The standard setup — JPay for messaging and money, GTL for phone and video — applies here as it does across the Ohio state system. At a medium-security facility like CCI, communication access is generally broader and more routine than at supermax or maximum-security Ohio prisons.",
      "CCI's location about 50 miles south of Columbus makes it accessible for Columbus-area families and those in the surrounding central Ohio region. I-71 provides a direct route from Columbus to the Chillicothe area. For families further afield, JPay messaging and GTL video visits are practical alternatives to the drive. Ohio DOC accounts created for Chillicothe carry over to any other ODRC facility if an inmate is transferred within the state system.",
    ],

    address: "15802 State Route 104, Chillicothe, OH 45601",
    phone: "(740) 774-7080",
    website: "https://drc.ohio.gov",
    inmateCapacity: 2500,
    established: 1988,
    operatedBy: "Ohio Department of Rehabilitation and Correction (ODRC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Ohio DOC number.",
      },
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
        notes: "Phone calls and video visitation under the ODRC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Medium-security allows routine access." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ODRC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by ODRC staff before delivery.",
      "ODRC system-wide accounts carry over if the inmate transfers to another Ohio facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Chillicothe Correctional Institution?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Ohio DOC number. Purchase stamps and compose your message. ODRC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Chillicothe CI?",
        answer: "Phone calls use GTL. Create an account at telmate.com or the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Chillicothe CI from Columbus?",
        answer: "Chillicothe Correctional Institution is in Ross County, about 50 miles south of Columbus via US-23 or I-71 — roughly a 50-minute drive. For Columbus-area families, in-person visits are very accessible.",
      },
      {
        question: "Do accounts carry over if my loved one transfers within Ohio DOC?",
        answer: "Yes. JPay and GTL serve all ODRC facilities statewide under system-wide contracts. Your accounts, contact history, and records carry over automatically to any other Ohio DOC facility.",
      },
      {
        question: "How do I send money to a Chillicothe CI inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Chillicothe Correctional Institution. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "ohio-state-penitentiary",
      "cuyahoga-county-jail",
      "stateville-correctional-center",
    ],
  },

  // ─── Orphan Fix: Illinois ───

  "menard-correctional-center": {
    id: "f-menard-cc",
    name: "Menard Correctional Center",
    slug: "menard-correctional-center",
    type: "state",
    stateSlug: "illinois",
    stateName: "Illinois",
    stateAbbr: "IL",
    countySlug: null,
    countyName: "Randolph County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Menard Correctional: ICSolutions Phone and GettingOut Messaging",
    seoDescription: "How to contact someone at Menard Correctional Center in Chester IL. ICSolutions handles phone calls. GettingOut for digital messaging. Illinois offers partial free calling program.",

    description:
      "Menard Correctional Center communication guide. Find JPay messaging and GTL phone options for families at this historic maximum-security Illinois facility in Chester.",

    overview: [
      "Menard Correctional Center is a maximum-security state prison operated by the Illinois Department of Corrections, located in the town of Chester in Randolph County in southwestern Illinois along the Mississippi River, roughly 60 miles southeast of St. Louis. Opened in 1878, Menard is one of Illinois's oldest and most well-known prisons, with a history spanning nearly 150 years. The facility houses adult male inmates serving long sentences and is one of the largest prisons in the Illinois DOC system. Chester is a small town whose economy is closely tied to the prison complex.",
      "Communication at Menard Correctional Center follows Illinois DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Illinois DOC number to begin correspondence. GTL manages phone calls and video visitation under the IDOC statewide contract. As with other Illinois state facilities, the two-platform model applies: JPay for messaging and money, GTL for phone and video, with each requiring a separate account.",
      "Menard's location along the Mississippi in far southwestern Illinois means it is more accessible from the St. Louis metropolitan area than from Chicago. For St. Louis-area families in Missouri or Illinois, the drive is about 60 miles. For Chicago families, the distance is more than 300 miles — a long trip that makes electronic communication and video visits especially important. Because IDOC uses JPay and GTL system-wide, accounts created for Menard work at any other Illinois DOC facility if an inmate is transferred.",
    ],

    address: "711 Kaskaskia Street, Chester, IL 62233",
    phone: "(618) 826-5071",
    website: "https://www.illinois.gov/idoc",
    inmateCapacity: 3400,
    established: 1878,
    operatedBy: "Illinois Department of Corrections (IDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Illinois DOC number.",
      },
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
        notes: "Phone calls and video visitation under the IDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Illinois DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to IDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by IDOC staff before delivery.",
      "IDOC system-wide accounts carry over if the inmate transfers to another Illinois facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Menard Correctional Center?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Illinois DOC number. Purchase stamps and send your message. IDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Menard?",
        answer: "Phone calls use GTL. Create an account at telmate.com or the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you directly from facility phones.",
      },
      {
        question: "How far is Menard from Chicago and St. Louis?",
        answer: "Menard is in Chester in Randolph County — about 60 miles southeast of St. Louis (roughly an hour's drive) and more than 300 miles south of Chicago (about five hours). For Chicago-area families, electronic communication and GTL video visits are the most practical options for regular contact.",
      },
      {
        question: "Do my accounts work if my loved one transfers to another Illinois facility?",
        answer: "Yes. JPay and GTL serve all IDOC facilities statewide. Your accounts, contact history, and message records carry over automatically to any other Illinois facility after a transfer.",
      },
      {
        question: "How do I send money to a Menard inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Menard Correctional Center. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "stateville-correctional-center",
      "cook-county-jail",
      "indiana-state-prison",
    ],
  },

  // ─── Orphan Fix: Michigan ───

  "marquette-branch-prison": {
    id: "f-marquette-bp",
    name: "Marquette Branch Prison",
    slug: "marquette-branch-prison",
    type: "state",
    stateSlug: "michigan",
    stateName: "Michigan",
    stateAbbr: "MI",
    countySlug: null,
    countyName: "Marquette County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Marquette Branch Prison: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Marquette Branch Prison in Michigan. GTL ConnectNetwork handles phone calls. JPay for messaging. Michigan mail scanning converts letters to digital copies.",

    description:
      "Marquette Branch Prison communication guide. Find JPay messaging and GTL phone options for families at this historic maximum-security Michigan facility in the Upper Peninsula.",

    overview: [
      "Marquette Branch Prison is a maximum-security state prison operated by the Michigan Department of Corrections, located in the city of Marquette in the Upper Peninsula of Michigan on the shores of Lake Superior. Opened in 1889, it is one of Michigan's oldest continuously operating prisons and has a long history as a remote maximum-security facility in northern Michigan. The Upper Peninsula is geographically separated from the Lower Peninsula by the Straits of Mackinac, making MBP one of the most remote state prisons for families in Detroit, Grand Rapids, or other Lower Peninsula cities.",
      "Communication at Marquette Branch Prison follows Michigan DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Michigan DOC number to begin correspondence. GTL manages phone calls and video visitation under the MDOC statewide contract. Given the facility's remote location, electronic messaging and GTL video visits are especially practical for families who cannot easily make the long trip to Marquette.",
      "The drive from Detroit to Marquette takes six to seven hours through the Lower Peninsula and across the Mackinac Bridge, making in-person visits a genuine undertaking. For families in the Marquette area or elsewhere in the Upper Peninsula, in-person visits are more accessible. For everyone else, JPay and GTL are the practical means of regular contact. Michigan DOC accounts created for MBP carry over to any other Michigan facility if an inmate is transferred within the state system, which is particularly relevant since many MBP inmates are eventually reclassified to facilities in the Lower Peninsula.",
    ],

    address: "1960 U.S. 41 South, Marquette, MI 49855",
    phone: "(906) 226-6531",
    website: "https://www.michigan.gov/corrections",
    inmateCapacity: 900,
    established: 1889,
    operatedBy: "Michigan Department of Corrections (MDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photos, and trust account deposits. Uses Michigan DOC number.",
      },
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
        notes: "Phone calls and video visitation. Video visits are especially practical given the remote Upper Peninsula location.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Remote location makes messaging especially valuable." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Particularly useful given the remote UP location." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by MDOC staff before delivery.",
      "MDOC system-wide accounts carry over if the inmate transfers to a Lower Peninsula facility.",
      "The remote UP location makes electronic communication especially important for regular contact.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Marquette Branch Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Michigan DOC number. Purchase stamps and send your message. MDOC staff review messages before delivery. Given MBP's remote location, JPay messaging is a practical way to maintain regular contact.",
      },
      {
        question: "How do I set up phone calls from Marquette Branch Prison?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Marquette Branch Prison from Detroit?",
        answer: "Marquette is in the Upper Peninsula, roughly 300 miles from Detroit — about a six to seven-hour drive that includes crossing the Mackinac Bridge. For most Lower Peninsula families, electronic communication and GTL video visits are the most practical options for regular contact.",
      },
      {
        question: "Is video visitation available at Marquette Branch Prison?",
        answer: "Yes, through GTL, and it is especially useful given how remote the facility is. Log into your GTL account, search for Marquette Branch Prison, and schedule an available slot. Video visits eliminate the need for the long drive north.",
      },
      {
        question: "How do I send money to a Marquette Branch Prison inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Marquette Branch Prison. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "ionia-correctional-facility",
      "mcf-oak-park-heights",
      "minnesota-correctional-facility-stillwater",
    ],
  },

  // ─── Orphan Fix: North Carolina ───

  "central-prison": {
    id: "f-central-prison-nc",
    name: "Central Prison",
    slug: "central-prison",
    type: "state",
    stateSlug: "north-carolina",
    stateName: "North Carolina",
    stateAbbr: "NC",
    countySlug: null,
    countyName: "Wake County",
    securityLevel: "Close / Maximum",
    hasDetailPage: true,
    seoTitle: "Central Prison NC: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Central Prison in Raleigh NC. Find the correct provider for phone calls, electronic messaging, and money transfers at this North Carolina DPS facility.",

    description:
      "Central Prison communication guide. Find JPay messaging and GTL phone options for families at North Carolina's primary maximum-security facility in Raleigh.",

    overview: [
      "Central Prison is a close and maximum-security state correctional facility operated by the North Carolina Department of Adult Correction, located in Raleigh in Wake County. It is the oldest continuously operating prison in North Carolina and one of the most significant correctional facilities in the state, serving as the site of North Carolina's execution chamber and housing some of the state's most serious offenders. The facility's location in the state capital makes it unusual among maximum-security prisons — it sits within a major metropolitan area rather than a remote rural location, which affects in-person visit accessibility for many families.",
      "Communication at Central Prison follows North Carolina DAC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their North Carolina DOC number to begin correspondence. GTL manages phone calls and video visitation under the NCDAC statewide contract. Death row inmates at Central Prison may have communication access that differs from the general close-custody population. Families with a loved one on North Carolina's death row should confirm current communication access with the facility before setting up accounts.",
      "Raleigh's size and infrastructure mean in-person visits to Central Prison are logistically more accessible than at many remote state prisons. The facility is near downtown Raleigh, served by multiple road routes. For families in the Research Triangle area, a visit is practical. For families in Charlotte, the coast, or other parts of North Carolina, JPay messaging and GTL video visits offer reliable alternatives. North Carolina DAC accounts work system-wide and carry over to any other NCDAC facility if an inmate is transferred.",
    ],

    address: "1300 Western Boulevard, Raleigh, NC 27606",
    phone: "(919) 838-4000",
    website: "https://www.dac.nc.gov",
    inmateCapacity: 1000,
    established: 1884,
    operatedBy: "North Carolina Department of Adult Correction (NCDAC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses NC DOC number.",
      },
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
        notes: "Phone calls and video visitation under the NCDAC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ — confirm with facility." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Death row video access varies. Confirm before booking." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to NCDAC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Death row inmates may face stricter communication limits than general close-custody inmates.",
      "JPay and GTL are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages are reviewed by NCDAC staff before delivery.",
      "NCDAC system-wide accounts carry over if the inmate transfers to another North Carolina facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Central Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their North Carolina DOC number. Purchase stamps and send your message. NCDAC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Central Prison?",
        answer: "Phone calls use GTL. Create an account at telmate.com or the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "Is Central Prison in downtown Raleigh?",
        answer: "Yes, Central Prison is in Raleigh, close to downtown. This makes it significantly more accessible for in-person visits than many remote state prisons. For Research Triangle families, a visit is a manageable trip.",
      },
      {
        question: "Do death row inmates at Central Prison have the same communication access?",
        answer: "Not necessarily. Death row inmates may face more restrictive communication rules than general close-custody inmates. If your loved one is on North Carolina's death row, confirm their current messaging, phone, and video access directly with the facility before funding any accounts.",
      },
      {
        question: "How do I send money to a Central Prison inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Central Prison. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "federal-correctional-complex-butner",
      "wake-county-detention-center",
      "sussex-i-state-prison",
    ],
  },

  // ─── New State Coverage ───

  "kentucky-state-penitentiary": {
    id: "f-kentucky-state-pen",
    name: "Kentucky State Penitentiary",
    slug: "kentucky-state-penitentiary",
    type: "state",
    stateSlug: "kentucky",
    stateName: "Kentucky",
    stateAbbr: "KY",
    countySlug: null,
    countyName: "Lyon County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Kentucky State Penitentiary: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Kentucky State Penitentiary in Eddyville. Find the correct provider for phone calls, electronic messaging, and money transfers at this Kentucky DOC facility.",

    description:
      "Kentucky State Penitentiary communication guide. Find JPay messaging and Securus phone options for families at Kentucky's oldest and only maximum-security state prison in Eddyville.",

    overview: [
      "Kentucky State Penitentiary is the only maximum-security state prison in Kentucky, operated by the Kentucky Department of Corrections and located in Eddyville in Lyon County, in the western part of the state near Kentucky Lake. Founded in 1884, it is the oldest prison in Kentucky and houses the state's most serious long-term offenders and death row population. Eddyville is a small town in a rural part of western Kentucky, and the prison sits on a bluff overlooking the Cumberland River. The facility is sometimes called the Castle on the Cumberland because of its distinctive architecture.",
      "Communication at Kentucky State Penitentiary follows Kentucky DOC provider contracts. JPay is the primary platform for electronic messaging, photo sharing, and money transfers across Kentucky Department of Corrections state facilities. Families create a JPay account and add the inmate using their Kentucky DOC number to begin sending messages and photos. Securus Technologies manages phone calls and video visitation under the KDOC statewide contract. Setting up a Securus prepaid account allows families to receive inmate-initiated phone calls, and video visits can be scheduled through the Securus platform.",
      "Eddyville is in far western Kentucky, roughly 100 miles east of Paducah and about 200 miles southwest of Louisville. For most Kentucky families, the drive is substantial. For families in the Nashville, Tennessee area, the facility is about 130 miles north. Because of the distance, JPay messaging and Securus video visits are especially practical for regular contact. Kentucky DOC accounts created for KSP will work at any other Kentucky facility if an inmate is transferred within the state system.",
    ],

    address: "266 Water Street, Eddyville, KY 42038",
    phone: "(270) 388-2211",
    website: "https://corrections.ky.gov",
    inmateCapacity: 900,
    established: 1884,
    operatedBy: "Kentucky Department of Corrections (KDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Kentucky DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Kentucky DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ." },
      video: { status: "limited", provider: "Securus", notes: "Available for eligible inmates. Death row video access varies. Confirm before booking." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to KDOC content guidelines." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls via Securus. Fund prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay handles messaging and money. Securus handles phone and video. Both require separate accounts.",
      "Death row inmates may have stricter communication limits — confirm access directly with the facility.",
      "Messages are reviewed by KDOC staff before delivery.",
      "KDOC system-wide accounts carry over if the inmate transfers to another Kentucky facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Kentucky State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Kentucky DOC number. Purchase stamps and compose your message. KDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Kentucky State Penitentiary?",
        answer: "Phone calls from KSP use Securus. Create an account at securustech.net or through the Securus app. Set up a prepaid account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "Why does Kentucky use Securus for phone calls instead of GTL?",
        answer: "Communication provider contracts are negotiated by each state's correctional system. Kentucky DOC uses JPay for messaging and Securus for phone and video services. These are the correct platforms for Kentucky state prisons — using GTL will not work at KSP.",
      },
      {
        question: "Is video visitation available at Kentucky State Penitentiary?",
        answer: "Yes, through Securus. Log into your Securus account, search for Kentucky State Penitentiary, and schedule an available slot. Death row inmates may have restricted video access. Confirm eligibility before booking.",
      },
      {
        question: "How do I send money to a Kentucky State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Kentucky State Penitentiary. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "indiana-state-prison",
      "federal-correctional-complex-terre-haute",
      "pendleton-correctional-facility",
    ],
  },

  "oregon-state-penitentiary": {
    id: "f-oregon-state-pen",
    name: "Oregon State Penitentiary",
    slug: "oregon-state-penitentiary",
    type: "state",
    stateSlug: "oregon",
    stateName: "Oregon",
    stateAbbr: "OR",
    countySlug: null,
    countyName: "Marion County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Oregon State Penitentiary: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Oregon State Penitentiary in Salem. Find the correct provider for phone calls, electronic messaging, and money transfers at this Oregon DOC facility.",

    description:
      "Oregon State Penitentiary communication guide. Find JPay messaging and Securus phone options for families at Oregon's only maximum-security state prison in Salem.",

    overview: [
      "Oregon State Penitentiary is the only maximum-security state prison in Oregon, operated by the Oregon Department of Corrections and located in Salem in Marion County, which is also the state capital. Opened in 1866, it is Oregon's oldest prison and houses the state's most serious long-term offenders and death row population. Its location within Salem — a city of roughly 175,000 that sits between Portland and Eugene — makes it more accessible than many rural maximum-security facilities. The prison occupies a prominent position in the city and has been central to Oregon's correctional history for over 150 years.",
      "Communication at Oregon State Penitentiary follows Oregon DOC provider contracts. JPay is the primary platform for electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Oregon DOC number. Securus Technologies manages phone calls and video visitation under the ODOC statewide contract. Setting up a Securus prepaid account allows families to receive phone calls, and video visits can be scheduled through the Securus platform. Oregon uses JPay for messaging and Securus for phone and video — these are separate platforms requiring separate accounts.",
      "Salem's location along I-5 between Portland and Eugene makes OSP accessible from multiple population centers. Portland is about 45 miles north, and Eugene is about 65 miles south. For families in the Willamette Valley, in-person visits are practical. For families in eastern Oregon or out of state, JPay and Securus video visits provide reliable alternatives. Oregon DOC accounts created for OSP carry over to any other Oregon facility if an inmate transfers.",
    ],

    address: "2605 State Street, Salem, OR 97310",
    phone: "(503) 378-2453",
    website: "https://www.oregon.gov/doc",
    inmateCapacity: 2200,
    established: 1866,
    operatedBy: "Oregon Department of Corrections (ODOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Oregon DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Oregon DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ." },
      video: { status: "limited", provider: "Securus", notes: "Available for eligible inmates. Confirm eligibility based on housing and privilege level." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ODOC content guidelines." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls via Securus. Fund prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary purchases." },
    },

    rules: [
      "JPay handles messaging and money. Securus handles phone and video. Both require separate accounts.",
      "Death row inmates may have restricted communication access — confirm directly with the facility.",
      "Messages are reviewed by ODOC staff before delivery.",
      "ODOC system-wide accounts carry over if the inmate transfers to another Oregon facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Oregon State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Oregon DOC number. Purchase stamps and compose your message. ODOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Oregon State Penitentiary?",
        answer: "Phone calls from OSP use Securus. Create an account at securustech.net or through the Securus app. Set up a prepaid account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "How far is Oregon State Penitentiary from Portland?",
        answer: "OSP is in Salem, roughly 45 miles south of Portland on I-5 — about a 45-minute to one-hour drive. For Portland-area families, in-person visits are very feasible on a day trip.",
      },
      {
        question: "Is video visitation available at Oregon State Penitentiary?",
        answer: "Yes, through Securus. Log into your Securus account, search for Oregon State Penitentiary, and select an available time slot. Schedule in advance. Death row inmates may have restricted access — confirm eligibility first.",
      },
      {
        question: "How do I send money to an Oregon State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Oregon State Penitentiary. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "washington-state-penitentiary",
      "snake-river-correctional-institution",
      "high-desert-state-prison",
    ],
  },

  "washington-state-penitentiary": {
    id: "f-washington-state-pen",
    name: "Washington State Penitentiary",
    slug: "washington-state-penitentiary",
    type: "state",
    stateSlug: "washington",
    stateName: "Washington",
    stateAbbr: "WA",
    countySlug: null,
    countyName: "Walla Walla County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Washington State Penitentiary: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Washington State Penitentiary in Walla Walla. Find the correct provider for phone calls, electronic messaging, and money transfers at this WDOC facility.",

    description:
      "Washington State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at Washington's maximum-security state prison in Walla Walla.",

    overview: [
      "Washington State Penitentiary is the primary maximum-security state prison in Washington, operated by the Washington Department of Corrections and located in Walla Walla County in the southeastern corner of the state, roughly 150 miles southeast of Yakima and about 260 miles from Seattle. Opened in 1886, it is Washington's oldest prison and houses the state's most serious long-term offenders. Walla Walla is a small city known for its wine region, and the prison has been part of the local community for well over a century. The facility's location in eastern Washington means many families in the Seattle and Puget Sound area face a significant drive.",
      "Communication at Washington State Penitentiary follows Washington DOC provider contracts. JPay is the primary platform for electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Washington DOC number. GTL manages phone calls and video visitation under the WDOC statewide contract. Setting up a GTL AdvancePay account allows families to receive inmate-initiated calls, and video visits can be scheduled through the GTL platform. The two-platform setup applies here: JPay for messaging and money, GTL for phone and video.",
      "For families in western Washington — Seattle, Tacoma, Olympia — the drive to Walla Walla is roughly four to five hours over the Cascade Mountains. Many families rely primarily on JPay messaging and GTL video visits for regular contact rather than making the long cross-state trip. For families in eastern Washington or the Spokane area, the drive is much shorter. Washington DOC accounts created for WSP carry over to any other Washington facility if an inmate is transferred.",
    ],

    address: "1313 N. 13th Avenue, Walla Walla, WA 99362",
    phone: "(509) 525-3610",
    website: "https://doc.wa.gov",
    inmateCapacity: 2500,
    established: 1886,
    operatedBy: "Washington Department of Corrections (WDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Washington DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Washington DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Washington DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Especially practical for western Washington families. Schedule in advance." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to WDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by WDOC staff before delivery.",
      "WDOC system-wide accounts carry over if the inmate transfers to another Washington facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Washington State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Washington DOC number. Purchase stamps and compose your message. WDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Washington State Penitentiary?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "How far is WSP from Seattle?",
        answer: "Washington State Penitentiary is in Walla Walla, roughly 260 miles southeast of Seattle — about a four to five-hour drive over the Cascades. For western Washington families, GTL video visits and JPay messaging are the most practical options for regular contact.",
      },
      {
        question: "Is video visitation available at WSP?",
        answer: "Yes, remote video visits are available through GTL and are especially useful for families in western Washington who face the long cross-state drive. Log into your GTL account, search for Washington State Penitentiary, and select an available slot. Schedule well in advance.",
      },
      {
        question: "How do I send money to a Washington State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Washington State Penitentiary. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "oregon-state-penitentiary",
      "monroe-correctional-complex",
      "snake-river-correctional-institution",
    ],
  },

  "new-jersey-state-prison": {
    id: "f-new-jersey-state-prison",
    name: "New Jersey State Prison",
    slug: "new-jersey-state-prison",
    type: "state",
    stateSlug: "new-jersey",
    stateName: "New Jersey",
    stateAbbr: "NJ",
    countySlug: null,
    countyName: "Mercer County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "NJ State Prison: Phone Calls, ViaPath Transition and Messaging",
    seoDescription: "How to contact someone at New Jersey State Prison in Trenton. NJ transitioning from JPay to ViaPath. Phone rates cut to $0.034 per minute. Find current providers and contact info.",

    description:
      "New Jersey State Prison communication guide. Find JPay messaging and GTL phone options for families at New Jersey's oldest and highest-security state prison in Trenton.",

    overview: [
      "New Jersey State Prison is the highest-security state prison in New Jersey, operated by the New Jersey Department of Corrections and located in Trenton in Mercer County, the state capital. Originally established in 1798 as the New Jersey State Penitentiary, it is one of the oldest continuously operating prisons in the country. The facility has undergone significant renovation and reconstruction over the centuries and today serves as a maximum-security institution housing New Jersey's most serious long-term offenders and death row population. Trenton's location in central New Jersey puts it within reasonable distance of both Philadelphia and New York City.",
      "Communication at New Jersey State Prison follows New Jersey DOC provider contracts. JPay is the platform for electronic messaging, photo sharing, and trust account money transfers. Families create a JPay account and add the inmate using their New Jersey SBI (State Bureau of Identification) number to begin correspondence. GTL manages phone calls and video visitation. Setting up a GTL AdvancePay account linked to your phone number allows you to receive inmate-initiated calls. Video visits through GTL are a practical option for families who cannot easily travel to Trenton.",
      "Trenton's central location within New Jersey and its proximity to both major metropolitan areas makes it more geographically accessible than many state prisons in rural parts of the country. New York City is about 70 miles northeast, and Philadelphia is about 35 miles southwest. New Jersey Transit provides rail connections from both cities to Trenton, making in-person visits feasible for families in either metro area. For out-of-state families or those without transportation, JPay and GTL provide the primary means of regular contact.",
    ],

    address: "1 Trenton Way, Trenton, NJ 08611",
    phone: "(609) 292-9500",
    website: "https://www.nj.gov/corrections",
    inmateCapacity: 1600,
    established: 1798,
    operatedBy: "New Jersey Department of Corrections (NJDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses NJ SBI number.",
      },
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
        notes: "Phone calls and video visitation under the New Jersey DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires NJ SBI number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to NJDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay requires the inmate's NJ SBI (State Bureau of Identification) number, not a name alone.",
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by NJDOC staff before delivery.",
      "NJDOC system-wide accounts carry over if the inmate transfers to another New Jersey facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at New Jersey State Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their New Jersey SBI (State Bureau of Identification) number. Purchase stamps and send your message. NJDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "What is an SBI number and where do I find it?",
        answer: "The SBI (State Bureau of Identification) number is New Jersey's unique identifier for individuals in the state prison system. You can find it using the NJDOC inmate search at nj.gov/corrections. You will need this number to set up JPay messaging.",
      },
      {
        question: "How do I set up phone calls from New Jersey State Prison?",
        answer: "Phone calls use GTL. Create an account at telmate.com or the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is New Jersey State Prison from New York City and Philadelphia?",
        answer: "NJSP is in Trenton, about 70 miles southwest of New York City and 35 miles northeast of Philadelphia. New Jersey Transit rail service connects Trenton to both cities. For families in either metro area, in-person visits are a realistic option.",
      },
      {
        question: "How do I send money to a New Jersey State Prison inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select New Jersey State Prison. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "fci-fort-dix",
      "james-t-vaughn-correctional-center",
      "macdougall-walker-correctional-institution",
    ],
  },

  "fci-fort-dix": {
    id: "f-fci-fort-dix",
    name: "FCI Fort Dix",
    slug: "fci-fort-dix",
    type: "federal",
    stateSlug: "new-jersey",
    stateName: "New Jersey",
    stateAbbr: "NJ",
    countySlug: null,
    countyName: "Burlington County",
    securityLevel: "Low / Medium",
    hasDetailPage: true,
    seoTitle: "FCI Fort Dix: CorrLinks Messaging and ConnectNetwork Phone Guide",
    seoDescription: "How to contact someone at FCI Fort Dix in New Jersey. CorrLinks for electronic messaging. ConnectNetwork for phone calls. One of the largest federal BOP facilities in the country.",

    description:
      "FCI Fort Dix communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at the largest federal prison in the United States by population.",

    overview: [
      "Federal Correctional Institution Fort Dix is a low and medium-security federal prison located on Joint Base McGuire-Dix-Lakehurst in Burlington County, New Jersey, about 30 miles southeast of Trenton and roughly 60 miles south of New York City. FCI Fort Dix is consistently one of the largest federal prisons in the United States by inmate population, regularly housing more than 4,000 people across its two facilities — FCI Fort Dix (low security) and FCI Fort Dix Camp (minimum security). The facility operates on a large military base alongside active Air Force and Army installations, which shapes the physical environment significantly.",
      "Communication at FCI Fort Dix follows Bureau of Prisons rules. CorrLinks handles electronic messaging through the TRULINCS system. Families must create a CorrLinks account and wait for the inmate to initiate contact or approve a request before any correspondence can begin. Phone calls operate through ConnectNetwork, the BOP's calling platform. Because FCI Fort Dix is a low-security facility with a very large population, phone access tends to be more routine than at higher-security BOP institutions. Families can expect a predictable communication schedule compared to higher-security penitentiaries.",
      "FCI Fort Dix's location in central New Jersey puts it within reasonable reach of the New York and Philadelphia metropolitan areas. The facility is accessible by car from I-295 and the New Jersey Turnpike. In-person visits follow standard BOP visitor approval procedures and are conducted on scheduled visiting days. Remote video visitation is not available at FCI Fort Dix, as it is not offered at any Bureau of Prisons facility. BOP accounts — CorrLinks and ConnectNetwork — are system-wide and carry over if an inmate is transferred to another federal facility.",
    ],

    address: "5756 Hartford & Pointville Road, Joint Base MDL, NJ 08640",
    phone: "(609) 723-1100",
    website: "https://www.bop.gov/locations/institutions/ftd/",
    inmateCapacity: 4200,
    established: 1990,
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
        notes: "Federal messaging via TRULINCS/CorrLinks. Inmate must initiate or approve contact first.",
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
        notes: "BOP phone and trust fund deposits. Low-security status means routine phone access.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "CorrLinks", notes: "Available. Low-security status means routine CorrLinks access. Inmate must initiate contact." },
      video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Fort Dix." },
      photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions. No digital photo platform." },
      phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls. Low-security status allows frequent phone access." },
      moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or BOP money order process." },
    },

    rules: [
      "CorrLinks contact requires inmate initiation or approval. You cannot message first.",
      "Remote video visitation is not available at FCI Fort Dix.",
      "In-person visits require BOP visitor application approval. Allow several weeks for processing.",
      "All BOP communications are monitored under standard Bureau of Prisons policy.",
      "Phone and commissary accounts are funded separately through ConnectNetwork.",
    ],

    faq: [
      {
        question: "How do I set up messaging at FCI Fort Dix?",
        answer: "Create a free account at corrlinks.com. The inmate must send you an invitation or approve your contact request through the TRULINCS terminal inside the facility. Once approved, you can exchange messages for a small per-message fee. FCI Fort Dix's low-security status means CorrLinks access is generally routine.",
      },
      {
        question: "How do phone calls work at FCI Fort Dix?",
        answer: "Phone calls from FCI Fort Dix use ConnectNetwork. Create an account at connectnetwork.com and add funds linked to your phone number. The inmate will call you from facility phones. Low-security inmates at Fort Dix typically have good access to facility phones.",
      },
      {
        question: "Is FCI Fort Dix really the largest federal prison in the country?",
        answer: "By population, yes — FCI Fort Dix consistently has one of the highest inmate counts of any BOP facility in the country, regularly exceeding 4,000. The combination of the main FCI and the satellite camp means the grounds house a very large federal population at relatively low security levels.",
      },
      {
        question: "Is video visitation available at FCI Fort Dix?",
        answer: "No. Remote video visitation is not available at FCI Fort Dix, as the Bureau of Prisons does not offer video visitation at any of its facilities. In-person visits are the alternative and require completing the BOP visitor application process.",
      },
      {
        question: "How do I send money to a FCI Fort Dix inmate?",
        answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by money order via the BOP lockbox system. Western Union Quick Collect and MoneyGram are also accepted at most BOP facilities. Processing takes one to three business days.",
      },
    ],

    relatedFacilitySlugs: [
      "new-jersey-state-prison",
      "mdc-brooklyn",
      "federal-correctional-complex-butner",
    ],
  },

  "minnesota-correctional-facility-stillwater": {
    id: "f-mcf-stillwater",
    name: "Minnesota Correctional Facility Stillwater",
    slug: "minnesota-correctional-facility-stillwater",
    type: "state",
    stateSlug: "minnesota",
    stateName: "Minnesota",
    stateAbbr: "MN",
    countySlug: null,
    countyName: "Washington County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "MCF Stillwater: Free Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at MCF Stillwater in Minnesota. Minnesota DOC phone calls are free for families. No prepaid account needed. Find messaging and communication options.",

    description:
      "Minnesota Correctional Facility Stillwater communication guide. Find JPay messaging and GTL phone options for families at Minnesota's oldest and most historic maximum-security state prison.",

    overview: [
      "Minnesota Correctional Facility Stillwater is a maximum-security state prison operated by the Minnesota Department of Corrections, located in Bayport in Washington County along the St. Croix River, roughly 25 miles east of Saint Paul and 30 miles east of Minneapolis. Established in 1853, it is one of the oldest prisons in the Midwest and the oldest continuously operating prison in Minnesota. The facility houses adult male inmates at maximum-security classification and is one of the central institutions in the Minnesota DOC system. Its location in the western St. Croix Valley makes it accessible for Twin Cities families.",
      "Communication at MCF Stillwater follows Minnesota DOC provider contracts. JPay is the platform for electronic messaging, photo sharing, and money transfers across Minnesota DOC facilities. Families create a JPay account and add the inmate using their Minnesota DOC number to begin correspondence. GTL manages phone calls and video visitation under the Minnesota DOC statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video. These are separate accounts with separate funding, and money on one platform does not apply to the other.",
      "MCF Stillwater's location about 25 miles east of Saint Paul makes it one of the more accessible maximum-security state prisons in the region for Twin Cities families. The facility is along Highway 36 in Washington County. For families in the Minneapolis-Saint Paul metro area, in-person visits are logistically manageable. For families elsewhere in Minnesota or out of state, JPay and GTL video visits are practical alternatives. Minnesota DOC accounts created for MCF Stillwater will work at any other Minnesota facility if an inmate transfers within the state system.",
    ],

    address: "970 Pickett Street North, Bayport, MN 55003",
    phone: "(651) 779-2700",
    website: "https://mn.gov/doc",
    inmateCapacity: 1600,
    established: 1853,
    operatedBy: "Minnesota Department of Corrections (MNDOC)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Minnesota DOC number.",
      },
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
        notes: "Phone calls and video visitation under the Minnesota DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Minnesota DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MNDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by MNDOC staff before delivery.",
      "MNDOC system-wide accounts carry over if the inmate transfers to another Minnesota facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at MCF Stillwater?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Minnesota DOC number. Purchase stamps and compose your message. MNDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from MCF Stillwater?",
        answer: "Phone calls use GTL. Create an account at telmate.com or the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is MCF Stillwater from the Twin Cities?",
        answer: "MCF Stillwater is in Bayport in Washington County, about 25 miles east of Saint Paul and 30 miles east of Minneapolis. For Twin Cities families, in-person visits are very accessible — the drive from downtown Saint Paul takes about 30 minutes.",
      },
      {
        question: "Do my accounts carry over if my loved one transfers to another Minnesota facility?",
        answer: "Yes. JPay and GTL serve all Minnesota DOC facilities under statewide contracts. Your accounts and contact history carry over automatically to any other MNDOC facility after a transfer.",
      },
      {
        question: "How do I send money to a MCF Stillwater inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Minnesota Correctional Facility Stillwater. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "mcf-oak-park-heights",
      "north-dakota-state-penitentiary",
      "green-bay-correctional-institution",
    ],
  },

  "mount-olive-correctional-complex": {
    id: "f-mount-olive-cc",
    name: "Mount Olive Correctional Complex",
    slug: "mount-olive-correctional-complex",
    type: "state",
    stateSlug: "west-virginia",
    stateName: "West Virginia",
    stateAbbr: "WV",
    countySlug: null,
    countyName: "Fayette County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Mount Olive Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Mount Olive Correctional Complex in West Virginia. Find the correct provider for phone calls, messaging, and money transfers at this West Virginia DOC facility.",

    description:
      "Mount Olive Correctional Complex communication guide. Find JPay messaging and GTL phone options for families at West Virginia's only maximum-security state prison in Fayette County.",

    overview: [
      "Mount Olive Correctional Complex is the only maximum-security state prison in West Virginia, operated by the West Virginia Division of Corrections and Rehabilitation, located in Fayette County near the town of Mount Olive, roughly 30 miles south of Charleston. Opened in 1995, it replaced the old West Virginia State Penitentiary in Moundsville as the state's primary maximum-security facility and houses the state's most serious long-term offenders and death row population. The facility is set in the rugged terrain of the New River Gorge region of southern West Virginia.",
      "Communication at Mount Olive Correctional Complex follows West Virginia DOC provider contracts. JPay is the platform for electronic messaging, photo sharing, and money transfers across West Virginia state prison facilities. Families create a JPay account and add the inmate using their West Virginia DOC number to begin correspondence. GTL manages phone calls and video visitation under the WVDCR statewide contract. The standard two-platform approach applies here: JPay for messaging and money, GTL for phone and video.",
      "Mount Olive's location about 30 miles south of Charleston, the state capital, makes it relatively accessible compared to the old Moundsville facility in the Northern Panhandle. The drive from Charleston is roughly 45 minutes on US-60. For families in the Huntington or Beckley areas, the facility is also within reasonable distance. For families in northern West Virginia or outside the state, JPay and GTL video visits provide practical alternatives to the mountain drive. West Virginia DOC accounts work system-wide across all state facilities.",
    ],

    address: "1 Mountainside Way, Mount Olive, WV 25185",
    phone: "(304) 442-7213",
    website: "https://dcr.wv.gov",
    inmateCapacity: 850,
    established: 1995,
    operatedBy: "West Virginia Division of Corrections and Rehabilitation (WVDCR)",

    providers: [
      {
        name: "JPay",
        slug: "jpay",
        initial: "J",
        color: "bg-blue-600",
        messaging: true,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: true,
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses West Virginia DOC number.",
      },
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
        notes: "Phone calls and video visitation under the West Virginia DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ — confirm with facility." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Death row video access varies. Confirm before booking." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to WVDCR content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Death row inmates may face stricter communication limits — confirm access with the facility.",
      "Messages are reviewed by WVDCR staff before delivery.",
      "WVDCR system-wide accounts carry over if the inmate transfers to another West Virginia facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Mount Olive Correctional Complex?",
        answer: "Create a JPay account at jpay.com and add the inmate using their West Virginia DOC number. Purchase stamps and compose your message. WVDCR staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Mount Olive?",
        answer: "Phone calls use GTL. Create an account at telmate.com or the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Mount Olive from Charleston?",
        answer: "Mount Olive Correctional Complex is about 30 miles south of Charleston, West Virginia — roughly a 45-minute drive on US-60. For Charleston-area families, in-person visits are accessible. The facility is also within a few hours of Huntington and Beckley.",
      },
      {
        question: "Is video visitation available at Mount Olive?",
        answer: "Yes, through GTL. Log into your GTL account, search for Mount Olive Correctional Complex, and select an available slot. Death row inmates may have restricted video access. Confirm eligibility before booking.",
      },
      {
        question: "How do I send money to a Mount Olive inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Mount Olive Correctional Complex. Add funds via debit or credit card. Processing takes one to two business days.",
      },
    ],

    relatedFacilitySlugs: [
      "red-onion-state-prison",
      "federal-correctional-complex-petersburg",
      "broad-river-correctional-institution",
    ],
  },

  "milwaukee-county-jail": {
    id: "f-milwaukee-county-jail",
    name: "Milwaukee County Jail",
    slug: "milwaukee-county-jail",
    type: "county",
    stateSlug: "wisconsin",
    stateName: "Wisconsin",
    stateAbbr: "WI",
    countySlug: null,
    countyName: "Milwaukee County",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "Milwaukee County Jail: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at Milwaukee County Jail in Wisconsin. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this county facility.",

    description:
      "Milwaukee County Jail communication guide. Find Securus phone, video, and messaging options for families in Milwaukee. Learn how to stay connected at Wisconsin's largest county jail.",

    overview: [
      "Milwaukee County Jail is the primary detention facility operated by the Milwaukee County Sheriff's Office in downtown Milwaukee, Wisconsin. Milwaukee is Wisconsin's largest city, and the county jail system reflects that scale, processing thousands of bookings annually from across the county. The main jail complex is located near the Milwaukee County Courthouse in the heart of downtown, and the system serves both pretrial detainees and individuals serving shorter sentences. Milwaukee County operates one of the larger county jail systems in the Midwest.",
      "Communication at Milwaukee County Jail is managed through Securus Technologies, which provides phone calls, video visitation, and electronic messaging services under the county contract. Families can create a Securus account at securustech.net to access all available services. For phone calls, setting up a Securus AdvancePay account funded with your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled through the Securus platform. Electronic messaging through Securus delivers communications digitally within the facility.",
      "Milwaukee County Jail uses Securus under a county contract, which is separate from the provider arrangements used by Wisconsin state prisons. If someone is convicted and transferred from the county jail to a Wisconsin Department of Corrections state facility, communication will shift to a different provider setup. Until that transfer happens, Securus is the correct platform for all jail communication. Use the Milwaukee County inmate search to verify current location before setting up accounts.",
    ],

    address: "949 N. 9th Street, Milwaukee, WI 53233",
    phone: "(414) 278-4766",
    website: "https://county.milwaukee.gov/EN/Sheriff",
    inmateCapacity: 900,
    established: 1960,
    operatedBy: "Milwaukee County Sheriff's Office",

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
        moneyTransfer: true,
        notes: "Primary provider for all Milwaukee County Jail communication — phone, video, messaging, and money.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "Securus", notes: "Electronic messaging via Securus. Messages monitored by Milwaukee County Sheriff's staff." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available through Securus. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Milwaukee County content restrictions. No digital service." },
      phone: { status: "available", provider: "Securus", notes: "Fund a Securus AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "Securus", notes: "Commissary deposits via Securus. Separate from phone account funding." },
    },

    rules: [
      "All Milwaukee County Jail communication goes through Securus. After Wisconsin DOC transfer, a different provider applies.",
      "All calls, messages, and visits are monitored by Milwaukee County Sheriff's staff.",
      "Phone and commissary accounts are maintained separately in Securus.",
      "Video visits require advance scheduling through Securus.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Milwaukee County Jail?",
        answer: "All communication services at Milwaukee County Jail — phone, video, messaging, and money — are through Securus. Create an account at securustech.net or through the Securus app. One account covers all services.",
      },
      {
        question: "Can I do a video visit at Milwaukee County Jail?",
        answer: "Yes, remote video visits are available through Securus. Log into your account, navigate to video visitation, select Milwaukee County Jail, and schedule an available slot. Book at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I find out if someone is in Milwaukee County Jail?",
        answer: "Milwaukee County provides an online inmate search through the Milwaukee County Sheriff's Office at county.milwaukee.gov. Search by name to confirm current custody status.",
      },
      {
        question: "What changes when someone is transferred to a Wisconsin state prison?",
        answer: "After conviction and transfer to a Wisconsin DOC facility, Securus may no longer be the correct provider. Wisconsin state prisons use a different provider setup. Create a new account with the applicable Wisconsin DOC provider after transfer to maintain communication.",
      },
      {
        question: "How do I send money to a Milwaukee County Jail inmate?",
        answer: "Commissary deposits are processed through Securus. Log into your account and navigate to the money transfer section. Add funds via debit or credit card. Note that commissary funds and phone account funds are separate within Securus.",
      },
    ],

    relatedFacilitySlugs: [
      "cook-county-jail",
      "green-bay-correctional-institution",
      "menard-correctional-center",
    ],
  },

}
