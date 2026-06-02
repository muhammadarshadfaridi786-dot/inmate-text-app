import Link from "next/link"
import { ArrowRight, MapPin, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { FacilityBasic, FacilityType } from "@/lib/data/facilities"

const typeColor: Record<FacilityType, string> = {
  federal: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  state:   "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  county:  "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  private: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
}

const typeLabel: Record<FacilityType, string> = {
  federal: "Federal",
  state:   "State",
  county:  "County",
  private: "Private",
}

interface FacilityCardProps {
  facility: FacilityBasic
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">

      {/* Type pill + state badge */}
      <div className="mb-3 flex items-center gap-1.5">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
            typeColor[facility.type]
          )}
        >
          {typeLabel[facility.type]}
        </span>
        <Badge variant="secondary" className="text-xs font-bold">
          {facility.stateAbbr}
        </Badge>
      </div>

      {/* Name */}
      <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground">
        {facility.name}
      </h3>

      {/* County + security */}
      <div className="mb-4 space-y-1.5">
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
      {facility.hasDetailPage ? (
        <Link
          href={`/facility/${facility.slug}`}
          className={cn(
            buttonVariants({ size: "sm" }),
            "mt-auto w-full justify-center gap-1 text-xs"
          )}
          aria-label={`View communication guide for ${facility.name}`}
        >
          View Guide
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      ) : (
        <span
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-auto w-full cursor-default justify-center text-xs text-muted-foreground"
          )}
        >
          Coming Soon
        </span>
      )}
    </div>
  )
}
