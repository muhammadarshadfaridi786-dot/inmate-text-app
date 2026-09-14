"use client"

import { useState } from "react"
import GuidesSearch from "@/components/guides/GuidesSearch"
import type { GuideBasic } from "@/types"

interface GuidesDirectoryProps {
  guides: GuideBasic[]
}

export default function GuidesDirectory({ guides }: GuidesDirectoryProps) {
  const [selectedCountry, setSelectedCountry] = useState("all")

  return (
    <div>
      <section aria-labelledby="all-guides-heading">
        <GuidesSearch
          guides={guides}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </section>
    </div>
  )
}
