import type { Metadata } from "next"
import { ALL_GUIDES, GUIDE_DETAILS } from "@/lib/data/guides"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import GuidesDirectory from "@/components/guides/GuidesDirectory"

export const metadata: Metadata = {
  title: "Prison Communication Guides: Step-by-Step Help for Families",
  description:
    "Beginner-friendly guides explaining how inmate messaging, phone calls, video visitation, photo sharing, and money transfers work. Written for families new to the system.",
  alternates: { canonical: "/guides" },
  openGraph: {
    url: "/guides",
    title: "Prison Communication Guides",
    description:
      "Step-by-step guides covering every aspect of inmate communication. Find the right platform, learn the rules, and stay connected with an incarcerated loved one.",
  },
}

const allGuidesForSchema = Object.values(GUIDE_DETAILS).map((g) => ({
  name: g.title,
  url: `/guides/${g.slug}`,
}))

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Prison Communication Guides",
          "Beginner-friendly guides explaining how inmate messaging, phone calls, video visitation, and photo sharing work.",
          "/guides"
        )}
      />
      <JsonLd schema={buildItemListSchema(allGuidesForSchema)} />

      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Prison Communication Guides"
              subtitle="Plain-language guides covering every aspect of inmate communication. Whether you are just getting started or trying to solve a specific problem, these guides are written for people with no prior experience."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              All guides are written for beginners and assume no prior knowledge of the prison communication system.
            </p>
          </div>
        </PageWrapper>
      </section>

      <section className="py-10" aria-label="Guides directory">
        <PageWrapper>
          <GuidesDirectory guides={ALL_GUIDES} />
        </PageWrapper>
      </section>
    </>
  )
}
