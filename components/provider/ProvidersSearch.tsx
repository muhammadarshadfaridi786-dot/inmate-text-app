"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ProviderCard from "@/components/provider/ProviderCard"
import type { ProviderBasic } from "@/lib/data/providers"

type ServiceKey = "messaging" | "video" | "photos" | "phone" | "moneyTransfer"

const SERVICE_OPTIONS: Array<{ value: ServiceKey | "all"; label: string }> = [
  { value: "all",          label: "All Services"   },
  { value: "messaging",    label: "Messaging"       },
  { value: "video",        label: "Video Calls"     },
  { value: "photos",       label: "Photo Sharing"   },
  { value: "phone",        label: "Phone Calls"     },
  { value: "moneyTransfer", label: "Money Transfer" },
]

interface ProvidersSearchProps {
  providers: ProviderBasic[]
}

export default function ProvidersSearch({ providers }: ProvidersSearchProps) {
  const [query, setQuery]   = useState("")
  const [service, setService] = useState<ServiceKey | "all">("all")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return providers.filter((p) => {
      if (service !== "all" && !p.services[service]) return false
      if (q) {
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [providers, query, service])

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
            placeholder="Search providers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            aria-label="Search providers by name"
          />
        </div>

        <Select
          value={service}
          onValueChange={(v) => setService((v ?? "all") as ServiceKey | "all")}
        >
          <SelectTrigger className="w-[175px]" aria-label="Filter by service type">
            <SelectValue placeholder="All Services" />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Result count */}
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length === providers.length
          ? `${providers.length} providers`
          : `${filtered.length} of ${providers.length} providers`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No providers match your search. Try adjusting the filter.
        </p>
      )}
    </div>
  )
}
