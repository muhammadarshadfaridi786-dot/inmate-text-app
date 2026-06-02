import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { GlossaryTermBasic } from "@/lib/data/glossary"

interface GlossaryCardProps {
  term: GlossaryTermBasic
}

export default function GlossaryCard({ term }: GlossaryCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">

      {/* Category badge */}
      <div className="mb-3">
        <Badge variant="secondary" className="text-xs">
          {term.category}
        </Badge>
      </div>

      {/* Term name */}
      <h3 className="mb-2 text-sm font-semibold text-foreground">
        {term.term}
      </h3>

      {/* Definition preview */}
      <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
        {term.definition}
      </p>

      {/* CTA */}
      <Link
        href={`/glossary/${term.slug}`}
        className={cn(
          buttonVariants({ size: "sm" }),
          "mt-auto w-full justify-center gap-1 text-xs"
        )}
        aria-label={`Read full definition of ${term.term}`}
      >
        Read Definition
        <ArrowRight
          className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  )
}
