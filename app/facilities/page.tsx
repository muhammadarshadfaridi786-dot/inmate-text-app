import type { Metadata } from "next"
import { ALL_FACILITIES } from "@/lib/data/facilities"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import FacilitiesSearch from "@/components/facility/FacilitiesSearch"

export const metadata: Metadata = {
  title: "Correctional Facilities Directory: Find Communication Options",
  description:
    "Browse prisons, jails, and correctional facilities across the United States. Search by state or facility type to find messaging, video, and phone communication options.",
  alternates: { canonical: "/facilities" },
  openGraph: {
    url: "/facilities",
    title: "Correctional Facilities Directory: Find Communication Options",
    description:
      "Browse prisons, jails, and correctional facilities across the United States. Find messaging, video, and phone options for any facility.",
  },
}

const facilitiesForSchema = ALL_FACILITIES
  .filter((f) => f.hasDetailPage)
  .map((f) => ({ name: f.name, url: `/facility/${f.slug}` }))

export default function FacilitiesPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Correctional Facilities Directory",
          "Browse prisons, jails, and correctional facilities across the United States. Find messaging, video, and phone options for any facility.",
          "/facilities"
        )}
      />
      <JsonLd schema={buildItemListSchema(facilitiesForSchema)} />
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Correctional Facilities Directory"
              subtitle="Search prisons, jails, and detention centers by name, state, or facility type. Find available communication providers and messaging options."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Detailed facility guides are available for select institutions.
              Full directory coverage is coming soon.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* Searchable facility grid */}
      <section className="py-10" aria-label="Facility directory">
        <PageWrapper>
          <FacilitiesSearch facilities={ALL_FACILITIES} />
        </PageWrapper>
      </section>
    </>
  )
}
