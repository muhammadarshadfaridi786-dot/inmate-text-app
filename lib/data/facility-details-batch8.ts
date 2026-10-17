import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS, Batch 8 (25 facilities, Phase 2 expansion)
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH8: Record<string, FacilityDetail> = {

"dupage-county-jail": {
  id: "f-273",
  name: "DuPage County Jail",
  slug: "dupage-county-jail",
  type: "county",
  stateSlug: "illinois",
  stateName: "Illinois",
  stateAbbr: "IL",
  countySlug: null,
  countyName: "DuPage County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "DuPage County Jail: GTL Phones and GettingOut Visits Guide",
  seoDescription: "How to contact someone at DuPage County Jail in Wheaton IL. GTL handles phone calls, GettingOut handles video visits and messaging.",

  description:
    "DuPage County Jail communication guide. GTL phone calls and GettingOut video visits and messaging for families of detainees at this Wheaton IL county jail.",

  overview: [
    "DuPage County Jail is the main detention facility for DuPage County, Illinois, located in Wheaton and operated by the DuPage County Sheriff's Office. Most of the population is pretrial, made up of people awaiting trial or sentencing in the DuPage County court system. It is one of the larger county jails in the Chicago suburbs.",
    "Communication at DuPage County Jail runs through GTL, also branded as GettingOut, for phone calls, remote video visitation, and electronic messaging. Families set up a GettingOut account online, select DuPage County Jail, and add funds to either an inmate account or a friends and family account. The Friends and Family account gives the outside contact control over which phone numbers the detainee can call.",
    "In-person visiting at DuPage is done by video, with remote video visits available from home through the GettingOut app or website. Money for phone and tablet services is kept separate from the detainee's commissary and trust account, which is handled through Access Corrections online or the lobby kiosk.",
  ],

  address: "501 N. County Farm Road, Wheaton, IL 60187",
  phone: "630-407-2255",

  mailingAddress: "Inmate Name, ID Number\nDuPage County Jail\n501 North County Farm Road\nP.O. Box 957\nWheaton, IL 60187",
  visitingHours: "In-person visits are limited to one 30-minute visit per week; virtual visits run through the GTL/ViaPath tablet system. Confirm scheduling with the Sheriff's Office.",
  commissary: "Trust and commissary deposits go through Access Corrections online or the lobby kiosk, not through GTL.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  operatedBy: "DuPage County Sheriff's Office",

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
      notes: "GTL operates the inmate phone system at DuPage County Jail, managed through GettingOut accounts.",
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
      notes: "GettingOut (GTL's consumer brand) handles remote video visits, electronic messaging, and photo sharing with inmates at DuPage County Jail.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through a GettingOut account. Friends and family need funds in their account to reply." },
    video: { status: "available", provider: "GettingOut", notes: "Remote video visits from home via the GettingOut app or website, plus on-site video visitation." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing available through GettingOut messaging, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system, funded via a GettingOut account." },
    moneyTransfer: { status: "available", provider: undefined, notes: "Trust and commissary deposits go through Access Corrections online or the lobby kiosk, not through GTL." },
  },

  rules: [
    "Create a GettingOut account first, then select DuPage County Jail and your inmate before scheduling anything.",
    "A Friends and Family account lets you control which numbers your inmate can call; an inmate account lets them spend on any service.",
    "Visits are video-based. Schedule ahead through GettingOut and log in on time for remote visits.",
    "Money for phone and video services is separate from commissary and trust funds, which use Access Corrections.",
    "All calls, messages, and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which app do I use to contact someone at DuPage County Jail?", answer: "GettingOut, GTL's consumer app. Download it from the app store or use gettingout.com. Create an account, choose DuPage County Jail, add your inmate, and fund either an inmate account or a friends and family account." },
    { question: "How do video visits work at DuPage County Jail?", answer: "Visits are conducted by video. You can visit remotely from home using the GettingOut app or website, or use the kiosks at the jail. Register and schedule in advance, and be logged in at your scheduled time." },
    { question: "Can I send messages to an inmate at DuPage County Jail?", answer: "Yes, through GettingOut electronic messaging. Friends and family must have funds in their account to receive and respond to messages. All messages are monitored." },
    { question: "How do I add money to an inmate's account at DuPage County Jail?", answer: "Deposits to the trust or commissary account go through Access Corrections online or the lobby kiosk. Phone and video funds are handled separately through your GettingOut account." },
    { question: "Can the inmate call any number?", answer: "With a Friends and Family account, you control which phone numbers the inmate can call. With an inmate account funded online, the inmate can use the balance for calls, visits, or messaging to anyone approved." },
    { question: "How do I find out if someone is in DuPage County Jail?", answer: "Use the DuPage County Sheriff's Office online inmate search with the inmate's name, or call the jail to confirm custody." },
    { question: "What is the mailing address for an inmate at DuPage County Jail?", answer: "Address mail to: Inmate Name, ID Number, DuPage County Jail, 501 North County Farm Road, P.O. Box 957, Wheaton, IL 60187." },
    { question: "Can I call an inmate at DuPage County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through GTL (ViaPath)." },
    { question: "How does bail work at DuPage County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
  ],

  relatedFacilitySlugs: ["cook-county-jail", "cuyahoga-county-jail", "maricopa-county-jail"],
},

"lake-county-jail-illinois": {
  id: "f-274",
  name: "Lake County Jail",
  slug: "lake-county-jail-illinois",
  type: "county",
  stateSlug: "illinois",
  stateName: "Illinois",
  stateAbbr: "IL",
  countySlug: null,
  countyName: "Lake County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Lake County Jail IL: GTL Phones and GettingOut Visits Guide",
  seoDescription: "How to contact someone at Lake County Jail in Waukegan IL. GTL for phone calls, GettingOut for video visits and tablet messaging.",

  description:
    "Lake County Jail communication guide. GTL phone calls and GettingOut video visits and tablet messaging for families of detainees in Waukegan IL.",

  overview: [
    "Lake County Jail is the county detention facility in Waukegan, Illinois, operated by the Lake County Sheriff's Office. It houses pretrial detainees and sentenced inmates from across Lake County, in Chicago's northern suburbs. This is the Illinois Lake County Jail, not to be confused with the Lake County Jail in Crown Point, Indiana.",
    "Communication at Lake County Jail runs through GTL for inmate telephone service and GettingOut for video visitation, electronic messaging, photos, and tablet services. Inmates have access to tablets in their housing units that support messaging, photo sharing, and video visits, in addition to the phones in common areas.",
    "Families set up a GettingOut account online or in the app, select Lake County Jail, and add the inmate to get started. Video visits can be done remotely from home or in the jail lobby, and funds deposited in the inmate's account can be used for phone calls or tablet services.",
  ],

  notToConfuseWith: "Not to be confused with Lake County Jail in Crown Point, Indiana.",
  operatedBy: "Lake County Sheriff's Office",

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
      notes: "GTL provides the inmate telephone service at Lake County Jail, managed through GettingOut accounts.",
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
      notes: "GettingOut handles video visitation scheduling, tablet-based messaging, and photo sharing for Lake County Jail inmates.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut, available on tablets in the housing units." },
    video: { status: "available", provider: "GettingOut", notes: "Remote video visits from home or lobby video visits, scheduled through GettingOut." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut messaging, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls from common-area phones through the GTL phone system." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Lake County Sheriff's inmate services page before sending money." },
  },

  rules: [
    "Make sure you are looking at the Waukegan, Illinois Lake County Jail, since Indiana also has a Lake County Jail.",
    "Set up a GettingOut account and select the correct facility before adding funds or scheduling visits.",
    "Inmates cannot text from the wall phones, but messaging is available through GettingOut tablets in the units.",
    "Video visits can be started by the inmate on their tablet or scheduled by visitors through GettingOut.",
    "All calls, messages, and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which app do I use to contact someone at Lake County Jail in Illinois?", answer: "GettingOut. Create an account at gettingout.com or in the app, select Lake County Jail in Waukegan IL, and add your inmate. The same account handles video visits, messaging, and phone funds." },
    { question: "Can inmates at Lake County Jail use tablets?", answer: "Yes. Inmates have access to tablets in their housing units that support electronic messaging, photo sharing, books and media, and video visitation." },
    { question: "How do video visits work at Lake County Jail?", answer: "Video visits can be done remotely from home through the GettingOut app or in the jail lobby. Inmates can also initiate visits from their tablets during their own schedule." },
    { question: "How do phone calls work at Lake County Jail?", answer: "Inmates use the phones in common areas during recreation hours. Calls run through GTL, and families fund calls through a GettingOut account." },
  ],

  relatedFacilitySlugs: ["cook-county-jail", "harris-county-jail", "cuyahoga-county-jail"],
},

"will-county-adult-detention-facility": {
  id: "f-275",
  name: "Will County Adult Detention Facility",
  slug: "will-county-adult-detention-facility",
  type: "county",
  stateSlug: "illinois",
  stateName: "Illinois",
  stateAbbr: "IL",
  countySlug: null,
  countyName: "Will County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Will County Jail: Contact and Video Visits Guide",
  seoDescription: "How to contact someone at Will County Adult Detention Facility in Joliet IL. Phone, video visitation, and visit rules for the county jail.",

  description:
    "Will County Adult Detention Facility communication guide. Phone and video visitation options for families of detainees at the Joliet IL county jail.",

  overview: [
    "The Will County Adult Detention Facility is the county jail in Joliet, Illinois, operated by the Will County Sheriff's Office. It holds pretrial detainees and sentenced inmates for Will County, southwest of Chicago. Video visitation is conducted at the facility's video visitation center on Glenwood Avenue in Joliet.",
    "Inmate telephone services at Will County are provided by Smart Communications through smartinmate.com, per an official notice from the Will County Adult Detention Center. Families and friends create an account at smartinmate.com or call Smart Communications customer care to set up prepaid collect, PIN debit, or voicemail accounts.",
    "Visits at Will County are by video, scheduled in advance through the sheriff's visitation system. Confirm current visit scheduling details on the Will County Sheriff's corrections page.",
  ],

  mailingAddress: "Inmate Name, ID Number\nWill County Adult Detention Facility\n95 South Chicago Street\nJoliet, IL 60436",
  visitingHours: "Visits are by video at the facility video visitation center; schedule in advance.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  operatedBy: "Will County Sheriff's Office",
  // TODO(Jan): verify video and messaging provider

  providers: [
    {
      name: "Smart Communications",
      slug: "smartinmate",
      initial: "S",
      color: "bg-cyan-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Smart Communications provides inmate telephone service through smartinmate.com, per the Sheriff's official notice.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Messaging availability not confirmed. Ask the facility or Smart Communications about electronic messaging options." },
    video: { status: "limited", provider: undefined, notes: "Video visitation is offered, including remote visits. Confirm the scheduling platform on the Will County Sheriff's visitation page." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed. Check the current visitation and tablet services information." },
    phone: { status: "available", provider: "Smart Communications", notes: "Phone service through Smart Communications (smartinmate.com)." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Will County Sheriff's inmate services page." },
  },

  rules: [
    "Phone accounts are set up through Smart Communications at smartinmate.com, not through GTL or Securus.",
    "Visits are video-based. Schedule ahead and follow the sheriff's visitation information page for hours.",
    "Confirm the current video visit scheduling platform with the facility before your first visit.",
    "All calls and visits are monitored and recorded.",
    "Do not send cash. Use the official deposit methods listed by the sheriff's office.",
  ],

  faq: [
    { question: "How do phone calls work at Will County Adult Detention Facility?", answer: "Inmate telephone service is provided by Smart Communications. Families create an account at smartinmate.com or call their customer care line to set up prepaid collect or PIN debit calling." },
    { question: "Can I visit someone at Will County Adult Detention Facility?", answer: "Yes, visits are conducted by video. Check the Will County Sheriff's visitation information page for scheduling rules, hours, and any fees before planning a visit." },
    { question: "Is there an app for contacting Will County inmates?", answer: "Smart Communications is the phone vendor. Confirm with the facility whether messaging or video visits are handled through a Smart Communications app or a separate visitation platform." },
    { question: "How do I send money to a Will County detainee?", answer: "Use the deposit methods published on the Will County Sheriff's corrections page. Confirm the current vendor and options before sending funds." },
    { question: "How do I find out if someone is in Will County Adult Detention Facility?", answer: "Call the facility with the inmate's full name and date of birth to confirm custody." },
    { question: "What is the mailing address for an inmate at Will County Adult Detention Facility?", answer: "Address mail to: Inmate Name, ID Number, Will County Adult Detention Facility, 95 South Chicago Street, Joliet, IL 60436." },
    { question: "Can I call an inmate at Will County Adult Detention Facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Smart Communications (SmartInmate)." },
    { question: "How do I stop or block calls from an inmate at Will County Adult Detention Facility?", answer: "Contact Smart Communications (SmartInmate) to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How do I schedule a video visit at Will County Adult Detention Facility?", answer: "Video visits run through the facility's video visitation center. Schedule in advance and arrive early for check-in." },
  ],

  relatedFacilitySlugs: ["cook-county-jail", "harris-county-jail", "maricopa-county-jail"],
},

"lake-county-jail-indiana": {
  id: "f-276",
  name: "Lake County Jail",
  slug: "lake-county-jail-indiana",
  type: "county",
  stateSlug: "indiana",
  stateName: "Indiana",
  stateAbbr: "IN",
  countySlug: null,
  countyName: "Lake County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Lake County Jail IN: GTL Phones and GettingOut Visits Guide",
  seoDescription: "How to contact someone at Lake County Jail in Crown Point IN. GTL phone calls and GettingOut video visits and messaging.",

  description:
    "Lake County Jail communication guide. GTL phone calls and GettingOut video visits and messaging for families of detainees in Crown Point IN.",

  overview: [
    "Lake County Jail is the county detention facility in Crown Point, Indiana, operated by the Lake County Sheriff's Department. It serves the Gary and Hammond area of northwest Indiana, just across the state line from Chicago. This is the Indiana Lake County Jail, not to be confused with the Lake County Jail in Waukegan, Illinois.",
    "Communication at Lake County Jail runs through GTL for the inmate phone system and GettingOut for remote video visitation and visit scheduling. Families register a GettingOut account, select Lake County Jail, and choose either an inmate account or a friends and family account to manage phone calls, video visits, and messaging funds.",
    "Remote video visits can be done from a computer or phone using the GettingOut app, or from the kiosks at the jail. The friends and family account option lets the outside contact control which numbers the inmate can call and how communication funds are spent.",
  ],

  notToConfuseWith: "Not to be confused with Lake County Jail in Waukegan, Illinois.",
  operatedBy: "Lake County Sheriff's Department",

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
      notes: "GTL operates the inmate phone system at Lake County Jail, managed through GettingOut accounts.",
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
      notes: "GettingOut handles remote video visits, visit scheduling, messaging, and photo sharing for Lake County Jail.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut. Friends and family need account funds to respond." },
    video: { status: "available", provider: "GettingOut", notes: "Remote video visits from home via computer or the GettingOut app, or from jail kiosks." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system, funded through a GettingOut account." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Lake County Sheriff's inmate services page." },
  },

  rules: [
    "Make sure you are looking at the Crown Point, Indiana Lake County Jail, since Illinois also has a Lake County Jail.",
    "Register a GettingOut account and select Lake County Jail before scheduling visits or adding funds.",
    "Choose a Friends and Family account to control which numbers your inmate can call, or an inmate account for flexible use.",
    "Remote video visits require scheduling in advance. Be logged in and ready at your visit time.",
    "All calls, messages, and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which app do I use to contact someone at Lake County Jail in Indiana?", answer: "GettingOut. Register at gettingout.com or in the app, select Lake County Jail in Crown Point IN, add your inmate, and fund the account for calls, visits, and messaging." },
    { question: "How do video visits work at Lake County Jail?", answer: "Remote video visits run through GettingOut. You can visit from a computer at home, from the GettingOut app on your phone, or using the kiosks at the jail. Schedule ahead of time." },
    { question: "Can I control who my inmate calls at Lake County Jail?", answer: "Yes. A Friends and Family GettingOut account lets you decide which phone numbers the inmate can call and how much is spent on communication." },
    { question: "How do phone calls work at Lake County Jail?", answer: "Calls go through the GTL inmate phone system and are funded through your GettingOut account. Inmates can only make outgoing calls." },
  ],

  relatedFacilitySlugs: ["marion-county-jail", "harris-county-jail", "cuyahoga-county-jail"],
},

