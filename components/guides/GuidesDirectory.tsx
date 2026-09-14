"use client"

import { useState } from "react"
import GuidesSearch from "@/components/guides/GuidesSearch"
import type { GuideBasic } from "@/types"

interface GuidesDirectoryProps {
  guides: GuideBasic[]
}

const COUNTRIES = [
  { label: "All", value: "all" },
  { label: "United States", value: "us" },
  { label: "Canada", value: "canada" },
  { label: "United Kingdom", value: "uk" },
  { label: "Australia", value: "australia" },
  { label: "Mexico", value: "mexico" },
]

export default function GuidesDirectory({ guides }: GuidesDirectoryProps) {
  const [selectedCountry, setSelectedCountry] = useState("all")

  const filteredGuides = selectedCountry === "all"
    ? guides
    : guides.filter((g) =>
        g.country === selectedCountry ||
        g.country === "all" ||
        !g.country
      )

  return (
    <div>
      {/* Country Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {COUNTRIES.map((c) => (
          <button
            key={c.value}
            onClick={() => setSelectedCountry(c.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedCountry === c.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* All Guides with search */}
      <section aria-labelledby="all-guides-heading">
        <GuidesSearch guides={filteredGuides} />
      </section>
    </div>
  )
}
