import Link from "next/link"
import {
  ArrowRight,
  DollarSign,
  ImageIcon,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"

const features = [
  {
    icon: MessageSquare,
    name: "Messaging",
    description: "Electronic messaging providers and rules.",
    href: "/messaging",
  },
  {
    icon: Video,
    name: "Video Calls",
    description: "Video visitation scheduling and providers.",
    href: "/video-calls",
  },
  {
    icon: ImageIcon,
    name: "Photo Sharing",
    description: "Approved photo delivery services.",
    href: "/photo-sharing",
  },
  {
    icon: Phone,
    name: "Phone Calls",
    description: "Inmate calling providers and rates.",
    href: "/phone-calls",
  },
  {
    icon: DollarSign,
    name: "Money Transfer",
    description: "Send funds to commissary and phone accounts.",
    href: "/money-transfer",
  },
]

interface StateCommunicationProps {
  stateName: string
}

export default function StateCommunication({ stateName }: StateCommunicationProps) {
  return (
    <section className="border-b py-16" aria-labelledby="comm-heading">
      <PageWrapper>
        <SectionHeading
          id="comm-heading"
          title={`Communication Options in ${stateName}`}
          subtitle="Browse every way families stay connected with incarcerated loved ones."
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <Link
              key={feature.name}
              href={feature.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              aria-label={`${feature.name} options in ${stateName}`}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                {feature.name}
              </h3>
              <p className="mb-3 flex-1 text-xs text-muted-foreground">
                {feature.description}
              </p>
              <span className="flex items-center gap-1 text-xs font-medium text-primary">
                Explore
                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
