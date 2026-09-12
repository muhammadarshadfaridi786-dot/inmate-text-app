import Link from "next/link"
import {
  BookOpen,
  Building2,
  CheckCircle,
  Hash,
  Map,
  MapPin,
  Monitor,
  Scale,
} from "lucide-react"
import { ALL_STATES } from "@/lib/data/states"
import { ALL_COUNTIES } from "@/lib/data/counties"
import { ALL_COMPARISONS } from "@/lib/data/comparisons"
import { ALL_GUIDES } from "@/lib/data/guides"
import { ALL_PROVIDERS } from "@/lib/data/providers"
import { ALL_TERMS } from "@/lib/data/glossary"

// Computed at build time from actual data files
const providerCount  = ALL_PROVIDERS.filter((p) => p.hasDetailPage).length
const stateCount     = ALL_STATES.length
const countyCount    = ALL_COUNTIES.length
const comparisonCount = ALL_COMPARISONS.length
const guideCount     = ALL_GUIDES.length
const glossaryCount  = ALL_TERMS.length

const gridStats = [
  {
    icon: Building2,
    value: "200+",
    label: "Facilities",
    href: "/facilities",
  },
  {
    icon: MapPin,
    value: String(stateCount),
    label: "States",
    href: "/states",
  },
  {
    icon: Map,
    value: `${countyCount}+`,
    label: "Counties",
    href: "/counties",
  },
  {
    icon: Monitor,
    value: String(providerCount),
    label: "Providers",
    href: "/providers",
  },
  {
    icon: BookOpen,
    value: String(guideCount),
    label: "Guides",
    href: "/guides",
  },
  {
    icon: Hash,
    value: String(glossaryCount),
    label: "Glossary Terms",
    href: "/glossary",
  },
]

const trustItems = [
  "Covers All 50 States",
  "Free to Use",
  "Educational Resource",
  "Provider Comparison Tools",
]

export default function HeroStats() {
  return (
    <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/10">

      {/* Panel header */}
      <div className="mb-5 flex items-center gap-2">
        <span
          className="inline-block h-2 w-2 rounded-full bg-success"
          aria-hidden="true"
        />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Platform Overview
        </span>
      </div>

      {/* 2-column stats grid */}
      <div className="mb-4 grid grid-cols-2 gap-3">
        {gridStats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group flex flex-col rounded-xl bg-muted/40 p-4 transition-colors hover:bg-primary/5 hover:ring-1 hover:ring-primary/20"
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
              <stat.icon className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <p className="text-2xl font-bold tracking-tight text-foreground">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {stat.label}
            </p>
          </Link>
        ))}
      </div>

      {/* Full-width comparisons row */}
      <Link
        href="/compare"
        className="group mb-5 flex items-center gap-3 rounded-xl bg-muted/40 px-4 py-3.5 transition-colors hover:bg-primary/5 hover:ring-1 hover:ring-primary/20"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
          <Scale className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-2xl font-bold tracking-tight text-foreground">
            {comparisonCount}
          </p>
          <p className="text-xs text-muted-foreground">Provider Comparisons</p>
        </div>
        <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          View all
        </span>
      </Link>

      {/* Divider */}
      <div className="mb-4 border-t border-border" />

      {/* Trust indicators */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        {trustItems.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1.5"
          >
            <CheckCircle
              className="h-3.5 w-3.5 shrink-0 text-success"
              aria-hidden="true"
            />
            <span className="text-[11px] text-muted-foreground leading-tight">
              {item}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}
