import Link from "next/link"
import {
  CheckCircle2,
  DollarSign,
  ExternalLink,
  ImageIcon,
  MessageSquare,
  Phone,
  Video,
  XCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { ProviderService, ProviderDetail } from "@/lib/data/providers"

const serviceConfig = [
  { key: "messaging" as const,     icon: MessageSquare, label: "Messaging"       },
  { key: "video" as const,         icon: Video,         label: "Video Calls"     },
  { key: "photos" as const,        icon: ImageIcon,     label: "Photo Sharing"   },
  { key: "phone" as const,         icon: Phone,         label: "Phone Calls"     },
  { key: "moneyTransfer" as const, icon: DollarSign,    label: "Money Transfer"  },
]

interface ProviderServicesProps {
  provider: ProviderDetail
}

export default function ProviderServices({ provider }: ProviderServicesProps) {
  return (
    <section className="border-b py-16" aria-labelledby="services-heading">
      <PageWrapper>
        <SectionHeading
          id="services-heading"
          title={`${provider.name} Services`}
          subtitle={`Communication services offered by ${provider.name} and what each one includes.`}
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceConfig.map(({ key, icon: Icon, label }) => {
            const service: ProviderService = provider.serviceDetails[key]
            return (
              <div
                key={key}
                className={cn(
                  "flex flex-col rounded-xl border border-border p-5 shadow-sm",
                  service.available
                    ? "bg-card"
                    : "bg-muted/30 opacity-75"
                )}
              >
                {/* Icon + label + status */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                        service.available ? "bg-primary/10" : "bg-muted"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          service.available ? "text-primary" : "text-muted-foreground"
                        )}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                  </div>
                  {service.available ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-label="Available" />
                  ) : (
                    <XCircle className="h-4 w-4 shrink-0 text-muted-foreground" aria-label="Not available" />
                  )}
                </div>

                {/* Description */}
                <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Notes */}
                {service.notes && (
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground/80 italic">
                    {service.notes}
                  </p>
                )}

                {/* Setup link */}
                {service.available && service.setupUrl && (
                  <Link
                    href={service.setupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    Set Up {label}
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </PageWrapper>
    </section>
  )
}
