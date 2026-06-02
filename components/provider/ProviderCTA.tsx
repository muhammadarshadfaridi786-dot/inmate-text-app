import Link from "next/link"
import { ArrowRight, Building2, ExternalLink, GitCompare } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import type { ProviderDetail } from "@/lib/data/providers"

interface ProviderCTAProps {
  provider: ProviderDetail
}

export default function ProviderCTA({ provider }: ProviderCTAProps) {
  return (
    <section className="bg-primary py-14" aria-labelledby="provider-cta-heading">
      <PageWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="provider-cta-heading"
            className="mb-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl"
          >
            Get Started with {provider.name}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            Visit the official {provider.name} website to create your account, or browse
            supported facilities and compare alternatives to find the best option for your family.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 gap-2 px-8 text-sm font-semibold"
              )}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Visit {provider.name}
            </Link>
            <Link
              href="/facilities"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 gap-2 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              <Building2 className="h-4 w-4" aria-hidden="true" />
              View Supported Facilities
            </Link>
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
