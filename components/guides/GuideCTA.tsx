import Link from "next/link"
import { ArrowRight, BookOpen, Building2, GitCompare } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import type { GuideDetail } from "@/types"

interface GuideCTAProps {
  guide: GuideDetail
}

export default function GuideCTA({ guide }: GuideCTAProps) {
  return (
    <section className="bg-primary py-14" aria-labelledby="guide-cta-heading">
      <PageWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="guide-cta-heading"
            className="mb-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl"
          >
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            Use this information to find the right communication option for your situation.
            Browse providers, compare services, or search the facility directory.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row flex-wrap">

            {/* Primary CTA: context-aware */}
            <Link
              href={guide.ctaTarget}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 gap-2 px-8 text-sm font-semibold"
              )}
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              {guide.ctaLabel}
            </Link>

            {/* Secondary: Providers */}
            <Link
              href="/providers"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 gap-2 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              <Building2 className="h-4 w-4" aria-hidden="true" />
              All Providers
            </Link>

            {/* Secondary: Compare */}
            <Link
              href="/compare"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 gap-2 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              <GitCompare className="h-4 w-4" aria-hidden="true" />
              Compare Providers
            </Link>

          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
