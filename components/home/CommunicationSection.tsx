import Link from "next/link"
import {
  DollarSign,
  ImageIcon,
  MessageSquare,
  Phone,
  Video,
  ArrowRight,
} from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"

const features = [
  {
    icon: MessageSquare,
    name: "Messaging",
    description:
      "Send and receive electronic messages with incarcerated loved ones through approved providers.",
    href: "/messaging",
  },
  {
    icon: Video,
    name: "Video Calls",
    description:
      "Schedule face-to-face video visits from home through facility-approved platforms.",
    href: "/video-calls",
  },
  {
    icon: ImageIcon,
    name: "Photo Sharing",
    description:
      "Send and receive approved photos digitally through inmate communication services.",
    href: "/photo-sharing",
  },
  {
    icon: Phone,
    name: "Phone Calls",
    description:
      "Make and receive voice calls through facility phone systems and approved providers.",
    href: "/phone-calls",
  },
  {
    icon: DollarSign,
    name: "Money Transfer",
    description:
      "Send funds to inmate accounts for commissary and communication credits.",
    href: "/money-transfer",
  },
]

export default function CommunicationSection() {
  return (
    <section
      className="border-b py-16"
      aria-labelledby="communication-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-10">
          <SectionHeading
            id="communication-heading"
            title="Explore Communication Options"
            subtitle="Discover every way families stay connected across correctional facilities."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature) => (
            <Link
              key={feature.name}
              href={feature.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <feature.icon
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                {feature.name}
              </h3>
              <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="flex items-center gap-1 text-xs font-medium text-primary">
                Learn more
                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
