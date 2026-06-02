import Link from "next/link"
import { ArrowRight, DollarSign, ImageIcon, MessageSquare, Phone, Video } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { PROVIDER_DETAILS } from "@/lib/data/providers"

const serviceIcons = [
  { key: "messaging" as const,     icon: MessageSquare },
  { key: "video" as const,         icon: Video         },
  { key: "photos" as const,        icon: ImageIcon     },
  { key: "phone" as const,         icon: Phone         },
  { key: "moneyTransfer" as const, icon: DollarSign    },
]

interface RelatedProvidersProps {
  slugs: string[]
}

export default function RelatedProviders({ slugs }: RelatedProvidersProps) {
  const providers = slugs.map((s) => PROVIDER_DETAILS[s]).filter(Boolean)
  if (!providers.length) return null

  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="related-providers-heading">
      <PageWrapper>
        <SectionHeading
          id="related-providers-heading"
          title="Related Providers"
          subtitle="Other inmate communication providers you may want to consider."
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {providers.map((provider) => (
            <div
              key={provider.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              {/* Logo + name */}
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white",
                    provider.color
                  )}
                  aria-hidden="true"
                >
                  {provider.initial}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{provider.name}</h3>
                  <p className="text-xs text-muted-foreground">{provider.statesCount}+ states</p>
                </div>
              </div>

              {/* Service icons */}
              <div className="mb-4 flex gap-1.5">
                {serviceIcons.map(({ key, icon: Icon }) => (
                  <Icon
                    key={key}
                    className={cn(
                      "h-3.5 w-3.5",
                      provider.services[key] ? "text-primary" : "text-muted-foreground opacity-30"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Tagline */}
              <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
                {provider.tagline}
              </p>

              <Link
                href={`/provider/${provider.slug}`}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-auto w-full justify-center gap-1 text-xs"
                )}
              >
                View Guide
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
