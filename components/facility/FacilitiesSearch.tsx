"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FacilityCard from "@/components/facility/FacilityCard"
import type { FacilityBasic, FacilityType } from "@/lib/data/facilities"

const TYPE_LABELS: Record<FacilityType | "all", string> = {
  all:     "All Types",
  federal: "Federal",
  state:   "State",
  county:  "County",
  private: "Private",
}

interface FacilitiesSearchProps {
  facilities: FacilityBasic[]
}

export default function FacilitiesSearch({ facilities }: FacilitiesSearchProps) {
  const searchParams = useSearchParams()
  const stateParam = searchParams.get("state")

  const [query, setQuery]       = useState("")
  const [stateFilter, setStateFilter] = useState<string>(() => {
    if (!stateParam) return "all"
    const target = stateParam.toLowerCase()
    const match = facilities.find(
      (f) =>
        f.stateAbbr.toLowerCase() === target ||
        f.stateSlug.toLowerCase() === target
    )
    return match ? match.stateSlug : "all"
  })
  const [typeFilter, setTypeFilter]   = useState<FacilityType | "all">("all")

  const uniqueStates = useMemo(() => {
    const seen = new Set<string>()
    return facilities
      .filter((f) => {
        if (seen.has(f.stateSlug)) return false
        seen.add(f.stateSlug)
        return true
      })
      .map((f) => ({ slug: f.stateSlug, name: f.stateName }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [facilities])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return facilities.filter((f) => {
      if (stateFilter !== "all" && f.stateSlug !== stateFilter) return false
      if (typeFilter !== "all" && f.type !== typeFilter) return false
      if (q) {
        return (
          f.name.toLowerCase().includes(q) ||
          f.countyName.toLowerCase().includes(q) ||
          f.stateName.toLowerCase().includes(q) ||
          f.stateAbbr.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [facilities, query, stateFilter, typeFilter])

  return (
    <div>
      {/* Filters row */}
      <div className="mb-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search facilities..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            aria-label="Search facilities by name, county, or state"
          />
        </div>

        <Select value={stateFilter} onValueChange={(v) => setStateFilter(v ?? "all")}>
          <SelectTrigger className="w-[160px]" aria-label="Filter by state">
            <SelectValue placeholder="All States" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {uniqueStates.map((s) => (
              <SelectItem key={s.slug} value={s.slug}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={typeFilter}
          onValueChange={(v) => setTypeFilter((v ?? "all") as FacilityType | "all")}
        >
          <SelectTrigger className="w-[150px]" aria-label="Filter by facility type">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(TYPE_LABELS) as Array<FacilityType | "all">).map((t) => (
              <SelectItem key={t} value={t}>
                {TYPE_LABELS[t]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Result count */}
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length === facilities.length
          ? `${facilities.length} facilities`
          : `${filtered.length} of ${facilities.length} facilities`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((f) => (
            <FacilityCard key={f.id} facility={f} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No facilities match your search. Try adjusting the filters.
        </p>
      )}
    </div>
  )
}
