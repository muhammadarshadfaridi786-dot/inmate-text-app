import PageWrapper from "@/components/layout/PageWrapper"

interface CompareIntroProps {
  providerAName: string
  providerBName: string
  intro: string[]
}

export default function CompareIntro({
  providerAName,
  providerBName,
  intro,
}: CompareIntroProps) {
  if (!intro.length) return null

  return (
    <section className="border-b py-16" aria-labelledby="compare-intro-heading">
      <PageWrapper>
        <div className="max-w-[68ch]">
          <h2
            id="compare-intro-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-foreground"
          >
            {providerAName} vs {providerBName}: Full Comparison
          </h2>
          <div className="space-y-5">
            {intro.map((paragraph, i) => (
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
