import Link from "next/link"
import { ArrowRight, GitCompare } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"

interface CompareCTAProps {
  providerAName: string
  providerBName: string
  providerASlug: string
  providerBSlug: string
}

export default function CompareCTA({
  providerAName,
  providerBName,
  providerASlug,
  providerBSlug,
}: CompareCTAProps) {
  return (
    <section className="bg-primary py-14" aria-labelledby="compare-cta-heading">
      <PageWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="compare-cta-heading"
            className="mb-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl"
          >
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            Review both provider pages for full details on features, facility coverage, and pricing
            before creating your account.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/provider/${providerASlug}`}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 gap-2 px-8 text-sm font-semibold"
              )}
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              {providerAName} Guide
            </Link>
            <Link
              href={`/provider/${providerBSlug}`}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 gap-2 px-8 text-sm font-semibold"
              )}
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              {providerBName} Guide
            </Link>
            <Link
              href="/compare"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 gap-2 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              <GitCompare className="h-4 w-4" aria-hidden="true" />
              All Comparisons
            </Link>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
