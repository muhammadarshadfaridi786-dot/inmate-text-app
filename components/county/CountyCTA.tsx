import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import type { CountyDetail } from "@/lib/data/counties"

interface CountyCTAProps {
  county: CountyDetail
}

export default function CountyCTA({ county }: CountyCTAProps) {
  return (
    <section className="bg-primary py-14" aria-labelledby="county-cta-heading">
      <PageWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="county-cta-heading"
            className="mb-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl"
          >
            Find All {county.name} Communication Options
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            Search {county.facilityCount.toLocaleString()}+ correctional facilities
            across {county.name}. Discover which providers serve each facility and
            what messaging, video, and phone options are available. Free, with no
            account required.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/facilities"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Browse {county.stateAbbr} Facilities
            </Link>
            <Link
              href={`/state/${county.stateSlug}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              {county.stateName} State Guide
            </Link>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
