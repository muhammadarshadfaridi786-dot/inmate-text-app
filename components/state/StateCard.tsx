import Link from "next/link"
import { ArrowRight, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { StateBasic } from "@/lib/data/states"

interface StateCardProps {
  state: StateBasic
}

export default function StateCard({ state }: StateCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">

      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs text-muted-foreground">{state.region}</p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground leading-snug">
            {state.name}
          </h3>
        </div>
        <Badge variant="secondary" className="shrink-0 text-xs font-bold">
          {state.abbreviation}
        </Badge>
      </div>

      {/* Facility count */}
      <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>{state.facilityCount.toLocaleString()} facilities</span>
      </div>

      {/* CTA */}
      {state.hasDetailPage ? (
        <Link
          href={`/state/${state.slug}`}
          className={cn(
            buttonVariants({ size: "sm" }),
            "mt-auto w-full justify-center gap-1 text-xs"
          )}
          aria-label={`View ${state.name} prison communication guide`}
        >
          View State
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      ) : (
        <span
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-auto w-full cursor-default justify-center text-xs text-muted-foreground"
          )}
          aria-label={`${state.name} detail page coming soon`}
        >
          Coming Soon
        </span>
      )}
    </div>
  )
}
