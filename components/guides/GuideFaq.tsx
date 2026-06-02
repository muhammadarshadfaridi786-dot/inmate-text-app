import { ChevronDown } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"

interface FaqItem {
  question: string
  answer: string
}

interface GuideFaqProps {
  guideTitle: string
  faq: FaqItem[]
}

export default function GuideFaq({ guideTitle, faq }: GuideFaqProps) {
  if (!faq.length) return null

  return (
    <section className="border-b py-16" aria-labelledby="guide-faq-heading">
      <PageWrapper>
        <SectionHeading
          id="guide-faq-heading"
          title="Frequently Asked Questions"
          subtitle={`Common questions about ${guideTitle}, answered in plain language.`}
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl divide-y divide-border">
          {faq.map((item, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-foreground">
                  {item.question}
                </span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="pb-5 text-sm leading-7 text-muted-foreground">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
