import { AlertTriangle } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"

interface FacilityRulesNoticeProps {
  facilityName: string
  rules: string[]
}

export default function FacilityRulesNotice({
  facilityName,
  rules,
}: FacilityRulesNoticeProps) {
  if (!rules.length) return null

  return (
    <section className="border-b py-10" aria-labelledby="rules-heading">
      <PageWrapper>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/20">
          <div className="mb-4 flex items-center gap-2.5">
            <AlertTriangle
              className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-500"
              aria-hidden="true"
            />
            <h2
              id="rules-heading"
              className="text-base font-semibold text-amber-900 dark:text-amber-200"
            >
              Communication Rules at {facilityName}
            </h2>
          </div>
          <ul className="space-y-2" role="list">
            {rules.map((rule, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm leading-relaxed text-amber-800 dark:text-amber-300"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-500"
                  aria-hidden="true"
                />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </PageWrapper>
    </section>
  )
}
