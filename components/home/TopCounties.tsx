import Link from "next/link"
import { ArrowRight, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"
import { ALL_COUNTIES } from "@/lib/data/counties"

const featuredSlugs = [
  "los-angeles-county",
  "harris-county",
  "miami-dade-county",
  "kings-county",
]
const featuredCounties = featuredSlugs
  .map((slug) => ALL_COUNTIES.find((c) => c.slug === slug))
  .filter(Boolean) as typeof ALL_COUNTIES

export default function TopCounties() {
  return (
    <section
      className="border-b bg-muted/30 py-16"
      aria-labelledby="counties-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-10">
          <SectionHeading
            id="counties-heading"
            title="Top County Jails"
            subtitle="Find communication options at county detention facilities across the United States."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCounties.map((county) => (
            <Link
              key={county.slug}
              href={`/county/${county.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div className="mb-3">
                <Badge variant="secondary" className="text-xs">
                  {county.stateAbbr}
                </Badge>
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-foreground">
                {county.name}
              </h3>
              <p className="mb-1 text-xs text-muted-foreground">
                {county.stateName}
              </p>
              <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{county.facilityCount} facilities</span>
              </div>
              <span className="mt-auto flex items-center gap-1 text-xs font-medium text-primary">
                View county guide
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
            href="/counties"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
          >
            View All Counties
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
