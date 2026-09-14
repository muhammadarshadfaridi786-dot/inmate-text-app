"use client"

import { useState } from "react"
import GuidesSearch from "@/components/guides/GuidesSearch"
import type { GuideBasic } from "@/types"

interface GuidesDirectoryProps {
  guides: GuideBasic[]
}

export default function GuidesDirectory({ guides }: GuidesDirectoryProps) {
  const [selectedCountry, setSelectedCountry] = useState("all")

  const filteredGuides = selectedCountry === "all"
    ? guides
    : guides.filter((g) => g.country === selectedCountry)

  return (
    <div>
      {/* All Guides with search */}
      <section aria-labelledby="all-guides-heading">
        <GuidesSearch
          guides={filteredGuides}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </section>
    </div>
  )
}
