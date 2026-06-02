import {
  CheckCircle2,
  DollarSign,
  ImageIcon,
  MessageSquare,
  MinusCircle,
  Phone,
  Video,
  XCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { CommStatus, FacilityCommService, FacilityDetail } from "@/lib/data/facilities"

// ─── Status badge ──────────────────────────────────────────
const statusConfig: Record<
  CommStatus,
  { label: string; icon: React.ElementType; classes: string }
> = {
  available: {
    label: "Available",
    icon: CheckCircle2,
    classes: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:ring-emerald-800",
  },
  limited: {
    label: "Limited",
    icon: MinusCircle,
    classes: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:ring-amber-800",
  },
  unavailable: {
    label: "Not Available",
    icon: XCircle,
    classes: "bg-muted text-muted-foreground ring-border",
  },
}

function StatusBadge({ status }: { status: CommStatus }) {
  const { label, icon: Icon, classes } = statusConfig[status]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
        classes
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {label}
    </span>
  )
}

// ─── Service row ───────────────────────────────────────────
const serviceConfig = [
  {
    key: "messaging" as const,
    icon: MessageSquare,
    label: "Messaging",
    description: "Electronic messages to and from the inmate.",
  },
  {
    key: "video" as const,
    icon: Video,
    label: "Video Calls",
    description: "Remote or in-person video visitation.",
  },
  {
    key: "photos" as const,
    icon: ImageIcon,
    label: "Photo Sharing",
    description: "Send approved digital or physical photos.",
  },
  {
    key: "phone" as const,
    icon: Phone,
    label: "Phone Calls",
    description: "Inmate-initiated phone calls to approved numbers.",
  },
  {
    key: "moneyTransfer" as const,
    icon: DollarSign,
    label: "Money Transfer",
    description: "Send funds to commissary or phone accounts.",
  },
]

interface FacilityCommunicationProps {
  facility: FacilityDetail
}

export default function FacilityCommunication({ facility }: FacilityCommunicationProps) {
  return (
    <section className="border-b py-16" aria-labelledby="comm-heading">
      <PageWrapper>
        <SectionHeading
          id="comm-heading"
          title="Communication Options"
          subtitle={`Available communication services at ${facility.name}.`}
          className="mb-8"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceConfig.map(({ key, icon: Icon, label, description }) => {
            const service: FacilityCommService = facility.communication[key]
            return (
              <div
                key={key}
                className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                {/* Icon + label row */}
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                </div>

                {/* Status badge */}
                <div className="mb-3">
                  <StatusBadge status={service.status} />
                </div>

                {/* Description */}
                <p className="mb-2 text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>

                {/* Provider */}
                {service.provider && (
                  <p className="mb-1 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Provider: </span>
                    {service.provider}
                  </p>
                )}

                {/* Notes */}
                {service.notes && (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {service.notes}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </PageWrapper>
    </section>
  )
}
