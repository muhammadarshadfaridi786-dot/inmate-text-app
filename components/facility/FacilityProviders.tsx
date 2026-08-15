import Link from "next/link"
import {
  DollarSign,
  ImageIcon,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { PROVIDER_DETAILS } from "@/lib/data/providers"
import type { FacilityProvider } from "@/lib/data/facilities"

const serviceIcons = [
  { key: "messaging" as const,     icon: MessageSquare, label: "Messaging"       },
  { key: "video" as const,         icon: Video,         label: "Video"           },
  { key: "photos" as const,        icon: ImageIcon,     label: "Photos"          },
  { key: "phone" as const,         icon: Phone,         label: "Phone"           },
  { key: "moneyTransfer" as const, icon: DollarSign,    label: "Money Transfer"  },
]

interface FacilityProvidersProps {
  facilityName: string
  providers: FacilityProvider[]
}

export default function FacilityProviders({
  facilityName,
  providers,
}: FacilityProvidersProps) {
  return (
    <section className="border-b bg-muted/30 py-16" aria-labelledby="fp-heading">
      <PageWrapper>
        <SectionHeading
          id="fp-heading"
          title={`Communication Providers at ${facilityName}`}
          subtitle="These providers operate communication services at this facility. Each may cover different services."
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => {
            const hasDetailPage = !!PROVIDER_DETAILS[provider.slug]
            return (
              <div
                key={provider.slug}
                className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                {/* Logo + name */}
                <div className="mb-3 flex items-center gap-2.5">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white",
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

                {/* Service availability chips */}
                <div
                  className="mb-4 flex flex-wrap gap-1.5"
                  aria-label={`${provider.name} services`}
                >
                  {serviceIcons.map(({ key, icon: Icon, label }) => (
                    <span
                      key={key}
                      className={cn(
                        "flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
                        provider[key]
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400"
                          : "border-border bg-muted text-muted-foreground line-through opacity-50"
                      )}
                    >
                      <Icon className="h-3 w-3 shrink-0" aria-hidden="true" />
                      {label}
                    </span>
                  ))}
                </div>

                {/* Notes */}
                {provider.notes && (
                  <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {provider.notes}
                  </p>
                )}

                {/* Link — only rendered when a detail page exists */}
                {hasDetailPage ? (
                  <Link
                    href={`/provider/${provider.slug}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-auto w-full justify-center text-xs"
                    )}
                  >
                    View {provider.name} Services
                  </Link>
                ) : (
                  <span
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-auto w-full cursor-default justify-center text-xs text-muted-foreground"
                    )}
                  >
                    Guide Coming Soon
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </PageWrapper>
    </section>
  )
}