"allen-county-jail": {
  id: "f-277",
  name: "Allen County Jail",
  slug: "allen-county-jail",
  type: "county",
  stateSlug: "indiana",
  stateName: "Indiana",
  stateAbbr: "IN",
  countySlug: null,
  countyName: "Allen County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Allen County Jail: GTL Phones and Video Visits Guide",
  seoDescription: "How to contact someone at Allen County Jail in Fort Wayne IN. GTL phone calls, video visitation, and inmate tablets.",

  description:
    "Allen County Jail communication guide. GTL phone calls, video visitation, and tablets for families of detainees in Fort Wayne IN.",

  overview: [
    "Allen County Jail, also called the Allen County Confinement Center, is the county jail in Fort Wayne, Indiana, operated by the Allen County Sheriff's Department. It houses pretrial detainees and sentenced inmates for Allen County in northeast Indiana.",
    "The sheriff's office uses GTL for the inmate telephone system, inmate tablets, and video visitation, per an official statement from the Allen County Sheriff. Tablets give inmates access to calls, messaging, photos, video visits, and other services from their housing units.",
    "Families set up accounts through GTL's consumer platforms to fund phone calls and schedule video visits. Both remote video visits from home and on-site video visits at the jail are available. In-person face-to-face visits are not offered; all social visits are by video.",
  ],

  mailingAddress: "Inmate Name, ID Number\nAllen County Jail\n417 South Calhoun Street\nFort Wayne, IN 46802",
  visitingHours: "Visits are by video through the jail's video visitation system; visitors may use onsite terminals or register online for remote video visits.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  operatedBy: "Allen County Sheriff's Department",

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
      notes: "GTL provides the phone system, inmate tablets, and video visitation at Allen County Jail, per the sheriff's office.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Messaging available through GTL tablets issued to inmates." },
    video: { status: "available", provider: "GTL", notes: "Remote video visits from home and on-site video visits, replacing in-person visits." },
    photos: { status: "available", provider: "GTL", notes: "Photo sharing through GTL tablets, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL inmate telephone system." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Allen County Sheriff's inmate services page." },
  },

  rules: [
    "All social visits at Allen County Jail are by video. There are no face-to-face contact visits.",
    "Inmates receive tablets for calls, messaging, photos, and video visits. Misuse can cost tablet privileges.",
    "Set up your GTL account and add your inmate before scheduling a remote video visit.",
    "On-site video visits use stations at the jail; remote visits can be done from home.",
    "All calls, messages, and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "How do I schedule a video visit at Allen County Jail?", answer: "Video visits are handled through GTL. Create an account, select Allen County Jail, add your inmate, and schedule a remote visit from home or an on-site visit at the jail." },
    { question: "Do inmates at Allen County Jail have tablets?", answer: "Yes. The sheriff's office issues tablets that support phone calls, messaging, photos, video visits, and other services, all through GTL." },
    { question: "Can I visit an inmate in person at Allen County Jail?", answer: "No. The jail replaced in-person social visits with video visitation. You can visit remotely from anywhere or use the video stations at the jail." },
    { question: "How do phone calls work at Allen County Jail?", answer: "Calls run through the GTL inmate telephone system. Inmates can call from unit phones or their tablets, and families fund calls through a GTL account." },
    { question: "How do I find out if someone is in Allen County Jail?", answer: "Use the Allen County Sheriff's Department online inmate inquiry with the inmate's name, or call the jail to confirm custody." },
    { question: "What is the mailing address for an inmate at Allen County Jail?", answer: "Address mail to: Inmate Name, ID Number, Allen County Jail, 417 South Calhoun Street, Fort Wayne, IN 46802." },
    { question: "Can I call an inmate at Allen County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through GTL (ViaPath)." },
    { question: "How do I stop or block calls from an inmate at Allen County Jail?", answer: "Contact GTL (ViaPath) to block calls from the jail, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at Allen County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
  ],

  relatedFacilitySlugs: ["marion-county-jail", "harris-county-jail", "cuyahoga-county-jail"],
},

"hamilton-county-justice-center": {
  id: "f-278",
  name: "Hamilton County Justice Center",
  slug: "hamilton-county-justice-center",
  type: "county",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Hamilton County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hamilton County Justice Center: Securus Guide",
  seoDescription: "How to contact someone at Hamilton County Justice Center in Cincinnati OH. Securus phone calls, video visits, and eMessaging.",

  description:
    "Hamilton County Justice Center communication guide. Securus phone calls, video visitation, and eMessaging for families of detainees in Cincinnati OH.",

  overview: [
    "The Hamilton County Justice Center is the main county jail in downtown Cincinnati, Ohio, operated by the Hamilton County Sheriff's Office. It houses pretrial detainees and sentenced inmates for Hamilton County, and it is one of the larger county jails in Ohio.",
    "Communication at the Justice Center runs through Securus Technologies, which handles the inmate phone system, Securus Video Connect for remote video visitation, and eMessaging with photo attachments through SecureView tablets. Families create a Securus account online to fund calls, schedule video visits, and exchange messages.",
    "Inmates can rent tablets that support phone calls, eMessaging, video visits, and other services. Visits include in-person non-contact visits as well as remote video visits from home. All communication services are monitored, and visitors generally need to be on the inmate's approved list.",
  ],

  visitingHours: "Visits are scheduled through Securus; confirm current visiting options with the Sheriff's Office.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  operatedBy: "Hamilton County Sheriff's Office",

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
      notes: "Securus handles the phone system, Securus Video Connect visits, eMessaging, and SecureView tablets at the Justice Center.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging with text and photo attachments through Securus, available on inmate tablets." },
    video: { status: "available", provider: "Securus", notes: "Securus Video Connect for remote video visits from home, plus on-site video visits." },
    photos: { status: "available", provider: "Securus", notes: "Photo attachments through Securus eMessaging, subject to jail content rules." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through the Securus phone system, including calls from rented tablets." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Hamilton County Sheriff's inmate services page." },
  },

  rules: [
    "Create a Securus account online before funding calls, scheduling video visits, or sending messages.",
    "Remote video visits and on-site visits both require the visitor to be approved and scheduled in advance.",
    "Inmates can rent SecureView tablets for calls, messaging, and video visits. Tablets can be taken away for misconduct.",
    "Mail goes through the Securus digital mail process. Follow the sheriff's mail rules for photos and letters.",
    "All calls, messages, and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which service do I use to contact someone at Hamilton County Justice Center?", answer: "Securus Technologies. Create an account at securus.net to fund phone calls, schedule Securus Video Connect visits, and send eMessages with photos." },
    { question: "How do video visits work at Hamilton County Justice Center?", answer: "Remote video visits run through Securus Video Connect from your computer or phone, or you can use the video kiosks at the jail. Schedule in advance and be on the inmate's approved visitor list." },
    { question: "Can I send messages to an inmate at the Justice Center?", answer: "Yes, through Securus eMessaging. You can send text messages and photo attachments, and inmates can reply from their tablets. Messaging is fee-based." },
    { question: "How do phone calls work at Hamilton County Justice Center?", answer: "Inmates make outgoing calls through the Securus phone system, including from rented tablets. Fund calls through your Securus account before they can go through." },
    { question: "How do I find out if someone is in the Hamilton County Justice Center?", answer: "Use the Hamilton County Sheriff's inmate search with the inmate's name, or call the Justice Center to confirm custody." },
    { question: "Can I call an inmate at the Hamilton County Justice Center?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at the Hamilton County Justice Center?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at the Hamilton County Justice Center?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
    { question: "What is the Hamilton County Justice Center?", answer: "It is the county jail in downtown Cincinnati, housing pretrial and sentenced inmates. The building also houses the Sheriff's offices and the courts." },
  ],

  relatedFacilitySlugs: ["cuyahoga-county-jail", "franklin-county-correctional-center", "harris-county-jail"],
},

