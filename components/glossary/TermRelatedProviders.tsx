import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { ALL_PROVIDERS } from "@/lib/data/providers"

interface TermRelatedProvidersProps {
  termName: string
  relatedProviderSlugs: string[]
}

export default function TermRelatedProviders({
  termName,
  relatedProviderSlugs,
}: TermRelatedProvidersProps) {
  if (!relatedProviderSlugs.length) return null

  const providers = relatedProviderSlugs
    .map((slug) => ALL_PROVIDERS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof ALL_PROVIDERS

  if (!providers.length) return null

  return (
    <section className="border-b py-16" aria-labelledby="related-providers-heading">
      <PageWrapper>
        <SectionHeading
          id="related-providers-heading"
          title="Related Providers"
          subtitle={`Communication providers that are relevant to ${termName}.`}
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <Link
              key={provider.slug}
              href={`/provider/${provider.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white",
                  provider.color
                )}
                aria-hidden="true"
              >
                {provider.initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{provider.name}</p>
                <p className="text-xs text-muted-foreground truncate">{provider.tagline}</p>
              </div>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
