import type { Metadata } from "next"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Inmate Text App is an independent information directory. We are not affiliated with any correctional facility, government agency, or inmate communication provider.",
  alternates: { canonical: "/disclaimer" },
}

export default function DisclaimerPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <Breadcrumb items={[{ label: "Disclaimer" }]} />
          <div className="mt-4 max-w-2xl">
            <SectionHeading
              as="h1"
              title="Disclaimer"
              subtitle="Important information about the nature and limitations of this platform."
            />
          </div>
        </PageWrapper>
      </section>

      <section className="py-12">
        <PageWrapper>
          <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Inmate Text App is an independent information and directory platform. We are not affiliated
              with any correctional facility, county jail, state department of corrections, the Federal
              Bureau of Prisons, or any inmate communication provider.
            </p>
            <p>
              We do not send messages, facilitate communication, hold inmate accounts, or process payments.
              All communication services are provided by third-party companies such as JPay, CorrLinks,
              ConnectNetwork, GettingOut, SmartInmate, and others. Links to these services lead to their
              own websites and are subject to their own terms and policies.
            </p>
            <p>
              Information about facilities, providers, and communication rules is gathered from publicly
              available sources and may not always reflect the most current state of a facility's policies.
              Rules, provider contracts, and available services change regularly. Always verify current
              information directly with the facility or provider.
            </p>
            <p>
              Nothing on this site constitutes legal advice. If you have legal questions about an
              incarcerated individual, consult a licensed attorney.
            </p>
          </div>
        </PageWrapper>
      </section>
    </>
  )
}
