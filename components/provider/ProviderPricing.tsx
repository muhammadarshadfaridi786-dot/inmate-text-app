import { DollarSign } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { ProviderPricingItem } from "@/lib/data/providers"

interface ProviderPricingProps {
  providerName: string
  pricing: ProviderPricingItem[]
}

export default function ProviderPricing({ providerName, pricing }: ProviderPricingProps) {
  if (!pricing.length) return null

  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="pricing-heading">
      <PageWrapper>
        <SectionHeading
          id="pricing-heading"
          title={`${providerName} Pricing Overview`}
          subtitle="Approximate pricing for common services. Exact rates may vary by facility and state contract."
          className="mb-8"
        />
        <div className="max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-2.5 border-b px-5 py-4">
            <DollarSign className="h-4 w-4 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-foreground">
              {providerName} Fee Schedule
            </h3>
          </div>
          <dl className="divide-y divide-border">
            {pricing.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-4 px-5 py-4">
                <div className="min-w-0">
                  <dt className="text-sm font-medium text-foreground">{item.label}</dt>
                  {item.notes && (
                    <dd className="mt-0.5 text-xs text-muted-foreground">{item.notes}</dd>
                  )}
                </div>
                <dd className="shrink-0 text-sm font-semibold text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="border-t px-5 py-3">
            <p className="text-xs text-muted-foreground">
              Prices are estimates based on publicly available information and may change. Confirm
              current pricing on the {providerName} website before use.
            </p>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
