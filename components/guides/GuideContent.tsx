import { slugify } from "@/lib/utils"
import PageWrapper from "@/components/layout/PageWrapper"
import type { GuideDetail } from "@/types"

interface GuideContentProps {
  guide: GuideDetail
}

export default function GuideContent({ guide }: GuideContentProps) {
  if (!guide.sections.length) return null

  return (
    <section className="border-b py-16" aria-labelledby="guide-content-heading">
      <PageWrapper>
        <h2 id="guide-content-heading" className="sr-only">
          Guide Content
        </h2>
        <div className="max-w-[68ch] space-y-12">
          {guide.sections.map((section, i) => {
            const sectionId = slugify(section.heading)
            return (
              <div key={i} id={sectionId}>
                <h2 className="mb-5 text-xl font-bold tracking-tight text-foreground">
                  {section.heading}
                </h2>
                <div className="space-y-5">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-base leading-7 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </PageWrapper>
    </section>
  )
}
