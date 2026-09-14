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
import { GUIDE_CATEGORIES } from "@/lib/data/guide-categories"
import type { GuideBasic, GuideCategory } from "@/types"
import GuideCard from "@/components/guides/GuideCard"

const COUNTRIES = [
  { label: "All Countries", value: "all" },
  { label: "United States", value: "us" },
  { label: "Canada", value: "canada" },
  { label: "United Kingdom", value: "uk" },
  { label: "Australia", value: "australia" },
  { label: "Mexico", value: "mexico" },
]

interface GuidesSearchProps {
  guides: GuideBasic[]
  selectedCountry: string
  setSelectedCountry: (country: string) => void
}

export default function GuidesSearch({ guides, selectedCountry, setSelectedCountry }: GuidesSearchProps) {
  const [query, setQuery]       = useState("")
  const [category, setCategory] = useState<GuideCategory | "all">("all")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return guides.filter((g) => {
      if (category !== "all" && g.category !== category) return false
      if (q) {
        return (
          g.title.toLowerCase().includes(q) ||
          g.excerpt.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [guides, query, category])

  const hasActiveFilter = query || category !== "all" || selectedCountry !== "all"

  function clearAll() {
    setQuery("")
    setCategory("all")
    setSelectedCountry("all")
  }

  return (
    <div>
      {/* Search + category filter row */}
      <div className="mb-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            aria-label="Search guides"
          />
        </div>

        <Select
          value={category}
          onValueChange={(v) => setCategory((v ?? "all") as GuideCategory | "all")}
        >
          <SelectTrigger className="w-[180px]" aria-label="Filter by category">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {GUIDE_CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={selectedCountry}
          onValueChange={(v) => setSelectedCountry(v ?? "all")}
        >
          <SelectTrigger className="w-[180px]" aria-label="Filter by country">
            <SelectValue placeholder="All Countries" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
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

      {/* Result count */}
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length === guides.length
          ? `${guides.length} guides`
          : `${filtered.length} of ${guides.length} guides`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <GuideCard key={g.id} guide={g} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No guides match your search. Try adjusting the filters.
        </p>
      )}
    </div>
  )
}
