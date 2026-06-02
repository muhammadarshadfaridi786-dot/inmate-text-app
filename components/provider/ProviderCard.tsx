import Link from "next/link"
import { ArrowRight, DollarSign, ImageIcon, MessageSquare, Phone, Video } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import type { ProviderBasic } from "@/lib/data/providers"

const serviceChips = [
  { key: "messaging" as const,     icon: MessageSquare, label: "Messaging"      },
  { key: "video" as const,         icon: Video,         label: "Video"          },
  { key: "photos" as const,        icon: ImageIcon,     label: "Photos"         },
  { key: "phone" as const,         icon: Phone,         label: "Phone"          },
  { key: "moneyTransfer" as const, icon: DollarSign,    label: "Money"          },
]

interface ProviderCardProps {
  provider: ProviderBasic
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">

      {/* Logo + name */}
      <div className="mb-3 flex items-center gap-3">
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white",
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

      {/* Tagline */}
      <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground">
        {provider.tagline}
      </p>

      {/* Service chips */}
      <div className="mb-4 flex flex-wrap gap-1" aria-label={`${provider.name} services`}>
        {serviceChips.map(({ key, icon: Icon, label }) => (
          <span
            key={key}
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full border px-1.5 py-0.5 text-xs",
              provider.services[key]
                ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400"
                : "border-border bg-muted text-muted-foreground opacity-40 line-through"
            )}
          >
            <Icon className="h-3 w-3 shrink-0" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>

      {/* CTA */}
      {provider.hasDetailPage ? (
        <Link
          href={`/provider/${provider.slug}`}
          className={cn(
            buttonVariants({ size: "sm" }),
            "mt-auto w-full justify-center gap-1 text-xs"
          )}
          aria-label={`View ${provider.name} guide`}
        >
          View Guide
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      ) : (
        <span
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-auto w-full cursor-default justify-center text-xs text-muted-foreground"
          )}
        >
          Coming Soon
        </span>
      )}
    </div>
  )
}
