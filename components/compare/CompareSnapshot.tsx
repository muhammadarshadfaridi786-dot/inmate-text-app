import { Trophy, MessageSquare, MapPin, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { ComparisonDetail, ComparisonSide } from "@/lib/data/comparisons"

function resolveWinnerName(
  winnerSlug: string | null,
  sideA: ComparisonSide,
  sideB: ComparisonSide
): string {
  if (!winnerSlug) return "Tie"
  if (winnerSlug === sideA.slug) return sideA.name
  if (winnerSlug === sideB.slug) return sideB.name
  return "Tie"
}

interface SnapshotCardProps {
  icon: React.ElementType
  label: string
  value: string
  isTie?: boolean
}

function SnapshotCard({ icon: Icon, label, value, isTie }: SnapshotCardProps) {
  return (
    <div className="flex flex-col rounded-xl border bg-card p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <p
        className={cn(
          "text-lg font-bold",
          isTie ? "text-muted-foreground" : "text-foreground"
        )}
      >
        {value}
      </p>
    </div>
  )
}

interface CompareSnapshotProps {
  comparison: ComparisonDetail
}

export default function CompareSnapshot({ comparison }: CompareSnapshotProps) {
  const { sideA, sideB, winner, services, coverage, pricing } = comparison

  const overallWinner = resolveWinnerName(winner, sideA, sideB)
  const messagingWinner = resolveWinnerName(services.messaging.winner, sideA, sideB)
  const coverageWinner = resolveWinnerName(coverage.winner, sideA, sideB)
  const pricingWinner = resolveWinnerName(pricing.winner, sideA, sideB)

  return (
    <section className="border-b py-14" aria-labelledby="snapshot-heading">
      <PageWrapper>
        <SectionHeading
          id="snapshot-heading"
          title="Comparison Snapshot"
          subtitle="A high-level summary across the four most important categories."
          className="mb-7"
        />
        <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl">
          <SnapshotCard
            icon={Trophy}
            label="Overall Winner"
            value={overallWinner}
            isTie={!winner}
          />
          <SnapshotCard
            icon={MessageSquare}
            label="Messaging"
            value={messagingWinner}
            isTie={!services.messaging.winner}
          />
          <SnapshotCard
            icon={MapPin}
            label="Coverage"
            value={coverageWinner}
            isTie={!coverage.winner}
          />
          <SnapshotCard
            icon={DollarSign}
            label="Pricing"
            value={pricingWinner}
            isTie={!pricing.winner}
          />
        </div>
      </PageWrapper>
    </section>
  )
}