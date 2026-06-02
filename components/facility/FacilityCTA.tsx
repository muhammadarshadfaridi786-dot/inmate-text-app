import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import type { FacilityDetail } from "@/lib/data/facilities"

interface FacilityCTAProps {
  facility: FacilityDetail
  stateHasPage: boolean
}

export default function FacilityCTA({ facility, stateHasPage }: FacilityCTAProps) {
  return (
    <section className="bg-primary py-14" aria-labelledby="facility-cta-heading">
      <PageWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="facility-cta-heading"
            className="mb-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl"
          >
            Stay Connected with {facility.name}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            Compare all available providers, search for other {facility.stateName}{" "}
            facilities, and find the right communication options for your family.
            Free, with no account required.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/facilities"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Browse {facility.stateAbbr} Facilities
            </Link>
            {stateHasPage ? (
              <Link
                href={`/state/${facility.stateSlug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                )}
              >
                {facility.stateName} State Guide
              </Link>
            ) : (
              <Link
                href="/states"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                )}
              >
                Browse All States
              </Link>
            )}
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
