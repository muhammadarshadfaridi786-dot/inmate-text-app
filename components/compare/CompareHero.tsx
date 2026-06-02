import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import type { ComparisonDetail } from "@/lib/data/comparisons"

interface CompareHeroProps {
  comparison: ComparisonDetail
}

export default function CompareHero({ comparison }: CompareHeroProps) {
  const { sideA, sideB, category, winnerReason } = comparison

  return (
    <section
      className="border-b bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background py-16 md:py-24"
      aria-labelledby="compare-hero-heading"
    >
      <PageWrapper>
        <div className="mx-auto max-w-3xl text-center">

          {/* Category badge */}
          <div className="mb-6 flex justify-center">
            <Badge variant="secondary">{category} Comparison</Badge>
          </div>

          {/* Provider logos + vs */}
          <div className="mb-6 flex items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg sm:h-20 sm:w-20 sm:text-3xl",
                  sideA.color
                )}
                aria-hidden="true"
              >
                {sideA.initial}
              </div>
              <span className="text-sm font-semibold text-foreground">{sideA.name}</span>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-muted text-xs font-bold text-muted-foreground">
              vs
            </div>

            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg sm:h-20 sm:w-20 sm:text-3xl",
                  sideB.color
                )}
                aria-hidden="true"
              >
                {sideB.initial}
              </div>
              <span className="text-sm font-semibold text-foreground">{sideB.name}</span>
            </div>
          </div>

          {/* Heading */}
          <h1
            id="compare-hero-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {sideA.name} vs {sideB.name}
          </h1>

          {/* Winner reason */}
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            {winnerReason}
          </p>

          {/* Overall scores */}
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <div className={cn(
                "mb-1 text-3xl font-bold",
                sideA.overallScore > sideB.overallScore ? "text-foreground" : "text-muted-foreground"
              )}>
                {sideA.overallScore.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">{sideA.name} Score</div>
            </div>
            <div className="h-px w-8 bg-border" />
            <div className="text-center">
              <div className={cn(
                "mb-1 text-3xl font-bold",
                sideB.overallScore > sideA.overallScore ? "text-foreground" : "text-muted-foreground"
              )}>
                {sideB.overallScore.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">{sideB.name} Score</div>
            </div>
          </div>

        </div>
      </PageWrapper>
    </section>
  )
}