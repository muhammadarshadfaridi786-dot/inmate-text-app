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
  seoTitle: "Rockingham County Jail: Securus Phones, Messaging and Video",
  seoDescription: "How to contact someone at Rockingham County Jail in Brentwood NH. Securus phone, eMessaging and remote video visitation for this Rockingham County jail.",

  description:
    "Rockingham County Jail communication guide. Securus phone, eMessaging and remote video visitation for families of inmates at this county jail in Brentwood NH.",

  overview: [
    "Rockingham County Jail is the county detention facility in Brentwood, New Hampshire, operated by the Rockingham County Department of Corrections. It houses pretrial and sentenced inmates from across Rockingham County.",
    "Communication at Rockingham County Jail runs through Securus Technologies. Video visitation, eMessaging, and phone time are all handled via Securus. Visitation has been remote-only since March 2020, so families visit by video rather than in person.",
    "Families set up a Securus account online or in the app, select Rockingham County Jail, and add the inmate to get started. All calls, messages, and video visits are monitored and recorded.",
  ],

  notToConfuseWith: "Not to be confused with Rockingham County Jail in Reidsville, North Carolina.",
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
  notToConfuseWith: "Not to be confused with Cheshire Correctional Institution in Cheshire, Connecticut.",

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
  mailingAddress: "Inmate Name\nGrafton County Department of Corrections\n3787 Dartmouth College Highway\nNorth Haverhill, NH 03774",
  visitingHours: "Visiting hours vary by housing unit; confirm the current schedule with the facility before traveling.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in Grafton County Jail?", answer: "Call the Grafton County Department of Corrections with the inmate's full name and date of birth to confirm custody. New Hampshire's statewide inmate locator covers state prison inmates, not county jail detainees." },
    { question: "What is the mailing address for an inmate at Grafton County Jail?", answer: "Address mail to: Inmate Name, Grafton County Department of Corrections, 3787 Dartmouth College Highway, North Haverhill, NH 03774." },
    { question: "Can I call an inmate at Grafton County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through ICSolutions." },
    { question: "How do I stop or block calls from an inmate at Grafton County Jail?", answer: "Contact ICSolutions to block calls from the jail, or ask the inmate to remove your number from their approved call list." },
    { question: "Does Grafton County Jail offer video visits?", answer: "Video visitation availability is not confirmed for this jail. Call the facility to ask about current visit options before creating any account." },
    { question: "How does bail work at Grafton County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
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

  mailingAddress: "Inmate Name\nMerrimack County Department of Corrections\n314 Daniel Webster Highway\nBoscawen, NH 03303",
  visitingHours: "Visiting hours vary by housing unit; confirm the current schedule with the facility before traveling.",
  commissary: "Commissary deposits through JailATM.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in Merrimack County Jail?", answer: "Call the Merrimack County Department of Corrections at the facility number with the inmate's full name and date of birth to confirm custody. New Hampshire's statewide inmate locator covers state prison inmates, not county jail detainees." },
    { question: "What is the mailing address for an inmate at Merrimack County Jail?", answer: "Address mail to: Inmate Name, Merrimack County Department of Corrections, 314 Daniel Webster Highway, Boscawen, NH 03303." },
    { question: "Can I call an inmate at Merrimack County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at Merrimack County Jail?", answer: "Contact Securus to block calls from the jail, or ask the inmate to remove your number from their approved call list." },
    { question: "How do video visits work at Merrimack County Jail?", answer: "Video visits run through JailATM. You must be on the inmate's approved visitor list. Register with JailATM and schedule in advance." },
    { question: "How do I add commissary money at Merrimack County Jail?", answer: "Commissary deposits go through JailATM. Create a JailATM account, find the inmate, and follow the deposit steps." },
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
  seoTitle: "New Hampshire State Prison for Women: ConnectNetwork Phones",
  seoDescription: "How to contact someone at the New Hampshire State Prison for Women in Concord NH.",

  description:
    "New Hampshire State Prison for Women communication guide. ConnectNetwork phone service, visitation, and contact rules for families of inmates at the only women's prison in New Hampshire.",

  overview: [
    "The New Hampshire State Prison for Women, now known as the NH Correctional Facility for Women, is the only women's prison in New Hampshire, operated by the NH Department of Corrections. It is located in Concord. The old Goffstown site is closed. The facility houses a medium and minimum mixed population, with a capacity of about 224.",
    "Phone service runs through ConnectNetwork by GTL, now ViaPath, per the official NH Department of Corrections communications page. Families set up a ConnectNetwork account, add the inmate, and fund phone service.",
    "In-person visiting follows NH Department of Corrections rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 224,
  mailingAddress: "Inmate Name\nDOC ID #\nNHCFW\n42 Perimeter Road\nConcord, NH 03301",
  visitingHours: "Visits are scheduled through the GTL visitation system (nhdoc.gtlvisitme.com); confirm your window with the facility before traveling.",
  rosterUrl: "https://business.nh.gov/Inmate_Locator/Default.aspx",
  commissary: "Fund phone accounts through ConnectNetwork. Trust account deposits follow NH DOC rules.",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
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
    { question: "How do I find an inmate at the New Hampshire State Prison for Women?", answer: "Use the New Hampshire DOC Inmate Locator with the inmate's first or last name. It shows state prison inmates, including their institution and custody status." },
    { question: "What is the mailing address for an inmate at the New Hampshire State Prison for Women?", answer: "Address mail to: Inmate Name, DOC ID number, NHCFW, 42 Perimeter Road, Concord, NH 03301." },
    { question: "Can I call an inmate at the New Hampshire State Prison for Women?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone service runs through ConnectNetwork by GTL, now ViaPath." },
    { question: "How do I stop or block calls from an inmate at the New Hampshire State Prison for Women?", answer: "Contact ConnectNetwork (ViaPath) to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "Can I send email to an inmate at the New Hampshire State Prison for Women?", answer: "Email goes through the contracted vendor. You must obtain the inmate's email address directly from the inmate. Inmates do not have access to the internet." },
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
  mailingAddress: "Inmate Name, ID Number\nBurleigh/Morton County Detention Center\n4000 Apple Creek Road\nBismarck, ND 58504",
  visitingHours: "Visiting hours vary by housing unit; confirm the current schedule with the facility before traveling.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in Burleigh County Jail?", answer: "Call the Burleigh County Sheriff's Office detention center with the inmate's full name and date of birth to confirm custody. The ND DOCR offender search covers state prison residents, not county jail detainees." },
    { question: "What is the mailing address for an inmate at Burleigh County Jail?", answer: "Address mail to: Inmate Name, ID Number, Burleigh/Morton County Detention Center, 4000 Apple Creek Road, Bismarck, ND 58504." },
    { question: "Can I call an inmate at Burleigh County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Reliance Telephone." },
    { question: "How do I stop or block calls from an inmate at Burleigh County Jail?", answer: "Contact Reliance Telephone to block calls from the jail, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at Burleigh County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
    { question: "What should I bring to a visit at Burleigh County Jail?", answer: "Bring a valid government-issued photo ID and make sure you are on the inmate's approved visitor list. Follow the facility dress code; inappropriate clothing will get your visit denied." },
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
  seoTitle: "Grand Forks County Jail: HomeWAV Phone, Messaging and Video",
  seoDescription: "How to contact someone at Grand Forks County Jail in Grand Forks ND. HomeWAV phone, messaging and video visits for this Grand Forks County jail.",

  description:
    "Grand Forks County Jail communication guide. HomeWAV phone, messaging and video visits for families of inmates at this Grand Forks County jail in Grand Forks ND.",

  overview: [
    "Grand Forks County Jail, also known as the Grand Forks County Correctional Center (GFCCC), is the county detention facility in Grand Forks, North Dakota, operated by the Grand Forks County Sheriff. It is at 1701 North Washington Street, Grand Forks, ND 58203.",
    "All visits are video visits through HomeWAV, onsite or offsite. Each visit lasts a maximum of 20 minutes and starts on the hour, at 20 minutes past, or at 40 minutes past. Onsite visits use kiosks at 1701 North Washington Street, and offsite visits run over the internet from anywhere. No visit begins before 8:00 a.m. or runs after 10:00 p.m., and availability depends on the inmate and the equipment.",
    "Onsite visit hours are Tuesday, Wednesday, and Thursday 9:00 to 11:00 a.m. and 7:30 to 9:30 p.m., Wednesday afternoons 2:00 to 4:00 p.m., and Saturday and Sunday 1:30 to 4:30 p.m. Onsite visits are free. Offsite visits through HomeWAV carry a small cost listed on homewav.com and are available most hours when onsite visiting is not.",
    "Every visitor must register and be approved before visiting, and approval can take up to 24 hours. Register onsite at the facility Monday through Friday, 8:00 a.m. to 5:00 p.m., using the visitation kiosks, or create an account at homewav.com or in the free HomeWAV mobile app. Approval requires a clear photo of the visitor and a clear, legible photo of the visitor's driver's license. Incomplete, inaccurate, or out-of-focus pictures cause denial and delay. Onsite visits must be scheduled at least 24 hours in advance through HomeWav.com, the app, or HomeWav Visitor Support, and the inmate must accept the requested time. Arrive just before the scheduled time; late arrivals cannot extend a visit. Rule violations can lead to suspension or termination of access.",
    "Phone service also runs through HomeWAV. The county's Inmate Phone Service page lists HomeWAV support at 1-844-394-6639 (8 a.m. to 5 p.m.), support@homewav.com, and homewav.com. HomeWAV's platform also offers messaging and visit scheduling.",
    "No official county mail or deposit page was found for this facility. Directories converge on a PO Box 5244 mailing address, but the county has not published an inmate mail format on the pages fetched, so confirm the current mail address with the facility before sending anything. Directories also disagree on the deposit vendor, so confirm deposit options with the facility before sending money.",
  ],

  mailingAddress: "Mail address is not published on the county pages fetched. Directories report: Inmate Name, ID Number, Grand Forks County Correctional Center, PO Box 5244, Grand Forks, ND 58206-5244. Confirm before sending. Do not assume the facility street address is the mail route.",
  visitingHours: "Video visits only, through HomeWAV. Onsite: Tue/Wed/Thu 9-11 a.m. and 7:30-9:30 p.m., Wed afternoons 2-4 p.m., Sat/Sun 1:30-4:30 p.m. Sessions max 20 minutes. No visit before 8 a.m. or after 10 p.m. Onsite free; offsite small cost listed on homewav.com. Onsite visits must be scheduled at least 24 hours in advance.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
      notes: "HomeWAV provides phone service and video visits, per the county's Inmate Visitation and Inmate Phone Service pages. Messaging is a HomeWAV platform feature. Support: 1-844-394-6639 (8 a.m. to 5 p.m.), support@homewav.com, homewav.com.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "HomeWAV", notes: "Messaging through HomeWAV's platform. The county pages name HomeWAV for phone service and video visits; messaging is a HomeWAV platform feature." },
    video: { status: "available", provider: "HomeWAV", notes: "Video visits through HomeWAV. Sessions max 20 minutes, starting on the hour, :20, or :40. Onsite free; offsite small cost listed on homewav.com. Onsite visits must be scheduled at least 24 hours in advance; the inmate must accept the requested time." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the facility." },
    phone: { status: "available", provider: "HomeWAV", notes: "Phone calls through HomeWAV. Support: 1-844-394-6639 (8 a.m. to 5 p.m.), support@homewav.com, homewav.com." },
    moneyTransfer: { status: "limited", notes: "Deposit options are not confirmed. Confirm the current method with the facility before sending money." },
  },

  rules: [
    "HomeWAV handles phone service and video visits, per the county pages. Do not use Securus for this facility; directory pages naming Securus are wrong.",
    "Visitors must be approved and bring a valid government-issued photo ID.",
    "Follow the visitation rules agreed to when you create your account; violations can lead to suspension or termination.",
    "All calls and visits are monitored and recorded.",
    "Onsite visits must be scheduled at least 24 hours in advance, and the inmate must accept the requested time. Late arrivals cannot extend a visit.",
  ],

  faq: [
    { question: "Which company handles phone calls at Grand Forks County Jail?", answer: "HomeWAV. The county's Inmate Phone Service page lists HomeWAV support at 1-844-394-6639 (8 a.m. to 5 p.m.), support@homewav.com, and homewav.com. Do not use Securus for this facility; directory pages naming Securus are wrong." },
    { question: "How do I visit someone at Grand Forks County Jail?", answer: "Register and get approved first; approval can take up to 24 hours. Register onsite at the facility Monday through Friday, 8:00 a.m. to 5:00 p.m., using the visitation kiosks, or create an account at homewav.com or in the free HomeWAV mobile app. Schedule onsite visits at least 24 hours in advance through HomeWav.com, the app, or HomeWav Visitor Support, and the inmate must accept the requested time. Sessions last a maximum of 20 minutes. Onsite visits are free; offsite visits carry a small cost listed on homewav.com." },
    { question: "What is the official name of Grand Forks County Jail?", answer: "The facility is also known as the Grand Forks County Correctional Center. It is operated by the Grand Forks County Sheriff." },
    { question: "How do I find out if someone is in Grand Forks County Jail?", answer: "Call the Grand Forks County Correctional Center with the inmate's full name and date of birth to confirm custody. The ND DOCR offender search covers state prison residents, not county jail detainees." },
    { question: "What is the mailing address for an inmate at Grand Forks County Jail?", answer: "Directories report mail goes to: Inmate Name, ID Number, Grand Forks County Correctional Center, PO Box 5244, Grand Forks, ND 58206-5244. The county has not published an inmate mail format on the pages fetched, so confirm the current mail address with the facility before sending anything. Do not assume the facility street address is the mail route." },
    { question: "Can I call an inmate at Grand Forks County Jail?", answer: "No. Inmates place outgoing calls through HomeWAV. You cannot call an inmate directly; set up an account at homewav.com or call HomeWAV support at 1-844-394-6639." },
    { question: "How do I stop or block calls from an inmate at Grand Forks County Jail?", answer: "Contact HomeWAV to block calls from the jail, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at Grand Forks County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
    { question: "What should I bring to a visit at Grand Forks County Jail?", answer: "Bring a valid government-issued photo ID and make sure you are on the inmate's approved visitor list. Approval requires a clear photo of you and a clear, legible photo of your driver's license. Follow the visitation rules agreed to when you create your account; violations can lead to suspension or termination.",
    },
    {
      question: "What are the onsite visiting hours at Grand Forks County Jail?",
      answer: "Tuesday, Wednesday, and Thursday 9:00 to 11:00 a.m. and 7:30 to 9:30 p.m.; Wednesday afternoons 2:00 to 4:00 p.m.; Saturday and Sunday 1:30 to 4:30 p.m. No visit begins before 8:00 a.m. or runs after 10:00 p.m. Availability depends on the inmate and equipment, and onsite visits are limited by lobby kiosks.",
    },
    {
      question: "How do I send money to someone at Grand Forks County Jail?",
      answer: "No deposit vendor could be verified from official county pages; directories disagree on the deposit method. Confirm deposit options with the facility before sending money.",
    },
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

  mailingAddress: "Inmate Name, ID Number\nWard County Detention Center\n315 3rd Street SE\nMinot, ND 58702",
  visitingHours: "Visiting hours vary by housing unit; confirm the current schedule with the facility before traveling.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in Ward County Jail?", answer: "Call the Ward County Detention Center with the inmate's full name and date of birth to confirm custody. The ND DOCR offender search covers state prison residents, not county jail detainees." },
    { question: "What is the mailing address for an inmate at Ward County Jail?", answer: "Address mail to: Inmate Name, ID Number, Ward County Detention Center, 315 3rd Street SE, Minot, ND 58702." },
    { question: "Can I call an inmate at Ward County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Reliance Telephone." },
    { question: "How does bail work at Ward County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
    { question: "What should I bring to a visit at Ward County Jail?", answer: "Bring a valid government-issued photo ID and make sure you are on the inmate's approved visitor list. Follow the facility dress code; inappropriate clothing will get your visit denied." },
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
  seoTitle: "Stutsman County Jail: Inmate Canteen Phone and Video",
  seoDescription: "Phone, SMS, email, video visits and commissary at Stutsman County Jail in Jamestown ND run through Inmate Canteen.",

  description:
    "Stutsman County Jail communication guide. Phone, SMS, email, photos, video visits, and commissary through Inmate Canteen (Turnkey Corrections) for families of inmates at this county jail in Jamestown ND.",

  overview: [
    "Stutsman County Jail, also known as the Stutsman County Correctional Center, is the county detention facility in Jamestown, North Dakota, operated by the Stutsman County Sheriff.",
    "Video visitation at Stutsman County Jail runs through Turnkey Corrections and Inmate Canteen, per the county's official visitation page. Onsite video visits are free, while online visits carry a fee. Visits are limited to 45 minutes.",
    "Phone, SMS, and email all run through Inmate Canteen (Turnkey Corrections), per the county's official communication page. Families create an account at team3.inmatecanteen.com to fund calls, texts, and emails. Photos can also be sent electronically through Inmate Canteen. All calls and visits are monitored and recorded.",
  ],

  mailingAddress: "Inmate Name, ID Number\nStutsman County Correctional Center\n205 6th Street SE\nJamestown, ND 58401",
  visitingHours: "Visiting hours vary by housing unit; confirm the current schedule with the facility before traveling.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  fax: "701-251-6252",
  operatedBy: "Stutsman County Sheriff",
  providers: [
    {
      name: "Turnkey Corrections",
      slug: "turnkey-corrections",
      initial: "T",
      color: "bg-stone-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: true,
      notes: "Phone, SMS, email, photos, video visits, and commissary through Inmate Canteen (Turnkey Corrections), per the county's official communication page.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Turnkey Corrections", notes: "SMS and email through Inmate Canteen. Create an account at team3.inmatecanteen.com." },
    video: { status: "available", provider: "Turnkey Corrections", notes: "Video visits through Turnkey Corrections and Inmate Canteen. Onsite visits are free, online visits carry a fee. Visits limited to 45 minutes." },
    photos: { status: "available", provider: "Turnkey Corrections", notes: "Photos can be sent electronically through Inmate Canteen. Non-electronic photos must be 4x6 or smaller, max 30 pictures." },
    phone: { status: "available", provider: "Turnkey Corrections", notes: "Phone calls through Inmate Canteen. Create an account at team3.inmatecanteen.com." },
    moneyTransfer: { status: "available", provider: "Turnkey Corrections", notes: "Commissary purchases and deposits through Inmate Canteen." },
  },

  rules: [
    "Schedule video visits through Turnkey Corrections and Inmate Canteen. Onsite visits are free, online visits carry a fee.",
    "Video visits are limited to 45 minutes.",
    "Create an Inmate Canteen account at team3.inmatecanteen.com for phone, SMS, and email.",
    "All calls and visits are monitored and recorded.",
    "Confirm visiting hours before traveling, since schedules vary.",
  ],

  faq: [
    { question: "How do video visits work at Stutsman County Jail?", answer: "Video visits run through Turnkey Corrections and Inmate Canteen. Onsite video visits are free, online visits carry a fee, and visits are limited to 45 minutes." },
    { question: "Which company handles phone calls at Stutsman County Jail?", answer: "Phone calls run through Inmate Canteen (Turnkey Corrections). Create an account at team3.inmatecanteen.com to fund calls. Video visitation also runs through Turnkey Corrections." },
    { question: "How do I visit someone at Stutsman County Jail?", answer: "Visits are by video. Schedule through Turnkey Corrections and Inmate Canteen. Onsite visits are free and online visits carry a fee." },
    { question: "How do I find out if someone is in Stutsman County Jail?", answer: "Call the Stutsman County Correctional Center with the inmate's full name and date of birth to confirm custody. The ND DOCR offender search covers state prison residents, not county jail detainees." },
    { question: "What is the mailing address for an inmate at Stutsman County Jail?", answer: "Address mail to: Inmate Name, ID Number, Stutsman County Correctional Center, 205 6th Street SE, Jamestown, ND 58401." },
    { question: "Can I call an inmate at Stutsman County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Keep your number on the inmate's approved list to receive calls." },
    { question: "How does bail work at Stutsman County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
    { question: "What should I bring to a visit at Stutsman County Jail?", answer: "Bring a valid government-issued photo ID and make sure you are on the inmate's approved visitor list. Follow the facility dress code; inappropriate clothing will get your visit denied." },
    { question: "How do I send money to an inmate at Stutsman County Jail?", answer: "Deposits and commissary purchases run through Inmate Canteen. Create an account at team3.inmatecanteen.com to add funds." },
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
  seoTitle: "Missouri River Correctional Center: Phone and Visitation",
  seoDescription: "How to contact someone at Missouri River Correctional Center in Bismarck ND.",

  description:
    "Missouri River Correctional Center communication guide. Phone, visitation and deposit options for families of inmates at this minimum security correctional center in Bismarck ND.",

  overview: [
    "Missouri River Correctional Center is a minimum security facility in Bismarck, North Dakota, operated by the ND Department of Corrections and Rehabilitation. It has a capacity of about 151 and no perimeter fence, with a transitional and work-release focus. It opened in December 1992.",
    "Inmate funds deposits at Missouri River Correctional Center go through JPay, per the ND DOCR handbook. The phone and video vendor is not confirmed.",
    "Visitation follows ND DOCR rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 151,
  established: 1992,
  mailingAddress: "Inmate Name, Inmate Number\nMissouri River Correctional Center\nP.O. Box 5521\nBismarck, ND 58506",
  visitingHours: "Visiting is by appointment on weekends; confirm the current schedule with the facility before traveling.",
  rosterUrl: "https://docr.nd.gov/offender-search",
  commissary: "Inmate funds deposits through JPay. Inmates buy commissary items from their trust fund account.",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
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
    { question: "How do I find an inmate at Missouri River Correctional Center?", answer: "Use the ND DOCR offender search with the inmate's name. It shows current ND DOCR residents, including their facility and custody status." },
    { question: "What is the mailing address for an inmate at Missouri River Correctional Center?", answer: "Address mail to: Inmate Name, Inmate Number, Missouri River Correctional Center, P.O. Box 5521, Bismarck, ND 58506." },
    { question: "Can I call an inmate at Missouri River Correctional Center?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Keep your number on the inmate's approved list to receive calls." },
    { question: "How do I stop or block calls from an inmate at Missouri River Correctional Center?", answer: "Contact the facility or the phone service provider to block calls, or ask the inmate to remove your number from their approved call list." },
    { question: "Do I need an appointment to visit Missouri River Correctional Center?", answer: "Yes. Visiting is by appointment and visitors must be on the inmate's approved list. Confirm the schedule with the facility before traveling." },
    { question: "How do I send money to an inmate at Missouri River Correctional Center?", answer: "Inmate funds deposits go through JPay. Create a JPay account, find the inmate, and follow the deposit steps." },
    { question: "What is the work-release focus at Missouri River Correctional Center?", answer: "MRCC is a minimum security facility with a transitional and work-release focus, and it has no perimeter fence. It prepares residents for reentry into the community." },
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
  seoTitle: "Fairbanks Correctional Center: Securus Phones and Contact",
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
  mailingAddress: "Inmate Name, ID Number\nFairbanks Correctional Center\nP.O. Box 317\nFairbanks, AK 99701",
  visitingHours: "Visits are by appointment. Ask the inmate to submit a visitation request; confirm with the facility.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in an Alaska DOC facility?", answer: "Call the facility with the inmate's full name and date of birth to confirm custody, or check the Alaska VINE victim notification service for custody status." },
    { question: "Can I call an inmate at this facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at this facility?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "What is the mailing address for an inmate at Fairbanks Correctional Center?", answer: "Address mail to: Inmate Name, ID Number, Fairbanks Correctional Center, P.O. Box 317, Fairbanks, AK 99701." },
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
  seoTitle: "Lemon Creek Correctional Center: Securus Phones and Contact",
  seoDescription: "How to contact someone at Lemon Creek Correctional Center in Juneau AK.",

  description:
    "Lemon Creek Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Alaska DOC facility in Juneau AK.",

  overview: [
    "Lemon Creek Correctional Center is a multi-custody male facility in Juneau, Alaska, operated by the Alaska Department of Corrections. It has a capacity of about 226 and is the only state correctional facility in Southeast Alaska.",
    "Phone service at Lemon Creek runs through Securus Technologies. The Alaska DOC contracts with Securus for the statewide inmate phone system, per the official AK DOC Inmate Phone System page.",
    "Visitation follows Alaska DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 226,
  visitingHours: "Visits are by appointment; confirm scheduling with the facility.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in an Alaska DOC facility?", answer: "Call the facility with the inmate's full name and date of birth to confirm custody, or check the Alaska VINE victim notification service for custody status." },
    { question: "Can I call an inmate at this facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at this facility?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "Does Lemon Creek hold pretrial detainees?", answer: "Yes. Lemon Creek is a multi-custody facility and the only state correctional facility in Southeast Alaska. It holds pretrial and sentenced men." },
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
  seoTitle: "Ketchikan Correctional Center: Securus Phones and Contact",
  seoDescription: "How to contact someone at Ketchikan Correctional Center in Ketchikan AK.",

  description:
    "Ketchikan Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this co-gender Alaska DOC facility in Ketchikan AK.",

  overview: [
    "Ketchikan Correctional Center is a co-gender facility in Ketchikan, Alaska, operated by the Alaska Department of Corrections. It has a capacity of about 71 and is accessible only by air or sea. It has been operating since 1984.",
    "Phone service at Ketchikan runs through Securus Technologies. The Alaska DOC contracts with Securus for the statewide inmate phone system, per the official AK DOC Inmate Phone System page.",
    "Visitation follows Alaska DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 71,
  established: 1984,
  mailingAddress: "Inmate Name, ID Number\nKetchikan Correctional Center\n1201 Schoenbar Road\nKetchikan, AK 99901",
  visitingHours: "Visits are by appointment. Ask the inmate to submit a visitation request; confirm with the facility.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in an Alaska DOC facility?", answer: "Call the facility with the inmate's full name and date of birth to confirm custody, or check the Alaska VINE victim notification service for custody status." },
    { question: "Can I call an inmate at this facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at this facility?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "What is the mailing address for an inmate at Ketchikan Correctional Center?", answer: "Address mail to: Inmate Name, ID Number, Ketchikan Correctional Center, 1201 Schoenbar Road, Ketchikan, AK 99901." },
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
  mailingAddress: "Inmate Name, ID Number\nPalmer Correctional Center\nP.O. Box 919\nPalmer, AK 99502",
  visitingHours: "Visits are by appointment; confirm scheduling with the facility.",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
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
    { question: "How do I find out if someone is in an Alaska DOC facility?", answer: "Call the facility with the inmate's full name and date of birth to confirm custody, or check the Alaska VINE victim notification service for custody status." },
    { question: "Can I call an inmate at this facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at this facility?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "What is the mailing address for an inmate at Palmer Correctional Center?", answer: "Address mail to: Inmate Name, ID Number, Palmer Correctional Center, P.O. Box 919, Palmer, AK 99502." },
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
  seoTitle: "Wildwood Correctional Complex: Securus Phones and Contact",
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
  mailingAddress: "Inmate Name, ID Number\nWildwood Correctional Center\nPouch 730\nKenai, AK 99611",
  visitingHours: "Visitation appointments are handled by phone Monday to Friday, 8:00 AM to 4:30 PM (907-260-7200, options 4 and 6).",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in an Alaska DOC facility?", answer: "Call the facility with the inmate's full name and date of birth to confirm custody, or check the Alaska VINE victim notification service for custody status." },
    { question: "Can I call an inmate at this facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at this facility?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "What is the mailing address for an inmate at Wildwood Correctional Complex?", answer: "Address mail to: Inmate Name, ID Number, Wildwood Correctional Center, Pouch 730, Kenai, AK 99611." },
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
  seoTitle: "York Correctional Institution: Securus Phones and Contact",
  seoDescription: "How to contact someone at York Correctional Institution in Niantic CT.",

  description:
    "York Correctional Institution communication guide. Securus phone service, visitation, and contact rules for families of inmates at Connecticut's only women's prison in Niantic CT.",

  overview: [
    "York Correctional Institution is Connecticut's only prison for women, in Niantic, Connecticut, operated by the Connecticut Department of Correction. It opened in 1918 and has a capacity of about 1,239.",
    "Phone service at York runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 1239,
  established: 1918,
  mailingAddress: "Inmate Name, Inmate Number\nYork Correctional Institution\n201 West Main Street\nNiantic, CT 06357",
  visitingHours: "Visits are scheduled by housing unit under the CT DOC visiting schedule; confirm your window with the facility before traveling.",
  rosterUrl: "https://ctinmateinfo.state.ct.us/",
  bailInfo: "Bail applies only to pretrial detainees and is set by the court, not the facility.",
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
    { question: "How do I find an inmate at this facility?", answer: "Use the Connecticut DOC inmate information search with the inmate's name or inmate number. It shows current CT DOC inmates, including their facility and custody status." },
    { question: "What is the mailing address for an inmate at York Correctional Institution?", answer: "Address mail to: Inmate Name, Inmate Number, York Correctional Institution, 201 West Main Street, Niantic, CT 06357." },
    { question: "Can I call an inmate at York Correctional Institution?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at York Correctional Institution?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
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
  seoTitle: "Garner Correctional Institution: Securus Phones and Contact",
  seoDescription: "How to contact someone at Garner Correctional Institution in Newtown CT. Securus phone service, visitation, and contact rules for this Connecticut prison.",

  description:
    "Garner Correctional Institution communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Connecticut prison in Newtown CT.",

  overview: [
    "Garner Correctional Institution is a Connecticut Department of Correction facility in Newtown, Connecticut. It has a capacity of about 593 and houses male inmates, with a focus on inmates with mental health needs.",
    "Phone service at Garner runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 593,
  visitingHours: "Visits are scheduled by housing unit under the CT DOC visiting schedule; confirm your window with the facility before traveling.",
  rosterUrl: "https://ctinmateinfo.state.ct.us/",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
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
    { question: "How do I find an inmate at this facility?", answer: "Use the Connecticut DOC inmate information search with the inmate's name or inmate number. It shows current CT DOC inmates, including their facility and custody status." },
    { question: "Can I call an inmate at Garner Correctional Institution?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at Garner Correctional Institution?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How do I schedule a video visit at this facility?", answer: "Video visits are scheduled by housing unit under the CT DOC visiting schedule. Confirm the current scheduling process with the facility before traveling." },
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
  seoTitle: "Corrigan-Radgowski Correctional Center: Securus Phones and",
  seoDescription: "How to contact someone at Corrigan-Radgowski Correctional Center in Uncasville CT.",

  description:
    "Corrigan-Radgowski Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Connecticut prison in Uncasville CT.",

  overview: [
    "Corrigan-Radgowski Correctional Center is a Level 3 and 4 male facility in Uncasville, Connecticut, operated by the Connecticut Department of Correction. It was formed by the 2001 merger of the Corrigan and Radgowski facilities and opened on December 30, 1994.",
    "Phone service at Corrigan-Radgowski runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  established: 1994,
  visitingHours: "Visits are scheduled by housing unit under the CT DOC visiting schedule; confirm your window with the facility before traveling.",
  rosterUrl: "https://ctinmateinfo.state.ct.us/",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
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
    { question: "How do I find an inmate at this facility?", answer: "Use the Connecticut DOC inmate information search with the inmate's name or inmate number. It shows current CT DOC inmates, including their facility and custody status." },
    { question: "Can I call an inmate at Corrigan-Radgowski Correctional Center?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at Corrigan-Radgowski Correctional Center?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How do I schedule a video visit at this facility?", answer: "Video visits are scheduled by housing unit under the CT DOC visiting schedule. Confirm the current scheduling process with the facility before traveling." },
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
  seoTitle: "Hartford Correctional Center: Securus Phones and Contact",
  seoDescription: "How to contact someone at Hartford Correctional Center in Hartford CT.",

  description:
    "Hartford Correctional Center communication guide. Securus phone service, visitation, and contact rules for families of inmates at this Connecticut pretrial facility in Hartford CT.",

  overview: [
    "Hartford Correctional Center is a Level 4 facility in Hartford, Connecticut, operated by the Connecticut Department of Correction. It opened in 1977, has a capacity of about 1,000, and primarily holds a pretrial population. It also houses the DOC medical unit.",
    "Phone service at Hartford runs through the Securus phone system, per the official Connecticut correctional services page. Families set up a Securus account and fund phone service for outgoing calls.",
    "Visitation follows Connecticut DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  inmateCapacity: 1000,
  established: 1977,
  visitingHours: "Visits are scheduled by housing unit under the CT DOC visiting schedule; confirm your window with the facility before traveling.",
  rosterUrl: "https://ctinmateinfo.state.ct.us/",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find an inmate at this facility?", answer: "Use the Connecticut DOC inmate information search with the inmate's name or inmate number. It shows current CT DOC inmates, including their facility and custody status." },
    { question: "Can I call an inmate at Hartford Correctional Center?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at Hartford Correctional Center?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How do I schedule a video visit at this facility?", answer: "Video visits are scheduled by housing unit under the CT DOC visiting schedule. Confirm the current scheduling process with the facility before traveling." },
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
  seoTitle: "Osborn Correctional Institution: Securus Phones and Contact",
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
  mailingAddress: "Inmate Name, Inmate Number\nOsborn Correctional Institution\n335 Bilton Road\nSomers, CT 06071",
  visitingHours: "In-person visits daily in scheduled blocks: 8:30 AM to 11:00 AM, 12:30 PM to 3:00 PM, and 6:30 PM to 9:00 PM. Video visits run in 45-minute windows. Confirm your window with the facility.",
  rosterUrl: "https://ctinmateinfo.state.ct.us/",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
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
    { question: "How do I find an inmate at this facility?", answer: "Use the Connecticut DOC inmate information search with the inmate's name or inmate number. It shows current CT DOC inmates, including their facility and custody status." },
    { question: "What is the mailing address for an inmate at Osborn Correctional Institution?", answer: "Address mail to: Inmate Name, Inmate Number, Osborn Correctional Institution, 335 Bilton Road, Somers, CT 06071." },
    { question: "Can I call an inmate at Osborn Correctional Institution?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at Osborn Correctional Institution?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
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
  seoTitle: "Baylor Women's Correctional Institution: GettingOut",
  seoDescription: "How to contact someone at Baylor Women's Correctional Institution in New Castle DE.",

  description:
    "Baylor Women's Correctional Institution communication guide. GettingOut tablet messaging and video visitation for families of inmates at Delaware's only women's prison in New Castle DE.",

  overview: [
    "Delores J. Baylor Women's Correctional Institution, known as Baylor Women's Correctional Institution, is the only women's prison in Delaware, in New Castle, operated by the Delaware Department of Correction. It opened on December 29, 1991, has a designed capacity of 464, and houses pretrial and sentenced females at minimum, medium, and maximum security.",
    "Tablet messaging and video visitation run through GettingOut, per an official Delaware DOC announcement. Families create a GettingOut account, add the inmate, and fund messaging and video visit services.",
    "In-person visiting follows Delaware DOC rules. Visitors must be approved and bring valid photo identification. All calls, messages, and visits are monitored and recorded.",
  ],

  inmateCapacity: 464,
  established: 1991,
  mailingAddress: "Inmate Name, SBI #\nBaylor Women's Correctional Institution\n660 Baylor Boulevard\nNew Castle, DE 19720",
  visitingHours: "Visits are scheduled in advance by housing unit; call the facility Monday through Wednesday to schedule for the following week. Confirm current days and times before traveling.",
  bailInfo: "Bail is set by the Delaware courts, not the facility.",
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
    { question: "How do I find out if someone is at Baylor Women's Correctional Institution?", answer: "Call the facility with the inmate's full name and SBI number to confirm custody. Delaware DOC does not publish a verified public roster link in this guide." },
    { question: "What is the mailing address for an inmate at Baylor Women's Correctional Institution?", answer: "Address mail to: Inmate Name, SBI Number, Baylor Women's Correctional Institution, 660 Baylor Boulevard, New Castle, DE 19720." },
    { question: "Can I call an inmate at Baylor Women's Correctional Institution?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through GettingOut by ViaPath." },
    { question: "Does Baylor Women's Correctional Institution hold pretrial detainees?", answer: "Yes. Baylor holds both pretrial and sentenced women. Bail for pretrial detainees is set by the Delaware courts, not the facility." },
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
  seoTitle: "Northwest State Correctional Facility: ICSolutions Phone",
  seoDescription: "How to contact someone at Northwest State Correctional Facility in Swanton VT. ICSolutions phone, messaging and video visits for this Vermont men's prison.",

  description:
    "Northwest State Correctional Facility communication guide. ICSolutions phone, messaging and video visits for families of inmates at this Vermont men's prison in Swanton VT.",

  overview: [
    "Northwest State Correctional Facility (NWSCF) is a state prison in Vermont operated by the Vermont Department of Corrections. Its physical address is 3649 Lower Newton Road, St. Albans, VT 05478, and its mailing address is 3649 Lower Newton Road, Swanton, VT 05488. The facility phone number is (802) 524-6771 and the fax number is (802) 527-7534.",
    "Phone calls, video visits, and messaging run through ICSolutions under the Vermont DOC contract. The DOC's current vendor is ICSolutions, replacing the prior vendor ViaPath (GettingOut). Funds left with ViaPath were transferred, and GettingOut balance refunds go through ViaPath at 1-866-516-0115, with the GettingOut account active. If calls are not coming through, save the facility ICS number, 1-802-330-4485, in your contacts, because carriers sometimes flag ICSolutions calls as robo-calls and block them. ICSolutions customer service is 888-506-8407.",
    "ICS rates are published on the ICS Corrections Vermont page and are inclusive of taxes and fees. In-state calls cost $0.028 per minute and interstate calls cost $0.06 per minute, while international calls cost the international rate plus $0.06 per minute. Remote video visitation costs $0.16 per minute. Email and text messaging cost $0.25 per message or photo, voice messaging costs $0.25 per message, and streaming tablet content costs $0.05 per minute. The KEEP FAMILIES CONNECTED Program gives two free calls per individual each week. Calls are limited to 15 minutes.",
    "There are two ways to pay for calls. Prepaid Collect is set up during the first call, which includes 60 seconds of complimentary talk time, or through ICSolutions at 888-506-8407; its funds work only for calls to the number used to set up the account. Debit puts funds into the incarcerated individual's account and can be used to call any DOC-approved number, including international numbers. Friends and family should add money through Access Corrections, the Keefe Trust account, which can transfer to the ICS Debit account, not through the Debit (Incarcerated Individual-Prepaid) option. Before anyone can receive a call, the incarcerated individual must submit a Personal Allowed Number (PAN) form and get DOC approval for that number.",
    "Visits follow the facility schedule by the first letter of the incarcerated individual's last name. A through D visit Saturday 8:30 to 10:30 a.m.; E through L visit Saturday 1 to 3 p.m.; M through R visit Sunday 8:30 to 10:30 a.m.; S through Z visit Sunday 1 to 3 p.m. Close Custody (Echo) visits allow two visitors at a time: Unit 1 Saturday 7 to 8:30 p.m., Unit 2 Sunday 7 to 8:30 p.m. Segregation (Delta) visits are by closed-circuit TV and approved appointments only. Full visiting rules are in DOC policy 327, Visitation.",
    "Mail goes to the facility mailing address with the inmate's full name and ID number: Inmate Name, ID Number, Northwest State Correctional Facility, 3649 Lower Newton Road, Swanton, VT 05488. Mail with no return address is refused and returned to sender, and the facility will not accept mail with postage due, per DOC mail directive 409.05. For photos, Pelipost has been the DOC mail-in photo vendor since August 14, 2026. Money goes into the account through Access Corrections at accesscorrections.com or with a Deposit Coupon available from the incarcerated individual, in a facility lobby, or on the DOC website. Do not mail deposits to the facility. ICS Tablets are in use at all Vermont DOC facilities, and Gold Passes for one hour of tablet use can be bought at JailATM.com.",
  ],

  mailingAddress: "Inmate Name, ID Number\nNorthwest State Correctional Facility\n3649 Lower Newton Road\nSwanton, VT 05488",
    commissary: "Deposits: Access Corrections (Keefe Trust) at accesscorrections.com or Deposit Coupon (from the incarcerated individual, a facility lobby, or the DOC website). Do not mail deposits to the facility. Commissary: Access Corrections; property via vermontpackage.com. Access Corrections help: 1-800-546-6283 or 1-866-345-1884. ICS Tablets at all facilities; Gold Passes at JailATM.com.",
  visitingHours: "Visits by last name of the incarcerated individual: A-D Sat 8:30-10:30 a.m.; E-L Sat 1-3 p.m.; M-R Sun 8:30-10:30 a.m.; S-Z Sun 1-3 p.m. Close Custody (Echo): Unit 1 Sat 7-8:30 p.m., Unit 2 Sun 7-8:30 p.m., two visitors at a time. Segregation (Delta): closed-circuit TV and approved appointments only. Full rules in DOC policy 327.",
  bailInfo: "Bail applies only to pretrial detainees and is set by the court, not the facility.",
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
      notes: "ICSolutions provides phone service, video visits, and messaging under the Vermont DOC contract, replacing ViaPath (GettingOut). Rates: in-state $0.028/min, interstate $0.06/min, video $0.16/min, messaging $0.25/message. Two free calls per individual each week. Customer service 888-506-8407.",
    },
    {
      name: "AccessCorrections",
      slug: "accesscorrections",
      initial: "A",
      color: "bg-emerald-700",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "Deposits via Access Corrections (Keefe Trust) at accesscorrections.com or by Deposit Coupon, per the DOC Constituent Services page. Do not mail deposits to the facility.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Email/text messaging through ICSolutions at $0.25 per message or photo; voice messaging $0.25 per message, per the ICS Vermont rate page linked by DOC." },
    video: { status: "available", provider: "ICSolutions", notes: "Remote video visitation through ICSolutions at $0.16 per minute, per the ICS Vermont rate page linked by DOC. In-person visits follow the facility's last-name schedule; Segregation (Delta) visits are by closed-circuit TV and approved appointments only." },
    photos: { status: "limited", notes: "Pelipost has been the DOC mail-in photo vendor since August 14, 2026, per the DOC Constituent Services page. Confirm current photo options with the facility." },
    phone: { status: "available", provider: "ICSolutions", notes: "Phone calls through ICSolutions. In-state $0.028/min, interstate $0.06/min, international cost plus $0.06/min, per the ICS Vermont rate page linked by DOC. Two free calls per individual each week. 15-minute call limit. PAN form + DOC approval required before calling a number. Facility ICS number 1-802-330-4485; customer service 888-506-8407." },
    moneyTransfer: { status: "available", provider: "AccessCorrections", notes: "Deposits via Access Corrections (Keefe Trust) at accesscorrections.com or by Deposit Coupon (from the incarcerated individual, a facility lobby, or the DOC website). Do not mail deposits to the facility." },
  },

  rules: [
    "ICSolutions handles phone service, video visits, and messaging under the Vermont DOC contract, replacing the prior vendor ViaPath (GettingOut). Do not use GettingOut for this facility.",
    "Visits follow the facility's last-name schedule. Full visiting rules are in DOC policy 327, Visitation.",
    "Incarcerated individuals must submit a Personal Allowed Number (PAN) form and get DOC approval before calling a number.",
    "All calls and visits are monitored and recorded.",
    "If ICSolutions calls are blocked, add the facility ICS number 1-802-330-4485 to your contacts, then add 888-506-8407 and ask your carrier to unblock ICS numbers.",
  ],

  faq: [
    { question: "Which company handles phone calls at Northwest State Correctional Facility?", answer: "ICSolutions handles phone calls under the Vermont DOC contract, replacing the prior vendor ViaPath (GettingOut). The facility ICS number is 1-802-330-4485, and ICSolutions customer service is 888-506-8407. Rates, inclusive of taxes and fees: in-state $0.028 per minute, interstate $0.06 per minute, international cost plus $0.06 per minute. The KEEP FAMILIES CONNECTED Program gives two free calls per individual each week. Calls are limited to 15 minutes." },
    { question: "How do I visit someone at Northwest State Correctional Facility?", answer: "Visits follow the first letter of the incarcerated individual's last name. A through D: Saturday 8:30 to 10:30 a.m. E through L: Saturday 1 to 3 p.m. M through R: Sunday 8:30 to 10:30 a.m. S through Z: Sunday 1 to 3 p.m. Close Custody (Echo) visits allow two visitors at a time: Unit 1 Saturday 7 to 8:30 p.m., Unit 2 Sunday 7 to 8:30 p.m. Segregation (Delta) visits are by closed-circuit TV and approved appointments only. Full visiting rules are in DOC policy 327, Visitation." },
    { question: "How do I send money to someone at Northwest State Correctional Facility?", answer: "Deposit funds online at accesscorrections.com (Keefe Trust account) or by Deposit Coupon, available from the incarcerated individual, in a facility lobby, or on the DOC website. Do not mail deposits to the facility. To fund calls to other people, add to the commissary (Keefe Trust) account, which can transfer to the ICS Debit account. Do not deposit funds for individuals other than family members or personal friends." },
    { question: "How do I find out if someone is at Northwest State Correctional Facility?", answer: "Use the Vermont DOC Inmate Locator to find the incarcerated individual's ID number. You can also call the facility at (802) 524-6771 with the inmate's full name and date of birth to confirm custody." },
    { question: "What is the mailing address for an inmate at Northwest State Correctional Facility?", answer: "Address mail to: Inmate Name, ID Number, Northwest State Correctional Facility, 3649 Lower Newton Road, Swanton, VT 05488. Mail with no return address is refused and returned to sender, and the facility will not accept mail with postage due, per DOC mail directive 409.05. For photos, Pelipost has been the DOC mail-in photo vendor since August 14, 2026." },
    { question: "Can I call an inmate at Northwest State Correctional Facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through ICSolutions." },
    { question: "How do I stop or block calls from an inmate at Northwest State Correctional Facility?", answer: "Contact ICSolutions to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at Northwest State Correctional Facility?", answer: "Bail applies only to pretrial detainees and is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures." },
    { question: "Does Northwest State Correctional Facility offer video visits?", answer: "Remote video visitation runs through ICSolutions at $0.16 per minute, per the ICS Vermont rate page linked by DOC. In-person visits follow the facility's last-name schedule; Segregation (Delta) visits are by closed-circuit TV and approved appointments only.",
    },
    {
      question: "Why can't I receive calls from Northwest State Correctional Facility?",
      answer: "Two common causes. First, carriers sometimes flag ICSolutions calls as robo-calls and block them; add the facility ICS number, 1-802-330-4485, to your contacts, and if that does not work, add ICS customer service (888-506-8407) and ask your carrier to unblock ICS numbers. Second, the incarcerated individual must submit a Personal Allowed Number (PAN) form and get DOC approval for your number before calling it. Traditional Collect calls do not work because cell phone and VoIP providers do not offer Traditional Collect billing.",
    },
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
  seoTitle: "Marble Valley Regional Correctional Facility: ICSolutions",
  seoDescription: "How to contact someone at Marble Valley Regional Correctional Facility in Rutland VT.",

  description:
    "Marble Valley Regional Correctional Facility communication guide. ICSolutions phone, messaging and video visits for families of inmates at this Vermont correctional facility in Rutland VT.",

  overview: [
    "Marble Valley Regional Correctional Facility is a Vermont Department of Corrections facility in Rutland, Vermont. It opened in 1980 and holds male and female pretrial and sentenced inmates. A historic marble wall from the 1878 Rutland House of Correction survives at the site.",
    "Phone calls, video visits, and messaging at Marble Valley Regional Correctional Facility run through ICSolutions under the Vermont DOC contract.",
    "Visitation follows Vermont DOC rules. Visitors must be approved and bring valid photo identification. All calls and visits are monitored and recorded.",
  ],

  established: 1980,
  mailingAddress: "Inmate Name, ID Number\nMarble Valley Regional Correctional Facility\n167 State Street\nRutland, VT 05701",
  address: "167 State Street, Rutland, VT 05701",
  phone: "(802) 786-5830",
  fax: "(802) 786-5843",
  website: "https://doc.vermont.gov/correctional-facilities/mvrcf-rutland",
  visitingHours: "Visits follow Vermont DOC visitation policy (Policy 327); confirm the schedule with the facility before traveling.",
  bailInfo: "Bail applies only to pretrial detainees and is set by the court, not the facility.",
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
    { question: "How do I find out if someone is at Marble Valley Regional Correctional Facility?", answer: "Call the facility at (802) 786-5830 with the inmate's full name and date of birth to confirm custody." },
    { question: "What is the mailing address for an inmate at Marble Valley Regional Correctional Facility?", answer: "Address mail to: Inmate Name, ID Number, Marble Valley Regional Correctional Facility, 167 State Street, Rutland, VT 05701." },
    { question: "Can I call an inmate at Marble Valley Regional Correctional Facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through ICSolutions." },
    { question: "How do I stop or block calls from an inmate at Marble Valley Regional Correctional Facility?", answer: "Contact ICSolutions to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at Marble Valley Regional Correctional Facility?", answer: "Bail applies only to pretrial detainees and is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures." },
    { question: "Does Marble Valley hold women too?", answer: "Yes. Marble Valley houses both male and female pretrial and sentenced inmates." },
    { question: "Is Marble Valley Regional Correctional Facility in Vermont or Alabama?", answer: "Marble Valley Regional Correctional Facility is located in Rutland, Vermont, and is operated by the Vermont Department of Corrections. There is no currently operating facility by this name in Alabama's state prison system." },
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
  seoTitle: "Gallatin County Detention Center: GettingOut Messaging and",
  seoDescription: "How to contact someone at Gallatin County Detention Center in Bozeman MT. GettingOut messaging, video visitation, and voice messaging for this Montana jail.",

  description:
    "Gallatin County Detention Center communication guide. GettingOut messaging, video visitation, and voice messaging for families of inmates at this Montana jail in Bozeman MT.",

  overview: [
    "Gallatin County Detention Center is a division of the Gallatin County Sheriff's Office in Bozeman, Montana. It primarily holds pretrial inmates.",
    "Communication at Gallatin County Detention Center runs through GettingOut, per the county's official Friends and Family brochure. Video visitation, inmate messaging, and voice messaging are handled through gettingout.com. Commissary funds go through Inmate Canteen.",
    "Families create a GettingOut account, add the inmate, and fund messaging and visit services. All calls, messages, and video visits are monitored and recorded.",
  ],

  mailingAddress: "Inmate Name, ID Number\nGallatin County Detention Center\n605 South 16th Avenue\nBozeman, MT 59715",
  visitingHours: "Visits are by video; schedule through the facility and confirm current hours before traveling.",
  commissary: "Commissary funds go through Inmate Canteen. GettingOut handles messaging and video visits, not commissary deposits.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  fax: "406-582-2479",
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
    { question: "How do I find out if someone is in Gallatin County Detention Center?", answer: "Use the Gallatin County Sheriff's Office online inmate search or call the detention center with the inmate's full name and date of birth to confirm custody." },
    { question: "What is the mailing address for an inmate at Gallatin County Detention Center?", answer: "Address mail to: Inmate Name, ID Number, Gallatin County Detention Center, 605 South 16th Avenue, Bozeman, MT 59715." },
    { question: "Can I call an inmate at Gallatin County Detention Center?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Keep your number on the inmate's approved list to receive calls." },
    { question: "How does bail work at Gallatin County Detention Center?", answer: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail." },
    { question: "Can I visit in person at Gallatin County Detention Center?", answer: "No. Visits are by video only. Schedule through the facility and confirm current hours before traveling." },
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
  seoTitle: "Missoula County Detention Center: Smart Communications",
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
  mailingAddress: "Inmate Name, ID Number\nMissoula County Detention Center\n2340 Mullan Road\nMissoula, MT 59808",
  visitingHours: "Visiting hours vary by housing unit; confirm the current schedule with the facility before traveling.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
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
    { question: "How do I find out if someone is in Missoula County Detention Center?", answer: "Call the detention center with the inmate's full name and date of birth to confirm custody." },
    { question: "What is the mailing address for an inmate at Missoula County Detention Center?", answer: "Address mail to: Inmate Name, ID Number, Missoula County Detention Center, 2340 Mullan Road, Missoula, MT 59808." },
    { question: "Can I call an inmate at Missoula County Detention Center?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Smart Communications (SmartInmate)." },
    { question: "How do I stop or block calls from an inmate at Missoula County Detention Center?", answer: "Contact Smart Communications (SmartInmate) to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
  ],

  relatedFacilitySlugs: ["gallatin-county-detention-center", "montana-state-prison", "fci-seagoville"],
  relatedGuideSlugs: ["how-video-visitation-works", "how-prison-phone-calls-work"],
},
}
