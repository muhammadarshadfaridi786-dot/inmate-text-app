import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS, Batch 6 (25 facilities, Phase 2 expansion)
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH6: Record<string, FacilityDetail> = {

"lubbock-county-detention-center": {
  id: "f-223",
  name: "Lubbock County Detention Center",
  slug: "lubbock-county-detention-center",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Lubbock County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Lubbock County Detention Center: Phone and Visit Guide",
  seoDescription: "How to contact someone at Lubbock County Detention Center in Lubbock TX. ICSolutions for phone calls. Smart Communications for video visits and messaging.",

  description:
    "Lubbock County Detention Center communication guide. Find ICSolutions phone options and Smart Communications video visits and messaging for this Lubbock TX county jail.",

  overview: [
    "The Lubbock County Detention Center is the county jail for Lubbock County, Texas, operated by the Lubbock County Sheriff's Office. Located at 3502 N. Holly in Lubbock, it houses pretrial detainees and sentenced inmates for the county, and families can look up current inmates on the sheriff's online jail roster.",
    "Communication here runs through two separate vendors, which is the part families most often mix up. Phone calls go through ICSolutions: create an account at icsolutions.com or call 1-888-506-8407 before the first call, and note that money put on the phone-only account cannot be used for anything else. Video visits and text messaging go through Smart Communications: register as a public user at smartinmate.com, send a connection request the inmate must accept, and schedule visits at least 24 hours ahead. Inmates receive messages as emails on their tablets, and postal mail is scanned into the same tablet system through Smart Communications MailGuard.",
    "Money for commissary, tablet and phone use can be added through AccessCorrections at accesscorrections.com or 1-866-345-1884 (facility number 20172), or in cash at the lobby kiosk. Care packages go through Access Securepak. For general questions, the detention center can be reached at 806-775-7009.",
  ],

  address: "3502 N. Holly Avenue, Lubbock, TX 79408",
  phone: "806-775-7009",
  website: "https://lubbocksheriff.com/f-a-q",
  operatedBy: "Lubbock County Sheriff's Office",
  mailingAddress: "Inmate Name and SO Number, Lubbock County Detention Center, PO Box 9136, Seminole, FL 33775. Regular mail is scanned by Smart Communications MailGuard and delivered to tablets and kiosks. Send legal mail, court documents, bank statements, and publications to Inmate Name and SO Number, PO Box 10535, Lubbock, TX 79408, with a return address.",
  visitingHours: "Visitation runs 8:00 AM to 10:00 PM, with the last visit starting no later than 9:30 PM. One adult visitor per visit plus up to two children, and one visit per inmate per day. Schedule Smart Communications visits at smartinmate.com at least 24 hours ahead.",
  rosterUrl: "https://publicrecords.lubbockcounty.gov",
  commissary: "Commissary, tablet, and phone funds go through AccessCorrections at accesscorrections.com or 1-866-345-1884, with lobby kiosks available. Phone-only funds go through ICSolutions at icsolutions.com or 1-888-506-8407. Care packages are ordered through Access Securepak at accesssecurepak.com.",
  bailInfo: "After the magistrate sets bond, post the full bond amount at the Bond Window or work with a surety company. Bond settings appear on the jail roster.",

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
      moneyTransfer: true,
      notes: "Inmate phone accounts. Fund at icsolutions.com or 1-888-506-8407. Money sent as phone-only cannot be used for commissary.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Smart Communications", notes: "Text messages through smartinmate.com; inmates receive them as emails on tablets. Fund with SmartInmate credits, or the inmate can send collect messages you pay for on reading." },
    video: { status: "available", provider: "Smart Communications", notes: "On-site and remote video visits scheduled through smartinmate.com after the facility approves your registration. Remote visits carry a fee." },
    photos: { status: "limited", provider: undefined, notes: "Photos move through the tablet messaging system. Ask the jail about current picture-message options." },
    phone: { status: "available", provider: "ICSolutions", notes: "Prepaid and collect calls through ICSolutions. Set up an account before the first call." },
    moneyTransfer: { status: "available", provider: "AccessCorrections", notes: "Fund commissary, tablet and phone accounts at accesscorrections.com (facility 20172), by phone at 1-866-345-1884, or at the lobby kiosk." },
  },

  rules: [
    "Register at smartinmate.com and get approved by the facility before you try to schedule a visit. Approval typically takes about 24 hours.",
    "Visits must be scheduled at least 24 hours in advance. Visitors get one on-site visit per inmate per day.",
    "Keep phone money and commissary money separate. Funds sent through icsolutions.com as phone-only cannot buy commissary items.",
    "Regular postal mail is scanned electronically and delivered to tablets. Send legal mail, court documents and publications to the facility directly at P.O. Box 10535, Lubbock, TX 79408.",
    "All visits and calls are monitored. Bring a valid government-issued photo ID and follow the posted dress code.",
  ],

  faq: [
    { question: "How do I schedule a video visit at Lubbock County Detention Center?", answer: "Register as a public user at smartinmate.com from a phone, computer or the jail kiosk. Send a connection request that the inmate must accept, submit your photo ID for facility approval, then schedule the visit at least 24 hours ahead." },
    { question: "Which company handles phone calls at Lubbock County Detention Center?", answer: "ICSolutions. Create a prepaid account at icsolutions.com or call 1-888-506-8407. For a blocked number, call IC Solutions at 1-866-228-4031 during business hours." },
    { question: "How do I add money to an inmate's account?", answer: "Use a card at accesscorrections.com or call 1-866-345-1884 with facility number 20172, or deposit cash at the kiosk in the jail lobby. Phone-only funds go through icsolutions.com instead." },
    { question: "How does mail work at Lubbock County Detention Center?", answer: "Regular letters and postcards are scanned by Smart Communications MailGuard and delivered to the inmate's tablet. Legal mail and publications still go directly to the facility at P.O. Box 10535, Lubbock, TX 79408, with the inmate's name and SO number." },
    { question: "Can I send a care package?", answer: "Yes, through Access Securepak at accesssecurepak.com. Order online and the package is delivered to the inmate at the detention center." },
    { question: "How do I unblock or block a number for Lubbock County Detention Center calls?", answer: "For a blocked number, call IC Solutions at 1-866-228-4031, Monday through Friday 8:00 AM to 5:00 PM Pacific, or call the jail at 806-775-7166 or 806-775-7167. To block calls, ask IC Solutions to block the number or block it through your own carrier." },
    { question: "What is an inmate-initiated video visit (VOD) at Lubbock County Detention Center?", answer: "The inmate can start a video-on-demand visit. You have 3 minutes to connect, and the inmate gets a maximum of 5 attempts per day. Special housing inmates should call 806-775-7019 for visit options." },
    { question: "How do I pick up an inmate's property at Lubbock County Detention Center?", answer: "Property pickup runs through the Bond Window. The inmate must authorize the release, and valuable property is released all at once, not piece by piece. Confirm hours and ID requirements with the jail before going." },
    { question: "How does bond work at Lubbock County Detention Center?", answer: "After the magistrate sets bond, post the full bond amount at the Bond Window or work with a surety company. Bond settings appear on the jail roster." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "dallas-county-jail", "bexar-county-adult-detention-center"],
},

