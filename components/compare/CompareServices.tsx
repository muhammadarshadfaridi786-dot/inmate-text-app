import {
  DollarSign,
  ImageIcon,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { ComparisonDetail, ComparisonService, ComparisonSide } from "@/lib/data/comparisons"

const SERVICE_META = [
  { key: "messaging" as const,     label: "Messaging",      icon: MessageSquare },
  { key: "video" as const,         label: "Video Visits",   icon: Video         },
  { key: "photos" as const,        label: "Photo Sharing",  icon: ImageIcon     },
  { key: "phone" as const,         label: "Phone Calls",    icon: Phone         },
  { key: "moneyTransfer" as const, label: "Money Transfer", icon: DollarSign    },
]

function winnerLabel(
  service: ComparisonService,
  sideA: ComparisonSide,
  sideB: ComparisonSide
): string | null {
  if (!service.winner) return null
  if (service.winner === sideA.slug) return `${sideA.name} wins`
  if (service.winner === sideB.slug) return `${sideB.name} wins`
  return null
}

interface ServiceRowProps {
  label: string
  Icon: React.ElementType
  service: ComparisonService
  sideA: ComparisonSide
  sideB: ComparisonSide
  index: number
}

function ServiceRow({ label, Icon, service, sideA, sideB, index }: ServiceRowProps) {
  const winner = winnerLabel(service, sideA, sideB)
  const isTie = !service.winner

  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-5 sm:p-6",
        index % 2 === 0 ? "" : "bg-muted/20"
      )}
    >
      {/* Service header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">{label}</h3>
        </div>
        {winner ? (
          <Badge variant="secondary" className="text-xs">{winner}</Badge>
        ) : (
          isTie && (
            <Badge variant="outline" className="text-xs text-muted-foreground">Tie</Badge>
          )
        )}
      </div>

      {/* Side-by-side text */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1.5 flex items-center gap-1.5">
            <span
              className={cn(
                "inline-flex h-4 w-4 items-center justify-center rounded text-[9px] font-bold text-white",
                sideA.color
              )}
              aria-hidden="true"
            >
              {sideA.initial}
            </span>
            <span className="text-xs font-semibold text-foreground">{sideA.name}</span>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{service.providerA}</p>
        </div>
        <div>
          <div className="mb-1.5 flex items-center gap-1.5">
            <span
              className={cn(
                "inline-flex h-4 w-4 items-center justify-center rounded text-[9px] font-bold text-white",
                sideB.color
              )}
              aria-hidden="true"
            >
              {sideB.initial}
            </span>
            <span className="text-xs font-semibold text-foreground">{sideB.name}</span>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{service.providerB}</p>
        </div>
      </div>

      {/* Notes */}
      {service.notes && (
        <p className="mt-3 border-t pt-3 text-xs leading-5 text-muted-foreground/80">
          {service.notes}
        </p>
      )}
    </div>
  )
}

interface CompareServicesProps {
  comparison: ComparisonDetail
}

export default function CompareServices({ comparison }: CompareServicesProps) {
  const { sideA, sideB, services } = comparison

  return (
    <section className="border-b py-16" aria-labelledby="services-heading">
      <PageWrapper>
        <SectionHeading
          id="services-heading"
          title="Service Comparison"
          subtitle={`How ${sideA.name} and ${sideB.name} compare across every major communication service.`}
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {SERVICE_META.map(({ key, label, icon }, i) => (
            <ServiceRow
              key={key}
              label={label}
              Icon={icon}
              service={services[key]}
              sideA={sideA}
              sideB={sideB}
              index={i}
            />
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
