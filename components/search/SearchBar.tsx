"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  placeholder?: string
  className?: string
}

export default function SearchBar({
  placeholder = "Search by facility name, city, or state...",
  className,
}: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = query.trim()
    if (trimmed) {
      router.push("/facilities")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full gap-2", className)}
      role="search"
      aria-label="Search facilities"
    >
      <div className="relative flex-1">
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
          aria-hidden="true"
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="h-12 pl-10 text-base"
          aria-label="Search query"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="h-12 shrink-0 px-6"
        disabled={!query.trim()}
      >
        Search
      </Button>
    </form>
  )
}
