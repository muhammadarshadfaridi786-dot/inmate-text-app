import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"
import { ALL_GUIDES } from "@/lib/data/guides"

const featured = ALL_GUIDES.filter((g) => g.featured).slice(0, 3)

export default function FeaturedGuides() {
  return (
    <section
      className="border-b bg-muted/30 py-16"
      aria-labelledby="guides-heading"
    >
      <PageWrapper>
        <ScrollReveal className="mb-10">
          <SectionHeading
            id="guides-heading"
            title="Communication Guides"
            subtitle="Plain-language guides written for families with no prior experience navigating prison communication."
            className="text-center"
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((guide) => (
            <div
              key={guide.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {guide.category}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {guide.readingTimeMinutes} min read
                </span>
              </div>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-base font-semibold leading-snug text-foreground">
                {guide.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {guide.excerpt}
              </p>
              <Link
                href={`/guides/${guide.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-auto w-full justify-center gap-1 text-xs"
                )}
              >
                Read Guide
                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/guides"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
          >
            Browse All Guides
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        </ScrollReveal>
      </PageWrapper>
    </section>
  )
}
