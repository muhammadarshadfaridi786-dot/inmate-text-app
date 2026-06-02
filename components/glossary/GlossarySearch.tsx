"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import GlossaryCard from "@/components/glossary/GlossaryCard"
import type { GlossaryTermBasic, GlossaryCategory } from "@/lib/data/glossary"

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const CATEGORY_OPTIONS: Array<{ value: GlossaryCategory | "all"; label: string }> = [
  { value: "all",            label: "All Categories"  },
  { value: "Communication",  label: "Communication"   },
  { value: "Facility Types", label: "Facility Types"  },
  { value: "Finance",        label: "Finance"         },
  { value: "Technology",     label: "Technology"      },
  { value: "Administration", label: "Administration"  },
]

interface GlossarySearchProps {
  terms: GlossaryTermBasic[]
}

export default function GlossarySearch({ terms }: GlossarySearchProps) {
  const [query, setQuery]       = useState("")
  const [category, setCategory] = useState<GlossaryCategory | "all">("all")
  const [letter, setLetter]     = useState<string | null>(null)

  const termFirstLetters = useMemo(
    () => new Set(terms.map((t) => t.term[0].toUpperCase())),
    [terms]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return terms.filter((t) => {
      if (category !== "all" && t.category !== category) return false
      if (letter && t.term[0].toUpperCase() !== letter) return false
      if (q) {
        return (
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [terms, query, category, letter])

  const hasActiveFilter = query || category !== "all" || letter !== null

  function clearAll() {
    setQuery("")
    setCategory("all")
    setLetter(null)
  }

  return (
    <div>
      {/* Search + category row */}
      <div className="mb-4 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search terms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            aria-label="Search glossary terms"
          />
        </div>

        <Select
          value={category}
          onValueChange={(v) => setCategory((v ?? "all") as GlossaryCategory | "all")}
        >
          <SelectTrigger className="w-[180px]" aria-label="Filter by category">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORY_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilter && (
          <button
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors"
            aria-label="Clear all filters"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Clear
          </button>
        )}
      </div>

      {/* A–Z alphabet navigation */}
      <div
        className="mb-6 overflow-x-auto pb-1"
        role="navigation"
        aria-label="Filter glossary by first letter"
      >
        <div className="flex gap-1 min-w-max">
          {ALPHABET.map((char) => {
            const hasTerms = termFirstLetters.has(char)
            const isActive = letter === char
            return (
              <button
                key={char}
                onClick={() => setLetter(isActive ? null : char)}
                disabled={!hasTerms}
                aria-pressed={isActive}
                aria-label={`Filter by letter ${char}`}
                className={cn(
                  "h-8 w-8 rounded text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : hasTerms
                    ? "text-foreground hover:bg-muted"
                    : "cursor-not-allowed text-muted-foreground/30"
                )}
              >
                {char}
              </button>
            )
          })}
        </div>
      </div>

      {/* Result count */}
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length === terms.length
          ? `${terms.length} terms`
          : `${filtered.length} of ${terms.length} terms`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <GlossaryCard key={t.id} term={t} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No terms match your search. Try adjusting the filters.
        </p>
      )}
    </div>
  )
}
