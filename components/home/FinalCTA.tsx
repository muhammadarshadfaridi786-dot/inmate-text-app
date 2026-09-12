import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import ScrollReveal from "@/components/shared/ScrollReveal"

export default function FinalCTA() {
  return (
    <section
      className="bg-primary py-16"
      aria-labelledby="cta-heading"
    >
      <PageWrapper>
        <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground"
          >
            Start Finding Communication Options Today
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            Search our directory of 200+ correctional facilities across all 50
            states. Discover which providers serve your facility and get connected
            in minutes, free with no account required.
          </p>
          <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/facilities"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Search Facilities
            </Link>
            <Link
              href="/compare"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              Compare Providers
            </Link>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 underline-offset-4 hover:text-primary-foreground hover:underline"
          >
            Or read our communication guides
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
