import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { STATE_DETAILS } from "@/lib/data/states"
import { generateStateMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import RelatedLinks from "@/components/seo/RelatedLinks"
import StateHero from "@/components/state/StateHero"
import StateIntro from "@/components/state/StateIntro"
import StateFacilityStats from "@/components/state/StateFacilityStats"
import StateCounties from "@/components/state/StateCounties"
import StateProviders from "@/components/state/StateProviders"
import StateFacilities from "@/components/state/StateFacilities"
import StateCommunication from "@/components/state/StateCommunication"
import StateCTA from "@/components/state/StateCTA"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(STATE_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const state = STATE_DETAILS[slug]
  if (!state) return {}
  return generateStateMetadata(state)
}

export default async function StatePage({ params }: PageProps) {
  const { slug } = await params
  const state = STATE_DETAILS[slug]
  if (!state) notFound()

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "States", href: "/states" },
    { label: state.name },
  ]

  const relatedLinks = [
    { label: "All Counties", href: "/counties" },
    { label: "All Facilities", href: "/facilities" },
    { label: "Inmate Messaging", href: "/messaging" },
    { label: "Video Visitation", href: "/video-calls" },
    { label: "Photo Sharing", href: "/photo-sharing" },
    { label: "Phone Calls", href: "/phone-calls" },
    { label: "Money Transfer", href: "/money-transfer" },
    { label: "Compare Providers", href: "/compare" },
    { label: "Communication Guides", href: "/guides" },
    { label: "All States", href: "/states" },
  ]

  const stateFaqs =
    state.faq && state.faq.length > 0
      ? state.faq
      : [
          {
            question: `How do I contact an inmate at a ${state.name} prison?`,
            answer: `To contact an inmate in ${state.name}, find the specific facility on this site and check which communication provider it uses. You will need to create an account with the approved provider and locate the inmate by their ID number and facility name.`,
          },
          {
            question: `What communication providers serve ${state.name} correctional facilities?`,
            answer: `${state.name} facilities use a range of providers depending on location and facility type. Common options include JPay for state prisons, ConnectNetwork and GettingOut for many county jails, and CorrLinks for federal institutions. The correct provider depends on where your loved one is housed.`,
          },
          {
            question: `Can I send money to an inmate in ${state.name}?`,
            answer: `Yes. Most ${state.name} correctional facilities allow money transfers through their approved provider. JPay handles transfers at many state facilities, while county jails typically use different platforms. Check the specific facility page for confirmed options.`,
          },
          {
            question: `Does ${state.name} allow video visitation?`,
            answer: `Many ${state.name} facilities offer video visitation through contracted providers, though availability varies by institution. Use the facility search on this site to check whether video visits are available at a specific location.`,
          },
        ]

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          `${state.name} Prison Communication Guide`,
          state.description,
          `/state/${state.slug}`
        )}
      />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd schema={buildFaqSchema(stateFaqs)} />

      {/* Breadcrumb */}
      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Page sections */}
      <StateHero state={state} />
      <StateIntro stateName={state.name} intro={state.intro} overview={state.overview} />
      <StateFacilityStats stateName={state.name} data={state.facilitiesByType} />
      <StateCounties stateName={state.name} counties={state.counties} />
      <StateProviders stateName={state.name} providers={state.providers} />
      <StateFacilities stateName={state.name} facilities={state.featuredFacilities} />

      {/* FAQ */}
      <section className="border-b py-16" aria-labelledby="state-faq-heading">
        <PageWrapper>
          <div className="max-w-[68ch]">
            <h2
              id="state-faq-heading"
              className="mb-6 text-2xl font-bold tracking-tight text-foreground"
            >
              {state.name} Inmate Communication FAQ
            </h2>
            <div className="space-y-2">
              {stateFaqs.map((item, i) => (
                <details key={i} className="rounded-lg border group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-sm list-none">
                    {item.question}
                    <span className="ml-2 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </PageWrapper>
      </section>

      <StateCommunication stateName={state.name} />

      {/* Internal links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>

      {/* State CTA */}
      <StateCTA state={state} />
    </>
  )
}
