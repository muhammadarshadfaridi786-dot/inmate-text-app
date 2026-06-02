import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"

const providers = [
  {
    name: "JPay",
    slug: "jpay",
    initial: "J",
    color: "bg-blue-600",
    description:
      "Messaging, photos, video visits, and money transfer for state and federal facilities across the US.",
  },
  {
    name: "CorrLinks",
    slug: "corrlinks",
    initial: "C",
    color: "bg-emerald-700",
    description:
      "The Federal Bureau of Prisons email and messaging system for federal inmates nationwide.",
  },
  {
    name: "ConnectNetwork",
    slug: "connectnetwork",
    initial: "C",
    color: "bg-violet-600",
    description:
      "Video visitation and messaging services for county jails and local detention centers.",
  },
  {
    name: "GettingOut",
    slug: "gettingout",
    initial: "G",
    color: "bg-orange-600",
    description:
      "Video calls and messaging across hundreds of county and city correctional facilities.",
  },
  {
    name: "SmartInmate",
    slug: "smartinmate",
    initial: "S",
    color: "bg-teal-600",
    description:
      "Tablet-based communication platform offering messaging, education, and entertainment.",
  },
  {
    name: "TextBehind",
    slug: "textbehind",
    initial: "T",
    color: "bg-rose-600",
    description:
      "Converts digital messages into physical letters for facilities without electronic access.",
  },
]

export default function FeaturedProviders() {
  return (
    <section
      className="border-b bg-muted/30 py-16"
      aria-labelledby="providers-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-10">
          <SectionHeading
            id="providers-heading"
            title="Trusted Communication Providers"
            subtitle="Compare the platforms your facility uses to find the right service for your family."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <div
              key={provider.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              {/* Logo placeholder */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white",
                    provider.color
                  )}
                  aria-hidden="true"
                >
                  {provider.initial}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {provider.name}
                </h3>
              </div>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {provider.description}
              </p>

              {/* CTA */}
              <Link
                href={`/provider/${provider.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "w-full justify-center text-xs"
                )}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/providers"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
          >
            View All Providers
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/compare"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
          >
            Compare Providers
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
