import Link from "next/link"
import {
  DollarSign,
  ImageIcon,
  MapPin,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { StateFacility } from "@/lib/data/states"

type FeatureKey =
  | "Messaging"
  | "Messaging (CorrLinks)"
  | "Video Calls"
  | "Photo Sharing"
  | "Phone Calls"
  | "Money Transfer"

const featureIcons: Record<string, React.ElementType> = {
  Messaging: MessageSquare,
  "Messaging (CorrLinks)": MessageSquare,
  "Video Calls": Video,
  "Photo Sharing": ImageIcon,
  "Phone Calls": Phone,
  "Money Transfer": DollarSign,
}

interface StateFacilitiesProps {
  stateName: string
  facilities: StateFacility[]
}

export default function StateFacilities({ stateName, facilities }: StateFacilitiesProps) {
  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="facilities-heading">
      <PageWrapper>
        <SectionHeading
          id="facilities-heading"
          title={`Featured ${stateName} Facilities`}
          subtitle="Sample correctional facilities with communication information. Full facility list coming soon."
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              {/* County */}
              <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{facility.county}</span>
              </div>

              {/* Name */}
              <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground">
                {facility.name}
              </h3>

              {/* Type badge */}
              <div className="mb-4">
                <Badge variant="secondary" className="text-xs">
                  {facility.type}
                </Badge>
              </div>

              {/* Feature badges */}
              <div
                className="mb-5 flex flex-wrap gap-1.5"
                aria-label="Available communication features"
              >
                {facility.features.map((feature) => {
                  const Icon = featureIcons[feature] ?? MessageSquare
                  return (
                    <span
                      key={feature}
                      className="flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      <Icon className="h-3 w-3 shrink-0" aria-hidden="true" />
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
        <div className="mt-6">
          <Link
            href="/facilities"
            className={cn(buttonVariants({ variant: "outline" }), "text-sm")}
          >
            Browse All Facilities
          </Link>
        </div>
      </PageWrapper>
    </section>
  )
}
