import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"
import { ALL_STATES } from "@/lib/data/states"

const featuredSlugs = ["california", "texas", "florida", "new-york"]
const featuredStates = featuredSlugs
  .map((slug) => ALL_STATES.find((s) => s.slug === slug))
  .filter(Boolean) as typeof ALL_STATES

export default function FeaturedStates() {
  return (
    <section
      className="border-b py-16"
      aria-labelledby="states-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-10">
          <SectionHeading
            id="states-heading"
            title="Browse by State"
            subtitle="Find correctional facilities, providers, and communication options for any state."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStates.map((state) => (
            <Link
              key={state.slug}
              href={`/state/${state.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {state.abbreviation}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {state.region}
                </Badge>
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-foreground">
                {state.name}
              </h3>
              <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{state.facilityCount.toLocaleString()} facilities tracked</span>
              </div>
              <span className="mt-auto flex items-center gap-1 text-xs font-medium text-primary">
                View state guide
                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/states"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
          >
            View All 50 States
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
