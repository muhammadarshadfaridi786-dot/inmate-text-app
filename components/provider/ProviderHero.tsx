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
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import type { ProviderDetail } from "@/lib/data/providers"

const serviceChips = [
  { key: "messaging" as const,     icon: MessageSquare, label: "Messaging"      },
  { key: "video" as const,         icon: Video,         label: "Video"          },
  { key: "photos" as const,        icon: ImageIcon,     label: "Photos"         },
  { key: "phone" as const,         icon: Phone,         label: "Phone"          },
  { key: "moneyTransfer" as const, icon: DollarSign,    label: "Money Transfer" },
]

interface ProviderHeroProps {
  provider: ProviderDetail
}

export default function ProviderHero({ provider }: ProviderHeroProps) {
  return (
    <section
      className="border-b bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background py-16 md:py-24"
      aria-labelledby="provider-hero-heading"
    >
      <PageWrapper>
        <div className="mx-auto max-w-3xl text-center">

          {/* Logo block */}
          <div className="mb-6 flex justify-center">
            <div
              className={cn(
                "flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold text-white shadow-lg",
                provider.color
              )}
              aria-hidden="true"
            >
              {provider.initial}
            </div>
          </div>

          {/* Provider label badge */}
          <div className="mb-4 flex justify-center">
            <Badge variant="secondary">Communication Provider</Badge>
          </div>

          {/* Heading */}
          <h1
            id="provider-hero-heading"
            className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {provider.name}
          </h1>

          {/* Tagline */}
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {provider.tagline}
          </p>

          {/* Service availability chips */}
          <div
            className="mb-10 flex flex-wrap justify-center gap-2"
            aria-label={`${provider.name} available services`}
          >
            {serviceChips.map(({ key, icon: Icon, label }) => (
              <span
                key={key}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
                  provider.services[key]
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400"
                    : "border-border bg-muted text-muted-foreground line-through opacity-50"
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Visit {provider.name}
            </Link>
            <Link
              href="/compare"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-8 text-sm font-semibold"
              )}
            >
              Compare Providers
            </Link>
          </div>

        </div>
      </PageWrapper>
    </section>
  )
}
