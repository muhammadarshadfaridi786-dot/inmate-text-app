import Link from "next/link"
import { ArrowRight, MapPin, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { FACILITY_DETAILS } from "@/lib/data/facilities"

interface RelatedFacilitiesProps {
  slugs: string[]
}

export default function RelatedFacilities({ slugs }: RelatedFacilitiesProps) {
  const facilities = slugs
    .map((s) => FACILITY_DETAILS[s])
    .filter(Boolean)

  if (!facilities.length) return null

  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="related-heading">
      <PageWrapper>
        <SectionHeading
          id="related-heading"
          title="Related Facilities"
          subtitle="Other correctional facilities with communication guides."
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              {/* State badge */}
              <div className="mb-2">
                <Badge variant="secondary" className="text-xs">
                  {facility.stateAbbr} &bull; {capitalize(facility.type)}
                </Badge>
              </div>

              {/* Name */}
              <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground">
                {facility.name}
              </h3>

              {/* County + Security */}
              <div className="mb-4 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
                  <span>{facility.countyName}</span>
                </div>
                {facility.securityLevel && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3 shrink-0" aria-hidden="true" />
                    <span>{facility.securityLevel}</span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href={`/facility/${facility.slug}`}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-auto w-full justify-center gap-1 text-xs"
                )}
              >
                View Guide
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
