import { ChevronDown } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import JsonLd from "@/components/seo/JsonLd"
import { buildFaqSchema } from "@/lib/schema"

interface FaqItem {
  question: string
  answer: string
}

interface TermFaqProps {
  termName: string
  faq: FaqItem[]
}

export default function TermFaq({ termName, faq }: TermFaqProps) {
  if (!faq.length) return null

  return (
    <>
      <JsonLd schema={buildFaqSchema(faq)} />
      <section className="border-b py-16" aria-labelledby="term-faq-heading">
        <PageWrapper>
          <SectionHeading
            id="term-faq-heading"
            title="Frequently Asked Questions"
            subtitle={`Common questions about ${termName}, answered in plain language.`}
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
    </>
  )
}
