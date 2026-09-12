import Link from "next/link"
import { BookOpen, Building2, MapPin, Monitor } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"

const stats = [
  {
    icon: Building2,
    value: "200+",
    label: "Facilities Tracked",
    description: "Federal, state, county, and private facilities",
    href: "/facilities",
  },
  {
    icon: Monitor,
    value: "6+",
    label: "Messaging Platforms",
    description: "JPay, CorrLinks, ConnectNetwork, and more",
    href: "/providers",
  },
  {
    icon: MapPin,
    value: "50",
    label: "States Covered",
    description: "Complete directory coverage across the US",
    href: "/states",
  },
  {
    icon: BookOpen,
    value: "20+",
    label: "Guides Published",
    description: "Beginner-friendly guides for families",
    href: "/guides",
  },
]

export default function StatsSection() {
  return (
    <section className="border-b bg-muted/30 py-12" aria-label="Platform statistics">
      <PageWrapper>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/15">
                <stat.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <p className="mb-0.5 text-3xl font-bold tracking-tight tabular-nums text-foreground">
                {stat.value}
              </p>
              <p className="mb-1 text-sm font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </Link>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
