import PageWrapper from "@/components/layout/PageWrapper"

interface StateIntroProps {
  stateName: string
  intro: string[]
  overview?: string[]
}

export default function StateIntro({ stateName, intro, overview }: StateIntroProps) {
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

          {overview && overview.length > 0 && (
            <div className="mt-8 space-y-6">
              {overview.map((item, index) => {
                const splitAt = item.indexOf("?")
                const question = splitAt >= 0 ? item.slice(0, splitAt + 1) : item
                const answer = splitAt >= 0 ? item.slice(splitAt + 1).trim() : ""
                return (
                  <div key={index}>
                    <p className="mb-1 font-medium text-foreground">{question}</p>
                    {answer && (
                      <p className="text-base leading-7 text-muted-foreground">
                        {answer}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </PageWrapper>
    </section>
  )
}
