import { CheckCircle2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { ComparisonSide } from "@/lib/data/comparisons"

interface ProsConsBlock {
  pros: string[]
  cons: string[]
}

interface SideProsconsProps {
  side: ComparisonSide
  proscons: ProsConsBlock
}

function SideProscons({ side, proscons }: SideProsconsProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      {/* Provider header */}
      <div className="mb-4 flex items-center gap-2.5">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white",
            side.color
          )}
          aria-hidden="true"
        >
          {side.initial}
        </div>
        <h3 className="text-sm font-semibold text-foreground">{side.name}</h3>
      </div>

      {/* Pros */}
      <div className="mb-4">
        <div className="mb-2.5 flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          <span className="text-xs font-semibold text-foreground">Strengths</span>
        </div>
        <ul className="space-y-2" role="list">
          {proscons.pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="border-t pt-4">
        <div className="mb-2.5 flex items-center gap-1.5">
          <XCircle className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <span className="text-xs font-semibold text-foreground">Limitations</span>
        </div>
        <ul className="space-y-2" role="list">
          {proscons.cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                aria-hidden="true"
              />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface CompareProsconsProps {
  sideA: ComparisonSide
  sideB: ComparisonSide
  prosConsA: ProsConsBlock
  prosConsB: ProsConsBlock
}

export default function CompareProscons({
  sideA,
  sideB,
  prosConsA,
  prosConsB,
}: CompareProsconsProps) {
  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="proscons-heading">
      <PageWrapper>
        <SectionHeading
          id="proscons-heading"
          title="Pros and Cons"
          subtitle={`An honest look at the strengths and limitations of both ${sideA.name} and ${sideB.name}.`}
          className="mb-8"
        />
        <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">
          <SideProscons side={sideA} proscons={prosConsA} />
          <SideProscons side={sideB} proscons={prosConsB} />
        </div>
      </PageWrapper>
    </section>
  )
}
