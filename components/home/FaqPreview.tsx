import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"
import { HOME_FAQS } from "@/lib/data/home-faqs"

export default function FaqPreview() {
  return (
    <section
      className="border-b bg-muted/30 py-16"
      aria-labelledby="faq-heading"
    >
      <PageWrapper>
        <div className="mx-auto max-w-2xl">
          <ScrollReveal className="mb-8">
            <SectionHeading
              id="faq-heading"
              title="Frequently Asked Questions"
              subtitle="Common questions from families navigating prison communication."
              className="text-center"
            />
          </ScrollReveal>

          <ScrollReveal delay={150}>
          <div className="divide-y rounded-xl border bg-card ring-1 ring-foreground/10">
            {HOME_FAQS.map((faq, i) => (
              <details key={i} className="group px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer.map((segment, j) =>
                    segment.href ? (
                      <Link
                        key={j}
                        href={segment.href}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        {segment.text}
                      </Link>
                    ) : (
                      <span key={j}>{segment.text}</span>
                    )
                  )}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/guides"
              className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
            >
              Browse All Guides
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/glossary"
              className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 px-6")}
            >
              View Glossary
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </PageWrapper>
    </section>
  )
}
