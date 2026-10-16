import type { Metadata } from "next"
import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import SectionHeading from "@/components/shared/SectionHeading"
import RelatedLinks from "@/components/seo/RelatedLinks"
import JsonLd from "@/components/seo/JsonLd"
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  buildFaqSchema,
  buildHubSchema,
} from "@/lib/schema"

export const metadata: Metadata = {
  title: "Inmate Phone Call Costs by State 2026: 15-Minute Rates, FCC Caps, Free States",
  description:
    "The price of a 15-minute phone call from a state prison in every state, from Worth Rises data collected January 14, 2026. FCC interim caps, the five free-call states, and what county jail and federal rates do not cover.",
  robots: { index: true, follow: true },
}

type StateRow = {
  state: string
  slug: string
  price15: number
  perMin: string
  provider: string
  providerSlug: string | null
  cap: "" | "at" | "above"
}

// 15-minute in-state call prices from Worth Rises PrisonJailTelecomData,
// snapshot January 14, 2026 (state.csv). Sorted cheapest to priciest.
// Per-minute figures are derived by dividing by 15.
const STATE_COSTS: StateRow[] = [
  { state: "California", slug: "california", price15: 0.00, perMin: "0.000", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Connecticut", slug: "connecticut", price15: 0.00, perMin: "0.000", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Massachusetts", slug: "massachusetts", price15: 0.00, perMin: "0.000", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Minnesota", slug: "minnesota", price15: 0.00, perMin: "0.000", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "New York", slug: "new-york", price15: 0.00, perMin: "0.000", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Colorado", slug: "colorado", price15: 0.08, perMin: "0.005", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Illinois", slug: "illinois", price15: 0.12, perMin: "0.008", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "New Hampshire", slug: "new-hampshire", price15: 0.20, perMin: "0.013", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Mississippi", slug: "mississippi", price15: 0.30, perMin: "0.020", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Ohio", slug: "ohio", price15: 0.30, perMin: "0.020", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Virginia", slug: "virginia", price15: 0.35, perMin: "0.023", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Vermont", slug: "vermont", price15: 0.42, perMin: "0.028", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "Rhode Island", slug: "rhode-island", price15: 0.44, perMin: "0.029", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Maryland", slug: "maryland", price15: 0.48, perMin: "0.032", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Nebraska", slug: "nebraska", price15: 0.49, perMin: "0.033", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "New Jersey", slug: "new-jersey", price15: 0.51, perMin: "0.034", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Delaware", slug: "delaware", price15: 0.60, perMin: "0.040", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "New Mexico", slug: "new-mexico", price15: 0.60, perMin: "0.040", provider: "Smart Communications", providerSlug: null, cap: "" },
  { state: "West Virginia", slug: "west-virginia", price15: 0.60, perMin: "0.040", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Pennsylvania", slug: "pennsylvania", price15: 0.63, perMin: "0.042", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Missouri", slug: "missouri", price15: 0.75, perMin: "0.050", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Washington", slug: "washington", price15: 0.75, perMin: "0.050", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Hawaii", slug: "hawaii", price15: 0.81, perMin: "0.054", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "South Carolina", slug: "south-carolina", price15: 0.83, perMin: "0.055", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Arizona", slug: "arizona", price15: 0.90, perMin: "0.060", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Arkansas", slug: "arkansas", price15: 0.90, perMin: "0.060", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Georgia", slug: "georgia", price15: 0.90, perMin: "0.060", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Idaho", slug: "idaho", price15: 0.90, perMin: "0.060", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "Iowa", slug: "iowa", price15: 0.90, perMin: "0.060", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "Kansas", slug: "kansas", price15: 0.90, perMin: "0.060", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "Louisiana", slug: "louisiana", price15: 0.90, perMin: "0.060", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Maine", slug: "maine", price15: 0.90, perMin: "0.060", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Montana", slug: "montana", price15: 0.90, perMin: "0.060", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "South Dakota", slug: "south-dakota", price15: 0.90, perMin: "0.060", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Texas", slug: "texas", price15: 0.90, perMin: "0.060", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Wisconsin", slug: "wisconsin", price15: 0.90, perMin: "0.060", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "Michigan", slug: "michigan", price15: 1.10, perMin: "0.073", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Tennessee", slug: "tennessee", price15: 1.13, perMin: "0.075", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "North Dakota", slug: "north-dakota", price15: 1.19, perMin: "0.079", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Alabama", slug: "alabama", price15: 1.20, perMin: "0.080", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "Alaska", slug: "alaska", price15: 1.28, perMin: "0.085", provider: "Securus", providerSlug: "securus", cap: "" },
  { state: "Oregon", slug: "oregon", price15: 1.35, perMin: "0.090", provider: "ICSolutions", providerSlug: "icsolutions", cap: "" },
  { state: "Nevada", slug: "nevada", price15: 1.50, perMin: "0.100", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "North Carolina", slug: "north-carolina", price15: 1.50, perMin: "0.100", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Utah", slug: "utah", price15: 1.50, perMin: "0.100", provider: "ViaPath", providerSlug: "gtl", cap: "" },
  { state: "Wyoming", slug: "wyoming", price15: 1.65, perMin: "0.110", provider: "ICSolutions", providerSlug: "icsolutions", cap: "at" },
  { state: "Florida", slug: "florida", price15: 2.03, perMin: "0.135", provider: "ViaPath", providerSlug: "gtl", cap: "above" },
  { state: "Indiana", slug: "indiana", price15: 2.10, perMin: "0.140", provider: "ViaPath", providerSlug: "gtl", cap: "above" },
  { state: "Kentucky", slug: "kentucky", price15: 2.10, perMin: "0.140", provider: "Securus", providerSlug: "securus", cap: "above" },
  { state: "Oklahoma", slug: "oklahoma", price15: 2.10, perMin: "0.140", provider: "ViaPath", providerSlug: "gtl", cap: "above" },
]

const FAQS = [
  {
    question: "How much do prison phone calls cost?",
    answer:
      "It depends on the state. For a 15-minute call from a state prison, the median state price was $0.90, with a range from $0.00 in the five free-call states to $2.10 in Indiana, Kentucky, and Oklahoma, per Worth Rises data collected January 14, 2026. See the state table on this page for your state.",
  },
  {
    question: "How much are phone calls in prison?",
    answer:
      "For state prisons, a 15-minute call cost between $0.00 and $2.10 in January 2026 data, with a median of $0.90. Dividing by 15 gives a derived per-minute range of $0.00 to $0.14. County jail calls are a separate system and are generally higher and more varied; check the specific jail's page.",
  },
  {
    question: "How much do phone calls cost in jail?",
    answer:
      "There is no single jail figure. County jail rates are set by each county under its own contract, and they are generally higher and more varied than state prison rates. The Worth Rises county dataset covers about one third of US counties. Check the specific jail's page before funding an account, and compare the result against the FCC interim jail caps in the table on this page.",
  },
  {
    question: "How much does a collect call cost?",
    answer:
      "Collect calls cost more than prepaid calls at the same facility, but no single collect-call figure is published here, because the Worth Rises dataset does not distinguish call types within a row. Use a prepaid account for the lowest rate, and add money in larger amounts to reduce per-deposit fees.",
  },
  {
    question: "How much is a jail call per minute?",
    answer:
      "It varies by jail and vendor. The FCC interim caps for jails range from $0.08 per minute for the largest jails to $0.17 per minute for the smallest, plus up to $0.02 per minute in facility cost recovery, for effective maximums of $0.10 to $0.19 per minute. Actual jail rates vary by county contract; check the specific jail's page.",
  },
  {
    question: "Which states offer free prison phone calls?",
    answer:
      "Five states had $0.00 for a 15-minute state prison call in the January 14, 2026 data: California, Connecticut, Massachusetts, Minnesota, and New York. Colorado is phasing in free calls and was at $0.08 per 15-minute call, nearly free but not yet $0.00.",
  },
  {
    question: "What is the FCC cap on prison phone calls?",
    answer:
      "Under the interim caps adopted October 28, 2025 (FCC 25-75) and published December 5, 2025, the audio cap for prisons is $0.09 per minute, plus up to $0.02 per minute in facility cost recovery, for an effective maximum of $0.11 per minute, or $1.65 for a 15-minute call. The video cap for prisons is $0.23 per minute plus up to $0.02, for an effective maximum of $0.25 per minute. Site commissions and ancillary charges are banned. The caps are interim and subject to further FCC action.",
  },
  {
    question: "Why are prison phone calls so expensive?",
    answer:
      "For years, providers competed for exclusive facility contracts by offering the facility a share of call revenue, called a site commission, and covered that cost by charging families higher rates. Site commissions are now banned under FCC rules, but the patchwork of state contracts, facility sizes, and vendor terms still produces wide price differences. Read the full explanation in our guide on why prison phone calls are so expensive.",
  },
]

const AUDIO_CAPS = [
  { facility: "Prisons", cap: "$0.09", additive: "$0.02", max: "$0.11" },
  { facility: "Jails, 1,000+ average daily population", cap: "$0.08", additive: "$0.02", max: "$0.10" },
  { facility: "Jails, 350-999 average daily population", cap: "$0.10", additive: "$0.02", max: "$0.12" },
  { facility: "Jails, 100-349 average daily population", cap: "$0.11", additive: "$0.02", max: "$0.13" },
  { facility: "Jails, 50-99 average daily population", cap: "$0.13", additive: "$0.02", max: "$0.15" },
  { facility: "Jails, 49 or fewer average daily population", cap: "$0.17", additive: "$0.02", max: "$0.19" },
]

const VIDEO_CAPS = [
  { facility: "Prisons", cap: "$0.23", additive: "$0.02", max: "$0.25" },
  { facility: "Jails, 1,000+ average daily population", cap: "$0.17", additive: "$0.02", max: "$0.19" },
  { facility: "Jails, 350-999 average daily population", cap: "$0.17", additive: "$0.02", max: "$0.19" },
  { facility: "Jails, 100-349 average daily population", cap: "$0.19", additive: "$0.02", max: "$0.21" },
  { facility: "Jails, 50-99 average daily population", cap: "$0.23", additive: "$0.02", max: "$0.25" },
  { facility: "Jails, 49 or fewer average daily population", cap: "$0.42", additive: "$0.02", max: "$0.44" },
]

export default function CostsByStatePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Inmate Communication Costs by State 2026" },
  ]

  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Inmate Phone Call Costs by State 2026: 15-Minute Rates, FCC Caps, Free States",
          "The price of a 15-minute phone call from a state prison in every state, from Worth Rises data collected January 14, 2026.",
          "/costs-by-state"
        )}
      />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd schema={buildFaqSchema(FAQS)} />
      <JsonLd schema={buildHubSchema("costs-by-state", "Inmate Communication Costs")} />

      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      <PageWrapper className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Inmate Communication Costs by State 2026
        </h1>
        <p className="mt-4 text-muted-foreground">
          What does a phone call from prison actually cost? It depends on the state. This page lists the price of a
          15-minute phone call from a state prison in every state, from Worth Rises data collected January 14, 2026,
          plus the FCC interim rate caps and the states where calls are free.
        </p>
        <p className="mt-3 text-muted-foreground">
          One warning before the numbers: the dataset reports 15-minute call prices, not per-minute rates. The
          per-minute figures in the table are derived by dividing by 15 and are labeled as derived. Treating a
          15-minute price as a per-minute rate is the most common mistake people make with this data.
        </p>
        <p className="mt-3 text-muted-foreground">
          Rates change when contracts are renegotiated. Indiana more than doubled from $0.90 to $2.10 per 15-minute
          call between the October 2025 and January 2026 snapshots. Verify the current rate with the facility before
          funding an account.
        </p>

        <div className="mt-8 rounded-lg border bg-muted/40 p-5">
          <h2 className="text-lg font-semibold text-foreground">At a glance</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Cheapest:</strong> five states at $0.00 per 15-minute call:
              California, Connecticut, Massachusetts, Minnesota, and New York.
            </li>
            <li>
              <strong className="text-foreground">Priciest:</strong> Indiana, Kentucky, and Oklahoma at $2.10,
              then Florida at $2.03, then Wyoming at $1.65.
            </li>
            <li>
              <strong className="text-foreground">Median state:</strong> $0.90 per 15-minute call. Fourteen
              states charge more than $0.90, which is more than 6 cents per minute.
            </li>
            <li>
              <strong className="text-foreground">FCC interim prison cap:</strong> $0.11 per minute effective
              maximum, or $1.65 per 15-minute call. Four states charge above it in the January 2026 data: Florida,
              Indiana, Kentucky, and Oklahoma.
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <SectionHeading title="State prison phone call prices: all 50 states" />
          <p className="mt-3 text-muted-foreground">
            Sorted cheapest to priciest. Prices are in-state 15-minute call prices for the state prison system,
            from Worth Rises PrisonJailTelecomData, snapshot January 14, 2026. Click a state for its full
            communication page.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-3 font-semibold text-foreground">State</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">15-minute call</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">Per minute (derived)</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">Provider</th>
                  <th className="py-2 font-semibold text-foreground">vs FCC cap</th>
                </tr>
              </thead>
              <tbody>
                {STATE_COSTS.map((row) => (
                  <tr key={row.slug} className="border-b last:border-0">
                    <td className="py-2 pr-3">
                      <Link href={`/state/${row.slug}`} className="text-primary hover:underline">
                        {row.state}
                      </Link>
                    </td>
                    <td className="py-2 pr-3 text-foreground">
                      {row.price15 === 0 ? "Free ($0.00)" : `$${row.price15.toFixed(2)}`}
                    </td>
                    <td className="py-2 pr-3 text-muted-foreground">${row.perMin}</td>
                    <td className="py-2 pr-3 text-muted-foreground">
                      {row.providerSlug ? (
                        <Link href={`/providers/${row.providerSlug}`} className="text-primary hover:underline">
                          {row.provider}
                        </Link>
                      ) : (
                        row.provider
                      )}
                    </td>
                    <td className="py-2 text-muted-foreground">
                      {row.cap === "above" ? "Above FCC cap" : row.cap === "at" ? "At FCC cap" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              Vermont is the only state where in-state and out-of-state prices differ: $0.42 in-state, $0.90
              out-of-state. The table shows the in-state price.
            </li>
            <li>
              New Mexico: the dataset lists Smart Communications at $0.60. Our New Mexico state page previously
              named Securus for phone service based on 2022 reporting; the New Mexico Corrections Department
              2025 Annual Report states Smart Communications is deployed statewide. The dataset row is shown as
              published, and the state page is being corrected to match the newer sources.
            </li>
            <li>
              Virginia: the dataset lists ViaPath at $0.35 ($0.023 per minute derived), while WHRO reported
              Virginia DOC phone rates at $0.0409 per minute in December 2025. The two sources conflict; the
              dataset figure is shown as published.
            </li>
            <li>
              Washington DC is not in the dataset, so no DC row is shown. No federal row is shown: the
              dataset&apos;s federal row ($0.00) could not be verified against the Bureau of Prisons published
              rate schedule, so it is omitted rather than presented as a federal rate.
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <SectionHeading title="States where prison phone calls are free" />
          <p className="mt-3 text-muted-foreground">
            Five states charged $0.00 for a 15-minute state prison call in the January 2026 data: California,
            Connecticut, Massachusetts, Minnesota, and New York. In these states the government absorbs the cost
            of calls instead of passing it to families.
          </p>
          <p className="mt-3 text-muted-foreground">
            New York is the most recent addition. Calls from New York state prisons became free on August 1, 2025,
            by administrative action. Before that, New York charged $0.024 per minute under Securus plus three free
            15-minute calls per week. The Department of Corrections and Community Supervision covers the cost,
            about $9 million in the current fiscal year, saving roughly 30,000 families about $13.3 million per year
            according to Worth Rises.
          </p>
          <p className="mt-3 text-muted-foreground">
            Colorado is phasing in free calls and was at $0.08 per 15-minute call in the January 2026 data: nearly
            free, but not yet $0.00. Its full-effect deadline is July 2026. Do not count Colorado as fully free
            until that takes effect. The free-communication movement is tracked by the{" "}
            <a
              href="https://connectfamiliesnow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              #ConnectFamiliesNow campaign
            </a>
            .
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading title="FCC interim rate caps" />
          <p className="mt-3 text-muted-foreground">
            The FCC set interim caps on October 28, 2025 (FCC 25-75, adopted 2-1), published December 5, 2025
            (90 FR 56062). These replaced the 2024 caps, which had set prison audio at $0.06 per minute and prison
            video at $0.16 per minute, after the 2024 caps were postponed in June 2025. The interim caps below
            come from 47 CFR 64.6030. Providers may charge up to an additional $0.02 per minute above the caps to
            recover facility costs (64.6030(d)).
          </p>
          <h3 className="mt-6 text-lg font-semibold text-foreground">Audio calls, per minute</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-3 font-semibold text-foreground">Facility</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">Cap</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">Facility additive</th>
                  <th className="py-2 font-semibold text-foreground">Effective maximum</th>
                </tr>
              </thead>
              <tbody>
                {AUDIO_CAPS.map((row) => (
                  <tr key={row.facility} className="border-b last:border-0">
                    <td className="py-2 pr-3 text-muted-foreground">{row.facility}</td>
                    <td className="py-2 pr-3 text-foreground">{row.cap}</td>
                    <td className="py-2 pr-3 text-muted-foreground">{row.additive}</td>
                    <td className="py-2 text-foreground">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-foreground">Video calls, per minute</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-3 font-semibold text-foreground">Facility</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">Cap</th>
                  <th className="py-2 pr-3 font-semibold text-foreground">Facility additive</th>
                  <th className="py-2 font-semibold text-foreground">Effective maximum</th>
                </tr>
              </thead>
              <tbody>
                {VIDEO_CAPS.map((row) => (
                  <tr key={row.facility} className="border-b last:border-0">
                    <td className="py-2 pr-3 text-muted-foreground">{row.facility}</td>
                    <td className="py-2 pr-3 text-foreground">{row.cap}</td>
                    <td className="py-2 pr-3 text-muted-foreground">{row.additive}</td>
                    <td className="py-2 text-foreground">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted-foreground">
            The same rules ban site commissions (64.6015), ancillary service charges (64.6020), per-call and
            per-connection charges (64.6080), and flat-rate calling for interstate and international calls
            (64.6090). Providers may not impose minimum balances and must allow deposits of at least $50 per
            transaction (64.6100). Only mandatory or authorized taxes and fees may be passed through (64.6070).
            Providers must offer per-minute rates and disclose their rates (64.6030(a), 64.6110).
          </p>
          <p className="mt-3 text-muted-foreground">
            The caps are interim and subject to further FCC action and litigation. For the full narrative history,
            see our guide on{" "}
            <Link href="/guides/prison-phone-call-costs" className="text-primary hover:underline">
              why prison phone calls are so expensive
            </Link>{" "}
            and the glossary entry for the{" "}
            <Link href="/glossary/fcc-rate-cap" className="text-primary hover:underline">
              FCC rate cap
            </Link>
            .
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading title="State prisons, county jails, and federal facilities are separate systems" />
          <p className="mt-3 text-muted-foreground">
            The table on this page covers state prison systems: the state agency rate in each state. County jail
            rates are a different dataset with different vendors and only partial coverage (about one third of US
            counties in the Worth Rises county file). County jail rates are generally higher and more varied than
            state prison rates. Do not use a state prison rate to predict what a county jail call will cost.
          </p>
          <p className="mt-3 text-muted-foreground">
            Federal Bureau of Prisons rates are not in this dataset. The dataset&apos;s single federal row could
            not be verified against the Bureau of Prisons published rate schedule, so no federal figure is
            published here. For a county jail, check the specific jail&apos;s page. For federal custody, check
            the Bureau of Prisons.
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading title="Why rates still vary so much" />
          <p className="mt-3 text-muted-foreground">
            Rates vary because each facility or agency negotiates its own contract, because states have taken
            different paths on free-call laws, and because the FCC caps are tiered by facility size. For years,
            providers competed for exclusive contracts by offering facilities a share of call revenue, called a
            site commission, and covered that cost by charging families higher rates. Site commissions are now
            banned, but the patchwork of contracts still produces the spread in the table.
          </p>
          <p className="mt-3 text-muted-foreground">
            What that spread means for families is concrete. Reporting by In These Times and Type Investigations
            found that more than 1 in 3 families with incarcerated loved ones go into debt for phone calls and
            visitation, and that families spend almost $4,200 a year on average communicating with, visiting, and
            supporting loved ones. In one case, a jail shut off phones entirely for 18 months after the FCC banned
            commissions; when calls resumed, one family spent $35 to $40 per week. A Reuters report from 2020
            described a grandmother spending $100 a week on calls and video so her grandchildren could stay
            connected with their father.
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading title="What this data does not cover" />
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Video visit rates. The dataset has no video rates. Video caps come from the CFR tables above.</li>
            <li>Messaging and email rates, deposit and transaction fees, and tablet costs. None are in the dataset.</li>
            <li>Washington DC. Not in the dataset.</li>
            <li>Federal Bureau of Prisons rates. The dataset&apos;s single federal row is unverified and omitted.</li>
            <li>
              County jail rates. The county file is a separate dataset with partial coverage; county rows are not
              mixed into the state table.
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <SectionHeading title="How to lower your bill" />
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Use a prepaid account rather than collect calls. Prepaid rates are consistently lower.</li>
            <li>Add money in larger amounts when possible. Providers often charge a flat fee per deposit.</li>
            <li>Check whether your state offers free calls before funding an account.</li>
            <li>Confirm the facility&apos;s provider before setting up any account. The wrong provider means no calls.</li>
            <li>
              If you believe you are being charged above the FCC caps, document the charges and file a complaint
              with the FCC at fcc.gov.
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-5 space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-1 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading title="Methodology and sources" />
          <p className="mt-3 text-muted-foreground">
            State prices come from Worth Rises PrisonJailTelecomData on GitHub, snapshot January 14, 2026. Worth
            Rises scraped the rates from vendor public postings, grouped them by agency, removed outliers, and
            confirmed the vendor by website or phone call where multiple vendors were reported for one agency.
            Counties that send people to regional or state facilities have the regional or state rate copied into
            their county row, so county rows are not all independently verified. ViaPath data after February 23,
            2024 was corrected for a rounding error; earlier ViaPath data may have minor inaccuracies. Rates are
            facts compiled from public vendor postings; the table above transforms and summarizes the dataset
            rather than republishing it. Data compiled by Worth Rises and the #ConnectFamiliesNow campaign:{" "}
            <a
              href="https://github.com/WorthRises/PrisonJailTelecomData"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              PrisonJailTelecomData on GitHub
            </a>
            .
          </p>
          <p className="mt-3 text-muted-foreground">
            FCC caps come from 47 CFR 64.6030, adopted in FCC 25-75 on October 28, 2025 and published December 5,
            2025 (90 FR 56062). Free-state details come from Worth Rises and contemporaneous reporting. Real-user
            cost examples come from In These Times, Type Investigations, Reuters, and TMJ4 reporting. Search
            demand figures reflect our own Search Console data for September 16 to October 13, 2026, in which
            cost questions appeared but ranked at positions 17 to 32.
          </p>
          <p className="mt-3 text-muted-foreground">
            Rates change. Verify the current rate with the facility before funding an account.
          </p>
        </div>

        <RelatedLinks
          title="Related pages"
          links={[
            { label: "Why Prison Phone Calls Are So Expensive", href: "/guides/prison-phone-call-costs" },
            { label: "How Prison Phone Calls Work", href: "/guides/how-prison-phone-calls-work" },
            { label: "FCC Rate Cap Glossary", href: "/glossary/fcc-rate-cap" },
            { label: "Collect Call Glossary", href: "/glossary/collect-call" },
            { label: "Phone Calls", href: "/phone-calls" },
            { label: "Money Transfer", href: "/money-transfer" },
            { label: "North Carolina State Page", href: "/state/north-carolina" },
            { label: "Pennsylvania State Page", href: "/state/pennsylvania" },
            { label: "New Jersey State Page", href: "/state/new-jersey" },
            { label: "New Mexico State Page", href: "/state/new-mexico" },
            { label: "North Dakota State Page", href: "/state/north-dakota" },
            { label: "New Hampshire State Page", href: "/state/new-hampshire" },
            { label: "Georgia State Page", href: "/state/georgia" },
            { label: "Securus Provider Guide", href: "/providers/securus" },
            { label: "ViaPath (GTL) Provider Guide", href: "/providers/gtl" },
            { label: "ICSolutions Provider Guide", href: "/providers/icsolutions" },
            { label: "JPay Provider Guide", href: "/providers/jpay" },
            { label: "ConnectNetwork Provider Guide", href: "/providers/connectnetwork" },
          ]}
        />
      </PageWrapper>
    </>
  )
}
