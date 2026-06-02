import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import JsonLd from "@/components/seo/JsonLd"
import { buildFaqSchema } from "@/lib/schema"

interface FaqItem {
  question: string
  answer: string
}

interface FacilityFaqProps {
  facilityName: string
  faq: FaqItem[]
}

export default function FacilityFaq({ facilityName, faq }: FacilityFaqProps) {
  if (!faq.length) return null

  return (
    <>
      <JsonLd schema={buildFaqSchema(faq)} />
      <section className="border-b py-16" aria-labelledby="faq-heading">
        <PageWrapper>
          <SectionHeading
            id="faq-heading"
            title={`Frequently Asked Questions — ${facilityName}`}
            subtitle="Common questions from families about communication at this facility."
            className="mb-8"
          />
          <dl className="max-w-3xl divide-y divide-border">
            {faq.map((item, i) => (
              <div key={i} className="py-5">
                <dt className="mb-2 text-sm font-semibold text-foreground">
                  {item.question}
                </dt>
                <dd className="text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </PageWrapper>
      </section>
    </>
  )
}
