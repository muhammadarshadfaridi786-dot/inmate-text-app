import PageWrapper from "@/components/layout/PageWrapper"
import type { GuideDetail } from "@/types"

interface GuideIntroProps {
  guide: GuideDetail
}

export default function GuideIntro({ guide }: GuideIntroProps) {
  if (!guide.intro.length) return null

  return (
    <section className="border-b py-10" aria-labelledby="guide-intro-heading">
      <PageWrapper>
        <div className="max-w-[68ch]">
          <h2
            id="guide-intro-heading"
            className="sr-only"
          >
            Introduction
          </h2>
          <div className="space-y-4">
            {guide.intro.map((paragraph, i) => (
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
