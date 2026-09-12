import Link from "next/link"
import { ArrowRight, BookOpen, FolderOpen, LayoutGrid, Search } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"

const reasons = [
  {
    icon: FolderOpen,
    title: "Organized Information",
    description:
      "All facility and provider data is structured in one place. No more searching across multiple sites to find who serves your facility.",
    linkLabel: "Browse facilities",
    linkHref: "/facilities",
  },
  {
    icon: LayoutGrid,
    title: "Provider Comparisons",
    description:
      "Compare messaging platforms side by side. See features, availability, and how each provider differs before making a decision.",
    linkLabel: "Compare providers",
    linkHref: "/compare",
  },
  {
    icon: BookOpen,
    title: "Communication Guides",
    description:
      "Step-by-step guides for every provider and service type. Written clearly for family members with no prior experience.",
    linkLabel: "Browse guides",
    linkHref: "/guides",
  },
  {
    icon: Search,
    title: "Facility Discovery",
    description:
      "Search 200+ correctional facilities nationwide. Find federal prisons, state prisons, county jails, and local detention centers with detailed communication guides.",
    linkLabel: "Find a facility",
    linkHref: "/facilities",
  },
]

export default function WhyTrustUs() {
  return (
    <section
      className="border-b py-16"
      aria-labelledby="trust-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-10">
          <SectionHeading
            id="trust-heading"
            title="Why Families Trust Inmate Text App"
            subtitle="We exist to reduce confusion and make prison communication discovery simple."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mb-2.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
                <Link
                  href={reason.linkHref}
                  className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  {reason.linkLabel}
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
