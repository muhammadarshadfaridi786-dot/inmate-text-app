import { Building2, Globe, Info } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { Badge } from "@/components/ui/badge"
import type { ProviderDetail } from "@/lib/data/providers"

interface ProviderCoverageProps {
  provider: ProviderDetail
}

export default function ProviderCoverage({ provider }: ProviderCoverageProps) {
  const { coverage } = provider

  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="coverage-heading">
      <PageWrapper>
        <SectionHeading
          id="coverage-heading"
          title={`${provider.name} Coverage`}
          subtitle="Facility types and geographic regions served by this provider."
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Facility types */}
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Facility Types</h3>
            <div className="flex flex-wrap gap-1.5">
              {coverage.facilityTypes.map((type) => (
                <Badge key={type} variant="secondary" className="text-xs">
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Geographic coverage */}
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Geographic Coverage</h3>
            <p className="text-sm font-medium text-foreground">{coverage.geographic}</p>
          </div>

          {/* Coverage notes */}
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Info className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Coverage Notes</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{coverage.notes}</p>
          </div>

        </div>
      </PageWrapper>
    </section>
  )
}