"tarrant-county-jail": {
  id: "f-224",
  name: "Tarrant County Jail",
  slug: "tarrant-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Tarrant County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Tarrant County Jail: Phone, Video and Messaging Guide",
  seoDescription: "How to contact someone at Tarrant County Jail in Fort Worth TX. Smart Communications for phone calls, video visits and SmartJailMail messaging.",

  description:
    "Tarrant County Jail communication guide. Smart Communications handles phones, video visitation and SmartJailMail messaging across the Tarrant County jail system.",

  overview: [
    "Tarrant County operates one of the largest jail systems in Texas, with facilities in Fort Worth including the Tim Curry Criminal Justice Center, the Lon Evans Corrections Center and the Green Bay Facility, all run by the Tarrant County Sheriff's Office. The main jail address is 100 N. Lamar Street in Fort Worth, and inmates are housed across these facilities depending on classification.",
    "In October 2024 the sheriff's office announced Smart Communications as its official inmate communications provider, replacing the previous mix of vendors. Phone calls, video visitation and digital messaging all run on the SmartEco platform. Inmates use tablets for SmartJailMail two-way electronic messaging and for remote video visits, and families manage everything through one account at smartinmate.com.",
    "Money can be added to inmate accounts through JailATM online deposits, lobby kiosks, or money orders mailed to the inmate trust fund. Because Tarrant County runs several jail buildings, confirm which facility your loved one is housed in before setting up accounts or planning a visit. The jail's main information line is (817) 884-3116.",
  ],

  address: "100 N. Lamar Street, Fort Worth, TX 76196",
  phone: "(817) 884-3116",
  visitingHours: "Visits by inmate last name: A to L on Monday and Saturday 9:00 AM to 9:00 PM, plus Friday 9:00 AM to 3:00 PM; M to Z on Tuesday and Sunday 9:00 AM to 9:00 PM, plus Friday 3:00 PM to 9:00 PM. Visitor sign-up begins 30 minutes before visiting hours.",
  operatedBy: "Tarrant County Sheriff's Office",

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
      notes: "Smart Communications is the official inmate communications provider, per the Sheriff's Office announcement (Oct 2024). Phone calls, video visitation and digital messaging run on the SmartEco platform.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Smart Communications", notes: "SmartJailMail two-way electronic messaging on inmate tablets. Register at smartinmate.com and connect with the inmate." },
    video: { status: "available", provider: "Smart Communications", notes: "On-site and remote video visitation through the SmartEco platform. Schedule visits in advance." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing may be available through the tablet messaging system. Confirm current options with the jail." },
    phone: { status: "available", provider: "Smart Communications", notes: "Prepaid and collect calls on the SmartEco phone system." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through JailATM online, lobby kiosks, or mailed money orders. Confirm current options with the sheriff's office before sending money." },
  },

  rules: [
    "Create your Smart Communications account at smartinmate.com before messaging, visiting or taking calls.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Video visits must be scheduled in advance through the Smart Communications system.",
    "All calls, messages and visits are monitored and recorded, except privileged attorney communication.",
    "Confirm which Tarrant County facility houses your loved one before setting up accounts, since the county runs several jail buildings.",
  ],

  faq: [
    { question: "Which company handles inmate communication at Tarrant County Jail?", answer: "Smart Communications. The sheriff's office selected it as the official provider in October 2024, covering phone calls, video visitation and SmartJailMail messaging on the SmartEco platform." },
    { question: "How do I message an inmate at Tarrant County Jail?", answer: "Register at smartinmate.com, connect with the inmate, and use SmartJailMail on their tablet for two-way electronic messaging." },
    { question: "How do video visits work at Tarrant County Jail?", answer: "Video visits run through Smart Communications, both on-site at the jail and remotely from home. Schedule through your smartinmate.com account in advance." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through JailATM online, the lobby kiosks, or money orders mailed to the inmate trust fund. Call (817) 884-3116 to confirm the current deposit method." },
  ],

  relatedFacilitySlugs: ["dallas-county-jail", "harris-county-jail"],
},

"travis-county-correctional-complex": {
  id: "f-225",
  name: "Travis County Correctional Complex",
  slug: "travis-county-correctional-complex",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Travis County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Travis County Jail: GettingOut Tablets and Phone Guide",
  seoDescription: "How to contact someone at Travis County Correctional Complex in Del Valle TX. GettingOut tablets for messaging and video. ViaPath for visit scheduling.",

  description:
    "Travis County Correctional Complex communication guide. GettingOut wireless tablets for messaging and video visits, plus ViaPath visit scheduling, at this Del Valle TX jail.",

  overview: [
    "The Travis County Correctional Complex (TCCC) in Del Valle, Texas, is the main jail facility for Travis County, operated by the Travis County Sheriff's Office and serving the Austin area. All TCCC and Travis County Jail on-site visits are administered at the Del Valle complex at 3614 Bill Price Road.",
    "The sheriff's office issues wireless tablets to inmates through GettingOut, which provide messaging, video visits and multimedia content like education and vocational training. Families create an account at gettingout.com to message and fund tablet use. Face-to-face visits and on-site video visits are scheduled separately through ViaPath Technologies, the GTL visit-scheduling platform, at gtlvisitme.com, at least 24 hours in advance.",
    "Phone calls run on the ViaPath/GTL phone system, with prepaid AdvancePay accounts available for families. Visitors are allowed two visits per week, face-to-face or on-site video, and must arrive at least 30 minutes early with a government-issued photo ID. The sheriff's office main line is (512) 854-9770.",
  ],

  address: "3614 Bill Price Road, Del Valle, TX 78617",
  phone: "(512) 854-9770",
  website: "https://tcsheriff.org/inmate-jail-info/inmate-info/visit-an-inmate",
  operatedBy: "Travis County Sheriff's Office",
  visitingHours: "Onsite visits run Wednesday through Sunday, excluding county holidays, 8:00 AM to 9:00 PM for both face-to-face and onsite video visits. Inmates get two onsite visits per week. Arrive 30 minutes early; check-in ends 15 minutes before the visit. At-home video visits run through GettingOut.",

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
      notes: "ViaPath Technologies is the GTL platform used for the jail phone system and visit scheduling at gtlvisitme.com.",
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
      notes: "Wireless tablets with messaging and multimedia content, plus at-home video visitation, through gettingout.com.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Two-way messaging on GettingOut tablets. Create an account at gettingout.com." },
    video: { status: "available", provider: "GettingOut", notes: "At-home video visits through GettingOut. On-site video and face-to-face visits are scheduled through ViaPath at gtlvisitme.com." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo and multimedia sharing on GettingOut tablets." },
    phone: { status: "available", provider: "GTL", notes: "Prepaid and collect calls on the ViaPath/GTL phone system." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Commissary deposits are available. Confirm the current deposit vendor with the sheriff's office before sending money." },
  },

  rules: [
    "Schedule face-to-face and on-site video visits at least 24 hours in advance through ViaPath at gtlvisitme.com.",
    "Create a GettingOut account at gettingout.com for tablet messaging and at-home video visits.",
    "Arrive at least 30 minutes before your scheduled visit. Late check-ins are not accepted.",
    "Bring a government-issued photo ID. Minors under 17 must be accompanied by a parent or guardian.",
    "Follow the conservative dress code. Inappropriate clothing will get your visit denied.",
  ],

  faq: [
    { question: "How do I message an inmate at Travis County Correctional Complex?", answer: "Create an account at gettingout.com. Inmates have wireless GettingOut tablets that support messaging and multimedia content." },
    { question: "How do I schedule a visit?", answer: "Face-to-face and on-site video visits are scheduled at least 24 hours ahead through ViaPath Technologies at gtlvisitme.com. At-home video visits go through your GettingOut account." },
    { question: "How do phone calls work at Travis County Correctional Complex?", answer: "Calls run on the ViaPath/GTL phone system. Families can set up prepaid AdvancePay accounts so the inmate can call them." },
    { question: "Where do visits take place?", answer: "All TCCC and Travis County Jail on-site visits are administered at the TCCC Del Valle complex, 3614 Bill Price Road, Del Valle, TX 78617. Visitation hours are 8:00 am to 9:00 pm, Wednesday through Sunday." },
    { question: "What is the difference between a face-to-face visit and an onsite video visit at TCCC?", answer: "Both happen at the TCCC Visitation Center in Del Valle, up to two visits per week. Face-to-face visits are non-contact, and onsite video visits use a kiosk. Both must be scheduled at least 24 hours ahead through ViaPath at gtlvisitme.com." },
    { question: "How many visits can an inmate get per week at TCCC?", answer: "Two onsite visits per week, either face-to-face or onsite video. At-home video visits through GettingOut are separate." },
    { question: "What ID do I need to visit at TCCC?", answer: "Visitors 17 and older need a government-issued photo ID. Minors under 17 must come with a parent or guardian. A maximum of two visitors is allowed, or three if one is a child under 12." },
    { question: "What happens if I arrive late for a visit at TCCC?", answer: "Arrive 30 minutes early. Check-in ends 15 minutes before the visit, and late arrivals are not accepted." },
    { question: "Are video relay services available for deaf or hard-of-hearing visitors at TCCC?", answer: "Yes. Video Relay Services for deaf and hard-of-hearing visitors are available through ViaPath kiosks at no extra charge." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "bexar-county-adult-detention-center", "dallas-county-jail"],
},

"el-paso-county-detention-facility": {
  id: "f-226",
  name: "El Paso County Detention Facility",
  slug: "el-paso-county-detention-facility",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "El Paso County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "El Paso County Jail: GTL Phones and GettingOut Guide",
  seoDescription: "How to contact someone at the El Paso County Detention Facility in El Paso TX. ViaPath/GTL for phones and tablets. GettingOut for remote video visits.",

  description:
    "El Paso County Detention Facility communication guide. ViaPath/GTL for phone calls and tablets, plus GettingOut remote video visitation, at this El Paso TX jail.",

  overview: [
    "The El Paso County Detention Facility is the downtown jail for El Paso County, Texas, operated by the El Paso County Sheriff's Office at 601 E. Overland Avenue in El Paso. The county also operates the Jail Annex on Montana Avenue, so confirm which building your loved one is in before setting up accounts.",
    "Phones, messaging and tablets run on ViaPath, the GTL platform. Families open an AdvancePay prepaid account so inmates can call them, and messaging runs through the GettingOut apps on the jail's tablets. Remote video visitation from home is also handled through GettingOut: create an account, add funds, select the facility and the inmate, then schedule the visit.",
    "Deposits to inmate accounts are reported through JailATM online, the lobby kiosk, or by phone, and money orders can be mailed to the facility. Because provider contracts can change, call the facility at 915-273-3770 if the GettingOut or ViaPath setup does not list your inmate.",
  ],

  address: "601 E. Overland Avenue, El Paso, TX 79901",
  phone: "915-273-3770",
  operatedBy: "El Paso County Sheriff's Office",

  providers: [
    {
      name: "GTL",
      slug: "gtl",
      initial: "G",
      color: "bg-amber-600",
      messaging: true,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "ViaPath is the GTL platform running the jail's phones, messaging and tablets. AdvancePay prepaid accounts for calls.",
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
      notes: "Remote video visitation from home, plus email, photo and video sharing through the GettingOut apps and kiosks.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Email and messaging through the GettingOut apps on ViaPath/GTL tablets." },
    video: { status: "available", provider: "GettingOut", notes: "Remote video visits from home, a computer or the GettingOut apps. Schedule at least 24 hours ahead." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo and video sharing through GettingOut." },
    phone: { status: "available", provider: "GTL", notes: "Prepaid AdvancePay and collect calls on the ViaPath/GTL phone system. The inmate calls you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Online deposits are reported through JailATM, plus lobby kiosks and mailed money orders. Confirm current options with the sheriff's office." },
  },

  rules: [
    "Confirm whether your loved one is at the downtown detention facility or the Jail Annex before setting up accounts.",
    "Create your GettingOut account and add funds before trying to schedule a remote video visit.",
    "Inmates cannot receive incoming calls. Set up an AdvancePay account so they can call you.",
    "All calls, messages and video visits are monitored and recorded.",
    "If the facility does not appear in the GettingOut or ViaPath listings, call the jail at 915-273-3770. Contracts do change.",
  ],

  faq: [
    { question: "Which company handles phone calls at El Paso County Detention Facility?", answer: "ViaPath, the GTL platform. Open an AdvancePay prepaid account so the inmate can call your number, or accept collect calls." },
    { question: "How do remote video visits work?", answer: "Through GettingOut. Create an account at gettingout.com, add funds, select the El Paso County facility and the inmate, then schedule the visit at least 24 hours in advance." },
    { question: "Can inmates message from tablets?", answer: "Yes. The jail's tablets run GettingOut, which supports email, photo and video sharing alongside messaging." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through JailATM online, the lobby kiosk, or by phone. Money orders can also be mailed. Confirm the current method with the sheriff's office before sending." },
      {
        question: "How do I find or search for an inmate at El Paso County Detention Facility?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for El Paso County, Texas. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at El Paso County Detention Facility?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at El Paso County Detention Facility?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at El Paso County Detention Facility?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at El Paso County Detention Facility?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["harris-county-jail", "dallas-county-jail", "bexar-county-adult-detention-center"],
},

"hidalgo-county-jail": {
  id: "f-227",
  name: "Hidalgo County Jail",
  slug: "hidalgo-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Hidalgo County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hidalgo County Jail: Phone and Visitation Guide",
  seoDescription: "How to contact someone at Hidalgo County Jail in Edinburg TX. Phone, video visitation and commissary deposit options for this Rio Grande Valley jail.",

  description:
    "Hidalgo County Jail communication guide. Phone, video visitation and deposit options for families of inmates at this Edinburg TX county jail.",

  overview: [
    "Hidalgo County Jail, also called the Hidalgo County Detention Center, is the county jail for Hidalgo County in Edinburg, Texas, operated by the Hidalgo County Sheriff's Office. It serves the Rio Grande Valley and houses pretrial detainees and sentenced inmates.",
    "Phone and video vendors are not named on the county pages checked, so families should confirm the phone and video provider directly with the jail before creating any paid account. Deposits to inmate trust accounts go through Access Corrections: the county site's Inmate Trust Account link points to accesscorrections.com.",
    "Visitation runs on a housing-unit schedule published by the county, with morning and afternoon sessions on weekdays and shorter weekend hours. As with any county jail, call ahead to confirm current visitation times and the correct vendor before traveling or funding an account.",
  ],

  website: "https://www.hidalgocounty.us/3007/Detention",
  operatedBy: "Hidalgo County Sheriff's Office",
  visitingHours: "Visitation runs in two daily blocks, generally 8:00 AM to 2:00 PM and 3:00 PM to 9:00 PM, with days and sections assigned by housing unit: Saturday 8:00 AM to 2:00 PM is Delta Section, and Sunday 3:00 PM to 9:00 PM is Delta Section. Confirm the inmate's section schedule on the county Detention page before traveling.",
  commissary: "Friends and family can deposit funds to an inmate trust account in multiple ways; see the county Detention page for the deposit options.",
  // TODO(Jan): verify provider

  providers: [
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
      notes: "Inmate Trust Account link on the county site points to Access Corrections.",
    },
  ],

  communication: {
    messaging: { status: "limited", notes: "Messaging options are not confirmed. Ask the jail which vendor, if any, handles electronic messages." },
    video: { status: "limited", notes: "Video visitation availability is not confirmed. Check the county detention page or call the jail." },
    photos: { status: "limited", notes: "Photo sharing options are not confirmed. Confirm with the jail." },
    phone: { status: "limited", notes: "Phone vendor is not confirmed. Confirm the current provider with the jail before creating a prepaid account." },
    moneyTransfer: { status: "available", provider: "Access Corrections", notes: "Inmate Trust Account link on the county site points to Access Corrections. Confirm the current method before sending money." },
  },

  rules: [
    "Confirm the current phone and video vendor with the jail before creating any paid account. Phone and video vendors are not named on the county pages checked.",
    "Bring a valid government-issued photo ID for any visit.",
    "Follow the posted dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
    "Check the county's published housing-unit visitation schedule before traveling, since hours vary by unit.",
  ],

  faq: [
    { question: "Which company handles phone calls at Hidalgo County Jail?", answer: "The current vendor is not confirmed. Published sources name different providers, so call the jail or check the official county detention page before creating a prepaid account." },
    { question: "How do I visit an inmate at Hidalgo County Jail?", answer: "Visitation follows a housing-unit schedule published by the county, with morning and afternoon sessions. Confirm the current schedule and any registration requirements before traveling." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits to inmate trust accounts go through Access Corrections: the county site's Inmate Trust Account link points to accesscorrections.com. Confirm the current method there before sending money." },
    { question: "How do I find the right visiting day for an inmate at Hidalgo County Jail?", answer: "Visiting days depend on the inmate's housing section. Check the section schedule on the county Detention page and confirm the inmate's section before traveling." },
    { question: "How do I send mail to an inmate at Hidalgo County Jail?", answer: "Address mail to the inmate's full name and booking number at the Hidalgo County Detention Center. Include a return address." },
    { question: "How do I deposit money to an inmate trust account at Hidalgo County Jail?", answer: "Use Access Corrections for inmate trust account deposits, via the county site's Inmate Trust Account link. Confirm the current method there before sending money." },
    { question: "Can I call an inmate at Hidalgo County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I find out if someone is in custody at Hidalgo County Jail?", answer: "Use the county jail records search by first and last name or booking number. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "What happens if I show up for a visit without checking the section schedule?", answer: "You may be turned away, because visiting days and blocks are assigned by housing section. Confirm the section and block on the county Detention page before traveling." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "bexar-county-adult-detention-center", "dallas-county-jail"],
},

"carrizales-rucker-cameron-county-detention-center": {
  id: "f-228",
  name: "Carrizales-Rucker Cameron County Detention Center",
  slug: "carrizales-rucker-cameron-county-detention-center",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Cameron County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cameron County Jail: NCIC Phones and Video Guide",
  seoDescription: "How to contact someone at the Carrizales-Rucker Detention Center in Olmito TX. NCIC for prepaid calls, video visits and messaging.",

  description:
    "Cameron County Jail communication guide. NCIC prepaid phone calls, video visits and messaging at the Carrizales-Rucker Detention Center in Olmito TX.",

  overview: [
    "The Carrizales-Rucker Cameron County Detention Center in Olmito, Texas, is the main county jail for Cameron County, operated by the Cameron County Sheriff's Office at 7300 Old Alice Road. It houses pretrial detainees and sentenced inmates for the county, alongside the smaller downtown jail in Brownsville.",
    "All inmate communication runs through NCIC Inmate Communications on a single prepaid account, which the county's own jail division page describes in detail. Prepaid calling has no connection fees and no incoming calls except voicemail. Video visits from home cost $0.30 per minute, messages cost $0.25 each, and picture or video messages cost $0.35 each, with no limit on how many can be sent. Create and fund the account at account.ncic.com or by calling 1-800-943-2189.",
    "Money for an inmate's trust fund is accepted by money order or certified check mailed to the jail's trust fund address. Property pickup for released inmates happens at the jail on Mondays, Tuesdays and Fridays. Call (956) 554-6701 for current visitation days and times, which the sheriff sets and can change.",
  ],

  address: "7300 Old Alice Road, Olmito, TX 78575",
  phone: "(956) 554-6701",
  website: "https://www.cameroncountytx.gov/jail-division/",
  operatedBy: "Cameron County Sheriff's Office",
  callRates: "Video visits $0.30 per minute, messages $0.25 per message, picture and video messages $0.35 each, through NCIC. Phone calls are billed per minute with no connection fees.",
  commissary: "Commissary is provided through FS and More Commissary. Trust fund deposits are by mailed money order or certified check only, payable to the inmate, sent to Cameron County Jail Division, CO Inmate Trust Fund, with the inmate name and ID number, P.O. Box 1539, Olmito, TX 78575. No cash is accepted.",
  providers: [
    {
      name: "NCIC",
      slug: "ncic",
      initial: "N",
      color: "bg-rose-600",
      messaging: true,
      video: true,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "NCIC Inmate Communications provides prepaid phone service, messaging, and video visits at the Carrizales-Rucker Detention Center. Fund accounts at account.ncic.com or 1-800-943-2189.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Text messages at $0.25 each and picture or video messages at $0.35 each through your NCIC prepaid account. Inmates receive them instantly." },
    video: { status: "available", provider: "NCIC", notes: "Video visits from home at $0.30 per minute through account.ncic.com. Fund with the same prepaid account used for calls." },
    photos: { status: "available", provider: "NCIC", notes: "Picture messages at $0.35 each through the NCIC system." },
    phone: { status: "available", provider: "NCIC", notes: "Prepaid calling with per-minute billing and no connection fees. No incoming calls except voicemail." },
    moneyTransfer: { status: "available", notes: "Money orders or certified checks mailed to Cameron County Jail Division, CO Inmate Trust Fund, P.O. Box 1539, Olmito, TX 78575. No cash accepted by mail." },
  },

  rules: [
    "One NCIC prepaid account covers calls, video visits and messages. Fund it at account.ncic.com or 1-800-943-2189.",
    "Three-way calls are prohibited, and international calls are billed per minute.",
    "Video visits from home cost $0.30 per minute. Messages cost $0.25 and picture messages $0.35.",
    "Only money orders or certified checks are accepted through the mail for the inmate trust fund. No cash.",
    "Call (956) 554-6701 for current visitation days and times, since the sheriff can change them.",
  ],

  faq: [
    { question: "Which company handles communication at Cameron County Jail?", answer: "NCIC Inmate Communications. One prepaid account at account.ncic.com covers phone calls, video visits and messaging." },
    { question: "How much do video visits cost?", answer: "Video visits from home cost $0.30 per minute, funded through your NCIC prepaid account. Messages cost $0.25 each and picture or video messages cost $0.35 each." },
    { question: "How do I add money to an inmate's trust fund?", answer: "Mail a money order or certified check, made payable to the inmate, to Cameron County Jail Division, CO Inmate Trust Fund, P.O. Box 1539, Olmito, TX 78575. Cash is not accepted." },
    { question: "Can inmates receive incoming calls?", answer: "No. Inmates get telephone access after booking for outgoing calls only. The one exception is voicemail messages to approved inmates." },
    { question: "How do I pick up an inmate's property at the Carrizales-Rucker Detention Center?", answer: "Family clothing pickup is Monday, Tuesday, and Friday, 8:00 AM to 4:00 PM. People released from Carrizales get their property only if released before 5:00 PM, otherwise the next business day. TDCJ transfers have 30 days to pick up property, Monday through Friday, 8:00 AM to 4:00 PM." },
    { question: "What ID do I need to visit at the Carrizales-Rucker Detention Center?", answer: "Adult visitors need a valid photo ID, such as a Texas driver license or DPS ID, a passport, a military ID, a US immigration visa, a border crossing card, or a Matricula Consular." },
    { question: "Can I get medical information about an inmate at the Carrizales-Rucker Detention Center?", answer: "No. The facility does not release medical information to families. Prescribed medicine is allowed only with medical department approval, and family calls are not transferred to medical staff." },
    { question: "Can an inmate release money to family or an attorney?", answer: "Yes, with Shift Supervisor approval. Inmates can release money to family members, an attorney, or a bonds person." },
    { question: "Can inmates at the Carrizales-Rucker Detention Center make international calls?", answer: "Yes. Phones in each housing area support local and long-distance calls billed per minute with no connection fees, and international calls billed per minute. Three-way calls are prohibited." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "dallas-county-jail", "bexar-county-adult-detention-center"],
},

"nueces-county-jail": {
  id: "f-229",
  name: "Nueces County Jail",
  slug: "nueces-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Nueces County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Nueces County Jail: ICSolutions Phone Guide",
  seoDescription: "How to contact someone at Nueces County Jail in Corpus Christi TX. ICSolutions for prepaid and collect phone calls. Visits and deposits info.",

  description:
    "Nueces County Jail communication guide. ICSolutions phone calls, visitation and deposit options for this Corpus Christi TX county jail.",

  overview: [
    "The Nueces County Jail in Corpus Christi, Texas, is the county jail for Nueces County, operated by the Nueces County Sheriff's Office at 901 Leopard Street. It holds more than a thousand inmates on average, with a high turnover of pretrial detainees and people serving short sentences.",
    "Phone calls run through ICSolutions. Families set up a prepaid account at icsolutions.com or call 1-888-506-8407 so the inmate can call them, since inmates cannot receive incoming calls. Video visitation is available but the current scheduling system is not well documented, so call the jail at 361-887-2300 for details on arranging video calls.",
    "Money can be added to an inmate's account at the kiosk in the justice center lobby, online, or by mailed money order. Mail is limited to postcards of a standard size, and all mail is inspected. Confirm current visitation hours before traveling, since they are set by housing unit.",
  ],

  address: "901 Leopard Street, Corpus Christi, TX 78401",
  phone: "361-887-2300",
  operatedBy: "Nueces County Sheriff's Office",
  mailingAddress: "JailATM.com - Nueces County Jail, Inmate ID and Inmate Full Name, PO Box 16120, Jonesboro, AR 72401. All non-legal and non-commercial mail is processed by the mail scanning vendor and delivered electronically via kiosks or tablets; originals are destroyed.",
  visitingHours: "Visitation is Saturday and Sunday only, by classification and last name: Max 9:30 to 10:30 AM both days; Saturday A-L 11:00 AM to 12:30 PM and M-Z 1:00 to 2:30 PM; Sunday M-Z 11:00 AM to 12:30 PM and A-L 1:00 to 2:30 PM; Units 4D, 5D, 5E, 5G, 5H, and 5J 3:30 to 4:30 PM.",

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
      notes: "Prepaid and collect inmate phone calls. Set up an account at icsolutions.com or 1-888-506-8407.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Ask the jail about current options." },
    video: { status: "limited", provider: undefined, notes: "Video visitation exists but the scheduling system is not clearly documented. Call 361-887-2300 for details." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "ICSolutions", notes: "Prepaid and collect calls through ICSolutions. The inmate calls you; incoming calls are not accepted." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through the lobby kiosk, online, or mailed money orders. Confirm the current method with the jail." },
  },

  rules: [
    "Set up your ICSolutions account before the first call so the connection goes through without delay.",
    "Inmates cannot receive incoming calls. All contact is inmate-initiated.",
    "Mail is limited to postcards of standard size. Altered or oversized mail is rejected.",
    "Bring a valid government-issued photo ID for any visit.",
    "All calls and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which company handles phone calls at Nueces County Jail?", answer: "ICSolutions. Set up a prepaid account at icsolutions.com or call 1-888-506-8407 before the first call." },
    { question: "How do video visits work at Nueces County Jail?", answer: "Video visitation is available, but the scheduling system is not clearly documented online. Call the jail at 361-887-2300 for current details on arranging video calls." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through the kiosk in the justice center lobby, online, or by mailed money order. Confirm the current method with the jail before sending." },
    { question: "What mail can inmates receive?", answer: "Non-legal and non-commercial mail goes through JailATM.com. Address it to JailATM.com - Nueces County Jail, with the inmate ID and full name, PO Box 16120, Jonesboro, AR 72401. The mail vendor scans it and delivers it electronically to the inmate through kiosks or tablets, and the original is destroyed. Print the inmate name and ID number clearly on the outside of the envelope or postcard." },
    { question: "How do I find an inmate's ID number for mail to Nueces County Jail?", answer: "Look up the inmate on JailATM.com, where the ID number is listed. The ID number and full name must be printed on the outside of the envelope or postcard." },
    { question: "How do I know which weekend visiting window applies at Nueces County Jail?", answer: "Weekend visits are assigned by classification and last name. Max housing visits 9:30 to 10:30 AM both days, and general population windows swap by last name between Saturday and Sunday. Units 4D, 5D, 5E, 5G, 5H, and 5J visit 3:30 to 4:30 PM." },
    { question: "How is non-legal mail delivered at Nueces County Jail?", answer: "Non-legal and non-commercial mail is scanned by the mail vendor and delivered electronically to the inmate through kiosks or tablets. The original mail is destroyed." },
    { question: "Can I call an inmate at Nueces County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "dallas-county-jail", "bexar-county-adult-detention-center"],
},

"fort-bend-county-jail": {
  id: "f-230",
  name: "Fort Bend County Jail",
  slug: "fort-bend-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Fort Bend County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Fort Bend County Jail: Securus Phone Guide",
  seoDescription: "How to contact someone at Fort Bend County Jail in Richmond TX. Securus for phone calls. Video visits through videovisitanywhere.com.",

  description:
    "Fort Bend County Jail communication guide. Securus phone calls and VideoVisitAnywhere video visitation for this Richmond TX county jail.",

  overview: [
    "The Fort Bend County Jail in Richmond, Texas, is the detention facility for Fort Bend County, operated by the Fort Bend County Sheriff's Office at 1410 Ransom Road. County contracting records name Securus Technologies as the inmate telephone provider for the detention facility.",
    "Phone calls go through Securus: families create a prepaid AdvanceConnect account or accept collect calls. Video visitation is handled separately through videovisitanywhere.com, where visitors register, schedule and pay for both on-site and from-home visits at least 24 hours in advance. On-site visits run Sunday through Friday, with no public in-person contact visits.",
    "Money can be added to inmate accounts through TouchPay online, the lobby kiosk, or mailed money orders. Inmates not on restriction get two visits per calendar week. Because published contact numbers vary, confirm the current jail number on the sheriff's official site before calling.",
  ],

  address: "1410 Ransom Road, Richmond, TX 77469",
  operatedBy: "Fort Bend County Sheriff's Office",
  visitingHours: "There are no public in-person visits. On-site video visits run Sunday through Friday, 8:00 AM to 6:30 PM, with the last visit starting at 6:30 PM and ending at 7:00 PM. From-home remote visits run 8:00 AM to 9:00 PM daily and cost $6.00 per visit. All visits are scheduled at least 24 hours in advance through videovisitanywhere.com. Video visitation is closed on Saturdays. Inmates are unavailable during meals 11:00 to 11:30 AM and 4:00 to 4:30 PM.",

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
      notes: "Inmate telephone provider per county contracting records. Prepaid AdvanceConnect and collect calls.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed for this facility. Ask the jail about current options." },
    video: { status: "available", provider: "VideoVisitAnywhere", notes: "On-site and from-home video visits scheduled and paid at videovisitanywhere.com, at least 24 hours ahead." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "Securus", notes: "Prepaid and collect calls through Securus. Set up an AdvanceConnect account for prepaid calls." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through TouchPay online, the lobby kiosk, or mailed money orders. Confirm the current method with the sheriff's office." },
  },

  rules: [
    "Register at videovisitanywhere.com to schedule both on-site and from-home video visits, at least 24 hours ahead.",
    "There are no public in-person contact visits. All visits are by video.",
    "Inmates not on restriction get two visits per calendar week, starting Mondays.",
    "Bring a valid photo ID. Visitors 16 and older need government-issued photo identification.",
    "Cell phones and cameras are prohibited during visits.",
  ],

  faq: [
    { question: "Which company handles phone calls at Fort Bend County Jail?", answer: "Securus Technologies, per county contracting records. Families can set up a prepaid AdvanceConnect account or accept collect calls." },
    { question: "How do video visits work at Fort Bend County Jail?", answer: "Through videovisitanywhere.com. Register there, schedule and pay for your visit at least 24 hours in advance. Both on-site and from-home visits use the same system." },
    { question: "Are in-person visits allowed?", answer: "No. There are no public in-person contact visits. All visitation is by video, either on-site at the jail or remotely from home." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through TouchPay online, the lobby kiosk, or mailed money orders. Confirm the current method with the sheriff's office before sending." },
    { question: "How much does a from-home video visit cost at Fort Bend County Jail?", answer: "From-home remote visits cost $6.00 per visit. On-site visits are free, with two free on-site visits per inmate per week." },
    { question: "Is video visitation available on Saturdays at Fort Bend County Jail?", answer: "No. Video visitation runs Sunday through Friday and is closed on Saturdays." },
    { question: "When are inmates unavailable for video visits at Fort Bend County Jail?", answer: "Inmates are unavailable during meals, 11:00 to 11:30 AM and 4:00 to 4:30 PM." },
    { question: "How do I schedule a video visit at Fort Bend County Jail?", answer: "Register at videovisitanywhere.com and schedule at least 24 hours in advance. The same system is used for on-site and from-home visits." },
    { question: "Can I call an inmate at Fort Bend County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "bexar-county-adult-detention-center", "dallas-county-jail"],
},

"montgomery-county-jail": {
  id: "f-231",
  name: "Montgomery County Jail",
  slug: "montgomery-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Montgomery County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Montgomery County Jail: Securus Phone and Video Guide",
  seoDescription: "How to contact someone at Montgomery County Jail in Conroe TX. Securus for phone calls and video visitation. Access Corrections deposits.",

  description:
    "Montgomery County Jail communication guide. Securus phone calls and video visitation, plus Access Corrections deposits, at this Conroe TX county jail.",

  overview: [
    "The Montgomery County Jail in Conroe, Texas, is the primary detention center for Montgomery County, operated by the Montgomery County Sheriff's Office at 1 Criminal Justice Drive. It houses pretrial detainees and sentenced inmates for the county.",
    "Phone service and video visitation both run through Securus Technologies. Families register on the Securus website to schedule on-site and remote video visits and to set up prepaid phone accounts for collect or prepaid calls. Inmates also have access to JailATM tablets for messaging, calls and entertainment.",
    "Money for commissary can be deposited online through Access Corrections, by phone, at the lobby kiosk, or by mailed money order. Call (936) 760-5800 for inmate information and to confirm current visitation procedures.",
  ],

  notToConfuseWith: "Not to be confused with Montgomery County Jail in Dayton, Ohio.",
  address: "1 Criminal Justice Drive, Conroe, TX 77301",
  phone: "(936) 760-5800",
  operatedBy: "Montgomery County Sheriff's Office",

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
      notes: "Phone service and video visitation provider. Register at the Securus website to schedule visits and fund calls.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Tablet-based messaging is reported through JailATM tablets. Confirm current options with the jail." },
    video: { status: "available", provider: "Securus", notes: "On-site and remote video visitation through Securus. Register and schedule on the Securus website." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "Securus", notes: "Collect and prepaid calls through Securus. Set up a prepaid account for the inmate to call you." },
    moneyTransfer: { status: "available", notes: "Deposits online through Access Corrections, by phone, at the lobby kiosk, or by mailed money order." },
  },

  rules: [
    "Register on the Securus website before scheduling a video visit or funding calls.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Bring a valid government-issued photo ID for any on-site visit.",
    "Follow the posted dress code. Inappropriate clothing will get your visit denied.",
    "All calls and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which company handles communication at Montgomery County Jail?", answer: "Securus Technologies handles both phone service and video visitation. Register on the Securus website to schedule visits and set up prepaid calling." },
    { question: "How do video visits work?", answer: "Both on-site and remote video visits are scheduled through the Securus website after you register an account." },
    { question: "How do I add money to an inmate's account?", answer: "Deposit online through Access Corrections, by phone, at the kiosk in the jail lobby, or by mailing a money order to the jail." },
    { question: "Do inmates have tablets?", answer: "Yes, JailATM tablets are reported at the facility, providing messaging, calls and entertainment options." },
    { question: "How do I visit someone at Montgomery County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Montgomery County Jail?", answer: "Montgomery County Jail is in Conroe, Texas, at 1 Criminal Justice Drive. The Jail Command oversees about 300 jail staff and a daily population of nearly 1,300." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "dallas-county-jail", "bexar-county-adult-detention-center"],
},

"williamson-county-jail": {
  id: "f-232",
  name: "Williamson County Jail",
  slug: "williamson-county-jail",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Williamson County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Williamson County Jail: NCIC Phone and Visit Guide",
  seoDescription: "How to contact someone at Williamson County Jail in Georgetown TX. NCIC for prepaid calls, video visits and messaging.",

  description:
    "Williamson County Jail communication guide. NCIC prepaid phone calls, video visits and messaging at this Georgetown TX county jail.",

  overview: [
    "The Williamson County Jail in Georgetown, Texas, is the county jail for Williamson County, operated by the Williamson County Sheriff's Office at 306 W. 4th Street. It houses pretrial detainees and sentenced inmates for the county.",
    "Inmate communication runs through NCIC Inmate Communications on a friends and family prepaid account. Register at account.ncic.com or call 800-943-2189, select Texas and Williamson County Jail, add your phone number and fund the account. The same account covers phone calls, video visits and secure email messaging, and you cannot receive calls until both you and your number are registered.",
    "Video visits are scheduled through NCIC after registration. Mail goes to the inmate's name and booking number. Personal mail is processed through NCIC's mail center; legal mail goes directly to the jail. For questions about calls or visits, the jail can be reached at 512-943-1365.",
  ],

  address: "306 W. 4th Street, Georgetown, TX 78626",
  phone: "512-943-1365",
  website: "https://www.wilcotx.gov/649/Corrections-Bureau",
  operatedBy: "Williamson County Sheriff's Office",
  rosterUrl: "https://judicialrecords.wilco.org",

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
    messaging: { status: "available", provider: "NCIC", notes: "Secure email messaging through the NCIC friends and family account." },
    video: { status: "available", provider: "NCIC", notes: "Video visits scheduled through your NCIC account after registration." },
    photos: { status: "limited", provider: undefined, notes: "Photo messaging options are not confirmed. Ask the jail." },
    phone: { status: "available", provider: "NCIC", notes: "Prepaid friends and family account at account.ncic.com or 800-943-2189. Register your number before the first call." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Commissary deposit options are not confirmed. Check with the jail before sending money." },
  },

  rules: [
    "Register yourself and your phone number with NCIC before the inmate's first call, or the call will not go through.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Fund your NCIC account at account.ncic.com or by calling 800-943-2189.",
    "Address mail with the inmate's full name and booking number. Do not send cash or stamps.",
    "All calls and messages are monitored and recorded.",
  ],

  faq: [
    { question: "Which company handles phone calls at Williamson County Jail?", answer: "NCIC Inmate Communications. Set up a friends and family prepaid account at account.ncic.com or call 800-943-2189." },
    { question: "How do video visits work?", answer: "Video visits are scheduled through your NCIC account after you register and add the inmate. Create the account at account.ncic.com." },
    { question: "Can I message an inmate?", answer: "Yes, NCIC provides secure email messaging services for this facility through the same friends and family account." },
    { question: "How do I send mail to an inmate?", answer: "Address it to the inmate's full name and booking number. Personal mail is processed through NCIC's mail center, while legal mail goes directly to the jail. Confirm the current mailing addresses with the facility before sending, since mail handling changes. Use standard envelopes, no larger than 9x12 inches." },
    { question: "How do I visit someone at Williamson County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm visiting hours before traveling." },
    { question: "Where is Williamson County Jail?", answer: "Williamson County Jail is in Georgetown, Texas, at 306 W. 4th Street. The county Corrections Bureau runs the jail. Separate juvenile facilities exist." },
    { question: "How do I search Williamson County jail records?", answer: "Search the Williamson County Records Inquiry by first and last name or booking number at judicialrecords.wilco.org." },
    { question: "How do I get help with my NCIC account for Williamson County Jail?", answer: "Create and fund your friends and family account at account.ncic.com or call 800-943-2189. Register your number before the first call." },
    { question: "Can I call an inmate at Williamson County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
  ],

  relatedFacilitySlugs: ["harris-county-jail", "bexar-county-adult-detention-center", "dallas-county-jail"],
},

"tulsa-county-jail": {
  id: "f-233",
  name: "David L. Moss Criminal Justice Center",
  slug: "tulsa-county-jail",
  type: "county",
  stateSlug: "oklahoma",
  stateName: "Oklahoma",
  stateAbbr: "OK",
  countySlug: null,
  countyName: "Tulsa County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Tulsa County Jail: Video Visits and Deposits Guide",
  seoDescription: "How to contact someone at the David L. Moss Criminal Justice Center in Tulsa OK. JailATM video visits. Correct Solutions Group deposits.",

  description:
    "Tulsa County Jail communication guide. JailATM video visitation and Correct Solutions Group deposits for the David L. Moss Criminal Justice Center in Tulsa OK.",

  overview: [
    "The David L. Moss Criminal Justice Center, commonly called the Tulsa County Jail, is the main detention facility for Tulsa County, Oklahoma, operated by the Tulsa County Sheriff's Office at 300 N. Denver Avenue in Tulsa. It houses pretrial detainees and sentenced inmates, and it also holds federal and immigration detainees.",
    "The sheriff's office points families to two services on its official jail page. Video visitation is handled through JailATM at jailatm.com, covering both on-site and remote visits. Money for an inmate's account goes through Correct Solutions Group at csgpay.com, using facility code 24038.",
    "Inmates can make outgoing phone calls but cannot receive incoming calls. Mail should include the inmate's full name and booking number. The jail's main line is 918-596-8900.",
  ],

  address: "300 N. Denver Avenue, Tulsa, OK 74103",
  phone: "918-596-8900",
  website: "https://tcso.org/jail/",
    visitingHours: "Visiting days Tue, Thu and Sat 8:00 am to 6:30 pm for Units F17, F18, F22, J1, J2, J5, J6, J9, J10, J14, Special Housing. Wed, Fri and Sun 8:00 am to 6:30 pm for Units F19, F20, F24, J3, J4, J7, J8, J11, J12, J16, Medical if approved. Check in no later than 6:30 pm. One visit per allowable day, 30 min, noncontact",
  operatedBy: "Tulsa County Sheriff's Office",

  providers: [
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
      notes: "Video visitation scheduled through jailatm.com, per the sheriff's official jail page.",
    },
    {
      name: "Correct Solutions Group",
      slug: "correct-solutions-group",
      initial: "C",
      color: "bg-orange-700",
      messaging: false,
      video: false,
      photos: false,
      phone: false,
      moneyTransfer: true,
      notes: "Deposits through csgpay.com using facility code 24038, per the sheriff's official jail page.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed on the sheriff's jail page. Ask the jail about current options." },
    video: { status: "available", provider: "JailATM", notes: "Video visitation scheduled through jailatm.com, per the sheriff's official jail page." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "limited", provider: undefined, notes: "Inmates can make outgoing calls but cannot receive incoming calls. Confirm the current phone vendor with the jail." },
    moneyTransfer: { status: "available", provider: "Correct Solutions Group", notes: "Deposits through csgpay.com using facility code 24038, per the sheriff's official jail page." },
  },

  rules: [
    "Use jailatm.com for video visitation scheduling, per the sheriff's official jail page.",
    "Put money on an inmate's account through csgpay.com with facility code 24038.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Include the inmate's full name and booking number on all mail.",
    "All calls and visits are monitored and recorded.",
  ],

  faq: [
    { question: "How do video visits work at Tulsa County Jail?", answer: "Through JailATM at jailatm.com, linked from the sheriff's official jail page. Both on-site and remote visits are available." },
    { question: "How do I put money on an inmate's account?", answer: "Through Correct Solutions Group at csgpay.com. When prompted, enter facility code 24038." },
    { question: "What is the facility's official name?", answer: "The David L. Moss Criminal Justice Center, commonly called the Tulsa County Jail, at 300 N. Denver Avenue, Tulsa, OK 74103." },
    { question: "Can inmates receive phone calls?", answer: "No. Inmates can make outgoing calls but cannot receive incoming calls." },
      {
        question: "How do I find or search for an inmate at David L. Moss Criminal Justice Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Tulsa County, Oklahoma. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at David L. Moss Criminal Justice Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at David L. Moss Criminal Justice Center?",
        answer: "Visiting days Tue, Thu and Sat 8:00 am to 6:30 pm for Units F17, F18, F22, J1, J2, J5, J6, J9, J10, J14, Special Housing. Wed, Fri and Sun 8:00 am to 6:30 pm for Units F19, F20, F24, J3, J4, J7, J8, J11, J12, J16, Medical if approved. Check in no later than 6:30 pm. One visit per allowable day, 30 min, noncontact",
      },
      {
        question: "Can I receive incoming calls from an inmate at David L. Moss Criminal Justice Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at David L. Moss Criminal Justice Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at David L. Moss Criminal Justice Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["oklahoma-county-detention-center", "dick-conner-correctional-center", "federal-transfer-center-oklahoma-city"],
},

"cleveland-county-detention-center": {
  id: "f-234",
  name: "Cleveland County Detention Center",
  slug: "cleveland-county-detention-center",
  type: "county",
  stateSlug: "oklahoma",
  stateName: "Oklahoma",
  stateAbbr: "OK",
  countySlug: null,
  countyName: "Cleveland County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cleveland County Jail: NCIC Phone Guide (Oklahoma)",
  seoDescription: "How to contact someone at Cleveland County Detention Center in Norman OK. NCIC for prepaid inmate phone calls. Tablet messaging options.",

  description:
    "Cleveland County Detention Center communication guide. NCIC prepaid phone calls and tablet options for this Norman OK county jail.",

  overview: [
    "The Cleveland County Detention Center, the F. DeWayne Beggs Detention Center, is the county jail for Cleveland County, Oklahoma, operated by the Cleveland County Sheriff's Office in Norman. It houses pretrial detainees and sentenced inmates for the county.",
    "Inmate phone calls run through NCIC Inmate Communications on a friends and family prepaid account. Register at account.ncic.com or call 800-943-2189, select Oklahoma and Cleveland County Detention Center, add your phone number and fund the account. You cannot receive calls until both you and your number are registered. The facility has also added tablets, with NCIC text services available from kiosks and tablets in the housing units.",
    "For questions about calls, policies or visitation, call the jail at 405-701-7700. All calls are monitored and recorded except attorney calls.",
  ],

  phone: "405-701-7700",
  website: "https://ccso-ok.us",
  operatedBy: "Cleveland County Sheriff's Office",

  providers: [
    {
      name: "NCIC",
      slug: "ncic",
      initial: "N",
      color: "bg-rose-600",
      messaging: true,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "NCIC prepaid phone calls; text services reported from kiosks and tablets in housing units.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "NCIC", notes: "NCIC text services are reported from kiosks and tablets in housing units. Confirm current availability with the jail." },
    video: { status: "limited", provider: undefined, notes: "Video visitation is not confirmed. Call the jail at 405-701-7700 for current options." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "NCIC", notes: "Prepaid friends and family account at account.ncic.com or 800-943-2189. Register your number before the first call." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Commissary deposit options are not confirmed. Check with the jail before sending money." },
  },

  rules: [
    "Register yourself and your phone number with NCIC before the inmate's first call, or the call will not go through.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Fund your NCIC account at account.ncic.com or by calling 800-943-2189.",
    "All calls are monitored and recorded, except attorney calls.",
    "Call the jail at 405-701-7700 to confirm current visitation and tablet policies.",
  ],

  faq: [
    { question: "Which company handles phone calls at Cleveland County Detention Center?", answer: "NCIC Inmate Communications. Set up a friends and family prepaid account at account.ncic.com or call 800-943-2189." },
    { question: "Do inmates have tablets?", answer: "Yes, the facility has added tablets, and NCIC text services are reported from kiosks and tablets in the housing units. Confirm current availability with the jail." },
    { question: "What is the facility's official name?", answer: "The F. DeWayne Beggs Detention Center, operated by the Cleveland County Sheriff's Office in Norman, Oklahoma." },
    { question: "How do I find out if someone is in custody at Cleveland County Detention Center?", answer: "Use the Sheriff's jail roster. If the person does not appear, allow time after booking and try alternate spellings, or call the detention center at 405-701-7700." },
    { question: "What are the NCIC tablets at Cleveland County Detention Center?", answer: "The center announced a partnership with NCIC Correctional Services providing tablets for education, books, music, monitored calls, video visits, mail, and commissary ordering. Inmates have access to the devices from 7:00 AM until lights out." },
    { question: "How do I send mail to an inmate at Cleveland County Detention Center?", answer: "Address mail to the inmate's full name and ID number at the detention center. Include a return address. Confirm current mail rules with the jail before sending." },
    { question: "How do visits work at Cleveland County Detention Center?", answer: "The Sheriff's custody manual says the visitation schedule is set by the Chief Deputy and posted in the public area of the facility. Confirm the current schedule with the jail before traveling." },
    { question: "How do I post bond for someone at Cleveland County Detention Center?", answer: "Call the detention center at 405-701-7700 for current bond amounts and posting steps. Bond information also appears on the jail roster." },
    { question: "Can I call an inmate at Cleveland County Detention Center directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
  ],

  relatedFacilitySlugs: ["oklahoma-county-detention-center", "oklahoma-state-penitentiary", "dick-conner-correctional-center"],
},

"sedgwick-county-jail": {
  id: "f-235",
  name: "Sedgwick County Jail",
  slug: "sedgwick-county-jail",
  type: "county",
  stateSlug: "kansas",
  stateName: "Kansas",
  stateAbbr: "KS",
  countySlug: null,
  countyName: "Sedgwick County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Sedgwick County Jail: ICSolutions Phone Guide",
  seoDescription: "How to contact someone at Sedgwick County Jail in Wichita KS. ICSolutions for phone calls. JailATM for video visits and deposits.",

  description:
    "Sedgwick County Jail communication guide. ICSolutions phone calls and JailATM video visits and deposits at this Wichita KS county jail.",

  overview: [
    "The Sedgwick County Jail, also called the Sedgwick County Detention Facility, is the county jail for Sedgwick County, Kansas, operated by the Sedgwick County Sheriff's Office at 141 W. Elm in Wichita. It houses pretrial detainees and sentenced inmates, with a separate annex facility.",
    "The county's official inmate communications page splits services between two vendors. All telephone calls go through ICSolutions: create an account at icsolutions.com to receive calls, and email or photo messages cost $0.05 each. Video visitation and deposits to inmate accounts go through JailATM: create a JailATM account to schedule video visits or add money for commissary and phone use.",
    "The county publishes a full rate card, including two free calls and two free messages per inmate each week under its Keep Families Connected program, and remote video visits at $0.11 per minute. No proceeds from these services go to the sheriff's office. The jail can be reached at 316-660-5245.",
  ],

  address: "141 W. Elm, Wichita, KS 67203",
  phone: "316-660-5245",
  website: "https://www.sedgwickcounty.org/sheriff/detention-bureau/inmate-communications/",
  operatedBy: "Sedgwick County Sheriff's Office",
  mailingAddress: "Sedgwick County Adult Detention KS, Inmate Name and Number, P.O. Box 16120, Jonesboro, AR 72401. Mail is scanned and delivered digitally; no parcels or packages. Send legal mail and paperback books (limit 2 per week) to Inmate Name, 141 W Elm, Wichita, KS 67203.",
  visitingHours: "Remote video visits run 7 days a week, 9:00 AM to 10:00 PM, except shift change 2:30 to 3:30 PM and meals 11:30 AM to 1:00 PM and 5:30 to 7:00 PM. On-site visits run Monday through Friday 1:00 to 5:30 PM and 7:00 to 9:00 PM, with the same blackout times, and are closed on Sedgwick County observed holidays. Schedule at least 24 hours ahead. One hour of on-site visiting per week is free.",
  callRates: "Calls and messaging are billed through ICSolutions and JailATM: US calling $0.015 per minute, remote video $0.11 per minute, email or photo $0.05 per message or photo, voice messaging $0.05 per message. Two free calls and two free messages per inmate per week under Keep Families Connected.",
  commissary: "Commissary and telephone deposits go through JailATM. Cashier's checks, cash, and money orders are not accepted by mail.",

  providers: [
    {
      name: "ICSolutions",
      slug: "icsolutions",
      initial: "I",
      color: "bg-sky-700",
      messaging: true,
      video: false,
      photos: true,
      phone: true,
      moneyTransfer: false,
      notes: "All inmate telephone calls plus email and photo sharing at $0.05 per message. Awarded the county's inmate communications contract.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Email and photo sharing at $0.05 per message through ICSolutions. Two free messages per inmate each week under the county program." },
    video: { status: "available", provider: "JailATM", notes: "Video visits scheduled and paid through a JailATM account. Remote visits cost $0.11 per minute; free on-site options are available." },
    photos: { status: "available", provider: "ICSolutions", notes: "Photo sharing at $0.05 per photo through ICSolutions." },
    phone: { status: "available", provider: "ICSolutions", notes: "All calls through ICSolutions at $0.015 per minute domestic. Two free calls per inmate each week under the county program." },
    moneyTransfer: { status: "available", provider: "JailATM", notes: "Add money for commissary or phone use through a JailATM account." },
  },

  rules: [
    "Create an ICSolutions account to receive phone calls, and a JailATM account for video visits and deposits. They are separate systems.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Video visits must be scheduled in advance through your JailATM account.",
    "Take advantage of the free weekly allowance: two free calls and two free messages per inmate each week.",
    "All calls and messages are monitored and recorded.",
  ],

  faq: [
    { question: "Which companies handle communication at Sedgwick County Jail?", answer: "Two. ICSolutions handles all telephone calls plus email and photo messaging. JailATM handles video visitation and deposits to inmate accounts." },
    { question: "How much do calls and video visits cost?", answer: "Calls cost $0.015 per minute domestic through ICSolutions. Remote video visits cost $0.11 per minute through JailATM. Each inmate also gets two free calls and two free messages per week." },
    { question: "How do I schedule a video visit?", answer: "Create an account at deposits.jailatm.com and schedule the visit there. On-site video visitation is also available at the jail." },
    { question: "How do I add money to an inmate's account?", answer: "Through your JailATM account, which covers commissary funds and money the inmate can apply to the telephone system." },
    { question: "What free calls and messages do inmates get at Sedgwick County Jail?", answer: "Under Keep Families Connected, each inmate gets two free calls and two free messages per week, paid to ICSolutions with no proceeds to the Sheriff or county." },
    { question: "How is privileged mail handled at Sedgwick County Jail?", answer: "Privileged mail from attorneys, judges, clerks, courts, and listed officials, with official markings, is opened in the inmate's presence and checked for contraband but not censored. Send it to Inmate Name, 141 W Elm, Wichita, KS 67203." },
    { question: "When can attorneys and professionals visit at Sedgwick County Jail?", answer: "Professional visitation runs Monday through Thursday 8:00 to 11:00 AM, 1:00 to 5:00 PM, and 7:00 to 10:00 PM, Friday 8:00 AM to 5:00 PM, and Sunday 1:00 to 10:00 PM, closed 11:00 AM to 1:00 PM and 5:30 to 7:00 PM for meals. Approved persons must register first." },
    { question: "Why was my mail to Sedgwick County Jail returned?", answer: "Common reasons are a missing inmate name or number, a missing return address, more than one inmate per envelope, or unacceptable contents such as greeting cards, glued items, or explicit material. Mail rules require one inmate per envelope and standard first-class letters." },
    { question: "What happens in a family emergency at Sedgwick County Jail?", answer: "A supervisor takes emergency incoming calls and the inmate returns the call through phone services if it is an emergency. A chaplain notifies the inmate of a family death after verification." },
  ],

  relatedFacilitySlugs: ["fci-leavenworth", "lansing-correctional-facility", "douglas-county-department-of-corrections"],
},

"wyandotte-county-detention-center": {
  id: "f-236",
  name: "Wyandotte County Detention Center",
  slug: "wyandotte-county-detention-center",
  type: "county",
  stateSlug: "kansas",
  stateName: "Kansas",
  stateAbbr: "KS",
  countySlug: null,
  countyName: "Wyandotte County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Wyandotte County Jail: HomeWAV Video Visit Guide",
  seoDescription: "How to contact someone at Wyandotte County Detention Center in Kansas City KS. HomeWAV for remote video visits. JailATM deposits.",

  description:
    "Wyandotte County Detention Center communication guide. HomeWAV remote video visits and JailATM deposits for this Kansas City KS county jail.",

  overview: [
    "The Wyandotte County Detention Center in Kansas City, Kansas, is the main jail for Wyandotte County, operated by the Wyandotte County Sheriff's Office at 710 N. 7th Street. It houses pretrial detainees and sentenced inmates.",
    "Remote video visitation runs through HomeWAV: register at homewav.com, complete both steps of registration, add Talk to Me funds, and wait for the inmate to call. Reported rates are $0.50 per minute for video visits with no minimum talk time. Visits can also be done on-site at the jail.",
    "Inmates can make outgoing calls during the day and evening seven days a week, and families can use an online text and email system. Deposits to inmate accounts are reported through JailATM online and the lobby kiosk. The jail's main line is 913-573-2865.",
  ],

  address: "710 N. 7th Street, Kansas City, KS 66101",
  phone: "913-573-2865",
  operatedBy: "Wyandotte County Sheriff's Office",

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
      notes: "HomeWAV handles phone calls, video visits and messaging. Remote video visits at a reported $0.50 per minute.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: "HomeWAV", notes: "Text and email messaging through HomeWAV. Confirm current options with the jail." },
    video: { status: "available", provider: "HomeWAV", notes: "Remote video visits through HomeWAV at a reported $0.50 per minute. Register at homewav.com and add Talk to Me funds." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "limited", provider: "HomeWAV", notes: "Outgoing calls through HomeWAV. Confirm setup details with the jail." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through JailATM online and the lobby kiosk. Confirm the current method with the jail." },
  },

  rules: [
    "Register with HomeWAV and complete both registration steps before funding a video visit.",
    "Video visits have no minimum talk time, but each call can be as short as one minute.",
    "Bring a valid government-issued photo ID for any on-site visit.",
    "All calls and visits are monitored and recorded.",
    "Call the jail at 913-573-2865 to confirm current phone and messaging vendors before creating accounts.",
  ],

  faq: [
    { question: "How do remote video visits work at Wyandotte County Detention Center?", answer: "Through HomeWAV. Register at homewav.com, add Talk to Me funds, and the inmate calls you. Reported rates are $0.50 per minute with no minimum talk time." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through JailATM online and the lobby kiosk. Confirm the current method with the jail before sending." },
    { question: "Can inmates make phone calls?", answer: "Yes, inmates can make outgoing calls during the day and evening seven days a week. The phone vendor is not confirmed, so call the jail for setup details." },
    { question: "How do I find out if someone is in custody at Wyandotte County Detention Center?", answer: "Use the detention center's inmate information options, or call 913-573-2865. Inmate information is usually available about two hours after booking." },
    { question: "How do I send mail to an inmate at Wyandotte County Detention Center?", answer: "Address mail to the inmate's full name and ID number at the detention center, 710 N. 7th Street, Kansas City, KS 66101. Include a return address." },
    { question: "How do I post bond for someone at Wyandotte County Detention Center?", answer: "Call the detention center at 913-573-2865 for current bond amounts and posting steps." },
    { question: "How do video visits work at Wyandotte County Detention Center?", answer: "Visits are by video, both at the jail and remotely from home. Confirm the current scheduling steps with the facility before your first visit." },
    { question: "Can I call an inmate at Wyandotte County Detention Center directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I block calls from Wyandotte County Detention Center?", answer: "Ask the phone provider to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
  ],

  relatedFacilitySlugs: ["fci-leavenworth", "lansing-correctional-facility", "douglas-county-department-of-corrections"],
},

"lancaster-county-corrections": {
  id: "f-237",
  name: "Lancaster County Corrections",
  slug: "lancaster-county-corrections",
  type: "county",
  stateSlug: "nebraska",
  stateName: "Nebraska",
  stateAbbr: "NE",
  countySlug: null,
  countyName: "Lancaster County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Lancaster County Jail: ICSolutions Phone Guide",
  seoDescription: "How to contact someone at Lancaster County Corrections in Lincoln NE. ICSolutions for phones, video visits and messaging.",

  description:
    "Lancaster County Corrections communication guide. ICSolutions phones, video visitation and messaging for this Lincoln NE county jail.",

  overview: [
    "Lancaster County Corrections, run by the Lancaster County Department of Corrections, is the county jail for Lancaster County, Nebraska, located at 3801 West O Street in Lincoln. It houses pretrial detainees and sentenced inmates for the county.",
    "Inmate communication runs through IC Solutions. The jail uses the ICS video visitation system for both on-site and off-site visits: register free at icsolutions.com, download the ICS Mobile app for off-site visits from a phone or computer, and schedule ahead. Phone calls also go through ICS, with prepaid accounts funded on the provider's website.",
    "Personal mail is processed through a central scanning address, while legal mail, money orders and publications go directly to the jail at 3801 West O Street, Lincoln, NE 68528. The jail's main line is 402-441-1900.",
  ],

  address: "3801 West O Street, Lincoln, NE 68528",
  phone: "402-441-1900",
  operatedBy: "Lancaster County Department of Corrections",

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
      notes: "Phone calls, video visitation and electronic messaging. Register free at icsolutions.com; off-site visits use the ICS Mobile app.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Electronic messaging through ICSolutions alongside phone and video services." },
    video: { status: "available", provider: "ICSolutions", notes: "On-site and off-site video visits through the ICS system. Register at icsolutions.com; off-site visits use the ICS Mobile app." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "ICSolutions", notes: "Outgoing calls through ICSolutions prepaid accounts. Inmates cannot receive incoming calls." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Commissary deposit options are not confirmed. Check with the jail before sending money." },
  },

  rules: [
    "Register free at icsolutions.com before scheduling any video visit.",
    "Download the ICS Mobile app and test it before your first off-site visit.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Send personal mail to the central processing address, and legal mail and money orders directly to the jail.",
    "All calls, messages and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which company handles communication at Lancaster County Corrections?", answer: "IC Solutions, for phone calls, video visitation and electronic messaging. Register at icsolutions.com." },
    { question: "How do video visits work?", answer: "On-site visits use video terminals at the facility's visitation center. Off-site visits use the ICS Mobile app on a phone, tablet or computer. Register at icsolutions.com first." },
    { question: "How do I send mail to an inmate?", answer: "Personal mail goes to the central processing address with the inmate's name and ID number. Legal mail, money orders and publications go directly to Lancaster County Jail, 3801 West O Street, Lincoln, NE 68528." },
    { question: "How do I find out if someone is in custody at Lancaster County Corrections?", answer: "Use the county inmate lookup. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "What is the difference between personal mail and legal mail at Lancaster County Corrections?", answer: "Personal mail goes to the central processing address. Legal mail, money orders, and publications go directly to the jail at 3801 West O Street, Lincoln, NE 68528. Include the inmate's name and ID number on everything." },
    { question: "How do I post bond for someone at Lancaster County Corrections?", answer: "Call the facility at 402-441-1900 for current bond amounts and posting steps." },
    { question: "Can I call an inmate at Lancaster County Corrections directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I block calls from Lancaster County Corrections?", answer: "Ask ICSolutions to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
    { question: "What do I need to register for video visits at Lancaster County Corrections?", answer: "Register at icsolutions.com first, then schedule through the ICS Mobile app for off-site visits or use the video terminals at the facility visitation center for on-site visits." },
  ],

  relatedFacilitySlugs: ["douglas-county-department-of-corrections", "nebraska-state-penitentiary", "tecumseh-state-correctional-institution"],
},

"linn-county-jail": {
  id: "f-238",
  name: "Linn County Correctional Center",
  slug: "linn-county-jail",
  type: "county",
  stateSlug: "iowa",
  stateName: "Iowa",
  stateAbbr: "IA",
  countySlug: null,
  countyName: "Linn County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Linn County Jail: NCIC Phones and Video Guide",
  seoDescription: "How to contact someone at Linn County Correctional Center in Cedar Rapids IA. NCIC for prepaid calls and video visitation.",

  description:
    "Linn County Jail communication guide. NCIC prepaid phone calls and video visitation at the Linn County Correctional Center in Cedar Rapids IA.",

  overview: [
    "The Linn County Correctional Center in Cedar Rapids, Iowa, is the county jail for Linn County, operated by the Linn County Sheriff's Office at 53 3rd Avenue Bridge. It houses pretrial detainees and sentenced inmates for the county.",
    "Phone calls and video visitation run through NCIC Inmate Communications. The county's own posted instructions direct families to create an account at ncic.com, select the facility, and pick a date and time for the visit, which the facility then approves. Remote visits need only a computer or smartphone, while on-site visits use the reservation code emailed after approval.",
    "Deposits to inmate accounts are reported through JailATM online, the lobby kiosk, or mailed money orders. The sheriff's office main line is (319) 892-6100, and visitation hours vary by housing unit, so confirm the current schedule before traveling.",
  ],

  address: "53 3rd Avenue Bridge, Cedar Rapids, IA 52401",
  phone: "(319) 892-6100",
  website: "https://www.linncountyiowa.gov/154/Correctional-Center",
  operatedBy: "Linn County Sheriff's Office",

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
      notes: "NCIC phone calls and video visitation, per the county's visitation page. Remote video visits $0.30 per minute; on-site visits are free.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed. Ask the jail about current options." },
    video: { status: "available", provider: "NCIC", notes: "Remote and on-site video visits through ncic.com. Create an account, select the facility and time, and wait for facility approval. Remote visits $0.30 per minute; on-site visits are free, per the county page." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "NCIC", notes: "Prepaid and collect calls through NCIC Inmate Telephone Services." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through JailATM online, the lobby kiosk, or mailed money orders. Confirm the current method with the jail." },
  },

  rules: [
    "Create your NCIC account at ncic.com before scheduling any video visit.",
    "Bring the emailed reservation code and a valid photo ID for on-site visits.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "No cell phones or electronic devices in the visitation area. Violations bring a visitation suspension.",
    "Visitation hours vary by housing unit. Confirm the current schedule with the jail before traveling.",
  ],

  faq: [
    { question: "Which company handles communication at Linn County Correctional Center?", answer: "NCIC Inmate Communications, for both phone calls and video visitation. Create an account at ncic.com." },
    { question: "How do video visits work?", answer: "Go to ncic.com, create an account, select the facility and pick a date and time. The facility approves the request and emails a reservation code. Remote visits work from any computer or smartphone." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through JailATM online, the kiosk in the correctional center lobby, or money orders mailed to the facility. Confirm the current method with the jail." },
    { question: "How do I find out if someone is in custody at Linn County Correctional Center?", answer: "Use the county inmate lookup. If the person does not appear, allow time after booking and try alternate spellings." },
    { question: "How do I send mail to an inmate at Linn County Correctional Center?", answer: "Address mail to the inmate's full name and booking number at the correctional center. Include a return address. Confirm current mail rules with the jail, since personal mail may be scanned by a third-party service." },
    { question: "How do I post bond for someone at Linn County Correctional Center?", answer: "Call the correctional center at 319-892-6300 for current bond amounts and posting steps." },
    { question: "Can I call an inmate at Linn County Correctional Center directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I block calls from Linn County Correctional Center?", answer: "Ask NCIC to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
    { question: "How many visits can an inmate get per week at Linn County Correctional Center?", answer: "Inmates are eligible for two visits per week, with a combination of two adults and one child, or one adult and two children, per visit. Confirm the current scheduling steps with the facility." },
  ],

  relatedFacilitySlugs: ["polk-county-jail", "anamosa-state-penitentiary", "iowa-state-penitentiary"],
},

"scott-county-jail": {
  id: "f-239",
  name: "Scott County Jail",
  slug: "scott-county-jail",
  type: "county",
  stateSlug: "iowa",
  stateName: "Iowa",
  stateAbbr: "IA",
  countySlug: null,
  countyName: "Scott County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Scott County Jail: ICSolutions Phone Guide",
  seoDescription: "How to contact someone at Scott County Jail in Davenport IA. ICSolutions for phones, video visits and messaging. JailATM deposits.",

  description:
    "Scott County Jail communication guide. ICSolutions phones, video visits and messaging, plus JailATM deposits, at this Davenport IA county jail.",

  overview: [
    "The Scott County Jail in Davenport, Iowa, is the county jail for Scott County, operated by the Scott County Sheriff's Office at 400 W. 4th Street. It houses pretrial detainees and sentenced inmates for the county.",
    "Phone service and video visitation run through ICSolutions. The inmate must list you as an approved visitor, and you register with ICSolutions before scheduling. The jail uses video terminals for all visits, and visitors can also use an online text and email system, buy commissary online, and set up the phone account that lets the inmate call during the day and evening seven days a week.",
    "Money can be added to an inmate's account through JailATM online, the 24/7 lobby kiosk, by phone, or by mailed money order. The jail's main line is 563-326-8750, and visits must be scheduled at least 24 hours ahead.",
  ],

  address: "400 W. 4th Street, Davenport, IA 52801",
  phone: "563-326-8750",
  website: "https://www.scottcountyiowa.gov/sheriff/jail",
  operatedBy: "Scott County Sheriff's Office",
  rosterUrl: "https://www.scottcountyiowa.gov/sheriff/inmates",

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
      notes: "Phone service, video visitation and the online text/email system. The inmate must list you as a visitor before you register.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Online text and email system through ICSolutions." },
    video: { status: "available", provider: "ICSolutions", notes: "All visits are by video terminal. Register with ICSolutions and schedule at least 24 hours ahead." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "ICSolutions", notes: "Prepaid phone accounts through ICSolutions. The inmate calls during day and evening hours." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through JailATM online, the lobby kiosk, by phone, or mailed money order. Confirm the current method with the jail." },
  },

  rules: [
    "The inmate must list you as an approved visitor before you can register or visit.",
    "Register with ICSolutions before scheduling any video visit.",
    "Schedule visits at least 24 hours in advance, and arrive 15 minutes early to register with the visitation officer.",
    "All visits are by video terminal and are monitored. No touching the screen or disruptive behavior.",
    "Bring a valid government-issued photo ID. Visitors are checked for warrants at entry.",
  ],

  faq: [
    { question: "Which company handles communication at Scott County Jail?", answer: "ICSolutions, for phone service, video visitation and the online text/email system." },
    { question: "How do visits work?", answer: "All visits are by video terminal. The inmate must list you as a visitor, you register with ICSolutions, and you schedule at least 24 hours ahead by calling 563-326-8750 (press 1) or visiting the jail." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through JailATM online, the 24/7 lobby kiosk, by phone, or by mailed money order. Confirm the current method with the jail." },
    { question: "How do I send mail to an inmate?", answer: "Address it to the inmate's full name, docket number and housing assignment at Scott County Jail, 400 West 4th Street, Davenport, IA 52801. Books must come directly from the publisher." },
    { question: "How do I check current inmates at Scott County Jail?", answer: "Use the current inmate listings on the Sheriff's site at scottcountyiowa.gov/sheriff/inmates. The listings show who is currently housed at the facility." },
    { question: "How long can someone stay at Scott County Jail?", answer: "Under Iowa statute, no one is incarcerated in a county jail for more than one year. People with longer sentences transfer to a state facility." },
    { question: "Can I call an inmate at Scott County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I block calls from Scott County Jail?", answer: "Ask ICSolutions to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
    { question: "How do I post bond for someone at Scott County Jail?", answer: "Call the jail at 563-326-8750 for current bond amounts and posting steps. Bond information also appears on the inmate listings." },
  ],

  relatedFacilitySlugs: ["polk-county-jail", "anamosa-state-penitentiary", "iowa-state-penitentiary"],
},

"jackson-county-detention-center": {
  id: "f-240",
  name: "Jackson County Detention Center",
  slug: "jackson-county-detention-center",
  type: "county",
  stateSlug: "missouri",
  stateName: "Missouri",
  stateAbbr: "MO",
  countySlug: null,
  countyName: "Jackson County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Jackson County Jail: Securus Phone and Video Guide",
  seoDescription: "How to contact someone at Jackson County Detention Center in Kansas City MO. Securus for phone calls and video visitation.",

  description:
    "Jackson County Detention Center communication guide. Securus phone calls and video visitation for this Kansas City MO county jail.",

  overview: [
    "The Jackson County Detention Center in Kansas City, Missouri, is the county jail for Jackson County, operated by the Jackson County Sheriff's Office at 1300 Cherry Street. It houses pretrial detainees and sentenced inmates for the county.",
    "Phone calls and video visitation both run through Securus Technologies. Families create an account on the Securus website to fund prepaid calls and to schedule remote video visits from a computer or the Securus video app, or on-site visits at the jail kiosks. The Securus system only allows scheduling when the inmate is available.",
    "Mail should include the inmate's full name and booking information. For questions about calls, visits or inmate location, the jail can be reached at 816-881-4200, with visitation information at 816-881-4236.",
  ],

  address: "1300 Cherry Street, Kansas City, MO 64106",
  phone: "816-881-4200",
  operatedBy: "Jackson County Sheriff's Office",

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
      notes: "Phone calls and Securus Video Connect remote and on-site video visitation. Register on the Securus website.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed. Ask the jail about current options." },
    video: { status: "available", provider: "Securus", notes: "Securus Video Connect for remote visits from home and on-site kiosk visits. Schedule on the Securus website." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "Securus", notes: "Prepaid and collect calls through Securus. Set up an account so the inmate can call you." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Commissary deposit options are not confirmed. Check with the jail before sending money." },
  },

  rules: [
    "Create a Securus account before funding calls or scheduling video visits.",
    "You must be on the inmate's approved list, even for a video visit.",
    "Schedule remote video visits in advance. The system only offers times the inmate is available.",
    "All visits are monitored and recorded. Do not say or do anything you would not want replayed in court.",
    "Bring a valid government-issued photo ID for any on-site visit.",
  ],

  faq: [
    { question: "Which company handles communication at Jackson County Detention Center?", answer: "Securus Technologies, for both phone calls and Securus Video Connect video visitation." },
    { question: "How do remote video visits work?", answer: "Register or log in on the Securus website, select the facility, review the available days, hours and cost, then schedule. You can join from a computer, the Securus video app, or an on-site kiosk." },
    { question: "How do phone calls work?", answer: "Inmates make outgoing calls through Securus. Families set up a prepaid account or accept collect calls. Inmates cannot receive incoming calls." },
    { question: "What is the visitation phone number?", answer: "Call 816-881-4236 for visitation information, or the jail's main line at 816-881-4200." },
      {
        question: "How do I find or search for an inmate at Jackson County Detention Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Jackson County, Missouri. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Jackson County Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Jackson County Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Jackson County Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Jackson County Detention Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["st-louis-city-justice-center", "jefferson-city-correctional-center", "potosi-correctional-center"],
},

"st-louis-county-justice-center": {
  id: "f-241",
  name: "St. Louis County Justice Center",
  slug: "st-louis-county-justice-center",
  type: "county",
  stateSlug: "missouri",
  stateName: "Missouri",
  stateAbbr: "MO",
  countySlug: null,
  countyName: "St. Louis County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "St. Louis County Jail: Securus Video Visit Guide",
  seoDescription: "How to contact someone at St. Louis County Justice Center in Clayton MO. Securus video visits. ICSolutions phone calls.",

  description:
    "St. Louis County Justice Center communication guide. Securus video visitation and ICSolutions phone calls for this Clayton MO county jail.",

  overview: [
    "The St. Louis County Justice Center, inside the Buzz Westfall Justice Center in Clayton, Missouri, is the county jail for St. Louis County, run by the Department of Justice Services at 100 S. Central Avenue. It houses pretrial detainees and sentenced inmates.",
    "The county's official 2025 resident handbook states that video visitation is provided by Securus on kiosks in the housing unit dayrooms, with 20-minute visits between 8:00 am and 8:30 pm. Phone calls are handled by ICSolutions, with prepaid accounts families set up online.",
    "Money can be deposited into a resident's account at the lobby kiosk or the bonding and cashier window. Social visits are limited, and all in-person and video visitation conversations are recorded. The facility's main line is 314-615-5245.",
  ],

  address: "100 S. Central Avenue, Clayton, MO 63105",
  phone: "314-615-5245",
  operatedBy: "St. Louis County Department of Justice Services",

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
      moneyTransfer: false,
      notes: "Video visitation on housing-unit kiosks, per the county's official resident handbook. Visits are 20 minutes and monitored.",
    },
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
      notes: "Inmate phone calls. Families set up prepaid accounts online.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed. Ask the jail about current options." },
    video: { status: "available", provider: "Securus", notes: "Video visits on housing-unit kiosks, 20 minutes each, between 8:00 am and 8:30 pm. All visits are monitored and recorded." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "ICSolutions", notes: "Prepaid phone accounts through ICSolutions. Inmates cannot receive incoming calls." },
    moneyTransfer: { status: "available", notes: "Deposits at the lobby kiosk or the bonding and cashier window, per the county's official resident handbook." },
  },

  rules: [
    "Video visits are 20 minutes and run on housing-unit kiosks between 8:00 am and 8:30 pm.",
    "All social visitation conversations are recorded, whether in person or by video.",
    "Secure all personal property in the lobby lockers before any visit. No phones, cameras or recording devices.",
    "Bring a valid government-issued photo ID and pass the metal detector screening.",
    "Set up your ICSolutions phone account before expecting calls from an inmate.",
  ],

  faq: [
    { question: "Which companies handle communication at St. Louis County Justice Center?", answer: "Two. Securus provides video visitation on housing-unit kiosks, per the county's official resident handbook. ICSolutions handles inmate phone calls." },
    { question: "How do video visits work?", answer: "Visits are 20 minutes on kiosks in the housing unit dayrooms, between 8:00 am and 8:30 pm, with 16 time slots per kiosk per day. All visits are monitored and recorded." },
    { question: "How do I add money to a resident's account?", answer: "At the kiosk in the building lobby, or at the bonding and cashier window if the kiosk is not working." },
    { question: "Can I visit in person?", answer: "In-person social visits use the visiting booths and require passing a metal detector screening. All personal property must be secured in the lobby lockers first." },
      {
        question: "How do I find or search for an inmate at St. Louis County Justice Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for St. Louis County, Missouri. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at St. Louis County Justice Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at St. Louis County Justice Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at St. Louis County Justice Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at St. Louis County Justice Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["st-louis-city-justice-center", "jefferson-city-correctional-center", "potosi-correctional-center"],
},

"greene-county-jail": {
  id: "f-242",
  name: "Greene County Jail",
  slug: "greene-county-jail",
  type: "county",
  stateSlug: "missouri",
  stateName: "Missouri",
  stateAbbr: "MO",
  countySlug: null,
  countyName: "Greene County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Greene County Jail: ICSolutions Video Visit Guide",
  seoDescription: "How to contact someone at Greene County Jail in Springfield MO. ICSolutions video visitation. Free weekly video visit time.",

  description:
    "Greene County Jail communication guide. ICSolutions video visitation with free weekly visit time for this Springfield MO county jail.",

  overview: [
    "The Greene County Jail in Springfield, Missouri, is the county jail for Greene County, operated by the Greene County Sheriff's Office at 1000 N. Boonville Avenue. It houses pretrial detainees and sentenced inmates for the county.",
    "Video visitation runs through ICSolutions and its Visitor system. Visitors register at icsolutions.com to schedule and conduct video visits. Each inmate gets free weekly video visit time, with two visits in the jail lobby and one remote, and additional visit time is available at the provider's rates.",
    "Inmates can make outgoing calls on prepaid or collect accounts during daytime and evening hours. Deposits to inmate accounts are reported through JailATM online, the lobby kiosk, by phone, or mailed money order. The jail's main line is 417-868-4040.",
  ],

  address: "1000 N. Boonville Avenue, Springfield, MO 65802",
  phone: "417-868-4040",
  website: "https://greenecountymo.gov/sheriff/jail/",
  operatedBy: "Greene County Sheriff's Office",

  providers: [
    {
      name: "ICSolutions",
      slug: "icsolutions",
      initial: "I",
      color: "bg-sky-700",
      messaging: false,
      video: true,
      photos: false,
      phone: false,
      moneyTransfer: false,
      notes: "Video visitation through the ICS Visitor system. Register at icsolutions.com to schedule visits.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed. Ask the jail about current options." },
    video: { status: "available", provider: "ICSolutions", notes: "Video visits through the ICS Visitor system at icsolutions.com. Each inmate gets free weekly visit time; extra time is paid." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "limited", provider: undefined, notes: "Inmates can make outgoing prepaid or collect calls, but the phone vendor is not confirmed. Call the jail for setup details." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through JailATM online, the lobby kiosk, by phone, or mailed money order. Confirm the current method with the jail." },
  },

  rules: [
    "Register at icsolutions.com before scheduling any video visit.",
    "Each inmate gets free weekly video visit time. Use it before paying for extra visits.",
    "Schedule visits at least 6 hours ahead. Check in 15 minutes before the start time.",
    "Bring a valid photo ID. Visitors under 17 must be accompanied by an authorized adult.",
    "All visits are monitored and recorded. Disruptive behavior ends the visit.",
  ],

  faq: [
    { question: "Which company handles video visits at Greene County Jail?", answer: "ICSolutions, through its Visitor video visitation system. Register at icsolutions.com." },
    { question: "Are any video visits free?", answer: "Yes. Each inmate is allowed free weekly video visit time, with two visits in the jail lobby and one remote. Additional visit time costs the provider's rate." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through JailATM online, the kiosk in the sheriff's office lobby, by phone, or by mailed money order. Confirm the current method with the jail." },
    { question: "How do I send mail to an inmate?", answer: "Address mail to the inmate's full name and jacket number at Greene County Jail, 1000 N. Boonville Avenue, Springfield, MO 65802. Include a return address. Confirm the current mail rules with the jail before sending." },
    { question: "What is a jacket number at Greene County Jail?", answer: "The jacket number is the inmate's ID number at the jail. You need it to send mail, post bond, or add money to the inmate's commissary account." },
    { question: "How do I schedule a video visit at Greene County Jail?", answer: "Video visits are scheduled in advance by the inmate or visitor. Coordinate the date and time with the inmate, then book through the visitation provider." },
    { question: "Can I call an inmate at Greene County Jail directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly." },
    { question: "How do I block calls from Greene County Jail?", answer: "Ask ICSolutions to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
    { question: "How do I post bond for someone at Greene County Jail?", answer: "Call the jail at 417-868-4048 for current bond amounts and posting steps." },
  ],

  relatedFacilitySlugs: ["st-louis-city-justice-center", "jefferson-city-correctional-center", "potosi-correctional-center"],
},

"benton-county-jail": {
  id: "f-243",
  name: "Benton County Jail",
  slug: "benton-county-jail",
  type: "county",
  stateSlug: "arkansas",
  stateName: "Arkansas",
  stateAbbr: "AR",
  countySlug: null,
  countyName: "Benton County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Benton County Jail: Securus Video Visit Guide",
  seoDescription: "How to contact someone at Benton County Jail in Bentonville AR. Securus for video visitation. Prepaid phone accounts.",

  description:
    "Benton County Jail communication guide. Securus video visitation and prepaid phone accounts for this Bentonville AR county jail.",

  overview: [
    "The Benton County Jail in Bentonville, Arkansas, is the primary detention facility for Benton County, operated by the Benton County Sheriff's Office at 1300 SW 14th Street. It is one of the largest county jails in Arkansas, housing pretrial detainees and sentenced inmates.",
    "Video visitation runs through Securus Technologies: visitors create an account on the Securus website and schedule sessions in advance. All visitation is by video, on-site on weekdays and remote daily. Phone calls are prepaid through the jail's phone account system, and inmates can only place outgoing calls.",
    "Money can be added to an inmate's account through JailATM online, the lobby kiosk, or mailed money order. The jail's main line is 479-271-1011, and current visitation hours are posted on the sheriff's jail page.",
  ],

  address: "1300 SW 14th Street, Bentonville, AR 72712",
  phone: "479-271-1011",
  website: "https://sheriff.bentoncountyar.gov/jail-detention/",
  operatedBy: "Benton County Sheriff's Office",

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
      moneyTransfer: false,
      notes: "Video visitation provider. Create an account on the Securus website and schedule visits in advance.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed. Ask the jail about current options." },
    video: { status: "available", provider: "Securus", notes: "All visits are by video through Securus. On-site visits run weekdays; remote visits run daily. Schedule in advance." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "limited", provider: undefined, notes: "Prepaid phone accounts are reported, but the phone vendor is not confirmed. Inmates can only place outgoing calls. Call the jail for setup details." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through JailATM online, the lobby kiosk, or mailed money order. Confirm the current method with the jail." },
  },

  rules: [
    "Create a Securus account before scheduling any video visit.",
    "All visitation is by video. On-site visits run Monday through Friday; remote visits run seven days a week.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Bring a valid government-issued photo ID for any on-site visit.",
    "All calls and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which company handles video visits at Benton County Jail?", answer: "Securus Technologies. Create an account on the Securus website and schedule your session in advance." },
    { question: "Are in-person visits allowed?", answer: "No. All visitation is conducted by video, on-site on weekdays and remotely seven days a week." },
    { question: "How do phone calls work?", answer: "Inmates can only place outgoing calls on prepaid phone accounts. Incoming calls are not permitted." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through JailATM online, the kiosk in the detention center lobby, or by mailed money order. Confirm the current method with the jail." },
    { question: "How do I schedule a video visit at Benton County Jail?", answer: "Schedule visits in advance online or at the kiosks in the detention center lobby. Confirm the current scheduling steps and visit times with the jail before your first visit." },
    { question: "How do I send mail to an inmate at Benton County Jail?", answer: "Address mail to the inmate's full name and booking number at Benton County Jail, 1300 SW 14th Street, Bentonville, AR 72712. Include a return address." },
    { question: "Can I call an inmate at Benton County Jail directly?", answer: "No. Inmates place outgoing calls on prepaid accounts. You cannot call an inmate directly." },
    { question: "How do I block calls from Benton County Jail?", answer: "Ask the phone provider to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
    { question: "How do I post bond for someone at Benton County Jail?", answer: "Call the jail at 479-271-1008 for current bond amounts and posting steps." },
  ],

  relatedFacilitySlugs: ["pulaski-county-detention-facility", "fci-forrest-city", "cummins-unit"],
},

"washington-county-detention-center": {
  id: "f-244",
  name: "Washington County Detention Center",
  slug: "washington-county-detention-center",
  type: "county",
  stateSlug: "arkansas",
  stateName: "Arkansas",
  stateAbbr: "AR",
  countySlug: null,
  countyName: "Washington County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Washington County Jail: Securus Phone and Video Guide",
  seoDescription: "How to contact someone at Washington County Detention Center in Fayetteville AR. Securus for phones and video visitation.",

  description:
    "Washington County Detention Center communication guide. Securus phone calls and video visitation for this Fayetteville AR county jail.",

  overview: [
    "The Washington County Detention Center in Fayetteville, Arkansas, is the primary jail for Washington County, operated by the Washington County Sheriff's Office at 1155 W. Clydesdale Drive. It houses pretrial detainees and sentenced inmates for the county.",
    "Phone calls and video visitation both run through Securus Technologies. Families set up an account on the Securus website to receive calls, fund the inmate's account, and schedule video visits online. Video visitation hours vary, so check the current schedule on the detention center's website or by calling the facility.",
    "Money can be added to inmate accounts online through Access Corrections, by phone, at the lobby kiosk, or by mailed money order. The facility's main line is (479) 444-5700.",
  ],

  address: "1155 W. Clydesdale Drive, Fayetteville, AR 72701",
  phone: "(479) 444-5700",
    notToConfuseWith: "Not to be confused with Washington County Jail in Hillsboro, Oregon.",
  operatedBy: "Washington County Sheriff's Office",

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
      notes: "Phone calls and video visitation. Set up an account on the Securus website to receive calls and schedule visits.",
    },
  ],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed. Ask the jail about current options." },
    video: { status: "available", provider: "Securus", notes: "Video visits scheduled online through the Securus website. Check the current schedule with the facility." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "Securus", notes: "Prepaid and collect calls through Securus. Set up an account to receive calls and fund the inmate's account." },
    moneyTransfer: { status: "available", notes: "Deposits online through Access Corrections, by phone, at the lobby kiosk, or by mailed money order." },
  },

  rules: [
    "Create a Securus account before funding calls or scheduling video visits.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Check the current video visitation schedule with the facility, since hours vary.",
    "Bring a valid government-issued photo ID for any on-site visit.",
    "All calls and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which company handles communication at Washington County Detention Center?", answer: "Securus Technologies, for both phone calls and video visitation. Set up an account on the Securus website." },
    { question: "How do video visits work?", answer: "Schedule visits online through the Securus website. Visitation hours vary, so check the current schedule on the detention center's website or by calling (479) 444-5700." },
    { question: "How do I add money to an inmate's account?", answer: "Online through Access Corrections, by phone, at the kiosk in the detention center lobby, or by mailing a money order to the facility." },
  ],

  relatedFacilitySlugs: ["pulaski-county-detention-facility", "fci-forrest-city", "cummins-unit"],
},

"east-baton-rouge-parish-prison": {
  id: "f-245",
  name: "East Baton Rouge Parish Prison",
  slug: "east-baton-rouge-parish-prison",
  type: "county",
  stateSlug: "louisiana",
  stateName: "Louisiana",
  stateAbbr: "LA",
  countySlug: null,
  countyName: "East Baton Rouge Parish",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "East Baton Rouge Prison: ICSolutions Phone Guide",
  seoDescription: "How to contact someone at East Baton Rouge Parish Prison in Baton Rouge LA. ICSolutions for phones, video visits and messaging.",

  description:
    "East Baton Rouge Parish Prison communication guide. ICSolutions phones, video visits and messaging for this Baton Rouge LA parish jail.",

  overview: [
    "The East Baton Rouge Parish Prison in Baton Rouge, Louisiana, is the main detention center for East Baton Rouge Parish, operated by the East Baton Rouge Parish Sheriff's Office at 2867 Brig. General Isaac Smith Avenue in Scotlandville. It houses pretrial detainees and sentenced inmates.",
    "Inmate communication runs through IC Solutions, which handles the phone system, video visitation, email and texting, and digital letters. Families set up a prepaid account at icsolutions.com or call 1-888-506-8407. Inmates can also rent tablets for calls, messaging, education and entertainment. Friends and family can leave a 30-second voicemail for $0.50 with an established prepaid account.",
    "Visitation is by on-site video, and inmates get two free visits per week. Money can be added at the lobby kiosk or through the facility's approved online deposit service. The prison's main line is 225-355-3311.",
  ],

  address: "2867 Brig. General Isaac Smith Avenue, Baton Rouge, LA 70807",
  phone: "225-355-3311",
  website: "https://www.ebrso.org/Corrections/Parish-Prison",
  operatedBy: "East Baton Rouge Parish Sheriff's Office",

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
      notes: "Phone system, video visitation, email and texting, digital letters, and tablet rentals. Set up a prepaid account at icsolutions.com or 1-888-506-8407.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Email and texting through ICSolutions, including tablet messaging." },
    video: { status: "available", provider: "ICSolutions", notes: "On-site video visitation through ICSolutions. Inmates get two free visits per week." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "ICSolutions", notes: "Prepaid and collect calls through ICSolutions. A 30-second voicemail costs $0.50 with a prepaid account." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through the lobby kiosk and the approved online deposit service. Confirm the current method with the sheriff's office before sending money." },
  },

  rules: [
    "Set up your ICSolutions prepaid account at icsolutions.com or 1-888-506-8407 before the first call.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Inmates get two free on-site video visits per week. Additional visits follow the provider's rates.",
    "Bring a valid government-issued photo ID for any visit, and follow the dress code.",
    "All calls, messages and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which company handles communication at East Baton Rouge Parish Prison?", answer: "IC Solutions. It handles the inmate phone system, video visitation, email and texting, digital letters, and tablet rentals." },
    { question: "How do video visits work?", answer: "Visitation is by on-site video through ICSolutions. Inmates get two free visits per week using the video stations." },
    { question: "Can I leave a voicemail for an inmate?", answer: "Yes. Friends and family can leave a 30-second voicemail for $0.50 by calling with the inmate's ID number and an established ICSolutions prepaid account." },
    { question: "How do I add money to an inmate's account?", answer: "Deposits are reported through the lobby kiosk and the facility's approved online deposit service. Confirm the current method with the sheriff's office before sending." },
      {
        question: "How do I find or search for an inmate at East Baton Rouge Parish Prison?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for East Baton Rouge Parish, Louisiana. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at East Baton Rouge Parish Prison?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at East Baton Rouge Parish Prison?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at East Baton Rouge Parish Prison?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at East Baton Rouge Parish Prison?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["orleans-justice-center", "elayn-hunt-correctional-center", "louisiana-state-penitentiary"],
},

"jefferson-parish-correctional-center": {
  id: "f-246",
  name: "Jefferson Parish Correctional Center",
  slug: "jefferson-parish-correctional-center",
  type: "county",
  stateSlug: "louisiana",
  stateName: "Louisiana",
  stateAbbr: "LA",
  countySlug: null,
  countyName: "Jefferson Parish",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Jefferson Parish Jail: Phones and Video Guide",
  seoDescription: "How to contact someone at Jefferson Parish Correctional Center in Gretna LA. Ally Telecom phones. NCIC video visits and messaging.",

  description:
    "Jefferson Parish Correctional Center communication guide. Ally Telecom phones and NCIC video visits and messaging for this Gretna LA parish jail.",

  overview: [
    "The Jefferson Parish Correctional Center in Gretna, Louisiana, is the parish jail for Jefferson Parish, operated by the Jefferson Parish Sheriff's Office at 100 Dolhonde Street. It houses pretrial detainees and sentenced inmates.",
    "The facility contracts with Ally Telecom Group for its inmate telephone and visitation systems. For remote contact, NCIC provides video visits and messaging at per-item rates: create a prepaid NCIC account at account.ncic.com or by calling the NCIC call center, add funds, and use a compatible device or the supported app.",
    "Deposits to inmate accounts are reported through Forecomm, with limits per deposit and per week, and the intake booking lobby kiosk accepts cash around the clock. The facility's main line is 504-368-5360.",
  ],

  address: "100 Dolhonde Street, Gretna, LA 70053",
  phone: "504-368-5360",
  operatedBy: "Jefferson Parish Sheriff's Office",

  providers: [
    {
      name: "Ally Telecom Group",
      slug: "ally-telecom",
      initial: "A",
      color: "bg-teal-600",
      messaging: false,
      video: false,
      photos: false,
      phone: true,
      moneyTransfer: false,
      notes: "Ally Telecom Group provides the inmate telephone and visitation systems.",
    },
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
      notes: "NCIC provides remote video visits and messaging through prepaid accounts at account.ncic.com.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Messaging at per-item rates through a prepaid NCIC account at account.ncic.com." },
    video: { status: "available", provider: "NCIC", notes: "Remote video visits at per-minute rates through a prepaid NCIC account, on a compatible device or the supported app." },
    photos: { status: "limited", provider: undefined, notes: "Photo sharing is not confirmed. Confirm with the jail." },
    phone: { status: "available", provider: "Ally Telecom Group", notes: "Inmate telephone system. Outgoing calls are billed per minute with no connection fees. Three-way calls are prohibited." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Online deposits are reported through Forecomm with per-deposit and weekly limits, and the lobby kiosk accepts cash. Confirm the current method with the sheriff's office." },
  },

  rules: [
    "Create and fund your NCIC prepaid account at account.ncic.com before video visits or messaging.",
    "Inmates cannot receive incoming calls. The only incoming option is voicemail to approved inmates.",
    "Three-way calls are prohibited on the Ally Telecom phone system.",
    "Bring a valid photo ID and expect screening like metal detection for any visit.",
    "All calls, messages and visits are monitored and recorded.",
  ],

  faq: [
    { question: "Which companies handle communication at Jefferson Parish Correctional Center?", answer: "Ally Telecom Group provides the inmate telephone and visitation systems. NCIC provides remote video visits and messaging through prepaid accounts." },
    { question: "How do remote video visits work?", answer: "Create a prepaid NCIC account at account.ncic.com, add funds, then use a compatible device or the supported app to complete video visits at per-minute rates." },
    { question: "How do I add money to an inmate's account?", answer: "Online deposits are reported through Forecomm, limited per deposit and per week, and the intake booking lobby kiosk accepts cash 24 hours a day. Confirm current limits with the sheriff's office." },
    { question: "Can I call an inmate directly?", answer: "No. You cannot call an inmate directly. The only incoming option is voicemail to approved inmates." },
    { question: "How do I find out if someone is in custody at Jefferson Parish Correctional Center?", answer: "Search the Sheriff's detention center roster by last and first name. If the person does not appear, allow time after booking and try alternate spellings, or call 504-368-5360." },
    { question: "How do I send mail to an inmate at Jefferson Parish Correctional Center?", answer: "Address mail to the inmate's full name and ID number at 100 Dolhonde Street, Gretna, LA 70053. Include a return address." },
    { question: "Can I call an inmate at Jefferson Parish Correctional Center directly?", answer: "No. Inmates place outgoing calls to approved numbers. You cannot call an inmate directly. The only incoming option is voicemail to approved inmates." },
    { question: "How do I block calls from Jefferson Parish Correctional Center?", answer: "Ask the phone provider to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
    { question: "How do I post bond for someone at Jefferson Parish Correctional Center?", answer: "Call the facility at 504-368-5360 for current bond amounts and posting steps." },
  ],

  relatedFacilitySlugs: ["orleans-justice-center", "elayn-hunt-correctional-center", "louisiana-state-penitentiary"],
},

"caddo-correctional-center": {
  id: "f-247",
  name: "Caddo Correctional Center",
  slug: "caddo-correctional-center",
  type: "county",
  stateSlug: "louisiana",
  stateName: "Louisiana",
  stateAbbr: "LA",
  countySlug: null,
  countyName: "Caddo Parish",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Caddo Correctional Center: Video Visits Guide",
  seoDescription: "How to contact someone at Caddo Correctional Center in Shreveport LA. City Tele Coin remote video visits. GettingOut tablet messaging.",

  description:
    "Caddo Correctional Center communication guide. City Tele Coin remote video visits and GettingOut tablet messaging for this Shreveport LA parish jail.",

  overview: [
    "The Caddo Correctional Center in Shreveport, Louisiana, is the parish jail for Caddo Parish, operated by the Caddo Parish Sheriff's Office. It is a direct-supervision facility with pod-style housing, and it houses pretrial detainees and sentenced inmates.",
    "Remote video visitation runs through City Tele Coin: visitors establish an account by calling (318) 746-1114, then schedule video visits during regular visitation hours. On-site video visitation stations in the lobby give inmates two free visits per week. Inmates also use Telmate tablets with GettingOut accounts for messaging, photos, music and reading.",
    "Inmates can make outgoing collect calls during approved hours but cannot receive incoming calls. Deposits to trust accounts are reported through AccessCorrections online, by phone, or at the lobby kiosk. The facility's main line is 318-677-5254.",
  ],

  phone: "318-677-5254",
  operatedBy: "Caddo Parish Sheriff's Office",

  providers: [
    {
      name: "GettingOut",
      slug: "gettingout",
      initial: "G",
      color: "bg-violet-600",
      messaging: true,
      video: false,
      photos: true,
      phone: false,
      moneyTransfer: false,
      notes: "Telmate tablets with GettingOut accounts for messaging, photos, music and reading.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Messaging on Telmate tablets through GettingOut accounts at gettingout.com." },
    video: { status: "available", provider: "City Tele Coin", notes: "Remote video visits daily during regular visitation hours. Establish an account by calling (318) 746-1114, then schedule per inmate." },
    photos: { status: "available", provider: "GettingOut", notes: "Photo receiving on Telmate tablets through GettingOut accounts." },
    phone: { status: "limited", provider: undefined, notes: "Outgoing collect calls are allowed during approved hours, but the phone vendor is not confirmed. Call 318-677-5254 for setup details." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Deposits are reported through AccessCorrections online, by phone, or at the lobby kiosk. Confirm the current method with the sheriff's office." },
  },

  rules: [
    "Call (318) 746-1114 to establish your City Tele Coin account before scheduling remote video visits.",
    "Inmates get two free on-site video visits per week. Remote visits run daily during regular visitation hours.",
    "Inmates cannot receive incoming calls. All phone contact is inmate-initiated.",
    "Complete the visitor registration and background screening as early as possible. Approval is not guaranteed.",
    "Bring a valid government-issued photo ID and proof of US residency for visits.",
  ],

  faq: [
    { question: "How do remote video visits work at Caddo Correctional Center?", answer: "Through City Tele Coin. Call (318) 746-1114 to establish an account, then schedule video visits for each inmate during regular visitation hours." },
    { question: "Can inmates message from tablets?", answer: "Yes. Inmates use Telmate tablets with GettingOut accounts for messaging, receiving photos, music and reading." },
    { question: "How do I add money to an inmate's trust account?", answer: "Deposits are reported through AccessCorrections online, by phone at 866-345-1884, or at the kiosk in the main lobby. Daily deposit limits apply." },
    { question: "What are the visitation hours?", answer: "Visitation hours vary by inmate and housing unit. Confirm the inmate's visiting day and time with the facility before traveling, and arrive with a valid government-issued photo ID. Inmates are limited to one visit per day." },
    { question: "How do I find out if someone is in custody at Caddo Correctional Center?", answer: "Use the Caddo Parish Sheriff's inmate and jail info listing for currently housed inmates. If the person does not appear, allow time after booking and try alternate spellings, or call 318-677-5254." },
    { question: "How do I send mail to an inmate at Caddo Correctional Center?", answer: "Address mail to the inmate's full name, booking number, and housing unit at the correctional center. Include a return address. All incoming mail is inspected for contraband." },
    { question: "Can I call an inmate at Caddo Correctional Center directly?", answer: "No. Inmates place outgoing calls during approved hours. You cannot call an inmate directly." },
    { question: "How do I block calls from Caddo Correctional Center?", answer: "Ask the phone provider to block the number, or block it through your own phone carrier. You can also ask the facility to remove your number from the approved list." },
    { question: "How do I post bond for someone at Caddo Correctional Center?", answer: "Call the facility at 318-677-5254 for current bond amounts and posting steps." },
  ],

  relatedFacilitySlugs: ["orleans-justice-center", "elayn-hunt-correctional-center", "louisiana-state-penitentiary"],
},

}
