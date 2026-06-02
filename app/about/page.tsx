import type { Metadata } from "next"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = {
  title: "About Inmate Text App",
  description:
    "Learn about Inmate Text App, a free prison communication discovery platform that helps families find messaging, video visitation, and communication options at correctional facilities across the United States.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <Breadcrumb items={[{ label: "About" }]} />
          <div className="mt-4 max-w-2xl">
            <SectionHeading
              as="h1"
              title="About Inmate Text App"
              subtitle="A free prison communication discovery platform for families across the United States."
            />
          </div>
        </PageWrapper>
      </section>

      <section className="py-12">
        <PageWrapper>
          <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Inmate Text App is a free information platform that helps families find and compare inmate
              communication options at correctional facilities across the United States. We are not a
              messaging service and we do not connect directly to any prison system.
            </p>
            <p>
              Our goal is to reduce confusion for families who are navigating prison communication for the
              first time. We organize facility data, provider information, and communication guides in one
              place so you can find answers quickly without having to search across multiple sites.
            </p>
            <p>
              We cover federal prisons, state prisons, county jails, and private facilities in all 50
              states. Our directory includes information on major communication providers including JPay,
              CorrLinks, ConnectNetwork, GettingOut, SmartInmate, and TextBehind.
            </p>
            <p>
              Inmate Text App is not affiliated with any correctional facility, government agency, or
              communication provider. All provider links lead to the provider's own website where you can
              create an account and begin communicating.
            </p>
            <p>
              If you have questions about our platform or notice information that needs to be corrected,
              please reach out through the contact details listed in our footer once they become available.
            </p>
          </div>
        </PageWrapper>
      </section>
    </>
  )
}
