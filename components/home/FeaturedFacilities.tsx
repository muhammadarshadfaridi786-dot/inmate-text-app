import Link from "next/link"
import { ArrowRight, MapPin, MessageSquare, Phone, Video, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"

type FeatureName = "Messaging" | "Video Calls" | "Photo Sharing" | "Phone Calls"

const featureIcons: Record<FeatureName, React.ElementType> = {
  Messaging: MessageSquare,
  "Video Calls": Video,
  "Photo Sharing": ImageIcon,
  "Phone Calls": Phone,
}

const facilities = [
  {
    name: "San Quentin State Prison",
    slug: "san-quentin-state-prison",
    state: "California",
    type: "State Prison",
    features: ["Messaging", "Video Calls", "Photo Sharing"] as FeatureName[],
  },
  {
    name: "Attica Correctional Facility",
    slug: "attica-correctional-facility",
    state: "New York",
    type: "State Prison",
    features: ["Messaging", "Phone Calls"] as FeatureName[],
  },
  {
    name: "Federal Correctional Complex Coleman",
    slug: "federal-correctional-complex-coleman",
    state: "Florida",
    type: "Federal Prison",
    features: ["Messaging", "Phone Calls"] as FeatureName[],
  },
]

export default function FeaturedFacilities() {
  return (
    <section
      className="border-b bg-muted/30 py-16"
      aria-labelledby="facilities-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-10">
          <SectionHeading
            id="facilities-heading"
            title="Find Communication Options at Any Facility"
            subtitle="Browse facilities to see which providers and services are available."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              {/* Location */}
              <div className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{facility.state}</span>
              </div>

              {/* Name */}
              <h3 className="mb-2 text-base font-semibold leading-snug text-foreground">
                {facility.name}
              </h3>

              {/* Type badge */}
              <div className="mb-4">
                <Badge variant="secondary" className="text-xs">
                  {facility.type}
                </Badge>
              </div>

              {/* Feature chips */}
              <div
                className="mb-5 flex flex-wrap gap-1.5"
                aria-label="Available communication features"
              >
                {facility.features.map((feature) => {
                  const Icon = featureIcons[feature]
                  return (
                    <span
                      key={feature}
                      className="flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      <Icon className="h-3 w-3" aria-hidden="true" />
                      {feature}
                    </span>
                  )
                })}
              </div>

              {/* CTA */}
              <Link
                href={`/facility/${facility.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-auto w-full justify-center text-xs"
                )}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/facilities"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
          >
            Browse All Facilities
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/states"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
          >
            Browse by State
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
