import { Building2, Calendar, Shield, User, Users } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import type { FacilityDetail } from "@/lib/data/facilities"

interface FacilityQuickFactsProps {
  facility: FacilityDetail
}

export default function FacilityQuickFacts({ facility }: FacilityQuickFactsProps) {
  const facts = [
    {
      icon: Building2,
      label: "Facility Type",
      value: capitalize(facility.type) + " Facility",
    },
    {
      icon: Shield,
      label: "Security Level",
      value: facility.securityLevel ?? "Not specified",
    },
    {
      icon: Users,
      label: "Inmate Capacity",
      value: facility.inmateCapacity
        ? facility.inmateCapacity.toLocaleString() + " approx."
        : "Not available",
    },
    {
      icon: Calendar,
      label: "Established",
      value: facility.established ? String(facility.established) : "Not available",
    },
    {
      icon: User,
      label: "Operated By",
      value: facility.operatedBy,
    },
  ]

  return (
    <section className="border-b bg-muted/30 py-8" aria-label="Facility quick facts">
      <PageWrapper>
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-1.5 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <fact.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <dt className="text-xs font-medium text-muted-foreground">{fact.label}</dt>
              <dd className="text-sm font-semibold leading-snug text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageWrapper>
    </section>
  )
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
