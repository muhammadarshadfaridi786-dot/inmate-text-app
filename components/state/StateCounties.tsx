import { MapPin } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"

interface StateCountiesProps {
  stateName: string
  counties: string[]
}

export default function StateCounties({ stateName, counties }: StateCountiesProps) {
  return (
    <section className="border-b py-16" aria-labelledby="counties-heading">
      <PageWrapper>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">

          {/* Heading */}
          <div className="lg:w-64 lg:shrink-0">
            <SectionHeading
              id="counties-heading"
              title="Counties Covered"
              subtitle={`Major counties in ${stateName} with correctional facilities.`}
            />
            <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{counties.length} counties shown</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              County detail pages are under development and will be available soon.
            </p>
          </div>

          {/* County chips */}
          <div
            className="flex flex-wrap gap-2"
            aria-label={`Counties in ${stateName}`}
          >
            {counties.map((county) => (
              <span
                key={county}
                className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-foreground"
              >
                {county}
              </span>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
