"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import CountyCard from "@/components/county/CountyCard"
import type { CountyBasic } from "@/lib/data/counties"

interface CountiesSearchProps {
  counties: CountyBasic[]
}

export default function CountiesSearch({ counties }: CountiesSearchProps) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return counties
    return counties.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.stateName.toLowerCase().includes(q) ||
        c.stateAbbr.toLowerCase().includes(q)
    )
  }, [counties, query])

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-6 max-w-sm">
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Search counties..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
          aria-label="Search counties by name or state"
        />
      </div>

      {/* Result count */}
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length === counties.length
          ? `${counties.length} counties`
          : `${filtered.length} of ${counties.length} counties`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((county) => (
            <CountyCard key={county.id} county={county} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No counties match &ldquo;{query}&rdquo;. Try a county name or state.
        </p>
      )}
    </div>
  )
}
