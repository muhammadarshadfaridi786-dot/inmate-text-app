import { Link2, Search, Zap } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find a Facility",
    description:
      "Search by facility name, state, county, or zip code to locate the specific prison, jail, or correctional center.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Discover Communication Options",
    description:
      "See which providers serve that facility, what services are available: messaging, video, phone, photos, and money transfer.",
  },
  {
    number: "03",
    icon: Link2,
    title: "Connect Through the Right Provider",
    description:
      "Follow our direct links to the correct provider, create an account, and start communicating with your loved one in minutes.",
  },
]

export default function HowItWorks() {
  return (
    <section
      className="border-b bg-muted/30 py-16"
      aria-labelledby="how-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-12">
          <SectionHeading
            id="how-heading"
            title="How It Works"
            subtitle="Finding inmate communication options takes three simple steps."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">

              {/* Connector line between steps — desktop only */}
              {index < steps.length - 1 && (
                <div
                  className="absolute left-1/2 top-6 hidden h-px w-full translate-x-6 bg-border md:block"
                  aria-hidden="true"
                />
              )}

              {/* Step number + icon */}
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </div>

              {/* Step number label */}
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Step {step.number}
              </p>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
