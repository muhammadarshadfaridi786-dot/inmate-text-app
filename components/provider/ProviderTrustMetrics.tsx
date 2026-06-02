import { Building2, MapPin, Settings2, Smartphone } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import type { ProviderDetail } from "@/lib/data/providers"

interface ProviderTrustMetricsProps {
  provider: ProviderDetail
}

export default function ProviderTrustMetrics({ provider }: ProviderTrustMetricsProps) {
  const servicesOffered = Object.values(provider.services).filter(Boolean).length

  const metrics = [
    {
      icon: MapPin,
      value: `${provider.statesCount}+`,
      label: "States Covered",
    },
    {
      icon: Building2,
      value: provider.facilitiesCount.toLocaleString() + "+",
      label: "Facilities Supported",
    },
    {
      icon: Settings2,
      value: `${servicesOffered} of 5`,
      label: "Services Offered",
    },
    {
      icon: Smartphone,
      value: provider.appAvailable ? "Yes" : "No",
      label: "Mobile App Available",
    },
  ]

  return (
    <section className="border-b bg-muted/30 py-8" aria-label={`${provider.name} trust metrics`}>
      <PageWrapper>
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-1.5 rounded-xl border border-border bg-card p-4 shadow-sm text-center"
            >
              <div className="flex justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <metric.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
              </div>
              <dd className="text-xl font-bold text-foreground">{metric.value}</dd>
              <dt className="text-xs font-medium text-muted-foreground">{metric.label}</dt>
            </div>
          ))}
        </dl>
      </PageWrapper>
    </section>
  )
}
