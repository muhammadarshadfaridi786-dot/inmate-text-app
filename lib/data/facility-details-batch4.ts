import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS, Batch 4 (40 facilities added to replace placeholder redirects)
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH4: Record<string, FacilityDetail> = {

"fci-cumberland": {
  id: "f-101",
  name: "FCI Cumberland",
  slug: "fci-cumberland",
  type: "federal",
  stateSlug: "maryland",
  stateName: "Maryland",
  stateAbbr: "MD",
  countySlug: null,
  countyName: "Allegany County",
  securityLevel: "Low / Camp",
  hasDetailPage: true,
  seoTitle: "FCI Cumberland: CorrLinks Messaging and ConnectNetwork",
  seoDescription: "How to contact someone at FCI Cumberland in Maryland. CorrLinks for electronic messaging. ConnectNetwork for phone calls.",

  description:
    "FCI Cumberland communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this western Maryland facility.",

  overview: [
    "Federal Correctional Institution Cumberland is a federal prison located in Allegany County in the mountains of western Maryland, not far from the Pennsylvania and West Virginia borders. The facility includes a main institution along with an adjacent minimum-security satellite camp, and it has operated under Bureau of Prisons management since it opened in the 1990s. Because Cumberland sits in a more rural part of the state, some families travel a fair distance to visit, which makes remote communication tools like CorrLinks especially important for staying in touch day to day.",
    "Communication at FCI Cumberland follows standard BOP procedures. CorrLinks handles electronic messaging through the TRULINCS system, and the inmate must initiate or approve contact before any messages can be exchanged. Phone calls run through ConnectNetwork, the BOP's calling platform used across the federal system. Families should expect the same basic structure they would find at most BOP facilities: inmate-initiated contact, monitored communications, and a phone and commissary account funded separately from the messaging account.",
    "If your loved one is housed at the satellite camp rather than the main institution, it is worth confirming this when you set up your CorrLinks and ConnectNetwork accounts, since the two units share a facility code but can have different daily schedules. FCI Cumberland does not offer remote video visitation. In-person visiting is available but requires an approved visitor application, so families planning a visit should start that paperwork early rather than waiting until just before a planned trip.",
  ],

  address: "14601 Burbridge Road SE, Cumberland, MD 21502",
  phone: "(301) 784-1000",
  website: "https://www.bop.gov/locations/institutions/cum/",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    commissary: "Do NOT send money to an inmate using this facility address. All funds sent through the mail must be addressed to a processing center in Des Moines, Iowa. Applies to all Federal inmates",
  inmateCapacity: 1395,
  established: 1994,
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
      notes: "Federal messaging via TRULINCS/CorrLinks. Inmate must initiate or approve contact.",
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
      notes: "BOP phone system and trust fund deposits for both the main institution and the satellite camp.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Available. Inmate must send the first invitation." },
    video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Cumberland." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls through the standard BOP phone system." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or the BOP money order process." },
  },

  rules: [
    "CorrLinks contact requires inmate initiation. Create your account first, then wait for the inmate's invitation.",
    "Confirm whether your loved one is in the main institution or the satellite camp, since schedules can differ.",
    "Remote video visitation is not available. In-person visits require an approved visitor application in advance.",
    "All BOP communications are monitored under standard Bureau of Prisons policy.",
    "Phone and commissary accounts are funded separately through ConnectNetwork.",
  ],

  faq: [
    { question: "How do I start messaging someone at FCI Cumberland?", answer: "Create a free account at corrlinks.com. You cannot message first. The inmate must send you an invitation from the TRULINCS terminal or approve a request you submit through the system. Once approved, both sides can exchange messages for a small per-message fee." },
    { question: "How do phone calls work at FCI Cumberland?", answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds tied to your phone number. The inmate places the call to you. Calls are not initiated from the outside." },
    { question: "Is my family member at the main FCI or the camp?", answer: "Both share the same Cumberland grounds and BOP facility code. Use the BOP inmate locator at bop.gov/inmateloc to confirm the specific unit, since day-to-day schedules can differ between the main institution and the camp." },
    { question: "Can I visit someone at FCI Cumberland in person?", answer: "Yes. You must submit a visitor application and pass a background review before being added to the inmate's approved visitor list. Processing can take several weeks, so apply as early as possible. Current forms are available at bop.gov." },
    { question: "How do I send money to an FCI Cumberland inmate?", answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by mail using the BOP lockbox instructions at bop.gov. Western Union Quick Collect and MoneyGram are also accepted. Processing usually takes one to three business days." },
      {
        question: "How do I find or search for an inmate at FCI Cumberland?",
        answer: "Use the BOP Inmate Locator at bop.gov/inmateloc. Search by the inmate's full name and register number. If the person does not appear, allow time for intake processing and try alternate spellings of the name.",
      },
      {
        question: "How do I send mail to an inmate at FCI Cumberland?",
        answer: "Address mail with the inmate's full name and register number, plus FCI Cumberland and the facility mailing address. Confirm the current inmate mailing address on the BOP facility page before sending, since the main institution and the satellite camp use different mail handling.",
      },
      {
        question: "Can I receive incoming calls from an inmate at FCI Cumberland?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved call list.",
      },
      {
        question: "How do I block or stop calls from an inmate at FCI Cumberland?",
        answer: "Contact ConnectNetwork and ask to block calls from the facility, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved call list.",
      },
  ],

  relatedFacilitySlugs: ["fci-danbury", "federal-correctional-complex-butner", "fci-edgefield"],
},

"fci-hazelton": {
  id: "f-102",
  name: "FCI Hazelton",
  slug: "fci-hazelton",
  type: "federal",
  stateSlug: "west-virginia",
  stateName: "West Virginia",
  stateAbbr: "WV",
  countySlug: null,
  countyName: "Preston County",
  securityLevel: "Medium / Camp",
  hasDetailPage: true,
  seoTitle: "FCI Hazelton: CorrLinks Messaging and ConnectNetwork Phone",
  seoDescription: "How to contact someone at FCI Hazelton in West Virginia. CorrLinks for electronic messaging. ConnectNetwork for phone calls.",

  description:
    "FCI Hazelton communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this West Virginia medium-security facility.",

  overview: [
    "Federal Correctional Institution Hazelton is a medium-security federal prison in Preston County in north-central West Virginia. It sits within a larger federal correctional complex that also includes a high-security penitentiary and a secure facility for female inmates, so it is worth double-checking which specific unit your loved one is housed in before setting up communication accounts, since several institutions share the same general location. Hazelton has been operating under Bureau of Prisons management since the mid-2010s.",
    "Communication at FCI Hazelton follows standard BOP procedures. CorrLinks provides electronic messaging through the TRULINCS system, and the inmate must initiate or approve any contact before messages can be exchanged. Phone calls run through ConnectNetwork, the BOP's standard calling platform. As a medium-security facility, phone and messaging access at Hazelton tends to be more structured than at a minimum-security camp, with set call windows and monitored usage, which is typical for BOP institutions at this security level.",
    "Because the Hazelton complex includes multiple separate facilities under similar names, families should confirm the exact institution code using the BOP inmate locator before mailing anything or setting up accounts. FCI Hazelton does not offer remote video visitation. In-person visits require an approved visitor application, and because background checks can take time, it is a good idea to start that process as soon as possible.",
  ],

  address: "1640 Sky View Drive, Bruceton Mills, WV 26525",
  phone: "(304) 379-1500",
  website: "https://www.bop.gov/locations/institutions/haf/",
    rosterUrl: "https://www.bop.gov/inmateloc/",
  inmateCapacity: 2003,
  established: 2015,
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
      notes: "Federal messaging via TRULINCS/CorrLinks. Inmate must initiate or approve contact.",
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
      notes: "BOP phone system and trust fund deposits, with structured call windows typical of medium-security facilities.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Available. Inmate must send the first invitation." },
    video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Hazelton." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls with monitored, scheduled access typical of medium security." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or the BOP money order process." },
  },

  rules: [
    "CorrLinks contact requires inmate initiation. Create your account first, then wait for the inmate's invitation.",
    "Confirm the exact institution code, since the Hazelton complex includes more than one separate facility.",
    "Remote video visitation is not available. In-person visits require an approved visitor application in advance.",
    "All BOP communications are monitored under standard Bureau of Prisons policy.",
    "Phone and commissary accounts are funded separately through ConnectNetwork.",
  ],

  faq: [
    { question: "How do I start messaging someone at FCI Hazelton?", answer: "Create a free account at corrlinks.com. You cannot message first. The inmate must send you an invitation from the TRULINCS terminal or approve a request you submit through the system. Once approved, both sides can exchange messages for a small per-message fee." },
    { question: "How do phone calls work at FCI Hazelton?", answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds tied to your phone number. Calls come from the inmate, generally within scheduled windows typical of medium-security facilities." },
    { question: "How do I know if my family member is at FCI Hazelton or another nearby facility?", answer: "The Hazelton complex includes several separate institutions. Use the BOP inmate locator at bop.gov/inmateloc to confirm the exact facility code before setting up accounts or sending mail." },
    { question: "Can I visit someone at FCI Hazelton in person?", answer: "Yes. You must submit a visitor application and pass a background review before being added to the approved visitor list. Processing can take several weeks. Current forms and procedures are available at bop.gov." },
    { question: "How do I send money to an FCI Hazelton inmate?", answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by mail using the BOP lockbox instructions at bop.gov. Western Union Quick Collect and MoneyGram are also accepted, with processing typically taking one to three business days." },
      {
        question: "How do I find or search for an inmate at FCI Hazelton?",
        answer: "Use the official inmate search at https://www.bop.gov/inmateloc/. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at FCI Hazelton?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at FCI Hazelton?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at FCI Hazelton?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at FCI Hazelton?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["fci-leavenworth", "federal-correctional-complex-petersburg", "fci-forrest-city"],
},

"fci-yankton": {
  id: "f-103",
  name: "FCI Yankton",
  slug: "fci-yankton",
  type: "federal",
  stateSlug: "south-dakota",
  stateName: "South Dakota",
  stateAbbr: "SD",
  countySlug: null,
  countyName: "Yankton County",
  securityLevel: "Minimum",
  hasDetailPage: true,
  seoTitle: "FCI Yankton: CorrLinks Messaging and ConnectNetwork Phone",
  seoDescription: "How to contact someone at FCI Yankton in South Dakota. CorrLinks for electronic messaging. ConnectNetwork for phone calls.",

  description:
    "FCI Yankton communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this South Dakota minimum-security camp.",

  overview: [
    "This minimum-security federal facility sits on the former campus of Yankton College in southeastern South Dakota, and its official Bureau of Prisons designation is FPC Yankton, or Federal Prison Camp Yankton. It houses male inmates in a dormitory-style camp setting rather than a traditional cell block, which is standard for minimum-security federal camps. The facility has operated under BOP management since the late 1980s and is one of the smaller institutions in the federal system.",
    "Communication at FCI Yankton follows standard BOP procedures, though minimum-security camps like this one generally offer inmates broader day-to-day access than higher-security facilities. CorrLinks handles electronic messaging through the TRULINCS system, and the inmate must initiate or approve contact before messages can be exchanged. Phone calls run through ConnectNetwork, and because camp inmates typically have more movement and free time than those at higher-security institutions, families often find phone access here to be somewhat more routine.",
    "FCI Yankton does not offer remote video visitation. In-person visiting is available, but it requires an approved visitor application submitted in advance, along with a background review. Given the facility's smaller size and rural location, families should confirm current visiting hours directly with the facility or through the BOP website before planning a trip.",
  ],

  address: "1016 Douglas Avenue, Yankton, SD 57078",
  phone: "(605) 665-3262",
  website: "https://www.bop.gov/locations/institutions/yan/",
    mailingAddress: "INMATE NAME and REGISTER NUMBER, Federal Prison Camp, P.O. BOX 700, YANKTON, SD 57078",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    commissary: "Do NOT send money to an inmate using this facility address. All funds sent through the mail must be addressed to a processing center in Des Moines, Iowa. Applies to all Federal inmates",
  inmateCapacity: 450,
  established: 1988,
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
      notes: "Federal messaging via TRULINCS/CorrLinks. Inmate must initiate or approve contact.",
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
      notes: "BOP phone system and trust fund deposits. Minimum-security status typically means more routine phone access.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Available. Inmate must send the first invitation." },
    video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Yankton." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls. Minimum-security camp status generally allows more frequent access." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or the BOP money order process." },
  },

  rules: [
    "CorrLinks contact requires inmate initiation. Create your account first, then wait for the inmate's invitation.",
    "The facility's official BOP name is FPC Yankton. Use this when searching the BOP inmate locator.",
    "Remote video visitation is not available. In-person visits require an approved visitor application in advance.",
    "All BOP communications are monitored under standard Bureau of Prisons policy.",
    "Phone and commissary accounts are funded separately through ConnectNetwork.",
  ],

  faq: [
    { question: "How do I start messaging someone at FCI Yankton?", answer: "Create a free account at corrlinks.com. You cannot message first. The inmate must send you an invitation from the TRULINCS terminal or approve a request you submit through the system. Once approved, both sides can exchange messages for a small per-message fee." },
    { question: "How do phone calls work at FCI Yankton?", answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds tied to your phone number. As a minimum-security camp, inmates here generally have broader access to facility phones than at higher-security institutions." },
    { question: "Is FCI Yankton the same as FPC Yankton?", answer: "Yes. The facility operates as a minimum-security federal prison camp, and its official BOP designation is FPC Yankton. Both names refer to the same location." },
    { question: "Can I visit someone at FCI Yankton in person?", answer: "Yes. You must submit a visitor application and pass a background review before being added to the approved visitor list. Processing can take several weeks. Current procedures are available at bop.gov." },
    { question: "How do I send money to an FCI Yankton inmate?", answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by mail using the BOP lockbox instructions at bop.gov. Western Union Quick Collect and MoneyGram are also accepted, with processing typically taking one to three business days." },
      {
        question: "How do I find or search for an inmate at FCI Yankton?",
        answer: "Use the BOP Inmate Locator at bop.gov/inmateloc. Search by full name and register number. The facility's official BOP name is FPC Yankton, so use that name if a search asks for the facility.",
      },
      {
        question: "How do I send mail to an inmate at FCI Yankton?",
        answer: "Address mail as follows: INMATE NAME and REGISTER NUMBER, Federal Prison Camp, P.O. BOX 700, YANKTON, SD 57078. Include the inmate's full name and register number on every envelope.",
      },
      {
        question: "Can I receive incoming calls from an inmate at FCI Yankton?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved call list.",
      },
      {
        question: "How do I block or stop calls from an inmate at FCI Yankton?",
        answer: "Contact ConnectNetwork and ask to block calls from the facility, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved call list.",
      },
  ],

  relatedFacilitySlugs: ["fci-danbury", "fci-ray-brook", "fmc-devens"],
},

"fmc-devens": {
  id: "f-104",
  name: "FMC Devens",
  slug: "fmc-devens",
  type: "federal",
  stateSlug: "massachusetts",
  stateName: "Massachusetts",
  stateAbbr: "MA",
  countySlug: null,
  countyName: "Worcester County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "FMC Devens: CorrLinks Messaging and ConnectNetwork Phone",
  seoDescription: "How to contact someone at FMC Devens in Massachusetts. CorrLinks for electronic messaging. ConnectNetwork for phone calls.",

  description:
    "FMC Devens communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this Massachusetts federal medical center.",

  overview: [
    "Federal Medical Center Devens is an administrative-security federal prison in Worcester County, Massachusetts, that specializes in medical and mental health care for male inmates. As a federal medical center, or FMC, Devens serves as a referral site for inmates from across the federal system who need ongoing medical treatment, surgery, or mental health services beyond what a standard institution can provide. The facility also includes an adjacent minimum-security satellite camp on the same grounds.",
    "Because FMC Devens houses inmates with significant medical or mental health needs, communication and visiting procedures can be a bit different than at a standard federal prison. Some inmates may have limited ability to use the TRULINCS terminals depending on their treatment schedule or medical condition, so families should be patient if responses are slower than expected. CorrLinks still handles electronic messaging, and the inmate must initiate or approve contact before messages can be exchanged. Phone calls run through ConnectNetwork, the standard BOP calling platform.",
    "FMC Devens does not offer remote video visitation. In-person visits are available and generally follow standard BOP visiting rules, though families should check ahead of time in case a loved one's medical treatment affects visiting availability on a given day. A visitor application and background review are required before an in-person visit can be scheduled, so it is worth starting that process early.",
  ],

  address: "42 Patton Road, Ayer, MA 01432",
  phone: "(978) 796-1000",
  website: "https://www.bop.gov/locations/institutions/dev/",
    mailingAddress: "INMATE NAME and REGISTER NUMBER, FMC Devens, FEDERAL MEDICAL CENTER, P.O. BOX 879, AYER, MA 01432",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    commissary: "Do NOT send money to an inmate using this facility address. All funds sent through the mail must be addressed to a processing center in Des Moines, Iowa. Applies to all Federal inmates",
  inmateCapacity: 1000,
  established: 1999,
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
      notes: "Federal messaging via TRULINCS/CorrLinks. Response times can vary depending on an inmate's medical treatment schedule.",
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
      notes: "BOP phone system and trust fund deposits, available to the general and medical inmate populations alike.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Available, though response times may vary with an inmate's medical or treatment schedule." },
    video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FMC Devens." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls through the standard BOP phone system." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or the BOP money order process." },
  },

  rules: [
    "CorrLinks contact requires inmate initiation. Create your account first, then wait for the inmate's invitation.",
    "FMC Devens is a medical referral center, so messaging and call frequency can vary with treatment schedules.",
    "Remote video visitation is not available. In-person visits require an approved visitor application in advance.",
    "All BOP communications are monitored under standard Bureau of Prisons policy.",
    "Phone and commissary accounts are funded separately through ConnectNetwork.",
  ],

  faq: [
    { question: "How do I start messaging someone at FMC Devens?", answer: "Create a free account at corrlinks.com. You cannot message first. The inmate must send you an invitation from the TRULINCS terminal or approve a request you submit through the system. Keep in mind that medical treatment schedules can sometimes slow down response times." },
    { question: "How do phone calls work at FMC Devens?", answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds tied to your phone number. The inmate calls you directly, subject to facility scheduling." },
    { question: "Why does FMC Devens have different procedures than other federal prisons?", answer: "FMC Devens is a Federal Medical Center that treats inmates with significant medical or mental health needs. Some day-to-day routines, including communication access, can be affected by an individual's treatment plan." },
    { question: "Can I visit someone at FMC Devens in person?", answer: "Yes. You must submit a visitor application and pass a background review before being added to the approved visitor list. It is a good idea to confirm visiting availability ahead of time, since medical appointments can occasionally affect scheduling." },
    { question: "How do I send money to an FMC Devens inmate?", answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by mail using the BOP lockbox instructions at bop.gov. Western Union Quick Collect and MoneyGram are also accepted, with processing typically taking one to three business days." },
      {
        question: "How do I find or search for an inmate at FMC Devens?",
        answer: "Use the BOP Inmate Locator at bop.gov/inmateloc. Search by full name and register number. Confirm whether the person is at the medical center or the satellite camp, since the two units share the same mailing address but have different routines.",
      },
      {
        question: "How do I send mail to an inmate at FMC Devens?",
        answer: "Address mail as follows: INMATE NAME and REGISTER NUMBER, FMC Devens, FEDERAL MEDICAL CENTER, P.O. BOX 879, AYER, MA 01432. For the camp, add SATELLITE CAMP after the facility name. Include the inmate's full name and register number on every envelope.",
      },
      {
        question: "Can I visit someone who is in the medical unit at FMC Devens?",
        answer: "Visiting depends on the inmate's medical status and housing unit. Contact the facility or the inmate's unit team before traveling to confirm whether visits are permitted and what restrictions apply.",
      },
      {
        question: "How do I block or stop calls from an inmate at FMC Devens?",
        answer: "Contact ConnectNetwork and ask to block calls from the facility, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved call list.",
      },
  ],

  relatedFacilitySlugs: ["fci-danbury", "federal-correctional-complex-butner", "fmc-rochester"],
},

"fci-edgefield": {
  id: "f-105",
  name: "FCI Edgefield",
  slug: "fci-edgefield",
  type: "federal",
  stateSlug: "south-carolina",
  stateName: "South Carolina",
  stateAbbr: "SC",
  countySlug: null,
  countyName: "Edgefield County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "FCI Edgefield: CorrLinks Messaging and ConnectNetwork Phone",
  seoDescription: "How to contact someone at FCI Edgefield in South Carolina. CorrLinks for electronic messaging. ConnectNetwork for phone calls.",

  description:
    "FCI Edgefield communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this South Carolina medium-security facility.",

  overview: [
    "Federal Correctional Institution Edgefield is a medium-security federal prison in Edgefield County in western South Carolina, near the Georgia border. The facility includes a main institution along with an adjacent minimum-security satellite camp, both operating under Bureau of Prisons management since the late 1990s. Edgefield houses a fairly large male population, and families reaching out for the first time should expect the standard structure and pacing of a medium-security BOP facility.",
    "Communication at FCI Edgefield follows standard BOP procedures. CorrLinks provides electronic messaging through the TRULINCS system, and the inmate must initiate or approve contact before messages can be exchanged. Phone calls run through ConnectNetwork, the BOP's calling platform. As a medium-security institution, phone and messaging access tends to follow set schedules and monitored usage windows, which is typical for facilities at this security level rather than a camp.",
    "If your loved one is at the satellite camp rather than the main FCI, it's worth confirming this when setting up accounts, since the two share a facility code but can differ in daily routine. FCI Edgefield does not offer remote video visitation. In-person visits require an approved visitor application and background check, so families planning a trip should begin that process well ahead of time.",
  ],

  address: "501 Gary Hill Road, Edgefield, SC 29824",
  phone: "(803) 637-1500",
  website: "https://www.bop.gov/locations/institutions/edg/",
    mailingAddress: "INMATE NAME and REGISTER NUMBER, FCI Edgefield, FEDERAL CORRECTIONAL INSTITUTION, P.O. BOX 725, EDGEFIELD, SC 29824",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    commissary: "Do NOT send money to an inmate using this facility address. All funds sent through the mail must be addressed to a processing center in Des Moines, Iowa. Applies to all Federal inmates",
  established: 1998,
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
      notes: "Federal messaging via TRULINCS/CorrLinks. Inmate must initiate or approve contact.",
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
      notes: "BOP phone system and trust fund deposits, with scheduled call windows typical of medium security.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Available. Inmate must send the first invitation." },
    video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FCI Edgefield." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls with monitored, scheduled access typical of medium security." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or the BOP money order process." },
  },

  rules: [
    "CorrLinks contact requires inmate initiation. Create your account first, then wait for the inmate's invitation.",
    "Confirm whether your loved one is in the main institution or the satellite camp, since schedules can differ.",
    "Remote video visitation is not available. In-person visits require an approved visitor application in advance.",
    "All BOP communications are monitored under standard Bureau of Prisons policy.",
    "Phone and commissary accounts are funded separately through ConnectNetwork.",
  ],

  faq: [
    { question: "How do I start messaging someone at FCI Edgefield?", answer: "Create a free account at corrlinks.com. You cannot message first. The inmate must send you an invitation from the TRULINCS terminal or approve a request you submit through the system. Once approved, both sides can exchange messages for a small per-message fee." },
    { question: "How do phone calls work at FCI Edgefield?", answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds tied to your phone number. The inmate calls you directly within scheduled windows typical of medium-security facilities." },
    { question: "Is my family member at the main FCI or the camp?", answer: "Both share the Edgefield grounds and BOP facility code. Use the BOP inmate locator at bop.gov/inmateloc to confirm the specific unit, since routines can differ between the FCI and the camp." },
    { question: "Can I visit someone at FCI Edgefield in person?", answer: "Yes. You must submit a visitor application and pass a background review before being added to the approved visitor list. Processing can take several weeks, so apply early. Current forms are available at bop.gov." },
    { question: "How do I send money to an FCI Edgefield inmate?", answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by mail using the BOP lockbox instructions at bop.gov. Western Union Quick Collect and MoneyGram are also accepted, with processing typically taking one to three business days." },
      {
        question: "How do I find or search for an inmate at FCI Edgefield?",
        answer: "Use the official inmate search at https://www.bop.gov/inmateloc/. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at FCI Edgefield?",
        answer: "Address mail as follows: INMATE NAME and REGISTER NUMBER, FCI Edgefield, FEDERAL CORRECTIONAL INSTITUTION, P.O. BOX 725, EDGEFIELD, SC 29824. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "Can I receive incoming calls from an inmate at FCI Edgefield?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at FCI Edgefield?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at FCI Edgefield?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman", "federal-correctional-complex-petersburg", "fci-forrest-city"],
},

"fmc-rochester": {
  id: "f-106",
  name: "FMC Rochester",
  slug: "fmc-rochester",
  type: "federal",
  stateSlug: "minnesota",
  stateName: "Minnesota",
  stateAbbr: "MN",
  countySlug: null,
  countyName: "Olmsted County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "FMC Rochester: CorrLinks Messaging and ConnectNetwork Phone",
  seoDescription: "How to contact someone at FMC Rochester in Minnesota. CorrLinks for electronic messaging. ConnectNetwork for phone calls.",

  description:
    "FMC Rochester communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this Minnesota federal medical center.",

  overview: [
    "Federal Medical Center Rochester is an administrative-security federal prison in Olmsted County, Minnesota, that functions as a psychiatric and medical referral center for the Bureau of Prisons. The building previously served as a state mental hospital before being converted for federal use in the 1980s, and it now houses male inmates who need ongoing medical or mental health treatment beyond what a standard institution can offer.",
    "Because FMC Rochester serves a medical and psychiatric population, communication routines can look a little different than at a typical federal prison. CorrLinks still provides electronic messaging through TRULINCS, and the inmate must initiate or approve contact before messages can be exchanged. Some inmates may have limited access to the messaging terminals depending on their treatment plan, so families should be patient if replies take longer than expected. Phone calls run through ConnectNetwork, the standard BOP calling platform.",
    "FMC Rochester does not offer remote video visitation. In-person visits are available and follow standard BOP visiting rules, though it's worth checking ahead of a planned trip in case medical appointments affect scheduling for a specific day. A visitor application and background review are required before a visit can be arranged.",
  ],

  address: "2110 East Center Street, Rochester, MN 55904",
  phone: "(507) 287-0674",
  website: "https://www.bop.gov/locations/institutions/rch/",
    mailingAddress: "INMATE NAME and REGISTER NUMBER, FMC Rochester, FEDERAL MEDICAL CENTER, P.O. BOX 4000, ROCHESTER, MN 55903",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    commissary: "Do NOT send money to an inmate using this facility address. All funds sent through the mail must be addressed to a processing center in Des Moines, Iowa. Applies to all Federal inmates",
  established: 1984,
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
      notes: "Federal messaging via TRULINCS/CorrLinks. Response times can vary depending on an inmate's medical or psychiatric treatment schedule.",
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
      notes: "BOP phone system and trust fund deposits, available to the medical and psychiatric inmate population.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Available, though response times may vary with an inmate's treatment schedule." },
    video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at FMC Rochester." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls through the standard BOP phone system." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or the BOP money order process." },
  },

  rules: [
    "CorrLinks contact requires inmate initiation. Create your account first, then wait for the inmate's invitation.",
    "FMC Rochester is a medical and psychiatric referral center, so messaging and call frequency can vary with treatment schedules.",
    "Remote video visitation is not available. In-person visits require an approved visitor application in advance.",
    "All BOP communications are monitored under standard Bureau of Prisons policy.",
    "Phone and commissary accounts are funded separately through ConnectNetwork.",
  ],

  faq: [
    { question: "How do I start messaging someone at FMC Rochester?", answer: "Create a free account at corrlinks.com. You cannot message first. The inmate must send you an invitation from the TRULINCS terminal or approve a request you submit through the system. Treatment schedules can sometimes slow down response times." },
    { question: "How do phone calls work at FMC Rochester?", answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds tied to your phone number. The inmate calls you directly, subject to facility scheduling." },
    { question: "Why is FMC Rochester different from a standard federal prison?", answer: "FMC Rochester is a Federal Medical Center that treats inmates with significant medical or psychiatric needs. Day-to-day routines, including messaging and phone access, can be affected by an individual's treatment plan." },
    { question: "Can I visit someone at FMC Rochester in person?", answer: "Yes. You must submit a visitor application and pass a background review before being added to the approved visitor list. Confirm visiting availability ahead of your trip, since medical appointments can occasionally affect scheduling." },
    { question: "How do I send money to an FMC Rochester inmate?", answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by mail using the BOP lockbox instructions at bop.gov. Western Union Quick Collect and MoneyGram are also accepted, with processing typically taking one to three business days." },
      {
        question: "How do I find or search for an inmate at FMC Rochester?",
        answer: "Use the BOP Inmate Locator at bop.gov/inmateloc. Search by full name and register number. Because Rochester is a medical center, people are often transferred in for treatment, so confirm the current location before mailing or visiting.",
      },
      {
        question: "How do I send mail to an inmate at FMC Rochester?",
        answer: "Address mail as follows: INMATE NAME and REGISTER NUMBER, FMC Rochester, FEDERAL MEDICAL CENTER, P.O. BOX 4000, ROCHESTER, MN 55903. Include the inmate's full name and register number on every envelope.",
      },
      {
        question: "Can I visit someone who is in the medical unit at FMC Rochester?",
        answer: "Visiting depends on the inmate's medical status and housing unit. Contact the facility or the inmate's unit team before traveling to confirm whether visits are permitted and what restrictions apply.",
      },
      {
        question: "Can I receive incoming calls from an inmate at FMC Rochester?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved call list.",
      },
  ],

  relatedFacilitySlugs: ["fmc-devens", "federal-correctional-complex-butner", "adx-florence"],
},

"fci-forrest-city": {
  id: "f-107",
  name: "FCI Forrest City",
  slug: "fci-forrest-city",
  type: "federal",
  stateSlug: "arkansas",
  stateName: "Arkansas",
  stateAbbr: "AR",
  countySlug: null,
  countyName: "St. Francis County",
  securityLevel: "Low / Medium",
  hasDetailPage: true,
  seoTitle: "FCI Forrest City: CorrLinks Messaging and ConnectNetwork",
  seoDescription: "How to contact someone at FCI Forrest City in Arkansas. CorrLinks for electronic messaging. ConnectNetwork for phone calls.",

  description:
    "FCI Forrest City communication guide. Find CorrLinks messaging and BOP phone options for families of federal inmates at this Arkansas federal correctional complex.",

  overview: [
    "FCI Forrest City is part of the Federal Correctional Complex in Forrest City, Arkansas, which includes both a low-security institution and a medium-security institution operating on the same grounds in St. Francis County, in the eastern part of the state. Because both facilities sit at the same complex and share similar names, it's important for families to confirm the exact security level and institution code for their loved one before mailing anything or setting up communication accounts.",
    "Communication across the Forrest City complex follows standard BOP procedures. CorrLinks handles electronic messaging through the TRULINCS system, and the inmate must initiate or approve contact before messages can be exchanged. Phone calls run through ConnectNetwork, the BOP's calling platform. Inmates at the low-security facility generally have somewhat more relaxed phone and movement schedules than those at the medium-security facility, though both follow the same basic communication structure.",
    "Neither institution at the Forrest City complex offers remote video visitation. In-person visits are available at both facilities but require an approved visitor application and background review beforehand. Because the complex houses a large combined population, families should confirm current visiting hours and any facility-specific rules directly through the BOP website before planning a trip.",
  ],

  address: "1400 Dale Bumpers Road, Forrest City, AR 72335",
  phone: "(870) 494-4200",
  website: "https://www.bop.gov/locations/institutions/fom/",
    visitingHours: "Saturdays, Sundays, and federal holidays, 8:00 AM to 3:00 PM. Confirm the schedule with the facility before traveling, since hours can change.",
    rosterUrl: "https://www.bop.gov/inmateloc/",
    commissary: "Do NOT send money to an inmate using this facility address. All funds sent through the mail must be addressed to a processing center in Des Moines, Iowa. Applies to all Federal inmates",
  inmateCapacity: 1064,
  established: 2004,
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
      notes: "Federal messaging via TRULINCS/CorrLinks. Inmate must initiate or approve contact.",
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
      notes: "BOP phone system and trust fund deposits, shared across the low and medium facilities at the complex.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Available. Inmate must send the first invitation." },
    video: { status: "unavailable", provider: undefined, notes: "Remote video visitation is not available at the Forrest City complex." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to BOP content restrictions." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Inmate-initiated calls. Access can be somewhat more routine at the low-security unit than the medium-security unit." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust fund deposits via ConnectNetwork or the BOP money order process." },
  },

  rules: [
    "CorrLinks contact requires inmate initiation. Create your account first, then wait for the inmate's invitation.",
    "Confirm the exact institution code (low or medium), since Forrest City has two separate facilities on one complex.",
    "Remote video visitation is not available. In-person visits require an approved visitor application in advance.",
    "All BOP communications are monitored under standard Bureau of Prisons policy.",
    "Phone and commissary accounts are funded separately through ConnectNetwork.",
  ],

  faq: [
    { question: "How do I start messaging someone at FCI Forrest City?", answer: "Create a free account at corrlinks.com. You cannot message first. The inmate must send you an invitation from the TRULINCS terminal or approve a request you submit through the system. Once approved, both sides can exchange messages for a small per-message fee." },
    { question: "How do phone calls work at FCI Forrest City?", answer: "Phone calls use ConnectNetwork. Create an account at connectnetwork.com and add funds tied to your phone number. The inmate calls you directly, with access that varies slightly between the low and medium-security units." },
    { question: "Is my family member at the low or medium facility?", answer: "Forrest City has two separate institutions on the same complex. Use the BOP inmate locator at bop.gov/inmateloc to confirm the exact facility, since mailing addresses and daily routines can differ." },
    { question: "Can I visit someone at FCI Forrest City in person?", answer: "Yes. You must submit a visitor application and pass a background review before being added to the approved visitor list. Processing can take several weeks. Current procedures are available at bop.gov." },
    { question: "How do I send money to an FCI Forrest City inmate?", answer: "Deposits go through ConnectNetwork at connectnetwork.com, or by mail using the BOP lockbox instructions at bop.gov. Western Union Quick Collect and MoneyGram are also accepted, with processing typically taking one to three business days." },
      {
        question: "How do I find or search for an inmate at FCI Forrest City?",
        answer: "Use the BOP Inmate Locator at bop.gov/inmateloc. Search by full name and register number. Confirm whether the person is at the Low, Medium, or Camp unit, since the complex has three separate units with different routines.",
      },
      {
        question: "How do I send mail to an inmate at FCI Forrest City?",
        answer: "Address mail with the inmate's full name and register number, plus FCI Forrest City and the unit (Low, Medium, or Satellite Camp). Confirm the current inmate mailing address for the correct unit on the BOP facility page before sending.",
      },
      {
        question: "What are the visiting hours at FCI Forrest City?",
        answer: "Visiting is permitted on Saturdays, Sundays, and all federal holidays from 8:00 AM to 3:00 PM, per the facility's official visiting regulations. Visitors must be on the inmate's approved visiting list, and processing stops before the close of visiting hours.",
      },
      {
        question: "How do I block or stop calls from an inmate at FCI Forrest City?",
        answer: "Contact ConnectNetwork and ask to block calls from the facility, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved call list.",
      },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman", "fci-leavenworth", "fci-edgefield"],
},

"rj-donovan-correctional-facility": {
  id: "f-108",
  name: "RJ Donovan Correctional Facility",
  slug: "rj-donovan-correctional-facility",
  type: "state",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "San Diego County",
  securityLevel: "Level III / IV",
  hasDetailPage: true,
  seoTitle: "RJ Donovan: Free CDCR Calls, Securus Transition and",
  seoDescription: "How to contact someone at RJ Donovan Correctional Facility in San Diego CA. CDCR phone calls are free under SB 1008. Securus replaced ViaPath.",

  description:
    "RJ Donovan Correctional Facility communication guide. Find JPay messaging and Securus phone and video options for families of inmates at this San Diego County state prison.",

  overview: [
    "Richard J. Donovan Correctional Facility, commonly known as RJ Donovan or simply Donovan, is a California state prison located near Otay Mesa in southern San Diego County, close to the U.S.-Mexico border. It is operated by the California Department of Corrections and Rehabilitation and houses male inmates at Level III and Level IV security, meaning it holds a mix of medium and higher-security populations. The facility opened in the late 1980s and has since expanded, making it one of the larger state prisons in the region.",
    "Families communicating with someone at RJ Donovan typically use two main platforms. JPay handles electronic messaging, photo sharing, and money transfers for CDCR facilities, letting families send emails, photos, and funds to an inmate's trust account. Securus provides phone calls and video visitation, which can be scheduled in advance or, at some facilities, used for on-demand calls depending on current scheduling. Because CDCR contracts can change over time, it's worth confirming current provider details directly with the facility before setting up an account.",
    "Visiting rules at RJ Donovan follow standard CDCR procedures. In-person visits require prior approval, and visitors typically need to be on an approved list before a visit can take place. Given the facility's location near the border and its larger population, families should check current visiting hours and any facility-specific requirements ahead of a planned trip.",
  ],

  address: "480 Alta Road, San Diego, CA 92179",
  phone: "(619) 661-6500",
  website: "https://cdcr.ca.gov/facility-locator/rjd/",
    visitingHours: "Regular visiting restored for all facilities as of 9/18/26. Max 5 visitors per visit, max 3 for non-contact visits. Only approved visitors allowed. Schedule via VSA",
  inmateCapacity: 2992,
  established: 1987,
  operatedBy: "California Department of Corrections and Rehabilitation (CDCR)",

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
      notes: "Electronic messaging, photo sharing, and trust account deposits for CDCR facilities including RJ Donovan.",
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
      notes: "Phone calls and video visitation. Video sessions may require advance scheduling.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Available through JPay email-style messaging." },
    video: { status: "available", provider: "Securus", notes: "Video visitation available, often requiring advance scheduling." },
    photos: { status: "available", provider: "JPay", notes: "Digital photo attachments can be sent with JPay messages, subject to content review." },
    phone: { status: "available", provider: "Securus", notes: "Scheduled and collect-call phone service through Securus." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits available online, by phone, or at kiosks in some areas." },
  },

  rules: [
    "Create a JPay account to send messages, photos, and money to an inmate's trust account.",
    "Video visitation through Securus may require scheduling in advance, so plan ahead of time.",
    "In-person visitors must be approved by the facility before a visit can take place.",
    "All communications are subject to CDCR monitoring and content review.",
    "Confirm current provider details with the facility, since state prison contracts can change over time.",
  ],

  faq: [
    { question: "How do I message someone at RJ Donovan?", answer: "Create a free account at jpay.com, add the inmate using their CDCR number, and purchase stamps to send messages. Replies come back through the same JPay system." },
    { question: "How do I set up video visitation at RJ Donovan?", answer: "Video visitation is arranged through Securus. Create an account at securustech.net, add funds if needed, and schedule a session in advance according to the facility's available time slots." },
    { question: "How do phone calls work at RJ Donovan?", answer: "Phone calls are handled through Securus. Set up a prepaid or direct-bill account at securustech.net so the inmate can call you, or to accept collect calls where available." },
    { question: "Can I send photos to someone at RJ Donovan?", answer: "Yes. JPay allows you to attach digital photos to messages. Photos go through a content review process before being delivered, so allow some extra time." },
    { question: "How do I send money to an RJ Donovan inmate?", answer: "Use JPay at jpay.com or the JPay app to deposit funds into the inmate's trust account. Deposits can also typically be made by phone or at a JPay kiosk if one is available near you." },
      {
        question: "How do I find or search for an inmate at RJ Donovan Correctional Facility?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for San Diego County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at RJ Donovan Correctional Facility?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at RJ Donovan Correctional Facility?",
        answer: "Regular visiting restored for all facilities as of 9/18/26. Max 5 visitors per visit, max 3 for non-contact visits. Only approved visitors allowed. Schedule via VSA",
      },
      {
        question: "Can I receive incoming calls from an inmate at RJ Donovan Correctional Facility?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at RJ Donovan Correctional Facility?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["san-quentin-state-prison", "san-diego-central-jail", "montana-state-prison"],
},

"san-diego-central-jail": {
  id: "f-109",
  name: "San Diego Central Jail",
  slug: "san-diego-central-jail",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "San Diego County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "San Diego Central Jail: Free Calls, Smart Communications",
  seoDescription: "How to contact someone at San Diego Central Jail. Phone calls are free. Smart Communications handles all services at 727-349-1561.",

  description:
    "San Diego Central Jail communication guide. Find GettingOut messaging and Securus phone and video options for families of inmates at this downtown San Diego facility.",

  overview: [
    "San Diego Central Jail is a county detention facility in downtown San Diego, operated by the San Diego County Sheriff's Department. It opened in the late 1990s and serves as the primary intake and booking facility for men arrested in San Diego County, holding both people awaiting trial and those serving shorter county sentences. Because it functions largely as an intake and processing hub, the population can turn over more quickly than at a state prison, so it's worth confirming an inmate's current location before assuming they'll stay at this facility long term.",
    "Families communicating with someone at San Diego Central Jail typically use two main platforms. GettingOut provides messaging, photo sharing, and money transfer services common at county jails, letting families send texts, photos, and funds to an inmate's account. Securus handles phone calls and video visitation, which at many county jails can include both in-person visit scheduling and remote video sessions from home.",
    "Because San Diego Central Jail holds a mix of pretrial and sentenced individuals, visiting and communication rules can change based on an inmate's classification or housing unit. Families should check the San Diego County Sheriff's website for current visiting hours and any facility-specific requirements, since jail schedules tend to be updated more frequently than state or federal facilities.",
  ],

  address: "1173 Front Street, San Diego, CA 92101",
  phone: "(619) 610-1647",
  website: "https://www.sdsheriff.gov/",
  visitingHours: "In-person social visits: reserve by calling (619) 409-5000 Wednesday through Sunday, 6:30 AM to 6:00 PM. No visits on Tuesdays and Wednesdays. Social visits are 30 minutes; maximum 3 visitors. Video visitation available 7 days a week, 30 minutes, 2 per week; reserve one day in advance via SmartInmate; no same-day visits.",
  inmateCapacity: 944,
  established: 1998,
  operatedBy: "San Diego County Sheriff's Department",

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
      moneyTransfer: true,
      notes: "Messaging, photo sharing, and account deposits commonly used at San Diego County detention facilities.",
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
      notes: "Phone calls and video visitation, including remote video sessions from home in many cases.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Available through the GettingOut messaging app." },
    video: { status: "available", provider: "Securus", notes: "Video visitation, including remote sessions, subject to scheduling availability." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photo attachments can be sent, subject to facility content review." },
    phone: { status: "available", provider: "Securus", notes: "Prepaid and collect-call phone service through Securus." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Account deposits available online or through the GettingOut app." },
  },

  rules: [
    "Create a GettingOut account to send messages, photos, and funds to an inmate's account.",
    "Video visitation through Securus may allow remote sessions from home, subject to scheduling.",
    "Confirm an inmate's current housing status, since San Diego Central Jail primarily processes intake and shorter stays.",
    "All communications are subject to San Diego County Sheriff's Department monitoring and review.",
    "Check the Sheriff's website for current visiting hours, since jail schedules change more often than state or federal facilities.",
  ],

  faq: [
    { question: "How do I message someone at San Diego Central Jail?", answer: "Download the GettingOut app or visit gettingout.com, create an account, and add the inmate to start sending messages. Fees apply per message or in message bundles." },
    { question: "How do I set up video visitation at San Diego Central Jail?", answer: "Video visitation is handled through Securus. Create an account at securustech.net and schedule a session for either an in-facility visit terminal or a remote video call, depending on what the jail currently offers." },
    { question: "How do phone calls work at San Diego Central Jail?", answer: "Phone calls run through Securus. Set up a prepaid or direct-bill account at securustech.net so the inmate can call you, or to accept collect calls if available." },
    { question: "Can I send photos to someone at San Diego Central Jail?", answer: "Yes. The GettingOut app lets you attach digital photos to your messages. Photos are reviewed before delivery, so allow some extra time for approval." },
    { question: "How do I send money to a San Diego Central Jail inmate?", answer: "Use the GettingOut app or website to deposit funds into the inmate's account. You can also check the Sheriff's Department website for other accepted deposit methods, such as lobby kiosks." },
  ],

  relatedFacilitySlugs: ["clark-county-detention-center", "rj-donovan-correctional-facility", "baltimore-city-detention-center"],
},

"waupun-correctional-institution": {
  id: "f-110",
  name: "Waupun Correctional Institution",
  slug: "waupun-correctional-institution",
  type: "state",
  stateSlug: "wisconsin",
  stateName: "Wisconsin",
  stateAbbr: "WI",
  countySlug: null,
  countyName: "Dodge County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Waupun Correctional Institution: Phone Calls and Messaging",
  seoDescription: "How to contact someone at Waupun Correctional Institution in Wisconsin.",

  description:
    "Waupun Correctional Institution communication guide. Find JPay messaging and Securus phone and video options for families of inmates at this Wisconsin maximum-security prison.",

  overview: [
    "Waupun Correctional Institution is a maximum-security state prison in Dodge County, Wisconsin, and one of the oldest operating prisons in the country. The original facility dates back to the early 1850s, though the buildings and operations have been updated many times since. It is operated by the Wisconsin Department of Corrections and houses adult male inmates who require the highest level of security within the state system.",
    "Families communicating with someone at Waupun typically use two main platforms. JPay handles electronic messaging, photo sharing, and money transfers, letting families send emails, photos, and trust account deposits to an inmate. Securus provides phone calls and video visitation. Because Waupun is a maximum-security facility, communication access can be more limited and closely monitored than at lower-security prisons, and rules around visiting and calls may be stricter depending on an inmate's housing unit.",
    "Visiting at Waupun requires advance approval, and because it is a maximum-security institution, screening and scheduling tend to be more involved than at a minimum or medium-security facility. Families should check the Wisconsin Department of Corrections website for current visiting hours and requirements before planning a trip, since rules can vary by housing unit and can change with little notice.",
  ],

  address: "200 South Madison Street, Waupun, WI 53963",
  phone: "(920) 324-5571",
  website: "https://doc.wi.gov/Pages/OffenderInformation/AdultInstitutions/WaupunCorrectionalInstitution.aspx",
    mailingAddress: "INMATE NAME and DOC NUMBER, Waupun Correctional Institution, P.O. BOX 351, WAUPUN, WI 53963-0351",
    visitingHours: "In-person visits Monday through Friday, 2:45 PM to 5:15 PM and 5:45 PM to 8:15 PM. Video visits are offered seven days a week. Confirm the current schedule with the facility before traveling.",
  inmateCapacity: 1240,
  established: 1851,
  operatedBy: "Wisconsin Department of Corrections (WI DOC)",

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
      notes: "Electronic messaging, photo sharing, and trust account deposits for Wisconsin DOC facilities including Waupun.",
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
      notes: "Phone calls and video visitation, with access and scheduling that can vary by housing unit at this maximum-security facility.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Available through JPay email-style messaging, subject to review at a maximum-security facility." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation available but subject to stricter scheduling given the facility's maximum-security status." },
    photos: { status: "available", provider: "JPay", notes: "Digital photo attachments can be sent with JPay messages, subject to content review." },
    phone: { status: "available", provider: "Securus", notes: "Scheduled and monitored phone service through Securus." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits available online, by phone, or at kiosks in some areas." },
  },

  rules: [
    "Create a JPay account to send messages, photos, and money to an inmate's trust account.",
    "Video visitation and phone access can be more limited at Waupun due to its maximum-security classification.",
    "In-person visitors must be approved in advance and should expect a more involved screening process.",
    "All communications are subject to Wisconsin DOC monitoring and content review.",
    "Check the Wisconsin DOC website for current rules, since they can vary by housing unit and change with little notice.",
  ],

  faq: [
    { question: "How do I message someone at Waupun Correctional Institution?", answer: "Create a free account at jpay.com, add the inmate using their Wisconsin DOC number, and purchase stamps to send messages. Replies come back through the same JPay system." },
    { question: "How do I set up video visitation at Waupun?", answer: "Video visitation is arranged through Securus. Create an account at securustech.net and schedule a session in advance. Because Waupun is maximum security, availability may be more limited than at lower-security facilities." },
    { question: "How do phone calls work at Waupun?", answer: "Phone calls are handled through Securus. Set up a prepaid or direct-bill account at securustech.net so the inmate can call you, subject to the facility's monitored call schedule." },
    { question: "Can I send photos to someone at Waupun?", answer: "Yes. JPay allows you to attach digital photos to messages. Photos go through a content review process before being delivered, so allow some extra time." },
    { question: "How do I send money to a Waupun inmate?", answer: "Use JPay at jpay.com or the JPay app to deposit funds into the inmate's trust account. Deposits can also typically be made by phone or at a JPay kiosk if one is available near you." },
      {
        question: "How do I find or search for an inmate at Waupun Correctional Institution?",
        answer: "Use the Wisconsin Department of Corrections inmate search on the DOC website. Search by the person's full name and DOC number. If the person does not appear, allow time for intake processing and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Waupun Correctional Institution?",
        answer: "Address mail as follows: INMATE NAME and DOC NUMBER, Waupun Correctional Institution, P.O. BOX 351, WAUPUN, WI 53963-0351. Include the inmate's full name and DOC number on every envelope.",
      },
      {
        question: "How do I schedule a video visit at Waupun Correctional Institution?",
        answer: "Video visits are offered seven days a week and must be scheduled in advance. You must be on the inmate's approved visitor list. Check the facility's visiting information for the current scheduling steps before booking.",
      },
      {
        question: "What are the in-person visiting hours at Waupun Correctional Institution?",
        answer: "In-person visits are held Monday through Friday in two blocks: 2:45 PM to 5:15 PM and 5:45 PM to 8:15 PM. You must be on the inmate's approved visitor list. Confirm the current schedule with the facility before traveling, since hours can change.",
      },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "montana-state-prison", "suffolk-county-house-of-correction"],
},

"wayne-county-jail": {
  id: "f-111",
  name: "Wayne County Jail",
  slug: "wayne-county-jail",
  type: "county",
  stateSlug: "michigan",
  stateName: "Michigan",
  stateAbbr: "MI",
  countySlug: null,
  countyName: "Wayne County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Wayne County Jail: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Wayne County Jail in Detroit MI.",

  description:
    "Wayne County Jail communication guide for Detroit, Michigan. Find GettingOut and Securus options for messaging, phone calls, and video visits with someone held at the Wayne County Sheriff's Office jail.",

  overview: [
    "Wayne County Jail is operated by the Wayne County Sheriff's Office and serves as the main booking and detention facility for Detroit and the rest of Wayne County, Michigan's most populous county. The jail complex sits in downtown Detroit and processes people arrested by the Detroit Police Department and other local agencies across the county. Most people held here are in pretrial status, waiting for their cases to move through Wayne County's court system, though some are serving shorter sentences.",
    "Families can reach someone at Wayne County Jail through two main services. GettingOut handles electronic messaging, photo sharing, and money transfers, all managed through a single online account. Securus handles phone calls and video visitation. To send a message or photo, create a GettingOut account and search for your contact by name and booking number. To set up phone calls, fund a Securus account so you can accept collect or prepaid calls from the jail's phone system. Video visits through Securus can be scheduled in advance or, at some facilities, used as a walk-in option depending on availability.",
    "Detroit is a major metro area, so many families live close enough for in-person visits, but jail visitation hours and rules change often, so it helps to call ahead or check the Sheriff's Office website before making the trip. People convicted of felonies and sentenced to state prison time are transferred out of the county jail to a Michigan Department of Corrections facility, where different communication providers usually apply. Always confirm current facility placement before assuming a provider account will still work.",
  ],

  address: "5301 Russell Street, Detroit, MI 48211",
  phone: "(313) 224-0797",
  website: "https://www.sheriffconnect.com",
  established: 1984,
  operatedBy: "Wayne County Sheriff's Office (WCSO)",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Wayne County Jail." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Wayne County Jail." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is monitored by jail staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits can be scheduled through your Securus account. Confirm current availability with the jail." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages sent through GettingOut." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from the jail phone system." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary through the GettingOut app or website." },
  },

  rules: [
    "GettingOut handles messaging, photos, and money. Securus handles phone and video.",
    "All communication is subject to monitoring and review by jail staff.",
    "Senders must know the inmate's full booking information to locate their account.",
    "After sentencing to state prison, communication providers change at the new Michigan DOC facility.",
    "Visitation and calling rules can change, so confirm current details with the Sheriff's Office before visiting.",
  ],

  faq: [
    { question: "How do I message someone at Wayne County Jail?", answer: "Create a GettingOut account online or through the GettingOut app. Search for the person by name and booking number, then send a message. Messages are reviewed by jail staff before being delivered, so there can be a short delay." },
    { question: "How do I call someone at Wayne County Jail?", answer: "Set up a prepaid or collect-call account with Securus. Once your account is funded, you can accept calls placed from the jail's phone system. Rates and call length limits are set by Securus and the jail." },
    { question: "Can I do a video visit with someone at Wayne County Jail?", answer: "Video visitation is available through Securus. Log into your account, look up the facility, and check for available time slots. Availability can vary, so it helps to check often." },
    { question: "How do I find out where someone is being held in Wayne County?", answer: "Use the inmate search tool at sheriffconnect.com to confirm current custody status and location before setting up any communication accounts." },
    { question: "What happens after someone is sentenced to prison from Wayne County Jail?", answer: "People sentenced to state prison time are transferred to a Michigan Department of Corrections facility. Communication providers at MDOC facilities differ from the county jail, so check the new facility's page as soon as a transfer happens." },
    { question: "How do I visit someone at Wayne County Jail?", answer: "Visitors must be approved. Bring valid photo ID and follow Sheriff's Office visiting rules. Confirm which jail holds the inmate before traveling." },
    { question: "Which facilities are in the Wayne County Jail system?", answer: "The system includes Jail I, the Andrew C. Baird Detention Facility, and Jail II, the Old Jail, in downtown Detroit." },
    { question: "How do I send mail to an inmate at Wayne County Jail?", answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending." },
    { question: "Can I receive incoming calls from an inmate at Wayne County Jail?", answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list." },
    { question: "How do I block or stop calls from an inmate at Wayne County Jail?", answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list." },
    { question: "How do I schedule or cancel a video visit at Wayne County Jail?", answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules." },
  ],

  relatedFacilitySlugs: ["lew-sterrett-justice-center", "king-county-correctional-facility", "cass-county-jail"],
},

"lew-sterrett-justice-center": {
  id: "f-112",
  name: "Lew Sterrett Justice Center",
  slug: "lew-sterrett-justice-center",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Dallas County",
  securityLevel: "Pretrial",
  hasDetailPage: true,
  seoTitle: "Lew Sterrett Justice Center: Securus Phone and Jail",
  seoDescription: "How to contact someone at Lew Sterrett Justice Center in Dallas TX. Securus Technologies handles phone calls and video visits. Book-in number required.",

  description:
    "Lew Sterrett Justice Center communication guide for Dallas County, Texas. Find GettingOut and Securus options for messaging, phone calls, and video visits with someone held at Dallas County's main jail.",

  overview: [
    "Lew Sterrett Justice Center is Dallas County's main jail complex, located in downtown Dallas. It is one of the largest county jail systems in the country and holds people booked by the Dallas Police Department and other law enforcement agencies from across the county. Most people held here are in pretrial status, waiting for their court dates, though the facility also holds people serving shorter county sentences.",
    "Families reach someone at Lew Sterrett through two main services. GettingOut provides electronic messaging, digital photo sharing, and money transfers through one online account. Securus provides phone calls and video visitation. To message someone, create a GettingOut account and search using the person's name and booking information. To talk by phone, set up a Securus account and add funds so you can accept calls placed from inside the jail. Video visits through Securus can be scheduled online in advance.",
    "Because Dallas County processes a very high volume of bookings, wait times for account approval or video visit slots can be longer than at smaller jails. It helps to set up accounts early and check often for available appointment times. After conviction and sentencing to state prison, people are transferred to a Texas Department of Criminal Justice unit, where the communication provider setup is different from the county jail.",
  ],

  address: "111 W. Commerce St, Dallas, TX 75202",
  phone: "(214) 761-9025",
  website: "https://www.dallascounty.org",
  inmateCapacity: 7100,
  operatedBy: "Dallas County Sheriff's Department",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Lew Sterrett Justice Center." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Lew Sterrett Justice Center." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Messages go through a review process before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visit slots can fill quickly given the jail's size. Book early." },
    photos: { status: "available", provider: "GettingOut", notes: "Photos can be attached to messages through the GettingOut app." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from the jail." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut handles messaging, photos, and money. Securus handles phone and video.",
    "All calls, messages, and video visits are subject to monitoring.",
    "You need the inmate's full name and booking number to locate their account.",
    "Video visit availability can be limited given the size of the jail population. Book as early as possible.",
    "After transfer to a Texas Department of Criminal Justice unit, a different provider setup applies.",
  ],

  faq: [
    { question: "How do I message someone at Lew Sterrett Justice Center?", answer: "Create a GettingOut account and search for the person using their name and Dallas County booking number. Messages are reviewed before delivery, so allow extra time given the jail's size." },
    { question: "How do I call an inmate at Lew Sterrett?", answer: "Set up an account with Securus and add funds. This lets you accept calls placed from the jail. Call rates and time limits are set by Securus and Dallas County." },
    { question: "Is video visitation available at Lew Sterrett Justice Center?", answer: "Yes, through Securus. Because the jail holds a large population, available time slots can fill up fast, so check often and book as early as you can." },
    { question: "How do I check if someone is in custody at Lew Sterrett?", answer: "Dallas County provides an online inmate search tool. You can also call the jail's information line at (214) 761-9025, which is staffed 24 hours a day." },
    { question: "What happens after someone is sentenced to state prison from Dallas County?", answer: "People sentenced to state time are transferred to a Texas Department of Criminal Justice unit. Communication providers at TDCJ units differ from the county jail, so check the new facility's setup right after any transfer." },
  ],

  relatedFacilitySlugs: ["wayne-county-jail", "king-county-correctional-facility", "mecklenburg-county-jail"],
},

"mecklenburg-county-detention-center": {
  id: "f-113",
  name: "Mecklenburg County Detention Center",
  slug: "mecklenburg-county-detention-center",
  type: "county",
  stateSlug: "north-carolina",
  stateName: "North Carolina",
  stateAbbr: "NC",
  countySlug: null,
  countyName: "Mecklenburg County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Mecklenburg County Jail: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Mecklenburg County Detention Center in Charlotte NC. Securus Technologies handles phone calls.",

  description:
    "Mecklenburg County Detention Center communication guide for Charlotte, North Carolina. Find GettingOut and Securus options for messaging, phone calls, and video visits with someone held at this Mecklenburg County Sheriff's Office facility.",

  overview: [
    "Mecklenburg County Detention Center, often called Detention Center Central, is operated by the Mecklenburg County Sheriff's Office and located in uptown Charlotte. It is the largest municipal detention facility in North or South Carolina and processes bookings from the Charlotte-Mecklenburg Police Department and other agencies across the county. Most people held here are in pretrial status awaiting court dates, while others are serving shorter sentences for misdemeanor charges.",
    "Families can reach someone at the facility through two providers. GettingOut handles electronic messaging, digital photo sharing, and money transfers, all through one online account. Securus handles phone calls and video visitation. To message someone, create a GettingOut account and search by name and booking number. To talk by phone, fund a Securus account so you can accept calls from the jail's phone system. Video visits through Securus can typically be scheduled in advance from home.",
    "Charlotte is a large, growing city, and the detention center sits close to the county courthouse, which makes coordinating court dates and legal visits more straightforward for local families. People convicted of felony charges and sentenced to state prison time are transferred to a North Carolina Department of Adult Correction facility, where the communication provider setup is different from the county jail.",
  ],

  address: "801 East Fourth Street, Charlotte, NC 28202",
  phone: "(980) 314-5200",
  website: "https://www.mecksheriff.com/index.php/detention-center-central/",
  inmateCapacity: 1904,
  established: 1997,
  operatedBy: "Mecklenburg County Sheriff's Office",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Mecklenburg County Detention Center." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Mecklenburg County Detention Center." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Messages are reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Schedule video visits in advance through your Securus account." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be added to messages sent through GettingOut." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from the facility." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through the GettingOut app or website." },
  },

  rules: [
    "GettingOut handles messaging, photos, and money. Securus handles phone and video.",
    "All communication is subject to review and monitoring by facility staff.",
    "You need the inmate's full name and booking number to locate their account.",
    "Video visits should be scheduled in advance through Securus.",
    "After transfer to a North Carolina Department of Adult Correction facility, a different provider setup applies.",
  ],

  faq: [
    { question: "How do I message someone at Mecklenburg County Detention Center?", answer: "Create a GettingOut account online or through the app. Search for the person using their name and booking number, then send your message. Expect a short review period before delivery." },
    { question: "How do I call someone at the Mecklenburg County jail?", answer: "Set up a prepaid account with Securus and add funds. This allows you to accept calls placed from the facility's phone system." },
    { question: "Can I schedule a video visit at Mecklenburg County Detention Center?", answer: "Yes. Log into your Securus account, search for the facility, and choose an available time slot. It helps to book a day or two ahead." },
    { question: "How do I find out if someone is in custody at the Mecklenburg County jail?", answer: "The Mecklenburg County Sheriff's Office provides an online inmate search tool at mecksheriff.com. You can search by name to confirm current custody status." },
    { question: "What happens after someone is sentenced to state prison from Mecklenburg County?", answer: "People sentenced to felony prison time are transferred to a North Carolina Department of Adult Correction facility. Check the new facility's communication setup right after any transfer, since the providers change." },
      {
        question: "How do I send mail to someone at Mecklenburg County Detention Center?",
        answer: "Address mail to the person using their full name and booking number, care of Mecklenburg County Detention Center, 801 East Fourth Street, Charlotte, NC 28202. Include the booking number so mail reaches the right person.",
      },
      {
        question: "How do I find bond information for someone at Mecklenburg County Detention Center?",
        answer: "Use the Mecklenburg County Sheriff's Office arrest and inmate inquiry tool, which lists charges and bond information for people in custody. For posting bond, contact the Sheriff's Office for the current process.",
      },
      {
        question: "Can I visit someone in person at Mecklenburg County Detention Center?",
        answer: "In-person visiting requires approval and scheduling. Confirm the current visiting schedule and requirements with the Mecklenburg County Sheriff's Office before traveling, since procedures can change.",
      },
      {
        question: "Why has my GettingOut message not been delivered at Mecklenburg County Detention Center?",
        answer: "Messages are reviewed by facility staff before delivery, which causes a delay. Check that you searched the correct name and booking number, and that your account is set up for the right facility. If the message still does not arrive, contact GettingOut support.",
      },
      {
        question: "How do I block calls from Mecklenburg County Detention Center?",
        answer: "If you do not want to receive calls, you can decline calls when they come in, or ask Securus to block your number. Declining a call does not remove you from the inmate's approved list. To stop calls entirely, contact Securus support and ask for a block on your number.",
      },
  ],

  relatedFacilitySlugs: ["wayne-county-jail", "penobscot-county-jail", "king-county-correctional-facility"],
},

"penobscot-county-jail": {
  id: "f-114",
  name: "Penobscot County Jail",
  slug: "penobscot-county-jail",
  type: "county",
  stateSlug: "maine",
  stateName: "Maine",
  stateAbbr: "ME",
  countySlug: null,
  countyName: "Penobscot County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Penobscot County Jail: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Penobscot County Jail in Bangor ME.",

  description:
    "Penobscot County Jail communication guide for Bangor, Maine. Find GettingOut and Securus options for messaging, phone calls, and video visits with someone held at the Penobscot County Sheriff's Office jail.",

  overview: [
    "Penobscot County Jail is operated by the Penobscot County Sheriff's Office and located in Bangor, the largest city in central and northern Maine. The jail holds people awaiting trial, people serving shorter sentences, and people waiting to be transferred to a longer-term Maine Department of Corrections facility. Because Penobscot County covers a large, mostly rural area, the jail serves as a regional hub for many smaller towns that do not have their own detention facilities.",
    "Families can reach someone at the jail through two main services. GettingOut manages electronic messaging, digital photo sharing, and money transfers through a single online account. Securus manages phone calls and video visitation. To send a message, create a GettingOut account and search for the person by name and booking information. To talk by phone, fund a Securus account so you can accept collect or prepaid calls placed from the jail. Video visits through Securus can usually be scheduled ahead of time.",
    "Given the size of Penobscot County, many families live a fair distance from Bangor, which makes remote options like messaging, phone calls, and video visits especially useful. In-person visiting hours at the jail are limited to specific days and times, so it helps to check current hours before planning a trip. If someone is sentenced to state prison time, they are usually transferred to a Maine DOC facility, where a different communication provider may apply.",
  ],

  address: "85 Hammond Street, Bangor, ME 04401",
  phone: "(207) 947-4585",
  website: "https://www.penobscot-sheriff.net",
  operatedBy: "Penobscot County Sheriff's Office",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Penobscot County Jail." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Penobscot County Jail." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Messages are reviewed by jail staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits can be scheduled in advance through your Securus account." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages sent through GettingOut." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from the jail's phone system." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut handles messaging, photos, and money. Securus handles phone and video.",
    "All communication is subject to monitoring by jail staff.",
    "In-person visiting hours are limited to specific days, so check current hours before visiting.",
    "You need the inmate's full name and booking information to locate their account.",
    "After transfer to a Maine DOC facility, a different provider may apply.",
  ],

  faq: [
    { question: "How do I message someone at Penobscot County Jail?", answer: "Create a GettingOut account and search for the person by name and booking number. Messages are reviewed by jail staff before being delivered." },
    { question: "How do I call an inmate at Penobscot County Jail?", answer: "Set up a Securus account and add funds. This lets you accept calls placed from the jail's phone system." },
    { question: "Is video visitation available at Penobscot County Jail?", answer: "Yes, through Securus. Log into your account, search for the facility, and pick an available time slot in advance." },
    { question: "How do I check if someone is being held at Penobscot County Jail?", answer: "Call the jail directly at (207) 947-4585, which is staffed 24 hours a day, or check the inmate information available through the Sheriff's Office website." },
    { question: "What happens if someone is transferred to a Maine state prison?", answer: "People sentenced to longer terms may be transferred to a Maine Department of Corrections facility. Communication providers can differ at state facilities, so check the new facility's setup right after a transfer." },
      {
        question: "How do I send mail to someone at Penobscot County Jail?",
        answer: "Address mail with the person's full legal name, care of Penobscot County Jail, 85 Hammond Street, Bangor, ME 04401. Include the full legal name so mail reaches the right person.",
      },
      {
        question: "How do I schedule a video visit at Penobscot County Jail?",
        answer: "Schedule video visits through your Securus account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
      {
        question: "How do I post bail for someone at Penobscot County Jail?",
        answer: "Bail is set by the court. Contact the jail at the facility phone number for the current bond amount and the accepted posting process. Bring a valid photo ID when posting bail in person.",
      },
      {
        question: "Can an inmate at Penobscot County Jail call me?",
        answer: "Inmates can make outgoing calls to approved numbers, but they cannot receive incoming calls. Set up a Securus account and add funds so you can accept calls from the facility.",
      },
      {
        question: "What should I do if I miss a call from Penobscot County Jail?",
        answer: "Inmates cannot receive return calls, so you cannot call back. Wait for the inmate to call again, and make sure your Securus account is funded and your number is on the approved list. If calls keep failing, check that your phone accepts calls from unknown numbers and that no call block is active.",
      },
  ],

  relatedFacilitySlugs: ["wayne-county-jail", "cass-county-jail", "northern-state-correctional-facility"],
},

"aci-maximum-security": {
  id: "f-115",
  name: "ACI Maximum Security",
  slug: "aci-maximum-security",
  type: "state",
  stateSlug: "rhode-island",
  stateName: "Rhode Island",
  stateAbbr: "RI",
  countySlug: null,
  countyName: "Providence County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "ACI Maximum Security: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at ACI Maximum Security in Cranston RI.",

  description:
    "ACI Maximum Security communication guide for Cranston, Rhode Island. Find JPay and Securus options for messaging, photos, phone calls, and video visits with someone held at this Rhode Island Department of Corrections facility.",

  overview: [
    "ACI Maximum Security is one of several facilities inside the Adult Correctional Institutions complex, Rhode Island's state prison system located in Cranston, just outside Providence. It is the state's oldest operational prison building and houses people classified at the highest security level within Rhode Island's Department of Corrections. The ACI complex includes multiple separate facilities with different security levels, so it is important to confirm which specific building someone is held in before setting up communication accounts.",
    "Families reach someone at ACI Maximum Security through two providers. JPay handles electronic messaging, digital photo sharing, and money transfers for commissary, all through a single JPay account. Securus handles phone calls and video visitation. To message or send photos, create a JPay account, add the person using their name and Rhode Island DOC identification number, and send messages or photos through the app or website. To talk by phone or schedule a video visit, set up a separate Securus account.",
    "Because ACI Maximum Security holds people at the highest security level, rules around approved contacts, mail content, and visitation tend to be stricter than at lower-security facilities. New contacts often need to be added to an approved list before messages, calls, or video visits will go through. It is worth checking with the facility or the Rhode Island DOC directly if a new contact request seems delayed.",
  ],

  address: "1375 Pontiac Avenue, Cranston, RI 02920",
  phone: "(401) 462-2053",
  website: "https://doc.ri.gov",
    bailInfo: "RIDOC Bail Information: (401) 462-2261",
  inmateCapacity: 430,
  established: 1878,
  operatedBy: "Rhode Island Department of Corrections (RIDOC)",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and commissary deposits for ACI Maximum Security." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for ACI Maximum Security." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Messages are reviewed by RIDOC staff before delivery, which can take longer at higher security levels." },
    video: { status: "available", provider: "Securus", notes: "Video visits require the requested contact to already be on the approved list." },
    photos: { status: "available", provider: "JPay", notes: "Photos are screened for content before being delivered." },
    phone: { status: "available", provider: "Securus", notes: "Phone access and approved contact lists are managed by facility staff." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Commissary deposits can be made through JPay." },
  },

  rules: [
    "JPay handles messaging, photos, and money. Securus handles phone and video.",
    "Maximum security rules are stricter, and new contacts must typically be approved before communication is allowed.",
    "All messages, calls, and visits are subject to monitoring.",
    "Confirm which specific ACI facility someone is held in, since the complex includes several separate buildings.",
    "Photo and mail content is screened and can be rejected if it does not meet RIDOC guidelines.",
  ],

  faq: [
    { question: "How do I message someone at ACI Maximum Security?", answer: "Create a JPay account, search for the person using their name and RIDOC identification number, and send a message. Messages are reviewed by staff, which can take longer than at lower-security facilities." },
    { question: "How do I call someone at ACI Maximum Security?", answer: "Set up a Securus account for phone calls. The person you're contacting typically needs to add you to their approved contact list before calls can go through." },
    { question: "Can I do a video visit with someone at ACI Maximum Security?", answer: "Yes, through Securus, but you generally need to already be an approved contact. Schedule visits in advance and confirm requirements with the facility." },
    { question: "How do I know which ACI facility someone is being held in?", answer: "The Rhode Island Department of Corrections operates several buildings within the ACI complex. Contact RIDOC directly or check their website at doc.ri.gov to confirm the exact facility and security level." },
    { question: "How do I send money to someone at ACI Maximum Security?", answer: "Commissary deposits can be made through JPay. Create an account, add the person's information, and transfer funds using a debit or credit card." },
      {
        question: "How do I find or search for an inmate at ACI Maximum Security?",
        answer: "Use the Rhode Island Department of Corrections offender search on the RIDOC website. Search by name or RIDOC number. Because the ACI complex has several facilities in Cranston, confirm which facility holds the person before mailing or visiting.",
      },
      {
        question: "How do I get on an inmate's visitor list at ACI Maximum Security?",
        answer: "The inmate must add your name to their visitor list. You must pass both the Bureau of Criminal Investigation (BCI) and National Criminal Investigation Center (NCIC) background checks. Sentenced inmates may list up to nine visitors.",
      },
      {
        question: "What are the visiting rules at ACI Maximum Security?",
        answer: "Each facility warden sets the visitation schedule, so hours vary by facility. Verify the schedule and requirements before each visit. All visitors must show valid photo ID and pass through a metal detector.",
      },
      {
        question: "How do I find bail information for someone at ACI Maximum Security?",
        answer: "Call RIDOC Bail Information at (401) 462-2261. Bail information covers people held on bail matters in the Rhode Island system.",
      },
  ],

  relatedFacilitySlugs: ["northern-state-correctional-facility", "montana-state-prison", "wyoming-state-penitentiary"],
},

"wyoming-state-penitentiary": {
  id: "f-116",
  name: "Wyoming State Penitentiary",
  slug: "wyoming-state-penitentiary",
  type: "state",
  stateSlug: "wyoming",
  stateName: "Wyoming",
  stateAbbr: "WY",
  countySlug: null,
  countyName: "Goshen County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Wyoming State Penitentiary: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Wyoming State Penitentiary in Rawlins.",

  description:
    "Wyoming State Penitentiary communication guide for Rawlins, Wyoming. Find JPay and Securus options for messaging, photos, phone calls, and video visits with someone held at this Wyoming Department of Corrections facility.",

  overview: [
    "Wyoming State Penitentiary is the state's primary maximum-security prison, located in Rawlins in south-central Wyoming. It is operated by the Wyoming Department of Corrections and holds men who need the highest level of security supervision in the state system, including some serving long sentences. Because Wyoming has a small, spread-out population, families often live hours away from Rawlins, which makes remote communication tools especially important.",
    "Families reach someone at the penitentiary through two providers. JPay handles electronic messaging, digital photo sharing, and money transfers, all managed through one account. Securus handles phone calls and video visitation. To send a message or photo, create a JPay account and add the person using their name and Wyoming DOC identification number. To talk by phone or set up a video visit, create a separate Securus account and add funds if needed.",
    "Rawlins is a smaller city along Interstate 80, and travel for in-person visits can be a significant trip for families living in places like Cheyenne, Casper, or out of state. Because of the distance many families face, video visitation through Securus is a practical option for regular contact. Maximum-security rules mean new contacts typically need approval before messages, calls, or visits are allowed.",
  ],

  address: "2900 South Higley Boulevard, Rawlins, WY 82301",
  phone: "(307) 328-1441",
  website: "https://corrections.wyo.gov",
    mailingAddress: "INMATE NAME and ID NUMBER, Wyoming State Penitentiary, P.O. BOX 400, RAWLINS, WY 82301",
    fax: "(307) 328-7464",
  inmateCapacity: 780,
  established: 1980,
  operatedBy: "Wyoming Department of Corrections (WDOC)",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Wyoming State Penitentiary." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Wyoming State Penitentiary." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Messages are reviewed before delivery. Allow extra time given the facility's security level." },
    video: { status: "available", provider: "Securus", notes: "A practical option for families who live far from Rawlins. Schedule ahead." },
    photos: { status: "available", provider: "JPay", notes: "Photos are screened for content before being delivered." },
    phone: { status: "available", provider: "Securus", notes: "Set up an account and add funds to accept calls." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Commissary deposits can be made through JPay." },
  },

  rules: [
    "JPay handles messaging, photos, and money. Securus handles phone and video.",
    "New contacts typically need to be approved before communication is allowed.",
    "All calls, messages, and video visits are subject to monitoring.",
    "Given the facility's distance from major cities, video visitation is a practical option for many families.",
    "Photo and mail content is screened and can be rejected if it does not follow WDOC guidelines.",
  ],

  faq: [
    { question: "How do I message someone at Wyoming State Penitentiary?", answer: "Create a JPay account, search for the person using their name and Wyoming DOC identification number, and send a message. Expect a review period before delivery." },
    { question: "How do I call someone at Wyoming State Penitentiary?", answer: "Set up a Securus account for phone calls and add funds if needed. The person you're contacting usually needs to add you to their approved contact list first." },
    { question: "Is video visitation available at Wyoming State Penitentiary?", answer: "Yes, through Securus. Since Rawlins can be a long drive for many families, video visits are a helpful way to stay in touch. Schedule in advance." },
    { question: "How far is Wyoming State Penitentiary from major Wyoming cities?", answer: "Rawlins sits along Interstate 80 in south-central Wyoming. It can be a multi-hour drive from cities like Cheyenne or Casper, which is why many families rely on phone, messaging, and video options." },
    { question: "How do I send money to someone at Wyoming State Penitentiary?", answer: "Use JPay to make commissary deposits. Create an account, add the person's information, and transfer funds with a debit or credit card." },
      {
        question: "How do I send mail to someone at Wyoming State Penitentiary?",
        answer: "Address mail as follows: INMATE NAME and ID NUMBER, Wyoming State Penitentiary, P.O. BOX 400, RAWLINS, WY 82301. Include the inmate's full name and ID number on every envelope.",
      },
      {
        question: "How do I find or search for an inmate at Wyoming State Penitentiary?",
        answer: "Use the Wyoming Department of Corrections inmate search on the WDOC website. Search by the person's full name. If the person does not appear, allow time for intake processing and try alternate spellings.",
      },
      {
        question: "When can I visit someone at Wyoming State Penitentiary?",
        answer: "Wyoming Department of Corrections policy requires each institution to offer visiting at least three days per week, with at least sixteen hours of visiting per week. Confirm the current schedule for the correct housing unit with the facility before traveling.",
      },
      {
        question: "How do I block or stop calls from an inmate at Wyoming State Penitentiary?",
        answer: "Contact Securus and ask to block calls from the facility, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved call list.",
      },
  ],

  relatedFacilitySlugs: ["aci-maximum-security", "montana-state-prison", "northern-state-correctional-facility"],
},

"king-county-correctional-facility": {
  id: "f-117",
  name: "King County Correctional Facility",
  slug: "king-county-correctional-facility",
  type: "county",
  stateSlug: "washington",
  stateName: "Washington",
  stateAbbr: "WA",
  countySlug: null,
  countyName: "King County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "King County Jail: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at King County Correctional Facility in Seattle WA.",

  description:
    "King County Correctional Facility communication guide for Seattle, Washington. Find GettingOut and Securus options for messaging, phone calls, and video visits with someone held at this King County Department of Adult and Juvenile Detention facility.",

  overview: [
    "King County Correctional Facility is located in downtown Seattle and is operated by the King County Department of Adult and Juvenile Detention. It is one of the largest county jails on the West Coast and processes bookings from the Seattle Police Department and other agencies across King County. Most people held here are in pretrial status, waiting for their court dates, while others are serving shorter county sentences.",
    "Families can reach someone at the facility through two main services. GettingOut manages electronic messaging, digital photo sharing, and money transfers through a single account. Securus manages phone calls and video visitation. To send a message, create a GettingOut account and search for the person using their name and booking number. To talk by phone, fund a Securus account so you can accept calls placed from the jail's phone system. Video visits through Securus can usually be scheduled in advance from home.",
    "King County also operates a second, larger jail facility in Kent, and people can be moved between the Seattle and Kent locations depending on classification and bed space. It is worth confirming exactly which King County facility someone is held in before assuming communication account details will match. After sentencing to state prison time, people are transferred to a Washington Department of Corrections facility, where the provider setup is different.",
  ],

  address: "500 5th Avenue, Seattle, WA 98104",
  phone: "(206) 296-1234",
  website: "https://kingcounty.gov/en/dept/dajd",
    bailInfo: "Bail can be paid by cash, cashier's check (no personal checks), or money order.",
  established: 1986,
  operatedBy: "King County Department of Adult and Juvenile Detention (DAJD)",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for King County Correctional Facility." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for King County Correctional Facility." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Messages are reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Schedule video visits in advance through your Securus account." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages sent through GettingOut." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from the facility." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut handles messaging, photos, and money. Securus handles phone and video.",
    "Confirm whether someone is held at the Seattle facility or the Kent facility, since King County operates both.",
    "All communication is subject to review and monitoring.",
    "You need the inmate's full name and booking number to locate their account.",
    "After transfer to a Washington DOC facility, a different provider setup applies.",
  ],

  faq: [
    { question: "How do I message someone at King County Correctional Facility?", answer: "Create a GettingOut account and search for the person using their name and booking number. Messages are reviewed by staff before delivery." },
    { question: "How do I call someone at the King County jail?", answer: "Set up a Securus account and add funds. This lets you accept calls placed from the jail's phone system." },
    { question: "Is King County Correctional Facility the same as the King County jail in Kent?", answer: "No. King County operates two jail facilities, one in downtown Seattle and a larger one in Kent. People can be held at either location, so confirm which facility someone is in before setting up communication accounts." },
    { question: "Can I schedule a video visit at King County Correctional Facility?", answer: "Yes, through Securus. Log into your account, search for the facility, and choose an available time slot in advance." },
    { question: "What happens after someone is sentenced to state prison from King County?", answer: "People sentenced to state time are transferred to a Washington Department of Corrections facility. Communication providers differ there, so check the new facility's page right after a transfer." },
      {
        question: "How do I find out if someone is at King County Correctional Facility?",
        answer: "Use the King County Jail Inmate Lookup Service (JILS) subject lookup tool on the county Department of Adult and Juvenile Detention website. Search by name to confirm current custody and location.",
      },
      {
        question: "How do I pay bail for someone at King County Correctional Facility?",
        answer: "Bail can be paid by cash, cashier's check (no personal checks), or money order. Confirm the bail amount through the inmate lookup tool or with the facility before paying.",
      },
      {
        question: "How do I send mail to someone at King County Correctional Facility?",
        answer: "Address mail with the person's full name and booking number, care of King County Correctional Facility, 500 5th Avenue, Seattle, WA 98104. Include the booking number so mail reaches the right person.",
      },
      {
        question: "How do I know whether someone is at KCCF in Seattle or Maleng Regional Justice Center in Kent?",
        answer: "King County runs two adult detention facilities: KCCF in downtown Seattle and Maleng Regional Justice Center in Kent. Use the Jail Inmate Lookup Service to confirm which facility holds the person before mailing or visiting.",
      },
  ],

  relatedFacilitySlugs: ["wayne-county-jail", "lew-sterrett-justice-center", "halawa-correctional-facility"],
},

"halawa-correctional-facility": {
  id: "f-118",
  name: "Halawa Correctional Facility",
  slug: "halawa-correctional-facility",
  type: "state",
  stateSlug: "hawaii",
  stateName: "Hawaii",
  stateAbbr: "HI",
  countySlug: null,
  countyName: "Honolulu County",
  securityLevel: "Medium / High",
  hasDetailPage: true,
  seoTitle: "Halawa Correctional Facility: Phone Calls and Messaging",
  seoDescription: "How to contact someone at Halawa Correctional Facility in Aiea Hawaii.",

  description:
    "Halawa Correctional Facility communication guide for Aiea, Oahu. Find GTL options for messaging, photos, phone calls, and video visits with someone held at this Hawaii Department of Corrections and Rehabilitation facility.",

  overview: [
    "Halawa Correctional Facility is one of Hawaii's main state prisons, located in Aiea on the island of Oahu. It is operated by the Hawaii Department of Corrections and Rehabilitation and holds men at medium and higher security classifications, including a special needs unit for people who require additional medical or mental health support. Because it is one of the larger facilities in the state system, people from other Hawaiian islands are sometimes transferred here.",
    "Communication at Halawa runs through GTL (Global Tel Link). Phone calls, tablet video visits, and messaging run through GTL, and trust account deposits go through GTL/ViaPath ConnectNetwork. To send a message or photo, create a GettingOut account and add the person using their name and Hawaii DOC identification number. To talk by phone or set up a video visit, use the same GTL account.",
    "For families living on other islands, such as Maui, the Big Island, or Kauai, video visitation through GTL tablets can be far more practical than traveling to Oahu for an in-person visit. It is worth checking current visitation rules directly with the facility, since island-to-island travel adds real cost and time for many families. New contacts typically need to be approved before messages, calls, or video visits will go through.",
  ],

  address: "99-902 Moanalua Road, Aiea, HI 96701",
  phone: "(808) 485-5200",
  website: "https://dcr.hawaii.gov/halawa/",
  visitingHours: "In-person visits follow a rotating module schedule published in the HCF Visitation Schedule and Guidelines. Call the visitation hotline at (808) 485-3550 for the current schedule for the inmate's module.",
  commissary: "Deposits to an inmate trust account can be made electronically through the GTL/ViaPath ConnectNetwork system. Do not mail cash.",
  fax: "(808) 483-7275",
  inmateCapacity: 1124,
  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",

  providers: [
    { name: "GTL", slug: "gtl", initial: "G", color: "bg-amber-600", messaging: true, video: true, photos: true, phone: true, moneyTransfer: true, notes: "Phone calls, tablet video visits, messaging, and trust deposits through GTL (GettingOut tablets, ConnectNetwork deposits), per Hawaii DCR." },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Messages via GTL. Reviewed by staff before delivery." },
    video: { status: "available", provider: "GTL", notes: "Video visits via GTL tablets. A practical option for families on other Hawaiian islands. Schedule in advance." },
    photos: { status: "available", provider: "GTL", notes: "Photos are screened for content before being delivered." },
    phone: { status: "available", provider: "GTL", notes: "Phone calls via GTL. Set up an account and add funds to accept calls." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Trust deposits can be made through GTL/ViaPath ConnectNetwork." },
  },

  rules: [
    "GTL handles phone, messaging, photos, and video through its GettingOut platform. Trust deposits go through GTL/ViaPath ConnectNetwork.",
    "New contacts typically need approval before communication is allowed.",
    "All calls, messages, and video visits are subject to monitoring.",
    "Families on other islands should confirm current visitation options, since video visits can save significant travel time.",
    "Photo and mail content is screened and can be rejected if it does not meet facility guidelines.",
  ],

  faq: [
    { question: "How do I message someone at Halawa Correctional Facility?", answer: "Create a GettingOut account, search for the person using their name and Hawaii DOC identification number, and send a message. Expect a review period before it's delivered." },
    { question: "How do I call someone at Halawa Correctional Facility?", answer: "Set up a GTL account for phone calls. The person you're contacting usually needs to add you to their approved contact list first." },
    { question: "Is video visitation available at Halawa Correctional Facility?", answer: "Yes, through GTL tablets. This is especially useful for families living on other Hawaiian islands who cannot easily travel to Oahu. Schedule ahead of time." },
    { question: "Can someone from another Hawaiian island visit in person at Halawa?", answer: "In-person visits are possible but require island travel, which adds time and cost. Many families choose video visitation through GTL tablets as a more practical option for regular contact." },
    { question: "How do I send money to someone at Halawa Correctional Facility?", answer: "Use GTL/ViaPath ConnectNetwork to make trust account deposits. Create an account, add the person's information, and transfer funds using a debit or credit card." },
      {
        question: "How do I send mail to someone at Halawa Correctional Facility?",
        answer: "Address mail with the person's full legal name and inmate identification number, care of Halawa Correctional Facility, 99-902 Moanalua Road, Aiea, HI 96701. Include the inmate ID so mail reaches the right person.",
      },
      {
        question: "How do I find out if someone is at Halawa Correctional Facility?",
        answer: "Check the Hawaii victim notification service (VINE) or call the facility directly. Have the person's full legal name ready when you search or call.",
      },
      {
        question: "Can I schedule a video visit with someone at Halawa Correctional Facility?",
        answer: "Yes. Schedule video visits through your GTL account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
      {
        question: "Can an inmate at Halawa Correctional Facility call me?",
        answer: "Inmates can make outgoing calls to approved numbers, but they cannot receive incoming calls. Set up a GTL account and add funds so you can accept calls from the facility.",
      },
      {
        question: "How do I find the current visiting schedule at Halawa Correctional Facility?",
        answer: "Visiting follows a rotating schedule by housing module. Call the visitation hotline at (808) 485-3550 for the current schedule for the inmate's module before traveling.",
      },
  ],

  relatedFacilitySlugs: ["king-county-correctional-facility", "wyoming-state-penitentiary", "northern-state-correctional-facility"],
},

"northern-state-correctional-facility": {
  id: "f-119",
  name: "Northern State Correctional Facility",
  slug: "northern-state-correctional-facility",
  type: "state",
  stateSlug: "vermont",
  stateName: "Vermont",
  stateAbbr: "VT",
  countySlug: null,
  countyName: "Orleans County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Northern State Correctional: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Northern State Correctional Facility in Newport VT.",

  description:
    "Northern State Correctional Facility communication guide for Newport, Vermont. Find JPay and Securus options for messaging, photos, phone calls, and video visits with someone held at this Vermont Department of Corrections facility.",

  overview: [
    "Northern State Correctional Facility is Vermont's largest prison and is operated by the Vermont Department of Corrections. It is located in Newport, in the far northern part of the state near the Canadian border. The facility holds men at a medium security classification, including many who are serving longer sentences within Vermont's relatively small state prison system.",
    "Families reach someone at Northern State through two providers. JPay handles electronic messaging, digital photo sharing, and money transfers through one account. Securus handles phone calls and video visitation. To send a message or photo, create a JPay account and add the person using their name and Vermont DOC identification number. To talk by phone or set up a video visit, create a separate Securus account and add funds if needed.",
    "Newport is a smaller, rural community, and its distance from Vermont's larger population centers like Burlington or Montpelier means many families face a long drive for in-person visits. Because of this distance, phone calls, messaging, and video visitation through the two provider accounts are especially useful for staying in regular contact. Vermont also transfers some people to out-of-state facilities under interstate agreements, so it's worth confirming a person's current location before assuming they remain at Northern State.",
  ],

  address: "2559 Glen Road, Newport, VT 05855",
  phone: "(802) 334-3364",
  website: "https://bgs.vermont.gov/facilities/east/nscf",
    visitingHours: "Visiting is scheduled by the incarcerated person's last name: A-C Saturday 9:00 to 11:00 AM, D-K Saturday 1:00 to 3:00 PM, L-Q Sunday 9:00 to 11:00 AM, R-Z Sunday 1:00 to 3:00 PM. Confirm the schedule with the facility before traveling.",
    fax: "(802) 334-3367",
  inmateCapacity: 433,
  operatedBy: "Vermont Department of Corrections (VTDOC)",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Northern State Correctional Facility." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Northern State Correctional Facility." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Messages are reviewed by staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "A useful option for families who live far from Newport. Schedule in advance." },
    photos: { status: "available", provider: "JPay", notes: "Photos are screened for content before being delivered." },
    phone: { status: "available", provider: "Securus", notes: "Set up an account and add funds to accept calls." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Commissary deposits can be made through JPay." },
  },

  rules: [
    "JPay handles messaging, photos, and money. Securus handles phone and video.",
    "New contacts typically need to be approved before communication is allowed.",
    "All calls, messages, and video visits are subject to monitoring.",
    "Confirm current facility location before assuming a person remains at Northern State, since Vermont sometimes transfers people out of state.",
    "Photo and mail content is screened and can be rejected if it does not meet VTDOC guidelines.",
  ],

  faq: [
    { question: "How do I message someone at Northern State Correctional Facility?", answer: "Create a JPay account, search for the person using their name and Vermont DOC identification number, and send a message. Expect a short review period before delivery." },
    { question: "How do I call someone at Northern State Correctional Facility?", answer: "Set up a Securus account and add funds. The person you're contacting usually needs to add you to their approved contact list first." },
    { question: "Is video visitation available at Northern State Correctional Facility?", answer: "Yes, through Securus. Given Newport's distance from many Vermont population centers, video visits are a helpful way to stay in touch regularly. Schedule ahead." },
    { question: "Does Vermont ever transfer people out of state?", answer: "Yes, Vermont participates in interstate corrections agreements and sometimes houses people at out-of-state facilities. Confirm current location through the Vermont Department of Corrections before assuming someone remains at Northern State." },
    { question: "How do I send money to someone at Northern State Correctional Facility?", answer: "Use JPay to make commissary deposits. Create an account, add the person's information, and transfer funds with a debit or credit card." },
      {
        question: "What are the visiting hours at Northern State Correctional Facility?",
        answer: "Visiting is scheduled alphabetically by the incarcerated person's last name: A-C Saturday 9:00 to 11:00 AM, D-K Saturday 1:00 to 3:00 PM, L-Q Sunday 9:00 to 11:00 AM, R-Z Sunday 1:00 to 3:00 PM. Arrive no more than 15 minutes before the scheduled time, and bring a valid photo ID.",
      },
      {
        question: "How do I find or search for an inmate at Northern State Correctional Facility?",
        answer: "Use the Vermont Department of Corrections inmate locator on the DOC website. Search by name or DOC number. Confirm the facility before mailing or visiting, since Vermont moves people between facilities.",
      },
      {
        question: "How do I send mail to someone at Northern State Correctional Facility?",
        answer: "Address mail with the person's full name and DOC number, care of Northern State Correctional Facility, 2559 Glen Road, Newport, VT 05855. Include the DOC number so mail reaches the right person.",
      },
      {
        question: "How do I schedule a video visit at Northern State Correctional Facility?",
        answer: "Schedule video visits through your Securus account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
  ],

  relatedFacilitySlugs: ["aci-maximum-security", "wyoming-state-penitentiary", "penobscot-county-jail"],
},

"cass-county-jail": {
  id: "f-120",
  name: "Cass County Jail",
  slug: "cass-county-jail",
  type: "county",
  stateSlug: "north-dakota",
  stateName: "North Dakota",
  stateAbbr: "ND",
  countySlug: null,
  countyName: "Cass County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cass County Jail ND: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Cass County Jail in Fargo ND.",

  description:
    "Cass County Jail communication guide for Fargo, North Dakota. Find GettingOut and Securus options for messaging, phone calls, and video visits with someone held at this Cass County Sheriff's Office facility.",

  overview: [
    "Cass County Jail is located in Fargo, North Dakota's largest city, and operates under the Cass County Sheriff's Office corrections division. It serves as the main jail for Fargo and the surrounding communities in Cass County, holding people awaiting trial as well as those serving shorter county sentences. Because Fargo is a regional hub for eastern North Dakota, the jail also processes people booked from smaller nearby towns.",
    "Families reach someone at Cass County Jail through two main services. GettingOut handles electronic messaging, digital photo sharing, and money transfers, all through a single online account. Securus handles phone calls and video visitation. To send a message, create a GettingOut account and search for the person using their name and booking information. To talk by phone, fund a Securus account so you can accept calls placed from the jail's phone system.",
    "Fargo sits close to the Minnesota border, so the jail serves families from both states in the surrounding metro area. In-person visiting hours and rules can change, so it helps to check the Cass County corrections page or call ahead before planning a visit. People sentenced to longer terms are typically transferred to a North Dakota Department of Corrections and Rehabilitation facility, where a different communication provider setup usually applies.",
  ],

  address: "450 34th Street South, Fargo, ND 58103",
  phone: "(701) 271-2900",
  website: "https://www.casscountynd.gov/departments/corrections",
    rosterUrl: "https://www.casscountynd.gov/departments/corrections/inmates-in-custody",
  operatedBy: "Cass County Sheriff's Office, Corrections Division",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Cass County Jail." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Cass County Jail." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Messages are reviewed by jail staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits can be scheduled in advance through your Securus account." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages sent through GettingOut." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from the jail." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut handles messaging, photos, and money. Securus handles phone and video.",
    "All communication is subject to monitoring by jail staff.",
    "You need the inmate's full name and booking information to locate their account.",
    "In-person visiting hours can change, so confirm current details before visiting.",
    "After transfer to a North Dakota DOCR facility, a different provider setup usually applies.",
  ],

  faq: [
    { question: "How do I message someone at Cass County Jail?", answer: "Create a GettingOut account and search for the person using their name and booking number. Messages are reviewed by jail staff before delivery." },
    { question: "How do I call someone at Cass County Jail?", answer: "Set up a Securus account and add funds. This lets you accept calls placed from the jail's phone system." },
    { question: "Is video visitation available at Cass County Jail?", answer: "Yes, through Securus. Log into your account, search for the facility, and choose an available time slot in advance." },
    { question: "How do I find out if someone is in custody at Cass County Jail?", answer: "Call the jail directly at (701) 271-2900, available 24 hours a day, or check the inmate information available through Cass County's corrections page." },
    { question: "What happens if someone is sentenced to a North Dakota state prison from Cass County?", answer: "People sentenced to longer terms are typically transferred to a North Dakota Department of Corrections and Rehabilitation facility. Communication providers can differ there, so check the new facility's setup right after a transfer." },
      {
        question: "What information does the Cass County Jail roster show?",
        answer: "The official Cass County inmates-in-custody roster lists people currently held at the jail with booking details. If someone does not appear, call the jail directly, since the roster updates as bookings change.",
      },
      {
        question: "How do I send mail to someone at Cass County Jail?",
        answer: "Address mail with the person's full name, care of Cass County Jail, 450 34th Street South, Fargo, ND 58103. Include the full name so mail reaches the right person.",
      },
      {
        question: "How do I schedule a video visit at Cass County Jail?",
        answer: "Schedule video visits through your Securus account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
      {
        question: "How do I find bail or bond information for someone at Cass County Jail?",
        answer: "Check the official Cass County inmates-in-custody roster for booking and bond details. For posting bond, contact the jail for the current process and accepted payment methods.",
      },
  ],

  relatedFacilitySlugs: ["wayne-county-jail", "penobscot-county-jail", "king-county-correctional-facility"],
},

"bernalillo-county-metropolitan-detention-center": {
  id: "f-121",
  name: "Bernalillo County Metropolitan Detention Center",
  slug: "bernalillo-county-metropolitan-detention-center",
  type: "county",
  stateSlug: "new-mexico",
  stateName: "New Mexico",
  stateAbbr: "NM",
  countySlug: null,
  countyName: "Bernalillo County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Bernalillo County MDC: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Bernalillo County Metropolitan Detention Center in Albuquerque NM.",

  description:
    "Bernalillo County Metropolitan Detention Center communication guide. Find GettingOut and Securus contact options for families reaching inmates at MDC in Albuquerque, New Mexico.",

  overview: [
    "Bernalillo County Metropolitan Detention Center, known locally as MDC, is the largest jail in New Mexico and the main booking facility for the Albuquerque area. It is operated by Bernalillo County, not by a single police department, and it takes in people arrested by the Albuquerque Police Department, the Bernalillo County Sheriff's Office, and other law enforcement agencies across the county. The facility sits on the south side of Albuquerque and holds both people awaiting trial and people serving shorter county sentences.",
    "Communication at MDC runs through two providers. GettingOut handles electronic messaging, photo sharing, and money deposits, and families set up a free account at gettingout.com or through the GettingOut mobile app. Securus handles phone calls and video visitation, and requires a separate account at securustech.net. Because these are two different companies, you will need two accounts to access every communication option. Add funds to a Securus account before expecting a call, since MDC phone calls are generally paid for by the person receiving them.",
    "MDC is reachable from most parts of the Albuquerque metro area within a short drive, which makes in-person visits realistic for local families. For people coming from other parts of New Mexico, the facility is accessible from I-25 and I-40. Most people at MDC are in pretrial status waiting on Bernalillo County District Court proceedings. If someone is sentenced to state prison time rather than county time, they are transferred to a New Mexico Corrections Department facility, where the communication setup is different from MDC's.",
  ],

  address: "100 Deputy Dean Miera Dr SW, Albuquerque, NM 87151",
  phone: "(505) 839-8700",
  website: "https://www.bernco.gov/metropolitan-detention-center/",
    rosterUrl: "https://www.bernco.gov/metropolitan-detention-center/overview/",
  operatedBy: "Bernalillo County",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money deposits for MDC. Create a free account at gettingout.com." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for MDC. A separate Securus account is required." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through the GettingOut app or website. Messages are reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits can be scheduled through Securus. On-site video visitation may also be offered; check current hours with MDC." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photo sharing through GettingOut. Physical photo mail is also accepted, subject to MDC mail rules." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account so you can accept collect or prepaid calls from MDC." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Commissary and account deposits through GettingOut, by phone, or at facility kiosks." },
  },

  rules: [
    "GettingOut and Securus are two separate companies. You need one account with each to access all communication options.",
    "All calls, messages, and visits at MDC are subject to monitoring and review by facility staff.",
    "Only people on an inmate's approved contact list can send messages or schedule visits.",
    "Video visits should be scheduled in advance through the Securus website or app.",
    "If someone is transferred to New Mexico Corrections Department custody, the communication provider will change.",
  ],

  faq: [
    { question: "How do I contact someone at Bernalillo County Metropolitan Detention Center?", answer: "You will need two accounts. Use GettingOut for messaging, photos, and money deposits, and Securus for phone calls and video visits. Both can be set up online or through their mobile apps." },
    { question: "Can I do a video visit with someone at MDC?", answer: "Yes. Video visitation is available through Securus. Create an account, search for the facility, and book an open time slot. It's a good idea to schedule at least a day in advance." },
    { question: "How do I know if someone is currently held at MDC?", answer: "Bernalillo County provides an online inmate search through its detention center website. You can search by name to confirm custody status before setting up an account." },
    { question: "What happens after someone is sentenced from MDC?", answer: "People sentenced to county time may stay at MDC. People sentenced to state prison time are transferred to a New Mexico Corrections Department facility, which uses a different communication setup than MDC." },
    { question: "How do I send money to someone at MDC?", answer: "Money deposits go through GettingOut online, by phone, or at a kiosk. Funds are typically applied to the inmate's commissary account within a day." },
      {
        question: "How do I find or search for an inmate at Bernalillo County Metropolitan Detention Center?",
        answer: "Use the official inmate search at https://www.bernco.gov/metropolitan-detention-center/overview/. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Bernalillo County Metropolitan Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Bernalillo County Metropolitan Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Bernalillo County Metropolitan Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Bernalillo County Metropolitan Detention Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["baltimore-city-detention-center", "clark-county-detention-center", "suffolk-county-house-of-correction"],
},

"cheshire-correctional-institution": {
  id: "f-122",
  name: "Cheshire Correctional Institution",
  slug: "cheshire-correctional-institution",
  type: "state",
  stateSlug: "connecticut",
  stateName: "Connecticut",
  stateAbbr: "CT",
  countySlug: null,
  countyName: "New Haven County",
  securityLevel: "Medium / High",
  hasDetailPage: true,
  seoTitle: "Cheshire Correctional: Free Calls, Phone and Messaging Guide",
  seoDescription: "How to contact someone at Cheshire Correctional Institution in Connecticut. Connecticut offers free phone calls at state facilities.",

  description:
    "Cheshire Correctional Institution communication guide. Find JPay and Securus options for families reaching inmates at this Connecticut Department of Correction facility.",

  overview: [
    "Cheshire Correctional Institution is a men's prison operated by the Connecticut Department of Correction in the town of Cheshire, in New Haven County. It houses people at multiple custody levels, including a higher-security unit, and is one of the larger facilities in the Connecticut DOC system. Because it holds a mix of security levels, people can be moved between units within the facility without necessarily transferring to a different institution.",
    "Families use two providers to stay in touch with someone at Cheshire. JPay handles electronic messaging, photo sharing, and money transfers, and an account is created at jpay.com or through the JPay app using the person's name and DOC identification number. Securus handles phone calls and video visitation through a separate account at securustech.net. Both accounts need to be funded before you can send a message, make a video call possible, or accept a phone call.",
    "Cheshire is located in central Connecticut, within driving distance of New Haven, Hartford, and much of the state, which makes it accessible for most Connecticut families. In-person visits are scheduled through the Connecticut DOC visiting system rather than through JPay or Securus. If someone is transferred to another Connecticut DOC facility, the same JPay and Securus accounts generally continue to work statewide, but it's worth confirming the new facility on your account before sending funds.",
  ],

  notToConfuseWith: "Not to be confused with Cheshire County Jail in Keene, New Hampshire.",
  address: "900 Highland Avenue, Cheshire, CT 06410",
  phone: "(203) 651-6100",
  website: "https://portal.ct.gov/doc/facility/cheshire-ci",
  operatedBy: "Connecticut Department of Correction",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Used for messaging, photo sharing, and money transfers to people held at Cheshire CI." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Used for phone calls and video visitation at Cheshire CI." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging through JPay. Messages go through Connecticut DOC review before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visitation is available through Securus and should be scheduled in advance." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be sent through JPay. Physical photo mail is also accepted under DOC mail rules." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from someone at Cheshire CI." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Send funds through JPay online, by phone, or with cash at a MoneyGram location." },
  },

  rules: [
    "JPay covers messaging, photos, and money. Securus covers phone calls and video visits. You need both.",
    "All communication is subject to review and monitoring by Connecticut DOC staff.",
    "You must be on the inmate's approved contact list to message, call, or visit.",
    "In-person visits are arranged through the Connecticut DOC visiting process, separate from JPay or Securus.",
    "If someone transfers to another Connecticut DOC facility, confirm the correct facility on your account before sending money.",
  ],

  faq: [
    { question: "How do I contact someone at Cheshire Correctional Institution?", answer: "Set up a JPay account for messaging, photos, and money, and a separate Securus account for phone calls and video visits. Both need the person's full name and Connecticut DOC identification number." },
    { question: "Can I schedule a video visit at Cheshire CI?", answer: "Yes, video visitation is offered through Securus. Log into your account, select Cheshire Correctional Institution, and choose an available time. Booking a day or two ahead is recommended." },
    { question: "How do I find out where someone is being held in Connecticut?", answer: "The Connecticut Department of Correction offers an online inmate locator on its website. You can search by name to confirm the person's current facility." },
    { question: "What happens if someone is moved to a different Connecticut prison?", answer: "Your JPay and Securus accounts typically work across Connecticut DOC facilities. Update the facility listed on your account so messages and money reach the right place." },
    { question: "How do I send money to someone at Cheshire CI?", answer: "Use JPay online, through the app, by phone, or with cash at a participating MoneyGram location. Funds are usually credited to the inmate's account within one to two business days." },
      {
        question: "How do I find or search for an inmate at Cheshire Correctional Institution?",
        answer: "Use the Connecticut Department of Correction inmate search on ct.gov/doc. Search by name and date of birth. Confirm the facility before mailing or visiting, since Connecticut moves people between facilities.",
      },
      {
        question: "How do I send mail to someone at Cheshire Correctional Institution?",
        answer: "Address mail with the person's full name and inmate number, care of Cheshire Correctional Institution, 900 Highland Avenue, Cheshire, CT 06410. Include the inmate number so mail reaches the right person.",
      },
      {
        question: "How do I schedule a video visit at Cheshire Correctional Institution?",
        answer: "Video visits must be pre-scheduled through Securus. Complete the Connecticut DOC visiting request process and confirm approval before the visit. You must be on the inmate's approved visitor list.",
      },
      {
        question: "Can an inmate at Cheshire Correctional Institution call me?",
        answer: "Inmates can make outgoing calls to approved numbers, but they cannot receive incoming calls. Set up a Securus account and add funds so you can accept calls from the facility.",
      },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "fci-danbury", "san-quentin-state-prison"],
},

"philadelphia-department-of-prisons": {
  id: "f-123",
  name: "Philadelphia Department of Prisons",
  slug: "philadelphia-department-of-prisons",
  type: "county",
  stateSlug: "pennsylvania",
  stateName: "Pennsylvania",
  stateAbbr: "PA",
  countySlug: null,
  countyName: "Philadelphia County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Philadelphia Prisons: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Philadelphia Department of Prisons. Securus Technologies handles phone calls.",

  description:
    "Philadelphia Department of Prisons communication guide. Find GettingOut and Securus options for families reaching people held in Philadelphia's county jail system.",

  overview: [
    "Philadelphia Department of Prisons, sometimes called PDP, is the city agency that runs Philadelphia's county jail system. Rather than a single building, PDP operates a group of facilities clustered in Northeast Philadelphia along State Road, including intake, detention, and industrial correctional buildings. Anyone arrested in Philadelphia and not released before trial is typically booked into this system, and where a person ends up depends on their classification, gender, and case status.",
    "Communication across the PDP system runs through two providers. GettingOut handles electronic messaging, photo sharing, and money deposits, with a free account available at gettingout.com or through the GettingOut app. Securus handles phone calls and video visitation through a separate account at securustech.net. Because someone can be moved between PDP facilities during their case, it's worth confirming the current building on your account before sending a message or funds.",
    "Because PDP is a system of several sites rather than one address, families should use the Department's own inmate locator to confirm exactly where a person is held before mailing letters or scheduling a visit. Philadelphia is served by public transit reaching the State Road area, which helps families without a car. People convicted of longer sentences may eventually transfer out of the city system to a Pennsylvania Department of Corrections state prison, where a different communication setup applies.",
  ],

  phone: "(215) 685-7711",
  website: "https://www.phila.gov/departments/philadelphia-department-of-prisons/",
  mailingAddress: "Inmate full name and PPN number\nP.O. Box 247\nPhoenix, MD 21131\nMail scanning center; do not send personal mail to a PDP facility. Money orders and certified checks go directly to the person's facility.",
  visitingHours: "In-person visits Monday through Friday at 9-10 a.m., 1-2 p.m., and 3-4 p.m. at all four facilities. Saturday visits are for RCF ASDMOD3 and Youthful Offenders only. Appointments must be made 48 hours to 7 days in advance; arrive at least 10 minutes early.",
  rosterUrl: "https://www.phila.gov/services/crime-law-justice/inmates/find-an-inmate/",
  commissary: "Clothing and other items can be ordered through commissary online. Money orders and certified checks must be sent directly to the person's facility; cash and personal checks are not accepted.",
  operatedBy: "City of Philadelphia, Philadelphia Department of Prisons",
  // UNVERIFIED: could not confirm a single administrative street address via search, please verify manually

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money deposits across the Philadelphia jail system." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation across the Philadelphia jail system." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut. Confirm the correct facility on your account, since PDP has multiple sites." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Availability can vary by facility within the PDP system." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photo sharing through GettingOut. Physical photo mail is also accepted under PDP mail rules." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from a PDP facility." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Commissary and account deposits through GettingOut, online or by phone." },
  },

  rules: [
    "PDP operates several facilities on and near State Road. Confirm the exact building where someone is held before mailing letters.",
    "GettingOut covers messaging, photos, and money. Securus covers phone calls and video visits.",
    "All communication is subject to review by PDP staff.",
    "Only approved contacts can message, call, or schedule visits with someone in custody.",
    "People sentenced to longer terms may transfer to a Pennsylvania DOC state prison, which uses different providers.",
  ],

  faq: [
    { question: "How do I contact someone in the Philadelphia jail system?", answer: "Set up a GettingOut account for messaging, photos, and money, and a Securus account for phone calls and video visits. Confirm which specific PDP facility the person is in first, since the system has more than one site." },
    { question: "How do I find out which Philadelphia facility someone is being held in?", answer: "The Philadelphia Department of Prisons offers an online tool to locate an incarcerated person on the city's website, phila.gov. Search by name to confirm the current facility before mailing anything or scheduling a visit." },
    { question: "Can I do a video visit with someone in Philadelphia's jail system?", answer: "Yes, video visitation is available through Securus. Create an account, select the correct facility, and choose an open time slot. Confirm hours in advance since they can vary by site." },
    { question: "What happens after someone is sentenced in Philadelphia?", answer: "Shorter sentences may be served within the PDP system. Longer sentences typically result in a transfer to a Pennsylvania Department of Corrections state prison, which uses a different communication provider setup than PDP." },
    { question: "How do I send money to someone in a Philadelphia facility?", answer: "Money deposits go through GettingOut online or by phone. Make sure you have the correct facility selected on the account, since PDP includes multiple buildings." },
      {
        question: "How do I send mail to someone in a Philadelphia jail?",
        answer: "Mail is addressed to the specific facility where the person is held, so confirm the facility first. Address the letter with the person's full name and identification number, care of that facility.",
      },
      {
        question: "How do I post bail for someone in a Philadelphia jail?",
        answer: "Bail is set by the court. Confirm the bail amount and the posting process with the court or the facility. Bring a valid photo ID when posting bail in person.",
      },
      {
        question: "Can I visit someone in person in the Philadelphia jail system?",
        answer: "In-person visiting requires approval and scheduling. Confirm the current visiting procedures for the specific facility with the Philadelphia Department of Prisons before traveling, since procedures can change.",
      },
      {
        question: "Can I still message someone after they transfer within the Philadelphia system?",
        answer: "Yes. GettingOut handles messaging across the Philadelphia jail system, so your account still works after a transfer within the system. Confirm the person's new facility before sending mail, since mail goes to the specific facility.",
      },
      {
        question: "Why does mail for Philadelphia jails go to a P.O. box in Maryland?",
        answer: "Personal mail for people in Philadelphia Department of Prisons facilities is routed through a mail scanning center at P.O. Box 247, Phoenix, MD 21131. Include the inmate's full name and PPN number. Do not send personal mail directly to a PDP facility. Money orders and certified checks go directly to the person's facility.",
      },
  ],

  relatedFacilitySlugs: ["baltimore-city-detention-center", "franklin-county-correctional-center", "bernalillo-county-metropolitan-detention-center"],
},

"louisville-metro-corrections": {
  id: "f-124",
  name: "Louisville Metro Corrections",
  slug: "louisville-metro-corrections",
  type: "county",
  stateSlug: "kentucky",
  stateName: "Kentucky",
  stateAbbr: "KY",
  countySlug: null,
  countyName: "Jefferson County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Louisville Metro Corrections: Phone Calls and Messaging",
  seoDescription: "How to contact someone at Louisville Metro Corrections in Kentucky. Call Metro311 at 502-574-5000 for information.",

  description:
    "Louisville Metro Corrections communication guide. Find GettingOut and Securus options for families reaching people held in downtown Louisville's main jail.",

  overview: [
    "Louisville Metro Corrections is the jail agency for Louisville and Jefferson County, Kentucky, operating under Louisville Metro Government rather than a county sheriff. The main facility sits in downtown Louisville and processes people arrested by the Louisville Metro Police Department and other local agencies. It holds people awaiting trial in Jefferson County courts as well as people serving shorter county sentences.",
    "Two providers handle communication at Louisville Metro Corrections. GettingOut manages electronic messaging, photo sharing, and money deposits through a free account at gettingout.com or the GettingOut app. Securus manages phone calls and video visitation through a separate account at securustech.net. Setting up and funding both accounts ahead of time makes it easier to stay in touch once someone is booked in.",
    "The downtown location is close to public transit and easy to reach for families in the Louisville metro area. People held at the facility are generally tied to Jefferson County court proceedings. If someone is sentenced to a longer term in the Kentucky state prison system, they will be transferred to a Kentucky Department of Corrections facility, where the available communication providers can be different from Louisville Metro Corrections.",
  ],

  address: "400 S. Sixth Street, Louisville, KY 40202",
  phone: "(502) 574-8477",
  website: "https://louisvilleky.gov/government/corrections",
  operatedBy: "Louisville Metro Government, Department of Corrections",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money deposits for Louisville Metro Corrections." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Louisville Metro Corrections." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visitation available through Securus. Schedule in advance for the best availability." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photo sharing through GettingOut, along with standard physical mail options." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from someone at the facility." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposits accepted through GettingOut online or by phone." },
  },

  rules: [
    "GettingOut handles messaging, photos, and money. Securus handles phone calls and video visits.",
    "All communication is monitored and subject to review by facility staff.",
    "You must be on the person's approved contact list to message, call, or visit.",
    "Video visits should be booked in advance through the Securus website or app.",
    "A transfer to a Kentucky Department of Corrections state prison may change the communication providers you need to use.",
  ],

  faq: [
    { question: "How do I contact someone at Louisville Metro Corrections?", answer: "Create a GettingOut account for messaging, photos, and money, and a separate Securus account for phone calls and video visits. Both accounts need the person's full name and booking information." },
    { question: "Can I do a video visit with someone at Louisville Metro Corrections?", answer: "Yes. Video visitation is available through Securus. Log in, select the facility, and pick an open slot. Booking ahead of time helps you get a convenient window." },
    { question: "How do I check if someone is currently in custody in Louisville?", answer: "Louisville Metro Government provides an online inmate search on its corrections webpage at louisvilleky.gov. You can search by name to confirm current custody status." },
    { question: "What happens after someone is sentenced from Louisville Metro Corrections?", answer: "Shorter county sentences may be served at the same facility. Longer sentences usually lead to a transfer to a Kentucky Department of Corrections state prison, which may use different communication providers." },
    { question: "How do I send money to someone at Louisville Metro Corrections?", answer: "Use GettingOut online or by phone to make a deposit. Funds are typically applied to the person's account within a day or two." },
      {
        question: "How do I find or search for an inmate at Louisville Metro Corrections?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Jefferson County, Kentucky. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Louisville Metro Corrections?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Louisville Metro Corrections?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Louisville Metro Corrections?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Louisville Metro Corrections?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["franklin-county-correctional-center", "baltimore-city-detention-center", "philadelphia-department-of-prisons"],
},

"kilby-correctional-facility": {
  id: "f-125",
  name: "Kilby Correctional Facility",
  slug: "kilby-correctional-facility",
  type: "state",
  stateSlug: "alabama",
  stateName: "Alabama",
  stateAbbr: "AL",
  countySlug: null,
  countyName: "Montgomery County",
  securityLevel: "Medium / Maximum",
  hasDetailPage: true,
  seoTitle: "Kilby Correctional Facility: Securus Phone and JPay",
  seoDescription: "How to contact someone at Kilby Correctional Facility in Alabama. Securus Technologies handles ADOC phone calls. JPay for money transfers.",

  description:
    "Kilby Correctional Facility communication guide. Find JPay and Securus options for families reaching people held at this Alabama Department of Corrections prison.",

  overview: [
    "Kilby Correctional Facility is a men's prison operated by the Alabama Department of Corrections, located near Mount Meigs on the outskirts of Montgomery. It also serves as a primary intake and classification point for the state system, meaning many people entering Alabama DOC custody pass through Kilby before being assigned to their long-term facility. Because of this role, population and housing assignments at Kilby can change more often than at a typical general population prison.",
    "Families reach people at Kilby through two providers. JPay handles electronic messaging, photo sharing, and money transfers, with an account created at jpay.com or through the JPay app using the person's name and Alabama DOC identification number. Securus handles phone calls and video visitation through a separate account at securustech.net. Since Kilby also functions as an intake facility, it's worth double-checking that your JPay and Securus accounts show the correct current facility, since a newly booked person can be transferred fairly quickly.",
    "Kilby sits close to Montgomery, making it reasonably accessible for families in central Alabama, though it is farther for people coming from northern or southern parts of the state. Because Kilby processes new intakes, someone held there may soon be moved to a different Alabama DOC facility for the remainder of their sentence. Checking JPay and Securus regularly for updated facility information helps avoid a break in communication after a transfer.",
  ],

  address: "12201 Wares Ferry Road, Montgomery, AL 36117",
  phone: "(334) 215-6600",
  website: "https://doc.alabama.gov/facility.aspx?loc=18",
    mailingAddress: "INMATE NAME and AIS NUMBER, Kilby Correctional Facility, P.O. BOX 150, MT. MEIGS, AL 36057",
    rosterUrl: "http://www.doc.state.al.us/InmateSearch",
    commissary: "Deposit money online through Access Corrections at accesscorrections.com, by phone at 866-345-1884, or by mailing a money order with a deposit coupon to Secure Deposits, Alabama DOC, P.O. Box 12486, St. Louis, MO 63132.",
  operatedBy: "Alabama Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Used for messaging, photo sharing, and money transfers to people held at Kilby." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Used for phone calls and video visitation at Kilby." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging through JPay. Messages are reviewed by Alabama DOC staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Confirm current availability, since Kilby also processes new intakes." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos through JPay, along with standard physical mail." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from someone at Kilby." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Send funds through JPay online, by phone, or with cash at a MoneyGram location." },
  },

  rules: [
    "JPay covers messaging, photos, and money. Securus covers phone calls and video visits.",
    "Kilby also functions as an intake facility, so confirm the person's current location before assuming it hasn't changed.",
    "All communication is subject to monitoring and review by Alabama DOC staff.",
    "You must be an approved contact to message, call, or visit.",
    "Check JPay and Securus for updated facility information if someone is transferred after intake processing.",
  ],

  faq: [
    { question: "How do I contact someone at Kilby Correctional Facility?", answer: "Set up a JPay account for messaging, photos, and money, and a separate Securus account for phone calls and video visits. You'll need the person's full name and Alabama DOC identification number for both." },
    { question: "Why might someone only be at Kilby for a short time?", answer: "Kilby serves as an intake and classification point for the Alabama Department of Corrections. New arrivals may be processed there before being assigned to a different facility for the rest of their sentence." },
    { question: "How do I find out where someone is currently housed in the Alabama system?", answer: "The Alabama Department of Corrections provides an inmate locator on its website, doc.alabama.gov. Search by name to confirm current facility placement, especially after a recent booking." },
    { question: "Can I schedule a video visit at Kilby?", answer: "Yes, video visitation is available through Securus. Create an account, select Kilby Correctional Facility, and choose an open time. Confirm the person is still housed there before booking, given Kilby's intake role." },
    { question: "How do I send money to someone at Kilby?", answer: "Use JPay online, through the app, by phone, or with cash at a participating MoneyGram location. Deposits are usually applied within one to two business days." },
      {
        question: "How do I find or search for an inmate at Kilby Correctional Facility?",
        answer: "Use the Alabama Department of Corrections inmate search at doc.state.al.us/InmateSearch. Search by name. Kilby is the receiving and classification center, so many people transfer to another Alabama facility after evaluation.",
      },
      {
        question: "How do I send mail to someone at Kilby Correctional Facility?",
        answer: "Address mail as follows: INMATE NAME and AIS NUMBER, Kilby Correctional Facility, P.O. BOX 150, MT. MEIGS, AL 36057. Include the inmate's full name and AIS number on every envelope.",
      },
      {
        question: "What happens during classification at Kilby Correctional Facility?",
        answer: "Kilby serves as the receiving and classification center for the Alabama prison system. New arrivals are evaluated and classified, then assigned to another correctional facility. The stay at Kilby is usually temporary.",
      },
      {
        question: "How do I add money to someone's account at Kilby Correctional Facility?",
        answer: "Deposit money online through Access Corrections at accesscorrections.com, by phone at 866-345-1884, or by mailing a money order with a deposit coupon to Secure Deposits, Alabama DOC, P.O. Box 12486, St. Louis, MO 63132.",
      },
  ],

  relatedFacilitySlugs: ["attica-correctional-facility", "san-quentin-state-prison", "montana-state-prison"],
},

"marble-valley-correctional-facility": {
  id: "f-126",
  name: "Marble Valley Correctional Facility",
  slug: "marble-valley-correctional-facility",
  type: "state",
  stateSlug: "vermont",
  stateName: "Vermont",
  stateAbbr: "VT",
  countySlug: null,
  countyName: "Rutland County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Marble Valley Correctional: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Marble Valley Correctional Facility in Rutland VT.",

  description:
    "Marble Valley Correctional Facility communication guide. Find JPay and Securus options for families reaching people held at this Vermont Department of Corrections facility in Rutland.",

  overview: [
    "Marble Valley Correctional Facility, often listed as Marble Valley Regional Correctional Facility, is a medium-security prison operated by the Vermont Department of Corrections in the city of Rutland. It is one of the smaller facilities in Vermont's state system, which reflects the state's overall lower incarcerated population compared to larger states. Vermont runs a unified correctional system, so Marble Valley houses both people awaiting trial from the surrounding area and people serving state sentences.",
    "Families use two providers to communicate with someone at Marble Valley. JPay handles electronic messaging, photo sharing, and money transfers, with a free account at jpay.com or through the JPay app using the person's name and Vermont DOC identification number. Securus handles phone calls and video visitation through a separate account at securustech.net. Setting up both accounts in advance and keeping them funded makes it easier to stay in regular contact.",
    "Rutland is located in western Vermont, reachable from most of the state within a few hours' drive, though it is farther from Vermont's eastern communities. Because Vermont operates a single statewide system rather than separate county jails, a person held at Marble Valley could later be moved to another Vermont DOC facility, or in some cases to an out-of-state contracted facility. Checking your JPay and Securus accounts for the current facility listing helps you catch any change quickly.",
  ],

  address: "167 State Street, Rutland, VT 05701",
  phone: "(802) 786-5830",
  website: "https://doc.vermont.gov/correctional-facilities/mvrcf-rutland",
    visitingHours: "Visiting is scheduled by housing unit on Saturdays and Sundays: B-unit Lower Saturday 8:15 to 9:15 AM, B-unit Upper Saturday 9:35 to 10:35 AM, C-unit Lower Saturday 1:15 to 2:15 PM, C-unit Upper Saturday 2:40 to 3:40 PM, D-unit Lower Sunday 8:15 to 9:15 AM, D-unit Upper Sunday 9:35 to 10:35 AM, A-unit Lower Sunday 1:15 to 2:15 PM, A-unit Upper Sunday 2:40 to 3:40 PM. Confirm the schedule with the facility before traveling.",
    fax: "(802) 786-5843",
  inmateCapacity: 127,
  operatedBy: "Vermont Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Used for messaging, photo sharing, and money transfers to people held at Marble Valley." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Used for phone calls and video visitation at Marble Valley." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging through JPay. Messages go through Vermont DOC review before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visitation available through Securus. Schedule ahead where possible." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos through JPay, alongside standard physical mail." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from someone at Marble Valley." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Send funds through JPay online, by phone, or with cash at a MoneyGram location." },
  },

  rules: [
    "JPay covers messaging, photos, and money. Securus covers phone calls and video visits.",
    "All communication is subject to review and monitoring by Vermont DOC staff.",
    "Only people on the approved contact list can message, call, or visit.",
    "Vermont runs a single statewide system, so transfers between Vermont DOC facilities are possible during a sentence.",
    "Confirm the current facility listed on JPay and Securus if you haven't heard from someone in a while, in case of a transfer.",
  ],

  faq: [
    { question: "How do I contact someone at Marble Valley Correctional Facility?", answer: "Set up a JPay account for messaging, photos, and money, and a separate Securus account for phone calls and video visits. You'll need the person's full name and Vermont DOC identification number." },
    { question: "Is Marble Valley Correctional Facility in Vermont or Alabama?", answer: "Marble Valley Correctional Facility is located in Rutland, Vermont, and is operated by the Vermont Department of Corrections. There is no currently operating facility by this name in Alabama's state prison system." },
    { question: "Can I schedule a video visit with someone at Marble Valley?", answer: "Yes, video visitation is available through Securus. Create an account, select the facility, and choose an open time slot. Booking a day or two in advance is a good idea." },
    { question: "How do I find out where someone is held in the Vermont system?", answer: "The Vermont Department of Corrections offers information on current facility placement. You can also check with the facility directly or through your JPay and Securus accounts, which list the person's current location." },
    { question: "How do I send money to someone at Marble Valley?", answer: "Use JPay online, through the app, by phone, or with cash at a participating MoneyGram location. Deposits are typically credited within one to two business days." },
      {
        question: "What are the visiting hours at Marble Valley Correctional Facility?",
        answer: "Visiting is scheduled by housing unit on Saturdays and Sundays. B-unit visits are Saturday morning, C-unit visits are Saturday afternoon, D-unit visits are Sunday morning, and A-unit visits are Sunday afternoon. Confirm the exact slot for the correct unit with the facility before traveling.",
      },
      {
        question: "How do I find or search for an inmate at Marble Valley Correctional Facility?",
        answer: "Use the Vermont Department of Corrections inmate locator on the DOC website. Search by name or DOC number. Confirm the facility before mailing or visiting, since Vermont moves people between facilities.",
      },
      {
        question: "How do I send mail to someone at Marble Valley Correctional Facility?",
        answer: "Address mail with the person's full name and DOC number, care of Marble Valley Correctional Facility, 167 State Street, Rutland, VT 05701. Include the DOC number so mail reaches the right person.",
      },
      {
        question: "How do I schedule a video visit at Marble Valley Correctional Facility?",
        answer: "Schedule video visits through your Securus account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
  ],

  relatedFacilitySlugs: ["cheshire-correctional-institution", "fci-danbury", "attica-correctional-facility"],
},

"ely-state-prison": {
  id: "f-127",
  name: "Ely State Prison",
  slug: "ely-state-prison",
  type: "state",
  stateSlug: "nevada",
  stateName: "Nevada",
  stateAbbr: "NV",
  countySlug: null,
  countyName: "White Pine County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Ely State Prison: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Ely State Prison in Nevada.",

  description:
    "Ely State Prison communication guide. Find JPay and Securus options for families reaching people held at Nevada's maximum-security prison in White Pine County.",

  overview: [
    "Ely State Prison is a maximum-security facility operated by the Nevada Department of Corrections, located a few miles outside the city of Ely in rural White Pine County. It opened in 1989 and is Nevada's highest-security prison, housing people who require the most restrictive level of custody in the state system, including Nevada's death row population. Because of its remote location in eastern Nevada, Ely State Prison is one of the harder facilities in the state for families to visit in person.",
    "Communication with someone at Ely State Prison goes through two providers. JPay handles electronic messaging, photo sharing, and money transfers, with an account set up at jpay.com or through the JPay app using the person's name and Nevada DOC identification number. Securus handles phone calls and video visitation through a separate account at securustech.net. Given how far Ely is from Nevada's larger cities, many families rely more heavily on JPay and Securus than on in-person visits.",
    "Ely is roughly a four to five hour drive from Las Vegas and a similar distance from Reno, which makes trip planning important for anyone considering a visit. Some people at Ely are held under especially restrictive conditions, which can affect communication access and monitoring more than at a lower-security Nevada facility. Confirming current visiting and communication rules directly with the prison before making travel plans is worthwhile given the distance involved.",
  ],

  address: "4569 North State Route 490, Ely, NV 89301",
  phone: "(775) 977-5348",
  website: "https://doc.nv.gov/Facilities/ESP_Facility/",
    mailingAddress: "Inmate name and ID, P.O. Box 1989, Ely, Nevada 89301",
  established: 1989,
  operatedBy: "Nevada Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Used for messaging, photo sharing, and money transfers to people held at Ely State Prison." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Used for phone calls and video visitation at Ely State Prison." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging through JPay. Messages are reviewed before delivery, and review times can be longer at maximum-security facilities." },
    video: { status: "limited", provider: "Securus", notes: "Video visitation may be more restricted for people held in higher-security housing. Confirm current access before scheduling." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos through JPay, along with standard physical mail subject to Nevada DOC content rules." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls, though call access can vary depending on housing status." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Send funds through JPay online, by phone, or with cash at a MoneyGram location." },
  },

  rules: [
    "JPay covers messaging, photos, and money. Securus covers phone calls and video visits.",
    "Ely State Prison is Nevada's highest-security facility, so communication access can be more limited for some housing units.",
    "All communication is subject to review and monitoring by Nevada DOC staff.",
    "Only approved contacts can message, call, or visit someone at the facility.",
    "The facility's remote location means it's worth confirming current visiting hours and rules before traveling.",
  ],

  faq: [
    { question: "How do I contact someone at Ely State Prison?", answer: "Set up a JPay account for messaging, photos, and money, and a separate Securus account for phone calls and video visits. You'll need the person's full name and Nevada DOC identification number for both." },
    { question: "Why is Ely State Prison harder to visit than other Nevada facilities?", answer: "Ely is in a remote part of eastern Nevada, roughly four to five hours from both Las Vegas and Reno. Its distance from major cities makes in-person visits harder to plan than for facilities closer to population centers." },
    { question: "Is video visitation available at Ely State Prison?", answer: "Video visitation through Securus can be available, but access may be more limited depending on the person's housing unit, since Ely holds Nevada's highest-security population. Confirm current access before scheduling." },
    { question: "How do I find out if someone is at Ely State Prison?", answer: "The Nevada Department of Corrections offers an online inmate search at doc.nv.gov. Search by name to confirm current facility placement." },
    { question: "How do I send money to someone at Ely State Prison?", answer: "Use JPay online, through the app, by phone, or with cash at a participating MoneyGram location. Deposits are typically credited within one to two business days." },
      {
        question: "How do I find or search for an inmate at Ely State Prison?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for White Pine County, Nevada. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Ely State Prison?",
        answer: "Address mail as follows: Inmate name and ID, P.O. Box 1989, Ely, Nevada 89301. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Ely State Prison?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Ely State Prison?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Ely State Prison?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["san-quentin-state-prison", "adx-florence", "montana-state-prison"],
},

"maui-community-correctional-center": {
  id: "f-128",
  name: "Maui Community Correctional Center",
  slug: "maui-community-correctional-center",
  type: "county",
  stateSlug: "hawaii",
  stateName: "Hawaii",
  stateAbbr: "HI",
  countySlug: null,
  countyName: "Maui County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Maui MCCC: Phone Calls, Messaging and Money Transfer Guide",
  seoDescription: "How to contact someone at Maui Community Correctional Center in Wailuku Hawaii.",

  description:
    "Maui Community Correctional Center communication guide. Find GTL options for families reaching people held at Maui's main jail in Wailuku.",

  overview: [
    "Maui Community Correctional Center, often shortened to MCCC, is the main detention facility serving Maui County, located in Wailuku. Unlike most states, Hawaii does not have separate county jails run by local sheriffs. Instead, the entire correctional system, including facilities that function like county jails, is operated by the state's Department of Corrections and Rehabilitation. MCCC holds people awaiting trial as well as people serving shorter sentences from Maui County courts.",
    "Communication at MCCC runs through GTL (Global Tel Link). Phone calls, tablet video visits, and messaging run through GTL, and trust account deposits go through GTL/ViaPath ConnectNetwork. Create a GettingOut account to message, share photos, and set up video visits. Because MCCC is run by the state rather than a county agency, its communication setup is consistent with other Hawaii Department of Corrections and Rehabilitation facilities.",
    "MCCC serves the island of Maui, and its Wailuku location is central and generally reachable for island residents planning an in-person visit. Families living on other Hawaiian islands or on the mainland typically rely more on GTL tablet video visits than on in-person visits, given the cost and time of interisland or long-distance travel. If someone is sentenced to a longer term, they may be transferred to a different Hawaii DCR facility, sometimes on another island, so it's worth checking their current location before assuming it hasn't changed.",
  ],

  address: "600 Waiale Drive, Wailuku, HI 96793",
  phone: "(808) 243-5101",
  website: "https://dcr.hawaii.gov/mccc/",
  visitingHours: "Call the visitation hotline at (808) 243-5861 for the current visiting schedule.",
  commissary: "Deposits to an inmate trust account can be made electronically through the GTL/ViaPath ConnectNetwork system. Do not mail cash.",
  fax: "(808) 244-0128",
  operatedBy: "Hawaii Department of Corrections and Rehabilitation",

  providers: [
    { name: "GTL", slug: "gtl", initial: "G", color: "bg-amber-600", messaging: true, video: true, photos: true, phone: true, moneyTransfer: true, notes: "Phone calls, tablet video visits, messaging, and trust deposits through GTL (GettingOut tablets, ConnectNetwork deposits), per Hawaii DCR." },
  ],

  communication: {
    messaging: { status: "available", provider: "GTL", notes: "Electronic messaging through GTL. Messages are reviewed by facility staff before delivery." },
    video: { status: "available", provider: "GTL", notes: "Video visitation available through GTL tablets, useful for families on other islands or the mainland." },
    photos: { status: "available", provider: "GTL", notes: "Digital photo sharing through GTL, along with standard physical mail." },
    phone: { status: "available", provider: "GTL", notes: "Fund a GTL account to accept calls from someone at MCCC." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposits accepted through ConnectNetwork online or by phone." },
  },

  rules: [
    "GTL covers phone, messaging, photos, and video through its GettingOut platform. Trust deposits go through GTL/ViaPath ConnectNetwork.",
    "MCCC is operated by the state of Hawaii, not a county sheriff, since Hawaii runs a unified correctional system.",
    "All communication is subject to review and monitoring by facility staff.",
    "Only people on the approved contact list can message, call, or visit.",
    "A transfer to another Hawaii DCR facility, possibly on a different island, may change the practical logistics of in-person visits.",
  ],

  faq: [
    { question: "How do I contact someone at Maui Community Correctional Center?", answer: "Set up a GTL account for messaging, photos, phone calls, and video visits. Trust deposits go through ConnectNetwork. You need the person's full name and booking information." },
    { question: "Who runs Maui Community Correctional Center?", answer: "MCCC is operated by the Hawaii Department of Corrections and Rehabilitation. Hawaii does not have separate county-run jails, so the state agency manages facilities like MCCC directly." },
    { question: "Can I do a video visit with someone at MCCC from the mainland?", answer: "Yes. Video visitation through GTL tablets is often the most practical option for families who live far from Maui, including other Hawaiian islands and the mainland. Schedule in advance for the best chance of an open slot." },
    { question: "How do I find out if someone is currently at MCCC?", answer: "The Hawaii Department of Corrections and Rehabilitation provides facility and inmate information on its website, dcr.hawaii.gov. You can also call the facility directly to confirm custody status." },
    { question: "How do I send money to someone at MCCC?", answer: "Use GTL/ViaPath ConnectNetwork online or by phone to make a deposit. Funds are typically applied to the person's account within a day or two." },
      {
        question: "How do I send mail to someone at Maui Community Correctional Center?",
        answer: "Address mail with the person's full name and ID number, care of Maui Community Correctional Center, 600 Waiale Drive, Wailuku, HI 96793. Include the ID number so mail reaches the right person.",
      },
      {
        question: "How do I find out if someone is at Maui Community Correctional Center?",
        answer: "Check the Hawaii victim notification service (VINE) or call the facility directly. Have the person's full legal name ready when you search or call.",
      },
      {
        question: "How do I schedule a video visit at Maui Community Correctional Center?",
        answer: "Schedule video visits through your GTL account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
      {
        question: "How do I post bail for someone at Maui Community Correctional Center?",
        answer: "Bail is set by the court. Contact the facility for the current bond amount and the accepted posting process. Bring a valid photo ID when posting bail in person.",
      },
      {
        question: "How do I find the current visiting schedule at Maui Community Correctional Center?",
        answer: "Call the visitation hotline at (808) 243-5861 for the current schedule before traveling, since visiting times can change.",
      },
  ],

  relatedFacilitySlugs: ["oahu-community-correctional-center", "clark-county-detention-center", "suffolk-county-house-of-correction"],
},

"howard-r-young-correctional-institution": {
  id: "f-129",
  name: "Howard R Young Correctional Institution",
  slug: "howard-r-young-correctional-institution",
  type: "state",
  stateSlug: "delaware",
  stateName: "Delaware",
  stateAbbr: "DE",
  countySlug: null,
  countyName: "New Castle County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Howard Young Correctional: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Howard R Young Correctional Institution in Wilmington DE.",

  description:
    "Howard R Young Correctional Institution communication guide. Find JPay and Securus options for families reaching people held at this Delaware Department of Correction facility in Wilmington.",

  overview: [
    "Howard R Young Correctional Institution, sometimes called Gander Hill, is a Delaware Department of Correction facility in Wilmington. Delaware runs a single unified state correctional system rather than separate county jails, so this facility handles both pretrial detention for New Castle County and sentenced custody, similar to how a county jail would function in most other states. It opened in 1982 and is one of the larger facilities in Delaware's system.",
    "Families reach people at Howard R Young through two providers. JPay handles electronic messaging, photo sharing, and money transfers, with an account created at jpay.com or through the JPay app using the person's name and Delaware DOC identification number. Securus handles phone calls and video visitation through a separate account at securustech.net. Because Delaware's system is unified, these same accounts generally work if someone is later transferred to another Delaware DOC facility.",
    "Wilmington is in northern Delaware, close to Philadelphia and reachable from most of the small state within an hour or two, which helps make in-person visits realistic for many families. Because Howard R Young holds both pretrial and sentenced individuals, someone's status and housing unit can change during their time there. Checking your JPay and Securus accounts for the current facility listing is useful if someone is moved elsewhere in the Delaware system.",
  ],

  address: "1301 East 12th Street, Wilmington, DE 19802",
  phone: "(302) 429-7700",
  website: "https://doc.delaware.gov/",
    visitingHours: "Visits are by appointment only, scheduled one week in advance by calling (302) 575-0330, Monday through Friday, 7:30 AM to 3:00 PM. One-hour visits run daily from 9:00 AM to 3:00 PM. Arrive 15 minutes early. Confirm the current schedule with the facility before traveling.",
  inmateCapacity: 1500,
  established: 1982,
  operatedBy: "Delaware Department of Correction",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Used for messaging, photo sharing, and money transfers to people held at Howard R Young." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Used for phone calls and video visitation at Howard R Young." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging through JPay. Messages are reviewed by Delaware DOC staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visitation through Securus. Schedule ahead where possible." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos through JPay, along with standard physical mail." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from someone at Howard R Young." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Send funds through JPay online, by phone, or with cash at a MoneyGram location." },
  },

  rules: [
    "JPay covers messaging, photos, and money. Securus covers phone calls and video visits.",
    "Delaware runs a single statewide correctional system, so Howard R Young holds both pretrial and sentenced individuals.",
    "All communication is subject to review and monitoring by Delaware DOC staff.",
    "Only people on the approved contact list can message, call, or visit.",
    "If someone transfers to another Delaware DOC facility, the same JPay and Securus accounts generally continue to work.",
  ],

  faq: [
    { question: "How do I contact someone at Howard R Young Correctional Institution?", answer: "Set up a JPay account for messaging, photos, and money, and a separate Securus account for phone calls and video visits. You'll need the person's full name and Delaware DOC identification number for both." },
    { question: "Is Howard R Young a jail or a state prison?", answer: "It functions as both. Delaware operates a single unified correctional system instead of separate county jails, so Howard R Young holds people awaiting trial as well as people serving state sentences." },
    { question: "Can I schedule a video visit at Howard R Young?", answer: "Yes, video visitation is available through Securus. Create an account, select the facility, and choose an open time slot. Booking a day or two ahead is recommended." },
    { question: "How do I find out where someone is held in the Delaware system?", answer: "The Delaware Department of Correction provides inmate and facility information on its website, doc.delaware.gov. You can also call the facility directly to confirm current placement." },
    { question: "How do I send money to someone at Howard R Young?", answer: "Use JPay online, through the app, by phone, or with cash at a participating MoneyGram location. Deposits are typically credited within one to two business days." },
      {
        question: "How do I schedule a visit at Howard R. Young Correctional Institution?",
        answer: "All visits are by appointment only. Schedule one week in advance by calling (302) 575-0330, Monday through Friday, 7:30 AM to 3:00 PM. Have the inmate's full name, date of birth, and SBI number ready, plus the name, address, birth date, and phone number of every visitor.",
      },
      {
        question: "What is an SBI number and why do I need it?",
        answer: "The SBI number is the Delaware State Bureau of Identification number assigned to a person in the Delaware system. You need it to search for the person, schedule visits, and send money.",
      },
      {
        question: "How do I find or search for an inmate at Howard R. Young Correctional Institution?",
        answer: "Use the Delaware Department of Correction Inmate Locator. Search by name or SBI number to confirm the person's location, since Delaware moves people between facilities.",
      },
      {
        question: "How do I post bail for someone at Howard R. Young Correctional Institution?",
        answer: "Bail is set by the Justice of the Peace Court. Families can post bail directly or through a licensed bail bondsman. Confirm the amount and the posting process with the court or the facility.",
      },
  ],

  relatedFacilitySlugs: ["baltimore-city-detention-center", "cheshire-correctional-institution", "attica-correctional-facility"],
},

"franklin-county-correctional-center": {
  id: "f-130",
  name: "Franklin County Correctional Center",
  slug: "franklin-county-correctional-center",
  type: "county",
  stateSlug: "ohio",
  stateName: "Ohio",
  stateAbbr: "OH",
  countySlug: null,
  countyName: "Franklin County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Franklin County Corrections: Phone Calls and Jail Messaging",
  seoDescription: "How to contact someone at Franklin County Correctional Center.",

  description:
    "Franklin County Correctional Center communication guide. Find GettingOut and Securus options for families reaching people held in Columbus, Ohio's county jail system.",

  overview: [
    "Franklin County Correctional Center is part of the jail system operated by the Franklin County Sheriff's Office in Columbus, Ohio. The Sheriff's Office runs more than one corrections building in the county, and people can be held at different sites depending on classification, gender, and how long they've been in custody. The system processes people arrested by the Columbus Division of Police, the Franklin County Sheriff's Office, and other local agencies.",
    "Communication with someone in Franklin County's jail system runs through two providers. GettingOut handles electronic messaging, photo sharing, and money deposits, with a free account at gettingout.com or through the GettingOut app. Securus handles phone calls and video visitation through a separate account at securustech.net. Since Franklin County operates more than one facility, confirm which specific building the person is in before assuming your account details are up to date.",
    "Columbus is centrally located in Ohio, making the county jail system reasonably accessible for families across the state, and public transit reaches much of the city. People held in the system are typically tied to Franklin County court proceedings. If someone is sentenced to a longer term in the Ohio state prison system, they will be transferred to an Ohio Department of Rehabilitation and Correction facility, which uses a different communication provider setup than the county jail.",
  ],

  address: "2460 Jackson Pike, Columbus, OH 43223",
  phone: "(614) 525-7100",
  website: "https://sheriff.franklincountyohio.gov/About-Us/Divisions/Corrections",
    rosterUrl: "https://sheriff.franklincountyohio.gov/services/inmate-information",
  operatedBy: "Franklin County Sheriff's Office",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money deposits for the Franklin County jail system." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for the Franklin County jail system." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut. Confirm the correct facility on your account, since Franklin County runs more than one site." },
    video: { status: "available", provider: "Securus", notes: "Video visitation available through Securus. Schedule ahead for the best availability." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photo sharing through GettingOut, along with standard physical mail." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from someone in the Franklin County jail system." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposits accepted through GettingOut online or by phone." },
  },

  rules: [
    "Franklin County operates more than one corrections facility. Confirm the exact building before mailing letters or sending money.",
    "GettingOut covers messaging, photos, and money. Securus covers phone calls and video visits.",
    "All communication is subject to review and monitoring by Sheriff's Office staff.",
    "Only people on the approved contact list can message, call, or visit.",
    "A transfer to an Ohio Department of Rehabilitation and Correction facility will change the communication providers you need to use.",
  ],

  faq: [
    { question: "How do I contact someone at Franklin County Correctional Center?", answer: "Set up a GettingOut account for messaging, photos, and money, and a separate Securus account for phone calls and video visits. Confirm which Franklin County facility the person is in first, since the Sheriff's Office runs more than one site." },
    { question: "How do I find out which Franklin County facility someone is being held in?", answer: "The Franklin County Sheriff's Office provides an inmate search on its website. Search by name to confirm the current facility before scheduling a visit or sending mail." },
    { question: "Can I do a video visit with someone in Franklin County's jail system?", answer: "Yes, video visitation is available through Securus. Create an account, select the correct facility, and choose an open time slot. Confirm current hours before booking." },
    { question: "What happens after someone is sentenced in Franklin County?", answer: "Shorter sentences may be served within the county system. Longer sentences typically lead to a transfer to an Ohio Department of Rehabilitation and Correction state prison, which uses different communication providers." },
    { question: "How do I send money to someone in the Franklin County jail system?", answer: "Use GettingOut online or by phone to make a deposit. Make sure you have the correct facility selected, since Franklin County operates multiple buildings." },
      {
        question: "How do I find or search for an inmate at Franklin County Correctional Center?",
        answer: "Use the Franklin County Sheriff's Office inmate information search at sheriff.franklincountyohio.gov/services/inmate-information. Search by name to confirm custody and location.",
      },
      {
        question: "How do I send mail to someone at Franklin County Correctional Center?",
        answer: "Address mail with the inmate's full name and booking number, care of Franklin County Correctional Center. Confirm the correct facility mailing address with the Sheriff's Office first, since Franklin County operates more than one corrections facility.",
      },
      {
        question: "Can I visit someone in person at Franklin County Correctional Center?",
        answer: "In-person visiting requires approval and scheduling. Confirm the current visiting schedule and requirements with the Franklin County Sheriff's Office before traveling, since procedures can change.",
      },
      {
        question: "How do I schedule a video visit at Franklin County Correctional Center?",
        answer: "Schedule video visits through your Securus account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
  ],

  relatedFacilitySlugs: ["louisville-metro-corrections", "philadelphia-department-of-prisons", "clark-county-detention-center"],
},

"essex-county-correctional-facility": {
  id: "f-131",
  name: "Essex County Correctional Facility",
  slug: "essex-county-correctional-facility",
  type: "county",
  stateSlug: "new-jersey",
  stateName: "New Jersey",
  stateAbbr: "NJ",
  countySlug: null,
  countyName: "Essex County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Essex County Jail NJ: Phone Calls, ViaPath and Messaging",
  seoDescription: "How to contact someone at Essex County Correctional Facility in Newark NJ. NJ transitioning from JPay to ViaPath. Phone rates cut to $0.034 per minute.",

  description:
    "Essex County Correctional Facility communication guide. Find GettingOut and Securus options for families reaching someone at New Jersey's largest county jail in Newark.",

  overview: [
    "Essex County Correctional Facility is the main county jail for Essex County, New Jersey, located in the Ironbound section of Newark near the Passaic River. It is operated by the Essex County Department of Corrections and holds people awaiting trial in Essex County courts, along with those serving shorter county sentences. Essex County is the most populous county in New Jersey, and the facility processes a large number of bookings from Newark and the county's other cities and towns, including East Orange, Irvington, and Bloomfield.",
    "Families reach people at Essex County Correctional Facility through two main providers. GettingOut handles electronic messaging, photo sharing, and money transfers for commissary funds. Create a free GettingOut account at gettingout.com or through the GettingOut mobile app to send messages and photos, which are reviewed before delivery. Securus handles phone calls and video visitation. Set up a Securus account to fund inmate calling or to schedule a remote video visit. The two accounts work independently, so families typically need both to cover every type of communication.",
    "Essex County Correctional Facility sits in an industrial part of Newark, reachable by car or by NJ Transit bus and rail lines into Newark Penn Station. Families across northern New Jersey, including Hudson, Union, and Passaic counties, are within a reasonable drive. Most people at the facility are in pretrial status, so their communication setup can change quickly if they are released, transferred, or sentenced. Anyone sentenced to state prison time is moved to a New Jersey Department of Corrections facility, where a different provider setup usually applies.",
  ],

  address: "354 Doremus Avenue, Newark, NJ 07105",
  phone: "(973) 274-7500",
  website: "https://essexcountynj.org/corrections/",
    visitingHours: "Professional visits Mon to Fri 9AM to 5PM via GettingOut, scheduled through Sgt. Dupree",
  operatedBy: "Essex County Department of Corrections",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and commissary money transfers for Essex County Correctional Facility." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Essex County Correctional Facility." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Send messages through the GettingOut app or website. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus. Book ahead of time." },
    photos: { status: "available", provider: "GettingOut", notes: "Photos can be attached to GettingOut messages, subject to content review." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls or set up prepaid calling." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut and Securus are the two providers used at Essex County Correctional Facility. Messaging, photos, and money go through GettingOut, while calls and video go through Securus.",
    "All messages, calls, and video visits are subject to monitoring and review by facility staff.",
    "Confirm the exact spelling of the person's name and booking number before creating an account, since mismatches can delay message delivery.",
    "People transferred to a New Jersey DOC state prison after sentencing will need to check the provider used at their new facility.",
    "Video visits typically need to be scheduled in advance rather than started on demand.",
  ],

  faq: [
    { question: "How do I send a message to someone at Essex County Correctional Facility?", answer: "Create a free account at gettingout.com or through the GettingOut app. Search for the person by name, add funds if you want to include photos, and send your message. Staff review messages before they're delivered, so allow some time." },
    { question: "How do I set up a video visit at Essex County Correctional Facility?", answer: "Video visits are handled through Securus. Create an account, search for Essex County Correctional Facility, and choose an open time slot. Visits usually need to be booked at least a day in advance." },
    { question: "How do I send money to someone at Essex County Correctional Facility?", answer: "Commissary deposits go through GettingOut. You can add funds by debit or credit card through the app or website. Processing typically takes one business day." },
    { question: "Can I find out if someone is currently held at Essex County Correctional Facility?", answer: "Essex County offers an online inmate locator through its Department of Corrections page. You can search by name to confirm current custody status." },
    { question: "What happens to communication access after someone is sentenced?", answer: "People sentenced to state prison time are transferred out of Essex County Correctional Facility to a New Jersey Department of Corrections facility. The provider setup at the new facility may be different, so check as soon as a transfer happens." },
      {
        question: "How do I find or search for an inmate at Essex County Correctional Facility?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Essex County, New Jersey. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Essex County Correctional Facility?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "What are the visiting hours at Essex County Correctional Facility?",
        answer: "Professional visits Mon to Fri 9AM to 5PM via GettingOut, scheduled through Sgt. Dupree",
      },
      {
        question: "Can I receive incoming calls from an inmate at Essex County Correctional Facility?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Essex County Correctional Facility?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["baltimore-city-detention-center", "suffolk-county-house-of-correction", "clark-county-detention-center"],
},

"state-correctional-institution-phoenix": {
  id: "f-132",
  name: "State Correctional Institution Phoenix",
  slug: "state-correctional-institution-phoenix",
  type: "state",
  stateSlug: "pennsylvania",
  stateName: "Pennsylvania",
  stateAbbr: "PA",
  countySlug: null,
  countyName: "Montgomery County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "SCI Phoenix PA: Securus Phone, ViaPath Messaging and Money",
  seoDescription: "How to contact someone at SCI Phoenix in Collegeville PA. Securus handles phone calls. ViaPath ConnectNetwork for messaging. DC number required.",

  description:
    "State Correctional Institution Phoenix communication guide. Find Securus phone, ViaPath messaging, JPay money, and Smart mail options for families reaching someone at Pennsylvania's maximum-security prison in Collegeville.",

  overview: [
    "State Correctional Institution Phoenix is a maximum-security prison operated by the Pennsylvania Department of Corrections in Collegeville, Montgomery County, about 30 miles northwest of Philadelphia. SCI Phoenix opened in 2018 to replace the aging SCI Graterford, which sat on the same property, and it now holds one of the largest populations in the Pennsylvania state prison system. The facility houses men serving longer state sentences, including many who need higher levels of security than a county jail can provide.",
    "Pennsylvania's state prison system, including SCI Phoenix, uses four separate systems: Securus for phone calls, ViaPath/ConnectNetwork for email, JPay for money transfers, and Smart Communications for mail. Email runs through ConnectNetwork at web.connectnetwork.com; all emails are reviewed. JPay processes money transfers only. Mail goes to Smart Communications in St. Petersburg, Florida, where it is scanned and printed for delivery. Video visits are free through the DOC's own Inmate Visitation System (IVS) at inmatevisitation.cor.pa.gov, scheduled at least 2 days in advance.",
    "Collegeville sits within driving distance of Philadelphia, Allentown, and much of southeastern Pennsylvania, which makes in-person visits realistic for many families in the region. For those farther away, Securus calls, free IVS video visits, ViaPath email, and JPay money services are usually the most practical way to stay in touch. Because SCI Phoenix is a maximum-security facility, expect stricter screening on mail and messages than at a county jail, and build in extra time for a new contact or message to be approved.",
  ],

  address: "1200 Mokychic Drive, Collegeville, PA 19426",
  phone: "(610) 409-7890",
  website: "https://www.pa.gov/agencies/cor/state-prisons/sci-phoenix",
  inmateCapacity: 3830,
  established: 2018,
  operatedBy: "Pennsylvania Department of Corrections",

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
        notes: "Phone calls for PA DOC state prisons. Fund a Securus account to receive inmate-initiated calls.",
      },
      {
        name: "ViaPath",
        slug: "gtl",
        initial: "V",
        color: "bg-teal-600",
        messaging: true,
        video: false,
        photos: false,
        phone: false,
        moneyTransfer: false,
        notes: "Email for PA DOC state prisons via ConnectNetwork at web.connectnetwork.com.",
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
        notes: "Money transfers for PA DOC state prisons. JPay processes all credit card and money order payments.",
      },
      {
        name: "Smart Communications",
        slug: "smart-communications",
        initial: "S",
        color: "bg-cyan-600",
        messaging: false,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: false,
        notes: "Mail scanning for PA DOC state prisons. Photos up to 25 per mailing.",
      },
    ],

  communication: {
      messaging: { status: "available", provider: "ViaPath (ConnectNetwork)", notes: "Email through ConnectNetwork at web.connectnetwork.com. All emails are reviewed." },
      video: { status: "available", provider: "PA DOC Inmate Visitation System (IVS)", notes: "Video visits are free. Schedule at least 2 days in advance at inmatevisitation.cor.pa.gov." },
      photos: { status: "available", provider: "Smart Communications (mail)", notes: "Up to 25 photos per mailing; no obscenity, explicit content, or nudity; originals destroyed after 45 days." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls. Fund a Securus account to receive calls; 800-844-6591." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "JPay processes all payments: website, phone 800-574-5729, money order to JPay, lobby kiosks. Money orders not accepted at SCIs." },
    },

  rules: [
    "Four separate systems: Securus for phone, ViaPath for email, JPay for money, Smart Communications for mail. Setting up the wrong one is the most common mistake.",
    "All messages, calls, and video visits are subject to monitoring and review by DOC staff.",
    "As a maximum-security facility, new contacts and message content may take longer to clear review than at a lower-security prison.",
    "Securus, ViaPath, JPay, and Smart are statewide PA DOC systems, so the same accounts generally continue to work after a transfer to another state facility.",
    "Video visits through the free IVS typically require scheduling at least 2 days in advance.",
  ],

  faq: [
    { question: "How do I send a message to someone at SCI Phoenix?", answer: "Email runs through ViaPath/ConnectNetwork at web.connectnetwork.com. Set up a ViaPath Friends and Family account (1-877-650-4249) to send email to someone at SCI Phoenix. All emails are reviewed by DOC staff before delivery. The DOC is not responsible for ViaPath accounts or troubleshooting." },
    { question: "How do I set up a video visit at SCI Phoenix?", answer: "Video visits are free through the DOC's Inmate Visitation System (IVS) at inmatevisitation.cor.pa.gov. Create an IVS account, get on the inmate's authorized visitor list, and schedule at least 2 days in advance. Up to 6 video visits per month including 1 weekend, with up to 6 visitors. You will need a device with a camera and a stable internet connection." },
    { question: "How do I send money to someone at SCI Phoenix?", answer: "JPay processes all payments for PA DOC. Send money through the JPay website, by phone at 800-574-5729, by money order to JPay, or at lobby kiosks at each state prison. Money orders are not accepted at SCIs. A deposit slip with the inmate ID, inmate name, and sender name and address is required. Credit card limit is $300 per card every 72 hours; money order limit is $999.99 each." },
    { question: "How do I find out where someone is housed in the Pennsylvania prison system?", answer: "The Pennsylvania Department of Corrections offers an inmate locator on its website at pa.gov/agencies/cor. Search by name or DOC number to confirm current facility placement." },
    { question: "Do the same accounts work if someone transfers to a different Pennsylvania prison?", answer: "Yes. Securus, ViaPath, JPay, and Smart are statewide PA DOC systems, so the same accounts generally continue to work after a transfer to another state facility. Confirm the new facility name in your account before sending funds or messages." },
    {
      question: "How do I send mail to someone at SCI Phoenix?",
      answer: "Send mail to Smart Communications, which scans mail and the mailroom prints it for delivery. Address it: Inmate Name and Inmate Number, SCI Phoenix, PO Box 33028, St. Petersburg, FL 33733. Include a full return address with your first and last name, and the inmate's full correct name and number. Use 8.5 by 11 paper; do not send bound material or anything opened like a book. Photos: up to 25 per mailing, no obscenity, explicit content, or nudity; originals are destroyed after 45 days."
    },
  ],

  relatedGuideSlugs: ["how-securus-works", "how-connectnetwork-works", "how-video-visitation-works"],
  relatedFacilitySlugs: ["state-correctional-institution-dallas", "attica-correctional-facility", "montana-state-prison"],
},

"state-correctional-institution-dallas": {
  id: "f-133",
  name: "State Correctional Institution Dallas",
  slug: "state-correctional-institution-dallas",
  type: "state",
  stateSlug: "pennsylvania",
  stateName: "Pennsylvania",
  stateAbbr: "PA",
  countySlug: null,
  countyName: "Luzerne County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "SCI Dallas PA: Securus Phone, ViaPath Messaging and Money",
  seoDescription: "How to contact someone at SCI Dallas in Dallas PA. Securus handles phone calls. ViaPath ConnectNetwork for messaging. DC number required.",

  description:
    "State Correctional Institution Dallas communication guide. Find Securus phone, ViaPath messaging, JPay money, and Smart mail options for families reaching someone at this Pennsylvania state prison in Luzerne County.",

  overview: [
    "State Correctional Institution Dallas is a state prison operated by the Pennsylvania Department of Corrections in Dallas, Luzerne County, in the northeastern part of the state near Wilkes-Barre. SCI Dallas houses men serving state sentences and has operated for decades as one of the larger institutions in the Pennsylvania DOC system. The campus also includes a minimum-security unit, so families should confirm the exact housing unit when reaching out to someone there.",
    "Like other Pennsylvania state prisons, SCI Dallas uses four separate systems: Securus for phone calls, ViaPath/ConnectNetwork for email, JPay for money transfers, and Smart Communications for mail. Email runs through ConnectNetwork at web.connectnetwork.com; all emails are reviewed. JPay processes money transfers only. Mail goes to Smart Communications in St. Petersburg, Florida, where it is scanned and printed for delivery. Video visits are free through the DOC's own Inmate Visitation System (IVS) at inmatevisitation.cor.pa.gov, scheduled at least 2 days in advance.",
    "Wilkes-Barre and the surrounding Luzerne County area are reachable from most of northeastern Pennsylvania and parts of New York and New Jersey within a few hours' drive, which keeps in-person visits realistic for many families. For those farther away, Securus calls, free IVS video visits, ViaPath email, and JPay money services are the more practical option day to day. Keep contact information updated with the facility, since approval for new visitors or contacts can take time to process.",
  ],

  address: "1000 Follies Road, Dallas, PA 18612",
  phone: "(570) 675-1101",
  website: "https://www.pa.gov/agencies/cor/state-prisons/sci-dallas",
  operatedBy: "Pennsylvania Department of Corrections",

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
        notes: "Phone calls for PA DOC state prisons. Fund a Securus account to receive inmate-initiated calls.",
      },
      {
        name: "ViaPath",
        slug: "gtl",
        initial: "V",
        color: "bg-teal-600",
        messaging: true,
        video: false,
        photos: false,
        phone: false,
        moneyTransfer: false,
        notes: "Email for PA DOC state prisons via ConnectNetwork at web.connectnetwork.com.",
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
        notes: "Money transfers for PA DOC state prisons. JPay processes all credit card and money order payments.",
      },
      {
        name: "Smart Communications",
        slug: "smart-communications",
        initial: "S",
        color: "bg-cyan-600",
        messaging: false,
        video: false,
        photos: true,
        phone: false,
        moneyTransfer: false,
        notes: "Mail scanning for PA DOC state prisons. Photos up to 25 per mailing.",
      },
    ],

  communication: {
      messaging: { status: "available", provider: "ViaPath (ConnectNetwork)", notes: "Email through ConnectNetwork at web.connectnetwork.com. All emails are reviewed." },
      video: { status: "available", provider: "PA DOC Inmate Visitation System (IVS)", notes: "Video visits are free. Schedule at least 2 days in advance at inmatevisitation.cor.pa.gov." },
      photos: { status: "available", provider: "Smart Communications (mail)", notes: "Up to 25 photos per mailing; no obscenity, explicit content, or nudity; originals destroyed after 45 days." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls. Fund a Securus account to receive calls; 800-844-6591." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "JPay processes all payments: website, phone 800-574-5729, money order to JPay, lobby kiosks. Money orders not accepted at SCIs." },
    },

  rules: [
    "Four separate systems: Securus for phone, ViaPath for email, JPay for money, Smart Communications for mail. Setting up the wrong one is the most common mistake.",
    "All messages, calls, and video visits are subject to monitoring and review by DOC staff.",
    "SCI Dallas includes more than one housing unit on its campus, so confirm the exact unit when setting up contact.",
    "Securus, ViaPath, JPay, and Smart are statewide PA DOC systems, so the same accounts generally continue to work after a transfer to another state facility.",
    "Video visits through the free IVS typically require scheduling at least 2 days in advance.",
  ],

  faq: [
    { question: "How do I send a message to someone at SCI Dallas?", answer: "Email runs through ViaPath/ConnectNetwork at web.connectnetwork.com. Set up a ViaPath Friends and Family account (1-877-650-4249) to send email to someone at SCI Dallas. All emails are reviewed by DOC staff before delivery. The DOC is not responsible for ViaPath accounts or troubleshooting." },
    { question: "How do I set up a video visit at SCI Dallas?", answer: "Video visits are free through the DOC's Inmate Visitation System (IVS) at inmatevisitation.cor.pa.gov. Create an IVS account, get on the inmate's authorized visitor list, and schedule at least 2 days in advance. Up to 6 video visits per month including 1 weekend, with up to 6 visitors. You will need a device with a camera and a stable internet connection." },
    { question: "How do I send money to someone at SCI Dallas?", answer: "JPay processes all payments for PA DOC. Send money through the JPay website, by phone at 800-574-5729, by money order to JPay, or at lobby kiosks at each state prison. Money orders are not accepted at SCIs. A deposit slip with the inmate ID, inmate name, and sender name and address is required. Credit card limit is $300 per card every 72 hours; money order limit is $999.99 each." },
    { question: "How do I find out where someone is housed in the Pennsylvania prison system?", answer: "The Pennsylvania Department of Corrections offers an inmate locator on its website at pa.gov/agencies/cor. Search by name or DOC number to confirm current facility placement." },
    { question: "Do the same accounts work if someone transfers to a different Pennsylvania prison?", answer: "Yes. Securus, ViaPath, JPay, and Smart are statewide PA DOC systems, so the same accounts generally continue to work after a transfer to another state facility. Confirm the new facility name in your account before sending funds or messages." },
      {
        question: "How do I find or search for an inmate at SCI Dallas?",
        answer: "Use the Pennsylvania Department of Corrections inmate and parolee locator on the PA DOC website. Search by name to confirm the facility before mailing or visiting, since Pennsylvania moves people between facilities.",
      },
      {
        question: "How do I send mail to someone at SCI Dallas?",
        answer: "Send mail to Smart Communications, which scans mail and the mailroom prints it for delivery. Address it: Inmate Name and Inmate Number, SCI Dallas, PO Box 33028, St. Petersburg, FL 33733. Include a full return address with your first and last name, and the inmate's full correct name and number. Use 8.5 by 11 paper; do not send bound material or anything opened like a book. Photos: up to 25 per mailing, no obscenity, explicit content, or nudity; originals are destroyed after 45 days.",
      },
      {
        question: "How do I schedule an in-person visit at SCI Dallas?",
        answer: "Pennsylvania DOC visits are scheduled at least 2 days in advance through the DOC Inmate Visitation System (IVS) at inmatevisitation.cor.pa.gov, and visitors must be on the inmate's approved visitor list. In-person visits: up to 4 per month including 1 weekend. Confirm the current schedule for the correct housing unit with the facility before traveling.",
      },
  ],

  relatedGuideSlugs: ["how-securus-works", "how-connectnetwork-works", "how-video-visitation-works"],
  relatedFacilitySlugs: ["sci-phoenix", "attica-correctional-facility", "fci-danbury"],
},

"tecumseh-state-correctional-institution": {
  id: "f-134",
  name: "Tecumseh State Correctional Institution",
  slug: "tecumseh-state-correctional-institution",
  type: "state",
  stateSlug: "nebraska",
  stateName: "Nebraska",
  stateAbbr: "NE",
  countySlug: null,
  countyName: "Johnson County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Tecumseh State Correctional: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Tecumseh State Correctional Institution in Nebraska.",

  description:
    "Tecumseh State Correctional Institution communication guide. Find JPay and Securus options for families reaching someone at Nebraska's largest state prison.",

  overview: [
    "Tecumseh State Correctional Institution is a maximum and medium security prison operated by the Nebraska Department of Correctional Services, located just outside the town of Tecumseh in southeastern Nebraska. It opened in 2001 and is one of the largest facilities in the Nebraska state prison system, housing men in general population as well as those in restrictive housing and specialized mental health units. Tecumseh is roughly an hour south of Lincoln and about 90 minutes from Omaha.",
    "Nebraska's state prison system, including Tecumseh, uses JPay for messaging, photo sharing, and money transfers, and Securus for phone calls and video visitation. Families create a JPay account at jpay.com or through the JPay app to send electronic messages and photos, which are reviewed before delivery, and to add funds to a commissary account. Phone calls and video visits go through a separate Securus account, which needs its own funds.",
    "Because Tecumseh sits in a rural part of southeastern Nebraska, in-person visits require more travel time for families based in Omaha, Lincoln, or out of state. JPay messaging and Securus calls and video visits tend to be the most consistent way to stay in touch day to day. As a facility that houses individuals with higher security classifications, expect careful screening of mail, messages, and new contacts, and plan for some delay when adding someone new to an approved list.",
  ],

  address: "2725 NE-50, Tecumseh, NE 68450",
  phone: "(402) 335-5998",
  website: "https://corrections.nebraska.gov/facilities/tecumseh-state-correctional-institution",
    mailingAddress: "INMATE NAME and ID NUMBER, Tecumseh State Correctional Institution, 2725 NE-50, TECUMSEH, NE 68450",
    visitingHours: "Visiting varies by housing unit. The facility publishes a unit-by-unit schedule (HU1, HU2, HU3, SMU, ISDP) through the Nebraska Department of Correctional Services. Confirm the schedule for the correct housing unit with the facility before traveling.",
  inmateCapacity: 960,
  established: 2001,
  operatedBy: "Nebraska Department of Correctional Services",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Tecumseh State Correctional Institution." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Tecumseh State Correctional Institution." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Send JPay Mail through jpay.com or the JPay app. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus in advance." },
    photos: { status: "available", provider: "JPay", notes: "Attach photos to JPay messages. Content is screened before delivery." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls from Tecumseh." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Add commissary funds through JPay by debit or credit card." },
  },

  rules: [
    "JPay and Securus are the two providers used across the Nebraska Department of Correctional Services, including Tecumseh.",
    "All messages, calls, and video visits are subject to monitoring and review by NDCS staff.",
    "Tecumseh houses individuals with higher security classifications, so screening of mail and new contacts can take extra time.",
    "One JPay account covers messaging, photos, and money for anyone in Nebraska DOC custody, even after a transfer to another state facility.",
    "Video visits through Securus typically require scheduling in advance.",
  ],

  faq: [
    { question: "How do I send a message to someone at Tecumseh State Correctional Institution?", answer: "Create a JPay account at jpay.com or through the JPay app, search for the person using their name and Nebraska DOC number, and send a JPay Mail message. Messages are reviewed before delivery." },
    { question: "How do I set up a video visit at Tecumseh?", answer: "Video visits are handled through Securus. Create an account, search for Tecumseh State Correctional Institution, and book an available time slot in advance. You'll need a device with a camera and a stable internet connection." },
    { question: "How do I send money to someone at Tecumseh?", answer: "Add funds through JPay at jpay.com or the JPay app using a debit or credit card. The deposit is applied to the person's commissary account." },
    { question: "How do I find out where someone is housed in the Nebraska prison system?", answer: "The Nebraska Department of Correctional Services offers an inmate locator on its website at corrections.nebraska.gov. Search by name to confirm current facility placement." },
    { question: "Does the same JPay account work if someone transfers to a different Nebraska prison?", answer: "Yes. JPay and Securus are used across the Nebraska DOC system, so the same accounts generally continue to work after a transfer to another state facility. Confirm the new facility name in your account before sending funds or messages." },
      {
        question: "What are the visiting hours at Tecumseh State Correctional Institution?",
        answer: "Visiting varies by housing unit, and the facility publishes a unit-by-unit schedule covering HU1, HU2, HU3, SMU, and ISDP. All visitors must be on the inmate's approved visitor list. Confirm the schedule for the correct housing unit with the facility before traveling.",
      },
      {
        question: "How do I send mail to someone at Tecumseh State Correctional Institution?",
        answer: "Address mail as follows: INMATE NAME and ID NUMBER, Tecumseh State Correctional Institution, 2725 NE-50, TECUMSEH, NE 68450. Include the inmate's full name and ID number on every envelope.",
      },
      {
        question: "How do I find or search for an inmate at Tecumseh State Correctional Institution?",
        answer: "Use the Nebraska Department of Correctional Services inmate search on the NDCS website. Search by name to confirm the facility before mailing or visiting, since Nebraska moves people between facilities.",
      },
      {
        question: "How do I schedule a video visit at Tecumseh State Correctional Institution?",
        answer: "Schedule video visits through your Securus account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
  ],

  relatedFacilitySlugs: ["anamosa-state-penitentiary", "montana-state-prison", "san-quentin-state-prison"],
},

"douglas-county-department-of-corrections": {
  id: "f-135",
  name: "Douglas County Department of Corrections",
  slug: "douglas-county-department-of-corrections",
  type: "county",
  stateSlug: "nebraska",
  stateName: "Nebraska",
  stateAbbr: "NE",
  countySlug: null,
  countyName: "Douglas County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Douglas County Corrections: Phone Calls and Jail Messaging",
  seoDescription: "How to contact someone at Douglas County Department of Corrections in Omaha NE.",

  description:
    "Douglas County Department of Corrections communication guide. Find GettingOut and Securus options for families reaching someone at Omaha's main county jail.",

  overview: [
    "Douglas County Department of Corrections is the main county jail for Douglas County, Nebraska, located in downtown Omaha. It holds people awaiting trial in Douglas County courts as well as those serving shorter county sentences, and it was the first jail in Nebraska to earn national accreditation for its operations. Omaha is Nebraska's largest city, and the facility processes a steady flow of bookings from the Omaha Police Department and other Douglas County law enforcement agencies.",
    "Communication at Douglas County Department of Corrections runs through two main providers. GettingOut handles electronic messaging, photo sharing, and commissary money transfers, and families can sign up for free at gettingout.com or through the GettingOut app. Securus handles phone calls and video visitation through its own separate account, which families fund on their own. Most people need both accounts to cover the full range of communication options.",
    "The facility sits in downtown Omaha, close to public transit and reachable from most of the metro area within a short drive. Families from Lincoln, Council Bluffs, and other nearby communities can typically reach the facility for in-person visits, though it's worth checking current visitation rules ahead of time. Most people held here are in pretrial status, so if someone is sentenced to state prison time, they will transfer to a Nebraska Department of Correctional Services facility, where a different provider may apply.",
  ],

  address: "710 South 17th Street, Omaha, NE 68102",
  phone: "(402) 444-7400",
  website: "https://corrections.dccorr.com",
  operatedBy: "Douglas County, Nebraska",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and commissary money transfers for Douglas County Department of Corrections." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Douglas County Department of Corrections." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Send messages through the GettingOut app or website. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus. Book ahead of time." },
    photos: { status: "available", provider: "GettingOut", notes: "Photos can be attached to GettingOut messages, subject to content review." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls or set up prepaid calling." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut and Securus are the two providers used at Douglas County Department of Corrections. Messaging, photos, and money go through GettingOut, while calls and video go through Securus.",
    "All messages, calls, and video visits are subject to monitoring and review by facility staff.",
    "Confirm the exact spelling of the person's name and booking number before creating an account, since mismatches can delay message delivery.",
    "People transferred to a Nebraska DOC state facility after sentencing will need to check the provider used at their new facility.",
    "Video visits typically need to be scheduled in advance rather than started on demand.",
  ],

  faq: [
    { question: "How do I send a message to someone at Douglas County Department of Corrections?", answer: "Create a free account at gettingout.com or through the GettingOut app. Search for the person by name, add funds if you want to include photos, and send your message. Staff review messages before they're delivered, so allow some time." },
    { question: "How do I set up a video visit at Douglas County Department of Corrections?", answer: "Video visits are handled through Securus. Create an account, search for Douglas County Department of Corrections, and choose an open time slot. Visits usually need to be booked at least a day in advance." },
    { question: "How do I send money to someone at Douglas County Department of Corrections?", answer: "Commissary deposits go through GettingOut. You can add funds by debit or credit card through the app or website. Processing typically takes one business day." },
    { question: "Can I find out if someone is currently held at Douglas County Department of Corrections?", answer: "Douglas County Corrections offers an online inmate search through its official website, dccorr.com. You can search by name to confirm current custody status." },
    { question: "What happens to communication access after someone is sentenced?", answer: "People sentenced to state prison time are transferred out of the county jail to a Nebraska Department of Correctional Services facility. The provider setup at the new facility may be different, so check as soon as a transfer happens." },
      {
        question: "How do I find or search for an inmate at Douglas County Department of Corrections?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Douglas County, Nebraska. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Douglas County Department of Corrections?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Douglas County Department of Corrections?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Douglas County Department of Corrections?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Douglas County Department of Corrections?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["polk-county-jail", "baltimore-city-detention-center", "clark-county-detention-center"],
},

"polk-county-jail": {
  id: "f-136",
  name: "Polk County Jail",
  slug: "polk-county-jail",
  type: "county",
  stateSlug: "iowa",
  stateName: "Iowa",
  stateAbbr: "IA",
  countySlug: null,
  countyName: "Polk County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Polk County Jail: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Polk County Jail in Des Moines IA.",

  description:
    "Polk County Jail communication guide. Find GettingOut and Securus options for families reaching someone at Iowa's largest county jail in Des Moines.",

  overview: [
    "Polk County Jail is the main county detention facility for Polk County, Iowa, operated by the Polk County Sheriff's Office in Des Moines. It is the largest county jail in Iowa and holds people awaiting trial in Polk County courts along with those serving shorter county sentences. Des Moines is Iowa's capital and largest city, and the jail processes bookings from multiple law enforcement agencies across the metro area.",
    "Families reach people at Polk County Jail through GettingOut and Securus. GettingOut covers electronic messaging, photo sharing, and commissary money transfers, and it's free to create an account at gettingout.com or through the GettingOut app. Securus covers phone calls and video visitation through a separate account that families fund directly. Both accounts are typically needed to access the full set of communication options.",
    "Polk County Jail sits in the Des Moines metro area, which makes it reachable for most families across central Iowa within a reasonable drive. For those farther away, GettingOut messaging and Securus phone or video access tend to be the more practical day-to-day option. Because most people here are in pretrial status, communication needs can change quickly. Anyone sentenced to Iowa prison time will transfer to an Iowa Department of Corrections facility, where the provider setup is usually different.",
  ],

  address: "1985 NE 51st Place, Des Moines, IA 50313",
  phone: "(515) 323-5400",
  website: "https://www.polkcountyiowa.gov/county-sheriff/divisions/detention/",
  operatedBy: "Polk County Sheriff's Office",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and commissary money transfers for Polk County Jail." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Polk County Jail." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Send messages through the GettingOut app or website. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus. Book ahead of time." },
    photos: { status: "available", provider: "GettingOut", notes: "Photos can be attached to GettingOut messages, subject to content review." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls or set up prepaid calling." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut and Securus are the two providers used at Polk County Jail. Messaging, photos, and money go through GettingOut, while calls and video go through Securus.",
    "All messages, calls, and video visits are subject to monitoring and review by facility staff.",
    "Confirm the exact spelling of the person's name and booking number before creating an account, since mismatches can delay message delivery.",
    "People transferred to an Iowa DOC state facility after sentencing will need to check the provider used at their new facility.",
    "Video visits typically need to be scheduled in advance rather than started on demand.",
  ],

  faq: [
    { question: "How do I send a message to someone at Polk County Jail?", answer: "Create a free account at gettingout.com or through the GettingOut app. Search for the person by name, add funds if you want to include photos, and send your message. Staff review messages before they're delivered, so allow some time." },
    { question: "How do I set up a video visit at Polk County Jail?", answer: "Video visits are handled through Securus. Create an account, search for Polk County Jail, and choose an open time slot. Visits usually need to be booked at least a day in advance." },
    { question: "How do I send money to someone at Polk County Jail?", answer: "Commissary deposits go through GettingOut. You can add funds by debit or credit card through the app or website. Processing typically takes one business day." },
    { question: "Can I find out if someone is currently held at Polk County Jail?", answer: "The Polk County Sheriff's Office offers an online inmate search on its official website. You can search by name to confirm current custody status." },
    { question: "What happens to communication access after someone is sentenced?", answer: "People sentenced to state prison time are transferred out of Polk County Jail to an Iowa Department of Corrections facility. The provider setup at the new facility may be different, so check as soon as a transfer happens." },
      {
        question: "How do I find or search for an inmate at Polk County Jail?",
        answer: "Use the Polk County Sheriff's Office inmate search, or call the jail at (515) 323-5400. Have the person's full name ready when you search or call.",
      },
      {
        question: "How do I send mail to someone at Polk County Jail?",
        answer: "Address mail with the person's full name, care of Polk County Jail, 1985 NE 51st Place, Des Moines, IA 50313. Include the full name so mail reaches the right person.",
      },
      {
        question: "How do I post bail for someone at Polk County Jail?",
        answer: "Bail can be posted at the jail lobby. Bring a valid photo ID and ask the reception deputy for the current bail process. Confirm the bail amount with the jail before posting.",
      },
      {
        question: "How do I schedule a video visit at Polk County Jail?",
        answer: "Schedule video visits through your Securus account. You must be on the inmate's approved visitor list. Book in advance, since same-day visits are generally not available.",
      },
  ],

  relatedFacilitySlugs: ["douglas-county-department-of-corrections", "suffolk-county-house-of-correction", "oahu-community-correctional-center"],
},

"anamosa-state-penitentiary": {
  id: "f-137",
  name: "Anamosa State Penitentiary",
  slug: "anamosa-state-penitentiary",
  type: "state",
  stateSlug: "iowa",
  stateName: "Iowa",
  stateAbbr: "IA",
  countySlug: null,
  countyName: "Jones County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Anamosa State Penitentiary: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Anamosa State Penitentiary in Iowa.",

  description:
    "Anamosa State Penitentiary communication guide. Find JPay and Securus options for families reaching someone at this Iowa state prison in Jones County.",

  overview: [
    "Anamosa State Penitentiary is a medium-security state prison operated by the Iowa Department of Corrections in Anamosa, Jones County, in eastern Iowa. It is one of the older institutions in the Iowa prison system, recognizable for its castle-like limestone architecture, and it houses men serving state sentences. Anamosa is about 25 miles from Cedar Rapids and roughly an hour from the Quad Cities area.",
    "Iowa's state prison system, including Anamosa State Penitentiary, uses JPay for messaging, photo sharing, and money transfers, and Securus for phone calls and video visitation. A JPay account at jpay.com or through the JPay app lets families send electronic messages and photos, which are reviewed before delivery, and add funds to a commissary account. Phone calls and video visits are handled through a separate Securus account.",
    "Anamosa's location in eastern Iowa keeps it within reach of Cedar Rapids, Dubuque, and the Quad Cities for families who want to visit in person. For those farther away, JPay messaging and Securus calls or video visits are usually the more consistent way to stay connected. Build in some extra time when adding a new contact or sending a first message, since mail and messages go through a review process before they reach someone inside.",
  ],

  address: "406 North High Street, Anamosa, IA 52205",
  phone: "(319) 462-3504",
  website: "https://doc.iowa.gov/districts-prisons/anamosa-state-penitentiary",
    visitingHours: "In-person visiting Saturday and Sunday, 8:30 AM to 5:30 PM, by reservation in the Ameelio app. Video visiting Monday and Friday, 8:30 AM to 5:30 PM, in 50-minute blocks through the Ameelio app. Confirm the current schedule with the facility before traveling.",
    rosterUrl: "https://doc-search.iowa.gov/offender/search",
  operatedBy: "Iowa Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Anamosa State Penitentiary." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Anamosa State Penitentiary." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Send JPay Mail through jpay.com or the JPay app. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus in advance." },
    photos: { status: "available", provider: "JPay", notes: "Attach photos to JPay messages. Content is screened before delivery." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls from Anamosa." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Add commissary funds through JPay by debit or credit card." },
  },

  rules: [
    "JPay and Securus are the two providers used across the Iowa Department of Corrections, including Anamosa State Penitentiary.",
    "All messages, calls, and video visits are subject to monitoring and review by DOC staff.",
    "New contacts and first-time messages may take extra time to clear review before delivery.",
    "One JPay account covers messaging, photos, and money for anyone in Iowa DOC custody, even after a transfer to another state facility.",
    "Video visits through Securus typically require scheduling in advance.",
  ],

  faq: [
    { question: "How do I send a message to someone at Anamosa State Penitentiary?", answer: "Create a JPay account at jpay.com or through the JPay app, search for the person using their name and Iowa DOC number, and send a JPay Mail message. Messages are reviewed before delivery." },
    { question: "How do I set up a video visit at Anamosa?", answer: "Video visits are handled through Securus. Create an account, search for Anamosa State Penitentiary, and book an available time slot in advance. You'll need a device with a camera and a stable internet connection." },
    { question: "How do I send money to someone at Anamosa State Penitentiary?", answer: "Add funds through JPay at jpay.com or the JPay app using a debit or credit card. The deposit is applied to the person's commissary account." },
    { question: "How do I find out where someone is housed in the Iowa prison system?", answer: "The Iowa Department of Corrections offers an inmate locator on its website at doc.iowa.gov. Search by name to confirm current facility placement." },
    { question: "Does the same JPay account work if someone transfers to a different Iowa prison?", answer: "Yes. JPay and Securus are used across the Iowa DOC system, so the same accounts generally continue to work after a transfer to another state facility. Confirm the new facility name in your account before sending funds or messages." },
      {
        question: "How do I schedule a visit at Anamosa State Penitentiary?",
        answer: "All visits, in-person and video, are scheduled through the Ameelio app. In-person visits run Saturday and Sunday, 8:30 AM to 5:30 PM, by reservation. Video visits run Monday and Friday, 8:30 AM to 5:30 PM, in 50-minute blocks.",
      },
      {
        question: "How do I find or search for an inmate at Anamosa State Penitentiary?",
        answer: "Use the Iowa Department of Corrections offender search at doc-search.iowa.gov/offender/search. Search by name, date of birth, or offender number. Confirm the facility before mailing or visiting.",
      },
      {
        question: "How do I send mail to someone at Anamosa State Penitentiary?",
        answer: "Address mail with the person's full name and ID number, care of Anamosa State Penitentiary, 406 North High Street, Anamosa, IA 52205. Include the ID number so mail reaches the right person.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Anamosa State Penitentiary?",
        answer: "No. Inmates can make outgoing calls to approved numbers, but they cannot receive incoming calls. Set up an account with the facility's phone provider and add funds so you can accept calls.",
      },
  ],

  relatedFacilitySlugs: ["tecumseh-state-correctional-institution", "montana-state-prison", "attica-correctional-facility"],
},

"theo-lacy-facility": {
  id: "f-138",
  name: "Theo Lacy Facility",
  slug: "theo-lacy-facility",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Orange County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Theo Lacy Facility: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Theo Lacy Facility in Orange CA. GTL ConnectNetwork handles phone calls. Orange County jail communication.",

  description:
    "Theo Lacy Facility communication guide. Find GettingOut and Securus options for families reaching someone at this Orange County, California jail.",

  overview: [
    "Theo Lacy Facility is one of the main jails operated by the Orange County Sheriff's Department, located in the city of Orange, California, between the Santa Ana and Garden Grove freeways. Named for a former Orange County sheriff, it opened in 1960 and has grown into one of the largest facilities in the Orange County jail system. It holds men awaiting trial along with those serving shorter sentences, and it houses one of the county's larger inmate populations.",
    "Families reach people at Theo Lacy through GettingOut and Securus. GettingOut handles electronic messaging, photo sharing, and commissary money transfers, and creating an account at gettingout.com or through the GettingOut app is free. Securus handles phone calls and video visitation through its own separate account, which families fund on their own. Both accounts are generally needed to cover the full range of services.",
    "The facility sits in central Orange County, close to major freeways, which makes it reachable for families across Los Angeles, Orange, and Riverside counties. Because Theo Lacy holds a large pretrial population, someone's status and location can change quickly, including release, court dates, or transfer to another Orange County facility. Confirm current custody status through the Orange County Sheriff's inmate locator before making the trip for an in-person visit.",
  ],

  address: "501 The City Drive South, Orange, CA 92868",
  phone: "(714) 935-6940",
  website: "https://www.ocsheriff.gov/commands-divisions/custody-operations-command/theo-lacy-facility",
    visitingHours: "In-person visiting Friday through Monday, 8:00 AM to 5:00 PM, by appointment only. Schedule at least 24 hours in advance by calling (714) 935-6202. Maximum four visits per inmate per week, one per day.",
    commissary: "Money orders for inmate funds must be made payable to the County of Orange County - Sheriff's Department, with the inmate's name and booking number on the reference line. Deposit at the Cashier's office or mail through the U.S. mail.",
    bailInfo: "Bail information is usually available 2 to 3 hours after booking. Contact the facility for the bail amount and posting options.",
  established: 1960,
  operatedBy: "Orange County Sheriff's Department",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and commissary money transfers for Theo Lacy Facility." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Theo Lacy Facility." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Send messages through the GettingOut app or website. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus. Book ahead of time." },
    photos: { status: "available", provider: "GettingOut", notes: "Photos can be attached to GettingOut messages, subject to content review." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls or set up prepaid calling." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut and Securus are the two providers used at Theo Lacy Facility. Messaging, photos, and money go through GettingOut, while calls and video go through Securus.",
    "All messages, calls, and video visits are subject to monitoring and review by facility staff.",
    "Confirm the exact spelling of the person's name and booking number before creating an account, since mismatches can delay message delivery.",
    "People held at Theo Lacy can be moved between Orange County facilities, so confirm current location before setting up an account.",
    "Video visits typically need to be scheduled in advance rather than started on demand.",
  ],

  faq: [
    { question: "How do I send a message to someone at Theo Lacy Facility?", answer: "Create a free account at gettingout.com or through the GettingOut app. Search for the person by name, add funds if you want to include photos, and send your message. Staff review messages before they're delivered, so allow some time." },
    { question: "How do I set up a video visit at Theo Lacy Facility?", answer: "Video visits are handled through Securus. Create an account, search for Theo Lacy Facility, and choose an open time slot. Visits usually need to be booked at least a day in advance." },
    { question: "How do I send money to someone at Theo Lacy Facility?", answer: "Commissary deposits go through GettingOut. You can add funds by debit or credit card through the app or website. Processing typically takes one business day." },
    { question: "Can I find out if someone is currently held at Theo Lacy Facility?", answer: "The Orange County Sheriff's Department offers an online inmate locator. You can search by name to confirm which facility someone is currently held at." },
    { question: "What happens to communication access after someone is sentenced?", answer: "People sentenced to state prison time are transferred out of Orange County custody to a California Department of Corrections and Rehabilitation facility. The provider setup at the new facility may be different, so check as soon as a transfer happens." },
      {
        question: "How do I schedule a visit at Theo Lacy Facility?",
        answer: "Visiting is by appointment only, Friday through Monday, 8:00 AM to 5:00 PM. Call (714) 935-6202 to schedule at least 24 hours in advance. Have the inmate's booking number, plus the date of birth and driver's license number of each visitor, ready when you call.",
      },
      {
        question: "How do I find or search for an inmate at Theo Lacy Facility?",
        answer: "Search the booking number through the Orange County Sheriff's Inmate Information System. If you do not know the booking number, search by the person's name. Confirm the facility before mailing or visiting.",
      },
      {
        question: "How do I find bail information for someone at Theo Lacy Facility?",
        answer: "Bail information is usually available 2 to 3 hours after booking. Contact the facility for the bail amount and the accepted posting options.",
      },
      {
        question: "How do I add money to someone's account at Theo Lacy Facility?",
        answer: "Send a money order made payable to the County of Orange County - Sheriff's Department, with the inmate's name and booking number on the reference line. Deposit it at the Cashier's office or mail it through the U.S. mail.",
      },
  ],

  relatedFacilitySlugs: ["clark-county-detention-center", "san-quentin-state-prison", "oahu-community-correctional-center"],
},

"laramie-county-detention-center": {
  id: "f-139",
  name: "Laramie County Detention Center",
  slug: "laramie-county-detention-center",
  type: "county",
  stateSlug: "wyoming",
  stateName: "Wyoming",
  stateAbbr: "WY",
  countySlug: null,
  countyName: "Laramie County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Laramie County Detention: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Laramie County Detention Center in Cheyenne WY.",

  description:
    "Laramie County Detention Center communication guide. Find GettingOut and Securus options for families reaching someone at this Cheyenne, Wyoming jail.",

  overview: [
    "Laramie County Detention Center is the county jail for Laramie County, Wyoming, operated by the Laramie County Sheriff's Office in Cheyenne, the state capital. It holds people awaiting trial in Laramie County courts as well as those serving shorter county sentences. As one of the larger county jails in Wyoming, it processes bookings from the Cheyenne Police Department and other law enforcement agencies across the county.",
    "Communication at Laramie County Detention Center goes through GettingOut and Securus. GettingOut covers electronic messaging, photo sharing, and commissary money transfers, and signing up is free at gettingout.com or through the GettingOut app. Securus covers phone calls and video visitation through its own separate account, which families fund directly. Most families need both accounts to access every communication option.",
    "Cheyenne sits in southeastern Wyoming, close to the Colorado border, which keeps the facility within reach for families in the Denver metro area as well as across southern Wyoming. For families farther away, GettingOut messaging and Securus phone or video access tend to be the more practical way to stay in touch. Since most people here are in pretrial status, communication needs can shift quickly, so check current status before planning an in-person visit.",
  ],

  address: "1910 Pioneer Avenue, Cheyenne, WY 82001",
  phone: "(307) 633-4700",
  website: "https://www.laramiecountywy.gov/County-Government/Elected-Officials/Laramie-County-Sheriffs-Office",
  operatedBy: "Laramie County Sheriff's Office",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and commissary money transfers for Laramie County Detention Center." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Laramie County Detention Center." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Send messages through the GettingOut app or website. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus. Book ahead of time." },
    photos: { status: "available", provider: "GettingOut", notes: "Photos can be attached to GettingOut messages, subject to content review." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls or set up prepaid calling." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Add commissary funds through GettingOut." },
  },

  rules: [
    "GettingOut and Securus are the two providers used at Laramie County Detention Center. Messaging, photos, and money go through GettingOut, while calls and video go through Securus.",
    "All messages, calls, and video visits are subject to monitoring and review by facility staff.",
    "Confirm the exact spelling of the person's name and booking number before creating an account, since mismatches can delay message delivery.",
    "People transferred to a Wyoming DOC state facility after sentencing will need to check the provider used at their new facility.",
    "Video visits typically need to be scheduled in advance rather than started on demand.",
  ],

  faq: [
    { question: "How do I send a message to someone at Laramie County Detention Center?", answer: "Create a free account at gettingout.com or through the GettingOut app. Search for the person by name, add funds if you want to include photos, and send your message. Staff review messages before they're delivered, so allow some time." },
    { question: "How do I set up a video visit at Laramie County Detention Center?", answer: "Video visits are handled through Securus. Create an account, search for Laramie County Detention Center, and choose an open time slot. Visits usually need to be booked at least a day in advance." },
    { question: "How do I send money to someone at Laramie County Detention Center?", answer: "Commissary deposits go through GettingOut. You can add funds by debit or credit card through the app or website. Processing typically takes one business day." },
    { question: "Can I find out if someone is currently held at Laramie County Detention Center?", answer: "The Laramie County Sheriff's Office provides inmate status information by phone and, where available, through its inmate information line. You can call to confirm current custody status." },
    { question: "What happens to communication access after someone is sentenced?", answer: "People sentenced to state prison time are transferred out of Laramie County Detention Center to a Wyoming Department of Corrections facility. The provider setup at the new facility may be different, so check as soon as a transfer happens." },
    { question: "Why did a call from Laramie County Detention Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "How do I send mail to someone at Laramie County Detention Center?", answer: "Address mail with the person's full legal name and booking number to Laramie County Detention Center, 1910 Pioneer Avenue, Cheyenne, WY 82001. Mail is inspected before delivery, so keep it plain and do not send cash or items the facility does not allow." },
    { question: "Why is my GettingOut message taking so long to arrive?", answer: "GettingOut messages are reviewed by staff before delivery, so some delay is normal. Double-check the spelling of the person's name and their booking number, since a mismatch can slow or block delivery." },
    { question: "What should I know before visiting Laramie County Detention Center in person?", answer: "Confirm the current visiting schedule and approval rules with the Sheriff's Office before traveling, since visiting hours and requirements can change. Bring a valid photo ID and arrive early." },
      {
        question: "Can someone at Laramie County Detention Center call me if I did not set up an account?",
        answer: "No. You need a funded Securus account and your number must be on the inmate's approved call list before calls can come through. Set up the account first, then ask the inmate to add your number.",
      },
  ],

  relatedFacilitySlugs: ["montana-state-prison", "clark-county-detention-center", "douglas-county-department-of-corrections"],
},

"suzanne-lee-kays-detention-facility": {
  id: "f-140",
  name: "Suzanne Lee Kays Detention Facility",
  slug: "suzanne-lee-kays-detention-facility",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Dallas County",
  securityLevel: "Pretrial",
  hasDetailPage: true,
  seoTitle: "Kays Detention Facility: SmartInmate Phone, Video and Money",
  seoDescription: "How to contact someone at Suzanne Lee Kays Detention Facility in Dallas TX. SmartInmate handles phone calls, video visits, and messaging. Book-in number required.",

  description:
    "Suzanne Lee Kays Detention Facility communication guide. Find SmartInmate phone, video, and messaging options for families reaching someone at this Dallas County jail tower, part of the Lew Sterrett Justice Center complex.",

  overview: [
    "The Suzanne Lee Kays Detention Facility, also known as the South Tower, is part of the Lew Sterrett Justice Center complex in downtown Dallas, operated by the Dallas County Sheriff's Department. It was dedicated in 1995 in memory of Suzanne Lee Kays, a sheriff's deputy killed in the line of duty in 1989, just days after graduating from the sheriff's academy. The tower functions alongside the rest of the Lew Sterrett complex as part of Dallas County's main jail system, holding people booked by the Dallas Police Department and other agencies across the county.",
    "Families reaching someone at the South Tower use the same provider as the rest of the Lew Sterrett complex. Smart Communications provides phone calls, video visitation, and messaging through the SmartInmate platform under the county contract. Families create a SmartInmate account at smartinmate.com to access all available services. For phone calls, fund a SmartInmate account linked to your phone number to receive inmate-initiated calls. Remote video visits are available and can be scheduled through SmartInmate. Commissary deposits use AccessCorrections, a separate system.",
    "Because the South Tower shares the Lew Sterrett complex's high booking volume, wait times for account approval or video visit slots can run longer than at smaller jails. It helps to set up accounts early and check often for available appointment times. After conviction and sentencing to state prison, people are transferred to a Texas Department of Criminal Justice unit, where the communication provider setup is different from the county jail.",
  ],

  address: "111 W. Commerce St, Dallas, TX 75202",
  mailingAddress: "Inmate name and book-in number, c/o Mail Processing Center, PO Box 9226, Seminole, FL 33775-9226. Attorney confidential mail: PO Box 660334, Dallas, TX 75266",
  phone: "(214) 761-9025",
  website: "https://www.dallascounty.org",
  fax: "(214) 653-3420",
  established: 1993,
  operatedBy: "Dallas County Sheriff's Department",

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
      notes: "Smart Communications provides phone service, video visits, and messaging through smartinmate.com. Dallas County switched from Securus to Smart Communications in late 2025.",
    },
  ],

  communication: {
    messaging: { status: "available", provider: "Smart Communications", notes: "Electronic messaging via SmartInmate. Messages monitored by Dallas County Sheriff's staff." },
    video: { status: "available", provider: "Smart Communications", notes: "Remote video visits available through SmartInmate. Schedule in advance." },
    photos: { status: "available", provider: "Smart Communications", notes: "Photo sharing through SmartInmate." },
    phone: { status: "available", provider: "Smart Communications", notes: "Fund a SmartInmate account to receive inmate-initiated calls." },
    moneyTransfer: { status: "available", notes: "Commissary deposits via AccessCorrections, the Dallas County jail commissary system." },
  },

  rules: [
    "All South Tower communication goes through SmartInmate. Commissary deposits use AccessCorrections.",
    "The South Tower shares Lew Sterrett's booking system, so confirm the exact housing location before mailing anything.",
    "All calls, messages, and video visits are subject to monitoring.",
    "You need the inmate's full name and booking number to locate their account.",
    "After transfer to a Texas Department of Criminal Justice unit, a different provider setup applies.",
  ],

  faq: [
    { question: "How do I contact someone at Suzanne Lee Kays Detention Facility?", answer: "All communication services at the South Tower are through SmartInmate. Create an account at smartinmate.com or through the SmartInmate app. One account covers phone calls, video visits, and messaging." },
    { question: "Is Suzanne Lee Kays Detention Facility the same as Lew Sterrett Justice Center?", answer: "The Suzanne Lee Kays Detention Facility, also called the South Tower, is part of the Lew Sterrett Justice Center complex in downtown Dallas. It shares the same address, booking system, and communication providers." },
    { question: "Is video visitation available at Suzanne Lee Kays Detention Facility?", answer: "Yes, remote video visits are available through SmartInmate. Because the complex holds a large population, available time slots can fill up fast, so check often and book as early as you can." },
    { question: "How do I check if someone is in custody at Suzanne Lee Kays Detention Facility?", answer: "Dallas County provides an online inmate search tool. You can also call the jail's information line at (214) 761-9025, which is staffed 24 hours a day." },
    { question: "What happens after someone is sentenced to state prison from Dallas County?", answer: "People sentenced to state time are transferred to a Texas Department of Criminal Justice unit. Communication providers at TDCJ units differ from the county jail, so check the new facility's setup right after any transfer." },
    { question: "How do I send mail to someone at Suzanne Lee Kays Detention Facility?", answer: "Address personal mail with the person's full legal name and booking number to c/o Mail Processing Center, PO Box 9226, Seminole, FL 33775-9226. Attorney and confidential legal mail goes to PO Box 660334, Dallas, TX 75266. Do not send mail to the facility street address. Mail is inspected before delivery." },
    { question: "What do I need to look someone up at Suzanne Lee Kays Detention Facility?", answer: "You need the person's full legal name and booking number. With those, you can use the Dallas County inmate search or call the jail information line to confirm custody and housing." },
    { question: "Why did a call from Suzanne Lee Kays Detention Facility not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that the calling account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What should I do if someone is moved to a different tower or facility?", answer: "Housing can change within the Lew Sterrett Justice Center complex, so confirm the current housing location before mailing anything. After sentencing to state prison, the person is transferred to a Texas Department of Criminal Justice unit with a different communication setup." },
      {
        question: "How do I send a message through SmartInmate to someone at Suzanne Lee Kays Detention Facility?",
        answer: "Create a SmartInmate account, search for the person by name, and purchase message credits. Messages are reviewed by facility staff before delivery, so allow time for review.",
      },
  ],

  relatedFacilitySlugs: ["lew-sterrett-justice-center", "essex-county-correctional-facility", "theo-lacy-facility"],
},


"twin-towers-correctional-facility": {
  id: "f-141",
  name: "Twin Towers Correctional Facility",
  slug: "twin-towers-correctional-facility",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Los Angeles County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Twin Towers Correctional Facility: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Twin Towers Correctional Facility.",

  description:
    "Twin Towers Correctional Facility communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Los Angeles County facility.",

  overview: [
    "Twin Towers Correctional Facility is a county detention facility in Los Angeles County, California, operated by the Los Angeles County Sheriff's Office. Communication for families follows the standard process used across Los Angeles County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Twin Towers Correctional Facility is handled through GTL and ConnectNetwork. GTL handles phone calls, video visits. ConnectNetwork handles electronic messaging, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Los Angeles County Sheriff's Office",
  address: "450 Bauchet Street, Los Angeles, CA 90012",
  rosterUrl: "https://app5.lasd.org/iic/ajis_search.cfm",

  providers: [
    { name: "GTL", slug: "gtl", initial: "G", color: "bg-amber-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: true, video: false, photos: false, phone: false, moneyTransfer: true, notes: "Handles messaging, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "ConnectNetwork", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "GTL", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "GTL", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "ConnectNetwork handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "GTL handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Twin Towers Correctional Facility?", answer: "Create an account with ConnectNetwork, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Twin Towers Correctional Facility?", answer: "Phone calls run through GTL. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Twin Towers Correctional Facility?", answer: "Video visits are available through GTL. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Twin Towers Correctional Facility?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"mens-central-jail-los-angeles": {
  id: "f-142",
  name: "Men's Central Jail Los Angeles",
  slug: "mens-central-jail-los-angeles",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Los Angeles County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Men's Central Jail Los Angeles: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Men's Central Jail Los Angeles.",

  description:
    "Men's Central Jail Los Angeles communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Los Angeles County facility.",

  overview: [
    "Men's Central Jail Los Angeles is a county detention facility in Los Angeles County, California, operated by the Los Angeles County Sheriff's Office. Communication for families follows the standard process used across Los Angeles County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Men's Central Jail Los Angeles is handled through GTL and ConnectNetwork. GTL handles phone calls, video visits. ConnectNetwork handles electronic messaging, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "441 Bauchet Street, Los Angeles, CA 90012",
  phone: "(213) 473-6100",

  operatedBy: "Los Angeles County Sheriff's Office",

  providers: [
    { name: "GTL", slug: "gtl", initial: "G", color: "bg-amber-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: true, video: false, photos: false, phone: false, moneyTransfer: true, notes: "Handles messaging, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "ConnectNetwork", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "GTL", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "GTL", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "ConnectNetwork handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "GTL handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Men's Central Jail Los Angeles?", answer: "Create an account with ConnectNetwork, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Men's Central Jail Los Angeles?", answer: "Phone calls run through GTL. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Men's Central Jail Los Angeles?", answer: "Video visits are available through GTL. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Men's Central Jail Los Angeles?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"california-state-prison-los-angeles-county": {
  id: "f-143",
  name: "California State Prison Los Angeles County",
  slug: "california-state-prison-los-angeles-county",
  type: "state",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Los Angeles County",
  securityLevel: "Level III/IV",
  hasDetailPage: true,
  seoTitle: "California State Prison Los Angeles County: Phone Calls",
  seoDescription: "How to contact someone at California State Prison Los Angeles County.",

  description:
    "California State Prison Los Angeles County communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Los Angeles County facility.",

  overview: [
    "California State Prison Los Angeles County is a state correctional facility in Los Angeles County, California, operated by the California Department of Corrections. Communication for families follows the standard process used across California correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at California State Prison Los Angeles County is handled through Securus and JPay. Securus handles phone calls, video visits. JPay handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "44750 60th Street West, Lancaster, CA 93536-7620",
  phone: "(661) 729-2000",

  operatedBy: "California Department of Corrections",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at California State Prison Los Angeles County?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at California State Prison Los Angeles County?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at California State Prison Los Angeles County?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at California State Prison Los Angeles County?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"pre-trial-detention-center-miami": {
  id: "f-144",
  name: "Pre-Trial Detention Center Miami",
  slug: "pre-trial-detention-center-miami",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Miami-Dade County",
  securityLevel: "Pretrial",
  hasDetailPage: true,
  seoTitle: "Pre-Trial Detention Center Miami: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Pre-Trial Detention Center Miami.",

  description:
    "Pre-Trial Detention Center Miami communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Miami-Dade County facility.",

  overview: [
    "Pre-Trial Detention Center Miami is a county detention facility in Miami-Dade County, Florida, operated by the Miami-Dade County Sheriff's Office. Communication for families follows the standard process used across Miami-Dade County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Pre-Trial Detention Center Miami is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Miami-Dade County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Pre-Trial Detention Center Miami?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Pre-Trial Detention Center Miami?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Pre-Trial Detention Center Miami?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Pre-Trial Detention Center Miami?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"turner-guilford-knight-correctional-center": {
  id: "f-145",
  name: "Turner Guilford Knight Correctional Center",
  slug: "turner-guilford-knight-correctional-center",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Miami-Dade County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Turner Guilford Knight Correctional Center: Phone Calls",
  seoDescription: "How to contact someone at Turner Guilford Knight Correctional Center.",

  description:
    "Turner Guilford Knight Correctional Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Miami-Dade County facility.",

  overview: [
    "Turner Guilford Knight Correctional Center is a county detention facility in Miami-Dade County, Florida, operated by the Miami-Dade County Sheriff's Office. Communication for families follows the standard process used across Miami-Dade County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Turner Guilford Knight Correctional Center is handled through Securus and ConnectNetwork. Securus handles electronic messaging, phone calls, video visits, money transfers. ConnectNetwork provides supporting communication services. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "7000 NW 41st St, Miami, FL 33166",
  phone: "(786) 263-5341",

  rosterUrl: "https://www8.miamidade.gov/Apps/mdcr/InmateSearch/",
  operatedBy: "Miami-Dade County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: true, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles messaging, phone calls, video visits, money transfers." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Serves this facility for select communication services." },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "Securus handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Turner Guilford Knight Correctional Center?", answer: "Create an account with Securus, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Turner Guilford Knight Correctional Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Turner Guilford Knight Correctional Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Turner Guilford Knight Correctional Center?", answer: "Deposits go through Securus. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Turner Guilford Knight Correctional Center?", answer: "Address mail with the person's full name and jail number to Turner Guilford Knight Correctional Center. Mail is inspected before delivery, and magazines or books must come directly from the publisher." },
    { question: "Why did a call from Turner Guilford Knight Correctional Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What if I cannot find someone in the Miami-Dade inmate search?", answer: "Check the spelling of the name and try the booking number. People are sometimes moved between Miami-Dade facilities, and newly booked people may not appear right away, so try again later or call the inmate information line." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"federal-detention-center-miami": {
  id: "f-146",
  name: "Federal Detention Center Miami",
  slug: "federal-detention-center-miami",
  type: "federal",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Miami-Dade County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "Federal Detention Center Miami: CorrLinks Messaging and",
  seoDescription: "How to contact someone at Federal Detention Center Miami. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "Federal Detention Center Miami communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Miami-Dade County facility.",

  overview: [
    "Federal Detention Center Miami is a federal correctional facility in Miami-Dade County, Florida, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Federal Detention Center Miami is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "33 NE 4th Street, Miami, FL 33132",
  phone: "(305) 577-0010",
  mailingAddress: "INMATE NAME and REGISTER NUMBER, FDC Miami, FEDERAL DETENTION CENTER, P.O. BOX 019120, MIAMI, FL 33101",
  rosterUrl: "https://www.bop.gov/inmateloc/",
  commissary: "Do NOT send money to an inmate using this facility address. All funds sent through the mail must be addressed to a processing center in Des Moines, Iowa. Applies to all Federal inmates",
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Federal Detention Center Miami?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Federal Detention Center Miami?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Federal Detention Center Miami?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Federal Detention Center Miami?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I find or search for an inmate at Federal Detention Center Miami?",
        answer: "Use the official inmate search at https://www.bop.gov/inmateloc/. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Federal Detention Center Miami?",
        answer: "Address mail as follows: INMATE NAME and REGISTER NUMBER, FDC Miami, FEDERAL DETENTION CENTER, P.O. BOX 019120, MIAMI, FL 33101. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Federal Detention Center Miami?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Federal Detention Center Miami?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Federal Detention Center Miami?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"rikers-island-amkc": {
  id: "f-147",
  name: "Rikers Island AMKC",
  slug: "rikers-island-amkc",
  type: "county",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "New York City",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Rikers Island AMKC: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Rikers Island AMKC.",

  description:
    "Rikers Island AMKC communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this New York City facility.",

  overview: [
    "Rikers Island AMKC is a county detention facility in New York City, New York, operated by the New York County Sheriff's Office. Communication for families follows the standard process used across New York City jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Rikers Island AMKC is handled through GTL and ConnectNetwork. GTL handles phone calls, video visits. ConnectNetwork handles electronic messaging, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "New York County Sheriff's Office",

  providers: [
    { name: "GTL", slug: "gtl", initial: "G", color: "bg-amber-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: true, video: false, photos: false, phone: false, moneyTransfer: true, notes: "Handles messaging, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "ConnectNetwork", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "GTL", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "GTL", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "ConnectNetwork handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "GTL handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Rikers Island AMKC?", answer: "Create an account with ConnectNetwork, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Rikers Island AMKC?", answer: "Phone calls run through GTL. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Rikers Island AMKC?", answer: "Video visits are available through GTL. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Rikers Island AMKC?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"brooklyn-detention-complex": {
  id: "f-148",
  name: "Brooklyn Detention Complex",
  slug: "brooklyn-detention-complex",
  type: "county",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "Kings County",
  securityLevel: "Closed",
  hasDetailPage: true,
  seoTitle: "Brooklyn Detention Complex (Closed for Reconstruction): Where to Find Someone Now",
  seoDescription: "The Brooklyn Detention Complex was demolished in March 2024 and is being rebuilt. Confirm current housing through the NYC DOC inmate lookup.",

  description:
    "The Brooklyn Detention Complex in Brooklyn was demolished in March 2024 and is being rebuilt. This page explains the closure and directs families to the NYC DOC inmate lookup to confirm current housing.",

  overview: [
    "The Brooklyn Detention Complex (Brooklyn House of Detention) in Brooklyn, New York, was demolished in March 2024 and is being rebuilt, with reconstruction expected to continue until about spring 2029. It is operated by the New York City Department of Correction (NYC DOC), not a county sheriff and not the Federal Bureau of Prisons. This page stays online so families searching for the old facility name find the closure and the current setup instead of outdated contact details. Do not send mail, money, or visit requests to the Brooklyn Detention Complex building.",
    "People who were held at the Brooklyn Detention Complex were moved to other NYC DOC facilities. NYC DOC has not published a single transfer destination for this closure, so confirm a person's current housing through the NYC DOC inmate lookup before setting up or funding any contact.",
    "Use the NYC DOC website for current facility information and the inmate lookup. Confirm the facility name and housing location first, because the provider setup and visiting rules depend on where the person is currently housed.",
  ],

  website: "https://www.nyc.gov/site/doc",
  operatedBy: "New York City Department of Correction (NYC DOC)",

  providers: [],

  communication: {
    messaging: { status: "limited", provider: undefined, notes: "No messaging service applies to the closed Brooklyn Detention Complex building. Confirm current NYC DOC housing and that facility's messaging setup." },
    video: { status: "limited", provider: undefined, notes: "No visits apply to the closed Brooklyn Detention Complex building. Confirm current NYC DOC housing and that facility's visiting rules." },
    photos: { status: "limited", provider: undefined, notes: "No photo service applies to the closed Brooklyn Detention Complex building." },
    phone: { status: "limited", provider: undefined, notes: "No phone service applies to the closed Brooklyn Detention Complex building. Confirm current NYC DOC housing and that facility's phone setup." },
    moneyTransfer: { status: "limited", provider: undefined, notes: "Do not send money to the closed Brooklyn Detention Complex building. Confirm current NYC DOC housing and that facility's deposit method." },
  },

  rules: [
    "The Brooklyn Detention Complex building is closed for reconstruction. Do not send mail, money, or visit requests to it.",
    "Confirm current housing through the NYC DOC inmate lookup before funding any account.",
    "Other NYC DOC facilities still operate. Only this building closed.",
    "Provider setup depends on the person's current facility. Confirm it through NYC DOC.",
    "All calls, messages, and visits at NYC DOC facilities are monitored under NYC DOC policy.",
  ],

  faq: [
    {
      question: "Is the Brooklyn Detention Complex still open?",
      answer: "No. The building was demolished in March 2024 and is being rebuilt, with reconstruction expected to continue until about spring 2029. Do not send mail, money, or visit requests to the Brooklyn Detention Complex building.",
    },
    {
      question: "Where are people who were at Brooklyn Detention Complex now?",
      answer: "People held there were moved to other NYC DOC facilities. NYC DOC has not published a single transfer destination for this closure, so confirm a person's current housing through the NYC DOC inmate lookup before contacting or funding anything.",
    },
    {
      question: "How do I find someone who was at Brooklyn Detention Complex?",
      answer: "Use the NYC DOC inmate lookup. Search by name and confirm the current facility before setting up contact.",
    },
    {
      question: "Can I send mail to someone at the Brooklyn Detention Complex?",
      answer: "No. The building is closed for reconstruction. Confirm the person's current NYC DOC housing first, then use the mailing rules for that facility.",
    },
    {
      question: "Can I send money to someone who was at Brooklyn Detention Complex?",
      answer: "No. Do not send money to the closed building. Confirm current housing through the NYC DOC inmate lookup, then use the deposit method for that facility.",
    },
    {
      question: "Can I visit someone at Brooklyn Detention Complex?",
      answer: "No. The building was demolished and holds no visits. Confirm current housing and use that facility's visiting rules.",
    },
    {
      question: "Is the whole New York City jail system closed?",
      answer: "No. Only the Brooklyn Detention Complex building closed for reconstruction. Other NYC DOC facilities still operate.",
    },
    {
      question: "What was the Brooklyn Detention Complex?",
      answer: "The Brooklyn Detention Complex, also known as the Brooklyn House of Detention, was a NYC DOC pretrial detention facility in Brooklyn. It was operated by the New York City Department of Correction, not a county sheriff and not the Federal Bureau of Prisons.",
    },
    {
      question: "How do I contact NYC DOC with questions?",
      answer: "Use the contact options on the NYC DOC website at nyc.gov/site/doc. Have the person's full name ready.",
    },
    {
      question: "What should I do if an old page still lists GTL or ConnectNetwork for Brooklyn Detention Complex?",
      answer: "Treat those as outdated. The building was demolished in 2024, so no current GTL or ConnectNetwork account setup applies to the Brooklyn Detention Complex itself. Confirm current housing and the provider setup for that facility through NYC DOC.",
    },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
  },



"metropolitan-detention-center-brooklyn": {
  id: "f-149",
  name: "Metropolitan Detention Center Brooklyn",
  slug: "metropolitan-detention-center-brooklyn",
  type: "federal",
  stateSlug: "new-york",
  stateName: "New York",
  stateAbbr: "NY",
  countySlug: null,
  countyName: "Kings County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "Metropolitan Detention Center Brooklyn: CorrLinks Messaging",
  seoDescription: "How to contact someone at Metropolitan Detention Center Brooklyn. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "Metropolitan Detention Center Brooklyn communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Kings County facility.",

  overview: [
    "Metropolitan Detention Center Brooklyn is a federal correctional facility in Kings County, New York, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Metropolitan Detention Center Brooklyn is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "80 29th Street, Brooklyn, NY 11232",
  phone: "(718) 840-4200",

  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Metropolitan Detention Center Brooklyn?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Metropolitan Detention Center Brooklyn?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Metropolitan Detention Center Brooklyn?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Metropolitan Detention Center Brooklyn?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"fdc-houston": {
  id: "f-150",
  name: "FDC Houston",
  slug: "fdc-houston",
  type: "federal",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Harris County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "FDC Houston: CorrLinks Messaging and ConnectNetwork Phone",
  seoDescription: "How to contact someone at FDC Houston. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "FDC Houston communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Harris County facility.",

  overview: [
    "FDC Houston is a federal correctional facility in Harris County, Texas, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at FDC Houston is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Federal Bureau of Prisons (BOP)",
  address: "1200 Texas Avenue, Houston, TX 77002",
  phone: "(713) 221-5400",
  commissary: "BOP Trust Fund: send money via MoneyGram, Western Union, or money order to the Federal Bureau of Prisons processing center in Des Moines, Iowa. Do not send money to the facility address.",
  rosterUrl: "https://www.bop.gov/inmateloc/",
  mailingAddress: "INMATE NAME & REGISTER NUMBER\nFDC Houston\nFederal Detention Center\nP.O. Box 526255\nHouston, TX 77052",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at FDC Houston?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at FDC Houston?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at FDC Houston?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at FDC Houston?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"harris-county-jail-baker-street-annex": {
  id: "f-151",
  name: "Harris County Jail Baker Street Annex",
  slug: "harris-county-jail-baker-street-annex",
  type: "county",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Harris County",
  securityLevel: "Pretrial",
  hasDetailPage: true,
  seoTitle: "Harris County Jail Baker Street Annex: Phone Calls",
  seoDescription: "How to contact someone at Harris County Jail Baker Street Annex.",

  description:
    "Harris County Jail Baker Street Annex communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Harris County facility.",

  overview: [
    "Harris County Jail Baker Street Annex is a county detention facility in Harris County, Texas, operated by the Harris County Sheriff's Office. Communication for families follows the standard process used across Harris County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Harris County Jail Baker Street Annex is handled through Securus. Securus handles electronic messaging, phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Harris County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: true, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles messaging, phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "Securus handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Harris County Jail Baker Street Annex?", answer: "Create an account with Securus, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Harris County Jail Baker Street Annex?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Harris County Jail Baker Street Annex?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Harris County Jail Baker Street Annex?", answer: "Deposits go through Securus. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"maryland-correctional-institution-jessup": {
  id: "f-152",
  name: "Maryland Correctional Institution Jessup",
  slug: "maryland-correctional-institution-jessup",
  type: "state",
  stateSlug: "maryland",
  stateName: "Maryland",
  stateAbbr: "MD",
  countySlug: null,
  countyName: "Howard County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Maryland Correctional Institution Jessup: Phone Calls",
  seoDescription: "How to contact someone at Maryland Correctional Institution Jessup.",

  description:
    "Maryland Correctional Institution Jessup communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Howard County facility.",

  overview: [
    "Maryland Correctional Institution Jessup is a state correctional facility in Howard County, Maryland, operated by the Maryland Department of Corrections. Communication for families follows the standard process used across Maryland correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Maryland Correctional Institution Jessup is handled through JPay and Securus. JPay handles electronic messaging, photo sharing, money transfers. Securus handles phone calls, video visits. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Maryland Department of Corrections",
  mailingAddress: "Inmate Name, ID Number\nMCI-J\n7803 House of Correction Road\nJessup, MD 20794",
  fax: "(410) 799-7527",
  notToConfuseWith: "Not to be confused with Jessup Correctional Institution (JCI), a separate facility also in Jessup, Maryland.",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Maryland Correctional Institution Jessup?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Maryland Correctional Institution Jessup?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Maryland Correctional Institution Jessup?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Maryland Correctional Institution Jessup?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Maryland Correctional Institution Jessup?", answer: "Address mail with the person's full name and ID number to Maryland Correctional Institution Jessup. All mail is inspected before delivery." },
    { question: "Why did a call from Maryland Correctional Institution Jessup not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What if I cannot find someone in the Maryland inmate search?", answer: "Check the spelling of the name and try again, since transfers and new admissions can take time to appear. Confirm the current facility placement before funding any account, since providers differ by facility." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
      {
        question: "Is Maryland Correctional Institution Jessup the same as Jessup Correctional Institution?",
        answer: "No. They are separate facilities in Jessup, Maryland. Make sure you use the MCI-J mailing address and inmate ID when sending mail or funds, since the two facilities are not interchangeable.",
      },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"st-louis-city-justice-center": {
  id: "f-153",
  name: "St. Louis City Justice Center",
  slug: "st-louis-city-justice-center",
  type: "county",
  stateSlug: "missouri",
  stateName: "Missouri",
  stateAbbr: "MO",
  countySlug: null,
  countyName: "St. Louis City",
  securityLevel: "Pretrial",
  hasDetailPage: true,
  seoTitle: "St. Louis City Justice Center: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at St. Louis City Justice Center.",

  description:
    "St. Louis City Justice Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this St. Louis City facility.",

  overview: [
    "St. Louis City Justice Center is a county detention facility in St. Louis City, Missouri, operated by the St. Louis County Sheriff's Office. Communication for families follows the standard process used across St. Louis City jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at St. Louis City Justice Center is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "200 South Tucker Blvd, St. Louis, MO 63102",
  phone: "(314) 621-5848",

  operatedBy: "St. Louis County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at St. Louis City Justice Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at St. Louis City Justice Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at St. Louis City Justice Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at St. Louis City Justice Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I find or search for an inmate at St. Louis City Justice Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for St. Louis City, Missouri. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at St. Louis City Justice Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at St. Louis City Justice Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at St. Louis City Justice Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at St. Louis City Justice Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"crossroads-correctional-center": {
  id: "f-154",
  name: "Crossroads Correctional Center",
  slug: "crossroads-correctional-center",
  type: "state",
  stateSlug: "missouri",
  stateName: "Missouri",
  stateAbbr: "MO",
  countySlug: null,
  countyName: "Linn County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Crossroads Correctional Center: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Crossroads Correctional Center.",

  description:
    "Crossroads Correctional Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Linn County facility.",

  overview: [
    "Crossroads Correctional Center is a state correctional facility in Linn County, Missouri, operated by the Missouri Department of Corrections. Communication for families follows the standard process used across Missouri correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Crossroads Correctional Center is handled through JPay and Securus. JPay handles electronic messaging, photo sharing, money transfers. Securus handles phone calls, video visits. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "1115 East Pence Road, Cameron, MO 64429",
  phone: "(816) 632-2727",

  visitingHours: "Friday, Saturday, and Sunday, 9:30 AM to 1:30 PM and 2:30 PM to 6:30 PM. Visitors must be on the inmate's approved visitor list.",
  mailingAddress: "Offender Name and DOC ID Number\nCrossroads Correctional Center\n1115 East Pence Road\nCameron, MO 64429",
  fax: "(816) 632-2754",
  operatedBy: "Missouri Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Crossroads Correctional Center?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Crossroads Correctional Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Crossroads Correctional Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Crossroads Correctional Center?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Crossroads Correctional Center?", answer: "Address mail with the offender's full name and DOC ID number to Crossroads Correctional Center, 1115 East Pence Road, Cameron, MO 64429. All mail is inspected before delivery. Do not send cash, personal checks, or money orders through the mail." },
    { question: "Why did a call from Crossroads Correctional Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What do I need to do before visiting Crossroads Correctional Center?", answer: "Visitors must be on the inmate's approved visitor list, so complete the visiting application before traveling. Bring a valid photo ID, and confirm the current schedule before you go, since visiting hours can change." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"pulaski-county-detention-facility": {
  id: "f-155",
  name: "Pulaski County Detention Facility",
  slug: "pulaski-county-detention-facility",
  type: "county",
  stateSlug: "arkansas",
  stateName: "Arkansas",
  stateAbbr: "AR",
  countySlug: null,
  countyName: "Pulaski County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Pulaski County Detention Facility: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Pulaski County Detention Facility.",

  description:
    "Pulaski County Detention Facility communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Pulaski County facility.",

  overview: [
    "Pulaski County Detention Facility is a county detention facility in Pulaski County, Arkansas, operated by the Pulaski County Sheriff's Office. Communication for families follows the standard process used across Pulaski County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Pulaski County Detention Facility is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "2900 South Woodrow, Little Rock, AR 72204",
  phone: "(501) 340-7001",

  visitingHours: "In-person visits run 9:00 AM to 7:00 PM and start on the hour, except 4:30 PM. Inmates get one 30-minute visit per week, with no more than three visitors. Schedule in-person visits 24 hours in advance. Last names A-M visit Monday or Saturday, N-Z Tuesday or Sunday, and A, B, and W Units Wednesday or Thursday.",
  operatedBy: "Pulaski County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Pulaski County Detention Facility?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Pulaski County Detention Facility?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Pulaski County Detention Facility?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Pulaski County Detention Facility?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Pulaski County Detention Facility?", answer: "Address mail with the inmate's full name and ID number. Mail with checks, cash, pictures, stickers, fragrance, or tape will be returned, and books must be soft-back Bibles or publisher subscriptions." },
    { question: "What are the rules for in-person visits at Pulaski County Detention Facility?", answer: "In-person visits run 9:00 AM to 7:00 PM, start on the hour except 4:30 PM, and last 30 minutes. Schedule 24 hours ahead, bring photo ID, and arrive on time: visitors 10 or more minutes late lose the visit." },
    { question: "Can I get a special visit at Pulaski County Detention Facility?", answer: "Special visits may be approved if you traveled 100 miles or more one way. Bring proof of distance, such as a driver's license showing your address, and ask the Watch Commander for approval." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"hinds-county-detention-center": {
  id: "f-156",
  name: "Hinds County Detention Center",
  slug: "hinds-county-detention-center",
  type: "county",
  stateSlug: "mississippi",
  stateName: "Mississippi",
  stateAbbr: "MS",
  countySlug: null,
  countyName: "Hinds County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hinds County Detention Center: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Hinds County Detention Center.",

  description:
    "Hinds County Detention Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Hinds County facility.",

  overview: [
    "Hinds County Detention Center is a county detention facility in Hinds County, Mississippi, operated by the Hinds County Sheriff's Office. Communication for families follows the standard process used across Hinds County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account. Hinds County operates two detention sites, one in Jackson and one in Raymond. Confirm which site holds the person before visiting or sending mail, since procedures can differ by site.",
    "Communication at Hinds County Detention Center is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  visitingHours: "Visits are scheduled online in advance through GTL VisitMe. Male inmates visit on Tuesdays and female inmates on Wednesdays, 8:00 to 11:00 AM and 1:00 to 4:00 PM.",
  operatedBy: "Hinds County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Hinds County Detention Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Hinds County Detention Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Hinds County Detention Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Hinds County Detention Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Hinds County Detention Center?", answer: "Address mail with the person's full legal name and booking number. All mail is inspected before delivery." },
    { question: "What days and times are visits at Hinds County Detention Center?", answer: "Visits are scheduled online in advance. Male inmates visit on Tuesdays and female inmates on Wednesdays, 8:00 to 11:00 AM and 1:00 to 4:00 PM. Schedule ahead, since slots are limited." },
    { question: "Why did a call from Hinds County Detention Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that the calling account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What if I cannot find someone in the Hinds County inmate search?", answer: "Check the spelling of the name and try again, since bookings take time to appear. Confirm the current housing location before mailing anything, since Hinds County operates more than one detention site." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"arizona-state-prison-complex-perryville": {
  id: "f-157",
  name: "Arizona State Prison Complex Perryville",
  slug: "arizona-state-prison-complex-perryville",
  type: "state",
  stateSlug: "arizona",
  stateName: "Arizona",
  stateAbbr: "AZ",
  countySlug: null,
  countyName: "Maricopa County",
  securityLevel: "Multiple",
  hasDetailPage: true,
  seoTitle: "Arizona State Prison Complex Perryville: Phone Calls",
  seoDescription: "How to contact someone at Arizona State Prison Complex Perryville.",

  description:
    "Arizona State Prison Complex Perryville communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Maricopa County facility.",

  overview: [
    "Arizona State Prison Complex Perryville is a state correctional facility in Maricopa County, Arizona, operated by the Arizona Department of Corrections. Communication for families follows the standard process used across Arizona correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Arizona State Prison Complex Perryville is handled through ICSolutions and Securus. ICSolutions handles electronic messaging, phone calls, video visits, money transfers. Securus provides supporting communication services. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "2105 N Citrus Rd, Goodyear, AZ 85395",
  phone: "(623) 853-0304 ext. 24003",

  operatedBy: "Arizona Department of Corrections",
  mailingAddress: "Mail uses a unit-specific P.O. box. Address mail with the inmate name and ADC number, the unit name, and the unit P.O. box in Goodyear, AZ 85338 (for example, Lumley Unit, P.O. Box 3300; San Carlos Unit, P.O. Box 3700). Use the unit box from ADCRR's Prison Mailing Addresses page.",

  providers: [
    { name: "ICSolutions", slug: "icsolutions", initial: "I", color: "bg-sky-700", messaging: true, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles messaging, phone calls, video visits, money transfers." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Serves this facility for select communication services." },
  ],

  communication: {
    messaging: { status: "available", provider: "ICSolutions", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ICSolutions", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ICSolutions", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ICSolutions", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "ICSolutions handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ICSolutions handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Arizona State Prison Complex Perryville?", answer: "Create an account with ICSolutions, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Arizona State Prison Complex Perryville?", answer: "Phone calls run through ICSolutions. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Arizona State Prison Complex Perryville?", answer: "Video visits are available through ICSolutions. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Arizona State Prison Complex Perryville?", answer: "Deposits go through ICSolutions. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Arizona State Prison Complex Perryville?", answer: "Address mail with the person's full name and ADC number. All mail is inspected before delivery." },
    { question: "Why did a call from Arizona State Prison Complex Perryville not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your ICSolutions account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What do I need to do before visiting Arizona State Prison Complex Perryville?", answer: "Visitors must be approved in advance, so submit the visitor application and wait for approval before traveling. Bring a valid photo ID, and confirm the current schedule, since visiting hours vary by unit." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
      {
        question: "Which P.O. box do I use for mail to Perryville?",
        answer: "Use the P.O. box for the inmate's housing unit, not one general box. Address mail with the inmate name, ADC number, and unit name, for example Lumley Unit P.O. Box 3300 or San Carlos Unit P.O. Box 3700, Goodyear, AZ 85338. Confirm the inmate's unit before mailing.",
      },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"fcc-yazoo-city": {
  id: "f-158",
  name: "FCC Yazoo City",
  slug: "fcc-yazoo-city",
  type: "federal",
  stateSlug: "mississippi",
  stateName: "Mississippi",
  stateAbbr: "MS",
  countySlug: null,
  countyName: "Yazoo County",
  securityLevel: "Medium / Low",
  hasDetailPage: true,
  seoTitle: "FCC Yazoo City: CorrLinks Messaging and ConnectNetwork",
  seoDescription: "How to contact someone at FCC Yazoo City. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "FCC Yazoo City communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Yazoo County facility.",

  overview: [
    "FCC Yazoo City is a federal correctional facility in Yazoo County, Mississippi, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at FCC Yazoo City is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "2225 Haley Barbour Parkway, Yazoo City, MS 39194",
  phone: "662-716-1241",

  rosterUrl: "https://www.bop.gov/inmateloc/",
  commissary: "Do not mail money to the facility address. BOP funds sent by mail go to the central processing center in Des Moines, Iowa.",
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at FCC Yazoo City?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at FCC Yazoo City?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at FCC Yazoo City?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at FCC Yazoo City?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at FCC Yazoo City?", answer: "Address mail with the person's full name and BOP register number. FCC Yazoo City is a complex with several units, so confirm the person's current unit before mailing." },
    { question: "Why did a call from FCC Yazoo City not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your ConnectNetwork account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What is the difference between the units at FCC Yazoo City?", answer: "FCC Yazoo City is a federal complex with low, medium, and high security facilities plus satellite camps. Communication follows standard BOP procedures across the complex, but visiting schedules can differ by unit, so confirm the unit first." },
    { question: "Why do I need the BOP register number?", answer: "The BOP register number identifies the person across BOP systems. You need it to fund a ConnectNetwork account, send money, and look someone up in the BOP inmate locator." },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"johnson-county-detention-center": {
  id: "f-159",
  name: "Johnson County Detention Center",
  slug: "johnson-county-detention-center",
  type: "county",
  stateSlug: "kansas",
  stateName: "Kansas",
  stateAbbr: "KS",
  countySlug: null,
  countyName: "Johnson County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Johnson County Detention Center: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Johnson County Detention Center.",

  description:
    "Johnson County Detention Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Johnson County facility.",

  overview: [
    "Johnson County Detention Center is a county detention facility in Johnson County, Kansas, operated by the Johnson County Sheriff's Office. Communication for families follows the standard process used across Johnson County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Johnson County Detention Center is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "27745 West 159th Street, New Century, KS 66031",
  phone: "(913) 715-5900",

  visitingHours: "Video visits can be scheduled online through HomeWAV or in the front lobby of the Sheriff's Office. On-site visitation: female inmates Saturdays 8:00 to 10:00 AM (check in by 9:00 AM); male inmates with last names A-L Saturdays 1:00 to 5:00 PM (check in by 4:00 PM); male inmates M-Z Sundays 1:00 to 5:00 PM (check in by 4:00 PM).",
  commissary: "The Sheriff's Office partners with Summit for commissary and banking. Deposits can be made at lobby kiosks (7:00 AM to 10:00 PM daily) or online through JailATM (jailatm.com). You need the inmate's six-digit Criminal File Number.",
  operatedBy: "Johnson County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Johnson County Detention Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Johnson County Detention Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Johnson County Detention Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Johnson County Detention Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Johnson County Detention Center?", answer: "Address mail with the person's full legal name and jail ID number. All mail is inspected before delivery." },
    { question: "Why did a call from Johnson County Detention Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that the calling account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What do I need to bring to a visit at Johnson County Detention Center?", answer: "Bring a valid photo ID and arrive at least 15 minutes before the scheduled visit. Only your ID and car keys may be taken into the visitation area; phones, purses, and other items are not allowed." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"strafford-county-house-of-corrections": {
  id: "f-160",
  name: "Strafford County House of Corrections",
  slug: "strafford-county-house-of-corrections",
  type: "county",
  stateSlug: "new-hampshire",
  stateName: "New Hampshire",
  stateAbbr: "NH",
  countySlug: null,
  countyName: "Strafford County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Strafford County House of Corrections: Phone Calls",
  seoDescription: "How to contact someone at Strafford County House of Corrections.",

  description:
    "Strafford County House of Corrections communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Strafford County facility.",

  overview: [
    "Strafford County House of Corrections is a county detention facility in Strafford County, New Hampshire, operated by the Strafford County Sheriff's Office. Communication for families follows the standard process used across Strafford County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Strafford County House of Corrections is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "266 County Farm Road, Dover, NH 03820",
  phone: "(603) 742-3310",

  operatedBy: "Strafford County Sheriff's Office",
  fax: "(603) 742-2192",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Strafford County House of Corrections?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Strafford County House of Corrections?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Strafford County House of Corrections?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Strafford County House of Corrections?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Strafford County House of Corrections?", answer: "Address mail with the person's full name and booking number. Mail is inspected before delivery." },
    { question: "Why did a call from Strafford County House of Corrections not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "How are visits scheduled at Strafford County House of Corrections?", answer: "Visits are scheduled by the inmate from the visiting times assigned to their unit, and the inmate is responsible for telling visitors the scheduled time. Bring a valid photo ID and call the facility to confirm the visit is scheduled." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
      {
        question: "Can I bring items for an inmate when I visit Strafford County House of Corrections?",
        answer: "Do not bring items for an inmate to a visit unless the facility has told you otherwise. Personal items, food, and packages are generally not accepted at visits. Use the approved money transfer and commissary options instead.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"hillsborough-county-department-of-corrections": {
  id: "f-161",
  name: "Hillsborough County Department of Corrections",
  slug: "hillsborough-county-department-of-corrections",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Hillsborough County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hillsborough County Department of Corrections: Phone Calls",
  seoDescription: "How to contact someone at Hillsborough County Department of Corrections.",

  description:
    "Hillsborough County Department of Corrections communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Hillsborough County facility.",

  overview: [
    "Hillsborough County Department of Corrections is a county detention facility in Hillsborough County, Florida, operated by the Hillsborough County Sheriff's Office. Communication for families follows the standard process used across Hillsborough County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Hillsborough County Department of Corrections is handled through Securus and JPay. Securus handles phone calls, video visits. JPay handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
    "The Sheriff's Office operates two jails: Falkenburg Road Jail, 520 N. Falkenburg Road, Tampa, FL 33619, and Orient Road Jail, 1201 N. Orient Road, Tampa, FL 33619. Both use the same public phone number, (813) 247-8300.",
  ],

  phone: "(813) 247-8300",

  mailingAddress: "Inmate Name, Booking Number\nFalkenburg Road Jail\n520 Falkenburg Road\nTampa, FL 33619",
  visitingHours: "In-person visits: the inmate schedules visitors seven days a week, Sunday through Saturday 1:00 PM to 9:00 PM, 40-minute visits starting on the hour, except Thanksgiving, Christmas, and New Year's Day. Video visits are remote, typically 9:30 AM to 8:45 PM, with two hours of no-cost video visits per inmate per week. A valid government photo ID is required.",
  commissary: "The Sheriff's Office accepts government checks, cashier's checks, and money orders for inmate accounts. The instrument must show the inmate's name, booking number, and the depositor's name and address. Funds may take 24 to 96 hours to be credited.",
  fax: "813-242-1885",
  operatedBy: "Hillsborough County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Hillsborough County Department of Corrections?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Hillsborough County Department of Corrections?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Hillsborough County Department of Corrections?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Hillsborough County Department of Corrections?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Hillsborough County Department of Corrections?", answer: "Address mail with the inmate's name and booking number to Falkenburg Road Jail, 520 Falkenburg Road, Tampa, FL 33619. All incoming mail is opened and searched, and magazines, newspapers, and books must come directly from the publisher." },
    { question: "Why did a call from Hillsborough County Department of Corrections not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that the calling account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "Can children visit someone at Hillsborough County Department of Corrections?", answer: "Children under 18 must be accompanied by an adult, and no more than three visitors may visit an inmate at the same time." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"goose-creek-correctional-center": {
  id: "f-162",
  name: "Goose Creek Correctional Center",
  slug: "goose-creek-correctional-center",
  type: "state",
  stateSlug: "alaska",
  stateName: "Alaska",
  stateAbbr: "AK",
  countySlug: null,
  countyName: "Matanuska-Susitna Borough",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Goose Creek Correctional Center: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Goose Creek Correctional Center.",

  description:
    "Goose Creek Correctional Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Matanuska-Susitna Borough facility.",

  overview: [
    "Goose Creek Correctional Center is a state correctional facility in Matanuska-Susitna Borough, Alaska, operated by the Alaska Department of Corrections. Communication for families follows the standard process used across Alaska correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Goose Creek Correctional Center is handled through Securus and ConnectNetwork. Securus handles electronic messaging, phone calls, video visits, money transfers. ConnectNetwork provides supporting communication services. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "22301 West Alsop Road, Wasilla, AK 99623",
  phone: "(907) 864-8100",

  operatedBy: "Alaska Department of Corrections",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: true, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles messaging, phone calls, video visits, money transfers." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Serves this facility for select communication services." },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "Securus handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Goose Creek Correctional Center?", answer: "Create an account with Securus, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Goose Creek Correctional Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Goose Creek Correctional Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Goose Creek Correctional Center?", answer: "Deposits go through Securus. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Goose Creek Correctional Center?", answer: "Address mail with the person's full name and Alaska DOC number. All mail is inspected before delivery." },
    { question: "Why did a call from Goose Creek Correctional Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What do I need to do before visiting Goose Creek Correctional Center?", answer: "Visitors must be approved in advance, so complete the visiting application and wait for approval before traveling. Bring a valid photo ID, and confirm the current schedule, since visiting hours can change." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
      {
        question: "Can I send books or packages to someone at Goose Creek Correctional Center?",
        answer: "Books and magazines generally must come new and directly from the publisher or an approved retailer, not from a personal address. Do not mail packages, food, or clothing. Confirm current rules with the Alaska Department of Corrections before sending anything beyond letters.",
      },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"anchorage-correctional-complex": {
  id: "f-163",
  name: "Anchorage Correctional Complex",
  slug: "anchorage-correctional-complex",
  type: "state",
  stateSlug: "alaska",
  stateName: "Alaska",
  stateAbbr: "AK",
  countySlug: null,
  countyName: "Anchorage",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Anchorage Correctional Complex: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Anchorage Correctional Complex.",

  description:
    "Anchorage Correctional Complex communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Anchorage facility.",

  overview: [
    "Anchorage Correctional Complex is a state correctional facility in Anchorage, Alaska, operated by the Alaska Department of Corrections. Communication for families follows the standard process used across Alaska correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Anchorage Correctional Complex is handled through Securus and ConnectNetwork. Securus handles electronic messaging, phone calls, video visits, money transfers. ConnectNetwork provides supporting communication services. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "1400 E 4th Ave, Anchorage, AK",

  mailingAddress: "Inmate Name, DOC ID\nAnchorage Correctional Complex\n1400 E 4th Ave\nAnchorage, AK 99501",
  visitingHours: "Friends and family visits for ICE detainees are held every day except Thursday, at 9:00 AM, 10:00 AM, 1:00 PM, 2:00 PM, 7:15 PM, and 8:15 PM. Arrive one hour early.",
  operatedBy: "Alaska Department of Corrections",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: true, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles messaging, phone calls, video visits, money transfers." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Serves this facility for select communication services." },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "Securus", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "Securus handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Anchorage Correctional Complex?", answer: "Create an account with Securus, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Anchorage Correctional Complex?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Anchorage Correctional Complex?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Anchorage Correctional Complex?", answer: "Deposits go through Securus. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Anchorage Correctional Complex?", answer: "Address mail with the inmate's name and DOC ID to Anchorage Correctional Complex, 1400 E 4th Ave, Anchorage, AK 99501. All mail is inspected before delivery." },
    { question: "Why did a call from Anchorage Correctional Complex not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "How do attorneys schedule visits at Anchorage Correctional Complex?", answer: "Attorneys can schedule legal visits through the facility's scheduling office at (907) 269-4205 or by email at ANCJL.HOUSING@ALASKA.GOV." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"valdosta-state-prison": {
  id: "f-164",
  name: "Valdosta State Prison",
  slug: "valdosta-state-prison",
  type: "state",
  stateSlug: "georgia",
  stateName: "Georgia",
  stateAbbr: "GA",
  countySlug: null,
  countyName: "Lowndes County",
  securityLevel: "High",
  hasDetailPage: true,
  seoTitle: "Valdosta State Prison: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Valdosta State Prison.",

  description:
    "Valdosta State Prison communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Lowndes County facility.",

  overview: [
    "Valdosta State Prison is a state correctional facility in Lowndes County, Georgia, operated by the Georgia Department of Corrections. Communication for families follows the standard process used across Georgia correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Valdosta State Prison is handled through Securus and JPay. Securus handles phone calls, video visits. JPay handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "3259 Val Tech Road, Valdosta, GA 31603",
  phone: "(229) 333-7955",
  mailingAddress: "Inmate name and GDC ID, P.O. Box 5368, Valdosta, GA 31603",
  visitingHours: "General Population: Days Saturdays, Sundays, and State Holidays, Hours 9:00AM-3:00PM. Tier Visitation (scheduled 24 hours prior by visitor): Days Mondays and Wednesdays, excluding State Holidays, Hours 8:30 AM-2:30 PM",
  fax: "(229) 333-5387",
  operatedBy: "Georgia Department of Corrections",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Valdosta State Prison?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Valdosta State Prison?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Valdosta State Prison?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Valdosta State Prison?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I find or search for an inmate at Valdosta State Prison?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Lowndes County, Georgia. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Valdosta State Prison?",
        answer: "Address mail as follows: Inmate name and GDC ID, P.O. Box 5368, Valdosta, GA 31603. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "What are the visiting hours at Valdosta State Prison?",
        answer: "General Population: Days Saturdays, Sundays, and State Holidays, Hours 9:00AM-3:00PM. Tier Visitation (scheduled 24 hours prior by visitor): Days Mondays and Wednesdays, excluding State Holidays, Hours 8:30 AM-2:30 PM",
      },
      {
        question: "Can I receive incoming calls from an inmate at Valdosta State Prison?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Valdosta State Prison?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"idaho-state-correctional-center": {
  id: "f-165",
  name: "Idaho State Correctional Center",
  slug: "idaho-state-correctional-center",
  type: "state",
  stateSlug: "idaho",
  stateName: "Idaho",
  stateAbbr: "ID",
  countySlug: null,
  countyName: "Ada County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Idaho State Correctional Center: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Idaho State Correctional Center.",

  description:
    "Idaho State Correctional Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Ada County facility.",

  overview: [
    "Idaho State Correctional Center is a state correctional facility in Ada County, Idaho, operated by the Idaho Department of Corrections. Communication for families follows the standard process used across Idaho correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Idaho State Correctional Center is handled through ConnectNetwork and GettingOut. ConnectNetwork handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "14601 S Pleasant Valley Rd, Kuna, ID 83634",
  phone: "(208) 331-2760",

  mailingAddress: "Resident Name, IDOC Number\nIdaho State Correctional Center\nPO Box 70010\nBoise, ID 83707",
  visitingHours: "Visiting application and approval are required before visiting. Schedules vary and are subject to change, so check the IDOC ISCC page before traveling.",
  operatedBy: "Idaho Department of Corrections",

  providers: [
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Idaho State Correctional Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Idaho State Correctional Center?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Idaho State Correctional Center?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Idaho State Correctional Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Idaho State Correctional Center?", answer: "Address mail with the resident's name and IDOC number to Idaho State Correctional Center, PO Box 70010, Boise, ID 83707. All mail is inspected before delivery." },
    { question: "Why did a call from Idaho State Correctional Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your ConnectNetwork account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "How do attorneys schedule visits at Idaho State Correctional Center?", answer: "Attorneys can arrange legal visits by email at iscc_legalvisits@idoc.idaho.gov. Confirm the current procedure before traveling, since scheduling can change." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"ada-county-jail": {
  id: "f-166",
  name: "Ada County Jail",
  slug: "ada-county-jail",
  type: "county",
  stateSlug: "idaho",
  stateName: "Idaho",
  stateAbbr: "ID",
  countySlug: null,
  countyName: "Ada County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Ada County Jail: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Ada County Jail.",

  description:
    "Ada County Jail communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Ada County facility.",

  overview: [
    "Ada County Jail is a county detention facility in Ada County, Idaho, operated by the Ada County Sheriff's Office. Communication for families follows the standard process used across Ada County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Ada County Jail is handled through ConnectNetwork and GettingOut. ConnectNetwork handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "7200 Barrister Dr., Boise, ID 83704",
  phone: "(208) 577-3000",

  operatedBy: "Ada County Sheriff's Office",

  providers: [
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Ada County Jail?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Ada County Jail?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Ada County Jail?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Ada County Jail?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Ada County Jail?", answer: "Address mail with the person's full name and booking number. Mail is inspected before delivery." },
    { question: "Why did a call from Ada County Jail not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your ConnectNetwork account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "How are visits scheduled at Ada County Jail?", answer: "Visits must be scheduled in advance, and visitors must be on the approved list. Confirm the current visiting schedule and rules with the facility before traveling, since hours can change." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
      {
        question: "Can I send photos to someone at Ada County Jail?",
        answer: "Yes, digital photos can be sent through GettingOut as part of a message, subject to facility review. Do not mail printed photos unless the facility's mail rules allow them. Photos must follow facility content rules or they will be rejected.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"idaho-maximum-security-institution": {
  id: "f-167",
  name: "Idaho Maximum Security Institution",
  slug: "idaho-maximum-security-institution",
  type: "state",
  stateSlug: "idaho",
  stateName: "Idaho",
  stateAbbr: "ID",
  countySlug: null,
  countyName: "Ada County",
  securityLevel: "Maximum",
  hasDetailPage: true,
  seoTitle: "Idaho Maximum Security Institution: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Idaho Maximum Security Institution.",

  description:
    "Idaho Maximum Security Institution communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Ada County facility.",

  overview: [
    "Idaho Maximum Security Institution is a state correctional facility in Ada County, Idaho, operated by the Idaho Department of Corrections. Communication for families follows the standard process used across Idaho correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Idaho Maximum Security Institution is handled through ConnectNetwork and GettingOut. ConnectNetwork handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "13400 S. Pleasant Valley Rd, Kuna, ID 83634",
  phone: "(208) 338-1635",

  visitingHours: "Visiting application and approval are required before visiting. Schedules are subject to change, so check the IDOC IMSI page before traveling.",
  operatedBy: "Idaho Department of Corrections",

  providers: [
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Idaho Maximum Security Institution?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Idaho Maximum Security Institution?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Idaho Maximum Security Institution?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Idaho Maximum Security Institution?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Idaho Maximum Security Institution?", answer: "Address mail with the person's full name and IDOC number. All mail is inspected before delivery." },
    { question: "Why did a call from Idaho Maximum Security Institution not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your ConnectNetwork account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "Do visiting rules differ by custody level at Idaho Maximum Security Institution?", answer: "Visits depend on custody and classification, so confirm the person's current visiting status with the facility before traveling. Bring a valid photo ID and arrive early." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"northeast-correctional-complex": {
  id: "f-168",
  name: "Northeast Correctional Complex",
  slug: "northeast-correctional-complex",
  type: "state",
  stateSlug: "tennessee",
  stateName: "Tennessee",
  stateAbbr: "TN",
  countySlug: null,
  countyName: "Sullivan County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Northeast Correctional Complex: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Northeast Correctional Complex.",

  description:
    "Northeast Correctional Complex communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Sullivan County facility.",

  overview: [
    "Northeast Correctional Complex is a state correctional facility in Sullivan County, Tennessee, operated by the Tennessee Department of Corrections. Communication for families follows the standard process used across Tennessee correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Northeast Correctional Complex is handled through ConnectNetwork and JPay. ConnectNetwork handles phone calls, video visits. JPay handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "5249 Highway 67 West, Mountain City, TN 37683",
  phone: "(423) 727-7387",

  mailingAddress: "Inmate First and Last Name, TDOC ID #\nP.O. Box 247\nPhoenix, MD 21131",
  operatedBy: "Tennessee Department of Corrections",

  providers: [
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Northeast Correctional Complex?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Northeast Correctional Complex?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Northeast Correctional Complex?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Northeast Correctional Complex?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Northeast Correctional Complex?", answer: "Address mail with the inmate's first and last name and TDOC ID number to P.O. Box 247, Phoenix, MD 21131. Tennessee uses a centralized mail facility, so mail sent to the prison address may be delayed." },
    { question: "Why did a call from Northeast Correctional Complex not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your ConnectNetwork account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What do I need to do before visiting Northeast Correctional Complex?", answer: "Visitors must be approved in advance, so submit the visitor application and wait for approval before traveling. Bring a valid photo ID, and confirm the current schedule, since visiting hours can change." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"shelby-county-correctional-center": {
  id: "f-169",
  name: "Shelby County Correctional Center",
  slug: "shelby-county-correctional-center",
  type: "county",
  stateSlug: "tennessee",
  stateName: "Tennessee",
  stateAbbr: "TN",
  countySlug: null,
  countyName: "Shelby County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Shelby County Correctional Center: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Shelby County Correctional Center.",

  description:
    "Shelby County Correctional Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Shelby County facility.",

  overview: [
    "Shelby County Correctional Center is a county detention facility in Shelby County, Tennessee, operated by the Shelby County Sheriff's Office. Communication for families follows the standard process used across Shelby County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Shelby County Correctional Center is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "1045 Mullins Station Rd., Memphis, TN 38134",
  phone: "(901) 222-8500",

  mailingAddress: "Inmate Name, ID\nShelby County Correctional Center\n1045 Mullins Station Road\nMemphis, TN 38134",
  operatedBy: "Shelby County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Shelby County Correctional Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Shelby County Correctional Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Shelby County Correctional Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Shelby County Correctional Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Shelby County Correctional Center?", answer: "Address mail with the inmate's name and ID to Shelby County Correctional Center, 1045 Mullins Station Road, Memphis, TN 38134. All mail is inspected before delivery." },
    { question: "Why did a call from Shelby County Correctional Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "How are visits scheduled at Shelby County Correctional Center?", answer: "Visits must be scheduled in advance, and visitors must be on the approved list. Confirm the current visiting schedule and rules with the facility before traveling, since hours can change." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"aci-intake-service-center": {
  id: "f-170",
  name: "ACI Intake Service Center",
  slug: "aci-intake-service-center",
  type: "state",
  stateSlug: "rhode-island",
  stateName: "Rhode Island",
  stateAbbr: "RI",
  countySlug: null,
  countyName: "Providence County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "ACI Intake Service Center: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at ACI Intake Service Center.",

  description:
    "ACI Intake Service Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Providence County facility.",

  overview: [
    "ACI Intake Service Center is a state correctional facility in Providence County, Rhode Island, operated by the Rhode Island Department of Corrections. Communication for families follows the standard process used across Rhode Island correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at ACI Intake Service Center is handled through JPay and Securus. JPay handles electronic messaging, photo sharing, money transfers. Securus handles phone calls, video visits. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "18 Slate Hill Road, Cranston, RI 02920",
  phone: "(401) 462-2285",

  mailingAddress: "Inmate Name, ID Number\nAnthony P. Travisono Intake Service Center\nP.O. Box 8249\nCranston, RI 02920",
  visitingHours: "In-person visitation is scheduled by housing unit. Visiting periods are 1:00 to 2:15 PM, 3:15 to 4:45 PM, 5:00 to 6:45 PM, and 7:00 to 8:45 PM. Video visits are scheduled at securustech.net within those blocks. Visitation desk: (401) 462-2287 or (401) 462-1268.",
  operatedBy: "Rhode Island Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at ACI Intake Service Center?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at ACI Intake Service Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at ACI Intake Service Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at ACI Intake Service Center?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at ACI Intake Service Center?", answer: "Address mail with the inmate's name and ID number to Anthony P. Travisono Intake Service Center, P.O. Box 8249, Cranston, RI 02920. All mail is inspected before delivery." },
    { question: "How do I schedule a video visit at ACI Intake Service Center?", answer: "Video visits are scheduled through Securus at securustech.net, within the facility's visiting periods. Check the housing unit schedule, since visiting times vary by unit." },
    { question: "How long do people stay at ACI Intake Service Center?", answer: "The Intake Service Center is the entry point for the Rhode Island correctional system, where people are classified before moving to another facility. Stay lengths vary, so confirm the current placement before mailing anything or scheduling a visit." },
    { question: "Why did a call from ACI Intake Service Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"aci-medium-security": {
  id: "f-171",
  name: "ACI Medium Security",
  slug: "aci-medium-security",
  type: "state",
  stateSlug: "rhode-island",
  stateName: "Rhode Island",
  stateAbbr: "RI",
  countySlug: null,
  countyName: "Providence County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "ACI Medium Security: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at ACI Medium Security.",

  description:
    "ACI Medium Security communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Providence County facility.",

  overview: [
    "ACI Medium Security is a state correctional facility in Providence County, Rhode Island, operated by the Rhode Island Department of Corrections. Communication for families follows the standard process used across Rhode Island correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at ACI Medium Security is handled through JPay and Securus. JPay handles electronic messaging, photo sharing, money transfers. Securus handles phone calls, video visits. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "51 West Road, Cranston, RI 02920",
  phone: "(401) 462-3771",

  visitingHours: "In-person and video visiting blocks are 1:15 to 2:45 PM, 4:15 to 6:00 PM, and 6:15 to 8:30 PM, with a video-only block 8:30 to 9:30 AM. There are no visits on Tuesdays. Professional visits run seven days a week, 8:00 AM to 8:30 PM. Schedules vary by housing unit and entrance cutoff times apply.",
  operatedBy: "Rhode Island Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at ACI Medium Security?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at ACI Medium Security?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at ACI Medium Security?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at ACI Medium Security?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at ACI Medium Security?", answer: "Address mail with the person's full name and ID number. All mail is inspected before delivery." },
    { question: "How do I schedule a video visit at ACI Medium Security?", answer: "Video visits are scheduled through Securus. Check the housing unit schedule first, since visiting blocks vary by unit, and note that there are no visits on Tuesdays." },
    { question: "Why does the visiting schedule depend on housing unit at ACI Medium Security?", answer: "Visiting blocks are assigned by housing unit, so two people at the same facility can have different visiting days and times. Confirm the person's housing unit and its visiting block before traveling." },
    { question: "Can attorneys visit at ACI Medium Security?", answer: "Professional visits run seven days a week, 8:00 AM to 8:30 PM. Attorneys should confirm the current procedure with the facility before traveling." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"western-regional-jail": {
  id: "f-172",
  name: "Western Regional Jail",
  slug: "western-regional-jail",
  type: "state",
  stateSlug: "west-virginia",
  stateName: "West Virginia",
  stateAbbr: "WV",
  countySlug: null,
  countyName: "Cabell County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Western Regional Jail: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Western Regional Jail.",

  description:
    "Western Regional Jail communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Cabell County facility.",

  overview: [
    "Western Regional Jail is a state correctional facility in Cabell County, West Virginia, operated by the West Virginia Department of Corrections. Communication for families follows the standard process used across West Virginia correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Western Regional Jail is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "One O'Hanlon Place, Barboursville, WV 25504",
  phone: "(304) 733-6821",

  visitingHours: "Non-contact visits only, and walk-in visitation is not allowed. Call (304) 733-6850 between 9:00 AM and 3:00 PM to schedule. Tuesday and Thursday slots: 8:00 to 8:30, 9:00 to 9:30, 10:00 to 10:30, 2:00 to 2:30, and 3:00 to 3:30. Saturday and Sunday slots: 9:00 to 9:30, 10:00 to 10:30, 3:00 to 3:30, 7:00 to 7:30, and 8:00 to 8:30. No visitation Monday, Wednesday, or Friday.",
  rosterUrl: "https://apps.wv.gov/OIS/OffenderSearch/RJA/Daily",
  operatedBy: "West Virginia Department of Corrections",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Western Regional Jail?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Western Regional Jail?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Western Regional Jail?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Western Regional Jail?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Western Regional Jail?", answer: "Address mail with the person's full name and ID number. All mail is inspected before delivery." },
    { question: "How do I schedule a visit at Western Regional Jail?", answer: "Call (304) 733-6850 between 9:00 AM and 3:00 PM to schedule. Walk-in visitation is not allowed, and there is no visitation on Monday, Wednesday, or Friday." },
    { question: "Why did a call from Western Regional Jail not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What if I cannot find someone in the West Virginia offender search?", answer: "Check the spelling of the name and try again, since bookings take time to appear. Confirm the current facility placement before funding any account, since providers differ by facility." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"sussex-correctional-institution": {
  id: "f-173",
  name: "Sussex Correctional Institution",
  slug: "sussex-correctional-institution",
  type: "state",
  stateSlug: "delaware",
  stateName: "Delaware",
  stateAbbr: "DE",
  countySlug: null,
  countyName: "Sussex County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Sussex Correctional Institution: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Sussex Correctional Institution.",

  description:
    "Sussex Correctional Institution communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Sussex County facility.",

  overview: [
    "Sussex Correctional Institution is a state correctional facility in Sussex County, Delaware, operated by the Delaware Department of Corrections. Communication for families follows the standard process used across Delaware correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Sussex Correctional Institution is handled through JPay and Securus. JPay handles electronic messaging, photo sharing, money transfers. Securus handles phone calls, video visits. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "23203 Dupont Boulevard, Georgetown, DE 19947",
  phone: "302-856-5280",

  operatedBy: "Delaware Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Sussex Correctional Institution?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Sussex Correctional Institution?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Sussex Correctional Institution?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Sussex Correctional Institution?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Sussex Correctional Institution?", answer: "Address mail with the person's full name and ID number. All mail is inspected before delivery." },
    { question: "Why did a call from Sussex Correctional Institution not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What do I need to do before visiting Sussex Correctional Institution?", answer: "Visitors must be approved in advance, so submit the visitor application and wait for approval before traveling. Bring a valid photo ID, and confirm the current schedule, since visiting hours can change." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
      {
        question: "Can I send a care package to someone at Sussex Correctional Institution?",
        answer: "Personal care packages from home are generally not accepted. Inmates buy approved items through commissary using funds in their account. Do not mail food, clothing, or hygiene items. Send letters and add funds through JPay instead.",
      },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"fci-manchester": {
  id: "f-174",
  name: "FCI Manchester",
  slug: "fci-manchester",
  type: "federal",
  stateSlug: "kentucky",
  stateName: "Kentucky",
  stateAbbr: "KY",
  countySlug: null,
  countyName: "Clay County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "FCI Manchester: CorrLinks Messaging and ConnectNetwork",
  seoDescription: "How to contact someone at FCI Manchester. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "FCI Manchester communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Clay County facility.",

  overview: [
    "FCI Manchester is a federal correctional facility in Clay County, Kentucky, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at FCI Manchester is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "805 Fox Hollow Road, Manchester, KY 40962",
  phone: "(606) 598-1900",

  visitingHours: "Friday, Saturday, and Sunday, 8:00 AM to 3:00 PM. Confirm with the facility before traveling, since special housing units have modified schedules.",
  rosterUrl: "https://www.bop.gov/inmateloc/",
  commissary: "Do not mail money to the facility address. BOP funds sent by mail go to the central processing center in Des Moines, Iowa.",
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at FCI Manchester?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at FCI Manchester?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at FCI Manchester?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at FCI Manchester?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at FCI Manchester?", answer: "Address mail with the person's full name and BOP register number. Confirm the person's current unit or camp before mailing, since the facility includes a satellite camp." },
    { question: "Why did a call from FCI Manchester not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your ConnectNetwork account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "How does CorrLinks work at FCI Manchester?", answer: "CorrLinks is the BOP email system. The person inside must invite you, and you must accept the invitation and be approved before you can exchange messages. Messages are reviewed by staff." },
    { question: "Why do I need the BOP register number?", answer: "The BOP register number identifies the person across BOP systems. You need it to fund a ConnectNetwork account, send money, and look someone up in the BOP inmate locator." },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"federal-transfer-center-oklahoma-city": {
  id: "f-175",
  name: "Federal Transfer Center Oklahoma City",
  slug: "federal-transfer-center-oklahoma-city",
  type: "federal",
  stateSlug: "oklahoma",
  stateName: "Oklahoma",
  stateAbbr: "OK",
  countySlug: null,
  countyName: "Oklahoma County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "Federal Transfer Center Oklahoma City: CorrLinks Messaging",
  seoDescription: "How to contact someone at Federal Transfer Center Oklahoma City. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "Federal Transfer Center Oklahoma City communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Oklahoma County facility.",

  overview: [
    "Federal Transfer Center Oklahoma City is a federal correctional facility in Oklahoma County, Oklahoma, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Federal Transfer Center Oklahoma City is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Federal Bureau of Prisons (BOP)",
  address: "7410 S MacArthur Blvd, Oklahoma City, OK 73169",
  phone: "(405) 682-4075",
  commissary: "BOP Trust Fund: send money via MoneyGram, Western Union, or money order to the Federal Bureau of Prisons processing center in Des Moines, Iowa. Do not send money to the facility address.",
  rosterUrl: "https://www.bop.gov/inmateloc/",
  mailingAddress: "INMATE NAME & REGISTER NUMBER\nFTC Oklahoma City\nFederal Transfer Center\nP.O. Box 898801\nOklahoma City, OK 73189",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Federal Transfer Center Oklahoma City?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Federal Transfer Center Oklahoma City?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Federal Transfer Center Oklahoma City?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Federal Transfer Center Oklahoma City?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"oklahoma-county-detention-center": {
  id: "f-176",
  name: "Oklahoma County Detention Center",
  slug: "oklahoma-county-detention-center",
  type: "county",
  stateSlug: "oklahoma",
  stateName: "Oklahoma",
  stateAbbr: "OK",
  countySlug: null,
  countyName: "Oklahoma County",
  securityLevel: "Pretrial",
  hasDetailPage: true,
  seoTitle: "Oklahoma County Detention Center: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Oklahoma County Detention Center.",

  description:
    "Oklahoma County Detention Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Oklahoma County facility.",

  overview: [
    "Oklahoma County Detention Center is a county detention facility in Oklahoma County, Oklahoma, operated by the Oklahoma County Sheriff's Office. Communication for families follows the standard process used across Oklahoma County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Oklahoma County Detention Center is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "201 N Shartel Avenue, Oklahoma City, OK",

  operatedBy: "Oklahoma County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Oklahoma County Detention Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Oklahoma County Detention Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Oklahoma County Detention Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Oklahoma County Detention Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I find or search for an inmate at Oklahoma County Detention Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Oklahoma County, Oklahoma. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Oklahoma County Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Oklahoma County Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Oklahoma County Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Oklahoma County Detention Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"central-utah-correctional-facility": {
  id: "f-177",
  name: "Central Utah Correctional Facility",
  slug: "central-utah-correctional-facility",
  type: "state",
  stateSlug: "utah",
  stateName: "Utah",
  stateAbbr: "UT",
  countySlug: null,
  countyName: "Millard County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Central Utah Correctional Facility: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Central Utah Correctional Facility.",

  description:
    "Central Utah Correctional Facility communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Millard County facility.",

  overview: [
    "Central Utah Correctional Facility is a state correctional facility in Millard County, Utah, operated by the Utah Department of Corrections. Communication for families follows the standard process used across Utah correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Central Utah Correctional Facility is handled through JPay and Securus. JPay handles electronic messaging, photo sharing, money transfers. Securus handles phone calls, video visits. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "255 E. 300 North, Gunnison, UT 84634",

  mailingAddress: "Incarcerated Person Name, Inmate ID #\nCentral Utah Correctional Facility\nPO Box 550\nGunnison, UT 84634",
  operatedBy: "Utah Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Central Utah Correctional Facility?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Central Utah Correctional Facility?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Central Utah Correctional Facility?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Central Utah Correctional Facility?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Central Utah Correctional Facility?", answer: "Address mail with the incarcerated person's name and inmate ID number to Central Utah Correctional Facility, PO Box 550, Gunnison, UT 84634. Mail with glitter, stickers, cash, or other prohibited items will not be delivered." },
    { question: "Why did a call from Central Utah Correctional Facility not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "What do I need to do before visiting Central Utah Correctional Facility?", answer: "Visitors must be approved in advance, so submit the visitor application and wait for approval before traveling. Bring a valid photo ID, and confirm the current schedule, since visiting hours can change." },
    { question: "What happens to communication access after someone is transferred?", answer: "Providers and rules change when someone is transferred to another facility, including after sentencing to state prison. Confirm the new placement before creating accounts or sending funds, since an account that works today may not work after a move." },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"alvin-s-glenn-detention-center": {
  id: "f-178",
  name: "Alvin S. Glenn Detention Center",
  slug: "alvin-s-glenn-detention-center",
  type: "county",
  stateSlug: "south-carolina",
  stateName: "South Carolina",
  stateAbbr: "SC",
  countySlug: null,
  countyName: "Richland County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Alvin S. Glenn Detention Center: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Alvin S. Glenn Detention Center.",

  description:
    "Alvin S. Glenn Detention Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Richland County facility.",

  overview: [
    "Alvin S. Glenn Detention Center is a county detention facility in Richland County, South Carolina, operated by the Richland County Sheriff's Office. Communication for families follows the standard process used across Richland County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Alvin S. Glenn Detention Center is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "201 John Mark Dial Dr., Columbia, SC 29209",
  phone: "(803) 576-3200",

  operatedBy: "Richland County Sheriff's Office",
  visitingHours: "Monday through Friday, 8:15 a.m. to 8:30 p.m.",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Alvin S. Glenn Detention Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Alvin S. Glenn Detention Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Alvin S. Glenn Detention Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Alvin S. Glenn Detention Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
    { question: "How do I send mail to someone at Alvin S. Glenn Detention Center?", answer: "Address mail with the person's full name and booking number. All mail is inspected before delivery." },
    { question: "Why did a call from Alvin S. Glenn Detention Center not go through?", answer: "Calls are outgoing only, so the person inside must place the call. If a call did not connect, confirm that your number is on the approved list and that your Securus account has funds. A block on the receiving number or an unapproved number will stop the call." },
    { question: "How does bond work at Alvin S. Glenn Detention Center?", answer: "Bond amounts and conditions are set by the court, not by the detention center. Confirm the bond amount and the accepted payment methods with the court or the facility before making any payment." },
    { question: "How are visits scheduled at Alvin S. Glenn Detention Center?", answer: "Visits must be scheduled in advance, and visitors must be on the approved list. Confirm the current visiting schedule and rules with the facility before traveling, since hours can change." },
      {
        question: "Is Alvin S. Glenn Detention Center the same as Richland County Detention Center?",
        answer: "Yes. Alvin S. Glenn Detention Center is the Richland County detention center in Columbia, South Carolina. Both names refer to the same facility at 201 John Mark Dial Drive.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"salt-lake-county-metro-jail": {
  id: "f-179",
  name: "Salt Lake County Metro Jail",
  slug: "salt-lake-county-metro-jail",
  type: "county",
  stateSlug: "utah",
  stateName: "Utah",
  stateAbbr: "UT",
  countySlug: null,
  countyName: "Salt Lake County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Salt Lake County Metro Jail: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at Salt Lake County Metro Jail.",

  description:
    "Salt Lake County Metro Jail communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Salt Lake County facility.",

  overview: [
    "Salt Lake County Metro Jail is a county detention facility in Salt Lake County, Utah, operated by the Salt Lake County Sheriff's Office. Communication for families follows the standard process used across Salt Lake County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Salt Lake County Metro Jail is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "3415 S. 900 W., Salt Lake City, UT 84119",
  phone: "(385) 468-8400",

  operatedBy: "Salt Lake County Sheriff's Office",
  fax: "385-468-9904",
  mailingAddress: "Inmate Name, SO Number\nc/o Salt Lake County Metro Jail\n3415 S. 900 W.\nSalt Lake City, UT 84119",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Salt Lake County Metro Jail?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Salt Lake County Metro Jail?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Salt Lake County Metro Jail?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Salt Lake County Metro Jail?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at Salt Lake County Metro Jail?",
        answer: "Address mail to: Inmate Name, SO Number, c/o Salt Lake County Metro Jail, 3415 S. 900 W., Salt Lake City, UT 84119. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I post bail for someone at Salt Lake County Metro Jail?",
        answer: "Bond information is available through the jail's inmate lookup or by calling the facility. Confirm the bond amount and accepted payment methods before going to post bond, since procedures can change.",
      },
      {
        question: "What happens if someone is transferred from Salt Lake County Metro Jail?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
      {
        question: "How do I block calls from Salt Lake County Metro Jail?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
    { question: "What is the Salt Lake County Metro Jail?", answer: "The Salt Lake County Metro Jail is the county's main pretrial holding facility in Salt Lake City, operated by the Salt Lake County Sheriff's Office." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"pennington-county-jail": {
  id: "f-180",
  name: "Pennington County Jail",
  slug: "pennington-county-jail",
  type: "county",
  stateSlug: "south-dakota",
  stateName: "South Dakota",
  stateAbbr: "SD",
  countySlug: null,
  countyName: "Pennington County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Pennington County Jail: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Pennington County Jail.",

  description:
    "Pennington County Jail communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Pennington County facility.",

  overview: [
    "Pennington County Jail is a county detention facility in Pennington County, South Dakota, operated by the Pennington County Sheriff's Office. Communication for families follows the standard process used across Pennington County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Pennington County Jail is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "307 St. Joseph Street, Rapid City, SD 57701",
  phone: "(605) 394-6116",

  operatedBy: "Pennington County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Pennington County Jail?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Pennington County Jail?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Pennington County Jail?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Pennington County Jail?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at Pennington County Jail?",
        answer: "Address mail with the inmate's full name and booking number, care of Pennington County Jail. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I post bail for someone at Pennington County Jail?",
        answer: "Bond information is available through the jail's inmate lookup or by calling the facility. Confirm the bond amount and accepted payment methods before going to post bond, since procedures can change.",
      },
      {
        question: "What happens if someone is transferred from Pennington County Jail?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
      {
        question: "How do I block calls from Pennington County Jail?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"hennepin-county-adult-detention-center": {
  id: "f-181",
  name: "Hennepin County Adult Detention Center",
  slug: "hennepin-county-adult-detention-center",
  type: "county",
  stateSlug: "minnesota",
  stateName: "Minnesota",
  stateAbbr: "MN",
  countySlug: null,
  countyName: "Hennepin County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Hennepin County Adult Detention Center: Phone Calls",
  seoDescription: "How to contact someone at Hennepin County Adult Detention Center.",

  description:
    "Hennepin County Adult Detention Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Hennepin County facility.",

  overview: [
    "Hennepin County Adult Detention Center is a county detention facility in Hennepin County, Minnesota, operated by the Hennepin County Sheriff's Office. Communication for families follows the standard process used across Hennepin County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Hennepin County Adult Detention Center is handled through ConnectNetwork and GettingOut. ConnectNetwork handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "401 South 4th Avenue, Minneapolis, MN",

  operatedBy: "Hennepin County Sheriff's Office",

  providers: [
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Hennepin County Adult Detention Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Hennepin County Adult Detention Center?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Hennepin County Adult Detention Center?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Hennepin County Adult Detention Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at Hennepin County Adult Detention Center?",
        answer: "Address mail with the inmate's full name and booking number, care of Hennepin County Adult Detention Center. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I post bail for someone at Hennepin County Adult Detention Center?",
        answer: "Bond information is available through the jail's inmate lookup or by calling the facility. Confirm the bond amount and accepted payment methods before going to post bond, since procedures can change.",
      },
      {
        question: "What happens if someone is transferred from Hennepin County Adult Detention Center?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
      {
        question: "Can an inmate at Hennepin County Adult Detention Center call me?",
        answer: "Yes, inmates can call numbers on their approved list. You cannot call the facility to reach an inmate. Make sure your number is on the approved list and your phone accepts calls from unknown numbers.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"cumberland-county-jail": {
  id: "f-182",
  name: "Cumberland County Jail",
  slug: "cumberland-county-jail",
  type: "county",
  stateSlug: "maine",
  stateName: "Maine",
  stateAbbr: "ME",
  countySlug: null,
  countyName: "Cumberland County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cumberland County Jail: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Cumberland County Jail.",

  description:
    "Cumberland County Jail communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Cumberland County facility.",

  overview: [
    "Cumberland County Jail is a county detention facility in Cumberland County, Maine, operated by the Cumberland County Sheriff's Office. Communication for families follows the standard process used across Cumberland County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Cumberland County Jail is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "50 County Way, Portland, ME 04102",
  phone: "(207) 774-5939",

  operatedBy: "Cumberland County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Cumberland County Jail?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Cumberland County Jail?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Cumberland County Jail?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Cumberland County Jail?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at Cumberland County Jail?",
        answer: "Address mail with the inmate's full name and booking number, care of Cumberland County Jail. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I post bail for someone at Cumberland County Jail?",
        answer: "Bond information is available through the jail's inmate lookup or by calling the facility. Confirm the bond amount and accepted payment methods before going to post bond, since procedures can change.",
      },
      {
        question: "What happens if someone is transferred from Cumberland County Jail?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
      {
        question: "How do I block calls from Cumberland County Jail?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"lea-county-correctional-facility": {
  id: "f-183",
  name: "Lea County Correctional Facility",
  slug: "lea-county-correctional-facility",
  type: "county",
  stateSlug: "new-mexico",
  stateName: "New Mexico",
  stateAbbr: "NM",
  countySlug: null,
  countyName: "Lea County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Lea County Correctional Facility: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Lea County Correctional Facility.",

  description:
    "Lea County Correctional Facility communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Lea County facility.",

  overview: [
    "Lea County Correctional Facility is a county detention facility in Lea County, New Mexico, operated by the Lea County Sheriff's Office. Communication for families follows the standard process used across Lea County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Lea County Correctional Facility is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "6900 West Millen, Hobbs, NM 88244",
  phone: "(575) 392-4055",

  operatedBy: "Lea County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Lea County Correctional Facility?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Lea County Correctional Facility?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Lea County Correctional Facility?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Lea County Correctional Facility?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at Lea County Correctional Facility?",
        answer: "Address mail with the inmate's full name and booking number, care of Lea County Correctional Facility. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "How do I schedule a video visit at Lea County Correctional Facility?",
        answer: "Video visits are scheduled through Securus. Log into your Securus account, search for the facility, and choose an available time slot. Book ahead, since slots fill up around weekends and holidays.",
      },
      {
        question: "Can I send books to someone at Lea County Correctional Facility?",
        answer: "Books generally must be new and shipped directly from the publisher or an approved retailer. Do not mail books from a personal address. Confirm current rules with the facility before ordering.",
      },
      {
        question: "How do I block calls from Lea County Correctional Facility?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"multnomah-county-detention-center": {
  id: "f-184",
  name: "Multnomah County Detention Center",
  slug: "multnomah-county-detention-center",
  type: "county",
  stateSlug: "oregon",
  stateName: "Oregon",
  stateAbbr: "OR",
  countySlug: null,
  countyName: "Multnomah County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Multnomah County Detention Center: Phone Calls, Messaging",
  seoDescription: "How to contact someone at Multnomah County Detention Center.",

  description:
    "Multnomah County Detention Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Multnomah County facility.",

  overview: [
    "Multnomah County Detention Center is a county detention facility in Multnomah County, Oregon, operated by the Multnomah County Sheriff's Office. Communication for families follows the standard process used across Multnomah County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Multnomah County Detention Center is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "1120 SW Third Avenue, Portland, OR 97204",
  phone: "(503) 988-3689",

  operatedBy: "Multnomah County Sheriff's Office",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Multnomah County Detention Center?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Multnomah County Detention Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Multnomah County Detention Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Multnomah County Detention Center?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I find or search for an inmate at Multnomah County Detention Center?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Multnomah County, Oregon. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Multnomah County Detention Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Multnomah County Detention Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Multnomah County Detention Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Multnomah County Detention Center?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"fci-sheridan": {
  id: "f-185",
  name: "FCI Sheridan",
  slug: "fci-sheridan",
  type: "federal",
  stateSlug: "oregon",
  stateName: "Oregon",
  stateAbbr: "OR",
  countySlug: null,
  countyName: "Polk County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "FCI Sheridan: CorrLinks Messaging and ConnectNetwork Phone",
  seoDescription: "How to contact someone at FCI Sheridan. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "FCI Sheridan communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Polk County facility.",

  overview: [
    "FCI Sheridan is a federal correctional facility in Polk County, Oregon, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at FCI Sheridan is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "27072 Southwest Ballston Road, Sheridan, OR 97378",
  phone: "(503) 843-4442",

  operatedBy: "Federal Bureau of Prisons (BOP)",
  rosterUrl: "https://www.bop.gov/inmateloc/",
  commissary: "Do not send money to the facility address. Mail money orders to the BOP lockbox processing center in Des Moines, Iowa, or deposit online through ConnectNetwork, Western Union Quick Collect, or MoneyGram. Funds land in the inmate Trust Fund (commissary) account.",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at FCI Sheridan?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at FCI Sheridan?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at FCI Sheridan?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at FCI Sheridan?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at FCI Sheridan?",
        answer: "Address mail with the inmate's full name and BOP register number, care of FCI Sheridan. Confirm the correct mailing box for the inmate's unit (FCI, detention center, or satellite camp) on the BOP facility page before mailing. Do not send money to the facility address.",
      },
      {
        question: "Can I email someone at FCI Sheridan?",
        answer: "Federal inmates use CorrLinks (TRULINCS) for email. The inmate must add you to their contact list and you must accept the invitation before you can exchange messages. Messages are monitored.",
      },
      {
        question: "How do I schedule a visit at FCI Sheridan?",
        answer: "Visits are in person at the facility. You must be on the inmate's approved visitor list. Confirm current visiting hours and procedures with the facility before traveling, since schedules can change.",
      },
      {
        question: "Why is my CorrLinks message not going through?",
        answer: "Both sides must be approved: the inmate adds you, and you accept the invitation. If either step is missing, messages will not deliver. Check that you accepted the invite and that you are messaging the correct register number.",
      },
      {
        question: "Can I send a package to someone at FCI Sheridan?",
        answer: "Personal packages are generally not accepted. Books and magazines must come new and directly from the publisher or an approved retailer. Do not mail food, clothing, or hygiene items.",
      },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"chittenden-regional-correctional-facility": {
  id: "f-186",
  name: "Chittenden Regional Correctional Facility",
  slug: "chittenden-regional-correctional-facility",
  type: "state",
  stateSlug: "vermont",
  stateName: "Vermont",
  stateAbbr: "VT",
  countySlug: null,
  countyName: "Chittenden County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "Chittenden Regional Correctional Facility: Phone Calls",
  seoDescription: "How to contact someone at Chittenden Regional Correctional Facility.",

  description:
    "Chittenden Regional Correctional Facility communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Chittenden County facility.",

  overview: [
    "Chittenden Regional Correctional Facility is a state correctional facility in Chittenden County, Vermont, operated by the Vermont Department of Corrections. Communication for families follows the standard process used across Vermont correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Chittenden Regional Correctional Facility is handled through JPay and Securus. JPay handles electronic messaging, photo sharing, money transfers. Securus handles phone calls, video visits. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Vermont Department of Corrections",
  visitingHours: "Visiting hours vary by housing unit: Bravo, Sundays 1:15 p.m. to 3:00 p.m.; Delta and Echo, Sundays 6:45 p.m. to 8:30 p.m.; House I, Saturdays 1:15 p.m. to 3:00 p.m.; House II, Saturdays 6:45 p.m. to 8:30 p.m.; Foxtrot, Sundays 8:15 a.m. to 10:00 a.m. See DOC policy 327 for visiting rules.",
  fax: "(802) 863-7473",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Chittenden Regional Correctional Facility?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Chittenden Regional Correctional Facility?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Chittenden Regional Correctional Facility?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Chittenden Regional Correctional Facility?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at Chittenden Regional Correctional Facility?",
        answer: "Address mail with the inmate's full name and booking number, care of Chittenden Regional Correctional Facility. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "What happens if someone is transferred from Chittenden Regional Correctional Facility?",
        answer: "People moved to another Vermont DOC facility keep the same JPay and Securus accounts in most cases, but confirm the new facility on your account before sending funds. Check the DOC offender locator for the new housing location.",
      },
      {
        question: "How do I block calls from Chittenden Regional Correctional Facility?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why is my JPay message taking so long to arrive?",
        answer: "Messages are reviewed before delivery, which causes delays. Check that you used the correct name and ID number and the right facility. If the message still does not arrive, contact JPay support.",
      },
      {
        question: "How do I schedule a video visit at Chittenden Regional Correctional Facility?",
        answer: "Schedule through your Securus account. Book ahead and confirm the inmate's housing unit schedule, since in-person visiting hours vary by unit.",
      },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"fci-seagoville": {
  id: "f-187",
  name: "FCI Seagoville",
  slug: "fci-seagoville",
  type: "federal",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Dallas County",
  securityLevel: "Low",
  hasDetailPage: true,
  seoTitle: "FCI Seagoville: CorrLinks Messaging and ConnectNetwork",
  seoDescription: "How to contact someone at FCI Seagoville. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "FCI Seagoville communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Dallas County facility.",

  overview: [
    "FCI Seagoville is a federal correctional facility in Dallas County, Texas, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at FCI Seagoville is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Federal Bureau of Prisons (BOP)",
  address: "2113 North Hwy 175, Seagoville, TX 75159",
  commissary: "BOP Trust Fund: send money via MoneyGram, Western Union, or money order to the Federal Bureau of Prisons processing center in Des Moines, Iowa. Do not send money to the facility address.",
  rosterUrl: "https://www.bop.gov/inmateloc/",
  mailingAddress: "INMATE NAME & REGISTER NUMBER\nFCI Seagoville\nFederal Correctional Institution\nP.O. Box 9000\nSeagoville, TX 75159",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at FCI Seagoville?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at FCI Seagoville?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at FCI Seagoville?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at FCI Seagoville?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"south-florida-reception-center": {
  id: "f-188",
  name: "South Florida Reception Center",
  slug: "south-florida-reception-center",
  type: "state",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Dade County",
  securityLevel: "Reception",
  hasDetailPage: true,
  seoTitle: "South Florida Reception Center: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at South Florida Reception Center.",

  description:
    "South Florida Reception Center communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Dade County facility.",

  overview: [
    "South Florida Reception Center is a state correctional facility in Dade County, Florida, operated by the Florida Department of Corrections. Communication for families follows the standard process used across Florida correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at South Florida Reception Center is handled through Securus and JPay. Securus handles phone calls, video visits. JPay handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "14000 NW 41st Street, Doral, FL 33178-3003",
  phone: "(305) 592-9567",

  operatedBy: "Florida Department of Corrections",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at South Florida Reception Center?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at South Florida Reception Center?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at South Florida Reception Center?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at South Florida Reception Center?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at South Florida Reception Center?",
        answer: "Address mail with the inmate's full name and booking number, care of South Florida Reception Center. Include a return address. Mail is inspected before delivery, and contraband items are removed.",
      },
      {
        question: "Why was someone sent to South Florida Reception Center?",
        answer: "Reception centers process and classify new admissions before they are assigned to a permanent facility. Communication access can be limited during intake and classification. Once assigned, check the new facility's provider setup.",
      },
      {
        question: "How do I block calls from South Florida Reception Center?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why is my JPay message taking so long to arrive?",
        answer: "Messages are reviewed before delivery, which causes delays. Check that you used the correct name and ID number and the right facility. If the message still does not arrive, contact JPay support.",
      },
      {
        question: "Can I visit someone at South Florida Reception Center?",
        answer: "Visiting rules at a reception center are stricter than at a regular facility, and visits may be limited during intake. Confirm current visiting rules and the inmate's status with the Florida Department of Corrections before traveling.",
      },
  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"broward-county-jail": {
  id: "f-189",
  name: "Broward County Jail",
  slug: "broward-county-jail",
  type: "county",
  stateSlug: "florida",
  stateName: "Florida",
  stateAbbr: "FL",
  countySlug: null,
  countyName: "Broward County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Broward County Jail: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at Broward County Jail.",

  description:
    "Broward County Jail communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Broward County facility.",

  overview: [
    "Broward County Jail is a county detention facility in Broward County, Florida, operated by the Broward County Sheriff's Office. Communication for families follows the standard process used across Broward County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Broward County Jail is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
    "The Broward Sheriff's Office operates four jails in Broward County; the Main Jail is at 555 SE 1st Ave., Ft. Lauderdale, FL 33301. The jail information desk, (954) 831-5900, can confirm where someone is held.",
  ],

  address: "555 SE 1st Ave., Ft. Lauderdale, FL 33301",
  phone: "(954) 831-5900",

  operatedBy: "Broward County Sheriff's Office",
  rosterUrl: "https://apps.sheriff.org/ArrestSearch/",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Broward County Jail?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Broward County Jail?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Broward County Jail?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Broward County Jail?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"las-colinas-womens-detention-facility": {
  id: "f-190",
  name: "Las Colinas Detention and Reentry Facility",
  slug: "las-colinas-womens-detention-facility",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "San Diego County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Las Colinas Detention and Reentry Facility: Phone Calls",
  seoDescription: "How to contact someone at Las Colinas Detention and Reentry Facility.",

  description:
    "Las Colinas Detention and Reentry Facility communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this San Diego County facility.",

  overview: [
    "Las Colinas Detention and Reentry Facility is a county detention facility in San Diego County, California, operated by the San Diego County Sheriff's Office. Communication for families follows the standard process used across San Diego County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Las Colinas Detention and Reentry Facility is handled through Securus and GettingOut. Securus handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "451 Riverview Parkway, Santee, CA 92071",
  phone: "(619) 409-5000",

  operatedBy: "San Diego County Sheriff's Office",
  mailingAddress: "Inmate full name and booking number\nMail Processing Center\n451 Riverview Pkwy, Bldg C\nSantee, CA 92071",
  visitingHours: "In-person social visits are by reservation: call (619) 409-5000 Wednesday through Sunday, 6:30 a.m. to 6:00 p.m. Inmates are allowed two 30-minute social visits per week. No visits on Tuesdays and Wednesdays. Check in 30 minutes before the scheduled visit time.",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at Las Colinas Detention and Reentry Facility?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Las Colinas Detention and Reentry Facility?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Las Colinas Detention and Reentry Facility?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Las Colinas Detention and Reentry Facility?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at Las Colinas Detention and Reentry Facility?",
        answer: "Address mail with the inmate's full name and booking number to the Mail Processing Center, 451 Riverview Pkwy, Bldg C, Santee, CA 92071. Mail is inspected before delivery.",
      },
      {
        question: "How do I schedule an in-person visit at Las Colinas Detention and Reentry Facility?",
        answer: "Call (619) 409-5000 Wednesday through Sunday, 6:30 a.m. to 6:00 p.m., to reserve a visit. Inmates are allowed two 30-minute social visits per week, with no visits on Tuesdays and Wednesdays. Check in 30 minutes before the scheduled visit time.",
      },
      {
        question: "How do I block calls from Las Colinas Detention and Reentry Facility?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
      {
        question: "Can I send books to someone at Las Colinas Detention and Reentry Facility?",
        answer: "Books or magazines mailed by the public are not accepted. New books or magazines must be mailed directly from the publisher or bookseller, with soft covers and no wire or spiral binding, and no CD-ROMs, DVDs, or other media.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"california-institution-for-men": {
  id: "f-191",
  name: "California Institution for Men",
  slug: "california-institution-for-men",
  type: "state",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "San Bernardino County",
  securityLevel: "Level I/II/III",
  hasDetailPage: true,
  seoTitle: "California Institution for Men: Phone Calls, Messaging and",
  seoDescription: "How to contact someone at California Institution for Men.",

  description:
    "California Institution for Men communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this San Bernardino County facility.",

  overview: [
    "California Institution for Men is a state correctional facility in San Bernardino County, California, operated by the California Department of Corrections. Communication for families follows the standard process used across California correctional facilities: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at California Institution for Men is handled through Securus and JPay. Securus handles phone calls, video visits. JPay handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "14901 Central Avenue, Chino, CA 91710",
  phone: "(909) 597-1821",

  operatedBy: "California Department of Corrections",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "JPay", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "Securus", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "JPay handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "Securus handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at California Institution for Men?", answer: "Create an account with JPay, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at California Institution for Men?", answer: "Phone calls run through Securus. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at California Institution for Men?", answer: "Video visits are available through Securus. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at California Institution for Men?", answer: "Deposits go through JPay. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I find or search for an inmate at California Institution for Men?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for San Bernardino County, California. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at California Institution for Men?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at California Institution for Men?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at California Institution for Men?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at California Institution for Men?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

  ],

  relatedFacilitySlugs: ["san-quentin-state-prison","attica-correctional-facility","pelican-bay-state-prison"],
},

"james-a-musick-facility": {
  id: "f-192",
  name: "James A. Musick Facility",
  slug: "james-a-musick-facility",
  type: "county",
  stateSlug: "california",
  stateName: "California",
  stateAbbr: "CA",
  countySlug: null,
  countyName: "Orange County",
  securityLevel: "Minimum",
  hasDetailPage: true,
  seoTitle: "James A. Musick Facility: Phone Calls, Messaging and Money",
  seoDescription: "How to contact someone at James A. Musick Facility.",

  description:
    "James A. Musick Facility communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Orange County facility.",

  overview: [
    "James A. Musick Facility is a county detention facility in Orange County, California, operated by the Orange County Sheriff's Office. Communication for families follows the standard process used across Orange County jail operations: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at James A. Musick Facility is handled through ConnectNetwork and GettingOut. ConnectNetwork handles phone calls, video visits. GettingOut handles electronic messaging, photo sharing, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred to a state prison after sentencing, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  operatedBy: "Orange County Sheriff's Office",
  mailingAddress: "Inmate name and booking number\nJames A. Musick Facility\n13420 Alton Parkway\nIrvine, CA 92618",
  visitingHours: "In-person and video visiting: Friday through Monday, 8:00 a.m. to 5:00 p.m. Public visiting is limited to four visits per inmate per week, one visit per day. Call the facility visiting information line at (949) 249-5059 to confirm.",

  providers: [
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls, video visits." },
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photos can be attached to messages through the provider." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "GettingOut handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "After sentencing to state prison, communication providers change at the receiving facility.",
  ],

  faq: [
    { question: "How do I message someone at James A. Musick Facility?", answer: "Create an account with GettingOut, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at James A. Musick Facility?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at James A. Musick Facility?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the operating agency's online inmate search to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at James A. Musick Facility?", answer: "Deposits go through GettingOut. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I send mail to someone at James A. Musick Facility?",
        answer: "Address mail with the inmate's name and booking number to James A. Musick Facility, 13420 Alton Parkway, Irvine, CA 92618. Mail is inspected before delivery.",
      },
      {
        question: "How do I schedule a visit at James A. Musick Facility?",
        answer: "Visiting runs Friday through Monday, 8:00 a.m. to 5:00 p.m., with a limit of four visits per inmate per week and one visit per day. Call the facility visiting information line at (949) 249-5059 to confirm before traveling.",
      },
      {
        question: "Can I visit someone at James A. Musick Facility on a weekday?",
        answer: "Public visiting runs Friday through Monday only. There is no public visiting Tuesday through Thursday. Confirm the inmate has not already received a visit that day before traveling.",
      },
      {
        question: "Why is my GettingOut message taking so long to arrive?",
        answer: "Messages are reviewed by facility staff before delivery, which causes delays. Check that you used the correct name and booking number and the right facility. If the message still does not arrive, contact GettingOut support.",
      },
      {
        question: "What do I need to bring to a visit at James A. Musick Facility?",
        answer: "Bring valid photo ID. Leave personal items in your vehicle unless the facility says otherwise. Arrive early enough to check in before your visit time.",
      },
  ],

  relatedFacilitySlugs: ["rikers-island","cook-county-jail","miami-dade-corrections-facility"],
},

"federal-detention-center-houston": {
  id: "f-193",
  name: "Federal Detention Center Houston",
  slug: "federal-detention-center-houston",
  type: "federal",
  stateSlug: "texas",
  stateName: "Texas",
  stateAbbr: "TX",
  countySlug: null,
  countyName: "Harris County",
  securityLevel: "Administrative",
  hasDetailPage: true,
  seoTitle: "Federal Detention Center Houston: CorrLinks Messaging and",
  seoDescription: "How to contact someone at Federal Detention Center Houston. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility.",

  description:
    "Federal Detention Center Houston communication guide. Find messaging, phone, and money transfer options for families staying in touch with someone held at this Harris County facility.",

  overview: [
    "Federal Detention Center Houston is a federal correctional facility in Harris County, Texas, operated by the Federal Bureau of Prisons. Communication for families follows the standard process used across Bureau of Prisons institutions: contact is inmate-initiated, all communications are monitored, and each service is funded through a separate account.",
    "Communication at Federal Detention Center Houston is handled through CorrLinks and ConnectNetwork. CorrLinks handles electronic messaging. ConnectNetwork handles phone calls, video visits, money transfers. Create an account with each provider you plan to use, and be ready with the inmate's full name and ID number when you set up.",
    "Before creating any account or sending funds, confirm your loved one's current facility placement using the appropriate inmate locator. Providers and rules change when someone is transferred, so an account that works today may not be correct after a move. Visiting hours and communication rules can also change with little notice, so check the operating agency's website before relying on any single method.",
  ],

  address: "1200 Texas Avenue, Houston, TX 77002",
  phone: "(713) 221-5400",
  mailingAddress: "INMATE NAME and REGISTER NUMBER, FDC Houston, FEDERAL DETENTION CENTER, P.O. BOX 526255, HOUSTON, TX 77052",
  visitingHours: "Legal visits: Monday through Friday 8:00 a.m. to 8:00 p.m., Saturday through Sunday 8:00 a.m. to 2:00 p.m. Social visiting schedule not verified",
  rosterUrl: "https://www.bop.gov/inmateloc/",
  commissary: "Do NOT send money to an inmate using this facility address. All funds sent through the mail must be addressed to a processing center in Des Moines, Iowa. Applies to all Federal inmates",
  operatedBy: "Federal Bureau of Prisons (BOP)",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Handles messaging." },
    { name: "ConnectNetwork", slug: "connectnetwork", initial: "C", color: "bg-teal-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: true, notes: "Handles phone calls, video visits, money transfers." },
  ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Electronic messaging is reviewed by facility staff before delivery." },
    video: { status: "available", provider: "ConnectNetwork", notes: "Video visits are scheduled in advance through the provider platform." },
    photos: { status: "limited", provider: undefined, notes: "Physical photos by mail only, subject to facility content rules." },
    phone: { status: "available", provider: "ConnectNetwork", notes: "Calls are inmate-initiated. Fund an account so calls can connect." },
    moneyTransfer: { status: "available", provider: "ConnectNetwork", notes: "Deposit funds for commissary and communication through the provider." },
  },

  rules: [
    "CorrLinks handles messaging. Create your account first and add the inmate using their full name and ID number.",
    "ConnectNetwork handles phone calls. Fund an account so inmate-initiated calls can connect.",
    "All communications are monitored and reviewed under the operating agency's policy.",
    "Confirm current facility placement with the inmate locator before creating accounts or sending funds.",
    "Visiting hours and communication rules can change with little notice. Check the operating agency's website first.",
  ],

  faq: [
    { question: "How do I message someone at Federal Detention Center Houston?", answer: "Create an account with CorrLinks, add the inmate by name and ID number, and send your message. Messages are reviewed by staff before delivery, so allow some time for a reply." },
    { question: "How do phone calls work at Federal Detention Center Houston?", answer: "Phone calls run through ConnectNetwork. Set up a prepaid account linked to your phone number so the inmate can call you. All calls are inmate-initiated and subject to the facility's monitored call schedule." },
    { question: "Can I do a video visit with someone at Federal Detention Center Houston?", answer: "Video visits are available through ConnectNetwork. Create an account, look up the facility, and schedule an available time slot in advance." },
    { question: "How do I find out where someone is being held?", answer: "Use the Bureau of Prisons inmate locator at bop.gov/inmateloc to confirm current custody status and facility before setting up any communication account. Providers differ by facility, so verifying placement first avoids funding the wrong platform." },
    { question: "How do I send money to someone at Federal Detention Center Houston?", answer: "Deposits go through ConnectNetwork. Create an account, select the inmate's trust account, and add funds by debit or credit card. Processing usually takes one to three business days." },
      {
        question: "How do I find or search for an inmate at Federal Detention Center Houston?",
        answer: "Use the official inmate search at https://www.bop.gov/inmateloc/. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Federal Detention Center Houston?",
        answer: "Address mail as follows: INMATE NAME and REGISTER NUMBER, FDC Houston, FEDERAL DETENTION CENTER, P.O. BOX 526255, HOUSTON, TX 77052. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "What are the visiting hours at Federal Detention Center Houston?",
        answer: "Legal visits: Monday through Friday 8:00 a.m. to 8:00 p.m., Saturday through Sunday 8:00 a.m. to 2:00 p.m. Social visiting schedule not verified",
      },
      {
        question: "Can I receive incoming calls from an inmate at Federal Detention Center Houston?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Federal Detention Center Houston?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },

  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman","adx-florence","fci-leavenworth"],
},

"cascade-county-regional-correctional-facility": {
  id: "f-194",
  name: "Cascade County Regional Correctional Facility",
  slug: "cascade-county-regional-correctional-facility",
  type: "county",
  stateSlug: "montana",
  stateName: "Montana",
  stateAbbr: "MT",
  countySlug: null,
  countyName: "Cascade County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Cascade County Regional Correctional: Phone Calls and",
  seoDescription: "How to contact someone at Cascade County Regional Correctional Facility in Great Falls MT. Securus handles phone calls.",

  description: "Cascade County Regional Correctional Facility in Great Falls Montana. Find phone calls, messaging, and money transfer options for this Montana county jail.",

  overview: [
    "Cascade County Regional Correctional Facility, also called the Cascade County Detention Facility and the Cascade County Adult Detention Center, is the county detention center in Great Falls, Montana, operated by the Cascade County Sheriff's Office. Sheriff Jesse Slaughter took office January 1st, 2019. The facility is at 3800 Ulm North Frontage Road, Great Falls, MT 59404. The Sheriff's Office phone is 406-454-6820.",
    "All phone, video, and messaging services run through Securus Technologies, per the Sheriff's Office page. For phone billing and access questions, call 800-844-6591, available 24 hours a day. Video Connect and eMessaging are available through Securus, and the Sheriff's page links to securustech.net for both services.",
    "In-person visitation is currently cancelled until further notice due to construction, per the Sheriff's Office page. Confirm the current visit status with the facility before traveling, since the posted notice carries no date. Remote video visits are scheduled through Securus. Directory sources report a 24-hour advance scheduling rule and per-visit fees, which are not stated on the official page, so confirm the current cost and schedule with the facility or Securus before booking.",
    "Personal mail is opened and inspected, then scanned through the Digital Mailing Center to the inmate's tablet, and the original is discarded. Address mail to the inmate by full name at Cascade County Detention Facility, 3800 Ulm North Frontage Road, Great Falls, MT 59404. Mail must be 10 pages or less per envelope, pages no larger than 8.5 by 11 inches, and photos no larger than 5 by 7 inches, with no polaroid photos and no photos of nude persons. Do not send magazines, books, packages, cash, third-party mail, or originals of important documents, which cannot be returned. Include the sender's full name and address.",
    "Add money by mailing a money order addressed to the inmate at the facility address, using the kiosk in the CCSO lobby, or through AccessCorrections.com. Care packages go through Access Securpak at accesscatalog.com. The Sheriff's Office records front counter is open Monday to Friday, 8 a.m. to 5 p.m., excluding holidays.",
  ],

  address: "3800 Ulm N Frontage Road, Great Falls, MT 59404",
  phone: "(406) 454-6820",

  operatedBy: "Cascade County Sheriff's Office",
    mailingAddress: "Cascade County Detention Facility, Inmate Full Name, 3800 Ulm North Frontage Road, Great Falls, MT 59404. Mail is opened, inspected, scanned through the Digital Mailing Center to the inmate's tablet, and the original is discarded. Include the sender's full name and address.",
    visitingHours: "In-person visitation is currently cancelled until further notice due to construction, per the Sheriff's Office page. Confirm the current visit status before traveling. Video Connect is available through Securus.",
    commissary: "Mail a money order addressed to the inmate at the facility address, use the kiosk in the CCSO lobby, or deposit through AccessCorrections.com. Care packages through Access Securpak at accesscatalog.com.",

  providers: [
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: true, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Phone, Video Connect, and eMessaging through Securus Technologies, per the Sheriff's Office page. Billing and access questions: 800-844-6591, 24 hours a day." },
    { name: "AccessCorrections", slug: "accesscorrections", initial: "A", color: "bg-emerald-700", messaging: false, video: false, photos: false, phone: false, moneyTransfer: true, notes: "Deposits through AccessCorrections.com, per the Sheriff's Office page. Care packages through Access Securpak at accesscatalog.com." },
  ],

  communication: {
    messaging: { status: "available", provider: "Securus", notes: "eMessaging available through Securus, per the Sheriff's Office page. Link at securustech.net." },
    video: { status: "available", provider: "Securus", notes: "Video Connect available through Securus, per the Sheriff's Office page. In-person visitation is currently cancelled until further notice due to construction." },
    photos: { status: "limited", notes: "Photos may be sent by mail under the DMC rules: 5x7 inches or smaller, no polaroid photos, no photos of nude persons. Confirm other photo options with the facility." },
    phone: { status: "available", provider: "Securus", notes: "Phone calls through Securus Technologies. Billing and access questions: 800-844-6591, 24 hours a day, per the Sheriff's Office page." },
    moneyTransfer: { status: "available", provider: "AccessCorrections", notes: "Mail a money order addressed to the inmate, use the kiosk in the CCSO lobby, or deposit through AccessCorrections.com, per the Sheriff's Office page. Care packages through Access Securpak at accesscatalog.com." },
  },

  rules: [
    "All calls are monitored and recorded.",
    "Inmates must be on approved contact list.",
    "In-person visitation is currently cancelled until further notice due to construction. Confirm the current visit status before traveling.",
    "Mail is scanned through the Digital Mailing Center to the inmate's tablet and the original is discarded. Do not send originals of important documents or irreplaceable items.",
    "Three-way calling is prohibited.",
    "Follow facility mail rules for all correspondence.",
  ],

  faq: [
    { question: "Which provider handles phone calls at Cascade County Regional Correctional Facility?", answer: "Securus Technologies handles phone calls. Set up an account at securustech.net or call 800-844-6591." },
    { question: "How do I find someone at Cascade County Regional Correctional Facility?", answer: "Contact the Cascade County Sheriff's Office or use the Montana DOC offender search at cor.mt.gov." },
    { question: "How do I send money to someone at Cascade County Regional Correctional Facility?", answer: "Mail a money order addressed to the inmate at 3800 Ulm North Frontage Road, Great Falls, MT 59404, use the kiosk in the CCSO lobby, or deposit through AccessCorrections.com. Care packages go through Access Securpak at accesscatalog.com." },
      {
        question: "How do phone calls work at Cascade County Regional Correctional Facility?",
        answer: "Inmates place outgoing calls through Securus. Set up a Securus account and add funds to accept calls. Inmates cannot receive incoming calls.",
      },
      {
        question: "Can I do a video visit with someone at Cascade County Regional Correctional Facility?",
        answer: "Video Connect is available through Securus, and the Sheriff's page links to securustech.net for it. In-person visitation is currently cancelled until further notice due to construction. Confirm the current video visit cost and schedule with the facility or Securus before booking.",
      },
      {
        question: "How do I send mail to someone at Cascade County Regional Correctional Facility?",
        answer: "Address mail to the inmate by full name at Cascade County Detention Facility, 3800 Ulm North Frontage Road, Great Falls, MT 59404. Mail is opened and inspected, then scanned through the Digital Mailing Center to the inmate's tablet, and the original is discarded. Include the sender's full name and address. Mail must be 10 pages or less per envelope, pages no larger than 8.5 by 11 inches, and photos no larger than 5 by 7 inches.",
      },
      {
        question: "Can I visit an inmate in person at Cascade County Regional Correctional Facility?",
        answer: "No, not currently. The Sheriff's Office page states that due to construction, inmate in-person visitation is cancelled until further notice. Confirm the current visit status with the facility before traveling. Video Connect is available through Securus.",
      },
      {
        question: "How do I block calls from Cascade County Regional Correctional Facility?",
        answer: "You can decline individual calls, or contact Securus to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Securus support for a full block.",
      },
      {
        question: "What happens if someone is transferred from Cascade County Regional Correctional Facility?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
      {
        question: "Can someone at Cascade County Regional Correctional Facility call me?",
        answer: "Yes, if your number is on their approved call list and you have a funded Securus account. You cannot call the facility to reach an inmate.",
      },
      {
        question: "Why did a call from Cascade County Regional Correctional Facility not go through?",
        answer: "Common causes: no funds in the Securus account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
  ],

  relatedFacilitySlugs: ["montana-state-prison", "yellowstone-county-detention-facility", "missoula-county-detention-facility"],
},

"fci-talladega": {
  id: "f-195",
  name: "FCI Talladega",
  slug: "fci-talladega",
  type: "federal",
  stateSlug: "alabama",
  stateName: "Alabama",
  stateAbbr: "AL",
  countySlug: null,
  countyName: "Talladega County",
  securityLevel: "Medium",
  hasDetailPage: true,
  seoTitle: "FCI Talladega: CorrLinks Messaging and BOP Phone Calls",
  seoDescription: "How to contact someone at FCI Talladega in Alabama. CorrLinks for messaging. BOP phone system for calls, paid from the inmate trust fund.",

  description: "FCI Talladega is a federal correctional institution in Talladega Alabama. CorrLinks for messaging and the BOP phone system for calls serve this federal BOP facility.",

  overview: [
    "FCI Talladega is a medium-security federal prison for men in Talladega, Alabama, operated by the Federal Bureau of Prisons. A satellite camp sits beside it. Do not confuse it with FCI Tallahassee in Florida, or with Talladega County Jail, which is a county facility.",
    "Visiting runs 8:30 a.m. to 3:00 p.m. on Saturdays, Sundays, and federal holidays, at the FCI and the camp alike, per the institution's visiting supplement TDG 5267.09B dated August 15, 2025. Monday visiting is gone; an older handbook that lists Monday is out of date. You must be on the inmate's approved visitor list. Confirm current hours with the facility before traveling.",
    "Phone calls are placed by the inmate from facility phones; you cannot call in. Calls are paid from the inmate's trust fund account. Do not set up a ConnectNetwork or AdvancePay account for BOP calls; those products are not how BOP phone calls work.",
    "Email runs on TRULINCS, and families reach it through CorrLinks. Only the person inside can start it: they add you as a contact, staff approves, and CorrLinks emails you an invitation to create a free account. The invitation is valid for 10 days; if it expires, the inmate must re-add the contact. Messages are monitored.",
    "Mail must use the right address for the right unit. For the FCI: Inmate Name and Register Number, FCI Talladega, Federal Correctional Institution, PMB 1000, Talladega, AL 35160. For the camp: Inmate Name and Register Number, FCI Talladega, Federal Correctional Institution, Satellite Camp, P.O. Box 2000, Talladega, AL 35160. PMB is not a typo; do not write P.O. Box 1000 for the FCI. Mail without a register number is returned. Never put money in a letter; the mail room no longer accepts funds. Books, magazines, and newspapers at the FCI must come directly from a publisher or bookstore.",
    "Send money through the BOP's Des Moines lockbox or a wire service, never to Talladega itself. Mail a postal money order or cashier's check to: Federal Bureau of Prisons, Committed Name, Eight-Digit Register Number, P.O. Box 474701, Des Moines, IA 50947-0001. Or use Western Union Quick Collect with code city FBOP, DC, or MoneyGram ExpressPayment with receive code 7932 and company name Federal Bureau of Prisons, Washington, DC. For MoneyGram, the account number is the eight-digit register number immediately followed by the inmate's last name. Send nothing but the instrument in the lockbox envelope.",
  ],

  address: "565 East Renfroe Road, Talladega, AL 35160",
  phone: "(256) 315-4100",

  operatedBy: "Federal Bureau of Prisons (BOP)",
  mailingAddress: "INMATE NAME and REGISTER NUMBER\nFCI Talladega\nFEDERAL CORRECTIONAL INSTITUTION\nP.M.B 1000\nTALLADEGA, AL 35160\n(Satellite camp mail uses P.O. Box 2000, Talladega, AL 35160.)",
  visitingHours: "Visiting is 8:30 a.m. to 3:00 p.m. on Saturdays, Sundays, and federal holidays, per the facility visiting supplement. Confirm current hours with the facility before visiting.",
  rosterUrl: "https://www.bop.gov/inmateloc/",
  commissary: "Do not send money to the facility address. Mail a postal money order or cashier's check to the BOP lockbox (PO Box 474701, Des Moines, IA 50947-0001), or use Western Union Quick Collect (code city FBOP, DC) or MoneyGram ExpressPayment (receive code 7932). Funds land in the inmate Trust Fund (commissary) account.",

  providers: [
    { name: "CorrLinks", slug: "corrlinks", initial: "C", color: "bg-emerald-700", messaging: true, video: false, photos: false, phone: false, moneyTransfer: false, notes: "Official federal BOP messaging platform. Inmate must send invitation first." },
      ],

  communication: {
    messaging: { status: "available", provider: "CorrLinks", notes: "Federal BOP email through CorrLinks (TRULINCS). The inmate must add you as a contact and you must accept the invitation. Invitation valid 10 days." },
    video: { status: "unavailable", provider: undefined, notes: "Video visitation not available at federal facilities through outside providers." },
    photos: { status: "limited", provider: "CorrLinks", notes: "Contact facility for photo policy." },
    phone: { status: "available", provider: "BOP", notes: "Phone calls are placed by the inmate from facility phones; you cannot call in. Calls are paid from the inmate's trust fund account. Do not set up a ConnectNetwork or AdvancePay account for BOP calls." },
    moneyTransfer: { status: "available", provider: "BOP Trust Fund", notes: "Do not send money to the facility address. Mail a postal money order or cashier's check to the BOP lockbox in Des Moines, Iowa (PO Box 474701, Des Moines, IA 50947-0001), or use Western Union Quick Collect (code city FBOP, DC) or MoneyGram ExpressPayment (receive code 7932). Funds land in the inmate Trust Fund account." },
  },

  rules: [
    "All non-legal calls are monitored and recorded.",
    "Inmate must send CorrLinks invitation before messaging can begin.",
    "Phone calls are inmate-initiated only.",
    "Do not set up a ConnectNetwork or AdvancePay account for BOP calls; BOP phone calls are paid from the inmate's trust fund account.",
    "Three-way calling is prohibited.",
    "Follow BOP mail rules for all correspondence.",
  ],

  faq: [
    { question: "Which provider handles messaging at FCI Talladega?", answer: "CorrLinks is the only approved messaging platform for all federal Bureau of Prisons facilities including FCI Talladega. The inmate must send you an invitation first from a TRULINCS terminal." },
    { question: "Which provider handles phone calls at FCI Talladega?", answer: "BOP phone calls are placed by the inmate from facility phones and paid from the inmate's trust fund account. Do not set up a ConnectNetwork or AdvancePay account for BOP calls. To fund calls, deposit money into the inmate's trust fund account through the Des Moines lockbox, Western Union (code city FBOP, DC), or MoneyGram (receive code 7932)." },
    { question: "How do I find someone at FCI Talladega?", answer: "Use the Bureau of Prisons inmate locator at bop.gov. Search by name to confirm the current facility and register number." },
      {
        question: "How do I send mail to someone at FCI Talladega?",
        answer: "Address mail with the inmate's name and register number to FCI Talladega, Federal Correctional Institution, P.M.B 1000, Talladega, AL 35160. Satellite camp mail uses P.O. Box 2000, Talladega, AL 35160. PMB is not a typo; do not write P.O. Box 1000 for the FCI. Do not send money to the facility address.",
      },
      {
        question: "How do I schedule a visit at FCI Talladega?",
        answer: "You must be on the inmate's approved visitor list. Visiting runs 8:30 a.m. to 3:00 p.m. on Saturdays, Sundays, and federal holidays, per visiting supplement TDG 5267.09B (August 15, 2025). Monday visiting is gone; an older handbook listing Monday is out of date. Confirm current hours with the facility before traveling.",
      },
      {
        question: "Can I email someone at FCI Talladega?",
        answer: "Federal inmates use CorrLinks (TRULINCS) for email. The inmate must add you to their contact list and you must accept the invitation before you can exchange messages. The invitation is valid for 10 days; if it expires, the inmate must re-add the contact. Messages are monitored.",
      },
      {
        question: "Why is my CorrLinks message not going through?",
        answer: "Both sides must be approved: the inmate adds you, and you accept the invitation. If either step is missing, messages will not deliver. Check that you accepted the invite and that you are messaging the correct register number. If the invitation expired (valid 10 days), the inmate must re-add the contact. If you accidentally blocked the inmate, the inmate must ask the Trust Fund Office to remove the block.",
      },
      {
        question: "Can I send a package to someone at FCI Talladega?",
        answer: "Personal packages are generally not accepted. Books and magazines must come new and directly from the publisher or an approved retailer. Do not mail food, clothing, or hygiene items.",
      },
      {
        question: "How do I send money to someone at FCI Talladega?",
        answer: "Do not send money to the facility address. Mail a postal money order or cashier's check to the BOP lockbox: Federal Bureau of Prisons, Committed Name, Eight-Digit Register Number, P.O. Box 474701, Des Moines, IA 50947-0001. Or use Western Union Quick Collect (code city FBOP, DC) or MoneyGram ExpressPayment (receive code 7932).",
      },
      {
        question: "Is FCI Talladega the same as FCI Tallahassee?",
        answer: "No. FCI Tallahassee is a separate federal facility in Florida. FCI Talladega is in Talladega, Alabama. Do not use Tallahassee's mail address, phone number, or visiting hours for Talladega.",
      },
      {
        question: "Can someone at FCI Talladega call me collect?",
        answer: "Federal inmates place outgoing calls through the BOP phone system using their Trust Fund account. You cannot call the facility to reach an inmate. Make sure the inmate has your number on their approved list.",
      },
  ],

  relatedFacilitySlugs: ["fci-cumberland", "fci-hazelton", "fci-manchester"],
},

"yellowstone-county-detention-facility": {
  id: "f-196",
  name: "Yellowstone County Detention Facility",
  slug: "yellowstone-county-detention-facility",
  type: "county",
  stateSlug: "montana",
  stateName: "Montana",
  stateAbbr: "MT",
  countySlug: null,
  countyName: "Yellowstone County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Yellowstone County Detention Facility: Phone Calls and",
  seoDescription: "How to contact someone at Yellowstone County Detention Facility in Billings MT. NCIC handles phone calls, video visits, and messaging. Find money transfer options.",

  description: "Yellowstone County Detention Facility in Billings Montana. Find phone calls, messaging, and money transfer options for this Montana county jail.",

  overview: [
    "Yellowstone County Detention Facility is the county jail in Billings, Montana, operated by the Yellowstone County Sheriff's Office. The facility is at 3165 King Ave E, Billings, MT 59101. For bond questions, call Facility Booking at 406-256-6881. For inmate service requests, contact the Sheriff's Office Civil Division at 406-256-2959.",
    "All communication services at the facility run through NCIC, not Securus. Set up a COMMUNICATIONS account at ncic.com or by calling 1-800-943-2189 to receive phone calls and participate in video visits and messaging. Do not set up a Securus or AdvancePay account for this facility; those products are not how communication works here. The official county pages name no phone, video, or messaging rates, so confirm the current cost with NCIC before funding an account.",
    "All visits are electronic. Use a smartphone, a computer with a webcam, or a kiosk in the facility lobby. Create an account and schedule a visit at Videovisit.ncic.com. Every inmate gets two free video visits a week, and additional visits may be purchased by the inmate or friends and family. In-person visits will not happen in the near future due to staffing and security issues. Visits and inmate schedules may be canceled due to facility operations and emergencies.",
    "Money uses two separate accounts. The TRUST account, sometimes called the commissary account, pays for snacks, hygiene items, and similar purchases. Fund it at team3.Inmatecanteen.com, at the Blue Kiosk in the facility lobby, or by mailing a money order (no cash or checks) made out to the inmate's full name to: Inmate's Full Name, Inmate's Jacket Number, ATTENTION MAIL OFFICER, 3165 King Ave E, Billings, MT 59101. Mail without 'Attention Mail Officer' in the address will be returned to sender. The COMMUNICATIONS account pays for phone time, extra video visits, and electronic messages. Inmates may move money from TRUST to COMMUNICATIONS, but not the other way. Fees apply.",
    "Directory sources report that personal mail goes to a scanning address, not the facility: Inmate's Full Name and Jacket Number, Yellowstone County Detention Facility, PO Box 591, Longview, TX 75606. No official Yellowstone County page found states this address, so confirm the current mail address and format with the facility before sending anything. Letters may be mailed, and personal checks and medications are not accepted. No messages are passed to inmates unless they are verifiable emergencies, such as a death in the family or emergency surgery.",
  ],

  address: "3165 King Avenue East, Billings, MT 59101",
  phone: "(406) 256-6881",

  operatedBy: "Yellowstone County Sheriff's Office",
    mailingAddress: "Personal mail address is not stated on official county pages. Directory sources report: Inmate's Full Name and Jacket Number, Yellowstone County Detention Facility, PO Box 591, Longview, TX 75606. Confirm before sending. Money orders go to the facility: Inmate's Full Name, Inmate's Jacket Number, ATTENTION MAIL OFFICER, 3165 King Ave E, Billings, MT 59101.",
    visitingHours: "All visits are electronic only. Schedule at Videovisit.ncic.com. Every inmate gets two free video visits a week. In-person visits will not happen in the near future due to staffing and security issues.",
    commissary: "TRUST (commissary) account: team3.Inmatecanteen.com, Blue Kiosk in the facility lobby, or mailed money order (no cash or checks) to ATTENTION MAIL OFFICER, 3165 King Ave E, Billings, MT 59101. COMMUNICATIONS account (phone/video/messages): ncic.com or 1-800-943-2189. Fees apply. Transfers TRUST to COMMUNICATIONS only.",
    bailInfo: "Fines and bonds are handled at the courts during regular business hours; after hours at the Detention Facility. Bond inquiries: Facility Booking, 406-256-6881.",

  providers: [
    { name: "NCIC", slug: "ncic", initial: "N", color: "bg-rose-600", messaging: true, video: true, photos: false, phone: true, moneyTransfer: true, notes: "All communication services run through NCIC, per the county FAQ page. COMMUNICATIONS account at ncic.com or 1-800-943-2189. Funds phone time, extra video visits, and messaging." },
    { name: "InmateCanteen", slug: "inmatecanteen", initial: "I", color: "bg-amber-700", messaging: false, video: false, photos: false, phone: false, moneyTransfer: true, notes: "TRUST (commissary) account funding at team3.Inmatecanteen.com or the Blue Kiosk in the facility lobby, per the county FAQ page. Mailed money orders go to ATTENTION MAIL OFFICER." },
  ],

  communication: {
    messaging: { status: "available", provider: "NCIC", notes: "Messaging through NCIC. Set up a COMMUNICATIONS account at ncic.com or 1-800-943-2189, per the county FAQ page." },
    video: { status: "available", provider: "NCIC", notes: "All visits are electronic through NCIC. Schedule at Videovisit.ncic.com. Two free video visits per week. In-person visits will not happen in the near future." },
    photos: { status: "limited", notes: "Photo policy is not stated on the official county pages. Confirm with the facility." },
    phone: { status: "available", provider: "NCIC", notes: "Phone calls through NCIC. Set up a COMMUNICATIONS account at ncic.com or 1-800-943-2189, per the county FAQ page." },
    moneyTransfer: { status: "available", provider: "InmateCanteen", notes: "Two accounts: TRUST (commissary) via InmateCanteen, Blue Kiosk, or mailed money order to ATTENTION MAIL OFFICER; COMMUNICATIONS (phone/video/messages) via ncic.com or 1-800-943-2189. Fees apply. Transfers TRUST to COMMUNICATIONS only." },
  },

  rules: [
    "All calls are monitored and recorded.",
    "Inmates must be on approved contact list.",
    "All visits are electronic through NCIC. In-person visits will not happen in the near future.",
    "Money uses two accounts: TRUST for commissary, COMMUNICATIONS for phone, video, and messages. Transfers go TRUST to COMMUNICATIONS only.",
    "Mailed money orders must say ATTENTION MAIL OFFICER or they will be returned to sender.",
    "Three-way calling is prohibited.",
    "Follow facility mail rules for all correspondence.",
  ],

  faq: [
    { question: "Which provider handles phone calls at Yellowstone County Detention Facility?", answer: "NCIC handles phone calls. Set up a COMMUNICATIONS account at ncic.com or by calling 1-800-943-2189. Do not set up a Securus or AdvancePay account for this facility." },
    { question: "How do I find someone at Yellowstone County Detention Facility?", answer: "Contact the Yellowstone County Sheriff's Office in Billings Montana directly." },
    { question: "How do I send money to someone at Yellowstone County Detention Facility?", answer: "It depends on which account you are funding. For the TRUST (commissary) account, use team3.Inmatecanteen.com, the Blue Kiosk in the facility lobby, or mail a money order (no cash or checks) made out to the inmate's full name to: Inmate's Full Name, Inmate's Jacket Number, ATTENTION MAIL OFFICER, 3165 King Ave E, Billings, MT 59101. Mail without 'Attention Mail Officer' will be returned. For the COMMUNICATIONS account, fund it at ncic.com or by calling 1-800-943-2189. Fees apply." },
      {
        question: "How do phone calls work at Yellowstone County Detention Facility?",
        answer: "Inmates place outgoing calls through NCIC. Set up a COMMUNICATIONS account at ncic.com or 1-800-943-2189 and add funds to accept calls. Inmates cannot receive incoming calls.",
      },
      {
        question: "Can I do a video visit with someone at Yellowstone County Detention Facility?",
        answer: "Create an NCIC account and schedule at Videovisit.ncic.com. Visits are electronic only, through a smartphone, a computer with a webcam, or a kiosk in the facility lobby. Every inmate gets two free video visits a week, and additional visits may be purchased. In-person visits will not happen in the near future.",
      },
      {
        question: "How do I send mail to someone at Yellowstone County Detention Facility?",
        answer: "Directory sources report personal mail goes to: Inmate's Full Name and Jacket Number, Yellowstone County Detention Facility, PO Box 591, Longview, TX 75606. No official Yellowstone County page found states this address, so confirm the current mail address and format with the facility before sending anything. Letters may be mailed; personal checks and medications are not accepted.",
      },
      {
        question: "How do I block calls from Yellowstone County Detention Facility?",
        answer: "You can decline individual calls, or contact NCIC to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask NCIC support for a full block.",
      },
      {
        question: "What happens if someone is transferred from Yellowstone County Detention Facility?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
      {
        question: "Can someone at Yellowstone County Detention Facility call me?",
        answer: "Yes, if your number is on their approved call list and you have a funded NCIC COMMUNICATIONS account. You cannot call the facility to reach an inmate.",
      },
      {
        question: "Why did a call from Yellowstone County Detention Facility not go through?",
        answer: "Common causes: no funds in the NCIC COMMUNICATIONS account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
      {
        question: "Does Yellowstone County Detention Facility use Securus or NCIC?",
        answer: "NCIC. All communication services run through NCIC, per the Yellowstone County Sheriff's Office FAQ page. Set up a COMMUNICATIONS account at ncic.com or by calling 1-800-943-2189. Do not set up a Securus or AdvancePay account for this facility.",
      },
      {
        question: "What is the difference between a TRUST account and a COMMUNICATIONS account at Yellowstone County Detention Facility?",
        answer: "The TRUST account, sometimes called the commissary account, pays for snacks, hygiene items, and similar purchases. The COMMUNICATIONS account pays for phone time, extra video visits, and electronic messages. Inmates may move money from TRUST to COMMUNICATIONS, but not the other way. Fees apply.",
      },
  ],

  relatedFacilitySlugs: ["montana-state-prison", "cascade-county-regional-correctional-facility", "missoula-county-detention-facility"],
},

"fairfax-county-adult-detention-center": {
  id: "f-197",
  name: "Fairfax County Adult Detention Center",
  slug: "fairfax-county-adult-detention-center",
  type: "county",
  stateSlug: "virginia",
  stateName: "Virginia",
  stateAbbr: "VA",
  countySlug: null,
  countyName: "Fairfax County",
  securityLevel: "Pretrial / Sentenced",
  hasDetailPage: true,
  seoTitle: "Fairfax County Adult Detention Center: Phone Calls and",
  seoDescription: "How to contact someone at Fairfax County Adult Detention Center in Fairfax VA. Smart Communications handles phone calls, video visits, and messaging.",

  description: "Fairfax County Adult Detention Center in Fairfax Virginia. Find phone calls, messaging, and money transfer options for this Virginia county jail.",

  overview: [
    "Fairfax County Adult Detention Center, usually called the ADC, is the county jail in Fairfax, Virginia, operated by the Fairfax County Sheriff's Office. It sits at 10520 Judicial Drive, Fairfax, VA 22030, in the Public Safety Center next to the Courthouse, just west of Chain Bridge Road. The public parking garage is a short walk away at 10550 Page Avenue. The main phone number is 703-246-2100.",
    "All communication services run through Smart Communications. Inmates use tablets or kiosks to visit by video, make and receive phone calls, send and receive text messages, read mail, and view pictures from loved ones. The Sheriff's Office contracted with Smart Communications in 2021, and video visiting for the general population began in August 2021. On-site kiosks for family and friends in the ADC lobby are free of charge.",
    "Phone calls use Smart Communications. Families can set up a Pre-paid Collect, PIN Debit, or Direct Bill account for local, in-state, out-of-state, and international calls by signing up at smartinmate.com. Customer Care is at 1-888-253-5178 or 1-727-349-1561. Inmates may not receive incoming phone calls; only verified emergency messages are delivered to them. After classification, inmates may make free local official calls to their attorneys, probation and parole officers, bonding agent, and some community agencies.",
    "Video visits are scheduled and paid for through Smart Communications. Authorized inmates get one video visit per day in 15 or 30 minute increments. Remote video visiting costs 10 cents per minute, and on-site video visiting using a lobby kiosk is free. Visits must be scheduled at least 24 hours in advance, or the inmate may not receive notification. Visit windows are 9 to 11 a.m., 12:30 to 4 p.m., 5 to 6 p.m., and 8 to 10 p.m., with lobby kiosks unavailable from 8 to 10 p.m. Direct video-visit questions to the vendor, not the Sheriff's Office.",
    "Personal mail does not go to the facility. Since August 23, 2021, personal mail is no longer accepted at the ADC, and it must go to Smart Communications/FXCOADC, Inmate Name and Inmate Number, P.O. 9128, Seminole, FL 33775-9128. Mail must carry a full return address with the sender's first and last name plus the full correct inmate name and number. It is opened, scanned, screened by the ADC mail room, and forwarded electronically. Bound or book-like materials are rejected, and books sent through regular mail will not be scanned or delivered. Photographs go to the same Smart address, limited to 10 per mailing. Professional and legal mail still goes directly to the ADC, labeled Legal Mail, from the attorney of record, a Commonwealth's attorney, or the courts. Official documents and original transactional documents go to the ADC Property Officer at 10520 Judicial Drive.",
    "Money goes into the inmate's account three ways. The lobby kiosk accepts cash and credit cards. The money safe in the lobby accepts money orders and cashier checks (no personal checks or cash) made out to the inmate's full name, with the inmate number plus the sender's name and address, with no envelope and no correspondence. Online credit card payments go through smartinmate.com, where the vendor charges a fee. The inmate gets access to deposited money within 72 hours. Inmates are charged $2 per day of incarceration to offset housing cost. Seven days after release, the Sheriff's Office mails a check for any remaining balance. Gift packages are ordered through Aramark at 1-888-439-5020 or icaregifts.com, and no gifts or food may be brought into the ADC.",
  ],

  address: "10520 Judicial Drive, Fairfax, VA 22030",
  phone: "(703) 246-2100",

  operatedBy: "Fairfax County Sheriff's Office",
    mailingAddress: "Personal mail: Smart Communications/FXCOADC, Inmate Name/Inmate Number, P.O. 9128, Seminole, FL 33775-9128. Personal mail is NOT accepted at the ADC. Legal mail goes directly to the ADC labeled Legal Mail. Official documents go to the ADC Property Officer, 10520 Judicial Drive, Fairfax, VA 22030.",
    commissary: "Deposits: lobby kiosk (cash or credit cards), lobby money safe (money orders or cashier checks, no personal checks or cash), or online credit card at smartinmate.com (vendor fee). Access within 72 hours. $2/day housing charge. Gift packages via Aramark at 1-888-439-5020 or icaregifts.com.",
  visitingHours: "Video visits only, scheduled through Smart Communications at least 24 hours in advance. Visit windows: 9-11 a.m., 12:30-4 p.m., 5-6 p.m., and 8-10 p.m. (lobby kiosks unavailable 8-10 p.m.). Remote video visits cost 10 cents per minute; on-site video visits using a lobby kiosk are free. One video visit per day per inmate, in 15- or 30-minute increments.",

  providers: [
    { name: "Smart Communications", slug: "smartinmate", initial: "S", color: "bg-cyan-600", messaging: true, video: true, photos: true, phone: true, moneyTransfer: true, notes: "Phone calls, video visits, and messaging through Smart Communications (SmartInmate), per the Sheriff's Office pages. Deposits via lobby kiosk, lobby money safe, or smartinmate.com." },
  ],

  communication: {
    messaging: { status: "available", provider: "Smart Communications", notes: "Text messaging through Smart Communications. Inmates use tablets or kiosks to send and receive text messages and view pictures, per the Sheriff's Office pages. Sign up at smartinmate.com." },
    video: { status: "available", provider: "Smart Communications", notes: "Video visits through Smart Communications. One per day, 15 or 30 minute increments. Remote 10 cents per minute; on-site lobby kiosk free. Schedule at least 24 hours in advance. Windows 9-11 a.m., 12:30-4 p.m., 5-6 p.m., 8-10 p.m. (lobby kiosks unavailable 8-10 p.m.)." },
    photos: { status: "limited", notes: "Photos may be sent by mail to the Smart Communications address, limited to 10 per mailing. No obscenity, explicit sexual material, or depictions of violence/nudity. Confirm other photo options with the facility." },
    phone: { status: "available", provider: "Smart Communications", notes: "Phone calls through Smart Communications. Pre-paid Collect, PIN Debit, or Direct Bill accounts at smartinmate.com. Customer Care 1-888-253-5178 or 1-727-349-1561. Inmates may not receive incoming calls." },
    moneyTransfer: { status: "available", provider: "Smart Communications", notes: "Lobby kiosk (cash or credit cards), lobby money safe (money orders or cashier checks, no personal checks or cash), or online credit card at smartinmate.com (vendor fee). Access within 72 hours. $2/day housing charge." },
  },

  rules: [
    "All calls are monitored and recorded.",
    "Inmates must be on approved contact list.",
    "Video visits must be scheduled at least 24 hours in advance through Smart Communications. Direct video-visit questions to the vendor, not the Sheriff's Office.",
    "Personal mail goes to Smart Communications in Seminole, FL, not to the facility. Legal mail goes directly to the ADC labeled Legal Mail.",
    "Inmates may not receive incoming phone calls; only verified emergency messages are delivered.",
    "Three-way calling is prohibited.",
    "Follow facility mail rules for all correspondence.",
  ],

  faq: [
    { question: "Which provider handles phone calls at Fairfax County Adult Detention Center?", answer: "Smart Communications handles phone calls. Set up a Pre-paid Collect, PIN Debit, or Direct Bill account at smartinmate.com. Customer Care: 1-888-253-5178 or 1-727-349-1561. Inmates may not receive incoming phone calls." },
    { question: "How do I find someone at Fairfax County Adult Detention Center?", answer: "Contact the Fairfax County Sheriff's Office directly or use the VADOC inmate search at vadoc.virginia.gov." },
    { question: "How do I send money to someone at Fairfax County Adult Detention Center?", answer: "Use the lobby kiosk (cash or credit cards), the lobby money safe (money orders or cashier checks made out to the inmate's full name, with inmate number plus your name and address, no envelope, no correspondence), or an online credit card payment at smartinmate.com (the vendor charges a fee). The inmate gets access to deposited money within 72 hours. Inmates are charged $2 per day to offset housing cost." },
      {
        question: "How do I schedule a video visit at Fairfax County Adult Detention Center?",
        answer: "Schedule and pay through Smart Communications at smartinmate.com, at least 24 hours in advance. Authorized inmates get one video visit per day in 15 or 30 minute increments. Remote visits cost 10 cents per minute; on-site lobby kiosk visits are free. Visit windows are 9-11 a.m., 12:30-4 p.m., 5-6 p.m., and 8-10 p.m., with lobby kiosks unavailable from 8-10 p.m. Direct questions to the vendor, not the Sheriff's Office.",
      },
      {
        question: "Can I visit someone in person at Fairfax County Adult Detention Center?",
        answer: "No. Visits are conducted by video only. You can use a free lobby kiosk at the Adult Detention Center or join remotely from home through Smart Communications.",
      },
      {
        question: "How do I send mail to someone at Fairfax County Adult Detention Center?",
        answer: "Send personal mail to: Smart Communications/FXCOADC, Inmate Name and Inmate Number, P.O. 9128, Seminole, FL 33775-9128. Include a full return address with your first and last name plus the full correct inmate name and number. Mail is opened, scanned, screened, and forwarded electronically. Do not send personal mail to the facility street address; it has not been accepted there since August 23, 2021. Send legal mail directly to the ADC labeled Legal Mail, and official documents to the ADC Property Officer at 10520 Judicial Drive, Fairfax, VA 22030.",
      },
      {
        question: "How do I block calls from Fairfax County Adult Detention Center?",
        answer: "You can decline individual calls, or contact Smart Communications to block your number. Declining a call does not remove you from the approved list. To stop calls entirely, ask Smart Communications support for a full block.",
      },
      {
        question: "What happens if someone is transferred from Fairfax County Adult Detention Center?",
        answer: "People sentenced to longer terms are transferred to a state or federal facility, where the provider setup is different. Check the new facility's communication options right after a transfer.",
      },
      {
        question: "Why did a call from Fairfax County Adult Detention Center not go through?",
        answer: "Common causes: no funds in the SmartInmate account, your number is not on the approved list, or your phone blocked the call. Check your account balance, ask the inmate to confirm your number is listed, and check your phone's call blocking settings.",
      },
  ],

  relatedFacilitySlugs: ["red-onion-state-prison", "sussex-i-state-prison", "northern-state-correctional-facility"],
},

}
