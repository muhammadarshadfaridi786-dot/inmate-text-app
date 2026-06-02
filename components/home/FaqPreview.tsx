import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import ScrollReveal from "@/components/shared/ScrollReveal"

const faqs = [
  {
    question: "What is JPay?",
    answer: (
      <>
        JPay is a leading inmate communication platform that allows family members to send messages,
        photos, and money to incarcerated loved ones. JPay is contracted with dozens of state correctional
        systems and serves facilities across the US.{" "}
        <Link href="/provider/jpay" className="text-primary underline-offset-4 hover:underline">
          Read our JPay overview
        </Link>{" "}
        for more detail.
      </>
    ),
  },
  {
    question: "How do inmate messaging services work?",
    answer: (
      <>
        Inmate messaging services let you send and receive electronic messages through a secure platform
        approved by the facility. Both the sender and recipient need accounts with the same provider.
        Messages are reviewed by facility staff before delivery.{" "}
        <Link
          href="/guides/how-inmate-messaging-works"
          className="text-primary underline-offset-4 hover:underline"
        >
          Our full messaging guide
        </Link>{" "}
        explains the process step by step.
      </>
    ),
  },
  {
    question: "Can I send photos to an inmate?",
    answer: (
      <>
        Many facilities allow digital photo sharing through approved providers such as JPay and others.
        Photos are reviewed before delivery and must meet the facility's content guidelines. Use our{" "}
        <Link href="/facilities" className="text-primary underline-offset-4 hover:underline">
          facility search
        </Link>{" "}
        to find out which photo services are available at a specific location.
      </>
    ),
  },
  {
    question: "How do video visits work?",
    answer: (
      <>
        Video visits are scheduled through the facility's approved provider. You book a time slot online,
        and both parties connect through a secure video platform during the scheduled window. Some
        facilities offer on-site video rooms; others allow visits from home.{" "}
        <Link href="/video-calls" className="text-primary underline-offset-4 hover:underline">
          Learn more about video visitation
        </Link>
        .
      </>
    ),
  },
  {
    question: "Which provider does my facility use?",
    answer: (
      <>
        Each facility contracts with one or more communication providers. Use our{" "}
        <Link href="/facilities" className="text-primary underline-offset-4 hover:underline">
          facility search
        </Link>{" "}
        to find the specific prison or jail by name or state, then view the full list of available
        providers and which services each one offers.
      </>
    ),
  },
]

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
            {faqs.map((faq, i) => (
              <details key={i} className="group px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
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
