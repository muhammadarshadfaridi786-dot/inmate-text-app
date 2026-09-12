import type { Metadata } from "next"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = {
  title: "Contact Inmate Text App",
  description:
    "Contact Inmate Text App with questions, corrections, or facility suggestions. Free prison communication directory serving families across all 50 states.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="mt-4 max-w-2xl">
            <SectionHeading
              as="h1"
              title="Contact Inmate Text App"
              subtitle="Have a question, found an error, or want to suggest a facility or provider we should cover?"
            />
          </div>
        </PageWrapper>
      </section>

      <section className="py-12">
        <PageWrapper>
          <div className="max-w-2xl space-y-10">

            <div className="space-y-4">
              <h2 className="text-base font-semibold text-foreground">Get in Touch</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Inmate Text App is a free directory maintained to help families navigate prison
                communication. We read every message and do our best to respond within two to
                three business days.
              </p>
              <div className="rounded-lg border p-6 space-y-2">
                <p className="text-sm font-medium text-foreground">Email</p>
                <a
                  href="mailto:contact@inmatetextapp.com"
                  className="text-primary text-sm hover:underline"
                >
                  contact@inmatetextapp.com
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-base font-semibold text-foreground">What We Can Help With</h2>
              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium text-foreground mb-1">Corrections and Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    If you find outdated or incorrect information about a facility or provider,
                    let us know and we will review and update it promptly.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium text-foreground mb-1">Missing Facilities or Providers</h3>
                  <p className="text-sm text-muted-foreground">
                    If a facility or provider is not in our directory, send us the name and
                    location and we will add it to our review list.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium text-foreground mb-1">General Questions</h3>
                  <p className="text-sm text-muted-foreground">
                    If you have a question about how prison communication works, check our
                    guides first. If your question is not covered, send us a message and
                    we will do our best to point you in the right direction.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium text-foreground mb-1">Partnership and Media Inquiries</h3>
                  <p className="text-sm text-muted-foreground">
                    For partnership, media, or press inquiries, use the same email address
                    and include the nature of your inquiry in the subject line.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-base font-semibold text-foreground">What We Cannot Help With</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Inmate Text App is an information directory only. We are not affiliated with
                any correctional facility, government agency, or communication provider. We
                cannot help with:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                <li>Account issues with JPay, CorrLinks, ConnectNetwork, Securus, or any other provider</li>
                <li>Blocked messages or communication restrictions at specific facilities</li>
                <li>Inmate location or status inquiries</li>
                <li>Legal advice or representation</li>
                <li>Contacting correctional facilities on your behalf</li>
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For provider account issues, contact the provider directly. For facility
                questions, contact the facility. For legal matters, consult a licensed attorney.
              </p>
            </div>

            <div className="rounded-lg bg-muted/50 p-4 space-y-2">
              <p className="text-sm font-medium text-foreground">Response Time</p>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all messages within two to three business days. For
                urgent corrections to facility or provider information, please include
                CORRECTION in your subject line and we will prioritize your message.
              </p>
            </div>

          </div>
        </PageWrapper>
      </section>
    </>
  )
}
