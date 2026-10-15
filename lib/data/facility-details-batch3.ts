import type { FacilityDetail } from "./facility-types"

// ─────────────────────────────────────────────
// FACILITY DETAILS, Batch 3 (30 new facilities)
// 18 zero-coverage states + 12 single-coverage states
// Brings total to 100 detailed facility pages
// ─────────────────────────────────────────────

export const FACILITY_DETAILS_BATCH3: Record<string, FacilityDetail> = {

  // ─── Group A: Zero-Coverage States ───

  "spring-creek-correctional-center": {
    id: "f-spring-creek",
    name: "Spring Creek Correctional Center",
    slug: "spring-creek-correctional-center",
    type: "state",
    stateSlug: "alaska",
    stateName: "Alaska",
    stateAbbr: "AK",
    countySlug: null,
    countyName: "Kenai Peninsula Borough",
    securityLevel: "Close",
    hasDetailPage: true,
    seoTitle: "Spring Creek Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Spring Creek Correctional Center in Seward AK.",

    description:
      "Spring Creek Correctional Center communication guide. Find JPay messaging and GTL phone options for families at Alaska's close-security state prison in Seward.",

    overview: [
      "Spring Creek Correctional Center is a close-security state prison operated by the Alaska Department of Corrections, located in Seward on the Kenai Peninsula, roughly 125 miles south of Anchorage. Opened in 1988, it is Alaska's only maximum and close-security institution for adult male inmates and houses the state's most serious long-term offenders, including those on death row in a non-execution state. Seward is a small coastal city at the head of Resurrection Bay, known primarily for its fishing and tourism industries. The prison sits above the town on a hillside overlooking the bay, and its remote location relative to Anchorage and Fairbanks affects how families plan contact.",
      "Communication at Spring Creek follows Alaska Department of Corrections provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Alaska DOC number to begin sending messages and photos. GTL manages phone calls and video visitation under the ADOC statewide contract. The two-platform model applies here as it does across Alaska state facilities: JPay for messaging and money, GTL for phone and video, each requiring a separate account and separate funding.",
      "Seward is accessible by road from Anchorage via the Seward Highway, a drive of about two and a half hours in good conditions. However, the Seward Highway is frequently affected by winter weather, avalanche closures, and seasonal road conditions, making in-person visits from Anchorage unpredictable for much of the year. For families in Fairbanks or rural Alaska, the distance makes regular in-person visits impractical. JPay messaging and GTL video visits are the most reliable options for consistent contact regardless of season. Alaska DOC accounts work across all state facilities if an inmate is transferred.",
    ],

    address: "3600 Bette Cato Drive, Seward, AK 99664",
    phone: "(907) 224-8200",
    website: "https://doc.alaska.gov",
    inmateCapacity: 500,
    established: 1988,
    operatedBy: "Alaska Department of Corrections (ADOC)",
    mailingAddress: "Inmate Name, DOC Number, Spring Creek Correctional Center, 3600 Bette Cato Avenue, Seward, AK 99664. Include the inmate's full name and Alaska DOC number on the envelope.",
    visitingHours: "Visiting hours are Sunday through Saturday, 1:00 PM to 4:00 PM. Visits are by appointment only and must be scheduled 24 hours in advance by calling 907-224-8124. Evening visitation is suspended.",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Alaska DOC number.",
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
        notes: "Phone calls and video visitation under the Alaska DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Alaska DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Especially practical given the remote Seward location." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ADOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "The Seward Highway can be closed by avalanche or weather, plan in-person visits with flexibility.",
      "Messages are reviewed by ADOC staff before delivery.",
      "ADOC system-wide accounts carry over if the inmate transfers to another Alaska facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Spring Creek Correctional Center?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Alaska DOC number. Purchase stamps and compose your message. ADOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Spring Creek?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "How far is Spring Creek from Anchorage?",
        answer: "Spring Creek is in Seward, about 125 miles south of Anchorage via the Seward Highway, roughly a two and a half hour drive in good conditions. The highway is one of the most scenic in Alaska but is subject to closures due to avalanches and winter weather. Plan visits with flexibility and check road conditions before traveling.",
      },
      {
        question: "Is video visitation available at Spring Creek?",
        answer: "Yes, through GTL. Remote video visits are available and are especially practical for families in Anchorage, Fairbanks, or rural Alaska who cannot easily make the drive to Seward. Log into your GTL account, search for Spring Creek Correctional Center, and schedule an available slot in advance.",
      },
      {
        question: "How do I send money to a Spring Creek inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Spring Creek Correctional Center. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Spring Creek Correctional Center?",
        answer: "Address the envelope with the inmate's full name and Alaska DOC number, followed by Spring Creek Correctional Center, 3600 Bette Cato Avenue, Seward, AK 99664. All mail is inspected before delivery, so do not send cash, stamps, or prohibited items.",
      },
      {
        question: "Can I call an inmate at Spring Creek directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to numbers on their approved call list through GTL, so set up a GTL AdvancePay account and make sure your number is approved.",
      },
      {
        question: "Why did my calls from Spring Creek stop coming through?",
        answer: "Calls stop when the GTL account runs out of funds, the number is removed from the inmate's call list, or the inmate's phone privileges change. Check your GTL balance first, then confirm with the inmate that your number is still on the approved list.",
      },
      {
        question: "Why is my JPay message to Spring Creek still pending?",
        answer: "ADOC staff review messages before delivery, which can take 24 to 48 hours. If a message stays pending longer, check that you entered the correct Alaska DOC number and that you are on the inmate's approved contact list.",
      },
      {
        question: "What happens to my JPay and GTL accounts if my loved one transfers from Spring Creek?",
        answer: "Alaska DOC accounts carry over if the inmate transfers to another Alaska facility. You do not need a new JPay or GTL account, but confirm the new facility's visiting and phone rules, since they can differ.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "washington-state-penitentiary",
      "oregon-state-penitentiary",
      "high-desert-state-prison",
    ],
  },

  "cummins-unit": {
    id: "f-cummins-unit",
    name: "Cummins Unit",
    slug: "cummins-unit",
    type: "state",
    stateSlug: "arkansas",
    stateName: "Arkansas",
    stateAbbr: "AR",
    countySlug: null,
    countyName: "Lincoln County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Cummins Unit Arkansas: Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone at Cummins Unit in Grady AR.",

    description:
      "Cummins Unit communication guide. Find JPay messaging and GTL phone options for families at Arkansas's largest maximum-security state prison in Lincoln County.",

    overview: [
      "Cummins Unit is the largest prison in Arkansas, operated by the Arkansas Division of Correction and located near the town of Grady in Lincoln County in the southeastern part of the state, roughly 90 miles southeast of Little Rock. Originally established in 1902, Cummins is an agricultural prison with a long and documented history that includes significant civil rights litigation in the 1960s and 1970s over inmate conditions. The facility covers thousands of acres of farmland worked by inmates and continues to operate as both a correctional institution and a working farm. It houses adult male inmates at close, maximum, and supermax classifications.",
      "Communication at Cummins Unit follows Arkansas DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Arkansas DOC number to begin correspondence. GTL manages phone calls and video visitation under the ADC statewide contract. The standard two-platform setup applies: JPay for messaging and money, GTL for phone and video. These are separate accounts, stamps purchased on JPay cannot be used for phone calls, and vice versa.",
      "Cummins is in rural Lincoln County, roughly 90 miles from Little Rock. For families in the capital area, the drive takes about an hour and a half. For families in Memphis, Tennessee, about 150 miles east, a visit is a reasonable day trip. The facility's rural agricultural setting means it is not near major transit corridors. JPay messaging and GTL video visits are practical for families who cannot travel regularly. Arkansas DOC accounts work across all ADC facilities statewide and carry over automatically if an inmate transfers.",
    ],

    address: "1 Chicken Farm Road, Grady, AR 71644",
    phone: "(870) 479-3101",
    website: "https://adc.arkansas.gov",
    mailingAddress: "Inmate Name and ADC Number, Cummins Unit, P.O. Box 500, Grady, AR 71644-0500. Include the inmate's ADC number on every envelope.",
    fax: "870-850-8861",
    inmateCapacity: 1700,
    established: 1902,
    operatedBy: "Arkansas Division of Correction (ADC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Arkansas DOC number.",
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
        notes: "Phone calls and video visitation under the Arkansas DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Arkansas DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ADC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by ADC staff before delivery.",
      "ADC system-wide accounts carry over if the inmate transfers to another Arkansas facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I send a message to someone at Cummins Unit?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Arkansas DOC number. Purchase stamps and compose your message. ADC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Cummins Unit?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Cummins from Little Rock?",
        answer: "Cummins Unit is in Grady, Lincoln County, roughly 90 miles southeast of Little Rock, about an hour and a half by car. For Memphis-area families, the facility is approximately 150 miles west, making it a feasible day trip from Tennessee.",
      },
      {
        question: "Is video visitation available at Cummins?",
        answer: "Yes, through GTL. Log into your GTL account, search for Cummins Unit, and select an available time slot. Schedule at least 24 to 48 hours in advance as popular slots fill quickly.",
      },
      {
        question: "How do I send money to a Cummins Unit inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Cummins Unit. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Cummins Unit?",
        answer: "Use the inmate's full name and ADC number, followed by Cummins Unit, 1 Chicken Farm Road, Grady, AR 71644. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Cummins Unit directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the inmate's approved call list.",
      },
      {
        question: "Why did calls from Cummins Unit stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Cummins Unit delayed?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the ADC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "Can inmates in restrictive housing at Cummins receive in-person visits?",
        answer: "No. Inmates in restrictive housing or protective custody are allowed to visit by video only. General population inmates can receive in-person visits under the unit schedule.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "louisiana-state-penitentiary",
      "mississippi-state-penitentiary",
      "holman-correctional-facility",
    ],
  },

  "james-t-vaughn-correctional-center": {
    id: "f-vaughn-de",
    name: "James T. Vaughn Correctional Center",
    slug: "james-t-vaughn-correctional-center",
    type: "state",
    stateSlug: "delaware",
    stateName: "Delaware",
    stateAbbr: "DE",
    countySlug: null,
    countyName: "Kent County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Vaughn Correctional: Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone at James T Vaughn Correctional Center in Smyrna DE.",

    description:
      "James T. Vaughn Correctional Center communication guide. Find JPay messaging and GTL phone options for families at Delaware's maximum-security state prison in Smyrna.",

    overview: [
      "James T. Vaughn Correctional Center is Delaware's largest and only maximum-security state prison, operated by the Delaware Department of Correction and located in Smyrna in Kent County, roughly 45 miles south of Wilmington and about 10 miles north of Dover, the state capital. Established in 1901 as the Delaware State Penitentiary and later renamed in honor of a correctional officer killed during the 2017 inmate uprising, Vaughn houses adult male inmates at maximum, medium, and minimum security classifications. The 2017 hostage crisis at the facility drew national attention and led to significant policy reviews of Delaware's correctional system.",
      "Communication at James T. Vaughn follows Delaware DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Delaware DOC number to begin correspondence. GTL manages phone calls and video visitation under the DDOC statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video. Accounts are separate and serve different functions, message stamps cannot be used for phone minutes and vice versa.",
      "Vaughn's location in central Delaware between Wilmington and Dover makes it relatively accessible for families across the state. The facility is about 45 minutes south of Wilmington and close to I-1 and US-13. For families in the Philadelphia metro area, the drive from southeastern Pennsylvania is about an hour. For families in Maryland or New Jersey, the facility is also within reasonable reach. Delaware is a small state with limited correctional geography, making Vaughn the central facility for most Delaware inmate families.",
    ],

    address: "1181 Paddock Road, Smyrna, DE 19977",
    phone: "(302) 653-9261",
    website: "https://doc.delaware.gov",
    inmateCapacity: 2500,
    established: 1901,
    operatedBy: "Delaware Department of Correction (DDOC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Delaware DOC number.",
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
        notes: "Phone calls and video visitation under the Delaware DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Delaware DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to DDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by DDOC staff before delivery.",
      "DDOC system-wide accounts carry over if the inmate transfers to another Delaware facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at James T. Vaughn Correctional Center?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Delaware DOC number. Purchase stamps and compose your message. DDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Vaughn?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Vaughn from Wilmington and Philadelphia?",
        answer: "James T. Vaughn is in Smyrna, about 45 miles south of Wilmington, roughly a 45-minute drive. From Philadelphia, the facility is about an hour south via I-95 and US-13. For New Jersey or Maryland families, the drive is similarly accessible.",
      },
      {
        question: "Is video visitation available at Vaughn?",
        answer: "Yes, through GTL. Log into your GTL account, search for James T. Vaughn Correctional Center, and schedule an available slot. Book at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I send money to a Vaughn inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select James T. Vaughn Correctional Center. Add funds via debit or credit card. Processing takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Vaughn?",
        answer: "Use the inmate's full legal name and SBI number, followed by James T. Vaughn Correctional Center, 1181 Paddock Road, Smyrna, DE 19977. Include a complete return address. All incoming mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Vaughn directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so set up a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Vaughn stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Vaughn still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the SBI number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "What happens if my loved one transfers from Vaughn to another Delaware facility?",
        answer: "Your JPay and GTL accounts stay with you, since both are used statewide. Confirm the new facility's visiting rules and phone schedule, because they can differ by facility and housing unit.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "new-jersey-state-prison",
      "sci-phoenix",
      "mci-cedar-junction",
    ],
  },

  "oahu-community-correctional-center": {
    id: "f-occc-hi",
    name: "Oahu Community Correctional Center",
    slug: "oahu-community-correctional-center",
    type: "county",
    stateSlug: "hawaii",
    stateName: "Hawaii",
    stateAbbr: "HI",
    countySlug: null,
    countyName: "Honolulu County",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "Oahu OCCC: Phone Calls, Messaging and Money Transfer Guide",
    seoDescription: "How to contact someone at Oahu Community Correctional Center in Honolulu Hawaii.",

    description:
      "Oahu Community Correctional Center communication guide. Find Securus phone and video options for families in Honolulu. Learn how to stay connected at Hawaii's largest correctional facility.",

    overview: [
      "Oahu Community Correctional Center (OCCC) is the largest correctional facility in Hawaii, operated by the Hawaii Department of Public Safety and located in the Kalihi neighborhood of Honolulu on the island of Oahu. The facility serves as both the primary pretrial detention center for Honolulu County and as a short-term sentenced facility for people serving terms of one year or less. OCCC is consistently over its design capacity and processes a large number of bookings from across the island. Because Hawaii has no county-operated jails separate from state facilities, OCCC functions as the main intake and detention center for Oahu.",
      "Communication at OCCC is managed through Securus Technologies, which handles phone calls, video visitation, and electronic messaging under the Hawaii DPS contract. Families create a Securus account at securustech.net to access all available services. Setting up a Securus AdvancePay account funded with your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled through Securus. Electronic messaging delivers communications digitally within the facility.",
      "OCCC's location in Honolulu makes it accessible for families living on Oahu. However, families on neighbor islands, Maui, Hawaii Island, Kauai, Molokai, face a significant barrier because inter-island travel requires a flight or ferry, making in-person visits expensive and difficult to schedule regularly. For neighbor island families, Securus video visits and messaging are the most practical tools for maintaining contact. People held at OCCC may later be transferred to the Hawaii Community Correctional Center on the Big Island or to mainland facilities contracted by Hawaii DPS. Confirm current location before setting up any accounts.",
    ],

    address: "2199 Kamehameha Highway, Honolulu, HI 96819",
    phone: "(808) 832-1440",
    website: "https://dps.hawaii.gov",
    inmateCapacity: 1000,
    established: 1919,
    operatedBy: "Hawaii Department of Public Safety (HDPS)",
    visitingHours: "Visits follow the OCCC Visitation Schedule and Guidelines, updated January 31, 2025. Schedules vary by module, so call the Visitation Hotline at (808) 832-1633 to confirm the current schedule for the inmate's module before traveling.",
    commissary: "Electronic deposits into the Inmate Trust Account are accepted. Deposits made through the trust account can be used for commissary purchases.",
    fax: "(808) 832-1412",

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
        notes: "Primary provider for all OCCC communication, phone, video, messaging, and commissary deposits.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "Securus", notes: "Electronic messaging via Securus. Monitored by Hawaii DPS staff." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available. Especially practical for neighbor island families. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to HDPS content restrictions. No digital photo service." },
      phone: { status: "available", provider: "Securus", notes: "Fund a Securus AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "Securus", notes: "Commissary deposits via Securus. Separate from phone account funding." },
    },

    rules: [
      "All OCCC communication goes through Securus. If transferred to a mainland facility, the provider will change.",
      "All calls, messages, and visits are monitored by Hawaii DPS staff.",
      "Phone and commissary accounts are maintained separately in Securus.",
      "Video visits require advance scheduling through Securus.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Oahu Community Correctional Center?",
        answer: "All communication services at OCCC, phone, video, messaging, and money, are through Securus. Create an account at securustech.net or through the Securus app. One account covers all services at the facility.",
      },
      {
        question: "Can I do a video visit with someone at OCCC from a neighbor island?",
        answer: "Yes. Securus remote video visits are available and are the most practical option for families on Maui, Hawaii Island, Kauai, or Molokai who cannot easily travel to Honolulu. Log into your Securus account, select OCCC, and book an available slot at least 24 hours in advance.",
      },
      {
        question: "What happens if my loved one is transferred to a mainland facility?",
        answer: "Hawaii DPS contracts with mainland facilities when Oahu is over capacity. If your loved one is transferred to a facility in Arizona, California, or another state, Securus may no longer be the correct provider. Confirm the new facility's communication setup immediately after any transfer.",
      },
      {
        question: "How do I find out if someone is currently at OCCC?",
        answer: "The Hawaii Department of Public Safety provides an offender search at dps.hawaii.gov. Search by name to confirm current housing location. This is especially important given that Hawaii sometimes transfers people to mainland contracted facilities.",
      },
      {
        question: "How do I send money to an OCCC inmate?",
        answer: "Commissary deposits are made through Securus. Log into your account and navigate to the money transfer section. Add funds via debit or credit card. Note that commissary funds and phone account funds are separate within Securus.",
      },
      {
        question: "How do I find out about bail for someone at OCCC?",
        answer: "OCCC houses pretrial detainees, so bail is set by the court, not by the facility. Contact the court that handled the case or the facility's records staff to confirm the bail amount and the approved way to post it.",
      },
      {
        question: "How do I address mail to someone at OCCC?",
        answer: "Use the inmate's full name and OCCC number, followed by Oahu Community Correctional Center, 2199 Kamehameha Highway, Honolulu, HI 96819. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at OCCC directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through the facility's phone service provider, so set up an account with that provider and confirm your number is on the approved list.",
      },
      {
        question: "Why can't I find my loved one in the OCCC roster?",
        answer: "OCCC holds a mix of pretrial detainees, sentenced inmates, and people in transition, and custody can change quickly. If a recent booking does not appear, call the facility with the full legal name and date of birth to confirm custody status.",
      },
      {
        question: "Does OCCC offer work furlough?",
        answer: "Yes. OCCC operates a work furlough program for eligible inmates nearing release. Placement is decided by the facility and the paroling authority, not by family request.",
      },
    ],

    relatedFacilitySlugs: [
      "spring-creek-correctional-center",
      "high-desert-state-prison",
      "san-quentin-state-prison",
    ],
  },

  "idaho-state-correctional-institution": {
    id: "f-isci-id",
    name: "Idaho State Correctional Institution",
    slug: "idaho-state-correctional-institution",
    type: "state",
    stateSlug: "idaho",
    stateName: "Idaho",
    stateAbbr: "ID",
    countySlug: null,
    countyName: "Ada County",
    securityLevel: "Medium / Close",
    hasDetailPage: true,
    seoTitle: "Idaho State Correctional: Free ViaPath Tablets and Phone",
    seoDescription: "How to contact someone at Idaho State Correctional Institution. Idaho provides free ViaPath Bridge tablets to inmates.",

    description:
      "Idaho State Correctional Institution communication guide. Find JPay messaging and GTL phone options for families at Idaho's primary state prison complex near Boise.",

    overview: [
      "Idaho State Correctional Institution (ISCI) is the primary state prison complex operated by the Idaho Department of Correction, located near Kuna in Ada County, about 20 miles southwest of downtown Boise. The facility is the hub of Idaho's correctional system, housing adult male inmates at medium and close-security classifications and serving as the intake and assessment center for the Idaho DOC. Kuna is a small city on the edge of the Boise metropolitan area, and the prison complex sits in the agricultural plain southwest of the city. ISCI is among the largest correctional facilities in Idaho and is central to the state's prison administration.",
      "Communication at ISCI follows Idaho DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Idaho DOC number to begin correspondence. GTL manages phone calls and video visitation under the IDOC statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video. Each platform requires a separate account, and stamps and phone credits are not interchangeable between them.",
      "ISCI's location about 20 miles from downtown Boise makes it more accessible for Boise-area families than many rural Idaho facilities. US-20 and US-26 connect the Boise metro area to Kuna and the surrounding region. For families in Twin Falls, Pocatello, or Idaho Falls, the facility is further afield but still within the range of a day trip on Idaho's highway network. Idaho DOC accounts created for ISCI carry over to any other Idaho state facility if an inmate is reclassified and transferred elsewhere in the system.",
    ],

    address: "13400 S. Pleasant Valley Road, Kuna, ID 83634",
    phone: "(208) 331-2900",
    website: "https://www.idoc.idaho.gov",
    mailingAddress: "Inmate Name and ID Number, Idaho State Correctional Institution, PO Box 14, Boise, ID 83707. Include the inmate's full name and ID number on every envelope.",
    visitingHours: "Visits are on assigned days and times only, per the IDOC visiting schedule for ISCI. Visitors must complete the visiting application process first, and visitors enter the gatehouse during designated entry times. No visiting is allowed during the reception and diagnostic process.",
    inmateCapacity: 1400,
    established: 1973,
    operatedBy: "Idaho Department of Correction (IDOC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Idaho DOC number.",
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
        notes: "Phone calls and video visitation under the Idaho DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Idaho DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to IDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by IDOC staff before delivery.",
      "IDOC system-wide accounts carry over if the inmate transfers to another Idaho facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Idaho State Correctional Institution?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Idaho DOC number. Purchase stamps and send your message. IDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from ISCI?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is ISCI from downtown Boise?",
        answer: "ISCI is near Kuna, about 20 miles southwest of downtown Boise, roughly a 25 to 30-minute drive. For Boise-area families, in-person visits are very accessible. For families in Twin Falls or Pocatello, the drive is longer but manageable as a day trip.",
      },
      {
        question: "Does ISCI serve as an intake facility?",
        answer: "Yes. ISCI serves as the Idaho DOC's primary intake and assessment center. Newly sentenced inmates typically enter the system here before being classified and assigned to a permanent facility. If your loved one recently entered the Idaho system, they may be at ISCI temporarily during the assessment period.",
      },
      {
        question: "How do I send money to an ISCI inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Idaho State Correctional Institution. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at ISCI?",
        answer: "Use the inmate's full name and IDOC number, followed by Idaho State Correctional Institution, 13400 S. Pleasant Valley Road, Kuna, ID 83634. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at ISCI directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from ISCI stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to ISCI still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the IDOC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "Can I send books or packages to someone at ISCI?",
        answer: "Books and publications generally must come directly from an approved vendor or publisher, not from individuals. Personal packages are restricted, so confirm the current mail rules with the facility before sending anything beyond a letter.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "montana-state-prison",
      "wyoming-medium-correctional-institution",
      "washington-state-penitentiary",
    ],
  },

  "iowa-state-penitentiary": {
    id: "f-iowa-state-pen",
    name: "Iowa State Penitentiary",
    slug: "iowa-state-penitentiary",
    type: "state",
    stateSlug: "iowa",
    stateName: "Iowa",
    stateAbbr: "IA",
    countySlug: null,
    countyName: "Lee County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Iowa State Penitentiary: Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone at Iowa State Penitentiary in Fort Madison.",

    description:
      "Iowa State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at Iowa's only maximum-security state prison in Fort Madison.",

    overview: [
      "Iowa State Penitentiary is Iowa's only maximum-security state prison, operated by the Iowa Department of Corrections and located in Fort Madison in Lee County in the far southeastern corner of the state, on a bluff above the Mississippi River. Established in 1839, it is one of the oldest continuously operating prisons in the United States and Iowa's oldest correctional institution. The facility houses the state's most serious long-term offenders and Iowa's death row population. Fort Madison is a small river city near the Missouri and Illinois state lines, and the prison's distinctive stone walls along the riverbank make it a well-known local landmark.",
      "Communication at Iowa State Penitentiary follows Iowa DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Iowa DOC number to begin correspondence. GTL manages phone calls and video visitation under the IDOC statewide contract. The two-platform model applies here: JPay for messaging and money, GTL for phone and video. Death row inmates may have more restricted communication access than the general maximum-security population. Confirm current access with the facility for anyone on Iowa's death row.",
      "Fort Madison's location in the far southeastern corner of Iowa, near Keokuk and across the river from Illinois, means it is relatively distant from Iowa's population centers. Des Moines is about 175 miles northwest; Cedar Rapids and Iowa City are about 100 miles north. For families in the Quad Cities area or across the river in Illinois, the facility is more accessible. JPay messaging and GTL video visits are practical alternatives for families in central or northern Iowa who cannot make the drive regularly. Iowa DOC accounts carry over to any other Iowa facility if an inmate is transferred.",
    ],

    address: "2500 Iowa Penitentiary Drive, Fort Madison, IA 52627",
    phone: "(319) 372-5432",
    website: "https://doc.iowa.gov",
    visitingHours: "All visits, in-person and video, are reserved through the Ameelio app. The visiting week runs Friday through Monday, and the facility currently allows one visit per week. People in segregation do not receive contact visits and have limited weekend video visits. Contact the facility with visit-specific questions.",
    inmateCapacity: 800,
    established: 1839,
    operatedBy: "Iowa Department of Corrections (IDOC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Iowa DOC number.",
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
        notes: "Phone calls and video visitation under the Iowa DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ, confirm with facility." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Death row video access varies. Confirm before booking." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to IDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Death row inmates may have stricter communication limits than general maximum-security inmates.",
      "JPay and GTL are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages are reviewed by IDOC staff before delivery.",
      "IDOC system-wide accounts carry over if the inmate transfers to another Iowa facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Iowa State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Iowa DOC number. Purchase stamps and compose your message. IDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Iowa State Penitentiary?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Iowa State Penitentiary from Des Moines?",
        answer: "Iowa State Penitentiary is in Fort Madison, about 175 miles southeast of Des Moines, roughly a two and a half hour drive. For families in the Quad Cities area on the Illinois-Iowa border, the facility is about 60 miles south, making visits more practical.",
      },
      {
        question: "Do death row inmates at Iowa State Penitentiary have full communication access?",
        answer: "Iowa has no active death penalty, but does house inmates sentenced to death under older statutes. Communication access for these individuals may differ from the general population. Confirm current messaging, phone, and video access directly with the facility before setting up accounts.",
      },
      {
        question: "How do I send money to an Iowa State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Iowa State Penitentiary. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Iowa State Penitentiary?",
        answer: "Use the inmate's full name and IDOC number, followed by Iowa State Penitentiary, 2500 Iowa Penitentiary Drive, Fort Madison, IA 52627. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Iowa State Penitentiary directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Iowa State Penitentiary stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "How do I schedule a video visit with someone at Iowa State Penitentiary?",
        answer: "Video visitation is limited at this facility. Set up a GTL account, confirm you are on the inmate's approved visitor list, and check the current video visit schedule with the facility before booking.",
      },
      {
        question: "What happens if my loved one transfers from Iowa State Penitentiary to another Iowa prison?",
        answer: "Your JPay and GTL accounts stay with you, since both are used statewide. Confirm the new facility's visiting rules and phone schedule, because they can differ by facility and custody level.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "menard-correctional-center",
      "nebraska-state-penitentiary",
      "south-dakota-state-penitentiary",
    ],
  },

  "maine-state-prison": {
    id: "f-maine-state-prison",
    name: "Maine State Prison",
    slug: "maine-state-prison",
    type: "state",
    stateSlug: "maine",
    stateName: "Maine",
    stateAbbr: "ME",
    countySlug: null,
    countyName: "Knox County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Maine State Prison: Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone at Maine State Prison in Warren.",

    description:
      "Maine State Prison communication guide. Find JPay messaging and GTL phone options for families at Maine's only maximum-security state prison in Warren, Knox County.",

    overview: [
      "Maine State Prison is the only maximum-security state prison in Maine, operated by the Maine Department of Corrections and located in Warren in Knox County along the Georges River in the mid-coast region of the state, roughly 80 miles northeast of Portland and 60 miles south of Bangor. The current facility opened in 2002, replacing the original Maine State Prison that had operated in Thomaston since 1824. The new facility is a modern, campus-style institution that houses adult male inmates at all security classifications from medium to maximum. It is the central facility in Maine's correctional system and serves as the state's primary long-term housing institution.",
      "Communication at Maine State Prison follows Maine DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Maine DOC number to begin correspondence. GTL manages phone calls and video visitation under the MDOC statewide contract. As with other Maine state facilities, the two-platform model applies: JPay for messaging and money, GTL for phone and video, each with its own account and funding.",
      "Warren is in Knox County on Maine's mid-coast, between Portland to the southwest and Bangor to the northeast. US-1 passes through the region, and the facility is accessible from Route 1 and nearby state roads. For Portland-area families, the drive is about 80 miles, roughly an hour and 20 minutes. For families in Augusta, the state capital, Warren is about 45 miles south. Maine's correctional geography is relatively compact compared to larger states, and the Maine State Prison serves as the destination for most long-term male inmates from across the state. Maine DOC accounts carry over if an inmate transfers within the state system.",
    ],

    address: "807 Cushing Road, Warren, ME 04864",
    phone: "(207) 273-5300",
    website: "https://www.maine.gov/corrections",
    inmateCapacity: 900,
    established: 2002,
    operatedBy: "Maine Department of Corrections (MDOC)",
    visitingHours: "Visits must be requested at least two business days in advance and confirmed before you travel. A visitor who arrives for a visit that has not been scheduled and confirmed will not be permitted to visit.",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Maine DOC number.",
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
        notes: "Phone calls and video visitation under the Maine DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Maine DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by MDOC staff before delivery.",
      "MDOC system-wide accounts carry over if the inmate transfers to another Maine facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Maine State Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Maine DOC number. Purchase stamps and compose your message. MDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Maine State Prison?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Maine State Prison from Portland?",
        answer: "Maine State Prison is in Warren in Knox County, about 80 miles northeast of Portland, roughly an hour and 20 minutes by car via US-1 and Route 90. For Augusta-area families, the drive is about 45 miles south. Maine's mid-coast location makes the facility accessible from most parts of the state.",
      },
      {
        question: "What is the difference between the old and new Maine State Prison?",
        answer: "The original Maine State Prison operated in Thomaston from 1824 until 2002, when the new facility in Warren opened. The new prison is a modern campus-style institution with improved facilities. The Thomaston site has since been developed for other uses. All current inmates are housed at the Warren facility.",
      },
      {
        question: "How do I send money to a Maine State Prison inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Maine State Prison. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Maine State Prison?",
        answer: "Use the inmate's full name and MDOC number, followed by Maine State Prison, 807 Cushing Road, Warren, ME 04864. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Maine State Prison directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Maine State Prison stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Maine State Prison still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the MDOC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How far in advance do I need to request a visit at Maine State Prison?",
        answer: "Regular visitors must request visits at least two business days in advance. Staff will confirm the visit once it is scheduled. Do not travel until you have that confirmation, because unscheduled visitors are not admitted.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "mci-cedar-junction",
      "new-hampshire-state-prison-for-men",
      "james-t-vaughn-correctional-center",
    ],
  },

  "baltimore-city-detention-center": {
    id: "f-baltimore-detention",
    name: "Baltimore City Detention Center",
    slug: "baltimore-city-detention-center",
    type: "county",
    stateSlug: "maryland",
    stateName: "Maryland",
    stateAbbr: "MD",
    countySlug: null,
    countyName: "Baltimore City",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Baltimore City Detention Center (Closed 2015): Where",
    seoDescription: "The men's Baltimore City Detention Center closed in July 2015 and was demolished in 2021.",

    description:
      "Baltimore City Detention Center closed in July 2015 and was demolished in 2021. This page explains the closure and directs families to the Baltimore Central Booking and Intake Center, which now handles Baltimore pretrial intake.",

    overview: [
      "The men's Baltimore City Detention Center (BCDC) closed in July 2015 and was demolished in 2021. It no longer houses anyone. This page stays online so families searching for the old facility name find the current setup instead of outdated contact details. Do not send mail, money, or visit requests to the old BCDC address at 401 E. Eager Street. That building is gone.",
      "Baltimore pretrial intake now runs through the Baltimore Central Booking and Intake Center (BCBIC), operated by the Maryland Division of Pretrial Detention and Services at 300 E. Madison Street in Baltimore. People arrested in Baltimore City are booked and classified at BCBIC, then transferred to their longer term housing location. BCBIC is an intake center, so most people stay there only a short time.",
      "Communication at BCBIC runs through ConnectNetwork, the authorized deposit and account portal for GTL/ViaPath. Families can fund an AdvancePay prepaid telephone account to accept calls, or deposit to an incarcerated individual's PIN Debit phone account. Visits alternate between in-person and virtual weeks on the DPSCS rotational schedule. Use the DPSCS offender search to confirm a person's current housing location before setting up or funding any account, because a transfer changes where they are held.",
    ],

    address: "300 E. Madison Street, Baltimore, MD 21202",
    website: "https://www.dpscs.state.md.us/locations/bcbic.shtml",
    visitingHours: "Visits alternate between in-person and virtual weeks on the DPSCS 2026 rotational schedule. Mon, Tue, Thu, Fri 4PM to 8PM, Sat and Sun 9AM to 5PM, no visits Wednesdays. Detainees are permitted one visit per day. Check the DPSCS BCBIC page for the current week.",
    operatedBy: "Maryland Division of Pretrial Detention and Services (DPSCS)",

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
        notes: "ConnectNetwork is the GTL/ViaPath authorized deposit and account portal at BCBIC. AdvancePay prepaid telephone accounts and PIN Debit accounts are managed through ConnectNetwork.",
      },
    ],

    communication: {
      messaging: { status: "limited", provider: undefined, notes: "Electronic messaging is not confirmed on the DPSCS BCBIC page. Confirm messaging availability before funding any account." },
      video: { status: "limited", provider: undefined, notes: "Visits alternate between in-person and virtual weeks on the DPSCS rotational schedule. Check the DPSCS BCBIC page for the current week." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail rules are set by DPSCS. No digital photo service confirmed for BCBIC." },
      phone: { status: "available", provider: "GTL", notes: "Fund an AdvancePay prepaid telephone account through ConnectNetwork to accept calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Deposits to ConnectNetwork accounts, including PIN Debit phone accounts, per the DPSCS BCBIC page." },
    },

    rules: [
      "BCDC is closed. Do not send mail, money, or visit requests to the old 401 E. Eager Street address.",
      "Baltimore pretrial intake runs through BCBIC at 300 E. Madison Street.",
      "Phone deposits run through ConnectNetwork, the GTL/ViaPath authorized portal. AdvancePay covers incoming calls, PIN Debit covers the incarcerated individual's phone account.",
      "Visits alternate between in-person and virtual weeks. Detainees are permitted one visit per day.",
      "Confirm current housing through the DPSCS offender search before funding any account, because BCBIC is a short-stay intake center.",
      "All calls, messages, and visits are monitored by DPSCS staff.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone who was taken to Baltimore City Detention Center?",
        answer: "BCDC is closed. People arrested in Baltimore City now go through the Baltimore Central Booking and Intake Center (BCBIC) at 300 E. Madison Street. Phone deposits run through ConnectNetwork: set up an AdvancePay prepaid telephone account to accept calls. Confirm the person's current housing through the DPSCS offender search first, because BCBIC is a short-stay intake center and people are transferred quickly.",
      },
      {
        question: "What is the phone number for Baltimore Central Booking and Intake Center?",
        answer: "No general public phone number is listed on the official DPSCS BCBIC page. To check on someone, use the DPSCS offender search to confirm current housing. For phone accounts and deposits, use ConnectNetwork, the GTL/ViaPath authorized portal.",
      },
      {
        question: "Can I do a video visit at Baltimore Central Booking and Intake Center?",
        answer: "BCBIC visits alternate between in-person and virtual weeks on the DPSCS rotational schedule. Visiting hours are Mon, Tue, Thu, and Fri 4PM to 8PM and Sat and Sun 9AM to 5PM, with no visits on Wednesdays. Detainees are permitted one visit per day. Check the DPSCS BCBIC page for the current week before planning a visit.",
      },
      {
        question: "What happens after someone is convicted and sentenced in Baltimore City?",
        answer: "People sentenced to more than two years are typically transferred to a Maryland DOC state prison after sentencing. At state prisons, the communication provider setup may change. Check the provider applicable to the new facility immediately after any transfer to maintain uninterrupted communication.",
      },
      {
        question: "How do I find out if someone is currently at Baltimore Central Booking and Intake Center?",
        answer: "Use the DPSCS offender search to confirm current detention location and booking status. Do not rely on the old BCDC name or address, because that facility closed in 2015.",
      },
      {
        question: "How do I send money to someone at BCBIC?",
        answer: "Deposits run through ConnectNetwork, the GTL/ViaPath authorized deposit portal named on the DPSCS BCBIC page. You can fund an AdvancePay account or deposit to the individual's PIN Debit phone account. Confirm current housing through the DPSCS offender search before depositing.",
      },
      {
        question: "How do I find or search for an inmate in Baltimore City, Maryland?",
        answer: "Use the DPSCS official inmate search for Baltimore City, Maryland. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Baltimore Central Booking and Intake Center?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the DPSCS BCBIC page before sending. Do not use the old BCDC address.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Baltimore Central Booking and Intake Center?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Baltimore Central Booking and Intake Center?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a visit at Baltimore Central Booking and Intake Center?",
        answer: "Follow the DPSCS BCBIC visiting schedule, which alternates between in-person and virtual weeks. Check the DPSCS BCBIC page for the current week and its cancellation rules before planning a visit.",
      },

    ],

    relatedFacilitySlugs: [
      "philadelphia-detention-center",
      "james-t-vaughn-correctional-center",
      "wake-county-detention-center",
    ],
  },

  "montana-state-prison": {
    id: "f-montana-state-prison",
    name: "Montana State Prison",
    slug: "montana-state-prison",
    type: "state",
    stateSlug: "montana",
    stateName: "Montana",
    stateAbbr: "MT",
    countySlug: null,
    countyName: "Powell County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Montana State Prison: Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone at Montana State Prison in Deer Lodge.",

    description:
      "Montana State Prison communication guide. Find JPay messaging and GTL phone options for families at Montana's maximum-security state prison in Deer Lodge, Powell County.",

    overview: [
      "Montana State Prison is the primary maximum-security state prison in Montana, operated by the Montana Department of Corrections and located in Deer Lodge in Powell County, roughly 75 miles east of Missoula and 80 miles west of Helena. The facility has been operating in Deer Lodge since 1871, making it one of the oldest continuously operating prisons in the western United States. Montana State Prison houses adult male inmates at maximum, medium, and minimum security classifications and serves as the central institution in the Montana DOC system. Deer Lodge is a small town in the Deer Lodge Valley, and the prison complex is a prominent part of the local community.",
      "Communication at Montana State Prison follows Montana DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Montana DOC number to begin correspondence. GTL manages phone calls and video visitation under the MDOC statewide contract. The two-platform model applies: JPay for messaging and money, GTL for phone and video. Each platform requires a separate account and funding; stamps purchased on JPay cannot be used for GTL phone calls.",
      "Deer Lodge sits along I-90 in the Deer Lodge Valley between Missoula and Butte. For Missoula-area families, the drive east on I-90 takes about 75 minutes. For Helena families, Deer Lodge is about 80 miles west, just over an hour. Families in Great Falls, Billings, or eastern Montana face longer drives, making electronic communication and GTL video visits particularly important for regular contact. Montana is a large state with significant driving distances between communities, and the prison's location roughly in the center-west of the state is not near most population centers. Montana DOC accounts carry over if an inmate transfers within the state system.",
    ],

    address: "400 Conley Lake Road, Deer Lodge, MT 59722",
    phone: "(406) 846-1320",
    website: "https://cor.mt.gov",
    inmateCapacity: 1000,
    established: 1871,
    operatedBy: "Montana Department of Corrections (MDOC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Montana DOC number.",
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
        notes: "Phone calls and video visitation under the Montana DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Montana DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by MDOC staff before delivery.",
      "MDOC system-wide accounts carry over if the inmate transfers to another Montana facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Montana State Prison?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Montana DOC number. Purchase stamps and compose your message. MDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Montana State Prison?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Montana State Prison from Missoula and Helena?",
        answer: "Montana State Prison is in Deer Lodge, about 75 miles east of Missoula and 80 miles west of Helena, roughly an hour to an hour and 15 minutes from either city on I-90. For families in Billings or Great Falls, the drive is longer, making electronic communication and GTL video visits more practical for regular contact.",
      },
      {
        question: "Is video visitation available at Montana State Prison?",
        answer: "Yes, through GTL. Remote video visits are available and are especially useful for families in eastern Montana who face a long drive. Log into your GTL account, search for Montana State Prison, and schedule an available slot in advance.",
      },
      {
        question: "How do I send money to a Montana State Prison inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Montana State Prison. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I find or search for an inmate at Montana State Prison?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Powell County, Montana. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Montana State Prison?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Montana State Prison?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Montana State Prison?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Montana State Prison?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "wyoming-medium-correctional-institution",
      "idaho-state-correctional-institution",
      "south-dakota-state-penitentiary",
    ],
  },

  "nebraska-state-penitentiary": {
    id: "f-nebraska-state-pen",
    name: "Nebraska State Penitentiary",
    slug: "nebraska-state-penitentiary",
    type: "state",
    stateSlug: "nebraska",
    stateName: "Nebraska",
    stateAbbr: "NE",
    countySlug: null,
    countyName: "Lancaster County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Nebraska State Penitentiary: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Nebraska State Penitentiary in Lincoln.",

    description:
      "Nebraska State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at Nebraska's maximum-security state prison in Lincoln.",

    overview: [
      "Nebraska State Penitentiary is Nebraska's primary maximum-security state prison, operated by the Nebraska Department of Correctional Services and located in Lincoln in Lancaster County, the state capital. Established in 1869, it is one of the oldest prisons in the Great Plains region and houses adult male inmates at maximum, medium, and minimum security classifications. Lincoln is Nebraska's second largest city and its capital, and the prison complex occupies a prominent site in the southern part of the city. The facility also houses Nebraska's death row and some of the state's most serious long-term offenders.",
      "Communication at Nebraska State Penitentiary follows Nebraska NDCS provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Nebraska DOC number to begin correspondence. GTL manages phone calls and video visitation under the NDCS statewide contract. The two-platform setup applies: JPay for messaging and money, GTL for phone and video. Death row inmates may face more restrictive communication rules than the general maximum-security population. Confirm access directly with the facility for anyone on Nebraska's death row.",
      "Nebraska State Penitentiary's location within Lincoln makes it more accessible than many rural state prisons. Omaha families face a drive of about 50 miles west on I-80, roughly 45 to 50 minutes. For families in Grand Island, Hastings, or Kearney, the drive is longer but still manageable on Nebraska's interstate network. The prison's urban location also means that public transit options in Lincoln serve the surrounding area, though the facility itself requires a car or arranged transportation for in-person visits. Nebraska NDCS accounts carry over to any other Nebraska facility if an inmate transfers.",
    ],

    address: "4201 S. 14th Street, Lincoln, NE 68502",
    phone: "(402) 471-3161",
    website: "https://corrections.nebraska.gov",
    mailingAddress: "Inmate name and number, P.O. Box 22500, Lincoln, NE 68542-2500",
    inmateCapacity: 1800,
    established: 1869,
    operatedBy: "Nebraska Department of Correctional Services (NDCS)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Nebraska DOC number.",
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
        notes: "Phone calls and video visitation under the NDCS statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Available for general population. Death row access may differ, confirm with facility." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Death row video access varies. Confirm before booking." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to NDCS content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Death row inmates may have stricter communication limits, confirm access directly with the facility.",
      "JPay and GTL are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages are reviewed by NDCS staff before delivery.",
      "NDCS system-wide accounts carry over if the inmate transfers to another Nebraska facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Nebraska State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Nebraska DOC number. Purchase stamps and compose your message. NDCS staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Nebraska State Penitentiary?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Nebraska State Penitentiary from Omaha?",
        answer: "The facility is in Lincoln, roughly 50 miles west of Omaha on I-80, about a 45 to 50-minute drive. For Omaha-area families, in-person visits are very accessible. Lincoln is also the state capital, with good road access from most parts of Nebraska.",
      },
      {
        question: "Does Nebraska State Penitentiary house death row inmates?",
        answer: "Yes. Nebraska reinstated capital punishment and NSP houses death row inmates. Death row inmates may face stricter communication restrictions than the general population. Confirm current messaging, phone, and video access with the facility before funding any account for a death row inmate.",
      },
      {
        question: "How do I send money to a Nebraska State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Nebraska State Penitentiary. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I find or search for an inmate at Nebraska State Penitentiary?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Lancaster County, Nebraska. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Nebraska State Penitentiary?",
        answer: "Address mail as follows: Inmate name and number, P.O. Box 22500, Lincoln, NE 68542-2500. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Nebraska State Penitentiary?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Nebraska State Penitentiary?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Nebraska State Penitentiary?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "iowa-state-penitentiary",
      "south-dakota-state-penitentiary",
      "jefferson-city-correctional-center",
    ],
  },

  "new-hampshire-state-prison-for-men": {
    id: "f-nh-state-prison",
    name: "New Hampshire State Prison for Men",
    slug: "new-hampshire-state-prison-for-men",
    type: "state",
    stateSlug: "new-hampshire",
    stateName: "New Hampshire",
    stateAbbr: "NH",
    countySlug: null,
    countyName: "Merrimack County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "NH State Prison: Phone Calls, Messaging and Money Transfer",
    seoDescription: "How to contact someone at New Hampshire State Prison for Men in Concord.",

    description:
      "New Hampshire State Prison for Men communication guide. Find JPay messaging and GTL phone options for families at New Hampshire's maximum-security state prison in Concord.",

    overview: [
      "New Hampshire State Prison for Men is the only maximum-security state prison in New Hampshire, operated by the New Hampshire Department of Corrections and located in Concord in Merrimack County, the state capital. The facility has operated in Concord since 1880 and houses adult male inmates at maximum, medium, and minimum security classifications. As the primary long-term men's facility in the state, it serves as the destination for most male inmates sentenced to more than a year in the New Hampshire system. Concord is a small capital city of roughly 45,000 people, and the prison complex is located near the downtown area.",
      "Communication at New Hampshire State Prison for Men follows NHDOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their New Hampshire DOC number to begin correspondence. GTL manages phone calls and video visitation under the NHDOC statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video, with each requiring its own account and separate funding.",
      "Concord's location in central New Hampshire makes it reasonably accessible from most parts of the state. Manchester, New Hampshire's largest city, is about 20 miles south, a 25-minute drive. For families in the Nashua area or across the Massachusetts border, Concord is about 50 to 70 miles north of Boston. New Hampshire is a relatively small state, and Concord's central location means most state residents are within a two-hour drive. For families in the far north, Berlin, Colebrook, or the North Country, the drive is longer, and JPay messaging and GTL video visits become more important for regular contact.",
    ],

    address: "281 N. State Street, Concord, NH 03301",
    phone: "(603) 271-1800",
    website: "https://www.nh.gov/nhdoc",
    inmateCapacity: 1200,
    established: 1880,
    operatedBy: "New Hampshire Department of Corrections (NHDOC)",
    mailingAddress: "Inmate Name, DOC ID Number, NH State Prison, PO Box 14, Concord, NH 03302. Include the inmate's full name and DOC ID number on every envelope.",
    visitingHours: "Visits are scheduled through the GTL visitation site at nhdoc.gtlvisitme.com/app. Confirm you are on the inmate's approved visitor list before traveling.",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses New Hampshire DOC number.",
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
        notes: "Phone calls and video visitation under the NHDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires New Hampshire DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to NHDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by NHDOC staff before delivery.",
      "NHDOC system-wide accounts carry over if the inmate transfers to another New Hampshire facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at New Hampshire State Prison for Men?",
        answer: "Create a JPay account at jpay.com and add the inmate using their New Hampshire DOC number. Purchase stamps and send your message. NHDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from NHSP?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is NHSP from Manchester and Boston?",
        answer: "New Hampshire State Prison for Men is in Concord, about 20 miles north of Manchester, roughly a 25-minute drive. From Boston, the facility is about 70 miles north on I-93, an hour to an hour and 15 minutes depending on traffic. For southern New Hampshire and northeastern Massachusetts families, in-person visits are very feasible.",
      },
      {
        question: "Is video visitation available at NHSP?",
        answer: "Yes, through GTL. Log into your GTL account, search for New Hampshire State Prison for Men, and schedule an available time slot. Book at least 24 to 48 hours in advance, especially for weekend visits.",
      },
      {
        question: "How do I send money to a NHSP inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select New Hampshire State Prison for Men. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "What is the mailing address for NH State Prison for Men?",
        answer: "Address mail to the inmate's full name and DOC ID number, NH State Prison, PO Box 14, Concord, NH 03302. Mail sent to the street address may not reach the inmate, so use the PO Box for inmate mail.",
      },
      {
        question: "Can I call an inmate at NHSP directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so set up a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from NHSP stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Can I send email to someone at NHSP?",
        answer: "Yes. Inmates can receive email through the GTL vendor service. You need the inmate's email address, which you must get directly from the inmate. Inmates do not have access to the internet.",
      },
      {
        question: "How do I schedule a video visit with someone at NHSP?",
        answer: "Video visits are scheduled through the GTL visitation site at nhdoc.gtlvisitme.com/app. Register for an account, confirm you are on the approved visitor list, and select an available time slot.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "maine-state-prison",
      "mci-cedar-junction",
      "james-t-vaughn-correctional-center",
    ],
  },

  "new-mexico-state-penitentiary": {
    id: "f-nm-state-pen",
    name: "New Mexico State Penitentiary",
    slug: "new-mexico-state-penitentiary",
    type: "state",
    stateSlug: "new-mexico",
    stateName: "New Mexico",
    stateAbbr: "NM",
    countySlug: null,
    countyName: "Santa Fe County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "New Mexico State Penitentiary: Phone Calls and Messaging",
    seoDescription: "How to contact someone at New Mexico State Penitentiary in Santa Fe.",

    description:
      "New Mexico State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at New Mexico's maximum-security state prison south of Santa Fe.",

    overview: [
      "New Mexico State Penitentiary is the primary maximum-security state prison in New Mexico, operated by the New Mexico Corrections Department and located south of Santa Fe in Santa Fe County along State Road 14. The facility gained national attention following the February 1980 prison riot, one of the deadliest in United States history, which resulted in the deaths of 33 inmates and injuries to more than 200 others. The aftermath of the riot led to significant changes in the management of the facility and New Mexico's correctional system overall. Today, the penitentiary houses adult male inmates at close and maximum security classifications and serves as the state's primary high-security institution.",
      "Communication at New Mexico State Penitentiary follows New Mexico Corrections Department provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their New Mexico corrections number to begin correspondence. GTL manages phone calls and video visitation under the NMCD statewide contract. The two-platform model applies: JPay for messaging and money, GTL for phone and video. Both platforms require separate accounts and separate funding.",
      "The facility is located about 13 miles south of Santa Fe on State Road 14, also known as the Turquoise Trail. Santa Fe is roughly 65 miles north of Albuquerque on I-25. For Albuquerque families, the drive to the prison takes about an hour and 15 minutes. For Santa Fe families, the facility is a short drive south. New Mexico is a large state, and families in Albuquerque represent the largest potential visitor base given the metro area's population. JPay messaging and GTL video visits are practical for families in Las Cruces, Roswell, or other parts of the state who face longer drives.",
    ],

    address: "4311 State Highway 14, Santa Fe, NM 87508",
    phone: "(505) 827-8201",
    website: "https://www.cd.nm.gov",
    mailingAddress: "Inmate name and number, P.O. Box 1059, Santa Fe, New Mexico 87504-1059",
    inmateCapacity: 1100,
    established: 1956,
    operatedBy: "New Mexico Corrections Department (NMCD)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses New Mexico corrections number.",
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
        notes: "Phone calls and video visitation under the NMCD statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires New Mexico corrections number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to NMCD content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by NMCD staff before delivery.",
      "NMCD system-wide accounts carry over if the inmate transfers to another New Mexico facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at New Mexico State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their New Mexico corrections number. Purchase stamps and compose your message. NMCD staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from New Mexico State Penitentiary?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is the penitentiary from Albuquerque and Santa Fe?",
        answer: "The facility is about 13 miles south of Santa Fe on State Road 14. From Albuquerque, the drive is roughly 65 to 70 miles north on I-25 and then east, about an hour and 15 minutes. For Santa Fe families, in-person visits are a short drive.",
      },
      {
        question: "Is video visitation available at New Mexico State Penitentiary?",
        answer: "Yes, through GTL. Log into your GTL account, search for New Mexico State Penitentiary, and select an available slot. Schedule at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I send money to a New Mexico State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select New Mexico State Penitentiary. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I find or search for an inmate at New Mexico State Penitentiary?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Santa Fe County, New Mexico. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at New Mexico State Penitentiary?",
        answer: "Address mail as follows: Inmate name and number, P.O. Box 1059, Santa Fe, New Mexico 87504-1059. Include the inmate's full name and ID on every envelope.",
      },
      {
        question: "Can I receive incoming calls from an inmate at New Mexico State Penitentiary?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at New Mexico State Penitentiary?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at New Mexico State Penitentiary?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "arizona-state-prison-complex-florence",
      "utah-state-correctional-facility",
      "wyoming-medium-correctional-institution",
    ],
  },

  "north-dakota-state-penitentiary": {
    id: "f-nd-state-pen",
    name: "North Dakota State Penitentiary",
    slug: "north-dakota-state-penitentiary",
    type: "state",
    stateSlug: "north-dakota",
    stateName: "North Dakota",
    stateAbbr: "ND",
    countySlug: null,
    countyName: "Burleigh County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "North Dakota State Pen: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at North Dakota State Penitentiary in Bismarck.",

    description:
      "North Dakota State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at North Dakota's maximum-security state prison in Bismarck.",

    overview: [
      "North Dakota State Penitentiary is the primary maximum-security state prison in North Dakota, operated by the North Dakota Department of Corrections and Rehabilitation and located in Bismarck in Burleigh County, the state capital. Established in 1885, the facility houses adult male inmates at maximum and medium security classifications and serves as the central institution in the North Dakota correctional system. Bismarck is a mid-sized capital city along the Missouri River in the south-central part of the state, and the prison's location in the capital makes it geographically central relative to North Dakota's population distribution.",
      "Communication at North Dakota State Penitentiary follows NDDOCR provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their North Dakota DOC number to begin correspondence. GTL manages phone calls and video visitation under the NDDOCR statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video, with each requiring its own account.",
      "Bismarck's central location in North Dakota makes the facility more accessible from across the state than a remote rural institution would be. Fargo, North Dakota's largest city, is about 190 miles east on I-94, roughly a two-hour drive. Grand Forks families face a similar distance. For families in Minot or Williston in the northwest, the drive to Bismarck is also roughly two hours or less. North Dakota is a geographically spread-out state, and the prison's location in the capital means it is within a reasonable day-trip range from most populated areas. NDDOCR accounts carry over to any other North Dakota facility if an inmate transfers.",
    ],

    address: "3100 Railroad Drive, Bismarck, ND 58501",
    phone: "(701) 328-6100",
    website: "https://www.docr.nd.gov",
    fax: "701-328-6640",
    inmateCapacity: 850,
    established: 1885,
    operatedBy: "North Dakota Department of Corrections and Rehabilitation (NDDOCR)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses North Dakota DOC number.",
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
        notes: "Phone calls and video visitation under the NDDOCR statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires North Dakota DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to NDDOCR content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by NDDOCR staff before delivery.",
      "NDDOCR system-wide accounts carry over if the inmate transfers to another North Dakota facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at North Dakota State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their North Dakota DOC number. Purchase stamps and compose your message. NDDOCR staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from NDSP?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is NDSP from Fargo?",
        answer: "North Dakota State Penitentiary is in Bismarck, about 190 miles west of Fargo on I-94, roughly a two-hour drive. For families in Minot or Williston, Bismarck is also about two hours southeast. The facility's capital city location makes it one of the more centrally accessible prisons in the upper Midwest.",
      },
      {
        question: "Is video visitation available at North Dakota State Penitentiary?",
        answer: "Yes, through GTL. Log into your GTL account, search for North Dakota State Penitentiary, and schedule an available slot. Book at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I send money to a NDSP inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select North Dakota State Penitentiary. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at North Dakota State Penitentiary?",
        answer: "Use the inmate's full name and DOCR number, followed by North Dakota State Penitentiary, 3100 Railroad Drive, Bismarck, ND 58501. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at North Dakota State Penitentiary directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from North Dakota State Penitentiary stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to NDSP still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the DOCR number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "What happens if my loved one transfers from NDSP to another North Dakota facility?",
        answer: "Your JPay and GTL accounts stay with you, since both are used statewide. Confirm the new facility's visiting rules and phone schedule, because they can differ by facility and custody level.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "south-dakota-state-penitentiary",
      "montana-state-prison",
      "minnesota-correctional-facility-stillwater",
    ],
  },

  "rhode-island-aci-donald-price": {
    id: "f-ri-aci",
    name: "Rhode Island ACI Donald Price Complex",
    slug: "rhode-island-aci-donald-price",
    type: "state",
    stateSlug: "rhode-island",
    stateName: "Rhode Island",
    stateAbbr: "RI",
    countySlug: null,
    countyName: "Providence County",
    securityLevel: "Closed",
    hasDetailPage: true,
    seoTitle: "Rhode Island ACI Donald Price (Closed 2011): Where to Find Someone Now",
    seoDescription: "The Donald Price Medium Security Facility closed in November 2011. Use the RIDOC offender search to confirm current housing.",

    description:
      "The Donald Price Medium Security Facility at the Rhode Island ACI closed in November 2011. This page explains the closure and directs families to the RIDOC offender search to confirm current housing.",

    overview: [
      "The Donald Price Medium Security Facility at the Rhode Island Adult Correctional Institutions (ACI) campus in Cranston closed in November 2011. The Rhode Island Department of Corrections (RIDOC) lists it under closed facilities. This page stays online so families searching for the old facility name find the closure and the current setup instead of outdated contact details. Do not send mail, money, or visit requests to the Donald Price building.",
      "The ACI campus in Cranston still operates other RIDOC housing facilities. Only the Donald Price building closed. People who were housed there were reassigned to other ACI housing. RIDOC has not published a single transfer destination for the 2011 closure, so confirm a person's current housing through the RIDOC offender search before setting up or funding any contact.",
      "Use the RIDOC website at doc.ri.gov for current facility information and the offender search. Confirm the facility name and housing location first, because the provider setup and visiting rules depend on where the person is currently housed.",
    ],

    website: "https://doc.ri.gov",
    operatedBy: "Rhode Island Department of Corrections (RIDOC)",

    providers: [],

    communication: {
      messaging: { status: "limited", provider: undefined, notes: "No messaging service applies to the closed Donald Price building. Confirm current RIDOC housing and that facility's messaging setup." },
      video: { status: "limited", provider: undefined, notes: "No visits apply to the closed Donald Price building. Confirm current RIDOC housing and that facility's visiting rules." },
      photos: { status: "limited", provider: undefined, notes: "No photo service applies to the closed Donald Price building." },
      phone: { status: "limited", provider: undefined, notes: "No phone service applies to the closed Donald Price building. Confirm current RIDOC housing and that facility's phone setup." },
      moneyTransfer: { status: "limited", provider: undefined, notes: "Do not send money to the closed Donald Price building. Confirm current RIDOC housing and that facility's deposit method." },
    },

    rules: [
      "The Donald Price building is closed. Do not send mail, money, or visit requests to it.",
      "Confirm current housing through the RIDOC offender search before funding any account.",
      "The ACI campus in Cranston still operates other RIDOC housing facilities.",
      "Provider setup depends on the person's current facility. Confirm it through RIDOC.",
      "All calls, messages, and visits at RIDOC facilities are monitored under RIDOC policy.",
    ],

    faq: [
      {
        question: "Is the Donald Price facility still open?",
        answer: "No. RIDOC lists the Donald Price Medium Security Facility under closed facilities. It closed in November 2011. Do not send mail, money, or visit requests to the Donald Price building.",
      },
      {
        question: "Where are people who were at Donald Price now?",
        answer: "RIDOC reassigned people to other housing facilities on the ACI campus in Cranston. RIDOC has not published a single transfer destination for the 2011 closure, so confirm a person's current housing through the RIDOC offender search before contacting or funding anything.",
      },
      {
        question: "How do I find someone who was at Donald Price?",
        answer: "Use the RIDOC offender search on doc.ri.gov. Search by name and confirm the current facility before setting up contact.",
      },
      {
        question: "Can I send mail to someone at the Donald Price facility?",
        answer: "No. The building is closed. Confirm the person's current RIDOC housing first, then use the mailing rules for that facility.",
      },
      {
        question: "Can I send money to someone who was at Donald Price?",
        answer: "No. Do not send money to the closed building. Confirm current housing through the RIDOC offender search, then use the deposit method for that facility.",
      },
      {
        question: "Can I visit someone at Donald Price?",
        answer: "No. The building is closed and holds no visits. Confirm current housing and use that facility's visiting rules.",
      },
      {
        question: "Is the whole ACI campus closed?",
        answer: "No. Only the Donald Price building closed. The ACI campus in Cranston still operates other RIDOC housing facilities.",
      },
      {
        question: "What was the Donald Price facility?",
        answer: "The Donald Price Medium Security Facility was a medium security housing facility on the ACI campus in Cranston. RIDOC lists it under closed facilities.",
      },
      {
        question: "How do I contact RIDOC with questions?",
        answer: "Use the contact options on doc.ri.gov. Have the person's full name and RIDOC number ready.",
      },
      {
        question: "What should I do if an old page still lists JPay or GTL for Donald Price?",
        answer: "Treat those as outdated. The building closed in 2011, so no current JPay or GTL account setup applies to Donald Price itself. Confirm current housing and the provider setup for that facility through RIDOC.",
      },
    ],

    relatedFacilitySlugs: [
      "mci-cedar-junction",
      "new-hampshire-state-prison-for-men",
      "new-jersey-state-prison",
    ],
  },

  "south-dakota-state-penitentiary": {
    id: "f-sd-state-pen",
    name: "South Dakota State Penitentiary",
    slug: "south-dakota-state-penitentiary",
    type: "state",
    stateSlug: "south-dakota",
    stateName: "South Dakota",
    stateAbbr: "SD",
    countySlug: null,
    countyName: "Minnehaha County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "SD State Penitentiary: Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone at South Dakota State Penitentiary in Sioux Falls.",

    description:
      "South Dakota State Penitentiary communication guide. Find JPay messaging and GTL phone options for families at South Dakota's maximum-security state prison in Sioux Falls.",

    overview: [
      "South Dakota State Penitentiary is the primary maximum-security state prison in South Dakota, operated by the South Dakota Department of Corrections and located in Sioux Falls in Minnehaha County, South Dakota's largest city. Established in 1881, the facility houses adult male inmates at maximum, close, and medium security classifications and serves as the central maximum-security institution in the South Dakota correctional system. The penitentiary's brick and stone walls are a prominent feature in Sioux Falls, located in the eastern part of the city near the railroad corridor. Sioux Falls is the state's largest city by a wide margin and serves as its economic hub.",
      "Communication at South Dakota State Penitentiary follows South Dakota DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their South Dakota DOC number to begin correspondence. GTL manages phone calls and video visitation under the SDDOC statewide contract. The two-platform model applies: JPay for messaging and money, GTL for phone and video. Each requires a separate account, and funds on one platform cannot be used on the other.",
      "Sioux Falls is in the far southeastern corner of South Dakota, about 85 miles north of Sioux City, Iowa, and about 250 miles southeast of Rapid City. For families in the Sioux Falls metro area, in-person visits to the penitentiary are straightforward. For families in the western part of the state, Rapid City, Deadwood, or the Pine Ridge area, the drive across the state is several hours. JPay messaging and GTL video visits are practical for families who cannot make the cross-state trip. South Dakota DOC accounts carry over to any other South Dakota facility if an inmate transfers within the state system.",
    ],

    address: "1600 N. Drive, Sioux Falls, SD 57104",
    phone: "(605) 367-5100",
    website: "https://doc.sd.gov",
    inmateCapacity: 1700,
    established: 1881,
    operatedBy: "South Dakota Department of Corrections (SDDOC)",
    visitingHours: "Visits must be pre-scheduled and visitors must be on the offender's approved visit list. Visit List Verification forms can take up to 15 business days to process, so apply well before planning a trip.",
    rosterUrl: "http://doc.sd.gov/adult/lookup/",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses South Dakota DOC number.",
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
        notes: "Phone calls and video visitation under the SDDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires South Dakota DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to SDDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by SDDOC staff before delivery.",
      "SDDOC system-wide accounts carry over if the inmate transfers to another South Dakota facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at South Dakota State Penitentiary?",
        answer: "Create a JPay account at jpay.com and add the inmate using their South Dakota DOC number. Purchase stamps and compose your message. SDDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from South Dakota State Penitentiary?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is the penitentiary from Rapid City?",
        answer: "South Dakota State Penitentiary is in Sioux Falls, roughly 350 miles east of Rapid City, about a four to five-hour drive across the state. For western South Dakota families, GTL video visits and JPay messaging are the most practical options for regular contact.",
      },
      {
        question: "Is video visitation available at South Dakota State Penitentiary?",
        answer: "Yes, through GTL. Log into your GTL account, search for South Dakota State Penitentiary, and schedule an available slot in advance. This is especially useful for families in Rapid City or western South Dakota who cannot make the cross-state drive.",
      },
      {
        question: "How do I send money to a South Dakota State Penitentiary inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select South Dakota State Penitentiary. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at South Dakota State Penitentiary?",
        answer: "Use the inmate's full name and DOC number, followed by South Dakota State Penitentiary, 1600 N. Drive, Sioux Falls, SD 57104. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at South Dakota State Penitentiary directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from South Dakota State Penitentiary stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to South Dakota State Penitentiary still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the DOC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How do I schedule a Class 3 video visit with someone at South Dakota State Penitentiary?",
        answer: "Class 3 video visits are scheduled through the GTL VisitMe site once your visitor application is approved. Register online, link your account to the approved offender, and select an available time slot.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "north-dakota-state-penitentiary",
      "iowa-state-penitentiary",
      "nebraska-state-penitentiary",
    ],
  },

  "utah-state-correctional-facility": {
    id: "f-utah-scf",
    name: "Utah State Correctional Facility",
    slug: "utah-state-correctional-facility",
    type: "state",
    stateSlug: "utah",
    stateName: "Utah",
    stateAbbr: "UT",
    countySlug: null,
    countyName: "Salt Lake County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Utah State Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Utah State Correctional Facility in Salt Lake City.",

    description:
      "Utah State Correctional Facility communication guide. Find JPay messaging and GTL phone options for families at Utah's primary state prison in Salt Lake City.",

    overview: [
      "Utah State Correctional Facility is Utah's primary state prison, operated by the Utah Department of Corrections and located in Salt Lake City in Salt Lake County. The facility opened in September 2022, replacing the former Utah State Prison in Draper that had operated since 1951. The new USCF is a modern facility designed to consolidate most of Utah's maximum and medium security male inmates in a single location within the Salt Lake Valley. Its location inside the city limits of Salt Lake City, on the west side near the Salt Lake City International Airport, makes it more centrally accessible than the old Draper facility south of the city.",
      "Communication at Utah State Correctional Facility follows Utah DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Utah DOC number to begin correspondence. GTL manages phone calls and video visitation under the UDOC statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video. Accounts are separate and funding does not transfer between platforms.",
      "USCF's location in Salt Lake City, near the airport and I-80, makes it accessible from across the Wasatch Front metropolitan area. Ogden families are about 40 miles north, and Provo families are about 50 miles south. For families in southern or eastern Utah, St. George, Moab, Price, the drive is longer, making JPay messaging and GTL video visits important for maintaining regular contact without the trip. Utah DOC accounts work system-wide and carry over if an inmate transfers to another Utah facility.",
    ],

    address: "1000 W. Cooley Street, Salt Lake City, UT 84104",
    phone: "(801) 545-5500",
    website: "https://corrections.utah.gov",
    inmateCapacity: 4000,
    established: 2022,
    operatedBy: "Utah Department of Corrections (UDOC)",
    mailingAddress: "Inmate Name, Inmate ID Number, Utah State Correctional Facility, PO Box 165300, Salt Lake City, UT 84116. Include the inmate's full name and ID number on every envelope.",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Utah DOC number.",
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
        notes: "Phone calls and video visitation under the Utah DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Utah DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to UDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "USCF is a new facility that replaced the old Draper prison. Confirm the current facility name when setting up accounts.",
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by UDOC staff before delivery.",
      "UDOC system-wide accounts carry over if the inmate transfers to another Utah facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Utah State Correctional Facility?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Utah DOC number. Purchase stamps and compose your message. UDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from USCF?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "Is this a new facility? What happened to the old Utah State Prison in Draper?",
        answer: "Yes. The Utah State Correctional Facility opened in September 2022, replacing the Utah State Prison in Draper that had operated since 1951. The new facility is in Salt Lake City near the airport. If you had an account set up for the old Draper prison, you may need to update the facility name on your JPay and GTL accounts.",
      },
      {
        question: "Is video visitation available at USCF?",
        answer: "Yes, through GTL. Log into your GTL account, search for Utah State Correctional Facility, and schedule an available slot in advance.",
      },
      {
        question: "How do I send money to a USCF inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Utah State Correctional Facility. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "What is the mailing address for Utah State Correctional Facility?",
        answer: "Address mail to the inmate's full name and ID number, Utah State Correctional Facility, PO Box 165300, Salt Lake City, UT 84116. Mail sent to the street address may not reach the inmate, so use the PO Box for inmate mail.",
      },
      {
        question: "What mail is prohibited at Utah State Correctional Facility?",
        answer: "Prohibited mail includes items with glitter, rhinestones, stickers, or glued items, wax paper letters, shaped-cut photos, sticky notes, newspaper clippings, stapled items, books or magazines, and any form of money. Prohibited mail is returned to the sender.",
      },
      {
        question: "Can I call an inmate at USCF directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from USCF stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to USCF still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the ID number is correct and that you are on the inmate's approved contact list.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "arizona-state-prison-complex-florence",
      "new-mexico-state-penitentiary",
      "wyoming-medium-correctional-institution",
    ],
  },

  "southern-state-correctional-facility": {
    id: "f-sscf-vt",
    name: "Southern State Correctional Facility",
    slug: "southern-state-correctional-facility",
    type: "state",
    stateSlug: "vermont",
    stateName: "Vermont",
    stateAbbr: "VT",
    countySlug: null,
    countyName: "Windsor County",
    securityLevel: "Medium",
    hasDetailPage: true,
    seoTitle: "Southern State Correctional Facility: Phone Calls",
    seoDescription: "How to contact someone at Southern State Correctional Facility.",

    description:
      "Southern State Correctional Facility communication guide. Find JPay messaging and GTL phone options for families at Vermont's medium-security state correctional facility in Springfield.",

    overview: [
      "Southern State Correctional Facility is a medium-security state correctional facility operated by the Vermont Department of Corrections, located in Springfield in Windsor County in the southeastern part of Vermont, roughly 50 miles south of Montpelier and near the Connecticut River that forms the Vermont-New Hampshire border. Vermont operates one of the smaller state correctional systems in the country, and SSCF is one of the department's primary facilities for adult male inmates. The facility is set in the hills of Windsor County near the Black River, and Springfield is a small manufacturing town with roots in the precision tools industry.",
      "Communication at Southern State Correctional Facility follows Vermont DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Vermont DOC number to begin correspondence. GTL manages phone calls and video visitation under the VDOC statewide contract. Vermont DOC uses the same two-platform model as many other state systems: JPay for messaging and money, GTL for phone and video, with separate accounts for each service.",
      "Vermont is a small state, and SSCF's location in Windsor County puts it within reach of most Vermont communities. Burlington, the state's largest city, is about 100 miles north via I-89 and I-91, roughly an hour and 45 minutes. For families in the Upper Valley region along the Connecticut River, the facility is much closer. Vermont also regularly transfers some inmates to out-of-state contracted facilities when its own facilities are at capacity. If your loved one has been transferred out of state, confirm their current location through the Vermont DOC offender search before setting up or funding any communication account.",
    ],

    address: "72 Cedar Street, Springfield, VT 05156",
    phone: "(802) 885-2391",
    website: "https://doc.vermont.gov",
    mailingAddress: "Inmate Name and DOC Number, Southern State Correctional Facility, 700 Charlestown Road, Springfield, VT 05156. Include the inmate's full name and DOC number on every envelope.",
    visitingHours: "Visiting hours vary by unit: Bravo and Charlie Saturday 11:00 AM to 1:00 PM; Delta Sunday 8:30 to 10:30 AM; Echo Saturday 8:30 to 10:30 AM; Fox 2 Saturday 4:00 to 6:00 PM; Fox 3 Sunday 4:00 to 6:00 PM; Gulf Sunday 11:00 AM to 1:00 PM; Hotel Sunday 1:30 to 3:30 PM; India Saturday 1:30 to 3:30 PM; Infirmary Saturday 11:00 AM to 1:00 PM; Alpha visits are scheduled upon request. Confirm the unit schedule before traveling.",
    fax: "(802) 909-2520",
    inmateCapacity: 500,
    established: 1985,
    operatedBy: "Vermont Department of Corrections (VDOC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Vermont DOC number.",
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
        notes: "Phone calls and video visitation under the Vermont DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Vermont DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to VDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Vermont sometimes transfers inmates to out-of-state contracted facilities. Confirm current location before setting up accounts.",
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by VDOC staff before delivery.",
      "VDOC system-wide accounts carry over if the inmate transfers within Vermont or to an out-of-state facility under DOC contract.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Southern State Correctional Facility?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Vermont DOC number. Purchase stamps and compose your message. VDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Southern State?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "Does Vermont ever transfer inmates to facilities in other states?",
        answer: "Yes. Vermont has historically contracted with out-of-state facilities when its own facilities are at or over capacity. If your loved one is in the Vermont DOC system, use the VDOC offender search at doc.vermont.gov to confirm their current location before setting up any accounts.",
      },
      {
        question: "Is video visitation available at Southern State?",
        answer: "Yes, through GTL. Log into your GTL account, search for Southern State Correctional Facility, and select an available slot. Schedule at least 24 hours in advance.",
      },
      {
        question: "How do I send money to a Southern State inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Southern State Correctional Facility. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Southern State Correctional Facility?",
        answer: "Use the inmate's full name and DOC number, followed by Southern State Correctional Facility, 72 Cedar Street, Springfield, VT 05156. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Southern State directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Southern State stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Southern State still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the DOC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How do I find out about bail for someone at Southern State?",
        answer: "Southern State also serves as a jail for surrounding counties, so some people there are pretrial detainees. Bail is set by the court, not by the facility. Contact the court that handled the case to confirm the bail amount and how to post it.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "maine-state-prison",
      "mci-cedar-junction",
      "new-hampshire-state-prison-for-men",
    ],
  },

  "wyoming-medium-correctional-institution": {
    id: "f-wyoming-mci",
    name: "Wyoming Medium Correctional Institution",
    slug: "wyoming-medium-correctional-institution",
    type: "state",
    stateSlug: "wyoming",
    stateName: "Wyoming",
    stateAbbr: "WY",
    countySlug: null,
    countyName: "Carbon County",
    securityLevel: "Medium / Close",
    hasDetailPage: true,
    seoTitle: "Wyoming Medium Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Wyoming Medium Correctional Institution in Torrington.",

    description:
      "Wyoming Medium Correctional Institution communication guide. Find JPay messaging and GTL phone options for families at Wyoming's primary state correctional facility in Rawlins.",

    overview: [
      "Wyoming Medium Correctional Institution (WMCI) is Wyoming's primary state correctional facility, operated by the Wyoming Department of Corrections and located in Rawlins in Carbon County in the south-central part of the state, along I-80 roughly midway between Cheyenne and Rock Springs. WMCI opened in 2012 as the successor to the historic Wyoming State Penitentiary that had operated in Rawlins since 1901, and today serves as the main close and medium-security facility for adult male inmates in the Wyoming correctional system. Rawlins is a small high-plains city whose history and economy have long been connected to both the railroad and the prison.",
      "Communication at WMCI follows Wyoming DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Wyoming DOC number to begin correspondence. GTL manages phone calls and video visitation under the WDOC statewide contract. The two-platform model applies: JPay for messaging and money, GTL for phone and video, with separate accounts and no shared funding between platforms.",
      "Rawlins sits on I-80 in Carbon County, 105 miles west of Cheyenne and about 120 miles east of Rock Springs. For Cheyenne families, the drive west on I-80 takes about an hour and 15 minutes. For Casper families, the drive south on US-287 is about 90 miles, roughly an hour and 20 minutes. Wyoming is a large, sparsely populated state, and the I-80 corridor that runs through Rawlins is the main east-west transportation artery. Families in northern Wyoming, Gillette, Sheridan, or Jackson, face longer drives and typically rely more on JPay and GTL video visits for regular contact.",
    ],

    address: "7836 S. Wolcott Street, Rawlins, WY 82301",
    phone: "(307) 324-2706",
    website: "https://corrections.wyo.gov",
    inmateCapacity: 1600,
    established: 2012,
    operatedBy: "Wyoming Department of Corrections (WDOC)",
    mailingAddress: "Inmate Name, Inmate Number, Wyoming Medium Correctional Institution, 7076 Road 55F, Torrington, WY 82240. Include the inmate's full name and number, since mail without a complete address is returned.",
    fax: "(307) 532-3240",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Wyoming DOC number.",
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
        notes: "Phone calls and video visitation under the Wyoming DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Wyoming DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to WDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "WMCI replaced the historic Wyoming State Penitentiary in 2012. The new facility uses the same provider setup.",
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by WDOC staff before delivery.",
      "WDOC system-wide accounts carry over if the inmate transfers to another Wyoming facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Wyoming Medium Correctional Institution?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Wyoming DOC number. Purchase stamps and compose your message. WDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from WMCI?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is WMCI from Cheyenne and Casper?",
        answer: "WMCI is in Rawlins, about 105 miles west of Cheyenne on I-80, roughly an hour and 15 minutes. From Casper, the drive south on US-287 is about 90 miles, about an hour and 20 minutes. For families in northern Wyoming, JPay messaging and GTL video visits are more practical for regular contact.",
      },
      {
        question: "Is this the same location as the old Wyoming State Penitentiary?",
        answer: "Yes. The Wyoming Medium Correctional Institution is in Rawlins, the same city where the historic Wyoming State Penitentiary operated since 1901. WMCI opened in 2012 as the replacement for the old facility. If you are searching for inmate information under the old penitentiary name, use the WDOC offender search at corrections.wyo.gov to confirm current housing.",
      },
      {
        question: "How do I send money to a WMCI inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Wyoming Medium Correctional Institution. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "What is the mailing address for Wyoming Medium Correctional Institution?",
        answer: "Address mail to the inmate's full name and number, Wyoming Medium Correctional Institution, 7076 Road 55F, Torrington, WY 82240. Mail that is not addressed properly is returned to the inmate or sender.",
      },
      {
        question: "Can I call an inmate at WMCI directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from WMCI stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Is WMCI an intake facility?",
        answer: "Yes. WMCI serves as an intake center for men entering Wyoming Department of Corrections custody who are not sentenced to death. A new arrival is classified at intake and may then move to a permanent facility, so confirm the current location before planning a visit.",
      },
      {
        question: "Where do I send a WMCI visitor application?",
        answer: "Mail or fax the completed visitor application directly to WMCI. Do not send applications to the WDOC Central Office in Cheyenne, since applications sent there are not processed.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "idaho-state-correctional-institution",
      "montana-state-prison",
      "utah-state-correctional-facility",
    ],
  },

  // ─── Group B: Single-Coverage States ───

  "macdougall-walker-correctional-institution": {
    id: "f-macdougall-walker",
    name: "MacDougall-Walker Correctional Institution",
    slug: "macdougall-walker-correctional-institution",
    type: "state",
    stateSlug: "connecticut",
    stateName: "Connecticut",
    stateAbbr: "CT",
    countySlug: null,
    countyName: "Tolland County",
    securityLevel: "High",
    hasDetailPage: true,
    seoTitle: "MacDougall-Walker Correctional: Free Calls and Messaging",
    seoDescription: "How to contact someone at MacDougall-Walker Correctional Institution in Connecticut. Connecticut offers free phone calls at state facilities.",

    description:
      "MacDougall-Walker Correctional Institution communication guide. Find JPay messaging and GTL phone options for families at Connecticut's largest state prison in Suffield.",

    overview: [
      "MacDougall-Walker Correctional Institution is Connecticut's largest state prison, operated by the Connecticut Department of Correction and located in Suffield in Tolland County in north-central Connecticut, about 15 miles north of Hartford near the Massachusetts border. The facility was formed by combining two adjacent institutions, the MacDougall Unit and the Walker Unit, into a single administrative complex. MacDougall-Walker houses adult male inmates at high security classification and serves as one of the primary long-term institutions in the Connecticut DOC system. Suffield is a small town in the Connecticut River Valley, accessible from I-91 north of Hartford.",
      "Communication at MacDougall-Walker follows Connecticut DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Connecticut DOC number to begin correspondence. GTL manages phone calls and video visitation under the CT DOC statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video. These are separate services with separate accounts, stamps on JPay cannot be used for GTL phone calls.",
      "MacDougall-Walker's location in Suffield, about 15 miles north of Hartford, makes it accessible for families in the Hartford metro area. For families in New Haven, Bridgeport, or Stamford in southwestern Connecticut, the drive is longer, roughly 1.5 to 2 hours. The facility is near the Bradley International Airport corridor and I-91, making it accessible from Massachusetts as well. Connecticut is a relatively compact state, and most CT residents can reach the facility within two hours. For families in New York City or out of state, JPay and GTL video visits are the most practical means of regular contact.",
    ],

    address: "1153 East Street South, Suffield, CT 06078",
    phone: "(860) 668-6000",
    website: "https://portal.ct.gov/DOC",
    inmateCapacity: 2200,
    established: 1994,
    operatedBy: "Connecticut Department of Correction (CT DOC)",
    visitingHours: "Walker Building visits run in three blocks: 8:30 AM to 11:00 AM, 12:45 PM to 2:45 PM, and 7:00 PM to 9:45 PM, with days and contact or noncontact status assigned by housing unit. There are no visits on Connecticut state holidays. Administrative Segregation and Security Risk Group visits are limited and must be scheduled in advance.",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Connecticut DOC number.",
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
        notes: "Phone calls and video visitation under the Connecticut DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Connecticut DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to CT DOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by CT DOC staff before delivery.",
      "CT DOC system-wide accounts carry over if the inmate transfers to another Connecticut facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at MacDougall-Walker?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Connecticut DOC number. Purchase stamps and compose your message. CT DOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from MacDougall-Walker?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is MacDougall-Walker from Hartford?",
        answer: "The facility is in Suffield, about 15 miles north of Hartford on I-91, roughly a 20-minute drive. For families in the Hartford metro area, in-person visits are very accessible. From New Haven or Bridgeport, the drive is about 1.5 to 2 hours.",
      },
      {
        question: "Is video visitation available at MacDougall-Walker?",
        answer: "Yes, through GTL. Log into your GTL account, search for MacDougall-Walker Correctional Institution, and schedule an available slot. Book at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I send money to a MacDougall-Walker inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select MacDougall-Walker Correctional Institution. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at MacDougall-Walker?",
        answer: "Use the inmate's full name and inmate number, followed by MacDougall-Walker Correctional Institution, 1153 East Street South, Suffield, CT 06078. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at MacDougall-Walker directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from MacDougall-Walker stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to MacDougall-Walker still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the inmate number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "Does it matter whether my loved one is in the MacDougall or Walker building?",
        answer: "Yes. The two buildings have separate visiting schedules, and the published schedule covers the Walker Building. Confirm which building and housing unit your loved one is in, then check that building's visiting schedule before traveling.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "fci-danbury",
      "new-jersey-state-prison",
      "sci-phoenix",
    ],
  },

  "lansing-correctional-facility": {
    id: "f-lansing-cf",
    name: "Lansing Correctional Facility",
    slug: "lansing-correctional-facility",
    type: "state",
    stateSlug: "kansas",
    stateName: "Kansas",
    stateAbbr: "KS",
    countySlug: null,
    countyName: "Leavenworth County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Lansing Correctional Facility: Phone Calls and Messaging",
    seoDescription: "How to contact someone at Lansing Correctional Facility in Kansas.",

    description:
      "Lansing Correctional Facility communication guide. Find JPay messaging and GTL phone options for families at Kansas's largest state prison in Leavenworth County.",

    overview: [
      "Lansing Correctional Facility is Kansas's largest state prison, operated by the Kansas Department of Corrections and located in Lansing in Leavenworth County in northeastern Kansas, about 25 miles northwest of Kansas City and roughly 5 miles from the city of Leavenworth. The current facility was built in phases beginning in 1863 and expanded significantly over the following century. It houses adult male inmates at maximum, medium, and minimum security classifications and serves as the central institution in the Kansas DOC system. Lansing's location in the Kansas City metropolitan corridor makes it one of the more accessible state prisons in the region.",
      "Communication at Lansing Correctional Facility follows Kansas DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Kansas DOC number to begin correspondence. GTL manages phone calls and video visitation under the KDOC statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video. These are separate services requiring separate accounts and separate funding.",
      "Lansing is in Leavenworth County, close to both the city of Leavenworth and the federal penitentiary FCI Leavenworth. For Kansas City, Missouri families, the drive across the state line to Lansing is about 35 to 40 minutes northwest on I-70. For families in Topeka, the state capital, the facility is about 35 miles east, a 40-minute drive. Families in Wichita face a longer drive of about 3 hours. The facility's northeastern location makes it very accessible for the Kansas City metro market, which spans both Kansas and Missouri. KDOC accounts carry over to any other Kansas facility if an inmate transfers.",
    ],

    address: "301 E. Kansas Avenue, Lansing, KS 66043",
    phone: "(913) 727-3235",
    website: "https://www.doc.ks.gov",
    inmateCapacity: 2300,
    established: 1863,
    operatedBy: "Kansas Department of Corrections (KDOC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Kansas DOC number.",
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
        notes: "Phone calls and video visitation under the KDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Kansas DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to KDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Lansing Correctional Facility and FCI Leavenworth are nearby but separate institutions under different jurisdictions.",
      "JPay and GTL are separate platforms. Messaging and phone funds do not transfer between them.",
      "Messages are reviewed by KDOC staff before delivery.",
      "KDOC system-wide accounts carry over if the inmate transfers to another Kansas facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Lansing Correctional Facility?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Kansas DOC number. Purchase stamps and compose your message. KDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Lansing?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "Is Lansing Correctional Facility the same as FCI Leavenworth?",
        answer: "No. Lansing Correctional Facility is a Kansas state prison operated by the Kansas Department of Corrections. FCI Leavenworth is a federal penitentiary operated by the Bureau of Prisons. They are separate institutions in the same geographic area under entirely different jurisdictions, with different inmate populations and communication setups.",
      },
      {
        question: "How far is Lansing from Kansas City?",
        answer: "Lansing is in Leavenworth County, about 35 to 40 miles northwest of downtown Kansas City, Missouri, roughly a 40-minute drive on I-70. For Kansas City metro families on both sides of the state line, in-person visits are very accessible.",
      },
      {
        question: "How do I send money to a Lansing inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Lansing Correctional Facility. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Lansing Correctional Facility?",
        answer: "Use the inmate's full name and inmate ID number, followed by Lansing Correctional Facility, 301 E. Kansas Avenue, Lansing, KS 66043. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Lansing directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Lansing stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Lansing still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the inmate ID number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "What happens if my loved one transfers from Lansing to another Kansas facility?",
        answer: "Your JPay and GTL accounts stay with you, since both are used statewide. Confirm the new facility's visiting rules and phone schedule, because they can differ by facility and custody level.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "fci-leavenworth",
      "potosi-correctional-center",
      "jefferson-city-correctional-center",
    ],
  },

  "suffolk-county-house-of-correction": {
    id: "f-suffolk-hoc",
    name: "Suffolk County House of Correction",
    slug: "suffolk-county-house-of-correction",
    type: "county",
    stateSlug: "massachusetts",
    stateName: "Massachusetts",
    stateAbbr: "MA",
    countySlug: null,
    countyName: "Suffolk County",
    securityLevel: "Pretrial / Sentenced",
    hasDetailPage: true,
    seoTitle: "Suffolk County HOC: Phone Calls, Messaging and Money",
    seoDescription: "How to contact someone at Suffolk County House of Correction in Boston MA.",

    description:
      "Suffolk County House of Correction communication guide. Find GTL phone and video options for families in Boston. Learn how to stay connected at this major Boston-area detention facility.",

    overview: [
      "Suffolk County House of Correction is a correctional facility operated by the Suffolk County Sheriff's Department, located in the South Bay neighborhood of Boston in Suffolk County. The facility serves as one of the primary detention and correction facilities in the Boston area, housing both pretrial detainees awaiting court proceedings in Suffolk County and individuals serving sentences of up to two and a half years. Boston is Massachusetts's largest city and the hub of the state's criminal justice system, and the HOC serves a substantial daily population drawn from across the county.",
      "Communication at Suffolk County House of Correction is managed through GTL, which provides phone calls, video visitation, and electronic messaging services under the county sheriff contract. Families create a GTL account at telmate.com to access all services. Funding a GTL AdvancePay account linked to your phone number allows you to receive inmate-initiated calls. Remote video visits can be scheduled through the GTL platform. Electronic messaging via GTL delivers communications digitally within the facility. One GTL account covers all communication at the HOC.",
      "Suffolk County House of Correction uses GTL under a county contract, separate from the provider arrangements used by Massachusetts state prisons. If someone is sentenced to more than two and a half years, they are transferred to a Massachusetts DOC state facility, where JPay is the primary messaging platform and a different provider handles phone calls. Until that transfer, GTL is the correct platform. The HOC is located near I-93 and the Southeast Expressway in Boston, accessible from all major highways serving the city. Public transit via the Red Line and bus routes serves the South Bay area.",
    ],

    address: "20 Bradston Street, Boston, MA 02118",
    phone: "(617) 961-6720",
    website: "https://www.suffolksheriff.com",
    inmateCapacity: 700,
    established: 1990,
    operatedBy: "Suffolk County Sheriff's Department",

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
        notes: "Primary provider for all Suffolk County HOC communication, phone, video, messaging, and commissary.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Monitored by Suffolk County Sheriff's staff." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available through GTL. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to Suffolk County content restrictions. No digital photo service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "GTL", notes: "Commissary deposits via GTL or AccessCorrections." },
    },

    rules: [
      "GTL serves Suffolk County HOC. After transfer to a MA state prison, JPay is required for messaging.",
      "All calls, messages, and visits are monitored by Suffolk County Sheriff's staff.",
      "One GTL account covers all HOC communication services.",
      "Video visits require advance scheduling through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Suffolk County House of Correction?",
        answer: "All communication at Suffolk County HOC, phone, video, messaging, and money, goes through GTL. Create a single account at telmate.com or the GTL Connect app. One account covers all services.",
      },
      {
        question: "Can I do a video visit at Suffolk County HOC?",
        answer: "Yes, remote video visits are available through GTL. Log into your account, search for Suffolk County House of Correction, and select an available slot. Book at least 24 to 48 hours in advance.",
      },
      {
        question: "What changes when someone is transferred to a Massachusetts state prison?",
        answer: "After conviction and sentencing to more than two and a half years, a person transfers to a Massachusetts DOC state facility. At state prisons, JPay is the primary messaging and money platform. The GTL account from the HOC may not carry over. Set up a JPay account after any transfer to a state facility.",
      },
      {
        question: "How do I find out if someone is at Suffolk County HOC?",
        answer: "The Suffolk County Sheriff's Department provides an inmate search on their website at suffolksheriff.com. You can search by name to confirm current booking and custody status.",
      },
      {
        question: "How do I send money to a Suffolk County HOC inmate?",
        answer: "Commissary deposits are made through GTL at telmate.com or through AccessCorrections. Add funds via debit or credit card. Processing typically takes one business day.",
      },
      {
        question: "How do I find or search for an inmate at Suffolk County House of Correction?",
        answer: "Use the Sheriff's office or department of corrections official inmate search or roster for Suffolk County, Massachusetts. If the inmate does not appear, allow 24 to 72 hours after booking and try alternate spellings.",
      },
      {
        question: "How do I send mail to an inmate at Suffolk County House of Correction?",
        answer: "Include the inmate's full name and ID on every envelope and follow the facility's mail rules. Confirm the current mailing address on the facility's official page before sending.",
      },
      {
        question: "Can I receive incoming calls from an inmate at Suffolk County House of Correction?",
        answer: "No. Inmates can only call out, so you cannot call an inmate directly. The inmate must call you, and your number must be on their approved list.",
      },
      {
        question: "How do I block or stop calls from an inmate at Suffolk County House of Correction?",
        answer: "Contact the facility's phone provider and ask to block the number, or block the number through your own phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I schedule or cancel a video visit at Suffolk County House of Correction?",
        answer: "Schedule video visits through the facility's video visit provider or visitation system. Cancel the same way, as early as possible, and check the facility's visitation page for its cancellation rules.",
      },

    ],

    relatedFacilitySlugs: [
      "mci-cedar-junction",
      "rhode-island-aci-donald-price",
      "philadelphia-detention-center",
    ],
  },

  "mcf-oak-park-heights": {
    id: "f-mcf-oak-park-heights",
    name: "MCF Oak Park Heights",
    slug: "mcf-oak-park-heights",
    type: "state",
    stateSlug: "minnesota",
    stateName: "Minnesota",
    stateAbbr: "MN",
    countySlug: null,
    countyName: "Washington County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "MCF Oak Park Heights: Free Calls, Messaging and Money",
    seoDescription: "How to contact someone at MCF Oak Park Heights in Minnesota. Minnesota DOC phone calls are free for families. No prepaid account needed.",

    description:
      "MCF Oak Park Heights communication guide. Find JPay messaging and GTL phone options for families at Minnesota's only supermax-level state prison in Washington County.",

    overview: [
      "Minnesota Correctional Facility Oak Park Heights (MCF Oak Park Heights) is Minnesota's highest-security state prison, operated by the Minnesota Department of Corrections and located in Oak Park Heights in Washington County along the St. Croix River, about 20 miles east of Saint Paul. Opened in 1982, MCF Oak Park Heights was one of the first purpose-built, underground correctional facilities in the United States and is designed to house the state's most dangerous and high-profile inmates. The facility sits below ground level for security purposes and is known for its stringent control unit environment. Inmates at Oak Park Heights include those convicted of the most serious offenses in Minnesota as well as gang leaders and individuals posing heightened security risks.",
      "Communication at MCF Oak Park Heights follows Minnesota DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Minnesota DOC number to begin correspondence. GTL manages phone calls and video visitation under the MNDOC statewide contract. Due to the facility's high-security classification, communication access may be more restricted than at medium-security Minnesota facilities. Phone and messaging privileges are tied to individual inmate behavior and security classification. Confirm current access with the facility before setting up or funding accounts.",
      "MCF Oak Park Heights is in Washington County, about 20 miles east of Saint Paul near the city of Stillwater. The facility is close to MCF Stillwater, Minnesota's oldest prison, and both are in the western St. Croix Valley. For Twin Cities families, both facilities are accessible from the eastern metro area. The proximity to MCF Stillwater means some families have experience with the Washington County correctional area. For families elsewhere in Minnesota, Duluth, Rochester, or the Iron Range, JPay and GTL video visits are the most practical options for regular contact. Minnesota DOC accounts carry over between facilities if an inmate transfers within the state system.",
    ],

    address: "5329 Osgood Avenue North, Stillwater, MN 55082",
    phone: "(651) 779-3400",
    website: "https://mn.gov/doc",
    visitingHours: "Visits must be scheduled no less than 24 hours and no more than 10 days in advance, by calling 651-779-1400 option 3 then option 6, or through the online scheduling option. Visits last 1 hour with a maximum of 4 visitors. Visiting hours: Thursday and Friday 10:20 AM to 2:00 PM, Saturday 7:10 AM to 4:30 PM. No visiting Sunday through Wednesday or on listed state holidays.",
    inmateCapacity: 420,
    established: 1982,
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
        notes: "Phone calls and video visitation under the MNDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "limited", provider: "JPay", notes: "Available based on individual privilege level. High-security restrictions may apply." },
      video: { status: "limited", provider: "GTL", notes: "Available for eligible inmates. Restrictions vary by security status. Confirm before booking." },
      photos: { status: "limited", provider: "JPay", notes: "Digital photos via JPay subject to high-security content and privilege restrictions." },
      phone: { status: "limited", provider: "GTL", notes: "Phone access tied to privilege level. Confirm current access with the facility." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "MCF Oak Park Heights is Minnesota's highest-security facility. Communication access depends on individual privilege level.",
      "JPay and GTL are separate platforms. Messaging and phone funds are not interchangeable.",
      "Messages are reviewed by MNDOC staff before delivery.",
      "Confirm current phone, video, and messaging access with the facility before funding accounts.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at MCF Oak Park Heights?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Minnesota DOC number. Purchase stamps and compose your message. Due to the high-security environment, messaging access depends on the inmate's individual privilege level. Confirm that messaging is active before purchasing stamps.",
      },
      {
        question: "How do I set up phone calls from MCF Oak Park Heights?",
        answer: "Phone calls use GTL. Create an account at telmate.com or the GTL Connect app and set up a prepaid AdvancePay account. However, at Oak Park Heights, phone access is tied to the inmate's privilege level. Confirm current access before funding the account.",
      },
      {
        question: "Why is communication more restricted at Oak Park Heights than at other Minnesota prisons?",
        answer: "MCF Oak Park Heights is Minnesota's highest-security facility, designed for the most dangerous or high-risk offenders. Communication privileges, including phone, messaging, and video, are tied to behavior and security classification. Some inmates may have full access while others face significant restrictions based on their status.",
      },
      {
        question: "How far is MCF Oak Park Heights from downtown Saint Paul?",
        answer: "The facility is in Oak Park Heights in Washington County, about 20 miles east of downtown Saint Paul, roughly a 30 to 35-minute drive. It is near MCF Stillwater and the St. Croix River. For Twin Cities families, in-person visits are logistically accessible.",
      },
      {
        question: "How do I send money to an MCF Oak Park Heights inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select MCF Oak Park Heights. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at MCF Oak Park Heights?",
        answer: "Use the inmate's full name and OID number, followed by MCF Oak Park Heights, 5329 Osgood Avenue North, Stillwater, MN 55082. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Oak Park Heights directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Oak Park Heights stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Oak Park Heights still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear, and access is more restricted here than at other Minnesota prisons. If a message stays pending longer, confirm the OID number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How do I schedule a video visit with someone at Oak Park Heights?",
        answer: "Video visitation is limited at this facility. Set up a GTL account, confirm you are on the inmate's approved visitor list, and check the current video visit rules with the facility before booking.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "minnesota-correctional-facility-stillwater",
      "stateville-correctional-center",
      "marquette-branch-prison",
    ],
  },

  "central-mississippi-correctional-facility": {
    id: "f-cmcf-ms",
    name: "Central Mississippi Correctional Facility",
    slug: "central-mississippi-correctional-facility",
    type: "state",
    stateSlug: "mississippi",
    stateName: "Mississippi",
    stateAbbr: "MS",
    countySlug: null,
    countyName: "Rankin County",
    securityLevel: "Medium / Close",
    hasDetailPage: true,
    seoTitle: "CMCF: Central Mississippi Correctional Facility Phone, Mail",
    seoDescription: "Central Mississippi Correctional Facility (CMCF) in Pearl MS. GTL ConnectNetwork for phone calls. JPay for money transfers.",

    description:
      "Central Mississippi Correctional Facility (CMCF) is a Mississippi Department of Corrections state prison located at PO Box 88550, 3794 Highway 468 in Pearl, Rankin County, Mississippi 39208. CMCF houses adult male and female inmates with a capacity of approximately 3,557. Phone calls use GTL ViaPath ConnectNetwork. Money transfers use JPay or Western Union with DOC code 135.",

    overview: [
      "Central Mississippi Correctional Facility (CMCF) is a Mississippi Department of Corrections state prison located in an unincorporated area of Rankin County between the cities of Pearl and Brandon, Mississippi. The mailing address is PO Box 88550, 3794 Highway 468, Pearl, MS 39208. The facility phone number is 601-932-2880. CMCF houses adult male and female inmates and has a capacity of approximately 3,557. To locate an inmate at CMCF, use the MDOC inmate search at mdoc.ms.gov or call the MDOC Central Office switchboard at 601-359-5600.",
      "Phone calls from CMCF are handled through GTL ViaPath ConnectNetwork. To receive calls, create a free ConnectNetwork account at connectnetwork.com or call ConnectNetwork customer service at 877-650-4249. You will need the inmate MDOC number to set up the account. All calls from CMCF are outgoing only and are monitored and recorded. The inmate must initiate all calls from facility phones. Only approved numbers on the inmate call list can receive calls.",
      "Money can be sent to CMCF inmates through JPay at jpay.com, by phone through JPay at 1-800-574-5729, through Western Union using DOC receive code 135, or through Premier Services of the Mississippi government. Always include the inmate full name and MDOC number on all transactions. For mail, send to: Inmate Name, MDOC Number, CMCF, PO Box 88550, 3794 Hwy 468, Pearl, MS 39208. All incoming mail is inspected before delivery.",
    ],

    address: "PO Box 88550, 3794 Highway 468, Pearl, MS 39208",
    phone: "(601) 932-2880",
    website: "https://www.mdoc.ms.gov",
    inmateCapacity: 3557,
    established: 1984,
    operatedBy: "Mississippi Department of Corrections (MDOC)",
    fax: "Superintendent's office: (601) 664-0782. Records department: (601) 932-9077.",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Mississippi DOC number.",
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
        notes: "Phone calls and video visitation under the MDOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Mississippi DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "CMCF serves as both a housing and intake facility. Newly admitted women may have a brief delay before full communication access.",
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by MDOC staff before delivery.",
      "MDOC system-wide accounts carry over if the inmate transfers to another Mississippi facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "What is CMCF and where is it located?",
        answer: "CMCF stands for Central Mississippi Correctional Facility. It is a Mississippi Department of Corrections state prison located at PO Box 88550, 3794 Highway 468, Pearl, MS 39208 in Rankin County between the cities of Pearl and Brandon. The facility phone number is 601-932-2880.",
      },
      {
        question: "What is the CMCF mailing address for inmate mail?",
        answer: "The mailing address for inmate mail at CMCF is: Inmate Full Name, MDOC Number, Central Mississippi Correctional Facility, PO Box 88550, 3794 Hwy 468, Pearl, MS 39208. Always include the inmate full name and MDOC number on the envelope. All incoming mail is inspected before delivery.",
      },
      {
        question: "What is the CMCF phone number?",
        answer: "The Central Mississippi Correctional Facility phone number is 601-932-2880. For inmate custody status, recent transfers, or release information call this number directly. For MDOC-wide inmate search call the MDOC Central Office switchboard at 601-359-5600.",
      },
      {
        question: "Which provider handles phone calls at CMCF?",
        answer: "GTL ViaPath ConnectNetwork handles phone calls at Central Mississippi Correctional Facility. Create a free ConnectNetwork account at connectnetwork.com or call 877-650-4249. You need the inmate MDOC number. All calls are outgoing only from the inmate. Your number must be on the inmate approved call list.",
      },
      {
        question: "How do I send money to someone at CMCF?",
        answer: "Send money to CMCF inmates through JPay at jpay.com, by phone at 1-800-574-5729, through Western Union using DOC receive code 135, or through Premier Services of the Mississippi government. Always include the inmate full name and MDOC number. Funds are credited to the inmate trust account.",
      },
      {
        question: "How do I find someone at Central Mississippi Correctional Facility?",
        answer: "Use the MDOC inmate search at mdoc.ms.gov to find the MDOC number and current facility. You can also call the MDOC Central Office switchboard at 601-359-5600 or the facility directly at 601-932-2880. The MDOC number is required for all communication accounts, money transfers, and mail.",
      },
      {
        question: "What does CMCF WC mean?",
        answer: "CMCF WC refers to the Work Center unit at Central Mississippi Correctional Facility. CMCF has multiple units including R&C which stands for Reception and Classification, and WC which is the Work Center. When corresponding with an inmate, confirm which specific unit they are assigned to as unit assignment affects housing location within the facility.",
      },
      {
        question: "What does CMCF R&C mean?",
        answer: "CMCF R&C stands for Reception and Classification at Central Mississippi Correctional Facility. The R&C unit is where new inmates are processed and classified when they first arrive at CMCF. After classification, inmates are assigned to their permanent housing unit within the facility. During the R&C process communication may be limited.",
      },
      {
        question: "My JPay video visit for CMCF failed or disconnected. Can I get a refund?",
        answer: "JPay video visit refunds depend on who caused the failure. If the visit never started due to a technical problem on JPay's side, contact JPay support with your visit confirmation number. Document the exact time and error message. See our JPay video visit refund guide for the step-by-step process.",
      },
      {
        question: "Why do I get an error message when logging into JPay for a CMCF inmate?",
        answer: "Common causes are using an email tied to another JPay account, entering the wrong state during setup, or a locked account after too many attempts. Make sure you selected Mississippi and entered the inmate MDOC number exactly. See our JPay error messages guide for what each error means and how to fix it.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "mississippi-state-penitentiary",
      "holman-correctional-facility",
      "cummins-unit",
    ],
  },

  "jefferson-city-correctional-center": {
    id: "f-jefferson-city-cc",
    name: "Jefferson City Correctional Center",
    slug: "jefferson-city-correctional-center",
    type: "state",
    stateSlug: "missouri",
    stateName: "Missouri",
    stateAbbr: "MO",
    countySlug: null,
    countyName: "Cole County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Jefferson City Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Jefferson City Correctional Center in Missouri.",

    description:
      "Jefferson City Correctional Center communication guide. Find JPay messaging and GTL phone options for families at Missouri's maximum-security state prison in the state capital.",

    overview: [
      "Jefferson City Correctional Center is Missouri's primary maximum-security state prison, operated by the Missouri Department of Corrections and located in Jefferson City in Cole County, the state capital, on the south bank of the Missouri River. The current facility opened in 2004, built on the same grounds as the historic Missouri State Penitentiary that had operated in Jefferson City since 1836 and became one of the longest continuously operated prisons in the country before closing. JCCC houses adult male inmates at maximum and close security classifications and serves as the destination for Missouri's most serious long-term offenders.",
      "Communication at Jefferson City Correctional Center follows Missouri DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Missouri DOC number to begin correspondence. GTL manages phone calls and video visitation under the MODOC statewide contract. The standard two-platform model applies: JPay for messaging and money, GTL for phone and video. Each platform requires its own account, and funds are not transferable between them.",
      "Jefferson City is located on I-70 in the center of Missouri, roughly 130 miles west of St. Louis and 150 miles east of Kansas City. For both metro areas, the drive to JCCC is under two hours. For families in Columbia, about 30 miles east on I-70, the drive is very short. Jefferson City's central location in Missouri makes it one of the more geographically accessible state prisons for families across the state. Missouri DOC accounts work system-wide and carry over to any other Missouri facility if an inmate is transferred.",
    ],

    address: "8200 No More Victims Road, Jefferson City, MO 65101",
    phone: "(573) 751-3224",
    website: "https://doc.mo.gov",
    visitingHours: "Institution hours listed by Missouri DOC: Friday, Saturday, and Sunday 9:30 AM to 1:30 PM and 2:30 PM to 6:30 PM. Confirm the current visiting schedule before traveling.",
    fax: "(573) 751-1277",
    inmateCapacity: 1800,
    established: 2004,
    operatedBy: "Missouri Department of Corrections (MODOC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Missouri DOC number.",
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
        notes: "Phone calls and video visitation under the Missouri DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Missouri DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to MODOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by MODOC staff before delivery.",
      "MODOC system-wide accounts carry over if the inmate transfers to another Missouri facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Jefferson City Correctional Center?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Missouri DOC number. Purchase stamps and compose your message. MODOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from JCCC?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is JCCC from St. Louis and Kansas City?",
        answer: "Jefferson City is on I-70 roughly 130 miles west of St. Louis and 150 miles east of Kansas City, about an hour and 45 minutes from either city. For Columbia-area families, the facility is about 30 miles east, a short drive. JCCC's central Missouri location makes it accessible from both sides of the state.",
      },
      {
        question: "Is video visitation available at Jefferson City Correctional Center?",
        answer: "Yes, through GTL. Log into your GTL account, search for Jefferson City Correctional Center, and select an available slot. Book at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I send money to a JCCC inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Jefferson City Correctional Center. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Jefferson City Correctional Center?",
        answer: "Use the inmate's full name and DOC ID number, followed by Jefferson City Correctional Center, 8200 No More Victims Road, Jefferson City, MO 65101. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at JCCC directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from JCCC stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to JCCC still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the DOC ID number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "What happens if my loved one transfers from JCCC to another Missouri facility?",
        answer: "Your JPay and GTL accounts stay with you, since both are used statewide. Confirm the new facility's visiting rules and phone schedule, because they can differ by facility and custody level.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "potosi-correctional-center",
      "lansing-correctional-facility",
      "iowa-state-penitentiary",
    ],
  },

  "clark-county-detention-center": {
    id: "f-clark-county-detention",
    name: "Clark County Detention Center",
    slug: "clark-county-detention-center",
    type: "county",
    stateSlug: "nevada",
    stateName: "Nevada",
    stateAbbr: "NV",
    countySlug: null,
    countyName: "Clark County",
    securityLevel: "Pretrial",
    hasDetailPage: true,
    seoTitle: "Clark County Detention Center: Phone Calls and Jail",
    seoDescription: "How to contact someone at Clark County Detention Center in Las Vegas NV.",

    description:
      "Clark County Detention Center communication guide. Find GTL phone and video options for families in Las Vegas. Learn how to stay connected at Nevada's largest county detention facility.",

    overview: [
      "Clark County Detention Center (CCDC) is the primary pretrial detention facility operated by the Las Vegas Metropolitan Police Department, located in downtown Las Vegas in Clark County. CCDC is one of the largest single-site jails in the western United States, processing tens of thousands of bookings annually from across the Las Vegas metropolitan area. The Las Vegas Valley, including Las Vegas, North Las Vegas, Henderson, and the surrounding unincorporated areas, is the most populous region in Nevada, and CCDC serves as the main intake and pretrial holding center for Clark County's criminal court system. The facility is located in the heart of downtown Las Vegas near the courthouse complex.",
      "Communication at Clark County Detention Center is managed through GTL, which provides phone calls, video visitation, and electronic messaging services under the county contract. Families create a GTL account at telmate.com to access those services. Funding a GTL AdvancePay account linked to your phone number allows you to receive inmate-initiated calls. Remote video visits are available and can be scheduled through the GTL platform. Electronic messaging via GTL delivers communications digitally within the facility. Trust account deposits go through TouchPay.",
      "CCDC is located in downtown Las Vegas on Casino Center Boulevard, near the Las Vegas city hall and courthouse complex. The facility is accessible from I-15, US-95, and major surface streets through downtown. For Las Vegas metro families, in-person visits are logistically practical given the facility's central downtown location. For families from out of state, particularly those from California, Arizona, or Utah whose loved one was arrested in Las Vegas, remote GTL video visits and messaging are the most practical tools for maintaining contact across state lines. People held at CCDC are typically in pretrial status; after conviction, sentences of more than one year result in transfer to a Nevada DOC state facility.",
    ],

    address: "330 S. Casino Center Blvd., Las Vegas, NV 89101",
    phone: "(702) 671-3900",
    website: "https://www.lvmpd.com",
    mailingAddress: "Inmate Name, Inmate ID Number\nClark County Detention Center\nPO Box 43059\nLas Vegas, NV 89116",
    inmateCapacity: 3500,
    established: 1981,
    operatedBy: "Las Vegas Metropolitan Police Department (LVMPD)",
    visitingHours: "Register online at the GTL VisitMe portal or in person, 8am to 10:30pm daily. No visit for 24 hours after registration. General-population social visits are two 25-minute visits per week. On-site booth visits are free. Social visiting hours are Monday through Friday, 7am to 10:30am and 7pm to 11pm; Saturday and Sunday, 7am to 10:30am, 12:30pm to 3pm, and 7pm to 11pm. Confirm the current schedule with the facility before traveling.",
    rosterUrl: "https://www.lvmpd.com/about/sections/clark-county-detention-center/inmate-search",
    commissary: "Trust account deposits through TouchPay.",

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
        notes: "Provides phone service, video visits, and messaging.",
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
      messaging: { status: "available", provider: "GTL", notes: "Electronic messaging via GTL. Monitored by LVMPD staff." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available through GTL. Useful for out-of-state families. Schedule in advance." },
      photos: { status: "limited", provider: undefined, notes: "Physical photo mail subject to LVMPD content restrictions. No digital photo service." },
      phone: { status: "available", provider: "GTL", notes: "Fund a GTL AdvancePay account to receive inmate-initiated calls." },
      moneyTransfer: { status: "available", provider: "TouchPay", notes: "Trust account deposits through TouchPay." },
    },

    rules: [
      "GTL serves CCDC. After transfer to a Nevada DOC state facility, a different provider may apply.",
      "All calls, messages, and visits are monitored by LVMPD staff.",
      "GTL covers phone, video, and messaging; TouchPay handles trust account deposits.",
      "Video visits require advance scheduling through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I contact someone at Clark County Detention Center?",
        answer: "Phone, video, and messaging at CCDC go through GTL. Create an account at telmate.com or the GTL Connect app. Trust account deposits go through TouchPay.",
      },
      {
        question: "Can I do a video visit at CCDC from out of state?",
        answer: "Yes. GTL remote video visits are available and are especially useful for families in California, Arizona, Utah, or other states whose loved one was arrested in Las Vegas. Log into your GTL account, select Clark County Detention Center, and schedule an available slot at least 24 hours in advance.",
      },
      {
        question: "What happens after someone is convicted and sentenced at CCDC?",
        answer: "People sentenced to more than one year are transferred to a Nevada Department of Corrections state facility. Nevada state prisons may use a different provider setup than CCDC. Confirm the applicable provider for the new facility immediately after any transfer.",
      },
      {
        question: "How do I find out if someone is in Clark County Detention Center?",
        answer: "The Las Vegas Metropolitan Police Department provides an inmate search at lvmpd.com. Search by name to confirm current booking and custody status at CCDC.",
      },
      {
        question: "How do I send money to a CCDC inmate?",
        answer: "Trust account deposits go through TouchPay. Create a TouchPay account, add the inmate, and fund the account.",
      },
      {
        question: "What is CCDC North?",
        answer: "CCDC North, also called the North Valley Complex, is part of the Clark County Detention Center system in Las Vegas.",
      },
      {
        question: "How do I register to visit someone at Clark County Detention Center?",
        answer: "Register online at the GTL VisitMe portal or in person, 8am to 10:30pm daily. No visit is allowed for 24 hours after registration.",
      },
      {
        question: "How much do video visits cost at Clark County Detention Center?",
        answer: "On-site booth visits are free. Remote video visits cost $6.25 per visit. Confirm current rates with the facility.",
      },
      {
        question: "Can an inmate at Clark County Detention Center call me?",
        answer: "Yes. Inmates place outgoing calls through GTL (ViaPath). Keep your number on the approved list. Inmates cannot receive incoming calls.",
      },
      {
        question: "How do I block calls from Clark County Detention Center?",
        answer: "Contact GTL to block calls from the facility, or block the number through your phone carrier. You can also ask the facility to remove your number from the inmate's approved list.",
      },
      {
        question: "How do I visit someone at Clark County Detention Center?",
        answer: "Visitors must be approved. Bring valid photo ID and follow LVMPD visiting rules. Confirm visiting hours before traveling.",
      },
    ],

    relatedFacilitySlugs: [
      "high-desert-state-prison",
      "maricopa-county-jail",
      "los-angeles-county-mens-central-jail",
    ],
  },

  "dick-conner-correctional-center": {
    id: "f-dick-conner",
    name: "Dick Conner Correctional Center",
    slug: "dick-conner-correctional-center",
    type: "state",
    stateSlug: "oklahoma",
    stateName: "Oklahoma",
    stateAbbr: "OK",
    countySlug: null,
    countyName: "Osage County",
    securityLevel: "Medium",
    hasDetailPage: true,
    seoTitle: "Dick Conner Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Dick Conner Correctional Center in Hominy OK.",

    description:
      "Dick Conner Correctional Center communication guide. Find JPay messaging and GTL phone options for families at this medium-security Oklahoma DOC facility in Hominy.",

    overview: [
      "Dick Conner Correctional Center is a medium-security state prison operated by the Oklahoma Department of Corrections, located in Hominy in Osage County in northeastern Oklahoma, about 55 miles northwest of Tulsa. Named after a former Oklahoma DOC director, the facility houses adult male inmates at medium security classification and is one of the significant mid-size prisons in the northeastern part of the state. Hominy is a small town in Osage County, which is part of the Osage Nation tribal territory. The facility opened in 1983 and provides correctional programming and work opportunities for medium-security inmates.",
      "Communication at Dick Conner Correctional Center follows Oklahoma DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Oklahoma DOC number to begin correspondence. GTL manages phone calls and video visitation under the ODOC statewide contract. The two-platform model applies: JPay for messaging and money, GTL for phone and video. These are separate accounts, stamps and phone funds are not transferable between them. At a medium-security facility like Dick Conner, communication access is generally broader and more routine than at the Oklahoma State Penitentiary.",
      "Hominy is about 55 miles northwest of Tulsa on US-412 and US-60. For Tulsa-area families, the drive takes about an hour. For families in Oklahoma City, the facility is about 120 miles northeast, roughly one and a half to two hours. The relatively shorter drive from Tulsa compared to Oklahoma's maximum-security facilities in McAlester makes Dick Conner a more accessible option for northeastern Oklahoma families. ODOC accounts work system-wide and carry over to any other Oklahoma facility if an inmate is reclassified and transferred.",
    ],

    address: "19004 Otter Creek Road, Hominy, OK 74035",
    phone: "(918) 885-7615",
    website: "https://oklahoma.gov/doc",
    inmateCapacity: 1600,
    established: 1983,
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
        notes: "Phone calls and video visitation under the ODOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Medium-security allows routine access." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ODOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by ODOC staff before delivery.",
      "ODOC system-wide accounts carry over if the inmate transfers to another Oklahoma facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Dick Conner Correctional Center?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Oklahoma DOC number. Purchase stamps and compose your message. ODOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Dick Conner?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Dick Conner from Tulsa?",
        answer: "Dick Conner is in Hominy, about 55 miles northwest of Tulsa on US-412, roughly an hour's drive. For Tulsa-area families, in-person visits are a reasonable day trip. From Oklahoma City, the drive is about 120 miles northeast, taking one and a half to two hours.",
      },
      {
        question: "Do accounts carry over if my loved one transfers to another Oklahoma facility?",
        answer: "Yes. JPay and GTL serve all Oklahoma DOC facilities under statewide contracts. Your accounts and contact history carry over automatically to any other ODOC facility after a transfer.",
      },
      {
        question: "How do I send money to a Dick Conner inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Dick Conner Correctional Center. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Dick Conner Correctional Center?",
        answer: "Use the inmate's full name and DOC number, followed by Dick Conner Correctional Center, 19004 Otter Creek Road, Hominy, OK 74035. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Dick Conner directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Dick Conner stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Dick Conner still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the DOC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How do I schedule a video visit with someone at Dick Conner?",
        answer: "Video visits are scheduled through GTL. Set up a GTL account, confirm you are on the inmate's approved visitor list, and book an available time slot in advance.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "oklahoma-state-penitentiary",
      "huntsville-unit",
      "cummins-unit",
    ],
  },

  "snake-river-correctional-institution": {
    id: "f-snake-river-ci",
    name: "Snake River Correctional Institution",
    slug: "snake-river-correctional-institution",
    type: "state",
    stateSlug: "oregon",
    stateName: "Oregon",
    stateAbbr: "OR",
    countySlug: null,
    countyName: "Malheur County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Snake River Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Snake River Correctional Institution in Ontario OR.",

    description:
      "Snake River Correctional Institution communication guide. Find JPay messaging and Securus phone options for families at Oregon's largest state prison in Ontario, Malheur County.",

    overview: [
      "Snake River Correctional Institution (SRCI) is Oregon's largest state prison, operated by the Oregon Department of Corrections and located in Ontario in Malheur County in the far eastern corner of Oregon, along the Idaho border near the Snake River. Opened in 1991, SRCI houses adult male inmates at maximum security classification and is one of the primary long-term institutions in the Oregon DOC system. Ontario is a small agricultural city on the Oregon-Idaho border, and its location roughly 375 miles east of Portland and 60 miles west of Boise makes it one of the more geographically remote state prisons in the Pacific Northwest. The facility's distance from the Willamette Valley, Oregon's main population corridor, means most families rely heavily on electronic communication.",
      "Communication at Snake River Correctional Institution follows Oregon DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Oregon DOC number to begin correspondence. Securus Technologies manages phone calls and video visitation under the ODOC statewide contract. Oregon uses JPay for messaging and money and Securus for phone and video, these are separate platforms requiring separate accounts. Setting up a Securus account allows families to receive inmate-initiated calls and schedule video visits.",
      "Ontario is in Malheur County near the Idaho border, about 60 miles west of Boise and more than six hours east of Portland. For Boise-area families in Idaho, SRCI is actually the closest Oregon state prison, accessible within about an hour's drive. For Willamette Valley families in Portland, Salem, or Eugene, the facility's distance makes regular in-person visits impractical, and JPay messaging and Securus video visits become the primary means of contact. Oregon DOC accounts carry over to any other Oregon facility if an inmate is transferred within the state system.",
    ],

    address: "777 Stanton Blvd., Ontario, OR 97914",
    phone: "(541) 881-5000",
    website: "https://www.oregon.gov/doc",
    visitingHours: "Snake River takes walk-in visits rather than ICSolutions-scheduled visits. Submit a visiting application to the Visiting Services Unit by email, fax, or mail before visiting. People in special housing (DSU, IMU, ASU) must pre-schedule with the Visiting Front Desk at 1-541-881-4577.",
    inmateCapacity: 3000,
    established: 1991,
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
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Oregon DOC number." },
      video: { status: "available", provider: "Securus", notes: "Remote video visits available. Especially practical given the remote eastern Oregon location." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to ODOC content guidelines." },
      phone: { status: "available", provider: "Securus", notes: "Inmate-initiated calls via Securus. Fund prepaid account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay handles messaging and money. Securus handles phone and video. Both require separate accounts.",
      "Messages are reviewed by ODOC staff before delivery.",
      "ODOC system-wide accounts carry over if the inmate transfers to another Oregon facility.",
      "Video visits must be scheduled in advance through Securus.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Snake River Correctional Institution?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Oregon DOC number. Purchase stamps and compose your message. ODOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Snake River?",
        answer: "Phone calls from SRCI use Securus. Create an account at securustech.net or through the Securus app. Set up a prepaid account linked to your phone number and add funds. The inmate will call you from facility phones.",
      },
      {
        question: "How far is Snake River from Portland?",
        answer: "Snake River Correctional Institution is in Ontario, roughly 375 miles east of Portland, more than a six-hour drive. For Boise, Idaho families, the facility is about 60 miles west, a much shorter trip. For Portland-area families, Securus video visits and JPay messaging are far more practical for regular contact than making the cross-state drive.",
      },
      {
        question: "Why does Oregon use Securus for phone calls instead of GTL?",
        answer: "Oregon DOC contracts with Securus Technologies for phone and video services at state facilities. Oregon uses JPay for messaging and Securus for phone and video, using GTL will not work at SRCI or other Oregon state prisons.",
      },
      {
        question: "How do I send money to a Snake River inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Snake River Correctional Institution. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Snake River Correctional Institution?",
        answer: "Use the inmate's full name and SID number, followed by Snake River Correctional Institution, 777 Stanton Blvd., Ontario, OR 97914. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Snake River directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through Securus, so set up a Securus account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Snake River stop coming through?",
        answer: "Calls usually stop when the Securus balance runs out, the number leaves the approved call list, or phone privileges change. Check the Securus balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Snake River still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the SID number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How do I schedule a video visit with someone at Snake River?",
        answer: "Video visits are scheduled through Securus. Set up a Securus account, confirm you are on the inmate's approved visitor list, and book an available time slot in advance.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "oregon-state-penitentiary",
      "washington-state-penitentiary",
      "idaho-state-correctional-institution",
    ],
  },

  "lee-correctional-institution": {
    id: "f-lee-correctional",
    name: "Lee Correctional Institution",
    slug: "lee-correctional-institution",
    type: "state",
    stateSlug: "south-carolina",
    stateName: "South Carolina",
    stateAbbr: "SC",
    countySlug: null,
    countyName: "Lee County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Lee Correctional Institution: Phone Calls, Messaging and",
    seoDescription: "How to contact someone at Lee Correctional Institution.",

    description:
      "Lee Correctional Institution communication guide. Find JPay messaging and GTL phone options for families at South Carolina's maximum-security state prison in Bishopville.",

    overview: [
      "Lee Correctional Institution is South Carolina's maximum-security state prison, operated by the South Carolina Department of Corrections and located in Bishopville in Lee County in the central part of the state, roughly 45 miles east of Columbia. Opened in 1993, the facility houses adult male inmates at maximum security classification and is considered the most secure prison in the South Carolina DOC system. Lee Correctional gained significant national attention following a large-scale riot in April 2018 that resulted in the deaths of seven inmates and injuries to many others, making it one of the deadliest prison incidents in recent U.S. history. The facility subsequently underwent significant security and operational reviews.",
      "Communication at Lee Correctional Institution follows South Carolina DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their South Carolina DOC number to begin correspondence. GTL manages phone calls and video visitation under the SCDC statewide contract. The two-platform model applies: JPay for messaging and money, GTL for phone and video. As with South Carolina's other state facilities, these platforms require separate accounts with separate funding.",
      "Lee County is in the Pee Dee region of central South Carolina, roughly 45 miles east of Columbia on I-20 and US-15. For Columbia-area families, the drive is about 45 minutes. For families in the Sumter or Florence area, the facility is even closer. For Charlotte-area families in North Carolina, the drive is about two hours. Lee County is a rural area, and the prison is the county's largest employer. South Carolina DOC accounts work system-wide and carry over to any other SCDC facility if an inmate is transferred.",
    ],

    address: "990 Prison Road, Bishopville, SC 29010",
    phone: "(803) 484-5851",
    website: "https://www.doc.sc.gov",
    inmateCapacity: 1500,
    established: 1993,
    operatedBy: "South Carolina Department of Corrections (SCDC)",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses South Carolina DOC number.",
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
        notes: "Phone calls and video visitation under the SCDC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires South Carolina DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to SCDC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by SCDC staff before delivery.",
      "SCDC system-wide accounts carry over if the inmate transfers to another South Carolina facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Lee Correctional Institution?",
        answer: "Create a JPay account at jpay.com and add the inmate using their South Carolina DOC number. Purchase stamps and compose your message. SCDC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Lee Correctional?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Lee Correctional from Columbia?",
        answer: "Lee Correctional Institution is in Bishopville in Lee County, about 45 miles east of Columbia on I-20 and US-15, roughly a 45-minute drive. For families in Sumter or Florence, the facility is even closer.",
      },
      {
        question: "Is video visitation available at Lee Correctional Institution?",
        answer: "Yes, through GTL. Log into your GTL account, search for Lee Correctional Institution, and select an available slot. Schedule at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I send money to a Lee Correctional inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Lee Correctional Institution. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Lee Correctional Institution?",
        answer: "Use the inmate's full name and SCDC number, followed by Lee Correctional Institution, 990 Prison Road, Bishopville, SC 29010. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Lee Correctional directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Lee Correctional stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Lee Correctional still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the SCDC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How do I schedule a video visit with someone at Lee Correctional?",
        answer: "Video visits are scheduled through GTL. Set up a GTL account, confirm you are on the inmate's approved visitor list, and book an available time slot in advance.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "broad-river-correctional-institution",
      "holman-correctional-facility",
      "georgia-diagnostic-and-classification-prison",
    ],
  },

  "monroe-correctional-complex": {
    id: "f-monroe-complex",
    name: "Monroe Correctional Complex",
    slug: "monroe-correctional-complex",
    type: "state",
    stateSlug: "washington",
    stateName: "Washington",
    stateAbbr: "WA",
    countySlug: null,
    countyName: "Snohomish County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Monroe Correctional Complex: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Monroe Correctional Complex in Monroe WA.",

    description:
      "Monroe Correctional Complex communication guide. Find JPay messaging and GTL phone options for families at Washington's major state prison complex in Monroe, Snohomish County.",

    overview: [
      "Monroe Correctional Complex is a major state correctional facility operated by the Washington Department of Corrections, located in Monroe in Snohomish County, about 30 miles northeast of Seattle. The complex includes several units at different security levels, including the Twin Rivers Unit, the Special Offender Unit, the Minimum Security Unit, and others, making it one of the largest and most varied correctional campuses in Washington state. Monroe houses adult male inmates at maximum, medium, and minimum security classifications. Its location in western Washington, close to the Seattle metropolitan area, makes it one of the most accessible state prisons for the largest concentration of Washington families.",
      "Communication at Monroe Correctional Complex follows Washington DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Washington DOC number to begin correspondence. GTL manages phone calls and video visitation under the WDOC statewide contract. The two-platform model applies: JPay for messaging and money, GTL for phone and video. These are separate accounts, stamps and phone credits are not transferable between platforms.",
      "Monroe is in Snohomish County about 30 miles northeast of Seattle via US-2 and SR-522, roughly a 40 to 45-minute drive from the city in normal traffic conditions. For families in Everett, Marysville, or north Seattle, the facility is even closer. The proximity to the Seattle metro area makes Monroe one of the most visited state prisons in Washington, given how much of the state's population lives in the Puget Sound region. For families east of the Cascades in Spokane or Yakima, the drive is several hours, and JPay and GTL video visits are the most practical options for regular contact. Washington DOC accounts carry over to any other Washington facility if an inmate transfers.",
    ],

    address: "16550 177th Avenue SE, Monroe, WA 98272",
    phone: "(360) 794-2690",
    website: "https://doc.wa.gov",
    mailingAddress: "Inmate Name and DOC Number, Monroe Correctional Complex, P.O. Box 777, Monroe, WA 98272. Include the inmate's full name and DOC number on every envelope.",
    visitingHours: "Visits require an approved visitor application. Regular visiting hours vary by housing unit, so check the WA DOC Monroe visiting page and facility alerts before traveling. From January 1, 2026, all visits at the Washington State Reformatory Unit require advance scheduling.",
    inmateCapacity: 2400,
    established: 1910,
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
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to WDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "Monroe Correctional Complex includes multiple units. Confirm which unit your loved one is assigned to before scheduling visits.",
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by WDOC staff before delivery.",
      "WDOC system-wide accounts carry over if the inmate transfers to another Washington facility.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Monroe Correctional Complex?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Washington DOC number. Purchase stamps and compose your message. WDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Monroe?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Monroe Correctional Complex from Seattle?",
        answer: "Monroe is about 30 miles northeast of Seattle via US-2, roughly a 40 to 45-minute drive in normal traffic. For families in Everett or north Seattle, the facility is even closer. Monroe's proximity to the Seattle metro makes it one of the most accessible state prisons in Washington.",
      },
      {
        question: "Does Monroe have multiple units? Which one is my loved one in?",
        answer: "Yes. Monroe Correctional Complex includes several units, the Twin Rivers Unit, Special Offender Unit, Minimum Security Unit, and others, each housing inmates at different security levels. Use the WDOC offender search at doc.wa.gov to confirm the specific unit your loved one is assigned to before scheduling visits or sending mail.",
      },
      {
        question: "How do I send money to a Monroe Correctional Complex inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Monroe Correctional Complex. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Monroe Correctional Complex?",
        answer: "Use the inmate's full name and DOC number, followed by Monroe Correctional Complex, 16550 177th Avenue SE, Monroe, WA 98272. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Monroe directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Monroe stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Monroe still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the DOC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How do I schedule a video visit with someone at Monroe?",
        answer: "Video visits are scheduled through GTL. Set up a GTL account, confirm you are on the inmate's approved visitor list, and book an available time slot in advance.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "washington-state-penitentiary",
      "snake-river-correctional-institution",
      "mcf-oak-park-heights",
    ],
  },

  "green-bay-correctional-institution": {
    id: "f-green-bay-ci",
    name: "Green Bay Correctional Institution",
    slug: "green-bay-correctional-institution",
    type: "state",
    stateSlug: "wisconsin",
    stateName: "Wisconsin",
    stateAbbr: "WI",
    countySlug: null,
    countyName: "Brown County",
    securityLevel: "Maximum",
    hasDetailPage: true,
    seoTitle: "Green Bay Correctional: Phone Calls and Messaging Guide",
    seoDescription: "How to contact someone at Green Bay Correctional Institution in Wisconsin.",

    description:
      "Green Bay Correctional Institution communication guide. Find JPay messaging and GTL phone options for families at Wisconsin's maximum-security state prison in Brown County.",

    overview: [
      "Green Bay Correctional Institution is Wisconsin's primary maximum-security state prison, operated by the Wisconsin Department of Corrections and located in the city of Green Bay in Brown County in northeastern Wisconsin, roughly 110 miles north of Milwaukee. Established in 1898, GBCI houses adult male inmates at maximum security classification and is one of the central institutions in the Wisconsin DOC system. The facility sits within the city limits of Green Bay, Wisconsin's third-largest city and home of the Green Bay Packers NFL franchise. The city's northeastern location along Lake Michigan and the Fox River makes it accessible from both Milwaukee and the Fox Valley communities.",
      "Communication at Green Bay Correctional Institution follows Wisconsin DOC provider contracts. JPay handles electronic messaging, photo sharing, and money transfers. Families create a JPay account and add the inmate using their Wisconsin DOC number to begin correspondence. GTL manages phone calls and video visitation under the Wisconsin DOC statewide contract. The two-platform model applies: JPay for messaging and money, GTL for phone and video. As with other Wisconsin state facilities, these are separate accounts requiring separate funding.",
      "Green Bay's location in northeastern Wisconsin puts it about 110 miles north of Milwaukee, roughly an hour and 45 minutes on I-43. For families in the Fox Cities, Appleton, Oshkosh, Fond du Lac, the facility is 30 to 60 miles south, making visits accessible. For Madison-area families, the drive north is about 140 miles, roughly two hours. For families in northern Wisconsin, the facility is actually more accessible than Milwaukee-area prisons. Wisconsin DOC accounts work system-wide and carry over to any other Wisconsin facility if an inmate is transferred.",
    ],

    address: "2935 S. Military Avenue, Green Bay, WI 54307",
    phone: "(920) 432-4877",
    website: "https://doc.wi.gov",
    inmateCapacity: 1400,
    established: 1898,
    operatedBy: "Wisconsin Department of Corrections (WDOC)",
    visitingHours: "In-person visits must be scheduled at least 7 days in advance, are limited to 90 minutes, and are capped at 6 per week with a maximum of 2 per day, per the Wisconsin DOC visitation notice. Confirm current rules before traveling.",

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
        notes: "Electronic messaging, photo sharing, and trust account deposits. Uses Wisconsin DOC number.",
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
        notes: "Phone calls and video visitation under the Wisconsin DOC statewide contract.",
      },
    ],

    communication: {
      messaging: { status: "available", provider: "JPay", notes: "Full JPay messaging available. Requires Wisconsin DOC number." },
      video: { status: "available", provider: "GTL", notes: "Remote video visits available. Schedule in advance through GTL." },
      photos: { status: "available", provider: "JPay", notes: "Digital photos via JPay. Subject to WDOC content guidelines." },
      phone: { status: "available", provider: "GTL", notes: "Inmate-initiated calls via GTL. Fund AdvancePay account to receive calls." },
      moneyTransfer: { status: "available", provider: "JPay", notes: "Trust account deposits via JPay for commissary and personal purchases." },
    },

    rules: [
      "JPay and GTL are separate platforms. Messaging stamps and phone funds are not interchangeable.",
      "Messages are reviewed by WDOC staff before delivery.",
      "WDOC system-wide accounts carry over if the inmate transfers to another Wisconsin facility.",
      "Video visits must be scheduled in advance through GTL.",
      "Senders must be on the inmate's approved contact list.",
    ],

    faq: [
      {
        question: "How do I message someone at Green Bay Correctional Institution?",
        answer: "Create a JPay account at jpay.com and add the inmate using their Wisconsin DOC number. Purchase stamps and compose your message. WDOC staff review messages before delivery, typically within 24 to 48 hours.",
      },
      {
        question: "How do I set up phone calls from Green Bay CI?",
        answer: "Phone calls use GTL. Create an account at telmate.com or through the GTL Connect app. Set up a prepaid AdvancePay account linked to your phone number and add funds. The inmate calls you from facility phones.",
      },
      {
        question: "How far is Green Bay CI from Milwaukee?",
        answer: "Green Bay Correctional Institution is in Green Bay, about 110 miles north of Milwaukee on I-43, roughly an hour and 45 minutes. For families in the Fox Cities, Appleton, Oshkosh, the facility is 30 to 60 miles south. For Madison families, the drive is about 140 miles north, taking around two hours.",
      },
      {
        question: "Is video visitation available at Green Bay Correctional Institution?",
        answer: "Yes, through GTL. Log into your GTL account, search for Green Bay Correctional Institution, and select an available slot. Book at least 24 to 48 hours in advance.",
      },
      {
        question: "How do I send money to a Green Bay CI inmate?",
        answer: "Trust account deposits are made through JPay. Log in, go to Send Money, and select Green Bay Correctional Institution. Add funds via debit or credit card. Processing typically takes one to two business days.",
      },
      {
        question: "How do I address mail to someone at Green Bay Correctional Institution?",
        answer: "Use the inmate's full name and DOC number, followed by Green Bay Correctional Institution, 2935 S. Military Avenue, Green Bay, WI 54307. Include a complete return address. All mail is inspected before delivery.",
      },
      {
        question: "Can I call an inmate at Green Bay CI directly?",
        answer: "No. Inmates cannot receive incoming calls. They place outgoing calls to approved numbers through GTL, so fund a GTL AdvancePay account and confirm your number is on the approved call list.",
      },
      {
        question: "Why did calls from Green Bay CI stop coming through?",
        answer: "Calls usually stop when the GTL balance runs out, the number leaves the approved call list, or phone privileges change. Check the GTL balance first, then confirm with the inmate that your number is still approved.",
      },
      {
        question: "Why is my JPay message to Green Bay CI still pending?",
        answer: "Messages are reviewed before delivery and can take a day or two to appear. If a message stays pending longer, confirm the DOC number is correct and that you are on the inmate's approved contact list.",
      },
      {
        question: "How do I schedule a video visit with someone at Green Bay CI?",
        answer: "Video visits are scheduled through GTL. Set up a GTL account, confirm you are on the inmate's approved visitor list, and book an available time slot in advance.",
      },
    ],

    relatedGuideSlugs: ["jpay-video-visit-refund-policy", "jpay-error-messages-explained", "how-to-tell-if-inmate-blocked-you-on-jpay"],
    relatedFacilitySlugs: [
      "milwaukee-county-jail",
      "minnesota-correctional-facility-stillwater",
      "menard-correctional-center",
    ],
  },

}
