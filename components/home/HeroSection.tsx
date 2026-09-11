import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SearchBar from "@/components/search/SearchBar"

const trustItems = [
  "Free to Use",
  "No Account Required",
  "All 50 States Covered",
]

export default function HeroSection() {
  return (
    <section
      className="border-b bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background"
      aria-labelledby="hero-heading"
    >
      <PageWrapper>
        <div className="mx-auto max-w-3xl py-16 text-center md:py-24">

          {/* Platform badge */}
          <div className="animate-hero-0 mb-6 flex justify-center">
            <Badge variant="secondary" className="px-3 py-1 text-xs">
              Prison Communication Discovery Platform
            </Badge>
          </div>

          {/* H1 — no entrance animation so the LCP element paints immediately */}
          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Inmate Texting and Phone Calls: Find the Right Service for Any Prison or Jail
          </h1>

          {/* Supporting description */}
          <p className="animate-hero-2 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Search facilities by name or state to find which inmate texting
            app, phone service, or video visit platform your loved one uses.
            Compare JPay, CorrLinks, GettingOut, ConnectNetwork, and more.
            Free directory covering all 50 states.
          </p>

          {/* Search bar */}
          <div className="animate-hero-3 mx-auto mb-8 max-w-xl">
            <SearchBar placeholder="Search by facility name, state, or provider..." />
          </div>

          {/* CTA buttons */}
          <div className="animate-hero-4 mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/facilities"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 gap-2 px-8 text-sm font-semibold"
              )}
            >
              Browse All Facilities
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/providers"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              View Providers
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            className="animate-hero-5 mb-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5"
            aria-label="Platform guarantees"
          >
            {trustItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <CheckCircle
                  className="h-4 w-4 shrink-0 text-success"
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </div>

          {/* Browse by state micro-link */}
          <Link
            href="/states"
            className="animate-hero-5 inline-flex items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Or browse by state
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

        </div>
      </PageWrapper>
    </section>
  )
}
