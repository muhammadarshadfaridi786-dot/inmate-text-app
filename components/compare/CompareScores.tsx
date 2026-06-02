import { cn } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { ComparisonSide } from "@/lib/data/comparisons"

const SCORE_CATEGORIES = [
  { key: "messaging" as const,     label: "Messaging"       },
  { key: "video" as const,         label: "Video Visits"    },
  { key: "photos" as const,        label: "Photo Sharing"   },
  { key: "phone" as const,         label: "Phone Calls"     },
  { key: "moneyTransfer" as const, label: "Money Transfer"  },
  { key: "coverage" as const,      label: "Coverage"        },
  { key: "easeOfUse" as const,     label: "Ease of Use"     },
]

interface ScoreBarProps {
  score: number
  color: string
  isWinner: boolean
}

function ScoreBar({ score, color, isWinner }: ScoreBarProps) {
  const pct = Math.round((score / 10) * 100)
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full transition-all", color.replace("bg-", "bg-"))}
          style={{ width: `${pct}%` }}
          aria-hidden="true"
        />
      </div>
      <span
        className={cn(
          "w-6 text-right text-xs font-semibold tabular-nums",
          isWinner ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {score}
      </span>
    </div>
  )
}

interface CompareScoresProps {
  sideA: ComparisonSide
  sideB: ComparisonSide
}

export default function CompareScores({ sideA, sideB }: CompareScoresProps) {
  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="scores-heading">
      <PageWrapper>
        <SectionHeading
          id="scores-heading"
          title="Feature Scores"
          subtitle="Scores are based on service availability, quality, and user experience across both platforms."
          className="mb-8"
        />

        <div className="mx-auto max-w-3xl overflow-x-auto">
          <table className="w-full text-sm" aria-label="Feature score comparison">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 pr-4 text-xs font-semibold text-muted-foreground">Category</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-muted-foreground w-40">
                  <span
                    className={cn(
                      "inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-white mr-1.5",
                      sideA.color
                    )}
                    aria-hidden="true"
                  >
                    {sideA.initial}
                  </span>
                  {sideA.name}
                </th>
                <th className="pb-3 text-xs font-semibold text-muted-foreground w-40">
                  <span
                    className={cn(
                      "inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-white mr-1.5",
                      sideB.color
                    )}
                    aria-hidden="true"
                  >
                    {sideB.initial}
                  </span>
                  {sideB.name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {SCORE_CATEGORIES.map(({ key, label }) => {
                const scoreA = sideA.score[key]
                const scoreB = sideB.score[key]
                const aWins = scoreA > scoreB
                const bWins = scoreB > scoreA
                return (
                  <tr key={key}>
                    <td className="py-3 pr-4 text-sm font-medium text-foreground whitespace-nowrap">
                      {label}
                    </td>
                    <td className="py-3 pr-4">
                      <ScoreBar score={scoreA} color={sideA.color} isWinner={aWins} />
                    </td>
                    <td className="py-3">
                      <ScoreBar score={scoreB} color={sideB.color} isWinner={bWins} />
                    </td>
                  </tr>
                )
              })}
              {/* Overall row */}
              <tr className="border-t-2 border-border font-semibold">
                <td className="py-3 pr-4 text-sm text-foreground">Overall</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn("h-full rounded-full", sideA.color)}
                        style={{ width: `${Math.round((sideA.overallScore / 10) * 100)}%` }}
                        aria-hidden="true"
                      />
                    </div>
                    <span className={cn(
                      "w-6 text-right text-xs font-bold tabular-nums",
                      sideA.overallScore >= sideB.overallScore ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {sideA.overallScore.toFixed(1)}
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn("h-full rounded-full", sideB.color)}
                        style={{ width: `${Math.round((sideB.overallScore / 10) * 100)}%` }}
                        aria-hidden="true"
                      />
                    </div>
                    <span className={cn(
                      "w-6 text-right text-xs font-bold tabular-nums",
                      sideB.overallScore >= sideA.overallScore ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {sideB.overallScore.toFixed(1)}
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageWrapper>
    </section>
  )
}
