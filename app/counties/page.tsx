import type { Metadata } from "next"
import { ALL_COUNTIES } from "@/lib/data/counties"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import CountiesSearch from "@/components/county/CountiesSearch"

export const metadata: Metadata = {
  title: "County Jail Communication Directory: Find Providers by County",
  description:
    "Find jail and prison communication options in counties across the United States. Browse our county-by-county correctional facility directory, free with no account required.",
  alternates: { canonical: "/counties" },
  openGraph: {
    url: "/counties",
    title: "County Jail Communication Directory: Find Providers by County",
    description:
      "Find jail and prison communication options in counties across the United States. Browse our county-by-county correctional facility directory.",
  },
}

const countiesForSchema = ALL_COUNTIES
  .filter((c) => c.hasDetailPage)
  .map((c) => ({ name: c.name, url: `/county/${c.slug}` }))

export default function CountiesPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "County Jail Communication Directory",
          "Find jail and prison communication options in counties across the United States. Browse our county-by-county correctional facility directory.",
          "/counties"
        )}
      />
      <JsonLd schema={buildItemListSchema(countiesForSchema)} />
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="County Jail &amp; Prison Directory"
              subtitle="Browse communication options for county jails and correctional facilities. Select a county to find available providers and messaging services."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Detailed county pages are currently available for select counties.
              Coverage across additional counties is coming soon.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* Searchable county grid */}
      <section className="py-10" aria-label="County directory">
        <PageWrapper>
          <CountiesSearch counties={ALL_COUNTIES} />
        </PageWrapper>
      </section>
    </>
  )
}