"lucas-county-corrections-center": {
  id: "f-279",
  name: "Lucas County Corrections Center",
  slug: "lucas-county-corrections-center",
  type: "county",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Lucas County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Lucas County Corrections Center: GTL Calls and Visits Guide",
  seoDescription: "How to contact someone at Lucas County Corrections Center in Toledo OH. GTL phone calls and GettingOut video visits.",

  description:
    "Lucas County Corrections Center communication guide. GTL phone calls and GettingOut video visits for families of detainees in Toledo OH.",

  overview: [
    "The Lucas County Corrections Center is the county jail in downtown Toledo, Ohio, operated by the Lucas County Sheriff's Office. It holds pretrial detainees and sentenced inmates for Lucas County in northwest Ohio. Visits at the center are non-contact video visits by appointment only.",
    "Phone service at the Corrections Center runs through GTL, with accounts managed through GettingOut and ConnectNetwork. Families can load money into an inmate's phone account or set up a prepaid account to control call costs. GettingOut also handles remote video visitation, email, photo and video sharing, and tablet services.",
    "All visits must be scheduled in advance by calling the visitation line, and visitors must be on the inmate's approved visitor list and pass a warrant check. Remote video visits from home are available through GettingOut in addition to on-site video visits.",
  ],

  phone: "(419) 213-4425",
  operatedBy: "Lucas County Sheriff's Office",

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
      notes: "GTL provides the inmate phone system at the Lucas County Corrections Center.",
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
      notes: "GettingOut handles remote video visits, email, photo and video sharing, and inmate tablet services.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Email and electronic messaging through GettingOut, plus photo and video sharing." },
    video: { status: "available", provider: "GettingOut", notes: "Remote video visits from home and on-site video visits through GettingOut." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo and video sharing through GettingOut, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system. Fund through GettingOut or ConnectNetwork." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "A lobby kiosk accepts deposits. Confirm other deposit options with the facility." },
  },

  rules: [
    "All visits are video visits by appointment only. Call the visitation line to schedule; no walk-ins.",
    "You must be on the inmate's approved visitor list, and a warrant check is run on every visitor.",
    "Arrive in the front lobby about 10 minutes before your scheduled visit with photo ID.",
    "Phone funds can be loaded through GettingOut or ConnectNetwork. Prepaid accounts let you control call costs.",
    "All calls and visits are monitored and recorded.",
  ],

  faq: [
    { question: "How do I schedule a visit at Lucas County Corrections Center?", answer: "All visits are by appointment on a first-come, first-served basis. Call the facility's visitation line no sooner than six days and no later than one day before the visit. You must be on the inmate's approved visitor list." },
    { question: "Can I do a video visit from home?", answer: "Yes. Remote video visits are available through GettingOut from your computer or phone, in addition to on-site video visits at the jail." },
    { question: "How do phone calls work at Lucas County Corrections Center?", answer: "Calls run through GTL. You can load money directly into the inmate's phone account or set up a prepaid account through GettingOut or ConnectNetwork to control costs." },
    { question: "What messaging options are available?", answer: "GettingOut provides email, photo and video sharing, and tablet services for inmates at the Corrections Center." },
      {
        question: "How do I find or search for an inmate at Lucas County Corrections Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Lucas County, Ohio. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Lucas County Corrections Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Lucas County Corrections Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Lucas County Corrections Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Lucas County Corrections Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["cuyahoga-county-jail", "franklin-county-correctional-center", "harris-county-jail"],
},

"oakland-county-jail": {
  id: "f-280",
  name: "Oakland County Jail",
  slug: "oakland-county-jail",
  type: "county",
  stateSlug: "michigan",
  stateName: "Michigan",
  stateAbbr: "MI",
  countySlug: null,
  countyName: "Oakland County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Oakland County Jail: Securus Phone Calls Guide",
  seoDescription: "How to contact someone at Oakland County Jail in Pontiac MI. Securus phone calls and visitation rules for the county jail.",

  description:
    "Oakland County Jail communication guide. Securus phone calls and visitation rules for families of detainees in Pontiac MI.",

  overview: [
    "Oakland County Jail is the main county detention facility in Pontiac, Michigan, operated by the Oakland County Sheriff's Office. It holds pretrial detainees and sentenced inmates from across Oakland County in the Detroit suburbs.",
    "Phone calls at Oakland County Jail run through Securus Technologies. Families create a Securus account online or by phone, then add money to the inmate's phone account so the inmate can call approved numbers. Inmates are responsible for the cost of their calls, which are limited to certain hours and to pre-approved numbers.",
    "Video visitation availability at Oakland County Jail is reported inconsistently across sources, so families should confirm the current visit and video options directly with the jail before planning a visit. In-person visiting follows standard county jail rules with photo ID required.",
  ],

  operatedBy: "Oakland County Sheriff's Office",

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
      notes: "Securus Technologies provides the inmate phone system at Oakland County Jail.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging not confirmed for this facility. Check with the jail before assuming it is available." },
    video: { status: "limited", provider: undefined, notes: "Video visitation reports conflict. Confirm current visit options directly with the jail." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed. Physical photos by mail are subject to jail content rules." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through Securus. Families fund the inmate's phone account online or by phone." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Oakland County Sheriff's inmate services page." },
  },

  rules: [
    "Create a Securus account and fund the inmate's phone account before calls can be made.",
    "Calls go only to pre-approved numbers during designated calling hours. No incoming calls.",
    "Confirm whether video visitation is currently offered before planning around it.",
    "All calls are recorded and monitored by jail staff.",
    "Three-way calling and calls to 911 or other inmates are not allowed.",
  ],

  faq: [
    { question: "How do I set up phone calls with an Oakland County Jail inmate?", answer: "Create an account with Securus Technologies online or by calling 1-800-844-6591. Add money to the inmate's phone account, and the inmate can then call approved numbers during calling hours." },
    { question: "Does Oakland County Jail offer video visitation?", answer: "Sources conflict on video visitation at Oakland County Jail. Call the jail directly to confirm the current visit options before planning a visit." },
    { question: "Who pays for calls at Oakland County Jail?", answer: "Inmates are responsible for the cost of their calls, funded through the Securus phone account that families can add money to." },
    { question: "Can I receive calls from an Oakland County Jail inmate?", answer: "Yes, if you are on the inmate's approved call list and there are funds in the phone account. Inmates cannot receive incoming calls." },
      {
        question: "How do I find or search for an inmate at Oakland County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Oakland County, Michigan. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Oakland County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Oakland County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Oakland County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Oakland County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["wayne-county-jail", "harris-county-jail", "cuyahoga-county-jail"],
},

"kent-county-jail": {
  id: "f-281",
  name: "Kent County Jail",
  slug: "kent-county-jail",
  type: "county",
  stateSlug: "michigan",
  stateName: "Michigan",
  stateAbbr: "MI",
  countySlug: null,
  countyName: "Kent County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Kent County Jail: GettingOut Phone and Video Visits Guide",
  seoDescription: "How to contact someone at Kent County Jail in Grand Rapids MI. GettingOut tablet phone calls, video visits, and messaging.",

  description:
    "Kent County Jail communication guide. GettingOut tablet phone calls, video visits, and messaging for families of detainees at the Grand Rapids MI correctional facility.",

  overview: [
    "The Kent County Correctional Facility, known as Kent County Jail, is the main jail in Grand Rapids, Michigan, operated by the Kent County Sheriff's Office. It houses pretrial detainees and sentenced inmates serving shorter terms for Kent County in western Michigan.",
    "Phone service at the Kent County Correctional Facility runs through GettingOut, per the county's tablet services document. Families create a GettingOut account at gettingout.com and deposit funds so inmates can make calls from the tablet phone app. All calls are monitored and recorded.",
    "Video visits at Kent County run through GettingOut and are scheduled in advance online. Because the county's published tablet document is dated 2018 and providers can change, confirm the current scheduling system on the sheriff's visitation page before your first visit.",
  ],

  operatedBy: "Kent County Sheriff's Office",

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
      notes: "GettingOut provides video visits, tablet phone calls, messaging, and photo sharing at the Kent County Correctional Facility, per the county's tablet services document.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through a GettingOut account." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits scheduled in advance through GettingOut." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut." },
    phone: { status: "available", provider: "GettingOut", notes: "Calls from the tablet phone app through GettingOut. Fund a Friends and Family account." },
    moneyTransfer: { status: "available", provider: undefined, notes: "Deposits through Access Corrections online, by phone, or at the lobby kiosk." },
  },

  rules: [
    "Create a GettingOut account and deposit funds before the inmate can call you.",
    "Inmates cannot receive incoming calls.",
    "Schedule video visits at least 24 hours in advance through GettingOut.",
    "Three-way calling is not allowed, and all calls are monitored and recorded.",
    "Money for the inmate's account can be deposited through Access Corrections.",
  ],

  faq: [
    { question: "How do I set up phone calls with a Kent County Jail inmate?", answer: "Create a GettingOut account at gettingout.com and deposit funds into the Friends and Family account. The inmate can call from the tablet phone app. Confirm current options on the sheriff's visitation page." },
    { question: "How do I schedule a visit at Kent County Jail?", answer: "Visits must be scheduled at least 24 hours in advance through the facility's online visitor scheduling system or the lobby kiosk. Internet video visits from home are also reported as available." },
    { question: "Are calls at Kent County Jail monitored?", answer: "Yes. All non-legal calls are recorded and monitored by jail staff, and three-way calling is prohibited." },
    { question: "How do I send money to a Kent County inmate?", answer: "Deposits go through Access Corrections online or by phone at 1-866-345-1884, or at the kiosk in the facility lobby." },
    { question: "What is the official name of Kent County Jail?", answer: "The facility is also known as the Kent County Correctional Facility. It is the county's main adult jail in Grand Rapids, and its operations are reported as ACA accredited." },
    { question: "How do I find or search for an inmate at Kent County Jail?", answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Kent County, Michigan. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings." },
    { question: "How do I send mail to an inmate at Kent County Jail?", answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending." },
    { question: "Can I receive incoming calls from an inmate at Kent County Jail?", answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list." },
    { question: "How do I block or stop calls from an inmate at Kent County Jail?", answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule or cancel a video visit at Kent County Jail?", answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules." },
  ],

  relatedFacilitySlugs: ["wayne-county-jail", "harris-county-jail", "cuyahoga-county-jail"],
},

"kane-county-jail": {
  id: "f-282",
  name: "Kane County Jail",
  slug: "kane-county-jail",
  type: "county",
  stateSlug: "illinois",
  stateName: "Illinois",
  stateAbbr: "IL",
  countySlug: null,
  countyName: "Kane County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Kane County Jail: ICSolutions Phones and Video Visits Guide",
  seoDescription: "How to contact someone at Kane County Jail in St. Charles IL. ICSolutions phone calls, video visits, and tablet services.",

  description:
    "Kane County Jail communication guide. ICSolutions phone calls, video visitation, and tablet services for families of detainees in St. Charles IL.",

  overview: [
    "The Kane County Adult Justice Center, known as Kane County Jail, is the county detention facility in St. Charles, Illinois, operated by the Kane County Sheriff's Office. It holds pretrial detainees and short-term inmates for Kane County in Chicago's western suburbs, and also houses detainees for other jurisdictions.",
    "Telephone, video visiting, and tablet services at Kane County Jail are provided by ICSolutions, according to the Illinois Department of Corrections jail inspection report. Families set up an ICSolutions account online or by phone to fund calls, and visitors register for video visitation through the ICSolutions visitor website.",
    "All visitation at Kane County is conducted through the video visitation system, with both on-site video visits at the facility and remote video visits from home through the ICS Mobile app. The jail has video visitation kiosks in the lobby available year-round.",
  ],

  address: "37W755 Illinois Route 38, St. Charles, IL 60175",
  mailingAddress: "Inmate Name, ID Number\nKane County Jail\n37W755 Illinois Route 38\nSt. Charles, IL 60175",
  visitingHours: "Visiting hours vary by housing unit; confirm the current schedule with the Sheriff's Office before traveling.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  operatedBy: "Kane County Sheriff's Office",

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
      notes: "ICSolutions provides the phone system, video visitation, and tablet services at Kane County Jail, per the IDOC inspection report.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Tablet-based messaging services through ICSolutions." },
    video: { status: "available", provider: "ICSolutions", notes: "All visits are video visits: on-site lobby kiosks or remote visits through the ICS Mobile app." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed. Physical photos by mail are subject to jail content rules." },
    phone: { status: "available", provider: "ICSolutions", notes: "Outgoing calls through the ICSolutions phone system. Set up an account online or at 888-506-8407." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Kane County Sheriff's inmate services page." },
  },

  rules: [
    "All visitation is by video. Register for visitation through the ICSolutions visitor website before scheduling.",
    "Set up an ICSolutions account to receive calls or fund the inmate's phone account.",
    "Remote video visits use the ICS Mobile app, available for iPhone and Android.",
    "On-site video visits use the lobby kiosks at the jail, available every day of the year.",
    "All calls and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "How do I set up phone calls with a Kane County Jail inmate?", answer: "Create an account with ICSolutions online or by calling 888-506-8407. You can fund the inmate's phone account so they can call you, or set up a prepaid account on your own number." },
    { question: "How do video visits work at Kane County Jail?", answer: "All visits are video visits. Register on the ICSolutions visitor website, then schedule an on-site visit at the lobby kiosks or a remote visit from home using the ICS Mobile app." },
    { question: "Can I visit an inmate in person at Kane County Jail?", answer: "Visitation is conducted entirely through the video visitation system. You can visit on-site at the jail's video kiosks or remotely from home." },
    { question: "Does Kane County Jail offer tablets?", answer: "Yes. Tablet services are provided by ICSolutions, along with the phone system and video visitation." },
    { question: "How do I find out if someone is in Kane County Jail?", answer: "Call the Sheriff's Office with the inmate's full name and date of birth to confirm custody." },
    { question: "What is the mailing address for an inmate at Kane County Jail?", answer: "Address mail to: Inmate Name, ID Number, Kane County Jail, 37W755 Illinois Route 38, St. Charles, IL 60175." },
    { question: "Can I call an inmate at Kane County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through ICSolutions." },
    { question: "How do I stop or block calls from an inmate at Kane County Jail?", answer: "Contact ICSolutions to block calls from the jail, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at Kane County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
  ],

  relatedFacilitySlugs: ["cook-county-jail", "harris-county-jail", "marion-county-jail"],
},

"dane-county-jail": {
  id: "f-283",
  name: "Dane County Jail",
  slug: "dane-county-jail",
  type: "county",
  stateSlug: "wisconsin",
  stateName: "Wisconsin",
  stateAbbr: "WI",
  countySlug: null,
  countyName: "Dane County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Dane County Jail: GTL Phones and Video Visits Guide",
  seoDescription: "How to contact someone at Dane County Jail in Madison WI. GTL phone calls and video visitation under the county contract.",

  description:
    "Dane County Jail communication guide. GTL phone calls and video visitation for families of detainees at the Madison WI county jail.",

  overview: [
    "Dane County Jail is the county detention system in Madison, Wisconsin, operated by the Dane County Sheriff's Office. It includes the jail in the City-County Building and the Public Safety Building facility, housing pretrial detainees and sentenced inmates for Dane County.",
    "Dane County has an official contract with Global Tel Link (GTL) for inmate telephone and video visitation service, authorized by the Dane County Board. Phone calls run through the GTL system, and video visitation is available through GettingOut kiosks in the jail lobby, from a home computer, or through the GettingOut app.",
    "Families create a GettingOut account to fund phone calls and schedule video visits. Messaging and photo sharing are available through the GettingOut platform on tablets and kiosks where offered.",
  ],

  address: "115 W. Doty St., Madison, WI",
  phone: "(608) 284-6100",

  visitingHours: "Visits are scheduled by housing unit; confirm with the Sheriff's Office before traveling.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  operatedBy: "Dane County Sheriff's Office",

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
      notes: "GTL holds the Dane County contract for inmate telephone and video visitation service.",
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
      notes: "GettingOut (GTL's consumer brand) handles video visit scheduling, messaging, and photo sharing.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut on kiosks and tablets where available." },
    video: { status: "available", provider: "GTL", notes: "Video visitation under the county GTL contract: lobby kiosks, home computer, or the GettingOut app." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut messaging, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL inmate calling system, funded through a GettingOut account." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Dane County Sheriff's inmate services page." },
  },

  rules: [
    "Create a GettingOut account and select the correct Dane County Jail facility before adding funds.",
    "Video visits come in three forms: lobby kiosks, home computer, or the GettingOut phone app.",
    "You must be on the inmate's approved visitation list, and visitors are subject to background checks.",
    "Inmates cannot receive incoming calls. All calls are outgoing and monitored.",
    "Confirm current messaging availability with the facility, since services can change by housing unit.",
  ],

  faq: [
    { question: "Which service do I use to contact someone at Dane County Jail?", answer: "GTL and its GettingOut app. Create an account at gettingout.com, select the Dane County Jail facility, add your inmate, and fund calls, visits, and messaging." },
    { question: "How do video visits work at Dane County Jail?", answer: "Video visits are available through GettingOut kiosks in the jail lobby, from your home computer, or through the GettingOut app on your phone. You must be on the inmate's approved visitor list." },
    { question: "How do phone calls work at Dane County Jail?", answer: "Inmates make outgoing calls through the GTL phone system in the housing units. Families fund calls through a GettingOut account." },
    { question: "Can I send messages to a Dane County Jail inmate?", answer: "Electronic messaging is available through GettingOut on kiosks and tablets where offered. Confirm current availability for your inmate's housing unit." },
    { question: "How do I find out if someone is in Dane County Jail?", answer: "Use the Dane County Sheriff's Office inmate search with the inmate's name, or call the jail to confirm custody." },
    { question: "Can I call an inmate at Dane County Jail?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through GTL (ViaPath)." },
    { question: "How do I stop or block calls from an inmate at Dane County Jail?", answer: "Contact GTL (ViaPath) to block calls from the jail, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at Dane County Jail?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
    { question: "Which buildings make up Dane County Jail?", answer: "Dane County Jail includes the jail in the City-County Building and the Public Safety Building facility in Madison. Confirm the inmate's housing location with the Sheriff's Office before visiting." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "cuyahoga-county-jail", "maricopa-county-jail"],
},

"ramsey-county-adult-detention-center": {
  id: "f-284",
  name: "Ramsey County Adult Detention Center",
  slug: "ramsey-county-adult-detention-center",
  type: "county",
  stateSlug: "minnesota",
  stateName: "Minnesota",
  stateAbbr: "MN",
  countySlug: null,
  countyName: "Ramsey County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Ramsey County Jail: Securus Calls and Video Visits Guide",
  seoDescription: "How to contact someone at Ramsey County Adult Detention Center in St. Paul MN. Securus phone calls and video visitation.",

  description:
    "Ramsey County Adult Detention Center communication guide. Securus phone calls and video visitation for families of detainees in St. Paul MN.",

  overview: [
    "The Ramsey County Adult Detention Center, often called the Ramsey County Jail, is the county detention facility in St. Paul, Minnesota, operated by the Ramsey County Sheriff's Office. It holds pretrial detainees and people serving short sentences for Ramsey County, as well as some federal detainees.",
    "Phone service at the Adult Detention Center runs through Securus Technologies. Families call Securus to set up an account to receive calls, and inmates can only make outgoing calls, which are monitored and recorded. A voicemail option is also available for leaving messages for inmates.",
    "Video visitation at Ramsey County uses Securus Video Connect for remote visits from home, alongside on-site video visits. Remote visits are scheduled in advance and carry a per-session fee. Visitors must be on the inmate's approved list.",
  ],

  visitingHours: "Video visits are available; confirm scheduling with the Sheriff's Office before traveling.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  operatedBy: "Ramsey County Sheriff's Office",

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
      notes: "Securus Technologies provides the phone system and Securus Video Connect remote visits at the Adult Detention Center.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging not confirmed. A paid voicemail option is available for leaving messages." },
    video: { status: "available", provider: "Securus", notes: "Securus Video Connect for remote video visits from home, plus on-site video visits. Schedule at least 24 hours ahead." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed. Physical photos by mail are subject to jail content rules." },
    phone: { status: "available", provider: "Securus", notes: "Outgoing calls through Securus. Set up an account at 1-800-844-6591 to receive calls." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Ramsey County Sheriff's inmate services page." },
  },

  rules: [
    "Create a Securus account to receive calls. Inmates cannot receive incoming calls directly.",
    "Remote video visits must be scheduled at least 24 hours in advance through Securus.",
    "A voicemail can be left for an inmate for a fee by calling the facility and selecting the voicemail option.",
    "Visitors must be on the inmate's approved list for both on-site and remote visits.",
    "All calls and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "How do I set up phone calls with a Ramsey County jail inmate?", answer: "Call Securus Technologies at 1-800-844-6591 to set up an account tied to your phone number. Inmates can then make outgoing calls to you, which are monitored and recorded." },
    { question: "How do video visits work at Ramsey County Adult Detention Center?", answer: "Remote video visits run through Securus Video Connect and must be scheduled at least 24 hours in advance. On-site video visits are also available. Both require the visitor to be approved." },
    { question: "Can I leave a message for an inmate at Ramsey County Jail?", answer: "Yes. A voicemail option lets you leave a message for an inmate for a fee by calling the facility and selecting the voicemail option." },
    { question: "How do I send money to a Ramsey County detainee?", answer: "Confirm the current deposit methods on the Ramsey County Sheriff's inmate services page before sending funds." },
    { question: "How do I find out if someone is in Ramsey County Adult Detention Center?", answer: "Use the Ramsey County Sheriff's Office inmate search with the inmate's name, or call the detention center to confirm custody." },
    { question: "Can I call an inmate at Ramsey County Adult Detention Center?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through Securus." },
    { question: "How do I stop or block calls from an inmate at Ramsey County Adult Detention Center?", answer: "Contact Securus to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How does bail work at Ramsey County Adult Detention Center?", answer: "Bail is set by the court, not the jail. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The jail cannot set or change bail." },
    { question: "Does Ramsey County Adult Detention Center hold federal detainees?", answer: "Yes. The facility houses some federal detainees alongside county pretrial and sentenced inmates." },
  ],

  relatedFacilitySlugs: ["hennepin-county-jail", "harris-county-jail", "cuyahoga-county-jail"],
},

"allegheny-county-jail": {
  id: "f-285",
  name: "Allegheny County Jail",
  slug: "allegheny-county-jail",
  type: "county",
  stateSlug: "pennsylvania",
  stateName: "Pennsylvania",
  stateAbbr: "PA",
  countySlug: null,
  countyName: "Allegheny County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Allegheny County Jail: GTL Tablets, Calls, and Visits Guide",
  seoDescription: "How to contact someone at Allegheny County Jail in Pittsburgh PA. GTL tablets for calls, video visits, and messaging.",

  description:
    "Allegheny County Jail communication guide. GTL tablet-based calls, video visits, and messaging for families of detainees in Pittsburgh PA.",

  overview: [
    "Allegheny County Jail is the county detention facility in downtown Pittsburgh, Pennsylvania, operated by the Allegheny County Sheriff's Office under the county's Bureau of Corrections. It houses pretrial detainees and sentenced inmates for Allegheny County.",
    "Communication at Allegheny County Jail runs through GTL, per the county's official tablet policy. Inmates use GTL tablets for telephone calls, video visitation, and text or chat messaging with family and friends. Tablet use is widespread, with most inmates using them for calls, video visits, reading, and movies.",
    "Families set up accounts through GTL's consumer platforms such as ConnectNetwork and GettingOut to fund calls and tablet services and to schedule video visits. Because most communication happens on the tablets, keeping the inmate's tablet account funded is the key to staying in touch.",
  ],

  address: "950 Second Avenue, Pittsburgh, PA 15219",
  phone: "412-350-2000",

  operatedBy: "Allegheny County Sheriff's Office",

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
      notes: "GTL provides tablets, phone service, video visitation, and messaging at Allegheny County Jail, per the county's official policy.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Text and chat messaging on GTL tablets. All messages are monitored." },
    video: { status: "available", provider: "GTL", notes: "Video visits on GTL tablets and at video stations. Schedule through GTL's consumer platforms." },
    photos: { status: "available", provider: "GTL", notes: "Photo sharing through GTL tablet messaging, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Calls announced as originating from an inmate at Allegheny County Jail, made from GTL tablets." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Allegheny County Jail inmate information page." },
  },

  rules: [
    "Most communication happens on GTL tablets, so keep the inmate's tablet account funded.",
    "Video visits can be done on the inmate's tablet or at designated video stations in the jail.",
    "Set up your GTL account through ConnectNetwork or GettingOut before scheduling anything.",
    "All tablet calls, messages, and video visits are monitored and recorded.",
    "Tablet access is a privilege and can be restricted for misconduct or nonpayment.",
  ],

  faq: [
    { question: "How do I contact someone at Allegheny County Jail?", answer: "Through GTL. Set up an account on ConnectNetwork or GettingOut, select Allegheny County Jail, add your inmate, and fund calls, messaging, and video visits. Most communication happens on the inmate's GTL tablet." },
    { question: "Do inmates at Allegheny County Jail have tablets?", answer: "Yes. GTL tablets are widely used for phone calls, video visits, messaging, reading, and entertainment, according to the county's own surveys." },
    { question: "How do video visits work at Allegheny County Jail?", answer: "Video visits run on GTL tablets and at video stations in the jail. Schedule through GTL's consumer platforms and confirm the inmate's availability." },
    { question: "Can I send photos to an Allegheny County Jail inmate?", answer: "Photos can be shared through GTL tablet messaging, subject to the jail's content rules. Physical photos by mail must follow the mail policy." },
      {
        question: "How do I find or search for an inmate at Allegheny County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Allegheny County, Pennsylvania. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Allegheny County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Allegheny County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Allegheny County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Allegheny County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["philadelphia-department-of-prisons", "essex-county-correctional-facility", "harris-county-jail"],
},

"montgomery-county-correctional-facility": {
  id: "f-286",
  name: "Montgomery County Correctional Facility",
  slug: "montgomery-county-correctional-facility",
  type: "county",
  stateSlug: "pennsylvania",
  stateName: "Pennsylvania",
  stateAbbr: "PA",
  countySlug: null,
  countyName: "Montgomery County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Montgomery County Correctional Facility PA: Contact Guide",
  seoDescription: "How to contact someone at Montgomery County Correctional Facility in Eagleville PA. Phone, visitation, and mail rules.",

  description:
    "Montgomery County Correctional Facility communication guide. Phone, visitation, and mail rules for families of detainees in Eagleville PA.",

  overview: [
    "The Montgomery County Correctional Facility is the county jail in Eagleville, Pennsylvania, serving Montgomery County northwest of Philadelphia. It houses pretrial detainees and sentenced inmates for the county. This is the Pennsylvania facility, not the Montgomery County Correctional Facility in Boyds, Maryland.",
    "Phone calls and video visits run through GTL (ViaPath), with GettingOut text messaging from kiosks and tablets, per multiple facility guides. Confirm the current setup with the facility before funding an account.",
    "Families should confirm the current phone vendor, video visit platform, and deposit options directly with the facility or on the county's official corrections page before creating accounts or sending money.",
  ],

  mailingAddress: "Inmate Name, ID Number\nMontgomery County Correctional Facility\n60 Eagleville Road\nNorristown, PA 19403",
  visitingHours: "Social visiting hours vary by housing section; see the county visiting schedule. Visitors must pre-register Monday or Friday, 7:30 AM to 7:30 PM, with a one-time $5 badge fee. Attorney and official visits: daily 8:00 AM to 10:00 AM, 12:30 PM to 4:45 PM, and 6:30 PM to 8:30 PM.",
  bailInfo: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail.",
  operatedBy: "Montgomery County, Pennsylvania",
  // TODO(Jan): verify provider: sources conflict (GTL/GettingOut vs smaller vendors); no official sheriff page confirmed the vendor.

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
      notes: "GTL (ViaPath) phone calls and video visits, with GettingOut text messaging from kiosks and tablets.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "GettingOut text messaging from kiosks and tablets." },
    video: { status: "available", provider: "GTL", notes: "Video visitation through GTL. Confirm current scheduling with the facility before scheduling." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed. Physical photos by mail are subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls through GTL (ViaPath). Confirm the current setup with the facility before funding calls." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Access Corrections reported for deposits. Confirm current deposit options with the facility before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the facility before creating any accounts.",
    "Do not fund accounts with a vendor until the jail confirms it is the current provider.",
    "Visitors generally need to be on the inmate's approved list and show photo ID.",
    "Mail must follow the facility's mail rules. Check the official page before sending anything.",
    "All calls and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which phone company does Montgomery County Correctional Facility use?", answer: "GTL (ViaPath) handles phone calls at Montgomery County Correctional Facility, with GettingOut text messaging. Confirm the current setup with the facility before funding an account." },
    { question: "Can I visit someone at Montgomery County Correctional Facility?", answer: "Yes, but confirm the current visitation schedule, visit type, and any scheduling platform directly with the facility, since reported details vary." },
    { question: "How do I send money to an inmate in Eagleville PA?", answer: "Use only the deposit methods published by the county or confirmed by facility staff. Do not send cash." },
    { question: "Is this the same as the Montgomery County jail in Maryland?", answer: "No. This entry covers the Montgomery County Correctional Facility in Eagleville, Pennsylvania. Maryland's facility is in Boyds, Maryland and is a separate institution." },
    { question: "How do I find out if someone is in Montgomery County Correctional Facility?", answer: "Use the county's online inmate search or call the facility with the inmate's full name and date of birth to confirm custody." },
    { question: "What is the mailing address for an inmate at Montgomery County Correctional Facility?", answer: "Address mail to: Inmate Name, ID Number, Montgomery County Correctional Facility, 60 Eagleville Road, Norristown, PA 19403." },
    { question: "How does bail work at Montgomery County Correctional Facility?", answer: "Bail is set by the court, not the facility. Contact the court or a licensed bail bondsman for bond amounts and posting procedures. The facility cannot set or change bail." },
    { question: "Do I need to pre-register to visit Montgomery County Correctional Facility?", answer: "Yes. Visitors must pre-register Monday or Friday, 7:30 AM to 7:30 PM, and pay a one-time $5 badge fee. Check the county visiting schedule for your housing section's hours." },
    { question: "What is the Montgomery County Correctional Facility?", answer: "It is the county jail in Eagleville, serving Montgomery County, Pennsylvania. It houses pretrial and sentenced inmates." },
  ],

  relatedFacilitySlugs: ["philadelphia-department-of-prisons", "essex-county-correctional-facility", "cuyahoga-county-jail"],
},

"bergen-county-jail": {
  id: "f-287",
  name: "Bergen County Jail",
  slug: "bergen-county-jail",
  type: "county",
  stateSlug: "new-jersey",
  stateName: "New Jersey",
  stateAbbr: "NJ",
  countySlug: null,
  countyName: "Bergen County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Bergen County Jail: GTL Calls and GettingOut Visits Guide",
  seoDescription: "How to contact someone at Bergen County Jail in Hackensack NJ. GTL phone calls and GettingOut video visits and messaging.",

  description:
    "Bergen County Jail communication guide. GTL phone calls and GettingOut video visits and messaging for families of detainees in Hackensack NJ.",

  overview: [
    "Bergen County Jail is the county detention facility in Hackensack, New Jersey, operated by the Bergen County Sheriff's Office. It houses pretrial detainees and sentenced inmates for Bergen County in the New York City suburbs of northern New Jersey.",
    "Communication services at Bergen County Jail run through GTL and its GettingOut platform for phone calls, emails, and video visits. Families set up a GettingOut account and can deposit funds through GTL ConnectNetwork for phone calls or other communication services.",
    "Video visits can be scheduled through GettingOut for remote visits from home. Calls are permitted during set daytime hours outside of jail activities like meals and head counts, and all communications are monitored.",
  ],

  address: "160 South River Street, Hackensack, NJ 07601",
  phone: "(201) 336-3500",

  operatedBy: "Bergen County Sheriff's Office",

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
      notes: "GTL provides the inmate phone system at Bergen County Jail, with funds managed through ConnectNetwork.",
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
      notes: "GettingOut handles video visitation, email, and messaging services for Bergen County Jail.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Email and electronic messaging through the GettingOut platform." },
    video: { status: "available", provider: "GettingOut", notes: "Remote video visits scheduled through GettingOut." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut, subject to jail content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system, permitted during daytime hours." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Confirm current deposit options on the Bergen County Sheriff's inmate services page." },
  },

  rules: [
    "Create a GettingOut account and select Bergen County Jail before scheduling visits or adding funds.",
    "Calls are allowed during set hours outside of meals, head counts, and other jail activities.",
    "Schedule video visits through GettingOut at least a day in advance where required.",
    "Visitors must follow the dress code and bring valid photo ID for on-site visits.",
    "All calls, messages, and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which app do I use to contact someone at Bergen County Jail?", answer: "GettingOut. Register at gettingout.com or in the app, select Bergen County Jail, add your inmate, and use it for video visits, messaging, and managing phone funds." },
    { question: "How do phone calls work at Bergen County Jail?", answer: "Calls run through the GTL phone system. Set up an account through GTL ConnectNetwork to deposit funds, and the inmate can call during permitted daytime hours." },
    { question: "Can I do a video visit from home?", answer: "Yes. Video visits can be scheduled through the GettingOut platform for remote visits from your computer or phone." },
    { question: "What are the visiting hours at Bergen County Jail?", answer: "Visiting hours run during the day with time slots booked in advance. Confirm current hours and scheduling rules with the jail before visiting." },
      {
        question: "How do I find or search for an inmate at Bergen County Jail?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Bergen County, New Jersey. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Bergen County Jail?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Bergen County Jail?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Bergen County Jail?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Bergen County Jail?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["essex-county-correctional-facility", "mdc-brooklyn", "rikers-island"],
},

"hudson-county-correctional-center": {
  id: "f-288",
  name: "Hudson County Correctional Center",
  slug: "hudson-county-correctional-center",
  type: "county",
  stateSlug: "new-jersey",
  stateName: "New Jersey",
  stateAbbr: "NJ",
  countySlug: null,
  countyName: "Hudson County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hudson County Correctional Center: Calls and Visits Guide",
  seoDescription: "How to contact someone at Hudson County Correctional Center in Kearny NJ. Phone, tablet messaging, and video visits.",

  description:
    "Hudson County Correctional Center communication guide. Phone calls, tablet messaging, and video visits for families of detainees in Kearny NJ.",

  overview: [
    "The Hudson County Correctional Center is the county jail in Kearny, New Jersey, operated by Hudson County. It houses pretrial detainees and sentenced inmates for Hudson County, directly across the Hudson River from Manhattan.",
    "According to Hudson County's official corrections pages, inmate telephone service is handled through offenderconnect.com, the GTL ConnectNetwork platform, and inmate tablets run through gettingout.com. Families add money to an inmate's tablet account for messaging, and tablet funds are kept separate from commissary money.",
    "Tablet services follow the same rules as video visits and electronic messaging, and violations can result in loss of tablet use. All services on the tablet are subject to the facility's communication rules.",
  ],

  address: "30-35 Hackensack Ave, Kearny, NJ 07032",
  phone: "(201) 395-5600",
  commissary: "Funds via Access Corrections online, plus kiosk in Corrections Center lobby",
  operatedBy: "Hudson County, New Jersey",

  providers: [
    {
      name: "ConnectNetwork",
      slug: "connectnetwork",
      initial: "C",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Hudson County's official page directs families to offenderconnect.com (ConnectNetwork) for inmate telephone service.",
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
      notes: "Hudson County's official page directs families to gettingout.com for inmate tablet accounts and messaging.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Tablet messaging funded through a GettingOut account. Tablet money is separate from commissary funds." },
    video: { status: "available", provider: "GettingOut", notes: "Video visits follow the tablet and visitation rules. Confirm scheduling details with the facility." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo sharing through GettingOut tablet services, subject to jail content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls through offenderconnect.com (ConnectNetwork). You need a touch-tone phone to accept calls." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Tablet funds and commissary funds are separate. Confirm deposit options with the facility." },
  },

  rules: [
    "Set up phone service through offenderconnect.com and tablet messaging through gettingout.com, per the county's official pages.",
    "Tablet account money is separate from commissary money. Fund each one on its own.",
    "Follow the same rules for tablets as for video visits and messaging. Violations can end tablet access.",
    "You need a touch-tone telephone to receive calls from the Correctional Center.",
    "All calls, messages, and video visits are monitored and recorded.",
  ],

  faq: [
    { question: "How do phone calls work at Hudson County Correctional Center?", answer: "The county's official page directs families to offenderconnect.com for inmate telephone service. You must use a touch-tone telephone to receive calls, and you will hear a computerized voice prompting you to accept or reject the call." },
    { question: "How do I message an inmate at Hudson County Correctional Center?", answer: "Inmate tablets run through gettingout.com, per the county's official page. Create an account, add money to the inmate's tablet account for messaging, and follow the instructions there." },
    { question: "Is tablet money the same as commissary money?", answer: "No. The county states that tablet account money is separate from commissary account money. Fund them separately." },
    { question: "Can I visit someone at Hudson County Correctional Center?", answer: "Yes. Confirm the current visitation schedule and any video visit platform with the facility before planning a visit." },
      {
        question: "How do I find or search for an inmate at Hudson County Correctional Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Hudson County, New Jersey. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Hudson County Correctional Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Hudson County Correctional Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Hudson County Correctional Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Hudson County Correctional Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },



  ],

  relatedFacilitySlugs: ["essex-county-correctional-facility", "mdc-brooklyn", "rikers-island"],
},

"middlesex-jail-and-house-of-correction": {
  id: "f-289",
  name: "Middlesex Jail and House of Correction",
  slug: "middlesex-jail-and-house-of-correction",
  type: "county",
  stateSlug: "massachusetts",
  stateName: "Massachusetts",
  stateAbbr: "MA",
  countySlug: null,
  countyName: "Middlesex County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Middlesex Jail and House of Correction: Securus Guide",
  seoDescription: "How to contact someone at Middlesex Jail and House of Correction in Billerica MA. Securus phone calls, video visits, and messaging.",

  description:
    "Middlesex Jail and House of Correction communication guide. Securus phone calls, video visits, and messaging for families of detainees in Billerica MA.",

  overview: [
    "The Middlesex Jail and House of Correction is the county correctional facility in Billerica, Massachusetts, operated by the Middlesex Sheriff's Office. It houses men awaiting trial and serving sentences of up to two and a half years for Middlesex County, northwest of Boston.",
    "Communication services at the facility run through Securus Technologies, confirmed in official Middlesex Sheriff's Office procedures and communications materials. Securus provides phone calls, video visits, eMessaging, photo sharing, eCards, and VideoGrams. The sheriff's office materials note that Securus communications services offered at the facility can include all of these options.",
    "Funds for canteen and inmate accounts can be deposited at the lobby kiosk or through Access Corrections online and by phone. The sheriff's office Family Support Services Unit can help families with questions about visits, mail, and telephone contact.",
  ],

  phone: "(978) 667-1711",
  operatedBy: "Middlesex Sheriff's Office",

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
      notes: "Securus provides phone, video visits, eMessaging, photos, eCards, and VideoGrams at the Middlesex Jail and House of Correction.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Securus eMessaging and Text Connect for messages to and from inmates." },
    video: { status: "available", provider: "Securus", notes: "Securus Video Connect for remote video visits, scheduled online at least 24 hours ahead." },
    photos: { status: "available", provider: "Securus", notes: "Photo sharing and VideoGrams through Securus, subject to jail content rules." },
    phone: { status: "available", provider: "Securus", notes: "Phone calls through Securus. Attorneys set up Securus accounts for privileged calls." },
    moneyTransfer: { status: "available", provider: undefined, notes: "Deposits at the lobby kiosk or through Access Corrections online and by phone." },
  },

  rules: [
    "Create a Securus account to fund calls, schedule video visits, and send messages.",
    "Schedule video visits online at least 24 hours in advance and log in 15 minutes early.",
    "Deposit canteen funds at the lobby kiosk or through Access Corrections. The sheriff's office accepts major credit cards.",
    "Contact the Family Support Services Unit with questions about visits, mail, or phone contact.",
    "All non-legal calls and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which service do I use to contact someone at Middlesex Jail and House of Correction?", answer: "Securus Technologies. Create an account to make calls, schedule video visits, and send eMessages, photos, eCards, and VideoGrams." },
    { question: "How do video visits work at Middlesex Jail?", answer: "Video visits run through Securus Video Connect. Schedule online at least 24 hours in advance, and be logged in at least 15 minutes before the visit. On-site visits use video screens in the jail lobby." },
    { question: "How do I send money to a Middlesex inmate?", answer: "Funds can be deposited at the lobby deposit kiosk between 6 am and 10 pm, or through the Access Corrections website and by phone at 866-345-1884." },
    { question: "Who can help my family with questions?", answer: "The Middlesex Sheriff's Office Family Support Services Unit responds to family inquiries about visits, mail, and telephone contact, and can be reached by phone or email." },
      {
        question: "How do I find or search for an inmate at Middlesex Jail and House of Correction?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Middlesex County, Massachusetts. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Middlesex Jail and House of Correction?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Middlesex Jail and House of Correction?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Middlesex Jail and House of Correction?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Middlesex Jail and House of Correction?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["suffolk-county-house-of-correction", "essex-county-correctional-facility", "fci-danbury"],
},

"california-correctional-institution": {
  id: "f-290",
  name: "California Correctional Institution",
  slug: "california-correctional-institution",
  type: "state",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Kern County",
  securityLevel: "Minimum to Supermax",
  hasDetailPage: true,
  seoTitle: "California Correctional Institution: Calls and Tablets Guide",
  seoDescription: "How to contact someone at California Correctional Institution in Tehachapi CA. CDCR phones, tablets, video visits, and money.",

  description:
    "California Correctional Institution communication guide. CDCR phone calls, tablets, video visits, and money transfers for families in Tehachapi CA.",

  overview: [
    "The California Correctional Institution (CCI) is a state prison in Tehachapi, California, operated by the California Department of Corrections and Rehabilitation (CDCR). Opened in 1954, it is a multi-mission institution housing minimum through supermax custody levels, including Level I dorms, Level III and IV cell housing, a Security Housing Unit, and a reception center.",
    "Phone calls for all CDCR institutions are paid for by CDCR, and communication runs on state-issued tablets. CDCR is currently transitioning its tablet program from ViaPath (GTL) to Securus, with incarcerated people exchanging ViaPath tablets for new Securus tablets. Tablets support e-messages, photos, video calls with a free allowance, and phone calls.",
    "Money for CDCR trust accounts is deposited through JPay online, by phone, by MoneyGram, or at lobby kiosks. In-person visits are scheduled through CDCR's visitor reservation system, and visitors must be approved before visiting.",
  ],

  address: "24900 Highway 202, Tehachapi, CA 93561",
  phone: "(661) 822-4402",

  website: "https://www.cdcr.ca.gov/facility-locator/cci/",
    visitingHours: "All-day visiting, schedule via VSA at https://cdcr.gtlvisitme.com/app, request period begins 8 days before visitation day at 6:30 a.m., email requests not reviewed",
  established: 1954,
  operatedBy: "California Department of Corrections and Rehabilitation",

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
      notes: "ViaPath (GTL) has been CDCR's communication vendor for phones and tablets. CDCR is transitioning tablet services to Securus.",
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
      notes: "CDCR is rolling out Securus tablets statewide to replace ViaPath tablets, with e-messages, video calls, and photos on the new tablets.",
    },
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
      notes: "JPay handles electronic money deposits to CDCR trust accounts online, by phone, and by MoneyGram.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: undefined, notes: "Tablet e-messaging is available. CDCR is switching from ViaPath to Securus tablets, so the app depends on the current rollout." },
    video: { status: "available", provider: undefined, notes: "Video calls on the state-issued tablets with a free monthly allowance, plus scheduled in-person visits." },
    photos: { status: "available", provider: undefined, notes: "Inbound photos on the state-issued tablets, subject to CDCR content rules." },
    phone: { status: "available", provider: "GTL", notes: "Calls are paid by CDCR. The phone vendor is transitioning from ViaPath to Securus with the tablets." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits through JPay online, by phone, by MoneyGram, or at lobby kiosks." },
  },

  rules: [
    "Ask your loved one which tablet they currently have, ViaPath or Securus, since CDCR is mid-transition.",
    "In-person visits require approval and an appointment through CDCR's visitor reservation system.",
    "Send money only through JPay or the other official CDCR deposit methods. Never send cash.",
    "Mail must include the inmate's full name and CDCR number and follow CDCR mail rules.",
    "All calls, messages, and video calls are monitored under CDCR policy.",
  ],

  faq: [
    { question: "How do phone calls work at California Correctional Institution?", answer: "CDCR pays for inmate phone calls statewide. Calls run through the state's communication vendor, which is transitioning from ViaPath (GTL) to Securus. Inmates initiate all calls." },
    { question: "Can I message an inmate at CCI Tehachapi?", answer: "Yes, through e-messages on the state-issued tablet. CDCR is replacing ViaPath tablets with Securus tablets, so confirm which tablet your loved one currently has to use the right app." },
    { question: "How do video visits work in California prisons?", answer: "Inmates get video calls on their state tablets with a free monthly allowance. In-person visits are scheduled separately through CDCR's visitor reservation system after you are approved as a visitor." },
    { question: "How do I send money to a CDCR inmate?", answer: "Deposit to the trust account through JPay online, by phone at 1-800-574-5729, by MoneyGram, or at a lobby kiosk. You will need the inmate's CDCR number." },
      {
        question: "How do I find or search for an inmate at California Correctional Institution?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Kern County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at California Correctional Institution?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at California Correctional Institution?",
        answer: "All-day visiting, schedule via VSA at https://cdcr.gtlvisitme.com/app, request period begins 8 days before visitation day at 6:30 a.m., email requests not reviewed",
      },
      {
        question: "Can I receive incoming calls from an inmate at California Correctional Institution?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at California Correctional Institution?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at California Correctional Institution?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
  relatedFacilitySlugs: ["pelican-bay-state-prison", "corcoran-state-prison", "folsom-state-prison"],
},

"salinas-valley-state-prison": {
  id: "f-291",
  name: "Salinas Valley State Prison",
  slug: "salinas-valley-state-prison",
  type: "state",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Monterey County",
  securityLevel: "Level I / III / IV",
  hasDetailPage: true,
  seoTitle: "Salinas Valley State Prison: Calls and Tablets Guide",
  seoDescription: "How to contact someone at Salinas Valley State Prison in Soledad CA. CDCR phones, tablets, video visits, and money.",

  description:
    "Salinas Valley State Prison communication guide. CDCR phone calls, tablets, video visits, and money transfers for families in Soledad CA.",

  overview: [
    "Salinas Valley State Prison (SVSP) is a state prison in Soledad, California, operated by the California Department of Corrections and Rehabilitation (CDCR). Opened in 1996, it is a multi-security-level facility housing Level I, III, and IV inmates across several sub-facilities, with a design capacity of 2,242.",
    "Phone calls for all CDCR institutions are paid for by CDCR, and communication runs on state-issued tablets. CDCR is currently transitioning its tablet program from ViaPath (GTL) to Securus, with incarcerated people exchanging ViaPath tablets for new Securus tablets. Tablets support e-messages, photos, video calls with a free allowance, and phone calls.",
    "Money for CDCR trust accounts is deposited through JPay online, by phone, by MoneyGram, or at lobby kiosks. In-person visits are scheduled through CDCR's visitor reservation system, and visitors must be approved before visiting.",
  ],

  address: "31625 Highway 101, Soledad, CA 93960",
  phone: "(831) 678-5500 ext. 5707 Visiting Sergeant, email SVSPVideoVisiting@cdcr.ca.gov",
  visitingHours: "Walk-in visits permitted for contact visits. Appointments only required for non-contact visits, arrive one hour early for non-contact. Max 5 visitors per visit, max 3 for non-contact. Normal visits for all SVSP Facilities as of 9/28/26 per status page",
  inmateCapacity: 2242,
  established: 1996,
  operatedBy: "California Department of Corrections and Rehabilitation",

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
      notes: "ViaPath (GTL) has been CDCR's communication vendor for phones and tablets. CDCR is transitioning tablet services to Securus.",
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
      notes: "CDCR is rolling out Securus tablets statewide to replace ViaPath tablets, with e-messages, video calls, and photos on the new tablets.",
    },
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
      notes: "JPay handles electronic money deposits to CDCR trust accounts online, by phone, and by MoneyGram.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: undefined, notes: "Tablet e-messaging is available. CDCR is switching from ViaPath to Securus tablets, so the app depends on the current rollout." },
    video: { status: "available", provider: undefined, notes: "Video calls on the state-issued tablets with a free monthly allowance, plus scheduled in-person visits." },
    photos: { status: "available", provider: undefined, notes: "Inbound photos on the state-issued tablets, subject to CDCR content rules." },
    phone: { status: "available", provider: "GTL", notes: "Calls are paid by CDCR. The phone vendor is transitioning from ViaPath to Securus with the tablets." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits through JPay online, by phone, by MoneyGram, or at lobby kiosks." },
  },

  rules: [
    "Ask your loved one which tablet they currently have, ViaPath or Securus, since CDCR is mid-transition.",
    "In-person visits require approval and an appointment through CDCR's visitor reservation system.",
    "Send money only through JPay or the other official CDCR deposit methods. Never send cash.",
    "Mail must include the inmate's full name and CDCR number and follow CDCR mail rules.",
    "All calls, messages, and video calls are monitored under CDCR policy.",
  ],

  faq: [
    { question: "How do phone calls work at Salinas Valley State Prison?", answer: "CDCR pays for inmate phone calls statewide. Calls run through the state's communication vendor, which is transitioning from ViaPath (GTL) to Securus. Inmates initiate all calls." },
    { question: "Can I message an inmate at Salinas Valley State Prison?", answer: "Yes, through e-messages on the state-issued tablet. CDCR is replacing ViaPath tablets with Securus tablets, so confirm which tablet your loved one currently has to use the right app." },
    { question: "How do video visits work at SVSP?", answer: "Inmates get video calls on their state tablets with a free monthly allowance. In-person visits are scheduled separately through CDCR's visitor reservation system after you are approved as a visitor." },
    { question: "How do I send money to a CDCR inmate?", answer: "Deposit to the trust account through JPay online, by phone at 1-800-574-5729, by MoneyGram, or at a lobby kiosk. You will need the inmate's CDCR number." },
      {
        question: "How do I find or search for an inmate at Salinas Valley State Prison?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Monterey County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Salinas Valley State Prison?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at Salinas Valley State Prison?",
        answer: "Walk-in visits permitted for contact visits. Appointments only required for non-contact visits, arrive one hour early for non-contact. Max 5 visitors per visit, max 3 for non-contact. Normal visits for all SVSP Facilities as of 9/28/26 per status page",
      },
      {
        question: "Can I receive incoming calls from an inmate at Salinas Valley State Prison?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Salinas Valley State Prison?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Salinas Valley State Prison?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
  relatedFacilitySlugs: ["pelican-bay-state-prison", "corcoran-state-prison", "san-quentin-state-prison"],
},

"high-desert-state-prison-california": {
  id: "f-292",
  name: "High Desert State Prison",
  slug: "high-desert-state-prison-california",
  type: "state",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Lassen County",
  securityLevel: "Maximum-Supermax",
  hasDetailPage: true,
  seoTitle: "High Desert State Prison CA: Calls and Tablets Guide",
  seoDescription: "How to contact someone at High Desert State Prison in Susanville CA. CDCR phones, tablets, video visits, and money.",

  description:
    "High Desert State Prison communication guide. CDCR phone calls, tablets, video visits, and money transfers for families in Susanville CA.",

  overview: [
    "High Desert State Prison (HDSP) is a high-security state prison near Susanville in Lassen County, California, operated by the California Department of Corrections and Rehabilitation (CDCR). Opened in 1995, it houses Level IV inmates with a design capacity of 2,324. This is the California facility, not the High Desert State Prison in Nevada.",
    "Phone calls for all CDCR institutions are paid for by CDCR, and communication runs on state-issued tablets. CDCR is currently transitioning its tablet program from ViaPath (GTL) to Securus, with incarcerated people exchanging ViaPath tablets for new Securus tablets. Tablets support e-messages, photos, video calls with a free allowance, and phone calls.",
    "Money for CDCR trust accounts is deposited through JPay online, by phone, by MoneyGram, or at lobby kiosks. In-person visits are scheduled through CDCR's visitor reservation system, and visitors must be approved before visiting. The prison sits in a remote area of northeastern California, so many families rely on the tablet services to stay in touch.",
  ],

  phone: "(530) 251-5100 Ext. 5712 Visiting Sergeant and Lieutenant, Mon and Thu 8am to 12pm, press 4 before extension. Family visiting email hdspfamilyvisiting@cdcr.ca.gov",
  visitingHours: "In-person Fri 12:00 p.m. to 6:30 p.m., Sat 8:00 a.m. to 2:30 p.m., Sun 8:00 a.m. to 2:30 p.m. Walk-in Fri 3:00 p.m. to 6:30 p.m., entry not accepted after 5:00pm, Sat and Sun 11:00 a.m. to 2:30 p.m., entry not accepted after 1:00pm. Overnight family visiting Tue to Thu 9:00 a.m. to 9:00 a.m., Fri to Sun 9:00 a.m. to 9:00 a.m.",
  notToConfuseWith: "Not to be confused with High Desert State Prison in Indian Springs, Nevada.",
  inmateCapacity: 2324,
  established: 1995,
  operatedBy: "California Department of Corrections and Rehabilitation",

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
      notes: "ViaPath (GTL) has been CDCR's communication vendor for phones and tablets. CDCR is transitioning tablet services to Securus.",
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
      notes: "CDCR is rolling out Securus tablets statewide to replace ViaPath tablets, with e-messages, video calls, and photos on the new tablets.",
    },
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
      notes: "JPay handles electronic money deposits to CDCR trust accounts online, by phone, and by MoneyGram.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: undefined, notes: "Tablet e-messaging is available. CDCR is switching from ViaPath to Securus tablets, so the app depends on the current rollout." },
    video: { status: "available", provider: undefined, notes: "Video calls on the state-issued tablets with a free monthly allowance, plus scheduled in-person visits." },
    photos: { status: "available", provider: undefined, notes: "Inbound photos on the state-issued tablets, subject to CDCR content rules." },
    phone: { status: "available", provider: "GTL", notes: "Calls are paid by CDCR. The phone vendor is transitioning from ViaPath to Securus with the tablets." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits through JPay online, by phone, by MoneyGram, or at lobby kiosks." },
  },

  rules: [
    "Ask your loved one which tablet they currently have, ViaPath or Securus, since CDCR is mid-transition.",
    "This is the California High Desert State Prison near Susanville, not the Nevada facility of the same name.",
    "In-person visits require approval and an appointment through CDCR's visitor reservation system.",
    "Send money only through JPay or the other official CDCR deposit methods. Never send cash.",
    "All calls, messages, and video calls are monitored under CDCR policy.",
  ],

  faq: [
    { question: "How do phone calls work at High Desert State Prison in California?", answer: "CDCR pays for inmate phone calls statewide. Calls run through the state's communication vendor, which is transitioning from ViaPath (GTL) to Securus. Inmates initiate all calls." },
    { question: "Is this the same as the High Desert State Prison in Nevada?", answer: "No. This entry covers the California Department of Corrections and Rehabilitation facility near Susanville, California. Nevada has a separate High Desert State Prison near Indian Springs." },
    { question: "Can I message an inmate at HDSP?", answer: "Yes, through e-messages on the state-issued tablet. CDCR is replacing ViaPath tablets with Securus tablets, so confirm which tablet your loved one currently has to use the right app." },
    { question: "How do I send money to a CDCR inmate?", answer: "Deposit to the trust account through JPay online, by phone at 1-800-574-5729, by MoneyGram, or at a lobby kiosk. You will need the inmate's CDCR number." },
      {
        question: "How do I find or search for an inmate at High Desert State Prison?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Lassen County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at High Desert State Prison?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at High Desert State Prison?",
        answer: "In-person Fri 12:00 p.m. to 6:30 p.m., Sat 8:00 a.m. to 2:30 p.m., Sun 8:00 a.m. to 2:30 p.m. Walk-in Fri 3:00 p.m. to 6:30 p.m., entry not accepted after 5:00pm, Sat and Sun 11:00 a.m. to 2:30 p.m., entry not accepted after 1:00pm. Overnight family visiting Tue to Thu 9:00 a.m. to 9:00 a.m., Fri to Sun 9:00 a.m. to 9:00 a.m.",
      },
      {
        question: "Can I receive incoming calls from an inmate at High Desert State Prison?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at High Desert State Prison?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at High Desert State Prison?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
  relatedFacilitySlugs: ["ely-state-prison", "high-desert-state-prison", "pelican-bay-state-prison"],
},

"state-correctional-institution-huntingdon": {
  id: "f-293",
  name: "State Correctional Institution Huntingdon",
  slug: "state-correctional-institution-huntingdon",
  type: "state",
  stateSlug: "pennsylvania",
  stateName: "Pennsylvania",
  stateAbbr: "PA",
  countySlug: null,
  countyName: "Huntingdon County",
  securityLevel: "Close",
  hasDetailPage: true,
  seoTitle: "SCI Huntingdon: GTL Calls, Tablets, and Money Guide",
  seoDescription: "How to contact someone at SCI Huntingdon in Pennsylvania. GTL phone calls and tablet messaging, JPay and ConnectNetwork deposits.",

  description:
    "SCI Huntingdon communication guide. GTL phone calls and tablet messaging for families of inmates at this close-security Pennsylvania state prison.",

  overview: [
    "The State Correctional Institution at Huntingdon (SCI Huntingdon) is a close-security state prison for adult men in Huntingdon, Pennsylvania, operated by the Pennsylvania Department of Corrections. Opened in 1889, it is the commonwealth's oldest continuously operating state correctional facility.",
    "The Pennsylvania Department of Corrections contracts with GTL for inmate telephone service and tablets. Tablets support e-messaging and phone calls, and families manage accounts through ConnectNetwork, GTL's consumer platform. Phone and messaging fees apply per state contract rates.",
    "Money can be sent to SCI Huntingdon inmates through JPay online and by phone, through ConnectNetwork deposits, or by money order mailed to the facility. In-person visits require the visitor to be on the inmate's approved list.",
  ],

  website: "https://www.cor.pa.gov/Facilities/StatePrisons/Pages/Huntingdon.aspx",
  established: 1889,
  visitingHours: "In-person and video visits are scheduled by housing unit; confirm with the facility before traveling.",
  commissary: "Deposits through JPay or ConnectNetwork, or by money order mailed to the facility.",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
  operatedBy: "Pennsylvania Department of Corrections",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: true,
      video: false,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GTL provides the inmate phone system and tablets with e-messaging at SCI Huntingdon under the PADOC contract.",
    },
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
      notes: "JPay accepts electronic deposits to inmate accounts at SCI Huntingdon online and by phone.",
    },
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
      notes: "ConnectNetwork (GTL) accepts deposits to inmate trust accounts for Pennsylvania state prisons.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "E-messaging on GTL tablets. Families manage messaging funds through ConnectNetwork." },
    video: { status: "limited", provider: undefined, notes: "Video visitation not confirmed for this facility. Confirm current visit options with the institution." },
    photos: { status: "available", provider: "GTL", notes: "Photo attachments through GTL tablet messaging, subject to PADOC content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system. Accounts are managed through ConnectNetwork." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposits through JPay or ConnectNetwork, or by money order mailed to the facility." },
  },

  rules: [
    "Create a ConnectNetwork account to fund GTL phone calls and tablet messaging.",
    "Deposits can also go through JPay online or by phone. Never send cash.",
    "In-person visits require the visitor to be on the inmate's approved visitor list.",
    "Mail must include the inmate's full name and inmate number and follow PADOC mail rules.",
    "All calls and messages are monitored under PADOC policy.",
  ],

  faq: [
    { question: "How do phone calls work at SCI Huntingdon?", answer: "Calls run through the GTL phone system under the Pennsylvania Department of Corrections contract. Set up an account on ConnectNetwork to fund calls to your inmate." },
    { question: "Can I message an inmate at SCI Huntingdon?", answer: "Yes. GTL tablets support e-messaging, and families fund messaging through ConnectNetwork." },
    { question: "How do I send money to an SCI Huntingdon inmate?", answer: "Use JPay online or by phone, deposit through ConnectNetwork, or mail a money order to the facility. You will need the inmate's name and inmate number." },
    { question: "Can I visit someone at SCI Huntingdon?", answer: "Yes, but you must be on the inmate's approved visitor list. Confirm current visiting days and rules with the institution before traveling." },
    { question: "How do I find an inmate at SCI Huntingdon?", answer: "Search the Pennsylvania Department of Corrections inmate locator by name or inmate number, or call the facility." },
    { question: "Can I call an inmate at SCI Huntingdon?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through GTL (ViaPath)." },
    { question: "How do I stop or block calls from an inmate at SCI Huntingdon?", answer: "Contact GTL (ViaPath) to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How do video visits work at SCI Huntingdon?", answer: "Video visits are scheduled in advance; confirm the current platform with the facility." },
    { question: "What is SCI Huntingdon known for?", answer: "SCI Huntingdon is the oldest continuously operating state correctional institution in Pennsylvania, with a history going back to 1889." },
  ],

  relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
  relatedFacilitySlugs: ["sci-phoenix", "state-correctional-institution-dallas"],
},

"pontiac-correctional-center": {
  id: "f-294",
  name: "Pontiac Correctional Center",
  slug: "pontiac-correctional-center",
  type: "state",
  stateSlug: "illinois",
  stateName: "Illinois",
  stateAbbr: "IL",
  countySlug: null,
  countyName: "Livingston County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Pontiac Correctional Center: Calls and Money Guide",
  seoDescription: "How to contact someone at Pontiac Correctional Center in Illinois. ICSolutions phone calls and JPay money transfers.",

  description:
    "Pontiac Correctional Center communication guide. ICSolutions phone calls and JPay money transfers for families of inmates in Pontiac IL.",

  overview: [
    "Pontiac Correctional Center is a maximum-security state prison for men in Pontiac, Illinois, operated by the Illinois Department of Corrections. Opened in 1871, it is one of the oldest and most secure prisons in the state, housing maximum-security inmates along with specialized mental health and protective custody populations.",
    "Phone calls at Illinois state prisons run through ICSolutions tablets. Under IDOC's Voices of Connection pilot program, each person in custody receives 775 free domestic phone minutes per month, made through a phone dialer app on the ICSolutions tablet when connected to Wi-Fi. The tablets are not designed for messaging or entertainment.",
    "Money is deposited to inmate accounts through JPay online, by phone, by MoneyGram, or by money order mailed to the facility. In-person visits require the visitor to be approved and scheduled in advance.",
  ],

  website: "https://www2.illinois.gov/idoc/facilities/Pages/pontiaccorrectionalcenter.aspx",
  established: 1871,
  mailingAddress: "Inmate Name, ID Number\nPontiac Correctional Center\nP.O. Box 99\nPontiac, IL 61764",
  visitingHours: "Visits are scheduled in advance; confirm current visiting options with the facility before traveling.",
  commissary: "Deposits through JPay online, by phone, by MoneyGram, or by money order mailed to the facility.",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
  operatedBy: "Illinois Department of Corrections",

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
      notes: "ICSolutions provides the phone dialer app on IDOC tablets, with 775 free domestic minutes per month under the Voices of Connection pilot.",
    },
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
      notes: "JPay handles electronic money deposits to IDOC inmate accounts online, by phone, and by MoneyGram.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "ICSolutions tablets are for calls only, not messaging. Confirm any messaging options with the facility." },
    video: { status: "limited", provider: undefined, notes: "Video visitation not confirmed. Confirm current visit options with the institution." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed. Physical photos by mail are subject to IDOC content rules." },
    phone: { status: "available", provider: "ICSolutions", notes: "Calls through the ICSolutions tablet dialer app, with 775 free domestic minutes per month under the IDOC pilot." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposits through JPay online, by phone, by MoneyGram, or by money order mailed to the facility." },
  },

  rules: [
    "Inmates call from the ICSolutions tablet dialer app. They cannot receive incoming calls.",
    "The free-minutes pilot covers domestic calls. International calls may carry adjusted rates.",
    "Send money only through JPay or official IDOC methods. Never send cash.",
    "In-person visits require approval and advance scheduling. Confirm current visiting days with the facility.",
    "All calls are monitored under IDOC policy.",
  ],

  faq: [
    { question: "How do phone calls work at Pontiac Correctional Center?", answer: "Calls are made through a phone dialer app on ICSolutions tablets. Under IDOC's Voices of Connection pilot, each person in custody gets 775 free domestic phone minutes per month." },
    { question: "Can I message an inmate at Pontiac Correctional Center?", answer: "The ICSolutions tablets are designed for phone calls, not messaging. Confirm any messaging options directly with the facility." },
    { question: "How do I send money to a Pontiac inmate?", answer: "Deposit through JPay online, by phone at 1-800-574-5729, by MoneyGram, or mail a money order to the facility with the inmate's name and IDOC number." },
    { question: "Can I visit someone at Pontiac Correctional Center?", answer: "Yes, but visits must be approved and scheduled in advance. Confirm current visiting days and rules with the institution before traveling." },
    { question: "How do I find an inmate at Pontiac Correctional Center?", answer: "Search the Illinois DOC inmate search by name or inmate number, or call the facility." },
    { question: "What is the mailing address for an inmate at Pontiac Correctional Center?", answer: "Address mail to: Inmate Name, ID Number, Pontiac Correctional Center, P.O. Box 99, Pontiac, IL 61764." },
    { question: "Can I call an inmate at Pontiac Correctional Center?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through ICSolutions." },
    { question: "How do I stop or block calls from an inmate at Pontiac Correctional Center?", answer: "Contact ICSolutions to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "Is Pontiac Correctional Center still open?", answer: "Yes. The medium security unit closed in 2022, but the maximum-security facility remains open." },
  ],

  relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
  relatedFacilitySlugs: ["menard-correctional-center", "stateville-correctional-center", "cook-county-jail"],
},

"wabash-valley-correctional-facility": {
  id: "f-295",
  name: "Wabash Valley Correctional Facility",
  slug: "wabash-valley-correctional-facility",
  type: "state",
  stateSlug: "indiana",
  stateName: "Indiana",
  stateAbbr: "IN",
  countySlug: null,
  countyName: "Sullivan County",
  securityLevel: "Minimum to Maximum",
  hasDetailPage: true,
  seoTitle: "Wabash Valley Correctional Facility: GTL Guide",
  seoDescription: "How to contact someone at Wabash Valley Correctional Facility in Carlisle IN. GTL phone calls, video visits, and JPay money.",

  description:
    "Wabash Valley Correctional Facility communication guide. GTL phone calls, video visits, and tablet messaging for families in Carlisle IN.",

  overview: [
    "Wabash Valley Correctional Facility is a state prison near Carlisle in Sullivan County, Indiana, operated by the Indiana Department of Correction. Opened in 1992, it is a mixed-custody facility housing minimum to maximum-security adult men, including a special needs unit for intensive mental health treatment.",
    "The Indiana Department of Correction contracts with ViaPath (GTL) for tablet and phone services. Tablets support the GettingOut messaging platform, and both in-person and video visits are booked through the ViaPath platform after the visitor is registered and approved. Phone service runs through GTL, with accounts managed on ConnectNetwork.",
    "Money is deposited to inmate trust accounts through JPay online and by phone. In-person visits require the visitor to be registered with ViaPath and on the inmate's approved list.",
  ],

  website: "https://www.in.gov/idoc/adult-facilities/wabash-valley-correctional-facility/",
  established: 1992,
  visitingHours: "Visits are scheduled in advance; confirm current options with the facility before traveling.",
  commissary: "Trust fund deposits through JPay online and by phone.",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
  operatedBy: "Indiana Department of Correction",

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
      notes: "ViaPath (GTL) provides tablets with GettingOut messaging, video visit scheduling, and the inmate phone system under the IDOC contract.",
    },
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
      notes: "JPay handles electronic money deposits to Indiana DOC inmate trust accounts.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "GettingOut messaging on ViaPath tablets. Messaging is a privilege restricted to designated recipients." },
    video: { status: "available", provider: "GTL", notes: "Video visits booked through the ViaPath platform after visitor registration and approval." },
    photos: { status: "available", provider: "GTL", notes: "Photo sharing through GettingOut on ViaPath tablets, subject to IDOC content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system. Fund through ConnectNetwork." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Trust fund deposits through JPay online and by phone." },
  },

  rules: [
    "Register with ViaPath and get approved before you can schedule in-person or video visits.",
    "Set up a GettingOut account for tablet messaging and a ConnectNetwork account for phone funds.",
    "Send money only through JPay or official IDOC methods. Never send cash.",
    "Mail must include the inmate's full name and DOC number and follow IDOC mail rules.",
    "All calls, messages, and visits are monitored under IDOC policy.",
  ],

  faq: [
    { question: "How do I schedule a visit at Wabash Valley Correctional Facility?", answer: "Register with ViaPath and receive approval first. Both in-person and video visits are then booked through the ViaPath platform. You must also be on the inmate's approved visitor list." },
    { question: "Can I message an inmate at Wabash Valley?", answer: "Yes. The GettingOut messaging platform on ViaPath tablets lets families and inmates exchange messages. Messaging is restricted to designated recipients." },
    { question: "How do phone calls work at Wabash Valley Correctional Facility?", answer: "Calls run through the GTL phone system. Set up an account on ConnectNetwork to fund calls to your inmate." },
    { question: "How do I send money to a Wabash Valley inmate?", answer: "Deposit to the inmate's trust account through JPay online or by phone. You will need the inmate's name and DOC number." },
    { question: "How do I find an inmate at Wabash Valley Correctional Facility?", answer: "Search the Indiana DOC offender locator by name or DOC number, or call the facility." },
    { question: "Can I call an inmate at Wabash Valley Correctional Facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through GTL (ViaPath)." },
    { question: "How do I stop or block calls from an inmate at Wabash Valley Correctional Facility?", answer: "Contact GTL (ViaPath) to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How do video visits work at Wabash Valley Correctional Facility?", answer: "Video visits are scheduled in advance through GTL. Confirm the current platform with the facility." },
    { question: "What custody levels does Wabash Valley Correctional Facility house?", answer: "Wabash Valley houses minimum, medium, and maximum security inmates, plus a special needs unit." },
  ],

  relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
  relatedFacilitySlugs: ["indiana-state-prison", "pendleton-correctional-facility", "marion-county-jail"],
},

"southern-ohio-correctional-facility": {
  id: "f-296",
  name: "Southern Ohio Correctional Facility",
  slug: "southern-ohio-correctional-facility",
  type: "state",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Scioto County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Southern Ohio Correctional Facility: GTL Calls Guide",
  seoDescription: "How to contact someone at Southern Ohio Correctional Facility in Lucasville OH. GTL phone calls, tablets, and visits.",

  description:
    "Southern Ohio Correctional Facility communication guide. GTL phone calls and tablet services for families of inmates in Lucasville OH.",

  overview: [
    "The Southern Ohio Correctional Facility (SOCF) is a maximum-security state prison in Lucasville, Ohio, operated by the Ohio Department of Rehabilitation and Correction. Opened in 1972, it houses Ohio's highest-security male inmates and is known for the 1993 Lucasville riot, one of the longest prison riots in US history.",
    "The Ohio Department of Rehabilitation and Correction contracts with GTL (ViaPath) for phone and tablet services. Tablets support messaging, photos, and other content, with services transitioning from JPay to ViaPath. Phone calls run through the GTL system, with accounts managed on ConnectNetwork.",
    "Money is deposited to inmate personal accounts through ConnectNetwork online and by phone, and only approved or tentatively approved visitors may send funds. In-person and video visits are available on scheduled days, and visitors must be approved in advance.",
  ],

  website: "http://www.drc.ohio.gov/socf",
  established: 1972,
  visitingHours: "Visits are scheduled through the ViaPath (GTL) visitation reservation system; hours vary by housing unit.",
  rosterUrl: "https://appgateway.drc.ohio.gov/OffenderSearch",
  commissary: "Deposits through ConnectNetwork online and by phone. Only approved or tentatively approved visitors may send funds.",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
  operatedBy: "Ohio Department of Rehabilitation and Correction",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: true,
      video: false,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "GTL (ViaPath) provides the phone system and tablets with messaging and photos at SOCF. Content is transitioning from JPay to ViaPath.",
    },
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
      notes: "ConnectNetwork accepts deposits to ODRC inmate personal accounts online and by phone, for approved visitors only.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Tablet messaging through GTL (ViaPath) services, subject to ODRC content rules." },
    video: { status: "limited", provider: undefined, notes: "Video visits are reported as available. Confirm the current scheduling platform with the institution." },
    photos: { status: "available", provider: "GTL", notes: "Photo sharing through GTL tablet services, subject to ODRC content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system. Fund through ConnectNetwork." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposits through ConnectNetwork online and by phone. Only approved or tentatively approved visitors may send funds." },
  },

  rules: [
    "Only approved or tentatively approved visitors may send money to an inmate's account.",
    "Deposits go through ConnectNetwork. Never send cash.",
    "Visits must be approved and scheduled in advance. Confirm current visiting days with the institution.",
    "Mail must include the inmate's full name and offender number and follow ODRC mail rules.",
    "All calls, messages, and visits are monitored under ODRC policy.",
  ],

  faq: [
    { question: "How do phone calls work at Southern Ohio Correctional Facility?", answer: "Calls run through the GTL phone system. Set up an account on ConnectNetwork to fund calls to your inmate." },
    { question: "How do I send money to an SOCF inmate?", answer: "Deposit through ConnectNetwork online or by phone at 1-888-988-4768. Only approved or tentatively approved visitors may send funds, and deposits are limited per transaction and per month." },
    { question: "Can I visit someone at Southern Ohio Correctional Facility?", answer: "Yes. In-person and video visits are available on scheduled days, but you must be an approved visitor first. Confirm current visiting days with the institution." },
    { question: "Can I message an inmate at SOCF?", answer: "Tablet messaging is available through GTL (ViaPath) services as Ohio transitions content from JPay to ViaPath." },
    { question: "How do I find an inmate at Southern Ohio Correctional Facility?", answer: "Use the Ohio DRC offender search with the inmate's name or offender number. It shows current Ohio prison inmates, including their facility and sentence details." },
    { question: "Can I call an inmate at Southern Ohio Correctional Facility?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through GTL (ViaPath)." },
    { question: "How do I stop or block calls from an inmate at Southern Ohio Correctional Facility?", answer: "Contact GTL (ViaPath) to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "How do video visits work at Southern Ohio Correctional Facility?", answer: "Video visits are scheduled through the ViaPath (GTL) visitation reservation system. Confirm your window with the facility." },
    { question: "What is Southern Ohio Correctional Facility known for?", answer: "SOCF is Ohio's highest-security male prison and the site of the 1993 Lucasville riot. It houses Ohio's highest-security male inmates." },
  ],

  relatedFacilitySlugs: ["ohio-state-penitentiary", "chillicothe-correctional-institution", "cuyahoga-county-jail"],
},

"maryland-correctional-institution-hagerstown": {
  id: "f-297",
  name: "Maryland Correctional Institution Hagerstown",
  slug: "maryland-correctional-institution-hagerstown",
  type: "state",
  stateSlug: "maryland",
  stateName: "Maryland",
  stateAbbr: "MD",
  countySlug: null,
  countyName: "Washington County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "MCI Hagerstown: GTL Calls and Visits Guide",
  seoDescription: "How to contact someone at Maryland Correctional Institution Hagerstown. GTL phone calls and visitation rules.",

  description:
    "Maryland Correctional Institution Hagerstown communication guide. GTL phone calls and visitation rules for families in Hagerstown MD.",

  overview: [
    "The Maryland Correctional Institution in Hagerstown (MCI-H) is a medium-security state prison for men in Hagerstown, Maryland, operated by the Maryland Department of Public Safety and Correctional Services. Opened in 1942 as the Maryland State Penal Farm, it focuses on rehabilitation and reentry programming with a capacity of 2,179.",
    "Inmate telephone service in Maryland state prisons is provided by GTL, the department's current telephone vendor. Families set up accounts through GTL's consumer platforms to receive and fund calls from inmates.",
    "Money is deposited to inmate accounts through ConnectNetwork, the platform used for Maryland DOC electronic deposits. In-person visits are held on weekends, and visitors must follow the facility's dress code and registration rules.",
  ],

  inmateCapacity: 2179,
  established: 1942,
  visitingHours: "Visits are scheduled by housing unit; confirm with the facility before traveling.",
  commissary: "Electronic deposits to inmate accounts through ConnectNetwork.",
  bailInfo: "No bail process: this facility holds sentenced inmates, not pretrial detainees. Bail and pretrial release are handled by the courts before sentencing.",
  operatedBy: "Maryland Department of Public Safety and Correctional Services",

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
      notes: "GTL is the telephone services vendor for Maryland Department of Public Safety and Correctional Services facilities.",
    },
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
      notes: "ConnectNetwork is used for electronic deposits to Maryland DOC inmate accounts.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging not confirmed. Confirm current options with the facility." },
    video: { status: "limited", provider: undefined, notes: "Video visitation not confirmed. Confirm current visit options with the institution." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing not confirmed. Physical photos by mail are subject to DPSCS content rules." },
    phone: { status: "available", provider: "GTL", notes: "Outgoing calls through the GTL phone system. Fund through GTL's consumer platforms." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Electronic deposits to inmate accounts through ConnectNetwork." },
  },

  rules: [
    "Set up a GTL account to receive and fund calls from the inmate.",
    "Send money only through ConnectNetwork or other official DPSCS methods. Never send cash.",
    "In-person visits are held on weekends. Register by the facility's cutoff time and follow the dress code.",
    "Mail must include the inmate's full name and inmate number and follow DPSCS mail rules.",
    "All calls and visits are monitored under DPSCS policy.",
  ],

  faq: [
    { question: "How do phone calls work at MCI Hagerstown?", answer: "Calls run through GTL, the telephone vendor for Maryland state prisons. Set up an account through GTL's consumer platforms to receive and fund calls." },
    { question: "How do I send money to an MCI Hagerstown inmate?", answer: "Electronic deposits go through ConnectNetwork, the platform used for Maryland DOC inmate accounts." },
    { question: "Can I visit someone at MCI Hagerstown?", answer: "Yes. In-person visits are held on Saturdays and Sundays, and visitors must register by the cutoff time and follow the dress code and facility rules." },
    { question: "Can I message an inmate at MCI Hagerstown?", answer: "Electronic messaging is not confirmed for this facility. Confirm current options with the institution before assuming messaging is available." },
    { question: "How do I find an inmate at Maryland Correctional Institution Hagerstown?", answer: "Search the Maryland DPSCS inmate locator by name or inmate number, or call the facility." },
    { question: "Can I call an inmate at Maryland Correctional Institution Hagerstown?", answer: "No. Inmates make outgoing calls only; you cannot call an inmate directly. Phone calls run through GTL (ViaPath)." },
    { question: "How do I stop or block calls from an inmate at Maryland Correctional Institution Hagerstown?", answer: "Contact GTL (ViaPath) to block calls from the facility, or ask the inmate to remove your number from their approved call list." },
    { question: "Does Maryland Correctional Institution Hagerstown offer video visits?", answer: "Video visitation availability is not confirmed for this facility. Call the facility to ask about current visit options before creating any account." },
    { question: "What is Maryland Correctional Institution Hagerstown known for?", answer: "MCI Hagerstown opened in 1942 as the Maryland State Penal Farm. It focuses on rehabilitation and reentry programming." },
  ],

  relatedFacilitySlugs: ["maryland-correctional-institution-jessup", "fci-cumberland", "essex-county-correctional-facility"],
},

}
