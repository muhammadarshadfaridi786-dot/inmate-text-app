import PageWrapper from "@/components/layout/PageWrapper"

interface StateIntroProps {
  stateName: string
  intro: string[]
}

export default function StateIntro({ stateName, intro }: StateIntroProps) {
  return (
    <section
      className="border-b py-16"
      aria-labelledby="state-intro-heading"
    >
      <PageWrapper>
        <div className="max-w-[68ch]">
          <h2
            id="state-intro-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-foreground"
          >
            {stateName} Inmate Communication Overview
          </h2>
          <div className="space-y-5">
            {intro.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
