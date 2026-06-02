import { cn } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { ComparisonBestFor, ComparisonSide } from "@/lib/data/comparisons"

interface CompareBestForProps {
  sideA: ComparisonSide
  sideB: ComparisonSide
  bestFor: ComparisonBestFor[]
}

export default function CompareBestFor({
  sideA,
  sideB,
  bestFor,
}: CompareBestForProps) {
  if (!bestFor.length) return null

  return (
    <section className="border-b py-16" aria-labelledby="best-for-heading">
      <PageWrapper>
        <SectionHeading
          id="best-for-heading"
          title="Which Is Better For..."
          subtitle="Choosing the right platform depends on your specific situation."
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl space-y-3">
          {bestFor.map((item, i) => {
            const isA = item.winner === sideA.slug
            const winner = isA ? sideA : sideB

            return (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-xl border bg-card p-5 sm:flex-row sm:items-start"
              >
                {/* Scenario */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{item.scenario}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.reason}</p>
                </div>

                {/* Winner badge */}
                <div className="shrink-0">
                  <div className="flex items-center gap-1.5 rounded-lg border bg-muted/50 px-3 py-1.5">
                    <span
                      className={cn(
                        "inline-flex h-4 w-4 items-center justify-center rounded text-[9px] font-bold text-white",
                        winner.color
                      )}
                      aria-hidden="true"
                    >
                      {winner.initial}
                    </span>
                    <span className="text-xs font-semibold text-foreground">{winner.name}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </PageWrapper>
    </section>
  )
}
