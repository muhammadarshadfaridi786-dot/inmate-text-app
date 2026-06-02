import type { Metadata } from "next"
import { ALL_PROVIDERS } from "@/lib/data/providers"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ProvidersSearch from "@/components/provider/ProvidersSearch"

export const metadata: Metadata = {
  title: "Inmate Communication Providers Directory",
  description:
    "Compare inmate communication providers including JPay, ConnectNetwork, GettingOut, CorrLinks, TextBehind, SmartInmate, and Pigeonly. Find pricing, services, and facility coverage.",
  alternates: { canonical: "/providers" },
  openGraph: {
    url: "/providers",
    title: "Inmate Communication Providers Directory",
    description:
      "Compare JPay, ConnectNetwork, GettingOut, CorrLinks, and more. Find the right provider for messaging, video, and phone at any correctional facility.",
  },
}

const providersForSchema = ALL_PROVIDERS
  .filter((p) => p.hasDetailPage)
  .map((p) => ({ name: p.name, url: `/provider/${p.slug}` }))

export default function ProvidersPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Inmate Communication Providers Directory",
          "Compare inmate communication providers including JPay, ConnectNetwork, GettingOut, CorrLinks, TextBehind, SmartInmate, and Pigeonly.",
          "/providers"
        )}
      />
      <JsonLd schema={buildItemListSchema(providersForSchema)} />
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Communication Providers Directory"
              subtitle="Browse and compare inmate communication providers. Filter by service type to find which providers offer messaging, video visits, phone calls, and more."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Provider availability varies by facility. Always confirm the correct provider
              for the specific correctional institution before setting up an account.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* Searchable provider grid */}
      <section className="py-10" aria-label="Provider directory">
        <PageWrapper>
          <ProvidersSearch providers={ALL_PROVIDERS} />
        </PageWrapper>
      </section>
    </>
  )
}
