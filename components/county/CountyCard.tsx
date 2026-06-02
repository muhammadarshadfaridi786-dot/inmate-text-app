import Link from "next/link"
import { ArrowRight, Building2, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { CountyBasic } from "@/lib/data/counties"

interface CountyCardProps {
  county: CountyBasic
}

export default function CountyCard({ county }: CountyCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">

      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span>{county.stateName}</span>
          </div>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground leading-snug">
            {county.name}
          </h3>
        </div>
        <Badge variant="secondary" className="shrink-0 text-xs font-bold">
          {county.stateAbbr}
        </Badge>
      </div>

      {/* Facility count */}
      <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>{county.facilityCount.toLocaleString()} facilities</span>
      </div>

      {/* CTA */}
      {county.hasDetailPage ? (
        <Link
          href={`/county/${county.slug}`}
          className={cn(
            buttonVariants({ size: "sm" }),
            "mt-auto w-full justify-center gap-1 text-xs"
          )}
          aria-label={`View ${county.name} jail and prison communication guide`}
        >
          View County
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      ) : (
        <span
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-auto w-full cursor-default justify-center text-xs text-muted-foreground"
          )}
          aria-label={`${county.name} detail page coming soon`}
        >
          Coming Soon
        </span>
      )}
    </div>
  )
}
