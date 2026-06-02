import type { Metadata } from "next"
import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Inmate Text App Terms of Service. This platform provides informational content only and is not affiliated with any correctional facility or communication provider.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <Breadcrumb items={[{ label: "Terms of Service" }]} />
          <div className="mt-4 max-w-2xl">
            <SectionHeading
              as="h1"
              title="Terms of Service"
              subtitle="The terms governing your use of Inmate Text App."
            />
            <p className="mt-2 text-xs text-muted-foreground">Last reviewed: June 2026</p>
          </div>
        </PageWrapper>
      </section>

      <section className="py-12">
        <PageWrapper>
          <div className="max-w-2xl space-y-10 text-sm leading-relaxed text-muted-foreground">

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Acceptance of Terms</h2>
              <p>
                By accessing or using Inmate Text App, you agree to these Terms of Service. If
                you do not agree with any part of these terms, please do not use this website.
              </p>
              <p>
                We may update these terms at any time. When we make changes, we will update the
                date at the top of this page. Continued use of the website after changes are
                posted means you accept the updated terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">What This Website Is</h2>
              <p>
                Inmate Text App is an independent information directory. We help families,
                friends, and legal contacts find communication options at correctional facilities
                across the United States.
              </p>
              <p>This website:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Provides general information about inmate communication services</li>
                <li>Lists and compares providers such as JPay, CorrLinks, ConnectNetwork, and others</li>
                <li>Describes correctional facilities and the communication options available at them</li>
                <li>Publishes guides and educational content about prison communication</li>
              </ul>
              <p>This website does not:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Send or receive messages on behalf of inmates or their contacts</li>
                <li>Access inmate accounts or prison management systems</li>
                <li>Process payments for any communication service</li>
                <li>Facilitate direct communication between inmates and anyone outside</li>
                <li>Replace any official communication provider or prison service</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Informational Use Only</h2>
              <p>
                All content on this website is provided for general informational purposes.
                Information about facilities, providers, pricing, and communication rules may
                change at any time without notice.
              </p>
              <p>
                Always verify current information directly with the correctional facility or
                communication provider before making decisions or spending money based on anything
                you read here.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">No Legal Advice</h2>
              <p>
                Nothing on this website is legal advice. We are not attorneys. We do not have a
                legal relationship with you. If you have legal questions about an incarcerated
                person, their rights, their case, or how to communicate with them in a legal
                context, consult a licensed attorney in the appropriate jurisdiction.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">No Relationship with Correctional Authorities</h2>
              <p>
                Inmate Text App has no affiliation with any federal, state, or local correctional
                facility, Department of Corrections, county jail, detention center, the Federal
                Bureau of Prisons, or any inmate communication provider.
              </p>
              <p>
                We cannot contact facilities on your behalf, influence communication policies,
                resolve account issues with providers, or intervene in any matter involving an
                incarcerated individual.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">User Responsibilities</h2>
              <p>When using this website, you agree to:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Use it only for lawful purposes</li>
                <li>Not attempt to disrupt, damage, or overload the website or its infrastructure</li>
                <li>Not attempt to gain unauthorized access to any part of the platform</li>
                <li>Provide accurate information when you subscribe to updates or create an account</li>
                <li>Not impersonate another person or entity</li>
                <li>Comply with all applicable federal, state, and local laws</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Website Availability</h2>
              <p>
                We work to keep this website available and running well, but we do not guarantee
                uninterrupted access. The website may be temporarily unavailable due to scheduled
                maintenance, unplanned outages, or circumstances outside our control such as
                infrastructure failures or connectivity issues.
              </p>
              <p>
                We are not responsible for any loss or inconvenience caused by planned or
                unplanned downtime.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Content Ownership and Intellectual Property</h2>
              <p>
                The written content, guides, design, and code of this website are owned by
                Inmate Text App. You may not reproduce, copy, scrape, or redistribute this
                content in any form without written permission.
              </p>
              <p>
                Provider names, logos, and trademarks belong to their respective companies. We
                reference these for identification and comparison purposes only. Our use of these
                names does not imply any endorsement by or affiliation with those companies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Third-Party Links</h2>
              <p>
                This website contains links to external websites including communication
                providers, government resources, and other information sources. These links are
                provided as a convenience.
              </p>
              <p>
                We do not control external websites. We are not responsible for their content,
                accuracy, availability, or privacy practices. Following a link means you leave
                Inmate Text App and are subject to the terms and policies of that destination
                site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Accuracy Disclaimer</h2>
              <p>
                We make reasonable efforts to provide accurate, current information. However, we
                cannot guarantee that all content is up to date at all times.
              </p>
              <p>
                Facility communication rules, provider pricing, approved services, and available
                features change regularly. Policies can differ between facilities even within the
                same provider network. We are not responsible for:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Outdated facility or provider information</li>
                <li>Errors or omissions in any content on this site</li>
                <li>Decisions made based on information here without verifying it directly</li>
                <li>Actions taken by third-party providers listed on this site</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, Inmate Text App and its
                owners, employees, and contributors are not liable for:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Direct or indirect damages resulting from your use of this website</li>
                <li>Losses related to your reliance on information published here</li>
                <li>Problems with third-party services linked from this website</li>
                <li>Interruptions, errors, or delays in website availability</li>
              </ul>
              <p>
                Since this website is free to use, our total liability to you for any claim is
                limited to zero dollars, to the extent permitted by law.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Changes to Services</h2>
              <p>
                We reserve the right to add, modify, or remove any feature or content on this
                platform at any time. We may change the scope of what we offer, introduce
                premium features in the future, or discontinue any part of the service.
              </p>
              <p>
                Where these changes affect existing users significantly, we will make a reasonable
                effort to provide advance notice.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Account Termination</h2>
              <p>
                If account features are available, we reserve the right to suspend or terminate
                accounts that violate these terms, use the platform for unlawful purposes, or
                engage in behavior that harms other users or the platform.
              </p>
              <p>
                You may delete your account at any time. Upon deletion, your personal data will
                be removed in accordance with our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Governing Law</h2>
              <p>
                These terms are governed by the laws of the United States. Any disputes arising
                from your use of this website will be handled in accordance with applicable
                federal law and the laws of the state in which Inmate Text App operates.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p>
                If you have questions about these Terms of Service or how they apply to your use
                of this website, contact us at:
              </p>
              <p className="font-medium text-foreground">support@inmatemessaging.com</p>
            </div>

            <div className="border-t pt-6 text-xs text-muted-foreground/70">
              <p>
                Related:{" "}
                <Link href="/privacy" className="underline hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>{" "}
                &middot;{" "}
                <Link href="/disclaimer" className="underline hover:text-foreground transition-colors">
                  Disclaimer
                </Link>
              </p>
            </div>

          </div>
        </PageWrapper>
      </section>
    </>
  )
}
