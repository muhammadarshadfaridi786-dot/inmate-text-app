import Link from "next/link"
import { ArrowRight, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { ProviderSupportedFacility } from "@/lib/data/providers"

interface ProviderFacilitiesProps {
  providerName: string
  facilities: ProviderSupportedFacility[]
}

export default function ProviderFacilities({
  providerName,
  facilities,
}: ProviderFacilitiesProps) {
  if (!facilities.length) return null

  return (
    <section className="border-b py-16" aria-labelledby="pf-heading">
      <PageWrapper>
        <SectionHeading
          id="pf-heading"
          title={`Facilities Served by ${providerName}`}
          subtitle="Sample correctional facilities where this provider operates. Full coverage list available on the provider's website."
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.slug}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {facility.name}
                  </p>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <Badge variant="secondary" className="text-xs font-bold shrink-0">
                      {facility.stateAbbr}
                    </Badge>
                    <span className="truncate text-xs text-muted-foreground">
                      {facility.type}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href={`/facility/${facility.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "shrink-0 gap-1 text-xs"
                )}
                aria-label={`View communication guide for ${facility.name}`}
              >
                Guide
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
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
