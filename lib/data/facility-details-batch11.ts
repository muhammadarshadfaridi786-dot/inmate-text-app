import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS - Batch 11 (25 facilities, Batch 3 expansion)
// Large county jails in populous states
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH11: Record<string, FacilityDetail> = {

"miami-dade-county-jail": {
  id: "f-348",
  name: "Miami-Dade County Jail",
  slug: "miami-dade-county-jail",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Miami-Dade County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Miami-Dade County Jail: Securus Phone, Messaging and Video",
  seoDescription: "How to contact someone at Miami-Dade County Jail in Miami FL. Securus phone, messaging and video visits for this Miami-Dade Corrections jail system.",

  description:
    "Miami-Dade County Jail communication guide. Securus phone, messaging and video visits for families of inmates at this Miami-Dade Corrections jail system in Miami FL.",

  overview: [
    "Miami-Dade County Jail is the county jail system in Miami, Florida, operated by the Miami-Dade Corrections and Rehabilitation Department (MDCR). The system includes Turner Guilford Knight Correctional Center, Metro West Detention Center, the Pre-Trial Detention Center, and the Women's Detention Center. Metro West is the system's largest jail.",
    "Communication at Miami-Dade County Jail runs through Securus. Effective October 1, 2026, Securus Video Connect became the sole video visitation system, replacing ViaPath/GTL. Securus also handles phone accounts and eMessaging.",
    "Visitation follows MDCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Miami-Dade Corrections and Rehabilitation Department (MDCR)",
    visitingHours: "Visits are video visits. Visitors must be pre-approved and pass a background check. Confirm which facility holds the inmate and its current visiting schedule before traveling.",
    bailInfo: "Bond information appears in the inmate record when a bond has been set. Bonds are posted through the jail or through a licensed bondsman. Call MDCR for current posting hours and accepted payment methods.",

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
      notes: "Securus provides phone service, eMessaging, and video visitation. Securus Video Connect became the sole video system on October 1, 2026, replacing ViaPath/GTL.",
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
    "Follow the MDCR dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours and which facility holds the inmate before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at Miami-Dade County Jail?", answer: "Phone calls run through Securus. Securus Video Connect became the sole video system on October 1, 2026." },
    { question: "How do I visit someone at Miami-Dade County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow MDCR visiting rules. Confirm which facility holds the inmate and its visiting hours before traveling." },
    { question: "Which facilities are in the Miami-Dade County Jail system?", answer: "The system includes Turner Guilford Knight Correctional Center, Metro West Detention Center, the Pre-Trial Detention Center, and the Women's Detention Center. Metro West is the system's largest jail." },
    { question: "How do I find someone in the Miami-Dade County Jail system?", answer: "Use the Miami-Dade Corrections online inmate search to confirm custody status and which facility holds the inmate. Have the person's full legal name ready." },
    { question: "How do I mail a letter to someone in Miami-Dade County Jail?", answer: "Confirm the mailing address for the specific facility holding the inmate before sending mail. Include the inmate's full name and identification number on the envelope. Mail is inspected for contraband." },
    { question: "Can an inmate at Miami-Dade County Jail call me?", answer: "Yes. Inmates place outgoing calls through Securus. Set up a Securus account to fund calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Miami-Dade County Jail?", answer: "Contact Securus to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Miami-Dade County Jail?", answer: "Video visits run through Securus Video Connect, the sole video system since October 1, 2026. Create a Securus account, add the inmate, and schedule in advance. Confirm which facility holds the inmate before scheduling." },
    { question: "How do I send money to someone at Miami-Dade County Jail?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with MDCR before sending money." },
  ],

  relatedFacilitySlugs: ["federal-detention-center-miami", "fci-miami", "broward-county-jail"],
},

