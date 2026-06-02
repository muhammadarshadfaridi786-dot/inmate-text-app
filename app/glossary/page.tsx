import type { Metadata } from "next"
import { ALL_TERMS, TERM_DETAILS } from "@/lib/data/glossary"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import GlossarySearch from "@/components/glossary/GlossarySearch"

export const metadata: Metadata = {
  title: "Prison Communication Glossary: Terms and Definitions",
  description:
    "Plain-language definitions for prison communication terms. Learn what JPay stamps, GTL AdvancePay, CorrLinks, commissary, and other correctional terms mean.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    url: "/glossary",
    title: "Prison Communication Glossary",
    description:
      "Plain-language definitions for correctional and communication terms. Find out what commissary, CorrLinks, inmate messaging, and other common terms mean.",
  },
}

const allTermsForSchema = Object.values(TERM_DETAILS).map((t) => ({
  name: t.term,
  url: `/glossary/${t.slug}`,
}))

export default function GlossaryPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          "Prison Communication Glossary: Terms and Definitions",
          "Plain-language definitions for prison communication terms. Learn what JPay stamps, CorrLinks, commissary, and other correctional terms mean.",
          "/glossary"
        )}
      />
      <JsonLd schema={buildItemListSchema(allTermsForSchema)} />

      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Prison Communication Glossary"
              subtitle="Plain-language definitions for the terms families encounter when navigating inmate communication. Search by name, browse by category, or use the A to Z navigation to find what you need."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              All definitions are written for people who are new to the prison communication system.
              No prior knowledge is assumed.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* Searchable glossary with alphabet nav */}
      <section className="py-10" aria-label="Glossary directory">
        <PageWrapper>
          <GlossarySearch terms={ALL_TERMS} />
        </PageWrapper>
      </section>
    </>
  )
}
