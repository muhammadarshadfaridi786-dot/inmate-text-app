import Link from "next/link"
import { Building2, MapPin, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import type { StateDetail } from "@/lib/data/states"

interface StateHeroProps {
  state: StateDetail
}

export default function StateHero({ state }: StateHeroProps) {
  const quickStats = [
    { icon: Building2, value: state.facilityCount.toLocaleString() + "+", label: "Facilities" },
    { icon: MapPin,    value: state.counties.length + "+",               label: "Counties"   },
    { icon: Users,     value: state.providers.length + "+",              label: "Providers"  },
  ]

  return (
    <section
      className="border-b bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background py-16 md:py-24"
      aria-labelledby="state-hero-heading"
    >
      <PageWrapper>
        <div className="mx-auto max-w-3xl text-center">

          {/* Region badge */}
          <div className="mb-5 flex justify-center">
            <Badge variant="secondary">
              {state.region} &bull; State Directory
            </Badge>
          </div>

          {/* Heading */}
          <h1
            id="state-hero-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {state.name} Prison Communication Directory
          </h1>

          {/* Tagline */}
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Find messaging, video, and phone options for {state.name} correctional
            facilities. Compare providers and discover what&apos;s available at
            any facility. Free, no account required.
          </p>

          {/* Quick stats */}
          <div
            className="mb-10 flex flex-wrap justify-center gap-3"
            aria-label={`${state.name} quick statistics`}
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
              href={`/facilities?state=${state.abbreviation}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Browse {state.abbreviation} Facilities
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
