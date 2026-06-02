import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { GuideBasic } from "@/types"

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner:     "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400",
  Advanced:     "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-400",
}

interface GuideCardProps {
  guide: GuideBasic
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">

      {/* Badges row */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="text-xs">
          {guide.category}
        </Badge>
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
            DIFFICULTY_COLORS[guide.difficulty]
          )}
        >
          {guide.difficulty}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-sm font-semibold text-foreground">
        {guide.title}
      </h3>

      {/* Excerpt */}
      <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
        {guide.excerpt}
      </p>

      {/* Footer: reading time + CTA */}
      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{guide.readingTimeMinutes} min read</span>
        </div>
        <Link
          href={`/guides/${guide.slug}`}
          className={cn(
            buttonVariants({ size: "sm" }),
            "gap-1 text-xs"
          )}
          aria-label={`Read guide: ${guide.title}`}
        >
          Read Guide
          <ArrowRight
            className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

    </div>
  )
}
