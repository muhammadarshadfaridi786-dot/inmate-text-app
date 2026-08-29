import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import type { StateDetail } from "@/lib/data/states"

interface StateCTAProps {
  state: StateDetail
}

export default function StateCTA({ state }: StateCTAProps) {
  return (
    <section className="bg-primary py-14" aria-labelledby="state-cta-heading">
      <PageWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="state-cta-heading"
            className="mb-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl"
          >
            Find All {state.name} Communication Options
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            Search {state.facilityCount.toLocaleString()}+ correctional facilities
            across {state.name}. Discover which providers serve each facility and
            what messaging, video, and phone options are available. Free, with no
            account required.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/facilities?state=${state.abbreviation}`}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Search {state.abbreviation} Facilities
            </Link>
            <Link
              href="/compare"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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
