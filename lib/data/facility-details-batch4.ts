import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS — Batch 4 (40 facilities added to replace placeholder redirects)
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
  seoTitle: "FCI Cumberland: CorrLinks Messaging and ConnectNetwork Phone Guide",
  seoDescription: "How to contact someone at FCI Cumberland in Maryland. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP low security facility in Allegany County MD.",

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
  seoTitle: "FCI Hazelton: CorrLinks Messaging and ConnectNetwork Phone Guide",
  seoDescription: "How to contact someone at FCI Hazelton in West Virginia. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP medium security facility in Preston County WV.",

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
  ],

  relatedFacilitySlugs: ["usp-leavenworth", "federal-correctional-complex-petersburg", "fci-forrest-city"],
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
  seoTitle: "FCI Yankton: CorrLinks Messaging and ConnectNetwork Phone Guide",
  seoDescription: "How to contact someone at FCI Yankton in South Dakota. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP minimum security facility in Yankton County SD.",

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
  seoTitle: "FMC Devens: CorrLinks Messaging and ConnectNetwork Phone Guide",
  seoDescription: "How to contact someone at FMC Devens in Massachusetts. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP medical center facility in Worcester County MA.",

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
  seoTitle: "FCI Edgefield: CorrLinks Messaging and ConnectNetwork Phone Guide",
  seoDescription: "How to contact someone at FCI Edgefield in South Carolina. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP medium security facility in Edgefield County SC.",

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
  seoTitle: "FMC Rochester: CorrLinks Messaging and ConnectNetwork Phone Guide",
  seoDescription: "How to contact someone at FMC Rochester in Minnesota. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP medical center facility in Olmsted County MN.",

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
  seoTitle: "FCI Forrest City: CorrLinks Messaging and ConnectNetwork Phone",
  seoDescription: "How to contact someone at FCI Forrest City in Arkansas. CorrLinks for electronic messaging. ConnectNetwork for phone calls. Federal BOP facility at 870-630-6000. Low and medium security.",

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
  ],

  relatedFacilitySlugs: ["federal-correctional-complex-coleman", "usp-leavenworth", "fci-edgefield"],
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
  seoTitle: "RJ Donovan: Free CDCR Calls, Securus Transition and Messaging",
  seoDescription: "How to contact someone at RJ Donovan Correctional Facility in San Diego CA. CDCR phone calls are free under SB 1008. Securus replaced ViaPath. Find messaging and communication options.",

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
  seoTitle: "San Diego Central Jail: Free Calls, Smart Communications Guide",
  seoDescription: "How to contact someone at San Diego Central Jail. Phone calls are free. Smart Communications handles all services at 727-349-1561. Video visits scheduled 24 hours in advance at smartjailmail.com.",

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
  seoTitle: "Waupun Correctional Institution: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Waupun Correctional Institution in Wisconsin. Find the correct provider for phone calls, electronic messaging, and money transfers at this Wisconsin DOC facility.",

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
  seoDescription: "How to contact someone at Wayne County Jail in Detroit MI. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this Michigan facility.",

  description:
    "Wayne County Jail communication guide for Detroit, Michigan. Find GettingOut and Securus options for messaging, phone calls, and video visits with someone held at the Wayne County Sheriff's Office jail.",

  overview: [
    "Wayne County Jail is operated by the Wayne County Sheriff's Office and serves as the main booking and detention facility for Detroit and the rest of Wayne County, Michigan's most populous county. The jail complex sits in downtown Detroit and processes people arrested by the Detroit Police Department and other local agencies across the county. Most people held here are in pretrial status, waiting for their cases to move through Wayne County's court system, though some are serving shorter sentences.",
    "Families can reach someone at Wayne County Jail through two main services. GettingOut handles electronic messaging, photo sharing, and money transfers, all managed through a single online account. Securus handles phone calls and video visitation. To send a message or photo, create a GettingOut account and search for your contact by name and booking number. To set up phone calls, fund a Securus account so you can accept collect or prepaid calls from the jail's phone system. Video visits through Securus can be scheduled in advance or, at some facilities, used as a walk-in option depending on availability.",
    "Detroit is a major metro area, so many families live close enough for in-person visits, but jail visitation hours and rules change often, so it helps to call ahead or check the Sheriff's Office website before making the trip. People convicted of felonies and sentenced to state prison time are transferred out of the county jail to a Michigan Department of Corrections facility, where different communication providers usually apply. Always confirm current facility placement before assuming a provider account will still work.",
  ],

  address: "570 Clinton Street, Detroit, MI 48226",
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
  seoTitle: "Lew Sterrett Justice Center: Securus Phone and Jail Messaging",
  seoDescription: "How to contact someone at Lew Sterrett Justice Center in Dallas TX. Securus Technologies handles phone calls and video visits. Book-in number required. Call 214-761-9025.",

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

  relatedFacilitySlugs: ["wayne-county-jail", "king-county-correctional-facility", "mecklenburg-county-detention-center"],
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
  seoDescription: "How to contact someone at Mecklenburg County Detention Center in Charlotte NC. Securus Technologies handles phone calls. Find messaging, video visits, and money transfer options.",

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
  seoTitle: "Penobscot County Jail: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Penobscot County Jail in Bangor ME. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this Maine facility.",

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
  seoDescription: "How to contact someone at ACI Maximum Security in Cranston RI. Find the correct provider for phone calls, electronic messaging, and money transfers at this Rhode Island DOC facility.",

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
  seoDescription: "How to contact someone at Wyoming State Penitentiary in Rawlins. Find the correct provider for phone calls, electronic messaging, and money transfers at this Wyoming DOC facility.",

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
  seoDescription: "How to contact someone at King County Correctional Facility in Seattle WA. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers.",

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
  seoTitle: "Halawa Correctional Facility: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Halawa Correctional Facility in Aiea Hawaii. Find the correct provider for phone calls, electronic messaging, and money transfers at this Hawaii PSD facility.",

  description:
    "Halawa Correctional Facility communication guide for Aiea, Oahu. Find JPay and Securus options for messaging, photos, phone calls, and video visits with someone held at this Hawaii Department of Corrections and Rehabilitation facility.",

  overview: [
    "Halawa Correctional Facility is one of Hawaii's main state prisons, located in Aiea on the island of Oahu. It is operated by the Hawaii Department of Corrections and Rehabilitation and holds men at medium and higher security classifications, including a special needs unit for people who require additional medical or mental health support. Because it is one of the larger facilities in the state system, people from other Hawaiian islands are sometimes transferred here.",
    "Families reach someone at Halawa through two providers. JPay handles electronic messaging, digital photo sharing, and money transfers, all through a single account. Securus handles phone calls and video visitation. To send a message or photo, create a JPay account and add the person using their name and Hawaii DOC identification number. To talk by phone or set up a video visit, create a separate Securus account.",
    "For families living on other islands, such as Maui, the Big Island, or Kauai, video visitation through Securus can be far more practical than traveling to Oahu for an in-person visit. It is worth checking current visitation rules directly with the facility, since island-to-island travel adds real cost and time for many families. New contacts typically need to be approved before messages, calls, or video visits will go through.",
  ],

  address: "99-902 Moanalua Road, Aiea, HI 96701",
  phone: "(808) 485-5200",
  website: "https://dcr.hawaii.gov/halawa/",
  inmateCapacity: 1124,
  operatedBy: "Hawaii Department of Corrections and Rehabilitation (DCR)",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for Halawa Correctional Facility." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for Halawa Correctional Facility." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Messages are reviewed by staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "A practical option for families on other Hawaiian islands. Schedule in advance." },
    photos: { status: "available", provider: "JPay", notes: "Photos are screened for content before being delivered." },
    phone: { status: "available", provider: "Securus", notes: "Set up an account and add funds to accept calls." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Commissary deposits can be made through JPay." },
  },

  rules: [
    "JPay handles messaging, photos, and money. Securus handles phone and video.",
    "New contacts typically need approval before communication is allowed.",
    "All calls, messages, and video visits are subject to monitoring.",
    "Families on other islands should confirm current visitation options, since video visits can save significant travel time.",
    "Photo and mail content is screened and can be rejected if it does not meet facility guidelines.",
  ],

  faq: [
    { question: "How do I message someone at Halawa Correctional Facility?", answer: "Create a JPay account, search for the person using their name and Hawaii DOC identification number, and send a message. Expect a review period before it's delivered." },
    { question: "How do I call someone at Halawa Correctional Facility?", answer: "Set up a Securus account for phone calls. The person you're contacting usually needs to add you to their approved contact list first." },
    { question: "Is video visitation available at Halawa Correctional Facility?", answer: "Yes, through Securus. This is especially useful for families living on other Hawaiian islands who cannot easily travel to Oahu. Schedule ahead of time." },
    { question: "Can someone from another Hawaiian island visit in person at Halawa?", answer: "In-person visits are possible but require island travel, which adds time and cost. Many families choose video visitation through Securus as a more practical option for regular contact." },
    { question: "How do I send money to someone at Halawa Correctional Facility?", answer: "Use JPay to make commissary deposits. Create an account, add the person's information, and transfer funds using a debit or credit card." },
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
  seoDescription: "How to contact someone at Northern State Correctional Facility in Newport VT. Find the correct provider for phone calls, messaging, and money transfers at this Vermont DOC facility.",

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
  seoTitle: "Cass County Jail ND: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Cass County Jail in Fargo ND. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this North Dakota facility.",

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
  seoTitle: "Bernalillo County MDC: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Bernalillo County Metropolitan Detention Center in Albuquerque NM. Find the correct provider for phone calls, messaging, and money transfers at this NM facility.",

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
  seoDescription: "How to contact someone at Cheshire Correctional Institution in Connecticut. Connecticut offers free phone calls at state facilities. Find messaging and money transfer options.",

  description:
    "Cheshire Correctional Institution communication guide. Find JPay and Securus options for families reaching inmates at this Connecticut Department of Correction facility.",

  overview: [
    "Cheshire Correctional Institution is a men's prison operated by the Connecticut Department of Correction in the town of Cheshire, in New Haven County. It houses people at multiple custody levels, including a higher-security unit, and is one of the larger facilities in the Connecticut DOC system. Because it holds a mix of security levels, people can be moved between units within the facility without necessarily transferring to a different institution.",
    "Families use two providers to stay in touch with someone at Cheshire. JPay handles electronic messaging, photo sharing, and money transfers, and an account is created at jpay.com or through the JPay app using the person's name and DOC identification number. Securus handles phone calls and video visitation through a separate account at securustech.net. Both accounts need to be funded before you can send a message, make a video call possible, or accept a phone call.",
    "Cheshire is located in central Connecticut, within driving distance of New Haven, Hartford, and much of the state, which makes it accessible for most Connecticut families. In-person visits are scheduled through the Connecticut DOC visiting system rather than through JPay or Securus. If someone is transferred to another Connecticut DOC facility, the same JPay and Securus accounts generally continue to work statewide, but it's worth confirming the new facility on your account before sending funds.",
  ],

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
  seoTitle: "Philadelphia Prisons: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Philadelphia Department of Prisons. Securus Technologies handles phone calls. Find messaging, video visits, and money transfer options at Philadelphia jails.",

  description:
    "Philadelphia Department of Prisons communication guide. Find GettingOut and Securus options for families reaching people held in Philadelphia's county jail system.",

  overview: [
    "Philadelphia Department of Prisons, sometimes called PDP, is the city agency that runs Philadelphia's county jail system. Rather than a single building, PDP operates a group of facilities clustered in Northeast Philadelphia along State Road, including intake, detention, and industrial correctional buildings. Anyone arrested in Philadelphia and not released before trial is typically booked into this system, and where a person ends up depends on their classification, gender, and case status.",
    "Communication across the PDP system runs through two providers. GettingOut handles electronic messaging, photo sharing, and money deposits, with a free account available at gettingout.com or through the GettingOut app. Securus handles phone calls and video visitation through a separate account at securustech.net. Because someone can be moved between PDP facilities during their case, it's worth confirming the current building on your account before sending a message or funds.",
    "Because PDP is a system of several sites rather than one address, families should use the Department's own inmate locator to confirm exactly where a person is held before mailing letters or scheduling a visit. Philadelphia is served by public transit reaching the State Road area, which helps families without a car. People convicted of longer sentences may eventually transfer out of the city system to a Pennsylvania Department of Corrections state prison, where a different communication setup applies.",
  ],

  phone: "(215) 685-7711",
  website: "https://www.phila.gov/departments/philadelphia-department-of-prisons/",
  operatedBy: "City of Philadelphia, Philadelphia Department of Prisons",
  // UNVERIFIED: could not confirm a single administrative street address via search — please verify manually

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
  seoTitle: "Louisville Metro Corrections: Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Louisville Metro Corrections in Kentucky. Call Metro311 at 502-574-5000 for information. Find phone calls, video visits, and messaging options at LMDC.",

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
  seoTitle: "Kilby Correctional Facility: Securus Phone and JPay Messaging",
  seoDescription: "How to contact someone at Kilby Correctional Facility in Alabama. Securus Technologies handles ADOC phone calls. JPay for money transfers. Mail goes to San Antonio TX processing center.",

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
  seoDescription: "How to contact someone at Marble Valley Correctional Facility in Rutland VT. Find the correct provider for phone calls, electronic messaging, and money transfers at this Vermont DOC facility.",

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
  seoTitle: "Ely State Prison: Phone Calls, Messaging and Money Transfer Guide",
  seoDescription: "How to contact someone at Ely State Prison in Nevada. Find the correct provider for phone calls, electronic messaging, and money transfers at this Nevada DOC maximum security facility.",

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
  seoDescription: "How to contact someone at Maui Community Correctional Center in Wailuku Hawaii. Find the correct provider for phone calls, messaging, and money transfers at this Hawaii PSD facility.",

  description:
    "Maui Community Correctional Center communication guide. Find GettingOut and Securus options for families reaching people held at Maui's main jail in Wailuku.",

  overview: [
    "Maui Community Correctional Center, often shortened to MCCC, is the main detention facility serving Maui County, located in Wailuku. Unlike most states, Hawaii does not have separate county jails run by local sheriffs. Instead, the entire correctional system, including facilities that function like county jails, is operated by the state's Department of Corrections and Rehabilitation. MCCC holds people awaiting trial as well as people serving shorter sentences from Maui County courts.",
    "Communication at MCCC runs through two providers. GettingOut handles electronic messaging, photo sharing, and money deposits, with a free account available at gettingout.com or through the GettingOut app. Securus handles phone calls and video visitation through a separate account at securustech.net. Because MCCC is run by the state rather than a county agency, its communication setup is consistent with other Hawaii Department of Corrections and Rehabilitation facilities.",
    "MCCC serves the island of Maui, and its Wailuku location is central and generally reachable for island residents planning an in-person visit. Families living on other Hawaiian islands or on the mainland typically rely more on GettingOut and Securus than on in-person visits, given the cost and time of interisland or long-distance travel. If someone is sentenced to a longer term, they may be transferred to a different Hawaii DCR facility, sometimes on another island, so it's worth checking their current location before assuming it hasn't changed.",
  ],

  address: "600 Waiale Drive, Wailuku, HI 96793",
  phone: "(808) 243-5101",
  website: "https://dcr.hawaii.gov/mccc/",
  operatedBy: "Hawaii Department of Corrections and Rehabilitation",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money deposits for MCCC." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for MCCC." },
  ],

  communication: {
    messaging: { status: "available", provider: "GettingOut", notes: "Electronic messaging through GettingOut. Messages are reviewed by facility staff before delivery." },
    video: { status: "available", provider: "Securus", notes: "Video visitation available through Securus, useful for families on other islands or the mainland." },
    photos: { status: "available", provider: "GettingOut", notes: "Digital photo sharing through GettingOut, along with standard physical mail." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to accept calls from someone at MCCC." },
    moneyTransfer: { status: "available", provider: "GettingOut", notes: "Deposits accepted through GettingOut online or by phone." },
  },

  rules: [
    "GettingOut covers messaging, photos, and money. Securus covers phone calls and video visits.",
    "MCCC is operated by the state of Hawaii, not a county sheriff, since Hawaii runs a unified correctional system.",
    "All communication is subject to review and monitoring by facility staff.",
    "Only people on the approved contact list can message, call, or visit.",
    "A transfer to another Hawaii DCR facility, possibly on a different island, may change the practical logistics of in-person visits.",
  ],

  faq: [
    { question: "How do I contact someone at Maui Community Correctional Center?", answer: "Set up a GettingOut account for messaging, photos, and money, and a separate Securus account for phone calls and video visits. Both need the person's full name and booking information." },
    { question: "Who runs Maui Community Correctional Center?", answer: "MCCC is operated by the Hawaii Department of Corrections and Rehabilitation. Hawaii does not have separate county-run jails, so the state agency manages facilities like MCCC directly." },
    { question: "Can I do a video visit with someone at MCCC from the mainland?", answer: "Yes. Video visitation through Securus is often the most practical option for families who live far from Maui, including other Hawaiian islands and the mainland. Schedule in advance for the best chance of an open slot." },
    { question: "How do I find out if someone is currently at MCCC?", answer: "The Hawaii Department of Corrections and Rehabilitation provides facility and inmate information on its website, dcr.hawaii.gov. You can also call the facility directly to confirm custody status." },
    { question: "How do I send money to someone at MCCC?", answer: "Use GettingOut online or by phone to make a deposit. Funds are typically applied to the person's account within a day or two." },
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
  seoDescription: "How to contact someone at Howard R Young Correctional Institution in Wilmington DE. Find the correct provider for phone calls, messaging, and money transfers at this Delaware DOC facility.",

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
  seoDescription: "How to contact someone at Franklin County Correctional Center. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this county facility.",

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
  seoTitle: "Essex County Jail NJ: Phone Calls, ViaPath and Messaging Guide",
  seoDescription: "How to contact someone at Essex County Correctional Facility in Newark NJ. NJ transitioning from JPay to ViaPath. Phone rates cut to $0.034 per minute. Find current providers.",

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
  seoTitle: "SCI Phoenix PA: Securus Phone, ViaPath Messaging and Money Guide",
  seoDescription: "How to contact someone at SCI Phoenix in Collegeville PA. Securus handles phone calls. ViaPath ConnectNetwork for messaging. DC number required. Mail sent to central processing facility.",

  description:
    "State Correctional Institution Phoenix communication guide. Find JPay and Securus options for families reaching someone at Pennsylvania's maximum-security prison in Collegeville.",

  overview: [
    "State Correctional Institution Phoenix is a maximum-security prison operated by the Pennsylvania Department of Corrections in Collegeville, Montgomery County, about 30 miles northwest of Philadelphia. SCI Phoenix opened in 2018 to replace the aging SCI Graterford, which sat on the same property, and it now holds one of the largest populations in the Pennsylvania state prison system. The facility houses men serving longer state sentences, including many who need higher levels of security than a county jail can provide.",
    "Pennsylvania's state prison system, including SCI Phoenix, uses JPay for messaging, photo sharing, and money transfers, and Securus for phone calls and video visitation. Families set up a JPay account at jpay.com or through the JPay app to send electronic messages, called JPay Mail, and to send photos, which are screened before delivery. Adding money to an inmate's account for commissary also goes through JPay. Phone calls and video visits are handled separately through Securus, which requires its own account and its own funds.",
    "Collegeville sits within driving distance of Philadelphia, Allentown, and much of southeastern Pennsylvania, which makes in-person visits realistic for many families in the region. For those farther away, phone, video, and messaging through JPay and Securus are usually the most practical way to stay in touch. Because SCI Phoenix is a maximum-security facility, expect stricter screening on mail and messages than at a county jail, and build in extra time for a new contact or message to be approved.",
  ],

  address: "1200 Mokychic Drive, Collegeville, PA 19426",
  phone: "(610) 409-7890",
  website: "https://www.pa.gov/agencies/cor/state-prisons/sci-phoenix",
  inmateCapacity: 3830,
  established: 2018,
  operatedBy: "Pennsylvania Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for SCI Phoenix and other Pennsylvania DOC facilities." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for SCI Phoenix." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Send JPay Mail through jpay.com or the JPay app. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus in advance." },
    photos: { status: "available", provider: "JPay", notes: "Attach photos to JPay messages. Content is screened before delivery." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls from SCI Phoenix." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Add commissary funds through JPay by debit or credit card." },
  },

  rules: [
    "JPay and Securus are the two providers used across the Pennsylvania Department of Corrections, including SCI Phoenix.",
    "All messages, calls, and video visits are subject to monitoring and review by DOC staff.",
    "As a maximum-security facility, new contacts and message content may take longer to clear review than at a lower-security prison.",
    "One JPay account covers messaging, photos, and money for anyone in Pennsylvania DOC custody, even if they transfer to a different state prison.",
    "Video visits through Securus typically require scheduling in advance.",
  ],

  faq: [
    { question: "How do I send a message to someone at SCI Phoenix?", answer: "Create a JPay account at jpay.com or through the JPay app, search for the person using their name and PA DOC inmate number, and send a JPay Mail message. Messages are reviewed before delivery, which can take a day or more at a maximum-security facility." },
    { question: "How do I set up a video visit at SCI Phoenix?", answer: "Video visits are handled through Securus. Create an account, search for SCI Phoenix, and book an available time slot in advance. You'll need a device with a camera and a stable internet connection." },
    { question: "How do I send money to someone at SCI Phoenix?", answer: "Add funds through JPay at jpay.com or the JPay app using a debit or credit card. The deposit is applied to the person's commissary account." },
    { question: "How do I find out where someone is housed in the Pennsylvania prison system?", answer: "The Pennsylvania Department of Corrections offers an inmate locator on its website at pa.gov/agencies/cor. Search by name or DOC number to confirm current facility placement." },
    { question: "Does the same JPay account work if someone transfers to a different Pennsylvania prison?", answer: "Yes. JPay and Securus are used across the Pennsylvania DOC system, so the same accounts generally continue to work after a transfer to another state facility. Confirm the new facility name in your account before sending funds or messages." },
  ],

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
  seoTitle: "SCI Dallas PA: Securus Phone, ViaPath Messaging and Money Guide",
  seoDescription: "How to contact someone at SCI Dallas in Dallas PA. Securus handles phone calls. ViaPath ConnectNetwork for messaging. DC number required. Mail sent to central processing facility.",

  description:
    "State Correctional Institution Dallas communication guide. Find JPay and Securus options for families reaching someone at this Pennsylvania state prison in Luzerne County.",

  overview: [
    "State Correctional Institution Dallas is a state prison operated by the Pennsylvania Department of Corrections in Dallas, Luzerne County, in the northeastern part of the state near Wilkes-Barre. SCI Dallas houses men serving state sentences and has operated for decades as one of the larger institutions in the Pennsylvania DOC system. The campus also includes a minimum-security unit, so families should confirm the exact housing unit when reaching out to someone there.",
    "Like other Pennsylvania state prisons, SCI Dallas uses JPay for messaging, photo sharing, and money transfers, and Securus for phone calls and video visitation. A JPay account at jpay.com lets families send electronic messages and photos, which staff review before delivery, and add money to an incarcerated person's commissary account. Securus is a separate account used to fund phone calls and to schedule video visits.",
    "Wilkes-Barre and the surrounding Luzerne County area are reachable from most of northeastern Pennsylvania and parts of New York and New Jersey within a few hours' drive, which keeps in-person visits realistic for many families. For those farther away, JPay messaging and Securus calls or video visits are the more practical option day to day. Keep contact information updated with the facility, since approval for new visitors or contacts can take time to process.",
  ],

  address: "1000 Follies Road, Dallas, PA 18612",
  phone: "(570) 675-1101",
  website: "https://www.pa.gov/agencies/cor/state-prisons/sci-dallas",
  operatedBy: "Pennsylvania Department of Corrections",

  providers: [
    { name: "JPay", slug: "jpay", initial: "J", color: "bg-blue-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for SCI Dallas and other Pennsylvania DOC facilities." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for SCI Dallas." },
  ],

  communication: {
    messaging: { status: "available", provider: "JPay", notes: "Send JPay Mail through jpay.com or the JPay app. Messages are reviewed before delivery." },
    video: { status: "available", provider: "Securus", notes: "Remote video visits are scheduled through Securus in advance." },
    photos: { status: "available", provider: "JPay", notes: "Attach photos to JPay messages. Content is screened before delivery." },
    phone: { status: "available", provider: "Securus", notes: "Fund a Securus account to receive calls from SCI Dallas." },
    moneyTransfer: { status: "available", provider: "JPay", notes: "Add commissary funds through JPay by debit or credit card." },
  },

  rules: [
    "JPay and Securus are the two providers used across the Pennsylvania Department of Corrections, including SCI Dallas.",
    "All messages, calls, and video visits are subject to monitoring and review by DOC staff.",
    "SCI Dallas includes more than one housing unit on its campus, so confirm the exact unit when setting up contact.",
    "One JPay account covers messaging, photos, and money for anyone in Pennsylvania DOC custody, even after a transfer to another state prison.",
    "Video visits through Securus typically require scheduling in advance.",
  ],

  faq: [
    { question: "How do I send a message to someone at SCI Dallas?", answer: "Create a JPay account at jpay.com or through the JPay app, search for the person using their name and PA DOC inmate number, and send a JPay Mail message. Messages are reviewed before delivery." },
    { question: "How do I set up a video visit at SCI Dallas?", answer: "Video visits are handled through Securus. Create an account, search for SCI Dallas, and book an available time slot in advance. You'll need a device with a camera and a stable internet connection." },
    { question: "How do I send money to someone at SCI Dallas?", answer: "Add funds through JPay at jpay.com or the JPay app using a debit or credit card. The deposit is applied to the person's commissary account." },
    { question: "How do I find out where someone is housed in the Pennsylvania prison system?", answer: "The Pennsylvania Department of Corrections offers an inmate locator on its website at pa.gov/agencies/cor. Search by name or DOC number to confirm current facility placement." },
    { question: "Does the same JPay account work if someone transfers to a different Pennsylvania prison?", answer: "Yes. JPay and Securus are used across the Pennsylvania DOC system, so the same accounts generally continue to work after a transfer to another state facility. Confirm the new facility name in your account before sending funds or messages." },
  ],

  relatedFacilitySlugs: ["state-correctional-institution-phoenix", "attica-correctional-facility", "fci-danbury"],
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
  seoDescription: "How to contact someone at Tecumseh State Correctional Institution in Nebraska. Find the correct provider for phone calls, messaging, and money transfers at this Nebraska DOC facility.",

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
  seoDescription: "How to contact someone at Douglas County Department of Corrections in Omaha NE. Find the correct provider for phone calls, messaging, and money transfers at this Nebraska facility.",

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
  seoTitle: "Polk County Jail: Phone Calls, Messaging and Money Transfer Guide",
  seoDescription: "How to contact someone at Polk County Jail in Des Moines IA. Find the correct provider for phone calls, electronic messaging, video visits, and money transfers at this Iowa facility.",

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
  seoDescription: "How to contact someone at Anamosa State Penitentiary in Iowa. Find the correct provider for phone calls, electronic messaging, and money transfers at this Iowa DOC facility.",

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
  seoTitle: "Theo Lacy Facility: Phone Calls, Messaging and Money Transfer",
  seoDescription: "How to contact someone at Theo Lacy Facility in Orange CA. GTL ConnectNetwork handles phone calls. Orange County jail communication. Find messaging and money transfer options.",

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
  seoDescription: "How to contact someone at Laramie County Detention Center in Cheyenne WY. Find the correct provider for phone calls, electronic messaging, and money transfers at this Wyoming facility.",

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
  seoTitle: "Kays Detention Facility: Securus Phone Calls and Messaging Guide",
  seoDescription: "How to contact someone at Suzanne Lee Kays Detention Facility in Dallas TX. Securus Technologies handles phone calls and video visits. Book-in number required. Call 214-761-9025.",

  description:
    "Suzanne Lee Kays Detention Facility communication guide. Find GettingOut and Securus options for families reaching someone at this Dallas County jail tower, part of the Lew Sterrett Justice Center complex.",

  overview: [
    "The Suzanne Lee Kays Detention Facility, also known as the South Tower, is part of the Lew Sterrett Justice Center complex in downtown Dallas, operated by the Dallas County Sheriff's Department. It was dedicated in 1995 in memory of Suzanne Lee Kays, a sheriff's deputy killed in the line of duty in 1989, just days after graduating from the sheriff's academy. The tower functions alongside the rest of the Lew Sterrett complex as part of Dallas County's main jail system, holding people booked by the Dallas Police Department and other agencies across the county.",
    "Families reaching someone at the South Tower use the same providers as the rest of the Lew Sterrett complex. GettingOut handles electronic messaging, photo sharing, and money transfers through one online account. Securus handles phone calls and video visitation through a separate account. To message someone, create a GettingOut account and search using the person's name and booking information. To talk by phone, set up a Securus account and add funds so you can accept calls placed from inside the jail.",
    "Because the South Tower shares the Lew Sterrett complex's high booking volume, wait times for account approval or video visit slots can run longer than at smaller jails. It helps to set up accounts early and check often for available appointment times. After conviction and sentencing to state prison, people are transferred to a Texas Department of Criminal Justice unit, where the communication provider setup is different from the county jail.",
  ],

  address: "111 W. Commerce St, Dallas, TX 75202",
  phone: "(214) 761-9025",
  website: "https://www.dallascounty.org",
  established: 1993,
  operatedBy: "Dallas County Sheriff's Department",

  providers: [
    { name: "GettingOut", slug: "gettingout", initial: "G", color: "bg-violet-600", messaging: true, video: false, photos: true, phone: false, moneyTransfer: true, notes: "Handles messaging, photo sharing, and money transfers for the Suzanne Lee Kays Detention Facility (South Tower)." },
    { name: "Securus", slug: "securus", initial: "S", color: "bg-indigo-600", messaging: false, video: true, photos: false, phone: true, moneyTransfer: false, notes: "Handles phone calls and video visitation for the Suzanne Lee Kays Detention Facility (South Tower)." },
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
    "The South Tower shares Lew Sterrett's booking system, so confirm the exact housing location before mailing anything.",
    "All calls, messages, and video visits are subject to monitoring.",
    "You need the inmate's full name and booking number to locate their account.",
    "After transfer to a Texas Department of Criminal Justice unit, a different provider setup applies.",
  ],

  faq: [
    { question: "How do I contact someone at Suzanne Lee Kays Detention Facility?", answer: "Create a GettingOut account for messaging, photos, and money, and a Securus account for phone calls and video visits. The South Tower uses the same Dallas County systems as the rest of the Lew Sterrett Justice Center complex." },
    { question: "Is Suzanne Lee Kays Detention Facility the same as Lew Sterrett Justice Center?", answer: "The Suzanne Lee Kays Detention Facility, also called the South Tower, is part of the Lew Sterrett Justice Center complex in downtown Dallas. It shares the same address, booking system, and communication providers." },
    { question: "Is video visitation available at Suzanne Lee Kays Detention Facility?", answer: "Yes, through Securus. Because the complex holds a large population, available time slots can fill up fast, so check often and book as early as you can." },
    { question: "How do I check if someone is in custody at Suzanne Lee Kays Detention Facility?", answer: "Dallas County provides an online inmate search tool. You can also call the jail's information line at (214) 761-9025, which is staffed 24 hours a day." },
    { question: "What happens after someone is sentenced to state prison from Dallas County?", answer: "People sentenced to state time are transferred to a Texas Department of Criminal Justice unit. Communication providers at TDCJ units differ from the county jail, so check the new facility's setup right after any transfer." },
  ],

  relatedFacilitySlugs: ["lew-sterrett-justice-center", "essex-county-correctional-facility", "theo-lacy-facility"],
},

}
