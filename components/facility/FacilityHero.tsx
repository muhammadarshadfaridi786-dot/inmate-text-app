import Link from "next/link"
import { Building2, MapPin, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import type { FacilityDetail, FacilityType } from "@/lib/data/facilities"

const typeLabel: Record<FacilityType, string> = {
  federal: "Federal Facility",
  state: "State Prison",
  county: "County Jail",
  private: "Private Facility",
}

const typeBadgeColor: Record<FacilityType, string> = {
  federal: "bg-emerald-700 text-white",
  state: "bg-blue-700 text-white",
  county: "bg-amber-600 text-white",
  private: "bg-slate-600 text-white",
}

interface FacilityHeroProps {
  facility: FacilityDetail
}

export default function FacilityHero({ facility }: FacilityHeroProps) {
  const quickStats = [
    { icon: Building2, value: typeLabel[facility.type], label: "Type" },
    { icon: MapPin,     value: facility.countyName,      label: "County" },
    { icon: ShieldCheck, value: facility.securityLevel ?? "N/A", label: "Security" },
  ]

  return (
    <section
      className="border-b bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background py-16 md:py-24"
      aria-labelledby="facility-hero-heading"
    >
      <PageWrapper>
        <div className="mx-auto max-w-3xl text-center">

          {/* Type + state badges */}
          <div className="mb-5 flex flex-wrap justify-center gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                typeBadgeColor[facility.type]
              )}
            >
              {typeLabel[facility.type]}
            </span>
            <Badge variant="secondary">
              {facility.stateName} &bull; Facility Guide
            </Badge>
          </div>

          {/* Heading */}
          <h1
            id="facility-hero-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {facility.name}
          </h1>

          {/* Tagline */}
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Find messaging, video, and phone options for {facility.name}.
            Compare providers and discover what communication services are
            available. Free, no account required.
          </p>

          {/* Quick stats */}
          <div
            className="mb-10 flex flex-wrap justify-center gap-3"
            aria-label={`${facility.name} quick statistics`}
          >
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 ring-1 ring-foreground/10"
              >
                <stat.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/facilities"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Browse {facility.stateAbbr} Facilities
            </Link>
            <Link
              href="/compare"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Compare Providers
            </Link>
          </div>

        </div>
      </PageWrapper>
    </section>
  )
}
