import { CheckCircle2, XCircle } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"

interface ProviderProsconsProps {
  providerName: string
  pros: string[]
  cons: string[]
}

export default function ProviderProscons({
  providerName,
  pros,
  cons,
}: ProviderProsconsProps) {
  return (
    <section className="border-b py-16" aria-labelledby="proscons-heading">
      <PageWrapper>
        <SectionHeading
          id="proscons-heading"
          title={`${providerName} — Pros & Cons`}
          subtitle={`An honest look at the strengths and limitations of ${providerName}.`}
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">

          {/* Pros */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-foreground">Strengths</h3>
            </div>
            <ul className="space-y-3" role="list">
              {pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-amber-600" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-foreground">Limitations</h3>
            </div>
            <ul className="space-y-3" role="list">
              {cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                    aria-hidden="true"
                  />
                  {con}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </PageWrapper>
    </section>
  )
}
