import Link from "next/link"
import { Building, Globe, Home, Shield } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"

interface FacilityStatsData {
  federal: number
  state: number
  county: number
  private: number
}

interface StateFacilityStatsProps {
  stateName: string
  data: FacilityStatsData
}

const typeConfig = [
  {
    key: "federal" as const,
    label: "Federal Facilities",
    icon: Globe,
    href: "/federal-prisons",
    description: "Bureau of Prisons institutions",
  },
  {
    key: "state" as const,
    label: "State Prisons",
    icon: Building,
    href: "/state-prisons",
    description: "State department of corrections",
  },
  {
    key: "county" as const,
    label: "County Jails",
    icon: Home,
    href: "/county-jails",
    description: "Local detention centers and jails",
  },
  {
    key: "private" as const,
    label: "Private Facilities",
    icon: Shield,
    href: "/private-prisons",
    description: "Privately operated correctional facilities",
  },
]

export default function StateFacilityStats({
  stateName,
  data,
}: StateFacilityStatsProps) {
  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="stats-heading">
      <PageWrapper>
        <SectionHeading
          id="stats-heading"
          title={`${stateName} Facility Breakdown`}
          subtitle="Correctional facilities by type across the state."
          className="mb-8"
        />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {typeConfig.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              aria-label={`${data[item.key]} ${item.label} in ${stateName}`}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <p className="mb-0.5 text-2xl font-bold text-foreground">
                {data[item.key].toLocaleString()}
              </p>
              <p className="mb-1 text-xs font-semibold text-foreground">
                {item.label}
              </p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
