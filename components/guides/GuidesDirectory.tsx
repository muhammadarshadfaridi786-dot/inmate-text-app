"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import GuidesSearch from "@/components/guides/GuidesSearch"
import GuideCard from "@/components/guides/GuideCard"
import type { GuideBasic } from "@/types"

interface GuidesDirectoryProps {
  guides: GuideBasic[]
}

export default function GuidesDirectory({ guides }: GuidesDirectoryProps) {
  const featured = guides.filter((g) => g.featured)
  const popular  = guides.filter((g) => g.popular && !g.featured)

  return (
    <div>
      {/* Featured Guides */}
      {featured.length > 0 && (
        <section className="mb-12" aria-labelledby="featured-guides-heading">
          <div className="mb-5 flex items-center justify-between">
            <h2
              id="featured-guides-heading"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              Featured Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((g) => (
              <GuideCard key={g.id} guide={g} />
            ))}
          </div>
        </section>
      )}

      {/* Popular Guides */}
      {popular.length > 0 && (
        <section className="mb-12" aria-labelledby="popular-guides-heading">
          <div className="mb-5 flex items-center justify-between">
            <h2
              id="popular-guides-heading"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              Popular Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((g) => (
              <GuideCard key={g.id} guide={g} />
            ))}
          </div>
        </section>
      )}

      {/* Divider before search */}
      <div className="mb-10 border-t" />

      {/* All Guides with search + filter */}
      <section aria-labelledby="all-guides-heading">
        <h2
          id="all-guides-heading"
          className="mb-5 text-xl font-bold tracking-tight text-foreground"
        >
          All Guides
        </h2>
        <GuidesSearch guides={guides} />
      </section>
    </div>
  )
}
