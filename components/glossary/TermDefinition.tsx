import PageWrapper from "@/components/layout/PageWrapper"
import type { GlossaryTermDetail } from "@/lib/data/glossary"

interface TermDefinitionProps {
  term: GlossaryTermDetail
}

export default function TermDefinition({ term }: TermDefinitionProps) {
  return (
    <section className="border-b py-16" aria-labelledby="term-definition-heading">
      <PageWrapper>
        <div className="max-w-[68ch]">
          <h2
            id="term-definition-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-foreground"
          >
            What Is {term.term}?
          </h2>
          <div className="space-y-5">
            {term.fullExplanation.map((paragraph, i) => (
              <p key={i} className="text-base leading-7 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
