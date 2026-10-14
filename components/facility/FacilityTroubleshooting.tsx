import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import { getTroubleshootingFaqs } from "@/lib/data/facility-troubleshooting"
import type { FacilityProvider } from "@/lib/data/facilities"

interface FacilityTroubleshootingProps {
  facilityName: string
  providers: FacilityProvider[]
}

export default function FacilityTroubleshooting({
  facilityName,
  providers,
}: FacilityTroubleshootingProps) {
  const faqs = getTroubleshootingFaqs(providers.map((p) => p.slug))
  if (!faqs.length) return null

  return (
    <>
      <section className="border-b py-16" aria-labelledby="troubleshooting-heading">
        <PageWrapper>
          <SectionHeading
            id="troubleshooting-heading"
            title={`Troubleshooting at ${facilityName}`}
            subtitle="Fix the most common problems families hit with calls, video visits, money, and messaging."
            className="mb-8"
          />
          <dl className="max-w-3xl divide-y divide-border">
            {faqs.map((item, i) => (
              <div key={i} className="py-5">
                <dt className="mb-2 text-sm font-semibold text-foreground">
                  {item.question}
                </dt>
                <dd className="text-sm leading-7 text-muted-foreground">
                  {item.answer}
                  {item.link && (
                    <>
                      {" "}
                      <Link
                        href={item.link.href}
                        className="font-medium text-primary underline underline-offset-2"
                      >
                        See our guide: {item.link.label}
                      </Link>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </PageWrapper>
      </section>
    </>
  )
}