"palm-beach-county-jail": {
  id: "f-349",
  name: "Palm Beach County Jail",
  slug: "palm-beach-county-jail",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Palm Beach County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Palm Beach County Jail: Securus Phones and Video Visits",
  seoDescription: "How to contact someone at Palm Beach County Jail in West Palm Beach FL. Securus phone service and video visitation for this Palm Beach County Sheriff's jail.",

  description:
    "Palm Beach County Jail communication guide. Securus phone service and video visitation for families of inmates at this Palm Beach County Sheriff's jail in West Palm Beach FL.",

  overview: [
    "Palm Beach County Jail is the county jail in West Palm Beach, Florida, operated by the Palm Beach County Sheriff's Office. The Sheriff operates the Main Detention Center and the West County Detention Center. All visits are conducted by video.",
    "Phone service at Palm Beach County Jail runs through Securus Technologies, per the Sheriff's Office inmate phone FAQ. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation is video-based. Visitors must be approved and follow Sheriff's Office visiting rules. All calls and visits are monitored and recorded.",
  ],

  phone: "(561) 688-4401",
  operatedBy: "Palm Beach County Sheriff's Office",

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
      notes: "Securus provides phone service at Palm Beach County Jail, per the Sheriff's Office inmate phone FAQ.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "available", notes: "All visits are conducted by video. Confirm the video visit provider and scheduling rules with the Sheriff's Office." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Sheriff's Office rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "All visits are conducted by video. Schedule ahead and follow Sheriff's Office visiting rules.",
    "Visitors must be approved and bring a valid government-issued photo ID for any required verification.",
    "All calls and visits are monitored and recorded.",
    "Confirm which detention center holds the inmate before scheduling a visit.",
  ],

  faq: [
    { question: "Which company handles phone calls at Palm Beach County Jail?", answer: "Securus Technologies provides phone service at Palm Beach County Jail, per the Sheriff's Office inmate phone FAQ." },
    { question: "Can I visit in person at Palm Beach County Jail?", answer: "No. All visits are conducted by video. Schedule ahead and follow the Sheriff's Office visiting rules." },
    { question: "Can I send electronic messages to an inmate at Palm Beach County Jail?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "Which detention centers does the Palm Beach County Sheriff operate?", answer: "The Sheriff operates the Main Detention Center and the West County Detention Center. Confirm which one holds the inmate before scheduling a visit." },
    { question: "How do I add money for phone calls at Palm Beach County Jail?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
      {
        question: "How do I find or search for an inmate at Palm Beach County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Palm Beach County, Florida. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Palm Beach County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Palm Beach County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Palm Beach County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Palm Beach County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["federal-detention-center-miami", "fci-miami", "broward-county-jail"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"cobb-county-jail": {
  id: "f-350",
  name: "Cobb County Jail",
  slug: "cobb-county-jail",
  type: "county",
  stateSlug: "georgia",
  stateName: "Georgia",
  stateAbbr: "GA",
  countySlug: null,
  countyName: "Cobb County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cobb County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Cobb County Jail in Marietta GA. Phone, visitation and deposit options for this Cobb County Sheriff's jail.",

  description:
    "Cobb County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Cobb County Sheriff's jail in Marietta GA.",

  overview: [
    "Cobb County Jail is the county jail in Marietta, Georgia, operated by the Cobb County Sheriff's Office. It is a pretrial facility of about 1 million square feet with a capacity of about 3,077 beds. Building A was completed in 1987, Building B in 1997, and the C Tower in 2010.",
    "Phone calls and video visits at Cobb County Jail run through ViaPath (GTL).",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "1825 County Services Parkway, Marietta, GA 30008",
  phone: "(770) 499-4221",

  inmateCapacity: 3077,
  operatedBy: "Cobb County Sheriff's Office",

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
      notes: "GTL (ViaPath) provides phone service and video visits.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "GTL", notes: "Video visits through GTL. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Cobb County Jail?", answer: "Phone calls run through ViaPath (GTL)." },
    { question: "How do I visit someone at Cobb County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "How big is Cobb County Jail?", answer: "Cobb County Jail is a pretrial facility of about 1 million square feet with a capacity of about 3,077 beds. Building A was completed in 1987, Building B in 1997, and the C Tower in 2010." },
      {
        question: "How do I find or search for an inmate at Cobb County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Cobb County, Georgia. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Cobb County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Cobb County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Cobb County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Cobb County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fulton-county-jail", "dekalb-county-jail", "gwinnett-county-jail"],
},

"mecklenburg-county-jail": {
  id: "f-351",
  name: "Mecklenburg County Jail",
  slug: "mecklenburg-county-jail",
  type: "county",
  stateSlug: "north-carolina",
  stateName: "North Carolina",
  stateAbbr: "NC",
  countySlug: null,
  countyName: "Mecklenburg County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Mecklenburg County Jail: GettingOut Phone, Messaging and",
  seoDescription: "How to contact someone at Mecklenburg County Jail in Charlotte NC. GettingOut phone, messaging and video visits for this Mecklenburg County Sheriff's jail.",

  description:
    "Mecklenburg County Jail communication guide. GettingOut phone, messaging and video visits for families of inmates at this Mecklenburg County Sheriff's jail in Charlotte NC.",

  overview: [
    "Mecklenburg County Jail is the county jail in Charlotte, North Carolina, operated by the Mecklenburg County Sheriff's Office. The system includes Detention Center Central in uptown Charlotte plus Detention Center North. Jail North reopened after a closure that lasted since 2022, amid overcrowding.",
    "Communication at Mecklenburg County Jail runs through GettingOut, ViaPath's platform for phone calls, video visits, and messaging.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "801 East Fourth Street, Charlotte, NC 28202, Detention Center Central",
  phone: "(980) 314-5200 Detention Center Central, (704) 336-8100 Information Line",
  fax: "(704) 336-6118",
  website: "https://www.mecksheriff.com/index.php/detention-center-central/",
  operatedBy: "Mecklenburg County Sheriff's Office",

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
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm which detention center holds the inmate and its visiting hours before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at Mecklenburg County Jail?", answer: "Phone calls run through GettingOut, ViaPath's platform." },
    { question: "How do I visit someone at Mecklenburg County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm which detention center holds the inmate before traveling." },
    { question: "Which facilities are in the Mecklenburg County Jail system?", answer: "The system includes Detention Center Central in uptown Charlotte plus Detention Center North. Jail North reopened after a closure that lasted since 2022, amid overcrowding." },
      {
        question: "How do I find or search for an inmate at Mecklenburg County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Mecklenburg County, North Carolina. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Mecklenburg County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Mecklenburg County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Mecklenburg County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Mecklenburg County Jail?",
        answer: "Schedule GettingOut video visits in advance. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },



    { question: "How do I message someone at Mecklenburg County Jail?", answer: "Create a GettingOut account online or through the app. Search for the person using their name and booking number, then send your message. Expect a short review period before delivery." },
    { question: "What happens after someone is sentenced to state prison from Mecklenburg County?", answer: "People sentenced to felony prison time are transferred to a North Carolina Department of Adult Correction facility. Check the new facility's communication setup right after any transfer, since the providers change." },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-butner", "wake-county-detention-center", "fci-seagoville"],
},

"wake-county-jail": {
  id: "f-352",
  name: "Wake County Jail",
  slug: "wake-county-jail",
  type: "county",
  stateSlug: "north-carolina",
  stateName: "North Carolina",
  stateAbbr: "NC",
  countySlug: null,
  countyName: "Wake County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Wake County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Wake County Jail in Raleigh NC. Phone, visitation and deposit options for this Wake County Sheriff's jail system.",

  description:
    "Wake County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Wake County Sheriff's jail system in Raleigh NC.",

  overview: [
    "Wake County Jail is the county jail system in Raleigh, North Carolina, operated by the Wake County Sheriff's Office Detention Division. It has a total capacity of about 1,574 beds across two facilities: the Wake County Detention Center and the John H. Baker Jr. Public Safety Center. All visits are by video at the Detention Center.",
    "Phone calls from Wake County Jail go through PayTel Communications under a county contract. The video visitation vendor is not confirmed.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 1574,
  operatedBy: "Wake County Sheriff's Office",
  // TODO(Jan): verify video and messaging provider

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
      notes: "PayTel Communications provides inmate phone service under a county contract.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", notes: "All visits are by video at the Wake County Detention Center. Confirm scheduling rules with the Sheriff's Office." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "PayTel", notes: "Phone calls through PayTel Communications." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone vendor with the facility before creating any paid account.",
    "All visits are by video at the Detention Center. Schedule ahead and follow Sheriff's Office visiting rules.",
    "Visitors must be approved and bring a valid government-issued photo ID for any required verification.",
    "All calls and visits are monitored and recorded.",
    "Confirm which facility holds the inmate and its visiting hours before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at Wake County Jail?", answer: "Phone calls go through PayTel Communications under a county contract." },
    { question: "Can I visit in person at Wake County Jail?", answer: "All visits are by video at the Wake County Detention Center. Schedule ahead and follow the Sheriff's Office visiting rules." },
    { question: "Which facilities are in the Wake County Jail system?", answer: "The system includes the Wake County Detention Center and the John H. Baker Jr. Public Safety Center, with a total capacity of about 1,574 beds." },
      {
        question: "How do I find or search for an inmate at Wake County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Wake County, North Carolina. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Wake County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Wake County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Wake County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Wake County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["federal-correctional-complex-butner", "mecklenburg-county-jail", "fci-seagoville"],
},

"shelby-county-jail": {
  id: "f-353",
  name: "Shelby County Jail",
  slug: "shelby-county-jail",
  type: "county",
  stateSlug: "tennessee",
  stateName: "Tennessee",
  stateAbbr: "TN",
  countySlug: null,
  countyName: "Shelby County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Shelby County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Shelby County Jail in Memphis TN. Phone, visitation and deposit options for this Shelby County Sheriff's jail.",

  description:
    "Shelby County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Shelby County Sheriff's jail in Memphis TN.",

  overview: [
    "Shelby County Jail is the county jail in Memphis, Tennessee, operated by the Shelby County Sheriff's Office. The main jail is in the Justice Complex. The county operates multiple detention sites including the Adult Offender Center and the East Women's Facility.",
    "Phone calls and video visits at Shelby County Jail run through GTL (ConnectNetwork), per the Sheriff's Office partnership with ConnectNetwork/GTL.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Shelby County Sheriff's Office",

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
      notes: "GTL (ViaPath) provides phone service and video visits through ConnectNetwork, per the Sheriff's Office partnership.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "GTL", notes: "Video visits through GTL. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm which facility holds the inmate and its visiting hours before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at Shelby County Jail?", answer: "Phone calls run through GTL (ConnectNetwork)." },
    { question: "How do I visit someone at Shelby County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm which facility holds the inmate before traveling." },
    { question: "Which facilities are in the Shelby County Jail system?", answer: "The main jail is in the Justice Complex. The county operates multiple detention sites including the Adult Offender Center and the East Women's Facility." },
      {
        question: "How do I find or search for an inmate at Shelby County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Shelby County, Tennessee. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Shelby County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Shelby County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Shelby County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Shelby County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fci-memphis", "davidson-county-jail", "fci-seagoville"],
},

"franklin-county-jail-ohio": {
  id: "f-354",
  name: "Franklin County Jail",
  slug: "franklin-county-jail-ohio",
  type: "county",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Franklin County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Franklin County Jail: GTL Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Franklin County Jail in Columbus OH. GTL phone, messaging and video visits for this Franklin County Sheriff's jail.",

  description:
    "Franklin County Jail communication guide. GTL phone, messaging and video visits for families of inmates at this Franklin County Sheriff's jail in Columbus OH.",

  overview: [
    "Franklin County Jail is the county jail in Columbus, Ohio, operated by the Franklin County Sheriff's Office. The Sheriff operates a corrections center system, and the current main center is the James A. Karnes Corrections Center.",
    "Communication at Franklin County Jail runs through GTL (ViaPath). Phone calls, video visits, and messaging are handled through GTL's ConnectNetwork and GettingOut platforms.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Franklin County Sheriff's Office",

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
      notes: "GTL (ViaPath) provides phone service, video visits, and messaging through ConnectNetwork and GettingOut.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Electronic messaging through GTL." },
    video: { status: "available", provider: "GTL", notes: "Video visits through GTL. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Franklin County Jail in Ohio?", answer: "Phone calls run through GTL (ViaPath)." },
    { question: "How do I visit someone at Franklin County Jail in Ohio?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the James A. Karnes Corrections Center?", answer: "The James A. Karnes Corrections Center is the current main center of the Franklin County Sheriff's corrections center system in Columbus, Ohio." },
      {
        question: "How do I find or search for an inmate at Franklin County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Franklin County, Ohio. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Franklin County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Franklin County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Franklin County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Franklin County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fci-elkton", "hamilton-county-jail-ohio", "montgomery-county-jail-ohio"],
},

"hamilton-county-jail-ohio": {
  id: "f-355",
  name: "Hamilton County Jail",
  slug: "hamilton-county-jail-ohio",
  type: "county",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Hamilton County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hamilton County Jail: Securus Phone, Messaging and Video",
  seoDescription: "How to contact someone at Hamilton County Jail in Cincinnati OH. Securus phone, messaging and video visits for this Hamilton County Sheriff's jail.",

  description:
    "Hamilton County Jail communication guide. Securus phone, messaging and video visits for families of inmates at this Hamilton County Sheriff's jail in Cincinnati OH.",

  overview: [
    "Hamilton County Jail is the county jail in Cincinnati, Ohio, operated by the Hamilton County Sheriff's Office. It is housed in the Hamilton County Justice Center, built in 1985, with twin towers connected to the courthouse by a skywalk.",
    "Communication at Hamilton County Jail runs through Securus. Phone calls, eMessaging, and video visits are handled via Securus.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  notToConfuseWith: "Not to be confused with Hamilton County Jail in Chattanooga, Tennessee.",
  established: 1985,
  operatedBy: "Hamilton County Sheriff's Office",

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
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Hamilton County Jail in Ohio?", answer: "Phone calls run through Securus. Set up a Securus account to fund calls and eMessaging." },
    { question: "How do I visit someone at Hamilton County Jail in Ohio?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Hamilton County Jail in Ohio?", answer: "Hamilton County Jail is housed in the Hamilton County Justice Center in Cincinnati, built in 1985, with twin towers connected to the courthouse by a skywalk." },
      {
        question: "How do I find or search for an inmate at Hamilton County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Hamilton County, Ohio. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
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

    { question: "What is the Hamilton County Justice Center?", answer: "It is the county jail in downtown Cincinnati, housing pretrial and sentenced inmates. The building also houses the Sheriff's offices and the courts." },
    { question: "How do video visits work at Hamilton County Jail in Ohio?", answer: "Remote video visits run through Securus Video Connect from your computer or phone, or you can use the video kiosks at the jail. Schedule in advance and be on the inmate's approved visitor list." },
    { question: "Can I send messages to an inmate at Hamilton County Jail in Ohio?", answer: "Yes, through Securus eMessaging. You can send text messages and photo attachments, and inmates can reply from their tablets. Messaging is fee-based." },
    { question: "How does bail work at Hamilton County Jail in Ohio?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
  ],

  relatedFacilitySlugs: ["fci-elkton", "franklin-county-jail-ohio", "montgomery-county-jail-ohio"],
},

"montgomery-county-jail-ohio": {
  id: "f-356",
  name: "Montgomery County Jail",
  slug: "montgomery-county-jail-ohio",
  type: "county",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Montgomery County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Montgomery County Jail Ohio: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Montgomery County Jail in Dayton OH. Phone, visitation and deposit options for this Montgomery County Sheriff's jail.",

  description:
    "Montgomery County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Montgomery County Sheriff's jail in Dayton OH.",

  overview: [
    "Montgomery County Jail is the county jail in Dayton, Ohio, operated by the Montgomery County Sheriff's Office. The current jail was built in 1964, with an addition built in 1993. County leaders postponed plans to build a replacement jail over funding, after a 2021 needs assessment recommended an entirely new facility estimated at $172 million to $202 million. General information is available at (937) 225-4160.",
    "Phone calls run through Pay Tel Communications. Inmates may only place Collect, Prepaid Collect, and Prepaid Calling Card calls, in 20-minute increments, after which the call is terminated. Set up an account at paytel.com or by calling 1-800-729-8355. The facility will not forward incoming calls to an inmate or take messages for inmates. To block unwanted calls, contact Pay Tel at 1-800-729-8355 and follow the voice prompts.",
    "Video visits in the jail lobby are free. Each inmate is allowed two 30-minute visits per week, with a maximum of one visit per day. Register and schedule a day in advance at smartinmate.com, or by calling 727-349-1561 if you do not have internet access. Lobby visitation hours are Monday through Sunday, 9:00 a.m. to 2:30 p.m. and 4:30 p.m. to 8:00 p.m., including legal holidays. Visitors must wear shirts and shoes and clothing suitable for street wear. Lobby visits do not affect paid remote visits.",
    "Regular postal mail is scanned and made available for inmates to view on kiosks or tablets, and the original document is destroyed. Send regular mail to: Smart Communications, Montgomery County Sheriff's Office, Attention To: Inmate Name and ID Number, P.O. Box 9123, Seminole, FL 33775-9123. Mail without the inmate ID number and name is returned to sender. Legal mail goes directly to the facility at: Montgomery County Jail, Inmate Name and ID Number, 330 West Second Street, Dayton, OH 45422. MailGuardTracker.com tracks postal mail delivery and rejections.",
    "Money goes into an inmate account at the automated kiosk in the jail lobby, available 24 hours a day, seven days a week, or online at jailatm.com. The kiosk accepts Visa, Mastercard, Discover, and cash. Personal checks are not accepted. Care packages can be purchased at shop.icaregifts.com. Bond may be posted 24 hours a day, seven days a week at the Inmate Property Room Window in the jail lobby. Call (937) 224-8447 to check bond amounts. Ohio House Bill 1 adds a bail surcharge of up to $85.00 per bond, paid at the time the bond is posted, and personal checks cannot be accepted for bond.",
    "Directory sources report that remote video visits run through PayTel Connect, with the inmate sending the initial invite, the visitor creating an account at paytelconnect.com, and the visitor uploading a state ID and selfie for approval. The official Sheriff page does not name a remote video vendor, so confirm the current remote video setup with the facility before scheduling. Directory sources also report messaging through Pay Tel inteleMESSAGE at $0.50 per message sent, with the inmate required to contact the family member first. Confirm messaging availability and cost with the facility before funding an account.",
  ],

  notToConfuseWith: "Not to be confused with Montgomery County Jail in Conroe, Texas.",
  established: 1964,
  operatedBy: "Montgomery County Sheriff's Office",
    mailingAddress: "Regular mail: Smart Communications, Montgomery County Sheriff's Office, Attention To: Inmate Name-ID Number, P.O. Box 9123, Seminole, FL 33775-9123. Legal mail: Montgomery County Jail, Inmate Name-ID Number, 330 West Second Street, Dayton, OH 45422.",
    visitingHours: "Lobby video visits: Mon-Sun 9:00 a.m.-2:30 p.m. and 4:30-8:00 p.m., including legal holidays. Free, two 30-minute visits per week, maximum one per day. Register and schedule a day in advance at smartinmate.com, or call 727-349-1561.",
    commissary: "Deposits at the lobby kiosk (24/7; Visa, Mastercard, Discover, cash; no personal checks) or online at jailatm.com. Care packages at shop.icaregifts.com.",
    bailInfo: "Bond may be posted 24/7 at the Inmate Property Room Window in the jail lobby. Bond amounts: (937) 224-8447. Ohio House Bill 1 bail surcharge up to $85.00 per bond, paid at posting. No personal checks for bond.",

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
      notes: "PayTel Communications provides phone service, per the Sheriff's Office inmate information page. Lobby video visits are scheduled through Smart Communications at smartinmate.com.",
    },
    {
      name: "Smart Communications",
      slug: "smart-communications",
      initial: "S",
      color: "bg-teal-700",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Free lobby video visits scheduled through Smart Communications at smartinmate.com, per the Sheriff's Office inmate information page. Regular mail is scanned by Smart Communications and viewable on kiosks/tablets.",
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
      notes: "Online deposits at jailatm.com, per the Sheriff's Office inmate information page. Lobby kiosk available 24/7.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging availability is not stated on the official Sheriff page. Directory sources report Pay Tel inteleMESSAGE; confirm availability and cost with the facility before funding an account." },
    video: { status: "available", provider: "Smart Communications", notes: "Free lobby video visits through Smart Communications. Register and schedule a day in advance at smartinmate.com, or call 727-349-1561. Two 30-minute visits per week, maximum one per day. Lobby hours Mon-Sun 9:00 a.m.-2:30 p.m. and 4:30-8:00 p.m., including legal holidays. Lobby visits do not affect paid remote visits." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "PayTel", notes: "Phone calls through Pay Tel Communications, per the Sheriff's Office inmate information page. Only Collect, Prepaid Collect, and Prepaid Calling Card calls, in 20-minute increments. Setup at paytel.com or 1-800-729-8355." },
    moneyTransfer: { status: "available", provider: "JailATM", notes: "Deposits at the lobby kiosk (24/7; Visa, Mastercard, Discover, cash; no personal checks) or online at jailatm.com, per the Sheriff's Office inmate information page. Care packages at shop.icaregifts.com." },
  },

  rules: [
    "Phone service runs through Pay Tel Communications. Free lobby video visits are scheduled through Smart Communications at smartinmate.com.",
    "Regular mail goes to the Smart Communications PO Box in Seminole, FL; only legal mail goes to the facility at 330 West Second Street.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Montgomery County Jail in Ohio?", answer: "Phone calls run through Pay Tel Communications. Inmates may only place Collect, Prepaid Collect, and Prepaid Calling Card calls, in 20-minute increments. Set up an account at paytel.com or by calling 1-800-729-8355. The facility will not forward incoming calls or take messages." },
    { question: "How do I visit someone at Montgomery County Jail in Ohio?", answer: "Free lobby video visits are scheduled through Smart Communications. Register and schedule a day in advance at smartinmate.com, or call 727-349-1561. Two 30-minute visits per week, maximum one per day. Lobby hours Mon-Sun 9:00 a.m.-2:30 p.m. and 4:30-8:00 p.m., including legal holidays." },
    { question: "How old is Montgomery County Jail in Ohio?", answer: "The current jail was built in 1964 with a 1993 addition. A replacement jail plan was postponed over funding." },
      {
        question: "How do I find or search for an inmate at Montgomery County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Montgomery County, Ohio. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Montgomery County Jail?",
        answer: "Send regular mail to: Smart Communications, Montgomery County Sheriff's Office, Attention To: Inmate Name and ID Number, P.O. Box 9123, Seminole, FL 33775-9123. Regular mail is scanned, viewable on kiosks or tablets, and the original is destroyed. Mail without the inmate ID number and name is returned to sender. Send legal mail directly to: Montgomery County Jail, Inmate Name and ID Number, 330 West Second Street, Dayton, OH 45422.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Montgomery County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Montgomery County Jail?",
        answer: "Contact Pay Tel at 1-800-729-8355 and follow the voice prompts to block your number. You can also block the number through your phone carrier.",
      },
      {
        question: "How do I schedule or cancel a video visit at Montgomery County Jail?",
        answer: "Register and schedule a day in advance at smartinmate.com, or call 727-349-1561 if you do not have internet access. Lobby visits are free, two 30-minute visits per week, maximum one per day. Check the facility's visitation page for its cancellation rules.",
      },
      {
        question: "How do I send money to someone at Montgomery County Jail in Ohio?",
        answer: "Deposit at the automated kiosk in the jail lobby, available 24 hours a day, seven days a week, or online at jailatm.com. The kiosk accepts Visa, Mastercard, Discover, and cash. Personal checks are not accepted. Care packages can be purchased at shop.icaregifts.com.",
      },
      {
        question: "How do I post bond at Montgomery County Jail in Ohio?",
        answer: "Bond may be posted 24 hours a day, 7 days a week at the Inmate Property Room Window in the jail lobby. Call (937) 224-8447 to check bond amounts. Ohio House Bill 1 requires a bail surcharge of up to $85.00 per bond, paid at posting. Personal checks cannot be accepted for bond.",
      },

  ],

  relatedFacilitySlugs: ["fci-elkton", "franklin-county-jail-ohio", "hamilton-county-jail-ohio"],
},

"wayne-county-jail-michigan": {
  id: "f-357",
  name: "Wayne County Jail",
  slug: "wayne-county-jail-michigan",
  type: "county",
  stateSlug: "michigan",
  stateName: "Michigan",
  stateAbbr: "MI",
  countySlug: null,
  countyName: "Wayne County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Wayne County Jail Michigan: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Wayne County Jail in Detroit MI. Phone, visitation and deposit options for this Wayne County Sheriff's jail.",

  description:
    "Wayne County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Wayne County Sheriff's jail in Detroit MI.",

  overview: [
    "Wayne County Jail is the county jail in Detroit, Michigan, operated by the Wayne County Sheriff's Office. The system includes Jail I, the Andrew C. Baird Detention Facility, and Jail II, the Old Jail, in downtown Detroit.",
    "Phone calls and video visits at Wayne County Jail run through ViaPath (Telmate), per 2022 reporting on the county's jail communications contract.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Wayne County Sheriff's Office",

  providers: [
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: false,
      video: true,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "GettingOut (ViaPath/Telmate) provides phone service and video visits, per 2022 reporting on the county contract.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GettingOut", notes: "Phone calls through GettingOut (ViaPath/Telmate)." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm which jail holds the inmate and its visiting hours before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at Wayne County Jail in Michigan?", answer: "Phone calls run through GettingOut (ViaPath/Telmate), per 2022 reporting." },
    { question: "How do I visit someone at Wayne County Jail in Michigan?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm which jail holds the inmate before traveling." },
    { question: "Which facilities are in the Wayne County Jail system?", answer: "The system includes Jail I, the Andrew C. Baird Detention Facility, and Jail II, the Old Jail, in downtown Detroit." },
      {
        question: "How do I find or search for an inmate at Wayne County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Wayne County, Michigan. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Wayne County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Wayne County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Wayne County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Wayne County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fci-milan", "kent-county-jail", "fci-seagoville"],
},

"kent-county-jail-michigan": {
  id: "f-358",
  name: "Kent County Jail",
  slug: "kent-county-jail-michigan",
  type: "county",
  stateSlug: "michigan",
  stateName: "Michigan",
  stateAbbr: "MI",
  countySlug: null,
  countyName: "Kent County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Kent County Jail: Smart Communications Phone, Messaging and",
  seoDescription: "How to contact someone at Kent County Jail in Grand Rapids MI. Smart Communications phone, messaging and video visits for this Kent County Sheriff's jail.",

  description:
    "Kent County Jail communication guide. Smart Communications phone, messaging and video visits for families of inmates at this Kent County Sheriff's jail in Grand Rapids MI.",

  overview: [
    "Kent County Jail, also known as the Kent County Correctional Facility, is the county's main adult jail in Grand Rapids, Michigan, operated by the Kent County Sheriff's Office. Its operations are reported as ACA accredited.",
    "Communication at Kent County Jail runs through Smart Communications. Phone calls, video visits, and tablet messaging run through the Smart Communications system, and mail is scanned to tablets.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Kent County Sheriff's Office",

  providers: [
    {
      name: "Smart Communications",
      slug: "smartinmate",
      initial: "S",
      color: "bg-cyan-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "Smart Communications provides phone service, video visits, and tablet messaging through smartinmate.com. Mail is scanned to tablets.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Smart Communications", notes: "Tablet messaging through Smart Communications." },
    video: { status: "available", provider: "Smart Communications", notes: "Video visits through Smart Communications. Schedule in advance." },
    photos: { status: "available", provider: "Smart Communications", notes: "Photo sharing through Smart Communications tablets." },
    phone: { status: "available", provider: "Smart Communications", notes: "Phone calls through Smart Communications (smartinmate.com)." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Kent County Jail in Michigan?", answer: "Phone calls run through Smart Communications (smartinmate.com)." },
    { question: "How do I visit someone at Kent County Jail in Michigan?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the official name of Kent County Jail in Michigan?", answer: "The facility is also known as the Kent County Correctional Facility. It is the county's main adult jail in Grand Rapids, and its operations are reported as ACA accredited." },
      {
        question: "How do I find or search for an inmate at Kent County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Kent County, Michigan. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Kent County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Kent County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Kent County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Kent County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fci-milan", "wayne-county-jail", "fci-seagoville"],
},

"ramsey-county-jail": {
  id: "f-359",
  name: "Ramsey County Jail",
  slug: "ramsey-county-jail",
  type: "county",
  stateSlug: "minnesota",
  stateName: "Minnesota",
  stateAbbr: "MN",
  countySlug: null,
  countyName: "Ramsey County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Ramsey County Jail: NCIC Phones and Video Visits Guide",
  seoDescription: "How to contact someone at Ramsey County Jail in St. Paul MN. NCIC phone service and video visitation for this Ramsey County Sheriff's jail.",

  description:
    "Ramsey County Jail communication guide. NCIC phone service and video visitation for families of inmates at this Ramsey County Sheriff's jail in St. Paul MN.",

  overview: [
    "Ramsey County Jail, also known as the Adult Detention Center, is the county jail in St. Paul, Minnesota, operated by the Ramsey County Sheriff's Office. It uses a direct supervision environment. Face-to-face visits ended except for professional visits in 2003, and all visits are now by video.",
    "Communication at Ramsey County Jail runs through NCIC Inmate Communications, per the county's inmate communication page. Families set up an NCIC account for phone service and video visits.",
    "Visitation is video-based. Visitors must be approved and follow Sheriff's Office visiting rules. All calls and visits are monitored and recorded.",
  ],

  address: "425 Grove Street, Saint Paul, MN 55101",
  website: "https://www.ramseycountymn.gov/your-government/leadership/sheriffs-office/sheriffs-office-divisions/detention-services/adult-detention-center-jail/inmate-communication",
  mailingAddress: "Inmate Full Name\nRamsey County ADC, Inmate Mail\n425 Grove Street\nSaint Paul, MN 55101",
  operatedBy: "Ramsey County Sheriff's Office",

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
      notes: "NCIC provides inmate communications, including video visitation, at Ramsey County Jail, per the county's inmate communication page.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "NCIC", notes: "Electronic messaging options are not confirmed for this facility. Confirm with NCIC or the facility." },
    video: { status: "available", provider: "NCIC", notes: "All visits are by video through NCIC. Schedule in advance and follow Sheriff's Office visiting rules." },
    photos: { status: "limited", provider: "NCIC", notes: "Photo sharing options are not confirmed for this facility. Confirm with NCIC or the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Outgoing calls through the NCIC phone system. Fund an NCIC account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Sheriff's Office rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Create an NCIC account and keep your phone number on the inmate's approved list before expecting calls.",
    "All visits are by video. Schedule ahead through NCIC and log in on time.",
    "Visitors must be approved and follow Sheriff's Office visiting rules.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours and rules with the facility, since schedules can change.",
  ],

  faq: [
    { question: "Which company handles phone calls at Ramsey County Jail?", answer: "NCIC Inmate Communications provides phone service and video visitation at Ramsey County Jail, per the county's inmate communication page." },
    { question: "Can I visit in person at Ramsey County Jail?", answer: "No. Face-to-face visits ended except for professional visits in 2003. All visits are now by video through NCIC." },
    { question: "How do video visits work at Ramsey County Jail?", answer: "Video visits run through NCIC. Create an account, add the inmate, and schedule in advance. Log in on time for your scheduled visit." },
    { question: "What is direct supervision at Ramsey County Jail?", answer: "In a direct supervision jail, officers are stationed inside the housing units with inmates rather than observing from a separate control room. Ramsey County Jail uses this model." },
    { question: "How do I add money for phone calls at Ramsey County Jail?", answer: "Fund your NCIC account online or through the NCIC app. The inmate can only call numbers on the approved list." },
      {
        question: "How do I find or search for an inmate at Ramsey County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Ramsey County, Minnesota. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Ramsey County Jail?",
        answer: "Address mail to the inmate's full name, Ramsey County ADC, Inmate Mail, 425 Grove Street, Saint Paul, MN 55101. Include your full name and return address.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Ramsey County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Ramsey County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Ramsey County Jail?",
        answer: "Schedule NCIC video visits in advance. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

    { question: "Can I leave a message for an inmate at Ramsey County Jail?", answer: "Yes. NCIC offers a voicemail option for a fee. Set it up through your NCIC account at ncic.com." },
    { question: "How does bail work at Ramsey County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
  ],

  relatedFacilitySlugs: ["fmc-rochester", "hennepin-county-jail", "fci-seagoville"],
  relatedGuideSlugs: ["how-prison-phone-calls-work", "how-video-visitation-works"],
},

"hennepin-county-jail": {
  id: "f-360",
  name: "Hennepin County Jail",
  slug: "hennepin-county-jail",
  type: "county",
  stateSlug: "minnesota",
  stateName: "Minnesota",
  stateAbbr: "MN",
  countySlug: null,
  countyName: "Hennepin County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hennepin County Jail: Securus Phones and Online Visits Guide",
  seoDescription: "How to contact someone at Hennepin County Jail in Minneapolis MN. Securus phone service and online visiting for this Hennepin County Sheriff's jail.",

  description:
    "Hennepin County Jail communication guide. Securus phone service and online visiting for families of inmates at this Hennepin County Sheriff's jail in Minneapolis MN.",

  overview: [
    "Hennepin County Jail is the county jail in Minneapolis, Minnesota, operated by the Hennepin County Sheriff's Office. The jail is in the Public Safety Facility at 401 S 4th Ave in downtown Minneapolis, near the Government Plaza light rail station. All public visiting is done online.",
    "Phone service at Hennepin County Jail runs through Securus Technologies. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation is online. Visitors must be approved and follow Sheriff's Office visiting rules. All calls and visits are monitored and recorded.",
  ],

  address: "401 S 4th Ave, Minneapolis, MN 55415",
  mailingAddress: "Inmate Name, Booking Number\nHennepin County Public Safety Facility\n401 S 4th Ave\nMinneapolis, MN 55415",
  operatedBy: "Hennepin County Sheriff's Office",

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
      notes: "Securus provides phone service and video visits at Hennepin County Jail.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Securus", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Securus or the facility." },
    video: { status: "available", provider: "Securus", notes: "Video visits through Securus. All public visiting is done online. Schedule in advance." },
    photos: { status: "limited", provider: "Securus", notes: "Photo sharing options are not confirmed for this facility. Confirm with Securus or the facility." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system. Fund a Securus account and keep your number on the approved list." },
    moneyTransfer: { status: "limited", notes: "Deposit options follow Sheriff's Office rules. Confirm the current deposit method with the facility before sending money." },
  },

  rules: [
    "Set up a Securus account and keep your phone number on the inmate's approved list before expecting calls.",
    "All public visiting is done online. Schedule ahead and follow Sheriff's Office visiting rules.",
    "Visitors must be approved and follow Sheriff's Office visiting rules.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours and rules with the facility, since schedules can change.",
  ],

  faq: [
    { question: "Which company handles phone calls at Hennepin County Jail?", answer: "Securus Technologies provides phone service at Hennepin County Jail." },
    { question: "Can I visit in person at Hennepin County Jail?", answer: "All public visiting is done online. Schedule ahead and follow the Sheriff's Office visiting rules." },
    { question: "Can I send electronic messages to an inmate at Hennepin County Jail?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Securus or by contacting the facility." },
    { question: "Where is Hennepin County Jail?", answer: "Hennepin County Jail, also known as the Adult Detention Center, is at 401 S 4th Ave, Minneapolis, MN 55415, in the Public Safety Facility downtown, near the Government Plaza light rail station." },
    { question: "How do I add money for phone calls at Hennepin County Jail?", answer: "Fund your Securus account online or through the Securus app. The inmate can only call numbers on the approved list." },
      {
        question: "How do I find or search for an inmate at Hennepin County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Hennepin County, Minnesota. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Hennepin County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Hennepin County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Hennepin County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Hennepin County Jail?",
        answer: "Schedule Securus video visits in advance. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fmc-rochester", "ramsey-county-jail", "fci-seagoville"],
  relatedGuideSlugs: ["how-securus-works", "how-prison-phone-calls-work"],
},

"king-county-jail": {
  id: "f-361",
  name: "King County Jail",
  slug: "king-county-jail",
  type: "county",
  stateSlug: "washington",
  stateName: "Washington",
  stateAbbr: "WA",
  countySlug: null,
  countyName: "King County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "King County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at King County Jail in Seattle WA. Phone, visitation and deposit options for this King County adult jail.",

  description:
    "King County Jail communication guide. Phone, visitation and deposit options for families of inmates at this King County adult jail in Seattle WA.",

  overview: [
    "King County Jail is an adult jail in Seattle, Washington, operated by the King County Department of Adult and Juvenile Detention (DAJD). DAJD operates two adult jails: the King County Correctional Facility in Seattle and the Maleng Regional Justice Center in Kent.",
    "Phone calls and video visits at King County Jail run through Securus, including Securus Video Connect visits.",
    "Visitation follows DAJD rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "500 Fifth Ave., Seattle, WA 98104",
  phone: "206-296-1234",

  operatedBy: "King County Department of Adult and Juvenile Detention (DAJD)",

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
      notes: "Securus provides phone service and video visitation, including Securus Video Connect.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "Securus", notes: "Video visits through Securus Video Connect. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "Securus", notes: "Phone calls through Securus." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the DAJD dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm which jail holds the inmate and its visiting hours before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at King County Jail?", answer: "Phone calls run through Securus Technologies." },
    { question: "How do I visit someone at King County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow DAJD visiting rules. Confirm which jail holds the inmate before traveling." },
    { question: "Which jails does King County DAJD operate?", answer: "DAJD operates two adult jails: the King County Correctional Facility in Seattle and the Maleng Regional Justice Center in Kent." },
      {
        question: "How do I find or search for an inmate at King County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for King County, Washington. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at King County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at King County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at King County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at King County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fci-sheridan", "fci-seagoville", "mdc-los-angeles"],
},

"clark-county-jail-nevada": {
  id: "f-362",
  name: "Clark County Jail",
  slug: "clark-county-jail-nevada",
  type: "county",
  stateSlug: "nevada",
  stateName: "Nevada",
  stateAbbr: "NV",
  countySlug: null,
  countyName: "Clark County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Clark County Jail Nevada: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Clark County Jail in Las Vegas NV. Phone, visitation and deposit options for this Clark County Detention Center.",

  description:
    "Clark County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Clark County Detention Center in Las Vegas NV.",

  overview: [
    "Clark County Jail, also known as the Clark County Detention Center, is the county jail in Las Vegas, Nevada, operated by the Las Vegas Metropolitan Police Department (LVMPD) Detention Services. The facility includes the North Valley Complex, also called CCDC North. The LVMPD inmate handbook governs telephone usage.",
    "Phone calls and video visits at Clark County Jail run through ViaPath Technologies. Trust account deposits go through TouchPay.",
    "Visitation follows LVMPD rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "330 S. Casino Center Blvd., Las Vegas, NV 89101",

  operatedBy: "Las Vegas Metropolitan Police Department (LVMPD)",
    visitingHours: "Register online at the GTL VisitMe portal or in person, 8am to 10:30pm daily. No visit for 24 hours after registration. General-population social visits are two 25-minute visits per week. On-site booth visits are free. Social visiting hours are Monday through Friday, 7am to 10:30am and 7pm to 11pm; Saturday and Sunday, 7am to 10:30am, 12:30pm to 3pm, and 7pm to 11pm. Confirm the current schedule with the facility before traveling.",
    rosterUrl: "https://www.lvmpd.com/about/sections/clark-county-detention-center/inmate-search",
    callRates: "Remote video visits cost $6.25 per visit, changing to $0.19 per minute ($4.75 for a 25-minute visit) effective April 6, 2026. On-site booth visits are free. Confirm current rates with the facility.",
    commissary: "Trust account deposits through TouchPay.",

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
      notes: "ViaPath (GTL) provides phone service and video visits.",
    },
    {
      name: "TouchPay",
      slug: "touchpay",
      initial: "T",
      color: "bg-slate-600",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "TouchPay handles trust account deposits.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "GTL", notes: "Video visits through ViaPath. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through ViaPath (GTL)." },
    moneyTransfer: { status: "available", provider: "TouchPay", notes: "Trust account deposits through TouchPay." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the LVMPD dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Clark County Jail in Nevada?", answer: "Phone calls run through ViaPath Technologies." },
    { question: "How do I visit someone at Clark County Jail in Nevada?", answer: "Visitors must be approved. Bring valid photo ID and follow LVMPD visiting rules. Confirm visiting hours before traveling." },
    { question: "What is CCDC North?", answer: "CCDC North, also called the North Valley Complex, is part of the Clark County Detention Center system in Las Vegas. The LVMPD inmate handbook governs telephone usage." },
    { question: "How do I register to visit someone at Clark County Jail in Nevada?", answer: "Register online at the GTL VisitMe portal or in person, 8am to 10:30pm daily. No visit is allowed for 24 hours after registration." },
    { question: "How much do video visits cost at Clark County Jail in Nevada?", answer: "On-site booth visits are free. Remote video visits cost $6.25 per visit, changing to $0.19 per minute ($4.75 for a 25-minute visit) effective April 6, 2026. Confirm current rates with the facility." },
    { question: "How do I find an inmate at Clark County Jail in Nevada?", answer: "Use the LVMPD inmate search to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Clark County Jail in Nevada call me?", answer: "Yes. Inmates place outgoing calls through ViaPath. Keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Clark County Jail in Nevada?", answer: "Contact ViaPath to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I send money to someone at Clark County Jail in Nevada?", answer: "Trust account deposits go through TouchPay. Create a TouchPay account, add the inmate, and fund the account." },
  ],

  relatedFacilitySlugs: ["fci-seagoville", "fdc-philadelphia", "mdc-los-angeles"],
},

"washoe-county-jail": {
  id: "f-363",
  name: "Washoe County Jail",
  slug: "washoe-county-jail",
  type: "county",
  stateSlug: "nevada",
  stateName: "Nevada",
  stateAbbr: "NV",
  countySlug: null,
  countyName: "Washoe County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Washoe County Jail: Smart Communications Phones and Video",
  seoDescription: "How to contact someone at Washoe County Jail in Reno NV. Smart Communications telecom and video visits for this Washoe County Sheriff's jail.",

  description:
    "Washoe County Jail communication guide. Smart Communications telecom and video visits for families of inmates at this Washoe County Sheriff's jail in Reno NV.",

  overview: [
    "Washoe County Jail is the county jail in Reno, Nevada, operated by the Washoe County Sheriff's Office. It is the only adult detention facility for pretrial detainees in Washoe County and accepts inmates from more than 30 agencies. It was designed as one of the first direct supervision facilities.",
    "Telecom services at Washoe County Jail are provided by Smart Communications, per the Sheriff's Office detention page. Video visits run through the Smart Communications system.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Washoe County Sheriff's Office",
    mailingAddress: "Smart Communications, Washoe County Detention Facility, Inmate Name and Booking or ID Number, PO Box 9163, Seminole, FL 33775-9137. Legal mail, court documents, business mail, and publications go directly to the facility at 911 Parr Blvd., Reno, NV 89512.",
    visitingHours: "On-site video visiting is available in the public lobby, Monday through Friday, 8:00am to 9:30pm. Create an account and schedule your visit at least 24 hours in advance. You must be 18 or older and submit a photo of your government-issued ID and a current face photo.",
    callRates: "Calls are billed at a per-minute rate with no connection fees. International calls are also billed per minute. Inmates get one free 15-minute call per week, except for international calls. Contact Smart Communications for a complete charge breakdown.",
    commissary: "Place money on an inmate's account through Smart Communications at smartinmate.com.",

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
      notes: "Smart Communications provides telecom services at Washoe County Jail. Video visits run through the Smart Communications system.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "Smart Communications", notes: "Electronic messaging options are not confirmed for this facility. Confirm with Smart Communications or the facility." },
    video: { status: "available", provider: "Smart Communications", notes: "Video visits through the Smart Communications system. Schedule in advance and confirm eligibility." },
    photos: { status: "limited", provider: "Smart Communications", notes: "Photo sharing options are not confirmed for this facility. Confirm with the facility." },
    phone: { status: "available", provider: "Smart Communications", notes: "Outgoing calls through the Smart Communications telecom system." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Set up a Smart Communications account for phone and video visit services.",
    "Schedule video visits in advance and log in on time.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Washoe County Jail?", answer: "Smart Communications provides telecom services at Washoe County Jail, per the Sheriff's Office detention page." },
    { question: "How do video visits work at Washoe County Jail?", answer: "Video visits run through the Smart Communications system. Set up an account, add the inmate, and schedule in advance." },
    { question: "Can I send electronic messages to an inmate at Washoe County Jail?", answer: "Messaging options are not confirmed for this facility. Confirm current options through Smart Communications or by contacting the facility." },
    { question: "What is a direct supervision facility?", answer: "In a direct supervision facility, officers are stationed inside the housing units with inmates rather than observing from a separate control room. Washoe County Jail was designed as one of the first direct supervision facilities." },
    { question: "How do I visit someone at Washoe County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "How do I mail a letter to someone at Washoe County Jail?", answer: "Send personal mail to Smart Communications, Washoe County Detention Facility, with the inmate name and booking or ID number, PO Box 9163, Seminole, FL 33775-9137. Mail is scanned and viewed on kiosks. Legal mail, court documents, business mail, and publications go directly to the facility at 911 Parr Blvd., Reno, NV 89512." },
    { question: "Can an inmate at Washoe County Jail call me?", answer: "Yes. Inmates can make outgoing calls to approved family and friends. No incoming calls can be received except voicemail messages to approved inmates. Inmates get one free 15-minute call per week, except for international calls." },
    { question: "How do I block calls from Washoe County Jail?", answer: "Contact Smart Communications to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I send email to an inmate at Washoe County Jail?", answer: "Send email through smartinmate.com. Create an account, add the inmate, and follow the on-screen instructions. You can also place money on an inmate's account through the same site." },
  ],

  relatedFacilitySlugs: ["fci-seagoville", "clark-county-detention-center", "mdc-los-angeles"],
  relatedGuideSlugs: ["how-video-visitation-works", "how-prison-phone-calls-work"],
},

"salt-lake-county-jail": {
  id: "f-364",
  name: "Salt Lake County Jail",
  slug: "salt-lake-county-jail",
  type: "county",
  stateSlug: "utah",
  stateName: "Utah",
  stateAbbr: "UT",
  countySlug: null,
  countyName: "Salt Lake County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Salt Lake County Jail: GTL Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Salt Lake County Jail in Salt Lake City UT. GTL phone, messaging and video visits for this Salt Lake County Metro Jail.",

  description:
    "Salt Lake County Jail communication guide. GTL phone, messaging and video visits for families of inmates at this Salt Lake County Metro Jail in Salt Lake City UT.",

  overview: [
    "Salt Lake County Jail, also known as the Salt Lake County Metro Jail, is the county's main pretrial holding facility in Salt Lake City, Utah, operated by the Salt Lake County Sheriff's Office. The Sheriff's Office also runs corrections.",
    "Communication at Salt Lake County Jail runs through ViaPath (GTL), including phone calls via ConnectNetwork, video visits and messaging via GettingOut, and deposits via ConnectNetwork.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Salt Lake County Sheriff's Office",
    mailingAddress: "Prisoner Name and SO Number, c/o Salt Lake County Metro Jail, 3415 S. 900 W., Salt Lake City, UT 84119.",
    visitingHours: "Visits are scheduled in advance. Confirm the current visiting schedule and booking process with the facility before traveling.",
    commissary: "Deposits through ConnectNetwork and AdvancePay. Confirm current deposit options with the facility.",

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
      notes: "GTL (ViaPath) provides phone service via ConnectNetwork, video visits and messaging via GettingOut, and deposits via ConnectNetwork.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Electronic messaging through GTL GettingOut." },
    video: { status: "available", provider: "GTL", notes: "Video visits through GTL GettingOut. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL via ConnectNetwork." },
    moneyTransfer: { status: "available", provider: "GTL", notes: "Deposits through GTL ConnectNetwork." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Salt Lake County Jail?", answer: "Phone calls run through GTL (ViaPath) via ConnectNetwork." },
    { question: "How do I visit someone at Salt Lake County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the Salt Lake County Metro Jail?", answer: "The Salt Lake County Metro Jail is the county's main pretrial holding facility in Salt Lake City, operated by the Salt Lake County Sheriff's Office." },
    { question: "How do I mail a letter to someone at Salt Lake County Jail?", answer: "Address the envelope with the prisoner name and SO number, c/o Salt Lake County Metro Jail, 3415 S. 900 W., Salt Lake City, UT 84119. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find out if someone is at Salt Lake County Jail?", answer: "Contact the facility or the Salt Lake County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Salt Lake County Jail call me?", answer: "Yes. Inmates place outgoing calls through GTL via ConnectNetwork. Set up a ConnectNetwork account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Salt Lake County Jail?", answer: "Contact ConnectNetwork to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Salt Lake County Jail?", answer: "Video visits run through GTL GettingOut. Create a GettingOut account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I send money to someone at Salt Lake County Jail?", answer: "Deposits go through ConnectNetwork and AdvancePay. Create a ConnectNetwork account, add the inmate, and fund the account. Confirm current deposit options with the facility." },
  ],

  relatedFacilitySlugs: ["fci-seagoville", "fdc-philadelphia", "mdc-los-angeles"],
},

"travis-county-jail": {
  id: "f-365",
  name: "Travis County Jail",
  slug: "travis-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Travis County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Travis County Jail: GTL Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Travis County Jail in Austin TX. GTL phone, messaging and video visits for this Travis County Sheriff's jail system.",

  description:
    "Travis County Jail communication guide. GTL phone, messaging and video visits for families of inmates at this Travis County Sheriff's jail system in Austin TX.",

  overview: [
    "Travis County Jail is the county jail system in Austin, Texas, operated by the Travis County Sheriff's Office. It is a two-site system: the downtown jail plus the Del Valle Correctional Complex.",
    "Communication at Travis County Jail runs through ViaPath Technologies. Phone calls, video visits, and messaging run through ViaPath's systems, replacing the older Securus contract.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Travis County Sheriff's Office",

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
      notes: "ViaPath (GTL) provides phone service, video visits, and messaging, replacing the older Securus contract.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Electronic messaging through ViaPath GettingOut." },
    video: { status: "available", provider: "GTL", notes: "Video visits through ViaPath. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through ViaPath (GTL)." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account. A 2013 document named Securus, but the current provider is unconfirmed.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm which facility holds the inmate and its visiting hours before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at Travis County Jail?", answer: "Phone calls run through ViaPath Technologies, which replaced the older Securus contract." },
    { question: "How do I visit someone at Travis County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm which facility holds the inmate before traveling." },
    { question: "Which facilities are in the Travis County Jail system?", answer: "Travis County Jail is a two-site system: the downtown jail plus the Del Valle Correctional Complex, both in the Austin area." },
      {
        question: "How do I find or search for an inmate at Travis County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Travis County, Texas. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Travis County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Travis County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Travis County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Travis County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["travis-county-correctional-complex", "williamson-county-jail", "harris-county-jail"],
},

"collin-county-jail": {
  id: "f-366",
  name: "Collin County Jail",
  slug: "collin-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Collin County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Collin County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Collin County Jail in McKinney TX. Phone, visitation and deposit options for this Collin County Detention Facility.",

  description:
    "Collin County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Collin County Detention Facility in McKinney TX.",

  overview: [
    "Collin County Jail, also known as the Collin County Detention Facility, is the county jail in McKinney, Texas, operated by the Collin County Sheriff's Office. It uses the direct supervision method, and the Detention Bureau is a division of the Sheriff's Office.",
    "Phone calls at Collin County Jail run through ICSolutions, while video visits, messaging, and photo sharing run through ViaPath's GettingOut platform on tablets.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "4300 Community Ave, McKinney, TX 75071",
  phone: "(972) 547-5100",

  operatedBy: "Collin County Sheriff's Office",
    visitingHours: "All visits are 25 minutes. Visitors must arrive 20 minutes before the scheduled visit time and be on the inmate's visitation list, with valid photo ID. Visitation times are subject to change without notice. Confirm the current schedule with the facility before traveling.",
    commissary: "Cash for commissary must be deposited at the kiosk. The Detention Facility does not accept cash, checks, or money orders by mail for commissary. The Bonds Office accepts cash for bonding purposes only.",

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
      notes: "ICSolutions provides prepaid phone service.",
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
      notes: "GettingOut provides video visits, messaging, and photo sharing on tablets.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut on tablets." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits through GettingOut. Schedule in advance." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut on tablets." },
    phone: { status: "available", provider: "ICSolutions", notes: "Phone calls through ICSolutions (prepaid only)." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Collin County Jail?", answer: "Phone calls run through ICSolutions (prepaid only)." },
    { question: "How do I visit someone at Collin County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "What is the official name of Collin County Jail?", answer: "The facility is also known as the Collin County Detention Facility. It uses the direct supervision method and is operated by the Collin County Sheriff's Office in McKinney." },
    { question: "How do I schedule a visit at Collin County Jail?", answer: "Visits are 25 minutes. Arrive 20 minutes before the scheduled time, bring valid photo ID, and make sure you are on the inmate's visitation list. Visitation times can change without notice, so confirm the schedule with the facility before traveling." },
    { question: "How do I find someone at Collin County Jail?", answer: "Use the Collin County Sheriff's inmate search to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Collin County Jail call me?", answer: "Yes. Inmates make prepaid-account calls only through ICSolutions. Fund an ICSolutions account for the phone number you want the inmate to call. Inmates cannot receive incoming calls, and the jail does not accept messages for inmates." },
    { question: "How do I block calls from Collin County Jail?", answer: "Contact ICSolutions to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I send money to someone at Collin County Jail?", answer: "Deposit cash for commissary at the kiosk. The Detention Facility does not accept cash, checks, or money orders by mail for commissary." },
    { question: "Can I send mail to someone at Collin County Jail?", answer: "All mail must go through the Postmaster. Front desk personnel are not allowed to accept mail of any kind. Confirm the current mailing address with the facility before sending mail." },
  ],

  relatedFacilitySlugs: ["dallas-county-jail", "denton-county-jail", "tarrant-county-jail"],
},

"denton-county-jail": {
  id: "f-367",
  name: "Denton County Jail",
  slug: "denton-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Denton County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Denton County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Denton County Jail in Denton TX. Phone, video visitation and deposit options for this Denton County Sheriff's jail.",

  description:
    "Denton County Jail communication guide. Phone, video visitation and deposit options for families of inmates at this Denton County Sheriff's jail in Denton TX.",

  overview: [
    "Denton County Jail is the county jail in Denton, Texas, operated by the Denton County Sheriff's Office. Visitation is video-based, and the county operates an Inmate Services and Visitation page.",
    "Video visits at Denton County Jail run through HomeWAV. The phone and messaging vendors are not settled, so confirm the current provider with the facility before creating a paid account.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "127 N Woodrow Lane, Denton, TX 76205",

  operatedBy: "Denton County Sheriff's Office",
    visitingHours: "On-site public visits are held Saturdays, 8am to 7:30pm, at the Pod Jail Public Entrance, 127 Woodrow Lane, Denton, TX 76205. Schedule at least 24 hours ahead through HomeWAV. Approval can take up to 72 hours, excluding weekends and holidays. Remote visits last 20 minutes at $0.10 per minute and are initiated by the inmate, not the visitor. Up to two free on-site visits per week. Confirm the current schedule with the facility before traveling.",
    commissary: "Deposits are accepted online or by phone. Confirm current deposit options with the facility.",
  // TODO(Jan): verify phone and messaging provider

  providers: [
    {
      name: "HomeWAV",
      slug: "homewav",
      initial: "H",
      color: "bg-yellow-600",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "HomeWAV provides video visitation.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the facility which vendor, if any, handles electronic messages." },
    video: { status: "available", provider: "HomeWAV", notes: "Video visits through HomeWAV. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitation is video-based. Schedule ahead and follow Sheriff's Office visiting rules.",
    "Visitors must be approved and bring a valid government-issued photo ID for any required verification.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Denton County Jail?", answer: "The phone vendor is not settled between HomeWAV and Smart Communications. Confirm with the facility. Video visits run through HomeWAV." },
    { question: "How do I visit someone at Denton County Jail?", answer: "Visitation is video-based. Schedule ahead and follow the Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Denton County Jail?", answer: "Denton County Jail is in Denton, Texas. It is operated by the Denton County Sheriff's Office." },
    { question: "How do I schedule a video visit at Denton County Jail?", answer: "Schedule at least 24 hours ahead through HomeWAV. Approval can take up to 72 hours, excluding weekends and holidays. On-site public visits are held Saturdays, 8am to 7:30pm, at the Pod Jail Public Entrance, 127 Woodrow Lane, Denton, TX 76205." },
    { question: "How do remote visits work at Denton County Jail?", answer: "Remote visits last 20 minutes and cost $0.10 per minute. Remote visits are initiated by the inmate, not the visitor. Up to two free on-site visits per week." },
    { question: "How do I mail a letter to someone at Denton County Jail?", answer: "Mail goes through Smart Communications and is viewable by the inmate on kiosks. Track delivery with MailGuard Tracker. Confirm the current mailing process with the facility before sending mail." },
    { question: "Can an inmate at Denton County Jail call me?", answer: "The phone vendor is not settled. Confirm the current phone provider with the facility before creating a paid account. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Denton County Jail?", answer: "Ask the facility how to block calls from the jail, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I find someone at Denton County Jail?", answer: "Use the Denton County Sheriff's inmate search to confirm custody status. Have the person's full legal name ready." },
  ],

  relatedFacilitySlugs: ["dallas-county-jail", "collin-county-jail", "tarrant-county-jail"],
},

"montgomery-county-jail-texas": {
  id: "f-368",
  name: "Montgomery County Jail",
  slug: "montgomery-county-jail-texas",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Montgomery County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Montgomery County Jail Texas: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Montgomery County Jail in Conroe TX. Phone, visitation and deposit options for this Montgomery County Sheriff's jail.",

  description:
    "Montgomery County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Montgomery County Sheriff's jail in Conroe TX.",

  overview: [
    "Montgomery County Jail is the county jail in Conroe, Texas, operated by the Montgomery County Sheriff's Office. The Jail Command oversees about 300 jail staff and a daily population of nearly 1,300.",
    "Published sources do not confirm the current inmate communications vendor, so families should confirm the phone and video provider directly with the facility before creating any paid account.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  notToConfuseWith: "Not to be confused with Montgomery County Jail in Dayton, Ohio.",
  operatedBy: "Montgomery County Sheriff's Office",
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
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Montgomery County Jail in Texas?", answer: "The current vendor is not confirmed from official sources. Confirm the provider with the facility before creating a prepaid account." },
    { question: "How do I visit someone at Montgomery County Jail in Texas?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Montgomery County Jail in Texas?", answer: "Montgomery County Jail is in Conroe, Texas. The Jail Command oversees about 300 jail staff and a daily population of nearly 1,300." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "montgomery-county-jail", "williamson-county-jail"],
},

"williamson-county-jail-texas": {
  id: "f-369",
  name: "Williamson County Jail",
  slug: "williamson-county-jail-texas",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Williamson County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Williamson County Jail Texas: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Williamson County Jail in Georgetown TX. Phone, visitation and deposit options for this Williamson County Sheriff's jail.",

  description:
    "Williamson County Jail communication guide. Phone, visitation and deposit options for families of inmates at this Williamson County Sheriff's jail in Georgetown TX.",

  overview: [
    "Williamson County Jail is the county jail in Georgetown, Texas, operated by the Williamson County Sheriff's Office. The county Corrections Bureau runs the jail in Georgetown. Separate juvenile facilities exist.",
    "Video visits and messaging at Williamson County Jail run through NCIC. The phone vendor is not confirmed.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Williamson County Sheriff's Office",
  // TODO(Jan): verify phone provider

  providers: [
    {
      name: "NCIC",
      slug: "ncic",
      initial: "N",
      color: "bg-rose-600",
      messaging: true,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "NCIC provides video visitation and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Electronic messaging through NCIC." },
    video: { status: "available", provider: "NCIC", notes: "Video visits through NCIC. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the facility before creating a prepaid account." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Williamson County Jail in Texas?", answer: "The phone vendor is not confirmed. Video visits and messaging run through NCIC." },
    { question: "How do I visit someone at Williamson County Jail in Texas?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Williamson County Jail in Texas?", answer: "Williamson County Jail is in Georgetown, Texas. The county Corrections Bureau runs the jail. Separate juvenile facilities exist." },
  ],

  relatedFacilitySlugs: ["williamson-county-jail", "travis-county-correctional-complex", "harris-county-jail"],
},

"galveston-county-jail": {
  id: "f-370",
  name: "Galveston County Jail",
  slug: "galveston-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Galveston County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Galveston County Jail: GTL Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Galveston County Jail in Galveston TX. GTL phone, messaging and video visits for this Galveston County Sheriff's jail.",

  description:
    "Galveston County Jail communication guide. GTL phone, messaging and video visits for families of inmates at this Galveston County Sheriff's jail in Galveston TX.",

  overview: [
    "Galveston County Jail is the county's main detention facility in Galveston, Texas, operated by the Galveston County Sheriff's Office. The Sheriff's Corrections Bureau runs booking and release.",
    "Communication at Galveston County Jail runs through ViaPath (GTL), including phone calls via ConnectNetwork, video visits and messaging via GettingOut, and trust fund deposits via ConnectNetwork.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  address: "5700 Ball St, Galveston, TX 77551",

  operatedBy: "Galveston County Sheriff's Office",
    mailingAddress: "Inmate Full Name and ID, Galveston County Jail, 5700 Avenue H, Galveston, TX 77551.",
    visitingHours: "Visits are scheduled in advance. Visitors must be on the inmate's approved list and bring valid photo ID. Confirm the current visiting schedule with the facility before traveling.",
    commissary: "Trust fund deposits through GTL ConnectNetwork.",
    bailInfo: "Bail is set by a judge at first appearance, typically within 24 to 48 hours of booking. Check the booking record or call the facility for the current bond amount and posting instructions.",

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
      notes: "GTL (ViaPath) provides phone service via ConnectNetwork, video visits and messaging via GettingOut, and trust fund deposits via ConnectNetwork.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Electronic messaging through GTL GettingOut." },
    video: { status: "available", provider: "GTL", notes: "Video visits through GTL GettingOut. Schedule in advance." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL via ConnectNetwork." },
    moneyTransfer: { status: "available", provider: "GTL", notes: "Trust fund deposits through GTL ConnectNetwork." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any paid account.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Galveston County Jail?", answer: "Phone calls run through GTL (ViaPath) via ConnectNetwork." },
    { question: "How do I visit someone at Galveston County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Galveston County Jail?", answer: "Galveston County Jail is the county's main detention facility in Galveston, Texas. The Sheriff's Corrections Bureau runs booking and release." },
    { question: "How do I mail a letter to someone at Galveston County Jail?", answer: "Address the envelope with the inmate's full name and ID, Galveston County Jail, 5700 Avenue H, Galveston, TX 77551. Include a return address. Mail is inspected for contraband." },
    { question: "How do I find out if someone is at Galveston County Jail?", answer: "Contact the facility or the Galveston County Sheriff's Office to confirm custody status. Have the person's full legal name ready." },
    { question: "Can an inmate at Galveston County Jail call me?", answer: "Yes. Inmates place outgoing calls through GTL via ConnectNetwork. Set up a ConnectNetwork account to receive calls, and keep your number on the approved list. Inmates cannot receive incoming calls." },
    { question: "How do I block calls from Galveston County Jail?", answer: "Contact ConnectNetwork to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Galveston County Jail?", answer: "Video visits run through GTL GettingOut. Create a GettingOut account, add the inmate, and schedule in advance. Confirm the current schedule with the facility." },
    { question: "How do I send money to someone at Galveston County Jail?", answer: "Trust fund deposits go through GTL ConnectNetwork. Create a ConnectNetwork account, add the inmate, and fund the account." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "fort-bend-county-jail", "federal-detention-center-houston"],
},

"cameron-county-jail": {
  id: "f-371",
  name: "Cameron County Jail",
  slug: "cameron-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Cameron County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cameron County Jail: NCIC Phone, Messaging and Video Visits",
  seoDescription: "How to contact someone at Cameron County Jail in Brownsville TX. NCIC phone, messaging and video visits for this Cameron County Sheriff's jail.",

  description:
    "Cameron County Jail communication guide. NCIC phone, messaging and video visits for families of inmates at this Cameron County Sheriff's jail in Brownsville TX.",

  overview: [
    "Cameron County Jail is the county jail in Brownsville, Texas, operated by the Cameron County Sheriff's Office. The Sheriff's Jail Division runs multiple detention sites including Detention Center I and II and the Carrizales-Rucker Detention Center.",
    "Communication at Cameron County Jail runs through NCIC Inmate Communications for phone calls, video visits, and messaging.",
    "Visitation follows Sheriff's Office rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  operatedBy: "Cameron County Sheriff's Office",
    mailingAddress: "Inmate Name and Inmate ID Number, Carrizales Detention Center, 7300 Old Alice Road, Olmito, TX 78575.",
    visitingHours: "Visiting days and times are set by the Sheriff and can change. Adult visitors must present valid photo ID. Call (956) 554-6701 for the current visiting days and times before traveling.",
    callRates: "Video visits cost $0.30 per minute. Messages cost $0.25 each. Picture messages and video messages cost $0.35 each. Phone calls are billed at a per-minute rate with no connection fees.",
    commissary: "Inmates may purchase commissary through FS and More Commissary, funded from the inmate trust fund. Only money orders or certified checks are accepted through the mail for trust fund deposits, mailed to Cameron County Jail Division, CO Inmate Trust Fund, Inmate Name and Inmate ID Number, P.O. Box 1539, Olmito, TX 78575. No cash is accepted.",
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
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm which detention center holds the inmate and its visiting hours before traveling.",
  ],

  faq: [
    { question: "Which company handles phone calls at Cameron County Jail?", answer: "Phone calls run through NCIC Inmate Communications." },
    { question: "How do I visit someone at Cameron County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm which detention center holds the inmate before traveling." },
    { question: "Which detention sites are in the Cameron County Jail system?", answer: "The Sheriff's Jail Division runs multiple detention sites including Detention Center I and II and the Carrizales-Rucker Detention Center in Brownsville." },
    { question: "How do I mail a letter to someone at Cameron County Jail?", answer: "Address the envelope with the inmate name and inmate ID number, Carrizales Detention Center, 7300 Old Alice Road, Olmito, TX 78575. Include a return address. Mail is inspected for contraband." },
    { question: "How do I send money to someone at Cameron County Jail?", answer: "Only money orders or certified checks are accepted through the mail, payable to the inmate and sent to Cameron County Jail Division, CO Inmate Trust Fund, Inmate Name and Inmate ID Number, P.O. Box 1539, Olmito, TX 78575. No cash is accepted." },
    { question: "Can an inmate at Cameron County Jail call me?", answer: "Yes. Inmates place outgoing calls through NCIC. No incoming calls can be received except voicemail messages to approved inmates. Fund an NCIC prepaid account to receive calls." },
    { question: "How do I block calls from Cameron County Jail?", answer: "Contact NCIC to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do video visits work at Cameron County Jail?", answer: "Video visits run through NCIC and cost $0.30 per minute. Set up an NCIC account at account.ncic.com, add the inmate, and schedule in advance." },
    { question: "How do I find someone at Cameron County Jail?", answer: "Use the Cameron County Sheriff's inmate search to confirm custody status and which detention center holds the inmate. Have the person's full legal name ready." },
  ],

  relatedFacilitySlugs: ["hidalgo-county-jail", "webb-county-jail", "nueces-county-jail"],
},

"webb-county-jail": {
  id: "f-372",
  name: "Webb County Jail",
  slug: "webb-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Webb County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Webb County Jail Laredo TX: Phone, Mail and Visitation Guide",
  seoDescription: "How to contact someone at Webb County Jail in Laredo TX. Phone, mail and visit information for this Webb County Sheriff's jail, with the Detention Center separated.",

  description:
    "Webb County Jail communication guide. Phone, mail and visit information for families of inmates at this Webb County Sheriff's jail in Laredo TX. The communication vendor is not confirmed from official sources.",

  overview: [
    "Webb County Jail is the adult detention facility in Laredo, Texas. Webb County maintains it under the direction of the Webb County Sheriff, and a 2025 county agreement places the Adult Detention Facility at the Webb County Law Enforcement Center, 1000 Washington St., Laredo, Texas. Use the county jail name and location carefully, because Laredo has more than one detention facility and several directories mix them up.",
    "Do not confuse Webb County Jail with Webb County Detention Center. The Detention Center is a separate facility at 9998 S. Highway 83, Laredo, TX 78046, operated by CoreCivic. Mail, phone, visit, and deposit rules for the Detention Center do not automatically apply to the county jail. Do not send county jail mail to the 9998 address.",
    "The communication vendor for Webb County Jail is not confirmed from an official Sheriff, county, or vendor source. The Sheriff's Office page publishes no phone, video, or messaging vendor, and directories disagree, naming GettingOut, ICSolutions, and Securus in different places. Do not fund any phone, video, or messaging account for a county jail inmate until the facility confirms the current vendor.",
    "Start by confirming custody before you send anything. Use the county jail and bond search on the county publicaccess portal, or call the Webb County Sheriff's Office at 956-523-4500. The county domain also lists a jail phone number, 956-523-4400. Ask the facility to confirm the current vendor, the correct mail address and format, the current visit schedule, and the current deposit method.",
    "Do not send mail or money until the facility confirms the current instructions. Mail sent to the wrong facility can be delayed or returned, and deposit methods in directories conflict. When you call, ask what must appear on the envelope, whether a booking or ID number is required, and which deposit methods the county jail currently accepts.",
    "If the person you are trying to reach is a federal or immigration detainee, check whether they are held at the Detention Center instead of the county jail. The Detention Center has its own phone numbers, visit rules, and attorney procedures published by ICE and CoreCivic. Confirm the correct facility first, then follow that facility's published instructions.",
  ],

  operatedBy: "Webb County Sheriff's Office",
    mailingAddress: "Mail address not confirmed from official sources. Do NOT use 9998 S. Highway 83 for county jail mail; that is the separate Webb County Detention Center (CoreCivic). Confirm the current mail address and format with the facility before sending.",
    visitingHours: "Visit schedule is not published on the official Sheriff page, and directory visit tables conflict. Confirm the current visit schedule with the facility before traveling.",
    bailInfo: "Bond information is not published on the official Sheriff page. Check the county jail and bond search on the county publicaccess portal, or call the facility for the current bond amount and posting instructions.",

  providers: [],

  communication: {
    messaging: { status: "limited", notes: "Messaging vendor is not confirmed from official sources. Directories disagree on the vendor. Confirm the current messaging service with the facility before funding any account." },
    video: { status: "limited", notes: "Video visit vendor is not confirmed from official sources. Directories disagree on the vendor. Confirm the current video visit setup and schedule with the facility before scheduling." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed from official sources. The official Sheriff page names no phone vendor, and directories disagree (GettingOut, ICSolutions, Securus). Confirm the current vendor with the facility before funding any account." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "The communication vendor is not confirmed from official sources. Confirm the current vendor with the facility before creating any paid account.",
    "Do not confuse Webb County Jail with Webb County Detention Center (9998 S. Highway 83, CoreCivic). Mail, phone, visit, and deposit rules for the Detention Center do not apply to the county jail.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the Sheriff's Office dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "Which company handles phone calls at Webb County Jail?", answer: "Not confirmed from an official Sheriff, county, or vendor source. The Sheriff's Office page names no communication vendor, and directories disagree, naming GettingOut, ICSolutions, and Securus. Confirm the current vendor with the Sheriff's Office at 956-523-4500 before funding any account." },
    { question: "How do I visit someone at Webb County Jail?", answer: "The visit schedule is not published on the official Sheriff page, and directory visit tables conflict. Confirm the current visit schedule with the facility before traveling." },
    { question: "Where is Webb County Jail?", answer: "Webb County Jail is the adult detention facility in Laredo, Texas, maintained by Webb County under the direction of the Webb County Sheriff. A 2025 county agreement places the Adult Detention Facility at the Webb County Law Enforcement Center, 1000 Washington St., Laredo, Texas. Do not confuse it with Webb County Detention Center, a separate facility at 9998 S. Highway 83 operated by CoreCivic." },
    { question: "How do I mail a letter to someone at Webb County Jail?", answer: "Do not use 9998 S. Highway 83, Laredo, TX 78046 for county jail mail. That address is the Webb County Detention Center, operated by CoreCivic. No official Sheriff page was found publishing a county jail inmate-mail format, and directories list conflicting street addresses. Confirm the current mail address and format with the facility before sending anything." },
    { question: "How do I find out if someone is at Webb County Jail?", answer: "Check the county jail and bond search on the county publicaccess portal, or call the Sheriff's Office at 956-523-4500. Confirm the correct facility first, because a person held at the Detention Center follows different procedures." },
    { question: "Can an inmate at Webb County Jail call me?", answer: "Inmates place outgoing calls, so you cannot call an inmate directly. The communication vendor is not confirmed from official sources, so confirm the current vendor with the facility before setting up any account." },
    { question: "How do I block calls from Webb County Jail?", answer: "Contact the facility's phone provider to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule a video visit at Webb County Jail?", answer: "The video visit vendor is not confirmed from official sources, and directory visit tables conflict. Confirm the current video visit setup and schedule with the facility before scheduling.",
    },
    { question: "Does Webb County Jail use GettingOut for phone calls, video visits, and messaging?", answer: "Not confirmed from an official Sheriff, county, or vendor source. The Sheriff's Office page names no communication vendor, and directories disagree: one says GettingOut, another says ICSolutions, and another says Securus. Confirm the current vendor with the Sheriff's Office at 956-523-4500 before funding any account.",
    },
    { question: "Is Webb County Jail the same as Webb County Detention Center?", answer: "No. Webb County Detention Center is a separate facility at 9998 S. Highway 83, Laredo, TX 78046, operated by CoreCivic. Mail, phone, visit, and deposit rules for the Detention Center do not automatically apply to the county jail." },
    { question: "How do I send money to someone at Webb County Jail?", answer: "Deposit options are not confirmed from official sources. Confirm the current deposit method with the facility before sending money." },
  ],

  relatedFacilitySlugs: ["hidalgo-county-jail", "cameron-county-jail", "nueces-county-jail"],
},
}
