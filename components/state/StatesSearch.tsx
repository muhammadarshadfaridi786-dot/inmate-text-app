"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import StateCard from "@/components/state/StateCard"
import type { StateBasic } from "@/lib/data/states"

interface StatesSearchProps {
  states: StateBasic[]
}

export default function StatesSearch({ states }: StatesSearchProps) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return states
    return states.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.abbreviation.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q)
    )
  }, [states, query])

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
          placeholder="Search states..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
          aria-label="Search states by name or region"
        />
      </div>

      {/* Result count */}
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length === states.length
          ? `${states.length} states`
          : `${filtered.length} of ${states.length} states`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((state) => (
            <StateCard key={state.id} state={state} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No states match &ldquo;{query}&rdquo;. Try a state name, abbreviation, or region.
        </p>
      )}
    </div>
  )
}
