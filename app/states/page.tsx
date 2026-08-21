import type { Metadata } from "next"
import { ALL_STATES } from "@/lib/data/states"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import StatesSearch from "@/components/state/StatesSearch"

export const metadata: Metadata = {
  title: "All 50 US States: Prison Communication Directory",
  description:
    "Find prisons and communication options in every US state. Browse our complete state-by-state correctional facility directory, free with no account required.",
  alternates: { canonical: "/states" },
  openGraph: {
    url: "/states",
    title: "All 50 US States: Prison Communication Directory",
    description:
      "Find prisons and communication options in every US state. Browse our complete state-by-state correctional facility directory.",
  },
}

const statesForSchema = ALL_STATES
  .filter((s) => s.hasDetailPage)
  .map((s) => ({ name: s.name, url: `/state/${s.slug}` }))

export default function StatesPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "All 50 US States: Prison Communication Directory",
          "Find prisons and communication options in every US state. Browse our complete state-by-state correctional facility directory.",
          "/states"
        )}
      />
      <JsonLd schema={buildItemListSchema(statesForSchema)} />
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="All 50 US States"
              subtitle="Browse prisons, jails, and communication options by state. Select your state to find available providers and messaging services."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Browse all 50 U.S. states to find correctional facilities and available communication providers in each state.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* Searchable state grid */}
      <section className="py-10" aria-label="State directory">
        <PageWrapper>
          <StatesSearch states={ALL_STATES} />
        </PageWrapper>
      </section>
    </>
  )
}
