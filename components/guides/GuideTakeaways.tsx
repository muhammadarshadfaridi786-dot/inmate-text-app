import { CheckCircle2 } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"

interface GuideTakeawaysProps {
  takeaways: string[]
}

export default function GuideTakeaways({ takeaways }: GuideTakeawaysProps) {
  if (!takeaways.length) return null

  return (
    <section
      className="border-b bg-primary/[0.03] py-14"
      aria-labelledby="takeaways-heading"
    >
      <PageWrapper>
        <div className="max-w-[68ch]">
          <SectionHeading
            id="takeaways-heading"
            title="Key Takeaways"
            subtitle="The most important things to remember from this guide."
            className="mb-6"
          />
          <ul className="space-y-3" role="list">
            {takeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm leading-6 text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </PageWrapper>
    </section>
  )
}
