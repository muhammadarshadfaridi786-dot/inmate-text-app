import { CheckCircle2 } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"

interface CompareQuickVerdictProps {
  providerAName: string
  providerBName: string
  verdict: string[]
}

export default function CompareQuickVerdict({
  providerAName,
  providerBName,
  verdict,
}: CompareQuickVerdictProps) {
  if (!verdict.length) return null

  return (
    <section
      className="border-b bg-muted/30 py-14"
      aria-labelledby="quick-verdict-heading"
    >
      <PageWrapper>
        <div className="max-w-3xl">
          <SectionHeading
            id="quick-verdict-heading"
            title={`Quick Verdict: ${providerAName} vs ${providerBName}`}
            subtitle="A quick summary to help you decide before reading the full comparison."
            className="mb-7"
          />
          <ul className="space-y-3" role="list">
            {verdict.map((sentence, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm leading-7 text-muted-foreground">
                  {sentence}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </PageWrapper>
    </section>
  )
}