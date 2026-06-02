import { Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import type { GuideDetail } from "@/types"

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner:     "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400",
  Advanced:     "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-400",
}

function extractYear(isoDate: string): string {
  return new Date(isoDate).getFullYear().toString()
}

interface GuideHeroProps {
  guide: GuideDetail
}

export default function GuideHero({ guide }: GuideHeroProps) {
  return (
    <section
      className="border-b bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background py-16 md:py-20"
      aria-labelledby="guide-hero-heading"
    >
      <PageWrapper>
        <div className="mx-auto max-w-3xl text-center">

          {/* Badges row */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary">{guide.category}</Badge>
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                DIFFICULTY_COLORS[guide.difficulty]
              )}
            >
              {guide.difficulty}
            </span>
          </div>

          {/* Guide title */}
          <h1
            id="guide-hero-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {guide.title}
          </h1>

          {/* Excerpt */}
          <p className="mx-auto mb-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {guide.excerpt}
          </p>

          {/* Meta row: reading time + last updated */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{guide.readingTimeMinutes} min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Updated: {extractYear(guide.updatedAt)}</span>
            </div>
          </div>

        </div>
      </PageWrapper>
    </section>
  )
}
