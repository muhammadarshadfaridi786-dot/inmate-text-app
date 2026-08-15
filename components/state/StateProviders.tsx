import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { PROVIDER_DETAILS } from "@/lib/data/providers"
import type { StateProvider } from "@/lib/data/states"

interface StateProvidersProps {
  stateName: string
  providers: StateProvider[]
}

export default function StateProviders({ stateName, providers }: StateProvidersProps) {
  return (
    <section className="border-b py-16" aria-labelledby="providers-heading">
      <PageWrapper>
        <SectionHeading
          id="providers-heading"
          title={`Communication Providers in ${stateName}`}
          subtitle="These providers serve correctional facilities across the state. Availability varies by facility."
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider) => {
            const hasDetailPage = !!PROVIDER_DETAILS[provider.slug]
            return (
              <div
                key={provider.slug}
                className="flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                {/* Logo + name */}
                <div className="mb-3 flex items-center gap-2.5">
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white",
                      provider.color
                    )}
                    aria-hidden="true"
                  >
                    {provider.initial}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {provider.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {provider.description}
                </p>

                {/* Link — only rendered when a detail page exists */}
                {hasDetailPage ? (
                  <Link
                    href={`/provider/${provider.slug}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "w-full justify-center text-xs"
                    )}
                  >
                    View {provider.name} Guide
                  </Link>
                ) : (
                  <span
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "w-full cursor-default justify-center text-xs text-muted-foreground"
                    )}
                  >
                    Guide Coming Soon
                  </span>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-6">
          <Link
            href="/providers"
            className={cn(buttonVariants({ variant: "outline" }), "text-sm")}
          >
            Compare All Providers
          </Link>
        </div>
      </PageWrapper>
    </section>
  )
}
