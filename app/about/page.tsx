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
              title="About Inmate Text App — Free Prison Communication Directory"
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

      <section className="py-12 border-t">
        <PageWrapper>
          <div className="max-w-2xl space-y-8">
            <SectionHeading as="h2" title="Mission" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              InmateTextApp.com is a free, independent resource built to help families of incarcerated people navigate the complex world of prison communication. We cover every major provider, every service type, and thousands of facilities across the United States.
            </p>

            <SectionHeading as="h2" title="Where Our Data Comes From" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our facility and provider information is sourced directly from state Department of Corrections websites, the Federal Bureau of Prisons facility list, and official provider coverage pages. We review and update our data regularly to ensure accuracy. If you find an error, please contact us so we can correct it.
            </p>

            <SectionHeading as="h2" title="Our Editorial Standards" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              All guides on InmateTextApp.com are written and reviewed by our editorial team with a focus on accuracy, clarity, and practical usefulness for families. We do not accept payment for editorial coverage. Provider information reflects our independent research and is not sponsored content.
            </p>

            <SectionHeading as="h2" title="Contact Us" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Have a question, found an error, or want to suggest a facility or provider we should cover?
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <a href="mailto:contact@inmatetextapp.com" className="text-primary">contact@inmatetextapp.com</a>
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Last reviewed and updated: August 2026
            </p>
          </div>
        </PageWrapper>
      </section>
    </>
  )
}
